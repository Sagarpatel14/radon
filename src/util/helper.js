const printDate = function(){
    let data = new Date();
    let todayDate = data.getDate();
    console.log(todayDate)
}

const printMonth = function(){
    let data = new Date();
    let mon = data.getMonth();
    console.log(mon)
}

const getBatchInfo = function(){
    let batchname = "Radon";
    let week = "3rd"
    let dayy = "3rd"
    console.log(`${batchname},${week} week ${dayy} day the topic for today is Nodejs module system`)
}

module.exports.printDate = printDate
module.exports.printMonth = printMonth
module.exports.getBatchInfo = getBatchInfo
