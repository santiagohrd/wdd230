document.addEventListener("DOMContentLoaded", function() {

    const today = new Date().getDay();

    if (today >= 1 && today <= 3) {
        showBanner();
    } else{
        let banner = document.getElementById("chamberBanner");
        banner.style.display = "none";
    }

    function showBanner() {
        let banner = document.getElementById("chamberBanner");
        banner.style.display = "block";
    }

    window.closeBanner = function() {
        let banner = document.getElementById("chamberBanner");
        banner.style.display = "none";
    };
});