
import  { useState } from 'react';
import NoteContext from "./noteContext";

const NoteState=(props)=>{
    const host="http://localhost:5000"
    const notesInitial=[]
        
const [notes, setNotes] = useState(notesInitial)



const getNotes=async()=>{

    const response = await fetch(`${host}/api/notes/fetchallnotes`, {
        method: 'GET',
        
        headers: {
          'Content-Type': 'application/json',
          'auth-token':"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjFjOTk4NGVmNzJmZWM1YTg1NmQ2OTRjIn0sImlhdCI6MTY0MDY3Nzc0OX0.A5EKNQWzkBX8PNhVf8tGAAceCNt2YSJgcgnyC32moeg"
          
        },
       
       
      });
 
    const json=await response.json();
    console.log(json)
    setNotes(json)
}

const addNote=async(title,description,tag)=>{

    const response = await fetch(`${host}/api/notes/addnote`, {
        method: 'POST',
        
        headers: {
          'Content-Type': 'application/json',
          'auth-token':"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjFjOTk4NGVmNzJmZWM1YTg1NmQ2OTRjIn0sImlhdCI6MTY0MDY3Nzc0OX0.A5EKNQWzkBX8PNhVf8tGAAceCNt2YSJgcgnyC32moeg"
          
        },
       
        body: JSON.stringify({title,description,tag}) 
      });
 
    console.log("added")
  const  note= {
        "_id": "61cad4b7d87442144b9798c1962b",
        "user": "61c9984ef72fec5a856d694c",
        "title": title,
        "description": description,
        "tag": tag,
        "date": "2021-12-28T09:11:19.598Z",
        "__v": 0
      };
    setNotes(notes.concat(note))
}

const deleteNote=(id)=>{
    console.log("delete"+id)
    const newNotes=notes.filter((note)=>{return note._id!==id})
    setNotes(newNotes)
}
const editNote=async (id,title,description,tag)=>{

    const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
        method: 'POST',
        
        headers: {
          'Content-Type': 'application/json',
          'auth-token':"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjFjOTk4NGVmNzJmZWM1YTg1NmQ2OTRjIn0sImlhdCI6MTY0MDY3Nzc0OX0.A5EKNQWzkBX8PNhVf8tGAAceCNt2YSJgcgnyC32moeg"
          
        },
       
        body: JSON.stringify({title,description,tag}) 
      });
     const json= response.json(); 
    
    for (let index = 0; index < notes.length; index++) {
        const element = notes[index];
        if(element._id===id){
            element.title=title;
            element.description=description;
            element.tag=tag
        }
        
    }
}
return(
    <NoteContext.Provider value={{notes,setNotes,deleteNote,addNote,editNote,getNotes}}>
        {props.children}
    </NoteContext.Provider>
)



}
export default NoteState;