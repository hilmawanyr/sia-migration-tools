module.exports = async (userEntity, persist) => {
    try {
        return await persist(userEntity); 
    } catch (err) {
        throw new Error(err);
    }
}