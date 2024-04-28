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
import { useRouter } from "next/navigation";
import toast, { Toaster } from "react-hot-toast";
const SignUpForm = () => {
  const router = useRouter();
  const [inputField, setInputField] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  const notify = () =>
    toast("You are Signed Up now Please login with same detail");
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!inputField.email || !inputField.name || !inputField.password) {
      setError("Fill all input field");
      return;
    }
    try {
      const resMatchUser = await fetch("api/matchUser", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email: inputField.email }),
      });
      const { user } = await resMatchUser.json();
      if (user) {
        setError("User already Exists");
        return;
      }
      const res = await fetch("api/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: inputField.name,
          email: inputField.email,
          password: inputField.password,
        }),
      });
      if (res.ok) {
        const form = e.target as HTMLFormElement;
        form.reset();
        notify();
        router.push("/");
      } else {
        console.log("signup Failed");
      }
    } catch (error) {
      console.log("Error while signup", error);
    }
  };
  return (
    <div className="h-screen flex justify-center items-center">
      <Card className="w-[350px]">
        <CardHeader className="text-xl font-bold">Sign Up</CardHeader>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4 p-4">
          <Input
            type="text"
            placeholder="Name"
            name="name"
            onChange={(e) =>
              setInputField({ ...inputField, name: e.target.value })
            }
          />
          <Input
            type="text"
            placeholder="Email"
            name="email"
            onChange={(e) =>
              setInputField({ ...inputField, email: e.target.value })
            }
          />
          <Input
            type="password"
            placeholder="Password"
            name="password"
            onChange={(e) =>
              setInputField({ ...inputField, password: e.target.value })
            }
          />
          <Button
            className="bg-black text-white hover:bg-white hover:text-black duration-300 rounded"
            
          >
            Sign Up
          </Button>
          {error && <CardDescription>{error}</CardDescription>}
          <CardFooter className="flex gap-4">
            Already have account
            <Link href={"/"}>
              <CardTitle className="cursor-pointer hover:text-gray-700">
                Login
              </CardTitle>
            </Link>
          </CardFooter>
        </form>
      </Card>
      <Toaster />
    </div>
  );
};

export default SignUpForm;
