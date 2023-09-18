import throttle from 'lodash.throttle';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

const userData = {};
const form = document.querySelector('.form');

form.addEventListener('input', throttle(handleInput, 500));
form.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
  event.preventDefault();

  for (let i = 0; i < userData.amount; i += 1) {
    const stepDelay = userData.delay + userData.step * i;
    createPromise(i + 1, stepDelay)
      .then(({ position, delay }) => {
        // console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
        Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
      })
      .catch(({ position, delay }) => {
        // console.log(`❌ Rejected promise ${position} in ${delay}ms`);
        Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
      });
  }
}

function createPromise(positionData, delayData) {
  return new Promise((resolve, reject) => {
    setTimeout(delay => {
      const shouldResolve = Math.random() > 0.3;
      if (shouldResolve) {
        resolve({ position: positionData, delay: delayData });
      } else {
        reject({ position: positionData, delay: delayData });
      }
    }, delayData);
  });
}

function handleInput(event) {
  if (event.target.name === 'delay') {
    userData.delay = +event.target.value;
  }
  if (event.target.name === 'step') {
    userData.step = +event.target.value;
  }
  if (event.target.name === 'amount') {
    userData.amount = +event.target.value;
  }
}
