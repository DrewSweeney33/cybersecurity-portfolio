
/* =====================================================
    SweenTech – script.js (2025-05 Rebuild, 4‑space indentation)
    -----------------------------------------------------
    Features
      • Safe element queries (null‑checked)
      • Dark‑mode toggle (label text)
      • LocalStorage theme persistence
      • DOMContentLoaded wrapper
      • Scroll‑to‑top, smooth anchor scroll
      • Project & Skill Load‑More toggles
      • IntersectionObserver fade‑in animation
      • Skill progress‑bar animation
    ===================================================== */

/* ---------- Utilities ---------- */
function easeInOutQuad(t) {
    return t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2;
}

function smoothScrollTo(targetEl, duration = 1000, offset = 100) {
    const startY = window.scrollY;
    const targetY = targetEl.getBoundingClientRect().top + window.scrollY;
    const viewportH = window.innerHeight;
    const destY = targetY - viewportH + offset;
    const distance = destY - startY;
    let startTime = null;

    function animate(now) {
        if (!startTime) startTime = now;
        const elapsed = now - startTime;
        const progress = Math.min(elapsed / duration, 1);
        window.scrollTo(0, startY + distance * easeInOutQuad(progress));
        if (elapsed < duration) requestAnimationFrame(animate);
    }
    requestAnimationFrame(animate);
}

/* ---------- Main ---------- */
document.addEventListener("DOMContentLoaded", () => {

    /* ---- Project cards: Load More / Less ---- */
    const loadMoreBtn = document.getElementById("loadMoreBtn");
    const loadLessBtn = document.getElementById("loadLessBtn");

    if (loadMoreBtn && loadLessBtn) {
        loadMoreBtn.addEventListener("click", () => {
            const hidden = document.querySelectorAll(".project-card.project-hidden");
            hidden.forEach(card => {
                card.classList.remove("project-hidden");
                card.style.opacity = 0;
                setTimeout(() => card.style.opacity = 1, 100);
            });
            setTimeout(() => smoothScrollTo(loadLessBtn, 1000, 100), 300);
            loadMoreBtn.style.display = "none";
            loadLessBtn.classList.remove("project-hidden");
        });

        loadLessBtn.addEventListener("click", () => {
            const visible = document.querySelectorAll(".project-card:not(.project-hidden)");
            visible.forEach((card, idx) => {
                if (idx >= 4) card.classList.add("project-hidden");
            });
            loadMoreBtn.style.display = "inline-block";
            loadLessBtn.classList.add("project-hidden");
            setTimeout(() => smoothScrollTo(loadMoreBtn, 1000, 100), 300);
        });
    }

    /* ---- Skills: Load More / Less (if controls exist) ---- */
    const loadMoreSkills = document.getElementById("loadMoreSkills");
    const loadLessSkills = document.getElementById("loadLessSkills");

    if (loadMoreSkills && loadLessSkills) {
        loadMoreSkills.addEventListener("click", () => {
            const hidden = document.querySelectorAll(".skill.skill-hidden");
            hidden.forEach(skill => {
                skill.classList.remove("skill-hidden");
                skill.style.opacity = 0;
                setTimeout(() => skill.style.opacity = 1, 100);
            });
            setTimeout(() => smoothScrollTo(loadLessSkills, 1000, 100), 300);
            loadMoreSkills.style.display = "none";
            loadLessSkills.classList.remove("skill-hidden");
        });

        loadLessSkills.addEventListener("click", () => {
            const visible = document.querySelectorAll(".skill:not(.skill-hidden)");
            visible.forEach((skill, idx) => {
                if (idx >= 4) skill.classList.add("skill-hidden");
            });
            loadMoreSkills.style.display = "inline-block";
            loadLessSkills.classList.add("skill-hidden");
            setTimeout(() => smoothScrollTo(loadMoreSkills, 1000, 100), 300);
        });
    }

    /* ---- Scroll‑to‑Top button ---- */
    const scrollTopBtn = document.getElementById("scrollToTop");
    if (scrollTopBtn) {
        window.addEventListener("scroll", () => {
            scrollTopBtn.style.display = window.scrollY > 300 ? "block" : "none";
        });
        scrollTopBtn.addEventListener("click", () => {
            window.scrollTo({ top: 0, behavior: "smooth" });
        });
    }

    /* ---- Smooth scroll for nav links ---- */
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener("click", e => {
            const target = document.querySelector(anchor.getAttribute("href"));
            if (!target) return;
            e.preventDefault();
            const headerOffset = 80;
            const targetPos = target.getBoundingClientRect().top + window.scrollY - headerOffset;
            const start = window.scrollY;
            const distance = targetPos - start;
            const duration = 1000;
            let startTime = null;

            function step(now) {
                if (!startTime) startTime = now;
                const progress = Math.min((now - startTime) / duration, 1);
                const ease = easeInOutQuad(progress);
                window.scrollTo(0, start + distance * ease);
                if (progress < 1) requestAnimationFrame(step);
            }
            requestAnimationFrame(step);
        });
    });

    /* ---- Fade‑in animation on scroll ---- */
    const fadeEls = document.querySelectorAll(".fade-in");
    const fadeObserver = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
                fadeObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    fadeEls.forEach((el, idx) => {
        el.style.transitionDelay = `${idx * 100}ms`;
        fadeObserver.observe(el);
    });

    /* ---- Dark‑Mode Toggle ---- */
    const toggleBtn = document.getElementById("darkModeToggle");
    if (toggleBtn) {
        // Apply stored preference
        const storedTheme = localStorage.getItem("theme");
        if (storedTheme === "dark") {
            document.body.classList.add("dark-mode");
        }
        // Set initial label
        toggleBtn.textContent = document.body.classList.contains("dark-mode") ? "Light Mode" : "Dark Mode";

        toggleBtn.addEventListener("click", () => {
            const isDark = document.body.classList.toggle("dark-mode");
            localStorage.setItem("theme", isDark ? "dark" : "light");
            toggleBtn.textContent = isDark ? "Light Mode" : "Dark Mode";
        });
    }

    /* ---- Skill bar animation ---- */
    const skillCards = document.querySelectorAll(".skill-card");
    const barObserver = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const bar = entry.target.querySelector(".skill-bar span");
                const pct = entry.target.dataset.skill;
                bar.style.width = pct + "%";
                barObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.4 });

    skillCards.forEach(card => barObserver.observe(card));

    console.info("SweenTech script.js initialised");
});
