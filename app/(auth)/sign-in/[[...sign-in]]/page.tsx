import { ROUTES } from "@/lib/constants/routes";
import { SignIn } from "@clerk/nextjs";

export default function Page() {
  return (
    <main className="grid place-items-center pt-4">
      <SignIn redirectUrl={ROUTES.DASHBOARD} />
    </main>
  );
}