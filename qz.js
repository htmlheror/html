<script language=javascript>document.write(unescape('let%20optionCount%20%3D%202%3B%0A%0Afunction%20addOption%28%29%20%7B%0A%20%20optionCount++%3B%0A%20%20const%20optionsContainer%20%3D%20document.getElementById%28%27optionsContainer%27%29%3B%0A%20%20const%20newOption%20%3D%20document.createElement%28%27div%27%29%3B%0A%20%20newOption.innerHTML%20%3D%20%60%3Clabel%20for%3D%22option%24%7BoptionCount%7D%22%3EOption%20%24%7BoptionCount%7D%3A%3C/label%3E%3Cbr%3E%0A%20%20%3Cinput%20type%3D%22text%22%20id%3D%22option%24%7BoptionCount%7D%22%20name%3D%22option%24%7BoptionCount%7D%22%20required%3E%3Cbr%3E%60%3B%0A%20%20optionsContainer.appendChild%28newOption%29%3B%0A%7D%0A'))</script>

function removeOption() {
  if (optionCount > 2) {
    const optionsContainer = document.getElementById('optionsContainer');
    optionsContainer.removeChild(optionsContainer.lastElementChild);
    optionCount--;
  }
}

function generateQuiz() {
  const question = document.getElementById('question').value;
  const correctOption = parseInt(document.getElementById('correctOption').value);
  let optionsHTML = '';
  for (let i = 1; i <= optionCount; i++) {
    const optionValue = document.getElementById(`option${i}`).value;
    optionsHTML += `
    <input type="radio" id="opt${i}" name="option" value="${i}">
    <label for="opt${i}">${optionValue}</label><br>`;
  }
  
 <script language=javascript>document.write(unescape('%20const%20quizHTML%20%3D%20%60%0A%3Cdiv%20class%3D%22quiz-container%22%3E%0A%20%20%3Cdiv%20class%3D%22question%22%3E%0A%20%20%20%20%3Cp%3E%24%7Bquestion%7D%3C/p%3E%0A%20%20%3C/div%3E%0A%20%20%3Cdiv%20class%3D%22options%22%3E%0A%20%20%20%20%24%7BoptionsHTML%7D%0A%20%20%3C/div%3E%0A%20%20%3Cbutton%20class%3D%22submit-btn%22%20onclick%3D%22checkAnswer%28%24%7BcorrectOption%7D%29%22%3ESubmit%20Answer%3C/button%3E%0A%3C/div%3E%0A%3Cscript%3E%0Afunction%20checkAnswer%28correctOption%29%20%7B%0A%20%20const%20options%20%3D%20document.getElementsByName%28%27option%27%29%3B%0A%20%20let%20selectedOption%20%3D%20-1%3B%0A%20%20%0A%20%20for%20%28let%20i%20%3D%200%3B%20i%20%3C%20options.length%3B%20i++%29%20%7B%0A%20%20%20%20if%20%28options%5Bi%5D.checked%29%20%7B%0A%20%20%20%20%20%20selectedOption%20%3D%20parseInt%28options%5Bi%5D.value%29%3B%0A%20%20%20%20%20%20break%3B%0A%20%20%20%20%7D'))</script>

  }
  
  if (selectedOption === correctOption) {
    alert('Congratulations! Your answer is correct.');
  } else {
    alert('Oops! Incorrect answer. The correct option is ' + correctOption + '.');
  }
}
<\/script>`;

  document.getElementById('quizHTML').value = quizHTML;
}

function copyHTML() {
  const copyText = document.getElementById("quizHTML");
  copyText.select();
  copyText.setSelectionRange(0, 99999);
  document.execCommand("copy");
  alert("HTML copied to clipboard!");
}



function resetForm() {
  document.getElementById('quizForm').reset();
  document.getElementById('quizHTML').value = '';
  document.getElementById('quizContainer').innerHTML = '';
  const optionsContainer = document.getElementById('optionsContainer');
  while (optionsContainer.children.length > 2) {
    optionsContainer.removeChild(optionsContainer.lastElementChild);
  }
  optionCount = 2;
}
