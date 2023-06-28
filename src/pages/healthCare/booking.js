import Image from "next/image";
import { Inter } from "next/font/google";
import DensoLogo from "../images/Denso_logo.png";
import Link from "next/link";
import * as React from "react";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  let orthopedic_doctor = "จองคิวแพทย์...........";
  let cardiologist = "จองคิวแพทย์เฉพาะทางอายุรกรรม";
  let doctor = "จองคิวแพทย์โรคทั่วไป";
  
  

  return (
    <main className="flex justify-center  m-2">
      <div className=" text-center  p-2 rounded-3xl ">
        <div className="border rounded-3xl ">
          <h1 className="font-bold text-xl">Date Booking</h1>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DateCalendar />
          </LocalizationProvider>
        </div>
        <div className="grid grid-cols-3 m-3 gap-2 font-bold">
          <button className="border rounded-xl p-3 bg-red-500 drop-shadow-lg text-white"><div>9:00</div></button>
          <button className="border rounded-xl p-3 bg-green-500 drop-shadow-lg text-white"><div>10:00</div></button>
          <button className="border rounded-xl p-3 bg-red-500 drop-shadow-lg text-white"><div>11:00</div></button>
          <button className="border rounded-xl p-3 bg-green-500 drop-shadow-lg text-white"><div>12:00</div></button>
          <button className="border rounded-xl p-3 bg-red-500 drop-shadow-lg text-white"><div>13:00</div></button>
          <button className="border rounded-xl p-3 bg-green-500 drop-shadow-lg text-white"><div>14:00</div></button>
          <button className="border rounded-xl p-3 bg-green-500 drop-shadow-lg text-white"><div>15:00</div></button>
          <button className="border rounded-xl p-3 bg-green-500 drop-shadow-lg text-white"><div>16:00</div></button>
          <button className="border rounded-xl p-3 bg-red-500 drop-shadow-lg text-white"><div>17:00</div></button>
        </div>
        <Link href='./data_conf'><button className="border bg-green-200 mt-2 rounded-3xl px-14 py-4 font-bold"><div>ยืนยัน</div></button></Link>
      </div>
    </main>
  );
}
