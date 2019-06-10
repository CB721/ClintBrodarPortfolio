//every year, add to views of star wars
    //variable for current date
    var currentDayMonth = moment().format("DD, MMM, YYYY");
    //variable for current year
    var currentYear = moment().format("YYYY");
    //set original time back one year for reference
    var originialTime = "04, May, 2018";
    //variable for hours from inital tally
    var starWarsHours = 233;
    //variable for yearly hour additions
    var yearHours = 20;
    //difference between the times in years
    var timeDifference = moment().diff(moment(originialTime), 'years');
    //for every additional year, add 20 hours
    for (var i = 0; i < timeDifference; i ++) {
        starWarsHours += yearHours;
    }
    //push to html
    $("#starWarsHours").prepend(starWarsHours + " ");