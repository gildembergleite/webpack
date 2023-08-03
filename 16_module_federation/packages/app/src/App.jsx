import React from 'react'
import { Link, BrowserRouter, Route, Routes } from 'react-router-dom'
import './app.css'

export default function App() {
   // Module Federation

   const Home = React.lazy(() => import('HomeApp/Home'))
   const Contact = React.lazy(() => import('ContactApp/Contact'))

   return (
      <BrowserRouter basename="/">
         <nav className="bg-white dark:bg-gray-900 flex border-gray-200 dark:border-gray-600 px-8 h-24">
            <div className="flex w-full justify-between items-center">
               <div className="flex">
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
               </div>
               <div className="flex items-center justify-between">
                  <ul className="flex items-center justify-center gap-4 rounded-lg">
                     <li>
                        <Link
                           className="px-2 text-white hover:underline"
                           to="/"
                        >
                           Home
                        </Link>
                     </li>
                     <li>
                        <Link
                           className="px-2 text-white hover:underline"
                           to="/contact"
                        >
                           Contact
                        </Link>
                     </li>
                  </ul>
               </div>
            </div>
         </nav>
         <React.Suspense>
            <Routes>
               <Route exact path="/" element={<Home />} />
               <Route path="/contact" element={<Contact />} />
            </Routes>
         </React.Suspense>
      </BrowserRouter>
   )
}
