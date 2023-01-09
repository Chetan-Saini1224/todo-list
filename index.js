let items = [];

function addItem()
{
    let curritem =  document.getElementById("todo_item").value;
    let item = {
        id : Date.now(),
        checked : false
    };

    
      
    if(curritem.toString().length == 0){
        alert("Field can not be Empty");
        return;
    } 
    item.title = curritem;
    items.push(item);
    document.querySelector("#count span").innerHTML = items.length;
    if(curritem.toString().length >= 30){
        alert("value cannot exced 30 Character (include space)");
        return;
    }   
    let todo = '<div class="todo_item" id='+ item.id +'  >' +
    '<div class="left-list-item"> <input type="checkbox" onclick="completed('+ item.id +')" >' +
    '<h3> '+ item.title +' </h3> </div>' +
    ' <button type="submit" class="fa-solid fa-trash" onclick = "deleteItem('+ item.id +')" >Delete</button>  ' +                               
    '</div>';
    document.getElementById("todo-list").insertAdjacentHTML('beforeEnd',todo);
}

function fillList(){
    let todo = "";
    debugger;
    items.forEach((item) => {
      todo += '<div class= "'+ ((item.checked)? "todo_item checked" :"todo_item"  ) + '" id='+ item.id +'  >' +
      '<div class="left-list-item"> <input type="checkbox"   onclick="completed('+ item.id +')"  '+ ((item.checked)? 'checked':'' ) + ' >' +
      '<h3> '+ item.title +' </h3> </div>' +
      ' <button type="submit" class="fa-solid fa-trash" onclick = "deleteItem('+ item.id +')" >Delete</button> ' +                               
      '</div>';
    });
    document.getElementById("todo-list").innerHTML = todo;
}

function completed(id)
{
    items.forEach((val)=>{
         if(val.id == id)
         {
            val.checked = !val.checked ;
            document.getElementById(val.id).classList.toggle("checked");
            return;
         }
    });

}


function deleteItem(id)
{
    let temItems = items.filter((val) => val.id != id);
    items = temItems;
    fillList();    
}

