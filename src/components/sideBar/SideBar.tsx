import { sideBarConstant } from "@/utils/constant";
import Image from "next/image";
import Link from "next/link";

const SideBar = () => {
  return (
    <div>
      <div className="flex justify-center items-center">
        <h1 className="text-2xl font-bold  pt-8  pb-8  px-4">ZUAI</h1>
      </div>
      <div className="flex justify-center items-center lg:justify-start">
        <p className="md:text-xs text-[4px]  opacity-[50%] pt-4 pr-0 pb-4 lg:pl-7 ">
          MAIN MENU
        </p>
      </div>
      <div>
        {sideBarConstant.map((item) => (
          <div key={item.id} className="">
            <Link href={item.to}>
              <div className="flex gap-2 p-4 lg:justify-start justify-center items-center hover:text-[#FF5151] cursor-pointer duration-300 ">
                <div className="">{item.icon}</div>
                <div className="w-[164] h-[24px] hidden lg:flex">
                  {item.name}
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SideBar;
