import Image from "next/image";

export default function Home() {
  return (
    <div>
      {/* Hero */}
      <div className="flex flex-col justify-center items-start h-fit">
        <div className="flex flex-col justify-center items-start py-16 px-6 gap-6">
          <div className="flex flex-col justify-center items-start gap-6">
            <h1 className="font-bold text-[40px]/[48px]">
              Learn new skills online with ease
            </h1>
            <p className="text-lg">
              Discover a wide range of courses covering a variety of subjects,
              taught by expert instructors.
            </p>
          </div>
          <div className="flex justify-start items-center pt-4 gap-4">
            <button className="bg-black text-white py-3 px-6 border border-black rounded-[5px]">
              Start learning now
            </button>
            <button className="py-3 px-6 border border-black rounded-[5px]">
              Explore Courses
            </button>
          </div>
        </div>
        <Image
          src={"/hero.png"}
          alt="hero"
          width={1200}
          height={1800}
          className="object-cover object-top h-[100vw] w-screen"
        />
      </div>
      {/* Marquee */}
      <div className="flex flex-col justify-center items-start py-12 px-6 gap-6">
        <p className="font-bold text-lg">
          Trusted by the world&apos;s best companies [social proof to build
          credibility]
        </p>
        <div className="flex justify-start items-center py-4 gap-4 overflow-clip">
          <Image
            src={"/marquee-logo-1.svg"}
            alt="marquee-logo-1"
            width={108}
            height={32}
          />
          <Image
            src={"/marquee-logo-2.svg"}
            alt="marquee-logo-1"
            width={108}
            height={32}
          />
          <Image
            src={"/marquee-logo-3.svg"}
            alt="marquee-logo-1"
            width={108}
            height={32}
          />
          <Image
            src={"/marquee-logo-4.svg"}
            alt="marquee-logo-1"
            width={108}
            height={32}
          />
          <Image
            src={"/marquee-logo-5.svg"}
            alt="marquee-logo-1"
            width={108}
            height={32}
          />
          <Image
            src={"/marquee-logo-6.svg"}
            alt="marquee-logo-1"
            width={108}
            height={32}
          />
        </div>
      </div>
      {/* Category */}
      <div className="flex flex-col justify-center items-start py-12 px-6 gap-12">
        <div className="flex flex-col justify-center items-center gap-6">
          <h2 className="font-bold text-center text-[32px]/[40px]">
            Explore Courses By Category
          </h2>
          <p className="text-center text-lg">
            Discover a wide range of courses covering a variety of subjects,
            taught by expert instructors.
          </p>
        </div>
        <div className="flex flex-col justify-center items-center gap-16 w-full">
          <div className="flex flex-col justify-center items-center gap-6">
            <div className="flex justify-center items-center bg-[#F7F7F7] p-4 gap-8 rounded-[5px]">
              <Image
                src={"/cource-icon-1.svg"}
                alt="cource-icon-1"
                width={32}
                height={32}
                className="rounded-[5px] p-[34px] h-[100px] w-[100px] bg-white"
              />
              <div>
                <h3 className="font-semibold text-xl">Design & Development</h3>
                <p className="text-lg">50+ Courses Available</p>
              </div>
            </div>
            <div className="flex justify-center items-center bg-[#F7F7F7] p-4 gap-8 rounded-[5px]">
              <Image
                src={"/cource-icon-2.svg"}
                alt="cource-icon-2"
                width={32}
                height={32}
                className="rounded-[5px] p-[34px] h-[100px] w-[100px] bg-white"
              />
              <div>
                <h3 className="font-semibold text-xl">Marketing</h3>
                <p className="text-lg">50+ Courses Available</p>
              </div>
            </div>{" "}
            <div className="flex justify-center items-center bg-[#F7F7F7] p-4 gap-8 rounded-[5px]">
              <Image
                src={"/cource-icon-3.svg"}
                alt="cource-icon-3"
                width={32}
                height={32}
                className="rounded-[5px] p-[34px] h-[100px] w-[100px] bg-white"
              />
              <div>
                <h3 className="font-semibold text-xl">Development</h3>
                <p className="text-lg">50+ Courses Available</p>
              </div>
            </div>
          </div>
          <button className="py-3 px-6 border border-black rounded-[5px]">
            View All Courses
          </button>
        </div>
      </div>
      {/* Achivements */}
      <div className="flex flex-col justify-center items-start py-12 px-6 gap-12">
        <div className="flex flex-col justify-center items-center gap-4">
          <h2 className="text-center font-bold text-[32px]/[40px]">
            Our Achivements
          </h2>
          <p className="text-center text-lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            varius enim in eros elementum tristique.
          </p>
        </div>
        <div className="flex flex-col justify-center items-center gap-6 w-full">
          <div className="flex justify-center items-center py-2 gap-4">
            <div className="px-16">
              <h3 className="font-bold text-xl text-center">+200</h3>
              <p className="text-center">Courses</p>
            </div>
            <div className="px-16">
              <h3 className="font-bold text-xl text-center">+200</h3>
              <p className="text-center">Courses</p>
            </div>
          </div>
          <div className="flex justify-center items-center py-2 gap-4">
            <div className="px-16">
              <h3 className="font-bold text-xl text-center">+200</h3>
              <p className="text-center">Courses</p>
            </div>
            <div className="px-16">
              <h3 className="font-bold text-xl text-center">+200</h3>
              <p className="text-center">Courses</p>
            </div>
          </div>
        </div>
      </div>
      {/* Cources */}
      <div className="flex flex-col justify-center items-start py-12 px-6 gap-12">
        <div className="flex flex-col w-full justify-center items-center gap-4">
          <h2 className="font-bold text-center text-[32px]/[40px]">Courses</h2>
          <p className="text-center">Your Ultimate Guide to learning</p>
        </div>
        <div className="flex flex-col justify-center items-center w-full gap-16">
          <div className="flex justify-center items-center">
            <button className="py-2 px-4 text-center border-b border-black">
              Popular
            </button>
            <button className="py-2 px-4 text-center">Recommended</button>
            <button className="py-2 px-4 text-center">Best Price</button>
          </div>
          <div className="flex flex-col justify-center items-center gap-8">
            <div className="flex flex-col justify-center items-center gap-6 rounded-[5px] bg-[#f7f7f7]">
              <Image
                src={"/course-image-1.png"}
                alt="course-image-1"
                width={380}
                height={300}
              />
              <div className="flex flex-col justify-center items-center px-4 pb-6 gap-6">
                <div className="flex flex-col justify-center items-start gap-2">
                  <div className="flex justify-end items-start w-full">
                    <span className="flex-grow text-sm font-semibold">
                      Design
                    </span>
                    <div className="flex gap-1 justify-center items-center">
                      <Image
                        src={"/star.svg"}
                        alt="star"
                        width={24}
                        height={24}
                      />
                      <span className="text-sm font-semibold">5.0</span>
                    </div>
                  </div>
                  <h3 className="font-bold text-2xl">UX/UI Design 201</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Suspendisse varius enim in eros.
                  </p>
                </div>
                <div className="flex w-full gap-4">
                  <button className="py-2 px-5 rounded-[5px] border border-black">
                    Enroll Now
                  </button>
                  <button className="py-2 px-5 rounded-[5px]font-medium">
                    $400
                  </button>
                </div>
              </div>
            </div>
            <div className="flex flex-col justify-center items-center gap-6 rounded-[5px] bg-[#f7f7f7]">
              <Image
                src={"/course-image-2.png"}
                alt="course-image-1"
                width={380}
                height={300}
              />
              <div className="flex flex-col justify-center items-center px-4 pb-6 gap-6">
                <div className="flex flex-col justify-center items-start gap-2">
                  <div className="flex justify-end items-start w-full">
                    <span className="flex-grow text-sm font-semibold">
                      Programmimg
                    </span>
                    <div className="flex gap-1 justify-center items-center">
                      <Image
                        src={"/star.svg"}
                        alt="star"
                        width={24}
                        height={24}
                      />
                      <span className="text-sm font-semibold">5.0</span>
                    </div>
                  </div>
                  <h3 className="font-bold text-2xl">Introduction to Python</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Suspendisse varius enim in eros.
                  </p>
                </div>
                <div className="flex w-full gap-4">
                  <button className="py-2 px-5 rounded-[5px] border border-black">
                    Enroll Now
                  </button>
                  <button className="py-2 px-5 rounded-[5px]font-medium">
                    $400
                  </button>
                </div>
              </div>
            </div>
            <div className="flex flex-col justify-center items-center gap-6 rounded-[5px] bg-[#f7f7f7]">
              <Image
                src={"/course-image-3.png"}
                alt="course-image-1"
                width={380}
                height={300}
              />
              <div className="flex flex-col justify-center items-center px-4 pb-6 gap-6">
                <div className="flex flex-col justify-center items-start gap-2">
                  <div className="flex justify-end items-start w-full">
                    <span className="flex-grow text-sm font-semibold">
                      Business
                    </span>
                    <div className="flex gap-1 justify-center items-center">
                      <Image
                        src={"/star.svg"}
                        alt="star"
                        width={24}
                        height={24}
                      />
                      <span className="text-sm font-semibold">5.0</span>
                    </div>
                  </div>
                  <h3 className="font-bold text-2xl">
                    Data Analysis for Beginners
                  </h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Suspendisse varius enim in eros.
                  </p>
                </div>
                <div className="flex w-full gap-4">
                  <button className="py-2 px-5 rounded-[5px] border border-black">
                    Enroll Now
                  </button>
                  <button className="py-2 px-5 rounded-[5px]font-medium">
                    $400
                  </button>
                </div>
              </div>
            </div>
          </div>
          <button className="py-2 px-4 border border-black rounded-[5px]">
            View All Courses
          </button>
        </div>
      </div>
      {/* Team */}
      <div className="flex flex-col justify-center items-center py-12 px-6 gap-12 bg-[#f7f7f7]">
        <div className="flex flex-col justify-center items-center gap-4">
          <h2 className="font-bold text-[32px]/[40px] text-center">Our team</h2>
          <p className="text-center text-lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>
        <div className="flex flex-col justify-center items-center gap-12">
          <div className="flex flex-col justify-center items-center gap-6">
            <Image src={"/team-1.png"} alt="team-1" height={80} width={80} />
            <div className="flex flex-col justify-center items-center">
              <h3 className="text-lg font-semibold text-center">James Nduku</h3>
              <p className="text-lg text-center">Marketing Coordinator</p>
            </div>
            <div className="flex justify-center items-center gap-[14px]">
              <Image
                src={"/social-1.svg"}
                alt="social-1"
                height={24}
                width={24}
              />
              <Image
                src={"/social-2.svg"}
                alt="social-2"
                height={24}
                width={24}
              />
              <Image
                src={"/social-3.svg"}
                alt="social-3"
                height={24}
                width={24}
              />
            </div>
          </div>
          <div className="flex flex-col justify-center items-center gap-6">
            <Image src={"/team-2.png"} alt="team-2" height={80} width={80} />
            <div className="flex flex-col justify-center items-center">
              <h3 className="text-lg font-semibold text-center">
                Joseph Munyambu
              </h3>
              <p className="text-lg text-center">Nursing Assistant</p>
            </div>
            <div className="flex justify-center items-center gap-[14px]">
              <Image
                src={"/social-1.svg"}
                alt="social-1"
                height={24}
                width={24}
              />
              <Image
                src={"/social-2.svg"}
                alt="social-2"
                height={24}
                width={24}
              />
              <Image
                src={"/social-3.svg"}
                alt="social-3"
                height={24}
                width={24}
              />
            </div>
          </div>
          <div className="flex flex-col justify-center items-center gap-6">
            <Image src={"/team-3.png"} alt="team-3" height={80} width={80} />
            <div className="flex flex-col justify-center items-center">
              <h3 className="text-lg font-semibold text-center">
                Joseph Ngumbau
              </h3>
              <p className="text-lg text-center">Medical Assistant</p>
            </div>
            <div className="flex justify-center items-center gap-[14px]">
              <Image
                src={"/social-1.svg"}
                alt="social-1"
                height={24}
                width={24}
              />
              <Image
                src={"/social-2.svg"}
                alt="social-2"
                height={24}
                width={24}
              />
              <Image
                src={"/social-3.svg"}
                alt="social-3"
                height={24}
                width={24}
              />
            </div>
          </div>
        </div>
      </div>
      {/* Testimonials */}
      <div className="flex flex-col justify-center items-center py-12 px-6 gap-12">
        <div className="flex flex-col justify-center items-center gap-6">
          <h2 className="font-bold text-[32px]/[40px] text-center">
            What Our Student Say
          </h2>
          <p className="text-center text-lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>
        <div className="flex flex-col justify-center items-center gap-12 w-full">
          <div className="flex flex-col justify-center items-start gap-6 p-8 border border-black w-full">
            <Image src={"/stars.svg"} alt="stars" width={116} height={19} />
            <div className="flex flex-col justify-center items-start w-full gap-6">
              <p className="text-lg">
                &quot;Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse varius enim in eros elementum tristique. Duis
                cursus, mi quis viverra ornare.&quot;
              </p>
              <div className="flex justify-start items-center gap-5">
                <Image
                  src={"/student-1.png"}
                  alt="student-1"
                  height={56}
                  width={56}
                />
                <div className="flex flex-col justify-center items-start">
                  <h3 className="font-semibold">Wade Warren</h3>
                  <p>Position, Company name</p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-between items-center w-full">
            <Image src={"/dots.svg"} alt="dots" height={8} width={72} />
            <div className="flex justify-center items-center gap-[15px]">
              <button className="p-3 border border-black rounded-[50px]">
                <Image
                  src={"/previous.svg"}
                  alt="previous"
                  height={24}
                  width={24}
                />
              </button>
              <button className="p-3 border border-black rounded-[50px]">
                <Image
                  src={"/next.svg"}
                  alt="next"
                  height={24}
                  width={24}
                />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
