-- Add phone number column to waitlist table
ALTER TABLE waitlist ADD COLUMN IF NOT EXISTS phone TEXT;

-- Create index for phone lookups
CREATE INDEX IF NOT EXISTS waitlist_phone_idx ON waitlist(phone);
