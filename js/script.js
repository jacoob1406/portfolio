window.onload = function () {

    function coverFirst() {
        if (window.innerWidth > 768) {
            let ypos = window.pageYOffset;
            let welc = document.getElementsByClassName('welcome')[0];
            welc.style.top = ypos * 1 + 'px';
        } else {
            return false;
        }
    }

    function toggleMenu() {
        const menu = document.getElementById('menu-items');
        const h = document.getElementsByClassName('welcome')[0].offsetHeight;
        if (window.pageYOffset > h) {
            menu.classList.add("stick");
        } else {
            menu.classList.remove("stick");
        }
    }

    var disable = true;
    function slideCv() {
        const cv = document.getElementById('cv');
        let h = document.getElementsByClassName('welcome')[0].offsetHeight
                + document.getElementsByClassName('about')[0].offsetHeight
                + document.getElementsByClassName('skills')[0].offsetHeight;

        if (window.pageYOffset > h && disable === true) {
            cv.classList.add("showcv");
        } else {
            cv.classList.remove("showcv");
        }
    }

    window.addEventListener('scroll', slideCv);
    window.addEventListener('scroll', toggleMenu);
    window.addEventListener('scroll', coverFirst);

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

    document.getElementById('open').onclick = showMenu;
    document.getElementById('close').onclick = hideMenu;

    document.getElementById('stick-menu').onclick = function () {
        document.getElementById('menu-list').classList.toggle('hideul');
    };

    document.getElementById('menu-list').onclick = function () {
        this.classList.toggle('hideul');
    };

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