import { useState, useEffect } from "react";
import { firebase } from "../firebase";
import { collatedTasksExits } from '../helpers'
import moment from "moment";
import { useSelector, useDispatch } from 'react-redux'
import { setArchivedTasks, setProjects, setTasks } from "../action";


export const useTasks = (selectedproject) => {
    //const [tasks, setTask] = useState([]);
    //const [archivedTasks, setArchivedTasks] = useState([]);

    const tasks = useSelector((state) => state.Task.settask);
    const archivedTasks = useSelector((state) => state.setArchived.setarchived)
    const dispatch = useDispatch();

    useEffect(() => {
        let unsubscirbe = firebase.firestore()
            .collection('tasks')
            .where('userId', '==', "vijay123");

        unsubscirbe =
            selectedproject && !collatedTasksExits(selectedproject)
                ? (unsubscirbe = unsubscirbe.where('projectId', '==', selectedproject))
                : selectedproject === 'Today'
                    ? (unsubscirbe = unsubscirbe.where('data', '==', moment().format('DD/MM/YYYY')))
                    : selectedproject === 'INDOX' || selectedproject === 0
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
    // const [projects, setProjects]= useState(null)
    const projects = useSelector((state) => state.Projects.setprojects)


    const dispatch = useDispatch()
    useEffect(() => {
        firebase
            .firestore()
            .collection('projects')
            .where('userId', '==', 'vijay123')
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
    }, [projects])

    return { projects };
};