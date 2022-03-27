'strict';

import X from './js/modules/class-x';
import gsap from 'gsap';
import ScrollMagic from 'scrollmagic';
import { ScrollMagicPluginIndicator, ScrollMagicPluginGsap } from "scrollmagic-plugins";

ScrollMagicPluginGsap(ScrollMagic, gsap);
ScrollMagicPluginIndicator(ScrollMagic);

import './scss/main.scss';
import './js/assets';


(function () {
    window.addEventListener('DOMContentLoaded', (event) => {
        const x = new X();
        x.draw(0.5);

        const tl = new gsap.timeline();

        const canvas = { state: 0 };
        tl.fromTo(canvas, 1, {
            state: 1
        }, {
            state: 12,
            duration: 1,
            onUpdate: () => {
                x.draw(canvas.state);
            }
        });
        tl.to('.iphone', 1, {
            scale: 0.5,
            transformOrigin: '50% 10%'
        }, 0);

        const tl2 = new gsap.timeline();
        tl2.to('.iphone', 1, { y: -100 });

        const controller = new ScrollMagic.Controller();

        const scene = new ScrollMagic.Scene({
            duration: '100%',
            offset: 0,
            triggerElement: '#trigger',
            triggerHook: 0
        });

        scene.addIndicators({ name: 'X animation' });
        scene.setTween(tl);
        scene.setPin('.section');
        scene.addTo(controller);

        const scene2 = new ScrollMagic.Scene({
            duration: '0',
            offset: 44,
            triggerElement: '#trigger',
            triggerHook: 0
        });

        scene2.addIndicators({ name: 'Top bar sticked' });
        scene2.setPin('.subheader');
        scene2.addTo(controller);

        const scene3 = new ScrollMagic.Scene({
            duration: '0',
            offset: 1400,
            triggerElement: '#trigger',
            triggerHook: 0
        });

        scene3.addIndicators({ name: 'Offset phone' });
        scene3.setTween(tl2);
        scene3.addTo(controller);

    });
})();
