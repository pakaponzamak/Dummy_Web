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
  let status = 'ยกเลิก'
  const [check, setCheck] = useState("");
  //const [bgColor,setBgColor] = useState('')

  return (
    <main className="flex  justify-center m-2">
        
      <div className=" text-center border-2 p-12 rounded-3xl ">
        <div className="text-left">
          <h1 className="text-3xl font-extrabold mb-3">ประวัติการจอง</h1>
          <div>
            <div className="border p-3 rounded-2xl">
              <p>
                ตรวจสุขภาพวันที่ {date} {monthNames[month]} {year}  เวลา .......
              </p>
              <div className="font-bold mt-1">Status: {status}</div>
            </div>
          </div>
        </div>  
      </div>
    </main>
  );
}
