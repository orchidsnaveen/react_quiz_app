import { useNavigate } from "react-router-dom";
import { Questions } from "../utils/Question";
import Option_btn from "./Option_btn";
import { useState, useEffect } from "react";

export default function Quiz() {
    const [score, setScore] = useState(0);
    const [lastFocusedButton, setLastFocusedButton] = useState('');
    const [count, setCount] = useState(0);
    const [question, setQuestion] = useState(Questions[count]);
    const [userAnswers, setUserAnswers] = useState(Array(Questions.length).fill(null));
    const redirect = useNavigate()


    const handle_question_next = () => {
        const answeredCorrectly = lastFocusedButton === question.answer;    
        
        const newAnswers = [...userAnswers];

        console.log(newAnswers)
        
        if (!newAnswers[count] || !newAnswers[count].correct) {
            
            newAnswers[count] = { answer: lastFocusedButton, correct: answeredCorrectly };
            
            setUserAnswers(newAnswers);
            if (lastFocusedButton === question.answer) {
                setScore(prevScore => prevScore + 1);
            }
        }
       
        if (count < Questions.length - 1) {
            setCount(prev => prev + 1);
        }
        console.log(lastFocusedButton,question.answer)
    };
    

    const handle_question_pre = () => {
            setCount(pre => pre - 1)
    }

    const getting_button_text = (e) => {
        setLastFocusedButton(e.target.innerText);
    };


    const finish_button = () => {
        setScore(0)
        redirect("/score",{state : {
            score,
            question_length : Questions.length
        }});
    };



    useEffect(() => {
        setQuestion(Questions[count])
    }, [count])

    return (
        <div className="flex w-scren h-screen justify-center items-center bg-purple-500">
            <div className=" flex flex-col w-[36rem] h-[30rem] border rounded-xl bg-white">

                <div className="border w-full h-[4rem] shadow-xl rounded-t-xl">
                    <h1 className=" font-serif text-2xl font-bold my-3 ml-4">Awesome Quiz Application</h1>

                </div>
                <div className="border h-full w-full flex justify-center items-center">

                    <div className=" w-[30rem] h-[20rem] flex flex-col gap-3">
                        <h1 className="my-3 font-sans font-bold text-xl">{question?.question}</h1>
                        {
                            question.options.map((opt, ind) => (
                                <div onClick={getting_button_text} key={ind} >
                                    <Option_btn name={opt} />
                                </div>
                            ))
                        }

                    </div>

                </div>
                <div className="w-full h-[4rem] flex justify-around">

                    <h1 className=" px-4 ">{count + 1} out of {Questions.length} Questions</h1>

                    <div className=" flex gap-2">

                        <button className="  bg-blue-500 text-white font-medium font-sans ml-[10rem] rounded-lg h-10 px-4 hover:bg-blue-700 transition-all ease-in-out duration-300 disabled:bg-slate-500" disabled={count === 0} onClick={() => handle_question_pre()}>Pre Que</button>

                        {count < Questions.length - 1?
                            <button className="  bg-blue-500 text-white font-medium font-sans  rounded-lg h-10 px-4 hover:bg-blue-700 transition-all ease-in-out duration-300" onClick={() => handle_question_next()}>Next Que</button> 
                            :
                            <button className="  bg-blue-500 text-white font-medium font-sans  rounded-lg h-10 px-4 hover:bg-blue-700 transition-all ease-in-out duration-300" onClick={() => finish_button()}>Finish</button>}
                    </div>
                </div>
            </div>
        </div>
    )
}