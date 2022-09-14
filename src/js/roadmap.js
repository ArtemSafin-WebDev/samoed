import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Flip } from 'gsap/Flip';
import { clearAllBodyScrollLocks, disableBodyScroll } from 'body-scroll-lock';
import { IS_MOBILE } from './utils';

gsap.registerPlugin(ScrollTrigger, Flip);

export default function roadmap() {
    const elements = Array.from(document.querySelectorAll('.js-roadmap'));

    elements.forEach(element => {
        const tabs = Array.from(element.querySelectorAll('.roadmap__mountains-tab'));
        const points = Array.from(element.querySelectorAll('.roadmap__mountains-point'));
        const closeBtns = Array.from(element.querySelectorAll('.roadmap__mountains-tab-close'))
        

        points.forEach((point, pointIndex) => {
            point.addEventListener('click', event => {
                event.preventDefault();

                if (point.classList.contains('active')) {
                    point.classList.remove('active');
                    element.classList.remove('selected');
                    tabs.forEach(tab => tab.classList.remove('active'));

                    if (IS_MOBILE) {
                        clearAllBodyScrollLocks();
                    }
                } else {
                    points.forEach(point => point.classList.remove('active'));
                    element.classList.add('selected');
                    point.classList.add('active');
                    tabs.forEach(tab => tab.classList.remove('active'));
                    tabs[pointIndex]?.classList.add('active');

                    if (IS_MOBILE) {
                        clearAllBodyScrollLocks();
                        disableBodyScroll(tabs[pointIndex])
                    }
                }
            });
        });

        closeBtns.forEach(btn => {
            btn.addEventListener('click', event => {
                event.preventDefault();

                points.forEach(point => point.classList.remove('active'))
                
                element.classList.remove('selected');
                tabs.forEach(tab => tab.classList.remove('active'));

                if (IS_MOBILE) {
                    clearAllBodyScrollLocks();
                }
            })
        })
    });
}
