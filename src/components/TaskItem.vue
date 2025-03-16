<template>
  <div class="task-item">
    <p><b>Title:</b> {{ task.title }}</p>
    <p><b>Description:</b> {{ task.description }}</p>
    <p><b>Status:</b> {{ task.status }}</p>
    <p><b>Created Date:</b> {{ formatDate(task.created_date) }}</p>

    <div class="button-group">
      <button class="edit-button" @click="$emit('edit', task)">Edit</button>
      <button class="delete-button" @click="$emit('delete', task.id)">Delete</button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    task: Object
  },
  methods: {
    formatDate(timestamp) {
      const date = new Date(timestamp);
      return date.toLocaleString();
    }
  }
}
</script>

<style scoped>
.task-item {
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 15px;
  margin-bottom: 15px;
  background-color: #f9f9f9;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}

p {
  margin: 5px 0;
}

.button-group {
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
}

.edit-button, .delete-button {
  padding: 10px 15px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.edit-button {
  background-color: #007bff;
  color: white;
}

.edit-button:hover {
  background-color: #0056b3;
}

.delete-button {
  background-color: #dc3545;
  color: white;
}

.delete-button:hover {
  background-color: #c82333;
}


@media (max-width: 500px) {
  .task-item {
    padding: 10px;
  }

  .edit-button, .delete-button {
    padding: 8px 12px;
  }
}
</style>