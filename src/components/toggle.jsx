import '../css/toggle.css'
export default function Toggle({setLanguage}) {
    return (
        <label className="switch">
            <input type="checkbox" onChange={()=>{
                setLanguage((value)=>!value)
            }}/>
            <span className="slider round"></span>
        </label>
    )
}