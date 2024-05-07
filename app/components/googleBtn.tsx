"use client";

import { Button } from "@/components/ui/button";
import { signIn } from "next-auth/react";
import GoogleIcon from '../../public/images/google.svg';
import Image from "next/image";

export function GoogleSignInButton() {
  return (
    <Button onClick={() => signIn("google")} variant={"outline"} size={"icon"}>
      <Image src={GoogleIcon} alt="Google Logo" priority />
    </Button>
  );
}
