import Image from "next/image"

const Footer = () => {
	return (
    <footer className="flex flex-col justify-center items-center py-12 px-6 gap-12">
      <div className="flex flex-col justify-center items-center gap-12">
        <div className="flex flex-col justify-center items-center gap-6 w-full">
          <div className="flex flex-col justify-center items-center gap-4">
            <h2 className="font-semibold text-lg text-center">
              Subscribe to our newsletter
            </h2>
            <p className="text-center">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>
          <div className="flex flex-col justify-center items-center gap-4 w-full">
            <form className="flex flex-col justify-center items-center gap-4 w-full">
              <input
                placeholder="Enter your email"
                type="email"
                className="w-full p-3 border border-black rounded-[5px]"
              />
              <button className="w-full px-6 py-3 border border-black rounded-[5px]">
                Subscribe
              </button>
            </form>
            <p className="text-sm text-center">
              By subscribing you agree to with our{" "}
              <span className="underline">Privacy Policy</span>
            </p>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center gap-8">
          <div className="flex justify-center items-center gap-[10px]">
            <Image src={"/logo.svg"} alt="logo" height={30} width={32} />
            <span className="font-inter font-bold text-2xl">Ddsgnr</span>
          </div>
          <div className="flex flex-col justify-center items-center gap-4">
            <h3 className="font-semibold text-center">Courses</h3>
            <div>
              <p className="py-2 text-sm text-center">Business</p>
              <p className="py-2 text-sm text-center">Development</p>
              <p className="py-2 text-sm text-center">Technology</p>
              <p className="py-2 text-sm text-center">Design</p>
              <p className="py-2 text-sm text-center">Programming</p>
            </div>
          </div>
          <div className="flex flex-col justify-center items-center gap-4">
            <h3 className="font-semibold text-center">Resources</h3>
            <div>
              <p className="py-2 text-sm text-center">Career</p>
              <p className="py-2 text-sm text-center">Resume</p>
              <p className="py-2 text-sm text-center">Learning</p>
              <p className="py-2 text-sm text-center">Interview Preperation</p>
              <p className="py-2 text-sm text-center">Jobs</p>
            </div>
          </div>
          <div className="flex flex-col justify-center items-center gap-4">
            <h3 className="font-semibold text-center">About Us</h3>
            <div>
              <p className="py-2 text-sm text-center">Contact</p>
              <p className="py-2 text-sm text-center">Help/Support</p>
              <p className="py-2 text-sm text-center">FAQ</p>
              <p className="py-2 text-sm text-center">Terms and Conditions</p>
              <p className="py-2 text-sm text-center">Partners</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center gap-8 w-full">
          <hr className="border border-black w-full" />
          <div className="flex flex-col justify-center items-center gap-6">
            <div className="flex flex-col justify-center items-center gap-6">
              <p className="text-center text-sm">
                2023 Ddsgnr. All right reserved.
              </p>
              <div className="flex items-center gap-6">
                <p className="underline text-sm text-center">Privacy Policy</p>
                <p className="underline text-sm text-center">
                  Terms of Service
                </p>
                <p className="underline text-sm text-center">
                  Cookies Settings
                </p>
              </div>
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
              <Image
                src={"/twitter.svg"}
                alt="twitter"
                height={24}
                width={24}
              />
              <Image
                src={"/linkedin.svg"}
                alt="linkedin"
                height={24}
                width={24}
              />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer