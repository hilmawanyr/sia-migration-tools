module.exports = async getStudent => {
    try {
        return await getStudent()
    } catch (err) {
        throw new Error(err);
    }
}