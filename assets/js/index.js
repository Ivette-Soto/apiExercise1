console.log("Why is Gamora?!");


// Vanilla JS alert on button click
// let button = document.getElementById("btn");
// button.addEventListener("click", function(){
//     alert("Click on the button");
// })


//  jQuery alert on button click
// let button = $("#btn");
// button.on("click", function(){
//     alert("Click on the button")
// });
// $(document).ready(function(){


// Select, store and show variables with id selectors
    // let title_1 = $("#title_1");
    // let title_2 = $("#title_2");
    // let text_1 = $("#text_1");
    // let btn = $("#btn");
    // console.log(title_1);
    // console.log(title_2);
    // console.log(text_1);
    // console.log(btn);


// Select with Class selector
// let elements = $(".titles")
// // console.log(elements[0]);
// // console.log(elements[1]);
// // console.log(elements[2]);
// // console.log(elements[3]);


// // alternative Selection and display
// for (let i = 0; i  < elements.length; i++){
//     console.log(elements[i])
// };




// Filters and color red
// let nestedItems = $("ul.all > li > ul > li").css({
//     'backgroundColor': 'red'
// });
// let firstLi = $("ul.all > li:first");
// // let firstLi = $("ul.all > li:eq(0)")
// // let firstLi = $("ul.all > li:lt(1)")
// firstLi.css({
//     'color:'red'
// })


// let lastLi = $("ul.all > li:last")
// // let firstLi = $("ul.all > li:eq(2)")
// // let firstLi = $("ul.all > li:gt(1)")
// lastLi.css({
//     'color:'red'
// })




// filter for color blue using nth-child
// let elementList = $("ul > li:nth-child(2)");
// elementList.css({
//     'backgroundColor':'blue'
// });


// Form filter
inputForm = $("form").children(":input");
