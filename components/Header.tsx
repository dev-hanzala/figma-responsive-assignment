import Image from "next/image";

const Header = () => {
  return (
    <header>
      <div className="hidden border-b border-b-black px-16 xl:block xl:bg-[#f7f7f7]">
        <div className="flex w-full items-center justify-between gap-8 py-3">
          <div className="flex items-center justify-center gap-4">
            <p className="text-sm">Phone Number: 956 742 455 678</p>
            <div className="h-8 border border-black"></div>
            <p className="text-sm">Email:info@ddsgnr.com</p>
          </div>
          <div className="flex items-center justify-center gap-3">
            <Image
              src={"/facebook.svg"}
              alt="facebook"
              height={24}
              width={24}
            />
            <Image
              src={"/instagram.svg"}
              alt="instagram"
              height={24}
              width={24}
            />
            <Image src={"/twitter.svg"} alt="twitter" height={24} width={24} />
            <Image
              src={"/linkedin.svg"}
              alt="linkedin"
              height={24}
              width={24}
            />
          </div>
        </div>
      </div>
      <div className="border-b border-b-black xl:bg-[#f7f7f7]">
        <div className="mx-6 my-3 flex items-center justify-center gap-8 xl:mx-16 xl:my-[14px] xl:justify-between xl:gap-0">
          <div className="flex flex-grow items-center justify-start gap-2 px-2 xl:py-[29px]">
            <Image src="/logo.svg" alt="logo" width={32} height={30} />
            <span className="font-inter text-2xl font-bold">Ddsgnr</span>
          </div>
          <div className="hidden gap-8 bg-white xl:flex">
            <div className="flex gap-8">
              <button className="border-b border-black p-[10px]">Home</button>
              <button className="p-[10px]">Courses</button>
              <button className="p-[10px]">Services</button>
              <button className="p-[10px]">Achievement</button>
              <button className="p-[10px]">About Us</button>
              <button className="p-[10px]">Testimonial</button>
            </div>
            <div className="flex gap-4">
              <button className="rounded-[5px] border border-black px-5 py-2">
                Login
              </button>
              <button className="rounded-[5px] border border-black bg-black px-5 py-2 text-white">
                Sign Up
              </button>
            </div>
          </div>
          {/* Mobile Menu Icon */}
          <div className="flex flex-grow-0 items-center justify-center p-6 xl:hidden">
            <Image src="/menu.svg" alt="menu" width={24} height={24} />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
