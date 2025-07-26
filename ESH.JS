 // Disable scrolling initially
  document.body.style.overflow = 'hidden';

  const allowedDOB = "2007-06-10"; // ✅ Set your secret DOB
  const btn = document.getElementById("getStartedBtn");
  const dobInput = document.getElementById("dobInput");
  const errorMsg = document.getElementById("errorMsg");

  btn.addEventListener("click", function () {
    const dob = dobInput.value.trim();

    if (dob === allowedDOB) {
      errorMsg.style.display = "none";

      // Allow scrolling
      document.body.style.overflow = 'auto';

      // Smooth scroll to the next section
      document.querySelector("#nextSection").scrollIntoView({ behavior: 'smooth' });

    } else {
      errorMsg.innerText = dob === "" 
        ? "Please enter a date 💔" 
        : "Incorrect DOB 💔 Try again!";
      errorMsg.style.display = "block";
    }
  });
    function checkCrush() {
    const name = document.getElementById("crushName").value.trim().toLowerCase();

    if (name === "rinshad" || name === "abdul rinshad") {
      Swal.fire({
        title: "💖 He’s the one!",
        text: "You just typed the name of your destiny. Love is calling...",
        icon: "success",
        confirmButtonText: "Begin your story ✨"
      }).then(() => {
        window.location.href = "letter.html"; // Or your love page
      });
    } else {
      Swal.fire({
        title: "🤔 Hmm...",
        text: "That name doesn’t ring a bell in the universe of love...",
        icon: "info"
      });
    }

    return false; // prevent form submission
  }


  

  // Prevent manual scrolling (mouse/touch/arrow keys)
  window.addEventListener('scroll', function () {
    if (document.body.style.overflow === 'hidden') {
      window.scrollTo(0, 0);
    }
  });

