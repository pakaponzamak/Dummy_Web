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
        <h1 className="font-bold text-2xl mb-2">ข้อมูลเพิ่มเติม</h1>
        <div className="border-2 p-10 rounded-3xl ">
          <div className="border-2 p-2 px-8 rounded-xl font-bold bg-white mb-3">
            {date} {monthNames[month]} {year} เวลา {time}
          </div>
          <div className="border-2 p-2 px-8 rounded-xl font-bold bg-white mb-3">
            นาย................
          </div>
          <div className="border-2 p-2 px-8 rounded-xl font-bold bg-white mb-3">
            9999999999999999999
          </div>

          <div className="w-72 bg-white rounded-lg">
            <Select label="โปรดระบุบริษัทของท่าน">
              <Option>DNTH-SRG</Option>
              <Option>DNTH-WEL</Option>
              <Option>DNTH-BPK</Option>
            </Select>
          </div>
          <div className="flex flex-col mt-3">
            <Radio id="html1" name="type" label="พนักงาน" />
            <Radio id="html2" name="type" label="ครอบครัวพนักงาน" />
            <Radio id="html3" name="type" label="พนักงานและครอบครัว" />
          </div>
          <form>
          <input
              className="border-2 p-2 px-8 rounded-xl bg-white mb-3 "
              placeholder="เบอร์ติดต่อ"
              type="text"
              name="employee_id"
              id="employee_id"

 
            ></input>
            <input
              className="border-2  px-8 py-6 rounded-xl bg-white mb-3 "
              placeholder="ระบุอาการเบื้องต้น"
              type="text"
              name="employee_id"
              id="employee_id"

            ></input>
          </form>
          <Link href="./final_check">
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
