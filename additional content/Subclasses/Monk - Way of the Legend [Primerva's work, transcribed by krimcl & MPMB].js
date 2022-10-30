/*	-WHAT IS THIS?-
	This file adds optional material to "MPMB's Character Record Sheet" found at https://flapkan.com/mpmb/charsheets
	Import this file using the "Add Extra Materials" bookmark.

	-KEEP IN MIND-
	It is recommended to enter the code in a fresh sheet before adding any other information (i.e. before making your character with it).
*/

/*	-INFORMATION-
	Subject:	Subclass
	Effect:		This script adds a subclass for the Monk, called "Way of the Legend"
				This subclass has been made by /u/Primerva
				This code uses version 1.6 of the subclass from 2016-03-19, found here: https://www.reddit.com/r/UnearthedArcana/comments/gej7sf/dungeons_and_dragon_ball_mark_16_spells_added/
				
	Code by:	krimcl & MorePurpleMoreBetter
	Date:		2022-10-08 (sheet v12.999)
*/

var iFileName = "Monk - Way of the Legend [Primerva's work, transcribed by krimcl & MPMB].js";
RequiredSheetVersion(12.999);

SourceList["DnDB"] = {
	name: "Primerva: Way of the Legend (v1.6)",
	abbreviation: "DnDB:WotL",
	group: "Reddit/r/UnearthedArcana",
	url: "https://drive.google.com/file/d/1Id9lRGY-artqgFh6awtLXYtKuPs5qvDK/view",
	date : "2020/05/06"
};

AddSubClass("monk", "legend", {
	regExpSearch: /legend/i,
	subname: "Way of the Legend",
	fullname: "Saiyan Monk",
	source: ["DnDB", 1],
	legendSpellTable = [ //Object name; note that there is no "var" here, and that the name of this variable is the name of the spellcastingFactor without any numbers in it and all lower case, plus the text "SpellTable"
	[0, 0, 0, 0, 0, 0, 0, 0, 0], //lvl 0 // this should be all zeroes
	[0, 0, 0, 0, 0, 0, 0, 0, 0], //lvl 1 // there are 9 entries in each array, one for each spell level
	[0, 0, 0, 0, 0, 0, 0, 0, 0], //lvl 2
	[1, 0, 0, 0, 0, 0, 0, 0, 0], //lvl 3
	[0, 2, 0, 0, 0, 0, 0, 0, 0], //lvl 4
	[0, 2, 0, 0, 0, 0, 0, 0, 0], //lvl 5
	[0, 3, 0, 0, 0, 0, 0, 0, 0], //lvl 6
	[0, 0, 3, 0, 0, 0, 0, 0, 0], //lvl 7
	[0, 0, 3, 0, 0, 0, 0, 0, 0], //lvl 8
	[0, 0, 3, 0, 0, 0, 0, 0, 0], //lvl 9
	[0, 0, 0, 3, 0, 0, 0, 0, 0], //lvl10
	[0, 0, 0, 3, 0, 0, 0, 0, 0], //lvl11
	[0, 0, 0, 4, 0, 0, 0, 0, 0], //lvl12
	[0, 0, 0, 0, 4, 0, 0, 0, 0], //lvl13
	[0, 0, 0, 0, 4, 0, 0, 0, 0], //lvl14
	[0, 0, 0, 0, 4, 0, 0, 0, 0], //lvl15
	[0, 0, 0, 0, 4, 0, 0, 0, 0], //lvl16
	[0, 0, 0, 0, 5, 0, 0, 0, 0], //lvl17
	[0, 0, 0, 0, 5, 0, 0, 0, 0], //lvl18
	[0, 0, 0, 0, 5, 0, 0, 0, 0], //lvl19
	[0, 0, 0, 0, 5, 0, 0, 0, 0], //lvl20
],
	spellcastingList: {
		spells: ["friends", "guidance", "mage hand", "mending", "message", "minor illusion", "shocking grasp", "true strike", "absorb elements", "animal friendship", "bane", "bless", "catapult", "charm person", "comprehend languages", "command", "cure wounds", "detect magic", "force lightning", "force push", "force repulse", "heroism", "jump", "longstrider", "shield", "aid", "blur", "calm emotions", "darkvision", "detect thoughts", "enhance ability", "enthrall", "force choke", "hold person", "knock", "lesser restoration", "levitate", "locate object", "magic weapon", "saber throw", "see invisibility", "suggestion", "aura of vitality", "beacon of hope", "call lightning", "clairvoyance", "crusader's mantle", "fear", "force blast", "haste", "hypnotic pattern", "nondetection", "plant growth", "protection from energy", "revivify", "sending", "tongues", "vampiric touch", "aura of life", "aura of purity", "compulsion", "confusion", "death ward", "dominate beast", "freedom of movement", "hallucinatory terrain", "locate creature"]
	},
	spellcastingKnown: {
		cantrips: [0, 0, 2, 2, 2, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 4, 4, 4, 4],
		spells: [0, 0, 1, 1, 2, 2, 2, 3, 3, 3, 4, 4, 4, 5, 5, 5, 6, 6, 7, 8],
	},
	features: {
		"subclassfeature3": {
			name: "Spellcasting",
			source: ["DnDB", 36],
			minlevel: 3,
			description: "\n   " + "I can cast known Legend cantrips/spells, using Wisdom as my spellcasting ability",
			additional: ["", "", "2 cantrips \u0026 1 spells known", "2 cantrips \u0026 1 spells known", "2 cantrips \u0026 2 spells known", "3 cantrips \u0026 2 spells known", "3 cantrips \u0026 2 spells known", "3 cantrips \u0026 3 spells known", "3 cantrips \u0026 3 spells known", "3 cantrips \u0026 3 spells known", "3 cantrips \u0026 4 spells known", "3 cantrips \u0026 4 spells known", "3 cantrips \u0026 4 spells known", "3 cantrips \u0026 5 spells known", "3 cantrips \u0026 5 spells known", "3 cantrips \u0026 5 spells known", "4 cantrips \u0026 6 spells known", "4 cantrips \u0026 6 spells known", "4 cantrips \u0026 7 spells known", "4 cantrips \u0026 8 spells known"]
		},
		"subclassfeature3.1": {
			name: "Zenkai Boost",
			source: ["DnDB", 36],
			minlevel: 3,
			description: desc([
				"When I am reduced to 0 hit points but not killed out right, I can spend 2 Ki points to heal equal to my monk level and gain advantage on my next attack roll once per long rest. (Zenkai points?)"
			]),
			additional : "Magic weapon retains magic properties",
			eval : "AddWeapon('Lightsaber');",
			removeeval : "RemoveWeapon('Lightsaber');",
			weapons : [false, false, ["lightsaber"]]
		},
		"subclassfeature3.2": {
			name: "Zenkai Points",
			source: ["DnDB", 36],
			minlevel: 6,
			description: desc([
				"Starting at level 6, Whenever you activate your Zenkai Boost, you gain a Zenkai Point. You must have dealt damage to the crature who activated the Zenkao Boost to gain a Zenkai Point. Addtionally, at level 6 and whenever you gain a level up, you gain a Zenkai point regardless of which class you level up in. You can spend these on Saiyan Transformations."
			]),
		"subclassfeature6.1": {
			name: "Super Saiyan",
			source: ["DnDB", 37],
			minlevel: 6,
			description: desc([
				"When a creature misses me with a ranged attack or I succeed on a Dex save vs. its spell,",
				"it has disadv. on its next save vs. one of my spells, until the end of my next turn"
			]),
		"subclassfeature6.2": {
			name: "Saiyan Journey",
			source: ["DnDB", 37],
			minlevel: 6,
			description: desc([
				"When a creature misses me with a ranged attack or I succeed on a Dex save vs. its spell,",
				"it has disadv. on its next save vs. one of my spells, until the end of my next turn"
			]),
			extraname : "Way of the Legend 11",
			"Ki Charge": {
				name: "Ki Charge",
				source: ["DnDB", 2],
				description: " [2 ki points]" + desc([
					"As a bonus action after Attack action with my lightsaber, I can cast a spell (time: 1 act.))"
				]),
				action: ["bonus action", " (after Attack action)"]
			},
			changeeval : "var jediBladeW = ['monk', 'subclassfeature6', 'bladeweaving', 'extra']; if (newClassLvl.monk >= 11 && (What('Extra.Notes') + What('Class Features')).toLowerCase().indexOf('bladeweaving') === -1) {ClassFeatureOptions(jediBladeW)} else if (newClassLvl.monk < 11 && oldClassLvl.monk >= 11) {ClassFeatureOptions(jediBladeW, 'remove'); };",
		},
			"subclassfeature17" : {
				name : "Greater Ki Technique",
				source: ["DnDB", 1],
				minlevel : 17
				description : desc([
					"I can choose one spell from the Legend spell list of each level mentioned above",
					"I can cast these spells each once per long rest without needing to use a spell slot"
				]),
				additional : ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "",		"6th level", "6th and 7th level", "6th, 7th, and 8th level", "6th, 7th, 8th, and 9th level"],
				spellcastingBonus : [{
					name : "Greater Ki Technique (6th-level)",
					"class" : "legend",
					level : [6, 6],
					firstCol : "oncelr"
				}, {
					name : "Greater Ki Technique (7th-level)",
					"class" : "legend",
					level : [7, 7],
					firstCol : "oncelr",
					times : levels.map(function (n) { return n < 18 ? 0 : 1; })
				}, {
					name : "Greater Ki Technique (8th-level)",
					"class" : "legend",
					level : [8, 8],
					firstCol : "oncelr",
					times : levels.map(function (n) { return n < 19 ? 0 : 1; })
				}, {
					name : "Greater Ki Technique (9th-level)",
					"class" : "legend",
					level : [9, 9],
					firstCol : "oncelr",
					times : levels.map(function (n) { return n < 20 ? 0 : 1; })
				}]
			}
	}
});

//define the lightsaber
WeaponsList["lightsaber"] = {
	regExpSearch : /lightsaber/i,
	name : "Lightsaber",
	source: ["DnDB", 2],
	ability : 1,
	type : "Martial",
	damage : [1, 6, "radiant"],
	range : "Melee",
	description : "Finesse, light; Emits dim light in 15-ft radius",
	abilitytodamage : true,
	monkweapon : true
};

//add the DBZ spells the Way of the Legend can use
SpellsList["antenna beam"] = {
	name : "Antenna Beam",
	classes : ["sorcerer", "warlock"],
	source : ["DnDB", 51],
	ritual : false,
	level : 0,
	school : "Abjur",
	time : "1 a",
	range : "10 ft",
	components : "V,S",
	duration : "Instantaneous",
	save : "Con",
	description : "1 crea save or stunned until start of their next turn",
	descriptionFull : "You fire a beam of lightning like energy from your forehead at a single creature within range. The target must make a Consitution saving throw. On a success, nothing happens. On a failure, the target is stunned until the start of its next turn."
};
SpellsList["clothes beam"] = {
	name : "Clothes Beam",
	classes : ["artificer", "bard", "warlock", "wizard"],
	source : ["DnDB", 51],
	ritual : false,
	level : 0,
	school : "Conj",
	time : "1 a",
	range : "30 ft",
	components : "V,S,M",
	compMaterial : "up to 10 gp.",
	duration : "Instantaneous",
	save : "Con",
	description : "1 crea save or be adornred in magic clothing of your design that lasts until removed",
	descriptionFull : "You point your finger at a creature and fire a special magical beam that creates clothes at them. A target must make a Cosntitution saving throw. A target can choose to fail their saving throw. On a failure, you create a magical pair of clothing of your own design worth up to 10 gold pieces on the creature. The clothes last indefinitely so long as the creature continues to wear them. Once the clothes created by this cantrip are removed, they disappear and stop existing."
};
SpellsList["quick deflect"] = {
	name : "Quick Deflect",
	classes : ["bard", "cleric", "sorcerer", "warlock", "wizard"],
	source : ["DnDB", 51],
	ritual : false,
	level : 0,
	school : "Evoc",
	time : "1 rea",
	timeFull : "1 reaction, which you take when you would be hit by a ranged spell attack.",	
	range : "Self",
	components : "S",
	duration : "Instantaneous",
	description : "Reduce damage from a Spell attack by 1d4 dmg; +1d4 at CL 5, 11, and 17",
	descriptionFull : "As a reaction when you would be hit by a ranged spell attack, you can reduce the damage taken by 1d4. If you reduce the damage to 0, the spell becomes harmless and gets launched away up to 60 feet in a direction you choose before fizzling out. The damage reduced increases by 1d4 when you reach 5th level (2d4), 11th level (3d4), and 17th level (4d4)."
};
SpellsList["ki blast"] = {
	name : "Ki Blast",
	classes : ["artificer", "bard", "cleric", "druid", "sorcerer", "warlock", "wizard"],
	source : ["DnDB", 51],
	ritual : false,
	level : 0,
	school : "Evoc",
	time : "1 ba",
	range : "60 ft",
	components : "V,S",
	duration : "Instantaneous",
	description : "Ranged Spell attack for 1d4 Force dmg; +1d4 at CL 5, 11, and 17",
	descriptionFull : "You fire a small blast of energy at a single target within range. Make a ranged spell attack against the target. On a hit, the creature takes 1d4 force damage. The spell's damage increaseas by 1d4 when you reach 5th level (2d4), 11th level (3d4), and 17th level (4d4)."
};
SpellsList["energy ball"] = {
	name : "Energy Ball",
	classes : ["artificer", "cleric", "sorcerer", "warlock", "wizard"],
	source : ["DnDB", 51],
	ritual : false,
	level : 0,
	school : "Conj",
	time : "1 a",
	range : "30 ft",
	components : "V,S",
	duration : "1 round",
	description : "Ranged Spell attack for 1d6 Necrotic dmg; on miss floats above ground till start of next turn and deals 1d6 if touched; an ally can use action to attack a creature in range using your spell attack bonus, +1d6 at CL 5, 11, and 17",
	descriptionShorter : "Ranged spell atack 1d6 Necrotic dmg, persists on miss, dmg on touch, ally action to attack w your spell attack bonus"
	descriptionFull : "You summon a purple orb of energy with special qualities. The orb is roughly 1 foot by 1 foot in size and glows purple in color. When you summon it, make a ranged spell attack on a creature within range. On a hit, a creature takes 1d6 Necrotic damage. If it misses, the orb floats just above the ground until the start of your next turn. If a creature touches the orb before it disappears, it takes 1d6 Necrotic damage. Additionally, an allied creature can use their action to attack a creature within range with the orb. This attack uses your spell attack bonus. This spell’s damage increases by 1d6 when you reach 5th level (2d6), 11th level (3d6), and 17th level (4d6)."
};
// Add weapons (attack cantrips)
//example start of weapon list (delete later or change)
WeaponsList["lightning lure"] = {
	regExpSearch : /^(?=.*lightning)(?=.*lure).*$/i,.
	name : "Lightning Lure",
	source : [["T", 107], ["S", 143]],
	list : "spell",
	ability : 5,
	type : "Cantrip",
	damage : ["C", 8, "lightning"],
	range : "15 ft",
	description : "Str save; success - nothing; fail - pulled 10 ft closer to me, only take damage if end within 5 ft of me",
	abilitytodamage : false,
	dc : true
};
//example of spell that is that weapon(delete later or change)
SpellsList["lightning lure"] = {
	name : "Lightning Lure",
	classes : ["artificer", "sorcerer", "warlock", "wizard"],
	source : [["T", 107], ["S", 143]],
	level : 0,
	school : "Evoc",
	time : "1 a",
	range : "S:15-ft rad",
	components : "V",
	duration : "Instantaneous",
	save : "Str",
	description : "1 crea in 15 ft save or pulled 10 ft to me; if it ends in 5 ft, 1d8 Lightning dmg; +1d8 at CL 5, 11, \u0026 17",
	descriptionShorter : "1 crea in 15 ft save or pulled 10 ft to me; if end in 5 ft, 1d8 Lightning dmg; +1d8 at CL 5/11/17",
	descriptionCantripDie : "1 crea I see save or pulled 10 ft to me; if it ends in 5 ft, `CD`d8 Lightning dmg",
	descriptionFull : "You create a lash of lightning energy that strikes at one creature of your choice that you can see within 15 feet of you. The target must succeed on a Strength saving throw or be pulled up to 10 feet in a straight line toward you and then take 1d8 lightning damage if it is within 5 feet of you." + "\n   " + "This spell's damage increases by 1d8 when you reach 5th level (2d8), 11th level (3d8), and 17th level (4d8)."
};

//end example of spell that is that weapon(delete later or change)
SpellsList["force choke"] = {
	name : "Force Choke",
	classes : [],
	source : ["DnDB", 4],
	ritual : false,
	level : 2,
	school : "Trans",
	time : "1 a",
	range : "60 ft",
	components : "S",
	duration : "Conc, 1 min",
	save : "Wis",
	description : "1+1/SL crea save or stunned and start of each turn 1d10 Force dmg; extra save at end of each turn",
	descriptionFull : "Choose a humanoid that you can see within range. The target must succeed on a Wisdom saving throw or be stunned for the duration. At the beginning of each of its turns, the target takes 1d10 force damage. At the end of each of its turns, the target can make another Wisdom saving throw. On a success, the spell ends on the target." + AtHigherLevels + "When you cast this spell using a spell slot of 3rd level or higher, you can target one additional humanoid for each slot level above 2nd. The humanoids must be within 30 feet of each other when you target them."
};
SpellsList["force lightning"] = {
	name : "Force Lightning",
	classes : [],
	source : ["DnDB", 4],
	ritual : false,
	level : 1,
	school : "Evoc",
	time : "1 a",
	range : "30 ft",
	components : "S",
	duration : "Conc, 1 min",
	description : "1+1/SL targets; Each ranged atk for 1d12 Lightning dmg, move half, -2 AC/Dex saves, no rea, ee B",
	descriptionFull : "A beam of crackling, blue energy lances out toward a creature within range, forming a sustained arc of lightning between you and the target. Make a ranged spell attack against that creature. On a hit, the target takes 1d12 lightning damage, and for the duration its movement speed is halved, it takes a -2 penalty to AC and Dexterity saving throws, and it can’t use reactions." + "\n   " + "On each of your turns for the duration, you can use your action to deal 1d12 lightning damage to the target automatically. The spell ends if you use your action to do anything else. The spell also ends if the target is ever outside the spell’s range or if it has total cover from you." + AtHigherLevels + "When you cast this spell using a spell slot of 3rd level or higher, you can target one additional humanoid for each slot level above 2nd. The humanoids must be within 30 feet of each other when you target them."
};
SpellsList["force push"] = {
	name : "Force Push",
	classes : [],
	source : ["DnDB", 4],
	ritual : false,
	level : 1,
	school : "Evoc",
	time : "1 a",
	range : "30 ft",
	components : "S",
	duration : "Instantaneous",
	save : "Str",
	description : "1 creature save or pushed 20 ft away and knocked prone",
	descriptionFull : "You slam a concussive burst of force at one creature within range. The target must make a Strength saving throw. On a failed save, the target is pushed 20 feet away from you and knocked prone. On a successful save, the creature isn’t pushed or knocked prone."
};
SpellsList["force repulse"] = {
	name : "Force Repulse",
	classes : [],
	source : ["DnDB", 5],
	ritual : false,
	level : 1,
	school : "Evoc",
	time : "1 a",
	range : "15-ft rad",
	components : "S",
	duration : "Instantaneous",
	save : "Str",
	description : "2d8+1d8/SL Force dmg and pushed 10 ft; save halves & not pushed; unsecured obj move 10 ft",
	descriptionFull : "A 15-foot sphere of pure Force-energy pulses outward from you. Each creature in a 15-foot radius around you must make a Strength saving throw. On a failed save, a creature takes 2d8 force damage and is pushed 10 feet away from you. On a successful save, the creature takes half as much damage and isn’t pushed." + "\n   " + "In addition, unsecured objects that are completely within the are of effect are automatically pushed 10 feet away from you by the spell’s effect." + AtHigherLevels + "When you cast this spell using a spell slot of 2nd level or higher, the damage increases by 1d8 for each slot level above 1st."
};
SpellsList["saber throw"] = {
	name : "Saber Throw",
	classes : [],
	source : ["DnDB", 5],
	ritual : false,
	level : 2,
	school : "Trans",
	time : "1 a",
	range : "30-ft line",
	components : "S,M",
	compMaterial : "A lightsaber",
	duration : "Instantaneous",
	save : "Dex",
	description : "30-ft long 5-ft wide line all creatures 3d8+1d8/SL Radiant dmg; save halves",
	descriptionFull : "You toss your lightsaber, sending it spinning through the air in a line 30 feet long and 5 feet wide in a direction you choose before. Each creature in the line must make a Dexterity saving throw. A creature takes 3d8 radiant damage on a failed save, or half as much damage on a successful one. The lightsaber then returns back to your hand." + AtHigherLevels + "When you cast this spell using a spell slot of 3rd level or higher, the damage increases by 1d8 for each slot level above 2nd."
};
