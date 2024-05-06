import Image from "next/image";
import { ReactNode } from "react";
import BackgroundImage from "../../public/images/login_background.jpg";
import Logo from "../../public/images/netflix_logo.svg";

const AuthLayout = ({ children }: { children: ReactNode }) => (
  <div className="relative flex flex-col h-screen w-screen bg-black md:items-center md:justify-center md:bg-transparent">
    <Image
      src={BackgroundImage}
      alt="Background Image"
      className="overflow-hidden hidden sm:flex sm:object-cover sm:-z-10 brightness-50"
      priority //Renders this image on priority and then everything else
      fill
    />

    <Image
      src={Logo}
      alt="Netflix Logo"
      className="absolute left-4 top-4 object-contain md:left-10 md:top-6"
      width={120}
      height={120}
    />
    {children}
  </div>
);

export default AuthLayout;
