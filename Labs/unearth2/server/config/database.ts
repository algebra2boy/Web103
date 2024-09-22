import pg, { PoolConfig } from 'pg';

const config: PoolConfig = {
    user: process.env.PGUSER,
    password: process.env.PGPASSWORD,
    host: process.env.PGHOST,
    port: Number(process.env.PGPORT),
    database: process.env.PGDATABASE
}

export const pool = new pg.Pool(config);