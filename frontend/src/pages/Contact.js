import React from 'react';
import Footer1 from '../components/Footer1';
import Navbar1 from '../components/Navbar1';

export default function Contact() {
    return (
        <div className="bg-gray-100 mt-36">

            <Navbar1 style={{ background: "#333", color: "#fff", padding: "10px" }} />


            <div className="fixed left-0 top-2/4 z-50 bg-transparent flex flex-col space-y-3">
                <button
                    type="button"
                    data-te-ripple-init
                    data-te-ripple-color="light"
                    className="flex px-4 py-1.5 text-xs font-medium uppercase leading-normal text-white rounded-r-xl"
                    style={{ backgroundColor: "#1da1f2" }}>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="mr-2 h-3.5 w-3.5"
                        fill="currentColor"
                        viewBox="0 0 24 24">

                    </svg>
                    Twitter
                </button>
                <button
                    type="button"
                    data-te-ripple-init
                    data-te-ripple-color="light"
                    className="flex  px-4 
                py-1.5 text-xs font-medium 
                uppercase leading-normal text-white
                rounded-r-xl"
                    style={{ backgroundColor: "#ff0000" }}>
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
            </div>


            <div className="mt-16 flex justify-center space-x-8">
                <div className="w-1/3 flex-col bg-white bg-clip-border text-gray-700 shadow-2xl p-8 rounded-xl">
                    <h5 className="text-xl font-semibold mb-2 text-blue-gray-900">Reach Us At</h5>
                    <ul className="list-disc pl-4">
                        <li className="mt-2">COC, VJTI - Veermata Jijabai Technological Institute, Matunga East, Mumbai</li>
                    </ul>
                </div>


                <div className="w-1/3 flex-col bg-white text-gray-700 shadow-2xl p-8 rounded-xl">
                    <h5 className="text-xl font-semibold mb-2 text-blue-gray-900">Branding & Collaboration</h5>
                    <i className="fa fa-handshake fa-2xl mb-4"></i>
                    <div className="text-left mt-2">
                        <p><b>Contact:</b></p>
                        <p>Sushrut </p>
                        <p>Bhaumik</p>
                        <p>Srusti</p>
                        <p> Anmol</p>

                    </div>
                </div>
            </div>

            <div className="relative mt-16 ml-auto mr-auto w-2/3 max-w-screen-lg border-2 p-4 rounded-xl shadow-xl text-xl">
                <form>
                    <p className="text-2xl mb-4"> Queries</p>
                    <div className="mb-4">
                        <label className="text-sm">Select Issue*</label>
                        <select className="form-input">
                            <option value="Feedback">-- Select Your Query --</option>
                            <option value="Feedback">Feedback</option>
                            <option value="Feedback">Course Related Queries</option>
                            <option value="Feedback">Payment Related Issue</option>
                            <option value="Feedback">Hiring Related Queries</option>
                            <option value="Feedback">Advertise With Us</option>
                        </select>
                    </div>



                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" type="button">
                        Submit
                    </button>
                </form>
            </div>

``
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15087.84025298196!2d72.83266059244446!3d19.021481400901987!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7cedb0ea0cd0f%3A0x428a465039995bd0!2sDadar%2C%20Mumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1705258231608!5m2!1sen!2sin"
                className="object-fill mt-10 ml-auto mr-auto w-1/2 h-96 rounded-xl shadow-md"
                frameBorder="0"
                allowFullScreen=""
                aria-hidden="false"
                tabIndex="0"
            ></iframe>


            <Footer1 />
        </div>
    );
}










