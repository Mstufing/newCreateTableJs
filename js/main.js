let arr = [
    {
        id: 1,
        avatar: "https://picsum.photos/seed/picsum/150/100",
        email: "mstufingms11@gmail.com",
        firstName: "Mustafa",
        lastName: "Mahmudov",
        age: 23,
        phone: "05366732394",
    },
    {
        id: 2,
        avatar: "https://picsum.photos/id/237/150/100",
        email: "leomessi10@gmail.com",
        firstName: "Leo",
        lastName: "Messi",
        age: 35,
        phone: "1593156470",
    },
    {
        id: 3,
        avatar: "https://picsum.photos/150/100?grayscale",
        email: "erlinghalland9@gmail.com",
        firstName: "Erling",
        lastName: "Haland",
        age: 22,
        phone: "058915161616",
    },
    {
        id: 4,
        avatar: "https://picsum.photos/seed/picsum/150/100",
        email: "debruynekevin17@gmail.com",
        firstName: "Kevin",
        lastName: "De Bruyne",
        age: 30,
        phone: "053656614594",
    },
    {
        id: 5,
        avatar: "https://picsum.photos/id/237/150/100",
        email: "goz=nzalespedri8@gmail.com",
        firstName: "Pedri",
        lastName: "Gonzales",
        age: 21,
        phone: "64448451234561",
    },
];

let tBody = document.querySelector("tbody");

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
        btnDel.innerHTML = "delete";
        tdDel.appendChild(btnDel);

        let tdEdit = document.createElement("td");
        let btnEdit = document.createElement("edit-but");
        btnEdit.innerHTML = "edit";
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