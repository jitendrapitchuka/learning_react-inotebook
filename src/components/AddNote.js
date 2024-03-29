import React, { useContext ,useState} from "react";
import noteContext from "../contexts/notes/noteContext";
export const AddNote = () => {
  const context = useContext(noteContext);
  const { addNote } = context;


  const [note, setNote] = useState({title:"",description:"",tag:""})
  const handleClick = (e) => {
      e.preventDefault();
    addNote(note.title,note.description,note.tag);
    setNote({title:"",description:"",tag:""})
  };
  const onChange=(e)=>{
    setNote({...note,[e.target.name]:e.target.value})
  }

  return (
    <div>
      <div className="container my-3">
        <h1>Add a note</h1>
        <form>
          <div className="mb-3">
            <label htmlFor="title" className="form-label">
              title
            </label>
            <input
              type="text"
              name="title"
              className="form-control"
              id="title"
              aria-describedby="emailHelp"
              onChange={onChange}
              minLength={5} required
              value={note.title}
            />
            <div id="emailHelp" className="form-text"></div>
          </div>
          <div className="mb-3">
            <label htmlFor="description" className="form-label">
              description
            </label>
            <input
              type="text"
              className="form-control"
              id="description"
              name="description"
              onChange={onChange}
              minLength={5} required
              value={note.description}
            />
          </div>
          
          <div className="mb-3">
            <label htmlFor="tag" className="form-label">
              tag
            </label>
            <input
              type="text"
              className="form-control"
              id="tag"
              name="tag"
              onChange={onChange}
              value={note.tag}
            />
          </div>
         
          <button
          disabled={note.title.length<5 || note.description.length<5} 
            type="submit"
            className="btn btn-primary"
            onClick={handleClick}
          >
            Add Note
          </button>
        </form>
      </div>
    </div>
  );
};
