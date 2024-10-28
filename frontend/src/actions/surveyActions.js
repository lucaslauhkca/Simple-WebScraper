import axios from 'axios';

export const fetchQuestions = (url) => async (dispatch) => {
    try {
        const response = await axios.post('http://127.0.0.1:5000/scrape', { url });
        dispatch({
            type: 'FETCH_QUESTIONS_SUCCESS',
            payload: response.data.questions,
        });
    } catch (error) {
        dispatch({
            type: 'FETCH_QUESTIONS_ERROR',
            payload: error.message,
        });
    }
};
