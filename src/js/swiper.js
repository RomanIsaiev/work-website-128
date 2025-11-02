import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';

const swiperPractice = new Swiper('.swiper-practice', {
  modules: [Navigation, Pagination],
  slidesPerView: 'auto',
  spaceBetween: 8,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

const swiperCases = new Swiper('.cases-swiper', {
  modules: [Navigation, Pagination],
  slidesPerView: 'auto',
  spaceBetween: 30,
  navigation: {
    nextEl: '.cases-button-next',
    prevEl: '.cases-button-prev',
  },
});
