var menu_list_array = ["Veg Margherita Pizza", "Double Cheese Margherita Pizza",
"Peppy Paneer Pizza", "Farm House Pizza", "Mexican Green Wave Pizza", "Deluxe Veggie Pizza", "Indi Tandoori Paneer Pizza"];

function get_menu(){
    var htmldata;
    menu_list_array.sort;
    htmldata = "<ol class='menulist'>"
    for(var i = 0;i<menu_list_array.length;i++) {
        htmldata = htmldata + "<li>" + menu_list_array[i] + "</li>"
    }
    htmldata = htmldata + "</ol>";
    console.log(htmldata);
    document.getElementById("display_menu").innerHTML = htmldata;
}


function add_item(){
    var htmldata;
    var item = document.getElementById("add_item").value;
    //Complete the code
    menu_list_array.push(item);
    menu_list_array.sort();
    htmldata = "<section class='cards'>"
    for(var k = 0; k<menu_list_array.length;k++) {
        htmldata = htmldata + "<div class='card'" + "<img src='pizzaImg.png'/>" + menu_list_array[k] + "</div>"
    }
    htmldata = htmldata + "</section>";
    console.log(htmldata);
    document.getElementById("display_addedmenu").innerHTML = htmldata;
}

function add_top(){
//Complete the code
}