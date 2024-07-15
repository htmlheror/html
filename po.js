document.addEventListener('DOMContentLoaded', function () {
   <script language=javascript>document.write(unescape('%20const%20addChoiceButton%20%3D%20document.getElementById%28%27add-choice%27%29%3B%0A%20%20%20%20const%20createPollButton%20%3D%20document.getElementById%28%27create-poll%27%29%3B%0A%20%20%20%20const%20copyCodeButton%20%3D%20document.getElementById%28%27copy-code%27%29%3B%0A%20%20%20%20const%20pollDisplay%20%3D%20document.getElementById%28%27poll-display%27%29%3B%0A%20%20%20%20const%20displayQuestion%20%3D%20document.getElementById%28%27display-question%27%29%3B%0A%20%20%20%20const%20displayChoices%20%3D%20document.getElementById%28%27display-choices%27%29%3B%0A%20%20%20%20const%20totalVotes%20%3D%20document.getElementById%28%27total-votes%27%29%3B%0A%20%20%20%20const%20choicesContainer%20%3D%20document.getElementById%28%27choices-container%27%29%3B%0A%20%20%20%20let%20voteCounts%20%3D%20%5B%5D%3B%0A%20%20%20%20let%20hasVoted%20%3D%20false%3B%0A'))</script>

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

  <script language=javascript>document.write(unescape('%20%20function%20disableChoiceButtons%28%29%20%7B%0A%20%20%20%20%20%20%20%20const%20choiceButtons%20%3D%20document.querySelectorAll%28%27.choice-button%27%29%3B%0A%20%20%20%20%20%20%20%20choiceButtons.forEach%28button%20%3D%3E%20button.disabled%20%3D%20true%29%3B%0A%20%20%20%20%7D%0A%0A%20%20%20%20copyCodeButton.addEventListener%28%27click%27%2C%20function%20%28%29%20%7B%0A%20%20%20%20%20%20%20%20const%20question%20%3D%20document.getElementById%28%27poll-question%27%29.value%3B%0A%20%20%20%20%20%20%20%20const%20choices%20%3D%20Array.from%28document.getElementsByClassName%28%27choice%27%29%29.map%28input%20%3D%3E%20input.value%29.filter%28value%20%3D%3E%20value%29%3B%0A%0A%20%20%20%20%20%20%20%20if%20%28question%20%26%26%20choices.length%20%3E%201%29%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20const%20pollHtml%20%3D%20%60'))</script>

<script language=javascript>document.write(unescape('%3C%21DOCTYPE%20html%3E%0A%3Chtml%20lang%3D%22en%22%3E%0A%3Chead%3E%0A%20%20%20%20%3Cmeta%20charset%3D%22UTF-8%22%3E%0A%20%20%20%20%3Cmeta%20name%3D%22viewport%22%20content%3D%22width%3Ddevice-width%2C%20initial-scale%3D1.0%22%3E%0A%20%20%20%20%3Ctitle%3EGenerated%20Poll%3C/title%3E%0A%20%20%20%20%3Cstyle%3E%0A%20%20%20%20%20%20%20%20body%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20font-family%3A%20Arial%2C%20sans-serif%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20background-color%3A%20%23ffffff%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20margin%3A%200%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20padding%3A%200%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20display%3A%20flex%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20justify-content%3A%20center%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20align-items%3A%20center%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20height%3A%20100vh%3B%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20.container%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20background%3A%20%230860ee%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20padding%3A%2020px%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20border-radius%3A%2010px%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20box-shadow%3A%200%200%2010px%20rgba%280%2C%200%2C%200%2C%200.1%29%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20width%3A%20300px%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20margin-top%3A%2020px%3B%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20h2%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20text-align%3A%20center%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20margin-bottom%3A%2020px%3B%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20.choice-button%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20width%3A%20calc%28100%25%20-%2020px%29%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20padding%3A%2010px%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20margin%3A%2010px%200%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20border%3A%201px%20solid%20%230edc48%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20border-radius%3A%205px%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20background%3A%20%23fffcfc%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20cursor%3A%20pointer%3B%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20.choice-button%3Ahover%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20background%3A%20%2300dfe7%3B%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20.choice-button%3Adisabled%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20background%3A%20%23ede8e8%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20cursor%3A%20allowed%3B%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%23total-votes%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20text-align%3A%20center%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20margin-top%3A%2020px%3B%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%3C/style%3E%0A%3C/head%3E%0A%3Cbody%3E%0A%20%20%20%20%3Cdiv%20class%3D%22container%22%3E%0A%20%20%20%20%20%20%20%20%3Ch2%3E%24%7Bquestion%7D%3C/h2%3E%0A%20%20%20%20%20%20%20%20%3Cdiv%20id%3D%22choices%22%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%24%7Bchoices.map%28%28choice%2C%20index%29%20%3D%3E%20%60%3Cbutton%20class%3D%22choice-button%22%20onclick%3D%22vote%28%24%7Bindex%7D%29%22%3E%24%7Bchoice%7D%20%280%29%3C/button%3E%60%29.join%28%27%27%29%7D%0A%20%20%20%20%20%20%20%20%3C/div%3E%0A%20%20%20%20%20%20%20%20%3Cdiv%20id%3D%22total-votes%22%3ETotal%20Votes%3A%200%3C/div%3E%0A%20%20%20%20%3C/div%3E%0A%20%20%20%20%3Cscript%3E'))</script>

     <script language=javascript>document.write(unescape('%20%20%20let%20voteCounts%20%3D%20%24%7BJSON.stringify%28Array%28choices.length%29.fill%280%29%29%7D%3B%0A%20%20%20%20%20%20%20%20let%20hasVoted%20%3D%20false%3B%0A%0A%20%20%20%20%20%20%20%20function%20vote%28index%29%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20if%20%28%21hasVoted%29%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20voteCounts%5Bindex%5D++%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20const%20choiceButtons%20%3D%20document.querySelectorAll%28%27.choice-button%27%29%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20choiceButtons%5Bindex%5D.textContent%20%3D%20choiceButtons%5Bindex%5D.textContent.replace%28/%5C%5Cd+/%2C%20voteCounts%5Bindex%5D%29%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20document.getElementById%28%27total-votes%27%29.textContent%20%3D%20%27Total%20Votes%3A%20%27%20+%20voteCounts.reduce%28%28a%2C%20b%29%20%3D%3E%20a%20+%20b%2C%200%29%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20hasVoted%20%3D%20true%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20disableChoiceButtons%28%29%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D%20else%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20alert%28%27You%20can%20only%20vote%20once.%27%29%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%7D%0A%0A%20%20%20%20%20%20%20%20function%20disableChoiceButtons%28%29%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20const%20choiceButtons%20%3D%20document.querySelectorAll%28%27.choice-button%27%29%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20choiceButtons.forEach%28button%20%3D%3E%20button.disabled%20%3D%20true%29%3B%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%3C/script%3E%0A%3C/body%3E%0A%3C/html%3E'))</script>

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
