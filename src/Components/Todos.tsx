import axios, { AxiosResponse } from "axios";
import React, { useEffect, useState } from "react";
import Header from "./Header";
import TodosInput from "./TodosInput";
import TodosItem from "./TodosItem";

export interface TodoItems {
  id: number;
  title: string;
  status: boolean;
}

const Todos = () => {
  //const [todos, setTodos] = useState([]); // -> yaha mainey yeh to bataya hi nhi ki array ke andar kya store karunga -> thats why on hover it will give <never[]> -> isilye str and num main to koi problem nahi ati but for array we need to define the an interface banao jisme mainey yeh bata diya ki is array ke andar objects store hongey kiski keys id,title,status hoga

  //   const [todos, setTodos] = useState<string[]>([]); // to create an array of strings
  const [todos, setTodos] = useState<TodoItems[]>([]);
  const addTodoHandler = (title: string) => {
    if (title) {
      const payload = {
        // id: todos.length + 1,
        title,
        status: false,
      };
      // setTodos([...todos, payload])
      axios.post("http://localhost:8080/todos", payload).then(getTodos);
    }
  };

  //   ===================IMP======================
  // getTodos -> is a function
  // getTodos() -> is invoking a function
  // .then operator only accepts a callback function
  //   there are 2 ways of passing a callback function
  // 1. then(getTodos)
  // 2. then(()=>getTodos()) -> this is generally used to pass arguments inside a callback function
  //  thats why in .then we never invoke a function

  //   because if i write .then(getTodos()) -> then it will execute right away but i want to invoke it only after the promise is successfull

  const getTodos = () => {
    axios
      .get("http://localhost:8080/todos")
      // .then(({data}: {data: TodoItems[]}) => { // method 1
      //     setTodos(data)
      // })
      // method 2
      .then((response: AxiosResponse<TodoItems[]>) => {
        setTodos(response.data);
      });
    //   yeha apan sirf yeh check kar rahe hai ki response correct format main hai ya nhi -> it should match TodoItems[] keys and their datatypes
  };

  useEffect(() => {
    getTodos();
  }, []);
  return (
    <div>
      <Header label="Todos" />
      <TodosInput addTodoHandler={addTodoHandler} />
      {todos.length > 0 &&
        todos.map((item) => {
          return <TodosItem key={item.id} {...item} />;
        })}
    </div>
  );
};

export default Todos;
