# Imagem base do Node.js
FROM node:20-alpine AS base

# Define o diretório de trabalho dentro do container
WORKDIR /app

# Estágio de instalação de dependências
FROM base AS deps

# Copia apenas os arquivos de dependências primeiro
COPY package.json package-lock.json* ./

# Instala as dependências
RUN npm ci

# Estágio de build
FROM base AS builder

# Copia as dependências já instaladas do estágio anterior
COPY --from=deps /app/node_modules ./node_modules

# Copia todo o código do projeto
COPY . .

# Executa o build do Next.js
RUN npm run build

# Estágio de produção
FROM base AS runner

# Define variável de ambiente para produção
ENV NODE_ENV=production

# Cria um usuário não-root por segurança
RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

# Copia os arquivos necessários do estágio builder
COPY --from=builder /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

# Muda para o usuário não-root
USER nextjs

# Expõe a porta 3000
EXPOSE 3000

# Define a variável de porta
ENV PORT=3000

# Comando para iniciar a aplicação
CMD ["node", "server.js"]
