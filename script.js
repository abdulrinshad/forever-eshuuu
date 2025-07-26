function calculateLove() {
  const name1 = document.getElementById("name1").value.trim().toLowerCase();
  const name2 = document.getElementById("name2").value.trim().toLowerCase();
  const aiText = document.getElementById("ai-text");
  const heartFill = document.getElementById("heart-fill");
  const percentText = document.getElementById("percent-text");
  const music = document.getElementById("romanticMusic");

  aiText.textContent = "🧠 AI is calculating your love compatibility...";
  heartFill.style.width = "0%";
  percentText.textContent = "0%";

  setTimeout(() => {
    let lovePercent = 0;
    let isPerfectMatch = false;

    if (
      (name1 === "abdul rinshad" && name2 === "eshal gazal") ||
      (name1 === "eshal gazal" && name2 === "abdul rinshad")
    ) {
      lovePercent = 94;
      isPerfectMatch = true;
    } else {
      const matchLetters = [...name1].filter(letter => name2.includes(letter)).length;
      const lenDiff = Math.abs(name1.length - name2.length);
      const vowelMatch =
        (name1.match(/[aeiou]/g) || []).length +
        (name2.match(/[aeiou]/g) || []).length;
      lovePercent = Math.min(90, Math.floor((matchLetters * 3 + vowelMatch * 2 - lenDiff) * 2));

      if (lovePercent < 10) lovePercent = Math.floor(Math.random() * 10);
    }

    // Animate heart meter up to the calculated percent
    let current = 0;
    const animate = setInterval(() => {
      if (current < lovePercent) {
        current++;
        heartFill.style.width = current + "%";
        percentText.textContent = current + "%";
      } else if (isPerfectMatch && current < 100) {
        // Continue from 94% to 100% slowly
        current += 0.25;
        heartFill.style.width = current + "%";
        percentText.textContent = Math.floor(current) + "%";
      } else {
        clearInterval(animate);
      }
    }, 30);

    // SweetAlert popup
    setTimeout(() => {
      aiText.textContent = "🧠 Calculation complete.";

      if (lovePercent >= 90 || isPerfectMatch) {
        music.play();
        Swal.fire({
          title: "❤️ SoulMatch Found!",
          html: `
            <b>${capitalize(name1)} + ${capitalize(name2)} = ${isPerfectMatch ? "100%" : lovePercent + "%"}</b><br>
            You’re destined to be together under the stars ✨<br><br>
            <i>“A timeless love story begins...”</i>`,
          icon: "success",
          confirmButtonText: "💘 Begin Your Story",
          customClass: {
            popup: 'custom-swal-popup',
            title: 'custom-swal-title',
            htmlContainer: 'custom-swal-html',
            confirmButton: 'custom-swal-button'
          }
        }).then(() => {
          const query = new URLSearchParams({
            name1: capitalize(name1),
            name2: capitalize(name2),
            percent: isPerfectMatch ? 100 : lovePercent
          });
          window.location.href = `story.html?${query.toString()}`;
        });

      } else {
        Swal.fire({
          title: "💔 Compatibility Check",
          html: `
            <div style="font-size: 1.3rem;">
              ${capitalize(name1)} and ${capitalize(name2)} share ${lovePercent}% connection.<br>
              Keep trying, love grows with time 🌱
            </div>`,
          icon: "info",
          customClass: {
            popup: 'custom-swal-popup',
            title: 'custom-swal-title',
            htmlContainer: 'custom-swal-html',
            confirmButton: 'custom-swal-button'
          }
        });
      }
    }, 3500); // Show SweetAlert after animation
  }, 3000);
}

function capitalize(str) {
  return str.replace(/\b\w/g, l => l.toUpperCase());
}
