import React, { useState } from 'react'
import {
    FaInbox,
    FaChevronDown,
    FaRegCalendar,
    FaCalendarAlt,
    FaRegCalendarAlt
} from 'react-icons/fa'
import { useDispatch, useSelector } from 'react-redux';
import { selectedProjects, setShowProjects } from '../../action';
import { useSelectedProjectsValue } from '../../context'
import { AddProjects } from '../AddProjects';
import { Projects } from '../Projects';

export const Sidebar = () => {

    const dispatch = useDispatch()
    const showProjects = useSelector(state => state.showProjects.showprojects)
    const [active, setActive] = useState('inbox');
    //const [showProjects, setShowProjects] = useState(true)
  
    return (

        <div className="sidebar" data-testid="sidebar">
      <ul className="sidebar__generic">
        <li
          data-testid="inbox"
          className={active === 'inbox' ? 'active' : undefined}
        >
          <div
            data-testid="inbox-action"
            aria-label="Show inbox tasks"
            tabIndex={0}
            role="button"
            onClick={() => {
              setActive('inbox');
              dispatch(selectedProjects('INBOX'));
            }}
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                setActive('inbox');
                dispatch(selectedProjects('INBOX'));
              }
            }}
          >
            <span>
              <FaInbox />
            </span>
            <span>Inbox</span>
          </div>
        </li>
        <li
          data-testid="today"
          className={active === 'today' ? 'active' : undefined}
        >
          <div
            data-testid="today-action"
            aria-label="Show today's tasks"
            tabIndex={0}
            role="button"
            onClick={() => {
              setActive('today');
              dispatch(selectedProjects('TODAY'));
            }}
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                setActive('today');
                dispatch(selectedProjects('TODAY'));
              }
            }}
          >
            <span>
              <FaRegCalendar />
            </span>
            <span>Today</span>
          </div>
        </li>
        <li
          data-testid="next_7"
          className={active === 'next_7' ? 'active' : undefined}
        >
          <div
            data-testid="next_7-action"
            aria-label="Show tasks for the next 7 days"
            tabIndex={0}
            role="button"
            onClick={() => {
              setActive('next_7');
              dispatch(selectedProjects('NEXT_7'));
            }}
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                setActive('next_7');
                dispatch(selectedProjects('NEXT_7'));
              }
            }}
          >
            <span>
              <FaRegCalendarAlt />
            </span>
            <span>Next 7 days</span>
          </div>
        </li>
      </ul>
      <div
        className="sidebar__middle"
        aria-label="Show/hide projects"
        onClick={() => dispatch(setShowProjects(!showProjects))}
        onKeyDown={(e) => {
          if (e.key === 'Enter') dispatch(setShowProjects(!showProjects));
        }}
        role="button"
        tabIndex={0}
      >
        <span>
          <FaChevronDown
            className={!showProjects ? 'hidden-projects' : undefined}
          />
        </span>
        <h2>Projects</h2>
      </div>

      <ul className="sidebar__projects">{showProjects && <Projects />}</ul>

      {showProjects && <AddProjects />}
    </div>
    )
}
