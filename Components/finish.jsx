import React from 'react';
import { useLocation } from 'react-router-dom';


function ScorePage() {
  const location = useLocation();
  const { score, question_length } = location.state || {};


  return (
    <div className="flex justify-center items-center h-screen bg-purple-400">
      <div className=" flex flex-col w-[26rem] h-[24rem] gap-5 items-center rounded-lg bg-slate-100 ">

        <img src="https://icons.iconarchive.com/icons/martz90/circle/512/books-icon.png" alt="" className=' h-24 w-24  mt-10' />
        <h1 className="text-4xl font-bold">Congralutation!</h1>
        <h1 className="font-bold">You have completed the quiz successfully</h1>
        <p className="text-xl">Your Score: {score} out  of {question_length}</p>
        <div className=' flex w-full border-t-2  justify-around'>
          <button className=' bg-blue-900 rounded-md py-2  px-4 font-sans font-bold text-white'>Restart</button>
          <button>Exit</button>
        </div>
      </div>
    </div>
  );
}

export default ScorePage;
