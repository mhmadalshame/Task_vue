import { createStore } from 'vuex';
let id=1
export default createStore({
  state: {
    tasks: [
      { id: id++, title: 'Task 1', description: 'Description 1',status:'High',created_date:Date.now() },
      { id: id++, title: 'Task 2', description: 'Description 2',status:'Low',created_date:Date.now()  },
    ]
  },
  mutations: {
    SET_TASKS(state, tasks) {
      state.tasks = tasks;
    },
    ADD_TASK(state, task) {
      state.tasks.push(task);
    },
    UPDATE_TASK(state, updatedTask) {
      const index = state.tasks.findIndex(task => task.id === updatedTask.id);
      if (index !== -1) {
        state.tasks[index] = updatedTask;
      }
    },
    DELETE_TASK(state, taskId) {
      
      state.tasks = state.tasks.filter(task => task.id !== taskId);
    }
  },
  actions: {
    fetchTasks({ commit }) {
   
      commit('SET_TASKS', this.state.tasks);
    },
    createTask({ commit }, task) {
      const newTask = { ...task, id: id++ }; 
      commit('ADD_TASK', newTask);
    },
    updateTask({ commit }, task) {
      commit('UPDATE_TASK', task);
    },
    deleteTask({ commit }, taskId) {
      commit('DELETE_TASK', taskId);
    }
  },
  getters: {
    allTasks: state => state.tasks
  }
});