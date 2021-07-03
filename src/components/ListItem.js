const ListItem = ({item, onCheckBoxChange, onDelete}) => {
    const onCheckChange = (id) => {
        onCheckBoxChange(id);
    }

    const onDeleteClick = (id) => {
        onDelete(id);
    }
    
    
    return (
        <li>
          <div className="form-check">
            <label className="form-check-label">
              <input className="checkbox" type="checkbox" checked={item.checked} onChange={() => onCheckChange(item.id)} /> {item.title} <i className="input-helper"></i>
            </label>
          </div>
          <i className="remove mdi mdi-close-circle-outline" onClick={() => onDeleteClick(item.id)}></i>
        </li>
    )
}

export default ListItem
