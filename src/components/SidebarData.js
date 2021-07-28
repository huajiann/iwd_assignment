import React from 'react';
import * as BiIcons from 'react-icons/bi';
import * as IoIcons from 'react-icons/io5';

export const SidebarData = [
    {
        title: 'Overview',
        path: '/overview',
        icon: <BiIcons.BiGlobe />,
        iconClosed: <BiIcons.BiCaretDown />,
        iconOpened: <BiIcons.BiCaretUp />,
        subNav :[
            {
                title: 'Profile Info',
                path: '/overview/profileinfo',
                icon: <BiIcons.BiUserCircle />,
            },
            {
                title: 'Education',
                path: '/overview/education',
                icon: <IoIcons.IoSchool />,
            },
            {
                title: 'Experience',
                path: '/overview/experience',
                icon: <BiIcons.BiBriefcase />,
            },
        ]
    },
    {
        title: 'Security',
        path: '/security',
        icon: <BiIcons.BiLock />,
    },
    {
        title: 'Saved',
        path: '/saved',
        icon: <BiIcons.BiBookmark />,
    },
    {
        title: 'Support',
        path: '/support',
        icon: <BiIcons.BiHelpCircle />,
    },
    
]