function addToDo() {
    var newToDoCategory=document.getElementById("newToDoCategory").value;
    var newToDoValue=document.getElementById("newToDoValue").value;

    //Toast
    if(newToDoCategory=="Category"){
        $('.failed').toast({delay: 2000});
        $('.failed').toast('show');
    }
    else{
    var node = document.getElementById(newToDoCategory+"-category");
    node.innerHTML += "<li class='list-group-item'>"+newToDoValue+"<i class='fas fa-times mt-1' style='float: right' onclick='removeToDO(this)'></i></li>";
console.log(newToDoCategory)

    $('.success').toast({delay: 2000});
    $('.success').toast('show');
    }
}

function newCategory() {
    var newCategoryValue=document.getElementById("newCategoryValue").value;

    var listnode = document.getElementById("category-list");
    listnode.innerHTML += `<ul class='list-group' id='`+newCategoryValue+`-category'>
    <li class='list-group-item list-group-item-info'>`+newCategoryValue+`</li></ul>`;


    var addnode = document.getElementById("newToDoCategory");
    addnode.innerHTML += "<option value='"+newCategoryValue+"'>"+newCategoryValue+"</option>"

    var categorylist = document.getElementById("selectCategory");
    categorylist.innerHTML += "<option value='"+newCategoryValue+"'>"+newCategoryValue+"</option>";

}

function removeCategory() {
    var selectCategory=document.getElementById("selectCategory").value;

    var removenode = document.getElementById(selectCategory+"-category");
    removenode.remove();

    console.log(selectCategory+"-category");
}

function removeToDO(event) {
    event.parentNode.remove();
}