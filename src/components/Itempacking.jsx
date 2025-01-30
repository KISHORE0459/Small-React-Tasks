import { useState } from "react";
import PropTypes from "prop-types";
import Backtohome from "./Backtohome";
import "../styles/itempacking.css";

const Itempacking = () => {
  const [text, setText] = useState("");
  const [qtn, setQtn] = useState(1);
  const [list, setList] = useState([]);
  return (
    <div className="ctn">
      <h2>Travel Item List</h2>
      <Form
        text={text}
        setText={setText}
        qtn={qtn}
        setQtn={setQtn}
        list={list}
        setList={setList}
        className="form"
      />
      <Displaylist list={list} setList={setList} />
      <Backtohome />
    </div>
  );
};

const Displaylist = ({ list, setList }) => {
  function handleCheck(e, l) {
    e.preventDefault();
    setList(
      list.map((item) =>
        item.id === l.id ? { ...item, packed: !item.packed } : item
      )
    );
  }

  function handleDelete(e, l) {
    e.preventDefault();
    setList(list.filter((li) => li.id != l.id));
  }
  return (
    <div id="task-ctn">
      {list.map((l) => {
        return (
          <div key={l.id} className="task">
            <button
              onClick={(e) => {
                handleCheck(e, l);
              }}
            >
              {l.packed ? "undone" : "done"}
            </button>
            <div style={{ textDecoration: l.packed ? "line-through" : "none" }}>
              <h3>{l.qtn}</h3>
              <h4>{l.text}</h4>
            </div>
            <h4>{l.packed ? "👍" : "❌"}</h4>
            <button
              onClick={(e) => {
                handleDelete(e, l);
              }}
            >
              delete
            </button>
          </div>
        );
      })}
    </div>
  );
};

Displaylist.propTypes = {
  list: PropTypes.array,
  setList: PropTypes.func,
};

const Form = ({ text, setText, qtn, setQtn, list, setList }) => {
  function handleSubmit(e) {
    e.prve;
    if (text != "") {
      setList([
        ...list,
        { id: list.length, qtn: qtn, text: text, packed: false },
      ]);
    }
    setQtn(1);
    setText("");
  }
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        handleSubmit(e);
      }}
      className="form-ctn"
    >
      <select
        name=""
        id=""
        value={qtn}
        onChange={(e) => {
          setQtn(Number(e.target.value));
        }}
      >
        {Array(10)
          .fill()
          .map((_, i) => {
            return (
              <option value={i} key={i}>
                {i}
              </option>
            );
          })}
      </select>
      <input
        type="text"
        value={text}
        onChange={(e) => {
          setText(e.target.value);
        }}
      />
      <button
        type="submit"
        // onSubmit={(e) => {
        //   handleSubmit(e);
        // }}
      >
        Add Text
      </button>
    </form>
  );
};

Form.propTypes = {
  text: PropTypes.string,
  setText: PropTypes.func,
  qtn: PropTypes.number,
  setQtn: PropTypes.func,
  list: PropTypes.array,
  setList: PropTypes.func,
};
export default Itempacking;
