const viewBtn = document.getElementById('view');
const scrollTop = document.querySelector('#scroll-top');
const bar = document.querySelector('.bar');
const navul = document.querySelector('.toggleNav');
const divHide = document.querySelectorAll('.img-wrap');
viewBtn.addEventListener('mouseover', () => {
    console.log('mouse over');
    let rightArrow = document.querySelector('#right');
    // rightArrow.style.transition = 'transform 1s linear 0s';
    rightArrow.style.transition = 'transform 0.8s ease';
    viewBtn.style.transition = 'background 1s ease';
    viewBtn.style.background = '#04C2C9';
    rightArrow.style.transform = 'rotate(90deg)';
});
viewBtn.addEventListener('mouseout', () => {
    let rightArrow = document.querySelector('#right');
    // rightArrow.style.transition = 'transform 1s linear 0s';
    viewBtn.style.background = 'white';
    rightArrow.style.transform = 'rotate(0deg)';
});
function scrollToTop(scrollDuration) {
    const scrollHeight = window.scrollY,
        scrollStep = Math.PI / (scrollDuration / 15),
        cosParameter = scrollHeight / 2;
    var scrollCount = 0,
        scrollMargin,
        scrollInterval = setInterval(function () {
            if (window.scrollY != 0) {
                scrollCount = scrollCount + 1;
                scrollMargin = cosParameter - cosParameter * Math.cos(scrollCount * scrollStep);
                window.scrollTo(0, (scrollHeight - scrollMargin));
            }
            else clearInterval(scrollInterval);
        }, 15);
}

// When the user scrolls the page, execute myFunction 
window.onscroll = function () { stickyNavBar() };

// Get the navbar
const navbar = document.querySelector(".navbar");

// Get the offset position of the navbar
const sticky = navbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function stickyNavBar() {
    if (window.pageYOffset >= sticky) {
        navbar.classList.add("sticky")
    } else {
        navbar.classList.remove("sticky");
    }
}

bar.addEventListener('click', () => {
    bar.classList.toggle('change');
    navul.classList.toggle('toggleNav');
})



