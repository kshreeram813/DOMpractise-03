// let header = document.querySelector("#main-header");   //quesrySelector
// header.style.borderBotton = "solid 4px #cc";

// let input = document.querySelector("input");
// input.value = "hellow word";

// let submit = document.querySelector('input[type="submit"]');
// submit.value="send";

// let item = document.querySelector(".list-group-item")
// item.style.color="red";

// let lastitem = document.querySelector(".list-group-item:last-child")
// lastitem.style.color="blue";

let seconditem = document.querySelector(".list-group-item:nth-child(2)")
seconditem.style.color="green";

let titles = document.querySelectorAll(".title");
console.log(titles);

titles[0].textContent = "hellow";

let odd = document.querySelectorAll('li:nth-child(odd)');
//  let even = document.querySelectorAll('li:nth-child(even)');

for(let i=0;i<odd.length;i++)
{
   odd[i].style.backgroundColor = "green";
   // even[i].style.backgroundColor = "red";
}
