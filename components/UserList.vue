<template>
  <div class="user-list">
    <ul>
      <li v-for="user in users">
        <User :user="user"/>
      </li>
    </ul>
  </div>
</template>

<script>
  import {mapState} from 'vuex'
  import User from '@/components/User.vue'

  export default {
    name: 'UserList',
    components: {
      User
    },
    computed: {
      ...mapState('user', ['users'])
    }
  }

</script>

<style scoped>

</style>
