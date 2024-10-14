export const getLast30DaysInIntervals = () => {
    const days = [];
    for (let i = 31; i >= 1; i -= 3) {
        const date = new Date();
        date.setDate(date.getDate() - i);
        
        const day = date.getDate();
        const month = date.toLocaleString('default', { month: 'short' });

        const dayLocale = date.getDate();
        const monthLocale = date.getMonth() + 1;
        const yearLocale = date.getFullYear();

        const formattedDay = dayLocale < 10 ? `0${dayLocale}` : dayLocale;
        const formattedMonth = monthLocale < 10 ? `0${monthLocale}` : monthLocale;

        const normalDate = `${day}-${month}`
        const formattedDate = `${formattedDay}/${formattedMonth}/${yearLocale}`
        
        days.push({ name: normalDate, date: formattedDate });
    }
    return days.slice(0, 11);
};