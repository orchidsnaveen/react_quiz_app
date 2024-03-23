import { useNavigate } from "react-router-dom"


export default function First() {
  const redirect = useNavigate();
  return (
    <div className=' flex justify-center items-center w-screen h-screen bg-[#6f2aa1]'>

      <div className=' flex justify-center items-center w-[46rem] h-[24rem] bg-slate-100 rounded-lg shadow-2xl text-ellipsis'>

        <div className='flex flex-col justify-center items-center w-[30rem] flex-wrap gap-4'>
          <img src="https://icons.iconarchive.com/icons/martz90/circle/512/books-icon.png" alt=" Academy logo" className=' h-24 w-24 mb-5' />
          <h1 className='text-3xl  font-Rampart text-black font-extrabold'>Welcome To Education Portal</h1>

          <div className='flex w-[24rem]'>

            <h4 className=' font-thin text-center font-Space'>Hello Candinate this quiz have some question and answer select the right answer and gain points</h4>
          </div>
          <button className=' rounded-md my-4 px-10 py-3 bg-purple-500 font-mono text-xl font-semibold hover:bg-purple-700 hover:scale-105 transition-all text-white border border-black' onClick={() => redirect("/quiz")}>Start quiz</button>
        </div>
      </div>
    </div>
  )
}