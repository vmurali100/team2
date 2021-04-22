let users = []
async function getUsersFromServer() {
    // fetch("http://localhost:3000/users")
    //     .then((response) => {
    //         return response.json()
    //     }).then(res => {
    //         console.log(res)
    //     })

    let usersDetails = await fetch("http://localhost:3000/users");
    users = await usersDetails.json();
    localStorage.setItem("users", JSON.stringify(users))
    displayUsers()
}

function displayUsers() {
    document.querySelector("tbody").innerHTML = ""

    users.forEach((user, i) => {
        var myTr = document.createElement("tr");
        for (a in user) {
            var myTd = document.createElement("td");
            myTd.innerHTML = user[a]
            myTr.appendChild(myTd)

        }

        var editTd = document.createElement("td");
        var editBtn = document.createElement("button");
        editBtn.setAttribute("class", "btn btn-warning")
        // editBtn.setAttribute("onclick", "editUser(" + i + ")")
        // editBtn.innerHTML = "Edit"
        var anch = document.createElement("a")
        anch.innerHTML = "Edit"
        anch.setAttribute("href", "edit.html?=" + i)
        editBtn.appendChild(anch)
        editTd.appendChild(editBtn);

        var deleteTd = document.createElement("td")
        var deleteBtn = document.createElement("button");
        deleteBtn.setAttribute("class", "btn btn-danger")

        deleteBtn.setAttribute("onclick", "deleteUser(" + i + ")")
        deleteBtn.innerHTML = "Delete";
        deleteTd.appendChild(deleteBtn)

        myTr.appendChild(editTd)
        myTr.appendChild(deleteTd)
        document.querySelector("tbody").appendChild(myTr)
    })
}



getUsersFromServer()