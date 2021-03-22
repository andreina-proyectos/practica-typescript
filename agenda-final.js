
import toShowPeopleList from "./build/Main.js";


window.onload = function() {
    getAgenda()
};


const getAgenda = () => {

    let agendaContainer = document.querySelector(".agenda-container");
    
    const peopleList = toShowPeopleList();

    const list = document.createElement("ul");

        agendaContainer.append(list);
        peopleList.forEach(person => {
            const listElement = document.createElement("li");
            listElement.classList.add("card");

            // Decor div
            const listElementDecor = document.createElement("div");
            listElementDecor.classList.add("banner");
            listElement.append(listElementDecor);
            
            // Datos persona como <p>

            const cardh1Title = document.createElement("h1");
            cardh1Title.innerHTML = person._nombre + " "+ person._apellidos;
            cardh1Title.classList.add("card__name");
            listElement.append(cardh1Title);

            //Wrapper

            const allElementsWrapper = document.createElement("div");
            allElementsWrapper.classList.add("all-elems-wrapper");
            listElement.append(allElementsWrapper);

            const dni = createParagraph("DNI: " + person._dni);
            allElementsWrapper.append(dni);
            
           

            // Todas las direcciones
            const direcciones = createParagraph("Direcciones");
            direcciones.classList.add("card__title");
            allElementsWrapper.appendChild(direcciones);
            person._direcciones.forEach(dir => {
                const direccion = createParagraph(`${dir._calle} ${dir._numero} ${dir._letra}, Codigo Postal ${dir._codigoPostal}, ${dir._poblacion}, ${dir._provincia}`);
                direccion.classList.add("card__address");
                allElementsWrapper.appendChild(direccion);
            });

            // Todos los telefonos
            const telefonos = createParagraph("Telefonos");
            telefonos.classList.add("card__title");
            allElementsWrapper.appendChild(telefonos);
            person._telefonos.forEach(telf => {
                const telefono = createParagraph(`(${telf._tipo}) ${telf._numero}`);
                allElementsWrapper.appendChild(telefono);
            });

            // Emails
            const mails = createParagraph("Mails");
            mails.classList.add("card__title");

            allElementsWrapper.appendChild(mails);
            person._mails.forEach(mail => {
                const mailELem = createParagraph(`(${mail._tipo}) ${mail._direccion}`);
                allElementsWrapper.appendChild(mailELem);
            });

            // Notas
            const notas = createParagraph("Notas");
            notas.classList.add("card__title");
            allElementsWrapper.appendChild(notas);
            person._notas.forEach(nota => {
                const notaElem = createParagraph(nota);
                allElementsWrapper.appendChild(notaElem);
            });

            
            // añade li al ul
            list.appendChild(listElement);


        }    
        
        )
    
}

function createParagraph(text) {
    const elem = document.createElement("p");
    elem.innerHTML = text;
    return elem;
}



