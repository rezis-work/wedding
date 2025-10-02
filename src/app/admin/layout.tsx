// app/admin/layout.tsx
import { headers } from "next/headers";

export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Don't check authentication in layout - let individual pages handle it
  // This prevents auth errors on login page
  return <>{children}</>;
}
