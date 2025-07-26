function saludar() {            //Defino la funcion "saludar" con la palabra reservada "function" y los argumentos que recibira entre parentesis
    console.log('Hola Mundo');  //Cuerpo de la funcion lo que se ejecutara cada vez que llame la funcion.
};

//BLOQUEO DEL NOMBRE DE LA FUNCION PARA QUE NO SEA REUTILIZABLE
const saludar2 = function() {   //Defino la funcion pero no tiene nombre de aquie que se le llame anonima y la asigno a una contante saludar2.
    console.log('Hola Mundo');  //Cuerpo de la funcion lo que se ejecutara cada vez que llame la funcion.
};

//ENVIAR ARGUMENTOS A LA FUNCION
function saludar3( nombre ) {       //Defino la funcion "saludar" y su o sus argumentos
    console.log('Hola '+ nombre );  //uso el operador "+" y concateno ambos string
};

//BLOQUEO DEL NOMBRE DE LA FUNCION PARA QUE NO SEA REUTILIZABLE y DEFINO ARGUMENTOS
const saludar4 = function( nombre2 ) {   //Defino la funcion pero no tiene nombre de aquie que se le llame anonima y la asigno a una contante saludar2.
    console.log('Hola '+ nombre2);  //Cuerpo de la funcion lo que se ejecutara cada vez que llame la funcion.
};

// OBJETO "Arguments"
const saludar5 = function( nombre3 ) {   //Defino la funcion pero no tiene nombre de aquie que se le llame anonima y la asigno a una contante saludar2.
    console.log( arguments );            // Arguments no se ha definido en la funcion pero es un objeto de todas las funciones tradicionales y almacena todos los parametros que se envian a la funcion aunque no sean utilizados
    console.log('Hola '+ nombre3);  
};

// FUNCIONES DE FLECHA O LAMBDA FUNCTIONS
const saludarFlecha = () => {   // al poner "() =>" es lo mismo que "function()"
    console.log('Hola Flecha');
};

// FUNCIONES DE FLECHA O LAMBDA FUNCTIONS CON ARGUMENTOS
const saludarFlecha2 = ( nombre4 ) => {   // al poner "() =>" es lo mismo que "function()"
    console.log('Hola '+ nombre4 + ' usando flecha');
};

// FUNCIONES DE FLECHA O LAMBDA FUNCTIONS CON ARGUMENTOS SIN APRENTESIS
const saludarFlecha3 = nombre5 => {   // al utilizar lambda functions los parentesis para definir los argumentos son opcionales esto implica que "( nombre4 ) =>" esto es lo mismo que "nombre4 =>"
    console.log('Hola '+ nombre5 + ' usando flecha sin ()');
};




saludar(); // ejecuto la funcion
saludar();
saludar();

saludar2(); // ejecuto la funcion ANONIMA
saludar2();
saludar2();

saludar3( 'leonel' ); // ejecuto la funcion con argumento
saludar3( 'leonel' );
saludar3( 'leonel' );

saludar4( 'leonel 2' ); // ejecuto la funcion con argumento
saludar4( 'leonel 2' );
saludar4( 'leonel 2' );

saludar5( 'leonel', 40, true, 'Costa Rica' ); // ejecuto la funcion con mas parametros
saludar5( 'leonel', 40, true, 'Costa Rica' );
saludar5( 'leonel', 40, true, 'Costa Rica' );

saludarFlecha(); // ejecuta la lambda o funcion de flecha
saludarFlecha();
saludarFlecha();

saludarFlecha2( 'Leonel'); // ejecuta la  lambda o funcion de flecha con argumento
saludarFlecha2( 'Leonel');
saludarFlecha2( 'Leonel');

saludarFlecha3( 'Leonel' ); // ejecuta la  lambda o funcion de flecha con argumento sin parentesis
saludarFlecha3( 'Leonel' );
saludarFlecha3( 'Leonel' );
