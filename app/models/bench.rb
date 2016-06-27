class Bench < ActiveRecord::Base
  validates :description, :lat, :lng, presence: true

  def self.in_bounds(bounds)
    lat_min = bounds["southWest"]["lat"].to_f
    lat_max = bounds["northEast"]["lat"].to_f
    lng_min = bounds["southWest"]["lng"].to_f
    lng_max = bounds["northEast"]["lng"].to_f
    benches = Bench.where({lat: (lat_min..lat_max), lng: (lng_min..lng_max)})
  end
end

# bounds = {"northEast"=> {"lat"=>"37.80971", "lng"=>"-122.39208"}, "southWest"=> {"lat"=>"37.74187", "lng"=>"-122.47791"}}
# Bench.in_bounds(bounds)
