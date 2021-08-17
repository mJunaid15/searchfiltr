import React, { useState } from 'react';
import Sresult from './Sresult';



const App = () => {
  const [ imge, setImg ] = useState("");

  const changeEvent = (event) => {

    const data = event.target.value;
    setImg(data);

    console.log(data);

  };



  return (
    <>
      <div className="seachbarr">
        <input type="text" placeholder="Search anything" value={imge} onChange={changeEvent} />

        {imge === "" ? null : <Sresult data ={imge}/> } 
      </div>

     
    </>
  )
};

export default App;