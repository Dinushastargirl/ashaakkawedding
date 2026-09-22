import { createClient } from '@supabase/supabase-js';

const env = (import.meta as unknown as { env?: Record<string, string> })?.env || {};

const supabaseUrl = env.VITE_SUPABASE_URL || "https://ikwgomwitmscyrattzng.supabase.co";
const supabaseAnonKey = env.VITE_SUPABASE_ANON_KEY || "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imlrd2dvbXdpdG1zY3lyYXR0em5nIiwicm9sZSI6ImFub24iLCJpYXQiOjE3OTAwNTYxMjAsImV4cCI6MjEwNTYzMjEyMH0.9muAGQG_Bb7vRmcHHF95tyZkAY5mNmT6mmxDN87QGJw";

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export interface RSVPRecord {
  id?: string;
  name: string;
  guests: string;
  attendance: 'attending' | 'declining';
  message?: string;
  created_at?: string;
}
