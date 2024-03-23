import Entry from "./Entry";
import { IoCloseOutline } from "react-icons/io5";
import React, { useState } from 'react';
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../src/firebase";
import { FaEye, FaEyeSlash } from "react-icons/fa";


export default function SignUpForm({ OnClose }) {

    const [signUpData, setSignUpData] = useState({
        username: '',
        email: '',
        password: '',
        phone_number: '',
    });

    const [show_password, setshowpassword] = useState(true)


    const PasswordVisibility = () => {
        setshowpassword(setshowpassword => !setshowpassword);

    };

    const submitData = async (event) => {
        event.preventDefault();
        const { username, email, password, phone_number } = signUpData;


        if (!username.trim() || !email.trim() || !password.trim() || !phone_number.trim()) {
            alert("All fields are required!");
            return;
        }

        const emailPattern = /\S+@\S+\.\S+/;
        if (!emailPattern.test(email)) {
            alert("Please enter a valid email address.");
            return;
        }


        if (password.length < 6) {
            alert("Password must be at least 6 characters long.");
            return;
        }

        try {
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            const user = userCredential.user;
            console.log("User created successfully with email:", user.email);

            alert("User Created with",user.email,"Success");
            setSignUpData({ username: '', email: '', password: '', phone_number: '' });

        } catch (error) {
            alert(error.message);
        }
    };


    const handleChange = (e) => {
        const { name, value } = e.target;
        setSignUpData({
            ...signUpData,
            [name]: value,
        });
    };




    return (

        <div className="fixed inset-0  flex flex-col justify-center items-center backdrop-blur-sm ">
            <div className="flex flex-col ">

                <IoCloseOutline className=" text-4xl place-self-end cursor-pointer	" onClick={OnClose} />
                <div className=" flex flex-col w-[24rem] border items-center bg-white rounded-xl shadow-xl">
                    <h1 className="font-Roboto font-bold text-2xl py-7">Sign Up</h1>
                    <form className=" flex flex-col gap-10  w-[18rem] items-center justify-center" onSubmit={submitData}>

                        <Entry placeholder="UserName" type="text"
                            name="username" value={signUpData.username} onChange={handleChange} />

                        <Entry type="Email" placeholder="Email"
                            name="email" value={signUpData.email} onChange={handleChange} />

                        <div className=" w-full flex relative">

                            <Entry type={show_password ? "password" : "text"} placeholder="Password"
                                name="password" value={signUpData.password} onChange={handleChange} />

                            {show_password == false ?

                                < FaEye onClick={PasswordVisibility} className=" cursor-pointer text-xl absolute right-0" />
                                :
                                < FaEyeSlash className=" text-xl cursor-pointer absolute right-0" onClick={PasswordVisibility} />
                            }
                        </div>

                        <Entry type="tel" placeholder="Phone Number"
                            name="phone_number" value={signUpData.phone_number} onChange={handleChange} />

                        <button type="submit" className="mb-7 text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 shadow-lg shadow-purple-500/50 dark:shadow-lg dark:shadow-purple-800/80 font-medium rounded-2xl text-sm px-20 py-2.5 text-center ease-in-out duration-300" onClick={submitData}>Submit</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

