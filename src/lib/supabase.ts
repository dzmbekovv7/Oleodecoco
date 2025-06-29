import { createClient } from '@supabase/supabase-js'

// const supabaseKey = import.meta.env.VITE_SUPAKEY
const supabaseKey = `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtjbXlnbmdycWVmbnl3ZHJqeHB6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTAwNjc4NjMsImV4cCI6MjA2NTY0Mzg2M30.Yj-wKf_Bcq22A8YjmdDDnG37nZJh_vLBrl3NxTObI5k`

// export const supabaseUrl = import.meta.env.VITE_SUPAURL
export const supabaseUrl = `https://kcmygngrqefnywdrjxpz.supabase.co`
export const supabase = createClient(supabaseUrl!, supabaseKey!)
