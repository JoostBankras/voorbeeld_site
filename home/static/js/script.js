var dataReload = document.querySelectorAll("[data-reload]");

var language = {
    eng: {
        welcome:"We are Techs"
    },
    ned: {
        welcome:"Wij zijn Techs"
    }
};

if (window.location.hash) {
    if (window.location.hash === "#eng") {
        hi.textContent = language.eng.welcome;
    }
}

for (i = 0; i <= dataReload.length; i++) {
    dataReload[i].onclick = function() {
        window.location.hash.reload(true);
    };
}