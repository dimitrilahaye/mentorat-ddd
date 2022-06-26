import { Actor } from "./../modules/contract/shared/types";

export default interface MailerService {
    sendTo(actor: Actor): Promise<void>;
}
