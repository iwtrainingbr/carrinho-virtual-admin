function validateAddClient() {
    event.preventDefault();

    let valid = true;
    const CLIENT_NAME = document.getElementById('client-name');
    const CLIENT_EMAIL = document.getElementById('client-email');
    const CLIENT_PHONE = document.getElementById('client-phone');
    const CLIENT_ADDRESS= document.getElementById('client-address');
    const CLIENT_DATE= document.getElementById('client-date');

    if (CLIENT_NAME.value === '') {
        CLIENT_NAME.classList.add('is-invalid');
        valid = false;
    }
    if (CLIENT_EMAIL.value === '') {
        CLIENT_EMAIL.classList.add('is-invalid');
        valid = false;
    }
    if (CLIENT_PHONE.value === '') {
        CLIENT_PHONE.classList.add('is-invalid');
        valid = false;
    }
    if (CLIENT_ADDRESS.value === '') {
        CLIENT_ADDRESS.classList.add('is-invalid');
        valid = false;
    }
    if (CLIENT_DATE.value === '') {
        CLIENT_DATE.style.border = "1px solid red";
        valid = false;
    }

    return valid;
}
