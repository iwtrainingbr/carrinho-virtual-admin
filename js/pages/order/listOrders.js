const removeOrder = (id) => {
  if (false === confirm('Você tem certeza?')) {
    return;
  }

  fetch(API_URL + `/orders/${id}.json`, {
    method: 'DELETE'
  });
  alert ('Produto excluido')

  findOrders();
}

function findOrders() {
  fetch(API_URL + '/orders.json')
    .then(response => response.json())
    .then(orders => {
      const TABLE_ORDERS = document.getElementById('table-list-orders');

      TABLE_ORDERS.innerHTML='';
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
              <button onclick="removeOrder('${id}')" class="btn btn-danger btn-sm">Excluir</button>
            </td>
          </tr>
        `
      }
    });
}

function listOrders() {

  findOrders();


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
