import agentService from "../../common/helper/agent";
import { LoginPayload } from "../type/aut.type";


export class AutService {
    async Login(payload: LoginPayload) {
        return await agentService.post('/login', payload)
    }
}