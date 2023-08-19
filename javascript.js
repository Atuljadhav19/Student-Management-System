let selectedRow = null;
const button = document.querySelector(".btn");
button.addEventListener("click" , student);


function student(){
   let data =  readData();
   insertData(data);
}

function readData(){    
    var studName = {};
    // studName["id"] = document.getElementById("id1").value;
    studName["name"] = document.getElementById("name1").value;
    studName["email"] = document.getElementById("email1").value;
    studName["age"] = document.getElementById("age1").value;
    studName["gpa"] = document.getElementById("gpa1").value;
    studName["degree"] = document.getElementById("degree1").value; 
    // console.log(studName.name)
    return studName;
}

function insertData(x){
    let table = document.getElementsByClassName("table");
    let tr = table.insertRow(table.length);
    let td1 = tr.insertCell(0);
    let td2 = tr.insertCell(1);
    let td3 = tr.insertCell(2);
    let td4 = tr.insertCell(3);
    let td5 = tr.insertCell(4);
}