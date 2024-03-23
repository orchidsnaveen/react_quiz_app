import { useState } from "react";
import Entry from "./Entry";
import SignUpForm from "./Sign_up";
import { FaEye,FaEyeSlash} from "react-icons/fa";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../src/firebase";
import { useNavigate } from "react-router-dom";

export default function Teacher_login_page() {
    const [show_signup, setshowup] = useState(false)
    const [show_password, setshowpassword] = useState(true)
    const redirect = useNavigate();

    const PasswordVisibility = () => {
        setshowpassword(setshowpassword => !setshowpassword);

    };


    const [formData, setFormData] = useState({
        username: '',
        password: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target; 
        setFormData({
            ...formData,
            [name]: value, 
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const userCredential = await signInWithEmailAndPassword(auth, formData.username, formData.password);
            console.log(`${userCredential.user.email} logged in successfully`);
            redirect("/profile")
        } catch (error) {
            alert("User Not Found")
        }
    };

    return (
        <div className="w-screen h-screen flex justify-center items-center bg-purple-600">
            <div className="w-[30rem] h-[28rem] border rounded-xl bg-white">
                <div className=" border-b-2 h-20 flex justify-center items-center font-Nunito text-4xl font-bold rounded-t-lg">
                    <h1> Login</h1>
                </div>
                <div className="  w-full flex flex-col items-center">

                    <form className=" flex flex-col [h-20rem] w-[24rem] mt-10 gap-5" onSubmit={handleSubmit}>
                        <Entry placeholder="Username" name="username"
                            value={formData.username}
                            onChange={handleChange} />


                        <div className="flex justify-between items-baseline gap-3 relative" >
                            <Entry placeholder="Password" type={show_password ? "password" : "text"}
                                value={formData.password} name="password"
                                onChange={handleChange} />
                            {show_password == false ?

                                < FaEye className=" text-xl cursor-pointer absolute right-0" onClick={PasswordVisibility} />
                                :
                                <FaEyeSlash onClick={PasswordVisibility} className=" cursor-pointer text-xl absolute right-0" />
                            }
                        </div>
                        <a href="#" className=" text-neutral-500 font-semibold"> Forget password ?</a>

                        <button type="submit" className="mb-7 text-white shadow-xl font-bold rounded-3xl text-lg bg-blue-600 px-20 py-2.5 text-center ease-in-out duration-300 hover:bg-blue-700 transition-all ">Login</button>
                    </form>
                    <div className="flex gap-3">
                        <h2 className=" font-Nunito text-neutral-500 font-bold">Not a Member?</h2>
                        <button className=" text-blue-500 font-semibold" onClick={() => setshowup(true)}>Sign up</button>
                        {show_signup && <SignUpForm OnClose={() => setshowup(false)} />}

                    </div>
                </div>
            </div>
        </div>
    )
}