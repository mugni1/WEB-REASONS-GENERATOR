FROM node:20-alpine

RUN npm install -g pnpm
WORKDIR /app

# 1. Salin file manifest dependency
COPY package.json pnpm-lock.yaml ./

# 2. Install HANYA production dependencies (ringan & hemat RAM)
RUN pnpm install --prod --frozen-lockfile

# 3. Salin folder dist (hasil build lokal) dan file pendukung
COPY dist ./dist

# Ekspos port aplikasi
EXPOSE 4173

# Jalankan aplikasi
CMD ["pnpm", "preview"]