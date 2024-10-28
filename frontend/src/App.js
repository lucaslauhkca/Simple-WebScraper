import React from 'react';
import { Provider } from 'react-redux';
import { store } from './store';
import Form from './components/Form';

function App() {
    return (
        <Provider store={store}>
            <div className="App">
                <Form />
            </div>
        </Provider>
    );
}

export default App;
