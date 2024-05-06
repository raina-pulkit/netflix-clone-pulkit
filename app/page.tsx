import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="m-5">
      <div className="text-4xl">NETFLIX CLONE</div>
      <Button>
        <Link href="/login">Netlfix Nigga</Link>
      </Button>
    </div>
  );
}
