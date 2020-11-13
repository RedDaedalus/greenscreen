import { RemoteProtocol } from "./protocol";

export class MockProtocol extends RemoteProtocol {

    constructor(initalState: any) {
        super();

        for (const key in initalState) {
            this.dispatchUpdate(key, initalState[key]);
        }
    }
}