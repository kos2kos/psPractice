# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
House.destroy_all
Lock.destroy_all 

house1 = House.create({address: "123 Main St., Atlanta GA"})
house2 = House.create({address: "345 Main St., Atlanta GA"})
house3 = House.create({address: "567 Main St., Atlanta GA"})
house4 = House.create({address: "891 Main St., Atlanta GA"})

device1 = Lock.create({house_id: house1.id, api_id: "053994wef-ceed-455a-a5f7-7962261a722d", locked: false})
device2 = Lock.create({house_id: house2.id, api_id: "0432994ef-feed-455a-a5f7-321321iji321", locked: true})
device3 = Lock.create({house_id: house3.id, api_id: "43242532f-deed-455a-a5f7-09832dj92108", locked: false}) 
device3 = Lock.create({house_id: house4.id, api_id: "832hoir79-beed-455a-a5f7-3079032ujr93", locked: true}) 
