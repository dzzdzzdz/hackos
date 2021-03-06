process.stdin.resume();
process.stdin.setEncoding('ascii');

var input_stdin = "";
var input_stdin_array = "";
var input_currentline = 0;

process.stdin.on('data', function (data) {
	input_stdin += data;
    });

process.stdin.on('end', function () {
	input_stdin_array = input_stdin.split("\n");
	main();    
    });

function readLine() {
    return input_stdin_array[input_currentline++];
}

/////////////// ignore above this line ////////////////////

const main = () => {
    var n = parseInt(readLine());
    arr = readLine().split(' ');
    arr = arr.map(Number);
    let neg = 0, 
    zero = 0,
    pos = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < 0) {
            neg++;
        }
        else if (arr[i] === 0) {
            zero++;
        }
        else {
            pos++;
        }
    }
    console.log((pos/n).toFixed(6)+'\n'+(neg/n).toFixed(6)+'\n'+(zero/n).toFixed(6));
}
