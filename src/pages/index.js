import Image from "next/image";
import { Inter } from "next/font/google";
import DensoLogo from './images/Denso_logo.png'
import Link from 'next/link'


const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className="flex justify-center item-center m-7">
      <form
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
          <div>
            <input
              className="border-2 px-5 py-3 rounded-full mb-5 "
              placeholder="ชื่อ"
              type="text"
              name="username"
              id="username"
              onChange={(e) => setFirstName(e.target.value)}
            ></input>
          </div>
          <div>
            <input
              className="border-2 px-5 py-3 rounded-full mb-5 "
              placeholder="รหัสพนักงาน"
              type="text"
              name="employee_id"
              id="employee_id"

              onChange={(e) => setEmployee_id(e.target.value)}
            ></input>
          </div>
        </div>
        <Link href="/form_select">
        <button
          type="summit"
          class="text-white bg-[#D43732] hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 rounded-full text-xl px-14 py-2.5 text-center 
                                mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900 font-bold"
        >
          เข้าสู่ระบบ
        </button>
        </Link>
      </form>
    </main>
  );
}
