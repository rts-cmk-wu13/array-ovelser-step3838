document.addEventListener("DOMContentLoaded", function () {
    let catsArray = ["Ollie", "Sophie", "Salem", "Tiger", "Binx", "Pumpkin", "Penny", "Lenny"];
    let dogsArray = ["Barney", "Molly", "Baxter", "Polly", "Buddy", "Suki", "Watson"];
    let fruitsArray = ["Banana", "Orange", "Pineapple", "Mango", "Plum", "Apricot"]
    let numbersArray = [12, 4, 45, 17, 2, 26, 7, 55, 48, 32, 21]

    // --- Løs opgaverne herunder --- 

    //Opgave 1
    let newNumbers = numbersArray.filter(function (number) {
        return number > 20;
    }); /* I dette kodeeksempel anvendes filter()-metoden på numbersArray,
    og den returnerer et nyt array, der kun indeholder de tal, der er større end 20.
    Resultatet bliver et array, som du kan bruge videre i din kode. */
    console.log("Opgave 1", newNumbers)

    //Opgave 2


}) // ends DOMContentLoaded