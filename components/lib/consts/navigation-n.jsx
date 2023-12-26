'use client'

import {
	FaUsers,
    FaFileSignature
} from 'react-icons/fa'
import { MdOutlineLocationCity } from "react-icons/md";
import { GiMagnifyingGlass } from "react-icons/gi";

//import { FaMagnifyingGlass } from "react-icons/fa6";
//<FaMagnifyingGlass /> 
//or use this icon for the investigation module

export const DASHBOARD_SIDEBAR_LINKS = [
    {
		key: 'complaints',
		label: 'Complaints',
		path: '../Complaints',
		icon: <FaFileSignature />
	},
	{
		key: 'investigations',
		label: 'Investigations',
		path: '../Investigations',
		icon: <GiMagnifyingGlass />
	},
	{
		key: 'institutions',
		label: 'Institutions',
		path: '../Institutions',
		icon: <MdOutlineLocationCity />
	},
	{
		key: 'users',
		label: 'Users',
		path: '../Users',
		icon: <FaUsers />
	}
]
