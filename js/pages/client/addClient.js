function addClient() {
    return `
      <h2>Novo Cliente</h2>
      <hr>

      <form action="#" onsubmit="validateAddClient(this)">
        <label for="name">Nome</label>
        <input type="text" class="form-control w-50 p-3 " id="client-name" placeholder="Nome do Cliente">
        <br>

        <label for="email">Email</label>
        <input type="email" class="form-control w-50 p-3" id="client-email" placeholder="Email">
        <br>

        <label for="phone">Celular</label>
        <input type="tel" class="form-control w-50 p-3" id="client-phone" placeholder="Celular">
        <br>
        
        <label for="address">Endereço</label>
        <textarea class="form-control w-50 p-3" id="client-address" placeholder="Endereço"></textarea>
        <br>
        
        <label for="data">Data de Nascimento</label>
        <input type="date" class="form-control w-25 p-3" id="client-data">
        <br>

        <button class="btn btn-primary">Enviar</button>
      </form>
  `;
}
