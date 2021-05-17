module.exports = async getLecturer => {
    try {
        return await getLecturer();
    } catch (err) {
        throw new Error(err);
    }
}