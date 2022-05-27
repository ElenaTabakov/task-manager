interface ListItemProps {
  id: string;
  name: string;
  className?: string;
  description: string;
  date: string;
}

const ListItem = ({
  id,
  name,
  className,
  description,
  date,
}: ListItemProps) => {

  return <li id={id} className={className}>
      <span>{name.slice(0, 2)}</span>
      <div>{name}</div>
      <div className="description">{description}</div>
      <div className="date">{date}</div>
  </li>;
};

export default ListItem;
