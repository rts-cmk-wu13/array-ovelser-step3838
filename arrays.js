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
    catsArray.push("Sniffles"); /* Med denne ændring vil catsArray nu indeholde katten "Sniffles" som det sidste element. */
    console.log("Opgave 2", catsArray)


    //Opgave 3a
    let isTrixieInDogs = dogsArray.includes("Trixie") /* Denne kode vil udskrive false i konsollen, da "Trixie" ikke er til stede i dogsArray. 
    Hvis du ændrer dogsArray og tilføjer "Trixie", vil det udskrive true i stedet. */
    console.log("Opgave 3a", isTrixieInDogs)


    //Opgave 3b
    let isBaxterInDogs = dogsArray.includes("Baxter")
    console.log("Opgave 3b", isBaxterInDogs)


    //Opgave 4a
    let findBageera = catsArray.find(cat => cat === "Bagheera") /* Hvis "Bagheera" findes i catsArray, vil den blive udskrevet i konsollen, ellers vil undefined blive vist. */
    console.log("Opgave 4a", findBageera)


    //Opgave 4b
    let findSalem = catsArray.find(cat => cat === "Salem")
    console.log("Opgave 4b", findSalem)


    //Opgave 5
    let multipliedNumbers = numbersArray.map(number => number * 3); /* .map() itererer over hvert element i numbersArray.
    Den udfører en funktion på hvert element (i dette tilfælde ganges tallet med 3).
    Den returnerer et nyt array med de ændrede værdier, men ændrer ikke det originale array. */
    console.log("Opgave 5", multipliedNumbers)

    //Opgave 6
    let dogLine = dogsArray.join(""); // Samler alle hundenes navne uden mellemrum
    console.log("Opgave 6", dogLine)

}) // ends DOMContentLoaded