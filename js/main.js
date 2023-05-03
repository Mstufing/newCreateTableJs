let arr = [
    // {
    //     id: 1,
    //     avatar: "https://picsum.photos/seed/picsum/150/100",
    //     email: "mstufingms11@gmail.com",
    //     firstName: "Mustafa",
    //     lastName: "Mahmudov",
    //     age: 23,
    //     phone: "05366732394",
    // },
    // {
    //     id: 2,
    //     avatar: "https://picsum.photos/id/237/150/100",
    //     email: "leomessi10@gmail.com",
    //     firstName: "Leo",
    //     lastName: "Messi",
    //     age: 35,
    //     phone: "1593156470",
    // },
    // {
    //     id: 3,
    //     avatar: "https://picsum.photos/150/100?grayscale",
    //     email: "erlinghalland9@gmail.com",
    //     firstName: "Erling",
    //     lastName: "Haland",
    //     age: 22,
    //     phone: "058915161616",
    // },
    // {
    //     id: 4,
    //     avatar: "https://picsum.photos/seed/picsum/150/100",
    //     email: "debruynekevin17@gmail.com",
    //     firstName: "Kevin",
    //     lastName: "De Bruyne",
    //     age: 30,
    //     phone: "053656614594",
    // },
    // {
    //     id: 5,
    //     avatar: "https://picsum.photos/id/237/150/100",
    //     email: "goz=nzalespedri8@gmail.com",
    //     firstName: "Pedri",
    //     lastName: "Gonzales",
    //     age: 21,
    //     phone: "64448451234561",
    // },
];

let tBody = document.querySelector(".tbody");

let addForm = document.querySelector(".addForm");

let editForm = document.querySelector(".editForm");

let idx = null;

addForm.onsubmit = (event) =>{
    // ? do not request
    event.preventDefault();
    // ? img required from code and add by default img if there is empty avatar
    let img = event.target["avatar"].value.trim().length === 0 
        ? "https://picsum.photos/seed/picsum/150/100"
        : event.target["avatar"].value;
    // ? create user
    let user = {
        id: Date.now(),
        avatar: img,
        email: event.target["email"].value,
        firstName: event.target["firstname"].value,
        lastName: event.target["lastname"].value,
        age: event.target["age"].value,
        phone: event.target["phone"].value,
    };
    // ? add user to array
    arr.push(user);
    // ? form reset
    addForm.reset();
    // ? re render array
    render();
}

// ? Edit Form
editForm.onsubmit = (event) =>{
    // ? do not request
    event.preventDefault();
    // ? img required from code and add by default img if there is empty avatar
    let img = event.target["avatar"].value.trim().length === 0 
        ? "https://picsum.photos/seed/picsum/150/100"
        : event.target["avatar"].value;

    // ? update current user
    arr = arr.map(elem =>{
        if(elem.id === idx){
            elem.email = event.target["email"].value;
            elem.firstName = event.target["firstname"].value;
            elem.lastName = event.target["lastname"].value;
            elem.avatar = img;
            elem.age = event.target["age"].value;
            elem.phone = event.target["phone"].value;
        }

        return elem;
    });
    // ? modal close
    modal.style.display = "none";
    // ? re render array
    render();
}

function deleteUser(id){
    // ? remove current object with this id
    arr = arr.filter((elem) => elem.id !== id);
    render();
}

function render(){
    tBody.innerHTML = "";

    arr.forEach((elem) => {

        let tr = document.createElement("tr");

        let tdId = document.createElement("td");
        tdId.innerHTML = elem.id;

        let tdAvatar = document.createElement("td");
        let avatar = document.createElement("img"); 
        avatar.src = elem.avatar;
        tdAvatar.appendChild(avatar);

        let tdEmail = document.createElement("td");
        tdEmail.innerHTML = elem.email;

        let tdFirstName = document.createElement("td");
        tdFirstName.innerHTML = elem.firstName;

        let tdLastName = document.createElement("td");
        tdLastName.innerHTML = elem.lastName;

        let tdAge = document.createElement("td");
        tdAge.innerHTML = elem.age;

        let tdPhone = document.createElement("td");
        tdPhone.innerHTML = elem.phone;

        let tdDel = document.createElement("td");
        let btnDel = document.createElement("del-but");
        btnDel.onclick = () => deleteUser(elem.id);
        btnDel.innerHTML = "delete";
        tdDel.appendChild(btnDel);

        let tdEdit = document.createElement("td");
        let btnEdit = document.createElement("edit-but");
        btnEdit.innerHTML = "edit";
        btnEdit.onclick = () =>{
            editForm["email"].value = elem.email;
            editForm["firstname"].value = elem.firstName;
            editForm["lastname"].value = elem.lastName;
            editForm["avatar"].value = elem.avatar;
            editForm["age"].value = elem.age;
            editForm["phone"].value = elem.phone;
            idx = elem.id;
            modal.style.display = "block";
        }
        tdEdit.appendChild(btnEdit); 

        tr.appendChild(tdId);
        tr.appendChild(tdAvatar);
        tr.appendChild(tdEmail);
        tr.appendChild(tdFirstName);
        tr.appendChild(tdLastName);
        tr.appendChild(tdAge);
        tr.appendChild(tdPhone);
        tr.appendChild(tdDel);
        tr.appendChild(tdEdit);

        tBody.appendChild(tr);
    });
}

render();


//? MODAL

// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
// btn.onclick = function() {
//   modal.style.display = "block";
// }

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    // modal.style.display = "none";
  }
}