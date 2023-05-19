exports.calculate = (req, res) => {
    const {number1} = req.body;
    const {operation} = req.body;
    const {number2} = req.body;
    const result = calculateFn(parseFloat(number1), String(operation), parseInt(number2));
    
    res.write(`
        <!DOCTYPE html>
        <html>
            <head>
                <meta charset=\"utf-8\"/>
                <title>Calculator Web Site</title>
                <style>
                    h2{
                        font-size: 42px;
                        text-align: center;
                    }
                    p{
                        font-size: 22px;
                        font-weight: bold;
                        text-align: center;
                    }
                   
            </head>
            <body>
                <h2>The answer is: ${result}</h2>
                <br><br><br>
                <p><a href="/">Another calculation</a></p>
            </body>
        </html> ` 
    ); 
    res.end();
}

function calculateFn(number1, operator, number2) {
    let result = 0;    
        switch (operator) {
            case "+":
                 result = number1 + number2;
                break;
            case "-":
                 result = number1 - number2;
                break;
            case "*":
                 result = number1 * number2;
                break;
            case "/":
                if(second == 0) {
                    result = 0;
                } else {
                    result = number1 / number2;
                }
                break;
            default:
                break;
        }
    return result;
}