export function percentageRoundedUp(num1: number, num2: number): string {
    const percentage = ((num1 - num2) / num1) * 100;
    return `${Math.round(percentage)}%`;
}
