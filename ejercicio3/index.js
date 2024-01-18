


//*1.1 Basandote en el array siguiente, crea una lista ul > li 
//*dinámicamente en el html que imprima cada uno de los paises.

const countries = ['Japón', 'Nicaragua', 'Suiza', 'Australia', 'Venezuela'];

    const ul = document.createElement("ul");
    for (const country of countries) {
        const li = document.createElement("li");
        li.textContent = country;
        ul.appendChild(li);
    }
    document.body.appendChild(ul)


//*1.2 Elimina el elemento que tenga la clase .fn-remove-me.

    const remove = document.querySelector(".fn-remove-me");
    remove.remove();

//*1.3 Utiliza el array para crear dinamicamente una lista ul > li de elementos 
//*en el div de html con el atributo data-function="printHere".
    
    const cars = ['Mazda 6', 'Ford fiesta', 'Audi A4', 'Toyota corola'];
    const div = document.querySelector("div");
    const ul2 = document.createElement("ul");  
        for (const car of cars) {
        const li = document.createElement("li");
        li.textContent = car;
        ul.appendChild(li);
    }
    div.appendChild(ul);
     


//*1.4 Crea dinamicamente en el html una serie de divs que contenga un elemento 
//*h4 para el titulo y otro elemento img para la imagen.

    const countries2 = [
      {title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=1'}, 
      {title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=2'},
      {title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=3'},
      {title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=4'},
      {title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=5'}
    ];
    
    for (const country2 of countries2) {
        const div3 = document.createElement("div");
        div3.id = "eliminar";
        const h4 = document.createElement("h4");
        const img = document.createElement("img");
        h4.textContent = country2.title;
        img.src = country2.imgUrl;
        div3.appendChild(h4);
        div3.appendChild(img);   
        document.body.appendChild(div3);
    }

    const eliminaUltimo = document.querySelector("div");
   


//*1.5 Basandote en el ejercicio anterior. Crea un botón que elimine el último 
//*elemento de la serie de divs.
    const btn = document.createElement("button");
    btn.textContent = "eliminar";
    document.body.appendChild(btn);
    
    const eliminar = () =>{
        const div4 = document.querySelectorAll("#eliminar");
        div4[div4.length - 1].remove();   
    }
    btn.addEventListener("click", eliminar);


//*1.6 Basandote en el ejercicio anterior. Crea un botón para cada uno de los 
//*divs que elimine ese mismo elemento del html.

   const div4 = document.querySelectorAll("#eliminar");

   for (const div of div4) {
        const btn2 = document.createElement("button");
        btn2.textContent = "Borrar";
        btn2.addEventListener("click", (e) => e.target.parentElement.remove());
        div.appendChild(btn2);
   }


