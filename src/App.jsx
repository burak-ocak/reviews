import { useState } from "react";
import reviews from "./data";
import Kisi from "./Kisi";
import "./app.css";


function App(){

    const [ilkEleman, setIlkEleman] = useState(reviews.filter( (eleman)=> eleman.id === 1 ));


    function digerEleman(id){
        let yeniEleman = reviews.filter( (e)=> e.id === id + 1 );
        setIlkEleman(yeniEleman);
        if(id > 3){
             setIlkEleman(reviews.filter( (eleman)=> eleman.id === 1 ));
        }
    };

    function oncekiEleman(id){
        let gecmisEleman = reviews.filter( (e)=> e.id === id - 1 );
        setIlkEleman(gecmisEleman);
        if(id < 2){
            setIlkEleman( reviews.filter( (e)=> e.id === 4 ) )
        }
    };
    
    function randomEleman(id){
        const rastgeleEleman = reviews.filter( (e)=> e.id === Math.floor( Math.random() * 4 ) + 1 )
        setIlkEleman(rastgeleEleman);
        
    }

    return(
        <div>
            <h2 className="h2">Our reviews</h2>
            <div>
                {
                    ilkEleman.map( (eleman)=> <Kisi ilkEleman={eleman} digerEleman={digerEleman} oncekiEleman={oncekiEleman} randomEleman={randomEleman}/> )
                }
            </div>
        </div>
    )
}

export default App;