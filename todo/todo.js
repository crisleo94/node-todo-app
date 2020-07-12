const fs = require('fs')

let todoList = []

const saveData = () =>{
    let data = JSON.stringify(todoList)
    fs.writeFile('db/data.json', data, (err) => {
        if (err) throw err
        console.log('The file was correctly saved/updated.')
    })
}

const loadData = () => {
    try {       
        todoList = require('../db/data.json')
    } catch (error) {
        todoList = []
    }
}

const listData = () => {
    loadData()
    return todoList
}

const listCompleted = (completed) => {
    loadData()
    let dataCompleted = todoList.filter(task => task.completed === completed)
    return dataCompleted
}

const updateTask = (description, completed) => {
    loadData()

    let index = todoList.findIndex(task => task.description === description)

    if(index >= 0) {
        todoList[index].completed = completed
        saveData()
        return true
    }
    return false
}

const deleteTask = (description) => {
    loadData()

    let index = todoList.findIndex(task => task.description === description)
    
    if(index >= 0) {
        todoList.splice(index, 1)
        saveData()
        return true
    }
    return false
}

const create = (desc) => {
    loadData()

    let todo = {
        description: desc,
        completed: false
    }

    todoList.push(todo)
    saveData()

    return todo
}

module.exports = {
    create,
    listData,
    updateTask,
    deleteTask,
    listCompleted
}