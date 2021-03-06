const Discord = require("discord.js");

const data = {"Aboleth":{"name":"Aboleth","AC":"17","maxHP":135,"attack":9,"image":"https://media-waterdeep.cursecdn.com/avatars/thumbnails/0/11/370/315/636238825975375671.jpeg","exp":5900,"attacks":[["Mucous Cloud","1d4"],["Tentacle","2d6+5"],["Tail","3d6+5"],["Psychic Drain","3d6"]]},"Acolyte":{"name":"Acolyte","AC":"10","maxHP":9,"attack":4,"image":"https://media-waterdeep.cursecdn.com/attachments/2/656/humanoid.jpg","exp":50,"attacks":[["Club","1d4"]]},"Adult Black Dragon":{"name":"Adult Black Dragon","AC":"19","maxHP":195,"attack":11,"image":"https://media-waterdeep.cursecdn.com/avatars/thumbnails/0/13/407/315/636238871029832086.jpeg","exp":11500,"attacks":[["Bite","2d10+6"],["Claw","2d6+6"],["Tail","2d8+6"],["Acid Breath","12d8"],["Wing Attack","2d6+6"]]},"Adult Blue Dragon":{"name":"Adult Blue Dragon","AC":"19","maxHP":225,"attack":12,"image":"https://media-waterdeep.cursecdn.com/avatars/thumbnails/0/16/453/315/636238882493439723.jpeg","exp":15000,"attacks":[["Bite","2d10+7"],["Claw","2d6+7"],["Tail","2d8+7"],["Lightning Breath","12d10"],["Wing Attack","2d6+7"]]},"Adult Brass Dragon":{"name":"Adult Brass Dragon","AC":"18","maxHP":172,"attack":11,"image":"https://media-waterdeep.cursecdn.com/avatars/thumbnails/0/18/388/315/636238885681129014.jpeg","exp":10000,"attacks":[["Bite","2d10+6"],["Claw","2d6+6"],["Tail","2d8+6"],["Fire Breath","13d6"],["Wing Attack","2d6+6"]]},"Adult Bronze Dragon":{"name":"Adult Bronze Dragon","AC":"19","maxHP":212,"attack":12,"image":"https://media-waterdeep.cursecdn.com/avatars/thumbnails/0/20/286/315/636238888310108665.jpeg","exp":13000,"attacks":[["Bite","2d10+7"],["Claw","2d6+7"],["Tail","2d8+7"],["Lightning Breath","12d10"],["Wing Attack","2d6+7"]]},"Adult Copper Dragon":{"name":"Adult Copper Dragon","AC":"18","maxHP":184,"attack":11,"image":"https://media-waterdeep.cursecdn.com/avatars/thumbnails/0/22/237/315/636238956325913912.jpeg","exp":11500,"attacks":[["Bite","2d10+6"],["Claw","2d6+6"],["Tail","2d8+6"],["Acid Breath","12d8"],["Wing Attack","2d6+6"]]},"Adult Gold Dragon":{"name":"Adult Gold Dragon","AC":"19","maxHP":256,"attack":14,"image":"https://media-waterdeep.cursecdn.com/avatars/thumbnails/0/24/243/315/636238958915127190.jpeg","exp":18000,"attacks":[["Bite","2d10+8"],["Claw","2d6+8"],["Tail","2d8+8"],["Fire Breath","12d10"],["Wing Attack","2d6+8"]]},"Adult Green Dragon":{"name":"Adult Green Dragon","AC":"19","maxHP":207,"attack":11,"image":"https://media-waterdeep.cursecdn.com/avatars/thumbnails/0/26/482/315/636238962276510242.jpeg","exp":13000,"attacks":[["Bite","2d10+6"],["Claw","2d6+6"],["Tail","2d8+6"],["Poison Breath","16d6"],["Wing Attack","2d6+6"]]},"Adult Red Dragon":{"name":"Adult Red Dragon","AC":"19","maxHP":256,"attack":14,"image":"https://media-waterdeep.cursecdn.com/avatars/thumbnails/0/28/320/315/636238971817119794.jpeg","exp":18000,"attacks":[["Bite","2d10+8"],["Claw","2d6+8"],["Tail","2d8+8"],["Fire Breath","18d6"],["Wing Attack","2d6+8"]]},"Adult Silver Dragon":{"name":"Adult Silver Dragon","AC":"19","maxHP":243,"attack":13,"image":"https://media-waterdeep.cursecdn.com/avatars/thumbnails/0/123/243/315/636252753945133025.jpeg","exp":15000,"attacks":[["Bite","2d10+8"],["Claw","2d6+8"],["Tail","2d8+8"],["Cold Breath","13d8"],["Wing Attack","2d6+8"]]},"Adult White Dragon":{"name":"Adult White Dragon","AC":"18","maxHP":200,"attack":11,"image":"https://media-waterdeep.cursecdn.com/avatars/thumbnails/0/125/571/315/636252755468117001.jpeg","exp":10000,"attacks":[["Bite","2d10+6"],["Claw","2d6+6"],["Tail","2d8+6"],["Cold Breath","12d8"],["Wing Attack","2d6+6"]]},"Air Elemental":{"name":"Air Elemental","AC":"15","maxHP":90,"attack":8,"image":"https://media-waterdeep.cursecdn.com/avatars/thumbnails/0/127/217/315/636252755648556800.jpeg","exp":1800,"attacks":[["Slam","2d8+5"],["Whirlwind","3d8+2"]]},"Allosaurus":{"name":"Allosaurus","AC":"13","maxHP":51,"attack":6,"image":"https://media-waterdeep.cursecdn.com/attachments/2/648/beast.jpg","exp":450,"attacks":[["Bite","2d10+4"],["Claw ","1d8+4"]]},"Ancient Black Dragon":{"name":"Ancient Black Dragon","AC":"22","maxHP":367,"attack":15,"image":"https://media-waterdeep.cursecdn.com/avatars/thumbnails/0/129/445/315/636252755854649337.jpeg","exp":33000,"attacks":[["Bite","2d10+8"],["Claw","2d6+8"],["Tail","2d8+8"],["Acid Breath","15d8"],["Wing Attack","2d6+8"]]},"Ancient Blue Dragon":{"name":"Ancient Blue Dragon","AC":"22","maxHP":481,"attack":16,"image":"https://media-waterdeep.cursecdn.com/avatars/thumbnails/0/131/442/315/636252756020185006.jpeg","exp":50000,"attacks":[["Bite","2d10+9"],["Claw","2d6+9"],["Tail","2d8+9"],["Lightning Breath","16d10"],["Wing Attack","2d6+9"]]},"Ancient Brass Dragon":{"name":"Ancient Brass Dragon","AC":"20","maxHP":297,"attack":14,"image":"https://media-waterdeep.cursecdn.com/avatars/thumbnails/0/133/375/315/636252756157427258.jpeg","exp":25000,"attacks":[["Bite","2d10+8"],["Claw","2d6+8"],["Tail","2d8+8"],["Fire Breath","16d6"],["Wing Attack","2d6+8"]]},"Ancient Bronze Dragon":{"name":"Ancient Bronze Dragon","AC":"22","maxHP":444,"attack":16,"image":"https://media-waterdeep.cursecdn.com/avatars/thumbnails/0/135/294/315/636252756372367681.jpeg","exp":41000,"attacks":[["Bite","2d10+9"],["Claw","2d6+9"],["Tail","2d8+9"],["Lightning Breath","16d10"],["Wing Attack","2d6+9"]]},"Ancient Copper Dragon":{"name":"Ancient Copper Dragon","AC":"21","maxHP":350,"attack":15,"image":"https://media-waterdeep.cursecdn.com/avatars/thumbnails/0/137/235/315/636252756714896878.jpeg","exp":33000,"attacks":[["Bite","2d10+8"],["Claw","2d6+8"],["Tail","2d8+8"],["Acid Breath","14d8"],["Wing Attack","2d6+8"]]},"Ancient Gold Dragon":{"name":"Ancient Gold Dragon","AC":"22","maxHP":546,"attack":17,"image":"https://media-waterdeep.cursecdn.com/avatars/thumbnails/0/139/244/315/636252756930565101.jpeg","exp":62000,"attacks":[["Bite","2d10+10"],["Claw","2d6+10"],["Tail","2d8+10"],["Fire Breath","13d10"],["Wing Attack","2d6+10"]]},"Ancient Green Dragon":{"name":"Ancient Green Dragon","AC":"21","maxHP":385,"attack":15,"image":"https://media-waterdeep.cursecdn.com/avatars/thumbnails/0/141/490/315/636252757319464533.jpeg","exp":41000,"attacks":[["Bite","2d10+8"],["Claw","4d6+8"],["Tail","2d8+8"],["Poison Breath","22d6"],["Wing Attack","2d6+8"]]},"Ancient Red Dragon":{"name":"Ancient Red Dragon","AC":"22","maxHP":546,"attack":17,"image":"https://media-waterdeep.cursecdn.com/avatars/thumbnails/0/147/332/315/636252758629652181.jpeg","exp":62000,"attacks":[["Bite","2d10+10"],["Claw","2d6+10"],["Tail","2d8+10"],["Fire Breath","26d6"],["Wing Attack","2d6+10"]]},"Ancient Silver Dragon":{"name":"Ancient Silver Dragon","AC":"22","maxHP":487,"attack":17,"image":"https://media-waterdeep.cursecdn.com/avatars/thumbnails/0/151/243/315/636252758799225927.jpeg","exp":50000,"attacks":[["Bite","2d10+10"],["Claw","2d6+10"],["Tail","2d8+10"],["Cold Breath","15d8"],["Wing Attack","2d6+10"]]},"Ancient White Dragon":{"name":"Ancient White Dragon","AC":"20","maxHP":333,"attack":14,"image":"https://media-waterdeep.cursecdn.com/avatars/thumbnails/0/153/571/315/636252758955886210.jpeg","exp":25000,"attacks":[["Bite","2d10+8"],["Claw","2d6+8"],["Tail","2d8+8"],["Cold Breath","16d8"],["Wing Attack","2d6+8"]]},"Androsphinx":{"name":"Androsphinx","AC":"17","maxHP":199,"attack":10,"image":"https://media-waterdeep.cursecdn.com/avatars/thumbnails/0/157/362/315/636252759145617281.jpeg","exp":18000,"attacks":[["Claw","2d10+6"],["Third Roar","8d10"]]},"Animated Armor":{"name":"Animated Armor","AC":"18","maxHP":33,"attack":4,"image":"https://media-waterdeep.cursecdn.com/avatars/thumbnails/8/429/241/315/636306156895834255.jpeg","exp":200,"attacks":[["Slam","1d6+2"]]},"Ankheg":{"name":"Ankheg","AC":"14","maxHP":39,"attack":5,"image":"https://media-waterdeep.cursecdn.com/avatars/thumbnails/0/161/281/315/636252759871983921.jpeg","exp":450,"attacks":[["Bite","2d6+3"],["Acid Spray","3d6"]]},"Ankylosaurus":{"name":"Ankylosaurus","AC":"15","maxHP":68,"attack":7,"image":"https://media-waterdeep.cursecdn.com/attachments/2/648/beast.jpg","exp":700,"attacks":[["Tail","4d6+4"]]},"Ape":{"name":"Ape","AC":"12","maxHP":19,"attack":5,"image":"https://media-waterdeep.cursecdn.com/attachments/2/648/beast.jpg","exp":100,"attacks":[["Fist","1d6+3"],["Rock","1d6+3"]]},"Archmage":{"name":"Archmage","AC":"12","maxHP":99,"attack":9,"image":"https://media-waterdeep.cursecdn.com/avatars/thumbnails/0/167/208/315/636252760213195530.jpeg","exp":8400,"attacks":[["Dagger","1d4+2"]]},"Assassin":{"name":"Assassin","AC":"15","maxHP":78,"attack":6,"image":"https://media-waterdeep.cursecdn.com/avatars/thumbnails/9/910/1221/315/636334293020978804.png","exp":3900,"attacks":[["Sneak Attack","4d6"],["Shortsword","1d6+3"],["Light Crossbow","1d8+3"]]},"Awakened Shrub":{"name":"Awakened Shrub","AC":"9","maxHP":10,"attack":1,"image":"https://media-waterdeep.cursecdn.com/attachments/2/659/plant.jpg","exp":10,"attacks":[["Rake","1d4"]]},"Awakened Tree":{"name":"Awakened Tree","AC":"13","maxHP":59,"attack":6,"image":"https://media-waterdeep.cursecdn.com/attachments/2/659/plant.jpg","exp":450,"attacks":[["Slam","3d6+4"]]},"Axe Beak":{"name":"Axe Beak","AC":"11","maxHP":19,"attack":4,"image":"https://media-waterdeep.cursecdn.com/attachments/2/648/beast.jpg","exp":50,"attacks":[["Beak","1d8+2"]]},"Azer":{"name":"Azer","AC":"17","maxHP":39,"attack":5,"image":"https://media-waterdeep.cursecdn.com/avatars/thumbnails/0/171/257/315/636252761112348397.jpeg","exp":450,"attacks":[["Heated Body","1d10"],["Heated Weapons","1d6"],["Warhammer","1d8+3"]]},"Baboon":{"name":"Baboon","AC":"12","maxHP":3,"attack":1,"image":"https://media-waterdeep.cursecdn.com/attachments/2/648/beast.jpg","exp":10,"attacks":[["Bite","1d4"]]},"Badger":{"name":"Badger","AC":"10","maxHP":3,"attack":2,"image":"https://media-waterdeep.cursecdn.com/avatars/thumbnails/16/528/296/315/636376327632236333.jpeg","exp":10,"attacks":[]},"Balor":{"name":"Balor","AC":"19","maxHP":262,"attack":14,"image":"https://media-waterdeep.cursecdn.com/avatars/thumbnails/0/175/453/315/636252761612038117.jpeg","exp":22000,"attacks":[["Death Throes","20d6"],["Fire Aura","3d6"],["Longsword","3d8+8"],["Whip","2d6+8"]]},"Bandit":{"name":"Bandit","AC":"12","maxHP":11,"attack":3,"image":"https://media-waterdeep.cursecdn.com/attachments/2/656/humanoid.jpg","exp":25,"attacks":[["Scimitar","1d6+1"],["Light Crossbow","1d8+1"]]},"Bandit Captain":{"name":"Bandit Captain","AC":"15","maxHP":65,"attack":5,"image":"https://media-waterdeep.cursecdn.com/avatars/thumbnails/0/181/259/315/636252761965117015.jpeg","exp":450,"attacks":[["Scimitar","1d6+3"],["Dagger","1d4+3"]]},"Banshee":{"name":"Banshee","AC":"12","maxHP":58,"attack":4,"image":"https://media-waterdeep.cursecdn.com/avatars/thumbnails/8/446/190/315/636306384206418474.jpeg","exp":1100,"attacks":[["Incorporeal Movement","1d10"],["Corrupting Touch","3d6+2"],["Wail","3d6"]]},"Barbed Devil":{"name":"Barbed Devil","AC":"15","maxHP":110,"attack":6,"image":"https://media-waterdeep.cursecdn.com/avatars/thumbnails/16/486/252/315/636376302569423870.jpeg","exp":1800,"attacks":[["Barbed Hide","1d10"],["Claw","1d6+3"],["Tail","2d6+3"],["Hurl Flame","3d6"]]},"Basilisk":{"name":"Basilisk","AC":"15","maxHP":52,"attack":5,"image":"https://media-waterdeep.cursecdn.com/avatars/thumbnails/0/185/377/315/636252762168821795.jpeg","exp":700,"attacks":[["Bite","2d6+3"]]},"Bat":{"name":"Bat","AC":"12","maxHP":1,"attack":0,"image":"https://media-waterdeep.cursecdn.com/avatars/thumbnails/18/305/412/315/636379812593010967.jpeg","exp":10,"attacks":[]},"Bearded Devil":{"name":"Bearded Devil","AC":"13","maxHP":52,"attack":5,"image":"https://media-waterdeep.cursecdn.com/avatars/thumbnails/0/193/291/315/636252763397604505.jpeg","exp":700,"attacks":[["Beard","1d8+2"],["Glaive","1d10+3"]]},"Behir":{"name":"Behir","AC":"17","maxHP":168,"attack":10,"image":"https://media-waterdeep.cursecdn.com/avatars/thumbnails/0/195/561/315/636252763748680024.jpeg","exp":7200,"attacks":[["Bite","3d10+6"],["Constrict","2d10+6"],["Lightning Breath","12d10"],["Swallow","6d6"]]},"Berserker":{"name":"Berserker","AC":"13","maxHP":67,"attack":5,"image":"https://media-waterdeep.cursecdn.com/attachments/2/656/humanoid.jpg","exp":450,"attacks":[["Greataxe","1d12+3"]]},"Black Bear":{"name":"Black Bear","AC":"11","maxHP":19,"attack":4,"image":"https://media-waterdeep.cursecdn.com/attachments/2/648/beast.jpg","exp":100,"attacks":[["Bite","1d6+2"],["Claws","2d4+2"]]},"Black Dragon Wyrmling":{"name":"Black Dragon Wyrmling","AC":"17","maxHP":33,"attack":4,"image":"https://media-waterdeep.cursecdn.com/avatars/thumbnails/16/496/360/315/636376308217017511.jpeg","exp":450,"attacks":[["Bite","1d10+2"],["Acid Breath","5d8"]]},"Black Pudding":{"name":"Black Pudding","AC":"7","maxHP":85,"attack":5,"image":"https://media-waterdeep.cursecdn.com/avatars/thumbnails/0/201/248/315/636252764027417823.jpeg","exp":1100,"attacks":[["Corrosive Form","1d8"],["Pseudopod","1d6+3"]]},"Blink Dog":{"name":"Blink Dog","AC":"13","maxHP":22,"attack":3,"image":"https://media-waterdeep.cursecdn.com/avatars/thumbnails/0/205/378/315/636252764168652859.jpeg","exp":50,"attacks":[["Bite","1d6+1"]]},"Blood Hawk":{"name":"Blood Hawk","AC":"12","maxHP":7,"attack":4,"image":"https://media-waterdeep.cursecdn.com/attachments/2/648/beast.jpg","exp":25,"attacks":[["Beak","1d4+2"]]},"Blue Dragon Wyrmling":{"name":"Blue Dragon Wyrmling","AC":"17","maxHP":52,"attack":5,"image":"https://media-waterdeep.cursecdn.com/avatars/thumbnails/0/209/442/315/636252764637244026.jpeg","exp":700,"attacks":[["Bite","1d10+3"],["Lightning Breath","4d10"]]},"Boar":{"name":"Boar","AC":"11","maxHP":11,"attack":3,"image":"https://media-waterdeep.cursecdn.com/attachments/2/648/beast.jpg","exp":50,"attacks":[["Charge","1d6"],["Tusk","1d6+1"]]},"Bone Devil":{"name":"Bone Devil","AC":"19","maxHP":142,"attack":8,"image":"https://media-waterdeep.cursecdn.com/avatars/thumbnails/9/481/255/315/636328225187253200.jpeg","exp":5000,"attacks":[["Claw","1d8+4"],["Sting","2d8+4"]]},"Brass Dragon Wyrmling":{"name":"Brass Dragon Wyrmling","AC":"16","maxHP":16,"attack":4,"image":"https://media-waterdeep.cursecdn.com/avatars/thumbnails/0/215/375/315/636252764963208954.jpeg","exp":200,"attacks":[["Bite","1d10+2"],["Fire Breath","4d6"]]},"Bronze Dragon Wyrmling":{"name":"Bronze Dragon Wyrmling","AC":"17","maxHP":32,"attack":5,"image":"https://media-waterdeep.cursecdn.com/avatars/thumbnails/16/492/235/315/636376306909593829.jpeg","exp":450,"attacks":[["Bite","1d10+3"],["Lightning Breath","3d10"]]},"Brown Bear":{"name":"Brown Bear","AC":"11","maxHP":34,"attack":6,"image":"https://media-waterdeep.cursecdn.com/attachments/2/648/beast.jpg","exp":200,"attacks":[["Bite","1d8+4"],["Claws","2d6+4"]]},"Bugbear":{"name":"Bugbear","AC":"16","maxHP":27,"attack":4,"image":"https://media-waterdeep.cursecdn.com/avatars/thumbnails/0/221/255/315/636252765234633232.jpeg","exp":200,"attacks":[["Surprise Attack","2d6"],["Morningstar","2d8+2"],["Javelin","2d6+2"]]},"Bulette":{"name":"Bulette","AC":"17","maxHP":94,"attack":7,"image":"https://media-waterdeep.cursecdn.com/avatars/thumbnails/0/223/399/315/636252765369632881.jpeg","exp":1800,"attacks":[["Bite","4d12+4"],["Deadly Leap","3d6+4"]]},"Camel":{"name":"Camel","AC":"9","maxHP":15,"attack":5,"image":"https://media-waterdeep.cursecdn.com/attachments/2/648/beast.jpg","exp":25,"attacks":[["Bite","1d4"]]},"Cat":{"name":"Cat","AC":"12","maxHP":2,"attack":0,"image":"https://media-waterdeep.cursecdn.com/attachments/2/648/beast.jpg","exp":10,"attacks":[]},"Centaur":{"name":"Centaur","AC":"12","maxHP":45,"attack":6,"image":"https://media-waterdeep.cursecdn.com/avatars/thumbnails/0/227/405/315/636252765573266420.jpeg","exp":450,"attacks":[["Charge","3d6"],["Pike","1d10+4"],["Hooves","2d6+4"],["Longbow","1d8+2"]]},"Chain Devil":{"name":"Chain Devil","AC":"16","maxHP":85,"attack":8,"image":"https://media-waterdeep.cursecdn.com/avatars/thumbnails/0/235/289/315/636252766618069332.jpeg","exp":3900,"attacks":[["Chain","2d6+4"]]},"Chimera":{"name":"Chimera","AC":"14","maxHP":114,"attack":7,"image":"https://media-waterdeep.cursecdn.com/avatars/thumbnails/0/237/402/315/636252766770156389.jpeg","exp":2300,"attacks":[["Bite","2d6+4"],["Horns","1d12+4"],["Claws","2d6+4"],["Fire Breath","7d8"]]},"Chuul":{"name":"Chuul","AC":"16","maxHP":93,"attack":6,"image":"https://media-waterdeep.cursecdn.com/avatars/thumbnails/0/241/251/315/636252767122656355.jpeg","exp":1100,"attacks":[["Pincer","2d6+4"]]},"Clay Golem":{"name":"Clay Golem","AC":"14","maxHP":133,"attack":8,"image":"https://media-waterdeep.cursecdn.com/avatars/thumbnails/0/243/243/315/636252767318152303.jpeg","exp":5000,"attacks":[["Slam","2d10+5"]]},"Cloaker":{"name":"Cloaker","AC":"14","maxHP":78,"attack":6,"image":"https://media-waterdeep.cursecdn.com/avatars/thumbnails/0/245/294/315/636252767458838228.jpeg","exp":3900,"attacks":[["Bite","2d6+3"],["Tail","1d8+3"]]},"Cloud Giant":{"name":"Cloud Giant","AC":"14","maxHP":200,"attack":12,"image":"https://media-waterdeep.cursecdn.com/avatars/thumbnails/0/249/217/315/636252767619414260.jpeg","exp":5000,"attacks":[["Morningstar","3d8+8"],["Rock","4d10+8"]]},"Cockatrice":{"name":"Cockatrice","AC":"11","maxHP":27,"attack":3,"image":"https://media-waterdeep.cursecdn.com/avatars/thumbnails/0/251/381/315/636252767744669874.jpeg","exp":100,"attacks":[["Bite","1d4+1"]]},"Commoner":{"name":"Commoner","AC":"10","maxHP":4,"attack":2,"image":"https://media-waterdeep.cursecdn.com/attachments/2/656/humanoid.jpg","exp":10,"attacks":[["Club","1d4"]]},"Constrictor Snake":{"name":"Constrictor Snake","AC":"12","maxHP":13,"attack":4,"image":"https://media-waterdeep.cursecdn.com/attachments/2/648/beast.jpg","exp":50,"attacks":[["Bite","1d6+2"],["Constrict","1d8+2"]]},"Copper Dragon Wyrmling":{"name":"Copper Dragon Wyrmling","AC":"16","maxHP":22,"attack":4,"image":"https://media-waterdeep.cursecdn.com/avatars/thumbnails/0/255/235/315/636252768002215182.jpeg","exp":200,"attacks":[["Bite","1d10+2"],["Acid Breath","4d8"]]},"Couatl":{"name":"Couatl","AC":"19","maxHP":97,"attack":8,"image":"https://media-waterdeep.cursecdn.com/avatars/thumbnails/0/257/245/315/636252768143323827.jpeg","exp":1100,"attacks":[["Bite","1d6+5"],["Constrict","2d6+3"]]},"Crab":{"name":"Crab","AC":"11","maxHP":2,"attack":0,"image":"https://media-waterdeep.cursecdn.com/attachments/2/648/beast.jpg","exp":10,"attacks":[]},"Crocodile":{"name":"Crocodile","AC":"12","maxHP":19,"attack":4,"image":"https://media-waterdeep.cursecdn.com/attachments/2/648/beast.jpg","exp":100,"attacks":[["Bite","1d10+2"]]},"Cult Fanatic":{"name":"Cult Fanatic","AC":"13","maxHP":33,"attack":3,"image":"https://media-waterdeep.cursecdn.com/avatars/thumbnails/0/259/252/315/636252768307230924.jpeg","exp":450,"attacks":[["Dagger","1d4+2"]]},"Cultist":{"name":"Cultist","AC":"12","maxHP":9,"attack":3,"image":"https://media-waterdeep.cursecdn.com/avatars/thumbnails/14/481/194/315/636364323106021375.png","exp":25,"attacks":[["Scimitar","1d6+1"]]},"Cyclops":{"name":"Cyclops","AC":"14","maxHP":138,"attack":9,"image":"https://media-waterdeep.cursecdn.com/avatars/thumbnails/16/470/259/315/636376290137285130.jpeg","exp":2300,"attacks":[["Greatclub","3d8+6"],["Rock","4d10+6"]]},"Darkmantle":{"name":"Darkmantle","AC":"11","maxHP":22,"attack":5,"image":"https://media-waterdeep.cursecdn.com/avatars/thumbnails/0/263/253/315/636252768676699519.jpeg","exp":100,"attacks":[["Crush","1d6+3"]]},"Death Dog":{"name":"Death Dog","AC":"12","maxHP":39,"attack":4,"image":"https://media-waterdeep.cursecdn.com/avatars/thumbnails/0/265/387/315/636252768823194310.jpeg","exp":200,"attacks":[["Bite","1d6+2"]]},"Deep Gnome (Svirfneblin)":{"name":"Deep Gnome (Svirfneblin)","AC":"15","maxHP":16,"attack":4,"image":"https://media-waterdeep.cursecdn.com/avatars/thumbnails/9/112/215/315/636323610009818415.jpeg","exp":100,"attacks":[["War Pick","1d8+2"],["Poisoned Dart","1d4+2"]]},"Deer":{"name":"Deer","AC":"13","maxHP":4,"attack":2,"image":"https://media-waterdeep.cursecdn.com/attachments/2/648/beast.jpg","exp":10,"attacks":[["Bite","1d4"]]},"Deva":{"name":"Deva","AC":"17","maxHP":136,"attack":8,"image":"https://media-waterdeep.cursecdn.com/avatars/thumbnails/0/267/315/315/636252768980059444.jpeg","exp":5900,"attacks":[["Angelic Weapons","4d8"],["Mace","1d6+4"],["Healing Touch","4d8+2"]]},"Dire Wolf":{"name":"Dire Wolf","AC":"14","maxHP":37,"attack":5,"image":"https://media-waterdeep.cursecdn.com/avatars/thumbnails/16/484/269/315/636376300478361995.jpeg","exp":200,"attacks":[["Bite","2d6+3"]]},"Djinni":{"name":"Djinni","AC":"17","maxHP":161,"attack":9,"image":"https://media-waterdeep.cursecdn.com/avatars/thumbnails/0/281/226/315/636252770322204007.jpeg","exp":7200,"attacks":[["Scimitar","2d6+5"]]},"Doppelganger":{"name":"Doppelganger","AC":"14","maxHP":52,"attack":6,"image":"https://media-waterdeep.cursecdn.com/avatars/thumbnails/0/289/200/315/636252770983164351.jpeg","exp":700,"attacks":[["Surprise Attack","3d6"],["Slam","1d6+4"]]},"Draft Horse":{"name":"Draft Horse","AC":"10","maxHP":19,"attack":6,"image":"https://media-waterdeep.cursecdn.com/attachments/2/648/beast.jpg","exp":50,"attacks":[["Hooves","2d4+4"]]},"Dragon Turtle":{"name":"Dragon Turtle","AC":"20","maxHP":341,"attack":13,"image":"https://media-waterdeep.cursecdn.com/avatars/thumbnails/0/291/202/315/636252771128151641.jpeg","exp":18000,"attacks":[["Bite","3d12+7"],["Claw","2d8+7"],["Tail","3d12+7"],["Steam Breath","15d6"]]},"Dretch":{"name":"Dretch","AC":"11","maxHP":18,"attack":2,"image":"https://media-waterdeep.cursecdn.com/avatars/thumbnails/0/293/271/315/636252771253285096.jpeg","exp":50,"attacks":[["Bite","1d6"],["Claws","2d4"]]},"Drider":{"name":"Drider","AC":"19","maxHP":123,"attack":6,"image":"https://media-waterdeep.cursecdn.com/avatars/thumbnails/0/295/316/315/636252771409285458.jpeg","exp":2300,"attacks":[["Bite","1d4"],["Longsword","1d8+3"],["Longbow","1d8+3"]]},"Drow":{"name":"Drow","AC":"15","maxHP":13,"attack":4,"image":"https://media-waterdeep.cursecdn.com/avatars/thumbnails/16/501/227/315/636376310726273495.jpeg","exp":50,"attacks":[["Shortsword","1d6+2"],["Hand Crossbow","1d6+2"]]},"Druid":{"name":"Druid","AC":"11","maxHP":27,"attack":4,"image":"https://media-waterdeep.cursecdn.com/avatars/thumbnails/0/299/323/315/636252771583275655.jpeg","exp":450,"attacks":[["Quarterstaff","1d6"]]},"Dryad":{"name":"Dryad","AC":"11","maxHP":22,"attack":2,"image":"https://media-waterdeep.cursecdn.com/avatars/thumbnails/0/307/252/315/636252771953950206.jpeg","exp":200,"attacks":[["Club","1d4"]]},"Duergar":{"name":"Duergar","AC":"16","maxHP":26,"attack":4,"image":"https://media-waterdeep.cursecdn.com/avatars/thumbnails/0/309/282/315/636252772101183765.jpeg","exp":200,"attacks":[["War Pick","1d8+2"],["Javelin","1d6+2"]]},"Dust Mephit":{"name":"Dust Mephit","AC":"12","maxHP":17,"attack":4,"image":"https://media-waterdeep.cursecdn.com/avatars/thumbnails/0/313/268/315/636252772213922157.jpeg","exp":100,"attacks":[["Claws","1d4+2"]]},"Eagle":{"name":"Eagle","AC":"12","maxHP":3,"attack":4,"image":"https://media-waterdeep.cursecdn.com/avatars/thumbnails/16/515/628/315/636376317171111968.jpeg","exp":10,"attacks":[["Talons","1d4+2"]]},"Earth Elemental":{"name":"Earth Elemental","AC":"17","maxHP":126,"attack":8,"image":"https://media-waterdeep.cursecdn.com/avatars/thumbnails/0/317/298/315/636252772331779404.jpeg","exp":1800,"attacks":[["Slam","2d8+5"]]},"Efreeti":{"name":"Efreeti","AC":"17","maxHP":200,"attack":7,"image":"https://media-waterdeep.cursecdn.com/avatars/thumbnails/0/325/280/315/636252775714332067.jpeg","exp":7200,"attacks":[["Scimitar","2d6+6"],["Hurl Flame","5d6"]]},"Elephant":{"name":"Elephant","AC":"12","maxHP":76,"attack":8,"image":"https://media-waterdeep.cursecdn.com/attachments/2/648/beast.jpg","exp":1100,"attacks":[["Gore","3d8+6"],["Stomp","3d10+6"]]},"Elk":{"name":"Elk","AC":"10","maxHP":13,"attack":5,"image":"https://media-waterdeep.cursecdn.com/attachments/2/648/beast.jpg","exp":50,"attacks":[["Charge","2d6"],["Ram","1d6+3"],["Hooves","2d4+3"]]},"Erinyes":{"name":"Erinyes","AC":"18","maxHP":153,"attack":8,"image":"https://media-waterdeep.cursecdn.com/avatars/thumbnails/0/329/232/315/636252776041158657.jpeg","exp":8400,"attacks":[["Hellish Weapons","3d8"],["Longsword","1d8+4"],["Longbow","1d8+3"]]},"Ettercap":{"name":"Ettercap","AC":"13","maxHP":44,"attack":4,"image":"https://media-waterdeep.cursecdn.com/avatars/thumbnails/0/339/238/315/636252776771842998.jpeg","exp":450,"attacks":[["Bite","1d8+2"],["Claws","2d4+2"]]},"Ettin":{"name":"Ettin","AC":"12","maxHP":85,"attack":7,"image":"https://media-waterdeep.cursecdn.com/avatars/thumbnails/0/341/288/315/636252776953634777.jpeg","exp":1100,"attacks":[["Battleaxe","2d8+5"],["Morningstar","2d8+5"]]},"Fire Elemental":{"name":"Fire Elemental","AC":"13","maxHP":102,"attack":6,"image":"https://media-waterdeep.cursecdn.com/avatars/thumbnails/0/343/264/315/636252777098624896.jpeg","exp":1800,"attacks":[["Fire Form","1d10"],["Touch","2d6+3"]]},"Fire Giant":{"name":"Fire Giant","AC":"18","maxHP":162,"attack":11,"image":"https://media-waterdeep.cursecdn.com/avatars/thumbnails/0/357/243/315/636252778143767005.jpeg","exp":5000,"attacks":[["Greatsword","6d6+7"],["Rock","4d10+7"]]},"Flameskull":{"name":"Flameskull","AC":"13","maxHP":40,"attack":5,"image":"https://media-waterdeep.cursecdn.com/avatars/thumbnails/14/487/242/315/636364325235118776.png","exp":1100,"attacks":[["Fire Ray","3d6"]]},"Flesh Golem":{"name":"Flesh Golem","AC":"9","maxHP":93,"attack":7,"image":"https://media-waterdeep.cursecdn.com/avatars/thumbnails/0/359/290/315/636252778311644574.jpeg","exp":1800,"attacks":[["Slam","2d8+4"]]},"Flying Snake":{"name":"Flying Snake","AC":"14","maxHP":5,"attack":6,"image":"https://media-waterdeep.cursecdn.com/avatars/thumbnails/16/517/193/315/636376319640572721.jpeg","exp":25,"attacks":[["Bite","3d4"]]},"Flying Sword":{"name":"Flying Sword","AC":"17","maxHP":17,"attack":3,"image":"https://media-waterdeep.cursecdn.com/avatars/thumbnails/77/599/187/315/636473151106171093.png","exp":50,"attacks":[["Longsword","1d8+1"]]},"Frog":{"name":"Frog","AC":"11","maxHP":1,"attack":0,"image":"https://media-waterdeep.cursecdn.com/avatars/thumbnails/16/523/335/315/636376321230650501.jpeg","exp":10,"attacks":[]},"Frost Giant":{"name":"Frost Giant","AC":"15","maxHP":138,"attack":9,"image":"https://media-waterdeep.cursecdn.com/avatars/thumbnails/0/405/246/315/636252786158646348.jpeg","exp":3900,"attacks":[["Greataxe","3d12+6"],["Rock","4d10+6"]]},"Gargoyle":{"name":"Gargoyle","AC":"15","maxHP":52,"attack":4,"image":"https://media-waterdeep.cursecdn.com/avatars/thumbnails/0/407/265/315/636252786295384889.jpeg","exp":450,"attacks":[["Bite","1d6+2"],["Claws","1d6+2"]]},"Gelatinous Cube":{"name":"Gelatinous Cube","AC":"6","maxHP":84,"attack":4,"image":"https://media-waterdeep.cursecdn.com/avatars/thumbnails/0/409/299/315/636252786406028958.jpeg","exp":450,"attacks":[["","3d6"],["Pseudopod","3d6"],["","3d6"]]},"Ghast":{"name":"Ghast","AC":"13","maxHP":36,"attack":3,"image":"https://media-waterdeep.cursecdn.com/avatars/thumbnails/0/411/286/315/636252786516023032.jpeg","exp":450,"attacks":[["Bite","2d8+3"],["Claws","2d6+3"]]},"Ghost":{"name":"Ghost","AC":"11","maxHP":45,"attack":5,"image":"https://media-waterdeep.cursecdn.com/avatars/thumbnails/0/413/230/315/636252786639798307.jpeg","exp":1100,"attacks":[["Incorporeal Movement","1d10"],["Withering Touch","4d6+3"],["Horrifying Visage","1d4"]]},"Ghoul":{"name":"Ghoul","AC":"12","maxHP":22,"attack":2,"image":"https://media-waterdeep.cursecdn.com/avatars/thumbnails/14/483/183/315/636364323937041514.png","exp":200,"attacks":[["Bite","2d6+2"],["Claws","2d4+2"]]},"Giant Ape":{"name":"Giant Ape","AC":"12","maxHP":157,"attack":9,"image":"https://media-waterdeep.cursecdn.com/attachments/2/648/beast.jpg","exp":2900,"attacks":[["Fist","3d10+6"],["Rock","7d6+6"]]},"Giant Badger":{"name":"Giant Badger","AC":"10","maxHP":13,"attack":3,"image":"https://media-waterdeep.cursecdn.com/avatars/thumbnails/16/530/296/315/636376327839601860.jpeg","exp":50,"attacks":[["Bite","1d6+1"],["Claws","2d4+1"]]},"Giant Bat":{"name":"Giant Bat","AC":"13","maxHP":22,"attack":4,"image":"https://media-waterdeep.cursecdn.com/attachments/2/648/beast.jpg","exp":50,"attacks":[["Bite","1d6+2"]]},"Giant Boar":{"name":"Giant Boar","AC":"12","maxHP":42,"attack":5,"image":"https://media-waterdeep.cursecdn.com/attachments/2/648/beast.jpg","exp":450,"attacks":[["Charge","2d6"],["Tusk","2d6+3"]]},"Giant Centipede":{"name":"Giant Centipede","AC":"13","maxHP":4,"attack":4,"image":"https://media-waterdeep.cursecdn.com/attachments/2/648/beast.jpg","exp":50,"attacks":[["Bite","1d4+2"]]},"Giant Constrictor Snake":{"name":"Giant Constrictor Snake","AC":"12","maxHP":60,"attack":6,"image":"https://media-waterdeep.cursecdn.com/attachments/2/648/beast.jpg","exp":450,"attacks":[["Bite","2d6+4"],["Constrict","2d8+4"]]},"Giant Crab":{"name":"Giant Crab","AC":"15","maxHP":13,"attack":3,"image":"https://media-waterdeep.cursecdn.com/attachments/2/648/beast.jpg","exp":25,"attacks":[["Claw","1d6+1"]]},"Giant Crocodile":{"name":"Giant Crocodile","AC":"14","maxHP":85,"attack":8,"image":"https://media-waterdeep.cursecdn.com/attachments/2/648/beast.jpg","exp":1800,"attacks":[["Bite","3d10+5"],["Tail","2d8+5"]]},"Giant Eagle":{"name":"Giant Eagle","AC":"13","maxHP":26,"attack":5,"image":"https://media-waterdeep.cursecdn.com/avatars/thumbnails/9/894/628/315/636334286969931904.jpeg","exp":200,"attacks":[["Beak","1d6+3"],["Talons","2d6+3"]]},"Giant Elk":{"name":"Giant Elk","AC":"14","maxHP":42,"attack":6,"image":"https://media-waterdeep.cursecdn.com/attachments/2/648/beast.jpg","exp":450,"attacks":[["Charge","2d6"],["Ram","2d6+4"],["Hooves","4d8+4"]]},"Giant Fire Beetle":{"name":"Giant Fire Beetle","AC":"13","maxHP":4,"attack":1,"image":"https://media-waterdeep.cursecdn.com/avatars/thumbnails/9/896/493/315/636334287498492864.jpeg","exp":10,"attacks":[["Bite","1d6"]]},"Giant Frog":{"name":"Giant Frog","AC":"11","maxHP":18,"attack":3,"image":"https://media-waterdeep.cursecdn.com/avatars/thumbnails/16/521/335/315/636376321052503535.jpeg","exp":50,"attacks":[["Bite","1d6+1"],["Swallow","2d4"]]},"Giant Goat":{"name":"Giant Goat","AC":"11","maxHP":19,"attack":5,"image":"https://media-waterdeep.cursecdn.com/attachments/2/648/beast.jpg","exp":100,"attacks":[["Charge","2d4"],["Ram","2d4+3"]]},"Giant Hyena":{"name":"Giant Hyena","AC":"12","maxHP":45,"attack":5,"image":"https://media-waterdeep.cursecdn.com/attachments/2/648/beast.jpg","exp":200,"attacks":[["Bite","2d6+3"]]},"Giant Lizard":{"name":"Giant Lizard","AC":"12","maxHP":19,"attack":4,"image":"https://media-waterdeep.cursecdn.com/attachments/2/648/beast.jpg","exp":50,"attacks":[["Bite","1d8+2"]]},"Giant Octopus":{"name":"Giant Octopus","AC":"11","maxHP":52,"attack":5,"image":"https://media-waterdeep.cursecdn.com/avatars/thumbnails/9/898/191/315/636334288003435302.jpeg","exp":200,"attacks":[["Tentacles","2d6+3"]]},"Giant Owl":{"name":"Giant Owl","AC":"12","maxHP":19,"attack":3,"image":"https://media-waterdeep.cursecdn.com/avatars/thumbnails/16/535/173/315/636376331788287090.jpeg","exp":50,"attacks":[["Talons","2d6+1"]]},"Giant Poisonous Snake":{"name":"Giant Poisonous Snake","AC":"14","maxHP":11,"attack":6,"image":"https://media-waterdeep.cursecdn.com/attachments/2/648/beast.jpg","exp":50,"attacks":[["Bite","1d4+4"]]},"Giant Rat":{"name":"Giant Rat","AC":"12","maxHP":7,"attack":4,"image":"https://media-waterdeep.cursecdn.com/avatars/thumbnails/16/538/503/315/636376332197953299.jpeg","exp":25,"attacks":[["Bite","1d4+2"]]},"Giant Scorpion":{"name":"Giant Scorpion","AC":"15","maxHP":52,"attack":4,"image":"https://media-waterdeep.cursecdn.com/attachments/2/648/beast.jpg","exp":700,"attacks":[["Claw","1d8+2"],["Sting","1d10+2"]]},"Giant Sea Horse":{"name":"Giant Sea Horse","AC":"13","maxHP":16,"attack":3,"image":"https://media-waterdeep.cursecdn.com/attachments/2/648/beast.jpg","exp":100,"attacks":[["Charge","2d6"],["Ram","1d6+1"]]},"Giant Shark":{"name":"Giant Shark","AC":"13","maxHP":126,"attack":9,"image":"https://media-waterdeep.cursecdn.com/attachments/2/648/beast.jpg","exp":1800,"attacks":[["Bite","3d10+6"]]},"Giant Spider":{"name":"Giant Spider","AC":"14","maxHP":26,"attack":5,"image":"https://media-waterdeep.cursecdn.com/avatars/thumbnails/0/323/412/315/636252775648743317.jpeg","exp":200,"attacks":[["Bite","1d8+3"]]},"Giant Toad":{"name":"Giant Toad","AC":"11","maxHP":39,"attack":4,"image":"https://media-waterdeep.cursecdn.com/attachments/2/648/beast.jpg","exp":200,"attacks":[["Bite","1d10+2"],["Swallow","3d6"]]},"Giant Vulture":{"name":"Giant Vulture","AC":"10","maxHP":22,"attack":4,"image":"https://media-waterdeep.cursecdn.com/attachments/2/648/beast.jpg","exp":200,"attacks":[["Beak","2d4+2"],["Talons","2d6+2"]]},"Giant Wasp":{"name":"Giant Wasp","AC":"12","maxHP":13,"attack":4,"image":"https://media-waterdeep.cursecdn.com/attachments/2/648/beast.jpg","exp":100,"attacks":[["Sting","1d6+2"]]},"Giant Weasel":{"name":"Giant Weasel","AC":"13","maxHP":9,"attack":5,"image":"https://media-waterdeep.cursecdn.com/attachments/2/648/beast.jpg","exp":25,"attacks":[["Bite","1d4+3"]]},"Giant Wolf Spider":{"name":"Giant Wolf Spider","AC":"13","maxHP":11,"attack":3,"image":"https://media-waterdeep.cursecdn.com/attachments/2/648/beast.jpg","exp":50,"attacks":[["Bite","1d6+1"]]},"Gibbering Mouther":{"name":"Gibbering Mouther","AC":"9","maxHP":67,"attack":2,"image":"https://media-waterdeep.cursecdn.com/avatars/thumbnails/0/333/257/315/636252776252001529.jpeg","exp":450,"attacks":[["Bite","5d6"]]},"Glabrezu":{"name":"Glabrezu","AC":"17","maxHP":157,"attack":9,"image":"https://media-waterdeep.cursecdn.com/avatars/thumbnails/0/337/378/315/636252776677682465.jpeg","exp":5000,"attacks":[["Pincer","2d10+5"],["Fist","2d4+2"]]},"Gladiator":{"name":"Gladiator","AC":"16","maxHP":112,"attack":7,"image":"https://media-waterdeep.cursecdn.com/attachments/2/656/humanoid.jpg","exp":1800,"attacks":[["Spear","2d6+4"],["Shield Bash","2d4+4"]]},"Gnoll":{"name":"Gnoll","AC":"15","maxHP":22,"attack":4,"image":"https://media-waterdeep.cursecdn.com/avatars/thumbnails/0/345/284/315/636252777224997611.jpeg","exp":100,"attacks":[["Bite","1d4+2"],["Spear","1d6+2"],["Longbow","1d8+1"]]},"Goat":{"name":"Goat","AC":"10","maxHP":4,"attack":3,"image":"https://media-waterdeep.cursecdn.com/attachments/2/648/beast.jpg","exp":10,"attacks":[["Charge","1d4"],["Ram","1d4+1"]]},"Goblin":{"name":"Goblin","AC":"15","maxHP":7,"attack":4,"image":"https://media-waterdeep.cursecdn.com/avatars/thumbnails/0/351/218/315/636252777818652432.jpeg","exp":50,"attacks":[["Scimitar","1d6+2"],["Shortbow","1d6+2"]]},"Gold Dragon Wyrmling":{"name":"Gold Dragon Wyrmling","AC":"17","maxHP":60,"attack":6,"image":"https://media-waterdeep.cursecdn.com/avatars/thumbnails/7/516/244/315/636285466148376212.jpeg","exp":700,"attacks":[["Bite ","1d10+4"],["Fire Breath ","4d10"]]},"Gorgon":{"name":"Gorgon","AC":"19","maxHP":114,"attack":8,"image":"https://media-waterdeep.cursecdn.com/avatars/thumbnails/0/355/382/315/636252778125099430.jpeg","exp":1800,"attacks":[["Gore","2d12+5"],["Hooves","2d10+5"]]},"Gray Ooze":{"name":"Gray Ooze","AC":"8","maxHP":22,"attack":3,"image":"https://media-waterdeep.cursecdn.com/attachments/2/658/ooze.jpg","exp":100,"attacks":[["Pseudopod","1d6+1"]]},"Green Dragon Wyrmling":{"name":"Green Dragon Wyrmling","AC":"17","maxHP":38,"attack":4,"image":"https://media-waterdeep.cursecdn.com/avatars/thumbnails/0/363/490/315/636252778639163748.jpeg","exp":450,"attacks":[["Bite","1d10+2"],["Poison Breath","6d6"]]},"Green Hag":{"name":"Green Hag","AC":"17","maxHP":82,"attack":6,"image":"https://media-waterdeep.cursecdn.com/avatars/thumbnails/0/365/209/315/636252778948574879.jpeg","exp":700,"attacks":[["Claws","2d8+4"]]},"Grick":{"name":"Grick","AC":"14","maxHP":27,"attack":4,"image":"https://media-waterdeep.cursecdn.com/avatars/thumbnails/0/369/205/315/636252779341924439.jpeg","exp":450,"attacks":[["Tentacles","2d6+2"],["Beak","1d6+2"]]},"Griffon":{"name":"Griffon","AC":"12","maxHP":59,"attack":6,"image":"https://media-waterdeep.cursecdn.com/avatars/thumbnails/0/373/288/315/636252779693862725.jpeg","exp":450,"attacks":[["Beak","1d8+4"],["Claws","2d6+4"]]},"Grimlock":{"name":"Grimlock","AC":"11","maxHP":11,"attack":5,"image":"https://media-waterdeep.cursecdn.com/avatars/thumbnails/0/375/322/315/636252780049813181.jpeg","exp":50,"attacks":[["Spiked Bone Club","1d4+3"]]},"Guard":{"name":"Guard","AC":"16","maxHP":11,"attack":3,"image":"https://media-waterdeep.cursecdn.com/attachments/2/656/humanoid.jpg","exp":25,"attacks":[["Spear","1d6+1"]]},"Guardian Naga":{"name":"Guardian Naga","AC":"18","maxHP":127,"attack":8,"image":"https://media-waterdeep.cursecdn.com/avatars/thumbnails/0/377/254/315/636252780447421771.jpeg","exp":5900,"attacks":[["Rejuvenation","1d6"],["Bite","1d8+4"],["Spit Poison","10d8"]]},"Gynosphinx":{"name":"Gynosphinx","AC":"17","maxHP":136,"attack":8,"image":"https://media-waterdeep.cursecdn.com/avatars/thumbnails/0/383/330/315/636252780786457550.jpeg","exp":7200,"attacks":[["Claw","2d8+4"]]},"Half-Red Dragon Veteran":{"name":"Half-Red Dragon Veteran","AC":"18","maxHP":65,"attack":5,"image":"https://media-waterdeep.cursecdn.com/avatars/thumbnails/0/387/288/315/636252781353903793.jpeg","exp":1800,"attacks":[["Longsword","1d8+3"],["Shortsword","1d6+3"],["Heavy Crossbow","1d10+1"],["Fire Breath","7d6"]]},"Harpy":{"name":"Harpy","AC":"11","maxHP":38,"attack":3,"image":"https://media-waterdeep.cursecdn.com/avatars/thumbnails/0/391/294/315/636252781955908234.jpeg","exp":200,"attacks":[["Claws","2d4+1"],["Club","1d4+1"]]},"Hawk":{"name":"Hawk","AC":"13","maxHP":1,"attack":5,"image":"https://media-waterdeep.cursecdn.com/avatars/thumbnails/9/900/528/315/636334288270143064.jpeg","exp":10,"attacks":[]},"Hell Hound":{"name":"Hell Hound","AC":"15","maxHP":45,"attack":5,"image":"https://media-waterdeep.cursecdn.com/avatars/thumbnails/0/393/336/315/636252782461361426.jpeg","exp":700,"attacks":[["Bite","1d8+3"],["Fire Breath","6d6"]]},"Hezrou":{"name":"Hezrou","AC":"16","maxHP":136,"attack":7,"image":"https://media-waterdeep.cursecdn.com/avatars/thumbnails/0/321/260/315/636252775562934524.jpeg","exp":3900,"attacks":[["Bite","2d10+4"],["Claw","2d6+4"]]},"Hill Giant":{"name":"Hill Giant","AC":"13","maxHP":105,"attack":8,"image":"https://media-waterdeep.cursecdn.com/avatars/thumbnails/0/331/222/315/636252776196140305.jpeg","exp":1800,"attacks":[["Greatclub","3d8+5"],["Rock","3d10+5"]]},"Hippogriff":{"name":"Hippogriff","AC":"11","maxHP":19,"attack":5,"image":"https://media-waterdeep.cursecdn.com/avatars/thumbnails/0/335/281/315/636252776578605778.jpeg","exp":200,"attacks":[["Beak","1d10+3"],["Claws","2d6+3"]]},"Hobgoblin":{"name":"Hobgoblin","AC":"18","maxHP":11,"attack":3,"image":"https://media-waterdeep.cursecdn.com/avatars/thumbnails/0/389/267/315/636252781431932597.jpeg","exp":100,"attacks":[["Martial Advantage","2d6"],["Longsword","1d8+1"],["Longbow","1d8+1"]]},"Homunculus":{"name":"Homunculus","AC":"13","maxHP":5,"attack":4,"image":"https://media-waterdeep.cursecdn.com/avatars/thumbnails/18/287/310/315/636379803928245506.jpeg","exp":10,"attacks":[["Bite","1d10"]]},"Horned Devil":{"name":"Horned Devil","AC":"18","maxHP":148,"attack":10,"image":"https://media-waterdeep.cursecdn.com/avatars/thumbnails/0/347/336/315/636252777255936976.jpeg","exp":7200,"attacks":[["Fork","2d8+6"],["Tail","1d8+6"],["Hurl Flame","4d6"]]},"Hunter Shark":{"name":"Hunter Shark","AC":"12","maxHP":45,"attack":6,"image":"https://media-waterdeep.cursecdn.com/attachments/2/648/beast.jpg","exp":450,"attacks":[["Bite","2d8+4"]]},"Hydra":{"name":"Hydra","AC":"15","maxHP":172,"attack":8,"image":"https://media-waterdeep.cursecdn.com/avatars/thumbnails/0/349/355/315/636252777669218389.jpeg","exp":3900,"attacks":[["Bite","1d10+5"]]},"Hyena":{"name":"Hyena","AC":"11","maxHP":5,"attack":2,"image":"https://media-waterdeep.cursecdn.com/avatars/thumbnails/9/902/408/315/636334288674955736.jpeg","exp":10,"attacks":[["Bite","1d6"]]},"Ice Devil":{"name":"Ice Devil","AC":"18","maxHP":180,"attack":10,"image":"https://media-waterdeep.cursecdn.com/avatars/thumbnails/0/353/467/315/636252777966974765.jpeg","exp":11500,"attacks":[["Bite","2d6+5"],["Claws","2d4+5"],["Tail","2d6+5"],["","10d6"],["","5d6"]]},"Ice Mephit":{"name":"Ice Mephit","AC":"11","maxHP":21,"attack":3,"image":"https://media-waterdeep.cursecdn.com/avatars/thumbnails/18/290/232/315/636379804105821214.jpeg","exp":100,"attacks":[["Death Burst","1d8"],["Claws","1d4+1"],["Frost Breath","2d4"]]},"Imp":{"name":"Imp","AC":"13","maxHP":10,"attack":5,"image":"https://media-waterdeep.cursecdn.com/avatars/thumbnails/0/361/234/315/636252778560366227.jpeg","exp":200,"attacks":[["Sting","1d4+3"]]},"Incubus":{"name":"Incubus","AC":"15","maxHP":66,"attack":5,"image":"https://media-waterdeep.cursecdn.com/avatars/thumbnails/5388/845/343/315/636857603667977177.png","exp":1100,"attacks":[["Claw","1d6+3"],["Draining Kiss","5d10+5"]]},"Invisible Stalker":{"name":"Invisible Stalker","AC":"14","maxHP":104,"attack":6,"image":"https://media-waterdeep.cursecdn.com/avatars/thumbnails/0/367/279/315/636252779159282339.jpeg","exp":2300,"attacks":[["Slam","2d6+3"]]},"Iron Golem":{"name":"Iron Golem","AC":"20","maxHP":210,"attack":13,"image":"https://media-waterdeep.cursecdn.com/avatars/thumbnails/0/371/254/315/636252779460570049.jpeg","exp":15000,"attacks":[["Slam","3d8+7"],["Sword","3d10+7"],["Poison Breath","10d8"]]},"Jackal":{"name":"Jackal","AC":"12","maxHP":3,"attack":1,"image":"https://media-waterdeep.cursecdn.com/attachments/2/648/beast.jpg","exp":10,"attacks":[["Bite","1d4"]]},"Killer Whale":{"name":"Killer Whale","AC":"12","maxHP":90,"attack":6,"image":"https://media-waterdeep.cursecdn.com/attachments/2/648/beast.jpg","exp":700,"attacks":[["Bite","5d6+4"]]},"Knight":{"name":"Knight","AC":"18","maxHP":52,"attack":5,"image":"https://media-waterdeep.cursecdn.com/attachments/2/656/humanoid.jpg","exp":700,"attacks":[["Greatsword","2d6+3"],["Heavy Crossbow","1d10"]]},"Kobold":{"name":"Kobold","AC":"12","maxHP":5,"attack":4,"image":"https://media-waterdeep.cursecdn.com/avatars/thumbnails/0/379/233/315/636252780450300625.jpeg","exp":25,"attacks":[["Dagger","1d4+2"],["Sling","1d4+2"]]},"Kraken":{"name":"Kraken","AC":"18","maxHP":472,"attack":17,"image":"https://media-waterdeep.cursecdn.com/avatars/thumbnails/0/381/219/315/636252780680163799.jpeg","exp":50000,"attacks":[["Bite","3d8+10"],["Tentacle","3d6+10"],["Fling","1d6"],["Lightning Storm","4d10"],["Ink Cloud","3d10"]]},"Lamia":{"name":"Lamia","AC":"13","maxHP":97,"attack":5,"image":"https://media-waterdeep.cursecdn.com/avatars/thumbnails/0/385/353/315/636252780906064244.jpeg","exp":1100,"attacks":[["Claws","2d10+3"],["Dagger","1d4+3"]]},"Lemure":{"name":"Lemure","AC":"7","maxHP":13,"attack":3,"image":"https://media-waterdeep.cursecdn.com/avatars/thumbnails/0/149/242/315/636252758704142054.jpeg","exp":10,"attacks":[["Hellish Rejuvenation","1d10"],["Fist","1d4"]]},"Lich":{"name":"Lich","AC":"17","maxHP":135,"attack":12,"image":"https://media-waterdeep.cursecdn.com/avatars/thumbnails/0/165/264/315/636252760084366499.jpeg","exp":33000,"attacks":[["Rejuvenation","1d10"],["Paralyzing Touch","3d6"],["Disrupt Life","6d6"]]},"Lion":{"name":"Lion","AC":"12","maxHP":26,"attack":5,"image":"https://media-waterdeep.cursecdn.com/attachments/2/648/beast.jpg","exp":200,"attacks":[["Bite","1d8+3"],["Claw","1d6+3"]]},"Lizard":{"name":"Lizard","AC":"10","maxHP":2,"attack":0,"image":"https://media-waterdeep.cursecdn.com/attachments/2/648/beast.jpg","exp":10,"attacks":[]},"Lizardfolk":{"name":"Lizardfolk","AC":"15","maxHP":22,"attack":4,"image":"https://media-waterdeep.cursecdn.com/avatars/thumbnails/0/233/346/315/636252766314905259.jpeg","exp":100,"attacks":[["Bite","1d6+2"],["Heavy Club","1d6+2"],["Javelin","1d6+2"],["Spiked Shield","1d6+2"]]},"Mage":{"name":"Mage","AC":"12","maxHP":40,"attack":6,"image":"https://media-waterdeep.cursecdn.com/attachments/2/656/humanoid.jpg","exp":2300,"attacks":[["Dagger","1d4+2"]]},"Magma Mephit":{"name":"Magma Mephit","AC":"11","maxHP":22,"attack":3,"image":"https://media-waterdeep.cursecdn.com/avatars/thumbnails/18/292/147/315/636379804350894228.jpeg","exp":100,"attacks":[["Death Burst","2d6"],["Claws","1d4+1"],["Fire Breath","2d6"]]},"Magmin":{"name":"Magmin","AC":"14","maxHP":9,"attack":4,"image":"https://media-waterdeep.cursecdn.com/avatars/thumbnails/0/183/248/315/636252762034276620.jpeg","exp":100,"attacks":[["Death Burst","2d6"],["Touch","2d6"]]},"Mammoth":{"name":"Mammoth","AC":"13","maxHP":126,"attack":10,"image":"https://media-waterdeep.cursecdn.com/attachments/2/648/beast.jpg","exp":2300,"attacks":[["Gore","4d8+7"],["Stomp","4d10+7"]]},"Manticore":{"name":"Manticore","AC":"14","maxHP":68,"attack":5,"image":"https://media-waterdeep.cursecdn.com/avatars/thumbnails/0/187/402/315/636252762623266809.jpeg","exp":700,"attacks":[["Bite","1d8+3"],["Claw","1d6+3"],["Tail Spike","1d8+3"]]},"Marilith":{"name":"Marilith","AC":"18","maxHP":189,"attack":9,"image":"https://media-waterdeep.cursecdn.com/avatars/thumbnails/0/189/240/315/636252763036079032.jpeg","exp":15000,"attacks":[["Longsword","2d8+4"],["Tail","2d10+4"]]},"Mastiff":{"name":"Mastiff","AC":"12","maxHP":5,"attack":3,"image":"https://media-waterdeep.cursecdn.com/avatars/thumbnails/0/191/378/315/636252763295291063.jpeg","exp":25,"attacks":[["Bite","1d6+1"]]},"Medusa":{"name":"Medusa","AC":"15","maxHP":127,"attack":5,"image":"https://media-waterdeep.cursecdn.com/avatars/thumbnails/16/580/233/315/636376361850900325.jpeg","exp":2300,"attacks":[["Snake Hair","1d4+2"],["Shortsword","1d6+2"],["Longbow","1d8+2"]]},"Merfolk":{"name":"Merfolk","AC":"11","maxHP":11,"attack":2,"image":"https://media-waterdeep.cursecdn.com/avatars/thumbnails/0/197/203/315/636252763841141413.jpeg","exp":25,"attacks":[["Spear","1d6"]]},"Merrow":{"name":"Merrow","AC":"13","maxHP":45,"attack":6,"image":"https://media-waterdeep.cursecdn.com/avatars/thumbnails/0/203/231/315/636252764097970952.jpeg","exp":450,"attacks":[["Bite","1d8+4"],["Claws","2d4+4"],["Harpoon","2d6+4"]]},"Mimic":{"name":"Mimic","AC":"12","maxHP":58,"attack":5,"image":"https://media-waterdeep.cursecdn.com/avatars/thumbnails/0/211/359/315/636252764731637373.jpeg","exp":450,"attacks":[["Pseudopod","1d8+3"],["Bite","1d8+3"]]},"Minotaur":{"name":"Minotaur","AC":"14","maxHP":76,"attack":6,"image":"https://media-waterdeep.cursecdn.com/avatars/thumbnails/0/217/248/315/636252765009181721.jpeg","exp":700,"attacks":[["Charge","2d8"],["Greataxe","2d12+4"],["Gore","2d8+4"]]},"Minotaur Skeleton":{"name":"Minotaur Skeleton","AC":"12","maxHP":67,"attack":6,"image":"https://media-waterdeep.cursecdn.com/avatars/thumbnails/16/480/331/315/636376298435934058.jpeg","exp":450,"attacks":[["Charge","2d8"],["Greataxe","2d12+4"],["Gore","2d8+4"]]},"Mule":{"name":"Mule","AC":"10","maxHP":11,"attack":2,"image":"https://media-waterdeep.cursecdn.com/attachments/2/648/beast.jpg","exp":25,"attacks":[["Hooves","1d4+2"]]},"Mummy":{"name":"Mummy","AC":"11","maxHP":58,"attack":5,"image":"https://media-waterdeep.cursecdn.com/avatars/thumbnails/0/225/201/315/636252765553048566.jpeg","exp":700,"attacks":[["Rotting Fist","2d6+3"]]},"Mummy Lord":{"name":"Mummy Lord","AC":"17","maxHP":97,"attack":9,"image":"https://media-waterdeep.cursecdn.com/attachments/2/660/undead.jpg","exp":13000,"attacks":[["Rotting Fist","3d6+4"]]},"Nalfeshnee":{"name":"Nalfeshnee","AC":"18","maxHP":184,"attack":10,"image":"https://media-waterdeep.cursecdn.com/avatars/thumbnails/0/261/299/315/636252768396688147.jpeg","exp":10000,"attacks":[["Bite","5d10+5"],["Claw","3d6+5"]]},"Night Hag":{"name":"Night Hag","AC":"17","maxHP":112,"attack":6,"image":"https://media-waterdeep.cursecdn.com/avatars/thumbnails/0/269/274/315/636252769277562895.jpeg","exp":1800,"attacks":[["Claws","2d8+4"],["Nightmare Haunting","1d10"]]},"Nightmare":{"name":"Nightmare","AC":"13","maxHP":68,"attack":6,"image":"https://media-waterdeep.cursecdn.com/avatars/thumbnails/0/273/288/315/636252769493472144.jpeg","exp":700,"attacks":[["Hooves","2d8+4"]]},"Noble":{"name":"Noble","AC":"15","maxHP":9,"attack":3,"image":"https://media-waterdeep.cursecdn.com/avatars/thumbnails/0/277/231/315/636252769861281900.jpeg","exp":25,"attacks":[["Rapier","1d8+1"]]},"Nothic":{"name":"Nothic","AC":"15","maxHP":45,"attack":4,"image":"https://media-waterdeep.cursecdn.com/avatars/thumbnails/14/475/270/315/636364321398842272.png","exp":450,"attacks":[["Claw","1d6+3"],["Rotting Gaze","3d6"]]},"Ochre Jelly":{"name":"Ochre Jelly","AC":"8","maxHP":45,"attack":4,"image":"https://media-waterdeep.cursecdn.com/avatars/thumbnails/0/279/327/315/636252770058723674.jpeg","exp":450,"attacks":[["Pseudopod","2d6+2"]]},"Octopus":{"name":"Octopus","AC":"12","maxHP":3,"attack":4,"image":"https://media-waterdeep.cursecdn.com/avatars/thumbnails/9/921/191/315/636334602449110996.jpeg","exp":10,"attacks":[]},"Ogre":{"name":"Ogre","AC":"11","maxHP":59,"attack":6,"image":"https://media-waterdeep.cursecdn.com/avatars/thumbnails/0/285/242/315/636252770535203221.jpeg","exp":450,"attacks":[["Greatclub","2d8+4"],["Javelin","2d6+4"]]},"Ogre Zombie":{"name":"Ogre Zombie","AC":"8","maxHP":85,"attack":6,"image":"https://media-waterdeep.cursecdn.com/avatars/thumbnails/0/287/239/315/636252770700032248.jpeg","exp":450,"attacks":[["Morningstar","2d8+4"]]},"Oni":{"name":"Oni","AC":"16","maxHP":110,"attack":7,"image":"https://media-waterdeep.cursecdn.com/avatars/thumbnails/0/297/278/315/636252771507213738.jpeg","exp":2900,"attacks":[["Claw","1d8+4"],["Glaive","2d10+4"]]},"Orc":{"name":"Orc","AC":"13","maxHP":15,"attack":5,"image":"https://media-waterdeep.cursecdn.com/avatars/thumbnails/0/301/256/315/636252771691385727.jpeg","exp":100,"attacks":[["Greataxe","1d12+3"],["Javelin","1d6+3"]]},"Otyugh":{"name":"Otyugh","AC":"14","maxHP":114,"attack":6,"image":"https://media-waterdeep.cursecdn.com/avatars/thumbnails/0/305/345/315/636252771931366466.jpeg","exp":1800,"attacks":[["Bite","2d8+3"],["Tentacle","1d8+3"],["Tentacle Slam","2d6+3"]]},"Owl":{"name":"Owl","AC":"11","maxHP":1,"attack":3,"image":"https://media-waterdeep.cursecdn.com/avatars/thumbnails/16/533/173/315/636376331660233857.jpeg","exp":10,"attacks":[]},"Owlbear":{"name":"Owlbear","AC":"13","maxHP":59,"attack":7,"image":"https://media-waterdeep.cursecdn.com/avatars/thumbnails/0/315/256/315/636252772225295187.jpeg","exp":700,"attacks":[["Beak","1d10+5"],["Claws","2d8+5"]]},"Panther":{"name":"Panther","AC":"12","maxHP":13,"attack":4,"image":"https://media-waterdeep.cursecdn.com/attachments/2/648/beast.jpg","exp":50,"attacks":[["Bite","1d6+2"],["Claw","1d4+2"]]},"Pegasus":{"name":"Pegasus","AC":"12","maxHP":59,"attack":6,"image":"https://media-waterdeep.cursecdn.com/avatars/thumbnails/18/303/273/315/636379808797059368.png","exp":450,"attacks":[["Hooves","2d6+4"]]},"Phase Spider":{"name":"Phase Spider","AC":"13","maxHP":32,"attack":4,"image":"https://media-waterdeep.cursecdn.com/avatars/thumbnails/0/319/400/315/636252772538300448.jpeg","exp":700,"attacks":[["Bite","1d10+2"]]},"Pit Fiend":{"name":"Pit Fiend","AC":"19","maxHP":300,"attack":14,"image":"https://media-waterdeep.cursecdn.com/avatars/thumbnails/0/311/286/315/636252772132434763.jpeg","exp":25000,"attacks":[["Bite","4d6+8"],["Claw","2d8+8"],["Mace","2d6+8"],["Tail","3d10+8"]]},"Planetar":{"name":"Planetar","AC":"19","maxHP":200,"attack":12,"image":"https://media-waterdeep.cursecdn.com/avatars/thumbnails/0/303/379/315/636252771762002496.jpeg","exp":15000,"attacks":[["Angelic Weapons","5d8"],["Greatsword","4d6+7"],["Healing Touch","6d8+3"]]},"Plesiosaurus":{"name":"Plesiosaurus","AC":"13","maxHP":68,"attack":6,"image":"https://media-waterdeep.cursecdn.com/avatars/thumbnails/16/488/258/315/636376304583147024.jpeg","exp":450,"attacks":[["Bite","3d6+4"]]},"Poisonous Snake":{"name":"Poisonous Snake","AC":"13","maxHP":2,"attack":5,"image":"https://media-waterdeep.cursecdn.com/attachments/2/648/beast.jpg","exp":25,"attacks":[["Bite","2d4"]]},"Polar Bear":{"name":"Polar Bear","AC":"12","maxHP":42,"attack":7,"image":"https://media-waterdeep.cursecdn.com/attachments/2/648/beast.jpg","exp":450,"attacks":[["Bite","1d8+5"],["Claws","2d6+5"]]},"Pony":{"name":"Pony","AC":"10","maxHP":11,"attack":4,"image":"https://media-waterdeep.cursecdn.com/attachments/2/648/beast.jpg","exp":25,"attacks":[["Hooves","2d4+2"]]},"Priest":{"name":"Priest","AC":"13","maxHP":27,"attack":5,"image":"https://media-waterdeep.cursecdn.com/attachments/2/656/humanoid.jpg","exp":450,"attacks":[["Divine Eminence","3d6"],["Mace","1d6"]]},"Pseudodragon":{"name":"Pseudodragon","AC":"13","maxHP":7,"attack":4,"image":"https://media-waterdeep.cursecdn.com/avatars/thumbnails/0/283/258/315/636252770521719244.jpeg","exp":50,"attacks":[["Bite","1d4+2"],["Sting","1d4+2"]]},"Pteranodon":{"name":"Pteranodon","AC":"13","maxHP":13,"attack":3,"image":"https://media-waterdeep.cursecdn.com/attachments/2/648/beast.jpg","exp":50,"attacks":[["Bite","2d4+1"]]},"Purple Worm":{"name":"Purple Worm","AC":"18","maxHP":247,"attack":14,"image":"https://media-waterdeep.cursecdn.com/avatars/thumbnails/0/275/269/315/636252769846436684.jpeg","exp":13000,"attacks":[["Bite","3d8+9"],["Tail Stinger","3d6+9"]]},"Quasit":{"name":"Quasit","AC":"13","maxHP":7,"attack":4,"image":"https://media-waterdeep.cursecdn.com/avatars/thumbnails/0/271/226/315/636252769318699115.jpeg","exp":200,"attacks":[["Claws","1d4+3"]]},"Quipper":{"name":"Quipper","AC":"13","maxHP":1,"attack":5,"image":"https://media-waterdeep.cursecdn.com/avatars/thumbnails/0/253/259/315/636252767919065233.jpeg","exp":10,"attacks":[]},"Rakshasa":{"name":"Rakshasa","AC":"16","maxHP":110,"attack":10,"image":"https://media-waterdeep.cursecdn.com/avatars/thumbnails/0/247/231/315/636252767480157951.jpeg","exp":10000,"attacks":[["Claw","2d6+2"]]},"Rat":{"name":"Rat","AC":"10","maxHP":1,"attack":0,"image":"https://media-waterdeep.cursecdn.com/avatars/thumbnails/16/541/503/315/636376335435407571.jpeg","exp":10,"attacks":[]},"Raven":{"name":"Raven","AC":"12","maxHP":1,"attack":4,"image":"https://media-waterdeep.cursecdn.com/avatars/thumbnails/16/553/264/315/636376341568391037.jpeg","exp":10,"attacks":[]},"Red Dragon Wyrmling":{"name":"Red Dragon Wyrmling","AC":"17","maxHP":75,"attack":6,"image":"https://media-waterdeep.cursecdn.com/avatars/thumbnails/0/239/332/315/636252766855622680.jpeg","exp":1100,"attacks":[["Bite","1d10+4"],["Fire Breath","7d6"]]},"Reef Shark":{"name":"Reef Shark","AC":"12","maxHP":22,"attack":4,"image":"https://media-waterdeep.cursecdn.com/attachments/2/648/beast.jpg","exp":100,"attacks":[["Bite","1d8+2"]]},"Remorhaz":{"name":"Remorhaz","AC":"17","maxHP":195,"attack":11,"image":"https://media-waterdeep.cursecdn.com/avatars/thumbnails/0/231/284/315/636252766143328421.jpeg","exp":7200,"attacks":[["Heated Body","3d6"],["Bite","6d10+7"],["Swallow","6d6"]]},"Rhinoceros":{"name":"Rhinoceros","AC":"11","maxHP":45,"attack":7,"image":"https://media-waterdeep.cursecdn.com/attachments/2/648/beast.jpg","exp":450,"attacks":[["Charge","2d8"],["Gore","2d8+5"]]},"Riding Horse":{"name":"Riding Horse","AC":"10","maxHP":13,"attack":5,"image":"https://media-waterdeep.cursecdn.com/avatars/thumbnails/9/904/356/315/636334288913250513.jpeg","exp":50,"attacks":[["Hooves","2d4+3"]]},"Roc":{"name":"Roc","AC":"15","maxHP":248,"attack":13,"image":"https://media-waterdeep.cursecdn.com/avatars/thumbnails/0/229/409/315/636252765590929622.jpeg","exp":7200,"attacks":[["Beak","4d8+9"],["Talons","4d6+9"]]},"Roper":{"name":"Roper","AC":"20","maxHP":93,"attack":7,"image":"https://media-waterdeep.cursecdn.com/avatars/thumbnails/16/560/375/315/636376344528091115.jpeg","exp":1800,"attacks":[["Bite","4d8+4"]]},"Rug of Smothering":{"name":"Rug of Smothering","AC":"12","maxHP":33,"attack":5,"image":"https://media-waterdeep.cursecdn.com/avatars/thumbnails/0/213/276/315/636252764761726261.jpeg","exp":450,"attacks":[["Smother","2d6+3"]]},"Rust Monster":{"name":"Rust Monster","AC":"14","maxHP":27,"attack":3,"image":"https://media-waterdeep.cursecdn.com/avatars/thumbnails/0/207/405/315/636252764265020108.jpeg","exp":100,"attacks":[["Bite","1d8+1"]]},"Saber-Toothed Tiger":{"name":"Saber-Toothed Tiger","AC":"12","maxHP":52,"attack":6,"image":"https://media-waterdeep.cursecdn.com/attachments/2/648/beast.jpg","exp":450,"attacks":[["Bite","1d10+5"],["Claw","2d6+5"]]},"Sahuagin":{"name":"Sahuagin","AC":"12","maxHP":22,"attack":3,"image":"https://media-waterdeep.cursecdn.com/avatars/thumbnails/0/177/329/315/636252761683746719.jpeg","exp":100,"attacks":[["Bite","1d4+1"],["Claws","1d4+1"],["Spear","1d6+1"]]},"Salamander":{"name":"Salamander","AC":"15","maxHP":90,"attack":7,"image":"https://media-waterdeep.cursecdn.com/avatars/thumbnails/0/173/237/315/636252761197608364.jpeg","exp":1800,"attacks":[["Heated Body","2d6"],["Heated Weapons","1d6"],["Spear","2d6+4"],["Tail","2d6+4"]]},"Satyr":{"name":"Satyr","AC":"14","maxHP":31,"attack":3,"image":"https://media-waterdeep.cursecdn.com/avatars/thumbnails/0/169/208/315/636252760706340605.jpeg","exp":100,"attacks":[["Ram","2d4+1"],["Shortsword","1d6+3"],["Shortbow","1d6+3"]]},"Scorpion":{"name":"Scorpion","AC":"11","maxHP":1,"attack":2,"image":"https://media-waterdeep.cursecdn.com/attachments/2/648/beast.jpg","exp":10,"attacks":[["Sting","1d8"]]},"Scout":{"name":"Scout","AC":"13","maxHP":16,"attack":4,"image":"https://media-waterdeep.cursecdn.com/avatars/thumbnails/0/163/223/315/636252759915100020.jpeg","exp":100,"attacks":[["Shortsword","1d6+2"],["Longbow","1d8+2"]]},"Sea Hag":{"name":"Sea Hag","AC":"14","maxHP":52,"attack":5,"image":"https://media-waterdeep.cursecdn.com/avatars/thumbnails/0/159/240/315/636252759356069260.jpeg","exp":450,"attacks":[["Claws","2d6+3"]]},"Sea Horse":{"name":"Sea Horse","AC":"11","maxHP":1,"attack":0,"image":"https://media-waterdeep.cursecdn.com/attachments/2/648/beast.jpg","exp":10,"attacks":[]},"Shadow":{"name":"Shadow","AC":"12","maxHP":16,"attack":4,"image":"https://media-waterdeep.cursecdn.com/avatars/thumbnails/0/155/210/315/636252758977032019.jpeg","exp":100,"attacks":[["Strength Drain","2d6+2"],["","1d4"]]},"Shambling Mound":{"name":"Shambling Mound","AC":"15","maxHP":136,"attack":7,"image":"https://media-waterdeep.cursecdn.com/avatars/thumbnails/16/563/455/315/636376346968079714.jpeg","exp":1800,"attacks":[["Slam","2d8+4"],["Engulf","2d8+4"]]},"Shield Guardian":{"name":"Shield Guardian","AC":"17","maxHP":142,"attack":7,"image":"https://media-waterdeep.cursecdn.com/avatars/thumbnails/0/145/214/315/636252758362792494.jpeg","exp":2900,"attacks":[["Fist","2d6+4"]]},"Shrieker":{"name":"Shrieker","AC":"5","maxHP":13,"attack":0,"image":"https://media-waterdeep.cursecdn.com/avatars/thumbnails/16/571/263/315/636376357634308010.jpeg","exp":10,"attacks":[["Shriek","1d4"]]},"Silver Dragon Wyrmling":{"name":"Silver Dragon Wyrmling","AC":"17","maxHP":45,"attack":6,"image":"https://media-waterdeep.cursecdn.com/avatars/thumbnails/0/143/243/315/636252757538355953.jpeg","exp":450,"attacks":[["Bite","1d10+4"],["Cold Breath","4d8"]]},"Skeleton":{"name":"Skeleton","AC":"13","maxHP":13,"attack":4,"image":"https://media-waterdeep.cursecdn.com/avatars/thumbnails/16/472/227/315/636376294573239565.jpeg","exp":50,"attacks":[["Shortsword","1d6+2"],["Shortbow","1d6+2"]]},"Solar":{"name":"Solar","AC":"21","maxHP":243,"attack":15,"image":"https://media-waterdeep.cursecdn.com/avatars/thumbnails/0/121/410/315/636252748079664097.jpeg","exp":33000,"attacks":[["Angelic Weapons","6d8"],["Greatsword","4d6+8"],["Slaying Longbow","2d8+6"],["Healing Touch","8d8+4"],["Searing Burst","4d6"]]},"Spectator":{"name":"Spectator","AC":"14","maxHP":39,"attack":1,"image":"https://media-waterdeep.cursecdn.com/avatars/thumbnails/14/485/313/315/636364324602733616.png","exp":700,"attacks":[["Bite","1d6"]]},"Specter":{"name":"Specter","AC":"12","maxHP":22,"attack":4,"image":"https://media-waterdeep.cursecdn.com/avatars/thumbnails/0/119/215/315/636252747399435720.jpeg","exp":200,"attacks":[["Incorporeal Movement","1d10"],["Life Drain","3d6"]]},"Spider":{"name":"Spider","AC":"12","maxHP":1,"attack":4,"image":"https://media-waterdeep.cursecdn.com/avatars/thumbnails/16/575/422/315/636376359864842950.jpeg","exp":10,"attacks":[["Bite","1d4"]]},"Spirit Naga":{"name":"Spirit Naga","AC":"15","maxHP":75,"attack":6,"image":"https://media-waterdeep.cursecdn.com/avatars/thumbnails/0/117/247/315/636252746851035686.jpeg","exp":3900,"attacks":[["Rejuvenation","1d6"],["Bite","1d6+4"]]},"Sprite":{"name":"Sprite","AC":"15","maxHP":2,"attack":2,"image":"https://media-waterdeep.cursecdn.com/avatars/thumbnails/0/115/315/315/636252746444973630.jpeg","exp":50,"attacks":[]},"Spy":{"name":"Spy","AC":"12","maxHP":27,"attack":4,"image":"https://media-waterdeep.cursecdn.com/attachments/2/656/humanoid.jpg","exp":200,"attacks":[["Sneak Attack","2d6"],["Shortsword","1d6+2"],["Hand Crossbow","1d6+2"]]},"Steam Mephit":{"name":"Steam Mephit","AC":"10","maxHP":21,"attack":2,"image":"https://media-waterdeep.cursecdn.com/avatars/thumbnails/0/113/259/315/636252745841820724.jpeg","exp":50,"attacks":[["Death Burst","1d8"],["Claws","1d4"],["Steam Breath","1d8"]]},"Stirge":{"name":"Stirge","AC":"14","maxHP":2,"attack":5,"image":"https://media-waterdeep.cursecdn.com/avatars/thumbnails/0/111/435/315/636252745395103202.jpeg","exp":25,"attacks":[["Blood Drain","1d4+3"]]},"Stone Giant":{"name":"Stone Giant","AC":"17","maxHP":126,"attack":9,"image":"https://media-waterdeep.cursecdn.com/avatars/thumbnails/0/109/193/315/636252744518731463.jpeg","exp":2900,"attacks":[["Greatclub","3d8+6"],["Rock","4d10+6"]]},"Stone Golem":{"name":"Stone Golem","AC":"17","maxHP":178,"attack":10,"image":"https://media-waterdeep.cursecdn.com/avatars/thumbnails/0/107/226/315/636252743780112834.jpeg","exp":5900,"attacks":[["Slam","3d8+6"]]},"Storm Giant":{"name":"Storm Giant","AC":"16","maxHP":230,"attack":14,"image":"https://media-waterdeep.cursecdn.com/avatars/thumbnails/0/105/251/315/636252743254029469.jpeg","exp":10000,"attacks":[["Greatsword","6d6+9"],["Rock","4d12+9"],["Lightning Strike","12d8"]]},"Succubus":{"name":"Succubus","AC":"15","maxHP":66,"attack":5,"image":"https://media-waterdeep.cursecdn.com/avatars/thumbnails/0/103/235/315/636252742573312994.jpeg","exp":1100,"attacks":[["Claw","1d6+3"],["Draining Kiss","5d10+5"]]},"Swarm of Bats":{"name":"Swarm of Bats","AC":"12","maxHP":22,"attack":4,"image":"https://media-waterdeep.cursecdn.com/avatars/thumbnails/9/906/443/315/636334289313689439.jpeg","exp":50,"attacks":[["Bite ","2d4"]]},"Swarm of Insects":{"name":"Swarm of Insects","AC":"12","maxHP":22,"attack":3,"image":"https://media-waterdeep.cursecdn.com/attachments/2/648/beast.jpg","exp":100,"attacks":[["Bite ","4d4"]]},"Swarm of Poisonous Snakes":{"name":"Swarm of Poisonous Snakes","AC":"14","maxHP":36,"attack":6,"image":"https://media-waterdeep.cursecdn.com/attachments/2/648/beast.jpg","exp":450,"attacks":[["Bite","2d6"]]},"Swarm of Quippers":{"name":"Swarm of Quippers","AC":"13","maxHP":28,"attack":5,"image":"https://media-waterdeep.cursecdn.com/avatars/thumbnails/18/276/259/315/636379781035768521.jpeg","exp":200,"attacks":[["Bite","4d6"]]},"Swarm of Rats":{"name":"Swarm of Rats","AC":"10","maxHP":24,"attack":2,"image":"https://media-waterdeep.cursecdn.com/avatars/thumbnails/9/908/503/315/636334289541603972.jpeg","exp":50,"attacks":[["Bite","2d6"]]},"Swarm of Ravens":{"name":"Swarm of Ravens","AC":"12","maxHP":24,"attack":4,"image":"https://media-waterdeep.cursecdn.com/avatars/thumbnails/16/555/264/315/636376341743427326.jpeg","exp":50,"attacks":[["Beaks","2d6"]]},"Tarrasque":{"name":"Tarrasque","AC":"25","maxHP":676,"attack":19,"image":"https://media-waterdeep.cursecdn.com/avatars/thumbnails/0/101/299/315/636252741877524077.jpeg","exp":155000,"attacks":[["Bite","4d12+10"],["Claw","4d8+10"],["Horns","4d10+10"],["Tail","4d6+10"],["Swallow","16d6"]]},"Thug":{"name":"Thug","AC":"11","maxHP":32,"attack":4,"image":"https://media-waterdeep.cursecdn.com/avatars/thumbnails/0/99/231/315/636252741335519081.jpeg","exp":100,"attacks":[["Mace","1d6+2"],["Heavy Crossbow","1d10"]]},"Tiger":{"name":"Tiger","AC":"12","maxHP":37,"attack":5,"image":"https://media-waterdeep.cursecdn.com/attachments/2/648/beast.jpg","exp":200,"attacks":[["Bite","1d10+3"],["Claw","1d8+3"]]},"Treant":{"name":"Treant","AC":"16","maxHP":138,"attack":10,"image":"https://media-waterdeep.cursecdn.com/avatars/thumbnails/0/97/237/315/636252740537990664.jpeg","exp":5000,"attacks":[["Slam","3d6+6"],["Rock","4d10+6"]]},"Tribal Warrior":{"name":"Tribal Warrior","AC":"12","maxHP":11,"attack":3,"image":"https://media-waterdeep.cursecdn.com/attachments/2/656/humanoid.jpg","exp":25,"attacks":[["Spear","1d6+1"]]},"Triceratops":{"name":"Triceratops","AC":"13","maxHP":95,"attack":9,"image":"https://media-waterdeep.cursecdn.com/attachments/2/648/beast.jpg","exp":1800,"attacks":[["Gore","4d8+6"],["Stomp","3d10+6"]]},"Troll":{"name":"Troll","AC":"15","maxHP":84,"attack":7,"image":"https://media-waterdeep.cursecdn.com/avatars/thumbnails/0/95/247/315/636252739682234623.jpeg","exp":1800,"attacks":[["Bite","1d6+4"],["Claw","2d6+4"]]},"Twig Blight":{"name":"Twig Blight","AC":"13","maxHP":4,"attack":3,"image":"https://media-waterdeep.cursecdn.com/avatars/thumbnails/16/464/238/315/636376286997771487.png","exp":25,"attacks":[["Claws","1d4+1"]]},"Tyrannosaurus Rex":{"name":"Tyrannosaurus Rex","AC":"13","maxHP":136,"attack":10,"image":"https://media-waterdeep.cursecdn.com/avatars/thumbnails/16/594/264/315/636376369004412963.jpeg","exp":3900,"attacks":[["Bite","4d12+7"],["Tail","3d8+7"]]},"Unicorn":{"name":"Unicorn","AC":"12","maxHP":67,"attack":7,"image":"https://media-waterdeep.cursecdn.com/avatars/thumbnails/0/93/391/315/636252739248798123.jpeg","exp":1800,"attacks":[["Charge","2d8"],["Hooves","2d6+4"],["Horn","1d8+4"],["Healing Touch","2d8+2"],["Heal Self","2d8+2"]]},"Vampire":{"name":"Vampire","AC":"16","maxHP":144,"attack":9,"image":"https://media-waterdeep.cursecdn.com/avatars/thumbnails/0/91/262/315/636252738665379794.jpeg","exp":10000,"attacks":[["Unarmed Strike","1d8+4"],["Bite.","1d6+4"],["Children of the Night","2d4"]]},"Vampire Spawn":{"name":"Vampire Spawn","AC":"15","maxHP":82,"attack":6,"image":"https://media-waterdeep.cursecdn.com/avatars/thumbnails/0/89/264/315/636252738148839638.jpeg","exp":1800,"attacks":[["Claws","2d4+3"],["Bite","1d6+3"]]},"Veteran":{"name":"Veteran","AC":"17","maxHP":58,"attack":5,"image":"https://media-waterdeep.cursecdn.com/attachments/2/656/humanoid.jpg","exp":700,"attacks":[["Longsword","1d8+3"],["Shortsword","1d6+3"],["Heavy Crossbow","1d10+1"]]},"Violet Fungus":{"name":"Violet Fungus","AC":"5","maxHP":18,"attack":2,"image":"https://media-waterdeep.cursecdn.com/avatars/thumbnails/16/573/241/315/636376357964412799.jpeg","exp":50,"attacks":[["Multiattack","1d4"],["Rotting Touch","1d8"]]},"Vrock":{"name":"Vrock","AC":"15","maxHP":104,"attack":6,"image":"https://media-waterdeep.cursecdn.com/avatars/thumbnails/0/87/284/315/636252737538172594.jpeg","exp":2300,"attacks":[["Beak","2d6+3"],["Talons","2d10+3"],["Spores","1d10"]]},"Vulture":{"name":"Vulture","AC":"10","maxHP":5,"attack":2,"image":"https://media-waterdeep.cursecdn.com/attachments/2/648/beast.jpg","exp":10,"attacks":[["Beak","1d4"]]},"Warhorse":{"name":"Warhorse","AC":"11","maxHP":19,"attack":6,"image":"https://media-waterdeep.cursecdn.com/attachments/2/648/beast.jpg","exp":100,"attacks":[["Hooves","2d6+4"]]},"Warhorse Skeleton":{"name":"Warhorse Skeleton","AC":"13","maxHP":22,"attack":6,"image":"https://media-waterdeep.cursecdn.com/attachments/2/660/undead.jpg","exp":100,"attacks":[["Hooves","2d6+4"]]},"Water Elemental":{"name":"Water Elemental","AC":"14","maxHP":114,"attack":7,"image":"https://media-waterdeep.cursecdn.com/avatars/thumbnails/0/84/286/315/636252736680781387.jpeg","exp":1800,"attacks":[["Slam","2d8+4"],["Whelm","2d8+4"],["","2d8+4"]]},"Weasel":{"name":"Weasel","AC":"13","maxHP":1,"attack":5,"image":"https://media-waterdeep.cursecdn.com/attachments/2/648/beast.jpg","exp":10,"attacks":[]},"Werebear":{"name":"Werebear","AC":"10","maxHP":135,"attack":7,"image":"https://media-waterdeep.cursecdn.com/avatars/thumbnails/0/82/256/315/636252736005297867.jpeg","exp":1800,"attacks":[["Bite","2d10+4"],["Claw","2d8+4"],["Greataxe","1d12+4"]]},"Wereboar":{"name":"Wereboar","AC":"10","maxHP":78,"attack":5,"image":"https://media-waterdeep.cursecdn.com/avatars/thumbnails/0/80/287/315/636252735506840152.jpeg","exp":1100,"attacks":[["Charge","2d6"],["Maul","2d6+3"],["Tusks","2d6+3"]]},"Wererat":{"name":"Wererat","AC":"12","maxHP":33,"attack":4,"image":"https://media-waterdeep.cursecdn.com/avatars/thumbnails/0/78/255/315/636252735121410517.jpeg","exp":450,"attacks":[["Bite","1d4+2"],["Shortsword","1d6+2"],["Hand Crossbow","1d6+2"]]},"Weretiger":{"name":"Weretiger","AC":"12","maxHP":120,"attack":5,"image":"https://media-waterdeep.cursecdn.com/avatars/thumbnails/0/76/255/315/636252734783831163.jpeg","exp":1100,"attacks":[["Bite","1d10+3"],["Claw","1d8+3"],["Scimitar","1d6+3"],["Longbow","1d8+2"]]},"Werewolf":{"name":"Werewolf","AC":"11","maxHP":58,"attack":4,"image":"https://media-waterdeep.cursecdn.com/avatars/thumbnails/0/74/250/315/636252734224239957.jpeg","exp":700,"attacks":[["Bite","1d8+2"],["Claws.","2d4+2"],["Spear","1d6+2"]]},"White Dragon Wyrmling":{"name":"White Dragon Wyrmling","AC":"16","maxHP":32,"attack":4,"image":"https://media-waterdeep.cursecdn.com/avatars/thumbnails/0/415/571/315/636252789083357808.jpeg","exp":450,"attacks":[["Bite","1d10+2"],["Cold Breath","5d8"]]},"Wight":{"name":"Wight","AC":"14","maxHP":45,"attack":4,"image":"https://media-waterdeep.cursecdn.com/avatars/thumbnails/0/56/233/315/636252726349692861.jpeg","exp":700,"attacks":[["Life Drain","1d6+2"],["Longsword","1d8+2"],["Longbow","1d8+2"]]},"Will-o'-Wisp":{"name":"Will-o'-Wisp","AC":"19","maxHP":22,"attack":4,"image":"https://media-waterdeep.cursecdn.com/avatars/thumbnails/16/585/353/315/636376363763232290.jpeg","exp":450,"attacks":[["Consume Life","3d6"],["Incorporeal Movement","1d10"],["Shock","2d8"]]},"Winter Wolf":{"name":"Winter Wolf","AC":"13","maxHP":75,"attack":6,"image":"https://media-waterdeep.cursecdn.com/avatars/thumbnails/0/54/254/315/636252725270715296.jpeg","exp":700,"attacks":[["Bite","2d6+4"],["Cold Breath","4d8"]]},"Wolf":{"name":"Wolf","AC":"13","maxHP":11,"attack":4,"image":"https://media-waterdeep.cursecdn.com/avatars/thumbnails/16/482/269/315/636376300223855327.jpeg","exp":50,"attacks":[["Bite","2d4+2"]]},"Worg":{"name":"Worg","AC":"13","maxHP":26,"attack":5,"image":"https://media-waterdeep.cursecdn.com/avatars/thumbnails/0/52/363/315/636252724662073178.jpeg","exp":100,"attacks":[["Bite","2d6+3"]]},"Wraith":{"name":"Wraith","AC":"13","maxHP":67,"attack":6,"image":"https://media-waterdeep.cursecdn.com/avatars/thumbnails/0/50/219/315/636252724191790008.jpeg","exp":1800,"attacks":[["Incorporeal Movement","1d10"],["Life Drain","4d8+3"]]},"Wyvern":{"name":"Wyvern","AC":"13","maxHP":110,"attack":7,"image":"https://media-waterdeep.cursecdn.com/avatars/thumbnails/0/48/375/315/636252723695596000.jpeg","exp":2300,"attacks":[["Bite","2d6+4"],["Claws","2d8+4"],["Stinger","2d6+4"]]},"Xorn":{"name":"Xorn","AC":"19","maxHP":73,"attack":6,"image":"https://media-waterdeep.cursecdn.com/avatars/thumbnails/0/46/270/315/636252723241554579.jpeg","exp":1800,"attacks":[["Claw","1d6+3"],["Bite","3d6+3"]]},"Yeti":{"name":"Yeti","AC":"12","maxHP":51,"attack":6,"image":"https://media-waterdeep.cursecdn.com/avatars/thumbnails/8/662/299/315/636313413410825930.jpeg","exp":700,"attacks":[["Claw","1d6+4"],["Chilling Gaze","3d6"]]},"Young Black Dragon":{"name":"Young Black Dragon","AC":"18","maxHP":127,"attack":7,"image":"https://media-waterdeep.cursecdn.com/avatars/thumbnails/0/70/445/315/636252732861675698.jpeg","exp":2900,"attacks":[["Bite","2d10+4"],["Claw","2d6+4"],["Acid Breath","11d8"]]},"Young Blue Dragon":{"name":"Young Blue Dragon","AC":"18","maxHP":152,"attack":9,"image":"https://media-waterdeep.cursecdn.com/avatars/thumbnails/0/68/442/315/636252732434296782.jpeg","exp":5000,"attacks":[["Bite","2d10+5"],["Claw","2d6+5"],["Lightning Breath","10d10"]]},"Young Brass Dragon":{"name":"Young Brass Dragon","AC":"17","maxHP":110,"attack":7,"image":"https://media-waterdeep.cursecdn.com/avatars/thumbnails/0/66/375/315/636252731911060874.jpeg","exp":2300,"attacks":[["Bite","2d10+4"],["Claw","2d6+4"],["Fire Breath","12d6"]]},"Young Bronze Dragon":{"name":"Young Bronze Dragon","AC":"18","maxHP":142,"attack":8,"image":"https://media-waterdeep.cursecdn.com/avatars/thumbnails/0/64/294/315/636252731269768088.jpeg","exp":3900,"attacks":[["Bite","2d10+5"],["Claw","2d6+5"],["Lightning Breath","10d10"]]},"Young Copper Dragon":{"name":"Young Copper Dragon","AC":"17","maxHP":119,"attack":7,"image":"https://media-waterdeep.cursecdn.com/avatars/thumbnails/0/62/235/315/636252729761648292.jpeg","exp":2900,"attacks":[["Bite","2d10+4"],["Claw","2d6+4"],["Acid Breath","9d8"]]},"Young Gold Dragon":{"name":"Young Gold Dragon","AC":"18","maxHP":178,"attack":10,"image":"https://media-waterdeep.cursecdn.com/avatars/thumbnails/0/60/244/315/636252729283446963.jpeg","exp":5900,"attacks":[["Bite","2d10+6"],["Claw","2d6+6"],["Fire Breath","10d10"]]},"Young Green Dragon":{"name":"Young Green Dragon","AC":"18","maxHP":136,"attack":7,"image":"https://media-waterdeep.cursecdn.com/avatars/thumbnails/0/58/490/315/636252728834677623.jpeg","exp":3900,"attacks":[["Bite","2d10+4"],["Claw","2d6+4"],["Poison Breath","12d6"]]},"Young Red Dragon":{"name":"Young Red Dragon","AC":"18","maxHP":178,"attack":10,"image":"https://media-waterdeep.cursecdn.com/avatars/thumbnails/0/399/332/315/636252784386259001.jpeg","exp":5900,"attacks":[["Bite","2d10+6"],["Claw","2d6+6"],["Fire Breath","16d6"]]},"Young Silver Dragon":{"name":"Young Silver Dragon","AC":"18","maxHP":168,"attack":10,"image":"https://media-waterdeep.cursecdn.com/avatars/thumbnails/0/401/243/315/636252784740667730.jpeg","exp":5000,"attacks":[["Bite","2d10+6"],["Claw","2d6+6"],["Cold Breath","12d8"]]},"Young White Dragon":{"name":"Young White Dragon","AC":"17","maxHP":133,"attack":7,"image":"https://media-waterdeep.cursecdn.com/avatars/thumbnails/0/403/571/315/636252785358767533.jpeg","exp":2300,"attacks":[["Bite","2d10+4"],["Claw","2d6+4"],["Cold Breath","10d8"]]},"Zombie":{"name":"Zombie","AC":"8","maxHP":22,"attack":3,"image":"https://media-waterdeep.cursecdn.com/avatars/thumbnails/0/71/243/315/636252733510786769.jpeg","exp":50,"attacks":[["Slam","1d6+1"]]}};
function getColor(PP) {
    if (PP >= 80) {
        return "limegreen";
    } else if (PP >= 65) {
        return "green";
    } else if (PP > 45) {
        return "orange";
    } else if (PP > 15) {
        return "orangered"
    } else {
        return "red";
    }
}

