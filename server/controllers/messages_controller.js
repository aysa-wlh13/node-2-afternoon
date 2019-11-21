let messages = [];

let id = 0;

module.exports = {
    //get
    read: (req, res) => {
        res.status(200).send(messages)

    },

    //post
    create: (req, res) => {
        const {text, time} = req.body;

        messages.push({ id, text, time });

        id++;

        res.status(200).send(messages);
    },

    //put
    update: (req, res) => {
        const { text } = req.body;
        const updateID = req.params.id;
        const messageIndex = messages.findIndex(message => message.id == updateID);
        let message = messages[messageIndex];
      
        messages[messageIndex] = {
          id: message.id,
          text: text || message.text,
          time: message.time
        };
      
        res.status(200).send(messages);
      },

    //delete
    delete: (req, res) => {
        const deleteID = req.params.id;    

        const messageIndex = messages.findIndex(message => message.id == deleteID);

        messages.splice(messageIndex, 1);
        
        res.status(200).send(messages);
    }
}