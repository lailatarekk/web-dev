function counter() { let c = 0; return () => ++c; }
const next = counter();
console.log(next()); //1
console.log(next()); //2  (kol ma t refresh -  repeat (12 12 12))

// Function to greet the user and add their name to the list
function addName() {
    const input = document.getElementById('name'); //finds the input box on the page (the one with id="name") and stores it in a variable called input
    const name = input.value.trim();

    if (!name) return; // ignore empty input

    document.getElementById('title').textContent = `Hello, ${name}!`; //finds the heading (id="title") and changes its text. The backticks ` let you put a variable inside the text with ${name}

    const li = document.createElement('li'); //creates a new empty list item (<li>) in memory
    li.textContent = name; //puts the name inside that list item.
    document.getElementById('list').appendChild(li); //finds the <ul> and adds the new <li> to the end of it. Now it appears on the page.

    input.value = ''; // clear input box
}

// Function to say goodbye when a name is clicked
function removeName(e) {
    if (e.target.nodeName === 'LI') { //This checks that you clicked an <li> and not empty space inside the list.
        const name = e.target.textContent; //reads the text of the clicked name and stores it.
        document.getElementById('title').textContent = `Goodbye, ${name}! see you later.`; //changes the heading to a goodbye message using that name.
        e.target.remove(); // remove the clicked <li>
    }
}

// Attach event listeners
document.getElementById('greet').addEventListener('click', addName);
document.getElementById('list').addEventListener('click', removeName);

//press Enter to greet
document.getElementById('name').addEventListener('keydown', (e) => {
    if (e.key === 'Enter') addName();
});

//const btn = document.getElementById('sayHi');
//btn.addEventListener('click', () => {
// document.getElementById('greeting').textContent = 'Hello from JS! and lailaaa';
//});