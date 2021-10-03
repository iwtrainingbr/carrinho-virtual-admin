function addVehicle() {


  return `
    <h2>Novo Veiculo &#128100;</h2>
    <hr>

    <form action="#" onsubmit="validateAddVehicle()">
      <label for="vehicle-make">Marca</label>
      <input type="text" class="form-control w-50 p-3 " id="vehicle-make" placeholder="Marca do Veiculo">
      <br>

      <label for="vehicle-model">Modelo</label>
      <input type="text" class="form-control w-50 p-3 " id="vehicle-model" placeholder="Modelo do Veiculo">
      <br>

      <button class="btn btn-primary">Enviar</button>
    </form>
  `;
}
