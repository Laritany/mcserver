
ServerEvents.recipes(event =>{
event.custom(//草莓
{
"type": "create:emptying",
"ingredients": [
{"item": "bakery:strawberry_jam"}
],
"results": [
{"item": "bakery:jar"},
{"amount": 250,"fluid": "farmingtales:strawberry_jam"}
]
})

event.custom(//浆果
{
"type": "create:emptying",
"ingredients": [
{"item": "bakery:sweetberry_jam"}
],
"results": [
{"item": "bakery:jar"},
{"amount": 250,"fluid": "farmingtales:sweetberry_jam"}
]
})

event.custom(//发光浆果
{
"type": "create:emptying",
"ingredients": [
{"item": "bakery:glowberry_jam"}
],
"results": [
{"item": "bakery:jar"},
{"amount": 250,"fluid": "farmingtales:glowberry_jam"}
]
})

event.custom(//苹果
{
"type": "create:emptying",
"ingredients": [
{"item": "bakery:apple_jam"}
],
"results": [
{"item": "bakery:jar"},
{"amount": 250,"fluid": "farmingtales:apple_jam"}
]
})

event.custom(//巧克力
{
"type": "create:emptying",
"ingredients": [
{"item": "bakery:chocolate_jam"}
],
"results": [
{"item": "bakery:jar"},
{"amount": 250,"fluid": "farmingtales:chocolate_jam"}
]
})
})