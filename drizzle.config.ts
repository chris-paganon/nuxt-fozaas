import { defineConfig } from 'drizzle-kit';

export default defineConfig({
  dialect: 'postgresql',
  schema: './server/db/schema.ts',
  out: './server/db/migrations',
  dbCredentials: {
    host: 'localhost',
    port: 5432,
    user: 'nuxt-fozaas',
    database: 'nuxt-fozaas',
    password: 'password',
    ssl: false,
  },
  verbose: true,
  strict: true,
});
