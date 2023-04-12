import "./kisi.css";

function Kisi({ ilkEleman }){

    return(
        <div className="kok-etiket">

            <div className="img">
                <img src={ilkEleman.image} alt="" />
                <span> <i class="fa-solid fa-quote-left"></i> </span>
            </div>

            <div className="body">
                <h2>{ilkEleman.name}</h2>
                <h4>{ilkEleman.job}</h4>
                <p>{ilkEleman.text}</p>
            </div>

            <div className="icons">
                <button > <i class="fa-solid fa-arrow-left"></i> </button>
                <button> <i class="fa-solid fa-arrow-right"></i> </button>
                <button className="surprise">Surprise me</button>
            </div>
        </div>
    )
};

export default Kisi;