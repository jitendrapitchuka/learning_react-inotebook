import React,{useContext} from "react";
import noteContext from "../contexts/notes/noteContext";


export const Noteitem = (props) => {
  const { note } = props;

  const context = useContext(noteContext);
  const { deleteNote } = context;
  return (
    <div className="col-md-3">
    
     
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">  {note.title}</h5>
          <p className="card-text">
          {note.description}
          </p>
          <i className="far fa-trash-alt mx-3" onClick={()=>{deleteNote(note._id)}}></i>
          <i className="fas fa-edit mx-2"></i>
          
        </div>
      </div>
    </div>
  );
};
