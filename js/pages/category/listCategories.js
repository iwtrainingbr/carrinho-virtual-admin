function listCategories() {
  let data = [0, 1, 2, 3, 4, 5].map(item => {
    return `
      <tr>
        <td>Categoria ${item}</td>
        <td>Descrição ${item}</td>
        <td>Foto ${item}</td>
        <td>
          <button class="btn btn-warning btn-sm">Editar</button>
          <button class="btn btn-danger btn-sm">Excluir</button>
        </td>
      </tr>
    `;
  });

  return `
      <h2>Categorias</h2>
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
        <tbody>
          ${data.join('')}
        </tbody>
      </table>
  `;
}
