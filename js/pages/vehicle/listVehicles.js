function listVehicles() {
  fetch(API_URL + '/vehicles.json')
    .then(response => response.json())
    .then(vehicles => {
      const TABLE_VEHICLES = document.getElementById('table-list-vehicles');

      for (let id in vehicles) {
        TABLE_VEHICLES.innerHTML += `
          <tr>
            <td>${vehicles[id].make}</td>
            <td>${vehicles[id].model}</td>
            <td>
              <button class="btn btn-warning btn-sm">Editar</button>
              <button class="btn btn-danger btn-sm">Excluir</button>
            </td>
          </tr>
        `
      }
    });

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
