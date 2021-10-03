function validateAddVehicle() {
  event.preventDefault();

  let valid = true;
  const VEHICLE_MAKE = document.getElementById('vehicle-make');
  const VEHICLE_MODEL = document.getElementById('vehicle-model');

  if (VEHICLE_MAKE.value === '') {
    VEHICLE_MAKE.classList.add('is-invalid');
    valid = false;
  }

  if (valid === false) {
    return;
  }

  let newVehicle = {
    make: VEHICLE_MAKE.value,
    model: VEHICLE_MODEL.value,
  };

  fetch(API_URL + '/vehicles.json', {
    method: 'POST',
    body: JSON.stringify(newVehicle)
  });

  alert('Veiculo inserido com sucesso');

  location.href = '/';
}
