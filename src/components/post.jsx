import { useState , useEffect} from "react";
import CommentForm from "./commentform";
import ListComments from "./listcomments";

let Post =() => {
    //manejo de estado de los likes
    let[likes, setLike]=useState(0);
    let updateLikes =()=>setLike(likes+1)
    //manejo del boton de comentarios
    let[btnComment, setBtnComment]=useState(false);
    let isShowComment =() => setBtnComment(!btnComment);
    //console.log(btnComment);
    //funcion para obtener comentarios del formulario
    let [textComment,setTextComment] = useState("");
    let getCommentData =(comment)=>{
        setTextComment(comment);

    }
     //listados de comentarios
     let initialComments = [
        {id:1, text:"Lo mejor los asados"},
        {id:2, text:"con una buena compañia"}
    ];
    let [listData, setListData] = useState(initialComments);
    //permite que React “recuerde” el último ID usado y lo actualice con cada nuevo comentario
    let [nextID, setNextID] = useState(3);

    //comprobar si hay un nuevo comentario
    useEffect(()=>{
        if(textComment){
            setListData([
                ...listData,
                {id:nextID,text: textComment}
              ]);
            setNextID(nextID + 1);  // acá se incrementa el ID  
        }
    },[textComment]);
    
    //console.log(listCom);
    //console.log(listData)
    return(
             <div className="card" style={{ width: "22rem", margin: "0 auto" }}>
            <div className="card-header d-flex justify-content-between align-items-center">
            <div className="d-flex align-items-center">
                <img src="https://cdn-icons-png.flaticon.com/512/1046/1046784.png" alt="parrilla" className="rounded-circle me-2" style={{ width: "40px", height: "40px" }} />
                <div>
                    <strong>El fogón de Alejandro Gaviria </strong><br />
                    <small className="text-muted">18 h</small>
                </div>
            </div>
                <div style={{ fontSize: "1.2rem" }}>⋯</div>
                </div>

                <div className="card-body">
                    <p className="card-text">No hay nada como una carne al fuego lento, rodeado de amigos y buenas historias. Así se vive el sabor real!.</p>
                    <img src={"https://www.tresjotas.com/wp-content/uploads/2018/03/saber-termino-de-la-carne.jpg"} className="card-img-top rounded" alt="asado"/>
                </div>
            
            <ul className="list-group list-group-flush"> 
            <li className="list-group-item d-flex justify-content-between px-3">
                <span>👌❤️😋{likes}</span>
                <span>{listData.length} 🗨</span>
            </li>       
            <li className="list-group-item">
                <div className="d-flex flex-wrap gap-2 justify-content-center">
                    <button className="btn btn-secondary" onClick={updateLikes}>👌 Likes </button>
                    <button className="btn btn-secondary" onClick={isShowComment}>🗨 comment</button>
                    <button className="btn btn-secondary" onClick={() => alert("Post compartido")}>🔄 Compartir</button>
                </div>
            </li>
            </ul> 
            <div className="card-footer">
                {btnComment && <CommentForm getCommentData ={getCommentData}/>}     
            </div>        
            <ListComments listComData ={listData}/>
        </div>
    );
};

export default Post;