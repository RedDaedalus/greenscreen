export default abstract class RemoteProtocol {

    readonly data: Map<string, any> = new Map();
    readonly handlers: Map<string, Function> = new Map();

    dispatchUpdate(key: string, value: any): void {
        this.data.set(key, value);
        this.handlers.get(key)?.call(this, value);
    }

    subscribe(key: string, handler: Function): void {
        this.handlers.set(key, handler);
    }
}