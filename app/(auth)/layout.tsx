import { getUserAuth } from "@/lib/auth/utils";
import { redirect } from "next/navigation";
import { ClerkProvider } from "@clerk/nextjs";
import { dark } from "@clerk/themes";
export default async function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getUserAuth();
  if (session?.session) redirect("/dashboard");

  return (
    <div className="bg-muted h-screen pt-24">
      <ClerkProvider>{children}</ClerkProvider>
    </div>);
}
