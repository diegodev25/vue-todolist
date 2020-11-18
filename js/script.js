const app = new Vue({
  el: '#root',
  data: {
    list: [],
    canc: 'fas fa-times',
    message: null
  },
  methods: {
    insertList: function () {
      this.list.push(this.message);
    },
    deleteList: function () {
      this.list.splice(this.message);
    }
  }
})
