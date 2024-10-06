import pg from "pg";

const url = process.env.DATABASE_URL;

export const pool = new pg.Pool({ connectionString: url });
