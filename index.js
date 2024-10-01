
function printName(userName) {
    const capitalize = str => {
        return str. toUpperCase();
    }

    const capName = capitalize(userName);

    console.log(capName);
}

printName('bob');