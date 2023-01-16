export const formatDate = (date: Date) => {
    const d = date.getDate();
    const dd = d < 10 ? `0${d}` : d;
    const m = date.getMonth() + 1;
    const mm = m < 10 ? `0${m}`: m;
    const y = date.getFullYear();
    const fullDate =  `${mm}-${dd}-${y}`;
    return fullDate;
}

