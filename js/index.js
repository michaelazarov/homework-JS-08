//hw-08-01----------------------------
// Напилите код, выводящий на страницу текущее время в течение 100 секунд
// Подсказка: создайте элемент, в котором будет отображаться текущее время
// Контент элемента должен обновляться каждую секунду
//------------------------------------
var body = document.body
while ( body.firstChild ) body.removeChild( body.firstChild )

currentTime = body.appendChild( document.createElement( 'div' ))
currentTime.style = `display: flex;
              justify-content: center; 
              align-items: center;
              background-color: #ff00ff50;
              border: dotted 1px yellow;
              width: ${150}px;
              height: ${100}px;
              font-weight: bold;
              font-size: 28px;
              `

var maxInterval = 100000

//Вариант 1 с использованием setInterval            
// currentTime.innerText = new Date().toLocaleTimeString()
// var timerId = setInterval( 
//     ()=>{currentTime.innerText = new Date().toLocaleTimeString()}, 1000)
// setTimeout( ()=> clearInterval(timerId) , maxInterval )

//Вариант2
// function getTime(interval = 0){
//     currentTime.innerText = new Date().toLocaleTimeString()
//     interval < maxInterval && setTimeout( ()=> getTime(interval += 1000), 1000 )
//     return
// }
// getTime()

// Вариант3          
// currentTime.innerText = new Date().toLocaleTimeString()
// setTimeout(function run() {
//     currentTime.innerText = new Date().toLocaleTimeString()
//     0 < (maxInterval -= 1000) && setTimeout(run, 1000)
//     return       
// }, 1000)

//Вариант4
// var getTime = () => {
//     return ( function returnTimeMoment () {
//         currentTime.innerText = new Date().toLocaleTimeString()           
//         0 < (maxInterval -= 1000) && setTimeout( returnTimeMoment , 1000 )
//     })()
// }
// getTime()

//Вариант5 
function getTime(){
    currentTime.innerText = new Date().toLocaleTimeString()
    0 < (maxInterval -= 1000) && setTimeout( getTime , 1000 )
    return
}
getTime()



//hw-08-02----------------------------
// Завершите код рекурсивной функции typeMessage так, чтобы при 
// ее вызове на страницу выводился один символ в секунду
// var typeMessage = ( function ( velocity ) {
//     let container = document.getElementById ( "demo" ) ?
//         document.getElementById ( "demo" ) :
//         document.body.appendChild (
//             document.createElement ( "h3" )
//         )
//     container.style = `color: magenta;`
//     var index = 0
//     return function ( message ) {
//         ...
//     }
// })( 1 )
// typeMessage ( `Welcome to the hell` )
//------------------------------------

while (document.body.firstChild)
    document.body.removeChild(document.body.firstChild)

// Варианты 1-4. Тут - velocity - это количество символов выводимых за 1 секунду
// Вариант5. Тут - velocity - это множитель увеличения интервала времени

// Вариант1
// function writeMessage(con, mes, vel, len = 0){
//     con.innerText = mes.slice(0, len+vel)
//     len <= mes.length && setTimeout( ()=> writeMessage(con, mes, vel, len += vel), 1000 )
//     return
// }
// var typeMessage = ( function ( velocity ) {
//     let container = document.getElementById ( "demo" ) ?
//         document.getElementById ( "demo" ) :
//         document.body.appendChild (
//             document.createElement ( "h3" )
//         )
//     container.style = `color: magenta;`
//     var index = 0
//     return function ( message ) {
//         container.id = "demo"
//         writeMessage(container, message, velocity)    
//     }
// })( 1 )
// typeMessage ( `Welcome to the hell` )

