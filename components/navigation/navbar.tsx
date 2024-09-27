import React from "react";
import Link from "next/link";
import { AppLogo } from "../ui/applogo";
import { IconQuestionMark } from "@tabler/icons-react";

export default function Navbar() {
  return (
    <div className="w-full h-[88px] flex flex-row justify-between pl-[58px] pt-[26px]">
      <div>
        <AppLogo></AppLogo>
      </div>
      <div>Testing</div>
    </div>
    // <div className="z-50 mx-auto flex h-16  bg-white text-primary-foreground shadow-lg">
    //   <div className="container mx-auto flex items-center justify-between py-4">
    //     <div className="ml-[58px] flex items-center gap-8">
    //       <Link href="/">
    //         <AppLogo className="text-xl" />
    //       </Link>
    //     </div>
    //     <div className="items-center gap-[68px] sm:flex mr-[58px] text-primary font-medium">
    //       <Link href="/download" className="cursor-pointer">
    //         Tải app ngay
    //       </Link>
    //       <Link href="/about-us" className="cursor-pointer">
    //         Về chúng tôi
    //       </Link>
    //       <div className="flex items-center justify-center w-8 h-8 rounded-full bg-primary">
    //         <IconQuestionMark color="white" size={20} />
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
}
