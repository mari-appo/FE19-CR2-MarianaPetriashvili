let tasks = [{
        src: "images/cooking.jpg",
        taskName: "Cook something for dinner",
        description: "I have to think about what to cook for dinner and what products I will need.",
        importance: 0,
        deadline: "Deadline: 10.06.2023",
        // details: function() {
        //     return `<div class="card" style="width: 100%;">
        //     <img src="${this.src}" class="card-img-top" alt="...">
        //     <div class="card-body">
        //     h5 class="card-title">${this.taskName}</h5>
        //     <p class="card-text">Artist is ${this.description} years old.</p>
        //     <p class="card-text">${this.importance}.</p>
        //     <p class="card-text">For this beautiful peace of Art price is ${this.price}.</p>
        //       <a href="#" class="btn btn-primary">Go somewhere</a>
        //     </div>
        //   </div>`
        // }
    },

    {
        src: "images/cleaning.jpg",
        taskName: "Cleaning Day",
        description: "I have to set aside one day for a complete cleaning of the house. maybe on saturday.",
        importance: 0,
        deadline: "Deadline: 11.06.2023",


    },
    {
        src: "images/yoga.jpg",
        taskName: "Make Yoga",
        description: "Do yoga for at least half an hour. Maybe Meditation too.",
        importance: 0,
        deadline: "Deadline: 12.06.2023",


    },
    {
        src: "images/friends.jpg",
        taskName: "Meet my friends for a drink",
        description: "To book a restaurant as promised to friends and buy a ticket for a concert.",
        importance: 0,
        deadline: "Deadline: 13.06.2023",



    },
    {
        src: "images/pay.jpg",
        taskName: "Pay Rent",
        description: "I have to pay the rent of the apartment, money for water, gas and electricity.",
        importance: 0,
        deadline: "Deadline: 14.06.2023",


    },
    {
        src: "images/shopping.jpg",
        taskName: "Go for Shopping",
        description: "I have to make a list of what I have to buy for the summer, calculate the amounts.",
        importance: 0,
        deadline: "Deadline: 15.06.2023",


    },
    {
        src: "images/plants.jpg",
        taskName: "I have to water the flowers",
        description: "I had to water the flowers and change the soil for some plants.",
        importance: 0,
        deadline: "Deadline: 16.06.2023",


    },
    {
        src: "images/travel.jpg",
        taskName: "Plan Vacation",
        description: "Plan a vacation in Italy or Greece, check prices, plan a date.",
        importance: 0,
        deadline: "Deadline: 17.06.2023",


    },
    {
        src: "images/walk.jpg",
        taskName: "Walk outside in the Nature",
        description: "Take a walk in the fresh air, in a park or outside the city somewhere in nature.",
        importance: 0,
        deadline: "Deadline: 18.06.2023",


    },
]





const out = document.getElementById("grid");
console.log(tasks);

for (let task of tasks) {
    out.innerHTML += `
    <div class="card">
            <img src = ${task.src}>
            <div class="card-body">
                <h5 class="card-title1">${task.taskName}</h5>
                <h6 class="card-title2">${task.description}</h6>
                <hr>
                <h6 class="card-title3"><i class="fa fa-calendar-check-o"></i> ${task.deadline}</h6>
                <h6 class="card-title4 importance">${task.importance}</h6>
                <a href="#" class="btn btn-primary priority"><i class="fa fa-exclamation-triangle"></i> Priority Level</a>
                <hr>
                <a href="#" class="btn btn-primary details">Done <i class="fa fa-check-square"></i></a>
                <a href="#" class="btn btn-primary myBtn">Delete <i class="fa fa-trash"></i></a>
            </div>
        </div>`
}


// let btns = document.getElementsByClassName("priority");


// for (let i = 0; i < btns.length; i++) {
//     console.log(i)
//     btns[i].addEventListener("click", function(event) {
//         event.preventDefault();
//         if (tasks[i].importance < 5) {
//             tasks[i].importance++;
//             document.getElementsByClassName("importance")[i].innerHTML = tasks[i].importance;
//         }
//     })
// }


let btns = document.getElementsByClassName("priority");

for (let i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function(event) {
        event.preventDefault();
        if (tasks[i].importance < 5) {
            tasks[i].importance++;
        }

        const importanceElement = document.getElementsByClassName("importance")[i];
        importanceElement.innerHTML = tasks[i].importance;


        importanceElement.classList.remove(`priority-${tasks[i].importance - 1}`);

        importanceElement.classList.add(`priority-${tasks[i].importance}`);
    });
}


let doneButtons = document.getElementsByClassName("details");

for (let i = 0; i < doneButtons.length; i++) {
    doneButtons[i].addEventListener("click", function(event) {
        event.preventDefault();
        return false;
    });
}

let deleteButtons = document.getElementsByClassName("myBtn");

for (let i = 0; i < deleteButtons.length; i++) {
    deleteButtons[i].addEventListener("click", function(event) {
        event.preventDefault();
        return false;
    });
}





{ /* <h6 class="card-title4 importance ${task.importance === 0 ? 'priority-0' : ''}">${task.importance}</h6> */ }