
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
    listcontainer.innerHTML = `<h1>${inputTitle}</h1>`;
  }
  else{
    document.getElementById("error-msg").innerText= "Please enter title of your list";
    //listcontainer.classList.remove= 'd-none';
  }
});