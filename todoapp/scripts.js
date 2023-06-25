const $addTodo=document.getElementById('addTodo');
const $todolist=document.getElementById('todolist');
$addTodo.addEventListener('keypress',(e)=>{
    if(e.code === "Enter" && e.target.value !== '') {
        let todo=e.target.value;
        let $todoItem=document.createElement('li');
        let todoId=new Date().getTime();
        $todoItem.innerHTML = `
        <input id="${todoId}" type="checkbox"/>
        <label for="${todoId}">${todo}</label>
    `;
        $todolist.appendChild($todoItem);
        $addTodo.value="";
    }
});
$todolist.addEventListener('click',(e)=>{
    if(e.target.checked){
    e.target.parentElement.classList.add('completed');
    }
    else{
    e.target.parentElement.classList.remove('completed');
    }
})