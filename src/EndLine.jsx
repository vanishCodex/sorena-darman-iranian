export default function EndLine() {
    return (
      <div className="w-full bg-gray-900 text-white text-lg py-6 text-center">
        <p className="text-md">
          © {new Date().getFullYear()} تمامی حقوق محفوظ است. طراحی و توسعه توسط تیم VanishCode
        </p>
        <p className="text-sm mt-2">
          این سایت برای ارائه خدمات بهتر طراحی شده است. استفاده از محتوا با ذکر منبع بلامانع است.
        </p>
        <p className="text-sm mt-2">
        ایمیل پشتیبانی   : <a href="mailto:vanishcodex@gmail.com" className="text-blue-400 hover:underline">vanishcodeX@gmail.com</a>
        </p>
        <p className=" block md:hidden mt-2"> </p>
       <a href="tel:+98123456789" className=" block md:hidden text-blue-400 hover:underline">   تماس پشتیبانی :  +98 123 456 789</a>
        
      </div>
    );
  }
  