<template>
  <table id="table-id" class="display" cellspacing="0" width="100%"></table>
</template>

<script>
  import $ from 'jquery'

  export default {
    name: 'data-tables',
    props: ['tableData'],
    data () {
      return {
        headers: [
          { data: 'id', title: 'Id' },
          { data: 'text', title: 'Text' }
        ],
        rows: [
          {
            id: 0,
            text: 'Prueba 3'
          }
        ],
        dtHandle: null
      }
    },
    watch: {
      tableData (val, oldVal) {
        console.log('here')
        let vm = this
        // let rows = [];
        // You should _probably_ check that this is changed data... but we'll skip that for this example.
        val.forEach(function (item) {
          // Fish out the specific column data for each item in your data set and push it to the appropriate place.
          // Basically we're just building a multi-dimensional array here. If the data is _already_ in the right format you could
          // skip this loop...

          vm.rows.push(item)
        })

        // Here's the magic to keeping the DataTable in sync.
        // It must be cleared, new rows added, then redrawn!
        vm.dtHandle.clear()
        vm.dtHandle.rows.add(vm.rows)
        vm.dtHandle.draw()
      }
    },
    mounted () {
      console.log('ready')
      // Instantiate the datatable and store the reference to the instance in our dtHandle element.
      this.dtHandle = $(this.$el).DataTable({
        // Specify whatever options you want, at a minimum these:
        columns: this.headers,
        data: this.rows
      })
    }
  }
</script>