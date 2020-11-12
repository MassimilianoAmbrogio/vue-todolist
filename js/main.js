/**
 * Creare una Todolist con Vue.js dove l'utente 
 * ha la possibilità di:
   Creare un nuovo todo attraverso un campo di testo
   Rimuovere uno specifico todo attraverso 
   il click su un icona per la rimozione nel todo stesso.
   Dare un feedback all'utente nell'interfaccia se 
   non ci sono elementi todo nella lista.
 */

// Parte Vue
const app = new Vue({
    el: '#app',
    data: {
        // Sorgente dati
        todos: [
            'Fare i compiti',
            'Fare la spesa',
            'Giocare ai videogiochi'
        ],
        newTodo: ''
    },
    methods: {
        /**
         * Add new todo item
         */
        addTodo() {
            if (this.newTodo.trim() !== '') {
                this.todos.push(this.newTodo);
                this.newTodo = '';
              }
        },
        /**
         * Remove todo by index from list
         */
        removeTodo(index) {
            console.log(index);

            this.todos.splice(index, 1);

            // const deleted = this.todos.splice(index, 1);
            // console.log(deleted);
        }
    }
});
