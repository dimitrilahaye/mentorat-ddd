import Currency from "../../../contract/domain/Contract/currency";
import CurrencyService from "./currencyService";

export default class InMemoryCurrencyService implements CurrencyService {
    private CALCULATE_CURRENCY?: (value: number) => number;
    set calculateCurrency(fn: (value: number) => number) {
        this.CALCULATE_CURRENCY = fn;
    }

    async getValueByCurrency(value: number, currency: Currency): Promise<number> {
        if (this.CALCULATE_CURRENCY) {
            return this.CALCULATE_CURRENCY(value);
        }
        throw new Error("CALCULATE_CURRENCY not initialized");
    }
}
