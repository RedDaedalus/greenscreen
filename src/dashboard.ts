import { RemoteProtocol } from "./protocol";
import { AppLayout } from "./app";

export class Dashboard {

    readonly options: DashboardOptions;

    constructor(options: DashboardOptions) {
        this.options = options;
    }
}

export interface DashboardOptions {

    readonly name: string;
    readonly protocol: RemoteProtocol;
    readonly layout: AppLayout;
}