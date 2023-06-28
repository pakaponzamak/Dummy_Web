import Image from "next/image";
import { Inter } from "next/font/google";
import DensoLogo from "../images/Denso_logo.png";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
    let newDate = new Date()
    let date = newDate.getDate();
    let year = newDate.getFullYear();

  return (
    <main className="flex justify-center  m-2">
      <div className=" text-center border-2 p-12 rounded-3xl ">
      <Image src={DensoLogo} alt="Denso logo" width={350} className="mb-10" />
      <div className=" p-16 rounded-2xl bg-red-100">
        <h1 className="text-3xl font-extrabold">แจ้งข่าวสาร</h1>
        <div className="text-xl">
        <p>ประกาศ</p>
        <p>มีตรวจสุขภาพประจำปี</p>
        <p className="font-bold">วันที่ {date} มิถุนายน {year}</p>
        </div>
      </div>
      </div>
    </main>
  );
}
