// closes other questions and opens only the question with the particular button
const questions = document.querySelectorAll(".question");

questions.forEach(function(question){
    
const btn = question.querySelector(".icon")

btn.addEventListener("click",function () {
questions.forEach(function (item) {
    if (item!== question) {
        item.classList.remove("show-text")
    }
})

    question.classList.toggle("show-text")
})


});

// !closes other questions and opens only the question with the particular button

// const btn = document.querySelectorAll(".icon")
// btn.forEach(
//     function (btn) {
//         btn.addEventListener("click", function (e) {
//             const question = e.currentTarget.parentElement.parentElement;
//             question.classList.toggle("show-text")
            
//         })
//     })