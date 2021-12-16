import { useState, useEffect } from "react";
import { firebase } from "../firebase";
import { collatedTasksExist } from '../helpers'
import moment from "moment";
import { useSelector, useDispatch } from 'react-redux'
import { setArchivedTasks, setProjects, setTasks } from "../action";


export const useTasks = selectedproject => {
    //const [tasks, setTask] = useState([]);
    //const [archivedTasks, setArchivedTasks] = useState([]);

    const tasks = useSelector((state) => state.Task.settask);
    console.log("hoooks",tasks)
    const archivedTasks = useSelector((state) => state.setArchived.setarchived)
    const dispatch = useDispatch();

    useEffect(() => {
        let unsubscirbe = firebase.firestore()
            .collection('tasks')
            .where('userId', '==', "admin@");

        unsubscirbe =
            selectedproject && !collatedTasksExist(selectedproject)
                ? (unsubscirbe = unsubscirbe.where('projectId', '==', selectedproject))
                : selectedproject === 'TODAY'
                    ? (unsubscirbe = unsubscirbe.where(
                        'date',
                        '==',
                        moment().format('DD/MM/YYYY')
                    ))
                    : selectedproject === 'INBOX' || selectedproject === 0
                        ? (unsubscirbe = unsubscirbe.where('date', '==', ''))
                        : unsubscirbe;

        unsubscirbe = unsubscirbe.onSnapshot(snapshot => {
            const newTasks = snapshot.docs.map(task => ({
                id: task.id,
                ...task.data(),
            }));

            dispatch(setTasks(
                selectedproject === 'NEXT_7'
                    ? newTasks.filter(
                        task =>
                            moment(task.date, 'DD-MM-YYYY').diff(moment(), 'days') <= 7 &&
                            task.archived !== true
                    )
                    : newTasks.filter(task => task.archived !== true)
            ));
            dispatch(setArchivedTasks(newTasks.filter(task => task.archived !== false)))
        });
        return () => unsubscirbe()
    }, [selectedproject]);

    return { tasks, archivedTasks }
};


export const useProjects = () => {
    //const [projects, setProjects]= useState(null)
    const projects = useSelector((state) => state.Projects.setprojects)

    console.log("rajaa", projects);
    const dispatch = useDispatch()
    useEffect(() => {
        firebase
            .firestore()
            .collection('projects')
            .where('userId', '==', 'admin@')
            .orderBy('projectId')
            .get()
            .then(snapshot => {
                const allProjects = snapshot.docs.map(project => ({
                    ...project.data(),
                    docId: project.id,
                }));
                if (JSON.stringify(allProjects) !== JSON.stringify(projects)) {
                    dispatch(setProjects(allProjects))
                }
            });
    }, [])

    return { projects };
};