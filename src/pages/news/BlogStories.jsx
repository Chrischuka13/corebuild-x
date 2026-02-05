import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";

export default function BlogStories(){

    const { id } = useParams();
    const [news, setNews] = useState([]);
    const [loading, isLoading] = useState(true)
    
    useEffect(() => {
        fetch("/blogData.json")
          .then((res) => res.json())
          .then((data) => {
            setNews(data);
            isLoading(false)
          })
          .catch(() => isLoading(false))
    }, []);

     if (loading) {
    return <p style={{ padding: "2rem" }}>Loading...</p>;
  }

    const article = news.find((item) => item.id === id);

    return(
        <article>
            <NavBar/>
            <div className='relative'>
                <div className="w-11/12 container mx-auto ">
                    <div className="absolute inset-0 bg-black/40 rounded-lg"></div>
                    <h1 className="max-w-180 bottom-20 text-white text-3xl font-semibold md:text-5xl mb-40 md:mb-0 absolute">{article.title}</h1>
                </div>
                <img src={article.image2} alt="" className='w-full object-cover h-168.75'/>
            </div>

            <section className="bg-[#161616] ">
                <div className="w-11/12 container mx-auto py-8" >
                    <div className="lg:flex justify-between gap-10 py-16 ">
                        <div className="rounded-4xl p-2 bg-[#222222] max-w-60 h-full mb-8 md:w-full">
                            <p className="text-white font-semibold flex justify-center items-center">{article.date}</p>
                        </div>
                        <div className="max-w-85 md:max-w-187.5 space-y-8">
                            <div>
                                <h2 className="text-white text-[22px] text-balance mb-10">{article.content}</h2>
                                <Link to='/blog' className=" bg-[#FF4F00] p-3 rounded-[50px] text-white hover:bg-[#FF4F39] hover:cursor-pointer font-semibold">BACK TO NEWS</Link>
                            </div>
                        
                        </div>
                    </div>
                </div>
            </section>
            <Footer/>
        </article>

    )
}