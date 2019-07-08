import React, {createContext} from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import ThemeProvider from './ThemeProvider';

export const {Consumer, Provider} = createContext();

ReactDOM.render(
    // browserRouter outside
    <Provider value={{theme: "dark"}}>
        <App />
    </Provider>

, 
document.getElementById('root'));