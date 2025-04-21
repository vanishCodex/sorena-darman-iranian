import searchlogo from './images/search.png'

export default function SearchForm() {
    return (
      <div id='searchForm' className=" relative w-60  inline ">
        <input
          className="border-2 w-full border-blue-300 rounded-2xl p-2 mt-4  text-white
             focus:border-blue-500 focus:ring-2 focus:ring-blue-400 text-right md:h-
            placeholder:text-right leading-normal placeholder:-translate-y-1  placeholder:tracking-wide text-lg pb-0 "
          type="text"
          dir='rtl'
          placeholder="جستجو کنید"
        />
        <img src={searchlogo} alt="searchlogo"
        className=' absolute w-8  bottom-0 left-0 ' />
      </div>
    );
  }
  