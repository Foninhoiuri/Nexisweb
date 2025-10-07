# Stage 1: Build do React
FROM node:18 AS build

WORKDIR /app

# Copia package.json e instala dependências
COPY package*.json ./
RUN npm install --silent

# Copia todo o projeto e gera build
COPY . .
RUN npm run build

# Stage 2: Servir com Nginx
FROM nginx:stable-alpine

# Limpa diretório padrão do Nginx
RUN rm -rf /usr/share/nginx/html/*

# Copia build do React para o Nginx
COPY --from=build /app/build /usr/share/nginx/html

# Copia configuração customizada do Nginx
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Porta do container (Easypanel pode mapear para externa 5465)
EXPOSE 80

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]
