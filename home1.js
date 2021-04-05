const firstRow = 'мама мылаааа раму';
const secondRow = 'собака друг человека';

function countChar(Row, sym) {
    count = 0;
    for (let i = 0; i < Row.length; i += 1) {
        if (Row.charAt(i) === sym) {
            count += 1
        }
    }
    return count;
};

function getRow(firstRow, secondRow) {
    if (countChar(firstRow, 'а') > countChar(secondRow, 'а')) {
        return firstRow;
    }
    return secondRow;
}

console.log(getRow(firstRow, secondRow)); // мама мыла раму