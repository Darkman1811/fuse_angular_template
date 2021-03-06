import { FuseNavigation } from'../../@fuse/types';

export const navigationCustom: FuseNavigation[] = [
    {
        id       : 'applications',
        title    : 'Applications 2',
        translate: 'NAV.APPLICATIONS',
        type     : 'group',
        icon     : 'apps',
        children : [
            {
                id       : 'dashboards',
                title    : 'Dashboards',
                translate: 'NAV.DASHBOARDS',
                type     : 'collapsable',
                icon     : 'dashboard',
                children : [
                    {
                        id   : 'analytics',
                        title: 'Analytics',
                        type : 'item',
                        url  : '/apps/dashboards/analytics'
                    },
                    {
                        id   : 'project',
                        title: 'Project',
                        type : 'item',
                        url  : '/apps/dashboards/project'
                    }
                ]
            }
        ]        
    },
    {
        id       : 'calendar',
        title    : 'Calendar',
        translate: 'NAV.CALENDAR',
        type     : 'item',
        icon     : 'today',
        url      : '/apps/calendar'
    },
    {
        id       : 'feature',
        title    : 'Feature',
        type     : 'item',
        icon     : 'today',
        url      : '/feature'
    }

];
