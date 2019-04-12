<template>
  <section class="container">
    <div>
      <h1>Hello</h1>
      <UserList/>
    </div>
  </section>
</template>

<script>
import UserList from '@/components/UserList.vue'

export default {
  async fetch({store}) {
    await store.dispatch('user/get')
  },
  components: {
    UserList
  }
}
</script>

<style lang="scss" scoped>

</style>
