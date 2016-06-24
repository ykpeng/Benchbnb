const BenchApiUtil = {
  fetchAllBenches: function(cb) {
    $.ajax({
      url: 'api/benches',
      dataType: "json",
      success: function(response) {
        cb(response);
      }
    })
  }
}
module.exports = BenchApiUtil;
