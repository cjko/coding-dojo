import requests

r = requests.get('http://pokeapi.co/api/v2/pokemon/5/')
x = r.json()

# print x
print x['abilities'][0]
