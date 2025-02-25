const ifChecked = document.querySelector(".checkbox-container")
const onChecked = document.querySelector(".onCheck")
const button = document.querySelector("#btn-1")
const treeView = document.querySelector(".treeView")
const image = document.querySelector('.insideCircle img');

button.addEventListener('click', function(){
    treeView.classList.toggle("d-none");
    image.classList.toggle('rotate-45');
});

ifChecked.addEventListener('click', function(){
    const isChecked = ifChecked.querySelector('input[type="checkbox"]').checked;
    const isTreeViewOpen = !treeView.classList.contains("d-none");
    
    if (isChecked) {
        onChecked.classList.remove("d-none");
    } else {
        onChecked.classList.add("d-none");
        // Only rotate image if tree view is not open
        if (!isTreeViewOpen) {
            image.classList.remove('rotate-45');
        }
    }
});