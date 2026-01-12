let rgbInterval = null;
let rgbRunning = false;

// Dark / Light Mode
function toggleDarkMode() {
  const body = document.body;
  body.style.backgroundColor = "";
  body.classList.toggle("dark");
}

// RGB Toggle (Start / Stop)
function toggleRGB() {
  const btn = document.getElementById("rgbBtn");

  if (!rgbRunning) {
    rgbInterval = setInterval(() => {
      const r = Math.floor(Math.random() * 256);
      const g = Math.floor(Math.random() * 256);
      const b = Math.floor(Math.random() * 256);
      document.body.style.backgroundColor = `rgb(${r},${g},${b})`;
    }, 500);

    btn.textContent = "Stop RGB";
    rgbRunning = true;
  } else {
    clearInterval(rgbInterval);
    document.body.style.backgroundColor = "";
    btn.textContent = "Start RGB";
    rgbRunning = false;
  }
}

// Hide button
function hideButton(button) {
  button.style.display = "none";
}