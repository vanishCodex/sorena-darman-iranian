import n1 from './images/details1.png'
import n2 from './images/details2.png'
import n3 from './images/details3.png'
import n4 from './images/details4.png'
import n5 from './images/details5.png'
import n6 from './images/details6.png'
import n7 from './images/details7.png'
import n8 from './images/details8.png'
import n9 from './images/details9.png'

import { Link as Scrollink} from "react-scroll"


export default function DesktopItems() {
    return (
<>
<section id='detailsPages' className=' mr-9 grid grid-cols-5 gap-x-20 text-[18.5px] gap-y-4 w-[80%] place-content-center whitespace-nowrap leading-6 h-35 text-md font-serif ' >
    
       <Scrollink className=' border-emerald-400 border-2 rounded-3xl w-22 hover:cursor-pointer hover:scale-110 transition duration-300       ' to="details1" smooth={true} duration={350}> <h2 >1.سرم تراپی</h2>                        <img className='w-10 h-10 mr-3 animate-pulse ' src={n1} alt="." /> </Scrollink>
       <Scrollink className=' border-emerald-400 border-2 rounded-3xl w-22 hover:cursor-pointer hover:scale-110 transition duration-300       ' to="details1" smooth={true} duration={350}> <h2 className='mr-2' >2.پانسمان</h2>         <img className='w-10 h-10 mr-5 animate-pulse'  src={n2} alt="." /> </Scrollink>
       <Scrollink className=' border-emerald-400 border-2 rounded-3xl w-29 hover:cursor-pointer hover:scale-110 transition duration-300       ' to="details1" smooth={true} duration={350}> <h2  >3.تزریق عضلانی</h2>                     <img className='w-11 h-11 mr-7 animate-pulse'  src={n3} alt="." /> </Scrollink>
       <Scrollink className=' border-emerald-400 border-2 rounded-3xl w-26 hover:cursor-pointer hover:scale-110 transition duration-300       ' to="details2" smooth={true} duration={350}> <h2>4.سونداژ مثانه</h2>                      <img className='w-10 h-10 mr-5 animate-pulse'  src={n4} alt="." /> </Scrollink>
       <Scrollink className=' border-emerald-400 border-2 rounded-3xl w-35 hover:cursor-pointer hover:scale-110 transition duration-300       ' to="details2" smooth={true} duration={350}> <h2>5.سونداژ معده ngt</h2>                   <img className='w-9 h-9 mr-8 animate-pulse'    src={n5} alt="." /> </Scrollink>
       <Scrollink className=' border-emerald-400 border-2 rounded-3xl w-41.5 hover:cursor-pointer hover:scale-110 transition duration-300 mr-7  ' to="details2" smooth={true} duration={350}> <h2 className=' whitespace-nowrap mr-1 mt-1 animate-pulse' >6.ویزیت پزشک عمومی</h2> <img className='w-12 h-10 mr-12 animate-pulse' src={n6} alt="." /> </Scrollink>
       <Scrollink className=' border-emerald-400 border-2 rounded-3xl w-25 hover:cursor-pointer hover:scale-110 transition duration-300 mr-18 ' to="details3" smooth={true} duration={350}> <h2 className='mr-2' >7.فیزیوتراپی</h2>      <img className='w-14 h-11 mr-4 animate-pulse'  src={n7} alt="." /> </Scrollink>
       <Scrollink className=' border-emerald-400 border-2 rounded-3xl w-25 hover:cursor-pointer hover:scale-110 transition duration-300 mr-17 ' to="details3" smooth={true} duration={350}> <h2 className='mr-1'>8.دکتر مامایی</h2>      <img className='w-12 h-10 mr-5 animate-pulse'  src={n8} alt="." /> </Scrollink>
       <Scrollink className=' border-emerald-400 border-2 rounded-3xl w-47 hover:cursor-pointer hover:scale-110 transition duration-300 mr-15 ' to="details3" smooth={true} duration={350}> <h2 className=' whitespace-nowrap mr-2 mt-1' >9.ویزیت پزشک متخصص</h2> <img className='w-12 h-10 mr-15 animate-pulse ' src={n9} alt="." /> </Scrollink>




</section>
</>
    )
}