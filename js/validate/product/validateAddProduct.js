
function addNovoProduto() {
  event.preventDefault();
  let valid = true;
  const INPUT_NAME = document.getElementById("product-name");
  const INPUT_PRICE = document.getElementById("product-value");
  const INPUT_PHOTO = document.getElementById("product-photo");
  const INPUT_DESCRIPTION = document.getElementById("product-description");
  const INPUT_CATEGORY = document.getElementById("product-category");
  const INPUT_QUANTITY = document.getElementById("product-quantity");

  if (INPUT_NAME.value === '') {
      INPUT_NAME.classList.add('is-invalid');
    valid = false;
  }

  if (INPUT_PRICE.value === '') {
      INPUT_PRICE.classList.add('is-invalid');
    valid = false;
  }

  if (INPUT_PHOTO.value === '') {
      INPUT_PHOTO.classList.add('is-invalid');
    valid = false;
  }

  if (INPUT_DESCRIPTION.value === '') {
      INPUT_DESCRIPTION.classList.add('is-invalid');
    valid = false;
  }

  if (INPUT_CATEGORY.value === '') {
      INPUT_CATEGORY.classList.add('is-invalid');
    valid = false;
  }

  if (INPUT_QUANTITY.value === '') {
      INPUT_QUANTITY.classList.add('is-invalid');
    valid = false;
  }

  if (valid === false) {
    return;
  }

  let newProduct = {
    price: INPUT_PRICE.value,
    photo: INPUT_PHOTO.value,
    description: INPUT_DESCRIPTION.value,
    category: INPUT_CATEGORY.value,
    quantity: INPUT_QUANTITY.value,
  };

  fetch(API_URL'/products.json', {
    method: 'POST',
    body: JSON.stringify(newProduct)
  });

  alert('Produto inserido com sucesso');

  location.href = '/';
}
