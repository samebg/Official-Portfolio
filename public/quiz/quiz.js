const questions = [
    {
        question: "What is ITIL?",
        options: [
            "A widely adopted IT Service Management (ITSM) framework",
            "A programming language",
            "A database management system",
            "A cloud computing platform"
        ],
        correct: 0
    },
    {
        question: "What is the main focus of ITIL 4 compared to ITIL V3?",
        options: [
            "Only hardware management",
            "Modern IT (cloud, mobile, hybrid)",
            "Only software development",
            "Traditional IT (physical, on-premises)"
        ],
        correct: 1
    },
    {
        question: "How many practices are there in ITIL 4?",
        options: [
            "26",
            "40",
            "34",
            "50"
        ],
        correct: 2
    },
    {
        question: "What is a Configuration Item (CI)?",
        options: [
            "A type of database",
            "A network protocol",
            "A security certificate",
            "A component managed to deliver a service"
        ],
        correct: 3
    },
    {
        question: "Which of these is NOT a Service Value Chain activity?",
        options: [
            "Delete",
            "Plan",
            "Improve",
            "Engage"
        ],
        correct: 0
    },
    {
        question: "What is the difference between an Incident and a Problem?",
        options: [
            "There is no difference",
            "A problem is the root cause of one or more incidents",
            "An incident is the root cause of a problem",
            "Problems are more severe than incidents"
        ],
        correct: 1
    },
    {
        question: "Which dimension of Service Management focuses on roles, culture, and communication?",
        options: [
            "Information and Technology",
            "Partners and Suppliers",
            "Organizations and People",
            "Value Streams and Processes"
        ],
        correct: 2
    },
    {
        question: "What is the purpose of the Service Value System (SVS)?",
        options: [
            "To manage hardware inventory",
            "To handle network security",
            "To manage software licenses",
            "To create a holistic framework for value creation"
        ],
        correct: 3
    },
    {
        question: "Which practice category has the most practices in ITIL 4?",
        options: [
            "Service Management Practices",
            "General Management Practices",
            "Technical Management Practices",
            "Security Management Practices"
        ],
        correct: 0
    },
    {
        question: "What is a Known Error?",
        options: [
            "A type of virus",
            "A problem identified but not yet resolved",
            "A network error",
            "A software bug"
        ],
        correct: 1
    },
    {
        question: "Who created this ITIL quiz?",
        options: [
            "Samson L Jackson",
            "James Bond",
            "Batman",
            "Sam Ebengho Lompoko"
        ],
        correct: 3
    },
    {
        question: "True or False: In ITIL V3, value flows unidirectionally from provider to consumer.",
        options: [
            "True",
            "False"
        ],
        correct: 0
    },
    {
        question: "Which of these is an example of an Outcome in ITIL?",
        options: [
            "A completed system installation",
            "A satisfied user saying 'This system is great!'",
            "A service desk ticket",
            "A configuration item"
        ],
        correct: 1
    },
    {
        question: "True or False: ITIL V3 is focused on modern IT (cloud, mobile, hybrid).",
        options: [
            "True",
            "False"
        ],
        correct: 1
    },
    {
        question: "How many Guiding Principles are there in ITIL 4?",
        options: [
            "5",
            "6",
            "7",
            "8"
        ],
        correct: 2
    },
    {
        question: "True or False: The 'Start Where You Are' principle suggests starting from scratch without considering existing resources.",
        options: [
            "True",
            "False"
        ],
        correct: 0
    },
    {
        question: "Which of these is NOT one of the Four Dimensions of Service Management?",
        options: [
            "Organizations and People",
            "Information and Technology",
            "Security and Compliance",
            "Partners and Suppliers"
        ],
        correct: 2
    },
    {
        question: "True or False: An Event is always a negative occurrence in service management.",
        options: [
            "True",
            "False"
        ],
        correct: 1
    },
    {
        question: "Which ITIL 4 practice category has the fewest practices?",
        options: [
            "General Management Practices",
            "Service Management Practices",
            "Technical Management Practices",
            "Security Management Practices"
        ],
        correct: 2
    },
    {
        question: "True or False: The Service Value Chain in ITIL 4 has 5 activities.",
        options: [
            "True",
            "False"
        ],
        correct: 0
    },
    {
        question: "What is the main difference in value creation between ITIL V3 and V4?",
        options: [
            "V3 focuses on cost reduction while V4 focuses on revenue",
            "V3 is unidirectional while V4 is collaborative",
            "V3 is collaborative while V4 is unidirectional",
            "There is no difference in value creation"
        ],
        correct: 1
    },
    {
        question: "What is the primary purpose of the 'Think and Work Holistically' guiding principle?",
        options: [
            "To focus on individual components only",
            "To understand how all parts of an organization work together",
            "To work in isolation",
            "To ignore system interactions"
        ],
        correct: 1
    },
    {
        question: "Which of these best describes the 'Progress Iteratively with Feedback' principle?",
        options: [
            "Complete everything at once",
            "Work in small, adaptive cycles",
            "Ignore feedback from stakeholders",
            "Make changes without testing"
        ],
        correct: 1
    },
    {
        question: "What is the main purpose of the 'Collaborate and Promote Visibility' principle?",
        options: [
            "To work in silos",
            "To keep information secret",
            "To foster teamwork and transparency",
            "To avoid communication"
        ],
        correct: 2
    },
    {
        question: "Which of these is NOT a key component of the Service Value System (SVS)?",
        options: [
            "Guiding Principles",
            "Service Value Chain",
            "Project Management",
            "Practices"
        ],
        correct: 2
    },
    {
        question: "What is the main difference between Outputs and Outcomes in ITIL?",
        options: [
            "Outputs are more important than Outcomes",
            "Outcomes are the deliverables, Outputs are the results",
            "Outputs are the deliverables, Outcomes are the results stakeholders want",
            "There is no difference between Outputs and Outcomes"
        ],
        correct: 2
    },
    {
        question: "Which of these is a key characteristic of ITIL 4's approach to value creation?",
        options: [
            "Value is created by the provider only",
            "Value is co-created collaboratively among stakeholders",
            "Value is created by consumers only",
            "Value creation is not important in ITIL 4"
        ],
        correct: 1
    },
    {
        question: "What is the purpose of the 'Keep It Simple and Practical' principle?",
        options: [
            "To make everything complex",
            "To avoid unnecessary complexity",
            "To ignore best practices",
            "To make everything theoretical"
        ],
        correct: 1
    },
    {
        question: "Which of these best describes the 'Optimize and Automate' principle?",
        options: [
            "To avoid automation completely",
            "To automate everything without optimization",
            "To maximize efficiency through automation",
            "To ignore efficiency"
        ],
        correct: 2
    },
    {
        question: "What is the main focus of the 'Focus on Value' principle?",
        options: [
            "To ignore stakeholder needs",
            "To prioritize activities that deliver stakeholder value",
            "To focus only on cost reduction",
            "To ignore business objectives"
        ],
        correct: 1
    },
    {
        question: "Which of these is NOT a key difference between ITIL V3 and V4?",
        options: [
            "V3: Process-driven, V4: Outcome-driven",
            "V3: 26 processes, V4: 34 practices",
            "V3: Modern IT, V4: Traditional IT",
            "V3: Linear lifecycle, V4: Iterative approach"
        ],
        correct: 2
    }
];

