console.log('Hello World!');

let payRateUsd = 80
const projectHours = 40
const workHours = 9 * 5
console.log('iwni qabul qila olamanmi: ' + (workHours > projectHours))
console.log('iw ucun summa: ' + (projectHours * payRateUsd))

const projectName = 'online magazin'
const price = 4000
const author = 'Kuti Boq'

const template = `${author} ${projectName} ${price}$ ga zakaz qildi`

console.log(template)

const money = 120

if (money >= 60) {
    console.log('Mahsulotni sotib olish mumkin bich emas')
} else {
    console.log('Mahsulotni sotib ololmaydi puli yuq kuti boqni')
}

console.log(`uni balansi: ${money}$`)

const myCash = 100
const procent = 0.07
const result = myCash * (1 + procent / 12) ** 24
const house = 13500

if (result >= house) {
    console.log(`iwlagan pulim: ${result}$. Kettim uy sotvolaman naxxuy, onasini emsin. Qolgan pulim: ${result - house}`)
} else {
    console.log(`iwlagan pulim: ${result}$. Uyga pulim yetmayapti blyat suka. Menda bor yog'i ${result}$ pulim bor. Kallanga ewwak sikkur.`)
}

const role = 'nutiti'

if (role === 'manager') {
    console.log('Manager')
} else if (role === 'admin') {
    console.log('Admin')
} else if (role === 'ceo') {
    console.log('CEO')
} else {
    console.log('miy tebya ne znayim')
}

switch (role) {
    case 'manager': 
        console.log('Manager')
        break
    case 'admin':
        console.log('Admin')
        break
    case 'ceo':
        console.log('CEO')
        break
    default:
        console.log('Miy tebya ne znayiim')
}

let num = 0

switch (true) {
    case num > 0:
        console.log('Musbat son')
        break
    case num < 0:
        console.log('Manfiy')
        break
    default: 
    console.log('bu sonni kotinga tiq')
}

const bmw = 14000
const mustang = 18000
const budget = 123300002

let message

if (budget > bmw) {
    message = 'bmw olaman'
} else if (budget > bmw, budget > mustang) {
    message = 'ikkalasiniyam olaman'
} else {
    message = 'piwkom yur bich'
}

console.log(message)

const user = prompt('Сколько будет 7 + или - 15?')

switch (true) {
    case user > 0:
        console.log('Viy ne robot:' + ' Uspex')
        break
    case user < 0:
        console.log('Viy robot:' + ' Ne uspex')
        break
    default:
        console.log('viy nekto')
        break
}