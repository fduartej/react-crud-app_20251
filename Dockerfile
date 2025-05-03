# Etapa 1: construir React
FROM node:20-alpine AS build

WORKDIR /app
COPY package*.json ./
RUN npm install

COPY . .

# ← Agrega esto:
ENV NODE_OPTIONS=--openssl-legacy-provider

RUN npm run build

# Etapa 2: servir usando 'serve'
FROM node:20-alpine

WORKDIR /app
RUN npm install -g serve

COPY --from=build /app/build ./build

EXPOSE 3000
CMD ["serve", "-s", "build", "-l", "3000"]
