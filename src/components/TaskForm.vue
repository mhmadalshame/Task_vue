<template>
  <form @submit.prevent="handleSubmit" class="task-form">
    <h2>{{ editMode ? 'Edit Task' : 'Add New Task' }}</h2>
    
    <div class="form-group">
      <label for="taskTitle">Task Title:</label>
      <input id="taskTitle" v-model="task.title" placeholder="Enter task title" required />
    </div>
    
    <div class="form-group">
      <label for="taskDescription">Description:</label>
      <textarea id="taskDescription" v-model="task.description" placeholder="Enter task description"></textarea>
    </div>

    <div class="form-group">
      <label for="taskStatus">Status:</label>
      <select id="taskStatus" v-model="task.status" required>
        <option value="" disabled>Select status</option>
        <option value="pending">pending</option>
        <option value="in progress">in progress</option>
        <option value="completed">completed</option>
      </select>
    </div>

    <button type="submit" class="submit-button">{{ editMode ? 'Update' : 'Add' }} Task</button>
  </form>
</template>

<script>
export default {
  data() {
    return {
      task: {
        title: '',
        description: '',
        status: '',
        created_date: Date.now()
      },
      editMode: false
    };
  },
  methods: {
    handleSubmit() {
      if (this.editMode) {
        this.$emit('update-task', { ...this.task }); 
      } else {
        this.$emit('create-task', { ...this.task });  
      }
      this.resetForm();
    },
    resetForm() {
      this.task.title = '';
      this.task.description = '';
      this.task.status = '';
      this.editMode = false;
    },
    editTask(task) {
      this.task = { ...task }; 
      this.editMode = true;
    }
  }
}
</script>

<style scoped>
.task-form {
  max-width: 400px;
  margin: 20px auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 8px;
  background-color: #f9f9f9;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
}

h2 {
  text-align: center;
  margin-bottom: 20px;
}

.form-group {
  margin-bottom: 15px;
}

label {
  display: block;
  margin-bottom: 5px;
  font-weight: bold;
}

input, textarea, select {
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
}

textarea {
  resize: vertical;
}

.submit-button {
  width: 100%;
  padding: 10px;
  background-color: #28a745;
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.submit-button:hover {
  background-color: #218838;
}


@media (max-width: 500px) {
  .task-form {
    padding: 15px;
  }

  h2 {
    font-size: 1.5rem;
  }

  input, textarea, select {
    font-size: 14px;
  }

  .submit-button {
    font-size: 14px;
  }
}
</style>