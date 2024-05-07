import Image from "next/image";
import { ReactNode } from "react";
import BackgroundImage from "../../public/images/login_background.jpg";
import { getServerSession } from "next-auth";
import { authOptions } from "../utils/auth";
import { redirect } from "next/navigation";

const AuthLayout = async ({ children }: { children: ReactNode }) => {
  const session = await getServerSession(authOptions);
  if(session) redirect("/home");

  return (
    <div className="relative flex flex-col h-screen w-screen bg-black md:items-center md:justify-center md:bg-transparent">
      <Image
        src={BackgroundImage}
        alt="Background Image"
        className="overflow-hidden hidden sm:flex sm:object-cover sm:-z-10 brightness-50"
        priority //Renders this image on priority and then everything else
        fill
      />
      {children}
    </div>
  );
}

export default AuthLayout;
