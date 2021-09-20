function listClients() {
  let data = [0, 1, 2, 3, 4, 5].map(item => {
    return `
      <tr>
        <td>Cliente ${item}</td>
        <td>Email ${item}</td>
        <td>Telefone ${item}</td>
        <td>Endereço ${item}</td>
        <td>Data de Nascimento ${item}</td>
        <td>
          <button class="btn btn-warning btn-sm">Editar</button>
          <button class="btn btn-danger btn-sm">Excluir</button>
        </td>
      </tr>
    `;
  });

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
        <tbody>
          ${data.join('')}
        </tbody>
      </table>
  `;
}