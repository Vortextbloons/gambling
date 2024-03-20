let number = null
function add_to_list(name,ticket){
    const display = document.getElementById('display')
    const li = document.createElement('li')
    li.className = 'list_item'
    li.textContent = `Name: ${name}, Tickets: ${ticket}`
    display.appendChild(li)    
  
}

function random(min,max){
    var fnumber = Math.floor(Math.random() * (max - min + 1))+ min
    console.log(fnumber)
    return fnumber
    
}
let People = []
function add_person(){
    const name = document.getElementById('name')
    const ticket = document.getElementById('number_of_tickets')
    if(name.value !='' && ticket.value != ''){
        for (let i = 0; i < parseInt(ticket.value); i += 1){
            People.push(name.value)
        } 
    }
    else{
        alert('Need To Enter A Name')
        return
    }
    window.global_name = name.value
    window.global_ticket = ticket.value   
    console.log(name.value,ticket.value)
    add_to_list(global_name,global_ticket)
    name.value = ""
    ticket.value = ""
  
}
function submit(){
    if(global_name == "" && global_ticket == ''){
        global_name = ''
        global_ticket = ''
        alert('Need To Enter People')
    }
    else{
        console.log(People,global_name,global_ticket)
        if (People.length === 0){
            alert("No One Won")
            return
        }
        else{
            const winner_display = document.getElementById('winner')
            const random_index = random(0, parseInt(People.length) - 1)
            console.log(` The Random Index Is ${random_index}`)
            const winner = People[random_index] 
            winner_display.innerText = `The Winner Is ${winner}`
            const del = document.querySelectorAll('.list_item')
            del.forEach(element => {
                element.remove()
            }
            )
        }
        
        
        
        People = []
        //global_name = ''
        //global_ticket = ''
    }
    
    
}

