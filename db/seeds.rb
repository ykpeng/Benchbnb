# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

cat_bench = Bench.create!({description: "Cat Bench", lat: 37.784951, lng: -122.428135})
dog_bench = Bench.create!({description: "Dog Bench", lat: 37.788283, lng: -122.461641})
squirrel_bench = Bench.create!({description: "Squirrel Bench", lat: 37.758839, lng: -122.472284})
bunny_bench = Bench.create!({description: "Bunny Bench", lat: 37.780278, lng: -122.390916})
seal_bench = Bench.create!({description: "Seal Bench", lat: 37.798999, lng: -122.41949})
