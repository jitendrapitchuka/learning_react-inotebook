import React, { useContext, useEffect, useRef, useState } from "react";
import { AddNote } from "./AddNote";
import noteContext from "../contexts/notes/noteContext";
import { useNavigate } from 'react-router-dom'

import { Noteitem } from "./Noteitem";
export default function Notes(props) {
  const context = useContext(noteContext);
  const { notes, getNotes,editNote } = context;
  const [note, setNote] = useState({id:"", etitle: "",edescription: "", etag: "" });
  let history = useNavigate();
  useEffect(() => {
      if(localStorage.getItem('token')){
        getNotes();
      }
      else{
                history("/login")
      }
   
  }, []);
  const ref = useRef(null);
  const refClose = useRef(null);


  const updateNote = (currentNote) => {
    ref.current.click();
    setNote({id:currentNote._id,etitle:currentNote.title,edescription:currentNote.description,etag:currentNote.tag});
  
  };
  const handleClick = (e) => {
      console.log("updating note")
      editNote(note.id,note.etitle,note.edescription,note.etag)
      refClose.current.click();
    };
  const onChange = (e) => {
    setNote({ ...note, [e.target.name]: e.target.value });
  };
  return (
    <>
      <AddNote    showAlert={props.showAlert}/>
      <button
        ref={ref}
        type="button"
        className="btn btn-primary d-none"
        data-toggle="modal"
        data-target="#exampleModal"
      >
        Launch demo modal
      </button>
      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                {" "}
                Edit note
              </h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <form>
                <div className="mb-3">
                  <label htmlFor="etitle" className="form-label">
                    title
                  </label>
                  <input
                    type="text"
                    name="etitle"
                    className="form-control"
                    id="etitle"
                    aria-describedby="emailHelp"
                    value={note.etitle}
                    onChange={onChange}
                    minLength={5} required
                  />
                  <div id="emailHelp" className="form-text"></div>
                </div>
                <div className="mb-3">
                  <label htmlFor="edescription" className="form-label">
                    description
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="edescription"
                    name="edescription"
                    onChange={onChange}
                    value={note.edescription}
                    minLength={5} required
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="etag" className="form-label">
                    tag
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="etag"
                    name="etag"
                    onChange={onChange}
                    value={note.etag}
                  />
                </div>
              </form>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-dismiss="modal"
                ref={refClose}
              >
                Close
              </button>
              <button disabled={note.etitle.length<5 || note.edescription.length<5} onClick={handleClick} type="button" className="btn btn-primary">
                {" "}
                Update note
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="row my-3">
        <h1>Your notes</h1>
        {notes.length===0 && "no notes to display"}
        {notes.map((note) => {
          return (
            <Noteitem key={note._id} updateNote={updateNote} note={note} />
          );
        })}
      </div>
    </>
  );
}
