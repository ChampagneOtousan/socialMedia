class User {
  constructor(email, password){
    this.email = email
    this.password = password
    this.inbox = []
  }

  sendMessage(rec) {
    let msg = new Message()
    rec.inbox.push(msg)
  }
}

class Message {
  constructor(content) {
    this.content = prompt("Enter a message")
  }
}

user1 = new User("estebanito@platano.com", "swaggity")
user2 = new User("estebano@plantain.com", "hulusucks")

let user1form = document.getElementById("user1-form")
let user2inbox = document.getElementById("user2-inbox")

function sendMessage() {
  let text = document.getElementById("msg-content")
  let p = document.createElement("p")
  p.innerText = text.value
  user2inbox.appendChild(p)
  alert(text.value)
}

user1form.addEventListener("submit", function(event) {
  event.preventDefault()
  sendMessage()
})
