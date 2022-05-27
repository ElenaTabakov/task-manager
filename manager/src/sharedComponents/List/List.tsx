import ListItem from "./ListItem";

const Tasks_DB  = [
    {
        id: 'm1',
        name: 'Daily Status',
        description: 'Finest fish and veggies  german specialty! American, raw, meaty. Healthy...and green...',
        date: '13.06.2022',
    },
    {
        id: 'm2',
        name: 'call',
        description: 'A german specialty!',
        date: '13.06.2022',
    },
    {
        id: 'm3',
        name: 'BB',
        description: 'American, raw, meaty',
        date: '13.06.2022',
    },
    {
        id: 'm4',
        name: 'Green Bowl',
        description: 'Healthy...and green...',
        date: '13.06.2022',
    },
];

const CurrentTasks = () => {
    const tasksList = Tasks_DB.map(task => <ListItem key={task.id} name={task.name} description={task.description} date={task.date} id={task.id}/>);
    return (
        <section >
            
                <ul>
                    {tasksList}
                </ul>
            
        </section>
    );
};

export default CurrentTasks;

