import Image from "next/image";
import { Inter } from "next/font/google";
import DensoLogo from "./images/Denso_logo.png";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className="flex justify-center item-center m-7">
      <div
        className="place-content-center text-center border-2 p-20 rounded-3xl "
        
      >
        <Image src={DensoLogo} alt="Denso logo" width={350} className="mb-2" />
        <div className="font-extrabold text-[#D43732] italic">
          DNTH Electronic Form
        </div>
        <div className="mb-8 font-extrabold text-[#D43732] italic">
          (ระบบฟอร์มออนไลน์)
        </div>
        <div>
          
        </div>
        <div className="mb-6">
        <Link href="./healthCare/form_select">
        <button
          type="summit"
          class="text-white bg-[#D43732] hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 rounded-full text-sm px-10 py-2.5 text-center 
                                mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900 font-bold"
        >
         จองการรักษาพยาบาล
        </button>
        </Link>
        </div>

        <div>
        <Link href="/form_select">
        <button
          type="summit"
          class="text-white bg-[#D43732] hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 rounded-full text-sm px-10 py-2.5 text-center 
                                mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900 font-bold"
        >
          จองคอร์สอบรมออนไลน์
        </button>
        </Link>
        </div>
      </div>
    </main>
  );
}
