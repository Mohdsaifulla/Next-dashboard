"use client";

import { signOut, useSession } from "next-auth/react";
import { useState } from "react";
import { IoLogOut } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";
export function DropdownMenuCheckboxes() {
  const { data: session } = useSession();

  const hanldeSingOut = async () => {
    signOut();
  };
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(!open);
  };
  return (
    <div className="">
      <button
        onClick={handleOpen}
        className="flex items-center justify-between px-4 py-1 bg-white  border focus:outline-none focus:ring focus:ring-blue-400 rounded-xl gap-4"
      >
        <span className="hidden sm:flex ">{session?.user?.name}</span>
        <span className="ml-2">&#x25BE;</span>
      </button>
      {open && (
        <div className="absolute flex justify-center items-center right-8  mt-2 px-2 backdrop-blur-3xl rounded-xl">
          <div className="py-2  cursor-pointer font-semibold flex flex-col justify-center items-center">
            <div className=" border-b-2 py-2 flex gap-2 justify-center items-center text-xl">
              <span>{session?.user?.name}</span>
              <CgProfile className="text-xl" />
            </div>
            <div className=" border-b-2 py-2">
              <span>{session?.user?.email}</span>
            </div>
            <div
              onClick={hanldeSingOut}
              className=" border-b-2 py-2 flex gap-2 justify-center items-center hover:text-gray-700"
            >
              <span className="">Logout</span>
              <IoLogOut className="text-xl" />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
