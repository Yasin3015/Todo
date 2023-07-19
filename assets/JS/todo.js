// Delete to do 
function deleteToDo(){
    let deleters = document.querySelectorAll(".delete__todo");
    for(let i = 0; i<deleters.length;i++){
        deleters[i].onclick=function(){
            this.parentElement.style.display="none";
        }
    }
}
deleteToDo();


// Complete to do 

function Completed(){
    let todos = document.getElementsByClassName("todo");
    for(let i = 0; i<todos.length;i++){
        todos[i].onclick=function(){
            this.classList.toggle("completed")
        }
    }
}
Completed();
//Create new todo
let value;
document.getElementById("addButton").onclick = function(){
    value = document.getElementById("title").value;
    if(value.trim()===""){
        document.getElementById("theModel").style.display="block";
    }else{
        let myTodo = document.createElement("div");
        myTodo.classList.add("todo");
        myTodo.innerHTML = `
                        <h1 class="theTitle">${value.trim()}</h1>
                        <span class="delete__todo">Delete</span>
                        <span>Completed</span>
        
        `
        document.getElementById("lists").appendChild(myTodo)
        deleteToDo();
        Completed();
    }
    document.getElementById("title").value =""
    
}
// Delete modal
document.getElementById("deletModel").onclick = function() {
    document.getElementById("theModel").style.display="none";   
}