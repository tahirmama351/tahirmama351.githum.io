fetchLibraryBooks()
function fetchLibraryBooks() {
     fetch("https://elibraryrestapi.herokuapp.com/elibrary/api/book/list", { method: 'GET' })
          .then(response => {

               if (!response.ok) {
                    throw error("ERROR");
               }
               const promisResult = response.json()
               return promisResult
          }).then(promisResultHere => {
               creatTable(promisResultHere)
               function creatTable(result) {
                    var table = document.getElementById("myTable")
                    for (var i = 0; i < result.length; i++) {
                         var tableRow = `<tr>
                              <td> ${i + 1}</td>
                              <td> ${result[i].isbn}</td>
                              <td> ${result[i].title}</td>
                              <td> ${result[i].overdueFee}</td>
                              <td> ${result[i].publisher}</td>
                              <td> ${result[i].datePublished}</td>                              
                          </tr>`
                         console.log(result)
                         table.innerHTML += tableRow
                    }
               }

          }).catch(error => { console.log(error) })
}