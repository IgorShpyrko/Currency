const obj = {
  grn: 27,
  usd: 1,
  eur: 0.9
}

const HomeController = {
  home: function(req, res){
    res.send(obj);
  },
  post: function(req, res){
    res.send(req.body);
  },
};

module.exports = HomeController;