number = function(){
    var year = moment().format('YYYY');
    var month = moment().format('MM');
    var day = moment().format('D');
    var dayTo = new Date(year, month, day, 0, 0, 0).valueOf();
    var dayFrom = dayTo - 86400000;
    var count = Tickets.find({ submitted: { $gte : dayTo, $lt : dayFrom } }).count();
    var yearNumber = moment().format('YY');
    var dayNumber = moment().format('DDDD');
    var countNumber = count + 1;
    var number = yearNumber + "-" + dayNumber + "-" + countNumber;


}