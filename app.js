
var list = document.getElementById("list");
function addTodo() {
    //get input value
    var todoItem = document.getElementById("todo-item");

    // create li tag with text node
    var li = document.createElement('li');
    var liText = document.createTextNode(todoItem.value);
    li.appendChild(liText);


    //create delete button
    var delBtn = document.createElement('button');
    var delText = document.createTextNode("DELETE");
    delBtn.setAttribute("class", "btn") //multiple attribute can be set at one time on one item
    delBtn.setAttribute("onclick", "deleteItem(this)") // #this-> pass complete btn in an arguement
    delBtn.appendChild(delText);



    //create edit button
    var editBtn = document.createElement('button');
    var editText = document.createTextNode("EDIT");
    editBtn.appendChild(editText);
    editBtn.setAttribute("class", "btn")
    editBtn.setAttribute("onclick", "editItem(this)")





    //append edit button in list
    li.appendChild(editBtn);
    //append del button in list
    li.appendChild(delBtn);


    // append list item in list
    list.appendChild(li);
    // to empty input field after add item
    todoItem.value = "";

    //console.log(li);

}
function deleteItem(b) {
    console.log(b.parentNode.remove());
}

function deleteAll() {
    list.innerHTML = "";
}
function editItem(e) {

    var val = e.parentNode.firstChild.nodeValue;
    var editValue = prompt("Enter Edit Value", val)
    //text in li is parentNode here
    //  console.log(e.parentNode.firstChild.nodeValue);
    e.parentNode.firstChild.nodeValue = editValue;

}
