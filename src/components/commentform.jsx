let CommentForm =() => {
    return(
        <section className="comentarios">
             <textarea className="form-control"
                 placeholder="Deja tu comentario....">
            </textarea>   
            <br />
            <button className="btn btn-secondary">Comentar</button>
        </section>
    );
};

export default CommentForm;