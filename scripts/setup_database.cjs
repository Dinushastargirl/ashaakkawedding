const { Client } = require('pg');

process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";

const connectionString = "postgres://postgres.ikwgomwitmscyrattzng:2E6jHxCLJDltK6UJ@aws-0-us-east-1.pooler.supabase.com:6543/postgres";

async function setup() {
  const client = new Client({
    connectionString,
    ssl: { rejectUnauthorized: false }
  });

  try {
    console.log("Connecting to Supabase PostgreSQL database...");
    await client.connect();
    console.log("Connected successfully!");

    const sql = `
      CREATE TABLE IF NOT EXISTS public.rsvps (
          id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
          name TEXT NOT NULL,
          guests TEXT NOT NULL DEFAULT '1',
          attendance TEXT NOT NULL,
          message TEXT,
          created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
      );

      ALTER TABLE public.rsvps ENABLE ROW LEVEL SECURITY;

      DROP POLICY IF EXISTS "Allow anonymous insert into rsvps" ON public.rsvps;
      CREATE POLICY "Allow anonymous insert into rsvps" 
      ON public.rsvps 
      FOR INSERT 
      TO anon, authenticated
      WITH CHECK (true);

      DROP POLICY IF EXISTS "Allow select for anon" ON public.rsvps;
      CREATE POLICY "Allow select for anon" 
      ON public.rsvps 
      FOR SELECT 
      TO anon, authenticated
      USING (true);
    `;

    await client.query(sql);
    console.log("Table 'rsvps' and Row Level Security policies created successfully!");

    const res = await client.query("SELECT count(*) FROM public.rsvps;");
    console.log("Current row count in rsvps:", res.rows[0].count);

  } catch (err) {
    console.error("Error setting up database:", err);
  } finally {
    await client.end();
  }
}

setup();
