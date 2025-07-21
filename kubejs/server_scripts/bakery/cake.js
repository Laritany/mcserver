ServerEvents.recipes(event =>{
 event.custom(//草莓
{
  "type": "create:filling",
  "ingredients": [
    {"item": "farmingtales:cake_base"},
    {"fluid": "farmingtales:strawberry_jam","amount": 250}
  ],
  "results": [{"item": "bakery:strawberry_cake"}]
}
)
 event.custom(//浆果
{
  "type": "create:filling",
  "ingredients": [
    {"item": "farmingtales:cake_base"},
    {"fluid": "farmingtales:sweetberry_jam","amount": 250}
  ],
  "results": [{"item": "bakery:sweetberry_cake"}]
}
)
 event.custom(//巧克力
{
  "type": "create:filling",
  "ingredients": [
    {"item": "farmingtales:cake_base"},
    {"fluid": "farmingtales:chocolate_jam","amount": 250}
  ],
  "results": [{"item": "bakery:chocolate_cake"}]
}
)
 event.custom(//巧克力
{
  "type": "create:filling",
  "ingredients": [
    {"item": "farmingtales:cake_base"},
    {"fluid": "create:chocolate","amount": 250}
  ],
  "results": [{"item": "bakery:chocolate_gateau"}]
}
)

 event.custom(//草莓纸杯蛋糕
{
  "type": "create:filling",
  "ingredients": [
    {"item": "farmingtales:cup_cake_base"},
    {"fluid": "farmingtales:strawberry_jam","amount": 250}
  ],
  "results": [{"item": "farmingtales:strawberry_cupcake"}]
}
)
 event.custom(//浆果纸杯蛋糕
{
  "type": "create:filling",
  "ingredients": [
    {"item": "farmingtales:cup_cake_base"},
    {"fluid": "farmingtales:sweetberry_jam","amount": 250}
  ],
  "results": [{"item": "farmingtales:sweetberry_cupcake"}]
}
)
 event.custom(//苹果纸杯蛋糕
{
  "type": "create:filling",
  "ingredients": [
    {"item": "farmingtales:cup_cake_base"},
    {"fluid": "farmingtales:apple_jam","amount": 250}
  ],
  "results": [{"item": "farmingtales:apple_cupcake"}]
}
)


 event.custom(//草莓曲奇
{
  "type": "create:filling",
  "ingredients": [
    {"item": "farmingtales:cookie_base"},
    {"fluid": "farmingtales:strawberry_jam","amount": 250}
  ],
  "results": [{"item": "farmingtales:strawberry_cookie"}]
}
)
 event.custom(//浆果曲奇
{
  "type": "create:filling",
  "ingredients": [
    {"item": "farmingtales:cookie_base"},
    {"fluid": "farmingtales:sweetberry_jam","amount": 250}
  ],
  "results": [{"item": "farmingtales:sweetberry_cookie"}]
}
)
 event.custom(//巧克力曲奇
{
  "type": "create:filling",
  "ingredients": [
    {"item": "farmingtales:cookie_base"},
    {"fluid": "farmingtales:chocolate_jam","amount": 250}
  ],
  "results": [{"item": "farmingtales:chocolate_cookie"}]
}
)
//合成
event.shapeless('4x bakery:strawberry_cupcake',[
    'farmingtales:strawberry_cupcake',
])
event.shapeless('4x bakery:sweetberry_cupcake',[
    'farmingtales:sweetberry_cupcake',
])
event.shapeless('4x bakery:apple_cupcake',[
    'farmingtales:apple_cupcake',
])
event.shapeless('farmingtales:strawberry_cupcake',[
    'bakery:strawberry_cupcake',
    'bakery:strawberry_cupcake',
    'bakery:strawberry_cupcake',
    'bakery:strawberry_cupcake'
])
event.shapeless('farmingtales:sweetberry_cupcake',[
    'bakery:sweetberry_cupcake',
    'bakery:sweetberry_cupcake',
    'bakery:sweetberry_cupcake',
    'bakery:sweetberry_cupcake'
])
event.shapeless('farmingtales:apple_cupcake',[
    'bakery:apple_cupcake',
    'bakery:apple_cupcake',
    'bakery:apple_cupcake',
    'bakery:apple_cupcake'
])



event.shapeless('4x bakery:strawberry_glazed_cookie',[
    'farmingtales:strawberry_cookie',
])
event.shapeless('4x bakery:sweetberry_glazed_cookie',[
    'farmingtales:sweetberry_cookie',
])
event.shapeless('4x bakery:chocolate_glazed_cookie',[
    'farmingtales:chocolate_cookie',
])

event.shapeless('farmingtales:strawberry_cookie',[
    'bakery:strawberry_glazed_cookie',
    'bakery:strawberry_glazed_cookie',
    'bakery:strawberry_glazed_cookie',
    'bakery:strawberry_glazed_cookie'
])
event.shapeless('farmingtales:sweetberry_cookie',[
    'bakery:sweetberry_glazed_cookie',
    'bakery:sweetberry_glazed_cookie',
    'bakery:sweetberry_glazed_cookie',
    'bakery:sweetberry_glazed_cookie'
])
event.shapeless('farmingtales:chocolate_cookie',[
    'bakery:chocolate_glazed_cookie',
    'bakery:chocolate_glazed_cookie',
    'bakery:chocolate_glazed_cookie',
    'bakery:chocolate_glazed_cookie'
])

})