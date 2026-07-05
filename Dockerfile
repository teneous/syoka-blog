FROM public.ecr.aws/docker/library/node:22-slim AS base
WORKDIR /app

FROM base AS deps
RUN apt-get update && apt-get install -y --no-install-recommends \
    libc6 \
    && rm -rf /var/lib/apt/lists/*
RUN npm install -g pnpm@10.7.1
COPY package.json pnpm-lock.yaml pnpm-workspace.yaml ./
COPY patches ./patches

RUN --mount=type=cache,id=pnpm-store,target=/pnpm/store \
    pnpm config set store-dir /pnpm/store && \
    pnpm install --frozen-lockfile --shamefully-hoist

FROM deps AS builder
COPY . .

ENV NODE_OPTIONS="--max-old-space-size=4096"
RUN pnpm run build


FROM base AS runner

ENV NODE_ENV=production

RUN groupadd --system --gid 1001 nodejs
RUN useradd --system --uid 1001 --gid nodejs nextjs

COPY --from=builder /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs

EXPOSE 3000

ENV PORT=3000

ENV HOSTNAME="0.0.0.0"
CMD ["node", "server.js"]
