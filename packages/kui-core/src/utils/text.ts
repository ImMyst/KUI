export const getTextPreview = (text: string | number | undefined): string =>
    typeof text === 'number'
        ? text.toString()
        : (text?.match(/\b(\w)/g)?.slice(0, 2).join('') || 'n/a').toString();
