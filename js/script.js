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

form.addEventListener('submit', (e) =>{
  e.preventDefault();

  const data = new FormData(form);
  
console.log(...data)
});





