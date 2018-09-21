const HomeMiddleware = {
  home: function(Request, Response, next) {
    if('name' in Request.query) {
      Request.name = Request.query.name;
      next();
    } else {
      Response.send(400, 'error');
    }
  }
}

module.exports = HomeMiddleware;