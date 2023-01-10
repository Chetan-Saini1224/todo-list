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

    //updating item counter
    document.querySelector("#count span").innerHTML = items.length;
    
    //updating remaining item counter
    leftTasks();
 


    if(curritem.toString().length >= 30){
        alert("value cannot exced 30 Character (include space)");
        return;
    }   
    let todo = '<div class="todo_item" id='+ item.id +'  >' +
    '<div class="left-list-item"> <input type="checkbox" onclick="completed('+ item.id +')" >' +
    '<h3> '+ item.title +' </h3> </div>' +
    ' <button type="submit" class="fa-solid fa-trash" onclick = "deleteItem('+ item.id +')" >Delete</button>  ' +                               
    '</div>';

    //adding todo item in last of the list inside todo-list container
    document.getElementById("todo-list").insertAdjacentHTML('beforeEnd',todo);
}


function fillList()
{
    let todo = "";
    items.forEach((item) => {
      todo += '<div class= "'+ ((item.checked)? "todo_item checked" :"todo_item"  ) + '" id='+ item.id +'  >' +
      '<div class="left-list-item"> <input type="checkbox"   onclick="completed('+ item.id +')"  '+ ((item.checked)? 'checked':'' ) + ' >' +
      '<h3> '+ item.title +' </h3> </div>' +
      ' <button type="submit" class="fa-solid fa-trash" onclick = "deleteItem('+ item.id +')" >Delete</button> ' +                               
      '</div>';
    });
    document.getElementById("todo-list").innerHTML = todo;

    //updating total item counter
    document.querySelector("#count span").innerHTML = items.length;

    //updating remaining item counter
    leftTasks()
}


function completed(id)
{
    items.forEach((val)=>{
         if(val.id == id)
         {
            val.checked = !val.checked ;

            //toogle class for highlighting the checked item
            document.getElementById(val.id).classList.toggle("checked");
            return;
         }
    });
    leftTasks();
}

function deleteItem(id)
{
    let temItems = items.filter((val) => val.id != id);
    items = temItems;

    //refile todo  list after removing element
    fillList();    
}

function leftTasks()
{
    //updating remaining item counter
    document.querySelector("#count-left span").innerHTML = items.reduce((prev,val)=>{
        if(!val.checked) return prev + 1;
        else return prev;
    },0);
}