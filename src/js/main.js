import './lazyload';
import detectTouch from './detectTouch';
import setScrollbarWidth from './setScrollbarWidth';
import masks from './masks';
import validation from './validation';
import anchorLinks from './anchorLinks';
import accordions from './accordions';
import modals from './modals';
import tabs from './tabs';
import menu from './menu';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import fancybox from './fancybox';
import ticker from './ticker';
import roadmap from './roadmap';
import clientHeight from './clientHeight';

gsap.registerPlugin(ScrollTrigger);

document.addEventListener('DOMContentLoaded', function () {
    detectTouch();
    setScrollbarWidth();
    masks();
    clientHeight();
    validation();
    anchorLinks();
    accordions();
    modals();
    tabs();
    menu();
    fancybox();
    ticker();
    roadmap();
});

document.addEventListener('lazyloaded', () => {
    ScrollTrigger.refresh();
});

window.addEventListener('load', function () {
    document.body.classList.add('loaded');
    ScrollTrigger.refresh();
    setTimeout(() => document.body.classList.add('animatable'), 300);
});
