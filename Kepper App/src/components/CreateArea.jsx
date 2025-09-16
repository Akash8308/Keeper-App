import React from "react";

function CreateArea(props) {
  const [note, setNote] = React.useState({ title: "", content: "" });

  function handleTitleTextChange(event) {
    const { value, name } = event.target;
    setNote((prevValue) => {
      return {
        ...prevValue,
        [name]: value,
      };
    });
  }

  function handleContentTextChange(event) {
    const { value } = event.target;
    setNote((prevValue) => {
      return {
        title: prevValue.title,
        content: value,
      };
    });
  }

  function handleAddClick(event) {
    props.onAdd(note);
    setNote({
      title: "",
      content: "",
    });
    event.preventDefault();
  }

  return (
    <div>
      <form>
        <input
          name="title"
          placeholder="Title"
          value={note.title}
          onChange={handleTitleTextChange}
        />
        <textarea
          name="content"
          placeholder="Take a note..."
          rows="3"
          value={note.content}
          onChange={handleContentTextChange}
        />
        <button type="Submit" onClick={handleAddClick}>
          Add
        </button>
      </form>
    </div>
  );
}

export default CreateArea;
