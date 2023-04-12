import { useEffect, useState } from "react";
import reviews from "./data";

function App(){
    
    const [data, setData] = useState(reviews.filter( (e)=> e.id === 1 ));
    console.log(data);

    function update(id){
        setData( reviews.filter( (e)=> e.id === id + 1 ) )
    }
    
    
/*
    function guncelle(id){
        filtre = reviews.filter( (e)=> id + 1 );
    }

    const datas = filtre.map ( (e)=> {
        return(
            <div>
                <img src={e.image} alt="resim" />
                <p>{e.name}</p>
                <p>{e.job}</p>
            </div>
        )
    } );
*/
    
    
    return(
        <div>
            {
                data.map ( (e)=> {
                    return(
                        <div>
                            <img src={e.image} alt="resim" />
                            <p>{e.name}</p>
                            <p>{e.job}</p>
                            <button onClick={()=>update(e.id)}>Sonraki</button>
                        </div>
                    )
                } )
            }
        </div>
    );
};

export default App;