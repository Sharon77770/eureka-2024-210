const cards = document.querySelectorAll('.card');
const introCards = document.querySelectorAll('.intro-card');

console.log(introCards.length());
const handleScroll = () => {
  introCards.forEach(card => {
    const rect = card.getBoundingClientRect();
    const isVisible = rect.top < window.innerHeight && rect.bottom > 0;
    if (isVisible) {
      card.classList.add('visible');
    } 
  });

  cards.forEach(card => {
    const rect = card.getBoundingClientRect();
    const isVisible = rect.top < window.innerHeight && rect.bottom > 0;
    if (isVisible) {
      card.classList.add('visible');
    } 
  });
};

window.addEventListener('scroll', handleScroll);

// 페이지 로드 시 초기 호출
handleScroll();
