document.getElementById("menu-icono").addEventListener("click", mostrar_menu);

function mostrar_menu(){
    document.getElementById("mov-cont").classList.toggle('move-all');
    document.getElementById("show-menu").classList.toggle('show-lateral-menu-header');
}