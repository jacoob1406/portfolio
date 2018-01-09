/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
window.onload = function () {

    document.getElementById('open').onclick = showMenu;
    function showMenu() {
        document.getElementById('main-heading').style.display = 'none';
        document.getElementById('overlay-menu').style.height = 'auto';
        document.getElementById('overlay-menu').style.opacity = '1';
        document.getElementsByClassName('welcome')[0].style.background = '#A9A9A9';
        this.style.opacity = '0';
        this.style.display = 'none';
        document.getElementById('close').style.display = 'block';
        document.getElementById('close').style.opacity = '1';
    }

    document.getElementById('close').onclick = hideMenu;

    function hideMenu() {
        document.getElementById('overlay-menu').style.height = '0';
        document.getElementById('overlay-menu').style.opacity = '0';
        document.getElementsByClassName('welcome')[0].style.background = '#FF3B3F';
        document.getElementById('main-heading').style.display = 'block';
        this.style.opacity = '0';
        this.style.display = 'none';
        document.getElementById('open').style.display = 'block';
        document.getElementById('open').style.opacity = '1';
    }

    document.getElementById('stick-menu').onclick = function () {
        document.getElementById('menu-list').classList.toggle('hideul');
    };

    window.onscroll = function () {
        const menu = document.getElementById('menu-items');
        const h = document.getElementsByClassName('welcome')[0].offsetHeight;
        if (window.pageYOffset > h) {
            menu.classList.add("stick");
        } else {
            menu.classList.remove("stick");
        }
        ;
    };

    document.getElementById('arrow').onclick = function () {
        let h = document.getElementsByClassName('welcome')[0].offsetHeight;
        window.scroll({top: h + 1, left: 0, behavior: 'smooth'});
    };

    function smoothScroll(event) {
        if (event.target.hash !== '') { //Check if tag is an anchor
            event.preventDefault()
            const hash = event.target.hash.replace("#", "")
            const link = document.getElementsByName(hash)
            //Find the where you want to scroll
            const position = link[0].getBoundingClientRect().y
            let top = 0

            let smooth = setInterval(() => {
                let leftover = position - top
                if (top === position) {
                    clearInterval(smooth)
                } else if (position > top && leftover < 10) {
                    top += leftover
                    window.scrollTo(0, top)
                } else if (position > (top - 10)) {
                    top += 10
                    window.scrollTo(0, top)
                }

            }, 6)//6 milliseconds is the faster chrome runs setInterval
        }
    }

};