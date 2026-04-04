-- Create waitlist table for storing email signups
CREATE TABLE IF NOT EXISTS waitlist (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  email TEXT NOT NULL UNIQUE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Enable Row Level Security
ALTER TABLE waitlist ENABLE ROW LEVEL SECURITY;

-- Allow anyone to insert (for public signups)
CREATE POLICY "Allow public inserts" ON waitlist 
  FOR INSERT 
  WITH CHECK (true);

-- Only allow service role to read (for admin dashboard later)
CREATE POLICY "Allow service role to read" ON waitlist 
  FOR SELECT 
  USING (auth.role() = 'service_role');
