// console.log('Hello World!');
//
// let payRateUsd = 80
// const projectHours = 40
// const workHours = 9 * 5
// console.log('iwni qabul qila olamanmi: ' + (workHours > projectHours))
// console.log('iw ucun summa: ' + (projectHours * payRateUsd))
//
// const projectName = 'online magazin'
// const price = 4000
// const author = 'Kuti Boq'
//
// const template = `${author} ${projectName} ${price}$ ga zakaz qildi`
//
// console.log(template)
//
// const money = 120
//
// if (money >= 60) {
//     console.log('Mahsulotni sotib olish mumkin bich emas')
// } else {
//     console.log('Mahsulotni sotib ololmaydi puli yuq kuti boqni')
// }
//
// console.log(`uni balansi: ${money}$`)
//
// const myCash = 1200
// const percent = 0.07
// const result = myCash * (1 + percent / 12) ** 24
// const house = 13500
//
// if (result >= house) {
//     console.log(`iwlagan pulim: ${result}$. Kettim uy sotvolaman naxxuy, onasini emsin. Qolgan pulim: ${result - house}`)
// } else {
//     console.log(`iwlagan pulim: ${result}$. Uyga pulim yetmayapti blyat suka. Menda bor yog'i ${result}$ pulim bor. Kallanga ewwak sikkur.`)
// }
//

function logName(name, surname) {
    console.log(`My name is ${name} ${surname}`);
}

logName('Asliddin', 'Mukhammadiev')

function countDepositSum(depositInUsd, month, rate) {
    const sum = depositInUsd * (1 + rate / 12) ** month
    return sum
}

const result = countDepositSum(12000, 24, 0.18)
console.log(result)

const poft = function (num) {
    return num * num
}
console.log(poft(8))

const toPowerArrow = (num, power) => {
    const res = num ** power
    return res
}

console.log(toPowerArrow(3, 4))


function computerCredit (age, hasJob = false) {
    if (age >= 24 && hasJob) {
        return 500
    } else if (age <= 24) {
        return 100
    } else {
        return 0
    }
}

function canBuy(productPrice, age, money, hasJob = false) {
    const creditMoney = computerCredit(age, hasJob)
    return productPrice <= money + creditMoney
}

console.log(canBuy(2000, 26, 1500, 'developer'))

const roles = ['admin', 'user', 'administrator']
console.log(roles.at(-1))

const usersName = new Array('user', 'administrator', 'user', 'administrator')
console.log(usersName)

const array = usersName.push('Aslee')
console.log(usersName.length)

usersName.unshift('Sudoo')
console.log(usersName)

const el = usersName.pop()
console.log(el)
console.log(usersName)

const el2 = usersName.shift()
console.log(el2)
console.log(usersName)

const tasks = ['Task 1']

function addTask(task) {
    tasks.push(task)
}

function removeTask(task) {
    const index = tasks.indexOf(task)
    tasks.splice(index, 1)
}

function proritizeTask(task) {
    const index = tasks.indexOf(task)
    const oldTask = tasks[index]
    tasks.splice(index, 1)
    tasks.unshift(oldTask)
}

addTask('Task 2')
addTask('Task 3')
addTask('Task 4')

console.log(tasks)
removeTask('Task 3')
console.log(tasks)

proritizeTask('Task 4')
console.log(tasks)































