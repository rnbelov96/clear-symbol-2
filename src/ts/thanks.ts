import '../scss/thanks.scss';

const nameLabelEl = document.querySelector('.js-name') as HTMLSpanElement;
nameLabelEl.textContent = localStorage.getItem('userName') || 'Гость';

const emailLabelEl = document.querySelector('.js-email') as HTMLSpanElement;
emailLabelEl.textContent = localStorage.getItem('userEmail') || '';
