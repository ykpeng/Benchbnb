const BenchApiUtil = {
  fetchAllBenches: function(bounds, cb) {
    $.ajax({
      url: 'api/benches',
      dataType: "json",
      data: { bounds },
      success: function(response) {
        cb(response);
      }
    })
  },
  createBench: function(bench, cb){
    $.ajax({
      url: 'api/benches/',
      method: "POST",
      data: { bench: bench },
      success: function(response) {
        cb(response);
      }
    })
  }
};
module.exports = BenchApiUtil;
