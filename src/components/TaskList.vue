<template>
  <div>
    <h2>Task List</h2>
    <TaskItem 
      v-for="task in tasks" 
      :key="task.id" 
      :task="task" 
      @edit="editTask" 
      @delete="deleteTask" 
    />
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import TaskItem from './TaskItem.vue';

export default {
  components: {
    TaskItem
  },
  computed: {
    ...mapGetters(['allTasks']),
    tasks() {
      return this.allTasks;
    }
  },
  methods: {
    editTask(task) {
      this.$emit('edit', task);
    },
    deleteTask(taskId) {
      this.$emit('delete', taskId); 
    }
  }
}
</script>