const btn = document.getElementById('btn');
const output = document.querySelector(".output");

const qoute = ["Any fool can write code that a computer can understand. Good programmers write code that humans can understand.", "Talk is cheap. Show me the code.", "First learn computer science and all the theory. Next develop a programming style. Then forget all that and just hack.",  "One man’s crappy software is another man’s full time job.", 
"Most good programmers do programming not because they expect to get paid or get adulation by the public, but it is fun to program.", "There are two ways to write error-free programs; only the third one works.", "When someone says, “I want a programming language in which I need only say what I want done,” give him a lollipop.", "Programming is like sex. One mistake and you have to support it for the rest of your life.", "Perfection [in design] is achieved, not when there is nothing more to add, but when there is noting left to take away.", "Always code as if the guy who ends up maintaining your code will be a violent psychopath who knows where you live.", "Measuring programming progress by the lines of code is like measuring aircraft building progress by weight.", "Good design adds value faster than it adds cost.", "Without requirements or design, programming is the art of adding bugs to an empty text file.", "Java is to JavaScript what car is to carpet."
]

btn.addEventListener("click",()=>{
    console.log("clicked");
    let random = Math.floor(Math.random()*qoute.length)
    output.textContent = qoute[random];
    
})