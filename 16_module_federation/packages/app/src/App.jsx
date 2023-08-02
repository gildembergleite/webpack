import React from 'react'
import { BrowserRouter as Router, Link } from 'react-router-dom'
import './app.css'

export default function App() {
   return (
      <Router>
         <div className="flex w-full justify-center items-center bg-slate-200">
            <nav className="w-full max-w-6xl py-6">
               <ul className="flex w-full gap-4 font-medium">
                  <li>
                     <Link href="/">Home</Link>
                  </li>
                  <li>
                     <Link href="">Contact</Link>
                  </li>
               </ul>
            </nav>
         </div>
      </Router>
   )
}
