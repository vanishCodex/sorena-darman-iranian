import logo from '../images/logo2.png'


export default function Support() {
    return (
<>
<div id="support" className="w-full bg-white pt-20 " >
<div  className="flex items-center justify-center h-3 bg-transparent -mt-9 ">
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 600 200"
    className="h-40 w-full stroke-red-500 stroke-2 fill-none animate-pulse"
  >
    <path
      d="M 0 100
    L 50 100
    L 100 50
    L 150 150
    L 200 100
    L 300 100
    L 350 50
    L 400 150
    L 450 100
    L 600 100
    L 600 100
    L 600 100
    L 700 50
    
    "
    />
  </svg>
</div>

    
    <div className="bg-gradient-to-b from-cyan-800 to-emerald-500 w-full h-30 -mt-20 -mb-9" > </div>
<span className="text-3xl text-cyan-50 flex justify-center " > پشتیبانی</span> 

<div id='mainTitle' className=" relative" >
  <span className=" text-3xl  font-bold animate-spanOne absolute left-68  "> سورنا درمان</span>
  <span className=" text-3xl  font-bold animate-spanTwo absolute left-63 top-9 ">ایرانیان </span>
  <img className=' absolute w-20 h-21 left-60 top-18' src={logo} alt="لوگو" />
  


  </div>
  <p className=' absolute right-1/5 border-2  p-6 text-white text-2xl  border-emerald-900' > سوالات متداول  :</p>
<p id='detailsPages' className=" leading-12 text-2xl w-3/4 rounded-3xl bg-teal-900 mr-auto ml-auto p-29  text-white " >


1. چگونه می‌توانم درخواست خدمات پرستاری بدهم؟  
   از طریق فرم درخواست آنلاین موجود در سایت یا با کلیک روی نلگرام , یا واتس اپ و تماس مستقیم ، می‌توانید درخواست خود را ثبت کنید.
<br />
2. آیا پرستاران شما دارای مجوز هستند؟  
   بله، تمامی پرستاران ما دارای مجوز رسمی و تجربه کافی در حوزه خود هستند.
<br />
3. هزینه خدمات چگونه محاسبه می‌شود؟  
   هزینه‌ها بر اساس نوع خدمات و مدت زمان ارائه محاسبه می‌شوند. برای جزئیات کامل، لطفاً به صفحه لیست قیمت مراجعه کنید.
<br />
4. آیا امکان لغو یا تغییر زمان خدمات وجود دارد؟  
   بله، با اطلاع‌رسانی حداقل ۳ ساعت قبل، می‌توانید زمان خدمات را تغییر دهید یا لغو کنید.
<br />
5. چگونه می‌توانم رضایت یا شکایت خود را اعلام کنم؟  
   از طریق بخش بازخورد سایت یا تماس با بخش پشتیبانی، می‌توانید نظرات و شکایات خود را ثبت کنید.

  
</p>
<div className=' pt-10 pb-25 bg-white flex justify-center gap-x-20 text-lg mr-18 '>
<p className='text-red-500' >ساعت کاری : 7 صبح الی 1 بامداد</p>
   <br />
   <a id='contactUs' className=' font-mono text-black' href="mailto:vanishcodex@gmail.com">ایمیل پشتیبانی:vanishcodeX@gmail</a>
   <br />
   <a className='font-mono text-black' href="tel:02133055859">تماس با پشتبانی : 02133055859</a>
    <br />
    </div>
</div>
<div className='flex  justify-center w-full bg-gradient-to-l from-pink-900 to-violet-700' >
  <p  id='instagram' className='  flex justify-center text-amber-50 text-lg' >مارا در اینستاگرام  دنبال کنید</p>
  </div>
</>
    )
}