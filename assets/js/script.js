function getParameterByName(name) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(name);
}


const namaTamu = getParameterByName('untuk') || getParameterByName('kepada');


if (namaTamu) {
    document.addEventListener('DOMContentLoaded', () => {
        document.getElementById('nama-tamu').textContent = namaTamu;
    });
} else {

    document.getElementById('nama-tamu').textContent = "Tamu yang Terhormat";
}


window.addEventListener("load", function() {
    const loading = document.getElementById("loading");
    const content = document.getElementById("content");

   
    setTimeout(function() {
        
        loading.classList.add("blur-out");

       
        setTimeout(function() {
            loading.style.display = "none";
            content.style.display = "block";
        }, 500); 
    }, 5000); 
});


