// function that returns any given night’s number of hours of rest
const getSleepHours = day => {
    day = day.toLowerCase();
    switch (day) {
        case 'monday':
            return 8
            break;
        case 'tuesday':
            return 8
            break;
        case 'wednesday':
            return 8
            break;
        case 'thursday':
            return 8
            break;
        case 'friday':
            return 8
            break;
        case 'saturday':
            return 8
            break;
        case 'sunday':
            return 8
            break;
        default:
            return 'Error!'
    }
  };

// console.log(getSleepHours('wednesday'));

// Function to get actual sleep hours and return the sum using implicit return
// const getActualSleepHours = () => getSleepHours('monday') + 
//                                     getSleepHours('tuesday') + 
//                                     getSleepHours('wednesday') + 
//                                     getSleepHours('thursday') + 
//                                     getSleepHours('friday') + 
//                                     getSleepHours('saturday') + 
//                                     getSleepHours('sunday');

// Extra Practice: implement getActualSleepHours without calling getSleepHours
const getActualSleepHours = () => 6 + 7 + 9 + 8 + 5 + 10 + 11;
// console.log(getActualSleepHours())

// Function to get the ideal sleep hours per week
// const getIdealSleepHours = () => {
//     const idealHours = 8; // ideal sleep hours per night
//     return idealHours * 7;
// }

// Extra Practice: Pass an argument, like getIdealSleepHours(8) where 8 is the ideal hours per night.
const getIdealSleepHours = idealHours => idealHours * 7;

// console.log(getIdealSleepHours())

const calculateSleepDebt = () => {
    const actualSleepHours = getActualSleepHours();
    const idealSleepHours = getIdealSleepHours(8);
    const sleepDifference = Math.abs(idealSleepHours - actualSleepHours);
    if (actualSleepHours === idealSleepHours) {
        console.log("You have the perfect amount of sleep.");
    } else if (actualSleepHours > idealSleepHours) {
        console.log(`You got ${sleepDifference} hour(s) more sleep than you needed this week.`);
    } else {
        console.log(`You got ${sleepDifference} hour(s) less sleep than you needed this week. Get some rest`);
    }
}

calculateSleepDebt();