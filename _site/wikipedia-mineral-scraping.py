import requests
from lxml import html

url = input("Pls copy paste the wiki-link here: ")

res = requests.get(url)
doc = res.text


namekey = "wiki/"
formulakey = '<td style="width:60%;">'
hardnesskey = 'title="Härte">Mohshärte</a>\n</td>\n<td>'
colorkey = 'title="Farbe">Farbe</a>\n</td>\n<td>'
strokekey = 'title="Strichfarbe">Strichfarbe</a>\n</td>\n<td>'
shinekey = 'title="Glanz">Glanz</a>\n</td>\n<td>'


keys = [namekey, formulakey, hardnesskey, colorkey, strokekey, shinekey]
endkeys = ['"/>', "</td>", "</td>", "</td>", "</td>", "</td>"]


with open("websitetext.txt", "w", encoding="utf-8") as f:
    f.write(doc)

values = []
for i in range(len(keys)):
    with open("websitetext.txt", "r", encoding="utf-8") as f:
        r = f.read()
        start = r.find(keys[i])
        x = r[start + len(keys[i]):]
        end = x.find(endkeys[i])
        values.append(x[0:end])

for i, j in enumerate(values):
    values[i] = j.replace("\n", "")
    values[i] = j.replace("bis", " - ")




boxtype = input("What type is your box? mineral (m) or rock (r)? ")

if boxtype == "m":
    number = input("Whats the number of the mineral? e.g. 4 / 50? " )
    info = input("Please write a description: " )

    print("mineralbox:")
    print("<div class='mineralbox fade'>")
    print("     <div class='numbertext'>" + number + "</div>" )
    print("     <img src='./Mineralien/" + values[0] + ".jpg', style='width: 100%; border-top-left-radius: 3px; border-top-right-radius: 3px;'>")
    print("     <table>")
    print("         <tr class='tabelle-zeile'>")
    print("             <td>Name:</td>")
    print("             <td>" + values[0] + "</td>")
    print("         </tr>")
    print("         <tr class='tabelle-zeile'>")
    print("             <td>Formel:</td>")
    print("             <td>" + values[1] + "</td>")
    print("         </tr>")
    print("         <tr class='tabelle-zeile'>")
    print("             <td>Härte:</td>")
    print("             <td>" + values[2] + "</td>")
    print("         </tr>")
    print("         <tr class='tabelle-zeile'>")
    print("             <td>Allg. Info:</td>")
    print("             <td>" + info + "</td>")
    print("         </tr>")
    print("     </table>")
    print("</div>")

    print("################################")

    other = input("add 1, 2 Words to it: ")

    print("mineralfilter:")
    print("<tr>")
    print("     <td>" + values[0] +"</td>")
    print("     <td>" + values[3] +"</td>")
    print("     <td>" + values[2] + "</td>")
    print("     <td>" + values[4] + "</td>")
    print("     <td>" + values[5] + "</td>")
    print("     <td>" + other + "</td>")
    print("</tr>")

else:
    number = input("Whats the number of the rock? e.g. 4 / 50? " )
    rockname = input("What's the name of the rock? " )
    info = input("What do you see? " )

    print("<div class='mineralbox fade'>")
    print("     <div class='numbertext'>" + number + "</div>" )
    print("     <img src='./Gesteine/" + rockname + ".jpg', style='width: 100%; border-top-left-radius: 3px; border-top-right-radius: 3px;'>")
    print("     <table>")
    print("         <tr class='tabelle-zeile'>")
    print("             <td>Gesteinsname:</td>")
    print("             <td>" + rockname + "</td>")
    print("         </tr>")
    print("         <tr class='tabelle-zeile'>")
    print("             <td>Erkennbare Dinge:</td>")
    print("             <td>" + info + "</td>")
    print("         </tr>")
    print("     </table>")
    print("</div>")