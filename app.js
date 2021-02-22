const select = (selector) => document.querySelector(selector);
const sayacElements = ["#sayac1", "#sayac2", "#sayac3"];
const clearAllBtn = select("button#clearAll");
const SayacClass = [];
class Sayac {
  constructor(element) {
    this.sayac = 0;
    let azaltBtn = select(element).nextElementSibling.firstElementChild;
    let arttirBtn = select(element).nextElementSibling.lastElementChild;
    let sifirlaBtn = select(element).nextElementSibling.firstElementChild
      .nextElementSibling;
    arttirBtn.addEventListener("click", (e) => {
      select(element).textContent = ++this.sayac;
    });
    azaltBtn.addEventListener("click", (e) => {
      select(element).textContent > 0
        ? (select(element).textContent = --this.sayac)
        : null;
    });
    sifirlaBtn.addEventListener("click", (e) => {
      select(element).textContent = 0;
      this.sayac = 0;
    });
  }
}

for (let i = 0; i < sayacElements.length; i++) {
  sayacElements[i];
  SayacClass[i] = new Sayac(sayacElements[i], sayac1);
}
clearAllBtn.addEventListener("click", (e) => {
  for (let i = 0; i < SayacClass.length; i++) {
    const timer = setInterval(() => {
      if (SayacClass[i].sayac > 0) {
        SayacClass[i].sayac--;
        select(sayacElements[i]).textContent = SayacClass[i].sayac;
      } else {
        clearInterval(timer);
      }
    }, 75);
  }
});
