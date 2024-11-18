import Image from "next/image";

const Header = () => {
  return (
    <header className="border-b border-b-black">
      <div className="flex mx-6 my-3 justify-center items-center gap-8">
        <div className="flex flex-grow justify-start items-center gap-2 px-2">
          <Image src="/logo.svg" alt="logo" width={32} height={30} />
          <span className="font-inter text-2xl font-bold">Ddsgnr</span>
        </div>
        <div className="flex flex-grow-0 justify-center items-center p-6">
					<Image src="/menu.svg" alt="menu" width={24} height={24} />
				</div>
      </div>
    </header>
  );
};

export default Header;
