export const handler = async (event) => {
    // TODO implement
    const response = {
        statusCode: 200,
        body: JSON.stringify('Hello from Lambda!- Updated V2 CHECK'),
    };
    return response;
};
