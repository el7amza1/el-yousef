import { SidebarComponent } from '@syncfusion/ej2-react-navigations';
import * as React from 'react';


export default class Sidebar extends React.Component<{}, {}> {
    public dockBar: SidebarComponent;
    constructor(props: any) {
        super(props);
        this.toggleClick = this.toggleClick.bind(this);
    }
    // Toggle(Open/Close) the Sidebar
    public toggleClick() {
        this.dockBar.toggle();
    }
    public render() {
        return (
            <div className="control-section">
                <div id="wrapper">
                    {/* Initializing the Sidebar component */}
                    <SidebarComponent id="dockSidebar" ref={(Sidebar:any) => this.dockBar = Sidebar as SidebarComponent} enableDock={true} dockSize="72px" width="220px" >
                        <div className="dock">
                            <ul>
                                <li className="sidebar-item" id="toggle" onClick={this.toggleClick} >
                                    <span className="e-icons expand"/>
                                    <span className="e-text" title="menu">Menu</span>
                                </li>
                                <li className="sidebar-item">
                                    <span className="e-icons home"/>
                                    <span className="e-text" title="home">Home</span>
                                </li>
                                <li className="sidebar-item">
                                    <span className="e-icons profile"/>
                                    <span className="e-text" title="profile">Profile</span>
                                </li>
                                <li className="sidebar-item">
                                    <span className="e-icons info"/>
                                    <span className="e-text" title="info">Info</span>
                                </li>
                                <li className="sidebar-item">
                                    <span className="e-icons settings"/>
                                    <span className="e-text" title="settings">Settings</span>
                                </li>
                            </ul>
                        </div>
                    </SidebarComponent>
                 
                </div>
            </div>
        )
    }
}