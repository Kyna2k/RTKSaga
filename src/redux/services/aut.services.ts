import agentService from "../../common/helper/agent";
import { LoginPayload } from "../type/aut.type";


export class AutService {
    static async Login(payload: LoginPayload) {
        return await agentService.post('/login', {email : payload.email, device_token : ''})
    }
}