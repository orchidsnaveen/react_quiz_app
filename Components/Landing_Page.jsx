
import { useNavigate } from "react-router-dom";

export default function LandingPage() {
  const redirect = useNavigate();
  return (
    <div className="h-screen flex justify-center items-center" style={{ background: 'linear-gradient(135deg, #6D28D9 0%, #8B5CF6 100%)' }}>
      <div className="text-center">
        <h1 className="text-6xl font-bold font-Nunito text-white mb-14 tracking-wide">Welcome to Edutaion Portal</h1>
        <div className="space-x-8">
          <button className="px-8 py-3 bg-white bg-opacity-20 text-white rounded-full font-semibold text-xl shadow-lg transform hover:-translate-y-1 hover:bg-opacity-40 transition duration-500 ease-out" onClick={() => { redirect("/registraion") }}>
            Student
          </button>
          <button className="px-8 py-3 bg-white bg-opacity-20 text-white rounded-full font-semibold text-xl shadow-lg transform hover:-translate-y-1 hover:bg-opacity-40 transition duration-500 ease-out" onClick={() => { redirect("/teacher_login") }}>
            Teacher
          </button>
        </div>
        <p className="text-lg text-white animate-pulse mt-8 font-Space">Select your role to proceed</p>
      </div>
    </div>
  );
}

