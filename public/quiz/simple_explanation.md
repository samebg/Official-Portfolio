# ITIL Quiz App - Simple Explanation

## What is this?
This is a simple quiz app that tests your knowledge about ITIL (a set of best practices for IT service management). Think of it like a digital flashcard system that:
- Shows you questions
- Lets you pick answers
- Tells you if you're right or wrong
- Keeps track of your score

## How it's built (in simple terms)

### 1. The Three Files
Think of these files like building blocks:
- `index.html`: The structure (like the skeleton of a house)
- `styles.css`: The appearance (like paint and decorations)
- `quiz.js`: The brain (makes everything work)

### 2. How it works (step by step)

#### Step 1: The Questions
```javascript
const quizData = [
    {
        question: "What is ITIL?",
        options: ["Option 1", "Option 2", "Option 3", "Option 4"],
        answer: "The correct answer"
    }
    // More questions...
];
```
Think of this like a deck of cards, where each card is a question with 4 possible answers.

#### Step 2: Showing Questions
When you start the quiz:
1. It shows one question at a time
2. Creates 4 buttons for the answers
3. Shows a progress bar at the top (like a loading bar)

#### Step 3: Answering Questions
When you click an answer:
1. The app checks if you're right
2. If you're right:
   - Your answer turns green
   - Your score goes up by 1
3. If you're wrong:
   - Your answer turns red
   - The correct answer turns green
4. After 1.5 seconds, it moves to the next question

#### Step 4: The End
When you finish all questions:
1. Shows your final score
2. Gives you a rating (like "Expert", "Professional", etc.)
3. Lets you start over if you want

### 3. Making it Look Nice

#### The Layout
```css
body {
    background-color: #f0f2f5;  /* Light gray background */
    display: flex;              /* Centers everything */
    justify-content: center;    /* Centers horizontally */
}
```
This makes everything look neat and centered on the page.

#### The Buttons
```css
.option {
    background-color: #f8f9fa;  /* Light background */
    border: 2px solid #e9ecef;  /* Light border */
    border-radius: 8px;         /* Rounded corners */
}
```
This makes the answer buttons look nice and clickable.

### 4. Cool Features

1. **Progress Bar**
   - Shows how far along you are in the quiz
   - Updates automatically

2. **Color Coding**
   - Green = correct answer
   - Red = wrong answer

3. **Score Tracking**
   - Shows your current score
   - Gives you a final percentage

4. **Mobile Friendly**
   - Works on phones and tablets
   - Looks good on any screen size

## How to Use It

1. Open the `index.html` file in a web browser
2. Click on your chosen answer for each question
3. See if you're right or wrong
4. Keep going until you finish
5. See your final score and rating
6. Click "Restart Quiz" to try again

## Tips for Learning

1. **Start Slow**
   - Read each question carefully
   - Think about your answer before clicking

2. **Learn from Mistakes**
   - When you get an answer wrong, read why it was wrong
   - Try to remember the correct answer for next time

3. **Practice Regularly**
   - Take the quiz multiple times
   - Try to improve your score each time

4. **Use the Progress Bar**
   - It helps you know how many questions are left
   - Keeps you motivated to finish

Remember: This is a learning tool, so it's okay to make mistakes! The important thing is to learn from them and improve your ITIL knowledge. 