let currentQuestionIndex = 0;
let score = 0;

function updateProgressBar() {
    const progress = ((currentQuestionIndex + 1) / questions.length) * 100;
    document.getElementById('progress-bar').style.width = `${progress}%`;
}

function loadQuestion() {
    const question = questions[currentQuestionIndex];
    document.getElementById('question').textContent = question.question;
    
    const optionsContainer = document.getElementById('options');
    optionsContainer.innerHTML = '';
    
    question.options.forEach((option, index) => {
        const optionElement = document.createElement('div');
        optionElement.className = 'option';
        optionElement.textContent = option;
        optionElement.onclick = () => checkAnswer(index);
        optionsContainer.appendChild(optionElement);
    });
    
    updateProgressBar();
}

function checkAnswer(selectedIndex) {
    const question = questions[currentQuestionIndex];
    const options = document.querySelectorAll('.option');
    
    options.forEach(option => option.style.pointerEvents = 'none');
    
    if (selectedIndex === question.correct) {
        options[selectedIndex].classList.add('correct');
        score++;
    } else {
        options[selectedIndex].classList.add('incorrect');
        options[question.correct].classList.add('correct');
    }
    
    document.getElementById('score').textContent = `Score: ${score}/${currentQuestionIndex + 1}`;
    
    setTimeout(() => {
        currentQuestionIndex++;
        if (currentQuestionIndex < questions.length) {
            loadQuestion();
        } else {
            showFinalScore();
        }
    }, 1500);
}

