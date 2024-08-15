var banners = ["Os melhores do Brasil", "Qualidade e preço baixo!"];
var banner = 0;

function trocaBanner(){
    banner = (banner +1) % 2;
    document.querySelector("h2#mensagem").textContent = banners[banner];
}

setInterval(trocaBanner, 2000);