<?php

namespace App\Http\Controllers;

use App\Models\Project;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ProjectController extends Controller
{
    public function index()
    {
        $projects = Project::orderBy('created_at', 'desc')->get();
        
        // Decode JSON languages for each project
        $projects->transform(function ($project) {
            $project->languages = is_string($project->languages) ? json_decode($project->languages) : $project->languages;
            return $project;
        });

        return Inertia::render('Projects', [
            'projects' => $projects
        ]);
    }

    public function admin()
    {
        return Inertia::render('Admin');
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'title' => 'required|string|max:255',
            'description' => 'nullable|string',
            'image_url' => 'nullable|url',
            'live_link' => 'nullable|string',
            'github_link' => 'nullable|url',
            'languages' => 'nullable|array',
            'languages.*' => 'string',
            'project_zip' => 'nullable|file|mimes:zip|max:51200'
        ]);

        $liveLink = $validated['live_link'] ?? null;

        if ($request->hasFile('project_zip')) {
            $zipFile = $request->file('project_zip');
            $slug = \Illuminate\Support\Str::slug($validated['title']);
            $extractPath = public_path("projects/{$slug}");
            
            if (!file_exists($extractPath)) {
                mkdir($extractPath, 0755, true);
            }

            $zip = new \ZipArchive;
            if ($zip->open($zipFile->path()) === TRUE) {
                $zip->extractTo($extractPath);
                $zip->close();
                
                if (!$liveLink) {
                    $liveLink = "/projects/{$slug}/index.html";
                }
            }
        }

        $project = new Project();
        $project->title = $validated['title'];
        $project->description = $validated['description'] ?? null;
        $project->image_url = $validated['image_url'] ?? null;
        $project->live_link = $liveLink;
        $project->github_link = $validated['github_link'] ?? null;
        $project->languages = isset($validated['languages']) ? json_encode($validated['languages']) : null;
        $project->save();

        return redirect()->back()->with('success', 'Project created successfully.');
    }
}
