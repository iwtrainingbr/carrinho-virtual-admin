function listCategories() {
  fetch('https://carrinho-virtual-iw-default-rtdb.firebaseio.com/categories.json')
    .then(response => response.json())
    .then(categories => {
      const TABLE_CATEGORY = document.getElementById('table-list-category');

      for (let id in categories) {
          TABLE_CATEGORY.innerHTML += `
          <tr>
            <td>${categories[id].name}</td>
            <td>${categories[id].description}</td>
            <td><img src="${categories[id].photo}" width="100px"></td>
            <td>
              <button class="btn btn-warning btn-sm">Editar</button>
              <button class="btn btn-danger btn-sm">Excluir</button>
            </td>
          </tr>
        `;
      }
  });

  return `
      <h2>Listar Categorias &#128451;</h2>
      <hr>

      <table class="table table-hover table-striped">
        <thead class="table-dark">
          <tr>
            <th>Nome</th>
            <th>Descrição</th>
            <th>Foto</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody id="table-list-category"></tbody>
      </table>
  `;
}