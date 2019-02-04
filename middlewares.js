module.exports = {
  isConnected: function(req, res, next){
    //if we are connected, express defines a req.user
    if(req.user){
      next()
    }
    else{
      res.redirect('/auth/login')
    }
  }
}