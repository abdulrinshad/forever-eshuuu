// Disable scroll initially

function smoothScrollTo(targetY, duration) {
  const startY = window.scrollY;
  const diff = targetY - startY;
  let startTime;

  function animateScroll(timestamp) {
    if (!startTime) startTime = timestamp;
    const time = timestamp - startTime;
    const percent = Math.min(time / duration, 1);
    
    window.scrollTo(0, startY + diff * easeInOutQuad(percent));

    if (time < duration) {
      requestAnimationFrame(animateScroll);
    }
  }

  function easeInOutQuad(t) {
    return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
  }

  requestAnimationFrame(animateScroll);
}

document.body.style.overflow = 'hidden';

const allowedDOB = "2007-06-10";
const btn = document.getElementById("getStartedBtn");
const dobInput = document.getElementById("dobInput");
const errorMsg = document.getElementById("errorMsg");

btn.addEventListener("click", function () {
  const dob = dobInput.value.trim();

  if (dob === allowedDOB) {
    errorMsg.style.display = "none";

    // Enable scrolling
    document.body.style.overflow = 'auto';

    // Scroll smoothly to carousel section
    const nextSection = document.getElementById("carouselExample"); // ⬅️ Your carousel div id
    if (nextSection) {
      setTimeout(() => {
        nextSection.scrollIntoView({ behavior: 'smooth' });
         smoothScrollTo(sectionTop, 2000); // 💖 2.5 seconds smooth scroll
      }, 200);
    }

  } else {
    errorMsg.innerText = dob === "" 
      ? "Please enter a date 💔" 
      : "Incorrect DOB 💔 Try again!";
    errorMsg.style.display = "block";
  }
});

// Prevent manual scroll until unlocked
window.addEventListener('scroll', function () {
  if (document.body.style.overflow === 'hidden') {
    window.scrollTo(0, 0);
  }
});

// Crush check function
function checkCrush() {
  const name = document.getElementById("crushName").value.trim().toLowerCase();

  if (name === "rinshad" || name === "abdul rinshad") {
    Swal.fire({
      title: "💖 He’s the one!",
      text: "You just typed the name of your destiny. Love is calling...",
      icon: "success",
      confirmButtonText: "Begin your story ✨"
    }).then(() => {
      window.location.href = "letter.html";
    });
  } else {
    Swal.fire({
      title: "🤔 Hmm...",
      text: "That name doesn’t ring a bell in the universe of love...",
      icon: "info"
    });
  }

  return false;
}


  // Prevent manual scrolling (mouse/touch/arrow keys)
  window.addEventListener('scroll', function () {
    if (document.body.style.overflow === 'hidden') {
      window.scrollTo(0, 0);
    }
  });

