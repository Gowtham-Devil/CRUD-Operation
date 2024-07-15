let inputs = document.querySelectorAll("input")
let table = document.querySelector("table")
let btn = document.getElementById("updateBtn")
let row



let formhandle = () =>{
    event.preventDefault()

    let userName = inputs[0].value
    let userSalary = inputs[1].value
    let userCompany = inputs[2].value

    let tr = document.createElement("tr")
    let td1 = document.createElement("td")
    let td2 = document.createElement("td")
    let td3 = document.createElement("td")
    let td4 = document.createElement("td")
    let updateBtn = document.createElement("button")
    let deleteBtn = document.createElement("button")
    
    

    if(btn.innerText=="Submit"){

        if(userName=="" || userSalary=="" || userCompany==""){
        alert("please fill the required fields")
    }
    else{
        td1.innerText = userName
        td2.innerText = userSalary
        td3.innerText = userCompany
        updateBtn.innerText = "Edit"
        deleteBtn.innerText = "Delete"


        td4.append(updateBtn,deleteBtn)
        tr.append(td1,td2,td3,td4)
        table.appendChild(tr)


        inputs[0].value = ""
        inputs[1].value = ""
        inputs[2].value = ""


        updateBtn.addEventListener('click',()=>{
            row = tr
            inputs[0].value = row.cells[0].innerText
            inputs[1].value = row.cells[1].innerText
            inputs[2].value = row.cells[2].innerText
            btn.innerText = "Update"
        })

        deleteBtn.addEventListener('click',()=>{
            tr.remove()
        })
        
    }
    }else{
        row.cells[0].innerText = inputs[0].value
        row.cells[1].innerText = inputs[1].value
        row.cells[2].innerText = inputs[2].value

        inputs[0].value = ""
        inputs[1].value = ""
        inputs[2].value = ""

        btn.innerText = "Submit"
    }
}





//                                              fetch()
// function fetchData(){
//     let dataObj = fetch("https://api.github.com/users")

//     dataObj.then((data)=>{return data.json()})
//     .then((userData)=>{
//         userData.map((users)=>{
//             // let table = document.createElement("table")
//             // let tr = document.createElement("tr")
//             let h1 = document.createElement("h1")

//             h1.innerText = users.avatar_url
//             document.body.append(h1)
//         })
//     })
//     .catch(()=>{console.log("error");})

// }



// let section = document.querySelector(".mainArea")
// let btn = document.querySelector("button")



// function fetchData(){
//     let Data = fetch("https://api.github.com/users")
//     .then((res)=>{
//         return res.json()
//     })
//     .then((data)=>{
//             data.forEach(element => {
//                 let main = document.createElement("main");
//                 let img = document.createElement("img");
//                 let span = document.createElement("span");
//                 let div = document.createElement("div");
//                 let para = document.createElement("p");
//                 let btn1 = document.createElement("button")
//                 let btn2 = document.createElement("button")


//                 btn1.innerText = "Add"
//                 btn2.innerText = "Message"
//                 img.src = element.avatar_url;
//                 span.innerText = element.id
//                 div.innerText = element.login;
//                 para.innerHTML = `Hello my name is ${element.login}.</br> I am a MERN Stack Developer.`;

//                 main.append(img, span, div, para, btn1, btn2);
//                 section.appendChild(main)


//                 btn1.addEventListener('click',()=>{
//                     alert(`Your friend request sent to ${element.login}`)
//                     btn1.innerText = "Frnd request sent"
//                     btn1.style.backgroundColor = "green"
//                     btn1.style.color = "white"
//                 })

//                 btn2.addEventListener('click',()=>{
//                     let promt = prompt(`hello my ${element.login}`)
//                     console.log(promt);
//                 })
            
//             });
//     })
//     .catch((err) => {console.log(err)})
// }