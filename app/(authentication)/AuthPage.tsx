import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import GithubSignInButton from "../components/githubBtn";
import GoogleSignInButton from "../components/googleBtn";

const AuthPage = ({ type }: { type: string }) => (
  <div className="mt-24 rounded bg-black/80 py-10 px-6 md:mt-0 md:max-w-sm md:px-14">
    <form action="">
      <h1 className="text-3xl font-semibold text-white text-center">{type}</h1>
      <div className="space-y-4 mt-5 flex flex-col justify-center items-center">
        <Input
          type="email"
          name="email"
          placeholder="Email"
          className="bg-slate-600 placeholder:text-xs placeholder:text-gray-400 w-2/4 md:w-full inline-block"
        />
        <Input
          type="password"
          name="password"
          placeholder="Password"
          className="bg-slate-600 placeholder:text-xs placeholder:text-gray-400 w-2/4 md:w-full inline-block"
        />
        <Button
          className="w-2/4 md:w-full bg-[#e50914]"
          variant={"destructive"}
          type="submit"
        >
          {type === "Sign Up" ? "Sign Up" : "Login"}
        </Button>
      </div>
    </form>

    <div className="text-sm mt-3 text-gray-600 text-center">
      {type === "Sign Up" ? (
        <>
          Already have an account?{" "}
          <Link href={"/login"} className="text-white hover:underline">
            Login in now!
          </Link>
        </>
      ) : (
        <>
          Don't have an accout?{" "}
          <Link href={"/sign-up"} className="text-white hover:underline">
            Sign Up now!
          </Link>
        </>
      )}
    </div>

    <div className="flex w-full justify-center items-center gap-x-3 mt-6">
      <GithubSignInButton />
      <GoogleSignInButton />
    </div>
  </div>
);

export default AuthPage;
