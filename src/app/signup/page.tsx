import SignUpForm from "@/components/signUpForm/SignUpForm";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOption } from "@/utils/authOptions";
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
