const addButton = document.querySelector('[addButton]')
const taskInput = document.querySelector('#toDoInput')    
const taskList = document.querySelector('#taskList')
const sortButton = document.querySelector('[sortButton]')
let tasks = []

let item = {
    id: 'idNo++', 
    name: 'taskInput',
    createdDate: 'Date',
    completed: 'false'
}

tasks.push(item)


addButton.addEventListener('click', function(){
    let taskName = taskInput.value
    if (taskName.trim() !== '' && taskName.trim().length > 3 && taskName.charAt(0) === taskName.charAt(0).toUpperCase()) {
        
        let listItem = document.createElement('li')
        listItem.textContent = taskName
        taskList.appendChild(listItem)
        taskInput.value = ''

        let checkbox = document.createElement('input')
        checkbox.type = 'checkbox'
        checkbox.addEventListener('change', function(){
            listItem.classList.toggle('completed', this.checked)
        })
        listItem.prepend(checkbox)
    } else (alert("Please insert a valid task. Task needs to be longer than 3 characters and start with a capital letter"))
})
