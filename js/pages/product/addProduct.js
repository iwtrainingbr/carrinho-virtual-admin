function addProduct() {
  return `
      <h2>Novo Produto</h2>
      <hr>

      <form action="">
        <label for="name">Nome</label>
        <input type="text" class="form-control" id="name" placeholder="Nome do Produto">
        <br>

        <label for="value">Valor</label>
        <input type="text" class="form-control" id="value" placeholder="Valor do Produto">
        <br>

        <label for="photo">Foto</label>
        <input type="text" class="form-control" id="photo" placeholder="URL da foto">
        <br>

        <label for="description">Descrição</label>
        <textarea class="form-control" id="description" placeholder="Descreva a caracteristicas do produto"></textarea>
        <br>

        <label for="category">Categoria</label>
        <select class="form-control" id=category name="select">
          <option value="">--Selecione--</option>
        </select>
        <br>

        <label for="quantity">Quantidade</label>
        <input type="number" class="form-control" id="quantity" placeholder="Quantidade">
        <br>

        <button class="btn btn-primary">Enviar</button>
      </form>
  `;
}
