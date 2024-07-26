import React from 'react';

const Footer = () => {
  return (
    <>
      <footer className="bg-gray-900 text-white">
        <div className="container mx-auto py-12 px-4">
          <div className="flex flex-wrap justify-center -mx-4">
            <div className="w-full lg:w-1/3 px-4 mb-8 lg:mb-0">
              <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
              <p className="text-lg mb-4">
                Need to talk to us directly?
              </p>
              <a
                href="#"
                className="text-indigo-500 hover:text-indigo-400 transition duration-200"
              >
                Contact us
              </a>
            </div>
            <div className="w-full lg:w-1/3 px-4 mb-8 lg:mb-0">
              <h2 className="text-2xl font-semibold mb-4">Follow Us</h2>
              <p className="text-lg mb-4">
                Stay connected with us on social media:
              </p>
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="text-gray-400 hover:text-gray-300 transition duration-200"
                >
                  <span className="sr-only">Twitter</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 4.56c-.88.39-1.83.65-2.82.77a4.92 4.92 0 0 0 2.16-2.71 9.83 9.83 0 0 1-3.1 1.18 4.92 4.92 0 0 0-8.38 4.49A13.95 13.95 0 0 1 1.67 3.15a4.92 4.92 0 0 0 1.52 6.57 4.87 4.87 0 0 1-2.23-.61v.06a4.92 4.92 0 0 0 3.95 4.82 4.95 4.95 0 0 1-2.21.08 4.92 4.92 0 0 0 4.6 3.42A9.86 9.86 0 0 1 0 21.54a13.92 13.92 0 0 0 7.56 2.21c9.06 0 14-7.5 14-14v-.64A9.93 9.93 0 0 0 24 4.56z" />
                  </svg>
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-gray-300 transition duration-200"
                >
                  <span className="sr-only">Instagram</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.16c3.2 0 3.584.012 4.85.07 1.17.055 1.97.24 2.43.4a4.83 4.83 0 0 1 1.75 1.08 4.83 4.83 0 0 1 1.08 1.75c.16.46.345 1.26.4 2.43.06 1.266.07 1.65.07 4.85s-.012 3.584-.07 4.85c-.055 1.17-.24 1.97-.4 2.43a4.83 4.83 0 0 1-1.08 1.75 4.83 4.83 0 0 1-1.75 1.08c-.46.16-1.26.345-2.43.4-1.266.06-1.65.07-4.85.07s-3.584-.012-4.85-.07c-1.17-.055-1.97-.24-2.43-.4a4.83 4.83 0 0 1-1.75-1.08 4.83 4.83 0 0 1-1.08-1.75c-.16-.46-.345-1.26-.4-2.43-.06-1.266-.07-1.65-.07-4.85s.012-3.584.07-4.85c.055-1.17.24-1.97.4-2.43a4.83 4.83 0 0 1 1.08-1.75 4.83 4.83 0 0 1 1.75-1.08c.46-.16 1.26-.345 2.43-.4 1.266-.06 1.65-.07 4.85-.07zM12 0C8.708 0 8.292.016 7.05.07 5.812.124 4.988.31 4.29.55a6.817 6.817 0 0 0-2.45 1.23 6.817 6.817 0 0 0-1.23 2.45c-.24.698-.426 1.522-.48 2.76C.016 8.292 0 8.708 0 12s.016 3.708.07 4.95c.054 1.238.24 2.062.48 2.76a6.817 6.817 0 0 0 1.23 2.45 6.817 6.817 0 0 0 2.45 1.23c.698.24 1.522.426 2.76.48C8.292 23.984 8.708 24 12 24s3.708-.016 4.95-.07c1.238-.054 2.062-.24 2.76-.48a6.817 6.817 0 0 0 2.45-1.23 6.817 6.817 0 0 0 1.23-2.45c.24-.698.426-1.522.48-2.76.054-1.242.07-1.658.07-4.95s-.016-3.708-.07-4.95c-.054-1.238-.24-2.062-.48-2.76a6.817 6.817 0 0 0-1.23-2.45 6.817 6.817 0 0 0-2.45-1.23c-.698-.24-1.522-.426-2.76-.48C15.708.016 15.292 0 12 0zm0 5.84a6.16 6.16 0 1 0 0 12.32 6.16 6.16 0 0 0 0-12.32zm0 10.16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.4-10.4a1.44 1.44 0 1 0 0-2.88 1.44 1.44 0 0 0 0 2.88z" />
                  </svg>
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-gray-300 transition duration-200"
                >
                  <span className="sr-only">LinkedIn</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M22.23 0H1.77C.8 0 0 .77 0 1.72v20.56C0 23.23.8 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.72V1.72C24 .77 23.2 0 22.23 0zM7.12 20.45H3.56V9h3.56v11.45zM5.34 7.48a2.07 2.07 0 1 1 0-4.14 2.07 2.07 0 0 1 0 4.14zm14.66 12.97h-3.56v-5.61c0-1.34-.48-2.25-1.69-2.25-.92 0-1.46.63-1.7 1.25-.09.21-.11.51-.11.8v5.82H9.38V9h3.56v1.57c.47-.74 1.31-1.8 3.18-1.8 2.32 0 4.06 1.5 4.06 4.72v7.96h-.01z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer