<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    {{ count }}<br />
    {{ status }}<br />
    <!-- <data-tables :tableData="data"></data-tables> -->
    <button @click="changeData()">Increment</button>
    <button @click="goBack()">Go Back</button>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import DataTables from '@/components/DataTables'
import Loader from '@/components/Loader'

export default {
  name: 'HelloWorld2',
  components: {
    DataTables,
    Loader
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App 3',
      data: []
    }
  },
  computed: mapState({
    count: state => state.count,
    status: state => state.status
  }),
  methods: {
    changeData () {
      this.$store.commit('increment')
      this.getyesno()
      /* this.data = [
        {
          id: 1,
          text: 'Prueba'
        },
        {
          id: 2,
          text: 'Prueba2'
        }
      ] */
    },
    goBack () {
      window.history.length > 1
        ? this.$router.go(-1)
        : this.$router.push('/')
    },
    ...mapActions([
      'getyesno'
    ])
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
