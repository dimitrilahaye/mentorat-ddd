import { Actor } from "./../modules/contract/shared/types";
import CarrierPrice from "./../modules/trainline/domain/Trainline/carrierPrice";

export type ConvertedCurrency = {
    value: number;
};

export default interface CurrencyService {
    convertPriceForActor(price: CarrierPrice, actor: Actor): Promise<ConvertedCurrency>;
}
