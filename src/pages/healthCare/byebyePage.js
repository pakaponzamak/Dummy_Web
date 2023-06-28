import Image from "next/image";
import { Inter } from "next/font/google";
import DensoLogo from "../images/Denso_logo.png";
import Link from "next/link";
import { useState } from "react";
import { Select, Option, Radio } from "@material-tailwind/react";

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
  const [check, setCheck] = useState(0);
  var today = new Date();
  var minutes = today.getMinutes().toString().padStart(2, "0");
  var time = today.getHours() + ":" + minutes + " น.";

  //const [bgColor,setBgColor] = useState('')

  return (
    <main className="flex  justify-center m-4">
      <div className=" text-center  p-1 rounded-3xl ">
        
        <div className="border-2 p-10 rounded-3xl ">
          <div className=" mb-3 font-bold text-3xl mt-10">
            ระบบได้ทำการลงทะเบียนเรียบร้อยแล้ว
          </div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-16 h-16 border-2 rounded-full p-1 bg-green-500 flex items-center text-white"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M4.5 12.75l6 6 9-13.5"
            />
          </svg>
          
          
        </div>
      </div>
    </main>
  );
}
