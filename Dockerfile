# Stage 1: Build assets using Node.js
FROM node:20-alpine AS node-builder
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

# Stage 2: Production PHP application server
FROM serversideup/php:8.3-fpm-nginx

# Switch to root user to perform setup
USER root

# Install system dependencies if needed (e.g. zip for file uploads)
RUN apt-get update && apt-get install -y unzip && rm -rf /var/lib/apt/lists/*

# Copy project files to the root directory
COPY --chmod=755 . /var/www/html

# Copy compiled frontend assets from Node stage
COPY --from=node-builder --chmod=755 /app/public/build /var/www/html/public/build

# Install PHP dependencies using Composer
ENV COMPOSER_ALLOW_SUPERUSER 1
RUN composer install --no-dev --optimize-autoloader --no-interaction

# Set proper ownership and permissions for Laravel writable directories
RUN chown -R www-data:www-data /var/www/html/storage /var/www/html/bootstrap/cache \
    && chmod -R 775 /var/www/html/storage /var/www/html/bootstrap/cache

# Switch back to the standard web user (www-data)
USER www-data
