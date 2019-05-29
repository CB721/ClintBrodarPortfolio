//every year, add to views of star wars
    
    //variable for current date
    var currentTime = moment().format("DD, MMM, YYYY");
    //variable for may 4th 2019
    var originialTime = "04, May, 2019";

    console.log(currentTime.diff(originialTime, 'days'));
    //update every may 4th
    //add 20 to hours total
    //push to html