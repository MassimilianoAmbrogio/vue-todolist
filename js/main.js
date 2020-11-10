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
            logo: './img/logo.png',

           // Sorgente dati
           todoLists: [
                'Fare i compiti',
                'Fare la spesa',
                'Fare il bucato'
            ]
       }
});

 
