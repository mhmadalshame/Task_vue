<template>
  <div>
    <h1>Task Manager</h1>
    <TaskForm @create-task="createTask" @update-task="updateTask" ref="taskForm" />
    <TaskList 
      @edit="editTask" 
      @delete="deleteTask1" 
    />
  </div>
</template>

<script>
import TaskForm from '../components/TaskForm.vue';
import TaskList from '../components/TaskList.vue';
import { mapActions } from 'vuex';

export default {
  components: {
    TaskForm,
    TaskList
  },
  created() {
    this.fetchTasks(); 
  },
  methods: {
    ...mapActions(['fetchTasks', 'createTask', 'updateTask', 'deleteTask']),
    editTask(task) {
      this.$refs.taskForm.editTask(task); 
    },
    deleteTask1(taskId) {
     if (confirm("Are you sure you want to delete this task?")) {
        this.deleteTask(taskId); 
        
      }
    }
  }
}
</script>