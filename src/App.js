import { useState } from 'react';
import { data } from './data';
import './App.css';
import Slider from './Slider';

function App() {

const [citys, setCitys] = useState(0);
const {id, city, description, web, image} = data[citys];

const previousCity = () => {
  setCitys ((citys => {
   citys--;
   if (citys < 0) {
    return data.length-1;
   }
   return citys;
  }))
}

const nextCity = () => {
  setCitys ((citys => {
    citys++;
    if (citys > data.length-1){
      citys = 0;
    }
    return citys;
  }))
}


  return (
    <div>

    <div className="container">
     <h1>MOST BEAUTIFUL EUROPEAN CITY</h1>
    </div>

      <div className="container">
       <h2>{id} - {city}</h2>
      </div>

      <Slider cityPhoto={image}/>

      <div className="container">
       <h2>{description}</h2>
      </div>

      <div className="container">
       <p>{web}</p>
      </div>

      <div className="container">
         <button className="twoBtn" onClick={previousCity}>Previous city</button>
         <button className="twoBtn" onClick={nextCity}>Next city</button>
      </div>

    </div>
  );
}

export default App;

