document.addEventListener('DOMContentLoaded', () => {
  // Add hover effect to feature items
  const featureItems = document.querySelectorAll('.feature-item');
  
  featureItems.forEach(item => {
    item.addEventListener('mouseenter', () => {
      item.style.boxShadow = `0 0 20px ${getComputedStyle(document.documentElement)
        .getPropertyValue('--neon-blue')}`;
    });
    
    item.addEventListener('mouseleave', () => {
      item.style.boxShadow = 'none';
    });
  });

  // Random security badge pulse effect
  setInterval(() => {
    const badge = document.querySelector('.badge-circle');
    badge.style.animation = 'none';
    badge.offsetHeight; // Trigger reflow
    badge.style.animation = 'pulse 2s infinite';
  }, Math.random() * 3000 + 2000);
});