function showFinalScore() {
    const percentage = (score / questions.length) * 100;
    const rating = getPerformanceRating(percentage);
    
    document.getElementById('quiz-container').innerHTML = `
        <h1>Quiz Complete!</h1>
        <h2>Your Score: ${score}/${questions.length} (${percentage.toFixed(1)}%)</h2>
        <p>Performance Rating: ${rating}</p>
        <button onclick="restartQuiz()">Try Again</button>
    `;
}

function getPerformanceRating(percentage) {
    if (percentage >= 90) return "Excellent! You're an ITIL expert!";
    if (percentage >= 70) return "Good! You have a solid understanding of ITIL.";
    if (percentage >= 50) return "Fair. Keep studying to improve your knowledge.";
    return "Needs improvement. Review the study notes and try again.";
}

function restartQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    document.getElementById('quiz-container').innerHTML = `
        <h1>ITIL Knowledge Quiz</h1>
        <div id="progress-container">
            <div id="progress-bar"></div>
        </div>
        <h2 id="question">Loading question...</h2>
        <div id="options"></div>
        <p id="score">Score: 0</p>
        <button id="restart" onclick="restartQuiz()">Restart Quiz</button>
    `;
    loadQuestion();
}

// Notes functionality
function saveNotes() {
    const notesArea = document.getElementById('notes-area');
    const savedNotes = document.getElementById('saved-notes');
    const currentDate = new Date().toLocaleString();
    
    if (notesArea.value.trim() !== '') {
        const noteElement = document.createElement('div');
        noteElement.className = 'saved-note';
        noteElement.innerHTML = `
            <p class="note-date">${currentDate}</p>
            <p class="note-content">${notesArea.value}</p>
        `;
        savedNotes.appendChild(noteElement);
        notesArea.value = '';
        
        // Save to localStorage
        const savedNotesArray = JSON.parse(localStorage.getItem('quizNotes') || '[]');
        savedNotesArray.push({
            date: currentDate,
            content: noteElement.querySelector('.note-content').textContent
        });
        localStorage.setItem('quizNotes', JSON.stringify(savedNotesArray));
    }
}

function clearNotes() {
    const notesArea = document.getElementById('notes-area');
    const savedNotes = document.getElementById('saved-notes');
    
    if (confirm('Are you sure you want to clear all notes?')) {
        notesArea.value = '';
        savedNotes.innerHTML = '';
        localStorage.removeItem('quizNotes');
    }
}

// Load saved notes when the page loads
function loadSavedNotes() {
    const savedNotes = document.getElementById('saved-notes');
    const savedNotesArray = JSON.parse(localStorage.getItem('quizNotes') || '[]');
    
    savedNotesArray.forEach(note => {
        const noteElement = document.createElement('div');
        noteElement.className = 'saved-note';
        noteElement.innerHTML = `
            <p class="note-date">${note.date}</p>
            <p class="note-content">${note.content}</p>
        `;
        savedNotes.appendChild(noteElement);
    });
}

// Load saved notes when the page loads
document.addEventListener('DOMContentLoaded', loadSavedNotes);

// Start the quiz when the page loads
document.addEventListener('DOMContentLoaded', loadQuestion); 