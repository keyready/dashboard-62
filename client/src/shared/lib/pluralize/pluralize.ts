export const pluralize = (totalFiles: number): string => {
    const lastDigit = totalFiles % 10;
    const lastTwoDigits = totalFiles % 100;

    if (lastTwoDigits >= 11 && lastTwoDigits <= 14) {
        return `${totalFiles} файлов`;
    }
    switch (lastDigit) {
        case 1:
            return `${totalFiles} файл`;
        case 2:
        case 3:
        case 4:
            return `${totalFiles} файла`;
        default:
            return `${totalFiles} файлов`;
    }
};
