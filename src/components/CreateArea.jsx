import React from "react";

function CreateArea(props) {
  return (
    <div>
      <form onChange={props.funcChange} >
        <input name="title"  placeholder="Title" value={props.value.title}/>
        <textarea name="content" placeholder="Take a note..." rows="3" value={props.value.content}/>
        <button type= "button" onClick={props.funcAdd}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
