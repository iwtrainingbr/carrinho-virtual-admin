const ROUTES = {
  "register": register(),
  "list": list(),
  "login": login(),
  "reports": reports(),
};


function navbar() {
  return `
    <nav class="text-end">
      <button data-component="menu" data-action="register" class="btn btn-outline-dark">Cadastro</button>
      <button data-component="menu" data-action="list" class="btn btn-outline-dark">Listar</button>
      <button data-component="menu" data-action="login" class="btn btn-outline-dark">Login</button>
      <button data-component="menu" data-action="reports" class="btn btn-outline-dark">Relatórios</button>
    </nav>
  `;
}
