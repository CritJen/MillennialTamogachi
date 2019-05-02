###### USERS ######
jen = User.create(
  username: "Jen"
)

adrienne = User.create(
  username: "Adrienne"
)

yutaro = User.create(
  username: "Yutaro"
)

###### MILLENNIALS ######
mil1 = Millennial.create(
  name: "@Dotcom",
  thirst: 10,
  avatar: 1,
  user: jen
)

mil2 = Millennial.create(
  name: "@Dev",
  thirst: 10,
  avatar: 2,
  user: adrienne
)

mil3 = Millennial.create(
  name: "@Github",
  thirst: 10,
  avatar: 3,
  user: yutaro
)

###### ITEMS ######
lacroix = Item.create(
  name: "La Croix",
  value: 5
)

coconut = Item.create(
  name: "Coconut Water",
  value: 10
)

latte = Item.create(
  name: "Soy Milk Latte",
  value: 1
)
