import { User, createClient } from "@supabase/supabase-js";
import { ExtensionContext } from "vscode";

const ANON_KEY = `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InpwemR4cHBwZ2phY3VxcGxqbG51Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTA5NDM1NjUsImV4cCI6MjAyNjUxOTU2NX0.tx1ejXMSQ0n5MDWeU3V31Efv_6B9Jww9vScZUkLnbvY`;
const SUPABASE_URL = `https://zpzdxpppgjacuqpljlnu.supabase.co`;

export const supabase = createClient(SUPABASE_URL, ANON_KEY);

export async function getUser(
  context: ExtensionContext
): Promise<{ user: User } | { user: null }> {
  const token = await context.secrets.get("access_token");
  const refresh_token = await context.secrets.get("refresh_token");
  let { data, error } = await supabase.auth.getUser(token);

  console.log("Data: ", data);
  console.log("Error: ", error);

  if (error) {
    const response = await supabase.auth.refreshSession({
      refresh_token: refresh_token!,
    });
    console.log("Response: ", response);
    const token = response.data.session?.access_token;

    const { data, error } = await supabase.auth.getUser(token);

    if (error) {
      context.secrets.delete("supabase.sessions");
      await supabase.auth.signOut();

      return { user: null };
    } else {
      console.log("Data: ", data);
      console.log("Error: ", error);

      return data.user ? { user: data.user } : { user: null };
    }
  }

  return data.user ? { user: data.user } : { user: null };
}
