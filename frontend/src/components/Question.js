import React from 'react';

const Question = ({ question }) => {
    return (
        <div>
            <p>{question.question}</p>
            {question.options.map((option, index) => (
                <label key={index}>
                    <input type="radio" name={question.question} value={option} />
                    {option}
                </label>
            ))}
        </div>
    );
};

export default Question;
