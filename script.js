// let car = {
//     brand:"BMW",
//     model:"X5",
//     year: 2020,
//     drive:function() {
//         console.log("drive")
//     }
// }
// console.log(car.model)

// let student1 = {
//     name: "John",
//     age: 20,
//     address: { //การเขียน Atribute ซ้อนกัน เพื่อจัดกลุ่มข้อมูล
//         district: "Bangpla",
//         street: "Theparak",
//         zip: "10540",
//         city: "Samutprakarn",
//     },
//     parentName:["Somchai", "Somsri", "Somying"],
// }

// let student2 = {
//     name: "Ming",
//     age: 90,
//     address: { //การเขียน Atribute ซ้อนกัน เพื่อจัดกลุ่มข้อมูล
//         district: "Bangpla",
//         street: "Theparak",
//         zip: "10540",
//         city: "Samutprakarn",
//     },
//     parentName:["Somchai", "Somsri", "Somying"],
// }
// console.log(student2)

// function changecolor(){
//     const title = document.getElementById("title")
//     //title.classList.add("hidden")
//     //title.style.color = "blue"
//     //title.style.display = "None"

//     if(title.classList.contains("hidden")){
//         title.classList.remove("hidden")
//     }else {
//         title.classList.add("hidden")
//     }
// }

const submitButton = document.getElementById("submitButton");
submitButton.addEventListener("click", addContent);

function addContent(){
    console.log("It Work")
    const text = document.getElementById("textInput").value
    const result = document.getElementById("result")
    result.innerHTML += text
}

// fetch('https://jsonplaceholder.typicode.com/todos/1')
//       .then(response => response.json())
//       .then(json => console.log(json))

async function fetchData() {
    const data = await fetch('https://jsonplaceholder.typicode.com/todos')
    const json = await data.json()
    const titleList = document.getElementById("titleList")
    console.log(json.length)
    for (let i = 0; i < json.length; i++) {
        titleList.innerHTML += `<h3>${json[i].title}</h3>`
    }
}
fetchData()