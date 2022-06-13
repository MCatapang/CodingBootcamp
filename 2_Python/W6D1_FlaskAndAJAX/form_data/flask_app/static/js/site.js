//  Code provided by the assignment
// function getUsers(){
//     fetch('http://127.0.0.1:5000/users')
//         .then(res =>  res.json())
//         .then(data => {
//             var users = document.getElementById('users');
//             for( let i = 0; i < data.length; i++){
//                 let row = document.createElement('tr');

//                 let name = document.createElement('td');
//                 name.innerHTML = data[i].user_name;
//                 row.appendChild(name);
                
//                 let email = document.createElement('td');
//                 email.innerHTML = data[i].email;
//                 row.appendChild(email);
//                 users.appendChild(row);
//             }
//         })
// }

getUsers1();

// Code that you made yourself
function getUsers1() {
    fetch('http://127.0.0.1:5000/users')
        .then( response => response.json() )
        .then( data => {
            var users = document.getElementById("users");
            for(var i=0; i<data.length; i++) {
                var userRow = document.createElement("tr");

                var userUserName = document.createElement("td");
                userUserName.innerHTML = data[i].user_name;
                userRow.appendChild(userUserName);

                var userEmail = document.createElement("td");
                userEmail.innerHTML = data[i].email;
                userRow.appendChild(userEmail);

                users.appendChild(userRow);
            }
        })
}