<template>
  <div>
    <small class="text-danger">{{ message }}</small>
  </div>
</template>

<script>
export default {
  name: "form-user",
  props: {
    message: String
  }
};
</script>