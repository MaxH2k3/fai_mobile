export const getLast12Months = () => {
    const months = [];
    const date = new Date();

    for (let i = 11; i >= 0; i--) {
        const pastDate = new Date(date.getFullYear(), date.getMonth() - i, 1);
        const month = pastDate.toLocaleString('default', { month: 'short' });
        const year = pastDate.toLocaleString('default', { year: '2-digit' });

        const monthNumber = pastDate.toLocaleString('default', { month: 'numeric' });

        months.push({ name: `${month}-${year}`, date: monthNumber });
    }

    return months;
};
