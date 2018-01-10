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

//cv dpwnload
    var disable = true;

    function slideCv() {
        const cv = document.getElementById('cv');
        let h = document.getElementsByClassName('welcome')[0].offsetHeight
                + document.getElementsByClassName('about')[0].offsetHeight
                + document.getElementsByClassName('skills')[0].offsetHeight;
        console.log(h);

        if (window.pageYOffset > h && disable === true) {
            cv.classList.add("showcv");
        } else {
            cv.classList.remove("showcv");
        }
    }

    window.onscroll = slideCv;

    document.getElementById('cvclose').onclick = function () {
        document.getElementById('cv').classList.remove("showcv");
        disable = false;
    };

    document.getElementById('arrow').onclick = function () {
        let h = document.getElementsByClassName('welcome')[0].offsetHeight;
        window.scroll({top: h + 1, left: 0, behavior: 'smooth'});
    };

    document.getElementById('playvid').onclick = function () {
        document.getElementById('video').style.display = 'flex';
        document.getElementById('video').style.opacity = 1;
    };

    document.getElementById('closevid').onclick = function () {
        document.getElementById('video').style.opacity = 0;
        document.getElementById('video').style.display = 'none';
    };

};