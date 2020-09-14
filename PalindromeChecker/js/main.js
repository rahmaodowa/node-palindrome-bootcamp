button = document.querySelector('button')
button.addEventListener('click', check)
function check() {
    string = document.getElementById("myInput").value;
    fetch(`/api?word=${string}`)
        .then(response => response.json())
        .then((data) => {
            console.log(data);
            console.log(data.result)
            if (data.result === "yes") {
                document.querySelector('p').innerHTML = `${string} is  a Palindrome`
            } else {
                document.querySelector('p').innerHTML = `${string} is not a Palindrome`
            }
        });
}
