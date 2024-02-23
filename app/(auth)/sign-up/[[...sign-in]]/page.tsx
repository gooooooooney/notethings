import { ROUTES } from "@/lib/constants/routes";
import { SignUp } from "@clerk/nextjs";

export default function Page() {
  return (
    <main className="grid place-items-center pt-4">
      <SignUp redirectUrl={ROUTES.DASHBOARD} />
    </main>
  );
}