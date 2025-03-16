<template>
  <form @submit.prevent="handleSubmit">
    <input v-model="task.title" placeholder="Title" required />
    <input v-model="task.description" placeholder="Description" />
  
    <select v-model="task.status" required >
  <option value="Low">Low</option>
  <option value="Med">Med</option>
  <option value="High">High</option>

</select>

    <button type="submit">{{ editMode ? 'Update' : 'Add' }} Task</button>
  </form>
</template>

<script>
export default {
  data() {
    return {
      task: {
        title: '',
        description: '',
        status:'',
        created_date:Date.now()
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