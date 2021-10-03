const removeCategory = (id) => {
  if (false === confirm('Você tem certeza?')) {
    return;
  }

  fetch(API_URL + `/categories/${id}.json`, {
    method: 'DELETE'
  });

  alert('Categoria Excluída')

  findCategories();
}

function findCategories(){
  fetch(API_URL + '/categories.json')
    .then(response => response.json())
    .then(categories => {
      const TABLE_CATEGORY = document.getElementById('table-list-category');

      TABLE_CATEGORY.innerHTML = '';

      for (let id in categories) {
          TABLE_CATEGORY.innerHTML += `
          <tr>
            <td>${categories[id].name}</td>
            <td>${categories[id].description}</td>
            <td>
              <a href="${categories[id].photo}" data-lightbox="${categories[id].photo}" data-title="${categories[id].name}">
              <img src="${categories[id].photo}" width='100'>
              </a>
            <td>
              <button class="btn btn-warning btn-sm">Editar</button>
              <button onclick="removeCategory('${id}')" class="btn btn-danger btn-sm">Excluir</button>
            </td>
          </tr>
        `;
      }
  });
}

function listCategories() {
  findCategories();



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
