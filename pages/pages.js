document.querySelectorAll('.fill').forEach(bar => {
  bar.style.width = bar.getAttribute('data-level');
});

document.querySelectorAll('.skill').forEach(skill => {
  const toggle = skill.querySelector('.skill-toggle');
  const desc = skill.querySelector('.skill-desc');

  skill.addEventListener('click', () => {
    toggle.classList.toggle('open');
    desc.classList.toggle('show');
  });
});

 const descBox = document.querySelector('.tag-desc');

  document.querySelectorAll('.tag').forEach(tag => {
    tag.addEventListener('click', () => {
      descBox.textContent = tag.getAttribute('data-desc');
      descBox.classList.add('show');
      setTimeout(() => descBox.classList.remove('show'), 3500);
    });
  });

