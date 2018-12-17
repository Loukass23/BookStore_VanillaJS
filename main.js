const url = 'https://api.myjson.com/bins/udbm5'

fetchJson(url);


function fetchJson(url) {
  
    return fetch(url).then(function(response) {
      if (response.ok) {
        return response.json();    
      }
    }).then(function(json) {
  
          console.log(json.books);
          buildTable3('books', json.books);
     
      })
      .catch(console.error("Server Error"));
      
    }

    function buildTable3(el, obj) {
          
        element = document.getElementById(el);
      
        if (element) {
    
            for (var i in obj) {
                var book = document.createElement('div')
                book.className = "flex-item";
                book.id = 'book';

                var front = document.createElement('div')
                front.className = 'front face'
                front.innerHTML = obj[i].titulo

                var back = document.createElement('div')
                back.className = 'back face center'
                back.innerHTML = obj[i].detalle
                           
                book.appendChild(front);
                book.appendChild(back);
                element.appendChild(book);
            }
        }
    }