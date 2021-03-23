const formulario = document.querySelector("#form");
const outputDiv = document.querySelector("#form_output");

formulario.addEventListener("submit", (e) => {
  e.preventDefault();
  const formData = new FormData(formulario);

  const output = ` 
    <div class="class_container">
      <div>${formData.get("nombre")} {</div>
      <div class="item_container">
        <span id="item">${formData.get("atributo1")}</span>
        <span id="item">${formData.get("atributo2")}</span>
        <span id="item">${formData.get("atributo3")}</span>
        <span id="item">${formData.get("metodo1")}()</span>
        <span id="item">${formData.get("metodo2")}()</span>
      </div>
      <div>}</div>
    </div>
  `;

  outputDiv.innerHTML = output;
});
