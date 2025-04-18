const toggleBtn = document.getElementById("toggleTheme");
      toggleBtn.addEventListener("click", () => {
        document.body.classList.toggle("light-theme");
        toggleBtn.innerHTML = document.body.classList.contains("light-theme")
          ? '<i class="fas fa-moon"></i>'
          : '<i class="fas fa-sun"></i>';
      });