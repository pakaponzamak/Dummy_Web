import Image from "next/image";
import { Inter } from "next/font/google";
import DensoLogo from "../images/Denso_logo.png";
import Link from "next/link";


const inter = Inter({ subsets: ["latin"] });

export default function form_select() {
  return (
    <main className="flex justify-center  m-5">
      <div className=" text-center border-2 p-16 rounded-3xl ">
      <Image src={DensoLogo} alt="Denso logo" width={350} className="mb-2" />
        <div className="font-extrabold text-[#D43732] italic">
          DNTH Health Care Center
        </div>
        <div className="mb-8 font-extrabold text-[#D43732] italic ">
          (ศูนย์สุขภาพ)
        </div>

        <div className="grid grid-cols-2  gap-2 text-sm">
        <button className="border-2 p-3 bg-slate-300 rounded-3xl hover:bg-[#D43732] hover:text-white hover:scale-110 duration-300">
        <Link href="./time_table"><div>ตารางแพทย์</div></Link>
        </button>
          
        <button className="border-2 p-3 bg-slate-300 rounded-3xl hover:bg-[#D43732] hover:text-white hover:scale-110 duration-300">
        <Link href="./plant_select"><div>จองคิว</div></Link>
        </button>
        
        <button className="border-2 p-3 bg-slate-300 rounded-3xl hover:bg-[#D43732] hover:text-white hover:scale-110 duration-300">
        <Link href="./history"><div>รายการจอง</div></Link>
          </button>
          
        <button className="border-2 p-3 bg-slate-300 rounded-3xl hover:bg-[#D43732] hover:text-white hover:scale-110 duration-300">
        <Link href="./check_in"> <div>เช็คอิน</div></Link>
          </button>
        </div>
      </div>

      
    </main>
  );
}
