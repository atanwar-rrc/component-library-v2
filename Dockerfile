# Build stage
FROM node:20 as build

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .
RUN npm run build

# Production stage
FROM nginx:alpine

# Copy the build files to the custom directory
COPY --from=build /app/build /Tanwar_Abhi_ui_garden
COPY nginx.conf /etc/nginx/nginx.conf


EXPOSE 8083

CMD ["nginx", "-g", "daemon off;"]
