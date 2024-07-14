

document.querySelector("#menu").addEventListener("click", toggleSidebar)

function toggleSidebar(sidebar, menu){
    var sidebar = document.querySelector(".sidebar");
    var menu = document.querySelector("#side_menu");
    if(sidebar.style.height == "0vh"){
        sidebar.style.height = "100vh"
        menu.style.display = "flex"
    }
    else{
        sidebar.style.height = "0vh"
        menu.style.display = "none"
    }
    
    
}