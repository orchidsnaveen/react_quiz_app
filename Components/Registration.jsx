import { useNavigate } from "react-router-dom";
import Entry from "./Entry";

export default function Registration() {
    const redirect = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        redirect("/screen");
    };

    return (
        <div className=" w-screen h-screen flex justify-center items-center bg-[#6f2aa1]">
            <div className=" flex flex-col w-[24rem] border items-center bg-white rounded-xl shadow-2xl shadow-slate-950 ">
                <h1 className=" text-blue-700 font-Pacifico font-bold text-2xl py-7">Registration Form</h1>
                <form className=" flex flex-col gap-10  w-[18rem] items-center justify-center" onSubmit={handleSubmit}>
                    <Entry placeholder="Name" />
                    <Entry placeholder="Class" />
                    <Entry placeholder="Roll No" />
                    <Entry placeholder="School Name" />
                    <button type="submit" className="mb-7 text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 shadow-lg shadow-purple-500/50 dark:shadow-lg dark:shadow-purple-800/80 font-medium rounded-2xl text-sm px-20 py-2.5 text-center ease-in-out duration-300">Submit</button>
                </form>
            </div>
        </div>
    );
}
