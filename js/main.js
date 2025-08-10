let header = document.querySelector("header");

// Header shadow on scroll
window.addEventListener('scroll', () => {
  header.classList.toggle("shadow", window.scrollY > 0);
});

// Handle active navigation links
function setActiveNavLink() {
  const navLinks = document.querySelectorAll('.navbar-nav .nav-link');
  const sections = document.querySelectorAll('section[id]');
  
  let current = '';
  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    if (window.scrollY >= (sectionTop - 200)) {
      current = section.getAttribute('id');
    }
  });

  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === `#${current}`) {
      link.classList.add('active');
    }
  });
}

// Set active link on scroll
window.addEventListener('scroll', setActiveNavLink);

// Set initial active state
document.addEventListener('DOMContentLoaded', () => {
  setActiveNavLink();
});

// Close Bootstrap navbar collapse on nav-link click (mobile)
document.addEventListener('click', (e) => {
  const isNavLink = e.target.closest('.navbar-nav .nav-link');
  if (!isNavLink) return;
  const navCollapseEl = document.getElementById('navbarNav');
  if (navCollapseEl && navCollapseEl.classList.contains('show')) {
    const bsCollapse = bootstrap.Collapse.getOrCreateInstance(navCollapseEl, { toggle: false });
    bsCollapse.hide();
  }
});