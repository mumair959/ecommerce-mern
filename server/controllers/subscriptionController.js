import subscriptionService from "../services/subscriptionService"; 

const subscribe = async (req, res) => {
    const response = await subscriptionService.subscribe(req.body);
    return res.status(200).send(response);
};
  
export default {
    subscribe
};