const app = new Vue({
  el: '#root',
  data: {
    list: [],
    message: null
  },
  methods: {
    insertList: function () {
      this.list.push(this.message);
    }
  }
})
