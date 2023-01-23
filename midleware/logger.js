function log(req, res, next){
    console.log("authenticating......")
    next()
}

module.exports = log