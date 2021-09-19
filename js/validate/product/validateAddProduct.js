

function addNovoProduto() {
    event.preventDefault();
    let valid = true;
    const INPUT_NOME = document.getElementById("product-name");
    const INPUT_VALOR = document.getElementById("product-value");
    const INPUT_FOTO = document.getElementById("product-photo");
    const INPUT_DESCRICAO = document.getElementById("product-description");
    const INPUT_CATEGORIA = document.getElementById("product-category");
    const INPUT_QUANTIDADE = document.getElementById("product-quantity");
      
    if (INPUT_NOME.value === '') {
        INPUT_NOME.classList.add('is-invalid');
      valid = false;
    }

    if (INPUT_VALOR.value === '') {
        INPUT_VALOR.classList.add('is-invalid');
      valid = false;
    }

    if (INPUT_FOTO.value === '') {
        INPUT_FOTO.classList.add('is-invalid');
      valid = false;
    }

    if (INPUT_DESCRICAO.value === '') {
        INPUT_DESCRICAO.classList.add('is-invalid');
      valid = false;
    }

    if (INPUT_CATEGORIA.value === '') {
        INPUT_CATEGORIA.classList.add('is-invalid');
      valid = false;
    }

    if (INPUT_QUANTIDADE.value === '') {
        INPUT_QUANTIDADE.classList.add('is-invalid');
      valid = false;
    }
  
    return valid;
  }