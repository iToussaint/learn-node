
const EventsEmitter = require('node:events')

const superHero = require('./super-hero')


console.log(superHero.getName())



const emitter = new EventsEmitter()

console.log(emitter)


emitter.on("order-pizza", (quantity)=>{
    console.log(`${quantity} PIZZAS ORDERED!!!!`)
})



emitter.emit("order-pizza", 5)




