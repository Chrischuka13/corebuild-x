


export default function AboutPage(){
    const team = [
    {image: "images/noah.jpg", name: "Noah Benneth", role: "Founder", social: "images/socials.png"},
    {image: "images/emma.jpg", name: "Emma Lawson", role: "Architect", social: "images/socials.png"},
    {image: "images/ethan.jpg", name: "Ethan Reyes", role: "Architect", social: "images/socials.png"},
    {image: "images/olivia.jpg", name: "Olivia Turner", role: "Interior Designer", social: "images/socials.png"}
  ]

    return(
        <main>  
            <div className="bg-[linear-gradient(rgba(0,0,0,0.3),rgba(0,0,0,0.3)),url(/images/abouthero.png)] bg-center bg-cover md:min-h-screen h-[50vh] flex items-end justify-center">
                <div className=" w-11/12 container mx-auto flex justify-center items-center ">
                <h1 className="text-white text-5xl font-bold md:text-9xl mb-40 ">About Us</h1>
                </div>
            </div>

            <section className="bg-[#161616] ">
                <div className="w-11/12 container mx-auto py-8" >
                <div className="lg:flex justify-between gap-10 py-16 ">
                    <div className="rounded-4xl p-2 bg-[#222222] max-w-60 h-full mb-4 md:w-full">
                    <p className="text-white font-semibold flex justify-center items-center">MISSION AND VISION</p>
                    </div>
                    <div className="max-w-[320px] md:max-w-187.5 space-y-8 ">
                    <div>
                        <h2 className="text-white text-2xl md:text-4xl font-bold">To empower construction companies with a modern, high-performance digital presence through a sleek, reliable, and easy to customize Framer template. CoreBuild™ is designed to elevate how firms showcase their work, communicate their values, and build trust with clients.</h2>
                    </div>
                    <div>
                        <h2 className="text-gray-400 text-2xl md:text-4xl font-bold">Redefining construction websites with innovation and craftsmanship for a more sustainable future.</h2>
                    </div>
                    </div>
                </div>

                <hr className="border border-[#333333] mt-8"/>

                <div className="md:grid grid-cols-2 lg:grid-cols-3 py-16">
                    <div className="flex justify-center mb-8">
                    <img src="images/health.png" alt="" />
                    </div>
                    <div className="flex justify-center mb-8">
                    <img src="images/ethics.png" alt="" />
                    </div>
                    <div className="flex justify-center mb-8">
                    <img src="images/health2.png" alt="" />
                    </div>

                    <div className="flex justify-center mb-8">
                    <img src="images/qa.png" alt="" />
                    </div>
                    <div className="flex justify-center mb-8">
                    <img src="images/sp.png" alt="" />
                    </div>
                    <div className="flex justify-center mb-8">
                    <img src="images/ec.png" alt="" />
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
                <div className="w-11/12 container mx-auto py-24 ">
                <div className="md:flex gap-50">
                    <div className='bg-[#333333] w-45 h-9.5 mb-8 rounded-4xl p-2'>
                    <p className="text-white flex items-center justify-center font-semibold">THE TEAM</p>
                    </div>
                    <div>
                    <h1 className="text-4xl text-balance text-white max-w-175 font-semibold mb-16 md:text-5xl">Meet the brilliant team powering our architectural innovations.</h1>
                    </div>
                </div>
                    
                    <div className='md:grid grid-cols-2 gap-6 lg:grid-cols-4'>
                    {team.map((members, i)=>{
                        return(
                        <div key={i}>
                            <img src={members.image} alt="" className='rounded-4xl w-full mb-4 md:w-80'/>
                            <h2 className='text-white font-semibold text-2xl '>{members.name}</h2>
                            <p className='text-gray-400 font-semibold mb-4 text-[20px] '>{members.role}</p>
                            <img src={members.social} alt="" className='mb-6 lg:w-14'/>
                        </div>
                        )
                    })}
                    </div>
                </div>
            </section>
        </main>
    )
}