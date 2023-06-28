import Image from "next/image";
import { Inter } from "next/font/google";
import DensoLogo from "../images/Denso_logo.png";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
    

  return (
    <main className="flex justify-center  m-2">
      <div className=" text-center border-2 p-12 rounded-3xl ">
      
      <h1 className="font-extrabold text-2xl mb-6">กรุณาเลือก Plant ที่ต้องการใช้บริการ</h1>
      <button className="mb-10 mr-2 p-4 border rounded-3xl hover:bg-[#D43732] hover:text-white hover:scale-110 duration-300">
        <Link href='./doct_select'><div><p>Denso บางประกง (BPK)</p></div></Link></button>
      <button className="mb-10 p-4 border rounded-3xl hover:bg-[#D43732] hover:text-white hover:scale-110 duration-300">
      <Link href='./doct_select'><div><p>Denso เวลโกรว์ (WEL)</p></div></Link></button>
      
      </div>
    </main>
  );
}
