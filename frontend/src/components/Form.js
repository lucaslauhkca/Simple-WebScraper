import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchQuestions } from '../actions/surveyActions';
import Question from './Question';

const Form = () => {
    const [url, setUrl] = useState('');
    const dispatch = useDispatch();
    const { questions } = useSelector((state) => state.survey);

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(fetchQuestions(url));
    };

    return (
        <div>
            <h1>Dynamic Questionnaire</h1>
            <form onSubmit={handleSubmit}>
                <label>Enter Website URL:</label>
                <input type="url" value={url} onChange={(e) => setUrl(e.target.value)} required />
                <button type="submit">Generate Questions</button>
            </form>

            {questions && questions.map((q, index) => (
                <Question key={index} question={q} />
            ))}
        </div>
    );
};

export default Form;
