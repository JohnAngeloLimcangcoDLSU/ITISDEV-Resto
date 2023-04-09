import React from 'react'
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';

export const SidebarData_StockController = [
    {
        titlehead: 'Ingredients'
    },
    {
        title: 'Input New Ingredient',
        icon: <ArrowRightAltIcon />,
        path: '/newingredient',
    },
    {
        title: 'Restock Previous Ingredient',
        icon: <ArrowRightAltIcon />,
        path: '/adddish',
    },
    {
        titlehead: 'Reports'
    },
    {
        title: 'View Inventory Reports',
        icon: <ArrowRightAltIcon />,
        path: '/inventoryreports',
    },
    {
        title: 'View Inventory History Reports',
        icon: <ArrowRightAltIcon />,
        path: '/inventoryhistoryreports',
    },
    {
        title: 'View Spoilage Reports',
        icon: <ArrowRightAltIcon />,
        path: '/spoilagereports',
    },
    {
        title: 'View Discrepancy Reports',
        icon: <ArrowRightAltIcon />,
        path: '/discrepancyreports',
    },
]