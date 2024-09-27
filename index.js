const form =document.querySelector('form');
let id=0;

const bountyArea = document.querySelector(".bounty-area");



function addtodo(value){
       let newDiv =document.createElement('div');
       let p =document.createElement('p');
       p.className= "para";
       p.appendChild(document.createTextNode(value));
       newDiv.id= id;
       newDiv.className= "bounty";

         let edit = document.createElement("a");
         edit.className = "edit";
         edit.appendChild(document.createTextNode("edit"));
         let deleteit = document.createElement("a");
         deleteit.className = "delete";
         deleteit.appendChild(document.createTextNode("delete"));


         newDiv.appendChild(p);
       newDiv.appendChild(edit);
       newDiv.appendChild(deleteit);
       bountyArea.appendChild(newDiv);
       bountyArea.style.padding = "1rem";
}


form.addEventListener('submit',function(e){
        e.preventDefault();
        id++;
        const value =document.querySelector('#todos').value ;
      addtodo(value);
      document.querySelector('#todos').value ="";
      
})

/// delete todo
document.querySelector(".bounty-area").addEventListener("click" , function(e){
 
 if(e.target.className === "delete"){
    let parent = e.target.parentNode;
    parent.remove();
 }
  
})


/// edit tododocument.querySelector(".bounty-area").addEventListener("click" , function(e){

document.querySelector(".bounty-area").addEventListener("click" , function(e){
 
  if(e.target.className === "edit"){
     let parent = e.target.parentNode;
     let parentId = parent.id;
     console.log(parentId)
     let first = parent.firstChild;
     console.log(first);
     document.querySelector('#todos').value = `${first.innerHTML}`;
     parent.remove(); 
  }
 
 })
   