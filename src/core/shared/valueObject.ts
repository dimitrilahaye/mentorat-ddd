export default abstract class ValueObject<Output> {
    protected value!: Output;

    protected abstract validate(): boolean;

    public abstract get(): Output;
}
