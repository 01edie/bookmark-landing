// Slider (article 1)
const bookmark = document.querySelector('.slider.bookmark');
const search = document.querySelector('.slider.search');
const share = document.querySelector('.slider.share');
const redBar = document.querySelector('.slider-bar');

const bookmarkTab = document.querySelector('.tab.bookmark');
const searchTab = document.querySelector('.tab.search');
const shareTab = document.querySelector('.tab.share');

function selectSlider(slider) {
    switch(slider) {
        case 'bookmark':
            bookmark.classList.add('active');
            search.classList.remove('active');
            share.classList.remove('active');
            redBar.style.left = "0";
            displayTab(slider)
            break;
        case 'search':
            bookmark.classList.remove('active');
            search.classList.add('active');
            share.classList.remove('active');
            redBar.style.left = "275px";
            displayTab(slider)
            break;
        case 'share':
            bookmark.classList.remove('active');
            search.classList.remove('active');
            share.classList.add('active');
            redBar.style.left = "550px";
            displayTab(slider)
            break;
    }
}

function displayTab(slider) {
    switch(slider) {
        case 'bookmark':
            bookmarkTab.style.animation = "fadeIn 0.5s linear";
            bookmarkTab.classList.add('active');
            searchTab.classList.remove('active');
            shareTab.classList.remove('active');
            break;
        case 'search':
            searchTab.style.animation = "fadeIn 0.5s linear";
            bookmarkTab.classList.remove('active');
            searchTab.classList.add('active');
            shareTab.classList.remove('active');
            break;
        case 'share':
            shareTab.style.animation = "fadeIn 0.5s linear";
            bookmarkTab.classList.remove('active');
            searchTab.classList.remove('active');
            shareTab.classList.add('active');
    }
}

bookmark.addEventListener('click', e => {
    selectSlider('bookmark');
})

search.addEventListener('click', e => {
    selectSlider('search');
})

share.addEventListener('click', e => {
    selectSlider('share');
})


// FAQ
const questions = document.querySelectorAll('.question');
const QA = document.querySelectorAll('.qa-block');


QA.forEach(block => {
    block.addEventListener('click', e => {
        block.classList.toggle('active');
    })
})


// Mail validation
const mailBtn = document.getElementById('mailBtn');
const mailInput = document.getElementById('mailInput');
const errorMenu = document.querySelector('.error-mail');

function validateMail(mail) {
    var mailformat = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
	if(mail.match(mailformat)) {
		return true;
	}
	else {
		return false;
	}
}

mailBtn.addEventListener('click', e => {
	let sub = validateMail(mailInput.value);
	if (sub) {
        errorMenu.classList.remove('active');
        errorMenu.classList.add('correct');
	} 
	else { 
		errorMenu.classList.add('active');
        errorMenu.classList.remove('correct');
	}
})



// Mobile menu
const mobileOpen = document.querySelector('.mobile-menu-open');
const mobileClose = document.querySelector('.mobile-menu-close');
const mobileMenu = document.querySelector('.mobile-menu');

mobileOpen.addEventListener('click', e => {
    mobileMenu.classList.add('active');
})

mobileClose.addEventListener('click', e => {
    mobileMenu.classList.remove('active');
})