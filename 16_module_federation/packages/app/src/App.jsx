import React from 'react'
import { Link, BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import './app.css'

export default function App() {
   // Module Federation
   const Home = React.lazy(() => import('HomeApp/HomePage'))
   const Contact = React.lazy(() => import('ContactApp/ContactPage'))

   return (
      <Router>
         <nav className="bg-white dark:bg-gray-900 fixed w-full z-20 top-0 left-0 border-b border-gray-200 dark:border-gray-600">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
               <Link to="/" className="flex items-center gap-4">
                  <svg
                     xmlns="http://www.w3.org/2000/svg"
                     width="38"
                     height="46"
                     viewBox="0 0 256 290"
                  >
                     <path
                        fill="#FFF"
                        d="m128 .048l128 72.405V217.31l-128 72.405L0 217.31V72.453z"
                     />
                     <path
                        fill="#8ED6FB"
                        d="m233.153 212.287l-100.902 57.14V224.99l62.889-34.632l38.013 21.929Zm6.907-6.231V86.654l-36.902 21.3v76.8l36.902 21.302Zm-217.6 6.23l100.903 57.094v-44.438l-62.889-34.584l-38.014 21.929Zm-6.907-6.23V86.654l36.903 21.3v76.8l-36.903 21.302Zm4.3-127.13l103.51-58.543v42.99L57.045 99.84l-.532.29l-36.66-21.205Zm215.86 0L132.251 20.382v42.99l66.27 36.515l.531.29l36.661-21.253Z"
                     />
                     <path
                        fill="#1C78C0"
                        d="m123.363 214.847l-62.02-34.15v-67.574l62.02 35.792v65.932Zm8.888 0l62.02-34.101v-67.623l-62.02 35.792v65.932ZM65.497 105.298l62.31-34.246l62.26 34.246l-62.26 35.937l-62.31-35.937Z"
                     />
                  </svg>
                  <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
                     Module Federation
                  </span>
               </Link>
               <div className="flex md:order-2">
                  <button
                     type="button"
                     className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                     Get started
                  </button>
                  <button
                     data-collapse-toggle="navbar-sticky"
                     type="button"
                     className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                     aria-controls="navbar-sticky"
                     aria-expanded="false"
                  >
                     <span className="sr-only">Open main menu</span>
                     <svg
                        className="w-5 h-5"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 17 14"
                     >
                        <path
                           stroke="currentColor"
                           strokeLinecap="round"
                           strokeLinejoin="round"
                           strokeWidth="2"
                           d="M1 1h15M1 7h15M1 13h15"
                        />
                     </svg>
                  </button>
               </div>
               <div
                  className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
                  id="navbar-sticky"
               >
                  <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                     <li>
                        <Link
                           to="/"
                           className="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500"
                           aria-current="page"
                        >
                           Home
                        </Link>
                     </li>

                     <li>
                        <Link
                           to="/contact"
                           className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                        >
                           Contact
                        </Link>
                     </li>
                  </ul>
               </div>
            </div>
         </nav>
         <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
         </Routes>
      </Router>
   )
}
