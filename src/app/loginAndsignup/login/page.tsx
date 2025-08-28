import React from 'react';
import Link from 'next/link';

// Using a simple placeholder instead of an SVG icon.
const GraduationCap = () => <span className="w-8 h-8 md:w-10 md:h-10 text-teal-500" ><img src="/Logo.svg" alt="" /></span>;

// The main application component
const App = () => {
  return (
    <div className="min-h-screen bg-[#E7E7E7] font-inter text-gray-800">
      {/* Header Section */}
      <header className="bg-[#39627F] p-4 md:p-6 lg:p-8 flex justify-between items-center z-10 relative shadow-md">
        <div className="flex items-center space-x-2">
          <Link href="/"><GraduationCap /></Link>
        </div>
        <nav className="flex items-center space-x-4">
          <Link href="" passHref>
            <button className="bg-white text-gray-800 font-semibold px-4 py-2 rounded-full border-2 border-gray-300 hover:bg-gray-100 transition-colors">
              Login
            </button>
          </Link>
          <Link href="signup" passHref>
            <button className="bg-teal-500 text-white font-semibold px-4 py-2 rounded-full hover:bg-teal-600 transition-colors">
              Sign Up
            </button>
          </Link>
        </nav>
      </header>

      {/* Main Content */}
      <div className="flex flex-col items-center justify-center p-4">
        {/* Login Card */}
        <div className="mt-8 p-8 md:p-12 rounded-[2rem] shadow-xl w-full max-w-md mx-auto bg-[#39627F] bg-opacity-30 backdrop-filter backdrop-blur-sm">
          <h1 className="text-3xl font-bold text-center text-gray-800 mb-6 text-white">Log In</h1>
          
          {/* Email and Password Form */}
          <form className="space-y-4">
            <div>
              <label htmlFor="email" className="block text-gray-800 font-semibold mb-1 text-white">
                Email Address:
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-3 rounded-full border-2 border-gray-300 focus:border-blue-500 focus:outline-none transition-colors"
                placeholder=""
              />
            </div>
            <div>
              <label htmlFor="password" className="block text-gray-800 font-semibold mb-1 text-white">
                Password:
              </label>
              <input
                type="password"
                id="password"
                className="w-full px-4 py-3 rounded-full border-2 border-gray-300 focus:border-blue-500 focus:outline-none transition-colors"
                placeholder=""
              />
            </div>
            <div className="text-right">
              <a href="#" className="text-blue-600 font-medium hover:underline text-white">
                Forget password? <span className="text-blue-600 font-semibold">click here</span>
              </a>
            </div>
            <div className="pt-4">
              <button
                type="submit"
                className="w-full bg-blue-500 text-white font-bold py-3 rounded-full shadow-lg hover:bg-blue-600 transition-colors"
              >
                Log In
              </button>
            </div>
          </form>
          
          <div className="my-8 text-center text-gray-700 text-white">
            <p>Or with:</p>
          </div>
          
          {/* Social Login Buttons */}
          <div className="space-y-4">
            <button className="w-full bg-white text-gray-700 font-semibold py-3 rounded-full shadow-lg flex items-center justify-center space-x-2 border-2 border-gray-300 hover:bg-gray-100 transition-colors">
              <img 
                src="https://placehold.co/24x24/FFFFFF/000000?text=G"
                alt="Google logo"
                className="h-6 w-6"
              />
              <span>Google</span>
            </button>
            <button className="w-full bg-white text-gray-700 font-semibold py-3 rounded-full shadow-lg flex items-center justify-center space-x-2 border-2 border-gray-300 hover:bg-gray-100 transition-colors">
              <img 
                src="https://placehold.co/24x24/FFFFFF/000000?text=f"
                alt="Facebook logo"
                className="h-6 w-6"
              />
              <span>Facebook</span>
            </button>
            <button className="w-full bg-white text-gray-700 font-semibold py-3 rounded-full shadow-lg flex items-center justify-center space-x-2 border-2 border-gray-300 hover:bg-gray-100 transition-colors">
              <img 
                src="https://placehold.co/24x24/FFFFFF/000000?text=Y"
                alt="Yahoo! logo"
                className="h-6 w-6"
              />
              <span>Yahoo!</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
