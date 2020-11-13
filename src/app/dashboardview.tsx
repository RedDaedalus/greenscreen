import React from "react";
import { Dashboard } from "..";

export class DashboardView extends React.Component<DashboardViewProps> {

    render() {
        return <div className="DashboardView">
            <nav className="navbar navbar-dark bg-dark">
                {this.props.dashboard.options.name}
            </nav>
        </div>
    }
}

export interface DashboardViewProps {

    readonly dashboard: Dashboard;
}