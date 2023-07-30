const app = document.getElementById('typewrighter');

var typewriter = new Typewriter(app, {
  loop: true,
});

typewriter
  .pauseFor(1000)
//   .typeString('I am ')
  .typeString('<span class="home__paragraph_color_accent">frontend developer</span>')
  .pauseFor(3000)
  .changeDeleteSpeed(50)
  .deleteChars(18)
  .typeString('<span style="color: #FF4444;">magician</span>')
  .pauseFor(3000)
  .changeDeleteSpeed('natural')
  .start();