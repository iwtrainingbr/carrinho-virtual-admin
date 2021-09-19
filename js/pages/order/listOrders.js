function listOrders() {
  let data= [0,1,2,3,4,5].map(item => {
  return  `
    <tr>
      <td>Produto${item}</td>
      <td>Cliente${item}</td>
      <td>Endereço de entrega${item}</td>
      <td>Valor total${item}</td>
      <td>Data${item}</td>
      <td>Status${item}</td>
      <td>
      <button class="btn btn-warning btn-sm">Editar</button>
      <button class="btn btn-danger btn-sm">Excluir</button>
    </td>
  </tr>
`;
});

return `
  <h2>Listar Pedidos</h2>
  <hr>
      <table class="table table-hover table-striped">
        <thead class="table-dark">
          <tr>
              <th>Produto</th>
              <th>Cliente</th>
              <th>Endereço de entrega</th>
              <th>Valor total</th>
              <th>Data</th>
              <th>Status</th>
              <th>Ações</th>
            </tr>
          </thead>
          <tbody>
            ${data.join('')}
          </tbody>
        </table>
    `;
  }
