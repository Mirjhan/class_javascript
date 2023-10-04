const str = 'Programando con Mirjhan';

let result = str.indexOf('mirjhan');
result = str.includes('te');
result = str.slice(4, 8);
result = str.substring(5);
result = str.substr(5,4);
result = str.charAt(3);
result = str.repeat(4);
result = str.split('i');
result = str.startsWith('Pro');
result = str.endsWith('jhan');
result = str.search('irj');
result = str.toLowerCase();
result = str.toUpperCase();
result = str.replace ('Programando','Practicando');

const str2 = '  Practicando con Mirjhan ';
result = str2.trim(); //elimina espacios al inicio y final de un string
result = str2.trimStart(); //elimina el caracter en blanco al inicio
result = str2.trimEnd(); //elimina el caracter en blanco al final

console.log(str2);