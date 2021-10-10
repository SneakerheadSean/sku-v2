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
    username: "TheHypeBeastDeveloper",
    password: "123456"
)
@user1 = User.create!(
  first_name: "Kyrie",
  last_name: "Hughes",
  email: "Kyrie@nike.com",
  username: "kyrie1",
  password: "123456"
)

@user2 = User.create!(
  first_name: "Ivy",
  last_name: "Hughes",
  email: "Ivy@nike.com",
  username: "ivy",
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

@sneaker = Sneaker.create!(
  user: @user,
  brand: "Nike",
  name: "Wmns Dunk High 'Aluminum'",
  description: "Women's sneaker",
  price: "$160.00",
  size: "8",
  image: "https://image.goat.com/crop/500/attachments/product_template_additional_pictures/images/058/444/290/original/787272_01.jpg.jpeg?1628256470"
)

@sneaker = Sneaker.create!(
  user: @user,
  brand: "Jordan",
  name: "Air Jordan 1 Retro High OG 'Banned' 2016",
  description: "red shoe",
  price: "$190.00",
  size: "10.5",
  image: "https://image.goat.com/crop/500/attachments/product_template_additional_pictures/images/054/488/691/original/51181_01.jpg.jpeg?1620747025"
)

@sneaker = Sneaker.create!(
  user: @user,
  brand: "Jordan",
  name: "Air Jordan 1 Retro High OG 'Shadow 2.0'",
  description: "black and grey shoe",
  price: "$190.00",
  size: "10.5",
  image: "https://image.goat.com/crop/500/attachments/product_template_additional_pictures/images/053/600/400/original/721462_01.jpg.jpeg?1619103822"
)

@sneaker = Sneaker.create!(
  user: @user,
  brand: "Jordan",
  name: "Air Jordan 1 Retro High OG 'Hyper Royal'",
  description: "blue and grey shoe",
  price: "$190.00",
  size: "10.5",
  image: "https://image.goat.com/crop/500/attachments/product_template_additional_pictures/images/052/666/679/original/641289_01.jpg.jpeg?1617371508"
)

@sneaker = Sneaker.create!(
  user: @user,
  brand: "Nike",
  name: "Fragment Design x Travis Scott x Air Jordan 1 Retro Low",
  description: "Black and blue shoe",
  price: "$190.00",
  size: "10.5",
  image: "https://image.goat.com/crop/500/attachments/product_template_additional_pictures/images/059/084/576/original/767449_01.jpg.jpeg?1629348886"
)

@sneaker = Sneaker.create!(
  user: @user,
  brand: "Jordan",
  name: "Wmns Air Jordan 1 High OG 'UNC To Chicago'",
  description: "red, black and blue shoe",
  price: "$190.00",
  size: "10.5",
  image: "https://image.goat.com/crop/500/attachments/product_template_additional_pictures/images/032/486/193/original/529362_01.jpg.jpeg?1581105636"
)

@sneaker = Sneaker.create!(
  user: @user,
  brand: "Jordan",
  name: "Off-White x Air Jordan 1 Retro High OG 'UNC'",
  description: "blue shoe",
  price: "$190.00",
  size: "10.5",
  image: "https://image.goat.com/crop/500/attachments/product_template_additional_pictures/images/012/219/525/original/335047_01.jpg.jpeg?1527188497"
)











