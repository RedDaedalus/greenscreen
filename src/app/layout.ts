export interface AppLayout {

    tabs?: LayoutTab[];
    elements?: LayoutElement[];
}

export interface LayoutTab {

    tab: string;
    elements: LayoutElement[];
}

export interface LayoutElement {

    component: string;
    title: string;
    prototype?: any;
    state?: StateHook;
}

export interface StateHook {

    hook: string;
    target: string;
}

/*
{
    showTabs: true,
    elements: [{
        tab: "Drive",
        elements: [{
            component: "core.ProgressBar",
            title: "Ball Count",
            prototype: {
                max: 5,
                width: 2,
                height: 1
            },
            state: {
                hook: "BallCount",
                target: "data.value"
            }
        }]
    }]
}
 */