document.addEventListener("DOMContentLoaded", function() {
    const sections = document.querySelectorAll('section');
    
    function checkVisibility() {
        sections.forEach(section => {
            const rect = section.getBoundingClientRect();
            if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
                section.classList.add('visible');
            } else {
                section.classList.remove('visible');
            }
        });
    }
    
    window.addEventListener('scroll', checkVisibility);
    checkVisibility();  // 페이지 로드 시 바로 체크
});
