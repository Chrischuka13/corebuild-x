import { useState } from "react";
import { Meta } from "react-router-dom";


export default function ContactPage(){
        const FAQ = [
        {question: "How Long Does the Design and Construction Process Take?", answer: "Timelines vary by project, but we provide a clear schedule from start to finish."},
        {question: "What Is the Cost Estimation and Budgeting Process?", answer: "We offer transparent cost estimates and simple budgeting based on your project needs."},
        {question: "Do You Handle Building Permits and Regulatory Approvals?", answer: "Yes— we take care of all permits and required approvals for you."},
        {question: "How Do You Incorporate Sustainability into Your Designs?", answer: "We use efficient methods and eco-friendly materials whenever possible."},
        {question: "Can You Assist with Interior Design and Space Planning?", answer: "Yes, we support interior layout, materials, and overall space planning."},
        {question: "What Sets Your Architecture Services Apart from Others?", answer: "We combine modern design, strong communication, and reliable project delivery."}
    ];

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [phone, setPhone] = useState("")
    const [company, setCompany] = useState("")

    const [success, setSuccess] = useState("")
    const [error, setError] = useState("")
    const [isLoading, setIsLoading] = useState(false)

    const submitContact = async(e) => {
      e.preventDefault()

      if (!name || !email || !phone) {
        setError("Name, email, and phone are required")
        return
      }
      
      try {
      setIsLoading(true)
      const response = await fetch(`${import.meta.env.VITE_API_URL}/contact`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({name, email, phone, company})
      })

      const data = response.json()

      if (!response.ok) {
        throw new Error(data.message)
      }

      setName("")
      setEmail("")
      setPhone("")
      setCompany("")
      setSuccess("Message sent successfully")

    } catch (error) {
      console.error(error);
      setError("info not sent")  
    }finally{
        setIsLoading(false)
    }
    }

    return(
        <main>
            <div className='bg-[#222222]'>
                <section className='w-11/12 container mx-auto flex justify-center items-center h-[50vh] md:h-screen'>
                    <h1 className='text-white text-5xl font-semibold md:text-9xl'>Contact <span className='text-gray-400'>Us</span></h1>
                </section>
            </div>
        
            <section className="bg-[#FF4F00]">
                <div className="w-11/12 container mx-auto py-16">
                    <div className='lg:flex gap-64'>
                        <div className="rounded-4xl p-2 bg-gray-800 max-w-60 h-full mb-8 md:w-full">
                            <p className="text-white flex items-center justify-center font-semibold">CONTACT US</p>
                        </div>
                        <div className='md:max-w-172'>
                            <div>
                                <h1 className='text-5xl text-balance text-white font-semibold mb-8'>Get your custom quote for innovative architectural solutions.</h1>
                            </div>

                            <form onSubmit={submitContact} className='md:flex flex-col gap-6'>
                                <div className='md:flex gap-6 '>
                                    <input name="name" type='text' placeholder='Chris Chuka' className='p-3 bg-white bg-none rounded-2xl w-full mb-4' value={name} onChange={(event)=> {setName(event.target.value), setError(""), setSuccess("")}}/>
                                    <input name="email" type='email' placeholder='contact@email.com' className='p-3 bg-white bg-none rounded-2xl w-full mb-4' value={email} onChange={(event)=> {setEmail(event.target.value), setError(""), setSuccess("")}}/>
                                </div>
                                
                                <div className='md:flex gap-6'>
                                    <input name="phone" type='phone' maxLength={11} placeholder='+234 ...' className='p-3 bg-white bg-none rounded-2xl w-full mb-4' value={phone} onChange={(event)=> {setPhone(event.target.value), setError(""), setSuccess("")}}/>
                                    <input name="company" type='text' placeholder='Add Company' className='p-3 bg-white bg-none rounded-2xl w-full mb-4' value={company} onChange={(event)=> {setCompany(event.target.value), setError(""), setSuccess("")}}/>
                                </div>

                                {success && <p className='text-[14px]' style={{color: "white"}}>{success}</p>}
                                {error && <p className='text-[14px]' style={{color: "black"}}>{error}</p>}
                                
                                <button type='submit' className='bg-black text-white p-3 rounded-4xl w-full mt-4 hover:cursor-pointer hover:bg-[#222222]'>{isLoading? "LOADING....." : "GET IN TOUCH"}</button>
                            </form>

                        </div>
                    </div> 
                </div>
            </section>

            <section className='bg-[#161616]'>
                <div className='w-11/12 container mx-auto py-24'>
                    <div className='md:space-y-20'>
                        <div className='lg:flex gap-64'>
                            <p className='text-white flex items-center justify-center font-semibold rounded-4xl p-2 bg-[#222222] max-w-60 h-full mb-8 md:w-full'>FAQ</p>
                            <div className='max-w-[320px] md:max-w-187.5 space-y-8 '>
                                <h2 className='text-white text-4xl font-semibold mb-8 md:text-6xl'>Frequently asked questions about our architectural services.</h2>
                            </div>
                        </div>
                        <div className='md:grid grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-13'>
                            {FAQ.map((FAQS, i)=>{
                                return (
                                    <div key={i}>
                                        <p className='text-white font-semibold text-xl mb-2'>{FAQS.question}</p>
                                        <p className='text-[#999999] mb-6'>{FAQS.answer}</p>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}