import { useState } from "react";
import reviews from "./data";
import Kisi from "./Kisi";
import "./app.css";


function App(){
    const data = reviews;
    const [dene, setData] = useState(data.id === 1);
    console.log(dene);

    


    return(
        <div>
            <h2 className="h2">Our reviews</h2>
            <div>
                
                    
                
            </div>
        </div>
    )
}

export default App;