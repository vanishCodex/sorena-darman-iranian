
import { Link as Scrollink } from 'react-scroll'
import priceList from './images/priceList.png'
import home from './images/home.png'
import list from './images/list.png'
import call from './images/call.gif'
import React from 'react'
import LoginForm from './loginsPages/LoginForm'

export default function Footer() {
 
const [showForm , setShowForm] = React.useState(false)

const toggleeForm = () => {
  setShowForm ((prev)=> !prev)
} ;


    return (
<>
 <footer className=' w-full h-17 bg-gray-300 flex justify-between px-1 py-0.5 z-20 border-t-2 text-black font-bold text-lg font-sans  ' >
       
       <Scrollink to="top" smooth={true} duration={200}  className='flex flex-col '>
       <img className='w-8 h-8 self-center  mr-2 ' src={home} alt="home button" />
       <button className=' mr-2 ' >خانه</button>
       </Scrollink>
      
       <Scrollink to='priceList' smooth={true} duration={200}  className='flex flex-col '>
       <img className='w-8 h-8 self-center ' src={priceList} alt="price list" />
       <button >لیست قیمت</button>
       </Scrollink>
           
           <div>
            
               <button className='text-md' onClick={toggleeForm}>
               <img className='w-8 h-8 self-center  mr-10 ' src={list} alt="list logo" />
            درخواست آنلاین
               </button>
               {showForm && <LoginForm onClose={toggleeForm} />}
           
           </div>
      

       <a  className='flex flex-col ' href='tel:09931496400'>
       <img className='w-8 h-8 self-center ' src={call} alt="logo call" />
       <button >تماس</button>
       </a>

    

 </footer>


</>
    )
}