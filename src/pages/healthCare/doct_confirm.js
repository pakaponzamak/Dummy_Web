import Image from "next/image";
import { Inter } from "next/font/google";
import DensoLogo from "../images/Denso_logo.png";
import Link from "next/link";
import * as React from 'react';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  let orthopedic_doctor = "จองคิวแพทย์...........";
  let cardiologist = "จองคิวแพทย์เฉพาะทางอายุรกรรม";
  let doctor = "จองคิวแพทย์โรคทั่วไป";

  return (
    <main className="flex justify-center  m-2">
      <div className=" text-center border-2 p-12 rounded-3xl ">
        <div className="font-bold text-xl mb-5">
          <h1>ศูนย์สุขภาพ</h1>
          <h1>(DNTH Health Care Center)</h1>
        </div>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="w-14 h-14 text-red-500 flex justify-center mb-5"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z"
          />
        </svg>
            
        <div className="font-medium text-xl">
          <p className="mb-3">{orthopedic_doctor}</p>
          <p className="mb-3">ใช้เวลาตรวจโดยประมาณ .........</p>
          <p className="mb-1">เวลาทำการ 09:00 - 12:00</p>
          <p className="mb-3">หรือ 15:00 - 18:00</p> 
        
        </div>
        <div className="flex justify-between" >

          <button className=" bg-red-400 p-2 rounded-3xl px-8"><Link href='./healthCare/doct_select'><div><p>ย้อนกลับ</p></div></Link></button>
         <button className=" bg-green-400 p-2 rounded-3xl px-10"><Link href='./booking'><div><p>ยืนยัน</p></div></Link></button>
         
         </div>
      </div>
    </main>
  );
}
