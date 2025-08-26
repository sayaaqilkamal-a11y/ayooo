document.addEventListener("DOMContentLoaded", () => {
  const title = document.getElementById("animated-title");
  const text = title.textContent;
  title.textContent = "";
  let i = 0;

  // Efek ketik judul
  function typeWriter() {
    if (i < text.length) {
      title.textContent += text.charAt(i);
      i++;
      setTimeout(typeWriter, 100);
    }
  }
  typeWriter();

  // Suara + confetti
  const popSound = document.getElementById("pop-sound");
  const buttons = document.querySelectorAll("button");

  buttons.forEach(button => {
    button.addEventListener("click", (e) => {
      popSound.currentTime = 0; 
      popSound.play();

      for (let j = 0; j < 15; j++) {
        let confetti = document.createElement("div");
        confetti.className = "confetti";
        document.body.appendChild(confetti);

        let size = Math.random() * 8 + 5;
        confetti.style.width = size + "px";
        confetti.style.height = size + "px";
        confetti.style.background = ["#ffeb3b", "#ff5722", "#4caf50", "#2196f3"][Math.floor(Math.random()*4)];
        confetti.style.left = (e.clientX - size/2) + "px";
        confetti.style.top = (e.clientY - size/2) + "px";

        setTimeout(() => { confetti.remove(); }, 1500);
      }
    });
  });
});
