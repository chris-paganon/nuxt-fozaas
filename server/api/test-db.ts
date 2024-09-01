import { countries } from '../db/schema';

export default defineEventHandler(async () => {
  const db = getDrizzleDb();

  const countriesRows = db.select().from(countries);
  return countriesRows;
});
