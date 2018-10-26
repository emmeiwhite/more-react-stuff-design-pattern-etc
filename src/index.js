import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';


const User = ()=>{
    return(
        <h1>Never Ever does time permit us to to go beyond limits</h1>
    )
}
ReactDOM.render(
<App message="I am a prop coming from index.js into App Component">
    <User/>
</App>, document.getElementById('root'));

