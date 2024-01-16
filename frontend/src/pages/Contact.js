import React from 'react'
import Footer1 from '../components/Footer1'
export default function Contact() {
  return (
    <div>
    <div className='mt-60'>
       <div className="fixed left-0 top-2/4 z-50 
                        bg-transparent flex flex-col space-y-3">
            <button
                type="button"
                data-te-ripple-init
                data-te-ripple-color="light"
                className="flex  px-4 
                           py-1.5 text-xs font-medium 
                           uppercase leading-normal text-white
                           rounded-r-xl "
                style={{ backgroundColor: "#1da1f2" }}>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="mr-2 h-3.5 w-3.5"
                    fill="currentColor"
                    viewBox="0 0 24 24">
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />

                </svg>
                Twitter
            </button>
            <button
                type="button"
                data-te-ripple-init
                data-te-ripple-color="light"
                className="flex px-2 
                py-1.5 text-xs font-medium 
                uppercase leading-normal text-white
                rounded-r-xl "
                style={{ backgroundColor: "#1877f2" }}>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="mr-2 h-3.5 w-3.5"
                    fill="currentColor"
                    viewBox="0 0 24 24">
                    <path d=
"M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                </svg>
                Facebook
            </button>
            <button
                type="button"
                data-te-ripple-init
                data-te-ripple-color="light"
                className="flex  px-4 
                py-1.5 text-xs font-medium 
                uppercase leading-normal text-white
                rounded-r-xl"
                style={{ backgroundColor: "#c13584" }}>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="mr-2 h-3.5 w-3.5"
                    fill="currentColor"
                    viewBox="0 0 24 24">
                    <path d=
"M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
                Instagram
            </button>
            <button
                type="button"
                data-te-ripple-init
                data-te-ripple-color="light"
                className="flex  px-4 
                py-1.5 text-xs font-medium 
                uppercase leading-normal text-white
                rounded-r-xl"
                style={{backgroundColor: "#ff0000"}}>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="mr-2 mt-0.5 h-4.5 w-3.5"
                    fill="currentColor"
                    viewBox="0 0 24 24">
                    <path d=
"M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
                </svg>
                Youtube
            </button>
        </div>
        {/* <div className="h-52 ml-48 float-left 
                            -mt-10 w-96 flex-col 
                            rounded-xl bg-white bg-clip-border 
                            text-gray-700 shadow-2xl">
                <div className="p-6">
                    <h5 className="text-center mr-4 mb-2 
                                   block font-sans text-xl 
                                   font-semibold text-blue-gray-900 
                                   antialiased">
                        Reach Us At
                    </h5>
                    <ul>
                        <li className="mt-2">
                            <span><i className="fa fa-phone mr-2"></i> </span>
                            +91-9998887776
                        </li>
                        <li className="mt-2">
                            <span><i className="fa fa-envelope mr-2"></i> </span>
                            <span>feedback@geeksforgeeks.org</span>
                        </li>
                        <li className="mt-2">
                            <span><i className="fa-solid fa-map-pin mr-2"></i>  
                            </span>
                                A-143, 9th Floor, Sovereign Corporate 
                            <span className="pl-4">
                                 Tower, Sector-136, Noida, Uttar Pradesh
                            </span>
                        </li>
                    </ul>
                </div>
            </div> */}
            {/* <div class=" mr-36   text-center float-right 
                         -mt-11 w-1/3 flex-col rounded-xl 
                         bg-white text-gray-700 shadow-2xl">
                <div className="p-6 ">
                    <h5 className="mb-2 block font-sans 
                                   text-xl font-semibold 
                                   text-blue-gray-900 antialiased">
                        Branding & Collaboration
                    </h5>
                    <i className="fa fa-handshake fa-2xl"></i>
                    <div className="text-left mt-4">
                        <span><i className="fa fa-envelope mr-2"></i> </span>
                        <span>branding@geeksforgeeks.org</span>
                    </div>
                    <div className="mt-2 text-left">
                    <span><i className="fa-solid fa-map-pin mr-2"></i>  </span>
                            A-143, 9th Floor, Sovereign Corporate
                        Tower, Sector-<span className="pl-5">136,
                        Noida, Uttar Pradesh</span>
                    </div>
                </div>
            </div> */}
            {/* <div className="absolute mt-52 ml-48 
                        w-80 float-left border-2 p-2 
                        rounded-xl shadow-xl text-xl">
            <form>
                <p className="text-2xl">Feedback & Queries</p>
                <div>
                    <label className="text-sm">Select Issue*</label>
                    <br></br>
                    <select className="bg-gray-50 border border-gray-300 
                                        text-gray-600 text-sm rounded-lg 
                                        focus:border-blue-500 w-full p-2.5">
                        <option value="Feedback" >
                            -- Select Your Query --
                        </option>
                        <option value="Feedback" >
                            Feedback
                        </option>
                        <option value="Feedback">
                            Course Related Queries
                        </option>
                        <option value="Feedback">
                            Payment Related Issue
                        </option>
                        <option value="Feedback">
                            Hiring Related Queries
                        </option>
                        <option value="Feedback">
                               Advertise With Us
                        </option>
                    </select>
                    <br></br>
                    <label className="text-sm">Email Address*</label>
                    <br></br>
                    <input className="bg-gray-50 border border-gray-300 
                                        text-sm rounded-lg focus:border-blue-500
                                        w-full p-2.5"
                            type="email"
                            placeholder="abc@geeksforgeeks.org"/>
                    <br></br>
                    <label className="text-sm">Contact No.</label>
                    <br></br>
                    <input className="bg-gray-50 border border-gray-300
                                        text-sm rounded-lg focus:border-blue-500 
                                        w-full p-2.5"
                            type="text"
                            placeholder="1324567890"/>
                    <br></br>
                    <label className="text-sm">
                        Drop Your Query 
                    </label>
                    <br></br>
                    <textarea className="bg-gray-50 border border-gray-300 
                                            text-sm rounded-lg 
                                            focus:border-blue-500 
                                            w-full p-2.5"
                                rows="4"
                                cols="25"
                                maxlength="300"
                                placeholder="Max Allowed Characters: 300">
                    </textarea>
                    <br></br>
                    <button className="bg-blue-500 hover:bg-blue-700 
                                        text-white font-bold 
                                        py-2 px-4 rounded"
                            type="button">
                        Submit
                    </button>
                </div>
            </form>
        </div> */}
        {/* <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15087.84025298196!2d72.83266059244446!3d19.021481400901987!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7cedb0ea0cd0f%3A0x428a465039995bd0!2sDadar%2C%20Mumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1705258231608!5m2!1sen!2sin"
                className='object-fill'
                frameborder="0"
                style={{marginTop:"14%", marginLeft:"44% "}}
                allowfullscreen=""
                aria-hidden="false"
                tabindex="0"> 
        </iframe> */}
           </div>
           <Footer1/>
    </div>
      
  )
}

