# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Comment.destroy_all
Sneaker.destroy_all
User.destroy_all



@user = User.create!(
    first_name: "Sean",
    last_name: "Hughes",
    email: "sean@nike.com",
    username: "hughes1",
    password: "123456"
)
@user1 = User.create!(
  first_name: "Kyrie",
  last_name: "Hughes",
  email: "Kyrie@nike.com",
  username: "kyrie1",
  password: "123456"
)

@sneaker = Sneaker.create!(
  user: @user,
  brand: "Jordan",
  name: "Air Jordan 5 'Raging Bulls'2021",
  description: "red shoe",
  price: "$190.00",
  size: "10.5",
  image: "https://image.goat.com/crop/750/attachments/product_template_additional_pictures/images/052/891/412/original/724738_01.jpg.jpeg?1617807822"
)







