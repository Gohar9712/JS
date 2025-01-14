const tasks = [
    { taskName: "Առաջադրանք 1", duration: 1000 },
    { taskName: "Առաջադրանք 2", duration: 2000 },
    { taskName: "Առաջադրանք 3", duration: 1500 },
];

let totalTime = 0;

const runTasksWithTotalTime = new Promise((resolve, reject) => {
    setTimeout(() => {
        const randomNumber = Math.floor(Math.random() * 10);
        if (randomNumber > 4) {
            resolve(tasks);
        } else {
            reject("Սխալ տվյալներ");
        }
    }, 1000);
});

runTasksWithTotalTime
    .then(task1 =>{
        console.log(tasks[0].taskName)
        totalTime += tasks[0].duration
        return(totalTime)
    })
    .then(task2 =>{
        console.log(tasks[1].taskName)
        totalTime += tasks[1].duration
        return(totalTime)
    })
    .then(task3 =>{
        console.log(tasks[2].taskName)
        totalTime += tasks[2].duration
        return(totalTime)
    })
    .then(totalTime => {
        console.log(`Ընդհանուր տևողությունը՝ ${totalTime} միլիվայրկյան։`);
    })
    .catch(error => {
        console.error("Սխալ տեղի ունեցավ:", error);
    });
