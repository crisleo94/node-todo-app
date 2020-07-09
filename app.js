const color = require('colors')
const { argv } = require('./config/yargs')
const todo = require('./todo/todo')

let command = argv._[0]

switch (command) {
    case 'create':
        let task = todo.create(argv.description)
        console.log(task)
        break;
    case 'list':
        let tasks = todo.listData()

        for (let task of tasks){
            console.log('============TO DO============'.green)
            console.log(task.description)
            console.log('Estado: ', task.completed)
            console.log('============================='.green)
        }
        break
    case 'update':
        let updated = todo.updateTask(argv.description, argv.completed)
        console.log(updated)
        break
    case 'delete':
        let deleted = todo.deleteTask(argv.description)
        console.log(deleted)
        break
    default:
        console.log('Unknown command.')
        break;
}