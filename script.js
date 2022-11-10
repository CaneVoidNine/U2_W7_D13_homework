const options = {
  method: "GET",
};
const loadBooks = async () => {
  const response = await fetch(
    "https://striveschool-api.herokuapp.com/books",
    options
  );
  const books = await response.json();

  let containerRow = document.querySelector(".container .row");
  books.forEach((book) => {
    let column = document.createElement("div");
    column.className = "col-3";
    column.innerHTML = `<div class="card" style="width: 18rem;">
  <img src=${book.img} class="card-img-top" style="max-height: 25rem" alt="...">
  <div class="card-body" style="height: 10rem">
    <p class="card-text"> ${book.title} </p>
    <button href="#" onclick="addToCart(event)" class="btn btn-primary">Add to cart</button>
    <button href="#" onclick="removeCard(event)" class="btn btn-primary">Skip</button>
  </div>
</div>`;
    containerRow.appendChild(column);
  });
};
/* const loadBooks = () => {
fetch("https://striveschool-api.herokuapp.com/books")
  .then((response) => response.json())
  .then((booksList) => {
    let containerRow = document.querySelector(".container .row");
    for (let i = 0; i < booksList.length; i++) {
      const book = booksList[i];
      const column = document.createElement("div");
      column.className = "col-3";
      column.innerHTML = `<div class="card" style="width: 18rem;">
    <img src=${book.img} class="card-img-top" alt="...">
    <div class="card-body">
      <p class="card-text"> ${book.title} </p>
      <button href="#" onclick="addBadge(event)" onclick="addToCart(event)" class="btn btn-primary">Add to cart</button>
      <button href="#" onclick="removeCard(event)" class="btn btn-primary">Skip</button>
    </div>
  </div>`;
      containerRow.appendChild(column);
    }
  })
  .catch((err) => console.error(err));
};
*/
const addToCart = (e) => {
  const col = e.target.closest(".col-3");
  col.innerHTML += `<span class="badge badge-success p-3">Added to cart!</span>`;
  let ul = document.querySelector(".list");
  let li = document.createElement("li");
  li.innerHTML = col.innerHTML;
  ul.appendChild(li);
  // what i do now ;(
  // Rebecca best waifu
};

//Don't need addBadge, just merge with addToCart :)
// const addBadge = (e) => {
//     e.target.closest(
//         ".col-3"
//     ).innerHTML += `<span class="badge badge-success p-3">Added to cart!</span>`;
// };
const removeCard = (e) => {
  e.target.closest(".col-3").remove();
};
window.onload = () => {
  loadBooks();
};
