import { Link as Scrollink } from "react-scroll"


export default function Navbar() {
    return (
<>

<nav className="flex flex-row  gap-x-11 text-teal-100 font-extrabold font-mono text-[23px] h-10 " >
         <Scrollink to="topDesktop" smooth={true} duration={300} className="hover:text-emerald-500 transition duration-300 hover:scale-105 hover:shadow-lg hover:underline  hover:cursor-pointer " >صفحه اصلی</Scrollink>
         <Scrollink to="about-us"  smooth={true} duration={300} className="hover:text-emerald-500 transition duration-300 hover:scale-105 hover:shadow-lg hover:underline hover:cursor-pointer ">درباره ما</Scrollink>
         <Scrollink to="support" smooth={true} duration={300} className="hover:text-emerald-500 transition duration-300 hover:scale-105 hover:shadow-lg hover:underline underline-offset-8 hover:cursor-pointer">پشتیبانی</Scrollink>   
         <Scrollink to="contactUs" smooth={true} duration={300} className="hover:text-emerald-500 transition duration-300 hover:scale-105 hover:shadow-lg hover:underline hover:cursor-pointer" >تماس با ما</Scrollink>
         <Scrollink to="instagram" smooth={true} duration={300} className="hover:text-emerald-500 transition duration-300 hover:scale-105 hover:shadow-lg hover:underline underline-offset-8 hover:cursor-pointer" >اینستاگرام </Scrollink>
</nav>


</>
    )
}