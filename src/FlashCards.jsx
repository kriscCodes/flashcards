import './App.css'
import Card from './Card.jsx'
import Form from './Form.jsx'
import {useState} from 'react'

export default function FlashCards() {
  const [text, setText] = useState('Start!');
  const [answer, setAnswer] = useState('');
  const flashQuestions = ['What is the most accuracte way to find your body fat percentage?', 'How many calories are in a gram of protein?', 'How many calories are in a gram of carbs?', 'How many calories are in a gram of fat?', 'What is the average amount of calories an american consumes a day?', 'If you want to lose 1lb a week, how large should you calorie deficit be per day?', 'What is a calorie deficit?', 'What is a calorie surplus?', ' What is a bulk?', 'How many grams of protein should you per day to ensure maximum muscle growth?',];
  const [questions, setQuestions] = useState(flashQuestions);
  const flashAnswers = [
		'Dexa scan',
		'4 calories',
		'4 caloreis',
		'9 calories',
		'2,000 calories',
		'To lose a pound per week, you want to be in a daily 500 calorie deficit',
		'A calorie deficit is when you eat less calories than your maitenance',
		'A calorie surplus is when you eat more calories than your maitenance',
		'Term used when eating in a surplus over time while weight training to build as much muscle as possible',
		'1 gram of protein per pound of body weight',
	];

  const shuffle = () => {
	const newArray = [...flashQuestions]; // Create a copy of the original array
	for (let i = newArray.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1));
		// Swap elements at i and j
		[newArray[i], newArray[j]] = [newArray[j], newArray[i]];
	}
	return newArray
  }
  let index = 0; 
  const handleShuff = () => {
    setQuestions(shuffle);
	setText(questions[index]);
  }
  const handleCardClick = (e) => {
	e.preventDefault();
    switch (text) {
			case flashQuestions[0]:
				setText(flashAnswers[0]);
				break;
			case flashQuestions[1]:
				setText(flashAnswers[1]);
				break;
			case flashQuestions[2]:
				setText(flashAnswers[2]);
				break;
			case flashQuestions[3]:
				setText(flashAnswers[3]);
				break;
			case flashQuestions[4]:
				setText(flashAnswers[4]);
				break;
			case flashQuestions[5]:
				setText(flashAnswers[5]);
				break;
			case flashQuestions[6]:
				setText(flashAnswers[6]);
				break;
			case flashQuestions[7]:
				setText(flashAnswers[7]);
				break;
			case flashQuestions[8]:
				setText(flashAnswers[8]);
				break;
			case flashQuestions[9]:
				setText(flashAnswers[9]);
				break;
		}
  }
  
  const onChange = (e) => {
	e.preventDefault();
	setAnswer(e.target.value);
  }

  const onPrev = () => {
	if (index < 0){
		index = 9;
	}
	setText(questions[index--]);
	
  };

  const onNext = () => {
	if (index > 9){
		index = 0;
	}
	setText(questions[index++]);
  };

  const onSubmit = (e) => {
	e.preventDefault();
	handleCardClick();
	if (answer == text){
		console.log('hi')
	}
  }

  return (
		<>
			<div className="container">
				<div className="main-content">
					<h1>Fitness Guide</h1>
					<h3>How well do you know your fitness & nutrition? Test it out!</h3>
					<p>Number of cards: 10</p>
					<Card className="test" onClick={handleCardClick} text={text}></Card>
					<Form onChange={onChange} value={answer} onSubmit={onSubmit}></Form>
					<button onClick={onPrev}>Previous</button>
					<button onClick={handleShuff}>Shuffle Cards</button>
					<button onClick={onNext}>Next</button>
				</div>
			</div>
		</>
	);
}


