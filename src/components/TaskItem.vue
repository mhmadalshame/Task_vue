<template>
  <div>

    <p><b>Title:</b>{{ task.title }}</p>
    <p><b>Description:</b>{{ task.description }}</p>
    <p><b>Status:</b>{{ task.status }}</p>
    <p><b>Created Date:</b>{{ task.created_date }}</p>


    <button @click="$emit('edit', task)">Edit</button>
    <button @click="$emit('delete', task.id)">Delete</button>
  </div>
</template>

<script>
export default {
  props: {
    task: Object
  }
}
</script>