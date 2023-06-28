import Image from "next/image";
import { Inter } from "next/font/google";
import DensoLogo from "../images/Denso_logo.png";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {

    let orthopedic_doctor = "จองคิวแพทย์เฉพาะทางกระดูกและข้อ"
    let cardiologist = "จองคิวแพทย์เฉพาะทางอายุรกรรม"
    let doctor = "จองคิวแพทย์โรคทั่วไป"

  return (
    <main className="flex justify-center  m-2">
      <div className=" text-center border-2 p-10 rounded-3xl ">
      
      
      <button className="mb-10 mr-2 p-4 border rounded-3xl hover:bg-[#D43732] hover:text-white hover:scale-110 duration-300">
        <Link href='./doct_confirm'>
        <div><p>{orthopedic_doctor}</p></div></Link></button>

      <button className="mb-10 p-4 border rounded-3xl hover:bg-[#D43732] hover:text-white hover:scale-110 duration-300">
      <Link href='./doct_confirm'><div><p>{cardiologist}(หัวใจ ความดัน เบาหวาน)</p></div></Link></button>

      <button className="mb-10 p-4 border rounded-3xl hover:bg-[#D43732] hover:text-white hover:scale-110 duration-300">
      <Link href='./doct_confirm'><div><p>{doctor}</p></div></Link></button>
      
      </div>
    </main>
  );
}
