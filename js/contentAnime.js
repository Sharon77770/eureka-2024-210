const OFFSET = 100;

const titleAndListContents = document.querySelectorAll('.title-and-list-container');
const techContent = document.querySelectorAll('.tech-stack-container');
const techBars = document.querySelectorAll('.tech-bar');
const projectContentTitle = document.querySelector('.cards-title');
const projectCardList = document.querySelectorAll('.card');
const headerCard = document.querySelectorAll('.header-content');



function headerListAnime() {
    headerCard.forEach( card => {
        const rect = card.getBoundingClientRect();
        const isVisible = rect.top < window.innerHeight - OFFSET && rect.bottom > 0;
    
        if(isVisible) {
            card.classList.add('visible');
        }
    });
}


function titleAndListAnime() {
    titleAndListContents.forEach( titleAndListContent => {
        const rect = titleAndListContent.getBoundingClientRect();
        const isVisible = rect.top < window.innerHeight - OFFSET && rect.bottom > 0;
    
        if(isVisible) {
            titleAndListContent.classList.add('visible');
        }
    });
}

function techContentAnime() {
    techContent.forEach( (content) => {
        const rect = content.getBoundingClientRect();
        const isVisible = rect.top < window.innerHeight - OFFSET && rect.bottom > 0;
    
        if(isVisible) 
            content.classList.add('visible');
    });
}

function techBarsAnime() {
    techBars.forEach( (bar, idx) => {
        const rect = bar.getBoundingClientRect();
        const isVisible = rect.top < window.innerHeight - OFFSET && rect.bottom > 0;
        
        if(isVisible){ 
            const targetWidth = bar.getAttribute('data-width');
            bar.style.width = targetWidth;
            bar.classList.add('visible')
        }
    });
}

function projectContentTitleAnime() {
    const rect = projectContentTitle.getBoundingClientRect();
    const isVisible = rect.top < window.innerHeight - OFFSET && rect.bottom > 0;

    if(isVisible)
        projectContentTitle.classList.add('visible');
}

function projectCardAnime() {
    console.log(projectCardList.length)
    projectCardList.forEach( (card, idx) => {
        const rect = card.getBoundingClientRect();
        const isVisible = rect.top < window.innerHeight - OFFSET && rect.bottom > 0;
        
        if(isVisible) {
            setTimeout(()=>{
                card.classList.add('visible');
            });
        }
    });
}

const handleScroll = () => {
    titleAndListAnime();
    techContentAnime();
    techBarsAnime();
    projectContentTitleAnime();
    projectCardAnime();
    headerListAnime();
}

window.addEventListener('scroll', handleScroll);
handleScroll();