// actions.js
export const selectAnswer = (answer) => {
    return {
      type: 'SELECT_ANSWER',
      payload: answer
    };
  };
  
  export const moveToNextQuestion = () => {
    return {
      type: 'MOVE_TO_NEXT_QUESTION'
    };
  };
  
  export const resetQuiz = () => {
    return {
      type: 'RESET_QUIZ'
    };
  };
  
  // reducers.js
  const initialState = {
    currentQuestion: 0,
    score: 0,
    selectedAnswer: '',
    quizData: [] // Replace with your actual quiz data
  };
  
  export const quizReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'SELECT_ANSWER':
        return {
          ...state,
          selectedAnswer: action.payload
        };
      case 'MOVE_TO_NEXT_QUESTION':
        if (state.currentQuestion < state.quizData.length - 1) {
          return {
            ...state,
            currentQuestion: state.currentQuestion + 1,
            selectedAnswer: ''
          };
        } else {
          return state;
        }
      case 'RESET_QUIZ':
        return {
          ...state,
          currentQuestion: 0,
          score: 0,
          selectedAnswer: ''
        };
      default:
        return state;
    }
  };
  
  // store.js
  import { createStore } from 'redux';
  import { quizReducer } from './reducers';
  
  const Store = createStore(quizReducer);
  
  export default Store;
  