import React from 'react'

import {Link} from "react-router-dom"
import Navbarlogo from './Navbarlogo'
export default function FOOTER1() {
  return (
    <div>
<footer class="bg-white dark:bg-gray-900  mt-36">
    <div class="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8 ">
        <div class="md:flex md:justify-between">
          <div class="mb-6 md:mb-0">
             <Link to="/" class="flex items-center">
                 
                  <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">{<Navbarlogo/>}</span>
              </Link>
          </div>
          <div class="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
              <div>
                  <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Resources</h2>
                  <ul class="text-gray-500 dark:text-gray-400 font-medium">
                      <li class="mb-4">
                         <Link to="/Reviews" class="hover:underline">Reviews</Link>
                      </li>
                      <li>
                         <Link to="/About" class="hover:underline">About</Link>
                      </li>
                  </ul>
              </div>
              <div>
                  <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Follow us</h2>
                  <ul class="text-gray-500 dark:text-gray-400 font-medium">
                      <li class="mb-4">
                         <Link to="https://github.com/themesberg/flowbite" class="hover:underline ">Github</Link>
                      </li>
                      <li>
                         <Link to="https://discord.gg/4eeurUVvTy" class="hover:underline">Discord</Link>
                      </li>
                  </ul>
              </div>
              <div>
                  <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Legal</h2>
                  <ul class="text-gray-500 dark:text-gray-400 font-medium">
                      <li class="mb-4">
                         <Link to="#" class="hover:underline">Privacy Policy</Link>
                      </li>
                      <li>
                         <Link to="#" class="hover:underline">Terms &amp; Conditions</Link>
                      </li>
                  </ul>
              </div>
          </div>
      </div>
      <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
   </div>
</footer>
    </div>
  )
}
