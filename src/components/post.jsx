
let Post =() => {
    return(
            <div className="card" style={{"width": "18rem"}}>
            
            <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <img src={"https://www.tresjotas.com/wp-content/uploads/2018/03/saber-termino-de-la-carne.jpg"} className="card-img-top" alt="..."/>
            </div>
            <ul className="list-group list-group-flush">    
            <li className="list-group-item d-flex justify-content-around">
                    <span>👌❤😥10mil</span><span>2mil🗨</span>
            </li>
            <li className="list-group-item d-flex justify-content-around">
                    <button className="btn btn-secondary">👌 Likes </button> <button className="btn btn-secondary">🗨 comment</button>
            </li>
            </ul>     
        </div>
    );
};

export default Post;