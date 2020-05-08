<template>
  <el-drawer
    title="Active Users"
    :visible.sync="users"
    :direction="direction">
    <ul>
      <li>Ahmet</li>
      <li>İsmail</li>
      <li>Kenan</li>
      <li>Handan</li>
      <li>Tekin</li>
      <li>İlknur</li>
    </ul>
  </el-drawer>
</template>

<script>
export default {
  name: 'Users',
  props: {
    // msg: String
  },
  data () {
    return {
      users: true,
      direction: 'ltr'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
