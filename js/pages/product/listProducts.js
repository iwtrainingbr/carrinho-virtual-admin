function listProducts(){
    fetch('https://carrinho-virtual-iw-default-rtdb.firebaseio.com/products.json')
        .then(response => response.json())
        .then(products => {
            const TABLE_PRODUCTS = document.getElementById('table-list-products');

            for (let id in products) {
                TABLE_PRODUCTS.innerHTML += `
          <tr>
      <td>${products[id].category}</td>
      <td>${products[id].description}</td>
      <td>${products[id].name}</td>
      <td>${products[id].photo}</td>
      <td>${products[id].price}</td>
      <td>${products[id].quantity}</td>
      <td>
        <button class="btn btn-warning btn-sm">Editar</button>
        <button class="btn btn-danger btn-sm">Excluir</button>
      </td>
    </tr>
        `
            }
        });

    return `
        <h2>Listar Produtos &#128221;</h2>
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
                <tbody id="table-list-products"></tbody>
              </table>
          `;

}