"use client";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import Link from "next/link";
import { FormEvent, useState } from "react";
import { signIn } from "next-auth/react";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const handleSubmitForm=(e:FormEvent)=>{
e.preventDefault()
  }               
  return (
    <div className="h-screen flex justify-center items-center">
      <Card className="w-[350px]">
        <CardHeader className="text-xl font-bold">Login</CardHeader>
        <form onSubmit={handleSubmitForm} className="flex flex-col gap-4 p-4">
          <Input
            onChange={(e) => setEmail(e.target.value)}
            type="text"
            placeholder="Email"
            name="email"
          />
          <Input
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="Password"
            name="password"
          />
          <Button variant={"default"}>Login</Button>
          {error && <CardDescription>{error}</CardDescription>}
          <CardFooter className="flex gap-4">
            Dont have account?
            <Link href={"/signup"}>
              <CardTitle className="cursor-pointer hover:text-gray-700">
                Sign Up
              </CardTitle>
            </Link>
          </CardFooter>
        </form>
      </Card>
    </div>
  );
};

export default Login;
