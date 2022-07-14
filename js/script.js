const btnReset = function () {
  document.getElementById("form").reset()
};

clearBtn = document.getElementById('delate-btn');
clearBtn.addEventListener('click', btnReset)

const form = document.getElementById('form');

const checks = document.querySelectorAll(".check");
const max = 2;

function selectiveCheck(event) {
  const checkedChecks = document.querySelectorAll(".check:checked");
  if (checkedChecks.length >= max + 1)
    return false
};

for (let i = 0; i < checks.length; i++)
  checks[i].onclick = selectiveCheck;


function validation() {
  const fname = document.getElementById('fname').value;
  const email = document.getElementById('email').value;
  const telefon = document.getElementById('telefon').value;
  const fnameBox = document.getElementById('fname-box');
  const emailBox = document.getElementById('email-box');
  const telefonBox = document.getElementById('telefon-box');
  
  const emailPattern = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  const numberPattern = /^[0-9]+$/;

if (fname.length < 6) {
  fnameBox.classList.add('invalid');
  fnameBox.classList.remove('valid');
} else {
  fnameBox.classList.add('valid');
  fnameBox.classList.remove('invalid');
}

 if (email.match(emailPattern)) {
  emailBox.classList.add('valid');
  emailBox.classList.remove('invalid');
} else {
  emailBox.classList.add('invalid');
  emailBox.classList.remove('valid');
}

if (telefon.match(numberPattern)) {
  telefonBox.classList.add('valid');
  telefonBox.classList.remove('invalid');
} else {
  telefonBox.classList.add('invalid');
  telefonBox.classList.remove('valid');
}};





form.addEventListener('submit', (e) => {
  e.preventDefault();

  const fname = document.getElementById('fname').value.trim();
  const email = document.getElementById('email').value.trim();
  const telefon = document.getElementById('telefon').value.trim();
  const pizza = document.getElementById('pizza').value;
  const emailPattern = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  const regex = /^[0-9]+$/;

  const errors = [];

  if (!telefon.match(regex)) {
    errors.push('Nieprawidłowy numer telefonu')
  }
  if (!email.match(emailPattern)) {
    errors.push('Nieprawidłowy adres Email')
  }
  if (fname.length < 6) {
    errors.push('Pole "Imię i Nazwisko" musi zawierac co najmniej 6 znaków')
  }
  if (pizza == ""){
    errors.push('Wybierz pickę!')
  }
  if (errors.length > 0) {
    for(let i = 0; i < errors.length; i++){
      Toastify({
        text: errors[i],
        close: true,
        duration: 3500,
        gravity: "top",
        position: 'center',
        style: {
          background: "#DF1C24"
        }
      }).showToast();
    }
  } else {
    Toastify({
      text: "Zamówienie wysłane! 😄",
      duration: 5000,
      gravity: 'top',
      position: 'center',
        style: {
          background: "#4bab4e",
        }
    }).showToast();
  }

  const data = new FormData(form);
  for (const [key, value] of data) {
    console.log(`${key}: ${value}\n`)
  }
});













