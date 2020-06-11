<template>
  <div>
    <h3 class="text-left">Lista de tareas</h3>
    <b-table
      striped
      hover
      borderless
      bordered
      :filter-function="filterTable"
      :items="tasks"
    >
     <template v-slot:cell(createdAt)="data">
        {{ data.item.createdAt | moment("D/MM/YYYY h:mm:ss a")}}
      </template>
    </b-table>
  </div>
</template>

<script>
export default {
  name: "task-list",
  computed: {
    tasks() {
      return this.$store.state.tasksModule.tasks;
    }
  },
  methods: {
    filterTable(row) {
      console.log(row)
    }
  }
};
</script>