const die = (() => {
    const dief = {
        cvt: function (diceRoll) {
            let diceObj = {};
            if (diceRoll[0] == "-") {
                diceRoll = diceRoll.replace("-", "");
                diceObj.negative = true;
            }
            if (diceRoll.includes("*")) {
                diceObj.foreach_modifier = parseInt(diceRoll.split("*")[1]);
            }
            if (diceRoll.includes("+")) {
                diceObj.bonus = parseInt(diceRoll.split("+")[1]);
            }
            diceRoll = diceRoll.split("d");
            diceObj.iterator = (diceRoll[0] != "") ? parseInt(diceRoll[0]) : 1;
            diceObj.face = parseInt(diceRoll[1]);
            return diceObj;
        },
        r: function (arg, mute) {
            const rCvrt = this.cvt(arg);
            if (rCvrt.iterator == 0) {
                return 0;
            }
            let total = 0;
            let roll;
            for (let i = 1; i <= rCvrt.iterator; i++) {
                roll = Math.floor(Math.random() * rCvrt.face) + 1;
                if (rCvrt.foreach_modifier)
                    roll += rCvrt.foreach_modifier;
                total += roll;
            }
            if (rCvrt.bonus) {
                total = total + rCvrt.bonus;
            }
            if (rCvrt.negative)
                total = total * -1;
            return total;
        },
        s: function (diceObj) {
            return `${(diceObj.negative) ? "-" : ""}${diceObj.iterator}d${diceObj.face}${(diceObj.foreach_modifier) ? "*" : ""}${(diceObj.bonus) ? "+"+diceObj.bonus : ""}`;
        }
    }
    return dief
})();

