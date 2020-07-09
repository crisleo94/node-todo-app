# Command application using Yargs

This is a simple TO-DO application made using yargs. Once you save a task `fs` is used to write a JSON file inside the "db" folder, this data will be persistant

## How to use

Clone de repo and install the modules with `npm install`

### Create a task
In order to create a new task you have to write `node app create -d` where the `-d` flag is to enter the description of the task. *Note: Description should be inside a double quote*.

### Update a task
Once you have a list of your tasks you can update them usint the `node app update -d -c` where the `-d` flag is to enter the description for a saved task, and the `-c` flag is to set the completed state of the task. *Note: Valid states are true or false*.

### Delete a task
If you ever want to deleted a completed task then you can run `node delete -d` where `-d` flag is for the description task you want to delete. *Note: This will affect the JSON file inside the "db" folder*

**MIT LICENSE**