"use client";
import {useToast} from "@/hooks/use-toast";
import {SignOutButton} from "@clerk/nextjs";
import Link from "next/link";

function SignOutLink() {
  const {toast} = useToast();

  const handleLogOut = () => {
    toast({description: "Logout Successfully"});
  };

  return (
    <SignOutButton>
      <Link href="/" className="" onClick={handleLogOut}>
        Logout
      </Link>
    </SignOutButton>
  );
}

export default SignOutLink;
