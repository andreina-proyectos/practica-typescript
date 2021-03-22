import Direccion from "./Direccion.js";
import Mail from "./Mail.js";
import Telefono from "./Telefono.js";
import Persona from "./Persona.js";

// ---- Creacion Addresses

//Address information - Persona 1
const firstAddressPersona1 = new Direccion("Guayaquil", 3, null, null, 777, "Medellín", "Medellín");
const secondAddressPersona1 = new Direccion("La casona", 4, null, null, 776, "Medellín", "Medellín");
const addressListPerson1: Direccion[] = [firstAddressPersona1, secondAddressPersona1];

//Address information - Persona 2
const firstAddressPersona2 = new Direccion("Correcaminos", 6, 5, "Q", 17077, "Oviedo", "Asturias");
const addressListPerson2: Direccion[] = [firstAddressPersona2];

//Address information - Persona 3
const firstAddressPersona3 = new Direccion("Washington  Street", 24, 9, "C", 98795, "Washington", "Washington");
const addressListPerson3: Direccion[] = [firstAddressPersona3];


// ------ Creacion Mails
//Mail information Person 1
const firstMailPerson1: Mail = new Mail("personal", "plata-o-plomo@gmail.com");
const secondMailPerson1: Mail = new Mail("personal", "si-o-que@gmail.com");
const thirdMailPerson1: Mail = new Mail("profesional", "contabilidad-millones@gmail.com");
const mailListPerson1: Mail[] = [firstMailPerson1, secondMailPerson1, thirdMailPerson1];

//Mail information Person 2
const firstMailPerson2: Mail = new Mail("profesional", "ferrari-o-renault@gmail.com");
const secondMailPerson2: Mail = new Mail("personal", "como-un-rayo@gmail.com");
const mailListPerson2: Mail[] = [firstMailPerson2, secondMailPerson2];

//Mail information Person 3
const firstMailPerson3: Mail = new Mail("profesional", "we-need-cobol@gmail.com");
const secondMailPerson3: Mail = new Mail("personal", "amazing-grace@gmail.com");
const mailListPerson3: Mail[] = [firstMailPerson3, secondMailPerson3];


// ------- Creacion Telefonos
//Telf information Person 1
const firstTelfPerson1 = new Telefono("personal", 454545454);
const secondTelfPerson1 = new Telefono("personal", 4343434355);
const thirdTelfPerson1 = new Telefono("personal", 22222225);
const telfListPerson1: Telefono[] = [firstTelfPerson1, secondTelfPerson1, thirdTelfPerson1];

//Telf information Person 2
const firstTelfPerson2 = new Telefono("personal", 333333333);
const secondTelfPerson2 = new Telefono("personal", 11111111115);
const thirdTelfPerson2 = new Telefono("personal", 7777785465);
const telfListPerson2: Telefono[] = [firstTelfPerson2, secondTelfPerson2, thirdTelfPerson2];

//Telf information Person 3
const firstTelfPerson3 = new Telefono("personal", 3443333333);
const secondTelfPerson3 = new Telefono("personal", 1121451115);
const thirdTelfPerson3 = new Telefono("personal", 99785465);
const telfListPerson3: Telefono[] = [firstTelfPerson3, secondTelfPerson3, thirdTelfPerson3];


// ------ Creacion Notes
//Notes information
const noteListPerson1: string[] = ["Si o que", "en la guarida a las 4:00"];
const noteListPerson2: string[] = ["Un domingo a la tarde en los coches de choque"];
const noteListPerson3: string[] = ["A ship in port is safe, but that’s not what ships are built for.", "The only phrase I’ve ever disliked is, ‘Why, we’ve always done it that way"];


// ------ Creacion Personas
const persona1 = new Persona("Pablo", "Escobar", "45", "66666666T", "05/01/1974", "rojo", "hombre", addressListPerson1, mailListPerson1, telfListPerson1, noteListPerson1);

const persona2 = new Persona("Fernando", "Alonso", "38", "565656Y", "02/05/1974", "azul", "hombre", addressListPerson2, mailListPerson2, telfListPerson2, noteListPerson2);

const persona3 = new Persona("Grace Murray", "Hopper", "87", "01000010W", "02/05/1935", "purple", "mujer", addressListPerson3, mailListPerson3, telfListPerson3, noteListPerson3);

// ---- Listado de personas
const peopleList: Persona[] = [persona1, persona2, persona3];

const imprimirPersona = (persona: Persona, personNumber: number): void => {
    console.log(`=== Persona ${personNumber+1} ===`);
    console.log(`Nombre: ${persona.nombre}`);
    console.log(`Apellido: ${persona.apellidos}`);
    console.log(`DNI: ${persona.dni}`);
    console.log(`Edad: ${persona.edad}`);
    console.log(`Color favorito: ${persona.colorFavorito}`);
    console.log(`Cumpleaños: ${persona.cumpleaños}`);
    console.log(`Sexo: ${persona.sexo}`);

    persona.direcciones.forEach((dir, indexDir) => {
        console.log(`** Direccion ${indexDir} **`);
        console.log(`Calle: ${dir.calle}`);
        console.log(`Numero: ${dir.numero}`);
        console.log(`Letra: ${dir.letra}`);
        console.log(`Piso: ${dir.piso}`);
        console.log(`Codigo Postal: ${dir.codigoPostal}`);
        console.log(`Poblacion: ${dir.poblacion}`);
        console.log(`Provincia: ${dir.provincia}`);
        console.log("****************");
    })

    persona.mails.forEach((mail, indexMail) => {
        console.log(`** Email ${indexMail} **`);
        console.log(`Tipo: ${mail.tipo}`);
        console.log(`Direccion: ${mail.direccion}`);
        console.log("****************");
    });

    persona.telefonos.forEach((telf, indexTelf) => {
        console.log(`** Telefono ${indexTelf} **`);
        console.log(`Tipo: ${telf.tipo}`);
        console.log(`Direccion: ${telf.numero}`);
        console.log("****************");
    });


    console.log(`Persona ${personNumber} ===> `, persona.nombre, persona.apellidos, persona.edad, persona.dni, persona.colorFavorito, persona.sexo, persona.direcciones, persona.mails, persona.telefonos, persona.notas);
}

peopleList.forEach((person, index) => imprimirPersona(person, index));

// 2. Se busca persona por DNI y se le añade un telefono, mail y address. Aquí elegí el DNI de Pablo Escobar
 const personToModify = peopleList.find((person:Persona) => person.dni === "66666666T");

 personToModify?.addTelefono(new Telefono("profesional", 1231351));

 personToModify?.addMail(new Mail("personal", "el-chapo@hotmail.com"));

 personToModify?.addAddress(new Direccion("la moraleja", 78, null, "O",
    28563, "Madrid", "Madrid"));
     
 console.log("person to modify => ",personToModify);


// 3. Cambios realizados imprimidos 
peopleList.forEach((person, index) => imprimirPersona(person, index));

export default function toShowPeopleList () {
    return peopleList
}

