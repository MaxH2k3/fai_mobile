const formatNumber = (num: number): string => {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');
};

export default formatNumber;

export function customRound(number: number): number {
    const decimalPart = number % 1;

    if (decimalPart < 0.3) {
        return Math.floor(number);
    } else {
        return Math.ceil(number);
    }
}

