import { signOut, useSession } from "next-auth/react";
import React from "react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { FaSearch } from "react-icons/fa";
import { FaBell } from "react-icons/fa";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { DropdownMenuCheckboxes } from "../LogoutDropDown";
const Header = () => {
  return (
    <div className="h-[91px] flex justify-between items-center border p-8">
      <div className="flex relative items-center justify-center">
        <Input placeholder="Search..." className="rounded hidden sm:flex" />
        <FaSearch className="sm:absolute sm:right-2 sm:top-2 cursor-pointer" />
      </div>
      <div className="flex flex-row gap-4 justify-center items-center">
        <div className="">
          <FaBell className="text-2xl" />
          <div className="bg-red-500 relative">
            <span className="w-2 h-2 bg-red-600 rounded-full absolute right-0 -top-8 animate-pulse"></span>
          </div>
        </div>
        <div>
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </div>
        <div>
          <DropdownMenuCheckboxes />
        </div>
      </div>
    </div>
  );
};

export default Header;
