import SignUpForm from "@/components/signUpForm/SignUpForm";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOption } from "../api/auth/[...nextauth]/route";
const Signup = async () => {
  const session = await getServerSession(authOption);
  if (session) redirect("/dashboard");
  return (
    <div>
      <SignUpForm />
    </div>
  );
};

export default Signup;
