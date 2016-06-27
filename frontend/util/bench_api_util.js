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
  }
};
module.exports = BenchApiUtil;
