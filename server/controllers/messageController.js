import messageService from "../services/messageService"; 

const getAllMessages = async (req, res) => {
    const response = await messageService.getAllMessages();
    return res.status(200).send(response);
};

const getMessage = async (req, res) => {
    const response = await messageService.getMessage(req.params.id);
    return res.status(200).send(response);
};

const createMessage = async (req, res) => {
    const response = await messageService.createMessage(req.body);
    return res.status(200).send(response);
};

const deleteMessage = async (req, res) => {
    const response = await messageService.deleteMessage(req.params.id);
    return res.status(200).send(response);
};
  
export default {
    getAllMessages,
    getMessage,
    createMessage,
    deleteMessage
};