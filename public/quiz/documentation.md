# ITIL Quiz Application Documentation

## Table of Contents
1. [Project Overview](#project-overview)
2. [File Structure](#file-structure)
3. [HTML Implementation](#html-implementation)
4. [CSS Styling](#css-styling)
5. [JavaScript Functionality](#javascript-functionality)
6. [Quiz Features](#quiz-features)

## Project Overview

This project is an interactive ITIL (Information Technology Infrastructure Library) quiz application built using HTML, CSS, and JavaScript. The application tests users' knowledge of ITIL 4 concepts through multiple-choice questions and provides immediate feedback and scoring.

## File Structure

The application consists of three main files:
- `index.html`: The main HTML structure
- `styles.css`: Contains all styling rules
- `quiz.js`: Contains the quiz logic and questions

## HTML Implementation

### Key Components

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>ITIL Quiz</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <div id="quiz-container">
        <h1>ITIL Knowledge Quiz</h1>
        <div id="progress-container">
            <div id="progress-bar"></div>
        </div>
        <h2 id="question">Loading question...</h2>
        <div id="options"></div>
        <p id="score">Score: 0</p>
        <button id="restart" onclick="restartQuiz()">Restart Quiz</button>
    </div>
    <script src="quiz.js"></script>
</body>
</html>
```

### HTML Structure Explanation:
- `viewport` meta tag ensures proper scaling on mobile devices
- `quiz-container`: Main container for all quiz elements
- `progress-container`: Houses the progress bar
- `options`: Container for answer buttons
- External CSS and JavaScript files are linked

## CSS Styling

### Key Styling Components

1. **Body Styling**
```css
body {
    font-family: 'Segoe UI', Arial, sans-serif;
    text-align: center;
    margin: 0;
    padding: 20px;
    background-color: #f0f2f5;
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
}
```
- Uses flexbox for centering
- Modern system fonts
- Full viewport height
- Light gray background

2. **Quiz Container**
```css
#quiz-container {
    max-width: 800px;
    width: 90%;
    margin: auto;
    padding: 30px;
    background-color: white;
    border-radius: 15px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}
```
- Responsive width
- Card-like design with shadow
- Rounded corners

3. **Progress Bar**
```css
#progress-container {
    width: 100%;
    height: 10px;
    background-color: #eee;
    border-radius: 5px;
}

#progress-bar {
    height: 100%;
    background-color: #3498db;
    border-radius: 5px;
    width: 0%;
    transition: width 0.3s ease-in-out;
}
```
- Smooth transition animation
- Visual progress indicator

4. **Answer Options**
```css
.option {
    display: block;
    width: 100%;
    margin: 12px 0;
    padding: 15px;
    background-color: #f8f9fa;
    border: 2px solid #e9ecef;
    border-radius: 8px;
    cursor: pointer;
    transition: all 0.3s ease;
}
```
- Hover animation
- Clear button styling
- Consistent spacing

5. **Feedback States**
```css
.correct {
    background-color: #d4edda !important;
    border-color: #28a745 !important;
    color: #155724;
}

.incorrect {
    background-color: #f8d7da !important;
    border-color: #dc3545 !important;
    color: #721c24;
}
```
- Visual feedback for correct/incorrect answers
- Color-coded responses

## JavaScript Functionality

### 1. Data Structure
```javascript
const quizData = [
    {
        question: "Question text here",
        options: [
            "Option 1",
            "Option 2",
            "Option 3",
            "Option 4"
        ],
        answer: "Correct option here"
    }
    // More questions...
];
```
- Array of question objects
- Each question has properties for:
  - question text
  - array of options
  - correct answer

### 2. Core Functions

#### Question Loading
```javascript
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
```
- Dynamically creates option buttons
- Updates question text
- Updates progress bar

#### Answer Checking
```javascript
function checkAnswer(selectedOption, selectedButton) {
    const correctAnswer = quizData[currentQuestionIndex].answer;
    const options = document.querySelectorAll('.option');
    
    options.forEach(option => {
        option.disabled = true;
        option.style.cursor = 'default';
    });
    
    if (selectedOption === correctAnswer) {
        score++;
        selectedButton.classList.add('correct');
    } else {
        selectedButton.classList.add('incorrect');
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
```
- Disables options after selection
- Shows correct answer
- Updates score
- Delays before next question

#### Performance Rating
```javascript
function getPerformanceRating(percentage) {
    if (percentage >= 90) return "Maestro!!!!";
    if (percentage >= 80) return "I love where this is going! Nice job";
    if (percentage >= 70) return "Not bad! You're still not there yet";
    if (percentage >= 60) return "Awful! You can do better";
    return "Need more practice with ITIL concepts";
}
```
- Provides feedback based on score percentage
- Different levels of achievement

## Quiz Features

1. **Progress Tracking**
   - Visual progress bar
   - Current score display
   - Performance rating at the end

2. **Interactive Elements**
   - Clickable answer options
   - Visual feedback for correct/incorrect answers
   - Restart functionality

3. **User Experience**
   - Responsive design
   - Smooth transitions
   - Clear feedback
   - Disabled options after selection

4. **ITIL Content**
   - Focuses on ITIL 4 concepts
   - Covers various ITIL practices
   - Tests understanding of key principles

5. **Performance Assessment**
   - Percentage-based scoring
   - Level-based feedback
   - Final score summary

## Best Practices Implemented

1. **Accessibility**
   - Semantic HTML
   - Clear color contrasts
   - Readable font sizes

2. **Performance**
   - Minimal DOM manipulation
   - Efficient event handling
   - Optimized transitions

3. **Maintainability**
   - Modular code structure
   - Clear variable naming
   - Separated concerns (HTML, CSS, JS)

4. **Responsiveness**
   - Flexible layouts
   - Mobile-friendly design
   - Adaptive sizing

This documentation covers all aspects of the quiz application implementation. Each component is explained in detail, making it easy to understand and modify the code as needed. 