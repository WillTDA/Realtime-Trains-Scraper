const realtimeTrains = require("./index");

(async () => {
    let trainData = await realtimeTrains.getTrains("KGX", 1);
    console.log(JSON.stringify(trainData, null, 2));
    console.log(`Returned ${trainData.length}/10 Results Requested from Target Station! (London King's Cross) ${trainData.length < 10 ? "(The Timetable for the Current Hour was Smaller than the Requested Result Count)" : ""}`);
})();