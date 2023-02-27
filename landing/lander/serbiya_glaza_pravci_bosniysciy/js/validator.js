let message = {
  fillName: "Име",
  fillPhone: "Телефон номер",
  incorrectPhone: "Грешка, невалиден номер"
}

const form = document.querySelector('.form_order');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  form.reset();
});