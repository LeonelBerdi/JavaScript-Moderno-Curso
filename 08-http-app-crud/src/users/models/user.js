// este sera nuestro objeto que vamos a manejar en la aplicacion, puede ser una representacion de un usuario en la base de datos, son los datos que necesito para trabajar
// este objeto no hace match con el que me da el backend por el first_name y el last_name
// para esto utilizo un mapper la idea del mapper es que sea un objeto intermedio que me permita saber como viene la data de mi backend y generar una instancia basado en lo que necesito.
// si el backend de desarrollo es distinto o cambia solo se debe crear un nuevo mapper que adapta la data a como la necesito en mi aplicacion

export class User { //voy a llamar a mi clase y le voy a mandar un objeto que tiene estas propiedades y las establesco
                    //la ventaja es que si algun valor no viene le puedo poner un valor por defecto ejemplo si no viene isActive = constructor( { id, isActive = false, balance, avatar, firstName, lastName, gender } ) {
    /**
     * 
     * @param {Like<User>} userDataLike Se refiere a los datos que vamos a recibir que esten de esta forma
     */
//  constructor( userDataLike ) {   desestructuro el userDataLike y me creo las propiedades
    constructor( { id, isActive, balance, avatar, firstName, lastName, gender } ) {        //desestructuro cada una de las propiedades de un objeto que luce como un usuario
        this.id         = id;
        this.isActive   = isActive;
        this.balance    = balance;
        this.avatar     = avatar;
        this.firstName  = firstName;   //Quiero manejar en mi aplicacion camel case "firstName" no snake case "first_name" 
        this.lastName   = lastName;    //Espero recibir un firstName y un lastName
        this.gender     = gender;       

    }

}