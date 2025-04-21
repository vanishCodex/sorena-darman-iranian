
import itemsData from './itemsData'

export default function Items() {
  const scrollToDetails = (id) => {
    const element = document.getElementById(`item-${id}`);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };
  return (
    <>
    <div className="grid grid-cols-3 w-full m-0 p-0  overflow-auto z-0  ">
      {itemsData.map((item) => (
     
          <div key={item.id} 
          onClick={() => scrollToDetails(item.id)}
           className="flex flex-col h-40  border-[#B7DDF2] rounded-md  p-1 mx-0.5 my-1 bg-[#A6C9E6]   ">
            <img
              className="w-30 h-24 object-cover rounded-md  "
              src={item.img}
              alt={item.title}
            />
            <h2 className=" leading-5.5 font-sans text-[#4A4A4A] break-words text-[19px] font-semibold mt-1 w-30 text-center ">
              {item.title}
            </h2>
          </div>
          
        
      ))}
    </div>

    </>
  );
}


