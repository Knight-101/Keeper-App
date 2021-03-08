import React,{useState} from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [note, setNote] = useState({
    title:"",
    content:""
  })
  const [noteArray, setNoteArray] = useState([])

  function changeNote(event){
    const {name,value} = event.target
    setNote(prevnote =>{
      return {
      ...prevnote,
      [name]:value}
    });
  }

  function addNote(){
    setNoteArray(prevArray => {
      return [...prevArray,note]
    })
    setNote({
      title:"",
      content:""
    })
  }

  function deleteItem(id){
    setNoteArray(prevArray=> 
      {return  prevArray.filter((item,index) => {
        return index!==id
    })
  })
  }

  return (
    <div>
      <Header />
      <CreateArea 
        value={note}
        funcAdd={addNote}
        funcChange={changeNote}
      />
      {noteArray.map((item,index) => {
        return <Note key={index} id={index} title={item.title} content={item.content} funcDel={deleteItem} />
      })} 
      <Footer />
    </div>
  );
}

export default App;
