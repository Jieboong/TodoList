export default() => {
    const now = new Date();
    const year = now.getFullYear();
    const monthList = new Array("Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec");
    const month = monthList[now.getMonth()];
    const date = String.format('{0} {1}',month, now.getDate());
    const time = now.getTime();

    const dateInfo = {
        year,
        date,
        time
    }

    return dateInfo;
}

String.format = function() { 
    let args = arguments;
    return args[0].replace(/{(\d+)}/g, function(match, num) {
        num = Number(num) + 1; 
        return typeof(args[num]) != undefined ? args[num] : match; }); } 