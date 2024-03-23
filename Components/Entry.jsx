export default function Entry({type="text",placeholder, name="", onChange,value}) {
    return (
        <input type={type} placeholder={placeholder} className=" w-full font-Ubuntu font-6xl py-3 border-b-2 border-b-purple-200 outline-none hover:border-b-purple-800 hover:scale-105 transition-all ease-in-out duration-300 font-sans font-semibold" name={name}  onChange={onChange} value={value} required/>
    )
}