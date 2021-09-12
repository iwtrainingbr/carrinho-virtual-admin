function listProducts(){
  let data= [0,1,2,3,4,5].map(item => {
  return  `
    <tr>
      <td>Nome ${item}</td>
      <td>Valor${item}</td>
      <td>Fotos${item}</td>
      <td>Descrição${item}</td>
      <td>Categoria ${item}</td>
      <td>Quantidade${item}</td>
      <td>
        <button class="btn btn-warning btn-sm">Editar</button>
        <button class="btn btn-danger btn-sm">Excluir</button>
      </td>
    </tr>
  `;
});
  return `
    <h2>Listar Produtos</h2>
    <hr>
        <table class="table table-hover table-striped">
          <thead class="table-dark">
            <tr>
                <th>Nome</th>
                <th>Valor</th>
                <th>Fotos</th>
                <th>Descrição</th>
                <th>Categoria</th>
                <th>Quantidade</th>
                <th>Ações</th>
              </tr>
            </thead>
            <tbody>
              ${data.join('')}
            </tbody>
          </table>
      `;
    }
