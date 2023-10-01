let output = "";
let buttons = document.querySelectorAll(".btn");
Array.from(buttons).forEach((button) => {
    button.addEventListener('click', (e) => {
        if (e.target.innerHTML === '='){
            try{
                output = eval(output);
                document.querySelector('.outputz').value = output;
            }
            catch{
                output = "ERROR";
                document.querySelector('.outputz').value = output;
            }
        }
        else if (e.target.innerHTML === 'AC'){
            output = "";
            document.querySelector('.outputz').value = output;
        }
        else if (e.target.innerHTML === 'Del'){
            output = output.substring(0, output.length-1);
            document.querySelector('.outputz').value = output;
        }
        else {
            output += e.target.innerHTML;
            console.log(output);
            document.querySelector('.outputz').value = output;
        }
    })
})