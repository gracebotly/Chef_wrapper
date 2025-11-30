import { json } from '@vercel/remix';
import type { ActionFunctionArgs } from '@vercel/remix';

export async function action({ request }: ActionFunctionArgs) {
  // Version checking disabled - requires VERCEL_TOKEN and proper API configuration
  // This can be re-enabled later once authentication issues are resolved
  return json({ sha: null }, { status: 200 });
}
