"use client";
import React, { useState } from 'react';
import Link from 'next/link';

// Using a simple placeholder instead of an SVG icon.
const GraduationCap = () => <span><img src="/Logo.svg" alt="" /></span>;

// The main application component
const App = () => {
  const [questions, setQuestions] = useState([
    { question: '', answers: [{ text: '', isCorrect: false }] },
  ]);

  // Function to handle adding a new question
  const addQuestion = () => {
    setQuestions([...questions, { question: '', answers: [{ text: '', isCorrect: false }] }]);
  };

  // Function to handle adding a new answer to a specific question
  const addAnswer = (questionIndex) => {
    const newQuestions = [...questions];
    newQuestions[questionIndex].answers.push({ text: '', isCorrect: false });
    setQuestions(newQuestions);
  };

  // Function to handle input changes for questions and answers
  const handleInputChange = (e, questionIndex, answerIndex = null) => {
    const { name, value, type, checked } = e.target;
    const newQuestions = [...questions];

    if (answerIndex !== null) {
      if (type === 'checkbox') {
        // Handle checkbox for correct answer
        newQuestions[questionIndex].answers.forEach((answer, index) => {
          answer.isCorrect = index === answerIndex ? checked : false;
        });
      } else {
        // Handle text input for answer
        newQuestions[questionIndex].answers[answerIndex].text = value;
      }
    } else {
      // Handle text input for question
      newQuestions[questionIndex].question = value;
    }

    setQuestions(newQuestions);
  };

  return (
    <div className="min-h-screen bg-[#E7E7E7] font-inter text-gray-800">
      {/* Header Section */}
      <header className="bg-[#39627F] p-4 md:p-6 lg:p-8 flex justify-between items-center z-10 relative shadow-md">
        <div className="flex items-center space-x-2">
          <GraduationCap className="w-8 h-8 md:w-10 md:h-10 text-teal-500" />
        </div>
        <nav className="flex items-center space-x-4">
          <Link href="/login" passHref>
            <button className="bg-white text-gray-800 font-semibold px-4 py-2 rounded-full border-2 border-gray-300 hover:bg-gray-100 transition-colors">
              Login
            </button>
          </Link>
          <Link href="/signup" passHref>
            <button className="bg-teal-500 text-white font-semibold px-4 py-2 rounded-full hover:bg-teal-600 transition-colors">
              Sign Up
            </button>
          </Link>
        </nav>
      </header>

      {/* Main Content */}
      <div className="flex flex-col items-center justify-center p-4">
        {/* Quiz Creation Card */}
        <div className="mt-8 p-8 md:p-12 rounded-[2rem] shadow-xl w-full max-w-2xl mx-auto bg-[#39627F] bg-opacity-30 backdrop-filter backdrop-blur-sm">
          <h1 className="text-3xl font-bold text-center text-gray-800 mb-6 text-white">Creating a Quiz</h1>
          
          {questions.map((q, qIndex) => (
            <div key={qIndex} className="bg-white p-6 rounded-[1.5rem] shadow-md mb-6">
              <h2 className="text-xl font-bold text-gray-800 mb-4">Question {qIndex + 1}:</h2>
              <input
                type="text"
                name="question"
                className="w-full px-4 py-3 rounded-full border-2 border-gray-300 focus:border-blue-500 focus:outline-none transition-colors mb-4"
                placeholder="Enter your question here"
                value={q.question}
                onChange={(e) => handleInputChange(e, qIndex)}
              />
              
              {q.answers.map((a, aIndex) => (
                <div key={aIndex} className="flex items-center space-x-2 mb-2">
                  <input
                    type="checkbox"
                    checked={a.isCorrect}
                    onChange={(e) => handleInputChange(e, qIndex, aIndex)}
                    className="form-checkbox h-5 w-5 text-green-500 rounded-full"
                  />
                  <input
                    type="text"
                    name="answer"
                    className="w-full px-4 py-2 rounded-full border-2 border-gray-300 focus:border-blue-500 focus:outline-none transition-colors"
                    placeholder={`Answer ${aIndex + 1}`}
                    value={a.text}
                    onChange={(e) => handleInputChange(e, qIndex, aIndex)}
                  />
                </div>
              ))}
              
              <button
                type="button"
                onClick={() => addAnswer(qIndex)}
                className="w-full mt-2 bg-gray-200 text-gray-800 font-semibold py-2 rounded-full hover:bg-gray-300 transition-colors"
              >
                New Answer
              </button>
            </div>
          ))}

          <button
            type="button"
            onClick={addQuestion}
            className="w-full my-4 bg-teal-500 text-white font-bold py-3 rounded-full shadow-lg hover:bg-teal-600 transition-colors"
          >
            Add New Question
          </button>
          
          <div className="flex justify-between items-center mt-8 space-x-4">
            <button
              type="submit"
              className="w-1/2 bg-green-500 text-white font-bold py-3 rounded-full shadow-lg hover:bg-green-600 transition-colors"
            >
              Publish Quiz
            </button>
            <Link href="/" passHref>
            <button
              type="button"
              className="w-1/2 bg-red-500 text-white font-bold py-3 rounded-full shadow-lg hover:bg-red-600 transition-colors"
            >
              Back
            </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
