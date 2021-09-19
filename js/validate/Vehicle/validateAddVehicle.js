function validateAddVehicle() {
  let valid = true;
  const VEHICLE_NAME = document.getElementById('vehicle-name');

  if (VEHICLE_NAME.value === '') {
    VEHICLE_NAME.classList.add('is-invalid');
    valid = false;
  }

  return valid;
}
