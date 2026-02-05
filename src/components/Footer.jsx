import { Link } from "react-router-dom"
import { useLocation } from "react-router-dom"


export default function Footer() {
    

  return(
      <section>
        <footer className="bg-black">
          <div className="w-11/12 container mx-auto py-16">
            <div className="mb-12">
              <img src="images/logo.png" alt="" className="md:w-40"/>
            </div>

            <hr className="border border-[#333333] mb-12"/>

            <div className="lg:flex justify-between md:flex-row-reverse">
              <div className=" mb-6">
                <div className="relative">
                  <img src="images/sendicon.png" alt="" className='absolute top-4 left-5' />
                    <input type="email" placeholder="E-mail" className="p-4 px-14 bg-[#222222] rounded-[50px] w-full border-none text-[#C1C1BE]"/>
                    <button className="absolute top-2 right-2 p-2 bg-[#FF4F00] rounded-[50px] w-40.25 text-white mb-4 hover:bg-[#FF4F39] hover:cursor-pointer font-semibold">GET NOTIFIED</button>
                </div>
                <div className="flex gap-4 mt-3">
                  <input type="checkbox" />
                  <p className="text-white">I agree to receive emails</p>
                </div>
                
              </div>

              <div className="text-2xl md:grid grid-cols-3 space-x-20">
                <div className="mb-6">
                  <p className="text-[#999999] mb-2">Pages</p>
                  <nav className="text-white  space-y-1">
                    <ul>
                      <li><Link to="/" className="hover:cursor-pointer hover:underline">Home</Link></li>
                      <li><Link to="/about" className="hover:cursor-pointer hover:underline">About</Link></li>
                      <li><Link to="/services" className="hover:cursor-pointer hover:underline">Services</Link></li>
                    </ul>
                  </nav>
                </div>
                <div className="mb-6">
                  <p className="text-[#999999] mb-2">Company</p>
                  <nav className="text-white space-y-1">
                    <ul>
                      <li><Link to="/blog" className="hover:cursor-pointer hover:underline">Blog</Link></li>
                      <li><Link to="/contact" className="hover:cursor-pointer hover:underline">Contact</Link></li>
                    </ul>
                  </nav>
                </div>
                <div className="mb-6">
                  <p className="text-[#999999] mb-2">Social</p>
                  <nav className="text-white space-y-1">
                    <ul><a href="#" className="hover:cursor-pointer hover:underline">Instagram</a></ul>
                    <ul><a href="#" className="hover:cursor-pointer hover:underline">LinkedIn</a></ul>
                    <ul><a href="#" className="hover:cursor-pointer hover:underline">WhatsApp</a></ul>
                    <ul><a href="#" className="hover:cursor-pointer hover:underline">Facebook</a></ul>
                  </nav>
                </div>
              </div>
            </div>

            <div className="md:flex justify-between md:mt-12">
              <div>
                <p className="text-[#999999] mb-4 sm:text-[16px]">Copyright ©CoreBuild — Designed by Chris Chuka 2026</p>
              </div>
              <div className='flex gap-6'>
                <p className="text-white sm:text-[16px]">Back to Top</p>
                <a href="#"><img src="images/arrow-up.png" alt="" className='bg-[#222222] p-2 rounded-xl'/></a>
              </div>
            </div>
          </div>
        </footer>
    </section>
    )
}