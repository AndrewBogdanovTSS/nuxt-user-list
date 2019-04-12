<template>
  <div class="user">
    <span class="user-name">{{user.name.first}}</span>
  </div>
</template>

<script>
  export default {
    name: 'User',
    props: {
      user: {
        type: Object,
        required: true
      }
    }
  }
</script>

<style lang="scss" scoped>
  .user {
    &-name {
      color: red;
    }
  }
</style>
