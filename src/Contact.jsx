import l1 from './images/call.png'
import l2 from './images/telegram.png'
import l3 from './images/whatsapp.png'

const contactItems = [
    {id: 1 , img: l1 , title: "تماس"  } ,
    {id: 2 , img: l2 , title: "تلگرام"  } ,  
    {id: 3 , img: l3 , title: "واتساپ"  } ,

]


export default function Contact() {
    return (
        <>
          <div className='flex flex-row !w-full h-12  md:gap-x-11 mb-0 -mt-4 p-1 border border-[#2A6FA3] rounded-2xl bg-white justify-end
           gap-x-1.5 '>
    
  
   
   
    <h2 className=' block md:hidden right-5 -top-4 break-words w-60  absolute font-sans font-bold text-[#1265a5] text-[17px] animate-pulse'>
     نیاز خود را در پیامی کوتاه ارسال و یا تماس بگیرید .
    </h2>
    <h1 className=' hidden md:block ml-2 pb-1 self-center font-sans font-bold pr-2 text-[#1265a5] text-[17px] animate-pulse ' > روی تلگرام یا واتس اپ کلیک کنید و در پیامی کوتاه نیاز خود را بگویید یا مستقیما تماس بگیرید!</h1>
  <a href="tel:09931496400" className=" p-0  items-center flex-col gap-1 hover:scale-140 transition duration-300">
        <img src={contactItems[0].img} alt={contactItems[0].title} className='w-6 h-6 p-0 -mr-1   ' />
        <p className='font-light -mt-1 ml-1 text-black animate-ping scale-60 md:text-2xl md:-mt-2 md:-mr-2'>{contactItems[0].title}</p>
    </a>
   
  <a href="https://t.me/username">  <div key={contactItems[1].id} className='p-0  flex items-center flex-col  hover:scale-140 transition duration-300  '>
        <img src={contactItems[1].img} alt={contactItems[1].title} className='w-7 h-7 p-0 -mt-0.5    ' />
        <p className='font-light leading-3 text-[17px] text-blue-500 animate-ping scale-60 '>{contactItems[1].title}</p>
    </div>
    </a>
  <a href="https://wa.me/123456789"> 
    <div key={contactItems[2].id} className='p-0 flex items-center flex-col  hover:scale-140 transition duration-300  '>
        <img src={contactItems[2].img} alt={contactItems[2].title} className='w-8 h-8 p-0  -mt-1'  />
        <p className='font-light text-[17px] leading-1   text-green-700 animate-ping scale-60 '>{contactItems[2].title}</p>
    </div>
    </a>
</div>

        </>
    );
}

