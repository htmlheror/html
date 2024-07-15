let optionCount = 2;

function addOption() {
  optionCount++;
  const optionsContainer = document.getElementById('optionsContainer');
  const newOption = document.createElement('div');
  newOption.innerHTML = `<label for="option${optionCount}">Option ${optionCount}:</label><br>
  <input type="text" id="option${optionCount}" name="option${optionCount}" required><br>`;
  optionsContainer.appendChild(newOption);
}

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
  
  const quizHTML = `
<div class="quiz-container">
  <div class="question">
    <p>${question}</p>
  </div>
  <div class="options">
    ${optionsHTML}
  </div>
  <button class="submit-btn" onclick="checkAnswer(${correctOption})">Submit Answer</button>
</div>
<script>
function checkAnswer(correctOption) {
  const options = document.getElementsByName('option');
  let selectedOption = -1;
  
  for (let i = 0; i < options.length; i++) {
    if (options[i].checked) {
      selectedOption = parseInt(options[i].value);
      break;
    }
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
