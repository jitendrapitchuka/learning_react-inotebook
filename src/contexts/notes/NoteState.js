
import  { useState } from 'react';
import NoteContext from "./noteContext";

const NoteState=(props)=>{
    const notesInitial=[
        
            {
              "_id": "61cad4b7d8721b9798c1962b",
              "user": "61c9984ef72fec5a856d694c",
              "title": "my-title",
              "description": "plse wake up early",
              "tag": "personal",
              "date": "2021-12-28T09:11:19.598Z",
              "__v": 0
            }
          
        ]
const [notes, setNotes] = useState(notesInitial)
return(
    <NoteContext.Provider value={{notes,setNotes}}>
        {props.children}
    </NoteContext.Provider>
)



}
export default NoteState;