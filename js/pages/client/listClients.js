const removeClient = (id) => {
  if (false === confirm('Você tem certeza?')) {
    return;
  }

  fetch(API_URL + `/clients/${id}.json`, {
    method: 'DELETE'
  });

  alert('Cliente excluído');

  findClients();
}


function findClients(){
  fetch(API_URL + '/clients.json')
    .then(response => response.json())
    .then(clients => {
      const TABLE_CLIENTS = document.getElementById('table-list-clients');
      TABLE_CLIENTS.innerHTML = ``;

      for (let id in clients) {
          TABLE_CLIENTS.innerHTML += `
          <tr>
          <td> ${clients[id].name}</td>
          <td> ${clients[id].email}</td>
          <td> ${clients[id].phone}</td>
          <td> ${clients[id].birth}</td>
          <td> ${clients[id].address}</td>
            <td>
              <button class="btn btn-warning btn-sm">Editar</button>
              <button class="btn btn-danger btn-sm" onclick="removeClient('${id}')">Excluir</button>
            </td>
          </tr>
        `;
      }
  });
}

function listClients() {

  findClients();


  return `
      <h2>Listar Clientes &#128101;</h2>
      <hr>

      <table class="table table-hover table-striped">
        <thead class="table-dark">
          <tr>
            <th>Cliente</th>
            <th>Email</th>
            <th>Telefone</th>
            <th>Endereço</th>
            <th>Data de Nascimento</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody id="table-list-clients">
        </tbody>
      </table>
  `;
}
