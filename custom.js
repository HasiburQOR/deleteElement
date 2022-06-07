let deleteTag = document.getElementById('delete');
let plValue = document.getElementById('deleteText');


// 2 input function

function main() {
    let delElement = 'deleteElement';
    let del = deleteTag.value;
    if (delElement == del) {
        delButton();

    }
    

}

// delete function

function delButton(){
    let element = document.getElementById('delete');
    element.remove();
}