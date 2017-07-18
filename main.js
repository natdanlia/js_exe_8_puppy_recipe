let input = document.querySelector('.input')
let it = document.querySelector('.items')


fetch(
  "https://crossorigin.me/http://www.recipepuppy.com/api"
)
  .then(function(response) {
    if (response.status !== 200) {
      console.log(response.status);
      return;
    }
    response.json().then(function(data) {
        console.log(data)
        let li = document.createElement( "li");
        let textcontent = document.createTextNode(data.results.thumbnails);
        li.appendChild(textcontent);
        it.appendChild(li);
    });
  })
