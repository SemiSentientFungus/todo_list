export default function project(name) {
    this.name = name;
    this.status = false;
    this.todo = [];

    this.add = function(task) {
        this.todo.push(task);
    };
}