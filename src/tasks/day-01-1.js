export default function generateAnswer(inputLines) {
    let total = 0;

    inputLines.forEach(line => {
        let firstNum = null, lastNum = null;

        for(let i = 0; i < line.length; i++) {
            const firstChar = line.charAt(i);
            const lastChar = line.charAt(line.length - i - 1)
            if(firstNum === null && firstChar.match(/\d/)) {
                firstNum = firstChar;
            }
            if(lastNum === null && lastChar.match(/\d/)) {
                lastNum = lastChar;
            }
            if (firstNum !== null && lastNum !== null) {
                break;
            }
        }
        total += parseInt(firstNum + lastNum, 10);
    });
    return total;
}