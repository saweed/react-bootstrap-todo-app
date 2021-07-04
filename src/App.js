import { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./components/Header";
import Todolist from "./components/Todolist";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Error404 from "./components/Error404";

function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const getTodos = async () => {
      const getServerData = await getTodosFromServer();
      setTodos(getServerData);
    };
    getTodos();
  }, []);

  const getTodosFromServer = async () => {
    const response = await fetch("http://localhost:3001/todos");
    return await response.json();
  };

  // Fetch ToDo, if single todo to show on page
  const fetchTodo = async (id) => {
    const res = await fetch(`http://localhost:3001/todos/${id}`);
    const data = await res.json();

    return data;
  };

  const handleAddClick = async (todo) => {
    const response = await fetch("http://localhost:3001/todos", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(todo),
    });

    const data = await response.json();
    setTodos([...todos, data]);
  };
  const onCheckChange = async (id) => {
    const todo = await fetchTodo(id);
    const updatedTodo = { ...todo, checked: !todo.checked };
    const response = await fetch(`http://localhost:3001/todos/${id}`, {
      method: "PUT",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(updatedTodo),
    });
    const data = await response.json();
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, checked: data.checked } : todo
      )
    );
  };

  const onRemove = async (id) => {
    const response = await fetch(`http://localhost:3001/todos/${id}`, {
      method: "DELETE",
    });
    response.status === 200
      ? setTodos(todos.filter((todo) => todo.id !== id))
      : alert("Try again, HTTP error");
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
                  <Switch>
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
                    <Route path="/about" exact component={About} />
                    <Route path="/*" component={Error404} />
                  </Switch>
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
