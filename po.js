document.addEventListener('DOMContentLoaded', function () {
    const addChoiceButton = document.getElementById('add-choice');
    const createPollButton = document.getElementById('create-poll');
    const copyCodeButton = document.getElementById('copy-code');
    const pollDisplay = document.getElementById('poll-display');
    const displayQuestion = document.getElementById('display-question');
    const displayChoices = document.getElementById('display-choices');
    const totalVotes = document.getElementById('total-votes');
    const choicesContainer = document.getElementById('choices-container');
    let voteCounts = [];
    let hasVoted = false;

    addChoiceButton.addEventListener('click', function () {
        const choiceItem = document.createElement('div');
        choiceItem.className = 'choice-item';

        const choiceInput = document.createElement('input');
        choiceInput.type = 'text';
        choiceInput.className = 'choice';
        choiceInput.placeholder = `Choice ${choicesContainer.children.length + 1}`;

        const removeChoiceButton = document.createElement('button');
        removeChoiceButton.className = 'remove-choice';
        removeChoiceButton.textContent = 'Remove';
        removeChoiceButton.addEventListener('click', function () {
            choicesContainer.removeChild(choiceItem);
        });

        choiceItem.appendChild(choiceInput);
        choiceItem.appendChild(removeChoiceButton);
        choicesContainer.appendChild(choiceItem);
    });

    createPollButton.addEventListener('click', function () {
        const question = document.getElementById('poll-question').value;
        const choices = Array.from(document.getElementsByClassName('choice')).map(input => input.value).filter(value => value);

        if (question && choices.length > 1) {
            voteCounts = Array(choices.length).fill(0);
            hasVoted = false;
            displayQuestion.textContent = question;
            displayChoices.innerHTML = '';
            totalVotes.textContent = 'Total Votes: 0';

            choices.forEach((choice, index) => {
                const choiceButton = document.createElement('button');
                choiceButton.className = 'choice-button';
                choiceButton.textContent = `${choice} (0)`;
                choiceButton.addEventListener('click', function () {
                    if (!hasVoted) {
                        voteCounts[index]++;
                        choiceButton.textContent = `${choice} (${voteCounts[index]})`;
                        totalVotes.textContent = `Total Votes: ${voteCounts.reduce((a, b) => a + b, 0)}`;
                        hasVoted = true;
                        disableChoiceButtons();
                    } else {
                        alert('You can only vote once.');
                    }
                });
                displayChoices.appendChild(choiceButton);
            });

            pollDisplay.style.display = 'block';
        } else {
            alert('Please enter a question and at least two choices.');
        }
    });

    function disableChoiceButtons() {
        const choiceButtons = document.querySelectorAll('.choice-button');
        choiceButtons.forEach(button => button.disabled = true);
    }

    copyCodeButton.addEventListener('click', function () {
        const question = document.getElementById('poll-question').value;
        const choices = Array.from(document.getElementsByClassName('choice')).map(input => input.value).filter(value => value);

        if (question && choices.length > 1) {
            const pollHtml = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Generated Poll</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            background-color: #ffffff;
            margin: 0;
            padding: 0;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
        }
        .container {
            background: #0860ee;
            padding: 20px;
            border-radius: 10px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
            width: 300px;
            margin-top: 20px;
        }
        h2 {
            text-align: center;
            margin-bottom: 20px;
        }
        .choice-button {
            width: calc(100% - 20px);
            padding: 10px;
            margin: 10px 0;
            border: 1px solid #0edc48;
            border-radius: 5px;
            background: #fffcfc;
            cursor: pointer;
        }
        .choice-button:hover {
            background: #00dfe7;
        }
        .choice-button:disabled {
            background: #ede8e8;
            cursor: allowed;
        }
        #total-votes {
            text-align: center;
            margin-top: 20px;
        }
    </style>
</head>
<body>
    <div class="container">
        <h2>${question}</h2>
        <div id="choices">
            ${choices.map((choice, index) => `<button class="choice-button" onclick="vote(${index})">${choice} (0)</button>`).join('')}
        </div>
        <div id="total-votes">Total Votes: 0</div>
    </div>
    <script>
        let voteCounts = ${JSON.stringify(Array(choices.length).fill(0))};
        let hasVoted = false;

        function vote(index) {
            if (!hasVoted) {
                voteCounts[index]++;
                const choiceButtons = document.querySelectorAll('.choice-button');
                choiceButtons[index].textContent = choiceButtons[index].textContent.replace(/\\d+/, voteCounts[index]);
                document.getElementById('total-votes').textContent = 'Total Votes: ' + voteCounts.reduce((a, b) => a + b, 0);
                hasVoted = true;
                disableChoiceButtons();
            } else {
                alert('You can only vote once.');
            }
        }

        function disableChoiceButtons() {
            const choiceButtons = document.querySelectorAll('.choice-button');
            choiceButtons.forEach(button => button.disabled = true);
        }
    </script>
</body>
</html>
            `;

            navigator.clipboard.writeText(pollHtml).then(() => {
                alert('Poll code copied to clipboard!');
            }).catch(err => {
                alert('Failed to copy text: ' + err);
            });
        } else {
            alert('Please enter a question and at least two choices.');
        }
    });

    choicesContainer.addEventListener('click', function (event) {
        if (event.target.classList.contains('remove-choice')) {
            choicesContainer.removeChild(event.target.parentElement);
        }
    });
});
