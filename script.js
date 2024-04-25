function checkBalance() {
    var food1 = document.getElementById("food1").value;
    var food2 = document.getElementById("food2").value;
    var food3 = document.getElementById("food3").value;

    var proteinFoods = ["beurre_arachide", "fromage", "noix", "houmous", "creton à la viande", "lait"];
    var cerealFoods = ["pain", "muffin", "bagel", "gruau", "céréales"];
    var fruitVegFoods = ["banane", "pomme", "orange", "raisins", "compote", "fruits_séchés", "tomate", "asperge"];

    var isProtein = proteinFoods.includes(food1) || proteinFoods.includes(food2) || proteinFoods.includes(food3);
    var isCereal = cerealFoods.includes(food1) || cerealFoods.includes(food2) || cerealFoods.includes(food3);
    var isFruitVeg = fruitVegFoods.includes(food1) || fruitVegFoods.includes(food2) || fruitVegFoods.includes(food3);

    var animationImage = document.getElementById("animationImage");
    var resultMessage = document.getElementById("result");

    if (isProtein && isCereal && isFruitVeg) {
        resultMessage.innerText = "Votre panier vous permet de composer un petit déjeuner équilibré !  ";
        resultMessage.classList.remove("error-message");
        resultMessage.classList.add("success-message");
        animationImage.src = "img/correct.gif";
        animationImage.style.display = "block";
        var audio = document.getElementById("correctSound");
        audio.play();
        var button = document.createElement("button");
        button.innerText = "Voir en RA";
        button.onclick = function() {
            window.location.href = "realiteAugmentee.html";
        };
        resultMessage.appendChild(button);
    } else {
        resultMessage.innerText = "Votre panier ne permet pas de composer un petit déjeuner équilibré. Assurez-vous de choisir au moins un aliment de chaque groupe alimentaire.";
        resultMessage.classList.remove("success-message");
        resultMessage.classList.add("error-message");
        animationImage.src = "img/incorrect.gif";
        animationImage.style.display = "block";
        var audio = document.getElementById("wrongSound");
        audio.play();
    }
}
