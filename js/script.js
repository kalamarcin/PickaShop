

const btnReset = function () {
  document.getElementById("form").reset()
};

clearBtn = document.getElementById('delate-btn');

clearBtn.addEventListener('click', btnReset)
const form = document.getElementById('form');
const namef = document.getElementById('fname');
const email = document.getElementById('email');
const telefon = document.getElementById('telefon');
const adres = document.getElementById('adres');
const errorElement = document.getElementById('error');

const checks = document.querySelectorAll(".check");
const max = 2;

function selectiveCheck (event) {
  const checkedChecks = document.querySelectorAll(".check:checked");
  if (checkedChecks.length >= max + 1)
    return false;
}

for (let i = 0; i < checks.length; i++)
  checks[i].onclick = selectiveCheck;




form.addEventListener('submit', (e) =>{
  e.preventDefault();

  


  const data = new FormData(form);
  for (const [key, value] of data) {
    console.log(`${key}: ${value}\n`)
   }
});













