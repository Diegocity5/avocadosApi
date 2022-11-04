/**
 * This file is just a silly example to show everything working in the browser.
 * When you're ready to start on your site, clear the file. Consumiendo APIS es Genial ya que hay cientos de  Apis
 *!
 **/

const url = "https://platzi-avo.vercel.app/api/avo";

//Web API
//Conectarnos al server
// Trabajando con PROMISE
window.fetch(url)
  //Procesar la respuesta, y convertirla en JSON
  .then((respuesta) => respuesta.json())
  //JSON -> Data -> Renderizar info browser
  .then((responseJson) => {
    const allArticles = [];
    responseJson.data.forEach(item => {
        //crear un imagen
        const img = document.createElement('img');
        //crear un titulo
        const title = document.createElement('h2');
        //crear un precio
        const price = document.createElement('div');

        //card container
        const card = document.createElement('article');
        card.append(img, title, price);
        //Agregar al array javascript memoria
        allArticles.push(card);
    })
    document.body.append(...allArticles);
});

//Tarea: pudes logra este codigo tambien con asyn/await

//Lo que hicimos en esta clase no es nada mas que conectarnos a una Api