import ListItem from "./ListItem";

const Todolist = ({todoList, onCheckBoxChange, onDelete}) => {
  return (
    <div className="list-wrapper">
      <ul className="d-flex flex-column-reverse todo-list">
        {todoList.map((item) => ( <ListItem 
                                    key={item.id} 
                                    item={item}  
                                    onCheckBoxChange={onCheckBoxChange} 
                                    onDelete={onDelete}/> 
                                )
                    )
        }
        {/* <ListItem />
        <ListItem />
        <ListItem />
        <ListItem /> */}
        {/* <li className="completed">
          <div className="form-check">
            
            <label className="form-check-label">
              
              <input
                className="checkbox"
                type="checkbox"
                defaultChecked="true"
              />
              For what reason would it be advisable for me to think.
              <i className="input-helper"></i>
            </label>
          </div>
          <i className="remove mdi mdi-close-circle-outline"></i>
        </li>
        <li>
          <div className="form-check">
            
            <label className="form-check-label">
              
              <input className="checkbox" type="checkbox" /> it be advisable for
              me to think about business content?
              <i className="input-helper"></i>
            </label>
          </div>
          <i className="remove mdi mdi-close-circle-outline"></i>
        </li>
        <li>
          <div className="form-check">
            
            <label className="form-check-label">
              
              <input className="checkbox" type="checkbox" /> Print Statements
              all <i className="input-helper"></i>
            </label>
          </div>
          <i className="remove mdi mdi-close-circle-outline"></i>
        </li>
        <li className="completed">
          <div className="form-check">
            
            <label className="form-check-label">
              
              <input
                className="checkbox"
                type="checkbox"
                defaultChecked="true"
              />
              Call Rampbo <i className="input-helper"></i>
            </label>
          </div>
          <i className="remove mdi mdi-close-circle-outline"></i>
        </li>
        <li>
          <div className="form-check">
            
            <label className="form-check-label">
              
              <input className="checkbox" type="checkbox" /> Print bills
              <i className="input-helper"></i>
            </label>
          </div>
          <i className="remove mdi mdi-close-circle-outline"></i>
        </li> */}
      </ul>
    </div>
  );
};

export default Todolist;
