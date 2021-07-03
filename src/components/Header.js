import { useState } from "react";

const Header = ({ title, onAdd }) => {

  const [todoTitle, setTodoTitle] = useState('');
  
  const saveItem = (e) => {
    if (!todoTitle) {
        alert('Please add a title')
        return
    }
    const id = Math.floor(Math.random() * 10000) + 1;
    var checked = Math.random() < 0.5;
    onAdd({id: id, title: todoTitle, checked: checked});
    setTodoTitle('');
  }
  
  return (
    <>
      <h4 className="card-title">{title}</h4>
      <div className="add-items d-flex">
        <input
          type="text"
          value={todoTitle}
          className="form-control todo-list-input"
          placeholder="What do you need to do today?"
          onChange={(e) => setTodoTitle(e.target.value)}
        />
        <button className="add btn btn-primary font-weight-bold todo-list-add-btn" onClick={(e) => saveItem(e)} >
          Add
        </button>
      </div>
    </>
  );
};

Header.defaultProps = {
  title: "Bootstrap 4 Awesome todo list",
};

export default Header;
