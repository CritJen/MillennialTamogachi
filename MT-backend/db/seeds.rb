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
  avatar: 1
  user: jen,
)

mil2 = Millennial.create(
  name: "@Dev",
  thirst: 10,
  avatar: 2
  user: adrienne,
)

mil3 = Millennial.create(
  name: "@Github",
  thirst: 10,
  avatar: 3
  user: yutaro,
)
