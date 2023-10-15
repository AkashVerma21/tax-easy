# Base image
FROM node:14 as build

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package.json package-lock.json ./

# Install dependencies
RUN npm ci --production

# Copy project files
COPY . .

# Build the React app
RUN npm run build

# Production image
FROM nginx:latest

# Copy built app from the build stage
COPY --from=build /app/build /usr/share/nginx/html

# Copy Nginx configuration file
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expose port 443 for HTTPS
EXPOSE 443

# Start Nginx server
CMD ["nginx", "-g", "daemon off;"]
