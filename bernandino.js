function showDescription(element) {
  const description = element.querySelector('.description');
  description.style.opacity = "100"; // Fully visible
  description.style.transform = "translateY(0)"; // Move into view
}

function hideDescription(element) {
  const description = element.querySelector('.description');
  description.style.opacity = "0"; // Hidden
  description.style.transform = "translateY(100%)"; // Move off-screen
}

document.querySelectorAll('.family-member').forEach(member => {
  member.addEventListener('mouseover', () => showDescription(member));
  member.addEventListener('mouseout', () => hideDescription(member));
});



