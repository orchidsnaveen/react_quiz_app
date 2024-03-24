import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';


function ScorePage() {
  const location = useLocation();
  const { score, question_length } = location.state || {};
  const redirect = useNavigate();

  return (
    <div className="flex justify-center items-center h-screen bg-purple-400 px-4">
      <div className="flex flex-col w-full max-w-sm sm:max-w-md md:max-w-lg lg:w-[26rem] h-auto gap-5 items-center rounded-lg bg-slate-100 p-5">

        <img src="https://icons.iconarchive.com/icons/martz90/circle/512/books-icon.png" alt="" className='h-24 w-24 mt-5' />
        <h1 className="text-3xl sm:text-4xl font-bold text-center">Congratulations!</h1>
        <p className="font-bold text-center">You have completed the quiz successfully</p>
        <p className="text-xl text-center">Your Score: {score} out of {question_length}</p>
        <div className='flex w-full border-t-2 pt-4 justify-around'>
          <button className='bg-blue-900 rounded-md py-2 px-4 font-sans font-bold text-white' onClick={()=> {redirect("/quiz")}}>Restart</button>
          <button className="py-2 px-4" onClick={()=> {redirect("/")}}>Exit</button>
        </div>
      </div>
    </div>
  );
}

export default ScorePage;
