const ROUTES = {
  "categories": listCategories(),
  "addCategory": addCategory(),
  "addClient": addClient(),
  "listClients": listClients(),
  "products": listProducts(),
  "addProduct": addProduct(),
  "listOrders": listOrders(),
};


function navbar() {
  return `
    <nav class="text-end">
      <button data-component="menu" data-action="categories" class="btn btn-outline-dark">Categorias</button>
      <button data-component="menu" data-action="addCategory" class="btn btn-outline-dark">Nova Categoria</button>
      <button data-component="menu" data-action="addClient" class="btn btn-outline-dark">Novo Cliente</button>
      <button data-component="menu" data-action="listClients" class="btn btn-outline-dark">Clientes</button>
      <button data-component="menu" data-action="products" class="btn btn-outline-dark">Produtos</button>
      <button data-component="menu" data-action="addProduct" class="btn btn-outline-dark">Novo Produto</button>
      <button data-component="menu" data-action="listOrders" class="btn btn-outline-dark">Listar Pedidos</button>
    </nav>
  `;
}
