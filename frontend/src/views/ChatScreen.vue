<template>
  <el-container>
    <Header/>
    <Users/>
  </el-container>
</template>

<script>
import Header from '@/components/Header'
import Users from '@/components/Users'

export default {
  name: 'ChatScreen',
  components: {
    Header,
    Users
  }
}
</script>
