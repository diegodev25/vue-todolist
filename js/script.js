const app = new Vue({
  el: '#root',
  data: {
    list: [],
    canc: 'fas fa-times',
    message: null
  },
  methods: {
    // funzione per inserire l'elemento nella lista
    insertList: function () {
      this.list.push(this.message);
    },
    // funzione per eliminare l'elemento dalla lista
    deleteList: function () {
      this.list.splice(this.message, 1);
    }
  }
})
