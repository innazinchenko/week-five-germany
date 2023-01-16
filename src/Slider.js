import { useState } from "react";

function Slider({cityPhoto}) {
    const [stadt, setStadt] = useState(0);
    
const previousStadt = () =>{
    setStadt ((stadt => {
        stadt--;
        if (stadt < 0){
            return cityPhoto.length - 1
        }
        return stadt;
    }))
}

const nextStadt = () => {
    setStadt((stadt =>{
        stadt++;
        if (stadt > cityPhoto.length -1){
            stadt = 0
        }
        return stadt;
    }))
}

return (

    <div>
        <div className="sliders container">
        <button className="btn" onClick={previousStadt}>Prev photo</button>
         <img src = {cityPhoto[stadt]} width ="400px" alt="city"/>
         <button className="btn" onClick={nextStadt}>Next photo</button>
       </div>
  </div>
)
}
export default Slider;