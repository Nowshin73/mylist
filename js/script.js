
document.getElementById('createbtn').addEventListener('click',function(){
  const  inputTitle = document.getElementById("input-title").value;
  const createList = document.getElementById('createList');
  const modalcon = document.getElementById("exampleModalToggle");
  const listcontainer = document.getElementById("list-container");
 
  if(inputTitle){
    // console.log(inputTitle);
    //window.location.href = 'list.html';
    modalcon.style.display = 'none';
    createList.classList.add('d-none');
    const backdropdiv = document.getElementsByClassName("modal-backdrop")[0];
    backdropdiv.id = "modal-bac";
    document.getElementById("modal-bac").classList.add("d-none");
    //const body = document.getElementById("Body");
    const bd = document.getElementsByClassName("modal-open")[0];
    bd.id = 'mbody';
    mbody.classList.remove("modal-open");
    mbody.style.overflow = 'scroll';
    listcontainer.innerHTML = ` 
    <div class="d-flex align-items-center">
      <input type="text" name="listitem" id="list-item" placeholder="Enter list item"> <button id="add" onclick="addlist()" class="btn btn-warning p-lg-4 p-3 fw-bold rounded">ADD</button>
    </div>
    <div id="display-section" class=" d-flex flex-column gap-3 container-fluid justify-content-center align-items-center mb-xl-2 ">
    <h1 class="text-success text-center text-uppercase">${inputTitle} </h1>    
    <ol id="display">
          
        </ol>
      </div>`;
  }
  else{
    document.getElementById("error-msg").innerText= "Please enter title of your list";
    //listcontainer.classList.remove= 'd-none';
  }
});
//document.getElementById("add").addEventListener('click',
//const displaysec = document.getElementById('display-section');
 //displaysec.style.background = 'rgb(255, 248, 196)';
function addlist(){
  const listitem=  document.getElementById("list-item").value;
  const displayList=  document.getElementById("display");

 // for(let i=0; i<arrayValue.length;i++){
    const list = document.createElement("li");
    list.classList.add("litems");
    list.innerHTML = `<input class="text-success" type="checkbox" value=""> ${listitem}`;
    displayList.appendChild(list);  
    let arrayValue = JSON.parse(localStorage.getItem("todolist")) || [];
  arrayValue.push(displayList.innerText);
  localStorage.setItem("todolist", JSON.stringify(arrayValue));
//  }
}