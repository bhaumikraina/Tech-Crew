import React from 'react'
import { Link } from "react-router-dom";
import logo from "./../images/Logo.jpg"

export default function Navbarlogo() {
  return (
    <div>
      <div>
			<nav className="bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-900">
				<div className="container flex justify-center">
					<Link to="/" className="flex space-between ">
						<img
							src={logo}   
							width={200}
							height={120}
							alt="Hotel Ohio"
							className="pt-2"
						/>
					</Link>
				</div>
			</nav>
		</div>
    </div>
  )
}
