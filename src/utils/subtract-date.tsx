export const subtractDays = (dateStr: string, days: number): string => {

    const formatDate = (date: Date): string => {
        const day = String(date.getDate()).padStart(2, '0');
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const year = date.getFullYear();
        return `${day}/${month}/${year}`;
    };

    const parts = dateStr.split('/');
    const date = new Date(Number(parts[2]), Number(parts[1]) - 1, Number(parts[0]));
    date.setDate(date.getDate() - days);
    return formatDate(date);
};