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

export const imageUrlToFile = async (imageUrl: string, filename: string): Promise<any> => {
    const mimeType = getMimeTypeFromUrl(imageUrl) || 'application/octet-stream';
    return { uri: imageUrl, name: filename, type: mimeType }
};
