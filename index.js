const hello = document.getElementById("hello");

const typewriter = new Typewriter(hello, {
  loop: false,
  cursor: "",
});

typewriter
  .typeString("")
  .pauseFor(1000)
  .deleteAll()
  .typeString("Hello!")
  .start();

const iAm = document.getElementById("iAm");

const intro = new Typewriter(iAm, {
  loop: false,
  cursor: "",
});

intro
  .typeString("")
  .pauseFor(2000)
  .deleteAll()
  .typeString("I am DORCAS EKONG")
  .start();

const job = document.getElementById("job");

const occupation = new Typewriter(job, {
  loop: false,
  cursor: "",
});

occupation
  .typeString("")
  .pauseFor(4800)
  .deleteAll()
  .typeString("A Human Resource Manager")
  .start();
