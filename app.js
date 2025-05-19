// Английский алфавит
let enUpper = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
let enLower = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
let enLength = enUpper.length;

// Русский алфавит (33 буквы)
let ruUpper = ['А','Б','В','Г','Д','Е','Ё','Ж','З','И','Й','К','Л','М','Н','О','П','Р','С','Т','У','Ф','Х','Ц','Ч','Ш','Щ','Ъ','Ы','Ь','Э','Ю','Я'];
let ruLower = ['а','б','в','г','д','е','ё','ж','з','и','й','к','л','м','н','о','п','р','с','т','у','ф','х','ц','ч','ш','щ','ъ','ы','ь','э','ю','я'];
let ruLength = ruUpper.length;

// Функция для поиска символа в массиве
function findCharIndex(char, array) {
  for (let i = 0; i < array.length; i++) {
    if (char === array[i]) return i;
  }
  return -1;
}

// Показ алфавитов
let displayText = "";

// Английский алфавит
displayText += '<div class="alphabet-section"><strong>Английский алфавит:</strong> ';
for (let i = 0; i < enLength; i++) {
  displayText += enUpper[i] + enLower[i] + " ";
}
displayText += '</div>';

// Русский алфавит
displayText += '<div class="alphabet-section"><strong>Русский алфавит:</strong> ';
for (let i = 0; i < ruLength; i++) {
  displayText += ruUpper[i] + ruLower[i] + " ";
}
displayText += '</div>';



document.getElementById("alphabetDisplay").innerHTML = displayText;

// Обработка ROT13
document.getElementById("inputText").addEventListener("input", function() {
  let input = this.value;
  let output = "";

  for (let i = 0; i < input.length; i++) {
    let ch = input[i];
    let newChar = ch;

    // Английские буквы
    let enUpperIndex = findCharIndex(ch, enUpper);
    if (enUpperIndex !== -1) {
      newChar = enUpper[(enUpperIndex + 13) % enLength];
    } else {
      let enLowerIndex = findCharIndex(ch, enLower);
      if (enLowerIndex !== -1) {
        newChar = enLower[(enLowerIndex + 13) % enLength];
      } else {
        // Русские буквы
        let ruUpperIndex = findCharIndex(ch, ruUpper);
        if (ruUpperIndex !== -1) {
          newChar = ruUpper[(ruUpperIndex + 13) % ruLength];
        } else {
          let ruLowerIndex = findCharIndex(ch, ruLower);
          if (ruLowerIndex !== -1) {
            newChar = ruLower[(ruLowerIndex + 13) % ruLength];
          }
        }
      }
    }

    output += newChar;
  }

  document.getElementById("outputText").textContent = output;
});