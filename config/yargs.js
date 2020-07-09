const description = {
    demand: true,
    alias: 'd',
    desc: 'TODO description.'
}

const completed = {
    default: true,
    alias: 'c',
    desc: 'Mark a TODO as completed.'
}

const argv = require('yargs')
    .command('create', 'Create a todo element.', {
        description
    })
    .command('update', 'Update the done state for on TODO.', {
        description,
        completed
    })
    .command('delete', 'Delete a selected task.',  {
        description
    })
    .help()
    .argv

module.exports = {
    argv
}