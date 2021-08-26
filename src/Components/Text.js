import React, { useState } from "react";

function Text(props) {
  // convert to uppercase
  const upcase = () => {
    let newtext = text.toUpperCase();
    setText(newtext);
    props.showAlert("converted to upper case", "sucess");
  };
  // copy the text
  const copytext = () => {
    let copytext = document.getElementById("exampleFormControlTextarea1");
    copytext.select();
    document.execCommand("copy");
    props.showAlert("The Text is converted", "sucess");
  };
  // clear the text
  const cleartext = () => {
    let cleartext = "";
    setText(cleartext);
    props.showAlert("The Text all  clear ", "sucess");
  };
  // convert to lowercase
  const lwcase = () => {
    let ntext = text.toLowerCase();
    setText(ntext);
    props.showAlert("converted to Lower case", "sucess");
  };
  const ochange = (event) => {
    console.log("change");
    setText(event.target.value);
  };
  // remove extra space
  const cutextraspcae = () => {
    let newtext = text.split(/[ ]+/);
    setText(newtext.join(" "));
    props.showAlert("your space is now perfecl fine", "sucess");
  };

  const [text, setText] = useState("entre text here");

  return (
    <>
      <div
        className="container"
        style={{
          color: props.mode === "dark" ? "white" : "#042743",
        }}
      >
        <div className="mb-3"></div>
        <h2 className="mb-2">
          {" "}
          Try TextUtils- word counter, Character counter, Remove extra space
        </h2>
        <div className="mb-3">
          <textarea
            style={{
              backgroundColor: props.mode === "dark" ? "#13466e" : "white",
              color: props.mode === "dark" ? "white" : "#042743",
            }}
            className="form-control"
            id="exampleFormControlTextarea1"
            rows="8"
            value={text}
            onChange={ochange}
          ></textarea>
        </div>
        <button
          disabled={text.length === 0}
          className="btn btn-primary mx-2  my-2"
          onClick={upcase}
        >
          {" "}
          uppercase the text
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-primary mx-2 my-2"
          onClick={lwcase}
        >
          {" "}
          Lowercase the text
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-primary mx-2 my-2"
          onClick={cutextraspcae}
        >
          cut extra space
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-primary mx-2 my-2"
          onClick={copytext}
        >
          Copy text
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-primary mx-2 my-2"
          onClick={cleartext}
        >
          Clear text
        </button>
      </div>
      <div
        className="container my-3"
        style={{
          color: props.mode === "dark" ? "white" : "#042743",
        }}
      >
        <h3> your text summary</h3>
        <p>
          {
            text.split(/\s+/).filter((element) => {
              return element.length !== 0;
            }).length
          }{" "}
          words and {text.length} char
        </p>
        <p>
          {" "}
          {0.008 *
            text.split(" ").filter((element) => {
              return element.length !== 0;
            }).length}
          min to read
        </p>
      </div>
    </>
  );
}

export default Text;
