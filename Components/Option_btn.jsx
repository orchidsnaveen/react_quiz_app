export default function Option_btn(props){
    
    return(
        <button className="w-full border py-2 rounded-md bg-blue-100 text-xl font-semibold text-start px-3 hover:scale-x-105 hover:bg-blue-200 transition-all ease-in-out duration-200 focus:bg-green-500">{props.name}</button>
    )
}