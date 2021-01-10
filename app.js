
let icon = document.querySelector(".fa-battery-empty");
let tabCharge = [
  "fa-battery-empty",
  "fa-battery-quarter",
  "fa-battery-half",
  "fa-battery-three-quarters",
  "fa-battery-full"
]
let cpt = 0;


let animation = () => {
  setInterval(() => {
    cpt++;
    if(cpt == tabCharge.length) {
      cpt = 0;
    }
    //on enlève les classes et on rajoute celle suivant dans le tableau de charge
    icon.classList = "";
    icon.classList.add(tabCharge[cpt], "fas");
  }, 1000);
}

animation();