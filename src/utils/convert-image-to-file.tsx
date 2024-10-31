const getMimeTypeFromUrl = (url: string): string => {
    const extension = url.split('.').pop();
    switch (extension) {
        case 'jpg':
        case 'jpeg':
            return 'image/jpeg';
        case 'png':
            return 'image/png';
        case 'gif':
            return 'image/gif';
        default:
            return 'application/octet-stream';
    }
};

export const imageUrlToFile = async (imageUrl: string, filename: string): Promise<File> => {
    const response = await fetch(imageUrl);
    const blob = await response.blob();

    const mimeType = getMimeTypeFromUrl(imageUrl) || 'application/octet-stream';
    const file = new File([blob], filename, { type: mimeType });

    return file;
};
