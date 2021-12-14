import React, { useState } from 'react'
import {
    FaInbox,
    FaChevronDown,
    FaRegCalendar,
    FaCalendarAlt
} from 'react-icons/fa'

import { useSelectedProjectsValue } from '../../context'
import { Projects } from '../Projects';

export const Sidebar = () => {

    const { setSelectedProjects } = useSelectedProjectsValue;
    const [active, setActive] = useState('inbox');
    const [showProjects, setShowProjects] = useState(true)
    return (
        <div className="sidebar" data-testid="sidebar">
            <ul className="sidebar__generi">
                <li>
                    <span>
                        <FaInbox />
                    </span>
                    <span>Indox</span>
                </li>
                <li>
                    <span>
                        <FaRegCalendar />
                    </span>
                    <span>today</span>
                </li>
                <li>
                    <span>
                        <FaCalendarAlt />
                    </span>
                    <span>Next 7 days</span>
                </li>
            </ul>
            <div className='sidebar__middle'>
                <span>
                    <FaChevronDown />
                </span>
                <h2>projects</h2>
            </div>
            <ul className="sidebar__projects">{showProjects && <Projects />}</ul>
            {showProjects && <Projects />}
            Add Project Component Here!!!!!!!!!!!!!!
        </div>
    )
}
