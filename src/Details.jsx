
import itemsData from './itemsData';

export default function Details() {
  return (
    <section id='desktopItems' className="w-full flex flex-col items-center p-4 gap-y-6 md:grid md:grid-cols-3 md:gap-x-0 ">
      {itemsData.map((detail) => (
        <div
          key={detail.id}
          id={`item-${detail.id}`} 
          className="max-w-md bg-gray-500 rounded-xl shadow-md overflow-hidden p-4 md:h-[98%] "
        >
          <img
            src={detail.img2}
            alt={detail.title}
            className="w-full h-48 object-cover rounded-md mb-4"
          />
          <h2 className="text-2xl font-bold text-blue-300 font-mono  ">{detail.title}</h2>
          <p className="text-right text-white leading-loose mt-3 text-lg">
           
            {detail.caption}
          </p>
        </div>
      ))}
    </section>
  );
}
