import Image from "next/image";

export default function Home() {
  return (
    <div>
      {/* Hero */}
      <div className="flex flex-col xl:flex-row justify-center xl:justify-between items-center">
        <div className="flex flex-col justify-center items-start py-16 xl:py-0 xl:pr-[60px] xl:pl-20 px-6 gap-6">
          <div className="flex flex-col justify-center items-start gap-6">
            <h1 className="font-bold text-[40px]/[48px] xl:text-[56px]/[68px]">
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
          className="object-cover object-top h-[800px] xl:h-auto w-screen xl:w-[50vw]"
        />
      </div>
      {/* Marquee */}
      <div className="xl:bg-[#f7f7f7] flex flex-col xl:flex-row justify-center items-start py-12 xl:py-20 px-6 xl:px-16 gap-6 xl:gap-16">
        <p className="font-bold text-lg xl:text-2xl">
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
      <div className="flex flex-col justify-center items-center py-28 px-6 gap-12 xl:gap-20">
        <div className="flex flex-col justify-center items-center xl:items-start gap-6">
          <h2 className="font-bold text-center text-[32px]/[40px] xl:text-5xl">
            Explore Courses By Category
          </h2>
          <p className="text-center text-lg">
            Discover a wide range of courses covering a variety of subjects,
            taught by expert instructors.
          </p>
        </div>
        <div className="flex flex-col justify-center items-center gap-16 w-full">
          <div className="xl:flex xl:flex-col xl:justify-center xl:items-center xl:gap-16">
            {/* first */}
            <div className="flex flex-col xl:flex-row justify-center items-center gap-6">
              <div className="flex justify-center items-center bg-[#F7F7F7] p-4 gap-8 rounded-[5px] w-full">
                <Image
                  src={"/cource-icon-1.svg"}
                  alt="cource-icon-1"
                  width={32}
                  height={32}
                  className="rounded-[5px] p-[34px] h-[100px] w-[100px] bg-white"
                />
                <div>
                  <h3 className="font-semibold text-xl">
                    Design & Development
                  </h3>
                  <p className="text-lg">50+ Courses Available</p>
                </div>
              </div>
              <div className="flex justify-center items-center bg-[#F7F7F7] p-4 gap-8 rounded-[5px] w-full">
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
              </div>
              <div className="flex justify-center items-center bg-[#F7F7F7] p-4 gap-8 rounded-[5px] w-full">
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
            {/* second */}
            <div className="hidden xl:flex flex-col xl:flex-row justify-center items-center gap-6">
              <div className="flex justify-center items-center bg-[#F7F7F7] p-4 gap-8 rounded-[5px] w-full">
                <Image
                  src={"/cource-icon-4.svg"}
                  alt="cource-icon-4"
                  width={32}
                  height={32}
                  className="rounded-[5px] p-[34px] h-[100px] w-[100px] bg-white"
                />
                <div>
                  <h3 className="font-semibold text-xl">Communication</h3>
                  <p className="text-lg">50+ Courses Available</p>
                </div>
              </div>
              <div className="flex justify-center items-center bg-[#F7F7F7] p-4 gap-8 rounded-[5px] w-full">
                <Image
                  src={"/cource-icon-5.svg"}
                  alt="cource-icon-5"
                  width={32}
                  height={32}
                  className="rounded-[5px] p-[34px] h-[100px] w-[100px] bg-white"
                />
                <div>
                  <h3 className="font-semibold text-xl">Digiat Marketing</h3>
                  <p className="text-lg">50+ Courses Available</p>
                </div>
              </div>
              <div className="flex justify-center items-center bg-[#F7F7F7] p-4 gap-8 rounded-[5px] w-full">
                <Image
                  src={"/cource-icon-6.svg"}
                  alt="cource-icon-6"
                  width={32}
                  height={32}
                  className="rounded-[5px] p-[34px] h-[100px] w-[100px] bg-white"
                />
                <div>
                  <h3 className="font-semibold text-xl">Self Development</h3>
                  <p className="text-lg">50+ Courses Available</p>
                </div>
              </div>
            </div>
            {/* third */}
            <div className="hidden xl:flex flex-col xl:flex-row justify-center items-center gap-6">
              <div className="flex justify-center items-center bg-[#F7F7F7] p-4 gap-8 rounded-[5px] w-full">
                <Image
                  src={"/cource-icon-7.svg"}
                  alt="cource-icon-7"
                  width={32}
                  height={32}
                  className="rounded-[5px] p-[34px] h-[100px] w-[100px] bg-white"
                />
                <div>
                  <h3 className="font-semibold text-xl">Business</h3>
                  <p className="text-lg">50+ Courses Available</p>
                </div>
              </div>
              <div className="flex justify-center items-center bg-[#F7F7F7] p-4 gap-8 rounded-[5px] w-full">
                <Image
                  src={"/cource-icon-8.svg"}
                  alt="cource-icon-8"
                  width={32}
                  height={32}
                  className="rounded-[5px] p-[34px] h-[100px] w-[100px] bg-white"
                />
                <div>
                  <h3 className="font-semibold text-xl">Finance</h3>
                  <p className="text-lg">50+ Courses Available</p>
                </div>
              </div>
              <div className="flex justify-center items-center bg-[#F7F7F7] p-4 gap-8 rounded-[5px] w-full">
                <Image
                  src={"/cource-icon-9.svg"}
                  alt="cource-icon-9"
                  width={32}
                  height={32}
                  className="rounded-[5px] p-[34px] h-[100px] w-[100px] bg-white"
                />
                <div>
                  <h3 className="font-semibold text-xl">Consulting</h3>
                  <p className="text-lg">50+ Courses Available</p>
                </div>
              </div>
            </div>
          </div>
          <button className="py-3 px-6 border border-black rounded-[5px]">
            View All Courses
          </button>
        </div>
      </div>
      {/* Achivements */}
      <div className="flex flex-col justify-center items-center py-12 xl:py-28 px-6 gap-12 xl:gap-8">
        <div className="flex flex-col justify-center items-center gap-4 xl:gap-6">
          <h2 className="text-center font-bold text-[32px]/[40px] xl:text-5xl">
            Our Achivements
          </h2>
          <p className="xl:hidden text-center text-lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            varius enim in eros elementum tristique.
          </p>
          <p className="hidden xl:block text-center text-lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            varius enim in eros elementum tristique. Duis cursus, mi quis
            viverra ornare, eros dolor interdum nulla, ut commodo diam libero
            vitae erat.
          </p>
        </div>
        <div className="flex flex-col xl:flex-row justify-center items-center gap-6 w-full">
          <div className="flex justify-center items-center py-2 gap-4 xl:gap-6">
            <div className="px-16">
              <h3 className="font-bold text-xl xl:text-[40px]/[48px] text-center">
                +200
              </h3>
              <p className="text-center">Courses</p>
            </div>
            <div className="px-16">
              <h3 className="font-bold text-xl xl:text-[40px]/[48px] text-center">
                +200
              </h3>
              <p className="text-center">Courses</p>
            </div>
          </div>
          <div className="flex justify-center items-center py-2 gap-4 xl:gap-6">
            <div className="px-16">
              <h3 className="font-bold text-xl xl:text-[40px]/[48px] text-center">
                +200
              </h3>
              <p className="text-center">Courses</p>
            </div>
            <div className="px-16">
              <h3 className="font-bold text-xl xl:text-[40px]/[48px] text-center">
                +200
              </h3>
              <p className="text-center">Courses</p>
            </div>
          </div>
        </div>
      </div>
      {/* Cources */}
      <div className="flex flex-col justify-center items-start py-12 xl:py-28 px-6 xl:px-16 gap-12">
        <div className="flex flex-col w-full justify-center items-center gap-4">
          <h2 className="font-bold text-center text-[32px]/[40px] xl:text-5xl">
            Courses
          </h2>
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
          {/* Courses */}
          <div className="xl:flex xl:flex-col xl:justify-center xl:items-center xl:gap-16">
            {/* First */}
            <div className="flex flex-col xl:flex-row justify-center items-center gap-8">
              <div className="flex flex-col justify-center items-center gap-6 rounded-[5px] bg-[#f7f7f7]">
                <Image
                  src={"/course-image-1.png"}
                  alt="course-image-1"
                  width={400}
                  height={300}
                  className="w-full"
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
                  alt="course-image-2"
                  width={400}
                  height={300}
                  className="w-full"
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
                    <h3 className="font-bold text-2xl">
                      Introduction to Python
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
              <div className="flex flex-col justify-center items-center gap-6 rounded-[5px] bg-[#f7f7f7]">
                <Image
                  src={"/course-image-3.png"}
                  alt="course-image-3"
                  width={400}
                  height={300}
                  className="w-full"
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
            {/* Second */}
            <div className="hidden xl:flex justify-center items-center gap-8">
              <div className="flex flex-col justify-center items-center gap-6 rounded-[5px] bg-[#f7f7f7]">
                <Image
                  src={"/course-image-4.png"}
                  alt="course-image-4"
                  width={400}
                  height={300}
                  className="w-full"
                />
                <div className="flex flex-col justify-center items-center px-4 pb-6 gap-6">
                  <div className="flex flex-col justify-center items-start gap-2">
                    <div className="flex justify-end items-start w-full">
                      <span className="flex-grow text-sm font-semibold">
                        Art
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
                    <h3 className="font-bold text-2xl">Art Specialization</h3>
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
                  src={"/course-image-5.png"}
                  alt="course-image-5"
                  width={400}
                  height={300}
                  className="w-full"
                />
                <div className="flex flex-col justify-center items-center px-4 pb-6 gap-6">
                  <div className="flex flex-col justify-center items-start gap-2">
                    <div className="flex justify-end items-start w-full">
                      <span className="flex-grow text-sm font-semibold">
                        Law
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
                    <h3 className="font-bold text-2xl">Rule of Law</h3>
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
                  src={"/course-image-6.png"}
                  alt="course-image-6"
                  width={400}
                  height={300}
                  className="w-full"
                />
                <div className="flex flex-col justify-center items-center px-4 pb-6 gap-6">
                  <div className="flex flex-col justify-center items-start gap-2">
                    <div className="flex justify-end items-start w-full">
                      <span className="flex-grow text-sm font-semibold">
                        Tech
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
                      Introduction to webflow
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
          </div>
          <button className="py-2 px-4 border border-black rounded-[5px]">
            View All Courses
          </button>
        </div>
      </div>
      {/* Team */}
      <div className="flex flex-col justify-center items-center py-12 xl:py-28 px-6 xl:px-16 gap-12 xl:gap-20 bg-[#f7f7f7]">
        <div className="flex flex-col justify-center items-center gap-4">
          <h2 className="font-bold text-[32px]/[40px] xl:text-5xl text-center">
            Our team
          </h2>
          <p className="text-center text-lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>
        <div className="flex flex-col xl:flex-row justify-center xl:justify-evenly items-center gap-12 xl:gap-0 xl:w-full">
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
        <div className="hidden xl:flex flex-col xl:flex-row justify-center xl:justify-evenly items-center gap-12 xl:gap-0 xl:w-full">
          <div className="flex flex-col justify-center items-center gap-6">
            <Image src={"/team-4.png"} alt="team-4" height={80} width={80} />
            <div className="flex flex-col justify-center items-center">
              <h3 className="text-lg font-semibold text-center">
                Erick Kipkemboi
              </h3>
              <p className="text-lg text-center">Web Designer</p>
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
            <Image src={"/team-5.png"} alt="team-5" height={80} width={80} />
            <div className="flex flex-col justify-center items-center">
              <h3 className="text-lg font-semibold text-center">
                Stephen Kerubo
              </h3>
              <p className="text-lg text-center">President of Sales</p>
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
            <Image src={"/team-6.png"} alt="team-6" height={80} width={80} />
            <div className="flex flex-col justify-center items-center">
              <h3 className="text-lg font-semibold text-center">John Leboo</h3>
              <p className="text-lg text-center">Dog Trainer</p>
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
        <button className="xl:hidden px-4 py-2 rounded-[5px] border border-black">
          View All
        </button>
      </div>
      {/* Testimonials */}
      <div className="flex flex-col justify-center items-center xl:bg-[#f7f7f7] xl:items-start py-12 xl:py-28 px-6 xl:px-16 gap-12 xl:gap-20">
        <div className="flex flex-col justify-center items-center xl:items-start gap-6">
          <h2 className="xl:hidden font-bold text-[32px]/[40px] text-center">
            What Our Student Say
          </h2>
          <h2 className="hidden xl:block font-bold text-5xl">
            Customer testimonials
          </h2>
          <p className="text-center xl:text-start text-lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>
        <div className="flex flex-col justify-center items-center gap-12 w-full">
          <div className="xl:flex justify-center items-center gap-8">
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
                    <p className="xl:hidden">Position, Company name</p>
                    <p className="hidden xl:block">Software Developer</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="hidden xl:flex flex-col justify-center items-start gap-6 p-8 border border-black w-full">
              <Image src={"/stars.svg"} alt="stars" width={116} height={19} />
              <div className="flex flex-col justify-center items-start w-full gap-6">
                <p className="text-lg">
                  &quot;Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse varius enim in eros elementum tristique. Duis
                  cursus, mi quis viverra ornare.&quot;
                </p>
                <div className="flex justify-start items-center gap-5">
                  <Image
                    src={"/student-2.png"}
                    alt="student-2"
                    height={56}
                    width={56}
                  />
                  <div className="flex flex-col justify-center items-start">
                    <h3 className="font-semibold">Erick Kipkemboi</h3>
                    <p>Scrum Master</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="hidden xl:flex flex-col justify-center items-start gap-6 p-8 border border-black w-full">
              <Image src={"/stars.svg"} alt="stars" width={116} height={19} />
              <div className="flex flex-col justify-center items-start w-full gap-6">
                <p className="text-lg">
                  &quot;Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse varius enim in eros elementum tristique. Duis
                  cursus, mi quis viverra ornare.&quot;
                </p>
                <div className="flex justify-start items-center gap-5">
                  <Image
                    src={"/student-3.png"}
                    alt="student-3"
                    height={56}
                    width={56}
                  />
                  <div className="flex flex-col justify-center items-start">
                    <h3 className="font-semibold">Stephen Kerubo</h3>
                    <p>UI/UX Designer</p>
                  </div>
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
                <Image src={"/next.svg"} alt="next" height={24} width={24} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
