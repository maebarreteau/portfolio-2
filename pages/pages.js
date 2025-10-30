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
    });
  });

  document.querySelectorAll('.archive-card').forEach(card => {
  const toggle = card.querySelector('.accordion-toggle');
  const content = card.querySelector('.archive-content');
  const arrow = card.querySelector('.arrow-icon'); 

  toggle.addEventListener('click', () => {
    content.classList.toggle('open');
    arrow.classList.toggle('open'); 
  });
});

    document.querySelectorAll('.fill').forEach(bar => {
      const level = bar.dataset.level;
      if (level === "1") bar.style.width = "60%";
      if (level === "2") bar.style.width = "75%";
      if (level === "3") bar.style.width = "90%";
      if (level === "4") bar.style.width = "100%";
    });
 
