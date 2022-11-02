
let inputBox = document.getElementById ('inputBox');
let btn = document.getElementById ('btn');
let ul = document.getElementById ('ul');
let form = document.getElementById('form');
let list = document.getElementById('list');
let lia = document.getElementsByClassName ('lia');




btn.addEventListener('click',(e)=> {
    e.preventDefault();
    let inputData = inputBox.value;
    let newUl = document.createElement('ul');
    if(inputBox.value != ""){
        newUl.innerHTML += `
                    <li class="lia">
                    <div class="inputData" id="dd" >${inputData}</div>
                    <div class="action">
                        <button id ="edit" >edit</button>
                        <button id="del">del </button>
                    </div>
                    </li>
    `
    }
    list.append(newUl);
    inputBox.value = null;

    let edit = document.querySelectorAll('#edit');
    edit.forEach(function(currentEdit){
        currentEdit.addEventListener('click',function(e){
           // console.log(e.target.parentElement.parentElement.children[0].innerHTML);
            let updateData = prompt("Enter update data");
            if(updateData == null || updateData == ""){
                txt = "no name provided";
                alert(txt);
            }else{
                e.target.parentElement.parentElement.children[0].innerHTML = updateData;
            }
            
        })
    })

    



    let del = document.querySelectorAll('#del');
    del.forEach(function(currentDel){
        currentDel.addEventListener('click', function(e){
            if(confirm('Are you sure?')){
                e.target.parentElement.parentElement.remove();
            }
        })
    })

    
    
    
})
















