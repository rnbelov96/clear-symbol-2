import islandImg1 from '../img/island.jpg';
import islandImg2 from '../img/island.jpg';
import islandImg3 from '../img/island.jpg';
import islandImg4 from '../img/island.jpg';
import islandImg5 from '../img/island.jpg';

import shopImg1 from '../img/shop.jpg';
import shopImg2 from '../img/shop.jpg';
import shopImg3 from '../img/shop.jpg';
import shopImg4 from '../img/shop.jpg';
import shopImg5 from '../img/shop.jpg';

const islandImgSrcList = [islandImg1, islandImg2, islandImg3, islandImg4, islandImg5];
const shopImgSrcList = [shopImg1, shopImg2, shopImg3, shopImg4, shopImg5];
const islandImgElList = document.querySelectorAll('.js-island-small');
const shopImgElList = document.querySelectorAll('.js-shop-small');

const islandBtnBoxEl = document.querySelector('.js-island-img-box');
const shopBtnBoxEl = document.querySelector('.js-shop-img-box');
const islandLargeImgEl = document.querySelector('.js-island-large') as HTMLImageElement;
const shopLargeImgEl = document.querySelector('.js-shop-large') as HTMLImageElement;

islandBtnBoxEl?.addEventListener('click', (e: Event) => {
  const clickedImg = e.target as HTMLImageElement;

  if (clickedImg.tagName !== 'IMG') {
    return;
  }

  islandLargeImgEl.src = islandImgSrcList[Number(clickedImg.dataset.number) - 1];

  islandImgElList.forEach((elem => {
    elem.classList.remove('formats__small-img_active');
  }));

  islandImgElList[Number(clickedImg.dataset.number) - 1].classList.add('formats__small-img_active');
});

shopBtnBoxEl?.addEventListener('click', (e: Event) => {
  const clickedImg = e.target as HTMLImageElement;

  if (clickedImg.tagName !== 'IMG') {
    return;
  }

  shopLargeImgEl.src = shopImgSrcList[Number(clickedImg.dataset.number) - 1];

  shopImgElList.forEach((elem => {
    elem.classList.remove('formats__small-img_active');
  }));

  shopImgElList[Number(clickedImg.dataset.number) - 1].classList.add('formats__small-img_active');
});

let currentTab = 'island';
const islandBtnEl = document.querySelector('.js-island-btn');
const shopBtnEl = document.querySelector('.js-shop-btn');
const islandContentEl = document.querySelector('.js-island-box');
const shopContentEl = document.querySelector('.js-shop-box');

islandBtnEl?.addEventListener('click', () => {
  if (currentTab === 'island') {
    return;
  }

  currentTab = 'island';
  islandBtnEl?.classList.add('formats__btn_active');
  shopBtnEl?.classList.remove('formats__btn_active');

  shopContentEl?.classList.add('visually-hidden');
  islandContentEl?.classList.remove('visually-hidden');
});

shopBtnEl?.addEventListener('click', () => {
  if (currentTab === 'shop') {
    return;
  }

  currentTab = 'shop';
  islandBtnEl?.classList.remove('formats__btn_active');
  shopBtnEl?.classList.add('formats__btn_active');

  shopContentEl?.classList.remove('visually-hidden');
  islandContentEl?.classList.add('visually-hidden');
});
