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
      <div class="btn-group">
        <button data-menu-group="categories" class="btn btn-outline-dark dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
          Categorias
        </button>
        <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
          <li><a data-menu-item="categories" class="dropdown-item" data-component="menu" data-action="addCategory">Nova</a></li>
          <li><a data-menu-item="categories" class="dropdown-item" data-component="menu" data-action="categories">Listar</a></li>
        </ul>

        <button data-menu-group="clients" class="btn btn-outline-dark dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
          Clientes
        </button>
        <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
          <li><a data-menu-item="clients" class="dropdown-item" data-component="menu" data-action="addClient">Novo</a></li>
          <li><a data-menu-item="clients" class="dropdown-item" data-component="menu" data-action="listClients">Listar</a></li>
        </ul>

        <button data-menu-group="products" class="btn btn-outline-dark dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
          Produtos
        </button>
        <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
          <li><a data-menu-item="products" class="dropdown-item" data-component="menu" data-action="addProduct">Novo</a></li>
          <li><a data-menu-item="products" class="dropdown-item" data-component="menu" data-action="products">Listar</a></li>
        </ul>
      </div>

      <button data-component="menu" data-action="listOrders" class="btn btn-outline-dark">Listar Pedidos</button>
    </nav>
  `;
}
