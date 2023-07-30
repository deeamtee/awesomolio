import Typewriter from 'typewriter-effect/dist/core';

const app = document.getElementById('typewrighter');

const typewriter = new Typewriter(app, {
  loop: true,
  autoStart: true,
});

typewriter
  .pauseFor(1000)
  .typeString('<span style="color: #00FFA3;">frontend developer</span>')
  .pauseFor(3000)
  .changeDeleteSpeed(32)
  .deleteChars(18)
  .typeString('<span style="color: #d236f9;">magician</span>') // #FF4444
  .pauseFor(3000)
  .deleteAll(100)
  .start();