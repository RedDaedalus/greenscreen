import RemoteProtocol from "./protocol";

export default class MockProtocol extends RemoteProtocol {

    constructor(initalState: any) {
        super();

        for (const key in initalState) {
            this.dispatchUpdate(key, initalState[key]);
        }
    }
}