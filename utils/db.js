function checkDBStatus(mongo) {
    mongo.connection.on('connected', function () {
        console.info("MONGODB status: Connected")
    });
    mongo.connection.on('error', function () {
        console.info("MONGODB status: Error")
    });
    mongo.connection.on('disconnected', function () {
        console.info("MONGODB status: Disconnected")
    });
}
module.exports = {
    checkDBStatus
}