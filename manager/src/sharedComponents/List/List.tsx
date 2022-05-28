import ListItem from "./ListItem/ListItem";
import * as S from "./List.styles";


export interface Task {
    id: string;
    title: string;
    description: string;
    date: string;
   
    // className?: string;
   
  }


const tasks : Task[]  = [
  {
    id: "m1",
    title: "Daily Status Too",
    description:
      "Finest fish and veggies  german specialty! American, raw, meaty. Healthy...and green...Finest fish and veggies  german specialty!Finest fish and veggies  german specialty!",
    date: "13.06.2022",
  },
  {
    id: "m2",
    title: "call",
    description: "A german specialty!",
    date: "13.06.2022",
  },
  {
    id: "m3",
    title: "BB",
    description: "American, raw, meaty",
    date: "13.06.2022",
  },
  {
    id: "m4",
    title: "Green Bowl",
    description: "Healthy...and green...",
    date: "13.06.2022",
  },
];

const CurrentTasks = () => {
  const tasksList = tasks.map(({id, title, description, date}) => {
      return (
          <ListItem
              key={id}
              title={title}
              description={description}
              date={date}
              id={id}
            //   className={className} 
            />
      );
  });
  return (
    <S.ListWrapper>
      <S.ListUl>{tasksList}</S.ListUl>
    </S.ListWrapper>
  );
};

export default CurrentTasks;
