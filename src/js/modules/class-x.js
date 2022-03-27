export default class X {
    constructor() {
        const canvas = document.createElement('canvas');
        const body = document.createElement('body');

        this.ctx = canvas.getContext('2d');
        this.height = window.innerHeight;
        this.width = window.innerWidth;

        canvas.width = this.width;
        canvas.height = this.height;

        document.querySelector('.animation').appendChild(canvas);
    }


    getPath() {
        return "-42.7,-50,-21,-50,0,-15.4,21,-50,42.7,-50,10.9,-1,44,50,22.3,50,0,13.4,-22.3,50,-44,50,-10.9,-1".split(/\ |,/).map(function (H) {
            return parseFloat(H);
        });
    }

    draw(state) {
        const s = (state + 1) * 3;
        const { ctx, width, height } = this;
        const path = this.getPath();

        ctx.globalCompositeOperation = 'source-over';
        ctx.clearRect(0, 0, width, height);
        ctx.fillStyle = '#fff';
        ctx.fillRect(0, 0, width, height);

        ctx.globalCompositeOperation = 'destination-out';
        ctx.fillStyle = '#000';
        ctx.beginPath();
        ctx.moveTo(path[0] * s + width / 2, path[1] * s + height / 2);
        for (let i = 2; i < path.length; i += 2) {
            ctx.lineTo(path[i] * s + width / 2, path[i + 1] * s + height / 2);
        }
        ctx.closePath();
        ctx.fill();
    }
} 