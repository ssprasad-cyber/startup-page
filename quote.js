var category = 'happiness';
const quotes = document.getElementById('quote-text');
const authors = document.getElementById('quote-author');
$.ajax({
    method: 'GET',
    headers: { 'X-Api-Key': '1zKrSciWboOs65XzGki8CQ==KweZO5UeOcKWm1o8'},

    url: 'https://api.api-ninjas.com/v1/quotes?category=' + category,
    contentType: 'application/json',
    success: function(result) {
        console.log(result);
        quotes.textContent = result[0].quote ;
        authors.textContent =  ' - ' + result[0].author;
    },
    error: function ajaxError(jqXHR) {
        console.error('Error: ', jqXHR.responseText);
        quotes.innerHTML = 'An error occurred when calling the Quotes API: ' + jqXHR.responseText;
    }
});
