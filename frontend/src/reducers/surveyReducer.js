const initialState = {
    questions: [],
    loading: false,
    error: null,
};

export const surveyReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'FETCH_QUESTIONS_SUCCESS':
            return { ...state, questions: action.payload, loading: false };
        case 'FETCH_QUESTIONS_ERROR':
            return { ...state, error: action.payload, loading: false };
        default:
            return state;
    }
};
