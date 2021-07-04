import { useState, useEffect } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./components/Header";
import Todolist from "./components/Todolist";
import Navbar from "./components/Navbar";
import About from "./components/About";

function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const getTodos = async () => {
      const getServerData = await getTodosFromServer()
      setTodos(getServerData)
    }
    getTodos()
  }, []);
  
  const getTodosFromServer = async () => {
    const response = await fetch('http://localhost:3001/todos');
    return await response.json();
  }
  

  const handleAddClick = (params) => {
    setTodos([...todos, params]);
  };

  const onCheckChange = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, checked: !todo.checked } : todo
      )
    );
  };

  const onRemove = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <Router>
      <div className="page-content page-container" id="page-content">
        <div className="padding">
          <Navbar />
          <div className="row container d-flex justify-content-center">
            <div className="col-md-12">
              <div className="card px-3">
                <div className="card-body">
                  <Route
                    path="/"
                    exact
                    render={(props) => (
                      <>
                        <Header onAdd={handleAddClick} />
                        <Todolist
                          todoList={todos}
                          onCheckBoxChange={onCheckChange}
                          onDelete={onRemove}
                        />
                      </>
                    )}
                  />
                  <Route path='/about' component={About} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
