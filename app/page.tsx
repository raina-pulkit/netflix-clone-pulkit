import { Button } from "@/components/ui/button";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/utils/auth";
import { Input } from "@/components/ui/input";
import { ChevronRight } from "lucide-react";
import { redirect } from "next/navigation";

export default async function Home() {
  const session = await getServerSession(authOptions);

  if (session) redirect("/home");

  return (
    <section className="h-screen w-full">
      <div className="relative w-full h-full flex flex-col justify-center items-center">
        <div className="w-full h-2/4 mt-20 flex flex-col gap-6 text-center px-20">
          <h1 className="text-6xl font-extrabold">
            Unlimited movies, TV shows and more
          </h1>
          <h2 className="text-lg">Watch anywhere. Cancel anytime.</h2>
          <div>
            Ready to watch? Enter your email to create or restart your
            membership.
          </div>

          <div className="flex flex-col md:flex-row w-full items-center space-x-2 gap-4 md:gap-8 px-20">
            <Input
              type="email"
              placeholder="Email"
              className="opacity-80 bg-black p-6 py-8 placeholder:text-white placeholder:text-lg outline-none focus:outline-none"
            />
            <Button className="w-full flex-1 py-7 bg-[#e50914] text-xl text-white hover:text-black">
              Get Started <ChevronRight />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
