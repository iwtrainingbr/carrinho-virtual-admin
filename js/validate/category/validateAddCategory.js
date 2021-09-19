function validateAddCategory() {
  event.preventDefault();

  let valid = true;
  const CATEGORY_NAME = document.getElementById('category-name');
  const CATEGORY_PHOTO = document.getElementById('category-photo');
  const CATEGORY_DESCRIPTION = document.getElementById('category-description');

  if (CATEGORY_NAME.value === '') {
    CATEGORY_NAME.classList.add('is-invalid');
    valid = false;
  }

  if (CATEGORY_PHOTO.value === '') {
    CATEGORY_PHOTO.classList.add('is-invalid');
    valid = false;
  }
  if (CATEGORY_DESCRIPTION.value === '') {
    CATEGORY_DESCRIPTION.classList.add('is-invalid');
    valid = false;
  }

  return valid;
}
