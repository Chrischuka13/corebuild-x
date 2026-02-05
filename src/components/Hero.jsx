import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'


const images = [
  "images/contw.jpg",
  "images/contw2.jpg",
  "images/contw3.jpg"
]
const quote = [
  {logo: "images/logo1.png", paragraph: "CoreBuild gave us the perfect foundation for a modern, trustworthy construction website. From layout to performance, everything felt professional and well-designed. Our clients immediately noticed the difference.", name: "Isabella Romero, UrbanCraft Construction"},
  {logo: "images/logo2.png", paragraph: "Using CoreBuild completely upgraded the way we present our construction services online. The clean structure, strong visuals, and easy customization helped us launch a website that finally reflects the scale of our main core projects.", name: "Mark Thompson, BuildRight Group"},
  {logo: "images/logo3.png", paragraph: "As a fast-growing construction company, we needed a website that was both bold and functional. CoreBuild delivered exactly that. It streamlined how we showcase our services, projects, and team — all while looking premium.", name: "Daniel Hughes, SolidBase Contractors"}
]

const Hero = () => {
    const [news, setNews] = useState([]);
    const [index, setIndex] = useState(0);

    const next = () => {
        setIndex((prev) => (prev + 1) % images.length);
    };
    const prev = () => {
        setIndex((prev) => (prev - 1 + images.length) % images.length);
    };

    useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 3000); 

    return () => clearInterval(interval);
    }, []);

    useEffect(() => {
      fetch("/blogData.json")
      .then((res) => res.json())
      .then(setNews);
    }, []);


  return (
    <main>
      <div className="bg-[linear-gradient(rgba(0,0,0,0.3),rgba(0,0,0,0.3)),url(/images/hero.png)] bg-center bg-cover min-h-screen flex items-end justify-center">
        <div className="w-11/12 container mx-auto">
          <div className="flex justify-center items-center h-screen max-w-187.5">
            <h1 className="text-white text-3xl font-bold md:text-6xl mb-40 md:mb-0">Give your construction company a modern edge with CoreBuild™.</h1>
          </div>
        </div>    
      </div>

      <section className="bg-[#161616]">
        <div className="w-11/12 container mx-auto py-8" >
          <div className="md:flex justify-between gap-10 py-16 ">
            <div className="rounded-4xl p-2 bg-[#222222] max-w-60 h-full mb-4 md:w-full">
              <p className="text-white flex items-center justify-center font-semibold">MISSION AND VISION</p>
            </div>
            <div className="max-w-[320px] md:max-w-187.5 space-y-8 ">
              <div>
                <h2 className="text-white text-4xl font-bold ">Discover CoreBuild™, a sleek Framer template crafted for today’s leading construction firms.</h2>
              </div>
              <div>
                <h2 className="text-gray-400 text-4xl font-bold">Building a sustainable future through innovation, excellence, and unwavering.</h2>
              </div>
            </div>
          </div>

          <div className="md:flex justify-between gap-10">
            <div className="rounded-4xl p-2 bg-[#222222] max-w-60 h-full mb-4 md:w-full">
              <p className="text-white flex items-center justify-center font-semibold">FUN FACTS</p>
            </div>
            <div className="max-w-[320px] md:max-w-187.5 space-y-8 md:flex flex-row-reverse md:gap-29 ">
              <div className="">
                <img src="/images/workers.png" alt="" className="w-full"/>
              </div>
              <div className="">
                <div>
                  <h2 className="text-[70px] md:text-[90px] text-white">471<span className="text-[30px] text-gray-400">+</span></h2>
                  <p className="text-[22px] md:text-[16px] text-gray-400">Clients WorldWide</p>
                </div>
                <div>
                  <h2 className="text-[70px] md:text-[90px] text-white">7<span className="text-[30px] text-gray-400 ">+</span></h2>
                  <p className="text-[22px] md:text-[16px] text-gray-400">Years of Experience</p>
                </div>
              </div>
            </div>
          </div>

          <hr className="border border-gray-700 mt-8"/>

          <div className="md:flex justify-between  py-16">
            <div className="flex justify-center mb-8">
              <img src="images/health.png" alt="" />
            </div>
            <div className="flex justify-center mb-8">
              <img src="images/ethics.png" alt="" />
            </div>
            <div className="flex justify-center mb-8">
              <img src="images/health2.png" alt="" />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#FF4F00]">
        <div className="w-11/12 container mx-auto py-24">
          <div>
            <div className="flex justify-center items-center">
              <p className="text-center border-none p-2 rounded-4xl text-white bg-[#FF702E] font-semibold w-100 mb-16 ">TRUSTED BY COMPANIES WORLDWIDE</p>
            </div>
            
            <div className="flex justify-center items-center">
              <img src="images/Brand Block.png" alt="" className="hidden md:block"/>
              {/* <img src="images/Brand Block-tab.png" alt="" className="block sm:hidden"/> */}
              <img src="images/Brand Block-mobile.png" alt="" className="md:hidden block"/>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#222222]">
        <div className="w-11/12 container mx-auto py-24 lg:flex justify-between gap-10">
          <div className="rounded-4xl p-2 bg-[#333333] max-w-60 h-full mb-4 md:w-full">
            <p className="text-white flex items-center justify-center font-semibold">OUR WORK</p>
          </div>
          <h1 className="text-5xl text-white max-w-102.5 font-semibold mb-8 ">We guide you every step of the way, from blueprint to build.</h1>
          <div className="relative w-full max-w-125 mx-auto overflow-hidden">
            {/* Slides */}
            <div className="flex transition-transform duration-500"
              style={{ transform: `translateX(-${index * 100}%)` }}>
              {images.map((src, i) => (
                <img key={i} src={src} className="w-full shrink-0 object-cover"/>
              ))}
            </div>

            {/* Controls */}
            <button onClick={prev} className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 text-white px-3 py-1 rounded cursor-pointer">‹
            </button>

            <button onClick={next} className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 text-white px-3 py-1 rounded cursor-pointer">›
            </button>
          </div>
        </div>
      </section>

      <section className="bg-[#FF4F00]">
        <div className="w-11/12 container mx-auto py-24">
          <img src="images/citymb.png" alt="" className="mb-16 w-full"/>
          <div className="md:flex flex-col items-center justify-center text-center mx-auto md:max-w-170">
            <h2 className="text-5xl text-white  mb-6 font-semibold">Building bold ideas into exceptional spaces.</h2>
            <p className="text-white text-2xl px-4 mb-10 font-medium">Experience innovative architectural solutions built around your vision.</p>
          </div>
          
          <div className="flex justify-center items-center">
            <Link to="/contact"><button className="bg-black rounded-4xl p-3 text-white hover:cursor-pointer hover:bg-[#222222]">GET A QUOTE</button></Link>
          </div>
        </div>
      </section>

      <section className="bg-[#222222]">
        <div className="w-11/12 container mx-auto py-24 lg:flex justify-between gap-10">
          <div className="rounded-4xl p-2 bg-[#333333] w-45 h-9.5 mb-8">
              <p className="text-white flex items-center justify-center font-semibold">TESTIMONIALS</p>
            </div>
            <h1 className="text-5xl text-white max-w-100 font-semibold mb-8">Discover the impact we’ve made for our clients.</h1>
          <div className="relative w-full max-w-xl mx-auto overflow-hidden">
            {/* Slides */}
            <div className="flex transition-transform duration-500"
              style={{ transform: `translateX(-${index * 100}%)` }}>
              {quote.map((quotes, i)=>{
                return(
                  <div key={i} className="text-white w-full shrink-0 md:text-center p-10 bg-[#333333] rounded-2xl">
                    <img src={quotes.logo} alt="" className="w-24 mb-6" />
                    <h3 className="font-semibold mb-6 text-3xl md:text-xl">{quotes.paragraph}</h3>
                    <p className="font-extralight text-2xl">{quotes.name}</p>
                  </div>
                
                )
              })}
            </div>

            {/* Controls */}
            <button
              onClick={prev} className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 text-white px-3 py-1 rounded cursor-pointer">‹
            </button>

            <button onClick={next} className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 text-white px-3 py-1 rounded cursor-pointer">›
            </button>
          </div>
        </div>
      </section>

      <section>
        <div className="w-11/12 container mx-auto py-24">
          <div className="">
            <video src="videos/67922702c010886b5b8dc7e6_6792329d0af28c8e3c591b2a_1197802-hd_1280_720_25fps-transcode.mp4"
              poster="images/Video.png" autoPlay muted loop playsInline/>
          </div>
        </div>
      </section>

      <section className="bg-[#222222]">
        <div className="w-11/12 container mx-auto py-24">
          <div className="lg:flex justify-between gap-10">
            <div className="rounded-4xl p-2 bg-[#333333] max-w-60 h-full mb-4 md:w-full">
              <p className="text-white font-semibold flex justify-center items-center">LATEST NEWS</p>
            </div>
            <div className="max-w-[320px] md:max-w-187.5 space-y-8 mb-18">
              <h2 className="text-white text-5xl font-bold ">Recent developments in modern architecture.</h2>
            </div>
          </div>
          
          <div className="md:grid grid-cols-2 lg:grid-cols-3 justify-between gap-6">
            {news.map((display)=>(
              <Link key={display.id} className="hover:cursor-pointer" to={`/blog/${display.id}`} >
                <div className="transition-transform duration-300 hover:scale-105 hover:cursor-pointer">
                  <img src={display.image} alt="" className="w-full md:w-500 mb-8 "/>
                </div>
                
                <div className="flex gap-2 text-[#999999] py-4 text-[18px] md:text-[14px]">
                  <div className="flex items-center gap-2">
                    <img src="images/calender.svg" alt="" /><p>{display.date}</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <img src="images/clock.svg" alt="" /><p>{display.read}</p>
                  </div>
                </div>
                <p className="text-3xl md:text-xl text-white font-semibold mb-16">{display.title}</p>
              </Link>
            
          ))}
          </div>
          
        </div>
      </section>
    </main>
  )
}

export default Hero