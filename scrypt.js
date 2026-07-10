function actualizarHora(){
    const ahora = new Date();
    document.getElementById("clock").innerHTML =
        ahora.toLocaleString();}

setInterval(actualizarHora,1000);
actualizarHora();

let codigo="";
document.addEventListener("keydown",function(event){
    codigo=codigo+event.key.toLowerCase();
    codigo=codigo.slice(-7);
    if(codigo.includes("ares")){
        document.getElementById("secreto").style.display="block";
        codigo="";}
    else if(codigo==="anarchy"){
        document.body.classList.add("caida");
        document.getElementById("LogoA").style.display="block";
        codigo="";
        }
});

function crearGota(){
    let gota=document.createElement("div");
    gota.classList.add("gota");
    gota.style.left=Math.random()*100+"%";
    gota.style.animationDuration=
        (2+Math.random()*4)+"s";
    gota.style.opacity=
        0.3+Math.random()*0.7;
    document.getElementById("sangre").appendChild(gota);
    setTimeout(()=>{
        gota.remove();
    },6000);}

setInterval(crearGota,500);
