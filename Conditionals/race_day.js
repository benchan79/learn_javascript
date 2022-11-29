let raceNumber = Math.floor(Math.random() * 1000);

let early = false;

let age = 18;

if (early && age > 18) {
    raceNumber += 1000;
}

if (early && age > 18) {
    console.log(`Start time: 9:30am, Race number: ${raceNumber}`);
}   else if (!early && age > 18) {
    console.log(`Start time: 11:00am, Race numner: ${raceNumber}`);
}   else if (age < 18) {
    console.log(`Start time: 12:30pm, Race number: ${raceNumber}`);
}   else {
    console.log('Please see registration desk')
}

