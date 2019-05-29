//every year, add to views of star wars
    
    //variable for current date
    var currentDayMonth = moment().format("DD, MMM, YYYY");
    //variable for current year
    var currentYear = moment().format("YYYY");
    //variable for may 4th 2019
    var originialTime = "04, May, 2018";
    //variable for hours
    var starWarsHours = 233;

    // Difference between the times
    var timeDifference = moment().diff(moment(originialTime), 'years');
    console.log(timeDifference);

    if (timeDifference === 1) {
        starWarsHours + 20;
        console.log(starWarsHours);
    }

    //update every may 4th
    //add 20 to hours total
    //push to html
    $("#starWarsHours").prepend(starWarsHours + " ");