/*
function calcDifficulty(plyEXP, monEXP){
    monEXP = monEXP * 4;
    const dif = plyEXP - monEXP;
} */
const loot = [
    {name: "Dagger", damage: "d4"},
    {name: "Flacid Schlong", damage: "d4"},
    {name: "Light Hammer", damage: "d4"},
    {name: "Shortsword", damage: "d6"},
    {name: "Handaxe", damage: "d6"},
    {name: "Spear", damage: "d6"},
    {name: "Light Crossbow", damage: "d8"},
    {name: "Battle Axe", damage: "d8"},
    {name: "Longsword", damage: "d10"},
    {name: "Trident", damage: "d10"},
    {name: "Heavy Crossbow", damage: "d10"},
    {name: "Greatsword", damage: "d12"},
];
// leveling table
const lvlTable = {
    1: {exp: 0, atck_bonus: 5},
    2: {exp: 300, atck_bonus: 5},
    3: {exp: 900, atck_bonus: 5},
    4: {exp: 2700, atck_bonus: 5},
    5: {exp: 6500, atck_bonus: 7},
    6: {exp: 14000, atck_bonus: 7},
    7: {exp: 23000, atck_bonus: 7},
    8: {exp: 34000, atck_bonus: 7},
    9: {exp: 48000, atck_bonus: 9},
    10: {exp: 64000, atck_bonus: 9},
    11: {exp: 85000, atck_bonus: 9},
    12: {exp: 100000, atck_bonus: 9},
    13: {exp: 120000, atck_bonus: 10},
    14: {exp: 140000, atck_bonus: 10},
    15: {exp: 165000, atck_bonus: 10},
    16: {exp: 195000, atck_bonus: 10},
    17: {exp: 225000, atck_bonus: 11},
    18: {exp: 265000, atck_bonus: 11},
    19: {exp: 305000, atck_bonus: 11},
    20: {exp: 355000, atck_bonus: 11},
}
// for levels beyond 20 only
function serProf(lvl) {
    var modifier = 11;
    for (var i = 20; i <= 51; i += 4) {
        if (i >= lvl) {
            return modifier
        } else {
            modifier++;
        }
    }
}
function lvlUP(ply, user, channel, callback){
    const window = new Discord.MessageEmbed();
    window.setTitle(`${user.username} - :arrow_double_up: Level Up!`);
    window.setColor("GREEN");
    window.setDescription(`You have achieved the required amount of exp to level up. You are now **level ${ply.level+1}!**`);
    window.setThumbnail(user.avatarURL);
    ply.level++;

    window.addField(`Experience`, `${ply.exp} XP`);
    // improve AC
    if(ply.level % 3){
        if(ply.level <= 23){
            ply.AC++;
            window.addField(`AC: ${ply.AC-1} -> ${ply.AC}`, "You've learnt to dodge better and thus your AC has improved.")
        }
    }
    ply.maxHP += die.r("d12+3");
    ply.atck_bonus = (lvlTable[ply.level]) ? lvlTable[ply.level].atck_bonus : serProf(ply.level);
    const luck = Math.floor(Math.random() * 100);
    console.log("Luck Score: "+luck);
    const weapon = loot[Math.floor(Math.random() * loot.length)];
    const progression = ["d4", "d6", "d8", "d10", "d12", "d20", "d100"];
    
    if(luck >= 96 && progression.indexOf(ply.weapon.damage) <= progression.indexOf(weapon.damage)){
        ply.weapon = weapon;
        window.addField("New Loot", "While looking through the body of the monster, you come across a new weapon! ("+weapon.name+")");
    }
    window.addField("Current damage:", `${ply.weapon.name}: ${ply.level}${ply.weapon.damage}+${ply.level}`);
    if(!lvlTable[ply.level+1]){
        lvlTable[ply.level+1] = {exp: ply.prvEXP * 1.5, atck_bonus: serProf(ply.level)};
    }
    if(ply.exp >= lvlTable[ply.level+1].exp){
        ply.prvEXP = ply.exp;
        lvlUP(ply, user, channel);
    }else{
        channel.send(window);
    }

    if(callback)
        callback(ply);
}
class Monster{
    constructor(args = {}){
        const {
            name = "Monster",
            maxHP = 10,
            currentHP = maxHP,
            AC = 10,
            exp = 0,
            attack = 0,
            attacks = [["Bite", "1d4"]],
            image = "https://www.aidedd.org/dnd/images/kobold.jpg"
        } = args;
        this.name = name;
        this.maxHP = maxHP;
        this.currentHP = currentHP;
        this.AC = AC;
        this.exp = exp;
        this.attack = attack;
        this.attacks = attacks;
        this.image = image;
    }
    get pp() {
        return Math.round((this.currentHP / this.maxHP) * 100)
    }
    get isBlooded() {
        if (this.pp < 50) {
            return true
        } else {
            return false
        }
    }
    add(amt) {
        this.currentHP += amt; // the modding itself
        if (this.currentHP > this.maxHP) {
            this.currentHP = this.maxHP;
        }
        // const status = (amt < 0) ? "Damaged" : "Healed";
        return this.currentHP;
    }
}
// build monster list
const monsters = [];
for(property in data){
    if(data[property].attacks)
        monsters.push(data[property]);
}

