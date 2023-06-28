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
        <h1 className="font-bold text-2xl mb-2">กรุณาตรวจสอบความถูกต้อง</h1>
        <div className="border-2 p-10 rounded-3xl ">
          <div className="border-2 p-2 px-8 rounded-xl font-bold bg-white mb-3">
            วันที่ : {date} {monthNames[month]} {year} 
          </div>
          <div className="border-2 p-2 px-8 rounded-xl font-bold bg-white mb-3">
            เวลา : {time}
          </div>
          <div className="border-2 p-2 px-8 rounded-xl font-bold bg-white mb-3">
            นาย................
          </div>
          <div className="border-2 p-2 px-8 rounded-xl font-bold bg-white mb-3">
           รหัสพนักงาน : 9999999999
          </div>
          <div className="border-2 p-2 px-8 rounded-xl font-bold bg-white mb-3">
           เบอร์ติดต่อ : 9999999999
          </div>

        
          <Link href="./byebyePage">
          <button
          type="summit"
          class="text-white bg-[#D43732] hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 rounded-full text-xl px-14 py-2.5 text-center 
                                mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900 font-bold"
        >
          ยืนยัน
        </button></Link>
        </div>
      </div>
    </main>
  );
}
