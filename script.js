const loadBooks = () => {
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
        <button href="#" onclick="addBadge(event)" class="btn btn-primary">Add to cart</button>
        <button href="#" onclick="removeCard(event)" class="btn btn-primary">Skip</button>
      </div>
    </div>`;
        containerRow.appendChild(column);
      }
    })
    .catch((err) => console.error(err));
};

const addBadge = (e) => {
  e.target.closest(
    ".col-3"
  ).innerHTML += `<span class="badge badge-success p-2">Added to cart!</span>`;
};
const removeCard = (e) => {
  e.target.closest(".col-3").remove();
};
window.onload = () => {
  loadBooks();
};
