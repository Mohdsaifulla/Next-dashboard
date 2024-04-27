"use client";
import { Button } from "../ui/button";
import { signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
const DashboardUi = () => {
  const { data: session } = useSession();
  const router = useRouter();
  const hanldeSingOut = async () => {
    signOut();
    // signOut({ callbackUrl: 'http://localhost:3000/dashboard' })
    // signOut({ redirect: false }).then(() => {
    //   router.push("/");
    // });
  };
  // console.log(session)
  return (
    <div className="h-screen flex justify-center items-center">
      <h1 className="text-black">{session?.user?.name}</h1>
      <Button onClick={hanldeSingOut}>Logout</Button>
    </div>
  );
};

export default DashboardUi;
