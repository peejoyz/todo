const inputElement = document.getElementById('text')
const formElement = document.getElementById('to-do-form');
const todolistElement = document.getElementById('todo-list');



formElement.addEventListener("submit",function(e){ 
    e.preventDefault();
    // console.log(inputElement.value)

    // getting input value
    const inputValue = inputElement.value;
    
    // checking if inputValue is empty
    if(inputValue === ''){
        alert('No inputElement value')
        return
    }  

    // creating div container to hold todo data
    const divContainer = document.createElement('div')
    divContainer.className = "todoData"

    //creating p tag Element
    const todoElement = document.createElement('p')
    todoElement.textContent = inputValue
    todoElement.className = 'p_Styling'

    //creating button tag Element
    const deleteButton = document.createElement('button')
    deleteButton.textContent = 'Delete';
    deleteButton.className = 'delStyline'

    //  adding delete functionality to delete button
    deleteButton.addEventListener("click", function(){
        divContainer.remove();
    })

    // adding <p></p> tag and <button></button> tag to
    // the div container  
    divContainer.append(todoElement, deleteButton);
    
    // adding todo Element to the todoList dom
    //todolist.appendChild(newTodoElement)
    todolistElement.appendChild(divContainer);

    document.getElementById('text').value= '';

    inputElement.className = 'input_styline'

});



// const element = `<div class="todoData"><p >hello</p> <button>delete</button></div>`
// todolistElement.textContent = element
// todolistElement.innerHTML = element







// form.addEventListener("submit",function(e){ 
//     e.preventDefault();

//     // console.log(inputElement.value)

//     // getting input value
//     const inputValue = inputElement.value;
    
//     // checking if inputValue is empty
//     if(inputValue === ''){
//         alert('No inputElement value')
//         return
//     }  

//     // creating new todo Element
//     const newTodoElement =  createTodoElement(inputValue)
    
//     // adding todo Element to the todoList dom
//     todolist.appendChild(newTodoElement)

// });


// // function for create todo Element

// function createTodoElement (inputValue){
//     // creating div container to hold todo data
//     const divContainer = document.createElement('div')
//      divContainer.className = "todoData"

//     //creating p tag Element
//     const todoElement = document.createElement('p')
//     todoElement.textContent = inputValue
    
//     //creating button tag Element
//      const deleteButton = document.createElement('button')
//      deleteButton.textContent = 'Delete';

//     //  adding delete functionality to delete button
//      deleteButton.addEventListener("click", function(){
//         divContainer.remove();
//      })

//     // adding <p></p> tag and <button></button> tag to
//     // the div container  
//      divContainer.append(todoElement, deleteButton);

//     // returning todo Element we created
//     return divContainer
// }

