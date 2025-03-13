const quizData = [
    {
        question: "What is the purpose of Event Management in ITIL 4?",
        options: [
            "To restore service as quickly as possible",
            "To systematically detect and respond to service events",
            "To manage user access rights",
            "To monitor customer satisfaction"
        ],
        answer: "To systematically detect and respond to service events"
    },
    {
        question: "Which ITIL 4 practice aims to minimize business disruption caused by incidents?",
        options: [
            "Problem Management",
            "Incident Management",
            "Change Enablement",
            "Access Management"
        ],
        answer: "Incident Management"
    },
    {
        question: "What is a key focus of the 'Focus on Value' guiding principle in ITIL 4?",
        options: [
            "Maximizing profit for the organization",
            "Creating value for all stakeholders",
            "Reducing operational costs",
            "Implementing new technologies"
        ],
        answer: "Creating value for all stakeholders"
    },
    {
        question: "Which component of the ITIL 4 Service Value System provides the framework for all forms of contribution to value co-creation?",
        options: [
            "Guiding Principles",
            "Governance",
            "Service Value Chain",
            "Practices"
        ],
        answer: "Service Value Chain"
    },
    {
        question: "What is the primary purpose of Problem Management in ITIL 4?",
        options: [
            "To resolve incidents quickly",
            "To reduce the likelihood and impact of incidents by identifying actual and potential causes",
            "To manage changes in the organization",
            "To handle service requests"
        ],
        answer: "To reduce the likelihood and impact of incidents by identifying actual and potential causes"
    },
    {
        question: "Which ITIL 4 practice ensures that services achieve agreed and expected performance?",
        options: [
            "Service Level Management",
            "Capacity Management",
            "Availability Management",
            "Performance Management"
        ],
        answer: "Service Level Management"
    },
    {
        question: "What is the purpose of the 'Progress iteratively with feedback' guiding principle in ITIL 4?",
        options: [
            "To complete projects as quickly as possible",
            "To organize work into smaller, manageable sections that can be executed and improved upon",
            "To avoid making any changes to existing processes",
            "To implement all changes simultaneously"
        ],
        answer: "To organize work into smaller, manageable sections that can be executed and improved upon"
    },
    {
        question: "Which ITIL 4 practice focuses on moving new or changed hardware, software, documentation, processes, or any other component to live environments?",
        options: [
            "Change Control",
            "Release Management",
            "Deployment Management",
            "Transition Management"
        ],
        answer: "Release Management"
    },
    {
        question: "What is the main purpose of the Service Desk practice in ITIL 4?",
        options: [
            "To be the point of communication between the service provider and all its users",
            "To manage technical infrastructure",
            "To implement changes in the organization",
            "To develop new services"
        ],
        answer: "To be the point of communication between the service provider and all its users"
    },
    {
        question: "Which of the following is a key component of the 'Think and work holistically' principle in ITIL 4?",
        options: [
            "Working in silos",
            "Focusing on individual components only",
            "Understanding how all the parts of an organization work together in an integrated way",
            "Implementing changes without considering their impact"
        ],
        answer: "Understanding how all the parts of an organization work together in an integrated way"
    }
];

let currentQuestionIndex = 0;
let score = 0;

function updateProgressBar() {
    const progress = (currentQuestionIndex / quizData.length) * 100;
    document.getElementById("progress-bar").style.width = `${progress}%`;
}

function loadQuestion() {
    const currentQuestion = quizData[currentQuestionIndex];
    document.getElementById("question").textContent = currentQuestion.question;
    const optionsContainer = document.getElementById("options");
    optionsContainer.innerHTML = "";
    
    currentQuestion.options.forEach(option => {
        const button = document.createElement("button");
        button.textContent = option;
        button.classList.add("option");
        button.onclick = () => checkAnswer(option, button);
        optionsContainer.appendChild(button);
    });
    
    updateProgressBar();
}

function checkAnswer(selectedOption, selectedButton) {
    const correctAnswer = quizData[currentQuestionIndex].answer;
    const options = document.querySelectorAll('.option');
    
    // Disable all options after selection
    options.forEach(option => {
        option.disabled = true;
        option.style.cursor = 'default';
    });
    
    if (selectedOption === correctAnswer) {
        score++;
        selectedButton.classList.add('correct');
    } else {
        selectedButton.classList.add('incorrect');
        // Highlight the correct answer
        options.forEach(option => {
            if (option.textContent === correctAnswer) {
                option.classList.add('correct');
            }
        });
    }
    
    document.getElementById("score").textContent = `Score: ${score}`;
    
    setTimeout(() => {
        currentQuestionIndex++;
        if (currentQuestionIndex < quizData.length) {
            loadQuestion();
        } else {
            showFinalScore();
        }
    }, 1500);
}

function showFinalScore() {
    const percentage = (score / quizData.length) * 100;
    const container = document.getElementById("quiz-container");
    container.innerHTML = `
        <h2>Quiz Completed!</h2>
        <p id="score">Final Score: ${score}/${quizData.length} (${percentage.toFixed(1)}%)</p>
        <p>Performance Rating: ${getPerformanceRating(percentage)}</p>
        <button id="restart" onclick="restartQuiz()" style="display: block">Restart Quiz</button>
    `;
}

function getPerformanceRating(percentage) {
    if (percentage >= 90) return "Outstanding! ITIL Expert Level";
    if (percentage >= 80) return "Excellent! ITIL Professional Level";
    if (percentage >= 70) return "Good! ITIL Intermediate Level";
    if (percentage >= 60) return "Fair! ITIL Foundation Level";
    return "Need more practice with ITIL concepts";
}

function restartQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    document.getElementById("quiz-container").innerHTML = `
        <h1>ITIL Knowledge Quiz</h1>
        <div id="progress-container">
            <div id="progress-bar"></div>
        </div>
        <h2 id="question">Loading question...</h2>
        <div id="options"></div>
        <p id="score">Score: 0</p>
        <button id="restart" onclick="restartQuiz()" style="display: none">Restart Quiz</button>
    `;
    loadQuestion();
}

// Start the quiz when the page loads
loadQuestion(); 