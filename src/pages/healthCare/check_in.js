import Image from "next/image";
import { Inter } from "next/font/google";
import DensoLogo from "../images/Denso_logo.png";
import Link from "next/link";
import { useState } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  let newDate = new Date();
  let date = newDate.getDate();
  let year = newDate.getFullYear();
  let month = newDate.getMonth();
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const [check,setCheck] = useState("")
  //const [bgColor,setBgColor] = useState('')

  return (
    <main className="flex  justify-center m-2">
      <div className=" text-center border-2 p-12 rounded-3xl ">
        <Image src={DensoLogo} alt="Denso logo" width={350} className="mb-10" />
        <div className="text-center">
          <h1 className="text-3xl font-extrabold mb-3">เช็คอิน</h1>
          <p>
            ตรวจสุขภาพวันที่ {date} {monthNames[month]} {year}
          </p>
          <p className="mb-5">เวลา ........</p>
          <div className="flex justify-center">
            <button onClick={() => setCheck("เช็คอินสำเร็จ")}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-16 h-16 border-2 rounded-full p-1 hover:bg-green-500"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M4.5 12.75l6 6 9-13.5"
            />
          </svg></button></div>
          <p className="mt-5 font-bold text-green-600 text-3xl">{check}</p>
        </div>
      </div>
    </main>
  );
}
