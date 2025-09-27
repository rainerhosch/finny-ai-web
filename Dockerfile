# Tahap 1: Build Aplikasi Next.js
# Gunakan image Node.js yang ringan sebagai dasar
FROM node:20-alpine AS builder

# Atur direktori kerja di dalam container
WORKDIR /app

# Salin file package.json dan package-lock.json (atau yarn.lock)
# Ini memungkinkan Docker untuk cache instalasi dependensi
COPY package.json yarn.lock ./

# Instal dependensi proyek
RUN yarn install --frozen-lockfile

# Salin semua file proyek ke dalam direktori kerja
COPY . .

# Buat build produksi dari aplikasi Next.js
# Next.js akan menghasilkan folder `.next`
RUN yarn build

# Tahap 2: Jalankan Aplikasi Next.js
# Gunakan image Node.js yang lebih kecil untuk menjalankan aplikasi
FROM node:20-alpine AS runner

# Atur direktori kerja
WORKDIR /app

# Non-aktifkan telemetry Next.js
ENV NEXT_TELEMETRY_DISABLED 1

# Salin file yang dibutuhkan dari tahap builder
COPY --from=builder /app/package.json ./package.json
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public

# Ekspos port 3000
EXPOSE 3000

# Jalankan aplikasi Next.js
CMD ["yarn", "start"]