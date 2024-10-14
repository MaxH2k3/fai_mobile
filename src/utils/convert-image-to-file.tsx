export const imageUrlToFile = async (imageUrl: string, filename: string): Promise<File> => {

    const response = await fetch(imageUrl);

    const blob = await response.blob();

    const file = new File([blob], filename, { type: blob.type });

    return file;
};