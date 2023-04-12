import { useState } from "react";
import reviews from "./data";
import Kisi from "./Kisi";
import "./app.css";


function App(){

    const [data, setData] = useState(reviews);

    const [ilkEleman, setIlkEleman] = useState(data.filter( (eleman)=> eleman.id === 1 ));


    function digerEleman(id){
        let yeniEleman = data.filter( ()=>id + 1 )
        setIlkEleman(yeniEleman);
    }

    console.log(ilkEleman);
    return(
        <div>
            <h2 className="h2">Our reviews</h2>
            <div>
                {
                    ilkEleman.map( (eleman)=> <Kisi ilkEleman={eleman} digerEleman={digerEleman}/> )
                }
            </div>
        </div>
    )
}

export default App;