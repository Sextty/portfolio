import { useState } from "react";
import { useForm } from "@inertiajs/react";
import Layout from "../Layouts/Layout";

export default function Admin() {
  const { data, setData, post, processing, errors, reset } = useForm({
    title: "",
    description: "",
    image_url: "",
    live_link: "",
    github_link: "",
    languages: [] as string[],
    project_zip: null as File | null,
  });

  const [tagInput, setTagInput] = useState("");
  const [success, setSuccess] = useState(false);

  const addTag = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && tagInput.trim() !== "") {
      e.preventDefault();
      if (!data.languages.includes(tagInput.trim())) {
        setData("languages", [...data.languages, tagInput.trim()]);
      }
      setTagInput("");
    }
  };

  const removeTag = (tagToRemove: string) => {
    setData("languages", data.languages.filter(tag => tag !== tagToRemove));
  };

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    post("/projects", {
      onSuccess: () => {
        reset();
        setSuccess(true);
        setTimeout(() => setSuccess(false), 3000);
      },
    });
  };

  return (
    <Layout>
      <section className="py-32 px-6">
        <div className="max-w-3xl mx-auto">
          <div className="mb-12">
            <p className="font-mono text-[11px] tracking-[0.2em] uppercase text-[#60a5fa] mb-3">
              Admin Interface
            </p>
            <h2 className="font-display text-4xl font-extrabold text-foreground">
              Add New Project
            </h2>
          </div>

          <form onSubmit={submit} className="space-y-6">
            {success && (
              <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-sm">
                Project successfully added!
              </div>
            )}

            <div className="grid grid-cols-1 gap-6">
              <div>
                <label className="block font-mono text-[11px] tracking-widest uppercase text-muted-foreground mb-2">
                  Project Title *
                </label>
                <input
                  type="text"
                  required
                  value={data.title}
                  onChange={(e) => setData("title", e.target.value)}
                  className="w-full px-4 py-3 rounded-xl bg-secondary border border-border text-foreground text-sm focus:border-[#3b82f6]/50 focus:ring-1 focus:ring-[#3b82f6]/25 outline-none"
                />
                {errors.title && <div className="text-red-400 mt-1 text-xs">{errors.title}</div>}
              </div>

              <div>
                <label className="block font-mono text-[11px] tracking-widest uppercase text-muted-foreground mb-2">
                  Description
                </label>
                <textarea
                  rows={4}
                  value={data.description}
                  onChange={(e) => setData("description", e.target.value)}
                  className="w-full px-4 py-3 rounded-xl bg-secondary border border-border text-foreground text-sm focus:border-[#3b82f6]/50 outline-none"
                />
              </div>

              <div>
                <label className="block font-mono text-[11px] tracking-widest uppercase text-muted-foreground mb-2">
                  Image URL
                </label>
                <input
                  type="text"
                  value={data.image_url}
                  onChange={(e) => setData("image_url", e.target.value)}
                  placeholder="https://..."
                  className="w-full px-4 py-3 rounded-xl bg-secondary border border-border text-foreground text-sm focus:border-[#3b82f6]/50 outline-none"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block font-mono text-[11px] tracking-widest uppercase text-muted-foreground mb-2">
                    Live Link
                  </label>
                  <input
                    type="text"
                    value={data.live_link}
                    onChange={(e) => setData("live_link", e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-secondary border border-border text-foreground text-sm focus:border-[#3b82f6]/50 outline-none"
                  />
                </div>
                <div>
                  <label className="block font-mono text-[11px] tracking-widest uppercase text-muted-foreground mb-2">
                    GitHub Link
                  </label>
                  <input
                    type="text"
                    value={data.github_link}
                    onChange={(e) => setData("github_link", e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-secondary border border-border text-foreground text-sm focus:border-[#3b82f6]/50 outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block font-mono text-[11px] tracking-widest uppercase text-muted-foreground mb-2">
                  Programming Languages & Tags
                </label>
                <div className="flex flex-wrap gap-2 mb-3">
                  {data.languages.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 rounded-full text-xs font-mono font-medium bg-blue-500/10 text-blue-300 border border-blue-500/20 flex items-center gap-2"
                    >
                      {tag}
                      <button
                        type="button"
                        onClick={() => removeTag(tag)}
                        className="hover:text-white"
                      >
                        ×
                      </button>
                    </span>
                  ))}
                </div>
                <input
                  type="text"
                  value={tagInput}
                  onChange={(e) => setTagInput(e.target.value)}
                  onKeyDown={addTag}
                  placeholder="Type a language and press Enter"
                  className="w-full px-4 py-3 rounded-xl bg-secondary border border-border text-foreground text-sm focus:border-[#3b82f6]/50 outline-none"
                />
                {errors.languages && <div className="text-red-400 mt-1 text-xs">{errors.languages}</div>}
              </div>

              <div>
                <label className="block font-mono text-[11px] tracking-widest uppercase text-muted-foreground mb-2">
                  Upload Project (.zip)
                </label>
                <div className="relative">
                  <input
                    type="file"
                    accept=".zip"
                    onChange={(e) => setData("project_zip", e.target.files ? e.target.files[0] : null)}
                    className="w-full px-4 py-3 rounded-xl bg-secondary border border-border text-foreground text-sm focus:border-[#3b82f6]/50 outline-none file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-500/10 file:text-blue-400 hover:file:bg-blue-500/20"
                  />
                </div>
                <p className="text-xs text-muted-foreground mt-2">
                  Uploading a .zip will automatically extract the project and set the Live Link.
                </p>
                {/* @ts-ignore - project_zip errors handled by Laravel */}
                {errors.project_zip && <div className="text-red-400 mt-1 text-xs">{errors.project_zip}</div>}
              </div>

              <button
                type="submit"
                disabled={processing}
                className="w-full py-4 rounded-xl text-sm font-semibold text-white bg-blue-600 hover:bg-blue-500 disabled:opacity-50 transition-colors"
              >
                {processing ? "Saving..." : "Save Project"}
              </button>
            </div>
          </form>
        </div>
      </section>
    </Layout>
  );
}
