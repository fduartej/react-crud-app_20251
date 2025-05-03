# Etapa 1: Build
FROM node:20-alpine AS build

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .
RUN npm run build

# Etapa 2: Servir con Nginx
FROM nginx:alpine

# Elimina configuración default de nginx
RUN rm -rf /usr/share/nginx/html/*

# Copia el build al directorio público de nginx
COPY --from=build /app/build /usr/share/nginx/html

# Copia config opcional de nginx (no obligatorio)
# COPY nginx.conf /etc/nginx/nginx.conf

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
