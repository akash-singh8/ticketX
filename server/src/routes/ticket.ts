import { Router } from "express";
import { raiseTicket, updateTicketStatus } from "../controllers/tickets";

const ticketRouter = Router();

// no need to validate stats each time, as it increase the request on database
// for that add verified & banned status of the user in the token itself

ticketRouter.put("/update", updateTicketStatus);

ticketRouter.post("/raise", raiseTicket);

export default ticketRouter;
