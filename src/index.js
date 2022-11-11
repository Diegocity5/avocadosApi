const baseUrl = "https://platzi-avo.vercel.app";
const nodeApp = document.querySelector('#app');

//Intl API internacionalización del browser
//Dar formato a monedas
const formatPrice = (price) => {
  const newPrice = new window.Intl.NumberFormat('en-US', {
    style: "currency",
    currency: "USD",
  }).format(price)

  return newPrice;
};

//Web API
//Conectarnos al server
window.fetch(`${baseUrl}/api/avo`)
  //Procesar la respuesta, y convertirla en JSON
  .then((respuesta) => respuesta.json())
  //JSON -> Data -> Renderizar info browser
  .then((responseJson) => {
    const allArticles = [];
    responseJson.data.forEach(item => {
        //Create an image
        const img = document.createElement('img');
        img.src = `${baseUrl}${item.image}`;
        //Create a title
        const title = document.createElement('h2');
        title.innerText = item.name;
        //Create a price
        const price = document.createElement('div');
        price.innerText = formatPrice(item.price);
        //Card container
        const card = document.createElement('article');
        card.append(img, title, price);

        allArticles.push(card);
    })
    nodeApp.append(...allArticles);
});