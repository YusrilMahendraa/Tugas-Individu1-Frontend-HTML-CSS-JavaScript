let poin = 0;
let jawabanBenar;
let answeredQuestions = {}; // To track answered questions and the selected answers

document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('baku').addEventListener('click', function() {
        cekJawaban('baku');
    });

    document.getElementById('tidakBaku').addEventListener('click', function() {
        cekJawaban('tidakBaku');
    });

    gantiSoal(1); // Start with the first question
});

function gantiSoal(idSoal) {
    // Check if this question has been answered before
    if (answeredQuestions[idSoal]) {
        // If answered, disable buttons and update the score without showing the question again
        document.getElementById('poin').innerText = `${poin}`;
        disableButtons(); // Disable buttons since it's already answered
        // Set button background color based on previous answer
        setButtonColor(idSoal, answeredQuestions[idSoal] === jawabanBenar);
    } else {
        // Display the question and enable buttons for unanswered questions
        let newSoal;
        if (idSoal === 1) {
            newSoal = 'Kedaluarsa';
            jawabanBenar = 'tidakBaku';
        } else if (idSoal === 2) {
            newSoal = 'Junior';
            jawabanBenar = 'baku';
        } else if (idSoal === 3) {
            newSoal = 'Obyek';
            jawabanBenar = 'tidakBaku';
        } else if (idSoal === 4) {
            newSoal = 'Sekedar';
            jawabanBenar = 'tidakBaku';
        } else if (idSoal === 5) {
            newSoal = 'Seksama';
            jawabanBenar = 'tidakBaku';
        } else if (idSoal === 6) {
            newSoal = 'Indra';
            jawabanBenar = 'baku';
        } else if (idSoal === 7) {
            newSoal = 'Cidera';
            jawabanBenar = 'tidakBaku';
        } else if (idSoal === 8) {
            newSoal = 'Ijasah';
            jawabanBenar = 'tidakBaku';
        } else if (idSoal === 9) {
            newSoal = 'Manajemen';
            jawabanBenar = 'baku';
        } else if (idSoal === 10) {
            newSoal = 'Coklat';
            jawabanBenar = 'tidakBaku';
        } else if (idSoal === 11) {
            newSoal = 'Apotik';
            jawabanBenar = 'tidakBaku';
        }
        else if (idSoal === 12) {
            newSoal = 'Antre';
            jawabanBenar = 'baku';
        }
        else if (idSoal === 13) {
            newSoal = 'Desain';
            jawabanBenar = 'baku';
        }
        else if (idSoal === 14) {
            newSoal = 'Lembap';
            jawabanBenar = 'baku';
        }
        else if (idSoal === 15) {
            newSoal = 'Respons';
            jawabanBenar = 'baku';
        }
        else if (idSoal === 16) {
            newSoal = 'Bis';
            jawabanBenar = 'tidakBaku';
        }
        else if (idSoal === 17) {
            newSoal = 'Teknologi';
            jawabanBenar = 'baku';
        }
        else if (idSoal === 18) {
            newSoal = 'Detil';
            jawabanBenar = 'tidakBaku';
        }
        else if (idSoal === 19) {
            newSoal = 'Capek';
            jawabanBenar = 'tidakBaku';
        }
        else if (idSoal === 20) {
            newSoal = 'Diagnosa';
            jawabanBenar = 'tidakBaku';
        }

        // Update the question text for unanswered questions
        document.getElementById('soalSoal').innerText = newSoal;
        enableButtons(); // Enable buttons for new questions
    }
}

function cekJawaban(selectedJawaban) {
    const currentSoal = document.getElementById('soalSoal').innerText;
    let currentSoalId = getSoalIdByText(currentSoal);

    // If the question hasn't been answered yet
    if (!answeredQuestions[currentSoalId]) {
        // Check if the answer is correct
        const isCorrect = selectedJawaban === jawabanBenar;
        if (isCorrect) {
            poin += 5;
        }

        // Store the user's answer
        answeredQuestions[currentSoalId] = selectedJawaban;

        // Update the score display
        document.getElementById('poin').innerText = `${poin}`;

        // Disable buttons after an answer is selected
        disableButtons();

        // Set button background color based on whether the answer is correct or not
        setButtonColor(currentSoalId, isCorrect);
    }
}

function disableButtons() {
    document.getElementById('baku').disabled = true;
    document.getElementById('tidakBaku').disabled = true;
}

function enableButtons() {
    document.getElementById('baku').disabled = false;
    document.getElementById('tidakBaku').disabled = false;
}

// Function to set the background color of the button based on the answer
function setButtonColor(idSoal, isCorrect) {
    const button = document.getElementById(idSoal); // Get the button by ID
    if (isCorrect) {
        button.style.backgroundColor = 'green'; // Green for correct answer
    } else {
        button.style.backgroundColor = 'red'; // Red for incorrect answer
    }
}

// Helper function to get the question ID based on its text
function getSoalIdByText(soalText) {
    switch(soalText) {
        case 'Kedaluarsa': return 1;
        case 'Junior': return 2;
        case 'Obyek': return 3;
        case 'Sekedar': return 4;
        case 'Seksama': return 5;
        case 'Indra': return 6;
        case 'Cidera': return 7;
        case 'Ijasah': return 8;
        case 'Manajemen': return 9;
        case 'Coklat': return 10;
        case 'Apotik': return 11;
        case 'Antre': return 12;
        case 'Desain': return 13;
        case 'Lembap': return 14;
        case 'Respons': return 15;
        case 'Bis': return 16;
        case 'Teknologi': return 17;
        case 'Detil': return 18;
        case 'Capek': return 19;
        case 'Diagnosa': return 20;
        default: return null;
    }
}
