import { useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./components/Header";
import Todolist from "./components/Todolist";
import Navbar from "./components/Navbar";
import About from "./components/About";

function App() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      title: "For what reason would it be advisable.",
      checked: true,
    },
    {
      id: 2,
      title: "For what reason would it be advisable for me to think.",
      checked: true,
    },
    {
      id: 3,
      title: "It be advisable for me to think about business content?",
      checked: true,
    },
    {
      id: 4,
      title: "Print Statements all",
      checked: false,
    },
    {
      id: 5,
      title: "Call Rampbo",
      checked: true,
    },
    {
      id: 6,
      title: "Print bills",
      checked: false,
    },
  ]);

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
