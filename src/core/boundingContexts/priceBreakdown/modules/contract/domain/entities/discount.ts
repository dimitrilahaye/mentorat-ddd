import DiscountCode, { DiscountCodeInput, DiscountCodeOutput } from "../value-objects/discountCode";
import DiscountValue, {
    DiscountValueInput,
    DiscountValueOutput,
} from "../value-objects/discountValue";

export type DiscountProps = {
    value: DiscountValueInput;
    code: DiscountCodeInput;
};

export type UpdateDiscountProps = Partial<DiscountProps>;

export type DiscountOutput = {
    value: DiscountValueOutput;
    code: DiscountCodeOutput;
};

export default class Discount {
    private value: DiscountValue;

    private code: DiscountCode;

    constructor(props: DiscountProps) {
        this.value = new DiscountValue(props.value);
        this.code = new DiscountCode(props.code);
    }

    public update({ value, code }: UpdateDiscountProps): void {
        if (value) {
            this.value = new DiscountValue(value);
        }
        if (code) {
            this.code = new DiscountCode(code);
        }
    }

    // to conserve entity immutability through adapters
    public get output(): DiscountOutput {
        return {
            code: this.code.get(),
            value: this.value.get(),
        };
    }
}
