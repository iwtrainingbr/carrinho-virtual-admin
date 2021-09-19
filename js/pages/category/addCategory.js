function addCategory() {
  return `
      <h2>Nova Categoria</h2>
      <hr>

      <form action="#" onsubmit="validateAddCategory()">
        <label for="name">Nome</label>
        <input type="text" class="form-control" id="category-name" placeholder="Nome da Categoria">
        <br>

        <label for="photo">Foto</label>
        <input type="text" class="form-control" id="category-photo" placeholder="URL da foto">
        <br>

        <label for="description">Descrição</label>
        <textarea class="form-control" id="category-description" placeholder="Descreva a caracteristicas dessa categoria"></textarea>
        <br>

        <button class="btn btn-primary">Enviar</button>
      </form>
  `;
}
