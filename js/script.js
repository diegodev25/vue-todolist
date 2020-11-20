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
      if (this.list.includes(this.message)) {
        alert("Attenzione, l'elemento è già inserito nella lista. Riprova!");
      } else {
        this.list.push(this.message);
        this.message = '';
      }
    },
    // funzione per eliminare l'elemento dalla lista
    deleteList (i) {
      this.$delete(this.list, i);
    }
  }
})
