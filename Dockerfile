FROM nginx:1.25-alpine

# Remove default nginx content
RUN rm -rf /usr/share/nginx/html/*

# Copy site content into image
COPY ./site/ /usr/share/nginx/html/

# Add custom nginx config (optional)
COPY ./nginx/default.conf /etc/nginx/conf.d/default.conf

# Run nginx in foreground
CMD ["nginx", "-g", "daemon off;"]