const aside = document.querySelector(".aside");

const url = "https://makeitreal.s3.amazonaws.com/chats/users.json";

function createNameNode(nombre) {
  return `
    <div class="name">
      <i class="icon fas fa-dot-circle"></i>
      <h4>${nombre.name}<h4>
    </div>
  `;
}

let usuarios;

fetch(url)
  .then(response => response.json())
  .then(data => {
    usuarios = data;
    const names = data.map(createNameNode).join('');

    aside.innerHTML = names;

    // querySelector
    // querySelectorAll
    const name = document.querySelectorAll(".name");
    console.log(name)

    name.forEach(element => {
      element.addEventListener('click', event => {
        console.log("click")
      });
    });
  }); 

// setTimeout(() => {
//   console.log(usuarios)
// }, 1000);

aside.addEventListener('click', event => {
  console.log(event.target);
});
