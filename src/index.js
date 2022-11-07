/**
 * This file is just a silly example to show everything working in the browser.
 * When you're ready to start on your site, clear the file. Consumiendo APIS es Genial ya que hay cientos de  Apis
 *!
 **/
const baseUrl = "https://platzi-avo.vercel.app";
// const url = "https://platzi-avo.vercel.app/api/avo";
const nodeApp = document.querySelector('#app');

//Web API
//Conectarnos al server
// Trabajando con PROMISE
window.fetch(`${baseUrl}/api/avo`)
  //Procesar la respuesta, y convertirla en JSON
  .then((respuesta) => respuesta.json())
  //JSON -> Data -> Renderizar info browser
  .then((responseJson) => {
    const allArticles = [];
    responseJson.data.forEach(item => {
        //crear un imagen
        const img = document.createElement('img');
        img.src = `${baseUrl}${item.image}`;
        //crear un titulo
        const title = document.createElement('h2');
        title.innerText = item.name;
        //crear un precio
        const price = document.createElement('div');
        price.innerText = item.price;
        //card container
        const card = document.createElement('article');
        card.append(img, title, price);
        //Agregar al array javascript memoria
        allArticles.push(card);
    })
    nodeApp.append(...allArticles);
});

//Tarea: pudes logra este codigo tambien con asyn/await

//Lo que hicimos en esta clase no es nada mas que conectarnos a una Api