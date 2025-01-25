"use client"

import Link from "next/link"
import { useState } from "react"

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="bg-black text-white ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="font-bold text-xl">
              Dev Starter
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-4">
              <Link href="/" className="hover:bg-stone-900 px-3 py-2 rounded-md text-sm font-medium">
                Home
              </Link>
              <Link href="/pages/commandGenerator" className="hover:bg-stone-900 px-3 py-2 rounded-md text-sm font-medium">
                Dependencies
              </Link>
              <Link href="/pages/cdnGenerator" className="hover:bg-stone-900 px-3 py-2 rounded-md text-sm font-medium">
                CDN
              </Link>
              <Link href="/pages/codeTemplate" className="hover:bg-stone-900 px-3 py-2 rounded-md text-sm font-medium">
                Template
              </Link>
            </div>
          </div>
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
            >
              <span className="sr-only">Open main menu</span>
              {!isOpen ? (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              ) : (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">

          <Link href="/" className="hover:bg-gray-700 block px-3 py-2 rounded-md text-base font-medium">
          Home
          </Link>
          <Link href="/pages/commandGenerator" className="hover:bg-gray-700 block px-3 py-2 rounded-md text-base font-medium">
          Dependencies
          </Link>
          <Link href="/pages/cdnGenerator" className="hover:bg-gray-700 block px-3 py-2 rounded-md text-base font-medium">
          CDN
          </Link>
          <Link href="/pages/codeTemplate" className="hover:bg-gray-700 block px-3 py-2 rounded-md text-base font-medium">
          Template
          </Link>
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar



