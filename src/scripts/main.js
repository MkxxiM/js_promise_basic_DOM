'use strict';

const logo = document.querySelector('.logo');

const promise1 = new Promise((resolve, reject) => {
  const msg = document.createElement('div');
  const text = document.createElement('p');

  msg.classList.add('message');
  text.textContent = 'Promise was resolved!';
  msg.appendChild(text);

  resolve(msg);
});

const promise2 = new Promise((resolve, reject) => {
  const msg = document.createElement('div');
  const text = document.createElement('p');

  msg.classList.add('message');
  msg.classList.add('error-message');
  text.innerText = 'Promise was rejected!';
  msg.appendChild(text);

  reject(msg);
});

logo.addEventListener('click', () => {
  promise1.then((msg) => {
    document.body.appendChild(msg);
  });

  promise2.catch((msg) => {
    setTimeout(() => document.body.appendChild(msg), 3000);
  });
});
