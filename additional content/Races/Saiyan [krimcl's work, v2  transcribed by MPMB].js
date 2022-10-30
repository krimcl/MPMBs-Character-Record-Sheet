/*	-WHAT IS THIS?-
	This file adds optional material to "MPMB's Character Record Sheet" found at https://flapkan.com/mpmb/charsheets
	Import this file using the "Add Extra Materials" bookmark.

	-KEEP IN MIND-
	It is recommended to enter the code in a fresh sheet before adding any other information (i.e. before making your character with it).
*/

/*	-INFORMATION-
	Subject:	Race
	Effect:		This script adds a player race, called "Saiyan" and its 2 subraces
				This subrace has been made by /u/krimcl over on /r/UnearthedArcana on Reddit (https://redd.it/45msi6/)

	Code by:	MorePurpleMoreBetter
	Date:		2018-06-05 (sheet v12.999)
*/

var iFileName = "Saiyan [krimcl's work, v2 transcribed by MPMB].js";

SourceList["saiyanpdf"] = {
	name: "/u/krimcl: SaiyanPDF",
	abbreviation: "SaiyanPDF",
	group: "Reddit/r/DungeonsandDragonBall",
	url: "https://www.reddit.com/r/DungeonsandDragonBall/comments/gej7gx/dungeons_and_dragon_ball_mark_16_spells_added/",
	date : "2022/10/02"
};

RaceList["saiyan"] = {
	regExpSearch : /saiyan/i,
	name : "Saiyan",
	sortname : "Saiyan",
	source : ["saiyanpdf", 0],
	plural : "Saiyan",
	size : 3,
	speed : {
		walk : { spd : 30, enc : 20 }
	},
	languageProfs : ["Common", "Saiyan"],
	toolProfs : [["Brewer Supplies, or Cook Utensils", 1]],
	age : " age slowly and in bursts but live the same amonut of time as a human",
	height : " range from 4 to over 7 feet tall",
	weight : "",
	heightMetrict : " range from 1,5 to over 2 metres tall",
	improvements : "Saiyan: +1 Strength, +1 Dexterity, and +1 Constitution;",
	scores : [1, 1, 1, 0, 0, 0],
	trait : "Saiyan (+1 Strength, +1 Dexterity, and +1 Constitution)" + (typePF ? "\n" : "") + "\nPowerful Build: I count as one size larger when determining my carrying capacity and the weight I can push, drag, or lift." + (typePF ? "\n" : "") + "\nSaiyan Pride: I have advantage on saves against being charmed or frightened." + (typePF ? "\n" : "") + "\nSaiyan Instinct: I add +1 to initiative rolls" + (typePF ? "\n" : "") + "\nSaiyan Reflection: You gain proficiency with either brewer's supplies or cooking utensils. Whenever you make tea with your chosen supplies, you can use it to get a reflection of your mental state. The clearer the tea, the clearer your mind and resolve." + (typePF ? "\n" : "") + "\nPrehensile Tail: As a Saiyan, I was born with a tail that measures 5 feet in length. Should I lose my tail, it regrows in 1d6 weeks unless surgically removed. While I do not have my tail, I cannot become an Oozaru. I can use my action to control to control my tail. I can use my tail to manipulate an object, open an unlocked door or container, stow or retrieve an item from an open container, or pour the contents out of a vial. My tail can’t attack, activate magic items, or carry more than 25 pounds. Additionally, I have disadvantage on Strength (Athletics) and Dexterity (Acrobatics) against being grappled when my tail is grabbed." + (typePF ? "\n" : "") + "\nOozaru: When I look at the full moon or am exposed to the Moonbeam spell, I must make a DC 15 Wisdom saving throw to avoid becoming an Oozaru. On a success, I maintain control and stop the transformation. On a failure, I transform into an Oozaru until I am no longer under the influence of the moon. During this time, the DM has control over what my character does until the transformation wears off. If I fall to 0 hit points as an Oozaru, I fall out of the transformation and am unconscious.",
	savetxt : { adv_vs : ["charmed", "frightened"] },
	addMod : { type : "skill", field : "Init", mod : 1, text : "Always ready to fight, I can add +1 to initiative rolls." },
	carryingCapacity : 2
};