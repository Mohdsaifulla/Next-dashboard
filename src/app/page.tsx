import Login from "@/components/login/Login";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOption } from "@/utils/authOptions";
export default async function Home() {
  const session = await getServerSession(authOption);
  if (session) {
    redirect("/dashboard");
  }
  return (
    <main>
      <Login />
    </main>
  );
}
