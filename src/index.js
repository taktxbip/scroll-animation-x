'strict';

import X from './js/modules/class-x';
import gsap from 'gsap';

import './scss/main.scss';
import './js/assets';


(function () {
    window.addEventListener('DOMContentLoaded', (event) => {
        const x = new X();
        x.draw(0.5);

        const tl = new gsap.timeline();

        const canvas = { state: 0 };
        tl.to(canvas, 1, {
            state: 1,
            duration: 1,
            onUpdate: () => {
                x.draw(canvas.state);
            }
        });

        console.log(x.getPath());
    });
})();
