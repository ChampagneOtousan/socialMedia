class User {
  constructor(email, password) {
    this.email = email
    this.password = password
    this.inbox = []
  }

  sendMessage() {
    let msg = new Message()
    console.log("Message sent: " + msg.content)
    recipient.inbox.push(msg)
  }
}

class Message {
  constructor() {
    this.content = prompt("Enter a message")
  }
}

user1 = new User("estebanito@platano.com", "swaggy")
user2 = new User("estebano@plantain.com", "hulusucks")
