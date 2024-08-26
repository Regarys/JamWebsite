function timeUpdate() {
  const now = new Date();
  const hours = now.getHours();
  const minutes = now.getMinutes();
  const seconds = now.getSeconds();

  document.getElementById("hours").innerText = `${hours}`;
  document.getElementById("minutes").innerText = `${minutes}`;
  document.getElementById("seconds").innerText = `${seconds}`;
}

setInterval(timeUpdate, 1000);
