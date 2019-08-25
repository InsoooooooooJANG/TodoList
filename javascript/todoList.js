// Add text from input('addText') to addedTodoList
function addList()
{
    var addText = document.getElementById('addText').value;

    if(addText!="")
    {
        var addedTodoList = document.getElementById('addedTodoList');
        var li = document.createElement('li');
    
        li.appendChild(document.createTextNode(addText));
        addedTodoList.appendChild(li);
    
        li.setAttribute("onClick", "goToDoneList(this)");
        document.getElementById('addText').value ="";
    }
    else
    {
        alert("Enter Todo List");
    }
}

function goToDoneList(e){
    var ul = document.getElementById("doneList");
    var li = document.createElement("li");

    li.appendChild(document.createTextNode(e.innerText));

    ul.appendChild(li);

    document.getElementById("addedTodoList").removeChild(e);
}