import { getUserAuth } from "@/lib/auth/utils";
import { redirect } from "next/navigation";
import { ClerkProvider } from "@clerk/nextjs";
export default async function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getUserAuth();
  if (session?.session) redirect("/w");

  return (
    <div className="bg-muted h-screen pt-24">
      <ClerkProvider>{children}</ClerkProvider>
    </div>);
}