// Вариант2
// function writeMessage(){
//     console.log(this)
//     container.innerText = message.slice(0, len+velocity)
//     len += velocity
//     len <= message.length && setTimeout( ()=> writeMessage.call(this), 1000 )
//     return
// }
// var typeMessage = ( function ( velocity ) {
//     let container = document.getElementById ( "demo" ) ?
//         document.getElementById ( "demo" ) :
//         document.body.appendChild (
//             document.createElement ( "h3" )
//         )
//     container.style = `color: magenta;`
//     var index = 0
//     return function ( message ) {
//         container.id = "demo"
//         len = 0
//         console.log(this)
//         typeMessage(container.innerText = message.slice(0, len+velocity))
// //         writeMessage.call(this)    
//     }typeMessage()
// })( 1 )
// typeMessage ( `Welcome to the hell` )

// Вариант3
// function writeMessage(con, mes, vel, len){
//     con.innerText = mes.slice(0, len+vel)
//     len <= mes.length && setTimeout( ()=> writeMessage(con, mes, vel, len += vel), 1000 )
//     return
// }
// var typeMessage = ( function ( velocity ) {
//     let container = document.getElementById ( "demo" ) ?
//         document.getElementById ( "demo" ) :
//         document.body.appendChild (
//             document.createElement ( "h3" )
//         )
//     container.style = `color: magenta;`
//     var index = 0
//     return function ( message ) {
//         container.id = "demo"
//         writeMessage(container, message, velocity, index)    
//     }
// })( 1 )
// typeMessage ( `Welcome to the hell` )

// Вариант4. 
// var typeMessage = (function(velocity) {
//     let container = document.getElementById("demo") ? document.getElementById("demo") : document.body.appendChild(document.createElement("h3"))
//     container.style = `color: magenta;`
//     var index = 0
//     return function(message) {
//         container.id = "demo"
//         function writeMessage() {
//             container.innerText = message.slice(0, index + velocity)
//             index <= message.length && setTimeout(()=>writeMessage(index += velocity), 1000)
//             return
//         }
//         writeMessage()
//     }
// }
// )(1)
// typeMessage(`Welcome to the hell`)

// Вариант5. тут - velocity - это приращение интервала времени в секундах
var typeMessage = (function(velocity) {
    let container = document.getElementById("demo") ? document.getElementById("demo") : document.body.appendChild(document.createElement("h3"))
    container.style = `color: magenta;`
    var index = 0
    return function(message) {
        container.id = "demo"
        function writeMessage() {
            container.innerText = message.slice(0, index)
            index <= message.length && setTimeout(()=>writeMessage(index++), 1000*velocity)
            return
        }
        writeMessage()
    }
}
)(1)
typeMessage(`Welcome to the hell`)


//hw-08-03----------------------------
// Нужно сделать так, чтобы у всех экзепляров, созданных конструктором 
// User, был унаследованный метод counter(), который считает созданные 
// конструктором экземпляры. Каждый вызов конструктора увеличивает 
// счетчик экземпляров на 1 и помещать новое значение счетчика в 
// свойство id созданного экземпляра:
// function User ( name ) {
//     this.name = name
//     this.id = this.counter()
// }
// ...
// var users = [
//     new User ( "Семен" ),
//     new User ( "Антон" ),
//     new User ( "Демьян" ),
//     new User ( "Василий" )
// ]
// :warning: После выполнения кода:
// users[1].id = users[1].counter()
// свойство id экземпляра не должно измениться, так же, как и 
// значение счетчика
//------------------------------------

function User(name) {
    this.name = name
    this.id = this.counter()
}

//Вариант1
// User.prototype.counter = function counter() {
//     var i = 0
//     return function() {
//         return this.id === undefined ? i++ : this.id
//     }
// }()

//Вариант2
// User.prototype.counter = (function() {
//     var i = 0
//     return function() {
//         return this.id === undefined ? i++ : this.id
//     }
// })()

//Вариант3
User.prototype.counter = (() => {
    var i = 0
    return function() {
        return this.id === undefined ? i++ : this.id
    }
})()

var users = [
    new User("Семен"), 
    new User("Антон"), 
    new User("Демьян"), 
    new User("Василий")
]




