
document.body.classList.add('js-loading');
window.addEventListener("load", showPage, false);


function showPage() {
    
    $(".loader .loader__inner").fadeOut(500, function() {
    $(".loader").fadeOut(550);
    
    document.body.classList.remove('js-loading');
    });
    
}