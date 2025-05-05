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

const myCash = 1200
const percent = 0.07
const result = myCash * (1 + percent / 12) ** 24
const house = 13500

if (result >= house) {
    console.log(`iwlagan pulim: ${result}$. Kettim uy sotvolaman naxxuy, onasini emsin. Qolgan pulim: ${result - house}`)
} else {
    console.log(`iwlagan pulim: ${result}$. Uyga pulim yetmayapti blyat suka. Menda bor yog'i ${result}$ pulim bor. Kallanga ewwak sikkur.`)
}