/*
=======================
    Battle Managing
=======================
*/
class Battle{
    constructor(props = {}){
        const {
            monster = new Monster(monsters[Math.floor(Math.random() * monsters.length)]),
            initList = [{monster: monster, roll: die.r("d20")}],
            players = new Map(),
            dead_players = [],
            message = undefined
        } = props;
        this.i = 0;
        this.monster = monster;
        this.initList = initList;
        this.players = players;
        this.dead_players = dead_players;
        this.textChannel = message.channel;
    }
    get crntPlyDamage(){
        if(this.initList[this.i].id){ // is player
            return this.players.get(this.initList[this.i].id).charData.level+this.players.get(this.initList[this.i].id).charData.weapon.damage+"+"+this.players.get(this.initList[this.i].id).charData.level;
        } else{
            return this.monster.attacks[Math.floor(Math.random() * this.monster.attacks.length)][1];
        }
    }
    get initStr(){
        // print readable string
        let array = [];
        this.initList.forEach((v)=>{
            if(v.id)
                array.push(this.players.get(v.id).discordData.username);
            else
                array.push(v.monster.name);
        });
        array[this.i] = "**"+array[this.i]+"**";
        return array.join(" -> ");
    }
    addPlayer(user, plydata){
        // add a user to a battle
        this.players.set(user.id, {charData: plydata, discordData: user});
        this.players.get(user.id).charData.currentHP = this.players.get(user.id).charData.maxHP;
        const init = die.r("d20");
        const current_in_queue = this.initList[this.i].id; // save current position
        this.initList.push({id: user.id, roll: init});
        this.sort();
        this.initList.forEach((v, j)=>{
	    console.log(`${v.id} == ${current_in_queue}`);
            if(v.id == current_in_queue && current_in_queue != undefined){
                this.i = j;
		console.log(`New queue: ${this.i} - ${j}`);
            }
        })
        console.log("Player added to battle.");
    }
    sort(){
        // sort initative
        this.initList.sort((a, b)=>{
            return a.roll < b.roll;
        })
    }
    next(){
        if(this.initList.length == 0)
            return false
        if(this.i+1 >= this.initList.length)
            this.i = 0;
        else
            this.i++;
        return this.handleTurn(this.initList[this.i]);
    }
    start(){
        // handle the start of the battle
        const window = new Discord.MessageEmbed();
        window.setTitle(`A New Encounter - ${this.monster.name}`);
        window.setDescription(`You look before you as you see a new creeping shape enter your vision, you focus on it and see that this shape is actually a ${this.monster.name}, and it looks like it wants to fight!`);
        window.addField("Name :japanese_goblin::", this.monster.name, true);
        window.addField("AC :shield::", this.monster.AC, true);
        window.addField("XP :arrow_double_up::", this.monster.exp + " XP", true);
        window.addField("HP :heart::", this.monster.maxHP, true);
        this.monster.attacks.forEach((v)=>{
            window.addField(v[0]+":", v[1]);
        });

        window.setColor("RANDOM");
        window.setThumbnail(this.monster.image);
        window.setTimestamp();
        this.textChannel.send(window);

        this.handleTurn(this.initList[0]);
    }
    handleTurn(mpc){
        if(this.players.size == 0 && this.dead_players.length > 0){
            this.textChannel.send(":skull_crossbones: Looks like the monster is victorious today!");
            battles.delete(this.textChannel.id); // delete battle
            return false;
        }
        if(mpc.id){ // is player
            const ply = this.players.get(mpc.id);
            // player dead
            if(ply.charData.currentHP <= 0){
                this.textChannel.send(`:skull_crossbones: With a HP of **${ply.charData.currentHP}**, **${ply.discordData.username}** has died! RIP.`);
                this.dead_players.push(mpc.id);
                var index = 0;
                this.initList.forEach((v, i)=>{
                    if(v.id == mpc.id){
                        index = i;
                    }
                });
                this.initList.splice(index, 1); // delete from initative
                this.players.delete(mpc.id); // delete from list
                this.i -= 1; // set back initative
                return this.next();
            }
            // player not dead
            const window = new Discord.MessageEmbed();
            window.setTitle(`${ply.discordData.username}'s Turn`);
            window.setColor("RANDOM");
            window.setDescription("It is now your turn. You have three minutes to attack or you will retreat.");
            window.setThumbnail(ply.discordData.avatarURL);
            window.addField(`HP (${Math.round(ply.charData.currentHP / ply.charData.maxHP * 100)}%) :heart::`, ply.charData.currentHP, true);
            window.addField("AC :shield::", ply.charData.AC, true);
            let array = [];
            this.initList.forEach((v)=>{
                if(v.id)
                    array.push(this.players.get(v.id).discordData.username);
                else
                    array.push(v.monster.name);
            });
            window.addField("Initative Order :game_die::", array.join(" -> "));
            window.setTimestamp();
            this.textChannel.send(window);
        } else{ // Is Monster
            // first get a random player to attack.
            let arrPlayers = Array.from(this.players.keys());
            const random_player = this.players.get(arrPlayers[Math.floor(Math.random() * arrPlayers.length)]);
            const random_attack = this.monster.attacks[Math.floor(Math.random() * this.monster.attacks.length)];
            const roll = die.r("d20")+this.monster.attack;
            const window = new Discord.MessageEmbed();
            window.setTitle(`${this.monster.name} - Monster's Turn`);
            window.setDescription(`The ${this.monster.name} is looking real angry and sets its eyes upon **${random_player.discordData.username}**!`);
            window.setColor("BLACK");
            window.setThumbnail(this.monster.image);
            window.addField("HP :heart::", `${this.monster.currentHP}/${this.monster.maxHP}`, true);
            window.addField("AC :shield::", `${this.monster.AC}`, true);
            window.addField(`Attack Attempt ${(roll > random_player.charData.AC) ? ":white_check_mark:" : ":warning:"}:`, `The ${this.monster.name} goes to attack with its **${random_attack[0]}** and scores a **${roll}**, ${(roll > random_player.charData.AC) ? "beating" : "failing to beat"} the player's AC of **${random_player.charData.AC}**.`);
            if(roll > random_player.charData.AC){
                let damage = die.r(random_attack[1]);
                random_player.charData.currentHP -= damage
                window.addField("Damage :skull::", `**${random_player.discordData.username}** goes from **${random_player.charData.currentHP + damage}** to **${random_player.charData.currentHP}** as the monster attacks (**Damage: ${damage}**).`);
            }
            window.setTimestamp();
            this.textChannel.send(window);
            this.next();
        }
    }
    end(){
        const exp = this.monster.exp / this.players.size;
        this.textChannel.send(":white_check_mark: **Monster defeated!** Each player has been awarded **"+exp+" XP**");
        this.players.forEach((v)=>{
            v.charData.prvEXP = v.charData.exp;
            v.charData.exp += exp;
            if(!lvlTable[v.charData.level+1]){
                lvlTable[v.charData.level+1] = {exp: v.charData.prvEXP * 1.5, atck_bonus: serProf(v.charData.level)};
            }
            if(v.charData.exp >= lvlTable[v.charData.level+1].exp){ // if they have the required exp
                lvlUP(v.charData, v.discordData, this.textChannel);
            }
        });
    }
}
var battles = new Map();

