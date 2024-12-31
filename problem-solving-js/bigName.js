const checkFriends = (array) => {
    let biggestName = array[0];
    for (let i = 1; i < array.length; i++) {
        let element = array[i];
        if (element.length > biggestName.length) {
            biggestName = element;
        }
    }
    return biggestName;
}

let friends = ["rahim", "karim", "abdul", "sadsd", "heroAlom"];
let bigName = checkFriends(friends);
console.log(bigName);
