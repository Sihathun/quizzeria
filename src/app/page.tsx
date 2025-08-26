import React from 'react';

// The icons have been replaced with simple placeholder text.
const Search = () => <span><img src="/Search.svg" alt="" /></span>;
const SlidersHorizontal = () => <span><img src="/filter-search.svg" alt="" /></span>;
const X = () => <span></span>;
const GraduationCap = () => <span><img src="/Logo.svg" alt="" /></span>;
const Eye = () => <span><img src="/eye.svg" alt="" /></span>;
const Pencil = () => <span><img src="/magicpen.svg" alt="" /></span>;
const Trophy = () => <span><img src="/award.svg" alt="" /></span>;

// A simple component for a quiz card
const QuizCard = ({ title, subtitle, color, className = '' }) => {
  return (
    <div className={`p-6 md:p-8 rounded-[3rem] shadow-xl hover:scale-105 transition-transform duration-300 transform-gpu cursor-pointer relative ${color} ${className}`}>
      <div className="font-semibold text-2xl md:text-3xl lg:text-4xl leading-tight">
        {title}
      </div>
      <div className="text-sm md:text-base font-medium mt-2">
        {subtitle}
      </div>
    </div>
  );
};

// The main application component
const App = () => {
  return (
    <div className="bg-[#E7E7E7] font-inter text-gray-800 bigbackground">
      {/* Header Section */}
      <header className="bg-[#39627F] bg-opacity-80 backdrop-filter backdrop-blur-sm shadow-xl p-4 md:p-6 lg:p-8 rounded-b-none flex flex-col md:flex-row justify-between items-center z-10 relative">
        <div className="flex items-center space-x-2 p-2">
          <GraduationCap />
        </div>
        <nav className="flex items-center space-x-4 mt-4 md:mt-0">
          <a href="#" className="text-white font-semibold hover:underline">Home</a>
          <a href="#" className="text-white font-semibold hover:underline">About Us</a>
          <a href="#" className="text-white font-semibold hover:underline">Contact Us</a>
          <div className="space-x-2 hidden md:block">
            <button className="bg-white text-[#39627F]-500 font-semibold px-4 py-2 rounded-full hover:bg-gray-100 transition-colors">
              Login
            </button>
            <button className="bg-white text-[#39627F]-500 font-semibold px-4 py-2 rounded-full hover:bg-gray-100 transition-colors">
              Sign Up
            </button>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <main className="z-20 relative">
        <div className="w-full bg-[#60B3B7] bg-opacity-80 backdrop-filter backdrop-blur-sm p-8 md:p-12 lg:p-16 rounded-none shadow-xl text-center text-white">
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-extrabold leading-tight">
            Quizzeria <br className="md:hidden" />- The Tastiest Quiz
            <br />
            <span className="text-5xl md:text-6xl lg:text-8xl font-extrabold italic font-serif">
              in Town!
            </span>
          </h1>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mt-8">
            <button className="bg-yellow-400 text-teal-800 font-bold px-6 py-3 rounded-full shadow-lg hover:bg-yellow-500 transition-colors">
              Explore Quizzes
            </button>
            <button className="bg-orange-500 text-white font-bold px-6 py-3 rounded-full shadow-lg hover:bg-orange-600 transition-colors">
              Sign Up!
            </button>
          </div>
        </div>

        {/* Feature Blocks and Quiz Cards Container */}
        <div className="container mx-auto px-4 md:px-8 bigbackground">
          {/* Feature Blocks */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mt-12">
            <div className="bg-[#465C88] p-8 rounded-[3rem] shadow-xl text-center hover:scale-105 transition-transform duration-300 transform-gpu cursor-pointer">
              <h3 className="text-xl md:text-2xl text-white font-bold">View All The Quizzes</h3>
              <div className="mt-4 flex justify-center items-center">
                <div className="bg-teal-500 p-3 rounded-full shadow-lg text-white font-bold text-sm">
                  <Eye />
                </div>
              </div>
            </div>
            <div className="bg-[#465C88] p-8 rounded-[3rem] shadow-xl text-center hover:scale-105 transition-transform duration-300 transform-gpu cursor-pointer">
              <h3 className="text-xl md:text-2xl text-white font-bold">Create your own quiz!</h3>
              <div className="mt-4 flex justify-center items-center">
                <div className="bg-green-500 p-3 rounded-full shadow-lg text-white font-bold text-sm">
                  <Pencil />
                </div>
              </div>
            </div>
            <div className="bg-[#465C88] p-8 rounded-[3rem] shadow-xl text-center hover:scale-105 transition-transform duration-300 transform-gpu cursor-pointer">
              <h3 className="text-xl md:text-2xl text-white font-bold">View the Leaderboard</h3>
              <div className="mt-4 flex justify-center items-center">
                <div className="bg-purple-500 p-3 rounded-full shadow-lg text-white font-bold text-sm">
                  <Trophy />
                </div>
              </div>
            </div>
          </div>

          {/* Search Bar and Quiz Cards */}
          <div className="mt-12">
            {/* Search Bar */}
            <div className="bg-white p-2 rounded-full shadow-lg flex items-center space-x-2 mb-8 mx-auto max-w-2xl">
              <input
                type="text"
                placeholder="Algebra"
                className="flex-grow bg-transparent focus:outline-none px-4 py-2 text-lg"
              />
              <button className="p-2 rounded-full hover:bg-gray-100 transition-colors">
                <Search />
              </button>
              <button className="p-2 rounded-full hover:bg-gray-100 transition-colors">
                <SlidersHorizontal />
              </button>
              <button className="p-2 rounded-full hover:bg-gray-100 transition-colors">
                <X />
              </button>
            </div>

            {/* Quiz Card Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              <QuizCard
                title="Math"
                subtitle="Algebra"
                color="bg-orange-500 text-white"
                className="col-span-1 row-span-2"
              />
              {/* Placeholder for other quiz cards */}
              <QuizCard title="Geography" subtitle="Capital Cities" color="bg-white text-gray-800" />
              <QuizCard title="Science" subtitle="Chemistry" color="bg-white text-gray-800" />
              <QuizCard title="History" subtitle="World Wars" color="bg-white text-gray-800" />
              <QuizCard title="Art" subtitle="Renaissance" color="bg-white text-gray-800" />
              <QuizCard title="Literature" subtitle="Shakespeare" color="bg-white text-gray-800" />
              <QuizCard title="Biology" subtitle="Human Anatomy" color="bg-white text-gray-800" />
            </div>
          </div>
        </div>
      </main>
      {/* Footer or other sections could be added here */}
    </div>
  );
};

export default App;
