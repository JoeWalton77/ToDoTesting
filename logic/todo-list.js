// Represents an individual task
export class Task {
  constructor(name, isComplete=false) {
    this.name = name
    this.isComplete = isComplete
  }

  toggleCompletion() {
    this.isComplete = !this.isComplete
  }
}

// Represents a list of tasks
export class TodoList {
  constructor() {
    this.tasks = []
  }

  addTask(taskToAdd) {
    if (taskToAdd.name) {
      this.tasks.push(taskToAdd)
    }
  }

  deleteTask(taskToRemove) {
    const indexToRemove = this.tasks.indexOf(taskToRemove);
    if (indexToRemove !== -1) {
      this.tasks.splice(indexToRemove, 1);
    }
  }
  
  countTotalTasks() {
    return this.tasks.length
  }

  countIncompleteTasks() {
    /* let incompleteTasksNum
    if (!this.tasks.isComplete) {
      incompleteTasksNum++
    }

    return incompleteTasksNum */
    return this.tasks
      .filter((task) => !task.isComplete)
      .length
  }

  countCompleteTasks() {
    return this.tasks
      .filter((task) => task.isComplete)
      .length
  }

  checkIsEntireListComplete() {
    if (this.tasks.every((task) => task.isComplete)) {
      return true
    }
    else {
      return false
    }
    
  }
}