const cmd = {
    name: "battle",
    category: "Entertainment",
    desc: "Do some battle with some of the monsters from D&D.",
    usage: "battle watch|attack|self|retreat",
    hidden: false,
    modonly: false,
    devonly: false,
    exec: function (opts = {}) {
        const {
            m = m,
            purple = purple,
            purplelog = purplelog,
            content_args = content_args
        } = opts;
        if(!m.guild)
            return m.channel.send(":octagonal_sign: Sorry, you must be in a guild to do that...");
        const guildID = m.guild.id;
        if(!purple.getGuild(guildID).users[m.author.id]){
            purplelog.log(`Creating new user data...`);
            purple.getGuild(guildID).users[m.author.id] = {
                level: 1,
                exp: 0,
                prvEXP: 0,
                maxHP: 15,
                atck_bonus: 5,
                AC: 10,
                weapon: {name: "Stick", damage:"d4"}
            }
            purple.saveStorage();
        };
        const character = purple.getGuild(guildID).users[m.author.id];
        if(!content_args[1]){
            content_args[1] == "attack";
        }
        if(content_args[1] == "self"){
            const window = new Discord.MessageEmbed();
            window.setTitle(`${m.author.username} - Level ${character.level}`);
            window.setDescription("You spend some time inspecting yourself, you look like you're in a good shape for a fight. Below is a summary of your stats.")
            window.setThumbnail(m.author.avatarURL);
            window.setColor("RANDOM");
            window.addField("Experience :arrow_double_up::", `${character.exp} XP (${lvlTable[character.level+1].exp-character.exp} XP needed to level up)`);
            window.addField("AC :shield::", `${character.AC}`);
            window.addField("HP :heart::", `${character.maxHP}`);
            window.addField("Accuracy :bow_and_arrow::", `+${character.atck_bonus}`);
            window.addField("Attacks :crossed_swords::", `${character.weapon.name}: ${character.level}${character.weapon.damage}+${character.level}`);
            m.channel.send(window);
        } else if(content_args[1] == "attack"){
            if(!battles.get(m.channel.id)){
               battles.set(m.channel.id, new Battle({message: m}));
               battles.get(m.channel.id).addPlayer(m.author, purple.getGuild(guildID).users[m.author.id]);
               battles.get(m.channel.id).start(); // start new battle
            } else if(!battles.get(m.channel.id).players.get(m.author.id)){
                battles.get(m.channel.id).addPlayer(m.author, purple.getGuild(guildID).users[m.author.id]); // add player to existing battle
                if(battles.get(m.channel.id).initList[battles.get(m.channel.id).i].id == m.author.id){
                    battles.get(m.channel.id).next();
                }
                m.channel.send(":crossed_swords: New player has joined the battle. Initative order is now "+battles.get(m.channel.id).initStr);
            } else if(battles.get(m.channel.id).initList[battles.get(m.channel.id).i].id == m.author.id){
                // it's that player's turn
                const hit = die.r("d20")+character.atck_bonus;
                console.log("TO HIT: "+hit);
                if(hit <= battles.get(m.channel.id).monster.AC){
                    m.reply(`:shield: You attack with your trusty ${character.weapon.name} but the ${battles.get(m.channel.id).monster.name} manages to evade your attack! (Accuracy: **${hit}** -> AC: **${battles.get(m.channel.id).monster.AC}**)`);
                    return battles.get(m.channel.id).next();
                }

                /*
                =================================
                    Player has hit the enemy
                =================================
                */
                const damage = die.r(battles.get(m.channel.id).crntPlyDamage);
                console.log("Damage: "+damage+" - "+battles.get(m.channel.id).crntPlyDamage);
                const window = new Discord.MessageEmbed();
                window.setTitle(`${m.author.username} - Attack`);
                window.setDescription(`You look at the ${battles.get(m.channel.id).monster.name} and without a second thought you attack with your **${battles.get(m.channel.id).players.get(m.author.id).charData.weapon.name}**, dealing **${damage} points of damage!** (Accuracy: **${hit}** -> AC: **${battles.get(m.channel.id).monster.AC}**)`);
                window.setThumbnail(m.author.avatarURL);
                window.setColor("RED");
                battles.get(m.channel.id).monster.add(damage * -1);
                window.addField(`${battles.get(m.channel.id).monster.name} Max HP :heart::`, battles.get(m.channel.id).monster.maxHP, true);
                window.addField(`${battles.get(m.channel.id).monster.name} HP (${battles.get(m.channel.id).monster.pp}%):`, `${battles.get(m.channel.id).monster.currentHP + damage} -> ${battles.get(m.channel.id).monster.currentHP}`, true);
                m.channel.send(window);
                // monster dies or not
                if(battles.get(m.channel.id).monster.currentHP <= 0){
                    // monster dead; end battle
                    battles.get(m.channel.id).end();
                    battles.delete(m.channel.id);
                    purple.saveStorage();
                } else{
                    battles.get(m.channel.id).next();
                }
            }
        }
    }
}

module.exports = cmd;
