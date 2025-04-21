import logo from '../images/logo2.png'
import doctor from '../images/doctor.jpeg'

export default function AboutUs() {
    return (
<>
<div   className="w-full bg-white pt-20 " >
<div  className="flex items-center justify-center h-3 bg-transparent -mt-9 ">
  <svg id="about-us"
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
 id='mainTitle'  </svg>
</div>

    
    <div className="bg-gradient-to-b from-cyan-800 to-emerald-500 w-full h-30 -mt-20 -mb-9" > </div>
<span className="text-3xl text-cyan-50 flex justify-center " >درباره ما</span>33
<div id='mainTitle' className=" relative" >
  <span className=" text-3xl  font-bold animate-spanOne absolute left-68  "> سورنا درمان</span>
  <span className=" text-3xl  font-bold animate-spanTwo absolute left-63 top-9 ">ایرانیان </span>
  <img className='  absolute w-20 h-21 left-60 top-18' src={logo} alt="لوگو" />
  <img className=' absolute   md:w-45 md:h-fit left-2' src={doctor} alt="دکتر کنار صفحه" />


  </div>
<p id='detailsPages' className="text-lg px-10 py-20 w-full md:leading-12 md:text-2xl md:w-3/4 rounded-3xl bg-teal-900 mr-auto ml-auto  md:p-29  text-white " >



مهرآسا درمان: همراهی مطمئن در مسیر بهبودی

شرکت مهرآسا درمان با سال‌ها تجربه در ارائه خدمات پرستاری در منزل، به یکی از پیشروترین مراکز تخصصی در این حوزه تبدیل شده است. ما مفتخریم که با تیمی حرفه‌ای از پرستاران مجرب و آموزش‌دیده، خدماتی با کیفیت بالا و مطابق با نیازهای منحصر به فرد هر بیمار ارائه می‌دهیم.

هدف اصلی ما بهبود کیفیت زندگی افراد و فراهم آوردن محیطی امن و آرام برای بهبودی بیماران در فضای راحت منزلشان است. مهرآسا درمان با افتخار توانسته است اعتماد خانواده‌های بسیاری را جلب کند و نقش مؤثری در تسهیل روند درمان بیماران ایفا نماید.

ما همیشه در تلاشیم تا با به‌کارگیری تکنولوژی‌های نوین و پایبندی به استانداردهای جهانی، خدماتی مدرن و کارآمد ارائه دهیم. تمرکز ما بر ارائه مراقبت‌هایی انسانی و صادقانه است که زندگی را برای بیماران و خانواده‌هایشان آسان‌تر کند.

چرا ما را انتخاب کنید؟

تجربه و تخصص: تیمی از متخصصان با سابقه درخشان.

خدمات سفارشی: متناسب با نیازها و شرایط خاص هر بیمار.

پشتیبانی مداوم: همواره در کنار شما هستیم.

ارتباط با ما برای دریافت مشاوره رایگان یا اطلاعات بیشتر، با تیم پشتیبانی ما تماس بگیرید. ما مشتاقانه آماده پاسخگویی به سوالات شما هستیم!</p>


</div>
</>
    )
}