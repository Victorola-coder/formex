import { SignIn } from "@clerk/nextjs";

export default function SignInPage() {
  return (
    <section
      className={`flex flex-col items-center justify-center min-h-screen p-3 gap-3`}
    >
      <div className="text-xl font-semibold sm:text-2xl">
        Login to your fudwud account
      </div>
      <SignIn />
    </section>
  );
}
