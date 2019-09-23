//every year, add to views of star wars
    //constiable for current date
    const currentDayMonth = moment().format("DD, MMM, YYYY");
    //constiable for current year
    const currentYear = moment().format("YYYY");
    //set original time back one year for reference
    const originialTime = "04, May, 2018";
    //constiable for hours from inital tally
    const starWarsHours = 233;
    //constiable for yearly hour additions
    const yearHours = 20;
    //difference between the times in years
    const timeDifference = moment().diff(moment(originialTime), 'years');
    //for every additional year, add 20 hours
    for (let i = 0; i < timeDifference; i ++) {
        starWarsHours += yearHours;
    }
    //push to html
    $("#starWarsHours").prepend(starWarsHours + " ");