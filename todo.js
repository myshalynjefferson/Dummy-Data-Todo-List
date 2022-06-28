let arrayOfTodos = [
    {
      userId: 14,
      id: 1,
      title: "delectus aut autem",
      completed: false,
    },
    {
      userId: 20,
      id: 2,
      title: "delectus aut autem",
      completed: false,
    },
  ];
  
  const fetchTodos = () => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((response) => response.json())
      .then((json) => (arrayOfTodos = json));
  };
  
  const logTodos = () => {
    console.log(arrayOfTodos);
  };
  
  const populateTodos = () => {
    //start for loop here
    for (let i = 0; i < arrayOfTodos.length; i++) {
      let toDos = document.getElementById("todo-list"); //capturing element in a variable
  
      let toDoList = document.createElement("LI"); //declaring new variable-creating list
  
      let toDoTextNode = document.createTextNode(arrayOfTodos[i].title); //first title
  
      toDoList.appendChild(toDoTextNode); //<li>first title</li>
  
      toDos.appendChild(toDoList);
    } //end loop here
  }; //end fxn
  
  function clearTodos() {
    const todos = document.getElementsByTagName("OL");
  
    //loops over the html collection of IDs and clear out the Xs and Os
    for (i = 0; i < todos.length; i++) {
      //will log out the id of each square as it loops over them.
      console.log(todos[i].id);
  
      //sets the innerHTML to null to replace the "X" or "O"
      todos[i].innerHTML = null;
    }
  }
  
  //NEW function to filter by userId and completed
  
  //filter the array where the userId = input num and completed = true
  //let filteredArray = arrayOfTodos.filter(array => array.userId --num && array.completed -- true)
  
  const filterById = () => {
    //capture the ol item into a variable (getElementById)
    let toDos = document.getElementById("todo-list");
  
    //get the input number from the user
    let num = document.getElementById("number_input").value;
  
    //filter the array
    let filteredArray = arrayOfTodos.filter((array) => array.userId == num);
  
    for (i = 0; i < filteredArray.length; i++) {
      //start loop
  
      //createElement to make a new LI
      let toDoList = document.createElement("LI");
  
      //createTextNode inside the li using the title property
      let toDoTextNode = document.createTextNode(filteredArray[i].title);
  
      //now append the text to the new element
      toDoList.appendChild(toDoTextNode);
  
      // toDoList.innerHTML =
      //   "<b>User:</b>" +
      //   filteredArray[i].userId +
      //   ", <b>Title:</b>" +
      //   filteredArray[i].title +
      //   ", <b>Completed:</b>" +
      //   filteredArray[i].completed;
  
      toDoList.innerHTML = `<b>User:</b> ${filteredArray[i].userId}, <b>Title:</b> ${filteredArray[i].title}, <b>Completed:</b> ${filteredArray[i].completed}`;
  
      toDos.appendChild(toDoList);
    }
  };
  
  function filterByCompleted() {
    const num = document.getElementById("number_input").value;
  
    const filteredArray = arrayOfTodos.filter(
      (array) => array.userId == num && array.completed == true
    );
  
    for (let i = 0; i < filteredArray.length; i++) {
      let toDos = document.getElementById("todo-list");
  
      let toDoList = document.createElement("li");
  
      let toDoTextNode = document.createTextNode(filteredArray[i].title);
  
      toDoList.appendChild(toDoTextNode);
  
      toDos.appendChild(toDoList);
    }
  }
  
  ////  create a branch called: " Todo-Filtering ".
  //// Fetch the same data.
  //// Store the data in a variable.
  //// Add an input for the userID. This input should only take in a number from 1 - 10.
  // Add a button that when clicked will:
  // clear the previous todos from the view
  // and populate it with only todos with the userID that matches the number inputted.
  // then stores the currently filtered todos in a variable so that ...
  // You can create two more buttons that when clicked:
  // removes those todos from the view
  // and shows only todos that are either:
  // completed/not completed