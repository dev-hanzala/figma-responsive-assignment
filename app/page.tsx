import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div>
      {/* Hero */}
      <div className="flex flex-col items-start justify-center lg:flex-row lg:items-center lg:justify-between">
        <div className="flex flex-col items-start justify-center gap-6 px-6 py-16 lg:py-0 lg:pl-20 lg:pr-[60px]">
          <div className="flex flex-col items-start justify-center gap-6">
            <h1 className="text-[40px]/[48px] font-bold lg:text-[56px]/[68px]">
              Learn new skills online with ease
            </h1>
            <p className="text-lg">
              Discover a wide range of courses covering a variety of subjects,
              taught by expert instructors.
            </p>
          </div>
          <div className="flex items-center justify-start pt-4 gap-2 sm:gap-4">
            <Button className="text-sm sm:text-base">Start learning now</Button>
            <Button variant={"outline"} className="">
              Explore Courses
            </Button>
          </div>
        </div>
        <Image
          src={"/hero.png"}
          alt="hero"
          width={1200}
          height={1800}
          className="h-[800px] w-screen object-cover object-top lg:h-auto lg:w-[50vw]"
        />
      </div>
      {/* Marquee */}
      <div className="flex flex-col items-start justify-center gap-6 px-6 py-12 lg:flex-row lg:gap-16 lg:bg-[#f7f7f7] lg:px-16 lg:py-20">
        <p className="text-lg font-bold lg:text-2xl">
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
      <div className="flex flex-col items-center justify-center gap-12 px-6 py-28 lg:gap-20">
        <div className="flex flex-col items-center justify-center gap-6 lg:items-start">
          <h2 className="text-center text-[32px]/[40px] font-bold lg:text-5xl">
            Explore Courses By Category
          </h2>
          <p className="text-center text-lg">
            Discover a wide range of courses covering a variety of subjects,
            taught by expert instructors.
          </p>
        </div>
        <div className="flex w-full flex-col items-center justify-center gap-16">
          <div className="lg:flex lg:flex-col lg:items-center lg:justify-center lg:gap-16">
            {/* first */}
            <div className="flex flex-col items-center justify-center gap-6 lg:flex-row">
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
            <div className="hidden flex-col items-center justify-center gap-6 lg:flex lg:flex-row">
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
            <div className="hidden flex-col items-center justify-center gap-6 lg:flex lg:flex-row">
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
          <Button variant={"outline"}>View All Courses</Button>
        </div>
      </div>
      {/* Achivements */}
      <div className="flex flex-col items-center justify-center gap-12 px-6 py-12 lg:gap-8 lg:py-28">
        <div className="flex flex-col items-center justify-center gap-4 lg:gap-6">
          <h2 className="text-center text-[32px]/[40px] font-bold lg:text-5xl">
            Our Achivements
          </h2>
          <p className="text-center text-lg lg:hidden">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            varius enim in eros elementum tristique.
          </p>
          <p className="hidden text-center text-lg lg:block">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            varius enim in eros elementum tristique. Duis cursus, mi quis
            viverra ornare, eros dolor interdum nulla, ut commodo diam libero
            vitae erat.
          </p>
        </div>
        <div className="flex w-full flex-col items-center justify-center gap-6 lg:flex-row">
          <div className="flex items-center justify-center gap-4 py-2 lg:gap-6">
            <div className="px-16">
              <h3 className="text-center text-xl font-bold lg:text-[40px]/[48px]">
                +200
              </h3>
              <p className="text-center">Courses</p>
            </div>
            <div className="px-16">
              <h3 className="text-center text-xl font-bold lg:text-[40px]/[48px]">
                +200
              </h3>
              <p className="text-center">Courses</p>
            </div>
          </div>
          <div className="flex items-center justify-center gap-4 py-2 lg:gap-6">
            <div className="px-16">
              <h3 className="text-center text-xl font-bold lg:text-[40px]/[48px]">
                +200
              </h3>
              <p className="text-center">Courses</p>
            </div>
            <div className="px-16">
              <h3 className="text-center text-xl font-bold lg:text-[40px]/[48px]">
                +200
              </h3>
              <p className="text-center">Courses</p>
            </div>
          </div>
        </div>
      </div>
      {/* Cources */}
      <div className="flex flex-col items-start justify-center gap-12 px-6 py-12 lg:px-16 lg:py-28">
        <div className="flex w-full flex-col items-center justify-center gap-4">
          <h2 className="text-center text-[32px]/[40px] font-bold lg:text-5xl">
            Courses
          </h2>
          <p className="text-center">Your Ultimate Guide to learning</p>
        </div>
        <div className="flex w-full flex-col items-center justify-center gap-16">
          <div className="flex items-center justify-center">
            <Button variant={"underlined"} size={"sm"}>
              Popular
            </Button>
            <Button variant={"secondary"} size={"sm"}>
              Recommended
            </Button>
            <Button variant={"secondary"} size={"sm"}>
              Best Price
            </Button>
          </div>
          {/* Courses */}
          <div className="lg:flex lg:flex-col lg:items-center lg:justify-center lg:gap-16">
            {/* First */}
            <div className="flex flex-col items-center justify-center gap-8 lg:flex-row">
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
                    <Button
                      variant={"outline"}
                      size={"md"}
                      className="bg-[#f7f7f7]"
                    >
                      Enroll Now
                    </Button>
                    <span className="rounded-[5px]font-medium px-5 py-2 text-center">
                      $400
                    </span>
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
                    <Button
                      variant={"outline"}
                      size={"md"}
                      className="bg-[#f7f7f7]"
                    >
                      Enroll Now
                    </Button>
                    <span className="rounded-[5px]font-medium px-5 py-2 text-center">
                      $400
                    </span>
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
                    <Button
                      variant={"outline"}
                      size={"md"}
                      className="bg-[#f7f7f7]"
                    >
                      Enroll Now
                    </Button>
                    <span className="rounded-[5px]font-medium px-5 py-2 text-center">
                      $400
                    </span>
                  </div>
                </div>
              </div>
            </div>
            {/* Second */}
            <div className="hidden items-center justify-center gap-8 lg:flex">
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
                    <Button
                      variant={"outline"}
                      size={"md"}
                      className="bg-[#f7f7f7]"
                    >
                      Enroll Now
                    </Button>
                    <span className="rounded-[5px]font-medium px-5 py-2 text-center">
                      $400
                    </span>
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
                    <Button
                      variant={"outline"}
                      size={"md"}
                      className="bg-[#f7f7f7]"
                    >
                      Enroll Now
                    </Button>
                    <span className="rounded-[5px]font-medium px-5 py-2 text-center">
                      $400
                    </span>
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
                    <Button
                      variant={"outline"}
                      size={"md"}
                      className="bg-[#f7f7f7]"
                    >
                      Enroll Now
                    </Button>
                    <span className="rounded-[5px]font-medium px-5 py-2 text-center">
                      $400
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Button variant={"outline"}>View All Courses</Button>
        </div>
      </div>
      {/* Team */}
      <div className="flex flex-col items-center justify-center gap-12 bg-[#f7f7f7] px-6 py-12 lg:gap-20 lg:px-16 lg:py-28">
        <div className="flex flex-col items-center justify-center gap-4">
          <h2 className="text-center text-[32px]/[40px] font-bold lg:text-5xl">
            Our team
          </h2>
          <p className="text-center text-lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>
        <div className="flex flex-col items-center justify-center gap-12 lg:w-full lg:flex-row lg:justify-evenly lg:gap-0">
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
        <div className="hidden flex-col items-center justify-center gap-12 lg:flex lg:w-full lg:flex-row lg:justify-evenly lg:gap-0">
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
        <Button variant={"outline"} className="lg:hidden">
          View All
        </Button>
      </div>
      {/* Testimonials */}
      <div className="flex flex-col items-center justify-center gap-12 px-6 py-12 lg:items-start lg:gap-20 lg:bg-[#f7f7f7] lg:px-16 lg:py-28">
        <div className="flex flex-col items-center justify-center gap-6 lg:items-start">
          <h2 className="text-center text-[32px]/[40px] font-bold lg:hidden">
            What Our Student Say
          </h2>
          <h2 className="hidden text-5xl font-bold lg:block">
            Customer testimonials
          </h2>
          <p className="text-center text-lg lg:text-start">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>
        <div className="flex w-full flex-col items-center justify-center gap-12">
          <div className="items-center justify-center gap-8 lg:flex">
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
                    <p className="lg:hidden">Position, Company name</p>
                    <p className="hidden lg:block">Software Developer</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="hidden w-full flex-col items-start justify-center gap-6 border border-black p-8 lg:flex">
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
            <div className="hidden w-full flex-col items-start justify-center gap-6 border border-black p-8 lg:flex">
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
              <Button variant={"outline"} size={"icon"}>
                <Image
                  src={"/previous.svg"}
                  alt="previous"
                  height={24}
                  width={24}
                />
              </Button>
              <Button variant={"outline"} size={"icon"}>
                <Image src={"/next.svg"} alt="next" height={24} width={24} />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
