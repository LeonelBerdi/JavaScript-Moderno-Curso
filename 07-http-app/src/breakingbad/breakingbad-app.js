/**
 * @returns {Promise<Object>} quote information
 */
const fetchQuote = async() => {
    
    const res = await fetch('https://api.breakingbadquotes.xyz/v1/quotes');
    //console.log(res); compruebo que recibo de mi peticion http
    const data = await res.json();

    console.log(data[0]);
    return data[0];
}

/**
 * 
 * @param {HTMLDivElement} element 
 */
export const BreakingbadApp = async(element) => {
    /* Compruebo la exportacion y que recibo el elemento html donde quiero renderizar
    console.log('Hola Mundo');
    console.log( element );
    */
    document.querySelector('#app-title').innerHTML = 'Breakingbad App';
    element.innerHTML ='loading...';
    // await fetchQuote();

    const quoteLabel = document.createElement('blockquote');
    const authorLabel = document.createElement('h3');
    const nextQuoteButton = document.createElement('button');
    nextQuoteButton.innerText = 'Next Quote';


    const renderQuote = ( data ) => {
        quoteLabel.innerHTML = data.quote; 
        authorLabel.innerHTML = data.author;
        element.replaceChildren( quoteLabel, authorLabel, nextQuoteButton );

    }

    //listener
    nextQuoteButton.addEventListener('click', async() => {
        element.innerHTML ='loading...';
        const quote = await fetchQuote();
        renderQuote( quote );

    } )

    /*
    const quote = await fetchQuote();
    element.innerHTML = 'Tenemos data!!';
    */
    /*optimaizacion abajo
    fetchQuote()
        .then(data => renderQuote(data));
    */
    fetchQuote()
        .then(renderQuote);


}