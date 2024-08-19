"use client";
import React, { useEffect, useState } from "react";
import ArrowLeftIcon from "../icons/ArrowLeftIcon";
import SearchIcon from "../icons/SearchIcon";
import ShoppingBagIcon from "../icons/ShoppingBagIcon";
import TitleHeader from "../ui/TitleHeader";
import { usePathname } from "next/navigation";

export default function AuthServiceHeaderClient() {
  const pathName = usePathname();

  const [title, setTitle] = useState<string>("");

  useEffect(() => {
    if (pathName === "/sign-in") {
      setTitle("로그인");
    } else if (pathName === "/sign-up") {
      setTitle("회원가입");
    }
  }, [pathName]);

  return (
    <header className="flex flex-col justify-center w-full h-[56px] px-[16px]">
      <nav>
        <ul className="flex justify-between">
          <li>
            <ArrowLeftIcon />
          </li>
          <li className=" absolute left-[50%] translate-x-[-50%]">
            <TitleHeader title={title} textStyle="text-xl" />
          </li>
          <li>
            <ul className="flex gap-4">
              <li>
                <SearchIcon />
              </li>
              <li>
                <ShoppingBagIcon />
              </li>
            </ul>
          </li>
        </ul>
      </nav>
    </header>
  );
}
