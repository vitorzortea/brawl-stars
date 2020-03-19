import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BrawlersService {

  brawlerList = [
    {
      nome: 'Shelly',
      tipo: 'Fighter',
      raridade: 'Common',
      poder: '10',
      classe: '21',
      trofeus: '548',
      bio: 'Shelly\'s boomstick fires a wide spread of pellets to a medium range. The more pellets hit, the greater the damage. Shelly\'s Super Shell obliterates both cover and enemies. Any survivors get knocked back.',
      image: 'shelly',
    },
    {
      nome: 'Nita',
      tipo: 'Fighter',
      raridade: 'Common',
      poder: '5',
      classe: '20',
      trofeus: '501',
      bio: 'Nita sends forth a shockwave, damaging enemies caught in the tremor. Nita summons the spirit of Big Baby Bear to hunt down her enemies.',
      image: 'nita',
    },
    {
      nome: 'Colt',
      tipo: 'Sharpshooter',
      raridade: 'Common',
      poder: '6',
      classe: '20',
      trofeus: '515',
      bio: 'Colt shoots six straight long-range shots out of his revolvers. Colt rattles off a massive burst of bullets that shoot extra far and destroy cover.',
      image: 'colt',
    },
    {
      nome: 'Bull',
      tipo: 'Heavyweight',
      raridade: 'Common',
      poder: '4',
      classe: '20',
      trofeus: '546',
      bio: 'Bull\'s double-barreled shotgun deals heavy damage. It has very short range, so Bull likes to get up close and personal. Bull puts his head down and bulldozes through opponents and obstacles. He\'s always been headstrong!',
      image: 'bull',
    },
    {
      nome: 'Jessie',
      tipo: 'Fighter',
      raridade: 'Common',
      poder: '5',
      classe: '20',
      trofeus: '509',
      bio: 'Jessie fires off an energy orb. After hitting a target, the orb bounces at the next target in range, hitting up to three enemies. Jessie deploys a gun turret that automatically shoots at enemies. It\'s made of 100% recycled materials!',
      image: 'jessie',
    },
    {
      nome: 'Brock',
      tipo: 'Sharpshooter',
      raridade: 'Common',
      poder: '5',
      classe: '16',
      trofeus: '341',
      bio: 'Brock lets fly with a single Rockin\'s Rocket that really goes the distance. Brock fires a rocket barrage that takes out enemies and obstacles. He only wants to see you bathing in the Rocket Rain!',
      image: 'brock',
    },
    {
      nome: 'Dynamike',
      tipo: 'Thrower',
      raridade: 'Common',
      poder: '4',
      classe: '15',
      trofeus: '307',
      bio: 'Mike tosses two sticks of dynamite, passing over any obstacles in the way. The fuses are cut as short as Mike\'s explosive temper! A big-bada-barrel of dynamite blows up cover. Any surviving enemies get knocked back on impact!',
      image: 'dynamike',
    },
    {
      nome: 'Bo',
      tipo: 'Fighter',
      raridade: 'Common',
      poder: '6',
      classe: '20',
      trofeus: '502',
      bio: 'Bo releases a trio of exploding arrows, tearing up enemies like an eagle\'s talons. Bo hides explosive traps in the ground. When triggered by an enemy, the traps explode after a short delay, knocking back and damaging enemies.',
      image: 'bo',
    },
    {
      nome: 'Tick',
      tipo: 'Thrower',
      raridade: 'Common',
      poder: '4',
      classe: '17',
      trofeus: '382',
      bio: 'Tick lobs a cluster of mines that separate before landing. The mines explode on contact with a target, or after a few seconds. Tick detaches and launches his head. After landing, the head hops toward the nearest target and explodes on contact!',
      image: 'tick',
    },
    {
      nome: '8-BIT',
      tipo: 'Sharpshooter',
      raridade: 'Common',
      poder: '3',
      classe: '15',
      trofeus: '315',
      bio: 'Shoots a burst of Blaster Beams that damage any opponent they hit. The beams have medium range and slight spread. Deploys a turret that increases the damage output of all friendly Brawlers in its area of effect.',
      image: '8-bit',
    },
    {
      nome: 'Emz',
      tipo: 'Fighter',
      raridade: 'Common',
      poder: '1',
      classe: '15',
      trofeus: '316',
      bio: 'Emz gives you a blast of her hair spray! It\'s strong enough to melt your face. Emz creates a cloud of toxicity around herself, slowing down the movement of enemies and damaging them.',
      image: 'emz',
    },
    {
      nome: 'El Primo',
      tipo: 'Heavyweight',
      raridade: 'Rare',
      poder: '4',
      classe: '20',
      trofeus: '494',
      bio: 'El Primo fires off a furious flurry of four fiery fists. That\'s a spicy jalapeno knuckle sandwich! Leaping high, El Primo drops an Intergalactic Elbow that knocks around enemies and cover!',
      image: 'primo',
    },
    {
      nome: 'Barley',
      tipo: 'Thrower',
      raridade: 'Rare',
      poder: '6',
      classe: '14',
      trofeus: '343',
      bio: 'Barley lobs a bottle, breaking it on the ground. Enemies take damage from the splash, and more damage over time if they stay in the puddle. Barley hurls a flurry of fiery bottles, covering a large area in flames. This one\'s on the house!',
      image: 'barley',
    },
    {
      nome: 'Poco',
      tipo: 'Support',
      raridade: 'Rare',
      poder: '4',
      classe: '20',
      trofeus: '508',
      bio: 'Poco strums his guitarrón, sending forward bone-jarring sound waves. Enemies hit by the waves take damage. Poco heals himself and all friends he can reach with his uplifting melody. Does not affect enemies.',
      image: 'poco',
    },
    {
      nome: 'Rosa',
      tipo: 'Heavyweight',
      raridade: 'Rare',
      poder: '5',
      classe: '20',
      trofeus: '513',
      bio: 'Rosa throws a flurry of powerful punches with perfect technique! Rosa gets a second skin of tough vine for 3 seconds, decreasing all damage received by 70% for the duration.',
      image: 'rose',
    },
    {
      nome: 'Rico',
      tipo: 'Sharpshooter',
      raridade: 'Super Rare',
      poder: '5',
      classe: '20',
      trofeus: '505',
      bio: 'Rico\'s bullets bounce off walls, gaining range. They can hit enemies behind cover. Rico fires a long burst of bullets that pierce through enemies and bounce off walls, gaining range.',
      image: 'rico',
    },
    {
      nome: 'Darryl',
      tipo: 'Heavyweight',
      raridade: 'Super Rare',
      poder: '1',
      classe: '1',
      trofeus: '0',
      bio: 'Darryl\'s double barrel shotguns fire two staggered blasts of heavy close-range damage. Darryl rolls forward inside his barrel, knocking back enemies and bouncing off walls. His Super recharges over time!',
      image: 'darryl',
    },
    {
      nome: 'Penny',
      tipo: 'Sharpshooter',
      raridade: 'Super Rare',
      poder: '4',
      classe: '20',
      trofeus: '503',
      bio: 'Shoots out a pouch of fool\'s gold. If the pouch hits an enemy, it bursts and coins pepper targets behind the first enemy. Penny sets up her cannon! It can shoot at enemies at a long range, even if they are behind cover.',
      image: 'penny',
    },
    {
      nome: 'Carl',
      tipo: 'Sharpshooter',
      raridade: 'Super Rare',
      poder: '1',
      classe: '1',
      trofeus: '0',
      bio: 'Carl throws his Pickaxe like a boomerang. After he catches the returning Pickaxe, he can throw it again. Carl goes into a crazy spin for a few seconds, flailing around and damaging nearby opponents.',
      image: 'carl',
    },
    {
      nome: 'Jacky',
      tipo: 'Heavyweight',
      raridade: 'Super Rare',
      poder: '1',
      classe: '1',
      trofeus: '0',
      bio: 'Jacky hops on her Jackhammer to shake the ground all around. Enemies caught too close will get a pounding! Jacky drills a hole in the ground, pulling in foes to introduce them to her Jackhammer! She partially shields incoming attacks while performing her Super.',
      image: 'jacky',
    },
    {
      nome: 'Piper',
      tipo: 'Sharpshooter',
      raridade: 'Epic',
      poder: '1',
      classe: '1',
      trofeus: '0',
      bio: 'Piper fires a sniper shot from the tip of her parasol. The shot gains more oompf the farther it flies! Piper hops away to avoid pushy suitors. She leaves them a lady\'s favor though: live grenades from her garter!',
      image: 'piper',
    },
    {
      nome: 'Pem',
      tipo: 'Support',
      raridade: 'Epic',
      poder: '2',
      classe: '15',
      trofeus: '306',
      bio: 'Pam sprays a large area with bursts of scrap metal. Safety goggles advised! Pam\'s healing turret will fix up her and teammates who stay in it area of effect.',
      image: 'pam',
    },
    {
      nome: 'Frank',
      tipo: 'Heavyweight',
      raridade: 'Epic',
      poder: '1',
      classe: '1',
      trofeus: '0',
      bio: 'Frank takes a while to wind up his hammer blow, but the hit is so hard it sends a shockwave. Frank\'s greatest hit sends a shockwave that destroys environment and stuns enemies for a while.',
      image: 'frank',
    },
    {
      nome: 'Bibi',
      tipo: 'Batter',
      raridade: 'Epic',
      poder: '1',
      classe: '1',
      trofeus: '0',
      bio: 'Bibi swings her baseball bat. When she has three swings at the ready, her Home Run bar will charge. Once fully charged, her next swing will knock back enemies! Bibi bats a bouncing ball of bubble gum that can go through enemies, and even hit the same target multiple times!',
      image: 'bibi',
    },
    {
      nome: 'Bea',
      tipo: 'Sharpshooter',
      raridade: 'Epic',
      poder: '1',
      classe: '1',
      trofeus: '0',
      bio: 'Bea sends out a long range shot that, upon landing, supercharges her next shot to deal epic damage! Bea deploys a swarm of drones that move and turn like jets. They slow down any opponents caught in their path.',
      image: 'bea',
    },
    {
      nome: 'Mortis',
      tipo: 'Dashing Assassin',
      raridade: 'Mythic',
      poder: '1',
      classe: '1',
      trofeus: '0',
      bio: 'Mortis dashes forward with a sharp swing of his shovel, creating business opportunities for himself. Mortis calls forth a swarm of vampire bats that drain the health of his enemies while restoring his. Creepy!',
      image: 'mortis',
    },
    {
      nome: 'Tara',
      tipo: 'Fighter',
      raridade: 'Mythic',
      poder: '1',
      classe: '1',
      trofeus: '0',
      bio: 'Tara flicks her wrist, snapping off three tarot cards that pierce through enemies. Quite a trick! Tara conjures up a mind-boggling gravity well! Enemies in the area of effect get pulled in, crashing together painfully hard.',
      image: 'tara',
    },
    {
      nome: 'Gene',
      tipo: 'Support',
      raridade: 'Mythic',
      poder: '4',
      classe: '20',
      trofeus: '506',
      bio: 'Gene shoots a solid ball of magical smoke from his lamp. If the ball doesn\'t hit a target, it splits up and spreads the damage in a cone. Gene launches a magical hand from his lamp. If the hand hits an enemy, they get pulled back to Gene\'s location!',
      image: 'eugenio',
    },
    {
      nome: 'Max',
      tipo: 'Support',
      raridade: 'Mythic',
      poder: '3',
      classe: '20',
      trofeus: '505',
      bio: 'Max\'s blaster shoots a bunch of projectiles fast! It holds a lot of rounds, and Max is quick with the reload. Max momentarily boosts up her movement speed and that of nearby allies. Gotta go fast!',
      image: 'max',
    },
    {
      nome: 'Mr. P',
      tipo: 'Sharpshooter',
      raridade: 'Mythic',
      poder: '1',
      classe: '1',
      trofeus: '0',
      bio: 'Mr. P throws a heavy suitcase with angry intent. If the suitcase hits an obstacle or an opponent, it bounces over them, lands with a bang and deals area damage. Mr. P deploys the home base for his robo-porters. He has reprogrammed the small penguin-head robots to attack and harass opponents (and unruly guests).',
      image: 'mrp',
    },
    {
      nome: 'Spike',
      tipo: 'Sharpshooter',
      raridade: 'Legendary',
      poder: '1',
      classe: '1',
      trofeus: '0',
      bio: 'Spike fires off a small cactus that explodes, shooting spikes in different directions. Spike lobs a thorny grenade. Enemies caught in the blast area take damage and are alowed down.',
      image: 'spike',
    },
    {
      nome: 'Crow',
      tipo: 'Toxic Assassin',
      raridade: 'Legendary',
      poder: '1',
      classe: '1',
      trofeus: '0',
      bio: 'Crow throws a triple threat of daggers. Enemies nicked by the poisoned blades will take damage over time. Crow takes to the skies, throwing a ring of poisoned daggers around him both on take-off and landing.',
      image: 'corvo',
    },
    {
      nome: 'Leon',
      tipo: 'Stealthy Assassin',
      raridade: 'Legendary',
      poder: '1',
      classe: '1',
      trofeus: '0',
      bio: 'Leon flicks his wrist and fires four Spinner Blades. The blades deal less damage the farther they travel. Leon becomes invisible for 6 seconds. If he attacks, he will be revealed. Enemies close to Leon will be able to spot him.',
      image: 'leon',
    },
    {
      nome: 'Sandy',
      tipo: 'Support',
      raridade: 'Legendary',
      poder: '1',
      classe: '1',
      trofeus: '0',
      bio: 'Sandy pelts enemies with sharp, piercing pebbles. Ouch! Sandy summons a sandstorm that lasts for 9 seconds and hides friendly Brawlers inside it.',
      image: 'sandy',
    }
  ];

  brawlerClasses = [
    {
      start: 0,
      end: 9
    },
    {
      start: 10,
      end: 19
    },
    {
      start: 20,
      end: 29
    },
    {
      start: 30,
      end: 39
    },
    {
      start: 40,
      end: 59
    },
    {
      start: 60,
      end: 79
    },
    {
      start: 80,
      end: 99
    },
    {
      start: 100,
      end: 119
    },
    {
      start: 120,
      end: 139
    },
    {
      start: 140,
      end: 159
    },
    {
      start: 160,
      end: 179
    },
    {
      start: 180,
      end: 219
    },
    {
      start: 220,
      end: 259
    },
    {
      start: 300,
      end: 339
    },
    {
      start: 340,
      end: 379
    },
    {
      start: 380,
      end: 419
    },
    {
      start: 420,
      end: 459
    },
    {
      start: 460,
      end: 499
    },
    {
      start: 500,
      end: 549
    },
    {
      start: 550,
      end: 599
    },
    {
      start: 600,
      end: 649
    },
    {
      start: 650,
      end: 699
    },
    {
      start: 700,
      end: 749
    },
    {
      start: 750,
      end: 799
    },
    {
      start: 800,
      end: 849
    },
    {
      start: 850,
      end: 899
    },
    {
      start: 900,
      end: 949
    },
    {
      start: 950,
      end: 999
    },
    {
      start: 1000,
      end: 1049
    },
    {
      start: 1050,
      end: 1099
    },
    {
      start: 1100,
      end: 1149
    },
    {
      start: 1150,
      end: 1199
    },
    {
      start: 1200,
      end: 1249
    },
    {
      start: 1250,
      end: 1300
    }
  ];

  brawlerSelect = this.brawlerList[0];

  constructor() { }
}
