PickaShop
1. Funkcja btnReset:
clearBtn = document.getElementById("delate-btn");

const btnReset = function () { document.getElementById("form").reset(); };

clearBtn.addEventListener("click", btnReset);

[Stworzyłem ta funkcje ale pozniej doczytalem, ze wystarczy dodac typ "reset" do button ale juz to zostawiłem.]

2. Maximum checkd checkbox (max. 2)
const checks = document.querySelectorAll(".check"); const max = 2;

function selectiveCheck(event) { const checkedChecks = document.querySelectorAll(".check:checked"); if (checkedChecks.length >= max + 1) return false; }

[Uzylem jej poniewaz chcialem sie dowiedzec jak to sie robi. Oczywiscie nie wymyslilem jej sam. Dalej w sumie dokladnie rozkminiam jak ona dziala (czesto sie gubie przy uzyciu petli).]

3. Onkeydown function.
[Wrzucilem ja w html bo juz nie chcialem wrzucac tego do pliku JS bo troche mozg mi juz parował po 2 dniowym wpisywaniu tego kodu. Najwiekszą gimnastyką bylo nadawanie klas inputą aby stilizowaly sie na imput-valid i input-invalid]

4. Toastify alert
[Druga walidacje juz przy wysylaniu (sumbit) formularza uzylem biblioteki "toastów" ktore wyskakuja z gory strony ( https://apvarun.github.io/toastify-js/ ) Nie chcialem uzywac zwyklej funkcji "alert" bo chcialem poznac inne metody. Robilem to oczywiscie wg tutoriala ale gosc fajnie wszystko wytlumaczyl.]