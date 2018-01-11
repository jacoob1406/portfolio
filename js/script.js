/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
window.onload = function () {

//    if (!!navigator.userAgent.match(/Trident/g) || !!navigator.userAgent.match(/MSIE/g))
//    {
//
//    }
//FUNKCJA KTÓRA SKRACA W CAŁYM DOKUMENCIE DOC.GETELEMBYID
    function _(id) {
        return document.getElementById(id);
    }
    function submitForm() {
        _('submit').disabled = true;
        _('status').innerHTML = 'please wait ...';
        var formdata = new FormData();
        formdata.append("name", _("name").value);
        formdata.append("email", _("email").value);
        formdata.append("message", _("message").value);
        var ajax = new XMLHttpRequest();
        ajax.open("POST", "../php/mail.php");  //?? czy znajdzie nam plik php ?
        ajax.onreadystatechange = function () {
            if (ajax.readyState == 4 && ajax.status == 200) {
                if (ajax.responseText == "success") {
                    _("myform").innerHTML = '<h2>Thanks ' + _("name").value + ', your message has been sent.</h2>';
                } else {
                    _("status").innerHTML = ajax.responseText;
                    _("submit").disabled = false;
                }
            }
        }
        ajax.send(formdata);
    }

//----------------------------------------------------------------

    window.addEventListener('scroll', function () {
        if (window.innerWidth > 768) {
            let ypos = window.pageYOffset;
            let welc = document.getElementsByClassName('welcome')[0];
            welc.style.top = ypos * 1 + 'px';
        } else {
            return false;
        }
    })



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