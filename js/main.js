//ESERCIZIO JS
 
/*Chiedere all'utente il cognome, inserirlo in un array con altri cognomi: 'Bianchi', 'Rossi', 'Duzioni', 'Balsano', 'Giorgini'
stampa la lista ordinata alfabeticamente
scrivi anche la posizione "umana" della lista in cui il nuovo utente si trova
Alcuni metodi dovrete cercarli online, è assolutamente consapevole la scelta: consultiamo la documentazione W3Schools o MDN per trovare i metodi JavaScript che possono esserci utili. Questo ci permetterà di allenarci a cercare e ad adattarci ai nuovi problemi.*/

/* CHIEDO ALL'UTENTE IL COGNOME */

var userSurname = prompt('Inserisci il tuo cognome');

/*DEVO INSERIRLO IN UN ARRAY CON ALTRI COGNOMI: 'Bianchi', 'Rossi', 'Duzioni', 'Balsano', 'Giorgini'*/

var surnameList = ['Bianchi', 'Rossi', 'Duzioni', 'Balsano' , 'Giorgini'];
console.log('Elenco cognomi : ' + surnameList);

surnameList.push(userSurname);
console.log ('Elenco cognomi: ' + surnameList);

/*SCRIVERE LA POSIZIONE UMANA DELLA LISTA IN CUI IL NUOVO UTENTE SI TROVA*/

//Devo cercare il cognome sino a che non viene trovato e uso un index.

var index = 0;


if (surnameList[index] != userSurname) {
 
  while (surnameList[index] != userSurname) {
    index++;
  }
}

//In questo caso, il valore dell'indice corrisponde alla posizione del cognome

var userSurnamePosizioneinArray = index;

//Posizione Umana

var posizioneUmana = userSurnamePosizioneinArray + 1;

console.log('Sei il  nr. ' + posizioneUmana);