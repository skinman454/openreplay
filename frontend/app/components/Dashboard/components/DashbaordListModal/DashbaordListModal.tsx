import React from 'react';
import Modal from 'react-modal';
import { useStore } from 'App/mstore';
import { SideMenuitem, SideMenuHeader, Icon, Button } from 'UI';

function DashbaordListModal(props) {
    const { dashboardStore } = useStore();
    const dashboards = dashboardStore.dashboards;
    const activeDashboardId = dashboardStore.selectedDashboard?.dashboardId;
    return (
        <div className="bg-white h-screen" style={{ width: '300px'}}>
            <div className="color-gray-medium uppercase p-4 text-lg">Dashboards</div>
            <div>
                {dashboards.map((item: any) => (
                    // <div className="px-4 py-3 hover:bg-gray-lightest cursor-pointer">
                    //     {item.name}
                    // </div>
                    <div key={ item.dashboardId } className="px-4">
                    <SideMenuitem
                        key={ item.dashboardId }
                        active={item.dashboardId === activeDashboardId}
                        title={ item.name }
                        iconName={ item.icon }
                        // onClick={() => onItemClick(item)}
                        leading = {(
                            <div className="ml-2 flex items-center">
                                <div className="p-1"><Icon name="user-friends" color="gray-light" size="16" /></div>
                                {item.isPinned && <div className="p-1"><Icon name="pin-fill" size="16" /></div>}
                            </div>
                        )}
                    />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default DashbaordListModal;