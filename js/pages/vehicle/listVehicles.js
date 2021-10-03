const removeVehicle = (id) => {
  if (false === confirm('Você tem certeza?')) {
    return;
  }

  fetch(API_URL + `/vehicles/${id}.json`, {
    method: 'DELETE'
  });

  location.href = '/';
}

function findVehicles() {
  fetch(API_URL + '/vehicles.json')
    .then(response => response.json())
    .then(vehicles => {
      const TABLE_VEHICLES = document.getElementById('table-list-vehicles');

      TABLE_VEHICLES.innerHTML = '';

      for (let id in vehicles) {
        TABLE_VEHICLES.innerHTML += `
          <tr>
            <td>${vehicles[id].make}</td>
            <td>${vehicles[id].model}</td>
            <td>
              <button class="btn btn-warning btn-sm">Editar</button>
              <button onclick="removeVehicle('${id}')" class="btn btn-danger btn-sm">Excluir</button>
            </td>
          </tr>
        `
      }
    });
}

function listVehicles() {
  findVehicles();

  return `
      <h2>Veiculos</h2>
      <hr>

      <table class="table table-hover table-striped">
        <thead class="table-dark">
          <tr>
            <th>Marca</th>
            <th>Modelo</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody id="table-list-vehicles"></tbody>
      </table>
  `;
}
