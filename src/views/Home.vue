<template>
  <div class="task-manager">
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

<style scoped>
.task-manager {
  max-width: 600px;
  margin: 20px auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 8px;
  background-color: #f9f9f9;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
}

h1 {
  text-align: center;
  margin-bottom: 20px;
  font-size: 2rem;
  color: #333;
}


@media (max-width: 500px) {
  .task-manager {
    padding: 15px;
  }

  h1 {
    font-size: 1.5rem;
  }
}
</style>