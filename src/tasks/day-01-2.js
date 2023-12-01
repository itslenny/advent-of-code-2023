export default function generateAnswer(inputLines) {
    let total = 0;

    const wordNums = {
        one: '1',
        two: '2',
        three: '3',
        four: '4',
        five: '5',
        six: '6',
        seven: '7',
        eight: '8',
        nine: '9',
    };
    const words = Object.keys(wordNums);

    inputLines.forEach(line => {
        let firstNum = null, lastNum = null;

        for(let i = 0; i < line.length; i++) {
            let firstChar = line.charAt(i);
            let lastChar = line.charAt(line.length - i - 1)

            for (let j = 0; j < words.length; j++) {
                const word = words[j];
                if (line.substr(i, word.length) === word) {
                    firstChar = wordNums[word];
                }
                if (line.substr(-(i + 1), word.length) === word) {
                    lastChar = wordNums[word];
                }
            }

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