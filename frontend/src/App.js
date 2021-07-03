import React from 'react';
import logo from './logo.png';
import axios from 'axios';
import './App.css';

require('dotenv').config()

function handleSubmit(event) {
  const text = document.querySelector('#char-input').value

  axios
    .get(`/char_count?text=${text}`).then(({data}) => {
      document.querySelector('#char-count').textContent = `${data.count} characters!`
    })
    .catch(err => console.log(err))
}

function save_form() {
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <label htmlFor='pet_name-input'>Надо как-то прикрутить авторизацию пользователей, у которых будет пачка питомцев </label>
        </p>
        <p>
    	  <label htmlFor='pet_name-input'>Имя питомца </label>
          <input id='pet_name-input' type='text' placeholder="my string"/><span> </span>
          <button onClick={save_form}>Сохранить</button>
		</p>
		<p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <div>
        <label htmlFor='char-input'>How many characters does </label>
        <input id='char-input' type='text' placeholder="my string"/><span> </span>
        <button onClick={handleSubmit}>have?</button>
        <div>
          <h3 id='char-count' data-testid="char-count"> </h3>
        </div>
      </div>
      </header>
    </div>
  );
}

export default App;
