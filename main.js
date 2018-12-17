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
    
            for (let i in obj) {
                let book = document.createElement('div')
                book.className = "flex-item";
                book.id = 'book';

                let front = document.createElement('div')
                front.className = 'front face img-fluid  max-width: 100%'
                front.id = 'book-img'

                front.innerHTML = '<img src="'+obj[i].portada+'"></img>'
                
               

                let back = document.createElement('div')
                back.className = 'back face center '
                let description =   document.createElement('div')
                description.innerHTML = obj[i].titulo

                 let button =   document.createElement('input')
                 button.type = 'button'
                 button.className = 'button'
                 button.innerText = '<a href="'+obj[i].detalle+'"></a>'
                 button.value = 'more'

                back.appendChild(description)
                 back.appendChild(button)

                book.appendChild(front);
                book.appendChild(back);
                element.appendChild(book);
            }
        }
    }