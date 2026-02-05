import { useEffect, useState } from "react"
import { Link } from "react-router-dom";


export default function NewsPage(){
    const [news, setNews] = useState([]);

    useEffect(() => {
        fetch("/blogData.json")
        .then((res) => res.json())
        .then(setNews);
    }, []);

    return(
        <main>
            <div className='bg-[#222222]'>
                <section className='w-11/12 container mx-auto flex justify-center items-center h-[50vh] md:h-screen'>
                    <h1 className='text-white text-5xl font-semibold md:text-9xl'>Latest <span className='text-gray-400'>News</span></h1>
                </section>
            </div>

            <section className="bg-[#222222]">
                <div className="w-11/12 container mx-auto py-24">

                <div className="md:flex justify-between gap-6">
                    {news.map((display)=> (
                    <Link key={display.id} className="hover:cursor-pointer" to={`/blog/${display.id}`}>
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