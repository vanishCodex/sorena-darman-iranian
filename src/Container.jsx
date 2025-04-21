
import logo from './images/logo2.png'
import bg from './images/bg1.jpeg'
import SearchForm from './SearchForm'
import Items from './Items'
import Contact from './Contact'
import Footer from './Footer'
import Navbar from './Navbar'
import Details from './Details'
import Price from './price'
import EndLine from './EndLine'
import AboutUs from './NavPages/AboutUs'
import Support from './NavPages/Support'
import DesktopItems from './DesktopItems'
import React, { useState } from "react";
import LoginBut from "./loginsPages/LoginBut";
import LoginForm from "./loginsPages/LoginForm";
import Dashboard from './Dashboard';







export default function Container() {
  const [showForm, setShowForm] = useState(false);
  

    return(
        <article className=" w-full  flex justify-center p-0 m-0 ">
          {/* موبایل */}
      <div className="block md:hidden max-h-screen  bg-[#CFE9F8] ">

<header className=''>
<div id='titleKhadamat' className='flex flex-row justify-center items-center gap-4 m-1  p-0.5 mr-0.5 rounded-0.5  h-auto w-full '>
    <h1 className=' absolute font-bold text-[24px] top-8 right-0  text-white  '>    خدمات پرستاری در منزل </h1>  
    <h2 className=" absolute font-bold text-[24px] top-7.5 right-0.5  text-[#4A4A4A]  ">  خدمات پرستاری در منزل </h2> 
   <div className=' absolute top-15.5 right-10 w-40 h-0.5 bg-gradient-to-r from-emerald-600  z-0' >
</div>

 <div id='mainTitle' className="flex space-x-4">
   <span className=" text-3xl font-bold animate-spanOne absolute top-0.5 left-18 z-20  "> سورنا درمان</span>
   <span className=" text-3xl font-bold animate-spanTwo absolute top-8.5 left-16 z-20 ">ایرانیان </span>
   </div>
   <img id='top' className='w-19 h-20 mr-74'  src={logo} alt="main logo"  />
 </div>
 </header>

 <div className=' relative  w-full p-1 mt-4 '>     
   <Contact />  
   <div  className='mt-2' > <Items /></div>
</div>

         <div className=' fixed bottom-0 w-full ' > <Footer /> </div>
         <div id='priceList' className='mt-20 mb-10 bg-white' > <Price /> </div>     
         <div className='pb-15' ><EndLine /></div>
    
          
 </div>
  


        {/*  دسکتاپ */}
        <div id='topDesktop' className="hidden md:block w-full p-0 min-h-screen border-b-0  bg-cyan-950 ">
           <div className='relative w-full h-screen   '>
              <img className='absolute inset-0 w-full h-screen object-cover ' src={bg} alt="back ground" />
            </div>
            <div className=' absolute top-11 left-0 w-3/6 h-3/5 bg-gradient-to-b from-blue-300 to-transparent opacity-80 z-0
        ' ></div>

         <div className=" top-15.5 left-2 absolute w-auto rounded-2xl h-auto justify-center items-center ">   
        <LoginBut onClick={() => setShowForm(true)} />
        {showForm && <LoginForm onClose={() => setShowForm(false)} />}
        </div>
             
 <div id='mainTitle' className="flex space-x-4">
  <span className=" text-3xl font-bold animate-spanOne absolute top-31 left-69 z-20  "> سورنا درمان</span>
  <span className=" text-3xl font-bold animate-spanTwo absolute top-41 left-67 z-20 ">ایرانیان </span>
</div>

        
            <div className='  z-40 fixed  top-0 left-0.5 w-1/2 max-w-1/2 h-13 bg-gradient-to-b from-emerald-950 to-emerald-800 rounded-2xl' >
            <div className='  fixed left-5 top-2   z-40 ' > <Navbar />  </div > 
                    </div>
                    <img className="w-28 h-30 absolute top-50 left-60 z-20" src={logo} alt="لوگو" />
                    <div className=' absolute right-1/2 top-12 z-10' ><SearchForm />  </div>


                    <h1 id='titleKhadamat' className=" absolute top-62.5 left-[28.6%] text-3xl self-start text-white font-serif z-0 font-bold     
                      ">  خدمات پرستاری در منزل "تهران"</h1>
                    <h1 id='titleKhadamat' className=" absolute top-63 left-[28.5%] text-3xl self-start text-black font-serif z-0 font-bold
                         ">  خدمات  <span className=' text-emerald-500' >پرستاری در منزل </span> "تهران"</h1>
                         <div className=' w-50 h-0.5 bg-gradient-to-r from-emerald-700 absolute top-72.5 left-[29.5%]  self-start z-0' ></div>

                  <div className=' slide-in-right absolute w-[47%] h-51 rounded-2xl bg-gradient-to-b from-emerald-400 to-emerald-300 bottom-22 left-2 z-10 ' >       
                 <Contact />
                 <div className='mr-5 mt-5'  ><DesktopItems /></div>
                 
                   </div>

            <p id='titleKhadamat' className=' rounded-2xl p-2 absolute text-[19px] font-bold text-cyan-950 font-sans shadow-2xl top-85 w-2/6  left-40 text-ms self-start z-0' >خدمات پرستاری در منزل مهرآسا راهی مطمئن برای مراقبت از عزیزان شما در محیط راحت خانه است. تیم ما با تجربه بالا و قلبی مهربان آماده ارائه مراقبت‌های حرفه‌ای است. از کمک‌های روزانه تا مراقبت‌های تخصصی، سلامت و آسایش بیماران اولویت ماست. با ما تماس بگیرید تا بهترین خدمات را برای خانواده‌تان فراهم کنیم.</p>
           
            <div id='details1' className='mr-19' > <Details /></div>
            <div id='details2' className=' absolute -bottom-150 left-96 '  ></div>
            <div id='details3' className=' absolute -bottom-300 left-96 '  ></div>
          <AboutUs />
          <Support />
          <EndLine />

        </div>

      </article>

    )}