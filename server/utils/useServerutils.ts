// import { pgTable, serial, text, varchar } from 'drizzle-orm/pg-core';
import { drizzle } from 'drizzle-orm/node-postgres';
import pg from 'pg';

export function getDrizzleDb() {
  const pool = new pg.Pool({
    host: 'localhost',
    port: 5432,
    user: 'nuxt-fozaas',
    database: 'nuxt-fozaas',
    password: 'password',
  });

  return drizzle(pool);
}
