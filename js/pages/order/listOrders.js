function listOrders() {
  fetch(API_URL + '/orders.json')
    .then(response => response.json())
    .then(orders => {
      const TABLE_ORDERS = document.getElementById('table-list-orders');

      for (let id in orders) {
        TABLE_ORDERS.innerHTML += `
          <tr>
            <td>${orders[id].products.length}</td>
            <td>${orders[id].client}</td>
            <td>${orders[id].address}</td>
            <td>${orders[id].price_total}</td>
            <td>${orders[id].date}</td>
            <td>${orders[id].status}</td>
            <td>
              <button class="btn btn-warning btn-sm">Editar</button>
              <button class="btn btn-danger btn-sm">Excluir</button>
            </td>
          </tr>
        `
      }
    });

return `
  <h2>Listar Pedidos &#128202; </h2>
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
          <tbody id="table-list-orders">
          </tbody>
        </table>
    `;
  }
