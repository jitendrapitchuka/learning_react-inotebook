import React,{useContext,useEffect} from "react";
import { AddNote } from "./AddNote";
import noteContext from "../contexts/notes/noteContext";


import { Noteitem } from "./Noteitem";
export default function Notes() {
    const context = useContext(noteContext);
  const { notes,getNotes } = context;
   useEffect(() => {
       getNotes()
       
   }, [])
    return (
        <>
        <AddNote/>
        <div className="row my-3">
                <h1>Your notes</h1>
                {notes.map((note)=>{
                    return <Noteitem key={note._id} note={note}/>
                }

                )}
                </div>
                </>
    )
}
