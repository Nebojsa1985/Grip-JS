const data = [
    {
        "user_id": 1,
        "device": "Windows 10",
        "action": "start",
        "date_actioned": 100
    },
    {
        "user_id": 2,
        "device": "OSX 15.4",
        "action": "start",
        "date_actioned": 200
    },
    {
        "user_id": 1,
        "device": "iPhone 8s",
        "action": "start",
        "date_actioned": 250
    },
    {
        "user_id": 1,
        "device": "Windows 10",
        "action": "stop",
        "date_actioned": 370
    },
    {
        "user_id": 1,
        "device": "iPhone 8s",
        "action": "stop",
        "date_actioned": 410
    },
    {
        "user_id": 2,
        "device": "OSX 15.4",
        "action": "stop",
        "date_actioned": 490
    },
    {
        "user_id": 3,
        "device": "Android 9.1",
        "action": "start",
        "date_actioned": 700
    },
]
const first = document.querySelector('.first')
const second = document.querySelector('.second')

// getUsers function
function getUsers(records, action, startTime, endTime) {
    const dataCopy = JSON.parse(JSON.stringify(records))
    let res = []
    for (let i = 0; i < dataCopy.length; i++) {
        if(dataCopy[i].action = action && dataCopy[i].date_actioned >= startTime && dataCopy[i].date_actioned <= endTime) {
            const nex = dataCopy[i].user_id
            res.push(nex);       
        } 
    }
    if (res.length == 0) {
        console.log('There is no such items');
        first.innerHTML = 'There is no such items'
    } else {
        console.log(res);  
        first.innerHTML = '[' + res + ']'
    } 
}
// getPlaybackTime function
function getPlaybackTime(userId, records) {
    const dataCopy = JSON.parse(JSON.stringify(records))
    let filteredItemsStart = dataCopy.filter((item) => {
        return item.action == "start" && item.user_id == userId
    })
    let filteredItemsStop = dataCopy.filter((item) => {
        return item.action == "stop" && item.user_id == userId
    })

    if (filteredItemsStart.length == 0) {
        console.log('There is no start with that id. User did not start watching.');
        second.innerHTML = 'There is no start with that id. User did not start watching.'
    } else if (filteredItemsStop.length == 0) {
        console.log('There is no stop with that id. User still watching.');
        second.innerHTML = 'There is no stop with that id. User still watching.'
    } else {
        const start = filteredItemsStart[0].date_actioned
        const stop = filteredItemsStop[filteredItemsStop.length-1].date_actioned

        console.log(stop-start);
        second.innerHTML = stop-start
    }
}
//function calling
getUsers(data, "start", 700, 900)
getPlaybackTime(1, data)
