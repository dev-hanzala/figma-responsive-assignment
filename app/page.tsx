import Image from "next/image";

export default function Home() {
  return (
    <div>
      {/* Hero */}
      <div className="flex flex-col items-center justify-center xl:flex-row xl:justify-between">
        <div className="flex flex-col items-start justify-center gap-6 px-6 py-16 xl:py-0 xl:pl-20 xl:pr-[60px]">
          <div className="flex flex-col items-start justify-center gap-6">
            <h1 className="text-[40px]/[48px] font-bold xl:text-[56px]/[68px]">
              Learn new skills online with ease
            </h1>
            <p className="text-lg">
              Discover a wide range of courses covering a variety of subjects,
              taught by expert instructors.
            </p>
          </div>
          <div className="flex items-center justify-start gap-4 pt-4">
            <button className="rounded-[5px] border border-black bg-black px-6 py-3 text-white">
              Start learning now
            </button>
            <button className="rounded-[5px] border border-black px-6 py-3">
              Explore Courses
            </button>
          </div>
        </div>
        <Image
          src={"/hero.png"}
          alt="hero"
          width={1200}
          height={1800}
          className="h-[800px] w-screen object-cover object-top xl:h-auto xl:w-[50vw]"
        />
      </div>
      {/* Marquee */}
      <div className="flex flex-col items-start justify-center gap-6 px-6 py-12 xl:flex-row xl:gap-16 xl:bg-[#f7f7f7] xl:px-16 xl:py-20">
        <p className="text-lg font-bold xl:text-2xl">
          Trusted by the world&apos;s best companies [social proof to build
          credibility]
        </p>
        <div className="flex items-center justify-start gap-4 overflow-clip py-4">
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
      <div className="flex flex-col items-center justify-center gap-12 px-6 py-28 xl:gap-20">
        <div className="flex flex-col items-center justify-center gap-6 xl:items-start">
          <h2 className="text-center text-[32px]/[40px] font-bold xl:text-5xl">
            Explore Courses By Category
          </h2>
          <p className="text-center text-lg">
            Discover a wide range of courses covering a variety of subjects,
            taught by expert instructors.
          </p>
        </div>
        <div className="flex w-full flex-col items-center justify-center gap-16">
          <div className="xl:flex xl:flex-col xl:items-center xl:justify-center xl:gap-16">
            {/* first */}
            <div className="flex flex-col items-center justify-center gap-6 xl:flex-row">
              <div className="flex w-full items-center justify-center gap-8 rounded-[5px] bg-[#F7F7F7] p-4">
                <Image
                  src={"/cource-icon-1.svg"}
                  alt="cource-icon-1"
                  width={32}
                  height={32}
                  className="h-[100px] w-[100px] rounded-[5px] bg-white p-[34px]"
                />
                <div>
                  <h3 className="text-xl font-semibold">
                    Design & Development
                  </h3>
                  <p className="text-lg">50+ Courses Available</p>
                </div>
              </div>
              <div className="flex w-full items-center justify-center gap-8 rounded-[5px] bg-[#F7F7F7] p-4">
                <Image
                  src={"/cource-icon-2.svg"}
                  alt="cource-icon-2"
                  width={32}
                  height={32}
                  className="h-[100px] w-[100px] rounded-[5px] bg-white p-[34px]"
                />
                <div>
                  <h3 className="text-xl font-semibold">Marketing</h3>
                  <p className="text-lg">50+ Courses Available</p>
                </div>
              </div>
              <div className="flex w-full items-center justify-center gap-8 rounded-[5px] bg-[#F7F7F7] p-4">
                <Image
                  src={"/cource-icon-3.svg"}
                  alt="cource-icon-3"
                  width={32}
                  height={32}
                  className="h-[100px] w-[100px] rounded-[5px] bg-white p-[34px]"
                />
                <div>
                  <h3 className="text-xl font-semibold">Development</h3>
                  <p className="text-lg">50+ Courses Available</p>
                </div>
              </div>
            </div>
            {/* second */}
            <div className="hidden flex-col items-center justify-center gap-6 xl:flex xl:flex-row">
              <div className="flex w-full items-center justify-center gap-8 rounded-[5px] bg-[#F7F7F7] p-4">
                <Image
                  src={"/cource-icon-4.svg"}
                  alt="cource-icon-4"
                  width={32}
                  height={32}
                  className="h-[100px] w-[100px] rounded-[5px] bg-white p-[34px]"
                />
                <div>
                  <h3 className="text-xl font-semibold">Communication</h3>
                  <p className="text-lg">50+ Courses Available</p>
                </div>
              </div>
              <div className="flex w-full items-center justify-center gap-8 rounded-[5px] bg-[#F7F7F7] p-4">
                <Image
                  src={"/cource-icon-5.svg"}
                  alt="cource-icon-5"
                  width={32}
                  height={32}
                  className="h-[100px] w-[100px] rounded-[5px] bg-white p-[34px]"
                />
                <div>
                  <h3 className="text-xl font-semibold">Digiat Marketing</h3>
                  <p className="text-lg">50+ Courses Available</p>
                </div>
              </div>
              <div className="flex w-full items-center justify-center gap-8 rounded-[5px] bg-[#F7F7F7] p-4">
                <Image
                  src={"/cource-icon-6.svg"}
                  alt="cource-icon-6"
                  width={32}
                  height={32}
                  className="h-[100px] w-[100px] rounded-[5px] bg-white p-[34px]"
                />
                <div>
                  <h3 className="text-xl font-semibold">Self Development</h3>
                  <p className="text-lg">50+ Courses Available</p>
                </div>
              </div>
            </div>
            {/* third */}
            <div className="hidden flex-col items-center justify-center gap-6 xl:flex xl:flex-row">
              <div className="flex w-full items-center justify-center gap-8 rounded-[5px] bg-[#F7F7F7] p-4">
                <Image
                  src={"/cource-icon-7.svg"}
                  alt="cource-icon-7"
                  width={32}
                  height={32}
                  className="h-[100px] w-[100px] rounded-[5px] bg-white p-[34px]"
                />
                <div>
                  <h3 className="text-xl font-semibold">Business</h3>
                  <p className="text-lg">50+ Courses Available</p>
                </div>
              </div>
              <div className="flex w-full items-center justify-center gap-8 rounded-[5px] bg-[#F7F7F7] p-4">
                <Image
                  src={"/cource-icon-8.svg"}
                  alt="cource-icon-8"
                  width={32}
                  height={32}
                  className="h-[100px] w-[100px] rounded-[5px] bg-white p-[34px]"
                />
                <div>
                  <h3 className="text-xl font-semibold">Finance</h3>
                  <p className="text-lg">50+ Courses Available</p>
                </div>
              </div>
              <div className="flex w-full items-center justify-center gap-8 rounded-[5px] bg-[#F7F7F7] p-4">
                <Image
                  src={"/cource-icon-9.svg"}
                  alt="cource-icon-9"
                  width={32}
                  height={32}
                  className="h-[100px] w-[100px] rounded-[5px] bg-white p-[34px]"
                />
                <div>
                  <h3 className="text-xl font-semibold">Consulting</h3>
                  <p className="text-lg">50+ Courses Available</p>
                </div>
              </div>
            </div>
          </div>
          <button className="rounded-[5px] border border-black px-6 py-3">
            View All Courses
          </button>
        </div>
      </div>
      {/* Achivements */}
      <div className="flex flex-col items-center justify-center gap-12 px-6 py-12 xl:gap-8 xl:py-28">
        <div className="flex flex-col items-center justify-center gap-4 xl:gap-6">
          <h2 className="text-center text-[32px]/[40px] font-bold xl:text-5xl">
            Our Achivements
          </h2>
          <p className="text-center text-lg xl:hidden">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            varius enim in eros elementum tristique.
          </p>
          <p className="hidden text-center text-lg xl:block">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            varius enim in eros elementum tristique. Duis cursus, mi quis
            viverra ornare, eros dolor interdum nulla, ut commodo diam libero
            vitae erat.
          </p>
        </div>
        <div className="flex w-full flex-col items-center justify-center gap-6 xl:flex-row">
          <div className="flex items-center justify-center gap-4 py-2 xl:gap-6">
            <div className="px-16">
              <h3 className="text-center text-xl font-bold xl:text-[40px]/[48px]">
                +200
              </h3>
              <p className="text-center">Courses</p>
            </div>
            <div className="px-16">
              <h3 className="text-center text-xl font-bold xl:text-[40px]/[48px]">
                +200
              </h3>
              <p className="text-center">Courses</p>
            </div>
          </div>
          <div className="flex items-center justify-center gap-4 py-2 xl:gap-6">
            <div className="px-16">
              <h3 className="text-center text-xl font-bold xl:text-[40px]/[48px]">
                +200
              </h3>
              <p className="text-center">Courses</p>
            </div>
            <div className="px-16">
              <h3 className="text-center text-xl font-bold xl:text-[40px]/[48px]">
                +200
              </h3>
              <p className="text-center">Courses</p>
            </div>
          </div>
        </div>
      </div>
      {/* Cources */}
      <div className="flex flex-col items-start justify-center gap-12 px-6 py-12 xl:px-16 xl:py-28">
        <div className="flex w-full flex-col items-center justify-center gap-4">
          <h2 className="text-center text-[32px]/[40px] font-bold xl:text-5xl">
            Courses
          </h2>
          <p className="text-center">Your Ultimate Guide to learning</p>
        </div>
        <div className="flex w-full flex-col items-center justify-center gap-16">
          <div className="flex items-center justify-center">
            <button className="border-b border-black px-4 py-2 text-center">
              Popular
            </button>
            <button className="px-4 py-2 text-center">Recommended</button>
            <button className="px-4 py-2 text-center">Best Price</button>
          </div>
          {/* Courses */}
          <div className="xl:flex xl:flex-col xl:items-center xl:justify-center xl:gap-16">
            {/* First */}
            <div className="flex flex-col items-center justify-center gap-8 xl:flex-row">
              <div className="flex flex-col items-center justify-center gap-6 rounded-[5px] bg-[#f7f7f7]">
                <Image
                  src={"/course-image-1.png"}
                  alt="course-image-1"
                  width={400}
                  height={300}
                  className="w-full"
                />
                <div className="flex flex-col items-center justify-center gap-6 px-4 pb-6">
                  <div className="flex flex-col items-start justify-center gap-2">
                    <div className="flex w-full items-start justify-end">
                      <span className="flex-grow text-sm font-semibold">
                        Design
                      </span>
                      <div className="flex items-center justify-center gap-1">
                        <Image
                          src={"/star.svg"}
                          alt="star"
                          width={24}
                          height={24}
                        />
                        <span className="text-sm font-semibold">5.0</span>
                      </div>
                    </div>
                    <h3 className="text-2xl font-bold">UX/UI Design 201</h3>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Suspendisse varius enim in eros.
                    </p>
                  </div>
                  <div className="flex w-full gap-4">
                    <button className="rounded-[5px] border border-black px-5 py-2">
                      Enroll Now
                    </button>
                    <button className="rounded-[5px]font-medium px-5 py-2">
                      $400
                    </button>
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-center justify-center gap-6 rounded-[5px] bg-[#f7f7f7]">
                <Image
                  src={"/course-image-2.png"}
                  alt="course-image-2"
                  width={400}
                  height={300}
                  className="w-full"
                />
                <div className="flex flex-col items-center justify-center gap-6 px-4 pb-6">
                  <div className="flex flex-col items-start justify-center gap-2">
                    <div className="flex w-full items-start justify-end">
                      <span className="flex-grow text-sm font-semibold">
                        Programmimg
                      </span>
                      <div className="flex items-center justify-center gap-1">
                        <Image
                          src={"/star.svg"}
                          alt="star"
                          width={24}
                          height={24}
                        />
                        <span className="text-sm font-semibold">5.0</span>
                      </div>
                    </div>
                    <h3 className="text-2xl font-bold">
                      Introduction to Python
                    </h3>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Suspendisse varius enim in eros.
                    </p>
                  </div>
                  <div className="flex w-full gap-4">
                    <button className="rounded-[5px] border border-black px-5 py-2">
                      Enroll Now
                    </button>
                    <button className="rounded-[5px]font-medium px-5 py-2">
                      $400
                    </button>
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-center justify-center gap-6 rounded-[5px] bg-[#f7f7f7]">
                <Image
                  src={"/course-image-3.png"}
                  alt="course-image-3"
                  width={400}
                  height={300}
                  className="w-full"
                />
                <div className="flex flex-col items-center justify-center gap-6 px-4 pb-6">
                  <div className="flex flex-col items-start justify-center gap-2">
                    <div className="flex w-full items-start justify-end">
                      <span className="flex-grow text-sm font-semibold">
                        Business
                      </span>
                      <div className="flex items-center justify-center gap-1">
                        <Image
                          src={"/star.svg"}
                          alt="star"
                          width={24}
                          height={24}
                        />
                        <span className="text-sm font-semibold">5.0</span>
                      </div>
                    </div>
                    <h3 className="text-2xl font-bold">
                      Data Analysis for Beginners
                    </h3>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Suspendisse varius enim in eros.
                    </p>
                  </div>
                  <div className="flex w-full gap-4">
                    <button className="rounded-[5px] border border-black px-5 py-2">
                      Enroll Now
                    </button>
                    <button className="rounded-[5px]font-medium px-5 py-2">
                      $400
                    </button>
                  </div>
                </div>
              </div>
            </div>
            {/* Second */}
            <div className="hidden items-center justify-center gap-8 xl:flex">
              <div className="flex flex-col items-center justify-center gap-6 rounded-[5px] bg-[#f7f7f7]">
                <Image
                  src={"/course-image-4.png"}
                  alt="course-image-4"
                  width={400}
                  height={300}
                  className="w-full"
                />
                <div className="flex flex-col items-center justify-center gap-6 px-4 pb-6">
                  <div className="flex flex-col items-start justify-center gap-2">
                    <div className="flex w-full items-start justify-end">
                      <span className="flex-grow text-sm font-semibold">
                        Art
                      </span>
                      <div className="flex items-center justify-center gap-1">
                        <Image
                          src={"/star.svg"}
                          alt="star"
                          width={24}
                          height={24}
                        />
                        <span className="text-sm font-semibold">5.0</span>
                      </div>
                    </div>
                    <h3 className="text-2xl font-bold">Art Specialization</h3>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Suspendisse varius enim in eros.
                    </p>
                  </div>
                  <div className="flex w-full gap-4">
                    <button className="rounded-[5px] border border-black px-5 py-2">
                      Enroll Now
                    </button>
                    <button className="rounded-[5px]font-medium px-5 py-2">
                      $400
                    </button>
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-center justify-center gap-6 rounded-[5px] bg-[#f7f7f7]">
                <Image
                  src={"/course-image-5.png"}
                  alt="course-image-5"
                  width={400}
                  height={300}
                  className="w-full"
                />
                <div className="flex flex-col items-center justify-center gap-6 px-4 pb-6">
                  <div className="flex flex-col items-start justify-center gap-2">
                    <div className="flex w-full items-start justify-end">
                      <span className="flex-grow text-sm font-semibold">
                        Law
                      </span>
                      <div className="flex items-center justify-center gap-1">
                        <Image
                          src={"/star.svg"}
                          alt="star"
                          width={24}
                          height={24}
                        />
                        <span className="text-sm font-semibold">5.0</span>
                      </div>
                    </div>
                    <h3 className="text-2xl font-bold">Rule of Law</h3>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Suspendisse varius enim in eros.
                    </p>
                  </div>
                  <div className="flex w-full gap-4">
                    <button className="rounded-[5px] border border-black px-5 py-2">
                      Enroll Now
                    </button>
                    <button className="rounded-[5px]font-medium px-5 py-2">
                      $400
                    </button>
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-center justify-center gap-6 rounded-[5px] bg-[#f7f7f7]">
                <Image
                  src={"/course-image-6.png"}
                  alt="course-image-6"
                  width={400}
                  height={300}
                  className="w-full"
                />
                <div className="flex flex-col items-center justify-center gap-6 px-4 pb-6">
                  <div className="flex flex-col items-start justify-center gap-2">
                    <div className="flex w-full items-start justify-end">
                      <span className="flex-grow text-sm font-semibold">
                        Tech
                      </span>
                      <div className="flex items-center justify-center gap-1">
                        <Image
                          src={"/star.svg"}
                          alt="star"
                          width={24}
                          height={24}
                        />
                        <span className="text-sm font-semibold">5.0</span>
                      </div>
                    </div>
                    <h3 className="text-2xl font-bold">
                      Introduction to webflow
                    </h3>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Suspendisse varius enim in eros.
                    </p>
                  </div>
                  <div className="flex w-full gap-4">
                    <button className="rounded-[5px] border border-black px-5 py-2">
                      Enroll Now
                    </button>
                    <button className="rounded-[5px]font-medium px-5 py-2">
                      $400
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <button className="rounded-[5px] border border-black px-4 py-2">
            View All Courses
          </button>
        </div>
      </div>
      {/* Team */}
      <div className="flex flex-col items-center justify-center gap-12 bg-[#f7f7f7] px-6 py-12 xl:gap-20 xl:px-16 xl:py-28">
        <div className="flex flex-col items-center justify-center gap-4">
          <h2 className="text-center text-[32px]/[40px] font-bold xl:text-5xl">
            Our team
          </h2>
          <p className="text-center text-lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>
        <div className="flex flex-col items-center justify-center gap-12 xl:w-full xl:flex-row xl:justify-evenly xl:gap-0">
          <div className="flex flex-col items-center justify-center gap-6">
            <Image src={"/team-1.png"} alt="team-1" height={80} width={80} />
            <div className="flex flex-col items-center justify-center">
              <h3 className="text-center text-lg font-semibold">James Nduku</h3>
              <p className="text-center text-lg">Marketing Coordinator</p>
            </div>
            <div className="flex items-center justify-center gap-[14px]">
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
          <div className="flex flex-col items-center justify-center gap-6">
            <Image src={"/team-2.png"} alt="team-2" height={80} width={80} />
            <div className="flex flex-col items-center justify-center">
              <h3 className="text-center text-lg font-semibold">
                Joseph Munyambu
              </h3>
              <p className="text-center text-lg">Nursing Assistant</p>
            </div>
            <div className="flex items-center justify-center gap-[14px]">
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
          <div className="flex flex-col items-center justify-center gap-6">
            <Image src={"/team-3.png"} alt="team-3" height={80} width={80} />
            <div className="flex flex-col items-center justify-center">
              <h3 className="text-center text-lg font-semibold">
                Joseph Ngumbau
              </h3>
              <p className="text-center text-lg">Medical Assistant</p>
            </div>
            <div className="flex items-center justify-center gap-[14px]">
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
        <div className="hidden flex-col items-center justify-center gap-12 xl:flex xl:w-full xl:flex-row xl:justify-evenly xl:gap-0">
          <div className="flex flex-col items-center justify-center gap-6">
            <Image src={"/team-4.png"} alt="team-4" height={80} width={80} />
            <div className="flex flex-col items-center justify-center">
              <h3 className="text-center text-lg font-semibold">
                Erick Kipkemboi
              </h3>
              <p className="text-center text-lg">Web Designer</p>
            </div>
            <div className="flex items-center justify-center gap-[14px]">
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
          <div className="flex flex-col items-center justify-center gap-6">
            <Image src={"/team-5.png"} alt="team-5" height={80} width={80} />
            <div className="flex flex-col items-center justify-center">
              <h3 className="text-center text-lg font-semibold">
                Stephen Kerubo
              </h3>
              <p className="text-center text-lg">President of Sales</p>
            </div>
            <div className="flex items-center justify-center gap-[14px]">
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
          <div className="flex flex-col items-center justify-center gap-6">
            <Image src={"/team-6.png"} alt="team-6" height={80} width={80} />
            <div className="flex flex-col items-center justify-center">
              <h3 className="text-center text-lg font-semibold">John Leboo</h3>
              <p className="text-center text-lg">Dog Trainer</p>
            </div>
            <div className="flex items-center justify-center gap-[14px]">
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
        <button className="rounded-[5px] border border-black px-4 py-2 xl:hidden">
          View All
        </button>
      </div>
      {/* Testimonials */}
      <div className="flex flex-col items-center justify-center gap-12 px-6 py-12 xl:items-start xl:gap-20 xl:bg-[#f7f7f7] xl:px-16 xl:py-28">
        <div className="flex flex-col items-center justify-center gap-6 xl:items-start">
          <h2 className="text-center text-[32px]/[40px] font-bold xl:hidden">
            What Our Student Say
          </h2>
          <h2 className="hidden text-5xl font-bold xl:block">
            Customer testimonials
          </h2>
          <p className="text-center text-lg xl:text-start">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>
        <div className="flex w-full flex-col items-center justify-center gap-12">
          <div className="items-center justify-center gap-8 xl:flex">
            <div className="flex w-full flex-col items-start justify-center gap-6 border border-black p-8">
              <Image src={"/stars.svg"} alt="stars" width={116} height={19} />
              <div className="flex w-full flex-col items-start justify-center gap-6">
                <p className="text-lg">
                  &quot;Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse varius enim in eros elementum tristique. Duis
                  cursus, mi quis viverra ornare.&quot;
                </p>
                <div className="flex items-center justify-start gap-5">
                  <Image
                    src={"/student-1.png"}
                    alt="student-1"
                    height={56}
                    width={56}
                  />
                  <div className="flex flex-col items-start justify-center">
                    <h3 className="font-semibold">Wade Warren</h3>
                    <p className="xl:hidden">Position, Company name</p>
                    <p className="hidden xl:block">Software Developer</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="hidden w-full flex-col items-start justify-center gap-6 border border-black p-8 xl:flex">
              <Image src={"/stars.svg"} alt="stars" width={116} height={19} />
              <div className="flex w-full flex-col items-start justify-center gap-6">
                <p className="text-lg">
                  &quot;Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse varius enim in eros elementum tristique. Duis
                  cursus, mi quis viverra ornare.&quot;
                </p>
                <div className="flex items-center justify-start gap-5">
                  <Image
                    src={"/student-2.png"}
                    alt="student-2"
                    height={56}
                    width={56}
                  />
                  <div className="flex flex-col items-start justify-center">
                    <h3 className="font-semibold">Erick Kipkemboi</h3>
                    <p>Scrum Master</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="hidden w-full flex-col items-start justify-center gap-6 border border-black p-8 xl:flex">
              <Image src={"/stars.svg"} alt="stars" width={116} height={19} />
              <div className="flex w-full flex-col items-start justify-center gap-6">
                <p className="text-lg">
                  &quot;Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse varius enim in eros elementum tristique. Duis
                  cursus, mi quis viverra ornare.&quot;
                </p>
                <div className="flex items-center justify-start gap-5">
                  <Image
                    src={"/student-3.png"}
                    alt="student-3"
                    height={56}
                    width={56}
                  />
                  <div className="flex flex-col items-start justify-center">
                    <h3 className="font-semibold">Stephen Kerubo</h3>
                    <p>UI/UX Designer</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex w-full items-center justify-between">
            <Image src={"/dots.svg"} alt="dots" height={8} width={72} />
            <div className="flex items-center justify-center gap-[15px]">
              <button className="rounded-[50px] border border-black p-3">
                <Image
                  src={"/previous.svg"}
                  alt="previous"
                  height={24}
                  width={24}
                />
              </button>
              <button className="rounded-[50px] border border-black p-3">
                <Image src={"/next.svg"} alt="next" height={24} width={24} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
