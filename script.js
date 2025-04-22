// Typing effect
const typedText = "Nirmala N Sangma";
let index = 0;
function type() {
  document.getElementById('typed-name').textContent = typedText.slice(0, ++index);
  if (index < typedText.length) setTimeout(type, 100);
}
type();

// Dark mode toggle
document.getElementById("toggle-theme").addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});

// Show current date/time
function updateTime() {
  const now = new Date();
  document.getElementById("datetime").textContent = now.toLocaleString();
}
setInterval(updateTime, 1000);
updateTime();

// Load projects
const projects = [
  {
    title: "Todo App",
    description: "A simple to-do list app with local storage.",
    link: "#"
  }
];

const container = document.getElementById("projects-container");
projects.forEach(proj => {
  const div = document.createElement("div");
  div.innerHTML = `
    <h3>${proj.title}</h3>
    <p>${proj.description}</p>
    <a href="${proj.link}" target="_blank">View Project</a>
  `;
  div.classList.add("project-card");
  container.appendChild(div);
});

// Form validation
document.getElementById("contact-form").addEventListener("submit", e => {
  e.preventDefault();
  const name = document.getElementById("name");
  const email = document.getElementById("email");
  const message = document.getElementById("message");
  const msg = document.getElementById("form-msg");

  if (name.value && email.value && message.value) {
    msg.textContent = "Message sent! (Pretend)";
    msg.style.color = "green";
    name.value = email.value = message.value = "";
  } else {
    msg.textContent = "Please fill out all fields.";
    msg.style.color = "red";
  }
});
