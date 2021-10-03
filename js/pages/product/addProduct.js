function addProduct() {
  return `
      <h2>Novo Produto &#128221;</h2>
      <hr>

      <form action="" onsubmit="addNovoProduto()">
        <label for="product-name">Nome</label>
        <input type="text" class="form-control w-50 p-3" id="product-name" placeholder="Nome do Produto">
        <br>

        <label for="value">Valor</label>
        <input type="text" class="form-control w-50 p-3" id="product-value" placeholder="Valor do Produto">
        <br>

        <label for="photo">Foto</label>
        <input type="text" class="form-control w-50 p-3" id="product-photo" placeholder="URL da foto">
        <br>

        <label for="description">Descrição</label>
        <textarea class="form-control w-50 p-3" id="product-description" placeholder="Descreva a caracteristicas do produto"></textarea>
        <br>

        <label for="category">Categoria</label>
        <select class="form-control w-50 p-3" id=product-category name="select">
          <option value="">--Selecione--</option>
          <option>Bebidas</option>
        </select>
        <br>

        <label for="quantity">Quantidade</label>
        <input type="number" class="form-control w-50 p-3" id="product-quantity" placeholder="Quantidade">
        <br>

        <button class="btn btn-primary">Enviar</button>
      </form>
  `;
}