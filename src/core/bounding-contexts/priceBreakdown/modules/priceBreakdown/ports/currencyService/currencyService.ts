import Currency from "../../../contract/domain/Contract/currency";

export default interface CurrencyService {
    getValueByCurrency(value: number, currency: Currency): Promise<number>;
}
