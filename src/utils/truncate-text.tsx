export const truncateText = (text: string, num: number): string => {
    return text.length > num ? text.slice(0, num) + '...' : text;
}
