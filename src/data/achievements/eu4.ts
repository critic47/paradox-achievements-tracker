import type { Achievement } from './index'

// Dati estratti automaticamente dalla EU4 Wiki
// Ultimo aggiornamento: 2025-11-01T19:24:23.811Z
export const achievements: Achievement[] = [
  {
    id: 'ach_1',
    name: 'A Golden Empire',
    description: 'Enact a Golden Age as an Empire.',
    icon: 'https://eu4.paradoxwikis.com/images/7/73/A_Golden_Empire.png',
    dlc: '',
    version: '1.20',
    difficulty: 'VE',
    game: 'eu4',
    guideUrl: '',
    startingConditions: '',
    completionRequirements:
      '*   [![Yes](https://eu4.paradoxwikis.com/images/thumb/d/da/Ledger_yes.png/28px-Ledger_yes.png)](/File:Ledger_yes.png "Yes") Is in a [golden era](/Golden_era "Golden era")\n*   [![Empire rank](https://eu4.paradoxwikis.com/images/thumb/9/9d/Empire.png/28px-Empire.png)](/Government_rank "Empire rank") Is an empire',
    notes:
      'The golden era can be started on the first day of the next month after completing 3 objectives. Easily done as [![Flag of Ming](https://eu4.paradoxwikis.com/images/thumb/a/a5/Ming.png/20px-Ming.png)](/Ming "Ming") [Ming](/Ming "Ming"). You begin as an empire, already have a 30-development capital, and have more than five centres of trade at the beginning, you just need to release five vassals and you can begin your golden era.',
  },
  {
    id: 'ach_2',
    name: 'A Protected Market',
    description: 'Have 100% Mercantilism.',
    icon: 'https://eu4.paradoxwikis.com/images/4/44/A_Protected_Market.jpg',
    dlc: '',
    version: '1.6',
    difficulty: 'VE',
    game: 'eu4',
    guideUrl: 'https://eu4.paradoxwikis.com/A_Protected_Market',
    startingConditions: '',
    completionRequirements:
      '[![Mercantilism.png](https://eu4.paradoxwikis.com/images/thumb/0/05/Mercantilism.png/28px-Mercantilism.png)](/Mercantilism "Mercantilism") Have **100%** mercantilism',
    notes:
      'Easy to do as [![Flag of Aragon](https://eu4.paradoxwikis.com/images/thumb/6/61/Aragon.png/20px-Aragon.png)](/Aragon "Aragon") [Aragon](/Aragon "Aragon") within 1-2 years. Move Aragon\'s capital (or main trade city, if you have [![Wealth of Nations.png](https://eu4.paradoxwikis.com/images/thumb/7/7d/Wealth_of_Nations.png/28px-Wealth_of_Nations.png)](/Wealth_of_Nations "Wealth of Nations") Wealth of Nations) out of the Valencia trade node. Send a merchant to collect trade in Valencia. Then grant the Burghers the \'Exclusive Trade Rights\' privilege, that grants 3 immediate mercantilism. Without unpausing, recall your merchant from Valencia. Unpause, and the privilege will be revoked due to there not being a trade node where you own 3 centers of trade and are collecting. The player can then send the merchant to Valencia again, give the privilege and recall the merchant. Repeat this process until 100% mercantilism is reached. Alternatively, this process can be done with any nation that has 3 centers of trade in any trade node and at least one province in a node that the nation does not own 3 centers of trade.\n\nSome nations this method can be applied to at the 1444 start date include [![Flag of Castile](https://eu4.paradoxwikis.com/images/thumb/e/ee/Castile.png/20px-Castile.png)](/Castile "Castile") [Castile](/Castile "Castile"), [![Flag of England](https://eu4.paradoxwikis.com/images/thumb/2/21/England.png/20px-England.png)](/England "England") [England](/England "England"), [![Flag of Tunis](https://eu4.paradoxwikis.com/images/thumb/7/79/Tunis.png/20px-Tunis.png)](/Tunis "Tunis") [Tunis](/Tunis "Tunis"), [![Flag of Poland](https://eu4.paradoxwikis.com/images/thumb/9/99/Poland.png/20px-Poland.png)](/Poland "Poland") [Poland](/Poland "Poland"), [![Flag of Ming](https://eu4.paradoxwikis.com/images/thumb/a/a5/Ming.png/20px-Ming.png)](/Ming "Ming") [Ming](/Ming "Ming") and [![Flag of Vijayanagar](https://eu4.paradoxwikis.com/images/thumb/3/31/Vijayanagar.png/20px-Vijayanagar.png)](/Vijayanagar "Vijayanagar") [Vijayanagar](/Vijayanagar "Vijayanagar").',
  },
  {
    id: 'ach_3',
    name: 'AAA Credit',
    description: "As a Great Power, take on over 1,000 ducats of another nation's debt.",
    icon: 'https://eu4.paradoxwikis.com/images/d/d0/AAA_Credit.jpg',
    dlc: '',
    version: '1.18',
    difficulty: 'VE',
    game: 'eu4',
    guideUrl: '',
    startingConditions: '',
    completionRequirements:
      '*   [![Great power.png](https://eu4.paradoxwikis.com/images/thumb/f/fc/Great_power.png/28px-Great_power.png)](/Great_power "Great power") Is a Great power\n*   [![Yes](https://eu4.paradoxwikis.com/images/thumb/d/da/Ledger_yes.png/28px-Ledger_yes.png)](/File:Ledger_yes.png "Yes") Has taken on 1000 ducats of another country\'s debt.',
    notes: 'Must be done in a single action',
  },
  {
    id: 'ach_4',
    name: "All That's Thine Shall Be Mine",
    description: "As a Greedy ruler, take all of a nation's ducats in a peace deal.",
    icon: 'https://eu4.paradoxwikis.com/images/8/86/All_That%27s_Thine_Shall_Be_Mine.jpg',
    dlc: '',
    version: '1.18',
    difficulty: 'VE',
    game: 'eu4',
    guideUrl: '',
    startingConditions: '',
    completionRequirements:
      '[![Gold Icon.png](https://eu4.paradoxwikis.com/images/2/26/Gold_Icon.png)](/Ducats "Ducats") *Took all of an enemy nation\'s ducats in a peace deal, during the reign of a [![Greedy.png](https://eu4.paradoxwikis.com/images/thumb/a/aa/Greedy.png/28px-Greedy.png)](/Greedy "Greedy") Greedy Ruler.*',
    notes:
      'Can be achieved without being the warleader by having a Greedy ruler and the warleader taking all of a nation\'s [![Gold Icon.png](https://eu4.paradoxwikis.com/images/2/26/Gold_Icon.png)](/Ducats "Ducats") ducats in a peace deal. The rulers of [![Flag of Amago](https://eu4.paradoxwikis.com/images/thumb/6/6f/Amago.png/20px-Amago.png)](/Amago "Amago") [Amago](/Amago "Amago"), [![Flag of Cleves](https://eu4.paradoxwikis.com/images/thumb/f/fd/Cleves.png/20px-Cleves.png)](/Cleves "Cleves") [Cleves](/Cleves "Cleves"), [![Flag of Cologne](https://eu4.paradoxwikis.com/images/thumb/2/29/Cologne.png/20px-Cologne.png)](/Cologne "Cologne") [Cologne](/Cologne "Cologne"), [![Flag of Hatakeyama](https://eu4.paradoxwikis.com/images/thumb/8/8b/Hatakeyama.png/20px-Hatakeyama.png)](/Hatakeyama "Hatakeyama") [Hatakeyama](/Hatakeyama "Hatakeyama"), [![Flag of Isshiki](https://eu4.paradoxwikis.com/images/thumb/2/21/Isshiki.png/20px-Isshiki.png)](/Isshiki "Isshiki") [Isshiki](/Isshiki "Isshiki"), [![Flag of Khandesh](https://eu4.paradoxwikis.com/images/thumb/8/8a/Khandesh.png/20px-Khandesh.png)](/Khandesh "Khandesh") [Khandesh](/Khandesh "Khandesh"), [![Flag of Lüneburg](https://eu4.paradoxwikis.com/images/thumb/8/8d/L%C3%BCneburg.png/20px-L%C3%BCneburg.png)](/L%C3%BCneburg "Lüneburg") [Lüneburg](/L%C3%BCneburg "Lüneburg") and [![Flag of Otomo](https://eu4.paradoxwikis.com/images/thumb/a/ad/Otomo.png/20px-Otomo.png)](/Otomo "Otomo") [Otomo](/Otomo "Otomo") are greedy at the start of the game.',
  },
  {
    id: 'ach_5',
    name: 'Cold War',
    description: 'Win a war without fighting a single battle.',
    icon: 'https://eu4.paradoxwikis.com/images/6/6a/Cold_War.jpg',
    dlc: '',
    version: '1.1',
    difficulty: 'VE',
    game: 'eu4',
    guideUrl: '',
    startingConditions: '',
    completionRequirements:
      '[![Yes](https://eu4.paradoxwikis.com/images/thumb/d/da/Ledger_yes.png/28px-Ledger_yes.png)](/File:Ledger_yes.png "Yes") Won one war without fighting a single battle.',
    notes:
      'Start as a neighbor of an OPM. Go to a total war with them and sign peace (break their alliances if needed and take all their money). Soon after declare another war (breaking the truce) and capture their undefended capital. Naval battles do not prevent the achievement.',
  },
  {
    id: 'ach_6',
    name: 'Combined Arms',
    description: 'Have both an Admiral and a General with a trait.',
    icon: 'https://eu4.paradoxwikis.com/images/c/cb/Combined_Arms.jpg',
    dlc: '',
    version: '1.18',
    difficulty: 'VE',
    game: 'eu4',
    guideUrl: '',
    startingConditions:
      '[![Time Icon.png](https://eu4.paradoxwikis.com/images/thumb/7/70/Time_Icon.png/24px-Time_Icon.png)](/Time "Time") No restriction of the start date',
    completionRequirements:
      '*   [![Admiral.png](https://eu4.paradoxwikis.com/images/thumb/d/d1/Admiral.png/28px-Admiral.png)](/Admiral "Admiral") Have an Admiral with a trait\n*   [![General.png](https://eu4.paradoxwikis.com/images/thumb/6/6d/General.png/28px-General.png)](/General "General") Have a General with a trait',
    notes:
      '*   Conquistadors and explorers do not count.\n*   Leaders gain traits at the end of battles with a chance based on the [military tradition](/Military_tradition "Military tradition") gain from that battle, which is based (in part) on the number of losses inflicted on the enemy. The [![Flag of Ottomans](https://eu4.paradoxwikis.com/images/thumb/8/89/Ottomans.png/20px-Ottomans.png)](/Ottomans "Ottomans") [Ottomans](/Ottomans "Ottomans") and [![Flag of France](https://eu4.paradoxwikis.com/images/thumb/d/de/France.png/20px-France.png)](/France "France") [France](/France "France") start with a general with a trait in 1444.',
  },
  {
    id: 'ach_7',
    name: 'Cowardly Tactics',
    description: 'Have a fort and a supply depot in a mountainous province producing livestock.',
    icon: 'https://eu4.paradoxwikis.com/images/7/74/Cowardly_Tactics.png',
    dlc: '',
    version: '1.23',
    difficulty: 'VE',
    game: 'eu4',
    guideUrl: '',
    startingConditions: '',
    completionRequirements:
      '[![Yes](https://eu4.paradoxwikis.com/images/thumb/d/da/Ledger_yes.png/28px-Ledger_yes.png)](/File:Ledger_yes.png "Yes") Own and control a livestock-producing mountain province with a fort building and a supply depot',
    notes:
      'Easily done as [![Flag of Mamluks](https://eu4.paradoxwikis.com/images/thumb/c/ca/The_Mamluks.png/20px-The_Mamluks.png)](/Mamluks "Mamluks") [Mamluks](/Mamluks "Mamluks") or the [![Flag of Three Leagues](https://eu4.paradoxwikis.com/images/thumb/4/49/Three_Leagues.png/20px-Three_Leagues.png)](/Three_Leagues "Three Leagues") [Three Leagues](/Three_Leagues "Three Leagues"), who start with a fort on a livestock producing mountain province and 10% army professionalism.',
  },
  {
    id: 'ach_8',
    name: 'Czechs and Balances',
    description:
      'Starting as Bohemia, grant at least two privileges to each estate while having at least 50% Crown Land.',
    icon: 'https://eu4.paradoxwikis.com/images/b/b5/Czechs_and_Balances.png',
    dlc: '',
    version: '1.30',
    difficulty: 'E',
    game: 'eu4',
    guideUrl: '',
    startingConditions:
      '*   [![Yes](https://eu4.paradoxwikis.com/images/thumb/d/da/Ledger_yes.png/28px-Ledger_yes.png)](/File:Ledger_yes.png "Yes") Playing as [![Flag of Bohemia](https://eu4.paradoxwikis.com/images/thumb/4/41/Bohemia.png/20px-Bohemia.png)](/Bohemia "Bohemia") [Bohemia](/Bohemia "Bohemia")\n*   [![No](https://eu4.paradoxwikis.com/images/thumb/5/56/Ledger_no_crop.png/28px-Ledger_no_crop.png)](/File:Ledger_no_crop.png "No") *Not* using a [random New World](/Random_New_World "Random New World")',
    completionRequirements:
      '*   At least two privileges are granted to the [![Clergy.png](https://eu4.paradoxwikis.com/images/thumb/0/0e/Clergy.png/28px-Clergy.png)](/Clergy_estate "Clergy estate") Clergy\n*   At least two privileges are granted to the [![Burghers.png](https://eu4.paradoxwikis.com/images/thumb/d/dd/Burghers.png/28px-Burghers.png)](/Burghers_estate "Burghers estate") Burghers\n*   At least two privileges are granted to the [![Nobility.png](https://eu4.paradoxwikis.com/images/thumb/c/c8/Nobility.png/28px-Nobility.png)](/Nobility_estate "Nobility estate") Nobility\n*   Land owned by the crown is at least 50%',
    notes:
      "This can be done easily by starting as Bohemia and then releasing Moravia as a vassal and selecting the option to play as the released vassal. Afterwards, you'll have more than 80% Crown Land and now you can give 2 privileges to each estate. Several of the privileges do not affect the size of the Crown Land which makes it easy to stay above 50.",
  },
  {
    id: 'ach_9',
    name: 'Defender of the Faith',
    description: 'Become Defender of the Faith.',
    icon: 'https://eu4.paradoxwikis.com/images/f/fb/Defender_of_the_Faith.jpg',
    dlc: '',
    version: '1.1',
    difficulty: 'VE',
    game: 'eu4',
    guideUrl: '',
    startingConditions:
      '[![No](https://eu4.paradoxwikis.com/images/thumb/5/56/Ledger_no_crop.png/28px-Ledger_no_crop.png)](/File:Ledger_no_crop.png "No") Is *not* defender of the faith',
    completionRequirements:
      '[![Become Defender of the Faith.png](https://eu4.paradoxwikis.com/images/thumb/0/0f/Become_Defender_of_the_Faith.png/28px-Become_Defender_of_the_Faith.png)](/Defender_of_the_faith "Defender of the faith") Is defender of the faith',
    notes:
      'Can be done immediately as [![Flag of Ottomans](https://eu4.paradoxwikis.com/images/thumb/8/89/Ottomans.png/20px-Ottomans.png)](/Ottomans "Ottomans") [Ottomans](/Ottomans "Ottomans"), just take out a few loans and claim the title.',
  },
  {
    id: 'ach_10',
    name: 'Double the Love',
    description: 'Start with no unions and get two at the same time.',
    icon: 'https://eu4.paradoxwikis.com/images/f/f2/Double_the_Love.jpg',
    dlc: '',
    version: '1.3',
    difficulty: 'VE',
    game: 'eu4',
    guideUrl: '',
    startingConditions:
      '[![No](https://eu4.paradoxwikis.com/images/thumb/5/56/Ledger_no_crop.png/28px-Ledger_no_crop.png)](/File:Ledger_no_crop.png "No") Has no personal unions',
    completionRequirements:
      '[![Personal union.png](https://eu4.paradoxwikis.com/images/thumb/3/39/Personal_union.png/28px-Personal_union.png)](/Personal_union "Personal union") Have 2 or more personal unions',
    notes:
      'This does not mean inheriting two personal unions simultaneously, only that a country starting with no personal unions eventually holds two at the same time. [![Flag of Brandenburg](https://eu4.paradoxwikis.com/images/thumb/e/e3/Brandenburg.png/20px-Brandenburg.png)](/Brandenburg "Brandenburg") [Brandenburg](/Brandenburg "Brandenburg") gains a union over AI [![Flag of Ansbach](https://eu4.paradoxwikis.com/images/thumb/f/f4/Ansbach.png/20px-Ansbach.png)](/Ansbach "Ansbach") [Ansbach](/Ansbach "Ansbach") by event when their starting heir succeeds to the throne, inheriting Ansbach\'s own union over [![Flag of Bayreuth](https://eu4.paradoxwikis.com/images/thumb/9/92/Bayreuth.png/20px-Bayreuth.png)](/Bayreuth "Bayreuth") [Bayreuth](/Bayreuth "Bayreuth"). [![Flag of Muscovy](https://eu4.paradoxwikis.com/images/thumb/4/41/Muscovy.png/20px-Muscovy.png)](/Muscovy "Muscovy") [Muscovy](/Muscovy "Muscovy") can claim the thrones of [![Flag of Tver](https://eu4.paradoxwikis.com/images/thumb/3/35/Tver.png/20px-Tver.png)](/Tver "Tver") [Tver](/Tver "Tver") and [![Flag of Ryazan](https://eu4.paradoxwikis.com/images/thumb/7/7b/Ryazan.png/20px-Ryazan.png)](/Ryazan "Ryazan") [Ryazan](/Ryazan "Ryazan"). [![Flag of Castile](https://eu4.paradoxwikis.com/images/thumb/e/ee/Castile.png/20px-Castile.png)](/Castile "Castile") [Castile](/Castile "Castile") can get a union over [![Flag of Aragon](https://eu4.paradoxwikis.com/images/thumb/6/61/Aragon.png/20px-Aragon.png)](/Aragon "Aragon") [Aragon](/Aragon "Aragon") and [![Flag of Naples](https://eu4.paradoxwikis.com/images/thumb/b/b8/Naples.png/20px-Naples.png)](/Naples "Naples") [Naples](/Naples "Naples") if the [Iberian Wedding](/Iberian_Wedding "Iberian Wedding") occurs while Aragon maintained their union with Naples or got a union over [![Flag of Navarra](https://eu4.paradoxwikis.com/images/thumb/9/9a/Navarra.png/20px-Navarra.png)](/Navarra "Navarra") [Navarra](/Navarra "Navarra") from the event *“[The Death of King Alfonso](/Navarran_events#The_Death_of_King_Alfonso "Navarran events")”*. [![Flag of Castile](https://eu4.paradoxwikis.com/images/thumb/e/ee/Castile.png/20px-Castile.png)](/Castile "Castile") [Castile](/Castile "Castile") can also get a Restoration of Union CB against [![Flag of Portugal](https://eu4.paradoxwikis.com/images/thumb/1/12/Portugal.png/20px-Portugal.png)](/Portugal "Portugal") [Portugal](/Portugal "Portugal") from their missions. [![Flag of Poland](https://eu4.paradoxwikis.com/images/thumb/9/99/Poland.png/20px-Poland.png)](/Poland "Poland") [Poland](/Poland "Poland") and [![Flag of Austria](https://eu4.paradoxwikis.com/images/thumb/7/7f/Austria.png/20px-Austria.png)](/Austria "Austria") [Austria](/Austria "Austria") can get Restoration of Union CBs through events or missions (and Poland can reliably get a union with [![Flag of Lithuania](https://eu4.paradoxwikis.com/images/thumb/d/d9/Lithuania.png/20px-Lithuania.png)](/Lithuania "Lithuania") [Lithuania](/Lithuania "Lithuania") by event).',
  },
  {
    id: 'ach_11',
    name: 'Factionalism',
    description: 'Have 3 different estates in your country with at least 70% influence each.',
    icon: 'https://eu4.paradoxwikis.com/images/d/dc/Factionalism.jpg',
    dlc: '',
    version: '1.14',
    difficulty: 'VE',
    game: 'eu4',
    guideUrl: '',
    startingConditions: '',
    completionRequirements:
      '[![Estate influence](https://eu4.paradoxwikis.com/images/9/98/Estates_influence.png)](/Estates "Estate influence") Have 3 estates with 70% influence',
    notes: '',
  },
  {
    id: 'ach_12',
    name: 'For the Glory',
    description: 'Diplo-annex a vassal.',
    icon: 'https://eu4.paradoxwikis.com/images/a/a7/For_the_Glory.jpg',
    dlc: '',
    version: '1.1',
    difficulty: 'VE',
    game: 'eu4',
    guideUrl: '',
    startingConditions: '',
    completionRequirements:
      '[![Yes](https://eu4.paradoxwikis.com/images/thumb/d/da/Ledger_yes.png/28px-Ledger_yes.png)](/File:Ledger_yes.png "Yes") Have [diplomatically annexed](/Diplo-annex "Diplo-annex") a [vassal](/Vassal "Vassal").',
    notes:
      'Start as [![Flag of Ayutthaya](https://eu4.paradoxwikis.com/images/thumb/9/9d/Ayutthaya.png/20px-Ayutthaya.png)](/Ayutthaya "Ayutthaya") [Ayutthaya](/Ayutthaya "Ayutthaya"), then annex either of their vassals after 10 years. Also easy with [![Flag of Denmark](https://eu4.paradoxwikis.com/images/thumb/6/69/Denmark.png/20px-Denmark.png)](/Denmark "Denmark") [Denmark](/Denmark "Denmark") which can annex its vassal [![Flag of Holstein](https://eu4.paradoxwikis.com/images/thumb/5/5d/Holstein.png/20px-Holstein.png)](/Holstein "Holstein") [Holstein](/Holstein "Holstein").',
  },
  {
    id: 'ach_13',
    name: 'Foul Mouthed',
    description: 'Scornfully insult 10 nations that border you.',
    icon: 'https://eu4.paradoxwikis.com/images/9/9e/Foul_Mouthed.png',
    dlc: '',
    version: '1.26',
    difficulty: 'VE',
    game: 'eu4',
    guideUrl: '',
    startingConditions:
      '*   [![No](https://eu4.paradoxwikis.com/images/thumb/5/56/Ledger_no_crop.png/28px-Ledger_no_crop.png)](/File:Ledger_no_crop.png "No") No more than 1 custom nation exists in the world\n*   [![No](https://eu4.paradoxwikis.com/images/thumb/5/56/Ledger_no_crop.png/28px-Ledger_no_crop.png)](/File:Ledger_no_crop.png "No") Used no more than 201 nation designer points',
    completionRequirements:
      '*   [![Yes](https://eu4.paradoxwikis.com/images/thumb/d/da/Ledger_yes.png/28px-Ledger_yes.png)](/File:Ledger_yes.png "Yes") At least 10 neighbouring countries have the *“Scornfully Insulted”* opinion modifier towards you',
    notes:
      'The 10 countries must all have the opinion modifier at the same time. [![Flag of Lithuania](https://eu4.paradoxwikis.com/images/thumb/d/d9/Lithuania.png/20px-Lithuania.png)](/Lithuania "Lithuania") [Lithuania](/Lithuania "Lithuania") borders 11 nations at the start of game. Very easy in 1.32. Keep giving the burgers the Patronage of the Arts privilege then revoke it and give it again. Giving it three times puts you over 50 prestige. Then scornfully insult 10 of Lithuania\'s 11 neighbours.',
  },
  {
    id: 'ach_14',
    name: 'From Humble Origins',
    description: 'Starting as a custom nation with no more than 50 points, have at least 2000 total development.',
    icon: 'https://eu4.paradoxwikis.com/images/5/59/From_Humble_Origins.jpg',
    dlc: '',
    version: '1.14',
    difficulty: 'VE',
    game: 'eu4',
    guideUrl: '',
    startingConditions:
      '*   [![Nation designer.png](https://eu4.paradoxwikis.com/images/a/ab/Nation_designer.png)](/Nation_designer "Nation designer") Playing as a custom nation\n*   [![Yes](https://eu4.paradoxwikis.com/images/thumb/d/da/Ledger_yes.png/28px-Ledger_yes.png)](/File:Ledger_yes.png "Yes") Only 1 custom nation exists in the world\n*   [![No](https://eu4.paradoxwikis.com/images/thumb/5/56/Ledger_no_crop.png/28px-Ledger_no_crop.png)](/File:Ledger_no_crop.png "No") Used no more than 51 nation designer points',
    completionRequirements:
      '*   [![No](https://eu4.paradoxwikis.com/images/thumb/5/56/Ledger_no_crop.png/28px-Ledger_no_crop.png)](/File:Ledger_no_crop.png "No") *Not* playing as a [released vassal](/Vassal#Release_a_nation "Vassal")\n*   [![Development.png](https://eu4.paradoxwikis.com/images/thumb/a/a4/Development.png/28px-Development.png)](/Development "Development") Has at least 2000 total development',
    notes:
      'It is possible to create a custom nation with 2000 development with only 50 points, although it is very tedious to do so. First, select a capital within Central Asia, be a duchy. Get the worst possible ruler, heir, and consort, and make them as young as possible. Then, you should pick the ideas that cost *negative points*, from most negative points to least (they are found under administrative ideas). You should be left with three idea slots, which you should fill with administrative ideas that cost no points. Finally, take all provinces with the [lowest terrain multiplier](/Nation_designer#Cost "Nation designer") until you have 2000 development. Avoid taking provinces with gold or trade bonuses, since they will cost more. [Example save with such nation](https://pdx.tools/eu4/saves/6z4pd6u4f9au).\n\nCan also be paired with [![For Odin!.jpg](https://eu4.paradoxwikis.com/images/thumb/4/4a/For_Odin%21.jpg/28px-For_Odin%21.jpg)](/File:For_Odin!.jpg) [For Odin!](#For_Odin!) and [![Ideas Guy.jpg](https://eu4.paradoxwikis.com/images/thumb/3/3b/Ideas_Guy.jpg/28px-Ideas_Guy.jpg)](/File:Ideas_Guy.jpg) [Ideas Guy](#Ideas_Guy)',
  },
  {
    id: 'ach_15',
    name: 'Full House',
    description: 'Have 3 Vassals and 2 Marches at the same time.',
    icon: 'https://eu4.paradoxwikis.com/images/d/d7/Full_House.jpg',
    dlc: '',
    version: '1.12',
    difficulty: 'VE',
    game: 'eu4',
    guideUrl: '',
    startingConditions: '',
    completionRequirements:
      '*   [![Icon vassal.png](https://eu4.paradoxwikis.com/images/thumb/4/47/Vassal.png/28px-Vassal.png)](/Vassal "Vassal") Have 3 vassals\n*   [![March icon.png](https://eu4.paradoxwikis.com/images/thumb/1/1d/March_icon.png/28px-March_icon.png)](/March "March") Have 2 marches',
    notes:
      'Can be done immediately as [![Flag of Muscovy](https://eu4.paradoxwikis.com/images/thumb/4/41/Muscovy.png/20px-Muscovy.png)](/Muscovy "Muscovy") [Muscovy](/Muscovy "Muscovy") or [![Flag of Timurids](https://eu4.paradoxwikis.com/images/thumb/6/6a/Timurids.png/20px-Timurids.png)](/Timurids "Timurids") [Timurids](/Timurids "Timurids"). They start with 5 vassals in 1444; simply designate two as marches.',
  },
  {
    id: 'ach_16',
    name: 'Gentle Persuasion',
    description: 'Have a Siege Specialist general win a siege in a province with a fort.',
    icon: 'https://eu4.paradoxwikis.com/images/d/dc/Gentle_Persuasion.jpg',
    dlc: '',
    version: '1.18',
    difficulty: 'VE',
    game: 'eu4',
    guideUrl: '',
    startingConditions:
      '[![Time Icon.png](https://eu4.paradoxwikis.com/images/thumb/7/70/Time_Icon.png/24px-Time_Icon.png)](/Time "Time") No restriction of the start date',
    completionRequirements:
      '[![General.png](https://eu4.paradoxwikis.com/images/thumb/6/6d/General.png/28px-General.png)](/General "General") Won a siege against a fort using a General with the Siege Specialist trait.',
    notes:
      'Easily done as [![Flag of France](https://eu4.paradoxwikis.com/images/thumb/d/de/France.png/20px-France.png)](/France "France") [France](/France "France") as they begin with a siege specialist general.',
  },
  {
    id: 'ach_17',
    name: 'Imposter Syndrome',
    description: 'As Sus, have three countries hostile to you (less than 0 opinion) after they discovered your spy.',
    icon: 'https://eu4.paradoxwikis.com/images/6/6d/Imposter_Syndrome.png',
    dlc: '',
    version: '1.32',
    difficulty: 'VE',
    game: 'eu4',
    guideUrl: '',
    startingConditions:
      '[![Yes](https://eu4.paradoxwikis.com/images/thumb/d/da/Ledger_yes.png/28px-Ledger_yes.png)](/File:Ledger_yes.png "Yes") Playing as [![Flag of Sus](https://eu4.paradoxwikis.com/images/thumb/c/ce/Sus.png/20px-Sus.png)](/Sus "Sus") [Sus](/Sus "Sus")',
    completionRequirements:
      '*   [![Yes](https://eu4.paradoxwikis.com/images/thumb/d/da/Ledger_yes.png/28px-Ledger_yes.png)](/File:Ledger_yes.png "Yes") Is [![Flag of Sus](https://eu4.paradoxwikis.com/images/thumb/c/ce/Sus.png/20px-Sus.png)](/Sus "Sus") [Sus](/Sus "Sus")\n*   Three countries fulfill the following conditions:\n    *   [![Opinion.png](https://eu4.paradoxwikis.com/images/thumb/9/97/Opinion.png/24px-Opinion.png)](/Opinion "Opinion") have a negative opinion of this country\n    *   [![Covert action relation impact](https://eu4.paradoxwikis.com/images/thumb/4/41/Covert_action_relation_impact.png/28px-Covert_action_relation_impact.png)](/Espionage "Covert action relation impact") have the opinion modifier “*Did Covert Actions*” towards this country',
    notes:
      'Being a subject of Morocco does not prevent you from spying on other countries and independence is therefore not required. You simply need to use your two diplomats to build spy network in any country. There is about an 85% chance three nations will discover your spies within the first ten years. If your relations with them are still positive, insult them. Before unpausing the game, search for the countries with starting rulers with Secretive personality which gives [![Foreign spy detection.png](https://eu4.paradoxwikis.com/images/thumb/5/5c/Foreign_spy_detection.png/28px-Foreign_spy_detection.png)](/Foreign_spy_detection "Foreign spy detection") **+20%** foreign spy detection.',
  },
  {
    id: 'ach_18',
    name: "Isn't this the way to India?",
    description: 'Discover the Americas as Castile or Spain.',
    icon: 'https://eu4.paradoxwikis.com/images/4/4d/Isn%27t_this_the_way_to_India%3F.jpg',
    dlc: '',
    version: '1.1',
    difficulty: 'VE',
    game: 'eu4',
    guideUrl: '',
    startingConditions:
      '*   [![Yes](https://eu4.paradoxwikis.com/images/thumb/d/da/Ledger_yes.png/28px-Ledger_yes.png)](/File:Ledger_yes.png "Yes") Playing as [![Flag of Castile](https://eu4.paradoxwikis.com/images/thumb/e/ee/Castile.png/20px-Castile.png)](/Castile "Castile") [Castile](/Castile "Castile")\n*   [![No](https://eu4.paradoxwikis.com/images/thumb/5/56/Ledger_no_crop.png/28px-Ledger_no_crop.png)](/File:Ledger_no_crop.png "No") *Not* using a [random New World](/Random_New_World "Random New World").\n*   [![No](https://eu4.paradoxwikis.com/images/thumb/5/56/Ledger_no_crop.png/28px-Ledger_no_crop.png)](/File:Ledger_no_crop.png "No") Has not discovered both [North America](/North_America "North America") and [South America](/South_America "South America")',
    completionRequirements:
      '[![Explorer](https://eu4.paradoxwikis.com/images/thumb/c/ca/Explorer.png/28px-Explorer.png)](/Military_leaders "Explorer") Has discovered North America and South America',
    notes:
      'Remove the [terra incognita](/Terra_incognita "Terra incognita") of 1 province in the continent of South America and 1 province in the continent of North America.',
  },
  {
    id: 'ach_19',
    name: "It's all about the money",
    description: 'Accumulate 3000 gold.',
    icon: 'https://eu4.paradoxwikis.com/images/3/3f/It%27s_all_about_the_money.jpg',
    dlc: '',
    version: '1.1',
    difficulty: 'VE',
    game: 'eu4',
    guideUrl: '',
    startingConditions: '',
    completionRequirements:
      '[![Gold Icon.png](https://eu4.paradoxwikis.com/images/2/26/Gold_Icon.png)](/Ducats "Ducats") Have **3,000** ducats in the treasury',
    notes: 'Easily done as a big nation by taking loans until reaching the target.',
  },
  {
    id: 'ach_20',
    name: 'Liberty or Death',
    description: 'Start as USA in 1776 bookmark and own all your cores while being at peace.',
    icon: 'https://eu4.paradoxwikis.com/images/7/76/Liberty_or_Death.jpg',
    dlc: '',
    version: '1.3',
    difficulty: 'VE',
    game: 'eu4',
    guideUrl: '',
    startingConditions:
      '*   [![Time Icon.png](https://eu4.paradoxwikis.com/images/thumb/7/70/Time_Icon.png/24px-Time_Icon.png)](/Time "Time") Start on **4 July 1776**\n*   [![Yes](https://eu4.paradoxwikis.com/images/thumb/d/da/Ledger_yes.png/28px-Ledger_yes.png)](/File:Ledger_yes.png "Yes") Playing as [![Flag of United States](https://eu4.paradoxwikis.com/images/thumb/3/32/United_States.png/20px-United_States.png)](/United_States "United States") [United States](/United_States "United States")\n*   [![No](https://eu4.paradoxwikis.com/images/thumb/5/56/Ledger_no_crop.png/28px-Ledger_no_crop.png)](/File:Ledger_no_crop.png "No") *Not* using a [random New World](/Random_New_World "Random New World").',
    completionRequirements:
      '*   [![No](https://eu4.paradoxwikis.com/images/thumb/5/56/Ledger_no_crop.png/28px-Ledger_no_crop.png)](/File:Ledger_no_crop.png "No") Not at war\n*   [![Province icon.png](https://eu4.paradoxwikis.com/images/thumb/1/13/Province_icon.png/28px-Province_icon.png)](/Province "Province") [![Flag of United States](https://eu4.paradoxwikis.com/images/thumb/3/32/United_States.png/20px-United_States.png)](/United_States "United States") [United States](/United_States "United States"): Owns all [core provinces](/Core_province "Core province")',
    notes:
      'Can be done easily by signing a peace treaty and accepting any demands. Then revoke all the cores of the provinces given away.',
  },
  {
    id: 'ach_21',
    name: 'Krabater',
    description: 'Form the nation of Croatia and station a unit of cavalry in Stockholm.',
    icon: 'https://eu4.paradoxwikis.com/images/a/ae/Krabater.png',
    dlc: '',
    version: '1.9',
    difficulty: 'VE',
    game: 'eu4',
    guideUrl: '',
    startingConditions: '',
    completionRequirements:
      '*   [![No](https://eu4.paradoxwikis.com/images/thumb/5/56/Ledger_no_crop.png/28px-Ledger_no_crop.png)](/File:Ledger_no_crop.png "No") *Not* playing as a [released vassal](/Vassal#Release_a_nation "Vassal")\n*   [![Yes](https://eu4.paradoxwikis.com/images/thumb/d/da/Ledger_yes.png/28px-Ledger_yes.png)](/File:Ledger_yes.png "Yes") Is [![Flag of Croatia](https://eu4.paradoxwikis.com/images/thumb/9/94/Croatia.png/20px-Croatia.png)](/Croatia "Croatia") [Croatia](/Croatia "Croatia")\n*   [![Cavalry.png](https://eu4.paradoxwikis.com/images/thumb/1/15/Cavalry.png/28px-Cavalry.png)](/Cavalry "Cavalry") Station a unit of cavalry in Stockholm.',
    notes:
      ' [![Flag of Croatia](https://eu4.paradoxwikis.com/images/thumb/9/94/Croatia.png/20px-Croatia.png)](/Croatia "Croatia") [Croatia](/Croatia "Croatia") doesn\'t actually have to be formed for the achievement. All you have to do to get this achievement is to start as Croatia, ask for military access from Sweden, load your starting cavalry regiment onto a transport, then sail up next to Stockholm and move your cavalry onto it.',
  },
  {
    id: 'ach_22',
    name: 'Marshy March',
    description: 'Have a march with at least two marsh provinces.',
    icon: 'https://eu4.paradoxwikis.com/images/5/58/Marshy_March.jpg',
    dlc: '',
    version: '1.8',
    difficulty: 'VE',
    game: 'eu4',
    guideUrl: '',
    startingConditions: '',
    completionRequirements:
      '[![March icon.png](https://eu4.paradoxwikis.com/images/thumb/1/1d/March_icon.png/28px-March_icon.png)](/March "March") Have a march with at least two [marsh](/Marsh "Marsh") provinces',
    notes:
      'Easily done as [![Flag of Mushasha](https://eu4.paradoxwikis.com/images/thumb/0/0d/Mushasha.png/20px-Mushasha.png)](/Mushasha "Mushasha") [Mushasha](/Mushasha "Mushasha"), simply release [![Flag of Basra](https://eu4.paradoxwikis.com/images/thumb/8/86/Basra.png/20px-Basra.png)](/Basra "Basra") [Basra](/Basra "Basra") and make them a march.',
  },
  {
    id: 'ach_23',
    name: 'Narcissism',
    description: 'Name a general after yourself and lead your army to victory.',
    icon: 'https://eu4.paradoxwikis.com/images/1/1f/Narcissism.png',
    dlc: '',
    version: '1.23',
    difficulty: 'VE',
    game: 'eu4',
    guideUrl: '',
    startingConditions: '',
    completionRequirements:
      'Either\n\n*   [![Yes](https://eu4.paradoxwikis.com/images/thumb/d/da/Ledger_yes.png/28px-Ledger_yes.png)](/File:Ledger_yes.png "Yes") An army is led by a general with the player\'s Steam name\n*   [![Yes](https://eu4.paradoxwikis.com/images/thumb/d/da/Ledger_yes.png/28px-Ledger_yes.png)](/File:Ledger_yes.png "Yes") Win a battle with a general with the player\'s Steam name\n\nor\n\n*   [![General.png](https://eu4.paradoxwikis.com/images/thumb/6/6d/General.png/28px-General.png)](/General "General") Has a leader named after one of the following VIPs - “DDRJake”, “Duplo”, “neondt”, “StarNaN”, “The French Paradox”, “Bus”, “Groogy”, “mikesc”, “PDJR\\_Alastorn”, “Ofaloaf”, “Caligula Caesar”, “Imse”, “KaiserJohan”, “Hawky”, “Johan”, “Pavía”, “Aldaron”, “SaintDaveUK”, “Gnivom”, “Big Boss”, “Comrade Flan”, “CzerstfyChlep”, “Pintu” or “Rossarness”',
    notes:
      'Is only visible with the [![Cradle of Civilization.png](https://eu4.paradoxwikis.com/images/thumb/2/23/Cradle_of_Civilization.png/28px-Cradle_of_Civilization.png)](/Cradle_of_Civilization "Cradle of Civilization") Cradle of Civilization, but can be completed without that DLC by editing the player\'s Steam name to match the name of a general. Or by creating a custom nation with a monarch with the exact name as the player\'s Steam name and make him a general and win a battle with him. Or by using “Caligula” as the first name and “Caesar” as the dynasty of a ruler in a custom nation (or one of the other two word names).',
  },
  {
    id: 'ach_24',
    name: 'Not so sad a state...',
    description: 'As Portugal, have a colony in Brazil and in Africa.',
    icon: 'https://eu4.paradoxwikis.com/images/9/9b/Not_so_sad_a_state....jpg',
    dlc: '',
    version: '1.1',
    difficulty: 'VE',
    game: 'eu4',
    guideUrl: '',
    startingConditions:
      '*   [![Yes](https://eu4.paradoxwikis.com/images/thumb/d/da/Ledger_yes.png/28px-Ledger_yes.png)](/File:Ledger_yes.png "Yes") Playing as [![Flag of Portugal](https://eu4.paradoxwikis.com/images/thumb/1/12/Portugal.png/20px-Portugal.png)](/Portugal "Portugal") [Portugal](/Portugal "Portugal")\n*   [![No](https://eu4.paradoxwikis.com/images/thumb/5/56/Ledger_no_crop.png/28px-Ledger_no_crop.png)](/File:Ledger_no_crop.png "No") *Not* using a [random New World](/Random_New_World "Random New World")',
    completionRequirements:
      '[![Colonists.png](https://eu4.paradoxwikis.com/images/thumb/3/34/Colonists.png/28px-Colonists.png)](/Colonist "Colonist") Have an unfinished colony in both [Brazil](/South_American_regions#Brazil "South American regions") and in the continent of [Africa](/Africa "Africa")',
    notes:
      'Establish two colonies in Brazil and in Africa. Keep in mind the colonies need to be established, not finished, so this can be done extremely quickly after unlocking the first two exploration ideas.',
  },
  {
    id: 'ach_25',
    name: 'Populists in Government',
    description: 'Switch government type through government reforms.',
    icon: 'https://eu4.paradoxwikis.com/images/d/dc/Populists_in_Government.png',
    dlc: '',
    version: '1.26',
    difficulty: 'VE',
    game: 'eu4',
    guideUrl: '',
    startingConditions:
      '*   [![No](https://eu4.paradoxwikis.com/images/thumb/5/56/Ledger_no_crop.png/28px-Ledger_no_crop.png)](/File:Ledger_no_crop.png "No") No more than 1 custom nation exists in the world\n*   [![No](https://eu4.paradoxwikis.com/images/thumb/5/56/Ledger_no_crop.png/28px-Ledger_no_crop.png)](/File:Ledger_no_crop.png "No") Used no more than 201 nation designer points',
    completionRequirements:
      '[![Yes](https://eu4.paradoxwikis.com/images/thumb/d/da/Ledger_yes.png/28px-Ledger_yes.png)](/File:Ledger_yes.png "Yes") Has switched government type via a government reform',
    notes:
      'Fastest as a [tribal](/Tribal_government "Tribal government") nation, as only 5 reforms are needed to change government type.',
  },
  {
    id: 'ach_26',
    name: 'Pyramid of Skulls',
    description: 'As a Steppe Horde, raze a province with at least 30 development.',
    icon: 'https://eu4.paradoxwikis.com/images/0/09/Pyramid_of_Skulls.jpg',
    dlc: '',
    version: '1.14',
    difficulty: 'E',
    game: 'eu4',
    guideUrl: '',
    startingConditions:
      '[![Tab domestic government.png](https://eu4.paradoxwikis.com/images/thumb/f/ff/Tab_domestic_government.png/28px-Tab_domestic_government.png)](/Government "Government") Government type is [![Government steppe horde.png](https://eu4.paradoxwikis.com/images/thumb/a/a8/Government_native.png/28px-Government_native.png)](/Steppe_nomads "Steppe nomads") *Steppe Nomads*',
    completionRequirements:
      '*   [![Government steppe horde.png](https://eu4.paradoxwikis.com/images/thumb/a/a8/Government_native.png/28px-Government_native.png)](/Steppe_nomads "Steppe nomads") Is steppe nomad\n*   [![Yes](https://eu4.paradoxwikis.com/images/thumb/d/da/Ledger_yes.png/28px-Ledger_yes.png)](/File:Ledger_yes.png "Yes") Razed a province of at least 30 development.',
    notes:
      'The eligible provinces in 1444 are Nanjing (33), Beijing (31) and Constantinople after Ottoman conquest (34), although it is much easier to conquer a good province from a minor, develop it to 30, give it back, conquer again and finally raze it. The easiest way is to start as [![Flag of Uzbek](https://eu4.paradoxwikis.com/images/thumb/7/73/Uzbek.png/20px-Uzbek.png)](/Uzbek "Uzbek") [Uzbek](/Uzbek "Uzbek"), increase development in Qaraqalpak (440), release [![Flag of Khiva](https://eu4.paradoxwikis.com/images/thumb/6/60/Khiva.png/20px-Khiva.png)](/Khiva "Khiva") [Khiva](/Khiva "Khiva") as vassal (one province), declare war and conquer the province. This can even be done without a war by giving a 30 dev province to a vassal an then seizing it. [![Flag of Uzbek](https://eu4.paradoxwikis.com/images/thumb/7/73/Uzbek.png/20px-Uzbek.png)](/Uzbek "Uzbek") [Uzbek](/Uzbek "Uzbek") can use Kypshak (476) for this, because it starts with 18 dev and then give it to [![Flag of Sibir](https://eu4.paradoxwikis.com/images/thumb/7/79/Sibir.png/20px-Sibir.png)](/Sibir "Sibir") [Sibir](/Sibir "Sibir"), because they are easy to keep loyal.',
  },
  {
    id: 'ach_27',
    name: 'Queen of Conquest',
    description: 'Conquer land while in a Queen Regency.',
    icon: 'https://eu4.paradoxwikis.com/images/1/1e/Queen_of_Conquest.jpg',
    dlc: '',
    version: '1.18',
    difficulty: 'VE',
    game: 'eu4',
    guideUrl: '',
    startingConditions: '',
    completionRequirements:
      '*   [![Yes](https://eu4.paradoxwikis.com/images/thumb/d/da/Ledger_yes.png/28px-Ledger_yes.png)](/File:Ledger_yes.png "Yes") Have a consort regency with a female consort\n*   [![Province icon.png](https://eu4.paradoxwikis.com/images/thumb/1/13/Province_icon.png/28px-Province_icon.png)](/Province "Province") Conquered land',
    notes: '',
  },
  {
    id: 'ach_28',
    name: 'Seriously?!',
    description: 'Kill 10,000 men in one battle.',
    icon: 'https://eu4.paradoxwikis.com/images/4/4e/Seriously%3F%21.jpg',
    dlc: '',
    version: '1.1',
    difficulty: 'VE',
    game: 'eu4',
    guideUrl: '',
    startingConditions: '',
    completionRequirements:
      '[![Yes](https://eu4.paradoxwikis.com/images/thumb/d/da/Ledger_yes.png/28px-Ledger_yes.png)](/File:Ledger_yes.png "Yes") Have killed 10 000 men in one battle.',
    notes: '',
  },
  {
    id: 'ach_29',
    name: 'Subsidize my Love',
    description: 'Subsidize 3 different allies at least 50% of their monthly income without running a deficit.',
    icon: 'https://eu4.paradoxwikis.com/images/a/af/Subsidize_my_Love.jpg',
    dlc: '',
    version: '1.12',
    difficulty: 'VE',
    game: 'eu4',
    guideUrl: '',
    startingConditions: '',
    completionRequirements:
      '*   [![No](https://eu4.paradoxwikis.com/images/thumb/5/56/Ledger_no_crop.png/28px-Ledger_no_crop.png)](/File:Ledger_no_crop.png "No") Does not have negative monthly income\n*   [![Yes](https://eu4.paradoxwikis.com/images/thumb/d/da/Ledger_yes.png/28px-Ledger_yes.png)](/File:Ledger_yes.png "Yes") Have 3 [allies](/Allies "Allies") that are [subsidized](/Subsidies "Subsidies") at least 50%.',
    notes:
      'The subsidies also count as income, so the subsidies have to be as high as the total income before the subsidies. The total income can be seen in the Income Comparison page in the ledger. The Country page doesn\'t show all income sources.\n\nEasily done as [![Flag of England](https://eu4.paradoxwikis.com/images/thumb/2/21/England.png/20px-England.png)](/England "England") [England](/England "England") with the Irish minors or as [![Flag of Austria](https://eu4.paradoxwikis.com/images/thumb/7/7f/Austria.png/20px-Austria.png)](/Austria "Austria") [Austria](/Austria "Austria") with HRE OPMs.',
  },
  {
    id: 'ach_30',
    name: 'Tear Down This Wall',
    description: 'Use Artillery Barrage on Berlin.',
    icon: 'https://eu4.paradoxwikis.com/images/c/c4/Tear_Down_This_Wall.png',
    dlc: '',
    version: '1.20',
    difficulty: 'VE',
    game: 'eu4',
    guideUrl: '',
    startingConditions: '',
    completionRequirements:
      '[![Yes](https://eu4.paradoxwikis.com/images/thumb/d/da/Ledger_yes.png/28px-Ledger_yes.png)](/File:Ledger_yes.png "Yes") Has used artillery barrage on Berlin.',
    notes:
      'As Brandenburg, wait until you have military technology 7. Recruit at least 3 units of artillery, mothball the fort of Berlin then tank your legitimacy by dishineriting heirs and abdicating. Pretender rebels will siege it down, you can then attack and barrage it.',
  },
  {
    id: 'ach_31',
    name: 'That is mine!',
    description: 'Conquer a province.',
    icon: 'https://eu4.paradoxwikis.com/images/f/f7/That_is_mine%21.jpg',
    dlc: '',
    version: '1.1',
    difficulty: 'VE',
    game: 'eu4',
    guideUrl: '',
    startingConditions: '',
    completionRequirements:
      '[![Yes](https://eu4.paradoxwikis.com/images/thumb/d/da/Ledger_yes.png/28px-Ledger_yes.png)](/File:Ledger_yes.png "Yes") Have conquered one new province.',
    notes: '',
  },
  {
    id: 'ach_32',
    name: "That's a Grand Army",
    description: "Build up your army to your country's maximum army forcelimit.",
    icon: 'https://eu4.paradoxwikis.com/images/8/83/That%27s_a_Grand_Army.jpg',
    dlc: '',
    version: '1.1',
    difficulty: 'VE',
    game: 'eu4',
    guideUrl: '',
    startingConditions:
      '[![No](https://eu4.paradoxwikis.com/images/thumb/5/56/Ledger_no_crop.png/28px-Ledger_no_crop.png)](/File:Ledger_no_crop.png "No") [Army](/Army "Army") size isn\'t **99%** of maximum [force limit](/Force_limit "Force limit")',
    completionRequirements:
      '[![Land forcelimit.png](https://eu4.paradoxwikis.com/images/thumb/9/9f/Land_forcelimit.png/28px-Land_forcelimit.png)](/Land_force_limit "Land force limit") Have an army size that is **99%** of maximum force limit',
    notes:
      'This achievement is not awarded if the player plays a nation that already is at or is over its maximum force limit.',
  },
  {
    id: 'ach_33',
    name: "That's a Grand Navy",
    description: "Build up your navy to your country's maximum navy forcelimit.",
    icon: 'https://eu4.paradoxwikis.com/images/d/da/That%27s_a_Grand_Navy.jpg',
    dlc: '',
    version: '1.1',
    difficulty: 'VE',
    game: 'eu4',
    guideUrl: '',
    startingConditions:
      '[![No](https://eu4.paradoxwikis.com/images/thumb/5/56/Ledger_no_crop.png/28px-Ledger_no_crop.png)](/File:Ledger_no_crop.png "No") [Navy](/Navy "Navy") size isn\'t **99%** of maximum [force limit](/Force_limit "Force limit")',
    completionRequirements:
      '[![Naval forcelimit modifier.png](https://eu4.paradoxwikis.com/images/thumb/0/01/Naval_force_limit_modifier.png/28px-Naval_force_limit_modifier.png)](/Naval_force_limit_modifier "Naval force limit modifier") Have a navy size that is **99%** of maximum force limit',
    notes: '',
  },
  {
    id: 'ach_34',
    name: 'The Continuation of Diplomacy',
    description: 'Successfully use Threaten War to gain a province from another nation.',
    icon: 'https://eu4.paradoxwikis.com/images/f/f9/The_Continuation_of_Diplomacy.jpg',
    dlc: '',
    version: '1.14',
    difficulty: 'VE',
    game: 'eu4',
    guideUrl: '',
    startingConditions: '',
    completionRequirements:
      '[![Yes](https://eu4.paradoxwikis.com/images/thumb/d/da/Ledger_yes.png/28px-Ledger_yes.png)](/File:Ledger_yes.png "Yes") Have acquired a province through threatening war.',
    notes:
      'Easily done as [![Flag of Ming](https://eu4.paradoxwikis.com/images/thumb/a/a5/Ming.png/20px-Ming.png)](/Ming "Ming") [Ming](/Ming "Ming") after fabricating a claim on either [![Flag of Kham](https://eu4.paradoxwikis.com/images/thumb/9/91/Kham.png/20px-Kham.png)](/Kham "Kham") [Kham](/Kham "Kham") or [![Flag of Korchin](https://eu4.paradoxwikis.com/images/thumb/f/f2/Korchin.png/20px-Korchin.png)](/Korchin "Korchin") [Korchin](/Korchin "Korchin").',
  },
  {
    id: 'ach_35',
    name: 'The Six Nations',
    description: 'Form a Federation of at least six nations as the Iroquois.',
    icon: 'https://eu4.paradoxwikis.com/images/9/97/The_Six_Nations.jpg',
    dlc: '',
    version: '1.12',
    difficulty: 'VE',
    game: 'eu4',
    guideUrl: '',
    startingConditions:
      '[![Primary culture.png](https://eu4.paradoxwikis.com/images/thumb/e/e1/Primary_culture.png/28px-Primary_culture.png)](/Primary_culture "Primary culture") Primary culture is *Iroquois*',
    completionRequirements:
      '*   [![No](https://eu4.paradoxwikis.com/images/thumb/5/56/Ledger_no_crop.png/28px-Ledger_no_crop.png)](/File:Ledger_no_crop.png "No") *Not* playing as a [released vassal](/Vassal#Release_a_nation "Vassal")\n*   [![Primary culture.png](https://eu4.paradoxwikis.com/images/thumb/e/e1/Primary_culture.png/28px-Primary_culture.png)](/Primary_culture "Primary culture") Primary culture is *Iroquois*\n*   [![Yes](https://eu4.paradoxwikis.com/images/thumb/d/da/Ledger_yes.png/28px-Ledger_yes.png)](/File:Ledger_yes.png "Yes") Is leader of a [federation](/Native_council#Federation "Native council") with six nations in it',
    notes:
      'Easily done as [![Flag of Onondaga](https://eu4.paradoxwikis.com/images/thumb/1/1c/Onondaga.png/20px-Onondaga.png)](/Onondaga "Onondaga") [Onondaga](/Onondaga "Onondaga") by inviting a nation to your federation on day one.',
  },
  {
    id: 'ach_36',
    name: 'This is My Faith',
    description: 'Convert to Protestantism and unlock 3 Aspects of Faith.',
    icon: 'https://eu4.paradoxwikis.com/images/8/89/This_is_My_Faith.jpg',
    dlc: '',
    version: '1.12',
    difficulty: 'VE',
    game: 'eu4',
    guideUrl: '',
    startingConditions: '',
    completionRequirements:
      '*   [![Protestantism](https://eu4.paradoxwikis.com/images/thumb/0/0d/Protestant.png/28px-Protestant.png)](/Protestant "Protestant") Is Protestant\n*   [![Yes](https://eu4.paradoxwikis.com/images/thumb/d/da/Ledger_yes.png/28px-Ledger_yes.png)](/File:Ledger_yes.png "Yes") Have 3 [aspects of faith](/Aspects_of_faith "Aspects of faith")',
    notes:
      'Bohemia, the nations in the British Isles and those in Scandinavia start in a great position for this achievement.',
  },
  {
    id: 'ach_37',
    name: 'Three Trivial Tributary Tribes',
    description: 'Have 3 Tribal States as Tributaries.',
    icon: 'https://eu4.paradoxwikis.com/images/b/b7/Three_Trivial_Tributary_Tribes.png',
    dlc: '',
    version: '1.20',
    difficulty: 'VE',
    game: 'eu4',
    guideUrl: '',
    startingConditions:
      '[![Yes](https://eu4.paradoxwikis.com/images/thumb/d/da/Ledger_yes.png/28px-Ledger_yes.png)](/File:Ledger_yes.png "Yes") [Religious group](/Religious_group "Religious group") is *Eastern* or government type is [![Government steppe horde.png](https://eu4.paradoxwikis.com/images/thumb/a/a8/Government_native.png/28px-Government_native.png)](/Steppe_nomads "Steppe nomads") *Steppe Nomads*.',
    completionRequirements:
      '[![Yes](https://eu4.paradoxwikis.com/images/thumb/d/da/Ledger_yes.png/28px-Ledger_yes.png)](/File:Ledger_yes.png "Yes") Has 3 Tributary States with government type [tribal](/Tribal_government "Tribal government") *or* [native](/Native_council "Native council")',
    notes:
      'Easily done as [![Flag of Ming](https://eu4.paradoxwikis.com/images/thumb/a/a5/Ming.png/20px-Ming.png)](/Ming "Ming") [Ming](/Ming "Ming") at the start of the campaign. Simply loading up an ironman campaign of Ming will immediately grant the achievement, as they meet the requirements on 11 November 1444. The possible first government reforms include, but are not limited to: *Steppe Nomads*, *Tribal Despotism*, *Tribal Monarchy*, *Tribal Federation*, *Tribal Democracy*, and *Siberian Clan Council*. The government type mapmode can be used to identify countries of the correct government type.',
  },
  {
    id: 'ach_38',
    name: 'Time Bandit',
    description: 'Successfully steal a map from another nation.',
    icon: 'https://eu4.paradoxwikis.com/images/1/13/Time_Bandit.jpg',
    dlc: '',
    version: '1.16',
    difficulty: 'VE',
    game: 'eu4',
    guideUrl: '',
    startingConditions: '',
    completionRequirements:
      '[![Yes](https://eu4.paradoxwikis.com/images/thumb/d/da/Ledger_yes.png/28px-Ledger_yes.png)](/File:Ledger_yes.png "Yes") Stole a map from another country.',
    notes: '',
  },
  {
    id: 'ach_39',
    name: 'True Catholic',
    description: 'Control three Cardinals.',
    icon: 'https://eu4.paradoxwikis.com/images/9/97/True_Catholic.jpg',
    dlc: '',
    version: '1.1',
    difficulty: 'VE',
    game: 'eu4',
    guideUrl: '',
    startingConditions:
      '[![No](https://eu4.paradoxwikis.com/images/thumb/5/56/Ledger_no_crop.png/28px-Ledger_no_crop.png)](/File:Ledger_no_crop.png "No") Have less than 2 controlled cardinals',
    completionRequirements:
      '[![Cardinal icon.png](https://eu4.paradoxwikis.com/images/thumb/b/be/Cardinal_icon.png/28px-Cardinal_icon.png)](/Cardinal "Cardinal") Have 3 or more controlled cardinals',
    notes:
      'The achievement only triggers if the number of player controlled cardinals is greater than or equal to (≥) 3. If the player starts with 2 or more cardinals the achievement will not be awarded. Easily done as Spain. Can be done immediately by starting as the Papal States and bribing 3 cardinals into your lands.',
  },
  {
    id: 'ach_40',
    name: 'Truly Divine Ruler',
    description: 'Get a 5/5/5 Ruler or higher.',
    icon: 'https://eu4.paradoxwikis.com/images/3/3f/Truly_Divine_Ruler.jpg',
    dlc: '',
    version: '1.1',
    difficulty: 'VE',
    game: 'eu4',
    guideUrl: '',
    startingConditions:
      '[![All power costs.png](https://eu4.paradoxwikis.com/images/thumb/0/0f/All_power_costs.png/28px-All_power_costs.png)](/All_power_costs "All power costs") Starting [ruler](/Ruler "Ruler") has less than **5** skill in any category',
    completionRequirements:
      '[![All power costs.png](https://eu4.paradoxwikis.com/images/thumb/0/0f/All_power_costs.png/28px-All_power_costs.png)](/All_power_costs "All power costs") Have a ruler that has at least **5** skill in every category',
    notes:
      'Easiest way to obtain this achievement is starting with [![Flag of Poland](https://eu4.paradoxwikis.com/images/thumb/9/99/Poland.png/20px-Poland.png)](/Poland "Poland") [Poland](/Poland "Poland") and appoint a local noble ruler for the event.\n\nAlternatively, start as a republic and re-elect 4 times.',
  },
  {
    id: 'ach_41',
    name: 'Until death do us apart',
    description: 'Secure a Royal Marriage with another country.',
    icon: 'https://eu4.paradoxwikis.com/images/6/6b/Until_death_do_us_apart.jpg',
    dlc: '',
    version: '1.1',
    difficulty: 'VE',
    game: 'eu4',
    guideUrl: '',
    startingConditions:
      '[![No](https://eu4.paradoxwikis.com/images/thumb/5/56/Ledger_no_crop.png/28px-Ledger_no_crop.png)](/File:Ledger_no_crop.png "No") Is *not* in a royal marriage',
    completionRequirements:
      '[![Royalmarriage.png](https://eu4.paradoxwikis.com/images/thumb/2/22/Royalmarriage.png/28px-Royalmarriage.png)](/Royal_marriage "Royal marriage") Have a royal marriage',
    notes: "Note that it won't trigger if the player already has one or more royal marriages at game start.",
  },
  {
    id: 'ach_42',
    name: 'Victorious!',
    description: 'Win a war.',
    icon: 'https://eu4.paradoxwikis.com/images/d/d5/Victorious%21.jpg',
    dlc: '',
    version: '1.1',
    difficulty: 'VE',
    game: 'eu4',
    guideUrl: '',
    startingConditions: '',
    completionRequirements:
      '[![Yes](https://eu4.paradoxwikis.com/images/thumb/d/da/Ledger_yes.png/28px-Ledger_yes.png)](/File:Ledger_yes.png "Yes") Has won a war.',
    notes: 'Win a [war](/War "War") as the main participant.',
  },
  {
    id: 'ach_43',
    name: "Voltaire's Nightmare",
    description: 'Have at least 100 countries in the HRE.',
    icon: 'https://eu4.paradoxwikis.com/images/1/1c/Voltaire%27s_Nightmare.png',
    dlc: '',
    version: '1.23',
    difficulty: 'M',
    game: 'eu4',
    guideUrl: '',
    startingConditions:
      '*   [![No](https://eu4.paradoxwikis.com/images/thumb/5/56/Ledger_no_crop.png/28px-Ledger_no_crop.png)](/File:Ledger_no_crop.png "No") No more than 1 custom nation exists in the world\n*   [![No](https://eu4.paradoxwikis.com/images/thumb/5/56/Ledger_no_crop.png/28px-Ledger_no_crop.png)](/File:Ledger_no_crop.png "No") Used no more than 201 nation designer points if playing as a custom nation',
    completionRequirements:
      '[![Yes](https://eu4.paradoxwikis.com/images/thumb/d/da/Ledger_yes.png/28px-Ledger_yes.png)](/File:Ledger_yes.png "Yes") At least 100 countries are members of the Holy Roman Empire',
    notes:
      'Create a custom nation with your capital in the HRE (you could go for Triest) and give yourself provinces with releasable tags within and adjacent to the empire. Add all provinces to the empire and release all tags to instantly unlock the achievement.\n\nExpand\n\nPossible provinces are Dauphiné, Narbonnais, Rouergue, Auvergne, Castellón, Mallorca, Girona, Sasser, Corsica, Parma, Modena, Spoleto, Perugia, Bari, Friuli, Padova, Spalato, Corfu, Arta, Atene, Nasso, Rhodes, Creta, Sugla, Lienz, Unterkärnten, Hradiste, Ruppin, Rügen, Trencsén and Dolní Lužice.',
  },
  {
    id: 'ach_44',
    name: 'A Pile of Gold',
    description: 'Own 10 provinces which produce gold.',
    icon: 'https://eu4.paradoxwikis.com/images/d/dd/A_Pile_of_Gold.jpg',
    dlc: '',
    version: '1.6',
    difficulty: 'E',
    game: 'eu4',
    guideUrl: '',
    startingConditions: '',
    completionRequirements:
      '[![Gold](https://eu4.paradoxwikis.com/images/thumb/1/10/Gold.png/28px-Gold.png)](/Trade_goods#Gold "Gold") Own 10 Gold provinces',
    notes:
      'In 1444, the Niger region has 3, the South Africa and East Africa regions have 5, the Peru and Upper Peru regions have 6, and the Mexico region has 10, so it is easiest as a nation like Aztec. Does not require provinces to be cored. Provinces owned by [colonial nations](/Colonial_nation "Colonial nation") do *not* count (but playing as a released colonial nation does).\n\nExpand\n\n[![](https://eu4.paradoxwikis.com/images/thumb/a/ad/Goldmap.png/130px-Goldmap.png)](/File:Goldmap.png)\n\n[](/File:Goldmap.png "Enlarge")\n\nAll pre-determined gold provinces',
  },
  {
    id: 'ach_45',
    name: 'Absolutely',
    description: 'Gain 100 Absolutism.',
    icon: 'https://eu4.paradoxwikis.com/images/2/29/Absolutely.png',
    dlc: '',
    version: '1.20',
    difficulty: 'VE',
    game: 'eu4',
    guideUrl: '',
    startingConditions: '',
    completionRequirements:
      '[![Absolutism.png](https://eu4.paradoxwikis.com/images/thumb/c/c2/Absolutism.png/28px-Absolutism.png)](/Absolutism "Absolutism") Have 100 [absolutism](/Absolutism "Absolutism")',
    notes:
      '*    [![Flag of Sweden](https://eu4.paradoxwikis.com/images/thumb/9/98/Sweden.png/20px-Sweden.png)](/Sweden "Sweden") [Sweden](/Sweden "Sweden") and [![Flag of Prussia](https://eu4.paradoxwikis.com/images/thumb/2/28/Prussia.png/20px-Prussia.png)](/Prussia "Prussia") [Prussia](/Prussia "Prussia") have events to increase their maximum absolutism. [![Flag of France](https://eu4.paradoxwikis.com/images/thumb/d/de/France.png/20px-France.png)](/France "France") [France](/France "France"), [![Flag of Portugal](https://eu4.paradoxwikis.com/images/thumb/1/12/Portugal.png/20px-Portugal.png)](/Portugal "Portugal") [Portugal](/Portugal "Portugal"), [![Flag of Sweden](https://eu4.paradoxwikis.com/images/thumb/9/98/Sweden.png/20px-Sweden.png)](/Sweden "Sweden") [Sweden](/Sweden "Sweden"), and [![Flag of Russia](https://eu4.paradoxwikis.com/images/thumb/e/ee/Russia.png/20px-Russia.png)](/Russia "Russia") [Russia](/Russia "Russia") have events, decisions, or ideas that give yearly absolutism gain.\n\nEvery monarchy can achieve this with the base of 60 + 15 from 100% crownland + 25 from the three relevant government reforms.',
  },
  {
    id: 'ach_46',
    name: "Abu Bakr II's Ambition",
    description: 'Start as Mali and have 4 Colonial Subjects in South America.',
    icon: 'https://eu4.paradoxwikis.com/images/b/b1/Abu_Bakr_II%E2%80%99s_Ambition.jpg',
    dlc: '',
    version: '1.18',
    difficulty: 'M',
    game: 'eu4',
    guideUrl: '',
    startingConditions:
      '[![Yes](https://eu4.paradoxwikis.com/images/thumb/d/da/Ledger_yes.png/28px-Ledger_yes.png)](/File:Ledger_yes.png "Yes") Playing as [![Flag of Mali](https://eu4.paradoxwikis.com/images/thumb/f/f0/Mali.png/20px-Mali.png)](/Mali "Mali") [Mali](/Mali "Mali")',
    completionRequirements:
      '[![Subject colony icon.png](https://eu4.paradoxwikis.com/images/thumb/d/de/Subject_colony_icon.png/28px-Subject_colony_icon.png)](/Colonial_nation "Colonial nation") Have 4 colonial nations based in the continent of [South America](/South_America "South America")',
    notes:
      'All 4 colonies must have their capital on the South American continent.\n\nColonial Colombia is partially in South America and North America and colonizing the NA lands may result in their capital being in NA.',
  },
  {
    id: 'ach_47',
    name: 'Aggressive Expander',
    description: 'Own 200 provinces.',
    icon: 'https://eu4.paradoxwikis.com/images/8/89/Aggressive_Expander.jpg',
    dlc: '',
    version: '1.1',
    difficulty: 'M',
    game: 'eu4',
    guideUrl: 'https://eu4.paradoxwikis.com/Aggressive_Expander',
    startingConditions: '',
    completionRequirements:
      '[![Province icon.png](https://eu4.paradoxwikis.com/images/thumb/1/13/Province_icon.png/28px-Province_icon.png)](/Province "Province") Own 200 [provinces](/Province "Province").',
    notes:
      'Easiest to do as [![Flag of Ming](https://eu4.paradoxwikis.com/images/thumb/a/a5/Ming.png/20px-Ming.png)](/Ming "Ming") [Ming](/Ming "Ming").',
  },
  {
    id: 'ach_48',
    name: 'All belongs to Mother Russia',
    description: 'Start as a country of Russian culture and form Russia.',
    icon: 'https://eu4.paradoxwikis.com/images/5/56/All_belongs_to_Mother_Russia.jpg',
    dlc: '',
    version: '1.1',
    difficulty: 'E',
    game: 'eu4',
    guideUrl: '',
    startingConditions:
      '[![Primary culture.png](https://eu4.paradoxwikis.com/images/thumb/e/e1/Primary_culture.png/28px-Primary_culture.png)](/Primary_culture "Primary culture") Primary culture is either *Muscovite*, *Ryazanian* or *Novgorodian*',
    completionRequirements:
      '[![Yes](https://eu4.paradoxwikis.com/images/thumb/d/da/Ledger_yes.png/28px-Ledger_yes.png)](/File:Ledger_yes.png "Yes") Is [![Flag of Russia](https://eu4.paradoxwikis.com/images/thumb/e/ee/Russia.png/20px-Russia.png)](/Russia "Russia") [Russia](/Russia "Russia")',
    notes:
      'Easiest to do as [![Flag of Muscovy](https://eu4.paradoxwikis.com/images/thumb/4/41/Muscovy.png/20px-Muscovy.png)](/Muscovy "Muscovy") [Muscovy](/Muscovy "Muscovy").',
  },
  {
    id: 'ach_49',
    name: 'An Industrial Evolution',
    description:
      'As Great Britain, own all of England as core provinces and have at least 25 development in each province there.',
    icon: 'https://eu4.paradoxwikis.com/images/a/ac/An_Industrial_Evolution.jpg',
    dlc: '',
    version: '1.12',
    difficulty: 'E',
    game: 'eu4',
    guideUrl: '',
    startingConditions: '',
    completionRequirements:
      '*   [![No](https://eu4.paradoxwikis.com/images/thumb/5/56/Ledger_no_crop.png/28px-Ledger_no_crop.png)](/File:Ledger_no_crop.png "No") *Not* as a [released vassal](/Vassal#Release_a_nation "Vassal").\n*   [![Yes](https://eu4.paradoxwikis.com/images/thumb/d/da/Ledger_yes.png/28px-Ledger_yes.png)](/File:Ledger_yes.png "Yes") Is [![Flag of Great Britain](https://eu4.paradoxwikis.com/images/thumb/2/2b/Great_Britain.png/20px-Great_Britain.png)](/Great_Britain "Great Britain") [Great Britain](/Great_Britain "Great Britain")\n*   [![Yes](https://eu4.paradoxwikis.com/images/thumb/d/da/Ledger_yes.png/28px-Ledger_yes.png)](/File:Ledger_yes.png "Yes") Own and have cores on the London, East Midlands, West Midlands, East Anglia, Wessex, and Yorkshire areas with each province having at least 25 development. (The Northern England area is not needed.)\n\nExpand\n\n[![An Industrial Evolution map.png](https://eu4.paradoxwikis.com/images/7/7d/An_Industrial_Evolution_map.png)](/File:An_Industrial_Evolution_map.png)\n\n[](/File:An_Industrial_Evolution_map.png "Enlarge")',
    notes: '',
  },
  {
    id: 'ach_50',
    name: 'At every continent',
    description: 'Own one province on each continent.',
    icon: 'https://eu4.paradoxwikis.com/images/c/cb/At_every_continent.jpg',
    dlc: '',
    version: '1.1',
    difficulty: 'E',
    game: 'eu4',
    guideUrl: 'https://eu4.paradoxwikis.com/At_every_continent',
    startingConditions:
      '[![No](https://eu4.paradoxwikis.com/images/thumb/5/56/Ledger_no_crop.png/28px-Ledger_no_crop.png)](/File:Ledger_no_crop.png "No") *Not* using a [random New World](/Random_New_World "Random New World").',
    completionRequirements:
      '[![Province icon.png](https://eu4.paradoxwikis.com/images/thumb/1/13/Province_icon.png/28px-Province_icon.png)](/Province "Province") Own a province in each of the 6 [continents](/Continent "Continent").',
    notes:
      'The continents are: Europe, Asia, Africa, North America, South America and Oceania. Most easily done as [![Flag of Spain](https://eu4.paradoxwikis.com/images/thumb/5/58/Spain.png/20px-Spain.png)](/Spain "Spain") [Spain](/Spain "Spain") or [![Flag of Portugal](https://eu4.paradoxwikis.com/images/thumb/1/12/Portugal.png/20px-Portugal.png)](/Portugal "Portugal") [Portugal](/Portugal "Portugal"), as they can colonize faster.',
  },
  {
    id: 'ach_51',
    name: 'Azur semé de lis or',
    description: 'Get all the French Cores as France.',
    icon: 'https://eu4.paradoxwikis.com/images/0/0d/Azur_sem%C3%A9_de_lis_or.jpg',
    dlc: '',
    version: '1.1',
    difficulty: 'E',
    game: 'eu4',
    guideUrl: '',
    startingConditions:
      '[![Yes](https://eu4.paradoxwikis.com/images/thumb/d/da/Ledger_yes.png/28px-Ledger_yes.png)](/File:Ledger_yes.png "Yes") Playing as [![Flag of France](https://eu4.paradoxwikis.com/images/thumb/d/de/France.png/20px-France.png)](/France "France") [France](/France "France")',
    completionRequirements:
      '[![Province icon.png](https://eu4.paradoxwikis.com/images/thumb/1/13/Province_icon.png/28px-Province_icon.png)](/Province "Province") All [cored](/Cored "Cored") provinces are owned by [![Flag of France](https://eu4.paradoxwikis.com/images/thumb/d/de/France.png/20px-France.png)](/France "France") [France](/France "France")\n\nExpand\n\n[![Azur semé de lis or Map.png](https://eu4.paradoxwikis.com/images/thumb/d/dd/Azur_sem%C3%A9_de_lis_or_Map.png/140px-Azur_sem%C3%A9_de_lis_or_Map.png)](/File:Azur_sem%C3%A9_de_lis_or_Map.png)\n\n[](/File:Azur_sem%C3%A9_de_lis_or_Map.png "Enlarge")',
    notes: 'Aside from reconquest, can also be done by revoking the cores from non-owned provinces',
  },
  {
    id: 'ach_52',
    name: 'Baa Baa Black Sheep',
    description: 'As Qara Qoyunlu become the leading producer of wool.',
    icon: 'https://eu4.paradoxwikis.com/images/9/92/Baa_Baa_Black_Sheep.jpg',
    dlc: '',
    version: '1.18',
    difficulty: 'E',
    game: 'eu4',
    guideUrl: '',
    startingConditions:
      '[![Yes](https://eu4.paradoxwikis.com/images/thumb/d/da/Ledger_yes.png/28px-Ledger_yes.png)](/File:Ledger_yes.png "Yes") Playing as [![Flag of Qara Qoyunlu](https://eu4.paradoxwikis.com/images/thumb/9/99/Qara_Qoyunlu.png/20px-Qara_Qoyunlu.png)](/Qara_Qoyunlu "Qara Qoyunlu") [Qara Qoyunlu](/Qara_Qoyunlu "Qara Qoyunlu")',
    completionRequirements:
      '[![Wool.png](https://eu4.paradoxwikis.com/images/thumb/3/34/Wool.png/28px-Wool.png)](/Wool "Wool") Be production leader of wool',
    notes:
      'You start with 5 wool-producing provinces. Focus solely on accumulating diplomatic points to develop them. Can be done before 1450.\n\nAlternatively, annexing [![Flag of Bitlis](https://eu4.paradoxwikis.com/images/thumb/3/34/Bitlis.png/20px-Bitlis.png)](/Bitlis "Bitlis") [Bitlis](/Bitlis "Bitlis") with 3 additional provinces will reduce the amount of developing needed (note that annexation can start as early as 1445 in this case). Annexing neighbouring OPM [![Flag of Hisn Kayfa](https://eu4.paradoxwikis.com/images/thumb/4/4c/Hisn_Kayfa.png/20px-Hisn_Kayfa.png)](/Hisn_Kayfa "Hisn Kayfa") [Hisn Kayfa](/Hisn_Kayfa "Hisn Kayfa") also helps, as they produce wool.',
  },
  {
    id: 'ach_53',
    name: 'Black Jack',
    description:
      'Have at least 21 different subjects with 5 cities each and without any subject having 50% or more Liberty Desire. Trade Companies do not count.',
    icon: 'https://eu4.paradoxwikis.com/images/b/b1/Black_Jack.jpg',
    dlc: '',
    version: '1.12',
    difficulty: 'M',
    game: 'eu4',
    guideUrl: 'https://eu4.paradoxwikis.com/Black_Jack',
    startingConditions: '',
    completionRequirements:
      '[![Yes](https://eu4.paradoxwikis.com/images/thumb/d/da/Ledger_yes.png/28px-Ledger_yes.png)](/File:Ledger_yes.png "Yes") Has 21 different subjects with more than 5 cities and less than 50% [![Liberty desire.png](https://eu4.paradoxwikis.com/images/thumb/f/fd/Liberty_desire.png/28px-Liberty_desire.png)](/Liberty_desire "Liberty desire") liberty desire',
    notes:
      'Can be easily achieved with Tributary states as the Chinese Emperor with the Mandate of Heaven DLC or [![Flag of Ashikaga](https://eu4.paradoxwikis.com/images/thumb/a/a1/Ashikaga.png/20px-Ashikaga.png)](/Ashikaga "Ashikaga") [Ashikaga](/Ashikaga "Ashikaga") with its daimyos.\n\nCan also be achieved by conquering swathes of low-development land and releasing client states.',
  },
  {
    id: 'ach_54',
    name: 'Blockader',
    description: 'Blockade at least 10 ports of one enemy.',
    icon: 'https://eu4.paradoxwikis.com/images/6/6f/Blockader.jpg',
    dlc: '',
    version: '1.10',
    difficulty: 'VE',
    game: 'eu4',
    guideUrl: '',
    startingConditions: '',
    completionRequirements:
      '[![Combat blockade.png](https://eu4.paradoxwikis.com/images/8/89/Combat_blockade.png)](/Blockade "Blockade") Blockade at least 10 enemy ports at the same time.',
    notes:
      'Easily done as the [![Flag of Ottomans](https://eu4.paradoxwikis.com/images/thumb/8/89/Ottomans.png/20px-Ottomans.png)](/Ottomans "Ottomans") [Ottomans](/Ottomans "Ottomans") with the [![Flag of Mamluks](https://eu4.paradoxwikis.com/images/thumb/c/ca/The_Mamluks.png/20px-The_Mamluks.png)](/Mamluks "Mamluks") [Mamluks](/Mamluks "Mamluks") at the start of the campaign.',
  },
  {
    id: 'ach_55',
    name: 'Blood for the Sky God!',
    description: 'As a Tengri nation, have Nahuatl as your syncretic faith.',
    icon: 'https://eu4.paradoxwikis.com/images/9/9a/Blood_for_the_Sky_God%21.jpg',
    dlc: '',
    version: '1.14',
    difficulty: 'E',
    game: 'eu4',
    guideUrl: '',
    startingConditions: '',
    completionRequirements:
      '*   [![Tengri](https://eu4.paradoxwikis.com/images/thumb/9/9f/Tengri.png/28px-Tengri.png)](/Tengri "Tengri") Is Tengri\n*   [![Yes](https://eu4.paradoxwikis.com/images/thumb/d/da/Ledger_yes.png/28px-Ledger_yes.png)](/File:Ledger_yes.png "Yes") Syncretic faith is [![Nahuatl.png](https://eu4.paradoxwikis.com/images/thumb/8/8c/Nahuatl.png/28px-Nahuatl.png)](/Nahuatl "Nahuatl") Nahuatl',
    notes:
      'Start as a [Jurchen tribe](/Jurchen_tribes "Jurchen tribes") and choose [![Icon ideas.png](https://eu4.paradoxwikis.com/images/thumb/d/db/Idea_bonus.png/28px-Idea_bonus.png)](/Idea "Idea") [Exploration](/Exploration "Exploration") ideas first. Conquer [Eastern Siberia](/Asian_regions#Eastern_Siberia "Asian regions") for colonial range to [North America](/North_America "North America") and colony-hop to [Mesoamerica](/Mesoamerica "Mesoamerica"). Do *not* form [![Flag of Qing](https://eu4.paradoxwikis.com/images/thumb/9/95/Qing.png/20px-Qing.png)](/Qing "Qing") [Qing](/Qing "Qing").',
  },
  {
    id: 'ach_56',
    name: 'Brick by Brick',
    description:
      'Starting as Denmark, enact the Unified Kalmar Monarchy government reform and own the entire Scandinavian region as your cores.',
    icon: 'https://eu4.paradoxwikis.com/images/9/9a/Brick_by_Brick.png',
    dlc: '',
    version: '1.34',
    difficulty: 'E',
    game: 'eu4',
    guideUrl: '',
    startingConditions:
      '[![Yes](https://eu4.paradoxwikis.com/images/thumb/d/da/Ledger_yes.png/28px-Ledger_yes.png)](/File:Ledger_yes.png "Yes") Playing as [![Flag of Denmark](https://eu4.paradoxwikis.com/images/thumb/6/69/Denmark.png/20px-Denmark.png)](/Denmark "Denmark") [Denmark](/Denmark "Denmark")',
    completionRequirements:
      '*   [![Government monarchy.png](https://eu4.paradoxwikis.com/images/thumb/4/4d/Government_monarchy.png/28px-Government_monarchy.png)](/Monarchy "Monarchy") Has enacted the [Unified Kalmar Monarchy](/Unified_Kalmar_Monarchy "Unified Kalmar Monarchy") government reform\n*   [![Province icon.png](https://eu4.paradoxwikis.com/images/thumb/1/13/Province_icon.png/28px-Province_icon.png)](/Province "Province") Own and core all provinces in the [Scandinavia region](/Scandinavia_\\(region\\) "Scandinavia (region)")',
    notes:
      'Make sure that you always have at least one junior partner in Scandinavia, because otherwise you will lose the starting reform [Kalmar Union](/Kalmar_Union "Kalmar Union"), because you can only get the reform [Unified Kalmar Monarchy](/Unified_Kalmar_Monarchy "Unified Kalmar Monarchy") by completing the mission [Ratify the Kalmar Union](/Danish_missions#Ratify_the_Kalmar_Union "Danish missions") while having the reform [Kalmar Union](/Kalmar_Union "Kalmar Union").',
  },
  {
    id: 'ach_57',
    name: 'Bright Spark',
    description: 'Have 50 Innovativeness.',
    icon: 'https://eu4.paradoxwikis.com/images/6/61/Bright_Spark.png',
    dlc: '',
    version: '1.25',
    difficulty: 'E',
    game: 'eu4',
    guideUrl: '',
    startingConditions:
      '*   [![No](https://eu4.paradoxwikis.com/images/thumb/5/56/Ledger_no_crop.png/28px-Ledger_no_crop.png)](/File:Ledger_no_crop.png "No") No more than 1 custom nation exists in the world\n*   [![No](https://eu4.paradoxwikis.com/images/thumb/5/56/Ledger_no_crop.png/28px-Ledger_no_crop.png)](/File:Ledger_no_crop.png "No") Used no more than 201 nation designer points if playing as a custom nation',
    completionRequirements:
      '*   [![Institutions.png](https://eu4.paradoxwikis.com/images/thumb/4/43/Institutions.png/28px-Institutions.png)](/Institutions "Institutions") Have 50 Innovativeness',
    notes:
      'Starting as Florence, only focus on technology and ideas, accept all events that give innovativeness and always choose the same leader during election, can be done before 1550.',
  },
  {
    id: 'ach_58',
    name: 'Brothers in Arms',
    description: 'Win a war as a secondary participant.',
    icon: 'https://eu4.paradoxwikis.com/images/d/d9/Brothers_in_Arms.jpg',
    dlc: '',
    version: '1.1',
    difficulty: 'VE',
    game: 'eu4',
    guideUrl: '',
    startingConditions: '',
    completionRequirements:
      '[![Yes](https://eu4.paradoxwikis.com/images/thumb/d/da/Ledger_yes.png/28px-Ledger_yes.png)](/File:Ledger_yes.png "Yes") Won a war without being the war leader.',
    notes: '',
  },
  {
    id: 'ach_59',
    name: 'Center of Attention',
    description: 'Own both a Protestant and a Reformed Center of Reformation.',
    icon: 'https://eu4.paradoxwikis.com/images/1/18/Center_of_Attention.jpg',
    dlc: '',
    version: '1.8',
    difficulty: 'E',
    game: 'eu4',
    guideUrl: '',
    startingConditions: '',
    completionRequirements:
      '*   [![No](https://eu4.paradoxwikis.com/images/thumb/5/56/Ledger_no_crop.png/28px-Ledger_no_crop.png)](/File:Ledger_no_crop.png "No") *Not* playing as a [released vassal](/Vassal#Release_a_nation "Vassal")\n*   [![Protestantism](https://eu4.paradoxwikis.com/images/thumb/0/0d/Protestant.png/28px-Protestant.png)](/Protestant "Protestant") Own a Protestant [center of reformation](/Center_of_reformation "Center of reformation")\n*   [![Reformed.png](https://eu4.paradoxwikis.com/images/thumb/3/3e/Reformed.png/28px-Reformed.png)](/Reformed "Reformed") Own a Reformed center of reformation',
    notes:
      'A random event creates the first Center of Reformation for each denomination. After that, the next two nations in Europe to convert have a random province designated as a Center of Reformation. Alternatively be on the first two to convert to Protestantism, and when you have a new monarch and Reformed has spawned, convert to Reformed.',
  },
  {
    id: 'ach_60',
    name: 'Chop Chop',
    description: 'With only one Monarch, have six different Consorts.',
    icon: 'https://eu4.paradoxwikis.com/images/3/30/Chop_Chop.png',
    dlc: '',
    version: '1.25',
    difficulty: 'E',
    game: 'eu4',
    guideUrl: '',
    startingConditions:
      '*   [![No](https://eu4.paradoxwikis.com/images/thumb/5/56/Ledger_no_crop.png/28px-Ledger_no_crop.png)](/File:Ledger_no_crop.png "No") No more than 1 custom nation exists in the world\n*   [![No](https://eu4.paradoxwikis.com/images/thumb/5/56/Ledger_no_crop.png/28px-Ledger_no_crop.png)](/File:Ledger_no_crop.png "No") Used no more than 201 nation designer points if playing as a custom nation',
    completionRequirements:
      '*   [![Royalmarriage.png](https://eu4.paradoxwikis.com/images/thumb/2/22/Royalmarriage.png/28px-Royalmarriage.png)](/Royal_marriage "Royal marriage") Have six different consorts',
    notes:
      'As an [![Anglican.png](https://eu4.paradoxwikis.com/images/thumb/6/68/Anglican.png/28px-Anglican.png)](/Anglican "Anglican") Anglican nation, (a) Divorce Consort every 100 church power, then wait for a new consort; (b) royal marriage with another nation; or (c) press "Marry a local Noblewoman" button in religious panel. Cycle through the options five times. Disinherit the heir if necessary. Easily doable if the ruler is young.',
  },
  {
    id: 'ach_61',
    name: 'Cities of Cibola',
    description: 'As a Nation that has Pueblo as primary culture, own at least 7 provinces with 10 development each.',
    icon: 'https://eu4.paradoxwikis.com/images/3/3c/Cities_of_Cibola.jpg',
    dlc: '',
    version: '1.18',
    difficulty: 'E',
    game: 'eu4',
    guideUrl: '',
    startingConditions:
      '[![Primary culture.png](https://eu4.paradoxwikis.com/images/thumb/e/e1/Primary_culture.png/28px-Primary_culture.png)](/Primary_culture "Primary culture") Primary culture is *Pueblo*',
    completionRequirements:
      '[![Development.png](https://eu4.paradoxwikis.com/images/thumb/a/a4/Development.png/28px-Development.png)](/Development "Development") Own 7 provinces with at least 10 development each',
    notes:
      'Need to reform your nation before you are able to manually develop provinces. Use Settle down reform to be able to own more then one province and settle tribal development into your provinces.',
  },
  {
    id: 'ach_62',
    name: 'City of Cities',
    description: 'Own a core province with at least 60 development.',
    icon: 'https://eu4.paradoxwikis.com/images/7/79/City_of_Cities.jpg',
    dlc: '',
    version: '1.12',
    difficulty: 'VE',
    game: 'eu4',
    guideUrl: '',
    startingConditions: '',
    completionRequirements:
      '[![Yes](https://eu4.paradoxwikis.com/images/thumb/d/da/Ledger_yes.png/28px-Ledger_yes.png)](/File:Ledger_yes.png "Yes") Own and have core a city with at least 60 [development](/Development "Development")',
    notes:
      'Easiest to do as the [![Flag of Ottomans](https://eu4.paradoxwikis.com/images/thumb/8/89/Ottomans.png/20px-Ottomans.png)](/Ottomans "Ottomans") [Ottomans](/Ottomans "Ottomans") with Constantinople.',
  },
  {
    id: 'ach_63',
    name: 'Colonial Management',
    description: 'Have 3 colonial governors that were directly appointed by you at the same time.',
    icon: 'https://eu4.paradoxwikis.com/images/9/90/Colonial_Management.jpg',
    dlc: '',
    version: '1.12',
    difficulty: 'E',
    game: 'eu4',
    guideUrl: '',
    startingConditions: '',
    completionRequirements:
      '[![Yes](https://eu4.paradoxwikis.com/images/thumb/d/da/Ledger_yes.png/28px-Ledger_yes.png)](/File:Ledger_yes.png "Yes") Appoint 3 colonial governors holding office in your colonies at the same time',
    notes: '*“Replace Governor”* is a subject action you may perform on your crown colonies.',
  },
  {
    id: 'ach_64',
    name: 'David the Builder',
    description: 'As Georgia have no free building slots in any owned province.',
    icon: 'https://eu4.paradoxwikis.com/images/4/41/David_the_Builder.png',
    dlc: '',
    version: '1.23',
    difficulty: 'VE',
    game: 'eu4',
    guideUrl: '',
    startingConditions: '',
    completionRequirements:
      '*   [![Yes](https://eu4.paradoxwikis.com/images/thumb/d/da/Ledger_yes.png/28px-Ledger_yes.png)](/File:Ledger_yes.png "Yes") Is [![Flag of Georgia](https://eu4.paradoxwikis.com/images/thumb/1/19/Georgia.png/20px-Georgia.png)](/Georgia "Georgia") [Georgia](/Georgia "Georgia")\n*   [![No](https://eu4.paradoxwikis.com/images/thumb/5/56/Ledger_no_crop.png/28px-Ledger_no_crop.png)](/File:Ledger_no_crop.png "No") No owned provinces have a free building slot',
    notes:
      'Playing or starting as [![Flag of Imereti](https://eu4.paradoxwikis.com/images/thumb/9/95/Imereti.png/20px-Imereti.png)](/Imereti "Imereti") [Imereti](/Imereti "Imereti") is not required anymore.\n\nCan be done by filling the capital with buildings and then giving all other provinces to vassals. The capital Tbilisi starts with 3 building slots, so it may be preferable to move the capital to one of the Western provinces since they have only 2 available buildings slots, making it possible to fill with just a church and a marketplace (100 [![Gold Icon.png](https://eu4.paradoxwikis.com/images/2/26/Gold_Icon.png)](/Ducats "Ducats") 100 ducats each) at tech 4 in admin/dip.\n\nCan also be achieved by being fully annexed. Simply declare No-CB wars on your neighbors and surrender until you cease existing.',
  },
  {
    id: 'ach_65',
    name: 'Die Please Die',
    description: 'Have a ruler with 1 or lower in all three categories who is over the age of 70.',
    icon: 'https://eu4.paradoxwikis.com/images/7/7d/Die_Please_Die.jpg',
    dlc: '',
    version: '1.8',
    difficulty: 'E',
    game: 'eu4',
    guideUrl: '',
    startingConditions: '',
    completionRequirements:
      '*   [![No](https://eu4.paradoxwikis.com/images/thumb/5/56/Ledger_no_crop.png/28px-Ledger_no_crop.png)](/File:Ledger_no_crop.png "No") Is *not* in a regency\n*   [![Yes](https://eu4.paradoxwikis.com/images/thumb/d/da/Ledger_yes.png/28px-Ledger_yes.png)](/File:Ledger_yes.png "Yes") Have a [ruler](/Ruler "Ruler") that:\n    *   [![All power costs.png](https://eu4.paradoxwikis.com/images/thumb/0/0f/All_power_costs.png/28px-All_power_costs.png)](/All_power_costs "All power costs") Has less than **2** in every Monarch power\n    *   [![Yes](https://eu4.paradoxwikis.com/images/thumb/d/da/Ledger_yes.png/28px-Ledger_yes.png)](/File:Ledger_yes.png "Yes") Has reached the age of 70 years',
    notes:
      ' [![Flag of Mali](https://eu4.paradoxwikis.com/images/thumb/f/f0/Mali.png/20px-Mali.png)](/Mali "Mali") [Mali](/Mali "Mali")\'s and [![Flag of Kanem Bornu](https://eu4.paradoxwikis.com/images/thumb/e/e9/Kanem_Bornu.png/20px-Kanem_Bornu.png)](/Kanem_Bornu "Kanem Bornu") [Kanem Bornu](/Kanem_Bornu "Kanem Bornu")\'s rulers are eligible. Very easy in [1.22](/1.22 "1.22") or earlier with [![Flag of Timurids](https://eu4.paradoxwikis.com/images/thumb/6/6a/Timurids.png/20px-Timurids.png)](/Timurids "Timurids") [Timurids](/Timurids "Timurids")\' 67 year old ruler. [![Flag of Karaman](https://eu4.paradoxwikis.com/images/thumb/4/44/Karaman.png/20px-Karaman.png)](/Karaman "Karaman") [Karaman](/Karaman "Karaman") starts out with 1/0/0 leader and 0/0/1 heir that can also work.',
  },
  {
    id: 'ach_66',
    name: 'Disciples of Enlightenment',
    description: 'Starting as Dai Viet, have 10 nations follow the Mahayana Faith by 1500.',
    icon: 'https://eu4.paradoxwikis.com/images/d/d2/Disciples_of_Enlightenment.png',
    dlc: '',
    version: '1.20',
    difficulty: 'M',
    game: 'eu4',
    guideUrl: 'https://eu4.paradoxwikis.com/Disciples_of_Enlightenment',
    startingConditions:
      '[![Yes](https://eu4.paradoxwikis.com/images/thumb/d/da/Ledger_yes.png/28px-Ledger_yes.png)](/File:Ledger_yes.png "Yes") Playing as [![Flag of Dai Viet](https://eu4.paradoxwikis.com/images/thumb/f/fc/Dai_Viet.png/20px-Dai_Viet.png)](/Dai_Viet "Dai Viet") [Dai Viet](/Dai_Viet "Dai Viet")',
    completionRequirements:
      '*   [![Yes](https://eu4.paradoxwikis.com/images/thumb/d/da/Ledger_yes.png/28px-Ledger_yes.png)](/File:Ledger_yes.png "Yes") The year is before 1500\n*   [![Mahayana.png](https://eu4.paradoxwikis.com/images/thumb/2/2f/Mahayana.png/28px-Mahayana.png)](/Mahayana "Mahayana") At least 10 nations follow the Mahayana faith',
    notes:
      '*   Note that the player\'s country itself does count.\n*    [![Flag of Pahang](https://eu4.paradoxwikis.com/images/thumb/f/f7/Pahang.png/20px-Pahang.png)](/Pahang "Pahang") [Pahang](/Pahang "Pahang") and [![Flag of Pangasinan](https://eu4.paradoxwikis.com/images/thumb/0/07/Pangasinan.png/20px-Pangasinan.png)](/Pangasinan "Pangasinan") [Pangasinan](/Pangasinan "Pangasinan") already start as Mahayana and [![Flag of Dai Viet](https://eu4.paradoxwikis.com/images/thumb/f/fc/Dai_Viet.png/20px-Dai_Viet.png)](/Dai_Viet "Dai Viet") [Dai Viet](/Dai_Viet "Dai Viet") itself also counts, effectively bringing down the requirement to 7, and the Philippine islands are an excellent place to start forcing conversions.\n\nYou can release [File:Annan.png](/index.php?title=Special:Upload&wpDestFile=Annan.png "File:Annan.png") [Annan](/index.php?title=Annan&action=edit&redlink=1 "Annan (page does not exist)") and [![Flag of Tonkin](https://eu4.paradoxwikis.com/images/thumb/6/60/Tonkin.png/20px-Tonkin.png)](/Tonkin "Tonkin") [Tonkin](/Tonkin "Tonkin") for two extra countries.',
  },
  {
    id: 'ach_67',
    name: 'Down Under',
    description: 'Have a colony in Australia.',
    icon: 'https://eu4.paradoxwikis.com/images/0/03/Down_Under.jpg',
    dlc: '',
    version: '1.1',
    difficulty: 'E',
    game: 'eu4',
    guideUrl: '',
    startingConditions: '',
    completionRequirements:
      '[![Colonists.png](https://eu4.paradoxwikis.com/images/thumb/3/34/Colonists.png/28px-Colonists.png)](/Colonist "Colonist") Have a [colony](/Colony "Colony") in [Australia](/Oceanian_regions#Australia "Oceanian regions").',
    notes:
      "Easily done as one of the nations located in proximity to the region. Establish a colony on any province of the Australian coastline (no need to finish the colony). Taking someone's colony in Australia when signing peace or conquering natives won't earn the achievement.",
  },
  {
    id: 'ach_68',
    name: "Dude, Where's my Boat?",
    description: 'Capture 20 boats with the Boarding Naval Doctrine.',
    icon: 'https://eu4.paradoxwikis.com/images/e/e7/Dude%2C_Where%27s_my_Boat%3F.png',
    dlc: '',
    version: '1.25',
    difficulty: 'E',
    game: 'eu4',
    guideUrl: '',
    startingConditions:
      '*   [![No](https://eu4.paradoxwikis.com/images/thumb/5/56/Ledger_no_crop.png/28px-Ledger_no_crop.png)](/File:Ledger_no_crop.png "No") No more than 1 custom nation exists in the world\n*   [![No](https://eu4.paradoxwikis.com/images/thumb/5/56/Ledger_no_crop.png/28px-Ledger_no_crop.png)](/File:Ledger_no_crop.png "No") Used no more than 201 nation designer points if playing as a custom nation',
    completionRequirements:
      '*   [![Galley.png](https://eu4.paradoxwikis.com/images/thumb/3/3b/Galley.png/28px-Galley.png)](/Galley "Galley") Capture 20 boats\n*   [![Ship Boarding.png](https://eu4.paradoxwikis.com/images/thumb/b/b8/Ship_Boarding.png/24px-Ship_Boarding.png)](/Navy#Naval_doctrine "Navy") Have the Boarding naval doctrine',
    notes: '',
  },
  {
    id: 'ach_69',
    name: 'Early-Modern Warfare',
    description: 'Have 100 regiments at 100% Army Drill.',
    icon: 'https://eu4.paradoxwikis.com/images/1/13/Early-Modern_Warfare.png',
    dlc: '',
    version: '1.23',
    difficulty: 'E',
    game: 'eu4',
    guideUrl: '',
    startingConditions: '',
    completionRequirements:
      '[![Yes](https://eu4.paradoxwikis.com/images/thumb/d/da/Ledger_yes.png/28px-Ledger_yes.png)](/File:Ledger_yes.png "Yes") Have 100 regiments at **100%** Army Drill',
    notes:
      'Easy as [![Flag of Ming](https://eu4.paradoxwikis.com/images/thumb/a/a5/Ming.png/20px-Ming.png)](/Ming "Ming") [Ming](/Ming "Ming"); just go slightly over force limit and drill for ten years.',
  },
  {
    id: 'ach_70',
    name: 'Electable!',
    description: 'Become an elector in the HRE as a country which does not start as elector.',
    icon: 'https://eu4.paradoxwikis.com/images/6/63/Electable%21.jpg',
    dlc: '',
    version: '1.6',
    difficulty: 'E',
    game: 'eu4',
    guideUrl: 'https://eu4.paradoxwikis.com/Electable!',
    startingConditions:
      '[![No](https://eu4.paradoxwikis.com/images/thumb/5/56/Ledger_no_crop.png/28px-Ledger_no_crop.png)](/File:Ledger_no_crop.png "No") Does not start as an [elector](/Elector "Elector") of the [Holy Roman Empire](/Holy_Roman_Empire "Holy Roman Empire")',
    completionRequirements:
      '*   [![No](https://eu4.paradoxwikis.com/images/thumb/5/56/Ledger_no_crop.png/28px-Ledger_no_crop.png)](/File:Ledger_no_crop.png "No") *Not* playing as a [released vassal](/Vassal#Release_a_nation "Vassal")\n*   [![Yes](https://eu4.paradoxwikis.com/images/thumb/d/da/Ledger_yes.png/28px-Ledger_yes.png)](/File:Ledger_yes.png "Yes") Become an elector of the Holy Roman Empire',
    notes:
      'Most easily done as [![Flag of Austria](https://eu4.paradoxwikis.com/images/thumb/7/7f/Austria.png/20px-Austria.png)](/Austria "Austria") [Austria](/Austria "Austria") via the [![Decision.png](https://eu4.paradoxwikis.com/images/thumb/b/b1/Decision.png/28px-Decision.png)](/Decision "Decision") Usurp the Electorate decision after taking [![Flag of Bohemia](https://eu4.paradoxwikis.com/images/thumb/4/41/Bohemia.png/20px-Bohemia.png)](/Bohemia "Bohemia") [Bohemia](/Bohemia "Bohemia") as a junior partner. Other HRE members can request the electorate either with money or by being allied to and having excellent relations with the Emperor. Another possibility is to inherit (not integrate!) an elector (e.g. as [![Flag of Austria](https://eu4.paradoxwikis.com/images/thumb/7/7f/Austria.png/20px-Austria.png)](/Austria "Austria") [Austria](/Austria "Austria") or [![Flag of Hungary](https://eu4.paradoxwikis.com/images/thumb/6/6a/Hungary.png/20px-Hungary.png)](/Hungary "Hungary") [Hungary](/Hungary "Hungary"), who can both get a personal union over [![Flag of Bohemia](https://eu4.paradoxwikis.com/images/thumb/4/41/Bohemia.png/20px-Bohemia.png)](/Bohemia "Bohemia") [Bohemia](/Bohemia "Bohemia")) at which point the electorate will pass to the inheriting partner.',
  },
  {
    id: 'ach_71',
    name: 'Forgive me, for I have Sindh',
    description: 'Become Christian as Sindh.',
    icon: 'https://eu4.paradoxwikis.com/images/f/ff/Forgive_me%2C_for_I_have_Sindh.png',
    dlc: '',
    version: '1.26',
    difficulty: 'E',
    game: 'eu4',
    guideUrl: '',
    startingConditions:
      '[![Yes](https://eu4.paradoxwikis.com/images/thumb/d/da/Ledger_yes.png/28px-Ledger_yes.png)](/File:Ledger_yes.png "Yes") Playing as [![Flag of Sindh](https://eu4.paradoxwikis.com/images/thumb/3/39/Sindh.png/20px-Sindh.png)](/Sindh "Sindh") [Sindh](/Sindh "Sindh")',
    completionRequirements:
      '*   [![Yes](https://eu4.paradoxwikis.com/images/thumb/d/da/Ledger_yes.png/28px-Ledger_yes.png)](/File:Ledger_yes.png "Yes") Is [![Flag of Sindh](https://eu4.paradoxwikis.com/images/thumb/3/39/Sindh.png/20px-Sindh.png)](/Sindh "Sindh") [Sindh](/Sindh "Sindh")\n*   [![Catholicism](https://eu4.paradoxwikis.com/images/thumb/3/39/Catholic.png/28px-Catholic.png)](/Catholic "Catholic") Religion is in Christian group',
    notes:
      'The island Suqutra is the nearest Christian province and can be easily conquered from its owner [![Flag of Mahra](https://eu4.paradoxwikis.com/images/thumb/1/1e/Mahra.png/20px-Mahra.png)](/Mahra "Mahra") [Mahra](/Mahra "Mahra"), who will normally ally your neighbor [![Flag of Baluchistan](https://eu4.paradoxwikis.com/images/thumb/f/fc/Baluchistan.png/20px-Baluchistan.png)](/Baluchistan "Baluchistan") [Baluchistan](/Baluchistan "Baluchistan"). Sell your province Umarkot to a neighboring country (since Baluchistan does not want it) and declare war on them with your reconquest casus belli. Then, head to Mahra to eliminate their armies and siege their provinces until they will accept giving you Suqutra in a separate peace deal (you do not need to land any troops on the island for it to be selectable). Next, give Baluchistan all of your mainland provinces in a peace deal and declare bankruptcy. Since you are an OPM on a Coptic province, this will convert you to [![Coptic.png](https://eu4.paradoxwikis.com/images/thumb/7/74/Coptic.png/28px-Coptic.png)](/Coptic "Coptic") Coptic and grant the achievement.',
  },
  {
    id: 'ach_72',
    name: 'Four For Trade',
    description: 'Form four Trade Companies and get bonus merchants from all of them.',
    icon: 'https://eu4.paradoxwikis.com/images/e/ee/Four_For_Trade.jpg',
    dlc: '',
    version: '1.6',
    difficulty: 'E',
    game: 'eu4',
    guideUrl: '',
    startingConditions: '',
    completionRequirements:
      '[![Trade value.png](https://eu4.paradoxwikis.com/images/thumb/f/f9/Trade_value.png/28px-Trade_value.png)](/Trade_value "Trade value") Control 4 strong [trade companies](/Trade_company "Trade company")',
    notes:
      'A trade company must control at least 51% of the **provincial** trade power in its node for it to be a "strong" company and give you an extra merchant. Far easier since 1.30, as trade companies can now be made in all regions not your own that aren\'t colonial regions, including European regions.',
  },
  {
    id: 'ach_73',
    name: 'God Tier',
    description: 'Become a Tier 5 Defender of the Faith as a nation that is neither Catholic nor Sunni.',
    icon: 'https://eu4.paradoxwikis.com/images/3/30/God_Tier.png',
    dlc: '',
    version: '1.30',
    difficulty: 'E',
    game: 'eu4',
    guideUrl: 'https://eu4.paradoxwikis.com/God_Tier',
    startingConditions:
      '[![No](https://eu4.paradoxwikis.com/images/thumb/5/56/Ledger_no_crop.png/28px-Ledger_no_crop.png)](/File:Ledger_no_crop.png "No") *Not* using a [random New World](/Random_New_World "Random New World")',
    completionRequirements:
      '*    [![No](https://eu4.paradoxwikis.com/images/thumb/5/56/Ledger_no_crop.png/28px-Ledger_no_crop.png)](/File:Ledger_no_crop.png "No") Religion is *not* [![Catholicism](https://eu4.paradoxwikis.com/images/thumb/3/39/Catholic.png/28px-Catholic.png)](/Catholic "Catholic") Catholic or [![Sunni Islam](https://eu4.paradoxwikis.com/images/thumb/2/2f/Sunni.png/28px-Sunni.png)](/Sunni "Sunni") Sunni\n*   [![Become Defender of the Faith.png](https://eu4.paradoxwikis.com/images/thumb/0/0f/Become_Defender_of_the_Faith.png/28px-Become_Defender_of_the_Faith.png)](/Defender_of_the_faith "Defender of the faith") Is defender of the faith of tier 5',
    notes:
      'Easiest to do as a HRE member state such as Holland. Convert to Protestantism as soon as possible. The amount of HRE minors who will convert should minimise the amount of player involvement. If necessary, declare war on smaller European nations and use the "Force Religion" option in the peace deal. Colonial nations also contribute to the rank of Defender of the Faith.\n\nThe achievement is hidden without the [![Emperor](https://eu4.paradoxwikis.com/images/thumb/c/c5/Emperor.png/28px-Emperor.png)](/Emperor_\\(DLC\\) "Emperor") Emperor DLC, but it is possible to get the achievement without the DLC, by having 50+ nations following the faith you are defender of.',
  },
  {
    id: 'ach_74',
    name: 'Grand Coalition',
    description: 'Join a coalition of more than 5 nations.',
    icon: 'https://eu4.paradoxwikis.com/images/3/31/Grand_Coalition.jpg',
    dlc: '',
    version: '1.2',
    difficulty: 'E',
    game: 'eu4',
    guideUrl: '',
    startingConditions: '',
    completionRequirements:
      '[![Yes](https://eu4.paradoxwikis.com/images/thumb/d/da/Ledger_yes.png/28px-Ledger_yes.png)](/File:Ledger_yes.png "Yes") Be a part of a [coalition](/Coalition "Coalition") with 6 or more members',
    notes:
      "Most easily achieved as Ming by cancelling the tributary status of whichever Southeast Asian state has been expanding the most. You still get the achievement for joining after the war has started, since you'll need to wait for the truce to expire.",
  },
  {
    id: 'ach_75',
    name: 'Grand Duchy',
    description: 'Starting as a Duchy, have 1000 development without upgrading your government rank.',
    icon: 'https://eu4.paradoxwikis.com/images/2/27/Grand_Duchy.jpg',
    dlc: '',
    version: '1.14',
    difficulty: 'M',
    game: 'eu4',
    guideUrl: '',
    startingConditions:
      '[![Yes](https://eu4.paradoxwikis.com/images/thumb/d/da/Ledger_yes.png/28px-Ledger_yes.png)](/File:Ledger_yes.png "Yes") Government rank is [![Duchy rank](https://eu4.paradoxwikis.com/images/thumb/5/5a/Duchy.png/28px-Duchy.png)](/Government_rank "Duchy rank") Duchy',
    completionRequirements:
      '*   [![Tab domestic government.png](https://eu4.paradoxwikis.com/images/thumb/f/ff/Tab_domestic_government.png/28px-Tab_domestic_government.png)](/Government "Government") Government rank is [![Duchy rank](https://eu4.paradoxwikis.com/images/thumb/5/5a/Duchy.png/28px-Duchy.png)](/Government_rank "Duchy rank") Duchy\n*   [![Development.png](https://eu4.paradoxwikis.com/images/thumb/a/a4/Development.png/28px-Development.png)](/Development "Development") Has at least 1000 development',
    notes:
      ' [![Flag of Muscovy](https://eu4.paradoxwikis.com/images/thumb/4/41/Muscovy.png/20px-Muscovy.png)](/Muscovy "Muscovy") [Muscovy](/Muscovy "Muscovy") is the largest duchy in 1444, though [![Flag of Lithuania](https://eu4.paradoxwikis.com/images/thumb/d/d9/Lithuania.png/20px-Lithuania.png)](/Lithuania "Lithuania") [Lithuania](/Lithuania "Lithuania") could also work well. The most important thing is to remember *not* to upgrade or form a nation (like [![Flag of Russia](https://eu4.paradoxwikis.com/images/thumb/e/ee/Russia.png/20px-Russia.png)](/Russia "Russia") [Russia](/Russia "Russia") or [![Flag of Commonwealth](https://eu4.paradoxwikis.com/images/thumb/d/df/Commonwealth.png/20px-Commonwealth.png)](/Commonwealth "Commonwealth") [Commonwealth](/Commonwealth "Commonwealth")) that gives a higher [government rank](/Government_rank "Government rank") as you\'ll become ineligible for the achievement.\n\nAnother way to do this is to start as a duchy in the HRE. You can become the Emperor and still be eligible for the achievement. You just need to lose the emperorship, which returns you to duchy rank. This method allows you to expand with the governing capacity of an empire, which makes this achievement trivial.',
  },
  {
    id: 'ach_76',
    name: 'Hard Bargaining',
    description:
      'As Defender of a Muslim Faith, propagate your religion in The Moluccas through trade to convert 5 provinces.',
    icon: 'https://eu4.paradoxwikis.com/images/8/82/Hard_Bargaining.png',
    dlc: '',
    version: '1.23',
    difficulty: 'E',
    game: 'eu4',
    guideUrl: '',
    startingConditions: '',
    completionRequirements:
      '*   [![Yes](https://eu4.paradoxwikis.com/images/thumb/d/da/Ledger_yes.png/28px-Ledger_yes.png)](/File:Ledger_yes.png "Yes") Is in the Muslim [religious group](/Religious_group "Religious group")\n*   [![Become Defender of the Faith.png](https://eu4.paradoxwikis.com/images/thumb/0/0f/Become_Defender_of_the_Faith.png/28px-Become_Defender_of_the_Faith.png)](/Defender_of_the_faith "Defender of the faith") Is Defender of the Faith\n*   [![Yes](https://eu4.paradoxwikis.com/images/thumb/d/da/Ledger_yes.png/28px-Ledger_yes.png)](/File:Ledger_yes.png "Yes") [Propagated Religion](/Propagate_religion "Propagate religion") in 5 provinces in the Moluccas [trade node](/Trade_node "Trade node")',
    notes: 'You are required to be Defender of the Faith when the conversion of each province finishes.',
  },
  {
    id: 'ach_77',
    name: 'Holiest Roman Empire',
    description:
      'As either the Papal States or the Emperor, have the Papal States as an Elector while the HRE is officially Catholic.',
    icon: 'https://eu4.paradoxwikis.com/images/7/70/Holiest_Roman_Empire.png',
    dlc: '',
    version: '1.30',
    difficulty: 'E',
    game: 'eu4',
    guideUrl: '',
    startingConditions:
      '[![No](https://eu4.paradoxwikis.com/images/thumb/5/56/Ledger_no_crop.png/28px-Ledger_no_crop.png)](/File:Ledger_no_crop.png "No") *Not* using a [random New World](/Random_New_World "Random New World")',
    completionRequirements:
      '*   [![Yes](https://eu4.paradoxwikis.com/images/thumb/d/da/Ledger_yes.png/28px-Ledger_yes.png)](/File:Ledger_yes.png "Yes") Is [![Flag of The Papal State](https://eu4.paradoxwikis.com/images/thumb/7/71/The_Papal_State.png/20px-The_Papal_State.png)](/The_Papal_State "The Papal State") [The Papal State](/The_Papal_State "The Papal State") *or* is the [![Imperial authority.png](https://eu4.paradoxwikis.com/images/thumb/4/46/Imperial_authority.png/28px-Imperial_authority.png)](/Imperial_authority "Imperial authority") emperor of the [Holy Roman Empire](/Holy_Roman_Empire "Holy Roman Empire")\n*   [![Catholicism](https://eu4.paradoxwikis.com/images/thumb/3/39/Catholic.png/28px-Catholic.png)](/Catholic "Catholic") Catholic is the dominant faith of the [Holy Roman Empire](/Holy_Roman_Empire "Holy Roman Empire")\n*   The [Holy Roman Empire](/Holy_Roman_Empire "Holy Roman Empire") has an official, unchangeable faith\n*    [![Flag of The Papal State](https://eu4.paradoxwikis.com/images/thumb/7/71/The_Papal_State.png/20px-The_Papal_State.png)](/The_Papal_State "The Papal State") [The Papal State](/The_Papal_State "The Papal State") is an [elector](/Elector "Elector")',
    notes:
      'You can start as [![Flag of Austria](https://eu4.paradoxwikis.com/images/thumb/7/7f/Austria.png/20px-Austria.png)](/Austria "Austria") [Austria](/Austria "Austria"), and full annex [![Flag of The Papal State](https://eu4.paradoxwikis.com/images/thumb/7/71/The_Papal_State.png/20px-The_Papal_State.png)](/The_Papal_State "The Papal State") [The Papal State](/The_Papal_State "The Papal State"). When [![Flag of The Papal State](https://eu4.paradoxwikis.com/images/thumb/7/71/The_Papal_State.png/20px-The_Papal_State.png)](/The_Papal_State "The Papal State") [The Papal State](/The_Papal_State "The Papal State") is given a province in the empire, you can grant them elector status.\n\nNote that passing the [Proclaim Erbkaisertum](/Holy_Roman_Empire#Proclaim_Erbkaisertum "Holy Roman Empire") reform before Catholicism is the official faith of the HRE will enact the Peace of Westphalia, preventing this achievement.',
  },
  {
    id: 'ach_78',
    name: 'Imperio español',
    description: 'As Spain have Mexico, Panama, Havana, Cuzco in colonial Nations under you.',
    icon: 'https://eu4.paradoxwikis.com/images/7/72/Imperio_espa%C3%B1ol.jpg',
    dlc: '',
    version: '1.10',
    difficulty: 'E',
    game: 'eu4',
    guideUrl: '',
    startingConditions:
      '[![No](https://eu4.paradoxwikis.com/images/thumb/5/56/Ledger_no_crop.png/28px-Ledger_no_crop.png)](/File:Ledger_no_crop.png "No") *Not* using a [random New World](/Random_New_World "Random New World").',
    completionRequirements:
      '*   [![No](https://eu4.paradoxwikis.com/images/thumb/5/56/Ledger_no_crop.png/28px-Ledger_no_crop.png)](/File:Ledger_no_crop.png "No") *Not* playing as a [released vassal](/Vassal#Release_a_nation "Vassal")\n*   [![Yes](https://eu4.paradoxwikis.com/images/thumb/d/da/Ledger_yes.png/28px-Ledger_yes.png)](/File:Ledger_yes.png "Yes") Is [![Flag of Spain](https://eu4.paradoxwikis.com/images/thumb/5/58/Spain.png/20px-Spain.png)](/Spain "Spain") [Spain](/Spain "Spain")\n*   [![Global colonial growth.png](https://eu4.paradoxwikis.com/images/thumb/2/2b/Global_settler_increase.png/28px-Global_settler_increase.png)](/Global_settler_increase "Global settler increase") Have colonial nations in Mexico, Panama, Havana, and Cuzco.\n\nExpand\n\n[![Imperio español map.png](https://eu4.paradoxwikis.com/images/thumb/a/a5/Imperio_espa%C3%B1ol_map.png/140px-Imperio_espa%C3%B1ol_map.png)](/File:Imperio_espa%C3%B1ol_map.png)\n\n[](/File:Imperio_espa%C3%B1ol_map.png "Enlarge")',
    notes: '',
  },
  {
    id: 'ach_79',
    name: 'In the Name of the Father',
    description: 'As an Orthodox country, have 100 Patriarch Authority.',
    icon: 'https://eu4.paradoxwikis.com/images/0/0b/In_the_Name_of_the_Father.jpg',
    dlc: '',
    version: '1.4',
    difficulty: 'VE',
    game: 'eu4',
    guideUrl: '',
    startingConditions: '',
    completionRequirements:
      '[![Patriarch authority.png](https://eu4.paradoxwikis.com/images/thumb/a/af/Patriarch_authority.png/28px-Patriarch_authority.png)](/Patriarch_authority "Patriarch authority") Have Patriarch Authority of **100%**',
    notes: 'Constantinople and Kiev have monuments which give yearly patriarch authority',
  },
  {
    id: 'ach_80',
    name: "It's all about luck",
    description: 'Win a battle against a great leader, without a leader.',
    icon: 'https://eu4.paradoxwikis.com/images/f/fd/It%27s_all_about_luck.jpg',
    dlc: '',
    version: '1.1',
    difficulty: 'E',
    game: 'eu4',
    guideUrl: '',
    startingConditions: '',
    completionRequirements:
      '[![Yes](https://eu4.paradoxwikis.com/images/thumb/d/da/Ledger_yes.png/28px-Ledger_yes.png)](/File:Ledger_yes.png "Yes") Defeated an enemy leader with 3 stars.',
    notes:
      'Easily done as the [![Flag of Ottomans](https://eu4.paradoxwikis.com/images/thumb/8/89/Ottomans.png/20px-Ottomans.png)](/Ottomans "Ottomans") [Ottomans](/Ottomans "Ottomans") attacking [![Flag of Albania](https://eu4.paradoxwikis.com/images/thumb/0/07/Albania.png/20px-Albania.png)](/Albania "Albania") [Albania](/Albania "Albania") at the start of the campaign.',
  },
  {
    id: 'ach_81',
    name: 'Just a Little Patience',
    description: 'Play a campaign from 1444 until 1820.',
    icon: 'https://eu4.paradoxwikis.com/images/4/42/Just_a_Little_Patience.jpg',
    dlc: '',
    version: '1.3',
    difficulty: 'VE',
    game: 'eu4',
    guideUrl: '',
    startingConditions: '',
    completionRequirements:
      '[![Yes](https://eu4.paradoxwikis.com/images/thumb/d/da/Ledger_yes.png/28px-Ledger_yes.png)](/File:Ledger_yes.png "Yes") Is year 1820',
    notes: '',
  },
  {
    id: 'ach_82',
    name: 'Just Resting In My Account',
    description: 'Corrupt the officials in a Rival country.',
    icon: 'https://eu4.paradoxwikis.com/images/1/1c/Just_Resting_In_My_Account.jpg',
    dlc: '',
    version: '1.16',
    difficulty: 'VE',
    game: 'eu4',
    guideUrl: '',
    startingConditions: '',
    completionRequirements:
      '[![Yes](https://eu4.paradoxwikis.com/images/thumb/d/da/Ledger_yes.png/28px-Ledger_yes.png)](/File:Ledger_yes.png "Yes") Used the covert action [Corrupt Officials](/Espionage#Corrupt_Officials "Espionage") against a rival country.',
    notes: '',
  },
  {
    id: 'ach_83',
    name: 'Kow-Tow',
    description: 'As Ming, have a subject from each religion group.',
    icon: 'https://eu4.paradoxwikis.com/images/0/0a/Kow-Tow.png',
    dlc: '',
    version: '1.9',
    difficulty: 'E',
    game: 'eu4',
    guideUrl: 'https://eu4.paradoxwikis.com/Kow-Tow',
    startingConditions:
      '[![Yes](https://eu4.paradoxwikis.com/images/thumb/d/da/Ledger_yes.png/28px-Ledger_yes.png)](/File:Ledger_yes.png "Yes") Playing as [![Flag of Ming](https://eu4.paradoxwikis.com/images/thumb/a/a5/Ming.png/20px-Ming.png)](/Ming "Ming") [Ming](/Ming "Ming")',
    completionRequirements:
      '*   [![No](https://eu4.paradoxwikis.com/images/thumb/5/56/Ledger_no_crop.png/28px-Ledger_no_crop.png)](/File:Ledger_no_crop.png "No") *Not* playing as a [released vassal](/Vassal#Release_a_nation "Vassal")\n*   [![Icon vassal.png](https://eu4.paradoxwikis.com/images/thumb/4/47/Vassal.png/28px-Vassal.png)](/Vassal "Vassal") Have a subject nation in the 5 [religious groups](/Religious_group "Religious group") Christian, Muslim, Eastern, Dharmic and Pagan',
    notes:
      '*   The Jewish and Zoroastrian groups are *not* needed.\n*   No CB War against [Mikhlaf](/Mikhlaf "Mikhlaf") in Arabia, vassalize them in the peace deal. Ally a neighbour (Yemen or Hormuz can be a good choice), ask for maps of the horn of Africa and then establish one of the Coptic minors as a tributary or vassal. Medri Bahri can be a good choice. Proclaim a Guarantee to protect them while you improve relations.',
  },
  {
    id: 'ach_84',
    name: 'Land of Eastern Jade',
    description: 'Own a core province in the Mexico region as a Buddhist country.',
    icon: 'https://eu4.paradoxwikis.com/images/2/28/Land_of_Eastern_Jade.jpg',
    dlc: '',
    version: '1.8',
    difficulty: 'E',
    game: 'eu4',
    guideUrl: '',
    startingConditions:
      '[![No](https://eu4.paradoxwikis.com/images/thumb/5/56/Ledger_no_crop.png/28px-Ledger_no_crop.png)](/File:Ledger_no_crop.png "No") *Not* using a [random New World](/Random_New_World "Random New World").',
    completionRequirements:
      '*   [![Yes](https://eu4.paradoxwikis.com/images/thumb/d/da/Ledger_yes.png/28px-Ledger_yes.png)](/File:Ledger_yes.png "Yes") Be [![Theravada.png](https://eu4.paradoxwikis.com/images/thumb/5/52/Theravada.png/28px-Theravada.png)](/Theravada "Theravada") Theravada, [![Vajrayana.png](https://eu4.paradoxwikis.com/images/thumb/f/f1/Vajrayana.png/28px-Vajrayana.png)](/Vajrayana "Vajrayana") Vajrayana, or [![Mahayana.png](https://eu4.paradoxwikis.com/images/thumb/2/2f/Mahayana.png/28px-Mahayana.png)](/Mahayana "Mahayana") Mahayana.\n*   [![Province icon.png](https://eu4.paradoxwikis.com/images/thumb/1/13/Province_icon.png/28px-Province_icon.png)](/Province "Province") Own a core province in the region [Mexico](/North_American_regions#Mexico "North American regions").',
    notes:
      'An interesting choice is Ayutthaya. Start by choosing exploration ideas, colonize the islands in Indonesia, followed by the Marshall Islands, and Midway. Then focus on North America, and most likely you can colonize Sinaloa, which is the easiest path for this achievement.',
  },
  {
    id: 'ach_85',
    name: 'Let It Go!',
    description:
      'Starting as Norway, have your capital in the Canada region while not owning any province in Scandinavia and not playing as a released subject.',
    icon: 'https://eu4.paradoxwikis.com/images/0/08/Let_It_Go%21.png',
    dlc: '',
    version: '1.34',
    difficulty: 'E',
    game: 'eu4',
    guideUrl: '',
    startingConditions:
      '[![Yes](https://eu4.paradoxwikis.com/images/thumb/d/da/Ledger_yes.png/28px-Ledger_yes.png)](/File:Ledger_yes.png "Yes") Playing as [![Flag of Norway](https://eu4.paradoxwikis.com/images/thumb/0/0f/Norway.png/20px-Norway.png)](/Norway "Norway") [Norway](/Norway "Norway")',
    completionRequirements:
      '*   [![No](https://eu4.paradoxwikis.com/images/thumb/5/56/Ledger_no_crop.png/28px-Ledger_no_crop.png)](/File:Ledger_no_crop.png "No") *Not* playing as a [released vassal](/Vassal#Release_a_nation "Vassal")\n*   [![Capital.png](https://eu4.paradoxwikis.com/images/thumb/6/6e/Capital.png/28px-Capital.png)](/Capital "Capital") Capital is in the [Canada region](/Canada_\\(region\\) "Canada (region)")\n*   [![No](https://eu4.paradoxwikis.com/images/thumb/5/56/Ledger_no_crop.png/28px-Ledger_no_crop.png)](/File:Ledger_no_crop.png "No") Owns no province in the [Scandinavia region](/Scandinavia_\\(region\\) "Scandinavia (region)")',
    notes:
      'Forming countries is allowed, but playing as a released colonial nation or switching to a different country is not allowed. The easiest way to be rid of provinces in Europe is to release Sápmi and Iceland as subjects, giving them all other provinces in Europe other than your capital. At that point, moving your capital into America is allowed, and then giving away the last European province should complete the achievement.',
  },
  {
    id: 'ach_86',
    name: 'Made in Japan',
    description: 'Embrace "manufactories" institution as Japan by 1655.',
    icon: 'https://eu4.paradoxwikis.com/images/3/3d/Made_in_Japan.png',
    dlc: '',
    version: '1.20',
    difficulty: 'E',
    game: 'eu4',
    guideUrl: '',
    startingConditions:
      '[![Culture icon.png](https://eu4.paradoxwikis.com/images/thumb/2/29/Culture_icon.png/28px-Culture_icon.png)](/Culture "Culture") Culture group is *Japanese*',
    completionRequirements:
      '*   [![Yes](https://eu4.paradoxwikis.com/images/thumb/d/da/Ledger_yes.png/28px-Ledger_yes.png)](/File:Ledger_yes.png "Yes") The year is before 1655\n*   [![Yes](https://eu4.paradoxwikis.com/images/thumb/d/da/Ledger_yes.png/28px-Ledger_yes.png)](/File:Ledger_yes.png "Yes") Is [![Flag of Japan](https://eu4.paradoxwikis.com/images/thumb/f/fc/Japan.png/20px-Japan.png)](/Japan "Japan") [Japan](/Japan "Japan")\n*   [![Institutions.png](https://eu4.paradoxwikis.com/images/thumb/4/43/Institutions.png/28px-Institutions.png)](/Institutions "Institutions") Has embraced the [![Manufactories](https://eu4.paradoxwikis.com/images/thumb/c/c4/Manufactories.png/28px-Manufactories.png)](/Institutions#Manufactories "Manufactories") Manufactories institution',
    notes:
      'Colonize the west coast of America as soon as possible to gain Colonialism. Do not enforce Sakoku when the option presents itself, since that will make it harder to get Global Trade.',
  },
  {
    id: 'ach_87',
    name: "Magellan's Voyage",
    description: 'Make the first circumnavigation.',
    icon: 'https://eu4.paradoxwikis.com/images/b/be/Magellan%E2%80%99s_Voyage.jpg',
    dlc: '',
    version: '1.10',
    difficulty: 'E',
    game: 'eu4',
    guideUrl: '',
    startingConditions: '',
    completionRequirements:
      '*   [![No](https://eu4.paradoxwikis.com/images/thumb/5/56/Ledger_no_crop.png/28px-Ledger_no_crop.png)](/File:Ledger_no_crop.png "No") *Not* playing as a [released vassal](/Vassal#Release_a_nation "Vassal")\n*   [![Yes](https://eu4.paradoxwikis.com/images/thumb/d/da/Ledger_yes.png/28px-Ledger_yes.png)](/File:Ledger_yes.png "Yes") Is the first to circumnavigate the World.',
    notes:
      "Colonize along the route as much as possible, or get fleet basing rights. Fully-repaired ships can be stationed along the way to join the explorer's fleet before he moves to the next sea tile. If the fleet stops to repair, ships can also be sent to augment it while it is in port. How long the AI takes to circumnavigate varies from game to game.",
  },
  {
    id: 'ach_88',
    name: 'Maharana Pratap',
    description: 'Start as Mewar and field an army of 20 Rajput regiments.',
    icon: 'https://eu4.paradoxwikis.com/images/7/71/Maharana_Pratap.png',
    dlc: '',
    version: '1.26',
    difficulty: 'E',
    game: 'eu4',
    guideUrl: '',
    startingConditions:
      '*   [![Yes](https://eu4.paradoxwikis.com/images/thumb/d/da/Ledger_yes.png/28px-Ledger_yes.png)](/File:Ledger_yes.png "Yes") Playing as [![Flag of Mewar](https://eu4.paradoxwikis.com/images/thumb/7/7d/Mewar.png/20px-Mewar.png)](/Mewar "Mewar") [Mewar](/Mewar "Mewar")',
    completionRequirements:
      '[![Infantry.png](https://eu4.paradoxwikis.com/images/thumb/9/9f/Infantry.png/28px-Infantry.png)](/Infantry "Infantry") Has at least 20 Rajput regiments',
    notes:
      'See [Rajput regiment](/Rajput_regiment "Rajput regiment") and [Special unit force limit](/Special_unit_force_limit "Special unit force limit") for ways to get more Rajput regiments. Forming another country such as Rajputana does not prevent the achievement, but the formed country will still need to have access to the [![Rajputs.png](https://eu4.paradoxwikis.com/images/thumb/5/56/Rajputs.png/28px-Rajputs.png)](/Rajputs_estate "Rajputs estate") Rajputs estate.',
  },
  {
    id: 'ach_89',
    name: 'Multiculturalism',
    description: 'Have 4 different Cultures and 4 different religions represented in your court.',
    icon: 'https://eu4.paradoxwikis.com/images/7/7e/Multiculturalism.png',
    dlc: '',
    version: '1.23',
    difficulty: 'E',
    game: 'eu4',
    guideUrl: '',
    startingConditions:
      '*   [![No](https://eu4.paradoxwikis.com/images/thumb/5/56/Ledger_no_crop.png/28px-Ledger_no_crop.png)](/File:Ledger_no_crop.png "No") No more than 1 custom nation exists in the world\n*   [![No](https://eu4.paradoxwikis.com/images/thumb/5/56/Ledger_no_crop.png/28px-Ledger_no_crop.png)](/File:Ledger_no_crop.png "No") Used no more than 201 nation designer points if playing as a custom nation',
    completionRequirements:
      '*   [![Advisor.png](https://eu4.paradoxwikis.com/images/thumb/6/6a/Advisor.png/28px-Advisor.png)](/Advisor "Advisor") Four different religions in court\n*   [![Culture icon.png](https://eu4.paradoxwikis.com/images/thumb/2/29/Culture_icon.png/28px-Culture_icon.png)](/Culture "Culture") Four different cultures in court',
    notes:
      'Spawned advisors take the culture and religion of a random held province. Easy as [![Flag of Ming](https://eu4.paradoxwikis.com/images/thumb/a/a5/Ming.png/20px-Ming.png)](/Ming "Ming") [Ming](/Ming "Ming"): dismiss advisors until you have one Theravada, one Animist, and one Vajrayana advisor. Release nations to increase the proportion of your provinces which have one of the remaining religions.',
  },
  {
    id: 'ach_90',
    name: 'My True Friend',
    description: 'Go to war in support of a rebel faction and win, enforcing their demands.',
    icon: 'https://eu4.paradoxwikis.com/images/f/fd/My_True_Friend.jpg',
    dlc: '',
    version: '1.8',
    difficulty: 'E',
    game: 'eu4',
    guideUrl: '',
    startingConditions: '',
    completionRequirements:
      '[![Rebel support efficiency.png](https://eu4.paradoxwikis.com/images/thumb/d/d7/Rebel_support_efficiency.png/28px-Rebel_support_efficiency.png)](/Rebel_support_efficiency "Rebel support efficiency") Help a [rebel faction](/Rebel_faction "Rebel faction") win a war against another country',
    notes: 'Can be completed at the same time as the Viva la Revolución! achievement.',
  },
  {
    id: 'ach_91',
    name: 'Networking',
    description: 'Have 100 point spy networks in 3 Rival nations.',
    icon: 'https://eu4.paradoxwikis.com/images/c/c0/Networking.jpg',
    dlc: '',
    version: '1.16',
    difficulty: 'E',
    game: 'eu4',
    guideUrl: '',
    startingConditions: '',
    completionRequirements:
      '[![Yes](https://eu4.paradoxwikis.com/images/thumb/d/da/Ledger_yes.png/28px-Ledger_yes.png)](/File:Ledger_yes.png "Yes") Have 100 point spy networks in 3 rival nations',
    notes:
      'Hard to get with [![Mare Nostrum.png](https://eu4.paradoxwikis.com/images/thumb/f/ff/Mare_Nostrum.png/28px-Mare_Nostrum.png)](/Mare_Nostrum "Mare Nostrum") Mare Nostrum enabled since AI will use [counter-espionage](/Espionage#Counter-espionage "Espionage") against rivals.\n\nA slow but easy method involves starting as a nation with at least 3 diplomats, building the spy networks in your rival nations and waiting until you get the achievement or annexed.',
  },
  {
    id: 'ach_92',
    name: 'Nobody wants to die',
    description: 'Own Timbuktu as Songhai',
    icon: 'https://eu4.paradoxwikis.com/images/f/fd/Nobody_wants_to_die.jpg',
    dlc: '',
    version: '1.3',
    difficulty: 'E',
    game: 'eu4',
    guideUrl: '',
    startingConditions:
      '[![Yes](https://eu4.paradoxwikis.com/images/thumb/d/da/Ledger_yes.png/28px-Ledger_yes.png)](/File:Ledger_yes.png "Yes") Playing as [![Flag of Songhai](https://eu4.paradoxwikis.com/images/thumb/2/24/Songhai.png/20px-Songhai.png)](/Songhai "Songhai") [Songhai](/Songhai "Songhai")',
    completionRequirements:
      '[![Province icon.png](https://eu4.paradoxwikis.com/images/thumb/1/13/Province_icon.png/28px-Province_icon.png)](/Province "Province") Own and core the province of Timbuktu',
    notes:
      'Can be done swiftly by declaring a no-[casus belli](/Casus_belli "Casus belli") war a month from the start of the game, before any alliances are made. Hiring a handful of mercenaries will help with the conquest, whereas hiring an administrative advisor and changing the [national focus](/National_focus "National focus") to administrative will help to core the province sooner.',
  },
  {
    id: 'ach_93',
    name: 'On the Edge of Madness',
    description: 'As Aztecs, reach 95 Doom, then go 20 years without Doom hitting 100.',
    icon: 'https://eu4.paradoxwikis.com/images/5/53/On_the_Edge_of_Madness.jpg',
    dlc: '',
    version: '1.10',
    difficulty: 'E',
    game: 'eu4',
    guideUrl: 'https://eu4.paradoxwikis.com/On_the_Edge_of_Madness',
    startingConditions:
      '*   [![Yes](https://eu4.paradoxwikis.com/images/thumb/d/da/Ledger_yes.png/28px-Ledger_yes.png)](/File:Ledger_yes.png "Yes") Playing as [![Flag of Aztec](https://eu4.paradoxwikis.com/images/thumb/e/ef/Aztec.png/20px-Aztec.png)](/Aztec "Aztec") [Aztec](/Aztec "Aztec")\n*   [![No](https://eu4.paradoxwikis.com/images/thumb/5/56/Ledger_no_crop.png/28px-Ledger_no_crop.png)](/File:Ledger_no_crop.png "No") *Not* using a [random New World](/Random_New_World "Random New World")',
    completionRequirements:
      '*   [![No](https://eu4.paradoxwikis.com/images/thumb/5/56/Ledger_no_crop.png/28px-Ledger_no_crop.png)](/File:Ledger_no_crop.png "No") *Not* playing as a [released vassal](/Vassal#Release_a_nation "Vassal")\n*   [![Yes](https://eu4.paradoxwikis.com/images/thumb/d/da/Ledger_yes.png/28px-Ledger_yes.png)](/File:Ledger_yes.png "Yes") Reach 95 Doom, then survive for 20 years without hitting 100 Doom. Had the flag *doom\\_reached\\_95* for 20 years *and* do not have flag *doom\\_reached\\_100*',
    notes:
      'It is not required to keep doom between 95 and 100 for 20 years, but make sure you are at 95 doom at least once when a month tick happens so the countdown actually starts. Doom may drop below 95 at any time. Passing religious reforms (except the Reform Religion button, which disables doom) will also not prevent the achievement. Changing religion (e.g. to mayan or animist) after hitting 95 doom will also not prevent the achievement.',
  },
  {
    id: 'ach_94',
    name: 'One Family to Rule them All',
    description: 'Have your dynasty on 8 thrones at the same time. Client states do not count.',
    icon: 'https://eu4.paradoxwikis.com/images/7/78/One_Family_to_Rule_them_All.jpg',
    dlc: '',
    version: '1.12',
    difficulty: 'E',
    game: 'eu4',
    guideUrl: '',
    startingConditions: '',
    completionRequirements:
      '*   [![Government monarchy.png](https://eu4.paradoxwikis.com/images/thumb/4/4d/Government_monarchy.png/28px-Government_monarchy.png)](/Monarchy "Monarchy") Is monarchy\n*   [![No](https://eu4.paradoxwikis.com/images/thumb/5/56/Ledger_no_crop.png/28px-Ledger_no_crop.png)](/File:Ledger_no_crop.png "No") Is *not* in a regency\n*   [![Yes](https://eu4.paradoxwikis.com/images/thumb/d/da/Ledger_yes.png/28px-Ledger_yes.png)](/File:Ledger_yes.png "Yes") Have the same [dynasty](/Dynasty "Dynasty") as 8 other non-client state nations',
    notes:
      'Can be easily done as [![Flag of Ming](https://eu4.paradoxwikis.com/images/thumb/a/a5/Ming.png/20px-Ming.png)](/Ming "Ming") [Ming](/Ming "Ming"). Release 8 nations as vassals (make sure you pick nations that will have an eastern religion) and use the *Place Relative on Throne* [Subject interaction](/Subject_nation#Subject_interactions "Subject nation").',
  },
  {
    id: 'ach_95',
    name: 'One King to Rule!',
    description: 'As Poland, become an absolutist monarchy, abolishing the Sejm.',
    icon: 'https://eu4.paradoxwikis.com/images/d/d2/One_King_to_Rule%21.jpg',
    dlc: '',
    version: '1.7',
    difficulty: 'E',
    game: 'eu4',
    guideUrl: 'https://eu4.paradoxwikis.com/One_King_to_Rule!',
    startingConditions:
      '[![Yes](https://eu4.paradoxwikis.com/images/thumb/d/da/Ledger_yes.png/28px-Ledger_yes.png)](/File:Ledger_yes.png "Yes") Playing as [![Flag of Poland](https://eu4.paradoxwikis.com/images/thumb/9/99/Poland.png/20px-Poland.png)](/Poland "Poland") [Poland](/Poland "Poland")',
    completionRequirements:
      '*   [![No](https://eu4.paradoxwikis.com/images/thumb/5/56/Ledger_no_crop.png/28px-Ledger_no_crop.png)](/File:Ledger_no_crop.png "No") *Not* playing as a [released vassal](/Vassal#Release_a_nation "Vassal")\n*   [![Government monarchy.png](https://eu4.paradoxwikis.com/images/thumb/4/4d/Government_monarchy.png/28px-Government_monarchy.png)](/Monarchy "Monarchy") Is a monarchy\n*   [![Absolutism.png](https://eu4.paradoxwikis.com/images/thumb/c/c2/Absolutism.png/28px-Absolutism.png)](/Absolutism "Absolutism") Have 50 [absolutism](/Absolutism "Absolutism")\n*   [![No](https://eu4.paradoxwikis.com/images/thumb/5/56/Ledger_no_crop.png/28px-Ledger_no_crop.png)](/File:Ledger_no_crop.png "No") Has *not* enacted one of the following government reforms:\n    *   ‘[Elective Monarchy](/Monarchy#Elective_Monarchy "Monarchy")’\n    *   ‘[Great Sejm](/Great_Sejm "Great Sejm")’\n    *   ‘[Polish Elective Monarchy](/Polish_Elective_Monarchy "Polish Elective Monarchy")’',
    notes: '',
  },
  {
    id: 'ach_96',
    name: 'One Night in Paris',
    description:
      "Start as England, own and have a core on Paris (do not form another country unless it's Great Britain or the Angevin Kingdom).",
    icon: 'https://eu4.paradoxwikis.com/images/e/e9/One_Night_in_Paris.jpg',
    dlc: '',
    version: '1.1',
    difficulty: 'E',
    game: 'eu4',
    guideUrl: 'https://eu4.paradoxwikis.com/One_Night_in_Paris',
    startingConditions:
      '[![Yes](https://eu4.paradoxwikis.com/images/thumb/d/da/Ledger_yes.png/28px-Ledger_yes.png)](/File:Ledger_yes.png "Yes") Playing as [![Flag of England](https://eu4.paradoxwikis.com/images/thumb/2/21/England.png/20px-England.png)](/England "England") [England](/England "England")',
    completionRequirements:
      '*   [![Yes](https://eu4.paradoxwikis.com/images/thumb/d/da/Ledger_yes.png/28px-Ledger_yes.png)](/File:Ledger_yes.png "Yes") Is [![Flag of England](https://eu4.paradoxwikis.com/images/thumb/2/21/England.png/20px-England.png)](/England "England") [England](/England "England"), [![Flag of Great Britain](https://eu4.paradoxwikis.com/images/thumb/2/2b/Great_Britain.png/20px-Great_Britain.png)](/Great_Britain "Great Britain") [Great Britain](/Great_Britain "Great Britain"), *or* the [![Flag of Angevin Kingdom](https://eu4.paradoxwikis.com/images/thumb/b/be/Angevin_Kingdom.png/20px-Angevin_Kingdom.png)](/Angevin_Kingdom "Angevin Kingdom") [Angevin Kingdom](/Angevin_Kingdom "Angevin Kingdom")\n*   [![Province icon.png](https://eu4.paradoxwikis.com/images/thumb/1/13/Province_icon.png/28px-Province_icon.png)](/Province "Province") Own and core Paris',
    notes: '',
  },
  {
    id: 'ach_97',
    name: 'Pirate Bay of Janjira',
    description: 'Have more than 50% Privateering power in the Gujarat trade node',
    icon: 'https://eu4.paradoxwikis.com/images/2/2a/Pirate_Bay_of_Janjira.png',
    dlc: 'One of',
    version: '1.26',
    difficulty: 'E',
    game: 'eu4',
    guideUrl: '',
    startingConditions: '',
    completionRequirements:
      '*   [![Privateer efficiency.png](https://eu4.paradoxwikis.com/images/thumb/7/7a/Privateer_efficiency.png/28px-Privateer_efficiency.png)](/Privateer_efficiency "Privateer efficiency") Has at least 50% trade power from privateers in the Gujarat trade node',
    notes: '',
  },
  {
    id: 'ach_98',
    name: 'Purify the Temple',
    description:
      'Starting as Riga, enact the Salvific Plutocracy government reform and raid the heretic church of Rome.',
    icon: 'https://eu4.paradoxwikis.com/images/b/ba/Purify_the_Temple.png',
    dlc: '',
    version: '1.34',
    difficulty: 'H',
    game: 'eu4',
    guideUrl: '',
    startingConditions:
      '[![Yes](https://eu4.paradoxwikis.com/images/thumb/d/da/Ledger_yes.png/28px-Ledger_yes.png)](/File:Ledger_yes.png "Yes") Playing as [![Flag of Riga](https://eu4.paradoxwikis.com/images/thumb/4/4c/Riga.png/20px-Riga.png)](/Riga "Riga") [Riga](/Riga "Riga")',
    completionRequirements:
      '*   [![Government theocracy.png](https://eu4.paradoxwikis.com/images/thumb/8/81/Government_theocracy.png/28px-Government_theocracy.png)](/Theocracy "Theocracy") Has enacted the [Salvific Plutocracy](/Salvific_Plutocracy "Salvific Plutocracy") government reform\n*   Raided the province Roma (118) with the peace term *“Raid Heretic Churches”*',
    notes:
      '*“Raid Heretic Churches”* always selects Roma (118) as long as it has a Church or Cathedral. You need to convert to another Christian religion to enact [Salvific Plutocracy](/Salvific_Plutocracy "Salvific Plutocracy"). *“Raid Heretic Churches”* can also be chosen for secondary war participants.',
  },
  {
    id: 'ach_99',
    name: 'Queen of Mercury',
    description: 'As Kilwa, own and have cores on Zanzibar and Bombay (Thana).',
    icon: 'https://eu4.paradoxwikis.com/images/5/5c/Queen_of_Mercury.jpg',
    dlc: '',
    version: '1.6',
    difficulty: 'E',
    game: 'eu4',
    guideUrl: '',
    startingConditions:
      '[![Yes](https://eu4.paradoxwikis.com/images/thumb/d/da/Ledger_yes.png/28px-Ledger_yes.png)](/File:Ledger_yes.png "Yes") Playing as [![Flag of Kilwa](https://eu4.paradoxwikis.com/images/thumb/c/cb/Kilwa.png/20px-Kilwa.png)](/Kilwa "Kilwa") [Kilwa](/Kilwa "Kilwa")',
    completionRequirements:
      '*   [![Yes](https://eu4.paradoxwikis.com/images/thumb/d/da/Ledger_yes.png/28px-Ledger_yes.png)](/File:Ledger_yes.png "Yes") Is [![Flag of Kilwa](https://eu4.paradoxwikis.com/images/thumb/c/cb/Kilwa.png/20px-Kilwa.png)](/Kilwa "Kilwa") [Kilwa](/Kilwa "Kilwa")\n*   [![Province icon.png](https://eu4.paradoxwikis.com/images/thumb/1/13/Province_icon.png/28px-Province_icon.png)](/Province "Province") Own and core Zanzibar and Thana.',
    notes:
      '*   Since Kilwa starts with Zanzibar, essentially the goal is to expand to Thana on the west coast of India which is owned by Gujarat at the start of the game. If you form any nation, you will be ineligible for the achievement.\n*   Much easier with the [![Dharma.png](https://eu4.paradoxwikis.com/images/thumb/f/fc/Dharma.png/28px-Dharma.png)](/Dharma "Dharma") Dharma expansion, as you can simply charter Thana off its owner.',
  },
  {
    id: 'ach_100',
    name: 'Relentless Push East',
    description: 'Starting as a Russian nation, By 1600 own the East Siberian Coastline.',
    icon: 'https://eu4.paradoxwikis.com/images/7/79/Relentless_Push_East.png',
    dlc: '',
    version: '1.22',
    difficulty: 'M',
    game: 'eu4',
    guideUrl: '',
    startingConditions:
      '[![Culture icon.png](https://eu4.paradoxwikis.com/images/thumb/2/29/Culture_icon.png/28px-Culture_icon.png)](/Culture "Culture") Culture group is *East Slavic*',
    completionRequirements:
      '*   [![Time Icon.png](https://eu4.paradoxwikis.com/images/7/70/Time_Icon.png)](/Time "Time") Year is before 1601\n*   [![Province icon.png](https://eu4.paradoxwikis.com/images/thumb/1/13/Province_icon.png/28px-Province_icon.png)](/Province "Province") Own all port provinces in the *[East Siberia](/East_Siberia "East Siberia")* region\n\nExpand\n\n[![Relentless Push East map.png](https://eu4.paradoxwikis.com/images/thumb/e/e0/Relentless_Push_East_map.png/140px-Relentless_Push_East_map.png)](/File:Relentless_Push_East_map.png)\n\n[](/File:Relentless_Push_East_map.png "Enlarge")\n\nThese provinces are Kamchatka, Penzhina, Kagyrgyn, Gizhiga, Tauisk, Okhotsk and Jugjur.',
    notes:
      '*   Note that it is not necessary to core the provinces. Even unfinished colonies count.\n*   This achievement is pretty easy to reach as [![Flag of Muscovy](https://eu4.paradoxwikis.com/images/thumb/4/41/Muscovy.png/20px-Muscovy.png)](/Muscovy "Muscovy") [Muscovy](/Muscovy "Muscovy") and you can finish it 40 to 50 years before the deadline. It is recommended to form [![Flag of Russia](https://eu4.paradoxwikis.com/images/thumb/e/ee/Russia.png/20px-Russia.png)](/Russia "Russia") [Russia](/Russia "Russia") and take advantage of their Siberian Frontier idea, helping idea groups like exploration and expansion will then be optional. But a colonist from these groups can be used to start colonies if the time runs out and one of the Siberian ports has already been cored or fully colonized.',
  },
  {
    id: 'ach_101',
    name: 'Respected',
    description: 'Have 100 prestige, 100 legitimacy and three stability.',
    icon: 'https://eu4.paradoxwikis.com/images/3/33/Respected.jpg',
    dlc: '',
    version: '1.1',
    difficulty: 'VE',
    game: 'eu4',
    guideUrl: '',
    startingConditions: '',
    completionRequirements:
      '*   [![Prestige.png](https://eu4.paradoxwikis.com/images/thumb/f/f3/Yearly_prestige.png/28px-Yearly_prestige.png)](/Prestige "Prestige") Have **100** prestige\n*   [![Legitimacy.png](https://eu4.paradoxwikis.com/images/2/25/Legitimacy.png)](/Legitimacy "Legitimacy") Have **100** legitimacy\n*   [![Icon stability.png](https://eu4.paradoxwikis.com/images/a/ae/Stability.png)](/Stability "Stability") Have **+3** stability',
    notes:
      '*   Fight battles and explore terra incognita to increase prestige.\n*   Maintain positive stability, have heirs with strong claim and control the amount of royal marriages to increase legitimacy.\n*   Wait for stability improving events and invest administrative points to increase stability.\n*   Easy to achieve as [![Flag of Russia](https://eu4.paradoxwikis.com/images/thumb/e/ee/Russia.png/20px-Russia.png)](/Russia "Russia") [Russia](/Russia "Russia"). The decision *“[Make St. Petersburg the Capital](/Russia#Make_St._Petersburg_the_Capital "Russia")”* gives the player [![Prestige.png](https://eu4.paradoxwikis.com/images/thumb/f/f3/Yearly_prestige.png/28px-Yearly_prestige.png)](/Prestige "Prestige") **100** prestige, which fulfills the most difficult requirement if the player had non-negative prestige.\n*   Having a level 3 advisor or higher will eventually cause an event to trigger that will let the player choose to gain [![Prestige.png](https://eu4.paradoxwikis.com/images/thumb/f/f3/Yearly_prestige.png/28px-Yearly_prestige.png)](/Prestige "Prestige") **50** prestige.',
  },
  {
    id: 'ach_102',
    name: 'Royal Authority',
    description: 'Install a union through a succession war.',
    icon: 'https://eu4.paradoxwikis.com/images/c/ce/Royal_Authority.jpg',
    dlc: '',
    version: '1.1',
    difficulty: 'E',
    game: 'eu4',
    guideUrl: 'https://eu4.paradoxwikis.com/Royal_Authority',
    startingConditions: '',
    completionRequirements:
      '[![Yes](https://eu4.paradoxwikis.com/images/thumb/d/da/Ledger_yes.png/28px-Ledger_yes.png)](/File:Ledger_yes.png "Yes") Have installed a union in a succession war.',
    notes:
      '*   Win a war with the "Claim on Throne" or "Restore Union" [casus belli](/Casus_belli "Casus belli"). The former is used in succession wars. Only requires winning a war with the right CB; the peace deal does not actually need to force a union.\n*   Easily done as [![Flag of Muscovy](https://eu4.paradoxwikis.com/images/thumb/4/41/Muscovy.png/20px-Muscovy.png)](/Muscovy "Muscovy") [Muscovy](/Muscovy "Muscovy") against [![Flag of Ryazan](https://eu4.paradoxwikis.com/images/thumb/7/7b/Ryazan.png/20px-Ryazan.png)](/Ryazan "Ryazan") [Ryazan](/Ryazan "Ryazan"), or against [![Flag of Tver](https://eu4.paradoxwikis.com/images/thumb/3/35/Tver.png/20px-Tver.png)](/Tver "Tver") [Tver](/Tver "Tver") with a claim on throne.',
  },
  {
    id: 'ach_103',
    name: 'Rozwi Empire',
    description: 'Starting as Butua, conquer Mutapa (Zimbabwe and Lower Zambezi areas).',
    icon: 'https://eu4.paradoxwikis.com/images/7/7b/Rozwi_Empire.jpg',
    dlc: '',
    version: '1.18',
    difficulty: 'E',
    game: 'eu4',
    guideUrl: '',
    startingConditions:
      '[![Yes](https://eu4.paradoxwikis.com/images/thumb/d/da/Ledger_yes.png/28px-Ledger_yes.png)](/File:Ledger_yes.png "Yes") Playing as [![Flag of Butua](https://eu4.paradoxwikis.com/images/thumb/9/92/Butua.png/20px-Butua.png)](/Butua "Butua") [Butua](/Butua "Butua")',
    completionRequirements:
      '*   Own all provinces in the following areas:\n    *   [![Province icon.png](https://eu4.paradoxwikis.com/images/thumb/1/13/Province_icon.png/28px-Province_icon.png)](/Province "Province") [Butua](/African_regions#Butua "African regions")\n    *   [![Province icon.png](https://eu4.paradoxwikis.com/images/thumb/1/13/Province_icon.png/28px-Province_icon.png)](/Province "Province") [Lower Zambezi](/African_regions#Lower_Zambezi "African regions")\n    *   [![Province icon.png](https://eu4.paradoxwikis.com/images/thumb/1/13/Province_icon.png/28px-Province_icon.png)](/Province "Province") [Zimbabwe](/African_regions#Zimbabwe "African regions")\n\nExpand\n\n[![Rozwi Empire map.png](https://eu4.paradoxwikis.com/images/thumb/3/32/Rozwi_Empire_map.png/140px-Rozwi_Empire_map.png)](/File:Rozwi_Empire_map.png)\n\n[](/File:Rozwi_Empire_map.png "Enlarge")',
    notes:
      'Easy only with [![Conquest of Paradise.png](https://eu4.paradoxwikis.com/images/thumb/3/31/Conquest_of_Paradise.png/28px-Conquest_of_Paradise.png)](/Conquest_of_Paradise "Conquest of Paradise") Conquest of Paradise or [![El Dorado.png](https://eu4.paradoxwikis.com/images/thumb/1/16/El_Dorado.png/28px-El_Dorado.png)](/El_Dorado "El Dorado") El Dorado DLC. Starting in 1444 you can always get Kilwa (and at least one of these: Tumbuka, Maravi, Makua) to support your independence. Declare war ASAP and boost your gold production.\n\nWithout either of these DLCs, you\'re on your own. Save up money and build an army when Mutapa has started integrating you.',
  },
  {
    id: 'ach_104',
    name: 'Shemot is Not',
    description: 'As a Jewish nation, convert all of Egypt to Jewish while having the Jewish Community Aspect active.',
    icon: 'https://eu4.paradoxwikis.com/images/c/cd/Shemot_is_Not.png',
    dlc: '',
    version: '1.32',
    difficulty: 'M',
    game: 'eu4',
    guideUrl: '',
    startingConditions: '',
    completionRequirements:
      '*   [![Tolerance own.png](https://eu4.paradoxwikis.com/images/thumb/d/d9/Tolerance_of_the_true_faith.png/28px-Tolerance_of_the_true_faith.png)](/Tolerance_of_the_true_faith "Tolerance of the true faith") Religion is [![Jewish.png](https://eu4.paradoxwikis.com/images/thumb/c/cd/Jewish.png/28px-Jewish.png)](/Jewish "Jewish") Jewish\n*   [![Yes](https://eu4.paradoxwikis.com/images/thumb/d/da/Ledger_yes.png/28px-Ledger_yes.png)](/File:Ledger_yes.png "Yes") The church aspect “*Jewish Community*” is active\n*   [![Province icon.png](https://eu4.paradoxwikis.com/images/thumb/1/13/Province_icon.png/28px-Province_icon.png)](/Province "Province") All provinces in the Egypt region are [![Jewish.png](https://eu4.paradoxwikis.com/images/thumb/c/cd/Jewish.png/28px-Jewish.png)](/Jewish "Jewish") Jewish\n\nExpand\n\n[![Shemot is Not map.png](https://eu4.paradoxwikis.com/images/thumb/c/cf/Shemot_is_Not_map.png/140px-Shemot_is_Not_map.png)](/File:Shemot_is_Not_map.png)\n\n[](/File:Shemot_is_Not_map.png "Enlarge")',
    notes:
      'Easiest to do as [![Flag of Mamluks](https://eu4.paradoxwikis.com/images/thumb/c/ca/The_Mamluks.png/20px-The_Mamluks.png)](/Mamluks "Mamluks") [Mamluks](/Mamluks "Mamluks"). Conquer Semien (and Dembiya) in [![Flag of Ethiopia](https://eu4.paradoxwikis.com/images/thumb/0/06/Ethiopia.png/20px-Ethiopia.png)](/Ethiopia "Ethiopia") [Ethiopia](/Ethiopia "Ethiopia") and immediately send a missionary with 0 maintenance to switch the rebels to Jewish Zealots (before the previous rebel type in the province has reached 30% progress). Let the rebels spawn and let them convert the country. Once Jewish has become the [dominant religion](/Dominant_religion "Dominant religion"), the rebel demands will also include to change the state religion. Then the demands can be accepted, but it might be beneficial to let them convert more provinces. After becoming Jewish, finish converting Egypt and choose Jewish Community as your first aspect.',
  },
  {
    id: 'ach_105',
    name: 'Sikh Pun',
    description: 'Convert to Sikhism and form the nation of Punjab.',
    icon: 'https://eu4.paradoxwikis.com/images/2/28/Sikh_Pun.png',
    dlc: '',
    version: '1.26',
    difficulty: 'E',
    game: 'eu4',
    guideUrl: '',
    startingConditions:
      '*   [![No](https://eu4.paradoxwikis.com/images/thumb/5/56/Ledger_no_crop.png/28px-Ledger_no_crop.png)](/File:Ledger_no_crop.png "No") *Not* playing as any end-game nation',
    completionRequirements:
      '*   [![Yes](https://eu4.paradoxwikis.com/images/thumb/d/da/Ledger_yes.png/28px-Ledger_yes.png)](/File:Ledger_yes.png "Yes") Is [![Flag of Punjab](https://eu4.paradoxwikis.com/images/thumb/6/63/Punjab.png/20px-Punjab.png)](/Punjab "Punjab") [Punjab](/Punjab "Punjab")\n*   [![Sikhism](https://eu4.paradoxwikis.com/images/thumb/f/f0/Sikh.png/28px-Sikh.png)](/Sikh "Sikh") Religion is Sikh',
    notes:
      'Aside from forming Punjab, releasing Punjab as a vassal and playing it and converting to Sikh is also possible.',
  },
  {
    id: 'ach_106',
    name: 'Strait Talk',
    description: 'As Hormuz, have at least 10 diplomatic reputation',
    icon: 'https://eu4.paradoxwikis.com/images/d/d1/Strait_Talk.jpg',
    dlc: '',
    version: '1.14',
    difficulty: 'E',
    game: 'eu4',
    guideUrl: 'https://eu4.paradoxwikis.com/Strait_Talk',
    startingConditions:
      '[![Yes](https://eu4.paradoxwikis.com/images/thumb/d/da/Ledger_yes.png/28px-Ledger_yes.png)](/File:Ledger_yes.png "Yes") Playing as [![Flag of Hormuz](https://eu4.paradoxwikis.com/images/thumb/f/fa/Hormuz.png/20px-Hormuz.png)](/Hormuz "Hormuz") [Hormuz](/Hormuz "Hormuz")',
    completionRequirements:
      '*   [![No](https://eu4.paradoxwikis.com/images/thumb/5/56/Ledger_no_crop.png/28px-Ledger_no_crop.png)](/File:Ledger_no_crop.png "No") *Not* playing as a [released vassal](/Vassal#Release_a_nation "Vassal")\n*   [![Yes](https://eu4.paradoxwikis.com/images/thumb/d/da/Ledger_yes.png/28px-Ledger_yes.png)](/File:Ledger_yes.png "Yes") Is [![Flag of Hormuz](https://eu4.paradoxwikis.com/images/thumb/f/fa/Hormuz.png/20px-Hormuz.png)](/Hormuz "Hormuz") [Hormuz](/Hormuz "Hormuz")\n*   [![Diplomatic reputation.png](https://eu4.paradoxwikis.com/images/thumb/2/21/Diplomatic_reputation.png/28px-Diplomatic_reputation.png)](/Diplomatic_reputation "Diplomatic reputation") Has at least 10 diplomatic reputation',
    notes:
      "Diplomatic reputation is gained from Hormuz ideas and completing missions. Easier since 1.24 since one of Islam's taxation policies gives +1 Diplomatic reputation.",
  },
  {
    id: 'ach_107',
    name: 'Surfing USA',
    description: 'Form the USA as Hawaii.',
    icon: 'https://eu4.paradoxwikis.com/images/9/97/Surfing_USA.png',
    dlc: '',
    version: '1.32',
    difficulty: 'E',
    game: 'eu4',
    guideUrl: 'https://eu4.paradoxwikis.com/Surfing_USA',
    startingConditions:
      '*   [![No](https://eu4.paradoxwikis.com/images/thumb/5/56/Ledger_no_crop.png/28px-Ledger_no_crop.png)](/File:Ledger_no_crop.png "No") *Not* using a [random New World](/Random_New_World "Random New World")\n*   [![Yes](https://eu4.paradoxwikis.com/images/thumb/d/da/Ledger_yes.png/28px-Ledger_yes.png)](/File:Ledger_yes.png "Yes") Playing as [![Flag of Hawai\'i](https://eu4.paradoxwikis.com/images/thumb/8/8b/HAW.png/20px-HAW.png)](/Oceanian_super-region#Hawai.27i "Hawai\'i")[Hawai\'i](/Oceanian_super-region#Hawai.27i "Oceanian super-region"), [![Flag of Maui](https://eu4.paradoxwikis.com/images/thumb/4/40/Maui.png/20px-Maui.png)](/Maui "Maui") [Maui](/Maui "Maui"), [![Flag of O\'ahu](https://eu4.paradoxwikis.com/images/thumb/9/9c/O%27ahu.png/20px-O%27ahu.png)](/O%27ahu "O\'ahu") [O\'ahu](/O%27ahu "O\'ahu") *or* [![Flag of Kaua\'i](https://eu4.paradoxwikis.com/images/thumb/3/32/Kaua%27i.png/20px-Kaua%27i.png)](/Kaua%27i "Kaua\'i") [Kaua\'i](/Kaua%27i "Kaua\'i")',
    completionRequirements:
      '[![Yes](https://eu4.paradoxwikis.com/images/thumb/d/da/Ledger_yes.png/28px-Ledger_yes.png)](/File:Ledger_yes.png "Yes") Is [![Flag of USA](https://eu4.paradoxwikis.com/images/thumb/3/32/United_States.png/20px-United_States.png)](/USA "USA") [USA](/USA "USA")',
    notes:
      'It is advised to not colonise the nearby islands in your region. To form [![Flag of USA](https://eu4.paradoxwikis.com/images/thumb/3/32/United_States.png/20px-United_States.png)](/USA "USA") [USA](/USA "USA") you need to move your capital to the Colonial Eastern America region, and to be able to do that you will need to move your capital. This can be done if it\'s the only province in a state, i,e, Hawaii. Consider releasing vassals in your home islands to achieve this.\n\nIt is best to use neigbor islands to grind power projection and monarch points for spawning institutions. [O\'ahu](/O%27ahu "O\'ahu") and [Maui](/Maui "Maui") are better candidates, because both border 2 islands.\n\nThe only way to get North America in colonial range by 1480 is by taking [Exploration idea group](/Idea_groups#Exploration "Idea groups") and [Polynesian\\_Navigation](/Polynesian_Navigation "Polynesian Navigation") naval doctrine.',
  },
  {
    id: 'ach_108',
    name: 'Sweet Home Qaraqorum',
    description: 'As the Mughals assimilate Mongolian culture.',
    icon: 'https://eu4.paradoxwikis.com/images/d/d6/Sweet_Home_Qaraqorum.png',
    dlc: '',
    version: '1.26',
    difficulty: 'M',
    game: 'eu4',
    guideUrl: '',
    startingConditions: '',
    completionRequirements:
      '*   [![Yes](https://eu4.paradoxwikis.com/images/thumb/d/da/Ledger_yes.png/28px-Ledger_yes.png)](/File:Ledger_yes.png "Yes") Is [![Flag of Mughals](https://eu4.paradoxwikis.com/images/thumb/e/e6/Mughals.png/20px-Mughals.png)](/Mughals "Mughals") [Mughals](/Mughals "Mughals")\n*   [![Government monarchy.png](https://eu4.paradoxwikis.com/images/thumb/4/4d/Government_monarchy.png/28px-Government_monarchy.png)](/Monarchy "Monarchy") Has the [Mughal Diwan](/Mughal_Diwan "Mughal Diwan") government reform\n*   [![Max promoted cultures.png](https://eu4.paradoxwikis.com/images/thumb/8/8b/Max_promoted_cultures.png/28px-Max_promoted_cultures.png)](/Max_promoted_cultures "Max promoted cultures") Have Mongol as accepted culture',
    notes:
      'Easiest by starting as the [![Flag of Timurids](https://eu4.paradoxwikis.com/images/thumb/6/6a/Timurids.png/20px-Timurids.png)](/Timurids "Timurids") [Timurids](/Timurids "Timurids"). Forming the Mughals should not be a problem as long as you keep your vassals loyal and conquer Delhi. After that you should carve your way up to the Mongolian culture area. Fabricate claims along the way and conquer the provinces needed to reach that area. Usually you can start by declaring war on Uzbek, followed by Oirat. The factions controlling those provinces differ from campaign to campaign. In order to assimilate you need to conquer ALL Mongolian culture provinces. With the Winds of Change DLC mission tree, staying as Timurids is advise to use their bonuses and permanent claim on the mongol region.',
  },
  {
    id: 'ach_109',
    name: 'The Coin is Stronger than the Sword',
    description: 'Charter Company from an Indian nation.',
    icon: 'https://eu4.paradoxwikis.com/images/f/fc/The_Coin_is_Stronger_than_the_Sword.png',
    dlc: '',
    version: '1.26',
    difficulty: 'E',
    game: 'eu4',
    guideUrl: '',
    startingConditions:
      '*   [![No](https://eu4.paradoxwikis.com/images/thumb/5/56/Ledger_no_crop.png/28px-Ledger_no_crop.png)](/File:Ledger_no_crop.png "No") No more than 1 custom nation exists in the world\n*   [![No](https://eu4.paradoxwikis.com/images/thumb/5/56/Ledger_no_crop.png/28px-Ledger_no_crop.png)](/File:Ledger_no_crop.png "No") Used no more than 201 nation designer points',
    completionRequirements:
      '[![Yes](https://eu4.paradoxwikis.com/images/thumb/d/da/Ledger_yes.png/28px-Ledger_yes.png)](/File:Ledger_yes.png "Yes") Has successfully used the Charter Trade Company diplomatic interaction to buy a province in India.',
    notes:
      'Chartering a province from outside India proper will *not* grant the achievement (e.g. buying the Maldives from [![Flag of Vijayanagar](https://eu4.paradoxwikis.com/images/thumb/3/31/Vijayanagar.png/20px-Vijayanagar.png)](/Vijayanagar "Vijayanagar") [Vijayanagar](/Vijayanagar "Vijayanagar")), but chartering a province in India from a country which has it\'s capital somewhere else works.',
  },
  {
    id: 'ach_110',
    name: 'The Emperors new clothes',
    description: 'Overthrow Austria and become the Emperor of the Holy Roman Empire.',
    icon: 'https://eu4.paradoxwikis.com/images/c/c3/The_Emperor%27s_new_clothes.jpg',
    dlc: '',
    version: '1.1',
    difficulty: 'E',
    game: 'eu4',
    guideUrl: '',
    startingConditions:
      '[![No](https://eu4.paradoxwikis.com/images/thumb/5/56/Ledger_no_crop.png/28px-Ledger_no_crop.png)](/File:Ledger_no_crop.png "No") Not playing as [![Flag of Austria](https://eu4.paradoxwikis.com/images/thumb/7/7f/Austria.png/20px-Austria.png)](/Austria "Austria") [Austria](/Austria "Austria")',
    completionRequirements:
      '[![Imperial authority.png](https://eu4.paradoxwikis.com/images/thumb/4/46/Imperial_authority.png/28px-Imperial_authority.png)](/Imperial_authority "Imperial authority") Is emperor of the [Holy Roman Empire](/Holy_Roman_Empire "Holy Roman Empire")',
    notes:
      "Become emperor of the Holy Roman Empire. Austrian players already start as the emperor so they won't get the achievement. Easiest to do as Bohemia.",
  },
  {
    id: 'ach_111',
    name: 'The Five Colonies',
    description: 'Have five colonial nations.',
    icon: 'https://eu4.paradoxwikis.com/images/1/16/The_Five_Colonies.jpg',
    dlc: '',
    version: '1.4',
    difficulty: 'E',
    game: 'eu4',
    guideUrl: '',
    startingConditions: '',
    completionRequirements:
      '[![Subject colony icon.png](https://eu4.paradoxwikis.com/images/thumb/d/de/Subject_colony_icon.png/28px-Subject_colony_icon.png)](/Colonial_nation "Colonial nation") have 5 colonial nations',
    notes: '',
  },
  {
    id: 'ach_112',
    name: 'The Power of Three',
    description: 'Own a Crown Colony, a Self-Governing Colony and a Private Enterprise.',
    icon: 'https://eu4.paradoxwikis.com/images/f/f4/The_Power_of_Three.jpg',
    dlc: '',
    version: '1.31',
    difficulty: 'E',
    game: 'eu4',
    guideUrl: '',
    startingConditions:
      '*   [![No](https://eu4.paradoxwikis.com/images/thumb/5/56/Ledger_no_crop.png/28px-Ledger_no_crop.png)](/File:Ledger_no_crop.png "No") *Not* using a [random New World](/Random_New_World "Random New World")',
    completionRequirements:
      '*   [![Colonists.png](https://eu4.paradoxwikis.com/images/thumb/3/34/Colonists.png/28px-Colonists.png)](/Colonist "Colonist") Has a Crown Colony\n*   [![Colonists.png](https://eu4.paradoxwikis.com/images/thumb/3/34/Colonists.png/28px-Colonists.png)](/Colonist "Colonist") Has a Self-Governing Colony\n*   [![Colonists.png](https://eu4.paradoxwikis.com/images/thumb/3/34/Colonists.png/28px-Colonists.png)](/Colonist "Colonist") Has a Private Enterprise',
    notes: '',
  },
  {
    id: 'ach_113',
    name: 'The Princess is in this Castle',
    description:
      'As a country that does not start with a female heir, have a female heir while having a Castle in your capital (more advanced fort buildings do not count).',
    icon: 'https://eu4.paradoxwikis.com/images/0/01/The_Princess_is_in_this_Castle.jpg',
    dlc: '',
    version: '1.6',
    difficulty: 'E',
    game: 'eu4',
    guideUrl: '',
    startingConditions:
      '[![No](https://eu4.paradoxwikis.com/images/thumb/5/56/Ledger_no_crop.png/28px-Ledger_no_crop.png)](/File:Ledger_no_crop.png "No") Does not have a female [heir](/Heir "Heir")',
    completionRequirements:
      '*   [![No](https://eu4.paradoxwikis.com/images/thumb/5/56/Ledger_no_crop.png/28px-Ledger_no_crop.png)](/File:Ledger_no_crop.png "No") *Not* playing as a [released vassal](/Vassal#Release_a_nation "Vassal")\n*   [![Latin fort01.png](https://eu4.paradoxwikis.com/images/thumb/2/28/Latin_fort01.png/28px-Latin_fort01.png)](/Castle "Castle") Capital has Castle\n*   [![Yes](https://eu4.paradoxwikis.com/images/thumb/d/da/Ledger_yes.png/28px-Ledger_yes.png)](/File:Ledger_yes.png "Yes") Have a female heir',
    notes:
      'Easily done as [![Flag of Castile](https://eu4.paradoxwikis.com/images/thumb/e/ee/Castile.png/20px-Castile.png)](/Castile "Castile") [Castile](/Castile "Castile") by waiting for the Iberian wedding event while not upgrading or deleting the capital fort. Note that most Muslim countries cannot get female heirs, and those that can have a very low probability of getting one.',
  },
  {
    id: 'ach_114',
    name: 'The Spice Must Flow',
    description: 'Form the nation of Malaya.',
    icon: 'https://eu4.paradoxwikis.com/images/f/f9/The_Spice_Must_Flow.png',
    dlc: '',
    version: '1.9',
    difficulty: 'M',
    game: 'eu4',
    guideUrl: '',
    startingConditions: '',
    completionRequirements:
      '*   [![No](https://eu4.paradoxwikis.com/images/thumb/5/56/Ledger_no_crop.png/28px-Ledger_no_crop.png)](/File:Ledger_no_crop.png "No") *Not* playing as a [released vassal](/Vassal#Release_a_nation "Vassal")\n*   [![Yes](https://eu4.paradoxwikis.com/images/thumb/d/da/Ledger_yes.png/28px-Ledger_yes.png)](/File:Ledger_yes.png "Yes") Is [![Flag of Malaya](https://eu4.paradoxwikis.com/images/thumb/1/11/Malaya.png/20px-Malaya.png)](/Malaya "Malaya") [Malaya](/Malaya "Malaya")',
    notes:
      'Easiest as [![Flag of Malacca](https://eu4.paradoxwikis.com/images/thumb/f/fd/Malacca.png/20px-Malacca.png)](/Malacca "Malacca") [Malacca](/Malacca "Malacca") or [![Flag of Pasai](https://eu4.paradoxwikis.com/images/thumb/a/a2/Pasai.png/20px-Pasai.png)](/Pasai "Pasai") [Pasai](/Pasai "Pasai").',
  },
  {
    id: 'ach_115',
    name: 'The White Company',
    description: 'Join a war on the other side of someone to whom you have rented condottieri.',
    icon: 'https://eu4.paradoxwikis.com/images/3/34/The_White_Company.jpg',
    dlc: '',
    version: '1.16',
    difficulty: 'E',
    game: 'eu4',
    guideUrl: 'https://eu4.paradoxwikis.com/The_White_Company',
    startingConditions: '',
    completionRequirements:
      '[![Yes](https://eu4.paradoxwikis.com/images/thumb/d/da/Ledger_yes.png/28px-Ledger_yes.png)](/File:Ledger_yes.png "Yes") Join a war against a nation that you hire out condottieri to. Have the country flag *white\\_company*',
    notes:
      "As you don't have to accept a call to arms for a few months the easiest way to do this is when one of your allies asks you to join a war, first rent out condottieri to one of their enemies in the war then accept the call to arms.",
  },
  {
    id: 'ach_116',
    name: 'To the Bone',
    description: 'As Bone, use pillage capital at least 7 times.',
    icon: 'https://eu4.paradoxwikis.com/images/d/d1/To_the_Bone.jpg',
    dlc: '',
    version: '1.31',
    difficulty: 'E',
    game: 'eu4',
    guideUrl: '',
    startingConditions:
      '*   [![Yes](https://eu4.paradoxwikis.com/images/thumb/d/da/Ledger_yes.png/28px-Ledger_yes.png)](/File:Ledger_yes.png "Yes") Playing as [![Flag of Bone](https://eu4.paradoxwikis.com/images/thumb/2/2c/Bone.png/20px-Bone.png)](/Bone "Bone") [Bone](/Bone "Bone")\n*   [![No](https://eu4.paradoxwikis.com/images/thumb/5/56/Ledger_no_crop.png/28px-Ledger_no_crop.png)](/File:Ledger_no_crop.png "No") *Not* using a [random New World](/Random_New_World "Random New World")',
    completionRequirements:
      '*   [![Yes](https://eu4.paradoxwikis.com/images/thumb/d/da/Ledger_yes.png/28px-Ledger_yes.png)](/File:Ledger_yes.png "Yes") Is [![Flag of Bone](https://eu4.paradoxwikis.com/images/thumb/2/2c/Bone.png/20px-Bone.png)](/Bone "Bone") [Bone](/Bone "Bone")\n*   [![Yes](https://eu4.paradoxwikis.com/images/thumb/d/da/Ledger_yes.png/28px-Ledger_yes.png)](/File:Ledger_yes.png "Yes") Has used the pillage capital [peace term](/Peace_term "Peace term") at least 7 times',
    notes: '',
  },
  {
    id: 'ach_117',
    name: 'Trade Hegemon',
    description: 'Starting as any European country, conquer and have cores on Aden, Hormoz and Malacca.',
    icon: 'https://eu4.paradoxwikis.com/images/3/32/Trade_Hegemon.jpg',
    dlc: '',
    version: '1.2',
    difficulty: 'E',
    game: 'eu4',
    guideUrl: 'https://eu4.paradoxwikis.com/Trade_Hegemon',
    startingConditions:
      '[![Capital.png](https://eu4.paradoxwikis.com/images/thumb/6/6e/Capital.png/28px-Capital.png)](/Capital "Capital") Capital is in Europe',
    completionRequirements:
      '[![Province icon.png](https://eu4.paradoxwikis.com/images/thumb/1/13/Province_icon.png/28px-Province_icon.png)](/Province "Province") Own and core the provinces of Aden, Hormuz and Malacca\n\nExpand\n\n[![Trade Hegemon map.png](https://eu4.paradoxwikis.com/images/thumb/a/a3/Trade_Hegemon_map.png/140px-Trade_Hegemon_map.png)](/File:Trade_Hegemon_map.png)\n\n[](/File:Trade_Hegemon_map.png "Enlarge")',
    notes:
      'Note that nations such as [![Flag of Ottomans](https://eu4.paradoxwikis.com/images/thumb/8/89/Ottomans.png/20px-Ottomans.png)](/Ottomans "Ottomans") [Ottomans](/Ottomans "Ottomans"), [![Flag of Kazan](https://eu4.paradoxwikis.com/images/thumb/3/33/Kazan.png/20px-Kazan.png)](/Kazan "Kazan") [Kazan](/Kazan "Kazan") and [![Flag of Great Horde](https://eu4.paradoxwikis.com/images/thumb/b/b7/Great_Horde.png/20px-Great_Horde.png)](/Great_Horde "Great Horde") [Great Horde](/Great_Horde "Great Horde") are considered as European countries.',
  },
  {
    id: 'ach_118',
    name: 'Turn the Table',
    description: 'As a colony, break free and vassalize your former overlord without forming any other nation.',
    icon: 'https://eu4.paradoxwikis.com/images/3/33/Turn_the_Table.jpg',
    dlc: '',
    version: '1.4',
    difficulty: 'M',
    game: 'eu4',
    guideUrl: '',
    startingConditions: '',
    completionRequirements:
      '*   [![Subject colony icon.png](https://eu4.paradoxwikis.com/images/thumb/d/de/Subject_colony_icon.png/28px-Subject_colony_icon.png)](/Colonial_nation "Colonial nation") Playing as a former colonial nation\n*   [![Vassalage.png](https://eu4.paradoxwikis.com/images/thumb/7/71/Vassalage.png/28px-Vassalage.png)](/Vassalage "Vassalage") Vassalize the former owner of the colonial nation',
    notes:
      '*   Forming another country as the colonial nation *will* prevent this achievement even if that country is a colonial formable like [![Flag of USA](https://eu4.paradoxwikis.com/images/thumb/3/32/United_States.png/20px-United_States.png)](/USA "USA") [USA](/USA "USA") or [![Flag of Australia](https://eu4.paradoxwikis.com/images/thumb/4/43/Australia.png/20px-Australia.png)](/Australia "Australia") [Australia](/Australia "Australia").\n*   Easily done as [![Flag of Ternate](https://eu4.paradoxwikis.com/images/thumb/4/41/Ternate.png/20px-Ternate.png)](/Ternate "Ternate") [Ternate](/Ternate "Ternate"). Colonize Australia to the point where a colonial nation forms. Release them and select \'Play As\', then vassalize your former overlord.',
  },
  {
    id: 'ach_119',
    name: 'Turning the Tide',
    description: 'Start as a Steppe Horde in 1444 and embrace all institutions.',
    icon: 'https://eu4.paradoxwikis.com/images/f/fd/Turning_the_Tide.jpg',
    dlc: '',
    version: '1.3',
    difficulty: 'VE',
    game: 'eu4',
    guideUrl: '',
    startingConditions:
      '[![Tab domestic government.png](https://eu4.paradoxwikis.com/images/thumb/f/ff/Tab_domestic_government.png/28px-Tab_domestic_government.png)](/Government "Government") Government type is [![Government steppe horde.png](https://eu4.paradoxwikis.com/images/thumb/a/a8/Government_native.png/28px-Government_native.png)](/Steppe_nomads "Steppe nomads") *Steppe Nomads*',
    completionRequirements:
      '*   [![No](https://eu4.paradoxwikis.com/images/thumb/5/56/Ledger_no_crop.png/28px-Ledger_no_crop.png)](/File:Ledger_no_crop.png "No") *Not* playing as a [released vassal](/Vassal#Release_a_nation "Vassal")\n*   [![Institutions.png](https://eu4.paradoxwikis.com/images/thumb/4/43/Institutions.png/28px-Institutions.png)](/Institutions "Institutions") Have embraced all [institutions](/Institutions "Institutions")',
    notes:
      'Much faster in pre-1.17 patches, where the requirement is westernizing, which can be done by around 1520 instead of waiting until 1750 for the institutions to appear.',
  },
  {
    id: 'ach_120',
    name: 'Vasa or Wettin?',
    description:
      'Get a ruler of your dynasty on the throne of Poland or the Commonwealth while they are an elective monarchy.',
    icon: 'https://eu4.paradoxwikis.com/images/5/56/Vasa_or_Wettin%3F.jpg',
    dlc: '',
    version: '1.7',
    difficulty: 'E',
    game: 'eu4',
    guideUrl: '',
    startingConditions:
      '[![No](https://eu4.paradoxwikis.com/images/thumb/5/56/Ledger_no_crop.png/28px-Ledger_no_crop.png)](/File:Ledger_no_crop.png "No") Not playing as [![Flag of Poland](https://eu4.paradoxwikis.com/images/thumb/9/99/Poland.png/20px-Poland.png)](/Poland "Poland") [Poland](/Poland "Poland")',
    completionRequirements:
      '*   [![No](https://eu4.paradoxwikis.com/images/thumb/5/56/Ledger_no_crop.png/28px-Ledger_no_crop.png)](/File:Ledger_no_crop.png "No") *Not* playing as a [released vassal](/Vassal#Release_a_nation "Vassal")\n*   [![Yes](https://eu4.paradoxwikis.com/images/thumb/d/da/Ledger_yes.png/28px-Ledger_yes.png)](/File:Ledger_yes.png "Yes") [![Flag of Poland](https://eu4.paradoxwikis.com/images/thumb/9/99/Poland.png/20px-Poland.png)](/Poland "Poland") [Poland](/Poland "Poland") or the [![Flag of Commonwealth](https://eu4.paradoxwikis.com/images/thumb/d/df/Commonwealth.png/20px-Commonwealth.png)](/Commonwealth "Commonwealth") [Commonwealth](/Commonwealth "Commonwealth") has a ruler that is of your dynasty and was acquired via the elective monarchy.',
    notes:
      'Once Poland enables [elective monarchy](/Elective_monarchy "Elective monarchy") countries of the same religion can support candidates to their throne via diplomatic action. High diplomatic reputation and good relations with Poland increase the likelihood gaining support.\n\nIf Poland chooses a local noble instead of the PU with Lithuania it won\'t get an elective monarchy, making this achievement impossible.',
  },
  {
    id: 'ach_121',
    name: 'Viva la Revolución!',
    description: 'Have rebels you support in another country enforce their demands.',
    icon: 'https://eu4.paradoxwikis.com/images/5/58/Viva_la_Revoluci%C3%B3n%21.jpg',
    dlc: '',
    version: '1.1',
    difficulty: 'E',
    game: 'eu4',
    guideUrl: '',
    startingConditions: '',
    completionRequirements:
      '[![Yes](https://eu4.paradoxwikis.com/images/thumb/d/da/Ledger_yes.png/28px-Ledger_yes.png)](/File:Ledger_yes.png "Yes") Have [supported rebels](/Support_rebels "Support rebels") in another country that enforced their demands.',
    notes:
      'Possible to do as [![Flag of Tondo](https://eu4.paradoxwikis.com/images/thumb/2/21/Tondo.png/20px-Tondo.png)](/Tondo "Tondo") [Tondo](/Tondo "Tondo"), as neighbouring [![Flag of Pangasinan](https://eu4.paradoxwikis.com/images/thumb/0/07/Pangasinan.png/20px-Pangasinan.png)](/Pangasinan "Pangasinan") [Pangasinan](/Pangasinan "Pangasinan") starts with a single province of a heathen religion. Immediately rival them and declare an offensive war using the Humiliate Rival CB. Sit on their capital to increase their war exhaustion until you can support the Animist rebels. When an uprising is about to take place, white peace. The rebels will enforce their demands as soon as they take the province.',
  },
  {
    id: 'ach_122',
    name: 'Voting Streak',
    description: 'Successfully pass 11 issues in a row in Parliament.',
    icon: 'https://eu4.paradoxwikis.com/images/c/c8/Voting_Streak.jpg',
    dlc: '',
    version: '1.12',
    difficulty: 'E',
    game: 'eu4',
    guideUrl: 'https://eu4.paradoxwikis.com/Voting_Streak',
    startingConditions: '',
    completionRequirements:
      '[![Yes](https://eu4.paradoxwikis.com/images/thumb/d/da/Ledger_yes.png/28px-Ledger_yes.png)](/File:Ledger_yes.png "Yes") Pass 11 [parliament](/Parliament "Parliament") issues in a row',
    notes:
      ' [![Flag of England](https://eu4.paradoxwikis.com/images/thumb/2/21/England.png/20px-England.png)](/England "England") [England](/England "England"), [![Flag of Navarra](https://eu4.paradoxwikis.com/images/thumb/9/9a/Navarra.png/20px-Navarra.png)](/Navarra "Navarra") [Navarra](/Navarra "Navarra"), [![Flag of Poland](https://eu4.paradoxwikis.com/images/thumb/9/99/Poland.png/20px-Poland.png)](/Poland "Poland") [Poland](/Poland "Poland"), and [![Flag of Scotland](https://eu4.paradoxwikis.com/images/thumb/2/27/Scotland.png/20px-Scotland.png)](/Scotland "Scotland") [Scotland](/Scotland "Scotland") start with a parliament in 1444.',
  },
  {
    id: 'ach_123',
    name: 'Where Am I?',
    description: 'As a New World native with Random New World active, explore the entire New World.',
    icon: 'https://eu4.paradoxwikis.com/images/b/b8/Where_Am_I%3F.png',
    dlc: '',
    version: '1.28',
    difficulty: 'E',
    game: 'eu4',
    guideUrl: '',
    startingConditions:
      '*   [![Tab domestic government.png](https://eu4.paradoxwikis.com/images/thumb/f/ff/Tab_domestic_government.png/28px-Tab_domestic_government.png)](/Government "Government") Government type is [![Government steppe horde.png](https://eu4.paradoxwikis.com/images/thumb/a/a8/Government_native.png/28px-Government_native.png)](/Steppe_nomads "Steppe nomads") *Native*\n*   [![Capital.png](https://eu4.paradoxwikis.com/images/thumb/6/6e/Capital.png/28px-Capital.png)](/Capital "Capital") Capital is in the New World\n*   [![Yes](https://eu4.paradoxwikis.com/images/thumb/d/da/Ledger_yes.png/28px-Ledger_yes.png)](/File:Ledger_yes.png "Yes") Is using a [random New World](/Random_New_World "Random New World")\n*   [![No](https://eu4.paradoxwikis.com/images/thumb/5/56/Ledger_no_crop.png/28px-Ledger_no_crop.png)](/File:Ledger_no_crop.png "No") No more than 1 custom nation exists in the world\n*   [![No](https://eu4.paradoxwikis.com/images/thumb/5/56/Ledger_no_crop.png/28px-Ledger_no_crop.png)](/File:Ledger_no_crop.png "No") Used no more than 201 nation designer points if playing as a custom nation',
    completionRequirements:
      '[![Explorer](https://eu4.paradoxwikis.com/images/thumb/c/ca/Explorer.png/28px-Explorer.png)](/Military_leaders "Explorer") Has discovered all provinces in the New World.',
    notes:
      'Eligible countries show “Tribe” as the government in the nation selection screen or are custom nations with one of the government reforms in the “Native” category\n\nSometimes a random world is generated where all of the land is already discovered by most native nations, one only needs to unpause in order to get the achievement',
  },
  {
    id: 'ach_124',
    name: 'Winged Hussars',
    description: 'Have Winged Hussars as your active unit with more than +50% cavalry combat ability.',
    icon: 'https://eu4.paradoxwikis.com/images/0/0a/Winged_Hussars.jpg',
    dlc: '',
    version: '1.2',
    difficulty: 'E',
    game: 'eu4',
    guideUrl: '',
    startingConditions: '',
    completionRequirements:
      '*   [![Cavalry.png](https://eu4.paradoxwikis.com/images/thumb/1/15/Cavalry.png/28px-Cavalry.png)](/Cavalry "Cavalry") Have [Winged Hussars](/Land_units#Eastern "Land units") as your primary cavalry unit\n*   [![Cavalry power.png](https://eu4.paradoxwikis.com/images/thumb/d/dc/Cavalry_combat_ability.png/28px-Cavalry_combat_ability.png)](/Cavalry_combat_ability "Cavalry combat ability") Have a [cavalry combat ability](/Cavalry_combat_ability "Cavalry combat ability") of at least 50%',
    notes:
      '*   Winged Hussars cavalry unit is part of the [![Eastern technology group](https://eu4.paradoxwikis.com/images/thumb/6/6d/Eastern.png/28px-Eastern.png)](/Technology_group "Eastern technology group") Eastern technology group (military tech level 22). This is not the same as the [Winged Hussars special unit](/Special_land_units#Winged_Hussars "Special land units").\n*   For details on [![Cavalry power.png](https://eu4.paradoxwikis.com/images/thumb/d/dc/Cavalry_combat_ability.png/28px-Cavalry_combat_ability.png)](/Cavalry_combat_ability "Cavalry combat ability") cavalry combat ability see the article on [Land units](/Land_units#Combat_ability_2 "Land units").\n*   Poland is the easiest nation to play for this achievement due to the cavalry combat ability in their national ideas. Taking Aristocratic and Quality ideas will give Poland enough combat ability to satisfy this achievement.',
  },
  {
    id: 'ach_125',
    name: 'World Discoverer',
    description: 'Discover all non-wasteland land provinces.',
    icon: 'https://eu4.paradoxwikis.com/images/d/d6/World_Discoverer.jpg',
    dlc: '',
    version: '1.1',
    difficulty: 'VE',
    game: 'eu4',
    guideUrl: '',
    startingConditions: '',
    completionRequirements:
      '[![Explorer](https://eu4.paradoxwikis.com/images/thumb/c/ca/Explorer.png/28px-Explorer.png)](/Military_leaders "Explorer") Discover all [terra incognita](/Terra_incognita "Terra incognita").',
    notes:
      'You do not have to discover all Terra Incognita yourself, as TI can be automatically uncovered via spread of discovery. The condition is simply that no TI exists in the world for you, not including sea zones. Wastelands are not needed. Easiest in Europe. With Mare Nostrum DLC, a good way to find the last few is to check the [Request to share maps](/Diplomacy#Request_to_share_maps "Diplomacy") diplomatic action on colonizers or anybody else.',
  },
  {
    id: 'ach_126',
    name: 'You Get A New Home, And You Get A New Home',
    description: 'Expel 5 different minorities to your colonies.',
    icon: 'https://eu4.paradoxwikis.com/images/3/3e/You_Get_a_New_Home%2C_and_You_Get_a_New_Home.png',
    dlc: '',
    version: '1.28',
    difficulty: 'E',
    game: 'eu4',
    guideUrl: '',
    startingConditions:
      '*   [![No](https://eu4.paradoxwikis.com/images/thumb/5/56/Ledger_no_crop.png/28px-Ledger_no_crop.png)](/File:Ledger_no_crop.png "No") No more than 1 custom nation exists in the world\n*   [![No](https://eu4.paradoxwikis.com/images/thumb/5/56/Ledger_no_crop.png/28px-Ledger_no_crop.png)](/File:Ledger_no_crop.png "No") Used no more than 201 nation designer points if playing as a custom nation',
    completionRequirements:
      '[![Yes](https://eu4.paradoxwikis.com/images/thumb/d/da/Ledger_yes.png/28px-Ledger_yes.png)](/File:Ledger_yes.png "Yes") Has expelled 5 different minorities to colonial provinces.',
    notes: '',
  },
  {
    id: 'ach_127',
    name: 'A Fine Goosestep',
    description: 'Form Prussia and have at least 125% Discipline.',
    icon: 'https://eu4.paradoxwikis.com/images/3/35/A_Fine_Goosestep.jpg',
    dlc: '',
    version: '1.12',
    difficulty: 'E',
    game: 'eu4',
    guideUrl: '',
    startingConditions: '',
    completionRequirements:
      '*   [![No](https://eu4.paradoxwikis.com/images/thumb/5/56/Ledger_no_crop.png/28px-Ledger_no_crop.png)](/File:Ledger_no_crop.png "No") *Not* playing as a [released vassal](/Vassal#Release_a_nation "Vassal")\n*   [![Yes](https://eu4.paradoxwikis.com/images/thumb/d/da/Ledger_yes.png/28px-Ledger_yes.png)](/File:Ledger_yes.png "Yes") Is [![Flag of Prussia](https://eu4.paradoxwikis.com/images/thumb/2/28/Prussia.png/20px-Prussia.png)](/Prussia "Prussia") [Prussia](/Prussia "Prussia")\n*   [![Discipline.png](https://eu4.paradoxwikis.com/images/thumb/5/59/Discipline.png/28px-Discipline.png)](/Discipline "Discipline") Have 125% discipline',
    notes:
      'The following actions can increase Prussian discipline:\n\nExpand\n\n*   Increasing [![Militarization of state.png](https://eu4.paradoxwikis.com/images/thumb/d/de/Militarization_of_state.png/28px-Militarization_of_state.png)](/Militarization "Militarization") Militarization of Country (maximum **+10%**)\n*   Increasing [![Absolutism.png](https://eu4.paradoxwikis.com/images/thumb/c/c2/Absolutism.png/28px-Absolutism.png)](/Absolutism "Absolutism") Absolutism (maximum **+5%**)\n*   Completing [![Quality idea group.png](https://eu4.paradoxwikis.com/images/thumb/7/72/Quality_idea_group.png/28px-Quality_idea_group.png)](/Quality_ideas "Quality ideas") Quality Ideas (**+5%**)\n*   Unlocking “Esprit de Corps” in [![Offensive idea group.png](https://eu4.paradoxwikis.com/images/thumb/4/40/Offensive_idea_group.png/28px-Offensive_idea_group.png)](/Offensive_ideas "Offensive ideas") Offensive ideas (**+5%**)\n*   Economic-Quality policy “Weapon Quality Standards” (**+5%**)\n*   Unlocking the [![Icon ideas.png](https://eu4.paradoxwikis.com/images/thumb/d/db/Idea_bonus.png/28px-Idea_bonus.png)](/Idea "Idea") Prussian ambition (**+5%**)\n*   Having a Commandant [![Advisor.png](https://eu4.paradoxwikis.com/images/thumb/6/6a/Advisor.png/28px-Advisor.png)](/Advisor "Advisor") advisor (**+5%**)\n*   Having a ruler with the [![Discipline.png](https://eu4.paradoxwikis.com/images/thumb/5/59/Discipline.png/28px-Discipline.png)](/Discipline "Discipline") “Strict” personality (**+5%**)\n*   Converting to [![Protestantism](https://eu4.paradoxwikis.com/images/thumb/0/0d/Protestant.png/28px-Protestant.png)](/Protestant "Protestant") Protestantism and obtaining the [![Church power modifier.png](https://eu4.paradoxwikis.com/images/thumb/f/fd/Church_power.png/28px-Church_power.png)](/Church_power "Church power") Aspect of Faith “Holy Sacraments” (**+2.5%**)',
  },
  {
    id: 'ach_128',
    name: 'A tale of two Families',
    description: "Starting as Vijayanagar or Bahmanis conquer the other's capital and have them not exist.",
    icon: 'https://eu4.paradoxwikis.com/images/f/fd/A_tale_of_two_Families.jpg',
    dlc: '',
    version: '1.18',
    difficulty: 'M',
    game: 'eu4',
    guideUrl: '',
    startingConditions:
      '[![Yes](https://eu4.paradoxwikis.com/images/thumb/d/da/Ledger_yes.png/28px-Ledger_yes.png)](/File:Ledger_yes.png "Yes") Playing as *either*:\n\n*    [![Flag of Bahmanis](https://eu4.paradoxwikis.com/images/thumb/d/de/Bahmanis.png/20px-Bahmanis.png)](/Bahmanis "Bahmanis") [Bahmanis](/Bahmanis "Bahmanis")\n*    [![Flag of Vijayanagar](https://eu4.paradoxwikis.com/images/thumb/3/31/Vijayanagar.png/20px-Vijayanagar.png)](/Vijayanagar "Vijayanagar") [Vijayanagar](/Vijayanagar "Vijayanagar")',
    completionRequirements:
      '*   [![Province icon.png](https://eu4.paradoxwikis.com/images/thumb/1/13/Province_icon.png/28px-Province_icon.png)](/Province "Province") Own and core the provinces Bidar (1948) and Vijayanagar (541)\n*   Is *either*:\n    *    [![Flag of Bahmanis](https://eu4.paradoxwikis.com/images/thumb/d/de/Bahmanis.png/20px-Bahmanis.png)](/Bahmanis "Bahmanis") [Bahmanis](/Bahmanis "Bahmanis") and [![Flag of Vijayanagar](https://eu4.paradoxwikis.com/images/thumb/3/31/Vijayanagar.png/20px-Vijayanagar.png)](/Vijayanagar "Vijayanagar") [Vijayanagar](/Vijayanagar "Vijayanagar") doesn\'t exist\n    *    [![Flag of Vijayanagar](https://eu4.paradoxwikis.com/images/thumb/3/31/Vijayanagar.png/20px-Vijayanagar.png)](/Vijayanagar "Vijayanagar") [Vijayanagar](/Vijayanagar "Vijayanagar") and [![Flag of Bahmanis](https://eu4.paradoxwikis.com/images/thumb/d/de/Bahmanis.png/20px-Bahmanis.png)](/Bahmanis "Bahmanis") [Bahmanis](/Bahmanis "Bahmanis") doesn\'t exist',
    notes: '',
  },
  {
    id: 'ach_129',
    name: 'AEIOU',
    description: 'Complete the Austrian mission tree.',
    icon: 'https://eu4.paradoxwikis.com/images/7/70/AEIOU.png',
    dlc: 'or',
    version: '1.30',
    difficulty: 'M',
    game: 'eu4',
    guideUrl: '',
    startingConditions:
      '[![No](https://eu4.paradoxwikis.com/images/thumb/5/56/Ledger_no_crop.png/28px-Ledger_no_crop.png)](/File:Ledger_no_crop.png "No") *Not* using a [random New World](/Random_New_World "Random New World")',
    completionRequirements:
      '*   [![Mission.png](https://eu4.paradoxwikis.com/images/thumb/2/29/Mission.png/24px-Mission.png)](/Missions "Missions") Complete one of the following mission trees:\n    *   [![Emperor](https://eu4.paradoxwikis.com/images/thumb/c/c5/Emperor.png/28px-Emperor.png)](/Emperor_\\(DLC\\) "Emperor") [Austrian missions from the Emperor DLC](/Austrian_missions_without_winds_of_change "Austrian missions without winds of change")\n    *   [![Winds of Change.png](https://eu4.paradoxwikis.com/images/thumb/7/75/Winds_of_Change.png/28px-Winds_of_Change.png)](/Winds_of_Change "Winds of Change") [Austrian missions from the Winds of Change DLC](/Austrian_missions "Austrian missions")',
    notes:
      'You can trigger the religious peace by enacting "Proclaim Erbkaisertum" reform, since it will not block the mission [A Holy Empire](/Austrian_missions#A_Holy_Empire "Austrian missions"). Forming another country which gives new missions (e.g. [![Flag of Germany](https://eu4.paradoxwikis.com/images/thumb/9/9b/Germany.png/20px-Germany.png)](/Germany "Germany") [Germany](/Germany "Germany") or unifying the [![Flag of Holy Roman Empire](https://eu4.paradoxwikis.com/images/thumb/e/ee/Holy_Roman_Empire.png/20px-Holy_Roman_Empire.png)](/Holy_Roman_Empire_\\(country\\) "Holy Roman Empire (country)") [Holy Roman Empire](/Holy_Roman_Empire_\\(country\\) "Holy Roman Empire (country)")) will prevent you from getting the achievement.',
  },
  {
    id: 'ach_130',
    name: 'All Your Trade Are Belong to Us',
    description:
      'Have the highest trade power in Genoa, Venice and English Channel while having an income of at least 300 ducats per month.',
    icon: 'https://eu4.paradoxwikis.com/images/d/d0/All_Your_Trade_Are_Belong_to_Us.jpg',
    dlc: '',
    version: '1.12',
    difficulty: 'M',
    game: 'eu4',
    guideUrl: '',
    startingConditions: '',
    completionRequirements:
      '*   [![Global trade power.png](https://eu4.paradoxwikis.com/images/thumb/1/10/Trade_power.png/28px-Trade_power.png)](/Trade_power "Trade power") Highest Trade power in Genoa, Venice, and English Channel\n*   [![Income.png](https://eu4.paradoxwikis.com/images/a/aa/Income.png)](/Income "Income") Have 300 income',
    notes:
      'Easily done as [![Flag of England](https://eu4.paradoxwikis.com/images/thumb/2/21/England.png/20px-England.png)](/England "England") [England](/England "England") or [![Flag of Netherlands](https://eu4.paradoxwikis.com/images/thumb/3/32/Netherlands.png/20px-Netherlands.png)](/Netherlands "Netherlands") [Netherlands](/Netherlands "Netherlands") by controlling the English Channel via provincial trade power and sending light ships to the Venice and Genoa trade nodes.',
  },
  {
    id: 'ach_131',
    name: 'Arabian Coffee',
    description: 'Form Arabia and be the nation producing the most coffee in the world.',
    icon: 'https://eu4.paradoxwikis.com/images/e/e2/Arabian_Coffee.jpg',
    dlc: '',
    version: '1.10',
    difficulty: 'M',
    game: 'eu4',
    guideUrl: '',
    startingConditions: '',
    completionRequirements:
      '*   [![No](https://eu4.paradoxwikis.com/images/thumb/5/56/Ledger_no_crop.png/28px-Ledger_no_crop.png)](/File:Ledger_no_crop.png "No") *Not* playing as a [released vassal](/Vassal#Release_a_nation "Vassal")\n*   [![Yes](https://eu4.paradoxwikis.com/images/thumb/d/da/Ledger_yes.png/28px-Ledger_yes.png)](/File:Ledger_yes.png "Yes") Is [![Flag of Arabia](https://eu4.paradoxwikis.com/images/thumb/e/ed/Arabia.png/20px-Arabia.png)](/Arabia "Arabia") [Arabia](/Arabia "Arabia")\n*   [![Coffee.png](https://eu4.paradoxwikis.com/images/thumb/e/e9/Coffee.png/28px-Coffee.png)](/Coffee "Coffee") Be production leader of coffee',
    notes:
      'Coffee is common in the area around [![Flag of Ethiopia](https://eu4.paradoxwikis.com/images/thumb/0/06/Ethiopia.png/20px-Ethiopia.png)](/Ethiopia "Ethiopia") [Ethiopia](/Ethiopia "Ethiopia") and [![Flag of Mali](https://eu4.paradoxwikis.com/images/thumb/f/f0/Mali.png/20px-Mali.png)](/Mali "Mali") [Mali](/Mali "Mali"). If you are not the leading producer after conquering these areas, build manufactories or conquer Mesoamerica. Forming [![Flag of Arabia](https://eu4.paradoxwikis.com/images/thumb/e/ed/Arabia.png/20px-Arabia.png)](/Arabia "Arabia") [Arabia](/Arabia "Arabia") is easiest as The [![Flag of Mamluks](https://eu4.paradoxwikis.com/images/thumb/c/ca/The_Mamluks.png/20px-The_Mamluks.png)](/Mamluks "Mamluks") [Mamluks](/Mamluks "Mamluks").',
  },
  {
    id: 'ach_132',
    name: 'Atwix Legacy',
    description: 'Have 10 personal unions at the same time.',
    icon: 'https://eu4.paradoxwikis.com/images/9/9d/Atwix_Legacy.png',
    dlc: '',
    version: '1.32',
    difficulty: 'M',
    game: 'eu4',
    guideUrl: '',
    startingConditions: '',
    completionRequirements:
      '[![Personal union.png](https://eu4.paradoxwikis.com/images/thumb/3/39/Personal_union.png/28px-Personal_union.png)](/Personal_union "Personal union") Have 10 or more personal unions',
    notes:
      'A good way is to choose a country with many PUs in its mission tree such as Hungary, Bohemia or Austria. Follow Atwix guide and make use of the new favor feature to spread your dynasty. Ensure that your PU subjects are fairly large to avoid inheriting their throne.',
  },
  {
    id: 'ach_133',
    name: 'Barbarossa',
    description: 'As a Maghrebi nation, have 500 light ships privateering at the same time.',
    icon: 'https://eu4.paradoxwikis.com/images/c/cc/Barbarossa.png',
    dlc: 'One of',
    version: '1.9',
    difficulty: 'M',
    game: 'eu4',
    guideUrl: '',
    startingConditions:
      '[![Culture icon.png](https://eu4.paradoxwikis.com/images/thumb/2/29/Culture_icon.png/28px-Culture_icon.png)](/Culture "Culture") Culture group is *Maghrebi*',
    completionRequirements:
      '[![Yes](https://eu4.paradoxwikis.com/images/thumb/d/da/Ledger_yes.png/28px-Ledger_yes.png)](/File:Ledger_yes.png "Yes") has at least 500 ships [privateering](/Privateering "Privateering")',
    notes: '',
  },
  {
    id: 'ach_134',
    name: 'Bengal Tiger',
    description: 'Start as Bengal and own Samarkand as a core province.',
    icon: 'https://eu4.paradoxwikis.com/images/7/79/Bengal_Tiger.png',
    dlc: '',
    version: '1.9',
    difficulty: 'M',
    game: 'eu4',
    guideUrl: '',
    startingConditions:
      '[![Yes](https://eu4.paradoxwikis.com/images/thumb/d/da/Ledger_yes.png/28px-Ledger_yes.png)](/File:Ledger_yes.png "Yes") Playing as [![Flag of Bengal](https://eu4.paradoxwikis.com/images/thumb/c/c6/Bengal.png/20px-Bengal.png)](/Bengal "Bengal") [Bengal](/Bengal "Bengal")',
    completionRequirements:
      '[![Province icon.png](https://eu4.paradoxwikis.com/images/thumb/1/13/Province_icon.png/28px-Province_icon.png)](/Province "Province") Own and core Samarkand.',
    notes: '',
  },
  {
    id: 'ach_135',
    name: 'Bleed Them Dry',
    description: 'Have 10 different War Reparations being paid to you at the same time.',
    icon: 'https://eu4.paradoxwikis.com/images/d/dc/Bleed_Them_Dry.jpg',
    dlc: '',
    version: '1.12',
    difficulty: 'M',
    game: 'eu4',
    guideUrl: '',
    startingConditions: '',
    completionRequirements:
      '[![Yes](https://eu4.paradoxwikis.com/images/thumb/d/da/Ledger_yes.png/28px-Ledger_yes.png)](/File:Ledger_yes.png "Yes") Have 10 War Reparations at the same time',
    notes:
      'Can be done more easily as [![Flag of Austria](https://eu4.paradoxwikis.com/images/thumb/7/7f/Austria.png/20px-Austria.png)](/Austria "Austria") [Austria](/Austria "Austria") or current Holy Roman Emperor.',
  },
  {
    id: 'ach_136',
    name: 'Breaking the Yoke',
    description: 'As Ryazan, own Saratov, Crimea and Kazan while being independent.',
    icon: 'https://eu4.paradoxwikis.com/images/7/7a/Breaking_the_Yoke.png',
    dlc: '',
    version: '1.22',
    difficulty: 'H',
    game: 'eu4',
    guideUrl: '',
    startingConditions:
      '[![Yes](https://eu4.paradoxwikis.com/images/thumb/d/da/Ledger_yes.png/28px-Ledger_yes.png)](/File:Ledger_yes.png "Yes") Playing as [![Flag of Ryazan](https://eu4.paradoxwikis.com/images/thumb/7/7b/Ryazan.png/20px-Ryazan.png)](/Ryazan "Ryazan") [Ryazan](/Ryazan "Ryazan")',
    completionRequirements:
      '*   [![No](https://eu4.paradoxwikis.com/images/thumb/5/56/Ledger_no_crop.png/28px-Ledger_no_crop.png)](/File:Ledger_no_crop.png "No") Is *not* a subject nation\n*   [![Province icon.png](https://eu4.paradoxwikis.com/images/thumb/1/13/Province_icon.png/28px-Province_icon.png)](/Province "Province") Own the provinces of Crimea (284), Kazan (1082) and Saratov (303)\n\nExpand\n\n[![Breaking the Yoke map.png](https://eu4.paradoxwikis.com/images/thumb/2/24/Breaking_the_Yoke_map.png/140px-Breaking_the_Yoke_map.png)](/File:Breaking_the_Yoke_map.png)\n\n[](/File:Breaking_the_Yoke_map.png "Enlarge")',
    notes: '',
  },
  {
    id: 'ach_137',
    name: 'Carthago Delenda Est',
    description: 'As an Italian culture nation, make sure entire Tunis Area is at 100 devastation.',
    icon: 'https://eu4.paradoxwikis.com/images/b/bb/Carthago_Delenda_Est.png',
    dlc: '',
    version: '1.20',
    difficulty: 'E',
    game: 'eu4',
    guideUrl: '',
    startingConditions:
      '[![Culture icon.png](https://eu4.paradoxwikis.com/images/thumb/2/29/Culture_icon.png/28px-Culture_icon.png)](/Culture "Culture") Culture group is *Latin*',
    completionRequirements:
      '*   [![Culture icon.png](https://eu4.paradoxwikis.com/images/thumb/2/29/Culture_icon.png/28px-Culture_icon.png)](/Culture "Culture") Culture group is *Latin*\n*   [![Province icon.png](https://eu4.paradoxwikis.com/images/thumb/1/13/Province_icon.png/28px-Province_icon.png)](/Province "Province") All provinces in the Tunisia area have [![Devastation icon.png](https://eu4.paradoxwikis.com/images/thumb/8/8c/Devastation.png/28px-Devastation.png)](/Devastation "Devastation") 100 devastation',
    notes:
      'Culture must be Latin at game start *and* when Tunisia is devastated. [![Flag of Naples](https://eu4.paradoxwikis.com/images/thumb/b/b8/Naples.png/20px-Naples.png)](/Naples "Naples") [Naples](/Naples "Naples") is by far the strongest and closest Latin nation in 1444. Regardless of the nation selected, declare a war in which land may be taken from Tunis. Take the Tunisia area in the war. Then go bankrupt repeatedly until you have 100 devastation (going bankrupt adds 10 devastation to all provinces). The first bankruptcy can be declared manually, but this button can\'t be used while being bankrupt. So the subsequent bankruptcies must be achieved by taking the maximum amount of loans and spending all the money while running a deficit. A high deficit can be achieved by using the loans to hire and upgrade advisors. This is far faster than trying to raise devastation using other methods such as occupying the land while at war and using scorch earth.',
  },
  {
    id: 'ach_138',
    name: 'Cherrypicking',
    description: 'Conscript a 3 star general from a Daimyo Subject.',
    icon: 'https://eu4.paradoxwikis.com/images/1/10/Cherrypicking.png',
    dlc: '',
    version: '1.20',
    difficulty: 'E',
    game: 'eu4',
    guideUrl: '',
    startingConditions:
      '[![Culture icon.png](https://eu4.paradoxwikis.com/images/thumb/2/29/Culture_icon.png/28px-Culture_icon.png)](/Culture "Culture") Culture group is *Japanese*',
    completionRequirements:
      '[![Yes](https://eu4.paradoxwikis.com/images/thumb/d/da/Ledger_yes.png/28px-Ledger_yes.png)](/File:Ledger_yes.png "Yes") Conscript a 3-star general from a Daimyo subject',
    notes:
      'The most reliable way is to vassalize a Jurchen tribe and make them fulfill their mission [Unite the Jurchen Tribes](/Manchurian_missions_without_Domination#Unite_the_Jurchen_Tribes "Manchurian missions without Domination")(the [![Domination.png](https://eu4.paradoxwikis.com/images/thumb/3/3d/Domination.png/28px-Domination.png)](/Domination "Domination") Domination DLC must be *deactivated*) which gives a 3-star general as a reward. This can be done in under a month by creating a custom nation shogun, releasing a Jurchen subject and feeding them the required provinces.\n\nAnother way to get a subject with a 3-star general would be to vassalize [![Flag of Ayutthaya](https://eu4.paradoxwikis.com/images/thumb/9/9d/Ayutthaya.png/20px-Ayutthaya.png)](/Ayutthaya "Ayutthaya") [Ayutthaya](/Ayutthaya "Ayutthaya") and help them complete the mission [Embassy to Japan](/Siamese_missions#Embassy_to_Japan "Siamese missions"). But this requires that they have not completed the mission already.',
  },
  {
    id: 'ach_139',
    name: 'Core-fu',
    description: 'Force a nation to revoke 5 cores in one peace deal as Corfu.',
    icon: 'https://eu4.paradoxwikis.com/images/0/0d/Core-fu.jpg',
    dlc: '',
    version: '1.18',
    difficulty: 'H',
    game: 'eu4',
    guideUrl: 'https://eu4.paradoxwikis.com/Core-fu',
    startingConditions: '',
    completionRequirements:
      '*   [![Yes](https://eu4.paradoxwikis.com/images/thumb/d/da/Ledger_yes.png/28px-Ledger_yes.png)](/File:Ledger_yes.png "Yes") Is [![Flag of Corfu](https://eu4.paradoxwikis.com/images/thumb/e/ef/Corfu.png/20px-Corfu.png)](/Corfu "Corfu") [Corfu](/Corfu "Corfu")\n*   [![Yes](https://eu4.paradoxwikis.com/images/thumb/d/da/Ledger_yes.png/28px-Ledger_yes.png)](/File:Ledger_yes.png "Yes") Forced a country to revoke 5 cores in one peace deal',
    notes:
      'Although this achievement can theoretically be started as any nation due to Corfu being a releasable nation, the cores need to be revoked while you are Corfu. Forcing a nation to revoke cores as another nation, then releasing Corfu will not count.',
  },
  {
    id: 'ach_140',
    name: 'Dar al-Islam',
    description: 'Unify Islam under your rule.',
    icon: 'https://eu4.paradoxwikis.com/images/8/84/Dar_al-Islam.jpg',
    dlc: '',
    version: '1.14',
    difficulty: 'M',
    game: 'eu4',
    guideUrl: 'https://eu4.paradoxwikis.com/Dar_al-Islam',
    startingConditions: '',
    completionRequirements:
      '*   [![Yes](https://eu4.paradoxwikis.com/images/thumb/d/da/Ledger_yes.png/28px-Ledger_yes.png)](/File:Ledger_yes.png "Yes") Is in the Muslim [religious group](/Religious_group "Religious group").\n*   [![Yes](https://eu4.paradoxwikis.com/images/thumb/d/da/Ledger_yes.png/28px-Ledger_yes.png)](/File:Ledger_yes.png "Yes") Has country modifier *[A United Islam](/Unify_Islam "Unify Islam")*\n\nExpand\n\nEnact the "Unify Islam" decision. Requires the following provinces:\n\n[![Unify Islam.png](https://eu4.paradoxwikis.com/images/thumb/7/73/Unify_Islam.png/140px-Unify_Islam.png)](/File:Unify_Islam.png)\n\n[](/File:Unify_Islam.png "Enlarge")',
    notes:
      '*   Requires [Star and Crescent](/Star_and_Crescent "Star and Crescent") DLC.\n*   Easiest to do as [![Flag of Ottomans](https://eu4.paradoxwikis.com/images/thumb/8/89/Ottomans.png/20px-Ottomans.png)](/Ottomans "Ottomans") [Ottomans](/Ottomans "Ottomans").',
  },
  {
    id: 'ach_141',
    name: 'Definitely the Sultan of Rum',
    description: 'Own and have cores on Rome, Moscow and Istanbul as Ottomans or Rum.',
    icon: 'https://eu4.paradoxwikis.com/images/a/ad/Definitely_the_Sultan_of_Rum.jpg',
    dlc: '',
    version: '1.1',
    difficulty: 'M',
    game: 'eu4',
    guideUrl: '',
    startingConditions: '',
    completionRequirements:
      '*   [![Yes](https://eu4.paradoxwikis.com/images/thumb/d/da/Ledger_yes.png/28px-Ledger_yes.png)](/File:Ledger_yes.png "Yes") Is [![Flag of Ottomans](https://eu4.paradoxwikis.com/images/thumb/8/89/Ottomans.png/20px-Ottomans.png)](/Ottomans "Ottomans") [Ottomans](/Ottomans "Ottomans") or [![Flag of Rûm](https://eu4.paradoxwikis.com/images/thumb/8/85/R%C3%BBm.png/20px-R%C3%BBm.png)](/R%C3%BBm "Rûm") [Rûm](/R%C3%BBm "Rûm")\n*   [![Province icon.png](https://eu4.paradoxwikis.com/images/thumb/1/13/Province_icon.png/28px-Province_icon.png)](/Province "Province") Own and core Moskva, Constantinople, and Roma.\n\nExpand\n\n[![Definitely the Sultan of Rum map.png](https://eu4.paradoxwikis.com/images/thumb/c/ce/Definitely_the_Sultan_of_Rum_map.png/140px-Definitely_the_Sultan_of_Rum_map.png)](/File:Definitely_the_Sultan_of_Rum_map.png)\n\n[](/File:Definitely_the_Sultan_of_Rum_map.png "Enlarge")',
    notes: 'Make sure to attack Muscovy ASAP to remove a future potential threat.',
  },
  {
    id: 'ach_142',
    name: "Don't be Cilli",
    description: 'Starting as Cilli, form another nation.',
    icon: 'https://eu4.paradoxwikis.com/images/e/ec/Don%E2%80%99t_be_Cilli.png',
    dlc: '',
    version: '1.30',
    difficulty: 'M',
    game: 'eu4',
    guideUrl: '',
    startingConditions:
      '*   [![Yes](https://eu4.paradoxwikis.com/images/thumb/d/da/Ledger_yes.png/28px-Ledger_yes.png)](/File:Ledger_yes.png "Yes") Playing as [![Flag of Cilli](https://eu4.paradoxwikis.com/images/thumb/7/71/Cilli.png/20px-Cilli.png)](/Cilli "Cilli") [Cilli](/Cilli "Cilli")\n*   [![No](https://eu4.paradoxwikis.com/images/thumb/5/56/Ledger_no_crop.png/28px-Ledger_no_crop.png)](/File:Ledger_no_crop.png "No") *Not* using a [random New World](/Random_New_World "Random New World")',
    completionRequirements:
      '*   [![No](https://eu4.paradoxwikis.com/images/thumb/5/56/Ledger_no_crop.png/28px-Ledger_no_crop.png)](/File:Ledger_no_crop.png "No") is *not* [![Flag of Cilli](https://eu4.paradoxwikis.com/images/thumb/7/71/Cilli.png/20px-Cilli.png)](/Cilli "Cilli") [Cilli](/Cilli "Cilli")\n*   [![No](https://eu4.paradoxwikis.com/images/thumb/5/56/Ledger_no_crop.png/28px-Ledger_no_crop.png)](/File:Ledger_no_crop.png "No") *Not* playing as a [released vassal](/Vassal#Release_a_nation "Vassal")',
    notes:
      'Can be done by annexing [![Flag of Croatia](https://eu4.paradoxwikis.com/images/thumb/9/94/Croatia.png/20px-Croatia.png)](/Croatia "Croatia") [Croatia](/Croatia "Croatia"), then culture shifting and re-forming it. Use the fact that you are eligible to form a royal marriage with both [![Flag of Austria](https://eu4.paradoxwikis.com/images/thumb/7/7f/Austria.png/20px-Austria.png)](/Austria "Austria") [Austria](/Austria "Austria") and Hungary in the early game and later grab alliances with [![Flag of Poland](https://eu4.paradoxwikis.com/images/thumb/9/99/Poland.png/20px-Poland.png)](/Poland "Poland") [Poland](/Poland "Poland") and/or [![Flag of Bohemia](https://eu4.paradoxwikis.com/images/thumb/4/41/Bohemia.png/20px-Bohemia.png)](/Bohemia "Bohemia") [Bohemia](/Bohemia "Bohemia") to defeat Hungary for the important provinces.',
  },
  {
    id: 'ach_143',
    name: 'Even Better than Piet Heyn',
    description: 'Gain over 100 gold from privateering a single treasure fleet.',
    icon: 'https://eu4.paradoxwikis.com/images/a/a2/Even_Better_than_Piet_Heyn.jpg',
    dlc: '',
    version: '1.10',
    difficulty: 'M',
    game: 'eu4',
    guideUrl: '',
    startingConditions: '',
    completionRequirements:
      '[![Yes](https://eu4.paradoxwikis.com/images/thumb/d/da/Ledger_yes.png/28px-Ledger_yes.png)](/File:Ledger_yes.png "Yes") Gained over 100 gold by plundering a treasure fleet.',
    notes: '',
  },
  {
    id: 'ach_144',
    name: 'Fine Financials',
    description: 'Own Eight level 3 Centres of Trade.',
    icon: 'https://eu4.paradoxwikis.com/images/2/26/Fine_Financials.png',
    dlc: '',
    version: '1.26',
    difficulty: 'M',
    game: 'eu4',
    guideUrl: '',
    startingConditions:
      '*   [![No](https://eu4.paradoxwikis.com/images/thumb/5/56/Ledger_no_crop.png/28px-Ledger_no_crop.png)](/File:Ledger_no_crop.png "No") No more than 1 custom nation exists in the world\n*   [![No](https://eu4.paradoxwikis.com/images/thumb/5/56/Ledger_no_crop.png/28px-Ledger_no_crop.png)](/File:Ledger_no_crop.png "No") Used no more than 201 nation designer points',
    completionRequirements:
      '[![Yes](https://eu4.paradoxwikis.com/images/thumb/d/da/Ledger_yes.png/28px-Ledger_yes.png)](/File:Ledger_yes.png "Yes") Own 8 provinces that have a level 3 center of trade.',
    notes:
      'The maximum number of level 3 centers of trade equals the number of merchants you have. It should be easy to get more merchants with trade companies.',
  },
  {
    id: 'ach_145',
    name: 'For Odin!',
    description:
      'Starting as a Norse custom nation with no more than 200 points and a maximum of 5 provinces, own & core Scandinavia and the British Isles and convert it all to Norse.',
    icon: 'https://eu4.paradoxwikis.com/images/4/4a/For_Odin%21.jpg',
    dlc: '',
    version: '1.14',
    difficulty: 'H',
    game: 'eu4',
    guideUrl: '',
    startingConditions:
      '*   [![Nation designer.png](https://eu4.paradoxwikis.com/images/a/ab/Nation_designer.png)](/Nation_designer "Nation designer") Playing as a custom nation\n*   [![Yes](https://eu4.paradoxwikis.com/images/thumb/d/da/Ledger_yes.png/28px-Ledger_yes.png)](/File:Ledger_yes.png "Yes") Only 1 custom nation exists in the world\n*   [![No](https://eu4.paradoxwikis.com/images/thumb/5/56/Ledger_no_crop.png/28px-Ledger_no_crop.png)](/File:Ledger_no_crop.png "No") Used no more than 201 nation designer points\n*   [![No](https://eu4.paradoxwikis.com/images/thumb/5/56/Ledger_no_crop.png/28px-Ledger_no_crop.png)](/File:Ledger_no_crop.png "No") No more than [![Province icon.png](https://eu4.paradoxwikis.com/images/thumb/1/13/Province_icon.png/28px-Province_icon.png)](/Province "Province") 5 provinces\n*   [![Norse.png](https://eu4.paradoxwikis.com/images/thumb/c/ce/Norse.png/28px-Norse.png)](/Norse "Norse") Religion is Norse',
    completionRequirements:
      '*   [![No](https://eu4.paradoxwikis.com/images/thumb/5/56/Ledger_no_crop.png/28px-Ledger_no_crop.png)](/File:Ledger_no_crop.png "No") *Not* playing as a [released vassal](/Vassal#Release_a_nation "Vassal")\n*   [![Norse.png](https://eu4.paradoxwikis.com/images/thumb/c/ce/Norse.png/28px-Norse.png)](/Norse "Norse") Religion is Norse\n*   [![Province icon.png](https://eu4.paradoxwikis.com/images/thumb/1/13/Province_icon.png/28px-Province_icon.png)](/Province "Province") Own and core all provinces in [Britain](/European_regions#Britain "European regions") and [Scandinavia](/Scandinavia_\\(region\\) "Scandinavia (region)").\n*   [![Norse.png](https://eu4.paradoxwikis.com/images/thumb/c/ce/Norse.png/28px-Norse.png)](/Norse "Norse") All provinces in Britain and Scandinavia have Norse religion.\n\nExpand\n\n[![](https://eu4.paradoxwikis.com/images/thumb/5/59/For_Odin.png/140px-For_Odin.png)](/File:For_Odin.png)\n\n[](/File:For_Odin.png "Enlarge")\n\nBritain and Scandinavia',
    notes:
      'Can also be paired with [![From Humble Origins.jpg](https://eu4.paradoxwikis.com/images/thumb/5/59/From_Humble_Origins.jpg/28px-From_Humble_Origins.jpg)](/File:From_Humble_Origins.jpg) [From Humble Origins](#From_Humble_Origins) and [![Ideas Guy.jpg](https://eu4.paradoxwikis.com/images/thumb/3/3b/Ideas_Guy.jpg/28px-Ideas_Guy.jpg)](/File:Ideas_Guy.jpg) [Ideas Guy](#Ideas_Guy)',
  },
  {
    id: 'ach_146',
    name: 'Fugger Banking',
    description: 'As Augsburg, subsidize 3 Great Powers 20% of their income while having less than 20 provinces.',
    icon: 'https://eu4.paradoxwikis.com/images/5/51/Fugger_Banking.png',
    dlc: '',
    version: '1.32',
    difficulty: 'H',
    game: 'eu4',
    guideUrl: '',
    startingConditions:
      '*   [![Yes](https://eu4.paradoxwikis.com/images/thumb/d/da/Ledger_yes.png/28px-Ledger_yes.png)](/File:Ledger_yes.png "Yes") Playing as [![Flag of Augsburg](https://eu4.paradoxwikis.com/images/thumb/2/25/Augsburg.png/20px-Augsburg.png)](/Augsburg "Augsburg") [Augsburg](/Augsburg "Augsburg")',
    completionRequirements:
      '*   [![Yes](https://eu4.paradoxwikis.com/images/thumb/d/da/Ledger_yes.png/28px-Ledger_yes.png)](/File:Ledger_yes.png "Yes") Is [![Flag of Augsburg](https://eu4.paradoxwikis.com/images/thumb/2/25/Augsburg.png/20px-Augsburg.png)](/Augsburg "Augsburg") [Augsburg](/Augsburg "Augsburg")\n*   [![Province icon.png](https://eu4.paradoxwikis.com/images/thumb/1/13/Province_icon.png/28px-Province_icon.png)](/Province "Province") less than 20 provinces\n*   [![Yes](https://eu4.paradoxwikis.com/images/thumb/d/da/Ledger_yes.png/28px-Ledger_yes.png)](/File:Ledger_yes.png "Yes") [Subsidize](/Subsidies "Subsidies") 3 [![Great power.png](https://eu4.paradoxwikis.com/images/thumb/f/fc/Great_power.png/24px-Great_power.png)](/Great_power "Great power") Great Powers at least 20% of their income.',
    notes:
      "The subsidies also count as income, so the subsidies have to be 25% of the income before subsidies. The total income can be seen in the Income Comparison page in the ledger. The Country page doesn't show all income sources. You can subsidize up to 50% of your income to each country, which means you need to reach at least half the income of the 3 poorest great powers.\n\nA good way to get it quickly is to get a hold of the Inntal or Eger goldmine and to develop it.",
  },
  {
    id: 'ach_147',
    name: 'Ganges Khan',
    description: 'Start as Tribal nation in India and become a Steppe Horde.',
    icon: 'https://eu4.paradoxwikis.com/images/7/7e/Ganges_Khan.png',
    dlc: '',
    version: '1.26',
    difficulty: 'M',
    game: 'eu4',
    guideUrl: '',
    startingConditions:
      '*   [![Government tribal.png](https://eu4.paradoxwikis.com/images/thumb/a/a5/Government_tribal.png/28px-Government_tribal.png)](/Tribal_government "Tribal government") Government type is Tribal\n*   [![Capital.png](https://eu4.paradoxwikis.com/images/thumb/6/6e/Capital.png/28px-Capital.png)](/Capital "Capital") Capital is in India superregion',
    completionRequirements:
      '*   [![Government steppe horde.png](https://eu4.paradoxwikis.com/images/thumb/a/a8/Government_native.png/28px-Government_native.png)](/Steppe_nomads "Steppe nomads") Has the Steppe Nomads government reform',
    notes:
      '*   This achievement is only visible if the [![Dharma.png](https://eu4.paradoxwikis.com/images/thumb/f/fc/Dharma.png/28px-Dharma.png)](/Dharma "Dharma") Dharma *or* [![Emperor](https://eu4.paradoxwikis.com/images/thumb/c/c5/Emperor.png/28px-Emperor.png)](/Emperor_\\(DLC\\) "Emperor") Emperor DLC is enabled, but it can be completed without them.\n\nEligible countries are:\n\nExpand\n\n*    [![Flag of Bastar](https://eu4.paradoxwikis.com/images/thumb/8/82/Bastar.png/20px-Bastar.png)](/Bastar "Bastar") [Bastar](/Bastar "Bastar")\n*    [![Flag of Bishnupur](https://eu4.paradoxwikis.com/images/thumb/f/fd/Bishnupur.png/20px-Bishnupur.png)](/Bishnupur "Bishnupur") [Bishnupur](/Bishnupur "Bishnupur")\n*    [![Flag of Chanda](https://eu4.paradoxwikis.com/images/thumb/6/67/Chanda.png/20px-Chanda.png)](/Chanda "Chanda") [Chanda](/Chanda "Chanda")\n*    [![Flag of Garha](https://eu4.paradoxwikis.com/images/thumb/d/dd/Garha.png/20px-Garha.png)](/Garha "Garha") [Garha](/Garha "Garha")\n*    [![Flag of Garjat](https://eu4.paradoxwikis.com/images/thumb/2/2b/Garjat.png/20px-Garjat.png)](/Garjat "Garjat") [Garjat](/Garjat "Garjat")\n*    [![Flag of Jangladesh](https://eu4.paradoxwikis.com/images/thumb/d/df/Jangladesh.png/20px-Jangladesh.png)](/Jangladesh "Jangladesh") [Jangladesh](/Jangladesh "Jangladesh")\n*    [![Flag of Jeypore](https://eu4.paradoxwikis.com/images/thumb/e/eb/Jeypore.png/20px-Jeypore.png)](/Jeypore "Jeypore") [Jeypore](/Jeypore "Jeypore")\n*    [![Flag of Jhalavad](https://eu4.paradoxwikis.com/images/thumb/d/d0/Jhalavad.png/20px-Jhalavad.png)](/Jhalavad "Jhalavad") [Jhalavad](/Jhalavad "Jhalavad")\n*    [![Flag of Jharkhand](https://eu4.paradoxwikis.com/images/thumb/a/a3/Jharkhand.png/20px-Jharkhand.png)](/Jharkhand "Jharkhand") [Jharkhand](/Jharkhand "Jharkhand")\n*    [![Flag of Junagarh](https://eu4.paradoxwikis.com/images/thumb/e/e3/Junagarh.png/20px-Junagarh.png)](/Junagarh "Junagarh") [Junagarh](/Junagarh "Junagarh")\n*    [![Flag of Kachar](https://eu4.paradoxwikis.com/images/thumb/3/3e/Kachar.png/20px-Kachar.png)](/Kachar "Kachar") [Kachar](/Kachar "Kachar")\n*    [![Flag of Kalahandi](https://eu4.paradoxwikis.com/images/thumb/2/2d/Kalahandi.png/20px-Kalahandi.png)](/Kalahandi "Kalahandi") [Kalahandi](/Kalahandi "Kalahandi")\n*    [![Flag of Keonhjar](https://eu4.paradoxwikis.com/images/thumb/7/77/Keonhjar.png/20px-Keonhjar.png)](/Keonhjar "Keonhjar") [Keonhjar](/Keonhjar "Keonhjar")\n*    [![Flag of Kutch](https://eu4.paradoxwikis.com/images/thumb/e/e9/Kutch.png/20px-Kutch.png)](/Kutch "Kutch") [Kutch](/Kutch "Kutch")\n*    [![Flag of Ladakh](https://eu4.paradoxwikis.com/images/thumb/5/55/Ladakh.png/20px-Ladakh.png)](/Ladakh "Ladakh") [Ladakh](/Ladakh "Ladakh")\n*    [![Flag of Manipur](https://eu4.paradoxwikis.com/images/thumb/7/71/Manipur.png/20px-Manipur.png)](/Manipur "Manipur") [Manipur](/Manipur "Manipur")\n*    [![Flag of Patna](https://eu4.paradoxwikis.com/images/thumb/2/23/Patna.png/20px-Patna.png)](/Patna "Patna") [Patna](/Patna "Patna")\n*    [![Flag of Parlakhimidi](https://eu4.paradoxwikis.com/images/thumb/e/e6/Parlakhimidi.png/20px-Parlakhimidi.png)](/Parlakhimidi "Parlakhimidi") [Parlakhimidi](/Parlakhimidi "Parlakhimidi")\n*    [![Flag of Porbandar](https://eu4.paradoxwikis.com/images/thumb/c/cb/Porbandar.png/20px-Porbandar.png)](/Porbandar "Porbandar") [Porbandar](/Porbandar "Porbandar")\n*    [![Flag of Ratanpur](https://eu4.paradoxwikis.com/images/thumb/8/8d/Ratanpur.png/20px-Ratanpur.png)](/Ratanpur "Ratanpur") [Ratanpur](/Ratanpur "Ratanpur")\n*    [![Flag of Sadiya](https://eu4.paradoxwikis.com/images/thumb/8/86/Sadiya.png/20px-Sadiya.png)](/Sadiya "Sadiya") [Sadiya](/Sadiya "Sadiya")\n*    [![Flag of Tripura](https://eu4.paradoxwikis.com/images/thumb/9/94/Tripura.png/20px-Tripura.png)](/Tripura "Tripura") [Tripura](/Tripura "Tripura")',
  },
  {
    id: 'ach_148',
    name: 'Georgia on my Mind',
    description: 'Fully own all three Georgias.',
    icon: 'https://eu4.paradoxwikis.com/images/6/6b/Georgia_on_my_Mind.png',
    dlc: '',
    version: '1.9',
    difficulty: 'M',
    game: 'eu4',
    guideUrl: '',
    startingConditions:
      '[![No](https://eu4.paradoxwikis.com/images/thumb/5/56/Ledger_no_crop.png/28px-Ledger_no_crop.png)](/File:Ledger_no_crop.png "No") *Not* using a [random New World](/Random_New_World "Random New World").',
    completionRequirements:
      '[![Province icon.png](https://eu4.paradoxwikis.com/images/thumb/1/13/Province_icon.png/28px-Province_icon.png)](/Province "Province") Own or have a non-tributary subject own all provinces in the areas: [Kartli-Kakheti](/Kartli-Kakheti "Kartli-Kakheti"), [Samtskhe](/European_regions#Samtskhe "European regions") and [Imereti](/European_regions#Imereti "European regions").\n\n*   [![Province icon.png](https://eu4.paradoxwikis.com/images/thumb/1/13/Province_icon.png/28px-Province_icon.png)](/Province "Province") Own or have a non-tributary subject own all provinces in the areas: [Georgia](/North_American_regions#Georgia "North American regions") and [Upper Georgia](/Upper_Georgia "Upper Georgia")\n*   [![Province icon.png](https://eu4.paradoxwikis.com/images/thumb/1/13/Province_icon.png/28px-Province_icon.png)](/Province "Province") Own or have a non-tributary subject own the province of South Georgia (2025)\n\nExpand\n\n[![Georgia on my Mind map.png](https://eu4.paradoxwikis.com/images/thumb/2/2b/Georgia_on_my_Mind_map.png/140px-Georgia_on_my_Mind_map.png)](/File:Georgia_on_my_Mind_map.png)\n\n[](/File:Georgia_on_my_Mind_map.png "Enlarge")',
    notes:
      'Easiest to do as a coloniser such as [![Flag of France](https://eu4.paradoxwikis.com/images/thumb/d/de/France.png/20px-France.png)](/France "France") [France](/France "France"), [![Flag of Spain](https://eu4.paradoxwikis.com/images/thumb/5/58/Spain.png/20px-Spain.png)](/Spain "Spain") [Spain](/Spain "Spain") or [![Flag of Great Britain](https://eu4.paradoxwikis.com/images/thumb/2/2b/Great_Britain.png/20px-Great_Britain.png)](/Great_Britain "Great Britain") [Great Britain](/Great_Britain "Great Britain") since you can easily acquire the required provinces in North America and the South Atlantic. Remaining provinces can be obtained by declaring no-CB wars on nations in Caucasia to vassalize them early before they\'re conquered by [![Flag of Russia](https://eu4.paradoxwikis.com/images/thumb/e/ee/Russia.png/20px-Russia.png)](/Russia "Russia") [Russia](/Russia "Russia") or the [![Flag of Ottomans](https://eu4.paradoxwikis.com/images/thumb/8/89/Ottomans.png/20px-Ottomans.png)](/Ottomans "Ottomans") [Ottomans](/Ottomans "Ottomans").',
  },
  {
    id: 'ach_149',
    name: 'Gold Rush',
    description: 'Reform the Golden Horde before 1500.',
    icon: 'https://eu4.paradoxwikis.com/images/3/3d/Gold_Rush.png',
    dlc: '',
    version: '1.20',
    difficulty: 'H',
    game: 'eu4',
    guideUrl: '',
    startingConditions:
      '*   [![Tab domestic government.png](https://eu4.paradoxwikis.com/images/thumb/f/ff/Tab_domestic_government.png/28px-Tab_domestic_government.png)](/Government "Government") Government type is [![Government steppe horde.png](https://eu4.paradoxwikis.com/images/thumb/a/a8/Government_native.png/28px-Government_native.png)](/Steppe_nomads "Steppe nomads") *Steppe Nomads*\n*   [![Culture icon.png](https://eu4.paradoxwikis.com/images/thumb/2/29/Culture_icon.png/28px-Culture_icon.png)](/Culture "Culture") Culture group is *Tatar*',
    completionRequirements:
      '*   [![Yes](https://eu4.paradoxwikis.com/images/thumb/d/da/Ledger_yes.png/28px-Ledger_yes.png)](/File:Ledger_yes.png "Yes") The year is before 1500\n*   [![Yes](https://eu4.paradoxwikis.com/images/thumb/d/da/Ledger_yes.png/28px-Ledger_yes.png)](/File:Ledger_yes.png "Yes") Is [![Flag of Golden Horde](https://eu4.paradoxwikis.com/images/thumb/6/62/Golden_Horde.png/20px-Golden_Horde.png)](/Golden_Horde "Golden Horde") [Golden Horde](/Golden_Horde "Golden Horde")',
    notes: '',
  },
  {
    id: 'ach_150',
    name: 'Golden Horn',
    description:
      'As a Somali nation, fully own the Horn of Africa region and have a monthly gold income of at least 10 ducats.',
    icon: 'https://eu4.paradoxwikis.com/images/2/25/Golden_Horn.jpg',
    dlc: '',
    version: '1.16',
    difficulty: 'M',
    game: 'eu4',
    guideUrl: '',
    startingConditions:
      '[![Culture icon.png](https://eu4.paradoxwikis.com/images/thumb/2/29/Culture_icon.png/28px-Culture_icon.png)](/Culture "Culture") Culture is *Somali*',
    completionRequirements:
      '*   [![Province icon.png](https://eu4.paradoxwikis.com/images/thumb/1/13/Province_icon.png/28px-Province_icon.png)](/Province "Province") All provinces of the [Horn of Africa](/African_regions#Horn_of_Africa "African regions") region are owned by the player\'s country *or* its non-tributary [subjects](/Subjects "Subjects").\n*   [![Income.png](https://eu4.paradoxwikis.com/images/a/aa/Income.png)](/Income "Income") Have 10 income from [![Gold](https://eu4.paradoxwikis.com/images/thumb/1/10/Gold.png/28px-Gold.png)](/Trade_goods#Gold "Gold") gold\n\nExpand\n\n[![Golden Horn map.png](https://eu4.paradoxwikis.com/images/thumb/1/17/Golden_Horn_map.png/140px-Golden_Horn_map.png)](/File:Golden_Horn_map.png)\n\n[](/File:Golden_Horn_map.png "Enlarge")',
    notes:
      '*   Note that the provinces of Fazughli, Afder and Ogaden have to be colonized for the achievement, but the colonies do not need to be complete. You can just send your colonist to all 3 provinces at once as soon as you have the other land.\n*   Start as [![Flag of Adal](https://eu4.paradoxwikis.com/images/thumb/8/81/Adal.png/20px-Adal.png)](/Adal "Adal") [Adal](/Adal "Adal") or [![Flag of Ajuuraan](https://eu4.paradoxwikis.com/images/thumb/5/52/Ajuuraan.png/20px-Ajuuraan.png)](/Ajuuraan "Ajuuraan") [Ajuuraan](/Ajuuraan "Ajuuraan"), and set the National Focus to administrative, then swiftly conquer all adjacent nations in the region that are smaller than you. [Aggressive Expansion](/Aggressive_Expansion "Aggressive Expansion") will not be an issue due to the nations belonging to different religious groups. To attain the gold income, improve production development in the gold provinces Kaffa (2757) and Damot (2762).\n*   Convert the religion in the gold provinces to your state religion, which will increase your gold income, requiring less development.',
  },
  {
    id: 'ach_151',
    name: 'Golden Wind',
    description: 'As Air, make 50 ducats profit per month and have 50% of your income made through gold provinces.',
    icon: 'https://eu4.paradoxwikis.com/images/8/88/Golden_Wind.png',
    dlc: '',
    version: '1.32',
    difficulty: 'M',
    game: 'eu4',
    guideUrl: '',
    startingConditions:
      '[![Yes](https://eu4.paradoxwikis.com/images/thumb/d/da/Ledger_yes.png/28px-Ledger_yes.png)](/File:Ledger_yes.png "Yes") Playing as [![Flag of Air](https://eu4.paradoxwikis.com/images/thumb/5/5f/Air.png/20px-Air.png)](/Air "Air") [Air](/Air "Air")',
    completionRequirements:
      '*   [![Yes](https://eu4.paradoxwikis.com/images/thumb/d/da/Ledger_yes.png/28px-Ledger_yes.png)](/File:Ledger_yes.png "Yes") Is [![Flag of Air](https://eu4.paradoxwikis.com/images/thumb/5/5f/Air.png/20px-Air.png)](/Air "Air") [Air](/Air "Air")\n*   [![Income.png](https://eu4.paradoxwikis.com/images/a/aa/Income.png)](/Income "Income") monthly balance is at least **50**\n*   [![Gold](https://eu4.paradoxwikis.com/images/thumb/1/10/Gold.png/28px-Gold.png)](/Trade_goods#Gold "Gold") 50% of the monthly income is from gold',
    notes:
      'This achievement is only visible if the [![Origins.png](https://eu4.paradoxwikis.com/images/thumb/8/8e/Origins.png/28px-Origins.png)](/Origins "Origins") Origins DLC is active, but no DLC is needed to complete it.\n\nAs [![Flag of Air](https://eu4.paradoxwikis.com/images/thumb/5/5f/Air.png/20px-Air.png)](/Air "Air") [Air](/Air "Air") consider royal marrying [![Flag of Songhai](https://eu4.paradoxwikis.com/images/thumb/2/24/Songhai.png/20px-Songhai.png)](/Songhai "Songhai") [Songhai](/Songhai "Songhai") and [![Flag of Mali](https://eu4.paradoxwikis.com/images/thumb/f/f0/Mali.png/20px-Mali.png)](/Mali "Mali") [Mali](/Mali "Mali") and improving relations after to get an alliance. Both should start neutral most of the time and are strong allies. After, look for choice targets and build over force limit by hiring a free company. Air starts with a level 2 fort on their capital so rushing smaller enemy capital forts is a viable strategy, no need to take unnecessary battles.\n\nYou need 50 positive balance, not income. Consider disbanding armies, firing advisors and deleting forts when your income is over 60 ducats, with at least 50% gold income. Almost all expenses can be reduced to near 0 except for state maintenance. To get enough gold income controlling and developing the three gold mines in West Africa should be enough. In 1444 two are owned by [![Flag of Mali](https://eu4.paradoxwikis.com/images/thumb/f/f0/Mali.png/20px-Mali.png)](/Mali "Mali") [Mali](/Mali "Mali") and one by [![Flag of Kong](https://eu4.paradoxwikis.com/images/thumb/2/26/Kong.png/20px-Kong.png)](/Kong "Kong") [Kong](/Kong "Kong").',
  },
  {
    id: 'ach_152',
    name: 'Great Moravia',
    description: 'Restore the Great Moravian borders as Nitra or Moravia.',
    icon: 'https://eu4.paradoxwikis.com/images/0/02/Achievement_Great_Moravia.png',
    dlc: '',
    version: '1.23',
    difficulty: 'M',
    game: 'eu4',
    guideUrl: '',
    startingConditions: '',
    completionRequirements:
      '*   [![Yes](https://eu4.paradoxwikis.com/images/thumb/d/da/Ledger_yes.png/28px-Ledger_yes.png)](/File:Ledger_yes.png "Yes") Is [![Flag of Nitra](https://eu4.paradoxwikis.com/images/thumb/4/47/Nitra.png/20px-Nitra.png)](/Nitra "Nitra") [Nitra](/Nitra "Nitra"), [![Flag of Moravia](https://eu4.paradoxwikis.com/images/thumb/9/9b/Moravia.png/20px-Moravia.png)](/Moravia "Moravia") [Moravia](/Moravia "Moravia") *or* [![Flag of Great Moravia](https://eu4.paradoxwikis.com/images/thumb/0/0f/Great_Moravia.png/20px-Great_Moravia.png)](/Great_Moravia "Great Moravia") [Great Moravia](/Great_Moravia "Great Moravia")\n*   [![Province icon.png](https://eu4.paradoxwikis.com/images/thumb/1/13/Province_icon.png/28px-Province_icon.png)](/Province "Province") Own and core the following provinces:\n\nExpand\n\n[![Great Moravia map.png](https://eu4.paradoxwikis.com/images/thumb/b/ba/Great_Moravia_map.png/140px-Great_Moravia_map.png)](/File:Great_Moravia_map.png)\n\n[](/File:Great_Moravia_map.png "Enlarge")',
    notes:
      'Nitra\'s cores don\'t expire except by culture conversion. Requires all the territory of [![Flag of Bohemia](https://eu4.paradoxwikis.com/images/thumb/4/41/Bohemia.png/20px-Bohemia.png)](/Bohemia "Bohemia") [Bohemia](/Bohemia "Bohemia"), [![Flag of Glogow](https://eu4.paradoxwikis.com/images/thumb/5/59/Glogow.png/20px-Glogow.png)](/Glogow "Glogow") [Glogow](/Glogow "Glogow") and [![Flag of Opole](https://eu4.paradoxwikis.com/images/thumb/7/78/Opole.png/20px-Opole.png)](/Opole "Opole") [Opole](/Opole "Opole"), Wien (134), Manhartsberg (1770), Traungau (4761) and Wienerwald (4762) from [![Flag of Austria](https://eu4.paradoxwikis.com/images/thumb/7/7f/Austria.png/20px-Austria.png)](/Austria "Austria") [Austria](/Austria "Austria"), Kraków (262) and Nowy Sącz (2960) from [![Flag of Poland](https://eu4.paradoxwikis.com/images/thumb/9/99/Poland.png/20px-Poland.png)](/Poland "Poland") [Poland](/Poland "Poland"), and the Slovakia and Transdanubia areas from [![Flag of Hungary](https://eu4.paradoxwikis.com/images/thumb/6/6a/Hungary.png/20px-Hungary.png)](/Hungary "Hungary") [Hungary](/Hungary "Hungary").\n\nIf choosing to play as [![Flag of Moravia](https://eu4.paradoxwikis.com/images/thumb/9/9b/Moravia.png/20px-Moravia.png)](/Moravia "Moravia") [Moravia](/Moravia "Moravia"), you will incur much more agresssive expansion and find it harder to make alliances due to being a heretic nation (Hussite) if you release them on day 1. There are advantages to starting in the empire though, so you may find it useful to convert some of Moravia\'s cores to Catholic before switching to them.\n\nSince this achievement demands the release of a nation it doesn\'t have the "started as" protection. In return the easiest way to achieve this is to play Hungary or Austria, get all the lands, release Nitra and grant it all provinces. Reabsorb it once possible and release to play as. The deed will be done. This works for any of the create or release achievements and turns these deeds trivial.\n\nSince [![Winds of Change.png](https://eu4.paradoxwikis.com/images/thumb/7/75/Winds_of_Change.png/28px-Winds_of_Change.png)](/Winds_of_Change "Winds of Change") Winds of change, this achievement is doable simply by forming Greater Moravia, which can be done by Bohemia.',
  },
  {
    id: 'ach_153',
    name: 'Hanukkah Mutapa',
    description: 'Starting as Mutapa, convert to Judaism and celebrate a festival.',
    icon: 'https://eu4.paradoxwikis.com/images/0/06/Hanukkah_Mutapa.png',
    dlc: '',
    version: '1.34',
    difficulty: 'M',
    game: 'eu4',
    guideUrl: '',
    startingConditions:
      '[![Yes](https://eu4.paradoxwikis.com/images/thumb/d/da/Ledger_yes.png/28px-Ledger_yes.png)](/File:Ledger_yes.png "Yes") Playing as [![Flag of Mutapa](https://eu4.paradoxwikis.com/images/thumb/2/23/Mutapa.png/20px-Mutapa.png)](/Mutapa "Mutapa") [Mutapa](/Mutapa "Mutapa")',
    completionRequirements:
      '*   [![Jewish.png](https://eu4.paradoxwikis.com/images/thumb/c/cd/Jewish.png/28px-Jewish.png)](/Jewish "Jewish") Religion is Jewish\n*   Has used the Jewish religion action *“Celebrate Festival”*',
    notes:
      'This achievement is misspelled as *“Hannukah Mutapa”* in the steam version of the game.\n\nAt the start of the game the 2 only Jewish provinces are in [![Flag of Ethiopia](https://eu4.paradoxwikis.com/images/thumb/0/06/Ethiopia.png/20px-Ethiopia.png)](/Ethiopia "Ethiopia") [Ethiopia](/Ethiopia "Ethiopia"), due to [![Flag of Ethiopia](https://eu4.paradoxwikis.com/images/thumb/0/06/Ethiopia.png/20px-Ethiopia.png)](/Ethiopia "Ethiopia") [Ethiopia](/Ethiopia "Ethiopia")\'s missions the AI will always pick the option to temporarily accept Jewish religion, giving you 25 years to take them.\n\n [![Flag of Mutapa](https://eu4.paradoxwikis.com/images/thumb/2/23/Mutapa.png/20px-Mutapa.png)](/Mutapa "Mutapa") [Mutapa](/Mutapa "Mutapa")\'s gold mines should allow you to go over force limit and quickly declare a war of conquest against [![Flag of Kilwa](https://eu4.paradoxwikis.com/images/thumb/c/cb/Kilwa.png/20px-Kilwa.png)](/Kilwa "Kilwa") [Kilwa](/Kilwa "Kilwa") despite the technology disadvantage. With additional 3 gold mines in Butua after annexing vassal [![Flag of Butua](https://eu4.paradoxwikis.com/images/thumb/9/92/Butua.png/20px-Butua.png)](/Butua "Butua") [Butua](/Butua "Butua") and conquering Sofala and Kilwa even more mercenaries over force limit can be paid. Focus on military mana to not fall further behind [![Flag of Ethiopia](https://eu4.paradoxwikis.com/images/thumb/0/06/Ethiopia.png/20px-Ethiopia.png)](/Ethiopia "Ethiopia") [Ethiopia](/Ethiopia "Ethiopia") and nations lying in the way to the jewish provinces.',
  },
  {
    id: 'ach_154',
    name: 'Hessian Mercenaries',
    description: 'As Hesse, have at least 50 regiments of mercenaries and no loans.',
    icon: 'https://eu4.paradoxwikis.com/images/1/1a/Hessian_Mercenaries.jpg',
    dlc: '',
    version: '1.10',
    difficulty: 'M',
    game: 'eu4',
    guideUrl: '',
    startingConditions:
      '[![Yes](https://eu4.paradoxwikis.com/images/thumb/d/da/Ledger_yes.png/28px-Ledger_yes.png)](/File:Ledger_yes.png "Yes") Playing as [![Flag of Hesse](https://eu4.paradoxwikis.com/images/thumb/2/2a/Hesse.png/20px-Hesse.png)](/Hesse "Hesse") [Hesse](/Hesse "Hesse")',
    completionRequirements:
      '*   [![No](https://eu4.paradoxwikis.com/images/thumb/5/56/Ledger_no_crop.png/28px-Ledger_no_crop.png)](/File:Ledger_no_crop.png "No") *Not* playing as a [released vassal](/Vassal#Release_a_nation "Vassal")\n*   [![Yes](https://eu4.paradoxwikis.com/images/thumb/d/da/Ledger_yes.png/28px-Ledger_yes.png)](/File:Ledger_yes.png "Yes") is [![Flag of Hesse](https://eu4.paradoxwikis.com/images/thumb/2/2a/Hesse.png/20px-Hesse.png)](/Hesse "Hesse") [Hesse](/Hesse "Hesse")\n*   [![Possible mercenaries.png](https://eu4.paradoxwikis.com/images/thumb/b/b2/Mercenary_manpower.png/28px-Mercenary_manpower.png)](/Available_mercenaries "Available mercenaries") Have 50 regiments of [mercenaries](/Mercenaries "Mercenaries")\n*   [![No](https://eu4.paradoxwikis.com/images/thumb/5/56/Ledger_no_crop.png/28px-Ledger_no_crop.png)](/File:Ledger_no_crop.png "No") Have no [loans](/Loan "Loan")',
    notes: '',
  },
  {
    id: 'ach_155',
    name: 'Hoarder',
    description: 'As a Fetishist nation, have 13 available Cults.',
    icon: 'https://eu4.paradoxwikis.com/images/a/a3/Hoarder.jpg',
    dlc: '',
    version: '1.18',
    difficulty: 'M',
    game: 'eu4',
    guideUrl: '',
    startingConditions:
      '*   [![Tolerance own.png](https://eu4.paradoxwikis.com/images/thumb/d/d9/Tolerance_of_the_true_faith.png/28px-Tolerance_of_the_true_faith.png)](/Tolerance_of_the_true_faith "Tolerance of the true faith") Religion is [![Fetishist](https://eu4.paradoxwikis.com/images/thumb/8/8d/Fetishist.png/28px-Fetishist.png)](/Fetishist "Fetishist") Fetishist\n*   [![Time Icon.png](https://eu4.paradoxwikis.com/images/thumb/7/70/Time_Icon.png/24px-Time_Icon.png)](/Time "Time") No restriction of the start date',
    completionRequirements:
      '*   [![Fetishist](https://eu4.paradoxwikis.com/images/thumb/8/8d/Fetishist.png/28px-Fetishist.png)](/Fetishist "Fetishist") Is Fetishist\n*   [![Yes](https://eu4.paradoxwikis.com/images/thumb/d/da/Ledger_yes.png/28px-Ledger_yes.png)](/File:Ledger_yes.png "Yes") Have unlocked 13 [Fetishist cults](/Pagan_denominations#Fetishist "Pagan denominations")',
    notes:
      'With the [Cradle of Civilization](/Cradle_of_Civilization "Cradle of Civilization") DLC activated, [Kilwa](/Kilwa "Kilwa") may convert all of Madagascar to Islam once they gain more than 50% trade power in Zanzibar, making the achievement impossible if the three Malagasy cults have not been gained already.',
  },
  {
    id: 'ach_156',
    name: 'Home and Away',
    description: 'As Wales, hold Cardiff, Dublin, Edinburgh, Rome, Paris and London.',
    icon: 'https://eu4.paradoxwikis.com/images/4/4d/Home_and_Away.png',
    dlc: '',
    version: '1.25',
    difficulty: 'M',
    game: 'eu4',
    guideUrl: '',
    startingConditions: '',
    completionRequirements:
      '*   [![Yes](https://eu4.paradoxwikis.com/images/thumb/d/da/Ledger_yes.png/28px-Ledger_yes.png)](/File:Ledger_yes.png "Yes") Is [![Flag of Wales](https://eu4.paradoxwikis.com/images/thumb/d/d9/Wales.png/20px-Wales.png)](/Wales "Wales") [Wales](/Wales "Wales")\n*   [![Province icon.png](https://eu4.paradoxwikis.com/images/thumb/1/13/Province_icon.png/28px-Province_icon.png)](/Province "Province") Own Glamorgan (241), Pale (373), Lothian (248), Roma (118), Paris (183) and London (236)',
    notes:
      '*   It is not needed to core the required provinces.\n*   The welsh names of the provinces in eu4 are Morgannwg(241), Dulyn(373), Lleuddiniawn(248), Rhufain(118), Paris(183) and Llundain(236)',
  },
  {
    id: 'ach_157',
    name: 'Ideas Guy',
    description:
      'Starting as a custom nation with the full 800 points but no more than 3 total development, have a monthly income of at least 500 ducats.',
    icon: 'https://eu4.paradoxwikis.com/images/3/3b/Ideas_Guy.jpg',
    dlc: '',
    version: '1.14',
    difficulty: 'M',
    game: 'eu4',
    guideUrl: '',
    startingConditions:
      '*   [![Nation designer.png](https://eu4.paradoxwikis.com/images/a/ab/Nation_designer.png)](/Nation_designer "Nation designer") Playing as a custom nation\n*   [![Yes](https://eu4.paradoxwikis.com/images/thumb/d/da/Ledger_yes.png/28px-Ledger_yes.png)](/File:Ledger_yes.png "Yes") Only 1 custom nation exists in the world\n*   [![No](https://eu4.paradoxwikis.com/images/thumb/5/56/Ledger_no_crop.png/28px-Ledger_no_crop.png)](/File:Ledger_no_crop.png "No") Used no more than 801 nation designer points\n*   [![No](https://eu4.paradoxwikis.com/images/thumb/5/56/Ledger_no_crop.png/28px-Ledger_no_crop.png)](/File:Ledger_no_crop.png "No") No more than [![Development.png](https://eu4.paradoxwikis.com/images/thumb/a/a4/Development.png/28px-Development.png)](/Development "Development") 3 total development',
    completionRequirements:
      '*   [![No](https://eu4.paradoxwikis.com/images/thumb/5/56/Ledger_no_crop.png/28px-Ledger_no_crop.png)](/File:Ledger_no_crop.png "No") *Not* playing as a [released vassal](/Vassal#Release_a_nation "Vassal")\n*   [![Income.png](https://eu4.paradoxwikis.com/images/a/aa/Income.png)](/Income "Income") Has at least 500 ducats in income',
    notes:
      'Despite the description, can be done with fewer than 800 points. Spoils of war do not count towards the income; you must make 500 ducats, not including Spoils.  \nIt became very easy after Third Rome, due to Siberian frontier ability: Start a nation in Americas with Siberian Frontier as a tradition, it will allow you to expand in uncolonized regions rapidly.\n\nOne way to cheese this achievement post-1.36 is to take the provinces of Iskandariyya, Rashid, Dumyat, and Sharqiya, as well as war reparations from the [![Flag of Mamluks](https://eu4.paradoxwikis.com/images/thumb/c/ca/The_Mamluks.png/20px-The_Mamluks.png)](/Mamluks "Mamluks") [Mamluks](/Mamluks "Mamluks"). Build Marketplaces in Iskandariyya, Rashid, and Dumyat, and 5 buildings in Sharqiya, as well as ensuring that Sharqiya has been developed 10 times, and then return all provinces. This allows the Mamluks to complete the mission "Highway of an Empire", which temporarily grants them 20,000 ducats, which you get 2,000 from via war reparations. Make sure the Mamluks are able to pay for the construction of the canal, with inflation taken into consideration by gifting money to them before they complete the mission by checking the ledger. For example, if the ledger says the Mamluks have 1% inflation, round that up to 2% and multiply by 20,000 ducats; thus, ensure the Mamluks have 400 ducats in their treasury. On the next month tick, you will receive 2,000 ducats in income. The 3-development province of Tarrana provides the perfect starting position and you can easily load up on military ideas for your traditions like +1 Infantry Shock and +1 Cavalry Shock which are insanely overpowered in the beginning of the game.\n\nCan also be paired with [![For Odin!.jpg](https://eu4.paradoxwikis.com/images/thumb/4/4a/For_Odin%21.jpg/28px-For_Odin%21.jpg)](/File:For_Odin!.jpg) [For Odin!](#For_Odin!) and [![From Humble Origins.jpg](https://eu4.paradoxwikis.com/images/thumb/5/59/From_Humble_Origins.jpg/28px-From_Humble_Origins.jpg)](/File:From_Humble_Origins.jpg) [From Humble Origins](#From_Humble_Origins)',
  },
  {
    id: 'ach_158',
    name: 'Industrial Powerhouse',
    description: 'Have 10 furnaces built in your nation.',
    icon: 'https://eu4.paradoxwikis.com/images/a/a8/Industrial_Powerhouse.png',
    dlc: '',
    version: '1.25',
    difficulty: 'M',
    game: 'eu4',
    guideUrl: '',
    startingConditions:
      '*   [![No](https://eu4.paradoxwikis.com/images/thumb/5/56/Ledger_no_crop.png/28px-Ledger_no_crop.png)](/File:Ledger_no_crop.png "No") No more than 1 custom nation exists in the world\n*   [![No](https://eu4.paradoxwikis.com/images/thumb/5/56/Ledger_no_crop.png/28px-Ledger_no_crop.png)](/File:Ledger_no_crop.png "No") Used no more than 201 nation designer points if playing as a custom nation',
    completionRequirements:
      '*   [![Furnace.png](https://eu4.paradoxwikis.com/images/thumb/0/0f/Furnace.png/28px-Furnace.png)](/Furnace "Furnace") Have 10 furnaces',
    notes: '',
  },
  {
    id: 'ach_159',
    name: 'Italian Ambition',
    description: 'Form Italy.',
    icon: 'https://eu4.paradoxwikis.com/images/d/d2/Italian_Ambition.jpg',
    dlc: '',
    version: '1.1',
    difficulty: 'M',
    game: 'eu4',
    guideUrl: 'https://eu4.paradoxwikis.com/Italian_Ambition',
    startingConditions: '',
    completionRequirements:
      '[![Yes](https://eu4.paradoxwikis.com/images/thumb/d/da/Ledger_yes.png/28px-Ledger_yes.png)](/File:Ledger_yes.png "Yes") Is [![Flag of Italy](https://eu4.paradoxwikis.com/images/thumb/2/2a/Italy.png/20px-Italy.png)](/Italy "Italy") [Italy](/Italy "Italy")',
    notes:
      'Become [![Flag of Italy](https://eu4.paradoxwikis.com/images/thumb/2/2a/Italy.png/20px-Italy.png)](/Italy "Italy") [Italy](/Italy "Italy"). The primary culture of the country you start with should be in the Latin culture group (the achievement won\'t be visible in game unless you are Latin) but you can also get the achievement via culture shift. [![Flag of The Papal State](https://eu4.paradoxwikis.com/images/thumb/7/71/The_Papal_State.png/20px-The_Papal_State.png)](/The_Papal_State "The Papal State") [The Papal State](/The_Papal_State "The Papal State") and The [![Flag of Holy Roman Empire](https://eu4.paradoxwikis.com/images/thumb/e/ee/Holy_Roman_Empire.png/20px-Holy_Roman_Empire.png)](/Holy_Roman_Empire_\\(country\\) "Holy Roman Empire (country)") [Holy Roman Empire](/Holy_Roman_Empire_\\(country\\) "Holy Roman Empire (country)") can\'t form Italy.',
  },
  {
    id: 'ach_160',
    name: 'Je maintiendrai',
    description: 'Form the Netherlands as a minor nation starting with Dutch culture.',
    icon: 'https://eu4.paradoxwikis.com/images/c/c5/Je_maintiendrai.jpg',
    dlc: '',
    version: '1.6',
    difficulty: 'M',
    game: 'eu4',
    guideUrl: '',
    startingConditions:
      '[![Culture icon.png](https://eu4.paradoxwikis.com/images/thumb/2/29/Culture_icon.png/28px-Culture_icon.png)](/Culture "Culture") Culture is *Dutch*',
    completionRequirements:
      '[![Yes](https://eu4.paradoxwikis.com/images/thumb/d/da/Ledger_yes.png/28px-Ledger_yes.png)](/File:Ledger_yes.png "Yes") Is the [![Flag of Netherlands](https://eu4.paradoxwikis.com/images/thumb/3/32/Netherlands.png/20px-Netherlands.png)](/Netherlands "Netherlands") [Netherlands](/Netherlands "Netherlands")',
    notes:
      'Possible starts are [![Flag of Holland](https://eu4.paradoxwikis.com/images/thumb/6/60/Holland.png/20px-Holland.png)](/Holland "Holland") [Holland](/Holland "Holland"), [![Flag of Utrecht](https://eu4.paradoxwikis.com/images/thumb/d/d4/Utrecht.png/20px-Utrecht.png)](/Utrecht "Utrecht") [Utrecht](/Utrecht "Utrecht"), [![Flag of Gelre](https://eu4.paradoxwikis.com/images/thumb/4/41/Gelre.png/20px-Gelre.png)](/Gelre "Gelre") [Gelre](/Gelre "Gelre"). Easily done as Holland by seeking independence support from [![Flag of Burgundy](https://eu4.paradoxwikis.com/images/thumb/b/b0/Burgundy.png/20px-Burgundy.png)](/Burgundy "Burgundy") [Burgundy](/Burgundy "Burgundy")\'s enemies and then carefully eating the other Dutch minors.\n\nOne could also try grabbing the Burgundian inheritance as Gelre, which grants most of the land required for free.',
  },
  {
    id: 'ach_161',
    name: 'Kingdom of God',
    description: 'Starting as the Papal State, become the Kingdom of God',
    icon: 'https://eu4.paradoxwikis.com/images/a/a5/Kingdom_of_God.png',
    dlc: '',
    version: '1.30',
    difficulty: 'M',
    game: 'eu4',
    guideUrl: '',
    startingConditions:
      '*   [![Yes](https://eu4.paradoxwikis.com/images/thumb/d/da/Ledger_yes.png/28px-Ledger_yes.png)](/File:Ledger_yes.png "Yes") Playing as [![Flag of The Papal State](https://eu4.paradoxwikis.com/images/thumb/7/71/The_Papal_State.png/20px-The_Papal_State.png)](/The_Papal_State "The Papal State") [The Papal State](/The_Papal_State "The Papal State")\n*   [![No](https://eu4.paradoxwikis.com/images/thumb/5/56/Ledger_no_crop.png/28px-Ledger_no_crop.png)](/File:Ledger_no_crop.png "No") *Not* using a [random New World](/Random_New_World "Random New World")',
    completionRequirements:
      'Has enacted the decision [Declare the Kingdom of God](/The_Papal_State#Declare_the_Kingdom_of_God "The Papal State")',
    notes: '',
  },
  {
    id: 'ach_162',
    name: 'Kirishitan Japan',
    description: 'Start as a Japanese Daimyo, convert yourself and all of Japan to Christianity.',
    icon: 'https://eu4.paradoxwikis.com/images/c/c9/Kirishitan_Japan.jpg',
    dlc: '',
    version: '1.10',
    difficulty: 'M',
    game: 'eu4',
    guideUrl: '',
    startingConditions:
      '[![Tab domestic government.png](https://eu4.paradoxwikis.com/images/thumb/f/ff/Tab_domestic_government.png/28px-Tab_domestic_government.png)](/Government "Government") Government type is [![Government monarchy.png](https://eu4.paradoxwikis.com/images/thumb/4/4d/Government_monarchy.png/28px-Government_monarchy.png)](/Monarchy "Monarchy") *Daimyo*',
    completionRequirements:
      '*   [![Yes](https://eu4.paradoxwikis.com/images/thumb/d/da/Ledger_yes.png/28px-Ledger_yes.png)](/File:Ledger_yes.png "Yes") Is [![Flag of Japan](https://eu4.paradoxwikis.com/images/thumb/f/fc/Japan.png/20px-Japan.png)](/Japan "Japan") [Japan](/Japan "Japan")\n*   [![Catholic reform desire.png](https://eu4.paradoxwikis.com/images/thumb/e/e2/Reform_desire.png/28px-Reform_desire.png)](/Reform_desire "Reform desire") In Christian religious group\n*   [![Province icon.png](https://eu4.paradoxwikis.com/images/thumb/1/13/Province_icon.png/28px-Province_icon.png)](/Province "Province") All provinces in [Japanese](/Asian_regions#Japan "Asian regions") region are in Christian religious group.',
    notes:
      '*   You must start as a Daimyo subject of [![Flag of Ashikaga](https://eu4.paradoxwikis.com/images/thumb/a/a1/Ashikaga.png/20px-Ashikaga.png)](/Ashikaga "Ashikaga") [Ashikaga](/Ashikaga "Ashikaga"). The Japan region includes Okinawa, Hokkaido, and the Kuril Islands. Uncolonized provinces are required as well. Best done with [![Flag of Otomo](https://eu4.paradoxwikis.com/images/thumb/a/ad/Otomo.png/20px-Otomo.png)](/Otomo "Otomo") [Otomo](/Otomo "Otomo"), who receive an extra missionary in addition to increased papal influence.\n*   [![Mandate of Heaven.png](https://eu4.paradoxwikis.com/images/thumb/7/7c/Mandate_of_Heaven.png/28px-Mandate_of_Heaven.png)](/Mandate_of_Heaven "Mandate of Heaven") Wait for the Spread of Christianity incident, which usually pops up around 1600 or so. Always take the most "Open" or pro-Christian options in events. A few years after the incident ends, an event to convert to Catholic will pop up.\n*   If Mandate of Heaven is disabled: don\'t take the decision to enforce Sakoku, wait for events to convert your provinces and spawn Catholic rebels, and let them convert at least half your provinces. Harder if you have too many disconnected provinces outside the Japan region.',
  },
  {
    id: 'ach_163',
    name: 'Kuban Cigars',
    description: "As Kuba, own or have a subject own Havana and be the world's leading producer of Tobacco.",
    icon: 'https://eu4.paradoxwikis.com/images/f/fa/Kuban_Cigars.jpg',
    dlc: '',
    version: '1.16',
    difficulty: 'M',
    game: 'eu4',
    guideUrl: '',
    startingConditions:
      '[![Yes](https://eu4.paradoxwikis.com/images/thumb/d/da/Ledger_yes.png/28px-Ledger_yes.png)](/File:Ledger_yes.png "Yes") Playing as [![Flag of Kuba](https://eu4.paradoxwikis.com/images/thumb/c/ca/Kuba.png/20px-Kuba.png)](/Kuba "Kuba") [Kuba](/Kuba "Kuba")',
    completionRequirements:
      '*   [![Province icon.png](https://eu4.paradoxwikis.com/images/thumb/1/13/Province_icon.png/28px-Province_icon.png)](/Province "Province") Own or have a non-tributary subject own the province Havana (484)\n*   [![Tobacco.png](https://eu4.paradoxwikis.com/images/thumb/1/19/Tobacco.png/28px-Tobacco.png)](/Tobacco "Tobacco") The leading producer of Tobacco is *either* this country or a subject of this country',
    notes: '*   Not possible with Random New World.\n*   Making the leading tobacco producer a tributary would count.',
  },
  {
    id: 'ach_164',
    name: 'Kushite Restoration',
    description: 'As a Nubian culture nation, own or have a non-Tributary subject own the entire Egyptian region.',
    icon: 'https://eu4.paradoxwikis.com/images/a/a0/Kushite_Restoration.jpg',
    dlc: '',
    version: '1.16',
    difficulty: 'H',
    game: 'eu4',
    guideUrl: '',
    startingConditions:
      '[![Primary culture.png](https://eu4.paradoxwikis.com/images/thumb/e/e1/Primary_culture.png/28px-Primary_culture.png)](/Primary_culture "Primary culture") Primary culture is *Nubian*',
    completionRequirements:
      '[![Province icon.png](https://eu4.paradoxwikis.com/images/thumb/1/13/Province_icon.png/28px-Province_icon.png)](/Province "Province") All provinces in the [Egypt](/African_regions#Egypt "African regions") region are owned by the player\'s country *or* its non-tributary [subjects](/Subjects "Subjects").',
    notes:
      'Possible starts are [![Flag of Dongola](https://eu4.paradoxwikis.com/images/thumb/3/35/Dongola.png/20px-Dongola.png)](/Dongola "Dongola") [Dongola](/Dongola "Dongola"), [![Flag of Alodia](https://eu4.paradoxwikis.com/images/thumb/7/71/Alodia.png/20px-Alodia.png)](/Alodia "Alodia") [Alodia](/Alodia "Alodia"), and [![Flag of Makuria](https://eu4.paradoxwikis.com/images/thumb/8/87/Makuria.png/20px-Makuria.png)](/Makuria "Makuria") [Makuria](/Makuria "Makuria").',
  },
  {
    id: 'ach_165',
    name: 'Laughingstock',
    description: 'Own the provinces of Haha, Hehe and Lolland.',
    icon: 'https://eu4.paradoxwikis.com/images/e/e5/Laughingstock.png',
    dlc: '',
    version: '1.22',
    difficulty: 'M',
    game: 'eu4',
    guideUrl: '',
    startingConditions: '',
    completionRequirements:
      '[![Province icon.png](https://eu4.paradoxwikis.com/images/thumb/1/13/Province_icon.png/28px-Province_icon.png)](/Province "Province") Own the provinces of Lolland (1983), Haha (2470), and Hehe (4073)\n\nExpand\n\n[![Laughingstock map.png](https://eu4.paradoxwikis.com/images/thumb/7/73/Laughingstock_map.png/140px-Laughingstock_map.png)](/File:Laughingstock_map.png)\n\n[](/File:Laughingstock_map.png "Enlarge")',
    notes:
      'Lolland begins held by [![Flag of Denmark](https://eu4.paradoxwikis.com/images/thumb/6/69/Denmark.png/20px-Denmark.png)](/Denmark "Denmark") [Denmark](/Denmark "Denmark"), Haha held by [![Flag of Morocco](https://eu4.paradoxwikis.com/images/thumb/e/e4/Morocco.png/20px-Morocco.png)](/Morocco "Morocco") [Morocco](/Morocco "Morocco"), and Hehe uncolonized in Central Africa.\n\nEasiest to No CB Morocco before Iberians take Haha, then push through Kongo with expansion ideas to reach Hehe which must be colonized. Can also be paired with [![African Power.jpg](https://eu4.paradoxwikis.com/images/thumb/a/ac/African_Power.jpg/28px-African_Power.jpg)](/File:African_Power.jpg) [African Power](#African_Power).',
  },
  {
    id: 'ach_166',
    name: 'Lessons of Hemmingstedt',
    description: 'As Dithmarschen, hold the provinces of Sjaelland and Holland while Denmark do not exist.',
    icon: 'https://eu4.paradoxwikis.com/images/9/9f/Lessons_of_Hemmingstedt.png',
    dlc: '',
    version: '1.22',
    difficulty: 'H',
    game: 'eu4',
    guideUrl: 'https://eu4.paradoxwikis.com/Lessons_of_Hemmingstedt',
    startingConditions:
      '[![Yes](https://eu4.paradoxwikis.com/images/thumb/d/da/Ledger_yes.png/28px-Ledger_yes.png)](/File:Ledger_yes.png "Yes") Playing as [![Flag of Dithmarschen](https://eu4.paradoxwikis.com/images/thumb/3/34/Dithmarschen.png/20px-Dithmarschen.png)](/Dithmarschen "Dithmarschen") [Dithmarschen](/Dithmarschen "Dithmarschen")',
    completionRequirements:
      '*   [![Yes](https://eu4.paradoxwikis.com/images/thumb/d/da/Ledger_yes.png/28px-Ledger_yes.png)](/File:Ledger_yes.png "Yes") [![Flag of Denmark](https://eu4.paradoxwikis.com/images/thumb/6/69/Denmark.png/20px-Denmark.png)](/Denmark "Denmark") [Denmark](/Denmark "Denmark") does *not* exist\n*   [![Province icon.png](https://eu4.paradoxwikis.com/images/thumb/1/13/Province_icon.png/28px-Province_icon.png)](/Province "Province") Own the provinces of Sjælland (12) and Amsterdam (97)',
    notes: '',
  },
  {
    id: 'ach_167',
    name: 'Lion of the North',
    description: 'Start as Sweden and lead the Protestant League to victory against the Emperor.',
    icon: 'https://eu4.paradoxwikis.com/images/a/a9/Lion_of_the_North.png',
    dlc: '',
    version: '1.9',
    difficulty: 'M',
    game: 'eu4',
    guideUrl: '',
    startingConditions:
      '[![Yes](https://eu4.paradoxwikis.com/images/thumb/d/da/Ledger_yes.png/28px-Ledger_yes.png)](/File:Ledger_yes.png "Yes") Playing as [![Flag of Sweden](https://eu4.paradoxwikis.com/images/thumb/9/98/Sweden.png/20px-Sweden.png)](/Sweden "Sweden") [Sweden](/Sweden "Sweden")',
    completionRequirements:
      '*   [![Protestantism](https://eu4.paradoxwikis.com/images/thumb/0/0d/Protestant.png/28px-Protestant.png)](/Protestant "Protestant") Is Protestant\n*   [![Yes](https://eu4.paradoxwikis.com/images/thumb/d/da/Ledger_yes.png/28px-Ledger_yes.png)](/File:Ledger_yes.png "Yes") Lead and win League War',
    notes: 'Has to be Protestant and lead the League.',
  },
  {
    id: 'ach_168',
    name: 'Live Long and Prosper',
    description: 'Have 30 states with prosperity at the same time as you have a 70 year old ruler.',
    icon: 'https://eu4.paradoxwikis.com/images/1/14/Live_Long_and_Prosper.png',
    dlc: '',
    version: '1.20',
    difficulty: 'M',
    game: 'eu4',
    guideUrl: '',
    startingConditions: '',
    completionRequirements:
      '*   [![Yes](https://eu4.paradoxwikis.com/images/thumb/d/da/Ledger_yes.png/28px-Ledger_yes.png)](/File:Ledger_yes.png "Yes") 30 states have [![Prosperity icon m.png](https://eu4.paradoxwikis.com/images/thumb/6/60/Prosperity_icon_m.png/28px-Prosperity_icon_m.png)](/Prosperity "Prosperity") prosperity\n*   [![Yes](https://eu4.paradoxwikis.com/images/thumb/d/da/Ledger_yes.png/28px-Ledger_yes.png)](/File:Ledger_yes.png "Yes") Current ruler is at least 70 years old',
    notes: '',
  },
  {
    id: 'ach_169',
    name: 'Mansa Musa',
    description: 'As Mali, give 10k ducats away to another great power without having a single loan or being bankrupt.',
    icon: 'https://eu4.paradoxwikis.com/images/0/0a/Mansa_Musa.png',
    dlc: '',
    version: '1.32',
    difficulty: 'M',
    game: 'eu4',
    guideUrl: '',
    startingConditions:
      '[![Yes](https://eu4.paradoxwikis.com/images/thumb/d/da/Ledger_yes.png/28px-Ledger_yes.png)](/File:Ledger_yes.png "Yes") Playing as [![Flag of Mali](https://eu4.paradoxwikis.com/images/thumb/f/f0/Mali.png/20px-Mali.png)](/Mali "Mali") [Mali](/Mali "Mali")',
    completionRequirements:
      '*   [![Yes](https://eu4.paradoxwikis.com/images/thumb/d/da/Ledger_yes.png/28px-Ledger_yes.png)](/File:Ledger_yes.png "Yes") Is [![Flag of Mali](https://eu4.paradoxwikis.com/images/thumb/f/f0/Mali.png/20px-Mali.png)](/Mali "Mali") [Mali](/Mali "Mali")\n*   [![Gold Icon.png](https://eu4.paradoxwikis.com/images/2/26/Gold_Icon.png)](/Ducats "Ducats") Has given at least 10k ducats to a [![Great power.png](https://eu4.paradoxwikis.com/images/thumb/f/fc/Great_power.png/24px-Great_power.png)](/Great_power "Great power") great power with a single use of the diplomatic action [Send gift](/Send_gift "Send gift")\n*   [![No](https://eu4.paradoxwikis.com/images/thumb/5/56/Ledger_no_crop.png/28px-Ledger_no_crop.png)](/File:Ledger_no_crop.png "No") Has no loans\n*   [![No](https://eu4.paradoxwikis.com/images/thumb/5/56/Ledger_no_crop.png/28px-Ledger_no_crop.png)](/File:Ledger_no_crop.png "No") Is not bankrupt',
    notes:
      'This achievement is only visible if the [![Origins.png](https://eu4.paradoxwikis.com/images/thumb/8/8e/Origins.png/28px-Origins.png)](/Origins "Origins") Origins DLC is active, but it is possible to get the achievement without that DLC.',
  },
  {
    id: 'ach_170',
    name: 'Market Control',
    description: 'Be trade leader of seven different goods.',
    icon: 'https://eu4.paradoxwikis.com/images/0/0c/Market_Control.jpg',
    dlc: '',
    version: '1.1',
    difficulty: 'M',
    game: 'eu4',
    guideUrl: '',
    startingConditions: '',
    completionRequirements:
      '[![Trade value.png](https://eu4.paradoxwikis.com/images/thumb/f/f9/Trade_value.png/28px-Trade_value.png)](/Trade_value "Trade value") Be trade leader in 7 different [trade goods](/Trade_goods "Trade goods")',
    notes: 'You will need seven different "Trading in X" modifiers at the same time.',
  },
  {
    id: 'ach_171',
    name: 'Mary of Lotharingia',
    description: 'Starting as Burgundy, form Lotharingia and have a female ruler named Marie.',
    icon: 'https://eu4.paradoxwikis.com/images/3/3c/Mary_of_Lotharingia.png',
    dlc: '',
    version: '1.30',
    difficulty: 'M',
    game: 'eu4',
    guideUrl: '',
    startingConditions:
      '*   [![Yes](https://eu4.paradoxwikis.com/images/thumb/d/da/Ledger_yes.png/28px-Ledger_yes.png)](/File:Ledger_yes.png "Yes") Playing as [![Flag of Burgundy](https://eu4.paradoxwikis.com/images/thumb/b/b0/Burgundy.png/20px-Burgundy.png)](/Burgundy "Burgundy") [Burgundy](/Burgundy "Burgundy")\n*   [![No](https://eu4.paradoxwikis.com/images/thumb/5/56/Ledger_no_crop.png/28px-Ledger_no_crop.png)](/File:Ledger_no_crop.png "No") *Not* using a [random New World](/Random_New_World "Random New World")',
    completionRequirements:
      '*   [![Yes](https://eu4.paradoxwikis.com/images/thumb/d/da/Ledger_yes.png/28px-Ledger_yes.png)](/File:Ledger_yes.png "Yes") Is [![Flag of Lotharingia](https://eu4.paradoxwikis.com/images/thumb/3/38/Lotharingia.png/20px-Lotharingia.png)](/Lotharingia "Lotharingia") [Lotharingia](/Lotharingia "Lotharingia")\n*   [![Yes](https://eu4.paradoxwikis.com/images/thumb/d/da/Ledger_yes.png/28px-Ledger_yes.png)](/File:Ledger_yes.png "Yes") ruler is female\n*   [![Yes](https://eu4.paradoxwikis.com/images/thumb/d/da/Ledger_yes.png/28px-Ledger_yes.png)](/File:Ledger_yes.png "Yes") ruler\'s name is *Marie*',
    notes: 'A Consort Regency led by a consort named Marie also qualifies for the achievement.',
  },
  {
    id: 'ach_172',
    name: 'My armies are invincible!',
    description: 'Gain at least 7.0 land morale.',
    icon: 'https://eu4.paradoxwikis.com/images/3/3d/My_armies_are_invincible%21.jpg',
    dlc: '',
    version: '1.1',
    difficulty: 'E',
    game: 'eu4',
    guideUrl: '',
    startingConditions: '',
    completionRequirements:
      '[![Land morale.png](https://eu4.paradoxwikis.com/images/thumb/f/fa/Morale_of_armies.png/28px-Morale_of_armies.png)](/Morale_of_armies "Morale of armies") Have **7** Morale of armies',
    notes:
      'Research military techs, invest in ideas that improve morale, maintain high [prestige](/Prestige "Prestige") and [army tradition](/Army_tradition "Army tradition"). Finally hire an [Army Reformer](/Army_Reformer "Army Reformer"). Easiest as [Prussia](/Prussia "Prussia") or [Sunda](/Sunda "Sunda"), with their national ideas that give +20% morale.',
  },
  {
    id: 'ach_173',
    name: "Napoleon's Ambition",
    description: 'As Revolutionary France, spread the Revolution to 10 countries.',
    icon: 'https://eu4.paradoxwikis.com/images/3/35/Napoleon%E2%80%99s_Ambition.png',
    dlc: '',
    version: '1.30',
    difficulty: 'M',
    game: 'eu4',
    guideUrl: '',
    startingConditions:
      '[![No](https://eu4.paradoxwikis.com/images/thumb/5/56/Ledger_no_crop.png/28px-Ledger_no_crop.png)](/File:Ledger_no_crop.png "No") *Not* using a [random New World](/Random_New_World "Random New World")',
    completionRequirements:
      '*   [![Yes](https://eu4.paradoxwikis.com/images/thumb/d/da/Ledger_yes.png/28px-Ledger_yes.png)](/File:Ledger_yes.png "Yes") Is [![Flag of France](https://eu4.paradoxwikis.com/images/thumb/d/de/France.png/20px-France.png)](/France "France") [France](/France "France")\n*   has used the *“Spread the Revolution”* peace term 10 times',
    notes:
      '"Spread the Revolution" peace term can only be used by the [revolution target](/Revolution_target "Revolution target") against nations that have at least one province the Center of Revolution hasn\'t spread to. They can also only be used against the country directly attacked with the CB (not any allies). Best done quickly as revolutionary ideas can spread across the entire world, preventing the achievement. Small nations in the Americas, Africa and Asia can be targeted to get to 10 if necessary.',
  },
  {
    id: 'ach_174',
    name: 'Neither Holy, Nor German',
    description: 'Have 7 Free Cities in the Empire, none of which is of a Germanic culture.',
    icon: 'https://eu4.paradoxwikis.com/images/f/f0/Neither_Holy%2C_Nor_German.jpg',
    dlc: '',
    version: '1.12',
    difficulty: 'M',
    game: 'eu4',
    guideUrl: 'https://eu4.paradoxwikis.com/Neither_Holy,_Nor_German',
    startingConditions: '',
    completionRequirements:
      '*   [![Imperial authority.png](https://eu4.paradoxwikis.com/images/thumb/4/46/Imperial_authority.png/28px-Imperial_authority.png)](/Imperial_authority "Imperial authority") Is emperor of the [Holy Roman Empire](/Holy_Roman_Empire "Holy Roman Empire")\n*   [![Yes](https://eu4.paradoxwikis.com/images/thumb/d/da/Ledger_yes.png/28px-Ledger_yes.png)](/File:Ledger_yes.png "Yes")There are least **7** countries which:\n    *   *   [![Free City](https://eu4.paradoxwikis.com/images/thumb/b/b1/Gov_free_city.png/24px-Gov_free_city.png)](/Republic#Free_City "Free City") have the government reform [Free City](/Republic#Free_City "Republic")\n        *   [![Primary culture.png](https://eu4.paradoxwikis.com/images/thumb/e/e1/Primary_culture.png/24px-Primary_culture.png)](/Primary_culture "Primary culture") have a primary culture which is *not* in the *Germanic* culture group',
    notes:
      '*   There can be germanic free cities, but there have to be at least 7 non-germanic ones\n*   You can release OPM client states that are republics. Make sure they dislike you before granting them independence, which actually raises their opinion of you. They will then accept free city status.',
  },
  {
    id: 'ach_175',
    name: 'No Pirates in my Caribbean',
    description: 'Own or have a subject own the entire Caribbean.',
    icon: 'https://eu4.paradoxwikis.com/images/7/78/No_Pirates_in_my_Caribbean.jpg',
    dlc: '',
    version: '1.1',
    difficulty: 'M',
    game: 'eu4',
    guideUrl: '',
    startingConditions:
      '[![No](https://eu4.paradoxwikis.com/images/thumb/5/56/Ledger_no_crop.png/28px-Ledger_no_crop.png)](/File:Ledger_no_crop.png "No") *Not* using a [random New World](/Random_New_World "Random New World").',
    completionRequirements:
      '*   [![Colonists.png](https://eu4.paradoxwikis.com/images/thumb/3/34/Colonists.png/28px-Colonists.png)](/Colonist "Colonist") Owns or has a non-tributary subject own all provinces of the [Caribbean](/Caribbean "Caribbean") region.\n*   [![No](https://eu4.paradoxwikis.com/images/thumb/5/56/Ledger_no_crop.png/28px-Ledger_no_crop.png)](/File:Ledger_no_crop.png "No") *Not* a [pirate republic](/Pirate_republic "Pirate republic")',
    notes:
      '*   The required provinces are the geographical region of the Caribbean, not the colonial region. Don\'t forget Bermuda.\n*   [Portugal](/Portugal "Portugal") is a good nation to try for this achievement. Simply make sure to block [Spain](/Spain "Spain") from colonizing any provinces in Africa or in any of the islands in the Atlantic Ocean. This strategy should give enough time to colonize all of the Caribbean. With [![Mandate of Heaven.png](https://eu4.paradoxwikis.com/images/thumb/7/7c/Mandate_of_Heaven.png/28px-Mandate_of_Heaven.png)](/Mandate_of_Heaven "Mandate of Heaven") Mandate of Heaven, the "Portuguese Colonial Growth" splendor ability can give Portugal a huge head start. Annexing Portugal with [Castile](/Castile "Castile") in the early game is also a working method for being the first in the Caribbean. It is enough to start colonizing the province, for it to count towards the achievement.',
  },
  {
    id: 'ach_176',
    name: 'Not just Pizza',
    description: 'Become a Great Power as Naples.',
    icon: 'https://eu4.paradoxwikis.com/images/f/f9/Not_just_Pizza.jpg',
    dlc: '',
    version: '1.18',
    difficulty: 'M',
    game: 'eu4',
    guideUrl: '',
    startingConditions:
      '[![Yes](https://eu4.paradoxwikis.com/images/thumb/d/da/Ledger_yes.png/28px-Ledger_yes.png)](/File:Ledger_yes.png "Yes") Playing as [![Flag of Naples](https://eu4.paradoxwikis.com/images/thumb/b/b8/Naples.png/20px-Naples.png)](/Naples "Naples") [Naples](/Naples "Naples")',
    completionRequirements:
      '[![Great power.png](https://eu4.paradoxwikis.com/images/thumb/f/fc/Great_power.png/28px-Great_power.png)](/Great_power "Great power") Is a Great power',
    notes: '',
  },
  {
    id: 'ach_177',
    name: 'No Trail of Tears',
    description: 'Own and have cores on the Thirteen Colonies as Cherokee with all institutions embraced.',
    icon: 'https://eu4.paradoxwikis.com/images/7/7f/No_Trail_of_Tears.jpg',
    dlc: '',
    version: '1.1',
    difficulty: 'M',
    game: 'eu4',
    guideUrl: '',
    startingConditions:
      '*   [![Yes](https://eu4.paradoxwikis.com/images/thumb/d/da/Ledger_yes.png/28px-Ledger_yes.png)](/File:Ledger_yes.png "Yes") Playing as [![Flag of Cherokee](https://eu4.paradoxwikis.com/images/thumb/0/06/Cherokee.png/20px-Cherokee.png)](/Cherokee "Cherokee") [Cherokee](/Cherokee "Cherokee")\n*   [![No](https://eu4.paradoxwikis.com/images/thumb/5/56/Ledger_no_crop.png/28px-Ledger_no_crop.png)](/File:Ledger_no_crop.png "No") *Not* using a [random New World](/Random_New_World "Random New World").',
    completionRequirements:
      '*   [![Institutions.png](https://eu4.paradoxwikis.com/images/thumb/4/43/Institutions.png/28px-Institutions.png)](/Institutions "Institutions") Have embraced all [institutions](/Institutions "Institutions").\n*   [![Province icon.png](https://eu4.paradoxwikis.com/images/thumb/1/13/Province_icon.png/28px-Province_icon.png)](/Province "Province") Own and core all provinces in the areas: [Westsylvania](/Westsylvania "Westsylvania"), [Delaware Valley](/Delaware_Valley "Delaware Valley"), [Hudson Valley](/Hudson_Valley "Hudson Valley"), [Massachusetts](/Massachusetts "Massachusetts"), [Connecticut](/Connecticut "Connecticut"), [Virginia](/Virginia "Virginia"), [Great Valley](/Great_Valley "Great Valley"), [Piedmont Plateau](/Piedmont_Plateau "Piedmont Plateau"), [North Carolina](/North_Carolina "North Carolina"), [South Carolina](/South_Carolina "South Carolina"), [Vandalia](/Vandalia "Vandalia") and [Overmountain](/Overmountain "Overmountain").\n*   [![Province icon.png](https://eu4.paradoxwikis.com/images/thumb/1/13/Province_icon.png/28px-Province_icon.png)](/Province "Province") Own and core the provinces: Guale, Penobscott, Shatteras, Mocama, Coweta, Sokoki, Kennebec, Passamaquoddy.\n\nExpand\n\n[![No Trail of Tears map.png](https://eu4.paradoxwikis.com/images/thumb/1/19/No_Trail_of_Tears_map.png/140px-No_Trail_of_Tears_map.png)](/File:No_Trail_of_Tears_map.png)\n\n[](/File:No_Trail_of_Tears_map.png "Enlarge")',
    notes: '',
  },
  {
    id: 'ach_178',
    name: 'Parisian Pasha',
    description: 'Assign Pasha to Paris.',
    icon: 'https://eu4.paradoxwikis.com/images/b/b2/Parisian_Pasha.png',
    dlc: '',
    version: '1.23',
    difficulty: 'M',
    game: 'eu4',
    guideUrl: '',
    startingConditions: '',
    completionRequirements:
      '*   [![Tab domestic government.png](https://eu4.paradoxwikis.com/images/thumb/f/ff/Tab_domestic_government.png/28px-Tab_domestic_government.png)](/Government "Government") Has a government reform which allows Pashas\n*   [![Yes](https://eu4.paradoxwikis.com/images/thumb/d/da/Ledger_yes.png/28px-Ledger_yes.png)](/File:Ledger_yes.png "Yes") Paris has a pasha',
    notes:
      'Can be done as either [![Flag of Ottomans](https://eu4.paradoxwikis.com/images/thumb/8/89/Ottomans.png/20px-Ottomans.png)](/Ottomans "Ottomans") [Ottomans](/Ottomans "Ottomans") or [![Flag of Rûm](https://eu4.paradoxwikis.com/images/thumb/8/85/R%C3%BBm.png/20px-R%C3%BBm.png)](/R%C3%BBm "Rûm") [Rûm](/R%C3%BBm "Rûm")\n\nPossible reforms are [Ottoman Government](/Ottoman_Government "Ottoman Government"), [Modernized Ottoman Government](/Modernized_Ottoman_Government "Modernized Ottoman Government"), [Reorganized Ottoman Government](/Reorganized_Ottoman_Government "Reorganized Ottoman Government") and [Sultanate of Rûm](/Sultanate_of_R%C3%BBm "Sultanate of Rûm")',
  },
  {
    id: 'ach_179',
    name: 'Poland can into space',
    description: 'As Poland, reach the maximum level in all technologies (32).',
    icon: 'https://eu4.paradoxwikis.com/images/6/6d/Poland_can_into_space.jpg',
    dlc: '',
    version: '1.1',
    difficulty: 'VE',
    game: 'eu4',
    guideUrl: '',
    startingConditions:
      '[![Yes](https://eu4.paradoxwikis.com/images/thumb/d/da/Ledger_yes.png/28px-Ledger_yes.png)](/File:Ledger_yes.png "Yes") Playing as [![Flag of Poland](https://eu4.paradoxwikis.com/images/thumb/9/99/Poland.png/20px-Poland.png)](/Poland "Poland") [Poland](/Poland "Poland")',
    completionRequirements:
      '*   [![Administrative tech.png](https://eu4.paradoxwikis.com/images/8/8e/Administrative_technology.png)](/Administrative_technology "Administrative technology") Administrative technology is **32**\n*   [![Diplomatic tech.png](https://eu4.paradoxwikis.com/images/2/22/Diplomatic_technology.png)](/Diplomatic_technology "Diplomatic technology") Diplomatic technology is **32**\n*   [![Military tech.png](https://eu4.paradoxwikis.com/images/1/1a/Military_technology.png)](/Military_technology "Military technology") Military technology is **32**',
    notes: '',
  },
  {
    id: 'ach_180',
    name: 'Redecorating',
    description: 'Starting as an Orthodox Nation, Consecrate Metropolitan in Roma.',
    icon: 'https://eu4.paradoxwikis.com/images/5/55/Redecorating.png',
    dlc: '',
    version: '1.22',
    difficulty: 'M',
    game: 'eu4',
    guideUrl: '',
    startingConditions:
      '[![Orthodoxy](https://eu4.paradoxwikis.com/images/thumb/9/96/Orthodox.png/28px-Orthodox.png)](/Orthodox "Orthodox") Is Orthodox',
    completionRequirements:
      '*   [![Province icon.png](https://eu4.paradoxwikis.com/images/thumb/1/13/Province_icon.png/28px-Province_icon.png)](/Province "Province") Own and core Roma\n*   [![Yes](https://eu4.paradoxwikis.com/images/thumb/d/da/Ledger_yes.png/28px-Ledger_yes.png)](/File:Ledger_yes.png "Yes") Activated *consecrate metropolitan* in the stated area of *Lazio-Umbria*',
    notes:
      'Orthodox nations in 1444: [![Flag of Beloozero](https://eu4.paradoxwikis.com/images/thumb/a/a9/Beloozero.png/20px-Beloozero.png)](/Beloozero "Beloozero") [Beloozero](/Beloozero "Beloozero"), [![Flag of Byzantium](https://eu4.paradoxwikis.com/images/thumb/9/96/Byzantium.png/20px-Byzantium.png)](/Byzantium "Byzantium") [Byzantium](/Byzantium "Byzantium"), [![Flag of Circassia](https://eu4.paradoxwikis.com/images/thumb/3/3b/Circassia.png/20px-Circassia.png)](/Circassia "Circassia") [Circassia](/Circassia "Circassia"), [![Flag of Georgia](https://eu4.paradoxwikis.com/images/thumb/1/19/Georgia.png/20px-Georgia.png)](/Georgia "Georgia") [Georgia](/Georgia "Georgia"), [![Flag of Herzegovina](https://eu4.paradoxwikis.com/images/thumb/f/f8/Herzegovina.png/20px-Herzegovina.png)](/Herzegovina "Herzegovina") [Herzegovina](/Herzegovina "Herzegovina"), [![Flag of Moldavia](https://eu4.paradoxwikis.com/images/thumb/5/59/Moldavia.png/20px-Moldavia.png)](/Moldavia "Moldavia") [Moldavia](/Moldavia "Moldavia"), [![Flag of Muscovy](https://eu4.paradoxwikis.com/images/thumb/4/41/Muscovy.png/20px-Muscovy.png)](/Muscovy "Muscovy") [Muscovy](/Muscovy "Muscovy"), [![Flag of Novgorod](https://eu4.paradoxwikis.com/images/thumb/5/5e/Novgorod.png/20px-Novgorod.png)](/Novgorod "Novgorod") [Novgorod](/Novgorod "Novgorod"), [![Flag of Odoyev](https://eu4.paradoxwikis.com/images/thumb/f/f4/Odoyev.png/20px-Odoyev.png)](/Odoyev "Odoyev") [Odoyev](/Odoyev "Odoyev"), [![Flag of Perm](https://eu4.paradoxwikis.com/images/thumb/8/8e/Perm.png/20px-Perm.png)](/Perm "Perm") [Perm](/Perm "Perm"), [![Flag of Pskov](https://eu4.paradoxwikis.com/images/thumb/5/53/Pskov.png/20px-Pskov.png)](/Pskov "Pskov") [Pskov](/Pskov "Pskov"), [![Flag of Rostov](https://eu4.paradoxwikis.com/images/thumb/3/38/Rostov.png/20px-Rostov.png)](/Rostov "Rostov") [Rostov](/Rostov "Rostov"), [![Flag of Ryazan](https://eu4.paradoxwikis.com/images/thumb/7/7b/Ryazan.png/20px-Ryazan.png)](/Ryazan "Ryazan") [Ryazan](/Ryazan "Ryazan"), [![Flag of Samtskhe](https://eu4.paradoxwikis.com/images/thumb/1/1b/Samtskhe.png/20px-Samtskhe.png)](/Samtskhe "Samtskhe") [Samtskhe](/Samtskhe "Samtskhe"), [![Flag of Serbia](https://eu4.paradoxwikis.com/images/thumb/7/76/Serbia.png/20px-Serbia.png)](/Serbia "Serbia") [Serbia](/Serbia "Serbia"), [![Flag of Theodoro](https://eu4.paradoxwikis.com/images/thumb/1/11/Theodoro.png/20px-Theodoro.png)](/Theodoro "Theodoro") [Theodoro](/Theodoro "Theodoro"), [![Flag of Trebizond](https://eu4.paradoxwikis.com/images/thumb/1/1f/Trebizond.png/20px-Trebizond.png)](/Trebizond "Trebizond") [Trebizond](/Trebizond "Trebizond"), [![Flag of Tver](https://eu4.paradoxwikis.com/images/thumb/3/35/Tver.png/20px-Tver.png)](/Tver "Tver") [Tver](/Tver "Tver"), [![Flag of Wallachia](https://eu4.paradoxwikis.com/images/thumb/1/1a/Wallachia.png/20px-Wallachia.png)](/Wallachia "Wallachia") [Wallachia](/Wallachia "Wallachia"), and [![Flag of Yaroslavl](https://eu4.paradoxwikis.com/images/thumb/b/b9/Yaroslavl.png/20px-Yaroslavl.png)](/Yaroslavl "Yaroslavl") [Yaroslavl](/Yaroslavl "Yaroslavl")\n\nEasiest to do as [![Flag of Muscovy](https://eu4.paradoxwikis.com/images/thumb/4/41/Muscovy.png/20px-Muscovy.png)](/Muscovy "Muscovy") [Muscovy](/Muscovy "Muscovy").',
  },
  {
    id: 'ach_181',
    name: 'Rekindling the Flames',
    description:
      'Starting as a Zoroastrian custom nation with no more than 200 points and a maximum of 5 provinces, rekindle the royal fires.',
    icon: 'https://eu4.paradoxwikis.com/images/c/c1/Rekindling_the_Flames.jpg',
    dlc: '',
    version: '1.14',
    difficulty: 'M',
    game: 'eu4',
    guideUrl: 'https://eu4.paradoxwikis.com/Rekindling_the_Flames',
    startingConditions:
      '*   [![Nation designer.png](https://eu4.paradoxwikis.com/images/a/ab/Nation_designer.png)](/Nation_designer "Nation designer") Playing as a custom nation\n*   [![Yes](https://eu4.paradoxwikis.com/images/thumb/d/da/Ledger_yes.png/28px-Ledger_yes.png)](/File:Ledger_yes.png "Yes") Only 1 custom nation exists in the world\n*   [![No](https://eu4.paradoxwikis.com/images/thumb/5/56/Ledger_no_crop.png/28px-Ledger_no_crop.png)](/File:Ledger_no_crop.png "No") Used no more than 201 nation designer points\n*   [![No](https://eu4.paradoxwikis.com/images/thumb/5/56/Ledger_no_crop.png/28px-Ledger_no_crop.png)](/File:Ledger_no_crop.png "No") No more than [![Province icon.png](https://eu4.paradoxwikis.com/images/thumb/1/13/Province_icon.png/28px-Province_icon.png)](/Province "Province") 5 provinces\n*   [![Zoroastrianism.png](https://eu4.paradoxwikis.com/images/thumb/2/25/Zoroastrianism.png/28px-Zoroastrianism.png)](/Zoroastrian "Zoroastrian") Is Zoroastrian',
    completionRequirements:
      '*   [![No](https://eu4.paradoxwikis.com/images/thumb/5/56/Ledger_no_crop.png/28px-Ledger_no_crop.png)](/File:Ledger_no_crop.png "No") *Not* playing as a [released vassal](/Vassal#Release_a_nation "Vassal")\n*   [![Zoroastrianism.png](https://eu4.paradoxwikis.com/images/thumb/2/25/Zoroastrianism.png/28px-Zoroastrianism.png)](/Zoroastrian "Zoroastrian") Is Zoroastrian\n*   [![Yes](https://eu4.paradoxwikis.com/images/thumb/d/da/Ledger_yes.png/28px-Ledger_yes.png)](/File:Ledger_yes.png "Yes") Has country modifier *[Royal Fires](/Rekindling_the_Royal_Fires "Rekindling the Royal Fires")*\n\nExpand\n\n[![Royal Fires map.png](https://eu4.paradoxwikis.com/images/thumb/a/a5/Royal_Fires_map.png/140px-Royal_Fires_map.png)](/File:Royal_Fires_map.png)\n\n[](/File:Royal_Fires_map.png "Enlarge")',
    notes:
      'Note that this achievement cannot be combined with Keep the Flame Burning because it requires being a Custom Nation, which disallows earning Keep the Flame Burning.',
  },
  {
    id: 'ach_182',
    name: 'Rise of the White Sheep',
    description: 'As Aq Qoyunlu, own Tabriz and have Qara Qoyunlu not exist by 1478.',
    icon: 'https://eu4.paradoxwikis.com/images/8/85/Rise_of_the_White_Sheep.png',
    dlc: '',
    version: '1.20',
    difficulty: 'H',
    game: 'eu4',
    guideUrl: '',
    startingConditions:
      '[![Yes](https://eu4.paradoxwikis.com/images/thumb/d/da/Ledger_yes.png/28px-Ledger_yes.png)](/File:Ledger_yes.png "Yes") Playing as [![Flag of Aq Qoyunlu](https://eu4.paradoxwikis.com/images/thumb/6/67/Aq_Qoyunlu.png/20px-Aq_Qoyunlu.png)](/Aq_Qoyunlu "Aq Qoyunlu") [Aq Qoyunlu](/Aq_Qoyunlu "Aq Qoyunlu")',
    completionRequirements:
      '*   [![Yes](https://eu4.paradoxwikis.com/images/thumb/d/da/Ledger_yes.png/28px-Ledger_yes.png)](/File:Ledger_yes.png "Yes") The year is before 1478\n*   [![Yes](https://eu4.paradoxwikis.com/images/thumb/d/da/Ledger_yes.png/28px-Ledger_yes.png)](/File:Ledger_yes.png "Yes") [![Flag of Qara Qoyunlu](https://eu4.paradoxwikis.com/images/thumb/9/99/Qara_Qoyunlu.png/20px-Qara_Qoyunlu.png)](/Qara_Qoyunlu "Qara Qoyunlu") [Qara Qoyunlu](/Qara_Qoyunlu "Qara Qoyunlu") does *not* exist\n*   [![Province icon.png](https://eu4.paradoxwikis.com/images/thumb/1/13/Province_icon.png/28px-Province_icon.png)](/Province "Province") Owns Tabriz',
    notes:
      'As long as you own Tabriz, any other provinces owned by [![Flag of Qara Qoyunlu](https://eu4.paradoxwikis.com/images/thumb/9/99/Qara_Qoyunlu.png/20px-Qara_Qoyunlu.png)](/Qara_Qoyunlu "Qara Qoyunlu") [Qara Qoyunlu](/Qara_Qoyunlu "Qara Qoyunlu") at game start can be owned by other nations. Vassal/ally feeding can be useful. [![Flag of Iraq](https://eu4.paradoxwikis.com/images/thumb/c/c4/Iraq.png/20px-Iraq.png)](/Iraq "Iraq") [Iraq](/Iraq "Iraq") has many cores on the required area, and there are several nations that can be released from Qara Qoyunlu\'s provinces.',
  },
  {
    id: 'ach_183',
    name: 'Ruina Imperii',
    description: 'Dismantle the Holy Roman Empire.',
    icon: 'https://eu4.paradoxwikis.com/images/b/b9/Ruina_Imperii.jpg',
    dlc: '',
    version: '1.1',
    difficulty: 'E',
    game: 'eu4',
    guideUrl: '',
    startingConditions: '',
    completionRequirements:
      '*   [![No](https://eu4.paradoxwikis.com/images/thumb/5/56/Ledger_no_crop.png/28px-Ledger_no_crop.png)](/File:Ledger_no_crop.png "No") There are no countries in the Holy Roman Empire\n*   [![No](https://eu4.paradoxwikis.com/images/thumb/5/56/Ledger_no_crop.png/28px-Ledger_no_crop.png)](/File:Ledger_no_crop.png "No") [![Flag of Holy Roman Empire](https://eu4.paradoxwikis.com/images/thumb/e/ee/Holy_Roman_Empire.png/20px-Holy_Roman_Empire.png)](/Holy_Roman_Empire_\\(country\\) "Holy Roman Empire (country)") [Holy Roman Empire](/Holy_Roman_Empire_\\(country\\) "Holy Roman Empire (country)") does *not* exist',
    notes:
      "Dismantling the Holy Roman Empire requires allying electors or controlling their capital as well as controlling the emperor's capital. Note that the HRE disbanding itself due to lack of an eligible emperor and another nation disbanding HRE both counts for the achievement.",
  },
  {
    id: 'ach_184',
    name: 'Sakoku Law',
    description: 'Go full isolationist in 6 Incidents.',
    icon: 'https://eu4.paradoxwikis.com/images/c/ce/Sakoku_Law.png',
    dlc: '',
    version: '1.20',
    difficulty: 'VE',
    game: 'eu4',
    guideUrl: '',
    startingConditions:
      '[![Tolerance own.png](https://eu4.paradoxwikis.com/images/thumb/d/d9/Tolerance_of_the_true_faith.png/28px-Tolerance_of_the_true_faith.png)](/Tolerance_of_the_true_faith "Tolerance of the true faith") Religion is [![Shintoism](https://eu4.paradoxwikis.com/images/thumb/8/85/Shinto.png/28px-Shinto.png)](/Shinto "Shinto") Shinto',
    completionRequirements: 'Isolationism achievement counter is 6',
    notes:
      'By "going full isolationist" the game is *not* referring to the level of isolationism in your country. Rather, it\'s referring to the fact that each incident has an outcome of either open, neutral, or isolationist. To get the achievement you must get the isolationist outcome of 6 incidents.',
  },
  {
    id: 'ach_185',
    name: 'Sinaasappel!',
    description: 'Get Orangists in power with 100% Republican Tradition, and owning a province in China.',
    icon: 'https://eu4.paradoxwikis.com/images/a/a0/Sinaasappel%21.jpg',
    dlc: '',
    version: '1.7',
    difficulty: 'M',
    game: 'eu4',
    guideUrl: '',
    startingConditions: '',
    completionRequirements:
      '*   [![No](https://eu4.paradoxwikis.com/images/thumb/5/56/Ledger_no_crop.png/28px-Ledger_no_crop.png)](/File:Ledger_no_crop.png "No") *Not* playing as a [released vassal](/Vassal#Release_a_nation "Vassal")\n*   [![Yes](https://eu4.paradoxwikis.com/images/thumb/d/da/Ledger_yes.png/28px-Ledger_yes.png)](/File:Ledger_yes.png "Yes") Orangists/Monarchists are in power\n*   [![Republican tradition.png](https://eu4.paradoxwikis.com/images/e/ee/Republican_tradition.png)](/Republic_tradition "Republic tradition") **99%** Republican tradition\n*   [![Province icon.png](https://eu4.paradoxwikis.com/images/thumb/1/13/Province_icon.png/28px-Province_icon.png)](/Province "Province") Own and core at least one province in the [China sub-continent](/China_\\(sub-continent\\) "China (sub-continent)").',
    notes:
      '*   Orangist-Statist mechanics require the [Dutch Republic](/Dutch_Republic "Dutch Republic") (only available for countries with [![Culture icon.png](https://eu4.paradoxwikis.com/images/thumb/2/29/Culture_icon.png/24px-Culture_icon.png)](/Culture "Culture") Dutch, Frisian or Flemish culture) or [The Feuillant System](/The_Feuillant_System "The Feuillant System") (only available to Revolutionary republics). It is *not* possible to get the achievement with the various monarchy and theocracy reforms which have this mechanic([Stadhouder Monarchy](/Stadhouder_Monarchy "Stadhouder Monarchy"), [States General](/States_General "States General"), [Ganden Phodrang](/Ganden_Phodrang "Ganden Phodrang"), [Dutch Archbishopric](/Dutch_Archbishopric "Dutch Archbishopric"), [Open Public Elections](/Open_Public_Elections "Open Public Elections")), because they can\'t get [![Republican tradition.png](https://eu4.paradoxwikis.com/images/thumb/e/ee/Republican_tradition.png/24px-Republican_tradition.png)](/Republic_tradition "Republic tradition") republican tradition.\n*   The achievement will not be visible unless the country\'s primary culture is Dutch or Flemish, but it can still be obtained.\n*   Colonizing Taiwan counts for the achievement; no need to wait for a Mingplosion.',
  },
  {
    id: 'ach_186',
    name: 'Sleepless in Seattle',
    description: 'Own 10 Coffee producing provinces, and have your capital in Salish.',
    icon: 'https://eu4.paradoxwikis.com/images/7/7a/Sleepless_in_Seattle.png',
    dlc: '',
    version: '1.25',
    difficulty: 'M',
    game: 'eu4',
    guideUrl: '',
    startingConditions: '',
    completionRequirements:
      '*   [![Capital.png](https://eu4.paradoxwikis.com/images/thumb/6/6e/Capital.png/28px-Capital.png)](/Capital "Capital") Capital is Salish (874)\n*   [![Coffee.png](https://eu4.paradoxwikis.com/images/thumb/e/e9/Coffee.png/28px-Coffee.png)](/Coffee "Coffee") Own 10 Coffee producing provinces',
    notes:
      'Easiest to complete as a New World nation, as this will simplify moving your capital and help with attacking colonial nations. Coffee has an increased chance to be produced in the Brazil, Caribbean and Colombia colonial regions.',
  },
  {
    id: 'ach_187',
    name: 'Sons of Carthage',
    description:
      'As Tunisia, own and have cores on Sicily, Sardinia, the Balearic Islands, the coast of Algiers and the southern coast of Spain.',
    icon: 'https://eu4.paradoxwikis.com/images/4/4c/Sons_of_Carthage.jpg',
    dlc: '',
    version: '1.6',
    difficulty: 'M',
    game: 'eu4',
    guideUrl: '',
    startingConditions:
      '[![Yes](https://eu4.paradoxwikis.com/images/thumb/d/da/Ledger_yes.png/28px-Ledger_yes.png)](/File:Ledger_yes.png "Yes") Playing as [![Flag of Tunis](https://eu4.paradoxwikis.com/images/thumb/7/79/Tunis.png/20px-Tunis.png)](/Tunis "Tunis") [Tunis](/Tunis "Tunis")',
    completionRequirements:
      '[![Province icon.png](https://eu4.paradoxwikis.com/images/thumb/1/13/Province_icon.png/28px-Province_icon.png)](/Province "Province") Own and core the following provinces:\n\nExpand\n\n[![Carthage map.png](https://eu4.paradoxwikis.com/images/thumb/b/b2/Carthage_map.png/140px-Carthage_map.png)](/File:Carthage_map.png)\n\n[](/File:Carthage_map.png "Enlarge")',
    notes: '',
  },
  {
    id: 'ach_188',
    name: 'Super Trooper',
    description:
      'Starting as Sweden, enact the Allotment System government reform, have 80 regiments of Carolean raised at the same time with at least +40% infantry combat ability.',
    icon: 'https://eu4.paradoxwikis.com/images/1/1e/Super_Trooper.png',
    dlc: '',
    version: '1.34',
    difficulty: 'M',
    game: 'eu4',
    guideUrl: '',
    startingConditions:
      '[![Yes](https://eu4.paradoxwikis.com/images/thumb/d/da/Ledger_yes.png/28px-Ledger_yes.png)](/File:Ledger_yes.png "Yes") Playing as [![Flag of Sweden](https://eu4.paradoxwikis.com/images/thumb/9/98/Sweden.png/20px-Sweden.png)](/Sweden "Sweden") [Sweden](/Sweden "Sweden")',
    completionRequirements:
      '*   [![Government monarchy.png](https://eu4.paradoxwikis.com/images/thumb/4/4d/Government_monarchy.png/28px-Government_monarchy.png)](/Monarchy "Monarchy")/[![Government republic.png](https://eu4.paradoxwikis.com/images/thumb/5/5d/Government_republic.png/28px-Government_republic.png)](/Republic "Republic") Has enacted the [Allotment System](/Allotment_System "Allotment System") government reform\n*   Has at least 80 [carolean](/Special_land_units#Caroleans "Special land units") regiments\n*   [![Infantry power.png](https://eu4.paradoxwikis.com/images/thumb/2/21/Infantry_combat_ability.png/28px-Infantry_combat_ability.png)](/Infantry_combat_ability "Infantry combat ability") Infantry combat ability is at least **40%**',
    notes:
      'Take quality and innovative ideas for **45%** [![Infantry power.png](https://eu4.paradoxwikis.com/images/thumb/2/21/Infantry_combat_ability.png/28px-Infantry_combat_ability.png)](/Infantry_combat_ability "Infantry combat ability") infantry combat ability with swedish ideas. Since only development from swedish and finnish cultured provinces counts towards increasing how many [carolean](/Special_land_units#Caroleans "Special land units") regiments are available you need to culture convert other provinces to reach 800 development.',
  },
  {
    id: 'ach_189',
    name: 'Swahili Persuasion',
    description: 'As Kilwa, convert all of the Moluccas and Indonesia.',
    icon: 'https://eu4.paradoxwikis.com/images/f/f7/Swahili_Persuasion.png',
    dlc: '',
    version: '1.32',
    difficulty: 'M',
    game: 'eu4',
    guideUrl: '',
    startingConditions:
      '[![Yes](https://eu4.paradoxwikis.com/images/thumb/d/da/Ledger_yes.png/28px-Ledger_yes.png)](/File:Ledger_yes.png "Yes") Playing as [![Flag of Kilwa](https://eu4.paradoxwikis.com/images/thumb/c/cb/Kilwa.png/20px-Kilwa.png)](/Kilwa "Kilwa") [Kilwa](/Kilwa "Kilwa")',
    completionRequirements:
      '*   [![Yes](https://eu4.paradoxwikis.com/images/thumb/d/da/Ledger_yes.png/28px-Ledger_yes.png)](/File:Ledger_yes.png "Yes") Is [![Flag of Kilwa](https://eu4.paradoxwikis.com/images/thumb/c/cb/Kilwa.png/20px-Kilwa.png)](/Kilwa "Kilwa") [Kilwa](/Kilwa "Kilwa")\n*   [![Yes](https://eu4.paradoxwikis.com/images/thumb/d/da/Ledger_yes.png/28px-Ledger_yes.png)](/File:Ledger_yes.png "Yes") all provinces in the regions [Moluccas](/Moluccas "Moluccas") and [Indonesia](/Indonesia "Indonesia") follow the state religion of [![Flag of Kilwa](https://eu4.paradoxwikis.com/images/thumb/c/cb/Kilwa.png/20px-Kilwa.png)](/Kilwa "Kilwa") [Kilwa](/Kilwa "Kilwa")',
    notes:
      'Uncolonized provinces must also follow your state religion. [Propagate religion](/Propagate_religion "Propagate religion") is helpful however try to keep the Europeans out of the area as it won\'t convert Christian provinces.\n\nThis achievement is only visible if the [![Origins.png](https://eu4.paradoxwikis.com/images/thumb/8/8e/Origins.png/28px-Origins.png)](/Origins "Origins") Origins DLC is active, but it can be achieved even without the DLC',
  },
  {
    id: 'ach_190',
    name: 'Sweden is not overpowered!',
    description: 'Own and have cores on the entire Baltic coastline as Sweden.',
    icon: 'https://eu4.paradoxwikis.com/images/3/3b/Sweden_is_not_overpowered%21.jpg',
    dlc: '',
    version: '1.1',
    difficulty: 'M',
    game: 'eu4',
    guideUrl: '',
    startingConditions:
      '[![Yes](https://eu4.paradoxwikis.com/images/thumb/d/da/Ledger_yes.png/28px-Ledger_yes.png)](/File:Ledger_yes.png "Yes") Playing as [![Flag of Sweden](https://eu4.paradoxwikis.com/images/thumb/9/98/Sweden.png/20px-Sweden.png)](/Sweden "Sweden") [Sweden](/Sweden "Sweden")',
    completionRequirements:
      '[![Province icon.png](https://eu4.paradoxwikis.com/images/thumb/1/13/Province_icon.png/28px-Province_icon.png)](/Province "Province") Own and core the following provinces:\n\nExpand\n\n[![Achievement sweden conditions map.png](https://eu4.paradoxwikis.com/images/thumb/9/90/Achievement_sweden_conditions_map.png/140px-Achievement_sweden_conditions_map.png)](/File:Achievement_sweden_conditions_map.png)\n\n[](/File:Achievement_sweden_conditions_map.png "Enlarge")',
    notes:
      "Keep in mind that owning the cores via personal union does not count. If you intend to form a personal union with Poland, be sure to leave plenty of time to integrate Poland (you'll need 50 years before you start the process and possibly several more decades to do the integration.)",
  },
  {
    id: 'ach_191',
    name: 'Sweet Harmony',
    description: 'Harmonize 7 religions as Confucian.',
    icon: 'https://eu4.paradoxwikis.com/images/6/6d/Sweet_Harmony.png',
    dlc: '',
    version: '1.20',
    difficulty: 'E',
    game: 'eu4',
    guideUrl: '',
    startingConditions: '',
    completionRequirements:
      '*   [![Confucianism](https://eu4.paradoxwikis.com/images/thumb/a/a2/Confucianism.png/28px-Confucianism.png)](/Confucian "Confucian") Is Confucian\n*   [![Yearly harmony increase.png](https://eu4.paradoxwikis.com/images/thumb/c/c3/Yearly_harmony_increase.png/28px-Yearly_harmony_increase.png)](/Harmony "Harmony") Have 7 harmonized religions',
    notes:
      'Harmonization takes 33.3 years, but events can speed it up marginally. [![Flag of Ming](https://eu4.paradoxwikis.com/images/thumb/a/a5/Ming.png/20px-Ming.png)](/Ming "Ming") [Ming](/Ming "Ming") and [![Flag of Korea](https://eu4.paradoxwikis.com/images/thumb/4/45/Korea.png/20px-Korea.png)](/Korea "Korea") [Korea](/Korea "Korea") start with Mahayana already harmonized. Easiest as Ming, conquering some Hindu, Sunni, and Shinto land.\n\nIt is also a good option to start as Korea, form [![Flag of Japan](https://eu4.paradoxwikis.com/images/thumb/f/fc/Japan.png/20px-Japan.png)](/Japan "Japan") [Japan](/Japan "Japan"), then conquer Philippines, Indonesia to achieve this achievement. Harmonization requires owning 20 development of the target religion or religious group. Might be quicker and more fun to create a custom nation with harmonizing ideas.',
  },
  {
    id: 'ach_192',
    name: 'Switzerlake',
    description: 'Own 99 provinces as Switzerland while owning no ports.',
    icon: 'https://eu4.paradoxwikis.com/images/7/7b/Switzerlake.png',
    dlc: '',
    version: '1.9',
    difficulty: 'M',
    game: 'eu4',
    guideUrl: '',
    startingConditions:
      '[![Yes](https://eu4.paradoxwikis.com/images/thumb/d/da/Ledger_yes.png/28px-Ledger_yes.png)](/File:Ledger_yes.png "Yes") Playing as [![Flag of Switzerland](https://eu4.paradoxwikis.com/images/thumb/0/01/Switzerland.png/20px-Switzerland.png)](/Switzerland "Switzerland") [Switzerland](/Switzerland "Switzerland")',
    completionRequirements:
      '*   [![No](https://eu4.paradoxwikis.com/images/thumb/5/56/Ledger_no_crop.png/28px-Ledger_no_crop.png)](/File:Ledger_no_crop.png "No") *Not* playing as a [released vassal](/Vassal#Release_a_nation "Vassal")\n*   [![Yes](https://eu4.paradoxwikis.com/images/thumb/d/da/Ledger_yes.png/28px-Ledger_yes.png)](/File:Ledger_yes.png "Yes") Own 99 provinces\n*   [![No](https://eu4.paradoxwikis.com/images/thumb/5/56/Ledger_no_crop.png/28px-Ledger_no_crop.png)](/File:Ledger_no_crop.png "No") Own no ports',
    notes:
      'Can be achieved as part of a normal game and then giving away all the coastal provinces. Avoid expanding into the Holy Roman Empire to prevent high aggressive expansion.',
  },
  {
    id: 'ach_193',
    name: 'Take that, von Habsburgs!',
    description: 'Starting as Hungary, own all of Austria as core provinces.',
    icon: 'https://eu4.paradoxwikis.com/images/6/6f/Take_that%2C_von_Habsburgs%21.jpg',
    dlc: '',
    version: '1.12',
    difficulty: 'M',
    game: 'eu4',
    guideUrl: '',
    startingConditions:
      '[![Yes](https://eu4.paradoxwikis.com/images/thumb/d/da/Ledger_yes.png/28px-Ledger_yes.png)](/File:Ledger_yes.png "Yes") Playing as [![Flag of Hungary](https://eu4.paradoxwikis.com/images/thumb/6/6a/Hungary.png/20px-Hungary.png)](/Hungary "Hungary") [Hungary](/Hungary "Hungary")',
    completionRequirements:
      '*   [![No](https://eu4.paradoxwikis.com/images/thumb/5/56/Ledger_no_crop.png/28px-Ledger_no_crop.png)](/File:Ledger_no_crop.png "No") *Not* playing as a [released vassal](/Vassal#Release_a_nation "Vassal")\n*   [![Yes](https://eu4.paradoxwikis.com/images/thumb/d/da/Ledger_yes.png/28px-Ledger_yes.png)](/File:Ledger_yes.png "Yes") Is [![Flag of Hungary](https://eu4.paradoxwikis.com/images/thumb/6/6a/Hungary.png/20px-Hungary.png)](/Hungary "Hungary") [Hungary](/Hungary "Hungary") *or* [![Flag of Austria-Hungary](https://eu4.paradoxwikis.com/images/thumb/f/f1/Austria-Hungary.png/20px-Austria-Hungary.png)](/Austria-Hungary "Austria-Hungary") [Austria-Hungary](/Austria-Hungary "Austria-Hungary")\n*   [![Province icon.png](https://eu4.paradoxwikis.com/images/thumb/1/13/Province_icon.png/28px-Province_icon.png)](/Province "Province") Own and core all of the [Inner Austria](/Inner_Austria "Inner Austria"), [Austria Proper](/Austria_Proper "Austria Proper"), [Carniola](/Carniola "Carniola") and [Tirol](/European_regions#Tirol "European regions") areas.\n\nExpand\n\n[![Take that, von Habsburgs! map.png](https://eu4.paradoxwikis.com/images/e/e2/Take_that%2C_von_Habsburgs%21_map.png)](/File:Take_that,_von_Habsburgs!_map.png)\n\n[](/File:Take_that,_von_Habsburgs!_map.png "Enlarge")',
    notes:
      'Besides provinces from [![Flag of Austria](https://eu4.paradoxwikis.com/images/thumb/7/7f/Austria.png/20px-Austria.png)](/Austria "Austria") [Austria](/Austria "Austria"), also requires taking Istria (130) from [![Flag of Venice](https://eu4.paradoxwikis.com/images/thumb/e/e1/Venice.png/20px-Venice.png)](/Venice "Venice") [Venice](/Venice "Venice"), Cilli (4751) from [![Flag of Cilli](https://eu4.paradoxwikis.com/images/thumb/7/71/Cilli.png/20px-Cilli.png)](/Cilli "Cilli") [Cilli](/Cilli "Cilli"), Trentino (110) from [![Flag of Trent](https://eu4.paradoxwikis.com/images/thumb/9/94/Trent.png/20px-Trent.png)](/Trent "Trent") [Trent](/Trent "Trent") and Bregenz (4710) from [![Flag of Bregenz](https://eu4.paradoxwikis.com/images/thumb/4/4d/Bregenz.png/20px-Bregenz.png)](/Bregenz "Bregenz") [Bregenz](/Bregenz "Bregenz"). Does not require Sundgau (1880), Breisgau (72) or anything else Austria may have expanded into.',
  },
  {
    id: 'ach_194',
    name: 'Tatarstan',
    description: 'As Kazan or Nogai, own all Tatar culture group lands.',
    icon: 'https://eu4.paradoxwikis.com/images/6/6e/Tatarstan.jpg',
    dlc: '',
    version: '1.14',
    difficulty: 'M',
    game: 'eu4',
    guideUrl: '',
    startingConditions:
      '[![Yes](https://eu4.paradoxwikis.com/images/thumb/d/da/Ledger_yes.png/28px-Ledger_yes.png)](/File:Ledger_yes.png "Yes") Playing as *either*:\n\n*    [![Flag of Kazan](https://eu4.paradoxwikis.com/images/thumb/3/33/Kazan.png/20px-Kazan.png)](/Kazan "Kazan") [Kazan](/Kazan "Kazan")\n*    [![Flag of Nogai](https://eu4.paradoxwikis.com/images/thumb/3/32/Nogai.png/20px-Nogai.png)](/Nogai "Nogai") [Nogai](/Nogai "Nogai")',
    completionRequirements:
      '*   [![No](https://eu4.paradoxwikis.com/images/thumb/5/56/Ledger_no_crop.png/28px-Ledger_no_crop.png)](/File:Ledger_no_crop.png "No") *Not* playing as a [released vassal](/Vassal#Release_a_nation "Vassal")\n*   [![Yes](https://eu4.paradoxwikis.com/images/thumb/d/da/Ledger_yes.png/28px-Ledger_yes.png)](/File:Ledger_yes.png "Yes") Is [![Flag of Kazan](https://eu4.paradoxwikis.com/images/thumb/3/33/Kazan.png/20px-Kazan.png)](/Kazan "Kazan") [Kazan](/Kazan "Kazan") or [![Flag of Nogai](https://eu4.paradoxwikis.com/images/thumb/3/32/Nogai.png/20px-Nogai.png)](/Nogai "Nogai") [Nogai](/Nogai "Nogai")\n*   [![No](https://eu4.paradoxwikis.com/images/thumb/5/56/Ledger_no_crop.png/28px-Ledger_no_crop.png)](/File:Ledger_no_crop.png "No") No *Tatar* culture group province is owned by another country\n\nExpand\n\n[![Tatarstan map.png](https://eu4.paradoxwikis.com/images/thumb/7/78/Tatarstan_map.png/140px-Tatarstan_map.png)](/File:Tatarstan_map.png)\n\n[](/File:Tatarstan_map.png "Enlarge")',
    notes: '',
  },
  {
    id: 'ach_195',
    name: "That's No Mon",
    description: 'As Pegu, own at least 50 provinces that are not of the Mon culture.',
    icon: 'https://eu4.paradoxwikis.com/images/c/c8/That%27s_No_Mon.jpg',
    dlc: '',
    version: '1.31',
    difficulty: 'M',
    game: 'eu4',
    guideUrl: '',
    startingConditions:
      '*   [![Yes](https://eu4.paradoxwikis.com/images/thumb/d/da/Ledger_yes.png/28px-Ledger_yes.png)](/File:Ledger_yes.png "Yes") Playing as [![Flag of Pegu](https://eu4.paradoxwikis.com/images/thumb/3/3b/Pegu.png/20px-Pegu.png)](/Pegu "Pegu") [Pegu](/Pegu "Pegu")\n*   [![No](https://eu4.paradoxwikis.com/images/thumb/5/56/Ledger_no_crop.png/28px-Ledger_no_crop.png)](/File:Ledger_no_crop.png "No") *Not* using a [random New World](/Random_New_World "Random New World")',
    completionRequirements:
      '*   [![Yes](https://eu4.paradoxwikis.com/images/thumb/d/da/Ledger_yes.png/28px-Ledger_yes.png)](/File:Ledger_yes.png "Yes") Is [![Flag of Pegu](https://eu4.paradoxwikis.com/images/thumb/3/3b/Pegu.png/20px-Pegu.png)](/Pegu "Pegu") [Pegu](/Pegu "Pegu")\n*   [![Province icon.png](https://eu4.paradoxwikis.com/images/thumb/1/13/Province_icon.png/28px-Province_icon.png)](/Province "Province") At least 50 owned provinces do not have Mon culture',
    notes:
      'This achievement is only visible if the [![Leviathan.png](https://eu4.paradoxwikis.com/images/thumb/0/0a/Leviathan.png/28px-Leviathan.png)](/Leviathan "Leviathan") Leviathan DLC is active, but it can be achieved even without the DLC. This can be done at the same time as the [Sailor Mon](/Sailor_Mon "Sailor Mon") achievement, and will often occur without any additional effort. With Leviathan, the [![Flag of Pegu](https://eu4.paradoxwikis.com/images/thumb/3/3b/Pegu.png/20px-Pegu.png)](/Pegu "Pegu") [Pegu](/Pegu "Pegu") mission tree grants a subjugation cb on [![Flag of Ayutthaya](https://eu4.paradoxwikis.com/images/thumb/9/9d/Ayutthaya.png/20px-Ayutthaya.png)](/Ayutthaya "Ayutthaya") [Ayutthaya](/Ayutthaya "Ayutthaya"), which can lead to quite a large acquisition of provinces. The player can also flip cultures to Burmese to ensure colonies are not of Mon culture and can culture convert their original provinces to a new culture.',
  },
  {
    id: 'ach_196',
    name: 'The Bohemians',
    description: 'As Bohemia, own Dublin as a core province.',
    icon: 'https://eu4.paradoxwikis.com/images/0/07/The_Bohemians.jpg',
    dlc: '',
    version: '1.12',
    difficulty: 'M',
    game: 'eu4',
    guideUrl: 'https://eu4.paradoxwikis.com/The_Bohemians',
    startingConditions:
      '[![Yes](https://eu4.paradoxwikis.com/images/thumb/d/da/Ledger_yes.png/28px-Ledger_yes.png)](/File:Ledger_yes.png "Yes") Playing as [![Flag of Bohemia](https://eu4.paradoxwikis.com/images/thumb/4/41/Bohemia.png/20px-Bohemia.png)](/Bohemia "Bohemia") [Bohemia](/Bohemia "Bohemia")',
    completionRequirements:
      '*   [![No](https://eu4.paradoxwikis.com/images/thumb/5/56/Ledger_no_crop.png/28px-Ledger_no_crop.png)](/File:Ledger_no_crop.png "No") *Not* playing as a [released vassal](/Vassal#Release_a_nation "Vassal")\n*   [![Yes](https://eu4.paradoxwikis.com/images/thumb/d/da/Ledger_yes.png/28px-Ledger_yes.png)](/File:Ledger_yes.png "Yes") Is [![Flag of Bohemia](https://eu4.paradoxwikis.com/images/thumb/4/41/Bohemia.png/20px-Bohemia.png)](/Bohemia "Bohemia") [Bohemia](/Bohemia "Bohemia")\n*   [![Province icon.png](https://eu4.paradoxwikis.com/images/thumb/1/13/Province_icon.png/28px-Province_icon.png)](/Province "Province") Own and core Pale',
    notes: '',
  },
  {
    id: 'ach_197',
    name: 'The Burgundian Conquest',
    description:
      'As Burgundy, own the Low Countries region as core provinces and have France and Austria as your subjects.',
    icon: 'https://eu4.paradoxwikis.com/images/e/eb/The_Burgundian_Conquest.jpg',
    dlc: '',
    version: '1.14',
    difficulty: 'M',
    game: 'eu4',
    guideUrl: 'https://eu4.paradoxwikis.com/The_Burgundian_Conquest',
    startingConditions:
      '[![Yes](https://eu4.paradoxwikis.com/images/thumb/d/da/Ledger_yes.png/28px-Ledger_yes.png)](/File:Ledger_yes.png "Yes") Playing as [![Flag of Burgundy](https://eu4.paradoxwikis.com/images/thumb/b/b0/Burgundy.png/20px-Burgundy.png)](/Burgundy "Burgundy") [Burgundy](/Burgundy "Burgundy")',
    completionRequirements:
      '*   [![No](https://eu4.paradoxwikis.com/images/thumb/5/56/Ledger_no_crop.png/28px-Ledger_no_crop.png)](/File:Ledger_no_crop.png "No") *Not* playing as a [released vassal](/Vassal#Release_a_nation "Vassal")\n*   [![Yes](https://eu4.paradoxwikis.com/images/thumb/d/da/Ledger_yes.png/28px-Ledger_yes.png)](/File:Ledger_yes.png "Yes") Is [![Flag of Burgundy](https://eu4.paradoxwikis.com/images/thumb/b/b0/Burgundy.png/20px-Burgundy.png)](/Burgundy "Burgundy") [Burgundy](/Burgundy "Burgundy") *or* [![Flag of Lotharingia](https://eu4.paradoxwikis.com/images/thumb/3/38/Lotharingia.png/20px-Lotharingia.png)](/Lotharingia "Lotharingia") [Lotharingia](/Lotharingia "Lotharingia")\n*   [![Yes](https://eu4.paradoxwikis.com/images/thumb/d/da/Ledger_yes.png/28px-Ledger_yes.png)](/File:Ledger_yes.png "Yes") Has [![Flag of Austria](https://eu4.paradoxwikis.com/images/thumb/7/7f/Austria.png/20px-Austria.png)](/Austria "Austria") [Austria](/Austria "Austria") and [![Flag of France](https://eu4.paradoxwikis.com/images/thumb/d/de/France.png/20px-France.png)](/France "France") [France](/France "France") as subjects\n*   [![Province icon.png](https://eu4.paradoxwikis.com/images/thumb/1/13/Province_icon.png/28px-Province_icon.png)](/Province "Province") Own and core all provinces in the [Low Countries](/Low_Countries "Low Countries") region.',
    notes: '',
  },
  {
    id: 'ach_198',
    name: 'The First Toungoo Empire',
    description: 'As Taungu, unite the Burman culture group by 1500.',
    icon: 'https://eu4.paradoxwikis.com/images/a/af/The_First_Toungoo_Empire.png',
    dlc: '',
    version: '1.20',
    difficulty: 'VH',
    game: 'eu4',
    guideUrl: '',
    startingConditions:
      '[![Yes](https://eu4.paradoxwikis.com/images/thumb/d/da/Ledger_yes.png/28px-Ledger_yes.png)](/File:Ledger_yes.png "Yes") Playing as [![Flag of Taungu](https://eu4.paradoxwikis.com/images/thumb/0/0c/Taungu.png/20px-Taungu.png)](/Taungu "Taungu") [Taungu](/Taungu "Taungu")',
    completionRequirements:
      '*   [![Yes](https://eu4.paradoxwikis.com/images/thumb/d/da/Ledger_yes.png/28px-Ledger_yes.png)](/File:Ledger_yes.png "Yes") The year is before 1500\n*   [![Yes](https://eu4.paradoxwikis.com/images/thumb/d/da/Ledger_yes.png/28px-Ledger_yes.png)](/File:Ledger_yes.png "Yes") Is [![Flag of Taungu](https://eu4.paradoxwikis.com/images/thumb/0/0c/Taungu.png/20px-Taungu.png)](/Taungu "Taungu") [Taungu](/Taungu "Taungu")\n*   [![Culture icon.png](https://eu4.paradoxwikis.com/images/thumb/2/29/Culture_icon.png/28px-Culture_icon.png)](/Culture "Culture") All provinces in the *[Burman](/Culture#Burman "Culture")* [culture group](/Culture_group "Culture group") are owned by [![Flag of Taungu](https://eu4.paradoxwikis.com/images/thumb/0/0c/Taungu.png/20px-Taungu.png)](/Taungu "Taungu") [Taungu](/Taungu "Taungu")',
    notes: '',
  },
  {
    id: 'ach_199',
    name: 'The Iron Price',
    description: 'Restore the Danelaw region to Danish rule, and make it Danish culture.',
    icon: 'https://eu4.paradoxwikis.com/images/a/a0/The_Iron_Price.jpg',
    dlc: '',
    version: '1.7',
    difficulty: 'M',
    game: 'eu4',
    guideUrl: '',
    startingConditions:
      '[![Yes](https://eu4.paradoxwikis.com/images/thumb/d/da/Ledger_yes.png/28px-Ledger_yes.png)](/File:Ledger_yes.png "Yes") Playing as [![Flag of Denmark](https://eu4.paradoxwikis.com/images/thumb/6/69/Denmark.png/20px-Denmark.png)](/Denmark "Denmark") [Denmark](/Denmark "Denmark")',
    completionRequirements:
      '*   [![Province icon.png](https://eu4.paradoxwikis.com/images/thumb/1/13/Province_icon.png/28px-Province_icon.png)](/Province "Province") Own and core Northumberland and the Yorkshire, East Midlands, and East Anglia areas.\n*   [![Culture icon.png](https://eu4.paradoxwikis.com/images/thumb/2/29/Culture_icon.png/28px-Culture_icon.png)](/Culture "Culture") All these provinces have *Danish* [culture](/Culture "Culture").\n\nExpand\n\n[![The Iron Price map.png](https://eu4.paradoxwikis.com/images/5/51/The_Iron_Price_map.png)](/File:The_Iron_Price_map.png)\n\n[](/File:The_Iron_Price_map.png "Enlarge")',
    notes: '',
  },
  {
    id: 'ach_200',
    name: 'The League of Mayapan',
    description: 'Starting as Huastec, form Maya.',
    icon: 'https://eu4.paradoxwikis.com/images/5/5e/The_League_of_Mayapan.png',
    dlc: '',
    version: '1.28',
    difficulty: 'M',
    game: 'eu4',
    guideUrl: '',
    startingConditions:
      '[![Yes](https://eu4.paradoxwikis.com/images/thumb/d/da/Ledger_yes.png/28px-Ledger_yes.png)](/File:Ledger_yes.png "Yes") Playing as [![Flag of Huastec](https://eu4.paradoxwikis.com/images/thumb/a/ac/Huastec.png/20px-Huastec.png)](/Huastec "Huastec") [Huastec](/Huastec "Huastec")',
    completionRequirements:
      '[![Yes](https://eu4.paradoxwikis.com/images/thumb/d/da/Ledger_yes.png/28px-Ledger_yes.png)](/File:Ledger_yes.png "Yes") Is [![Flag of Maya](https://eu4.paradoxwikis.com/images/thumb/0/09/Maya.png/20px-Maya.png)](/Maya "Maya") [Maya](/Maya "Maya")',
    notes:
      'Playing without [![El Dorado.png](https://eu4.paradoxwikis.com/images/thumb/1/16/El_Dorado.png/28px-El_Dorado.png)](/El_Dorado "El Dorado") El Dorado makes this achievement considerably faster and easier since you will not need to reform your religion, which can include decades of waiting for Europeans to show up.',
  },
  {
    id: 'ach_201',
    name: 'The Levant Turnabout',
    description: 'As the Mamluks, have 100 Army Professionalism and annex the Ottomans.',
    icon: 'https://eu4.paradoxwikis.com/images/9/92/The_Levant_Turnabout.png',
    dlc: '',
    version: '1.23',
    difficulty: 'M',
    game: 'eu4',
    guideUrl: '',
    startingConditions:
      '[![Yes](https://eu4.paradoxwikis.com/images/thumb/d/da/Ledger_yes.png/28px-Ledger_yes.png)](/File:Ledger_yes.png "Yes") Playing as [![Flag of Mamluks](https://eu4.paradoxwikis.com/images/thumb/c/ca/The_Mamluks.png/20px-The_Mamluks.png)](/Mamluks "Mamluks") [Mamluks](/Mamluks "Mamluks")',
    completionRequirements:
      '*   [![Yes](https://eu4.paradoxwikis.com/images/thumb/d/da/Ledger_yes.png/28px-Ledger_yes.png)](/File:Ledger_yes.png "Yes") Have **100** Army Professionalism\n*   [![Yes](https://eu4.paradoxwikis.com/images/thumb/d/da/Ledger_yes.png/28px-Ledger_yes.png)](/File:Ledger_yes.png "Yes") [![Flag of Ottomans](https://eu4.paradoxwikis.com/images/thumb/8/89/Ottomans.png/20px-Ottomans.png)](/Ottomans "Ottomans") [Ottomans](/Ottomans "Ottomans") does *not* exist\n*   [![Province icon.png](https://eu4.paradoxwikis.com/images/thumb/1/13/Province_icon.png/28px-Province_icon.png)](/Province "Province") Own and core Edirne (149), Constantinople (151), Hüdavendigar (317), and Ankara (326)\n\nExpand\n\n[![The Levant Turnabout map.png](https://eu4.paradoxwikis.com/images/7/7f/The_Levant_Turnabout_map.png)](/File:The_Levant_Turnabout_map.png)\n\n[](/File:The_Levant_Turnabout_map.png "Enlarge")',
    notes:
      "Be sure to attack the Ottomans early or at least cut them off from further expansion into Arabia and the Caucasus. You also don't need to have 100% professionalism at the time of annexing the Ottomans. You can just build up to that number later.",
  },
  {
    id: 'ach_202',
    name: 'The Navigator',
    description: 'As Portugal, own provinces in Africa, India and Indonesia before 1500.',
    icon: 'https://eu4.paradoxwikis.com/images/8/88/The_Navigator.png',
    dlc: '',
    version: '1.20',
    difficulty: 'M',
    game: 'eu4',
    guideUrl: '',
    startingConditions:
      '[![Yes](https://eu4.paradoxwikis.com/images/thumb/d/da/Ledger_yes.png/28px-Ledger_yes.png)](/File:Ledger_yes.png "Yes") Playing as [![Flag of Portugal](https://eu4.paradoxwikis.com/images/thumb/1/12/Portugal.png/20px-Portugal.png)](/Portugal "Portugal") [Portugal](/Portugal "Portugal")',
    completionRequirements:
      '*   [![Yes](https://eu4.paradoxwikis.com/images/thumb/d/da/Ledger_yes.png/28px-Ledger_yes.png)](/File:Ledger_yes.png "Yes") The year is before 1500\n*   [![Province icon.png](https://eu4.paradoxwikis.com/images/thumb/1/13/Province_icon.png/28px-Province_icon.png)](/Province "Province") Owns a province in the continent of Africa and the super-regions of India and East Indies.',
    notes:
      'It\'s enough to just start a colony. It doesn\'t need to be finished. Portugal gets [an event](/Portuguese_events#Vasco_da_Gama_in_India "Portuguese events") to instantly annex Goa if the [appropriate mission](/Portuguese_missions#Push_to_India "Portuguese missions") is completed. The islands of Hollhavai and the Maldives are considered part of the East Indies despite being closer to India.',
  },
  {
    id: 'ach_203',
    name: 'The Ostenders',
    description: 'As Austria or AH have the District and Military Administration investments in the West Bengal area.',
    icon: 'https://eu4.paradoxwikis.com/images/4/4c/The_Ostenders.png',
    dlc: '',
    version: '1.26',
    difficulty: 'M',
    game: 'eu4',
    guideUrl: '',
    startingConditions:
      '*   [![Yes](https://eu4.paradoxwikis.com/images/thumb/d/da/Ledger_yes.png/28px-Ledger_yes.png)](/File:Ledger_yes.png "Yes") Playing as [![Flag of Austria](https://eu4.paradoxwikis.com/images/thumb/7/7f/Austria.png/20px-Austria.png)](/Austria "Austria") [Austria](/Austria "Austria")\n*   [![No](https://eu4.paradoxwikis.com/images/thumb/5/56/Ledger_no_crop.png/28px-Ledger_no_crop.png)](/File:Ledger_no_crop.png "No") No more than 1 custom nation exists in the world\n*   [![No](https://eu4.paradoxwikis.com/images/thumb/5/56/Ledger_no_crop.png/28px-Ledger_no_crop.png)](/File:Ledger_no_crop.png "No") Used no more than 201 nation designer points',
    completionRequirements:
      '*   [![Tradecompany icon.png](https://eu4.paradoxwikis.com/images/thumb/8/8d/Subject_tradecompany_icon.png/28px-Subject_tradecompany_icon.png)](/Trade_company "Trade company") Owns a province in West Bengal area with the District trade company investment\n*   [![Tradecompany icon.png](https://eu4.paradoxwikis.com/images/thumb/8/8d/Subject_tradecompany_icon.png/28px-Subject_tradecompany_icon.png)](/Trade_company "Trade company") Owns a province in West Bengal area with the Military Administration trade company investment',
    notes:
      'Either conquer or charter Bengal Delta from its owner. Add it to a trade company and save up [![Gold Icon.png](https://eu4.paradoxwikis.com/images/2/26/Gold_Icon.png)](/Ducats "Ducats") 1,200 ducats. Switch to the territory tab. Buy the second building of both the Foreign Influence and Governance Trade Company Investments.\n\nThis is one of only two achievements which allows a [![Nation designer.png](https://eu4.paradoxwikis.com/images/a/ab/Nation_designer.png)](/Nation_designer "Nation designer") custom nation on the map which can\'t be earned by playing that custom nation.',
  },
  {
    id: 'ach_204',
    name: 'The pen is mightier than the sword',
    description: 'Have three unions at the same time as Austria or Austria-Hungary.',
    icon: 'https://eu4.paradoxwikis.com/images/9/90/The_pen_is_mightier_than_the_sword.jpg',
    dlc: '',
    version: '1.1',
    difficulty: 'E',
    game: 'eu4',
    guideUrl: '',
    startingConditions:
      '[![Yes](https://eu4.paradoxwikis.com/images/thumb/d/da/Ledger_yes.png/28px-Ledger_yes.png)](/File:Ledger_yes.png "Yes") Playing as [![Flag of Austria](https://eu4.paradoxwikis.com/images/thumb/7/7f/Austria.png/20px-Austria.png)](/Austria "Austria") [Austria](/Austria "Austria")',
    completionRequirements:
      '*   [![Yes](https://eu4.paradoxwikis.com/images/thumb/d/da/Ledger_yes.png/28px-Ledger_yes.png)](/File:Ledger_yes.png "Yes") Is [![Flag of Austria](https://eu4.paradoxwikis.com/images/thumb/7/7f/Austria.png/20px-Austria.png)](/Austria "Austria") [Austria](/Austria "Austria") *or* [![Flag of Austria-Hungary](https://eu4.paradoxwikis.com/images/thumb/f/f1/Austria-Hungary.png/20px-Austria-Hungary.png)](/Austria-Hungary "Austria-Hungary") [Austria-Hungary](/Austria-Hungary "Austria-Hungary")\n*   [![Personal union.png](https://eu4.paradoxwikis.com/images/thumb/3/39/Personal_union.png/28px-Personal_union.png)](/Personal_union "Personal union") Have 3 [personal unions](/Personal_Union "Personal Union")',
    notes:
      '[Austrian missions](/Austrian_missions "Austrian missions") can give Restore Union CBs on Bohemia and Hungary aswell as Poland, Milan, Naples and Bavaria. Check the page for the exact requirements. Events can also lead to a Habsburg ruling in Spain, allowing Austria the opportunity to claim the throne of Castile, and possibly Aragon and Naples as well.',
  },
  {
    id: 'ach_205',
    name: 'The Prince of Egypt',
    description: 'Starting as Florence, form Egypt.',
    icon: 'https://eu4.paradoxwikis.com/images/8/87/The_Prince_of_Egypt.png',
    dlc: '',
    version: '1.23',
    difficulty: 'M',
    game: 'eu4',
    guideUrl: '',
    startingConditions:
      '[![Yes](https://eu4.paradoxwikis.com/images/thumb/d/da/Ledger_yes.png/28px-Ledger_yes.png)](/File:Ledger_yes.png "Yes") Playing as [![Flag of Florence](https://eu4.paradoxwikis.com/images/thumb/d/d9/Florence.png/20px-Florence.png)](/Florence "Florence") [Florence](/Florence "Florence")',
    completionRequirements:
      '[![Yes](https://eu4.paradoxwikis.com/images/thumb/d/da/Ledger_yes.png/28px-Ledger_yes.png)](/File:Ledger_yes.png "Yes") Is [![Flag of Egypt](https://eu4.paradoxwikis.com/images/thumb/3/37/Egypt.png/20px-Egypt.png)](/Egypt "Egypt") [Egypt](/Egypt "Egypt")',
    notes:
      'Forming Egypt normally requires Admin tech 20, but it\'s possible to bypass this by forming the Mamluks and completing their missions (this will require becoming Muslim to take Iqta government, though). One intermediate tag that may be useful is [![Flag of Jerusalem](https://eu4.paradoxwikis.com/images/thumb/e/ef/Jerusalem.png/20px-Jerusalem.png)](/Jerusalem "Jerusalem") [Jerusalem](/Jerusalem "Jerusalem"), since it gives claims on most of the Egyptian culture lands.\n\nYou can also play a normal campaign (even form Italy) then release and play as the mamluks, achieve independence and form Egypt at the end. You can go as far to make a backup save so you can continue as Italy normally, if you please.',
  },
  {
    id: 'ach_206',
    name: 'The Rising Sun',
    description: 'Own and have cores on all of Japan as a European nation.',
    icon: 'https://eu4.paradoxwikis.com/images/2/20/The_Rising_Sun.jpg',
    dlc: '',
    version: '1.4',
    difficulty: 'M',
    game: 'eu4',
    guideUrl: '',
    startingConditions:
      '[![Capital.png](https://eu4.paradoxwikis.com/images/thumb/6/6e/Capital.png/28px-Capital.png)](/Capital "Capital") Capital is in Europe',
    completionRequirements:
      '[![Province icon.png](https://eu4.paradoxwikis.com/images/thumb/1/13/Province_icon.png/28px-Province_icon.png)](/Province "Province") Own and core all provinces in the [Japan region](/Asian_regions#Japan "Asian regions")',
    notes:
      '*   The Japan region includes Okinawa, Tsushima, Hokkaido, and the Kuril Islands.\n*   One possible and relatively easy way to do this is with [![Flag of Spain](https://eu4.paradoxwikis.com/images/thumb/5/58/Spain.png/20px-Spain.png)](/Spain "Spain") [Spain](/Spain "Spain"). After you can reach the East Siberian Coastline after getting some colonies in [North](/North_America "North America") or [South America](/South_America "South America"), get a colony there and start wars with [![Flag of Japan](https://eu4.paradoxwikis.com/images/thumb/f/fc/Japan.png/20px-Japan.png)](/Japan "Japan") [Japan](/Japan "Japan") afterwards. Due to their lacking of good military forces and technology those wars are pretty easy to win.',
  },
  {
    id: 'ach_207',
    name: 'The Sudanese Expedition',
    description: 'Starting as Morocco, conquer the Niger and Sahel Regions.',
    icon: 'https://eu4.paradoxwikis.com/images/f/f8/The_Sudanese_Expedition.jpg',
    dlc: '',
    version: '1.18',
    difficulty: 'M',
    game: 'eu4',
    guideUrl: '',
    startingConditions:
      '[![Yes](https://eu4.paradoxwikis.com/images/thumb/d/da/Ledger_yes.png/28px-Ledger_yes.png)](/File:Ledger_yes.png "Yes") Playing as [![Flag of Morocco](https://eu4.paradoxwikis.com/images/thumb/e/e4/Morocco.png/20px-Morocco.png)](/Morocco "Morocco") [Morocco](/Morocco "Morocco")',
    completionRequirements:
      '[![Province icon.png](https://eu4.paradoxwikis.com/images/thumb/1/13/Province_icon.png/28px-Province_icon.png)](/Province "Province") Own all of the [Niger](/Niger "Niger") and [Sahel](/Sahel "Sahel") regions\n\nExpand\n\n[![Niger and Sahel map.png](https://eu4.paradoxwikis.com/images/thumb/d/d7/Niger_and_Sahel_map.png/140px-Niger_and_Sahel_map.png)](/File:Niger_and_Sahel_map.png)\n\n[](/File:Niger_and_Sahel_map.png "Enlarge")',
    notes:
      '*For the event see: [The Sudanese Expedition](/Moroccan_events#The_Sudanese_Expedition "Moroccan events").*  \n\nThe initial crossing of the Sahara can be done by mission so you don\'t need to take a colonial idea group first. Later, the provinces of Yola, Wukari, Bauchi, and Djado do NOT need to be fully colonized, building a colony will suffice.',
  },
  {
    id: 'ach_208',
    name: 'The Uncommonwealth',
    description: 'As Lithuania, become The Commonwealth.',
    icon: 'https://eu4.paradoxwikis.com/images/f/f3/The_Uncommonwealth.jpg',
    dlc: '',
    version: '1.14',
    difficulty: 'M',
    game: 'eu4',
    guideUrl: 'https://eu4.paradoxwikis.com/The_Uncommonwealth',
    startingConditions:
      '[![Yes](https://eu4.paradoxwikis.com/images/thumb/d/da/Ledger_yes.png/28px-Ledger_yes.png)](/File:Ledger_yes.png "Yes") Playing as [![Flag of Lithuania](https://eu4.paradoxwikis.com/images/thumb/d/d9/Lithuania.png/20px-Lithuania.png)](/Lithuania "Lithuania") [Lithuania](/Lithuania "Lithuania")',
    completionRequirements:
      '*   [![No](https://eu4.paradoxwikis.com/images/thumb/5/56/Ledger_no_crop.png/28px-Ledger_no_crop.png)](/File:Ledger_no_crop.png "No") *Not* playing as a [released vassal](/Vassal#Release_a_nation "Vassal")\n*   [![Yes](https://eu4.paradoxwikis.com/images/thumb/d/da/Ledger_yes.png/28px-Ledger_yes.png)](/File:Ledger_yes.png "Yes") Is [![Flag of Commonwealth](https://eu4.paradoxwikis.com/images/thumb/d/df/Commonwealth.png/20px-Commonwealth.png)](/Commonwealth "Commonwealth") [Commonwealth](/Commonwealth "Commonwealth")',
    notes:
      'Lithuanias missions will give a restoration of Union casus belli against Poland, if Lithuania are independent after 1450, rival Poland and have annexed all of [![Flag of Livonian Order](https://eu4.paradoxwikis.com/images/thumb/8/81/Livonian_Order.png/20px-Livonian_Order.png)](/Livonian_Order "Livonian Order") [Livonian Order](/Livonian_Order "Livonian Order") and [![Flag of Riga](https://eu4.paradoxwikis.com/images/thumb/4/4c/Riga.png/20px-Riga.png)](/Riga "Riga") [Riga](/Riga "Riga")',
  },
  {
    id: 'ach_209',
    name: 'The White Elephant',
    description: 'As Ayutthaya, own all of Indochina and Burma as core provinces.',
    icon: 'https://eu4.paradoxwikis.com/images/f/f2/The_White_Elephant.jpg',
    dlc: '',
    version: '1.12',
    difficulty: 'M',
    game: 'eu4',
    guideUrl: '',
    startingConditions:
      '[![Yes](https://eu4.paradoxwikis.com/images/thumb/d/da/Ledger_yes.png/28px-Ledger_yes.png)](/File:Ledger_yes.png "Yes") Playing as [![Flag of Ayutthaya](https://eu4.paradoxwikis.com/images/thumb/9/9d/Ayutthaya.png/20px-Ayutthaya.png)](/Ayutthaya "Ayutthaya") [Ayutthaya](/Ayutthaya "Ayutthaya")',
    completionRequirements:
      '*   [![No](https://eu4.paradoxwikis.com/images/thumb/5/56/Ledger_no_crop.png/28px-Ledger_no_crop.png)](/File:Ledger_no_crop.png "No") *Not* playing as a [released vassal](/Vassal#Release_a_nation "Vassal")\n*   [![Yes](https://eu4.paradoxwikis.com/images/thumb/d/da/Ledger_yes.png/28px-Ledger_yes.png)](/File:Ledger_yes.png "Yes") Is [![Flag of Ayutthaya](https://eu4.paradoxwikis.com/images/thumb/9/9d/Ayutthaya.png/20px-Ayutthaya.png)](/Ayutthaya "Ayutthaya") [Ayutthaya](/Ayutthaya "Ayutthaya") *or* [![Flag of Siam](https://eu4.paradoxwikis.com/images/thumb/7/7e/Siam.png/20px-Siam.png)](/Siam "Siam") [Siam](/Siam "Siam")\n*   [![Province icon.png](https://eu4.paradoxwikis.com/images/thumb/1/13/Province_icon.png/28px-Province_icon.png)](/Province "Province") Own and core all of the [Indochina](/Indochina "Indochina") and [Burma](/Burma "Burma") regions\n\nExpand\n\n[![The White Elephant map.png](https://eu4.paradoxwikis.com/images/thumb/f/fa/The_White_Elephant_map.png/140px-The_White_Elephant_map.png)](/File:The_White_Elephant_map.png)\n\n[](/File:The_White_Elephant_map.png "Enlarge")',
    notes: '',
  },
  {
    id: 'ach_210',
    name: 'This is fine',
    description: 'Have at least +10 Global Unrest and be in a winning coalition war, which was targeted against you.',
    icon: 'https://eu4.paradoxwikis.com/images/7/7b/This_is_fine.png',
    dlc: '',
    version: '1.32',
    difficulty: 'M',
    game: 'eu4',
    guideUrl: '',
    startingConditions: '',
    completionRequirements:
      '*   [![National unrest.png](https://eu4.paradoxwikis.com/images/thumb/8/8d/National_unrest.png/28px-National_unrest.png)](/National_unrest "National unrest") National unrest is at least **+10**\n*   [![Coalition.png](https://eu4.paradoxwikis.com/images/thumb/c/cc/Coalition.png/28px-Coalition.png)](/Coalition "Coalition") Is the defending war leader in a punitive war and has at least [![War score.png](https://eu4.paradoxwikis.com/images/thumb/b/b3/War_score.png/28px-War_score.png)](/War_score "War score") **+30%** war score in that war',
    notes:
      'The national unrest can be seen in the stability tab.\n\nStart as [![Flag of England](https://eu4.paradoxwikis.com/images/thumb/2/21/England.png/20px-England.png)](/England "England") [England](/England "England"), declare no-CB wars on two Irish nations. White peace them ASAP. One of them shall be [![Flag of Ulster](https://eu4.paradoxwikis.com/images/thumb/b/b9/Ulster.png/20px-Ulster.png)](/Ulster "Ulster") [Ulster](/Ulster "Ulster") as it controls the Irish part of the strait and it is important to be able to block the strait during the coalition war. Other Irish nations and [![Flag of Scotland](https://eu4.paradoxwikis.com/images/thumb/2/27/Scotland.png/20px-Scotland.png)](/Scotland "Scotland") [Scotland](/Scotland "Scotland") should create a coalition against you. Delete your armies. When they declare the coalition war on you, block the strait at Ayshire, then occupy [![Flag of Scotland](https://eu4.paradoxwikis.com/images/thumb/2/27/Scotland.png/20px-Scotland.png)](/Scotland "Scotland") [Scotland](/Scotland "Scotland"). This should give you enough warscore; if not, beat some of their armies. Wait for the War of the Roses disaster to fire, which should give enough unrest (altogether with war exhaustion and −3 stability). Can be done in 4 years, depending on how quick the coalition war fires. Can also be done in combination with [To the Bone](#To_the_Bone). Start as [![Flag of Bone](https://eu4.paradoxwikis.com/images/thumb/2/2c/Bone.png/20px-Bone.png)](/Bone "Bone") [Bone](/Bone "Bone") and declare no-CB wars on your two immediate neighbours, pillage their capitals, truce break and repeat. When you reach -3 stability stab up once and continue. This will give a high war exhaustion and a coalition should form against you.\n\nThe warscore condition in this achievement is bugged in versions 1.35 and 1.36 and can\'t reliably be fulfilled. In some cases it triggers randomly even if the warscore is lower.',
  },
  {
    id: 'ach_211',
    name: 'This navy can take it all',
    description: 'Gain at least 7.0 naval morale.',
    icon: 'https://eu4.paradoxwikis.com/images/9/9f/This_navy_can_take_it_all.jpg',
    dlc: '',
    version: '1.1',
    difficulty: 'E',
    game: 'eu4',
    guideUrl: '',
    startingConditions: '',
    completionRequirements:
      '[![Naval morale.png](https://eu4.paradoxwikis.com/images/thumb/8/80/Morale_of_navies.png/28px-Morale_of_navies.png)](/Morale_of_navies "Morale of navies") Have **7** Morale of navies',
    notes:
      'Research diplomatic techs, invest in ideas that improve [naval morale](/Naval_warfare#Max_naval_morale "Naval warfare"), maintain high [prestige](/Prestige "Prestige") and [navy tradition](/Navy_tradition "Navy tradition"). Finally hire a [Naval Reformer](/Naval_Reformer "Naval Reformer").',
  },
  {
    id: 'ach_212',
    name: 'This Revolution Was Crushed',
    description:
      'In a war against the target of the Revolution, control their capital and have at least 99% war score.',
    icon: 'https://eu4.paradoxwikis.com/images/a/a5/This_Revolution_Was_Crushed.jpg',
    dlc: '',
    version: '1.8',
    difficulty: 'M',
    game: 'eu4',
    guideUrl: '',
    startingConditions: '',
    completionRequirements:
      '*   [![Yes](https://eu4.paradoxwikis.com/images/thumb/d/da/Ledger_yes.png/28px-Ledger_yes.png)](/File:Ledger_yes.png "Yes") Is at war with a revolution target\n*   [![Capital.png](https://eu4.paradoxwikis.com/images/thumb/6/6e/Capital.png/28px-Capital.png)](/Capital "Capital") Control the capital of the revolution target\n*   [![Yes](https://eu4.paradoxwikis.com/images/thumb/d/da/Ledger_yes.png/28px-Ledger_yes.png)](/File:Ledger_yes.png "Yes") Have greater than **98%** warscore against the revolution target',
    notes:
      'The [Revolution](/Revolution_\\(disaster\\) "Revolution (disaster)") disaster (and the [French Revolution](/French_Revolution "French Revolution") variant) is announced in a major event: \'[Revolution in $COUNTRY$](/Revolution_\\(disaster\\)#Revolution_in_.24COUNTRY.24 "Revolution (disaster)")\' (or \'[The General Estates](/French_Revolution#The_General_Estates "French Revolution")\').\n\nWith the [![Emperor](https://eu4.paradoxwikis.com/images/thumb/c/c5/Emperor.png/28px-Emperor.png)](/Emperor_\\(DLC\\) "Emperor") Emperor DLC, there can be multiple revolutionary countries, but there can only be one revolutionary target. And it is possible that there is no revolutionary target even though there are revolutionary countries. The "Birthplace of the revolution" icon in the lower right part of the screen shows which country is the revolutionary target.\n\nWithout the [![Emperor](https://eu4.paradoxwikis.com/images/thumb/c/c5/Emperor.png/28px-Emperor.png)](/Emperor_\\(DLC\\) "Emperor") Emperor DLC, A country will become the revolution target, with "Revolutionary" in its name, if its capital is occupied by rebels while the disaster is active. The disaster spawns a stack of rebels, adds +10 national unrest and removes 3 stability. The player can check if the disaster is still active for a country by looking for the +10 unrest modifier on its provinces.\n\nIt is feasible both to wait for (or encourage) an AI revolution target, or to become the revolutionary target oneself before releasing (and playing as) a powerful vassal or colonial nation.',
  },
  {
    id: 'ach_213',
    name: 'Total Control',
    description: 'Own 100 or more provinces with no local autonomy or unrest.',
    icon: 'https://eu4.paradoxwikis.com/images/1/15/Total_Control.jpg',
    dlc: '',
    version: '1.8',
    difficulty: 'M',
    game: 'eu4',
    guideUrl: '',
    startingConditions: '',
    completionRequirements:
      '[![Province icon.png](https://eu4.paradoxwikis.com/images/thumb/1/13/Province_icon.png/28px-Province_icon.png)](/Province "Province") Own 100 provinces that have **0%** [![Local unrest.png](https://eu4.paradoxwikis.com/images/thumb/d/dd/Local_unrest.png/28px-Local_unrest.png)](/Local_unrest "Local unrest") unrest and [![Local autonomy.png](https://eu4.paradoxwikis.com/images/thumb/1/17/Local_autonomy.png/28px-Local_autonomy.png)](/Local_autonomy "Local autonomy") autonomy',
    notes: '',
  },
  {
    id: 'ach_214',
    name: 'Traditional Player',
    description: 'More than 90 percent Naval and Army Tradition.',
    icon: 'https://eu4.paradoxwikis.com/images/2/2f/Traditional_Player.jpg',
    dlc: '',
    version: '1.1',
    difficulty: 'M',
    game: 'eu4',
    guideUrl: '',
    startingConditions: '',
    completionRequirements:
      '*   [![Army tradition.png](https://eu4.paradoxwikis.com/images/8/8d/Army_tradition.png)](/Army_tradition "Army tradition") Have **90** [army tradition](/Army_tradition "Army tradition")\n*   [![Navy tradition.png](https://eu4.paradoxwikis.com/images/c/cd/Navy_tradition.png)](/Navy_tradition "Navy tradition") Have **90** [navy tradition](/Navy_tradition "Navy tradition")',
    notes:
      'Easiest to do with [![Flag of Utsunomiya](https://eu4.paradoxwikis.com/images/thumb/8/88/Utsunomiya.png/20px-Utsunomiya.png)](/Utsunomiya "Utsunomiya") [Utsunomiya](/Utsunomiya "Utsunomiya") as they get **\\-1%** decay to each respectively from their traditions and ideas. See the page [Military tradition](/Military_tradition#Gaining_tradition "Military tradition") for other ways of gaining tradition.',
  },
  {
    id: 'ach_215',
    name: 'Trophy Hunter',
    description: 'Capture an enemy flagship.',
    icon: 'https://eu4.paradoxwikis.com/images/f/fb/Trophy_Hunter.png',
    dlc: '',
    version: '1.28',
    difficulty: 'E',
    game: 'eu4',
    guideUrl: '',
    startingConditions:
      '*   [![No](https://eu4.paradoxwikis.com/images/thumb/5/56/Ledger_no_crop.png/28px-Ledger_no_crop.png)](/File:Ledger_no_crop.png "No") No more than 1 custom nation exists in the world\n*   [![No](https://eu4.paradoxwikis.com/images/thumb/5/56/Ledger_no_crop.png/28px-Ledger_no_crop.png)](/File:Ledger_no_crop.png "No") Used no more than 201 nation designer points if playing as a custom nation',
    completionRequirements:
      '[![Heavy ship.png](https://eu4.paradoxwikis.com/images/thumb/5/50/Heavy_ship.png/28px-Heavy_ship.png)](/Heavy_ship "Heavy ship") Capture a flagship',
    notes: '',
  },
  {
    id: 'ach_216',
    name: 'Trustworthy',
    description: 'Have five allies with 100 trust towards you each.',
    icon: 'https://eu4.paradoxwikis.com/images/4/49/Trustworthy.jpg',
    dlc: '',
    version: '1.14',
    difficulty: 'VE',
    game: 'eu4',
    guideUrl: '',
    startingConditions: '',
    completionRequirements:
      '[![Yes](https://eu4.paradoxwikis.com/images/thumb/d/da/Ledger_yes.png/28px-Ledger_yes.png)](/File:Ledger_yes.png "Yes") Have 5 allies with 100 trust',
    notes:
      'Can be done as [![Flag of Ming](https://eu4.paradoxwikis.com/images/thumb/a/a5/Ming.png/20px-Ming.png)](/Ming "Ming") [Ming](/Ming "Ming") by releasing 5 OPMs (not bordering each other), allying them and waiting for the trust to tick up.\n\nTrust can be gained by honoring calls to arms or by using the *Influence nation* interaction as a [great power](/Great_power "Great power"), or with [![The Cossacks.png](https://eu4.paradoxwikis.com/images/thumb/b/b6/The_Cossacks.png/28px-The_Cossacks.png)](/The_Cossacks "The Cossacks") The Cossacks or [![Leviathan.png](https://eu4.paradoxwikis.com/images/thumb/0/0a/Leviathan.png/28px-Leviathan.png)](/Leviathan "Leviathan") Leviathan by trading favors for trust. If neither [![The Cossacks.png](https://eu4.paradoxwikis.com/images/thumb/b/b6/The_Cossacks.png/28px-The_Cossacks.png)](/The_Cossacks "The Cossacks") The Cossacks nor [![Leviathan.png](https://eu4.paradoxwikis.com/images/thumb/0/0a/Leviathan.png/28px-Leviathan.png)](/Leviathan "Leviathan") Leviathan are active, trust with allies grows slowly over time.',
  },
  {
    id: 'ach_217',
    name: 'Turtles all the way down',
    description: 'As Korea get 135% Ship Durability.',
    icon: 'https://eu4.paradoxwikis.com/images/f/f5/Turtles_all_the_way_down.png',
    dlc: '',
    version: '1.20',
    difficulty: 'M',
    game: 'eu4',
    guideUrl: '',
    startingConditions:
      '[![Yes](https://eu4.paradoxwikis.com/images/thumb/d/da/Ledger_yes.png/28px-Ledger_yes.png)](/File:Ledger_yes.png "Yes") Playing as [![Flag of Korea](https://eu4.paradoxwikis.com/images/thumb/4/45/Korea.png/20px-Korea.png)](/Korea "Korea") [Korea](/Korea "Korea")',
    completionRequirements:
      '[![Ship durability](https://eu4.paradoxwikis.com/images/thumb/5/58/Ship_durability.png/28px-Ship_durability.png)](/Ship_durability "Ship durability") Ship durability is at least 135%.',
    notes:
      'The most straightforward way to get this achievement is by becoming the Emperor of China and enacting the "Promote Naval Officers" celestial empire decree for +10% durability and getting Naval ideas for another +10%. Combine this with Korea\'s national ideas (+10%) and their Naval doctrine (+5%) for exactly 135% durability.  \n\nAlternative sources of durability are: ruler personality "navigator" (+10%), Quality ideas (+5%), Humanist-Naval policy (+5%) and Maritime-Offensive policy (+5%).',
  },
  {
    id: 'ach_218',
    name: 'Victorian Three',
    description: 'As Busoga, Buganda or Karagwe, reach administrative, diplomatic and military technology level 32.',
    icon: 'https://eu4.paradoxwikis.com/images/a/a5/Victorian_Three.jpg',
    dlc: '',
    version: '1.16',
    difficulty: 'M',
    game: 'eu4',
    guideUrl: 'https://eu4.paradoxwikis.com/Victorian_Three',
    startingConditions:
      '[![Yes](https://eu4.paradoxwikis.com/images/thumb/d/da/Ledger_yes.png/28px-Ledger_yes.png)](/File:Ledger_yes.png "Yes") Playing as *either*:\n\n*    [![Flag of Buganda](https://eu4.paradoxwikis.com/images/thumb/4/43/Buganda.png/20px-Buganda.png)](/Buganda "Buganda") [Buganda](/Buganda "Buganda")\n*    [![Flag of Busoga](https://eu4.paradoxwikis.com/images/thumb/7/7f/Busoga.png/20px-Busoga.png)](/Busoga "Busoga") [Busoga](/Busoga "Busoga")\n*    [![Flag of Karagwe](https://eu4.paradoxwikis.com/images/thumb/d/d6/Karagwe.png/20px-Karagwe.png)](/Karagwe "Karagwe") [Karagwe](/Karagwe "Karagwe")',
    completionRequirements:
      '*   [![Administrative tech.png](https://eu4.paradoxwikis.com/images/8/8e/Administrative_technology.png)](/Administrative_technology "Administrative technology") Administrative technology is **32**\n*   [![Diplomatic tech.png](https://eu4.paradoxwikis.com/images/2/22/Diplomatic_technology.png)](/Diplomatic_technology "Diplomatic technology") Diplomatic technology is **32**\n*   [![Military tech.png](https://eu4.paradoxwikis.com/images/1/1a/Military_technology.png)](/Military_technology "Military technology") Military technology is **32**',
    notes:
      'Most easily accomplished by manually spawning Renaissance, Colonialism and Printing Press, and not expanding too much. To get the other institutions, build manufactories and universities. Researching level 32 loses the ahead-of-time penalty in 1820.',
  },
  {
    id: 'ach_219',
    name: 'We bled for this',
    description: 'Win a war with at least one million dead on both sides.',
    icon: 'https://eu4.paradoxwikis.com/images/6/6b/We_bled_for_this.jpg',
    dlc: '',
    version: '1.18',
    difficulty: 'M',
    game: 'eu4',
    guideUrl: '',
    startingConditions: '',
    completionRequirements:
      '[![Yes](https://eu4.paradoxwikis.com/images/thumb/d/da/Ledger_yes.png/28px-Ledger_yes.png)](/File:Ledger_yes.png "Yes") Won a war with over 1 million casualties on both sides.',
    notes:
      "*   Both sides each need to have at least 1 million casualties (attrition *does* count) in the war details screen when the war leader is peaced out. Allies and enemies that are peaced out before the war leader do not contribute their casualties.\n*   League Wars can be a good time to get this achievement if you are the war leader. Protect your allies and don't separate peace countries. Alternatively, you can trigger a big war in the late 1700s after you get strong. Regardless, be prepared to buy down war exhaustion as the war will almost certainly last way longer than it should.",
  },
  {
    id: 'ach_220',
    name: 'Where are the penguins?',
    description: 'As a Malagasy country, unite Madagascar and hold all the most southern provinces of the world.',
    icon: 'https://eu4.paradoxwikis.com/images/2/25/Where_are_the_penguins%3F.png',
    dlc: '',
    version: '1.32',
    difficulty: 'M',
    game: 'eu4',
    guideUrl: '',
    startingConditions:
      '[![No](https://eu4.paradoxwikis.com/images/thumb/5/56/Ledger_no_crop.png/28px-Ledger_no_crop.png)](/File:Ledger_no_crop.png "No") *Not* using a [random New World](/Random_New_World "Random New World")\n\n[![Yes](https://eu4.paradoxwikis.com/images/thumb/d/da/Ledger_yes.png/28px-Ledger_yes.png)](/File:Ledger_yes.png "Yes") Playing as one of the following countries:\n\n*    [![Flag of Sakalava](https://eu4.paradoxwikis.com/images/thumb/3/3f/Sakalava.png/20px-Sakalava.png)](/Sakalava "Sakalava") [Sakalava](/Sakalava "Sakalava")\n*    [![Flag of Betsimisaraka](https://eu4.paradoxwikis.com/images/thumb/1/16/Betsimisaraka.png/20px-Betsimisaraka.png)](/Betsimisaraka "Betsimisaraka") [Betsimisaraka](/Betsimisaraka "Betsimisaraka")\n*    [![Flag of Imerina](https://eu4.paradoxwikis.com/images/thumb/0/07/Imerina.png/20px-Imerina.png)](/Imerina "Imerina") [Imerina](/Imerina "Imerina")\n*    [![Flag of Mahafaly](https://eu4.paradoxwikis.com/images/thumb/f/fc/Mahafaly.png/20px-Mahafaly.png)](/Mahafaly "Mahafaly") [Mahafaly](/Mahafaly "Mahafaly")\n*    [![Flag of Antemoro](https://eu4.paradoxwikis.com/images/thumb/b/bc/Antemoro.png/20px-Antemoro.png)](/Antemoro "Antemoro") [Antemoro](/Antemoro "Antemoro")',
    completionRequirements:
      '[![Yes](https://eu4.paradoxwikis.com/images/thumb/d/da/Ledger_yes.png/28px-Ledger_yes.png)](/File:Ledger_yes.png "Yes") Is one of the following countries:\n\n*    [![Flag of Sakalava](https://eu4.paradoxwikis.com/images/thumb/3/3f/Sakalava.png/20px-Sakalava.png)](/Sakalava "Sakalava") [Sakalava](/Sakalava "Sakalava")\n*    [![Flag of Betsimisaraka](https://eu4.paradoxwikis.com/images/thumb/1/16/Betsimisaraka.png/20px-Betsimisaraka.png)](/Betsimisaraka "Betsimisaraka") [Betsimisaraka](/Betsimisaraka "Betsimisaraka")\n*    [![Flag of Imerina](https://eu4.paradoxwikis.com/images/thumb/0/07/Imerina.png/20px-Imerina.png)](/Imerina "Imerina") [Imerina](/Imerina "Imerina")\n*    [![Flag of Mahafaly](https://eu4.paradoxwikis.com/images/thumb/f/fc/Mahafaly.png/20px-Mahafaly.png)](/Mahafaly "Mahafaly") [Mahafaly](/Mahafaly "Mahafaly")\n*    [![Flag of Antemoro](https://eu4.paradoxwikis.com/images/thumb/b/bc/Antemoro.png/20px-Antemoro.png)](/Antemoro "Antemoro") [Antemoro](/Antemoro "Antemoro")\n\n[![Province icon.png](https://eu4.paradoxwikis.com/images/thumb/1/13/Province_icon.png/28px-Province_icon.png)](/Province "Province") Own and core all provinces in the following areas:\n\n*   Madagascar Highlands\n*   Betsimasaraka\n*   Sakalava\n*   Southern Madagascar\n\nExpand[![Province icon.png](https://eu4.paradoxwikis.com/images/thumb/1/13/Province_icon.png/28px-Province_icon.png)](/Province "Province") Own or have a non-tributary subject own all the following provinces:\n\n*   Cape (1177)\n*   Swellendam (1179)\n*   Algoa Bay (833)\n*   Xhosa (1180)\n*   Wadjuk (1084)\n*   Minang (2727)\n*   Nukunu (2736)\n*   Kaurna (1086)\n*   Gunditjmara (2735)\n*   Wurundjeri (1087)\n*   Yuin (2734)\n*   Peerapper (4869)\n*   Pyemmairrener (4868)\n*   Paredarerme (1085)\n*   Tharawal (4858)\n*   Ata Whenua (1246)\n*   Timaru (1109)\n*   Kawesqar (783)\n*   Tierra del Fuego (782)\n*   Florida Blanca (2869)\n*   Falklands (1095)\n*   South Georgia (2025)\n\nExpandMap of the provinces:\n\n[![Where are the penguins map.png](https://eu4.paradoxwikis.com/images/thumb/3/37/Where_are_the_penguins_map.png/300px-Where_are_the_penguins_map.png)](/File:Where_are_the_penguins_map.png)\n\n[](/File:Where_are_the_penguins_map.png "Enlarge")',
    notes:
      'After taking over Madagascar befriend [![Flag of Kilwa](https://eu4.paradoxwikis.com/images/thumb/c/cb/Kilwa.png/20px-Kilwa.png)](/Kilwa "Kilwa") [Kilwa](/Kilwa "Kilwa") to get Feudalism spreading. Take Exploration, then Expansion and colonize the provinces on the Cape of Good Hope. Afterwards focus your attention mostly on the Atlantic islands and South America to get the required provinces before [![Flag of Portugal](https://eu4.paradoxwikis.com/images/thumb/1/12/Portugal.png/20px-Portugal.png)](/Portugal "Portugal") [Portugal](/Portugal "Portugal") does, only spreading east when waiting for colonies to finish for reach. Station troops in Australia after the colonial nation forms, otherwise the natives will attack.\n\nThis achievement is only visible if the [![Origins.png](https://eu4.paradoxwikis.com/images/thumb/8/8e/Origins.png/28px-Origins.png)](/Origins "Origins") Origins DLC is active, but no DLC is needed to complete it.',
  },
  {
    id: 'ach_221',
    name: 'Wonderful',
    description: 'Own 8 different monuments on tier 3.',
    icon: 'https://eu4.paradoxwikis.com/images/a/a6/Wonderful.jpg',
    dlc: '',
    version: '1.31',
    difficulty: 'M',
    game: 'eu4',
    guideUrl: '',
    startingConditions:
      '*   [![No](https://eu4.paradoxwikis.com/images/thumb/5/56/Ledger_no_crop.png/28px-Ledger_no_crop.png)](/File:Ledger_no_crop.png "No") *Not* using a [random New World](/Random_New_World "Random New World")',
    completionRequirements:
      '*   [![Yes](https://eu4.paradoxwikis.com/images/thumb/d/da/Ledger_yes.png/28px-Ledger_yes.png)](/File:Ledger_yes.png "Yes") Has 8 Tier 3 monuments',
    notes:
      'Easiest done with [![Flag of France](https://eu4.paradoxwikis.com/images/thumb/d/de/France.png/20px-France.png)](/France "France") [France](/France "France") as they starts with 2 and can expand into [![Flag of England](https://eu4.paradoxwikis.com/images/thumb/2/21/England.png/20px-England.png)](/England "England") [England](/England "England"), Iberia, [![Flag of Morocco](https://eu4.paradoxwikis.com/images/thumb/e/e4/Morocco.png/20px-Morocco.png)](/Morocco "Morocco") [Morocco](/Morocco "Morocco") and [![Flag of Norway](https://eu4.paradoxwikis.com/images/thumb/0/0f/Norway.png/20px-Norway.png)](/Norway "Norway") [Norway](/Norway "Norway") while starting with a decent economy. Alternatively a Buddhist nation in Indochina can do it easily as they have 6 eligible monuments in Tibet and Indochina alone and limited aggressive expansion penalties.\n\nIndia is also a good option as it has more than 8 monuments. If the monument has religious requirements preventing from building it, don\'t forget that you can improve your subject\'s monument and then integrate them.',
  },
  {
    id: 'ach_222',
    name: 'Brentry',
    description:
      "Starting as England, form the Angevin Kingdom and enact all the 'Acts of Crown' parliamentary issues.",
    icon: 'https://eu4.paradoxwikis.com/images/0/0a/Brentry.png',
    dlc: '',
    version: '1.35',
    difficulty: 'M',
    game: 'eu4',
    guideUrl: '',
    startingConditions: '',
    completionRequirements:
      '*   [![Yes](https://eu4.paradoxwikis.com/images/thumb/d/da/Ledger_yes.png/28px-Ledger_yes.png)](/File:Ledger_yes.png "Yes") Is [![Flag of Angevin Kingdom](https://eu4.paradoxwikis.com/images/thumb/b/be/Angevin_Kingdom.png/20px-Angevin_Kingdom.png)](/Angevin_Kingdom "Angevin Kingdom") [Angevin Kingdom](/Angevin_Kingdom "Angevin Kingdom")\n*   [![Parliament.png](https://eu4.paradoxwikis.com/images/thumb/f/f9/Parliament.png/28px-Parliament.png)](/Parliament "Parliament") Has enacted all of the following parliament issues:\n    *   Crown of Ireland Act\n    *   Act of the Spanish Crown\n    *   Act of the Italian Crown\n    *   Crown of the Empire',
    notes:
      "Do *not* dismantle the HRE, because that prevents the issue *“Crown of the Empire”*. It's recommended to stay Catholic as becoming HRE emperor as Anglican requires either religious peace or Protestant victory with around a quarter of HRE provinces under Anglican control.",
  },
  {
    id: 'ach_223',
    name: 'Copium Wars',
    description: 'Starting and playing as Ming, own the Britain region.',
    icon: 'https://eu4.paradoxwikis.com/images/5/52/Copium_Wars.png',
    dlc: '',
    version: '1.35',
    difficulty: 'M',
    game: 'eu4',
    guideUrl: '',
    startingConditions:
      '*   [![Yes](https://eu4.paradoxwikis.com/images/thumb/d/da/Ledger_yes.png/28px-Ledger_yes.png)](/File:Ledger_yes.png "Yes") Playing as [![Flag of Ming](https://eu4.paradoxwikis.com/images/thumb/a/a5/Ming.png/20px-Ming.png)](/Ming "Ming") [Ming](/Ming "Ming")\n*   [![Nation designer.png](https://eu4.paradoxwikis.com/images/a/ab/Nation_designer.png)](/Nation_designer "Nation designer") AI-controlled custom nations are allowed, but they are not required',
    completionRequirements:
      '*   [![Yes](https://eu4.paradoxwikis.com/images/thumb/d/da/Ledger_yes.png/28px-Ledger_yes.png)](/File:Ledger_yes.png "Yes") Is [![Flag of Ming](https://eu4.paradoxwikis.com/images/thumb/a/a5/Ming.png/20px-Ming.png)](/Ming "Ming") [Ming](/Ming "Ming")\n*   [![Province icon.png](https://eu4.paradoxwikis.com/images/thumb/1/13/Province_icon.png/28px-Province_icon.png)](/Province "Province") Own all provinces in the [Britain region](/European_regions#Britain "European regions")\n\nExpand\n\n[![](https://eu4.paradoxwikis.com/images/thumb/3/3e/Stiff_Upper_Lippe_map.png/140px-Stiff_Upper_Lippe_map.png)](/File:Stiff_Upper_Lippe_map.png)\n\n[](/File:Stiff_Upper_Lippe_map.png "Enlarge")\n\nBritain region',
    notes:
      'This is one of only two achievements which allows a [![Nation designer.png](https://eu4.paradoxwikis.com/images/a/ab/Nation_designer.png)](/Nation_designer "Nation designer") custom nation on the map which can\'t be earned by playing that custom nation.',
  },
  {
    id: 'ach_224',
    name: 'No Country for Old Tercios',
    description:
      'As Spain, have Reformed Tercios, 33 Tercio Units, and control 3 Great Power capitals at the same time',
    icon: 'https://eu4.paradoxwikis.com/images/c/c6/No_Country_for_Old_Tercios.png',
    dlc: '',
    version: '1.35',
    difficulty: 'M',
    game: 'eu4',
    guideUrl: '',
    startingConditions: '',
    completionRequirements:
      '*   [![Yes](https://eu4.paradoxwikis.com/images/thumb/d/da/Ledger_yes.png/28px-Ledger_yes.png)](/File:Ledger_yes.png "Yes") Is [![Flag of Spain](https://eu4.paradoxwikis.com/images/thumb/5/58/Spain.png/20px-Spain.png)](/Spain "Spain") [Spain](/Spain "Spain")\n*   Has the modifier *“Reformed Tercio Regiments”* (from the mission [Refine the Tercios](/Castilian_missions#Refine_the_Tercios "Castilian missions"))\n*   Has at least 33 [tercio](/Special_land_units#Tercio "Special land units") regiments\n*   [![Capital.png](https://eu4.paradoxwikis.com/images/thumb/6/6e/Capital.png/28px-Capital.png)](/Capital "Capital") Control the capitals of three [![Great power.png](https://eu4.paradoxwikis.com/images/thumb/f/fc/Great_power.png/28px-Great_power.png)](/Great_power "Great power") great powers',
    notes:
      'To get the mission, [![Flag of Spain](https://eu4.paradoxwikis.com/images/thumb/5/58/Spain.png/20px-Spain.png)](/Spain "Spain") [Spain](/Spain "Spain") must be formed by a country which *never* was [![Flag of Aragon](https://eu4.paradoxwikis.com/images/thumb/6/61/Aragon.png/20px-Aragon.png)](/Aragon "Aragon") [Aragon](/Aragon "Aragon").',
  },
  {
    id: 'ach_225',
    name: 'The Reapers',
    description: 'Starting as Aragon, be a Peasant Republic and have Madrid and Paris owned by any Peasant Republic.',
    icon: 'https://eu4.paradoxwikis.com/images/8/87/The_Reapers.png',
    dlc: '',
    version: '1.35',
    difficulty: 'M',
    game: 'eu4',
    guideUrl: '',
    startingConditions:
      '[![Yes](https://eu4.paradoxwikis.com/images/thumb/d/da/Ledger_yes.png/28px-Ledger_yes.png)](/File:Ledger_yes.png "Yes") Playing as [![Flag of Aragon](https://eu4.paradoxwikis.com/images/thumb/6/61/Aragon.png/20px-Aragon.png)](/Aragon "Aragon") [Aragon](/Aragon "Aragon")',
    completionRequirements:
      '*   [![Government republic.png](https://eu4.paradoxwikis.com/images/thumb/5/5d/Government_republic.png/28px-Government_republic.png)](/Republic "Republic") Has enacted the [Peasants Republic](/Peasants_Republic "Peasants Republic") government reform\n*   [![Province icon.png](https://eu4.paradoxwikis.com/images/thumb/1/13/Province_icon.png/28px-Province_icon.png)](/Province "Province") The owner of the province Madrid (217) has enacted the [Peasants Republic](/Peasants_Republic "Peasants Republic") government reform\n*   [![Province icon.png](https://eu4.paradoxwikis.com/images/thumb/1/13/Province_icon.png/28px-Province_icon.png)](/Province "Province") The owner of the province Paris (183) has enacted the [Peasants Republic](/Peasants_Republic "Peasants Republic") government reform',
    notes:
      'The only feasible way to become a peasant republic as Aragon is with the third option in the event [Sindicat Remença](/Aragonese_events#flavor_ara.6 "Aragonese events"). As a republic, Aragon will *not* be eligible for the [Iberian Wedding](/Aragonese_events#The_Iberian_Wedding "Aragonese events"). However, swithing to a Peasants Republic after getting the Iberian Wedding will keep the Personal Union. A possible way to delay the event is to use « Return province » on any Catalonian province, since the event requires Aragon to own all of the Catalonia area.',
  },
  {
    id: 'ach_226',
    name: 'A Blessed Nation',
    description: 'As a Coptic Nation, gain all 5 Blessings.',
    icon: 'https://eu4.paradoxwikis.com/images/e/e5/A_Blessed_Nation.jpg',
    dlc: '',
    version: '1.18',
    difficulty: 'H',
    game: 'eu4',
    guideUrl: '',
    startingConditions: '',
    completionRequirements:
      '*   [![Coptic.png](https://eu4.paradoxwikis.com/images/thumb/7/74/Coptic.png/28px-Coptic.png)](/Coptic "Coptic") Is Coptic\n*   [![Yes](https://eu4.paradoxwikis.com/images/thumb/d/da/Ledger_yes.png/28px-Ledger_yes.png)](/File:Ledger_yes.png "Yes") Have 5 active blessings',
    notes: 'Player can start as Muslim nation (such as The Ottomans) and switch religion by rebels.',
  },
  {
    id: 'ach_227',
    name: 'A Decent Reserve',
    description: 'Have a maximum manpower of at least 1 million.',
    icon: 'https://eu4.paradoxwikis.com/images/2/25/A_Decent_Reserve.jpg',
    dlc: '',
    version: '1.12',
    difficulty: 'M',
    game: 'eu4',
    guideUrl: '',
    startingConditions: '',
    completionRequirements:
      '[![Yes](https://eu4.paradoxwikis.com/images/thumb/d/da/Ledger_yes.png/28px-Ledger_yes.png)](/File:Ledger_yes.png "Yes") Have [![Manpower Icon.png](https://eu4.paradoxwikis.com/images/thumb/0/0c/Manpower.png/28px-Manpower.png)](/Manpower "Manpower") at least 1 million manpower',
    notes:
      'Although the achievement specifically says "maximum manpower" you actually need to have a million saved up and the maximum doesn\'t matter. Some good options of starting nations include [![Flag of Ottomans](https://eu4.paradoxwikis.com/images/thumb/8/89/Ottomans.png/20px-Ottomans.png)](/Ottomans "Ottomans") [Ottomans](/Ottomans "Ottomans"), which starts with a large manpower pool; [![Flag of Muscovy](https://eu4.paradoxwikis.com/images/thumb/4/41/Muscovy.png/20px-Muscovy.png)](/Muscovy "Muscovy") [Muscovy](/Muscovy "Muscovy"), which can form [![Flag of Russia](https://eu4.paradoxwikis.com/images/thumb/e/ee/Russia.png/20px-Russia.png)](/Russia "Russia") [Russia](/Russia "Russia") with its massive manpower modifiers; [![Flag of Ming](https://eu4.paradoxwikis.com/images/thumb/a/a5/Ming.png/20px-Ming.png)](/Ming "Ming") [Ming](/Ming "Ming"), who can demand manpower from its many tributaries, or [![Flag of Mossi](https://eu4.paradoxwikis.com/images/thumb/4/4a/Mossi.png/20px-Mossi.png)](/Mossi "Mossi") [Mossi](/Mossi "Mossi"), who\'s unique government reform allows them to extract massive amount of manpower from provinces of their primary culture.',
  },
  {
    id: 'ach_228',
    name: "A Hero's Welcome",
    description: 'Starting as Karaman, form the Sultanate of Rum.',
    icon: 'https://eu4.paradoxwikis.com/images/3/35/A_Hero%E2%80%99s_Welcome.png',
    dlc: '',
    version: '1.23',
    difficulty: 'H',
    game: 'eu4',
    guideUrl: '',
    startingConditions:
      '[![Yes](https://eu4.paradoxwikis.com/images/thumb/d/da/Ledger_yes.png/28px-Ledger_yes.png)](/File:Ledger_yes.png "Yes") Playing as [![Flag of Karaman](https://eu4.paradoxwikis.com/images/thumb/4/44/Karaman.png/20px-Karaman.png)](/Karaman "Karaman") [Karaman](/Karaman "Karaman")',
    completionRequirements:
      '[![Yes](https://eu4.paradoxwikis.com/images/thumb/d/da/Ledger_yes.png/28px-Ledger_yes.png)](/File:Ledger_yes.png "Yes") Is [![Flag of Rûm](https://eu4.paradoxwikis.com/images/thumb/8/85/R%C3%BBm.png/20px-R%C3%BBm.png)](/R%C3%BBm "Rûm") [Rûm](/R%C3%BBm "Rûm")',
    notes:
      'Initial moves for a success are for the player to ally [![Flag of Mamluks](https://eu4.paradoxwikis.com/images/thumb/c/ca/The_Mamluks.png/20px-The_Mamluks.png)](/Mamluks "Mamluks") [Mamluks](/Mamluks "Mamluks") and later when possible [![Flag of Timurids](https://eu4.paradoxwikis.com/images/thumb/6/6a/Timurids.png/20px-Timurids.png)](/Timurids "Timurids") [Timurids](/Timurids "Timurids"). Expanding East and land locking the [![Flag of Ottomans](https://eu4.paradoxwikis.com/images/thumb/8/89/Ottomans.png/20px-Ottomans.png)](/Ottomans "Ottomans") [Ottomans](/Ottomans "Ottomans") in the Anatolia region by quick expansion east and north will in conjunction with your powerful allies forces the Ottomans to expand into Europe, once this occurs your best chance is to wait for a good opportunity strike with your allies when the ottomans are weak. Your main objective should be to get the provinces of Kocaeli and Biga, so that in next war you can build up your galley navy and block the straits.',
  },
  {
    id: 'ach_229',
    name: 'A Kaiser not just in name',
    description: 'Form the Holy Roman Empire.',
    icon: 'https://eu4.paradoxwikis.com/images/1/1a/A_Kaiser_not_just_in_name.jpg',
    dlc: '',
    version: '1.1',
    difficulty: 'E',
    game: 'eu4',
    guideUrl: '',
    startingConditions: '',
    completionRequirements:
      '[![Yes](https://eu4.paradoxwikis.com/images/thumb/d/da/Ledger_yes.png/28px-Ledger_yes.png)](/File:Ledger_yes.png "Yes") Is [![Flag of Holy Roman Empire](https://eu4.paradoxwikis.com/images/thumb/e/ee/Holy_Roman_Empire.png/20px-Holy_Roman_Empire.png)](/Holy_Roman_Empire_\\(country\\) "Holy Roman Empire (country)") [Holy Roman Empire](/Holy_Roman_Empire_\\(country\\) "Holy Roman Empire (country)")',
    notes:
      'Easiest as [![Flag of Austria](https://eu4.paradoxwikis.com/images/thumb/7/7f/Austria.png/20px-Austria.png)](/Austria "Austria") [Austria](/Austria "Austria"), playing a normal emperor game, revoking the privilegia and then either forming the holy roman empire and continuing to play; or saving before forming, and then doing Alt+F4 once the achievement has been fulfilled, thereby continuing the campaign with revoke.',
  },
  {
    id: 'ach_230',
    name: 'Almost Prussian Blue',
    description:
      'Starting as the Livonian Order, form Livonia and own the territory of the North German Confederation as core provinces.',
    icon: 'https://eu4.paradoxwikis.com/images/3/30/Almost_Prussian_Blue.png',
    dlc: '',
    version: '1.34',
    difficulty: 'H',
    game: 'eu4',
    guideUrl: '',
    startingConditions:
      '[![Yes](https://eu4.paradoxwikis.com/images/thumb/d/da/Ledger_yes.png/28px-Ledger_yes.png)](/File:Ledger_yes.png "Yes") Playing as [![Flag of Livonian Order](https://eu4.paradoxwikis.com/images/thumb/8/81/Livonian_Order.png/20px-Livonian_Order.png)](/Livonian_Order "Livonian Order") [Livonian Order](/Livonian_Order "Livonian Order")',
    completionRequirements:
      '*   [![Yes](https://eu4.paradoxwikis.com/images/thumb/d/da/Ledger_yes.png/28px-Ledger_yes.png)](/File:Ledger_yes.png "Yes") Is [![Flag of Livonia](https://eu4.paradoxwikis.com/images/thumb/4/40/Livonia.png/20px-Livonia.png)](/Livonia "Livonia") [Livonia](/Livonia "Livonia")\n\nExpand[![Province icon.png](https://eu4.paradoxwikis.com/images/thumb/1/13/Province_icon.png/28px-Province_icon.png)](/Province "Province") Own and core all the following provinces:\n\n*   East Prussia area\n*   West Prussia area\n*   Silesia area\n*   North Germany region except the areas Bohemia, Moravia and Erzgebirge\n*   Chelmno (1859)\n*   Inowroclaw (4523)\n*   Gniezno (4526)\n*   Poznan (254)\n*   Notec (2963)\n*   East Frisia (1931)\n\nExpandMap of the provinces:\n\n[![Almost Prussian Blue map.png](https://eu4.paradoxwikis.com/images/4/48/Almost_Prussian_Blue_map.png)](/File:Almost_Prussian_Blue_map.png)\n\n[](/File:Almost_Prussian_Blue_map.png "Enlarge")',
    notes: '',
  },
  {
    id: 'ach_231',
    name: 'A Manchurian Candidate',
    description: 'Start as one of the Jurchen tribes and form Qing.',
    icon: 'https://eu4.paradoxwikis.com/images/4/4e/A_Manchurian_Candidate.jpg',
    dlc: '',
    version: '1.8',
    difficulty: 'M',
    game: 'eu4',
    guideUrl: '',
    startingConditions:
      '[![Primary culture.png](https://eu4.paradoxwikis.com/images/thumb/e/e1/Primary_culture.png/28px-Primary_culture.png)](/Primary_culture "Primary culture") Primary culture is *Jurchen*.',
    completionRequirements:
      '[![Yes](https://eu4.paradoxwikis.com/images/thumb/d/da/Ledger_yes.png/28px-Ledger_yes.png)](/File:Ledger_yes.png "Yes") Is [![Flag of Qing](https://eu4.paradoxwikis.com/images/thumb/9/95/Qing.png/20px-Qing.png)](/Qing "Qing") [Qing](/Qing "Qing")',
    notes:
      'You need to form [Manchu](/Manchu "Manchu") first to be able to form [![Flag of Qing](https://eu4.paradoxwikis.com/images/thumb/9/95/Qing.png/20px-Qing.png)](/Qing "Qing") [Qing](/Qing "Qing").',
  },
  {
    id: 'ach_232',
    name: 'An early Reich',
    description: 'Form Germany.',
    icon: 'https://eu4.paradoxwikis.com/images/1/12/An_early_Reich.jpg',
    dlc: '',
    version: '1.1',
    difficulty: 'M',
    game: 'eu4',
    guideUrl: '',
    startingConditions: '',
    completionRequirements:
      '[![Yes](https://eu4.paradoxwikis.com/images/thumb/d/da/Ledger_yes.png/28px-Ledger_yes.png)](/File:Ledger_yes.png "Yes") Is [![Flag of Germany](https://eu4.paradoxwikis.com/images/thumb/9/9b/Germany.png/20px-Germany.png)](/Germany "Germany") [Germany](/Germany "Germany")',
    notes: '',
  },
  {
    id: 'ach_233',
    name: 'Anglophile',
    description: 'Complete all English and British missions.',
    icon: 'https://eu4.paradoxwikis.com/images/1/19/Anglophile.png',
    dlc: 'or',
    version: '1.25',
    difficulty: 'H',
    game: 'eu4',
    guideUrl: 'https://eu4.paradoxwikis.com/Anglophile',
    startingConditions:
      '*   [![No](https://eu4.paradoxwikis.com/images/thumb/5/56/Ledger_no_crop.png/28px-Ledger_no_crop.png)](/File:Ledger_no_crop.png "No") *Not* using a [random New World](/Random_New_World "Random New World")\n*   [![Culture icon.png](https://eu4.paradoxwikis.com/images/thumb/2/29/Culture_icon.png/28px-Culture_icon.png)](/Culture "Culture") Has a culture out of the British group.',
    completionRequirements:
      '*   [![Mission.png](https://eu4.paradoxwikis.com/images/thumb/2/29/Mission.png/24px-Mission.png)](/Missions "Missions") Complete one of the following mission trees:\n    *   [![Rule Britannia.png](https://eu4.paradoxwikis.com/images/thumb/5/5a/Rule_Britannia.png/28px-Rule_Britannia.png)](/Rule_Britannia "Rule Britannia") [British missions from the Rule Britannia DLC](/British_missions_without_domination "British missions without domination").\n    *   [![Domination.png](https://eu4.paradoxwikis.com/images/thumb/3/3d/Domination.png/28px-Domination.png)](/Domination "Domination") [English/British missions from the Domination DLC](/English_missions "English missions").\n    *    [![Flag of Angevin Kingdom](https://eu4.paradoxwikis.com/images/thumb/b/be/Angevin_Kingdom.png/20px-Angevin_Kingdom.png)](/Angevin_Kingdom "Angevin Kingdom")[Angevin missions from the Domination DLC](/Angevin_missions "Angevin missions").',
    notes:
      '*   Strategies for Rule Britannia missions:\n    *   Provided you are able to force France into a PU, the missions are fairly easy to complete apart from being elected Emperor of the HRE - you will either need to convert to Protestant and win the league wars, or convert to Anglican or Reformed and hope the Peace of Westphalia occurs - which can be very difficult. You may want to stay out of the league wars and rent out your troops to the losing side so you can keep the war going.\n    *   Alternatively, you can just disband the HRE while remaining any religion.',
  },
  {
    id: 'ach_234',
    name: 'Assembly Instructions Needed',
    description: 'Form Scandinavia and revoke the privilegia of the Holy Roman Empire while being the Emperor.',
    icon: 'https://eu4.paradoxwikis.com/images/a/a2/Assembly_Instructions_Needed.png',
    dlc: '',
    version: '1.34',
    difficulty: 'M',
    game: 'eu4',
    guideUrl: '',
    startingConditions: '',
    completionRequirements:
      'One of the following:\n\n*   [![Yes](https://eu4.paradoxwikis.com/images/thumb/d/da/Ledger_yes.png/28px-Ledger_yes.png)](/File:Ledger_yes.png "Yes") Is [![Flag of Scandinavia](https://eu4.paradoxwikis.com/images/thumb/d/db/Scandinavia.png/20px-Scandinavia.png)](/Scandinavia "Scandinavia") [Scandinavia](/Scandinavia "Scandinavia") and the [![Imperial authority.png](https://eu4.paradoxwikis.com/images/thumb/4/46/Imperial_authority.png/28px-Imperial_authority.png)](/Imperial_authority "Imperial authority") emperor of the [HRE](/HRE "HRE") and has passed the imperial reform *“Revoke The Privilegia”*\n*   [![Yes](https://eu4.paradoxwikis.com/images/thumb/d/da/Ledger_yes.png/28px-Ledger_yes.png)](/File:Ledger_yes.png "Yes") Is the [![Flag of Holy Roman Empire](https://eu4.paradoxwikis.com/images/thumb/e/ee/Holy_Roman_Empire.png/20px-Holy_Roman_Empire.png)](/Holy_Roman_Empire_\\(country\\) "Holy Roman Empire (country)") [Holy Roman Empire](/Holy_Roman_Empire_\\(country\\) "Holy Roman Empire (country)") and was [![Flag of Scandinavia](https://eu4.paradoxwikis.com/images/thumb/d/db/Scandinavia.png/20px-Scandinavia.png)](/Scandinavia "Scandinavia") [Scandinavia](/Scandinavia "Scandinavia") before',
    notes:
      'Easy to do as [![Flag of Denmark](https://eu4.paradoxwikis.com/images/thumb/6/69/Denmark.png/20px-Denmark.png)](/Denmark "Denmark") [Denmark](/Denmark "Denmark"). Restart until [![Flag of Burgundy](https://eu4.paradoxwikis.com/images/thumb/b/b0/Burgundy.png/20px-Burgundy.png)](/Burgundy "Burgundy") [Burgundy](/Burgundy "Burgundy") is friendly, hire diplomatic reputation advisor, take religious diplomats estate privilege, and insult their rival. This should guarantee alliance and marriage for potential BI. Then ally and max relations with 3-4 electors, and you should become the emperor. Then the standard HRE approach of killing the Reformation. Join the HRE for a one-time IA boost. Ideas: Diplomatic, Religious, Influence. Diplomatic reputation for passing reforms and inheriting thrones and Religious to convert centers of reformation. Emperor [![Flag of Denmark](https://eu4.paradoxwikis.com/images/thumb/6/69/Denmark.png/20px-Denmark.png)](/Denmark "Denmark") [Denmark](/Denmark "Denmark") also has an easy time killing Swedish pretender rebels.',
  },
  {
    id: 'ach_235',
    name: 'Auld Alliance Reversed',
    description: 'As Scotland, have France as a vassal (do not form Great Britain).',
    icon: 'https://eu4.paradoxwikis.com/images/5/59/Auld_Alliance_Reversed.png',
    dlc: '',
    version: '1.9',
    difficulty: 'H',
    game: 'eu4',
    guideUrl: '',
    startingConditions:
      '[![Yes](https://eu4.paradoxwikis.com/images/thumb/d/da/Ledger_yes.png/28px-Ledger_yes.png)](/File:Ledger_yes.png "Yes") Playing as [![Flag of Scotland](https://eu4.paradoxwikis.com/images/thumb/2/27/Scotland.png/20px-Scotland.png)](/Scotland "Scotland") [Scotland](/Scotland "Scotland").',
    completionRequirements:
      '*   [![No](https://eu4.paradoxwikis.com/images/thumb/5/56/Ledger_no_crop.png/28px-Ledger_no_crop.png)](/File:Ledger_no_crop.png "No") *Not* playing as a [released vassal](/Vassal#Release_a_nation "Vassal").\n*   [![Icon vassal.png](https://eu4.paradoxwikis.com/images/thumb/4/47/Vassal.png/28px-Vassal.png)](/Vassal "Vassal") [![Flag of France](https://eu4.paradoxwikis.com/images/thumb/d/de/France.png/20px-France.png)](/France "France") [France](/France "France") is a vassal of [![Flag of Scotland](https://eu4.paradoxwikis.com/images/thumb/2/27/Scotland.png/20px-Scotland.png)](/Scotland "Scotland") [Scotland](/Scotland "Scotland").',
    notes: '',
  },
  {
    id: 'ach_236',
    name: 'Australia-Hungary',
    description: 'Starting as an Australian tribe unite Australia and subjugate Hungary.',
    icon: 'https://eu4.paradoxwikis.com/images/5/5d/Australia-Hungary.png',
    dlc: '',
    version: '1.32',
    difficulty: 'H',
    game: 'eu4',
    guideUrl: '',
    startingConditions:
      '[![Yes](https://eu4.paradoxwikis.com/images/thumb/d/da/Ledger_yes.png/28px-Ledger_yes.png)](/File:Ledger_yes.png "Yes") Playing as one of the following countries:\n\n*    [![Flag of Australia](https://eu4.paradoxwikis.com/images/thumb/4/43/Australia.png/20px-Australia.png)](/Australia "Australia") [Australia](/Australia "Australia")\n*    [![Flag of Tiwi](https://eu4.paradoxwikis.com/images/thumb/1/15/Tiwi.png/20px-Tiwi.png)](/Tiwi "Tiwi") [Tiwi](/Tiwi "Tiwi")\n*    [![Flag of Larrakia](https://eu4.paradoxwikis.com/images/thumb/1/18/Larrakia.png/20px-Larrakia.png)](/Larrakia "Larrakia") [Larrakia](/Larrakia "Larrakia")\n*    [![Flag of Yolngu](https://eu4.paradoxwikis.com/images/thumb/c/c0/Yolngu.png/20px-Yolngu.png)](/Yolngu "Yolngu") [Yolngu](/Yolngu "Yolngu")\n*    [![Flag of Yanuwa](https://eu4.paradoxwikis.com/images/thumb/f/f8/Yanuwa.png/20px-Yanuwa.png)](/Yanuwa "Yanuwa") [Yanuwa](/Yanuwa "Yanuwa")\n*    [![Flag of Awngthim](https://eu4.paradoxwikis.com/images/thumb/8/8a/Awngthim.png/20px-Awngthim.png)](/Awngthim "Awngthim") [Awngthim](/Awngthim "Awngthim")\n*    [![Flag of Kamilaroi](https://eu4.paradoxwikis.com/images/thumb/3/38/Kamilaroi.png/20px-Kamilaroi.png)](/Kamilaroi "Kamilaroi") [Kamilaroi](/Kamilaroi "Kamilaroi")\n*    [![Flag of Mianjin](https://eu4.paradoxwikis.com/images/thumb/a/a9/Mianjin.png/20px-Mianjin.png)](/Mianjin "Mianjin") [Mianjin](/Mianjin "Mianjin")\n*    [![Flag of Eora](https://eu4.paradoxwikis.com/images/thumb/a/a7/Eora.png/20px-Eora.png)](/Eora "Eora") [Eora](/Eora "Eora")\n*    [![Flag of Kulin](https://eu4.paradoxwikis.com/images/thumb/b/be/Kulin.png/20px-Kulin.png)](/Kulin "Kulin") [Kulin](/Kulin "Kulin")\n*    [![Flag of Kaurna](https://eu4.paradoxwikis.com/images/thumb/e/e3/Kaurna.png/20px-Kaurna.png)](/Kaurna "Kaurna") [Kaurna](/Kaurna "Kaurna")\n*    [![Flag of Palawa](https://eu4.paradoxwikis.com/images/thumb/2/2e/Palawa.png/20px-Palawa.png)](/Palawa "Palawa") [Palawa](/Palawa "Palawa")\n*    [![Flag of Wurundjeri](https://eu4.paradoxwikis.com/images/thumb/0/06/Wurundjeri.png/20px-Wurundjeri.png)](/Wurundjeri "Wurundjeri") [Wurundjeri](/Wurundjeri "Wurundjeri")\n*    [![Flag of Nyoongah](https://eu4.paradoxwikis.com/images/thumb/d/d4/Nyoongah.png/20px-Nyoongah.png)](/Nyoongah "Nyoongah") [Nyoongah](/Nyoongah "Nyoongah")\n*    [![Flag of Malgana](https://eu4.paradoxwikis.com/images/thumb/2/28/Malgana.png/20px-Malgana.png)](/Malgana "Malgana") [Malgana](/Malgana "Malgana")',
    completionRequirements:
      '*   [![Icon vassal.png](https://eu4.paradoxwikis.com/images/thumb/4/47/Vassal.png/28px-Vassal.png)](/Vassal "Vassal") [![Flag of Hungary](https://eu4.paradoxwikis.com/images/thumb/6/6a/Hungary.png/20px-Hungary.png)](/Hungary "Hungary") [Hungary](/Hungary "Hungary") is a [![Icon vassal.png](https://eu4.paradoxwikis.com/images/thumb/4/47/Vassal.png/28px-Vassal.png)](/Vassal "Vassal") vassal of this country\n*   [![Province icon.png](https://eu4.paradoxwikis.com/images/thumb/1/13/Province_icon.png/28px-Province_icon.png)](/Province "Province") Owns all provinces in the Australia region.\n*   [![Yes](https://eu4.paradoxwikis.com/images/thumb/d/da/Ledger_yes.png/28px-Ledger_yes.png)](/File:Ledger_yes.png "Yes") Is one of the following countries:\n*    [![Flag of Australia](https://eu4.paradoxwikis.com/images/thumb/4/43/Australia.png/20px-Australia.png)](/Australia "Australia") [Australia](/Australia "Australia")\n*    [![Flag of Tiwi](https://eu4.paradoxwikis.com/images/thumb/1/15/Tiwi.png/20px-Tiwi.png)](/Tiwi "Tiwi") [Tiwi](/Tiwi "Tiwi")\n*    [![Flag of Larrakia](https://eu4.paradoxwikis.com/images/thumb/1/18/Larrakia.png/20px-Larrakia.png)](/Larrakia "Larrakia") [Larrakia](/Larrakia "Larrakia")\n*    [![Flag of Yolngu](https://eu4.paradoxwikis.com/images/thumb/c/c0/Yolngu.png/20px-Yolngu.png)](/Yolngu "Yolngu") [Yolngu](/Yolngu "Yolngu")\n*    [![Flag of Yanuwa](https://eu4.paradoxwikis.com/images/thumb/f/f8/Yanuwa.png/20px-Yanuwa.png)](/Yanuwa "Yanuwa") [Yanuwa](/Yanuwa "Yanuwa")\n*    [![Flag of Awngthim](https://eu4.paradoxwikis.com/images/thumb/8/8a/Awngthim.png/20px-Awngthim.png)](/Awngthim "Awngthim") [Awngthim](/Awngthim "Awngthim")\n*    [![Flag of Kamilaroi](https://eu4.paradoxwikis.com/images/thumb/3/38/Kamilaroi.png/20px-Kamilaroi.png)](/Kamilaroi "Kamilaroi") [Kamilaroi](/Kamilaroi "Kamilaroi")\n*    [![Flag of Mianjin](https://eu4.paradoxwikis.com/images/thumb/a/a9/Mianjin.png/20px-Mianjin.png)](/Mianjin "Mianjin") [Mianjin](/Mianjin "Mianjin")\n*    [![Flag of Eora](https://eu4.paradoxwikis.com/images/thumb/a/a7/Eora.png/20px-Eora.png)](/Eora "Eora") [Eora](/Eora "Eora")\n*    [![Flag of Kulin](https://eu4.paradoxwikis.com/images/thumb/b/be/Kulin.png/20px-Kulin.png)](/Kulin "Kulin") [Kulin](/Kulin "Kulin")\n*    [![Flag of Kaurna](https://eu4.paradoxwikis.com/images/thumb/e/e3/Kaurna.png/20px-Kaurna.png)](/Kaurna "Kaurna") [Kaurna](/Kaurna "Kaurna")\n*    [![Flag of Palawa](https://eu4.paradoxwikis.com/images/thumb/2/2e/Palawa.png/20px-Palawa.png)](/Palawa "Palawa") [Palawa](/Palawa "Palawa")\n*    [![Flag of Wurundjeri](https://eu4.paradoxwikis.com/images/thumb/0/06/Wurundjeri.png/20px-Wurundjeri.png)](/Wurundjeri "Wurundjeri") [Wurundjeri](/Wurundjeri "Wurundjeri")\n*    [![Flag of Nyoongah](https://eu4.paradoxwikis.com/images/thumb/d/d4/Nyoongah.png/20px-Nyoongah.png)](/Nyoongah "Nyoongah") [Nyoongah](/Nyoongah "Nyoongah")\n*    [![Flag of Malgana](https://eu4.paradoxwikis.com/images/thumb/2/28/Malgana.png/20px-Malgana.png)](/Malgana "Malgana") [Malgana](/Malgana "Malgana")',
    notes:
      'Forming a federation will make the achievement much harder as your nation tag will change in the process. One possible way to circumvent this is becoming a steppe horde through government reforms, which changes the technology group to [![Nomadic technology group](https://eu4.paradoxwikis.com/images/thumb/b/b8/Nomadic.png/28px-Nomadic.png)](/Technology_group "Nomadic technology group") nomadic and allows you to form [![Flag of Australia](https://eu4.paradoxwikis.com/images/thumb/4/43/Australia.png/20px-Australia.png)](/Australia "Australia") [Australia](/Australia "Australia"), but becoming a horde in this way is only possible as a migratory tribe.',
  },
  {
    id: 'ach_237',
    name: 'Back in Control',
    description: 'Form Yuan and be the only nation holding land in China.',
    icon: 'https://eu4.paradoxwikis.com/images/6/66/Back_in_Control.png',
    dlc: '',
    version: '1.22',
    difficulty: 'M',
    game: 'eu4',
    guideUrl: '',
    startingConditions: '',
    completionRequirements:
      '*   [![Yes](https://eu4.paradoxwikis.com/images/thumb/d/da/Ledger_yes.png/28px-Ledger_yes.png)](/File:Ledger_yes.png "Yes") Is [![Flag of Yuan](https://eu4.paradoxwikis.com/images/thumb/a/a8/Yuan.png/20px-Yuan.png)](/Yuan "Yuan") [Yuan](/Yuan "Yuan")\n*   [![Province icon.png](https://eu4.paradoxwikis.com/images/thumb/1/13/Province_icon.png/28px-Province_icon.png)](/Province "Province") All colonized provinces in the [China super-region](/China_\\(super-region\\) "China (super-region)") owned by Yuan.',
    notes: 'Taiwan is only required if it is colonized.',
  },
  {
    id: 'ach_238',
    name: 'Back to the Piast',
    description: 'As Mazovia, Glogow or Opole, form the nation of Poland.',
    icon: 'https://eu4.paradoxwikis.com/images/6/6a/Back_to_the_Piast.jpg',
    dlc: '',
    version: '1.14',
    difficulty: 'H',
    game: 'eu4',
    guideUrl: 'https://eu4.paradoxwikis.com/Back_to_the_Piast',
    startingConditions:
      '[![Yes](https://eu4.paradoxwikis.com/images/thumb/d/da/Ledger_yes.png/28px-Ledger_yes.png)](/File:Ledger_yes.png "Yes") Playing as *either*:\n\n*    [![Flag of Mazovia](https://eu4.paradoxwikis.com/images/thumb/e/ee/Mazovia.png/20px-Mazovia.png)](/Mazovia "Mazovia") [Mazovia](/Mazovia "Mazovia")\n*    [![Flag of Silesia](https://eu4.paradoxwikis.com/images/thumb/f/f7/Silesia.png/20px-Silesia.png)](/Silesia "Silesia") [Silesia](/Silesia "Silesia")\n*    [![Flag of Opole](https://eu4.paradoxwikis.com/images/thumb/7/78/Opole.png/20px-Opole.png)](/Opole "Opole") [Opole](/Opole "Opole")\n*    [![Flag of Glogow](https://eu4.paradoxwikis.com/images/thumb/5/59/Glogow.png/20px-Glogow.png)](/Glogow "Glogow") [Glogow](/Glogow "Glogow")',
    completionRequirements:
      '*   [![No](https://eu4.paradoxwikis.com/images/thumb/5/56/Ledger_no_crop.png/28px-Ledger_no_crop.png)](/File:Ledger_no_crop.png "No") *Not* playing as a [released vassal](/Vassal#Release_a_nation "Vassal")\n*   [![Yes](https://eu4.paradoxwikis.com/images/thumb/d/da/Ledger_yes.png/28px-Ledger_yes.png)](/File:Ledger_yes.png "Yes") Is [![Flag of Poland](https://eu4.paradoxwikis.com/images/thumb/9/99/Poland.png/20px-Poland.png)](/Poland "Poland") [Poland](/Poland "Poland")',
    notes: '',
  },
  {
    id: 'ach_239',
    name: 'Baltic Crusader',
    description: 'As Teutonic Order or Livonian Order, own all of Russia as core provinces and convert it to Catholic.',
    icon: 'https://eu4.paradoxwikis.com/images/2/2c/Baltic_Crusader.jpg',
    dlc: '',
    version: '1.12',
    difficulty: 'H',
    game: 'eu4',
    guideUrl: 'https://eu4.paradoxwikis.com/Baltic_Crusader',
    startingConditions:
      '[![Yes](https://eu4.paradoxwikis.com/images/thumb/d/da/Ledger_yes.png/28px-Ledger_yes.png)](/File:Ledger_yes.png "Yes") Playing as *either*:\n\n*    [![Flag of Livonian Order](https://eu4.paradoxwikis.com/images/thumb/8/81/Livonian_Order.png/20px-Livonian_Order.png)](/Livonian_Order "Livonian Order") [Livonian Order](/Livonian_Order "Livonian Order")\n*    [![Flag of Teutonic Order](https://eu4.paradoxwikis.com/images/thumb/2/2f/Teutonic_Order.png/20px-Teutonic_Order.png)](/Teutonic_Order "Teutonic Order") [Teutonic Order](/Teutonic_Order "Teutonic Order")',
    completionRequirements:
      '*   [![No](https://eu4.paradoxwikis.com/images/thumb/5/56/Ledger_no_crop.png/28px-Ledger_no_crop.png)](/File:Ledger_no_crop.png "No") *Not* playing as a [released vassal](/Vassal#Release_a_nation "Vassal")\n*   [![Yes](https://eu4.paradoxwikis.com/images/thumb/d/da/Ledger_yes.png/28px-Ledger_yes.png)](/File:Ledger_yes.png "Yes") Is [![Flag of Livonian Order](https://eu4.paradoxwikis.com/images/thumb/8/81/Livonian_Order.png/20px-Livonian_Order.png)](/Livonian_Order "Livonian Order") [Livonian Order](/Livonian_Order "Livonian Order") or [![Flag of Teutonic Order](https://eu4.paradoxwikis.com/images/thumb/2/2f/Teutonic_Order.png/20px-Teutonic_Order.png)](/Teutonic_Order "Teutonic Order") [Teutonic Order](/Teutonic_Order "Teutonic Order")\n*   [![Province icon.png](https://eu4.paradoxwikis.com/images/thumb/1/13/Province_icon.png/28px-Province_icon.png)](/Province "Province") Own and core all fully colonized provinces in the [Pontic Steppe](/Pontic_Steppe "Pontic Steppe"), [Russia](/Russia_\\(region\\) "Russia (region)"), and [Ural](/Ural "Ural") regions.\n*   [![Catholicism](https://eu4.paradoxwikis.com/images/thumb/3/39/Catholic.png/28px-Catholic.png)](/Catholic "Catholic") All these provinces are Catholic\n\nExpand\n\n[![Baltic Crusader map.png](https://eu4.paradoxwikis.com/images/thumb/8/81/Baltic_Crusader_map.png/140px-Baltic_Crusader_map.png)](/File:Baltic_Crusader_map.png)\n\n[](/File:Baltic_Crusader_map.png "Enlarge")',
    notes:
      "Easiest as Teutonic Order; ally Muscovy, Austria and Bohemia and DOW Poland ASAP, or else Poland will form a PU with Lithuania. Restarting until Poland declines the PU is also a viable strategy. Some of the required provinces aren't colonized at gamestart, but you don't need to get a colonist to make them Catholic if you prevent Muscovy from forming Russia and they remain uncolonized, as they also get ignored by the religion requirement if they aren't colonized.",
  },
  {
    id: 'ach_240',
    name: 'Better than Napoleon',
    description: 'As France, own Vienna, Berlin and Moscow as core provinces.',
    icon: 'https://eu4.paradoxwikis.com/images/1/18/Better_than_Napoleon.jpg',
    dlc: '',
    version: '1.12',
    difficulty: 'M',
    game: 'eu4',
    guideUrl: '',
    startingConditions:
      '[![Yes](https://eu4.paradoxwikis.com/images/thumb/d/da/Ledger_yes.png/28px-Ledger_yes.png)](/File:Ledger_yes.png "Yes") Playing as [![Flag of France](https://eu4.paradoxwikis.com/images/thumb/d/de/France.png/20px-France.png)](/France "France") [France](/France "France")',
    completionRequirements:
      '*   [![No](https://eu4.paradoxwikis.com/images/thumb/5/56/Ledger_no_crop.png/28px-Ledger_no_crop.png)](/File:Ledger_no_crop.png "No") *Not* playing as a [released vassal](/Vassal#Release_a_nation "Vassal")\n*   [![Yes](https://eu4.paradoxwikis.com/images/thumb/d/da/Ledger_yes.png/28px-Ledger_yes.png)](/File:Ledger_yes.png "Yes") Is [![Flag of France](https://eu4.paradoxwikis.com/images/thumb/d/de/France.png/20px-France.png)](/France "France") [France](/France "France")\n*   [![Province icon.png](https://eu4.paradoxwikis.com/images/thumb/1/13/Province_icon.png/28px-Province_icon.png)](/Province "Province") Own and core Moskva, Berlin, and Wien.\n\nExpand\n\n[![Better than Napoleon map.png](https://eu4.paradoxwikis.com/images/thumb/c/ca/Better_than_Napoleon_map.png/140px-Better_than_Napoleon_map.png)](/File:Better_than_Napoleon_map.png)\n\n[](/File:Better_than_Napoleon_map.png "Enlarge")',
    notes: '',
  },
  {
    id: 'ach_241',
    name: 'Bunte Kuh',
    description: 'As Hamburg, trade in both Gems and Livestock.',
    icon: 'https://eu4.paradoxwikis.com/images/d/d8/Bunte_Kuh.png',
    dlc: '',
    version: '1.23',
    difficulty: 'H',
    game: 'eu4',
    guideUrl: 'https://eu4.paradoxwikis.com/Bunte_Kuh',
    startingConditions:
      '[![Yes](https://eu4.paradoxwikis.com/images/thumb/d/da/Ledger_yes.png/28px-Ledger_yes.png)](/File:Ledger_yes.png "Yes") Playing as [![Flag of Hamburg](https://eu4.paradoxwikis.com/images/thumb/e/e6/Hamburg.png/20px-Hamburg.png)](/Hamburg "Hamburg") [Hamburg](/Hamburg "Hamburg")',
    completionRequirements:
      '*   [![Livestock.png](https://eu4.paradoxwikis.com/images/thumb/e/e1/Livestock.png/28px-Livestock.png)](/Livestock "Livestock") Has country modifier *Trading in Livestock*\n*   [![Gems.png](https://eu4.paradoxwikis.com/images/thumb/d/d5/Gems.png/28px-Gems.png)](/Gems "Gems") Has country modifier *Trading in Gems*',
    notes:
      'The "trading in" bonus is gained by controlling 20% of the trade value of a given commodity, calculated as the sum of the value of a good produced in a node times the percentage of trade you control in that node, added up for every node in the world. It is not necessary to expand further than Northern Europe in order to achieve the necessary economy. There are two gems provinces (Königsberg and Danzig) just upstream of Hamburg that can be highly developed in order to add up to the 20% necessary. The goods produced in these provinces can be maximized by adding the rest of Baltic trade node to a trade company (which gives a goods produced bonus to all other provinces in the node) and stating the two gems provinces. There are many livestock provinces in Denmark and around the Baltic that can be used to gain the trading in livestock bonus. Keep in mind that manufactories will contribute to the bonus, but workshops will not. You may wish to form [![Flag of Lübeck](https://eu4.paradoxwikis.com/images/thumb/0/09/L%C3%BCbeck.png/20px-L%C3%BCbeck.png)](/L%C3%BCbeck "Lübeck") [Lübeck](/L%C3%BCbeck "Lübeck") to gain better trade ideas. Plutocratic, Trade, and Infrastructure ideas are all helpful.',
  },
  {
    id: 'ach_242',
    name: 'Consulate of the Sea',
    description: 'As Aragon conquer all Mediterranean Centers of Trade.',
    icon: 'https://eu4.paradoxwikis.com/images/2/22/Consulate_of_the_Sea.jpg',
    dlc: '',
    version: '1.18',
    difficulty: 'M',
    game: 'eu4',
    guideUrl: '',
    startingConditions:
      '[![Yes](https://eu4.paradoxwikis.com/images/thumb/d/da/Ledger_yes.png/28px-Ledger_yes.png)](/File:Ledger_yes.png "Yes") Playing as [![Flag of Aragon](https://eu4.paradoxwikis.com/images/thumb/6/61/Aragon.png/20px-Aragon.png)](/Aragon "Aragon") [Aragon](/Aragon "Aragon")',
    completionRequirements:
      '[![Province icon.png](https://eu4.paradoxwikis.com/images/thumb/1/13/Province_icon.png/28px-Province_icon.png)](/Province "Province") Own the following provinces:\n\nExpand\n\n[![Consulate of the Sea map.png](https://eu4.paradoxwikis.com/images/thumb/6/6a/Consulate_of_the_Sea_map.png/140px-Consulate_of_the_Sea_map.png)](/File:Consulate_of_the_Sea_map.png)\n\n[](/File:Consulate_of_the_Sea_map.png "Enlarge")',
    notes:
      '*For the misison, see: [Consulate of the Sea](/Aragonese_missions#Consulate_of_the_Sea "Aragonese missions"). For the event, see: [Consulate of the Sea](/Aragonese_events#Consulate_of_the_Sea "Aragonese events"). For the government reform, see [Consulate of the Sea](/Common_government_reforms#Consulate_of_the_Sea "Common government reforms")*  \n\nThe requirements do not match the actual [![Province trade power value.png](https://eu4.paradoxwikis.com/images/thumb/f/f4/Province_trade_power_value.png/28px-Province_trade_power_value.png)](/Center_of_trade "Center of trade") [Centers of Trade](/Center_of_trade "Center of trade").',
  },
  {
    id: 'ach_243',
    name: "Dovmont's Own",
    description: 'Starting as Pskov, have 100 standing Streltsy units.',
    icon: 'https://eu4.paradoxwikis.com/images/f/f5/Dovmont%27s_Own.png',
    dlc: '',
    version: '1.22',
    difficulty: 'H',
    game: 'eu4',
    guideUrl: '',
    startingConditions:
      '[![Yes](https://eu4.paradoxwikis.com/images/thumb/d/da/Ledger_yes.png/28px-Ledger_yes.png)](/File:Ledger_yes.png "Yes") Playing as [![Flag of Pskov](https://eu4.paradoxwikis.com/images/thumb/5/53/Pskov.png/20px-Pskov.png)](/Pskov "Pskov") [Pskov](/Pskov "Pskov")',
    completionRequirements:
      '[![Yes](https://eu4.paradoxwikis.com/images/thumb/d/da/Ledger_yes.png/28px-Ledger_yes.png)](/File:Ledger_yes.png "Yes") Has at least 100 Streltsy units',
    notes: '',
  },
  {
    id: 'ach_244',
    name: "Dracula's Revenge",
    description: 'Start as Wallachia or Moldavia, form Romania and own or have a subject own all of the Balkans.',
    icon: 'https://eu4.paradoxwikis.com/images/0/06/Dracula%27s_Revenge.png',
    dlc: '',
    version: '1.9',
    difficulty: 'H',
    game: 'eu4',
    guideUrl: 'https://eu4.paradoxwikis.com/Dracula%27s_Revenge',
    startingConditions: 'Primary culture is *Romanian*',
    completionRequirements:
      '*   [![Yes](https://eu4.paradoxwikis.com/images/thumb/d/da/Ledger_yes.png/28px-Ledger_yes.png)](/File:Ledger_yes.png "Yes") Is [![Flag of Romania](https://eu4.paradoxwikis.com/images/thumb/8/8f/Romania.png/20px-Romania.png)](/Romania "Romania") [Romania](/Romania "Romania")\n*   [![No](https://eu4.paradoxwikis.com/images/thumb/5/56/Ledger_no_crop.png/28px-Ledger_no_crop.png)](/File:Ledger_no_crop.png "No") *Not* playing as a [released vassal](/Vassal#Release_a_nation "Vassal")\n*   [![Province icon.png](https://eu4.paradoxwikis.com/images/thumb/1/13/Province_icon.png/28px-Province_icon.png)](/Province "Province") All provinces in the [Balkans](/Balkans "Balkans") region are owned by [![Flag of Romania](https://eu4.paradoxwikis.com/images/thumb/8/8f/Romania.png/20px-Romania.png)](/Romania "Romania") [Romania](/Romania "Romania") *or* its non-tributary [subjects](/Subjects "Subjects").',
    notes:
      'Possible starts are [![Flag of Moldavia](https://eu4.paradoxwikis.com/images/thumb/5/59/Moldavia.png/20px-Moldavia.png)](/Moldavia "Moldavia") [Moldavia](/Moldavia "Moldavia") and [![Flag of Wallachia](https://eu4.paradoxwikis.com/images/thumb/1/1a/Wallachia.png/20px-Wallachia.png)](/Wallachia "Wallachia") [Wallachia](/Wallachia "Wallachia")',
  },
  {
    id: 'ach_245',
    name: 'Emperor of Hindustan',
    description: "Starting as Delhi, Restore their Empire's borders.",
    icon: 'https://eu4.paradoxwikis.com/images/e/ea/Emperor_of_Hindustan.png',
    dlc: '',
    version: '1.26',
    difficulty: 'H',
    game: 'eu4',
    guideUrl: '',
    startingConditions:
      '[![Yes](https://eu4.paradoxwikis.com/images/thumb/d/da/Ledger_yes.png/28px-Ledger_yes.png)](/File:Ledger_yes.png "Yes") Playing as [![Flag of Delhi](https://eu4.paradoxwikis.com/images/thumb/d/d5/Delhi.png/20px-Delhi.png)](/Delhi "Delhi") [Delhi](/Delhi "Delhi")',
    completionRequirements:
      '[![Province icon.png](https://eu4.paradoxwikis.com/images/thumb/1/13/Province_icon.png/28px-Province_icon.png)](/Province "Province") The following provinces are owned by the country *or* its non-tributary [subjects](/Subjects "Subjects"):\n\nExpand\n\n[![Emperor of Hindustan map.png](https://eu4.paradoxwikis.com/images/thumb/d/d1/Emperor_of_Hindustan_map.png/140px-Emperor_of_Hindustan_map.png)](/File:Emperor_of_Hindustan_map.png)\n\n[](/File:Emperor_of_Hindustan_map.png "Enlarge")',
    notes:
      "Avoid the event at the start of the game that attempts to free Sirhind by using the 'place relative on throne' subject interaction right away. To make them loyal you can do development in their land, remember that it costs 0 dip to integrate them as you already start with cores. Focus on expanding south and northwest to begin the game.\n\nAlternatively, get lots of allies and let the event fire. Sirhind will attack you without any allies such as Jaunpur. Right before confirming the independence war option in the event, concentrate development from Sirhind's provinces, so you can fully annex it in the peace deal.\n\nProvinces owned by vassals and other non-tributary subjects of the player's country will count for the achievement.",
  },
  {
    id: 'ach_246',
    name: "Everything's Coming Up Mulhouse",
    description: 'Starting as Mulhouse, become Emperor of the HRE and completely decentralize the Empire.',
    icon: 'https://eu4.paradoxwikis.com/images/0/0a/Everything%27s_Coming_Up_Mulhouse.png',
    dlc: '',
    version: '1.30',
    difficulty: 'H',
    game: 'eu4',
    guideUrl: '',
    startingConditions:
      '*   [![Yes](https://eu4.paradoxwikis.com/images/thumb/d/da/Ledger_yes.png/28px-Ledger_yes.png)](/File:Ledger_yes.png "Yes") Playing as [![Flag of Mulhouse](https://eu4.paradoxwikis.com/images/thumb/3/30/Mulhouse.png/20px-Mulhouse.png)](/Mulhouse "Mulhouse") [Mulhouse](/Mulhouse "Mulhouse")\n*   [![No](https://eu4.paradoxwikis.com/images/thumb/5/56/Ledger_no_crop.png/28px-Ledger_no_crop.png)](/File:Ledger_no_crop.png "No") *Not* using a [random New World](/Random_New_World "Random New World")',
    completionRequirements:
      '*   [![Imperial authority.png](https://eu4.paradoxwikis.com/images/thumb/4/46/Imperial_authority.png/28px-Imperial_authority.png)](/Imperial_authority "Imperial authority") Is the emperor of the [Holy Roman Empire](/Holy_Roman_Empire "Holy Roman Empire")\n*   Has enacted the reform Reichskrieg',
    notes: 'Mulhouse starts as a republic, and needs to become a monarchy to be able to become the Holy Roman Emperor.',
  },
  {
    id: 'ach_247',
    name: 'Fanatic Collectivist',
    description: 'Own all Institution Origin provinces.',
    icon: 'https://eu4.paradoxwikis.com/images/1/11/Fanatic_Collectivist.jpg',
    dlc: '',
    version: '1.18',
    difficulty: 'E',
    game: 'eu4',
    guideUrl: '',
    startingConditions: '',
    completionRequirements:
      '*   [![Institutions.png](https://eu4.paradoxwikis.com/images/thumb/4/43/Institutions.png/24px-Institutions.png)](/Institutions "Institutions") Own the institution origin provinces for\n    *   [![Renaissance.png](https://eu4.paradoxwikis.com/images/thumb/7/73/Renaissance.png/24px-Renaissance.png)](/Renaissance "Renaissance") Renaissance\n    *   [![Colonialism](https://eu4.paradoxwikis.com/images/thumb/4/49/Colonialism.png/24px-Colonialism.png)](/Institutions#Colonialism "Colonialism") Colonialism\n    *   [![Printing Press.png](https://eu4.paradoxwikis.com/images/thumb/c/c1/Printing_Press.png/24px-Printing_Press.png)](/Printing_Press "Printing Press") Printing Press\n    *   [![Global Trade.png](https://eu4.paradoxwikis.com/images/thumb/9/97/Global_Trade.png/24px-Global_Trade.png)](/Global_Trade "Global Trade") Global Trade\n    *   [![Manufactories](https://eu4.paradoxwikis.com/images/thumb/c/c4/Manufactories.png/24px-Manufactories.png)](/Institutions#Manufactories "Manufactories") Manufactories\n    *   [![Enlightenment.png](https://eu4.paradoxwikis.com/images/thumb/f/fa/Enlightenment.png/24px-Enlightenment.png)](/Enlightenment "Enlightenment") Enlightenment\n    *   [![Industrialization.png](https://eu4.paradoxwikis.com/images/thumb/5/59/Industrialization.png/24px-Industrialization.png)](/Industrialization "Industrialization") Industrialization',
    notes: '',
  },
  {
    id: 'ach_248',
    name: 'Forever Golden',
    description: 'Complete the Spanish Mission Tree.',
    icon: 'https://eu4.paradoxwikis.com/images/a/a1/Forever_Golden.png',
    dlc: 'or',
    version: '1.28',
    difficulty: 'H',
    game: 'eu4',
    guideUrl: '',
    startingConditions:
      '[![No](https://eu4.paradoxwikis.com/images/thumb/5/56/Ledger_no_crop.png/28px-Ledger_no_crop.png)](/File:Ledger_no_crop.png "No") *Not* using a [random New World](/Random_New_World "Random New World")',
    completionRequirements:
      '*   [![Mission.png](https://eu4.paradoxwikis.com/images/thumb/2/29/Mission.png/24px-Mission.png)](/Missions "Missions") Complete one of the following mission trees:\n    *   [![Golden Century.png](https://eu4.paradoxwikis.com/images/thumb/b/bb/Golden_Century.png/28px-Golden_Century.png)](/Golden_Century "Golden Century") [Spanish missions from the Golden Century DLC](/Spanish_missions_without_domination "Spanish missions without domination").\n    *   [![Domination.png](https://eu4.paradoxwikis.com/images/thumb/3/3d/Domination.png/28px-Domination.png)](/Domination "Domination") [Castilian/Spanish missions from the Domination DLC](/Castilian_missions "Castilian missions").\n    *   [![Domination.png](https://eu4.paradoxwikis.com/images/thumb/3/3d/Domination.png/28px-Domination.png)](/Domination "Domination") [Aragonese missions from the Domination DLC](/Aragonese_missions "Aragonese missions") *and* the lower half of the [Castilian missions](/Castilian_missions "Castilian missions") which [![Flag of Aragon](https://eu4.paradoxwikis.com/images/thumb/6/61/Aragon.png/20px-Aragon.png)](/Aragon "Aragon") [Aragon](/Aragon "Aragon") gets upon forming [![Flag of Spain](https://eu4.paradoxwikis.com/images/thumb/5/58/Spain.png/20px-Spain.png)](/Spain "Spain") [Spain](/Spain "Spain").',
    notes:
      'The achievement *cannot* be completed with the Aragonese missions from the Golden Century DLC. If the Golden Century, but not the Domination DLC is active, Spain must be formed by a country which does *not* have Aragonese *nor* Catalan as primary culture, because these cultures give Aragonese missions instead of Spanish missions(culture converting after formation does not change your missions).',
  },
  {
    id: 'ach_249',
    name: 'For the Emperor!',
    description: 'Form Prussia or Germany, have the Empire government rank and 40.000 Marines raised at the same time.',
    icon: 'https://eu4.paradoxwikis.com/images/6/6d/For_the_Emperor%21.png',
    dlc: 'One of',
    version: '1.34',
    difficulty: 'M',
    game: 'eu4',
    guideUrl: '',
    startingConditions: '',
    completionRequirements:
      '*   [![Yes](https://eu4.paradoxwikis.com/images/thumb/d/da/Ledger_yes.png/28px-Ledger_yes.png)](/File:Ledger_yes.png "Yes") Is [![Flag of Prussia](https://eu4.paradoxwikis.com/images/thumb/2/28/Prussia.png/20px-Prussia.png)](/Prussia "Prussia") [Prussia](/Prussia "Prussia") *or* [![Flag of Germany](https://eu4.paradoxwikis.com/images/thumb/9/9b/Germany.png/20px-Germany.png)](/Germany "Germany") [Germany](/Germany "Germany")\n*   [![Empire rank](https://eu4.paradoxwikis.com/images/thumb/9/9d/Empire.png/28px-Empire.png)](/Government_rank "Empire rank") Is an empire\n*   Has at least 40 [marine](/Marines "Marines") regiments',
    notes: '',
  },
  {
    id: 'ach_250',
    name: 'Global Hegemony',
    description: 'Reach 100% Strength as any type of Hegemon.',
    icon: 'https://eu4.paradoxwikis.com/images/e/e2/Global_Hegemony.png',
    dlc: '',
    version: '1.30',
    difficulty: 'E',
    game: 'eu4',
    guideUrl: '',
    startingConditions:
      '[![No](https://eu4.paradoxwikis.com/images/thumb/5/56/Ledger_no_crop.png/28px-Ledger_no_crop.png)](/File:Ledger_no_crop.png "No") *Not* using a [random New World](/Random_New_World "Random New World")',
    completionRequirements: 'Hegemony power is at least 100%',
    notes: '',
  },
  {
    id: 'ach_251',
    name: 'Good King René',
    description: 'Start as Provence, form the Kingdom of Jerusalem.',
    icon: 'https://eu4.paradoxwikis.com/images/7/7b/Good_King_Ren%C3%A9.png',
    dlc: '',
    version: '1.23',
    difficulty: 'H',
    game: 'eu4',
    guideUrl: '',
    startingConditions:
      '[![Yes](https://eu4.paradoxwikis.com/images/thumb/d/da/Ledger_yes.png/28px-Ledger_yes.png)](/File:Ledger_yes.png "Yes") Playing as [![Flag of Provence](https://eu4.paradoxwikis.com/images/thumb/b/bd/Provence.png/20px-Provence.png)](/Provence "Provence") [Provence](/Provence "Provence")',
    completionRequirements:
      '[![Yes](https://eu4.paradoxwikis.com/images/thumb/d/da/Ledger_yes.png/28px-Ledger_yes.png)](/File:Ledger_yes.png "Yes") Is [![Flag of Jerusalem](https://eu4.paradoxwikis.com/images/thumb/e/ef/Jerusalem.png/20px-Jerusalem.png)](/Jerusalem "Jerusalem") [Jerusalem](/Jerusalem "Jerusalem")',
    notes: 'Note that the Kingdom of Jerusalem cannot be formed after Age of Reformation ends.',
  },
  {
    id: 'ach_252',
    name: 'Guarantor of Peace',
    description: 'Guarantee the Independence of France, The Ottoman Empire and Russia.',
    icon: 'https://eu4.paradoxwikis.com/images/7/71/Guarantor_of_Peace.png',
    dlc: '',
    version: '1.9',
    difficulty: 'H',
    game: 'eu4',
    guideUrl: '',
    startingConditions: '',
    completionRequirements:
      '*   [![Diplomatic upkeep.png](https://eu4.paradoxwikis.com/images/thumb/5/58/Diplomatic_relations.png/28px-Diplomatic_relations.png)](/Diplomatic_relations "Diplomatic relations") [Guarantee the independence](/Diplomacy#Proclaim_guarantee "Diplomacy") of:\n    *    [![Flag of France](https://eu4.paradoxwikis.com/images/thumb/d/de/France.png/20px-France.png)](/France "France") [France](/France "France")\n    *    [![Flag of Ottomans](https://eu4.paradoxwikis.com/images/thumb/8/89/Ottomans.png/20px-Ottomans.png)](/Ottomans "Ottomans") [Ottomans](/Ottomans "Ottomans")\n    *    [![Flag of Russia](https://eu4.paradoxwikis.com/images/thumb/e/ee/Russia.png/20px-Russia.png)](/Russia "Russia") [Russia](/Russia "Russia")',
    notes: 'You can only guarantee a country if you are larger than it. Can be achieved easily after unifying the HRE.',
  },
  {
    id: 'ach_253',
    name: 'Holy Horder',
    description:
      'Starting as the Teutonic Order, form the Mongol Empire while have the Holy Horde government reform enacted.',
    icon: 'https://eu4.paradoxwikis.com/images/7/7d/Holy_Horder.png',
    dlc: '',
    version: '1.34',
    difficulty: 'H',
    game: 'eu4',
    guideUrl: '',
    startingConditions:
      '[![Yes](https://eu4.paradoxwikis.com/images/thumb/d/da/Ledger_yes.png/28px-Ledger_yes.png)](/File:Ledger_yes.png "Yes") Playing as [![Flag of Teutonic Order](https://eu4.paradoxwikis.com/images/thumb/2/2f/Teutonic_Order.png/20px-Teutonic_Order.png)](/Teutonic_Order "Teutonic Order") [Teutonic Order](/Teutonic_Order "Teutonic Order")',
    completionRequirements:
      '*   [![No](https://eu4.paradoxwikis.com/images/thumb/5/56/Ledger_no_crop.png/28px-Ledger_no_crop.png)](/File:Ledger_no_crop.png "No") *Not* playing as a [released vassal](/Vassal#Release_a_nation "Vassal")\n*   [![Yes](https://eu4.paradoxwikis.com/images/thumb/d/da/Ledger_yes.png/28px-Ledger_yes.png)](/File:Ledger_yes.png "Yes") Is the [![Flag of Mongol Empire](https://eu4.paradoxwikis.com/images/thumb/e/e4/Mongol_Empire.png/20px-Mongol_Empire.png)](/Mongol_Empire "Mongol Empire") [Mongol Empire](/Mongol_Empire "Mongol Empire")\n*   [![Government theocracy.png](https://eu4.paradoxwikis.com/images/thumb/8/81/Government_theocracy.png/28px-Government_theocracy.png)](/Theocracy "Theocracy") Has enacted the [Holy Horde](/Holy_Horde "Holy Horde") government reform',
    notes:
      'To form the [![Flag of Mongol Empire](https://eu4.paradoxwikis.com/images/thumb/e/e4/Mongol_Empire.png/20px-Mongol_Empire.png)](/Mongol_Empire "Mongol Empire") [Mongol Empire](/Mongol_Empire "Mongol Empire") as the [![Flag of Teutonic Order](https://eu4.paradoxwikis.com/images/thumb/2/2f/Teutonic_Order.png/20px-Teutonic_Order.png)](/Teutonic_Order "Teutonic Order") [Teutonic Order](/Teutonic_Order "Teutonic Order") you need to choose the crusader path of missions after completing [Defeat Poland](/Teutonic_missions#Defeat_Poland "Teutonic missions"), this will unlock the mission [Crusaders of the Steppes](/Teutonic_missions#Crusaders_of_the_Steppes "Teutonic missions") which allows forming the [![Flag of Mongol Empire](https://eu4.paradoxwikis.com/images/thumb/e/e4/Mongol_Empire.png/20px-Mongol_Empire.png)](/Mongol_Empire "Mongol Empire") [Mongol Empire](/Mongol_Empire "Mongol Empire") due to the unique government reform.',
  },
  {
    id: 'ach_254',
    name: 'Holy Trinity',
    description: 'As the Papacy, own Jerusalem and have Livonian Order, Teutonic Order and The Knights as Marches.',
    icon: 'https://eu4.paradoxwikis.com/images/f/fa/Holy_Trinity.png',
    dlc: '',
    version: '1.9',
    difficulty: 'H',
    game: 'eu4',
    guideUrl: 'https://eu4.paradoxwikis.com/Holy_Trinity',
    startingConditions:
      '[![Yes](https://eu4.paradoxwikis.com/images/thumb/d/da/Ledger_yes.png/28px-Ledger_yes.png)](/File:Ledger_yes.png "Yes") Playing as [![Flag of The Papal State](https://eu4.paradoxwikis.com/images/thumb/7/71/The_Papal_State.png/20px-The_Papal_State.png)](/The_Papal_State "The Papal State") [The Papal State](/The_Papal_State "The Papal State")',
    completionRequirements:
      '*   [![Yes](https://eu4.paradoxwikis.com/images/thumb/d/da/Ledger_yes.png/28px-Ledger_yes.png)](/File:Ledger_yes.png "Yes") is [![Flag of The Papal State](https://eu4.paradoxwikis.com/images/thumb/7/71/The_Papal_State.png/20px-The_Papal_State.png)](/The_Papal_State "The Papal State") [The Papal State](/The_Papal_State "The Papal State")\n*   [![Province icon.png](https://eu4.paradoxwikis.com/images/thumb/1/13/Province_icon.png/28px-Province_icon.png)](/Province "Province") Own and core Jerusalem.\n*   [![March icon.png](https://eu4.paradoxwikis.com/images/thumb/1/1d/March_icon.png/28px-March_icon.png)](/March "March") Have [![Flag of Livonian Order](https://eu4.paradoxwikis.com/images/thumb/8/81/Livonian_Order.png/20px-Livonian_Order.png)](/Livonian_Order "Livonian Order") [Livonian Order](/Livonian_Order "Livonian Order"), [![Flag of Teutonic Order](https://eu4.paradoxwikis.com/images/thumb/2/2f/Teutonic_Order.png/20px-Teutonic_Order.png)](/Teutonic_Order "Teutonic Order") [Teutonic Order](/Teutonic_Order "Teutonic Order") and [![Flag of The Knights](https://eu4.paradoxwikis.com/images/thumb/8/84/The_Knights.png/20px-The_Knights.png)](/The_Knights "The Knights") [The Knights](/The_Knights "The Knights") as marches.',
    notes:
      'This achievement has several common pitfalls which would make it all but impossible to complete it if they happen. The strategy page for this achievement has [a section which explains them](/Holy_Trinity#Common_pitfalls_which_must_be_avoided "Holy Trinity") and some ways to get out of these situations. The player is advised to read that before attempting the achievement.',
  },
  {
    id: 'ach_255',
    name: "I don't like sand",
    description: 'Have the most development while owning no province with terrain other than desert or coastal desert.',
    icon: 'https://eu4.paradoxwikis.com/images/a/a7/I_don%27t_like_sand.png',
    dlc: '',
    version: '1.32',
    difficulty: 'VH',
    game: 'eu4',
    guideUrl: '',
    startingConditions:
      '[![No](https://eu4.paradoxwikis.com/images/thumb/5/56/Ledger_no_crop.png/28px-Ledger_no_crop.png)](/File:Ledger_no_crop.png "No") *Not* using a [random New World](/Random_New_World "Random New World")',
    completionRequirements:
      '*   [![Province icon.png](https://eu4.paradoxwikis.com/images/thumb/1/13/Province_icon.png/28px-Province_icon.png)](/Province "Province") All provinces are either [![Combat terrain desert.png](https://eu4.paradoxwikis.com/images/thumb/3/33/Combat_terrain_desert.png/72px-Combat_terrain_desert.png)](/File:Combat_terrain_desert.png) desert or [![Combat terrain coastal desert.png](https://eu4.paradoxwikis.com/images/thumb/a/a4/Combat_terrain_coastal_desert.png/72px-Combat_terrain_coastal_desert.png)](/File:Combat_terrain_coastal_desert.png) coastal desert\n*   [![No](https://eu4.paradoxwikis.com/images/thumb/5/56/Ledger_no_crop.png/28px-Ledger_no_crop.png)](/File:Ledger_no_crop.png "No") No other country has a higher [![Development.png](https://eu4.paradoxwikis.com/images/thumb/a/a4/Development.png/28px-Development.png)](/Development "Development") development than this country\n\nExpand\n\n[![](https://eu4.paradoxwikis.com/images/thumb/f/fa/I_dont_like_sand_map.png/300px-I_dont_like_sand_map.png)](/File:I_dont_like_sand_map.png)\n\n[](/File:I_dont_like_sand_map.png "Enlarge")\n\nAll desert and coastal desert provinces',
    notes:
      'Easiest as [![Flag of Ajuuraan](https://eu4.paradoxwikis.com/images/thumb/5/52/Ajuuraan.png/20px-Ajuuraan.png)](/Ajuuraan "Ajuuraan") [Ajuuraan](/Ajuuraan "Ajuuraan") or the [![Flag of Mamluks](https://eu4.paradoxwikis.com/images/thumb/c/ca/The_Mamluks.png/20px-The_Mamluks.png)](/Mamluks "Mamluks") [Mamluks](/Mamluks "Mamluks"), because of their national ideas and the "Hydraulic Rights" estate privilege (which reduces the additional cost from developing deserts and coastal desert by half), that is unlocked through a mission in [![Origins.png](https://eu4.paradoxwikis.com/images/thumb/8/8e/Origins.png/28px-Origins.png)](/Origins "Origins") Origins DLC. Forming [![Flag of Arabia](https://eu4.paradoxwikis.com/images/thumb/e/ed/Arabia.png/20px-Arabia.png)](/Arabia "Arabia") [Arabia](/Arabia "Arabia") (possibly via [![Flag of Yemen](https://eu4.paradoxwikis.com/images/thumb/f/fc/Yemen.png/20px-Yemen.png)](/Yemen "Yemen") [Yemen](/Yemen "Yemen") to avoid the tech requirement) will unlock the similar "Oasis Development" privilege, which stacks with "Hydraulic Rights". Completing [![Flag of Mamluks](https://eu4.paradoxwikis.com/images/thumb/c/ca/The_Mamluks.png/20px-The_Mamluks.png)](/Mamluks "Mamluks") [Mamluks](/Mamluks "Mamluks") mission "Lion & Crescent" during Age of Reformation grants access to Persian splendor ability \'Persian Enlightenment\' providing -20% dev cost modifier. Not cored provinces and unfinished colonies counts as owned provinces.',
  },
  {
    id: 'ach_256',
    name: "It's All Greek To Me",
    description: 'Form Greece and own and have cores on Zeta, Thatta, Lamba, and Roh.',
    icon: 'https://eu4.paradoxwikis.com/images/7/73/It%27s_All_Greek_To_Me.png',
    dlc: '',
    version: '1.22',
    difficulty: 'H',
    game: 'eu4',
    guideUrl: '',
    startingConditions: '',
    completionRequirements:
      '*   [![Yes](https://eu4.paradoxwikis.com/images/thumb/d/da/Ledger_yes.png/28px-Ledger_yes.png)](/File:Ledger_yes.png "Yes") Is [![Flag of Greece](https://eu4.paradoxwikis.com/images/thumb/d/d8/Greece.png/20px-Greece.png)](/Greece "Greece") [Greece](/Greece "Greece")\n*   [![Province icon.png](https://eu4.paradoxwikis.com/images/thumb/1/13/Province_icon.png/28px-Province_icon.png)](/Province "Province") Own the core provinces of Zeta (138), Thatta (504), Roh (578), and Lamba (4104)\n\nExpand\n\n[![It\'s All Greek To Me map.png](https://eu4.paradoxwikis.com/images/thumb/5/5a/It%27s_All_Greek_To_Me_map.png/140px-It%27s_All_Greek_To_Me_map.png)](/File:It%27s_All_Greek_To_Me_map.png)\n\n[](/File:It%27s_All_Greek_To_Me_map.png "Enlarge")',
    notes:
      '*   Forming Greece requires Greek primary culture. Zeta begins held by [![Flag of Serbia](https://eu4.paradoxwikis.com/images/thumb/7/76/Serbia.png/20px-Serbia.png)](/Serbia "Serbia") [Serbia](/Serbia "Serbia"), Thatta held by [![Flag of Sindh](https://eu4.paradoxwikis.com/images/thumb/3/39/Sindh.png/20px-Sindh.png)](/Sindh "Sindh") [Sindh](/Sindh "Sindh"), Roh held by [![Flag of Afghanistan](https://eu4.paradoxwikis.com/images/thumb/7/7d/Afghanistan.png/20px-Afghanistan.png)](/Afghanistan "Afghanistan") [Afghanistan](/Afghanistan "Afghanistan"), and Lamba uncolonized in Central Africa.\n*   Alternatively, you can conquer [![Flag of Byzantium](https://eu4.paradoxwikis.com/images/thumb/9/96/Byzantium.png/20px-Byzantium.png)](/Byzantium "Byzantium") [Byzantium](/Byzantium "Byzantium") and wait for Greek cores to form. This happens fairly commonly due to rebels, and can also happen due to the [Greek Separatism](/Greece#Greek_Separatism "Greece") after Admin Tech 20. Release Greece as a vassal and feed him the required provinces. Once they are cored, diplomatically annex Greece and release them again, but choose to play as Greece this time. Since all required provinces other than Thatta are on different subcontinents than your Greek vassal\'s capital, your vassal may add them to a trade company instead of full-coring it, which will cause the core to be lost when you annex them. This can be prevented by fully coring these provinces yourself before giving them to Greece.',
  },
  {
    id: 'ach_257',
    name: 'Keep the Flame Burning',
    description: 'As a Zoroastrian nation, own all Religious Centers and Monument Baku Ateshgah on tier 3.',
    icon: 'https://eu4.paradoxwikis.com/images/9/9c/Keep_the_Flame_Burning.jpg',
    dlc: '',
    version: '1.31',
    difficulty: 'H',
    game: 'eu4',
    guideUrl: '',
    startingConditions: '',
    completionRequirements:
      '*   [![Zoroastrianism.png](https://eu4.paradoxwikis.com/images/thumb/2/25/Zoroastrianism.png/28px-Zoroastrianism.png)](/Zoroastrian "Zoroastrian") Religion is Zoroastrian\n*   [![Great project fire temple of ateshgah.png](https://eu4.paradoxwikis.com/images/thumb/6/64/Great_project_fire_temple_of_ateshgah.png/28px-Great_project_fire_temple_of_ateshgah.png)](/File:Great_project_fire_temple_of_ateshgah.png) [Baku Ateshgah](/Great_project#Baku_Ateshgah "Great project") is tier 3\n*   [![Province icon.png](https://eu4.paradoxwikis.com/images/thumb/1/13/Province_icon.png/28px-Province_icon.png)](/Province "Province") The following provinces are owned and follow the [![Zoroastrianism.png](https://eu4.paradoxwikis.com/images/thumb/2/25/Zoroastrianism.png/28px-Zoroastrianism.png)](/Zoroastrian "Zoroastrian") Zoroastrian faith:\n    *   Daman (4430)\n    *   Khiva (441)\n    *   Larestan (2223)\n    *   Shirvan (421)\n    *   Tun (4336)\n    *   Zanjan (2212)',
    notes:
      'Easiest after forming [![Flag of Persia](https://eu4.paradoxwikis.com/images/thumb/0/01/Persia.png/20px-Persia.png)](/Persia "Persia") [Persia](/Persia "Persia"), which can convert to Zoroastrian via mission even if no provinces of the religion are left.\n\nNote that this achievement cannot be combined with Rekindling the Flames because it cannot be earned as a Custom Nation, which is required for Rekindling the Flames.',
  },
  {
    id: 'ach_258',
    name: 'King of Jerusalem',
    description: 'Form the Kingdom of Jerusalem as Cyprus or The Knights.',
    icon: 'https://eu4.paradoxwikis.com/images/f/f2/King_of_Jerusalem.png',
    dlc: '',
    version: '1.9',
    difficulty: 'H',
    game: 'eu4',
    guideUrl: 'https://eu4.paradoxwikis.com/King_of_Jerusalem',
    startingConditions:
      '[![Yes](https://eu4.paradoxwikis.com/images/thumb/d/da/Ledger_yes.png/28px-Ledger_yes.png)](/File:Ledger_yes.png "Yes") Playing as *either*:\n\n*    [![Flag of Cyprus](https://eu4.paradoxwikis.com/images/thumb/6/64/Cyprus.png/20px-Cyprus.png)](/Cyprus "Cyprus") [Cyprus](/Cyprus "Cyprus")\n*    [![Flag of The Knights](https://eu4.paradoxwikis.com/images/thumb/8/84/The_Knights.png/20px-The_Knights.png)](/The_Knights "The Knights") [The Knights](/The_Knights "The Knights")',
    completionRequirements:
      '[![Yes](https://eu4.paradoxwikis.com/images/thumb/d/da/Ledger_yes.png/28px-Ledger_yes.png)](/File:Ledger_yes.png "Yes") Is [![Flag of Jerusalem](https://eu4.paradoxwikis.com/images/thumb/e/ef/Jerusalem.png/20px-Jerusalem.png)](/Jerusalem "Jerusalem") [Jerusalem](/Jerusalem "Jerusalem")',
    notes:
      'Completing the mission [Jerusalem!](/Crusader_missions#Jerusalem.21 "Crusader missions") allows forming Jerusalem after the age of reformation.',
  },
  {
    id: 'ach_259',
    name: 'Kinslayer',
    description:
      'As Tver, Yaroslavl, Ryazan, Beloozero, Rostov or Odoyev, eliminate all other Rurikovich nations without changing your ruling dynasty.',
    icon: 'https://eu4.paradoxwikis.com/images/2/2a/Kinslayer.jpg',
    dlc: '',
    version: '1.16',
    difficulty: 'H',
    game: 'eu4',
    guideUrl: 'https://eu4.paradoxwikis.com/Kinslayer',
    startingConditions:
      '[![Yes](https://eu4.paradoxwikis.com/images/thumb/d/da/Ledger_yes.png/28px-Ledger_yes.png)](/File:Ledger_yes.png "Yes") Playing as *either*:\n\n*    [![Flag of Odoyev](https://eu4.paradoxwikis.com/images/thumb/f/f4/Odoyev.png/20px-Odoyev.png)](/Odoyev "Odoyev") [Odoyev](/Odoyev "Odoyev")\n*    [![Flag of Ryazan](https://eu4.paradoxwikis.com/images/thumb/7/7b/Ryazan.png/20px-Ryazan.png)](/Ryazan "Ryazan") [Ryazan](/Ryazan "Ryazan")\n*    [![Flag of Tver](https://eu4.paradoxwikis.com/images/thumb/3/35/Tver.png/20px-Tver.png)](/Tver "Tver") [Tver](/Tver "Tver")\n*    [![Flag of Yaroslavl](https://eu4.paradoxwikis.com/images/thumb/b/b9/Yaroslavl.png/20px-Yaroslavl.png)](/Yaroslavl "Yaroslavl") [Yaroslavl](/Yaroslavl "Yaroslavl")\n*    [![Flag of Beloozero](https://eu4.paradoxwikis.com/images/thumb/a/a9/Beloozero.png/20px-Beloozero.png)](/Beloozero "Beloozero") [Beloozero](/Beloozero "Beloozero")\n*    [![Flag of Rostov](https://eu4.paradoxwikis.com/images/thumb/3/38/Rostov.png/20px-Rostov.png)](/Rostov "Rostov") [Rostov](/Rostov "Rostov")',
    completionRequirements: 'This country and its junior partners are the only countries with the Rurikovich dynasty',
    notes: '',
  },
  {
    id: 'ach_260',
    name: 'Knights of the Caribbean',
    description:
      'Starting as the Knights, own the Caribbean and every island in the Mediterranean. (Colonies are NOT allowed)',
    icon: 'https://eu4.paradoxwikis.com/images/d/de/Knights_of_the_Caribbean.png',
    dlc: '',
    version: '1.32',
    difficulty: 'H',
    game: 'eu4',
    guideUrl: '',
    startingConditions:
      '[![Yes](https://eu4.paradoxwikis.com/images/thumb/d/da/Ledger_yes.png/28px-Ledger_yes.png)](/File:Ledger_yes.png "Yes") Playing as [![Flag of The Knights](https://eu4.paradoxwikis.com/images/thumb/8/84/The_Knights.png/20px-The_Knights.png)](/The_Knights "The Knights") [The Knights](/The_Knights "The Knights")',
    completionRequirements:
      '*   [![Province icon.png](https://eu4.paradoxwikis.com/images/thumb/1/13/Province_icon.png/28px-Province_icon.png)](/Province "Province") Owns all provinces in the [Caribbean](/Caribbean "Caribbean") region.\n\nExpand[![Province icon.png](https://eu4.paradoxwikis.com/images/thumb/1/13/Province_icon.png/28px-Province_icon.png)](/Province "Province") Owns the following core provinces:\n\n*   Rhodes (320)\n*   Cyprus (321)\n*   Crete (163)\n*   Naxos (164)\n*   Chios (2348)\n*   Euboea (3003)\n*   Lesbos (4700)\n*   Cephalonia (4698)\n*   Corfu (142)\n*   Syracuse (2982)\n*   Messina (124)\n*   Palermo (125)\n*   Girgenti (4737)\n*   Trapani (4736)\n*   Djerba (2954)\n*   Malta (126)\n*   Sassari (127)\n*   Corsica (1247)\n*   Menorca (4559)\n*   Ibiza (4560)\n*   Mallorca (333)\n*   Venezia (112)\n*   Arborea (4735)\n*   Cagliari (2986)\n\nExpandMap of the Mediterranean provinces:\n\n[![](https://eu4.paradoxwikis.com/images/thumb/b/ba/Knights_of_the_Caribbean_map.png/200px-Knights_of_the_Caribbean_map.png)](/File:Knights_of_the_Caribbean_map.png)\n\n[](/File:Knights_of_the_Caribbean_map.png "Enlarge")\n\nThe needed mediterranean provinces',
    notes:
      'Bermuda is also part of the Caribbean region even though it is not part of the Colonial Caribbean colonial region.',
  },
  {
    id: 'ach_261',
    name: 'Lazarus',
    description: 'As Serbia, own the entire Balkans as core provinces.',
    icon: 'https://eu4.paradoxwikis.com/images/8/8a/Lazarus.jpg',
    dlc: '',
    version: '1.14',
    difficulty: 'H',
    game: 'eu4',
    guideUrl: '',
    startingConditions:
      '[![Yes](https://eu4.paradoxwikis.com/images/thumb/d/da/Ledger_yes.png/28px-Ledger_yes.png)](/File:Ledger_yes.png "Yes") Playing as [![Flag of Serbia](https://eu4.paradoxwikis.com/images/thumb/7/76/Serbia.png/20px-Serbia.png)](/Serbia "Serbia") [Serbia](/Serbia "Serbia")',
    completionRequirements:
      '*   [![No](https://eu4.paradoxwikis.com/images/thumb/5/56/Ledger_no_crop.png/28px-Ledger_no_crop.png)](/File:Ledger_no_crop.png "No") *Not* playing as a [released vassal](/Vassal#Release_a_nation "Vassal")\n*   [![Yes](https://eu4.paradoxwikis.com/images/thumb/d/da/Ledger_yes.png/28px-Ledger_yes.png)](/File:Ledger_yes.png "Yes") Is [![Flag of Serbia](https://eu4.paradoxwikis.com/images/thumb/7/76/Serbia.png/20px-Serbia.png)](/Serbia "Serbia") [Serbia](/Serbia "Serbia")\n*   [![Province icon.png](https://eu4.paradoxwikis.com/images/thumb/1/13/Province_icon.png/28px-Province_icon.png)](/Province "Province") Own and core all provinces in the [Balkans](/Balkans "Balkans") region',
    notes: '',
  },
  {
    id: 'ach_262',
    name: 'Luck of the Irish',
    description: 'Own and have cores on the British Isles as an Irish nation.',
    icon: 'https://eu4.paradoxwikis.com/images/b/bc/Luck_of_the_Irish.jpg',
    dlc: '',
    version: '1.2',
    difficulty: 'H',
    game: 'eu4',
    guideUrl: '',
    startingConditions:
      '[![Primary culture.png](https://eu4.paradoxwikis.com/images/thumb/e/e1/Primary_culture.png/28px-Primary_culture.png)](/Primary_culture "Primary culture") Primary culture is *Irish*',
    completionRequirements:
      '[![Province icon.png](https://eu4.paradoxwikis.com/images/thumb/1/13/Province_icon.png/28px-Province_icon.png)](/Province "Province") Own and core all provinces of the [Britain](/European_regions#British_Isles "European regions") region.',
    notes:
      'Possible starts are [![Flag of Clanricarde](https://eu4.paradoxwikis.com/images/thumb/5/55/Clanricarde.png/20px-Clanricarde.png)](/Clanricarde "Clanricarde") [Clanricarde](/Clanricarde "Clanricarde"), [![Flag of Desmond](https://eu4.paradoxwikis.com/images/thumb/5/5e/Desmond.png/20px-Desmond.png)](/Desmond "Desmond") [Desmond](/Desmond "Desmond"), [![Flag of Kildare](https://eu4.paradoxwikis.com/images/thumb/7/7a/Kildare.png/20px-Kildare.png)](/Kildare "Kildare") [Kildare](/Kildare "Kildare"), [![Flag of Leinster](https://eu4.paradoxwikis.com/images/thumb/4/49/Leinster.png/20px-Leinster.png)](/Leinster "Leinster") [Leinster](/Leinster "Leinster"), [![Flag of Munster](https://eu4.paradoxwikis.com/images/thumb/e/e5/Munster.png/20px-Munster.png)](/Munster "Munster") [Munster](/Munster "Munster"), [![Flag of Offaly](https://eu4.paradoxwikis.com/images/thumb/3/3a/Offaly.png/20px-Offaly.png)](/Offaly "Offaly") [Offaly](/Offaly "Offaly"), [![Flag of Ormond](https://eu4.paradoxwikis.com/images/thumb/f/fd/Ormond.png/20px-Ormond.png)](/Ormond "Ormond") [Ormond](/Ormond "Ormond"), [![Flag of Sligo](https://eu4.paradoxwikis.com/images/thumb/2/28/Sligo.png/20px-Sligo.png)](/Sligo "Sligo") [Sligo](/Sligo "Sligo"), [![Flag of Thomond](https://eu4.paradoxwikis.com/images/thumb/d/db/Thomond.png/20px-Thomond.png)](/Thomond "Thomond") [Thomond](/Thomond "Thomond"), [![Flag of Tyrconnell](https://eu4.paradoxwikis.com/images/thumb/e/e9/Tyrconnell.png/20px-Tyrconnell.png)](/Tyrconnell "Tyrconnell") [Tyrconnell](/Tyrconnell "Tyrconnell"), [![Flag of Tyrone](https://eu4.paradoxwikis.com/images/thumb/c/c7/Tyrone.png/20px-Tyrone.png)](/Tyrone "Tyrone") [Tyrone](/Tyrone "Tyrone") and [![Flag of Ulster](https://eu4.paradoxwikis.com/images/thumb/b/b9/Ulster.png/20px-Ulster.png)](/Ulster "Ulster") [Ulster](/Ulster "Ulster").\n\n [![Flag of Desmond](https://eu4.paradoxwikis.com/images/thumb/5/5e/Desmond.png/20px-Desmond.png)](/Desmond "Desmond") [Desmond](/Desmond "Desmond") is a good choice due to early military ideas. Rushing to conquer the rest of the Irish OPMs and securing an alliance with [![Flag of Scotland](https://eu4.paradoxwikis.com/images/thumb/2/27/Scotland.png/20px-Scotland.png)](/Scotland "Scotland") [Scotland](/Scotland "Scotland") can deter [![Flag of England](https://eu4.paradoxwikis.com/images/thumb/2/21/England.png/20px-England.png)](/England "England") [England](/England "England") until the time is right.',
  },
  {
    id: 'ach_263',
    name: 'Lucky Lucca',
    description: 'As Lucca, own Lucknow!',
    icon: 'https://eu4.paradoxwikis.com/images/a/a2/Lucky_Lucca.jpg',
    dlc: '',
    version: '1.12',
    difficulty: 'H',
    game: 'eu4',
    guideUrl: 'https://eu4.paradoxwikis.com/Lucky_Lucca',
    startingConditions:
      '[![Yes](https://eu4.paradoxwikis.com/images/thumb/d/da/Ledger_yes.png/28px-Ledger_yes.png)](/File:Ledger_yes.png "Yes") Playing as [![Flag of Lucca](https://eu4.paradoxwikis.com/images/thumb/8/87/Lucca.png/20px-Lucca.png)](/Lucca "Lucca") [Lucca](/Lucca "Lucca")',
    completionRequirements:
      '*   [![No](https://eu4.paradoxwikis.com/images/thumb/5/56/Ledger_no_crop.png/28px-Ledger_no_crop.png)](/File:Ledger_no_crop.png "No") *Not* playing as a [released vassal](/Vassal#Release_a_nation "Vassal")\n*   [![Yes](https://eu4.paradoxwikis.com/images/thumb/d/da/Ledger_yes.png/28px-Ledger_yes.png)](/File:Ledger_yes.png "Yes") Is [![Flag of Lucca](https://eu4.paradoxwikis.com/images/thumb/8/87/Lucca.png/20px-Lucca.png)](/Lucca "Lucca") [Lucca](/Lucca "Lucca")\n*   [![Province icon.png](https://eu4.paradoxwikis.com/images/thumb/1/13/Province_icon.png/28px-Province_icon.png)](/Province "Province") Own and core Lucknow',
    notes:
      'Lucknow is in northern India, initially owned by [![Flag of Jaunpur](https://eu4.paradoxwikis.com/images/thumb/f/fc/Jaunpur.png/20px-Jaunpur.png)](/Jaunpur "Jaunpur") [Jaunpur](/Jaunpur "Jaunpur").',
  },
  {
    id: 'ach_264',
    name: 'Mare Nostrum',
    description: 'Restore the Roman Empire and own the entire Mediterranean and Black Sea coast lines.',
    icon: 'https://eu4.paradoxwikis.com/images/e/e8/Mare_Nostrum.jpg',
    dlc: '',
    version: '1.16',
    difficulty: 'H',
    game: 'eu4',
    guideUrl: '',
    startingConditions:
      '[![No](https://eu4.paradoxwikis.com/images/thumb/5/56/Ledger_no_crop.png/28px-Ledger_no_crop.png)](/File:Ledger_no_crop.png "No") Not playing as [![Flag of The Papal State](https://eu4.paradoxwikis.com/images/thumb/7/71/The_Papal_State.png/20px-The_Papal_State.png)](/The_Papal_State "The Papal State") [The Papal State](/The_Papal_State "The Papal State")',
    completionRequirements:
      '*   [![Yes](https://eu4.paradoxwikis.com/images/thumb/d/da/Ledger_yes.png/28px-Ledger_yes.png)](/File:Ledger_yes.png "Yes") Is [![Flag of Roman Empire](https://eu4.paradoxwikis.com/images/thumb/4/4e/Roman_Empire.png/20px-Roman_Empire.png)](/Roman_Empire "Roman Empire") [Roman Empire](/Roman_Empire "Roman Empire")\n*   [![Province icon.png](https://eu4.paradoxwikis.com/images/thumb/1/13/Province_icon.png/28px-Province_icon.png)](/Province "Province") Own the following provinces:\n\nExpand\n\n[![Requirements Mare Nostrum.png](https://eu4.paradoxwikis.com/images/thumb/3/3d/Requirements_Mare_Nostrum.png/140px-Requirements_Mare_Nostrum.png)](/File:Requirements_Mare_Nostrum.png)\n\n[](/File:Requirements_Mare_Nostrum.png "Enlarge")',
    notes:
      'Easiest to do as the [![Flag of Ottomans](https://eu4.paradoxwikis.com/images/thumb/8/89/Ottomans.png/20px-Ottomans.png)](/Ottomans "Ottomans") [Ottomans](/Ottomans "Ottomans") after converting to Christianity. Alternatively, with [![Golden Century.png](https://eu4.paradoxwikis.com/images/thumb/b/bb/Golden_Century.png/28px-Golden_Century.png)](/Golden_Century "Golden Century") Golden Century, this is relatively easy as [![Flag of Aragon](https://eu4.paradoxwikis.com/images/thumb/6/61/Aragon.png/20px-Aragon.png)](/Aragon "Aragon") [Aragon](/Aragon "Aragon") as their mission tree gives you claims on most of the required territory. With [![King of Kings.png](https://eu4.paradoxwikis.com/images/thumb/4/40/King_of_Kings.png/28px-King_of_Kings.png)](/King_of_Kings "King of Kings"), [![Flag of Byzantium](https://eu4.paradoxwikis.com/images/thumb/9/96/Byzantium.png/20px-Byzantium.png)](/Byzantium "Byzantium") [Byzantium](/Byzantium "Byzantium") has a tough start but very strong ideas and missions that give claims on almost all required land.',
  },
  {
    id: 'ach_265',
    name: 'Mass Production',
    description: 'Starting as Odoyev, own one of every manufactory.',
    icon: 'https://eu4.paradoxwikis.com/images/8/88/Mass_Production.png',
    dlc: '',
    version: '1.22',
    difficulty: 'H',
    game: 'eu4',
    guideUrl: '',
    startingConditions:
      '[![Yes](https://eu4.paradoxwikis.com/images/thumb/d/da/Ledger_yes.png/28px-Ledger_yes.png)](/File:Ledger_yes.png "Yes") Playing as [![Flag of Odoyev](https://eu4.paradoxwikis.com/images/thumb/f/f4/Odoyev.png/20px-Odoyev.png)](/Odoyev "Odoyev") [Odoyev](/Odoyev "Odoyev")',
    completionRequirements:
      '[![Yes](https://eu4.paradoxwikis.com/images/thumb/d/da/Ledger_yes.png/28px-Ledger_yes.png)](/File:Ledger_yes.png "Yes") Own at least one [manufactory](/Buildings#Manufactories "Buildings") of each type',
    notes:
      '*   The new manufactories (Ramparts, Soldier\'s Households, Impressment Offices, State House) are also necessary\n*   With the [![Rule Britannia.png](https://eu4.paradoxwikis.com/images/thumb/5/5a/Rule_Britannia.png/28px-Rule_Britannia.png)](/Rule_Britannia "Rule Britannia") Rule Britannia DLC a furnace is also necessary.\n*   Building the manufactories isn\'t very hard. The hard part is surviving long enough to get to the required technology (admin tech 16 without [![Rule Britannia.png](https://eu4.paradoxwikis.com/images/thumb/5/5a/Rule_Britannia.png/28px-Rule_Britannia.png)](/Rule_Britannia "Rule Britannia") Rule Britannia and till the Enlightenment with the DLC) as well as getting provinces with the correct trade goods.',
  },
  {
    id: 'ach_266',
    name: 'Master of India',
    description: 'Own and have cores on all of India as a European nation.',
    icon: 'https://eu4.paradoxwikis.com/images/e/e0/Master_of_India.jpg',
    dlc: '',
    version: '1.1',
    difficulty: 'H',
    game: 'eu4',
    guideUrl: '',
    startingConditions:
      '[![Capital.png](https://eu4.paradoxwikis.com/images/thumb/6/6e/Capital.png/28px-Capital.png)](/Capital "Capital") Capital is in Europe',
    completionRequirements:
      '[![Province icon.png](https://eu4.paradoxwikis.com/images/thumb/1/13/Province_icon.png/28px-Province_icon.png)](/Province "Province") Own or have a non-tributary subject own all provinces in the [Indian sub-continent](/India_\\(sub-continent\\) "India (sub-continent)") (regions Deccan, Coromandel, Bengal, Hindustan and Western India).',
    notes:
      'It\'s *not* required anymore for the player to directly own all provinces inside the Indian sub-continent. Vassals and other direct subjects count as long as they are not tributaries. Coring the provinces is also no longer required.\n\nThe capital does not need to remain in Europe. Edirne is European, so the [Ottomans](/Ottomans "Ottomans") are eligible and have the best shot at a quick land rush into India.',
  },
  {
    id: 'ach_267',
    name: 'Mewar Never Changes',
    description: 'Complete the Mewar Mission Tree.',
    icon: 'https://eu4.paradoxwikis.com/images/e/e2/Mewar_Never_Changes.png',
    dlc: '',
    version: '1.26',
    difficulty: 'M',
    game: 'eu4',
    guideUrl: '',
    startingConditions:
      '*   [![No](https://eu4.paradoxwikis.com/images/thumb/5/56/Ledger_no_crop.png/28px-Ledger_no_crop.png)](/File:Ledger_no_crop.png "No") *Not* using a [random New World](/Random_New_World "Random New World")',
    completionRequirements:
      '[![Yes](https://eu4.paradoxwikis.com/images/thumb/d/da/Ledger_yes.png/28px-Ledger_yes.png)](/File:Ledger_yes.png "Yes") Has completed all [![Mission.png](https://eu4.paradoxwikis.com/images/thumb/2/29/Mission.png/24px-Mission.png)](/Missions "Missions") [Mewari missions](/Mewari_missions "Mewari missions")',
    notes:
      'This achievement is only visible if the country has [![Mission.png](https://eu4.paradoxwikis.com/images/thumb/2/29/Mission.png/24px-Mission.png)](/Missions "Missions") [Mewari missions](/Mewari_missions "Mewari missions"), but it is not required to start as [![Flag of Mewar](https://eu4.paradoxwikis.com/images/thumb/7/7d/Mewar.png/20px-Mewar.png)](/Mewar "Mewar") [Mewar](/Mewar "Mewar"). It is also possible to start as any non [end-game tag](/End-game_tag "End-game tag") and then form [![Flag of Rajputana](https://eu4.paradoxwikis.com/images/thumb/e/e8/Rajputana.png/20px-Rajputana.png)](/Rajputana "Rajputana") [Rajputana](/Rajputana "Rajputana") to get these missions.',
  },
  {
    id: 'ach_268',
    name: 'On the Rhodes Again',
    description: 'Starting as The Knights, conquer and core Constantinople, Jerusalem and Antioch.',
    icon: 'https://eu4.paradoxwikis.com/images/0/03/On_the_Rhodes_Again.png',
    dlc: '',
    version: '1.30',
    difficulty: 'H',
    game: 'eu4',
    guideUrl: '',
    startingConditions:
      '*   [![Yes](https://eu4.paradoxwikis.com/images/thumb/d/da/Ledger_yes.png/28px-Ledger_yes.png)](/File:Ledger_yes.png "Yes") Playing as [![Flag of The Knights](https://eu4.paradoxwikis.com/images/thumb/8/84/The_Knights.png/20px-The_Knights.png)](/The_Knights "The Knights") [The Knights](/The_Knights "The Knights")\n*   [![No](https://eu4.paradoxwikis.com/images/thumb/5/56/Ledger_no_crop.png/28px-Ledger_no_crop.png)](/File:Ledger_no_crop.png "No") *Not* using a [random New World](/Random_New_World "Random New World")',
    completionRequirements:
      '[![Province icon.png](https://eu4.paradoxwikis.com/images/thumb/1/13/Province_icon.png/28px-Province_icon.png)](/Province "Province") Own and core the provinces of Constantinople (151), Antioch (2313) and Jerusalem (379)\n\nExpand\n\n[![On the Rhodes Again map.png](https://eu4.paradoxwikis.com/images/thumb/5/52/On_the_Rhodes_Again_map.png/140px-On_the_Rhodes_Again_map.png)](/File:On_the_Rhodes_Again_map.png)\n\n[](/File:On_the_Rhodes_Again_map.png "Enlarge")',
    notes: '',
  },
  {
    id: 'ach_269',
    name: 'One nation to rule them all',
    description: 'As Saruhan, have at least 9 loyal vassals with at least 100 development each.',
    icon: 'https://eu4.paradoxwikis.com/images/7/7f/One_nation_to_rule_them_all.png',
    dlc: '',
    version: '1.32',
    difficulty: 'H',
    game: 'eu4',
    guideUrl: '',
    startingConditions: '',
    completionRequirements:
      '*   [![Yes](https://eu4.paradoxwikis.com/images/thumb/d/da/Ledger_yes.png/28px-Ledger_yes.png)](/File:Ledger_yes.png "Yes") Is [![Flag of Saruhan](https://eu4.paradoxwikis.com/images/thumb/6/69/Saruhan.png/20px-Saruhan.png)](/Saruhan "Saruhan") [Saruhan](/Saruhan "Saruhan")\n*   9 countries fulfill the following conditions:\n    *   is a [![Icon vassal.png](https://eu4.paradoxwikis.com/images/thumb/4/47/Vassal.png/28px-Vassal.png)](/Vassal "Vassal") vassal of [![Flag of Saruhan](https://eu4.paradoxwikis.com/images/thumb/6/69/Saruhan.png/20px-Saruhan.png)](/Saruhan "Saruhan") [Saruhan](/Saruhan "Saruhan")\n    *   has less than [![Liberty desire.png](https://eu4.paradoxwikis.com/images/thumb/f/fd/Liberty_desire.png/28px-Liberty_desire.png)](/Liberty_desire "Liberty desire") **50%** liberty desire\n    *   has at least [![Development.png](https://eu4.paradoxwikis.com/images/thumb/a/a4/Development.png/28px-Development.png)](/Development "Development") **100** development',
    notes:
      ' [![Flag of Saruhan](https://eu4.paradoxwikis.com/images/thumb/6/69/Saruhan.png/20px-Saruhan.png)](/Saruhan "Saruhan") [Saruhan](/Saruhan "Saruhan")\'s core starts under the control of the [![Flag of Ottomans](https://eu4.paradoxwikis.com/images/thumb/8/89/Ottomans.png/20px-Ottomans.png)](/Ottomans "Ottomans") [Ottomans](/Ottomans "Ottomans"). Suggested strategy: expand rapidly as you normally would with the Ottomans until you have ~1200 development. Then, plan to release-and-play as Saruhan, taking most of Otto\'s lands. To do this, you will need to release Saruhan as vassal, wait 10 years, start to annex (to designate cores), feed it land, finalize annexation, and then release-and-play. You can cheese the release-and-play by feeding past the point of loyalty and then applying all available [annexation cost](/Vassal#Cost "Vassal") reductions (Acquire Subjects mission, Influence idea, Amirs privilege, as well as any possible Policies). Make sure you wait until the last day of the month to do this, or else annexation progress will drop and you will be unable to proceed. As long as your annexation progress is above 100 on the month tick, it won\'t matter if liberty desire is over 50%.\n\nOnce you have reannexed, you will be able to release-and-play. Ideally you will then own almost all Ottoman lands, making independence relatively easy to pursue. From there, you need to obtain 9 loyal vassals (NOT marches, NOT client states) with 100+ development. Rather than directly subjugating enemies to meet the vassal count, it is suggested that the player conquer and then [release vassals](/Vassal#Releasing_a_nation "Vassal"); this avoids the forced vassalization malus. To help reduce liberty desire and thus total development needed, choose the relevant policies, and be sure to get the [Splendor abilities in the Age of Revolutions](/Ages#Abilities_4 "Ages") (Anti-Revolutionary Zeal + Loyal Subjects). Upon release, you will no longer have the Ottoman government form, and should choose [Iqta](/Monarchy#Iqta "Monarchy"). Then on your goverment tab choose Lenient Taxation, which provides another Liberty Desire reduction.\n\nNote that during the feeding of Saruhan and following your transition to playing as them, the Ottomans will likely be severely weakened and thus open to attack. Keep this in mind, perhaps securing treaties in advance or locking in allies (though too many allies for Otto will make subsequent independence harder). Ideally you will be able to secure independence support from a rival.',
  },
  {
    id: 'ach_270',
    name: 'Østindisk Kompagni Te',
    description: 'As Denmark establish Trade company and have at least 10% Tea market share.',
    icon: 'https://eu4.paradoxwikis.com/images/6/60/%C3%98stindisk_Kompagni_Te.png',
    dlc: 'or',
    version: '1.26',
    difficulty: 'E',
    game: 'eu4',
    guideUrl: '',
    startingConditions:
      '*   [![Yes](https://eu4.paradoxwikis.com/images/thumb/d/da/Ledger_yes.png/28px-Ledger_yes.png)](/File:Ledger_yes.png "Yes") Playing as [![Flag of Denmark](https://eu4.paradoxwikis.com/images/thumb/6/69/Denmark.png/20px-Denmark.png)](/Denmark "Denmark") [Denmark](/Denmark "Denmark")',
    completionRequirements:
      '*   [![Yes](https://eu4.paradoxwikis.com/images/thumb/d/da/Ledger_yes.png/28px-Ledger_yes.png)](/File:Ledger_yes.png "Yes") Is [![Flag of Denmark](https://eu4.paradoxwikis.com/images/thumb/6/69/Denmark.png/20px-Denmark.png)](/Denmark "Denmark") [Denmark](/Denmark "Denmark") *or* [![Flag of Scandinavia](https://eu4.paradoxwikis.com/images/thumb/d/db/Scandinavia.png/20px-Scandinavia.png)](/Scandinavia "Scandinavia") [Scandinavia](/Scandinavia "Scandinavia")\n*   [![Tradecompany icon.png](https://eu4.paradoxwikis.com/images/thumb/8/8d/Subject_tradecompany_icon.png/28px-Subject_tradecompany_icon.png)](/Trade_company "Trade company") Has at least one province in Asia assigned to a trade company\n*   [![Tea.png](https://eu4.paradoxwikis.com/images/thumb/5/59/Tea.png/28px-Tea.png)](/Tea "Tea") Has 10% market share in Tea',
    notes:
      'Easiest when Denmark chooses exploration ideas early to reach Southeast Asia. Then form a claim in [![Flag of Ayutthaya](https://eu4.paradoxwikis.com/images/thumb/9/9d/Ayutthaya.png/20px-Ayutthaya.png)](/Ayutthaya "Ayutthaya") [Ayutthaya](/Ayutthaya "Ayutthaya") or wait for Mingsplosion.',
  },
  {
    id: 'ach_271',
    name: 'Over a Thousand!',
    description: 'Own 1001 provinces directly.',
    icon: 'https://eu4.paradoxwikis.com/images/c/c4/Over_a_Thousand%21.png',
    dlc: '',
    version: '1.9',
    difficulty: 'H',
    game: 'eu4',
    guideUrl: '',
    startingConditions: '',
    completionRequirements:
      '[![Province icon.png](https://eu4.paradoxwikis.com/images/thumb/1/13/Province_icon.png/28px-Province_icon.png)](/Province "Province") Own 1001 provinces',
    notes:
      "Colonial provinces taken in war from other nations do not add overextension. Colonial nations won't be established as long as less than 5 provinces are cored so don't core them until you get the achievement.",
  },
  {
    id: 'ach_272',
    name: 'Pandya Empire',
    description: 'Starting as Madurai, conquer the Pandya Territories.',
    icon: 'https://eu4.paradoxwikis.com/images/f/f1/Pandya_Empire.png',
    dlc: '',
    version: '1.23',
    difficulty: 'H',
    game: 'eu4',
    guideUrl: '',
    startingConditions:
      '[![Yes](https://eu4.paradoxwikis.com/images/thumb/d/da/Ledger_yes.png/28px-Ledger_yes.png)](/File:Ledger_yes.png "Yes") Playing as [![Flag of Madurai](https://eu4.paradoxwikis.com/images/thumb/d/dd/Madurai.png/20px-Madurai.png)](/Madurai "Madurai") [Madurai](/Madurai "Madurai")',
    completionRequirements:
      '[![Province icon.png](https://eu4.paradoxwikis.com/images/thumb/1/13/Province_icon.png/28px-Province_icon.png)](/Province "Province") Own all provinces in the region of [Coromandel](/Coromandel "Coromandel") and the areas of [Malabar](/Malabar "Malabar"), [Mysore](/Mysore "Mysore"), and [Rayalaseema](/Rayalaseema "Rayalaseema")\n\nExpand\n\n[![Pandya Empire map.png](https://eu4.paradoxwikis.com/images/thumb/8/89/Pandya_Empire_map.png/140px-Pandya_Empire_map.png)](/File:Pandya_Empire_map.png)\n\n[](/File:Pandya_Empire_map.png "Enlarge")',
    notes: '',
  },
  {
    id: 'ach_273',
    name: 'Philippine Tiger',
    description: 'As Cebu, recreate the Chola Empire.',
    icon: 'https://eu4.paradoxwikis.com/images/e/e1/Philippine_Tiger.png',
    dlc: '',
    version: '1.25',
    difficulty: 'H',
    game: 'eu4',
    guideUrl: '',
    startingConditions: '',
    completionRequirements:
      '*   [![Yes](https://eu4.paradoxwikis.com/images/thumb/d/da/Ledger_yes.png/28px-Ledger_yes.png)](/File:Ledger_yes.png "Yes") Is [![Flag of Cebu](https://eu4.paradoxwikis.com/images/thumb/a/a5/Cebu.png/20px-Cebu.png)](/Cebu "Cebu") [Cebu](/Cebu "Cebu")\n*   [![Province icon.png](https://eu4.paradoxwikis.com/images/thumb/1/13/Province_icon.png/28px-Province_icon.png)](/Province "Province") Own the following provinces:\n\nExpand\n\n[![Philippine Tiger map.png](https://eu4.paradoxwikis.com/images/thumb/4/41/Philippine_Tiger_map.png/140px-Philippine_Tiger_map.png)](/File:Philippine_Tiger_map.png)\n\n[](/File:Philippine_Tiger_map.png "Enlarge")',
    notes: '',
  },
  {
    id: 'ach_274',
    name: 'Pick Your Poison',
    description: 'As Kaffa, develop in Cafa while a subject of yours owns it.',
    icon: 'https://eu4.paradoxwikis.com/images/c/ce/Pick_Your_Poison.jpg',
    dlc: '',
    version: '1.18',
    difficulty: 'H',
    game: 'eu4',
    guideUrl: '',
    startingConditions:
      '[![Yes](https://eu4.paradoxwikis.com/images/thumb/d/da/Ledger_yes.png/28px-Ledger_yes.png)](/File:Ledger_yes.png "Yes") Playing as [![Flag of Kaffa](https://eu4.paradoxwikis.com/images/thumb/2/2a/Kaffa.png/20px-Kaffa.png)](/Kaffa "Kaffa") [Kaffa](/Kaffa "Kaffa")',
    completionRequirements:
      '*   [![Yes](https://eu4.paradoxwikis.com/images/thumb/d/da/Ledger_yes.png/28px-Ledger_yes.png)](/File:Ledger_yes.png "Yes") Developed in Caffa (285).\n*   [![Province icon.png](https://eu4.paradoxwikis.com/images/thumb/1/13/Province_icon.png/28px-Province_icon.png)](/Province "Province") Any subject nation owns Caffa.',
    notes:
      'Caffa is in the Pontic Steppe region, initially owned by [![Flag of Genoa](https://eu4.paradoxwikis.com/images/thumb/f/fc/Genoa.png/20px-Genoa.png)](/Genoa "Genoa") [Genoa](/Genoa "Genoa").',
  },
  {
    id: 'ach_275',
    name: 'Prester John',
    description:
      'Starting as Ethiopia, own and have cores on Alexandria, Antioch and Constantinople as a Coptic country.',
    icon: 'https://eu4.paradoxwikis.com/images/7/75/Prester_John.png',
    dlc: '',
    version: '1.9',
    difficulty: 'H',
    game: 'eu4',
    guideUrl: 'https://eu4.paradoxwikis.com/Prester_John',
    startingConditions:
      '[![Yes](https://eu4.paradoxwikis.com/images/thumb/d/da/Ledger_yes.png/28px-Ledger_yes.png)](/File:Ledger_yes.png "Yes") Playing as [![Flag of Ethiopia](https://eu4.paradoxwikis.com/images/thumb/0/06/Ethiopia.png/20px-Ethiopia.png)](/Ethiopia "Ethiopia") [Ethiopia](/Ethiopia "Ethiopia")',
    completionRequirements:
      '*   [![Coptic.png](https://eu4.paradoxwikis.com/images/thumb/7/74/Coptic.png/28px-Coptic.png)](/Coptic "Coptic") Is Coptic\n*   [![Province icon.png](https://eu4.paradoxwikis.com/images/thumb/1/13/Province_icon.png/28px-Province_icon.png)](/Province "Province") Own and core Alexandria, Antioch and Constantinople.\n\nExpand\n\n[![Prester John Achievement Map.png](https://eu4.paradoxwikis.com/images/thumb/8/82/Prester_John_Achievement_Map.png/140px-Prester_John_Achievement_Map.png)](/File:Prester_John_Achievement_Map.png)\n\n[](/File:Prester_John_Achievement_Map.png "Enlarge")',
    notes:
      'The most challenging part is timing the war with the [![Flag of Mamluks](https://eu4.paradoxwikis.com/images/thumb/c/ca/The_Mamluks.png/20px-The_Mamluks.png)](/Mamluks "Mamluks") [Mamluks](/Mamluks "Mamluks") so that they are beatable but haven\'t lost too much land to the [![Flag of Ottomans](https://eu4.paradoxwikis.com/images/thumb/8/89/Ottomans.png/20px-Ottomans.png)](/Ottomans "Ottomans") [Ottomans](/Ottomans "Ottomans"). Once you have a border on the Mediterranean, steal or trade for maps to see and ally European majors for fighting the Turks.',
  },
  {
    id: 'ach_276',
    name: 'Protect the Secret',
    description:
      'As Yemen, prevent any European Nation from owning a Coffee-producing province in the Old World until 1700.',
    icon: 'https://eu4.paradoxwikis.com/images/5/50/Protect_the_Secret.png',
    dlc: '',
    version: '1.23',
    difficulty: 'H',
    game: 'eu4',
    guideUrl: '',
    startingConditions:
      '[![No](https://eu4.paradoxwikis.com/images/thumb/5/56/Ledger_no_crop.png/28px-Ledger_no_crop.png)](/File:Ledger_no_crop.png "No") *Not* using a [random New World](/Random_New_World "Random New World")',
    completionRequirements:
      '*   [![Culture icon.png](https://eu4.paradoxwikis.com/images/thumb/2/29/Culture_icon.png/28px-Culture_icon.png)](/Culture "Culture") Culture is *Yemeni*\n*   [![Yes](https://eu4.paradoxwikis.com/images/thumb/d/da/Ledger_yes.png/28px-Ledger_yes.png)](/File:Ledger_yes.png "Yes") Is year 1700 or later\n*   [![Yes](https://eu4.paradoxwikis.com/images/thumb/d/da/Ledger_yes.png/28px-Ledger_yes.png)](/File:Ledger_yes.png "Yes") Is [![Flag of Yemen](https://eu4.paradoxwikis.com/images/thumb/f/fc/Yemen.png/20px-Yemen.png)](/Yemen "Yemen") [Yemen](/Yemen "Yemen")\n*   [![Coffee.png](https://eu4.paradoxwikis.com/images/thumb/e/e9/Coffee.png/28px-Coffee.png)](/Coffee "Coffee") No coffee-producing provinces in the continents of Asia, Africa, or Oceania are held by a country with its capital in Europe.',
    notes:
      'Conditions may be fulfilled any time after 1699, and do not need to be fulfilled before that time. Yemen is reformable via culture shift, so this is very attainable playing as any country. Can be combined with the [Arabian Coffee](#Arabian_Coffee) achievement. Do not form [![Flag of Arabia](https://eu4.paradoxwikis.com/images/thumb/e/ed/Arabia.png/20px-Arabia.png)](/Arabia "Arabia") [Arabia](/Arabia "Arabia")',
  },
  {
    id: 'ach_277',
    name: 'Qing of China',
    description: 'Become Chinese Emperor as Qing and own all of China.',
    icon: 'https://eu4.paradoxwikis.com/images/4/4e/Qing_of_China.png',
    dlc: '',
    version: '1.20',
    difficulty: 'M',
    game: 'eu4',
    guideUrl: '',
    startingConditions: '',
    completionRequirements:
      '*   [![Yes](https://eu4.paradoxwikis.com/images/thumb/d/da/Ledger_yes.png/28px-Ledger_yes.png)](/File:Ledger_yes.png "Yes") Is [![Flag of Qing](https://eu4.paradoxwikis.com/images/thumb/9/95/Qing.png/20px-Qing.png)](/Qing "Qing") [Qing](/Qing "Qing")\n*   [![Emperor of china icon.png](https://eu4.paradoxwikis.com/images/thumb/2/25/Emperor_of_china_icon.png/28px-Emperor_of_china_icon.png)](/Emperor_of_China "Emperor of China") Is Emperor of China\n*   [![Province icon.png](https://eu4.paradoxwikis.com/images/thumb/1/13/Province_icon.png/28px-Province_icon.png)](/Province "Province") Own all provinces in the China super region.',
    notes: '',
  },
  {
    id: 'ach_278',
    name: 'Sailor Mon',
    description: 'As Pegu, have at least 100,000 sailors.',
    icon: 'https://eu4.paradoxwikis.com/images/9/93/Sailor_Mon.jpg',
    dlc: '',
    version: '1.16',
    difficulty: 'H',
    game: 'eu4',
    guideUrl: '',
    startingConditions:
      '[![Yes](https://eu4.paradoxwikis.com/images/thumb/d/da/Ledger_yes.png/28px-Ledger_yes.png)](/File:Ledger_yes.png "Yes") Playing as [![Flag of Pegu](https://eu4.paradoxwikis.com/images/thumb/3/3b/Pegu.png/20px-Pegu.png)](/Pegu "Pegu") [Pegu](/Pegu "Pegu")',
    completionRequirements:
      '[![Sailors.png](https://eu4.paradoxwikis.com/images/thumb/8/8f/Sailors.png/28px-Sailors.png)](/Sailors "Sailors") Have at least 100,000 sailors',
    notes:
      "The achievement needs 100k sailors in the sailor pool. The maximum sailors don't matter. Exploiting production development in coastal provinces generates sailors even if the maximum has already been reached, but this reduces the maximum, so it is only useful if 100k can actually be reached in this way.",
  },
  {
    id: 'ach_279',
    name: 'Spaghetti Western',
    description: 'Starting as Bologna, become Mexico or Texas.',
    icon: 'https://eu4.paradoxwikis.com/images/9/9f/Spaghetti_Western.png',
    dlc: '',
    version: '1.30',
    difficulty: 'H',
    game: 'eu4',
    guideUrl: 'https://eu4.paradoxwikis.com/Spaghetti_Western',
    startingConditions:
      '*   [![Yes](https://eu4.paradoxwikis.com/images/thumb/d/da/Ledger_yes.png/28px-Ledger_yes.png)](/File:Ledger_yes.png "Yes") Playing as [![Flag of Bologna](https://eu4.paradoxwikis.com/images/thumb/8/8d/Bologna.png/20px-Bologna.png)](/Bologna "Bologna") [Bologna](/Bologna "Bologna")\n*   [![No](https://eu4.paradoxwikis.com/images/thumb/5/56/Ledger_no_crop.png/28px-Ledger_no_crop.png)](/File:Ledger_no_crop.png "No") *Not* using a [random New World](/Random_New_World "Random New World")',
    completionRequirements:
      '[![Yes](https://eu4.paradoxwikis.com/images/thumb/d/da/Ledger_yes.png/28px-Ledger_yes.png)](/File:Ledger_yes.png "Yes") Is [![Flag of Mexico](https://eu4.paradoxwikis.com/images/thumb/0/0a/Mexico.png/20px-Mexico.png)](/Mexico "Mexico") [Mexico](/Mexico "Mexico") *or* [![Flag of Texas](https://eu4.paradoxwikis.com/images/thumb/3/35/Texas.png/20px-Texas.png)](/Texas "Texas") [Texas](/Texas "Texas") *or* [![Flag of Sonora](https://eu4.paradoxwikis.com/images/thumb/d/d8/Sonora.png/20px-Sonora.png)](/Sonora "Sonora") [Sonora](/Sonora "Sonora")',
    notes:
      'Easiest to do by forming a colonial nation in the Mexico colonial region (to form Mexico) or the Rio Grande region (to form Texas) and then release and play as them which requires [![Conquest of Paradise.png](https://eu4.paradoxwikis.com/images/thumb/3/31/Conquest_of_Paradise.png/28px-Conquest_of_Paradise.png)](/Conquest_of_Paradise "Conquest of Paradise") [Conquest of Paradise](/Conquest_of_Paradise "Conquest of Paradise"). But it is also possible to form [![Flag of Mexico](https://eu4.paradoxwikis.com/images/thumb/0/0a/Mexico.png/20px-Mexico.png)](/Mexico "Mexico") [Mexico](/Mexico "Mexico") or [![Flag of Texas](https://eu4.paradoxwikis.com/images/thumb/3/35/Texas.png/20px-Texas.png)](/Texas "Texas") [Texas](/Texas "Texas") by [moving your capital](/Capital#Moving_the_capital "Capital") to the previously mentioned (colonial) region before a colonial nation forms. Then no DLC is necessary.',
  },
  {
    id: 'ach_280',
    name: 'Spain is the Emperor',
    description: 'Become the Emperor of the Holy Roman Empire as Spain.',
    icon: 'https://eu4.paradoxwikis.com/images/4/4f/Spain_is_the_Emperor.jpg',
    dlc: '',
    version: '1.1',
    difficulty: 'M',
    game: 'eu4',
    guideUrl: '',
    startingConditions:
      '[![No](https://eu4.paradoxwikis.com/images/thumb/5/56/Ledger_no_crop.png/28px-Ledger_no_crop.png)](/File:Ledger_no_crop.png "No") Not the emperor of the [Holy Roman Empire](/Holy_Roman_Empire "Holy Roman Empire")',
    completionRequirements:
      '*   [![Yes](https://eu4.paradoxwikis.com/images/thumb/d/da/Ledger_yes.png/28px-Ledger_yes.png)](/File:Ledger_yes.png "Yes") Is [![Flag of Spain](https://eu4.paradoxwikis.com/images/thumb/5/58/Spain.png/20px-Spain.png)](/Spain "Spain") [Spain](/Spain "Spain")\n*   [![Imperial authority.png](https://eu4.paradoxwikis.com/images/thumb/4/46/Imperial_authority.png/28px-Imperial_authority.png)](/Imperial_authority "Imperial authority") Is the emperor of the [Holy Roman Empire](/Holy_Roman_Empire "Holy Roman Empire")',
    notes:
      'Easiest to do as [![Flag of Aragon](https://eu4.paradoxwikis.com/images/thumb/6/61/Aragon.png/20px-Aragon.png)](/Aragon "Aragon") [Aragon](/Aragon "Aragon") by allying [![Flag of Austria](https://eu4.paradoxwikis.com/images/thumb/7/7f/Austria.png/20px-Austria.png)](/Austria "Austria") [Austria](/Austria "Austria") in 1444, abandoning your Personal Union with [![Flag of Naples](https://eu4.paradoxwikis.com/images/thumb/b/b8/Naples.png/20px-Naples.png)](/Naples "Naples") [Naples](/Naples "Naples"), and returning 1-2 provinces in Sicily to get just below 200 development. This way, you can add your provinces to the HRE so becoming the Emperor is much easier. Once you get to Administrative Technology 10, and the Iberian Wedding event has happened, form Spain diplomatically. Wait until you\'re already Emperor or you\'ll have to leave the HRE and it will become much harder to do again.',
  },
  {
    id: 'ach_281',
    name: 'Spice Girls',
    description: 'Having a female ruler, have active trading bonuses for Cloves, Spices, Salt and Sugar.',
    icon: 'https://eu4.paradoxwikis.com/images/e/ed/Spice_Girls.jpg',
    dlc: '',
    version: '1.31',
    difficulty: 'M',
    game: 'eu4',
    guideUrl: '',
    startingConditions:
      '*   [![No](https://eu4.paradoxwikis.com/images/thumb/5/56/Ledger_no_crop.png/28px-Ledger_no_crop.png)](/File:Ledger_no_crop.png "No") *Not* using a [random New World](/Random_New_World "Random New World")',
    completionRequirements:
      '*   [![Yes](https://eu4.paradoxwikis.com/images/thumb/d/da/Ledger_yes.png/28px-Ledger_yes.png)](/File:Ledger_yes.png "Yes") Have a female ruler\n*   [![Cloves.png](https://eu4.paradoxwikis.com/images/thumb/5/5d/Cloves.png/28px-Cloves.png)](/Cloves "Cloves") Has country modifier *Trading in Cloves*\n*   [![Spices.png](https://eu4.paradoxwikis.com/images/thumb/9/94/Spices.png/28px-Spices.png)](/Spices "Spices") Has country modifier *Trading in Spices*\n*   [![Salt.png](https://eu4.paradoxwikis.com/images/thumb/7/77/Salt.png/28px-Salt.png)](/Salt "Salt") Has country modifier *Trading in Salt*\n*   [![Sugar.png](https://eu4.paradoxwikis.com/images/thumb/a/a9/Sugar.png/28px-Sugar.png)](/Sugar "Sugar") Has country modifier *Trading in Sugar*',
    notes:
      '*   This achievement is only visible if the [![Leviathan.png](https://eu4.paradoxwikis.com/images/thumb/0/0a/Leviathan.png/28px-Leviathan.png)](/Leviathan "Leviathan") Leviathan DLC is active, but it can be achieved even without the DLC.\n*   Having a Queen Regency with a male heir is sufficient.',
  },
  {
    id: 'ach_282',
    name: 'Stern des Südens',
    description: 'Form Bavaria starting as München and have your Subject Bremen own Werder.',
    icon: 'https://eu4.paradoxwikis.com/images/e/ed/Stern_des_S%C3%BCdens.png',
    dlc: '',
    version: '1.30',
    difficulty: 'H',
    game: 'eu4',
    guideUrl: '',
    startingConditions:
      '*   [![Yes](https://eu4.paradoxwikis.com/images/thumb/d/da/Ledger_yes.png/28px-Ledger_yes.png)](/File:Ledger_yes.png "Yes") Playing as [![Flag of Munich](https://eu4.paradoxwikis.com/images/thumb/4/4a/Munich.png/20px-Munich.png)](/Munich "Munich") [Munich](/Munich "Munich")\n*   [![No](https://eu4.paradoxwikis.com/images/thumb/5/56/Ledger_no_crop.png/28px-Ledger_no_crop.png)](/File:Ledger_no_crop.png "No") *Not* using a [random New World](/Random_New_World "Random New World")',
    completionRequirements:
      '*   [![Yes](https://eu4.paradoxwikis.com/images/thumb/d/da/Ledger_yes.png/28px-Ledger_yes.png)](/File:Ledger_yes.png "Yes") Is [![Flag of Bavaria](https://eu4.paradoxwikis.com/images/thumb/b/b3/Bavaria.png/20px-Bavaria.png)](/Bavaria "Bavaria") [Bavaria](/Bavaria "Bavaria")\n*    [![Flag of Bremen](https://eu4.paradoxwikis.com/images/thumb/c/c4/Bremen.png/20px-Bremen.png)](/Bremen "Bremen") [Bremen](/Bremen "Bremen") is a subject of [![Flag of Bavaria](https://eu4.paradoxwikis.com/images/thumb/b/b3/Bavaria.png/20px-Bavaria.png)](/Bavaria "Bavaria") [Bavaria](/Bavaria "Bavaria")\n*    [![Flag of Bremen](https://eu4.paradoxwikis.com/images/thumb/c/c4/Bremen.png/20px-Bremen.png)](/Bremen "Bremen") [Bremen](/Bremen "Bremen") owns Werder (2778)\n\nExpand\n\n[![Stern des Südens map.png](https://eu4.paradoxwikis.com/images/thumb/0/05/Stern_des_S%C3%BCdens_map.png/140px-Stern_des_S%C3%BCdens_map.png)](/File:Stern_des_S%C3%BCdens_map.png)\n\n[](/File:Stern_des_S%C3%BCdens_map.png "Enlarge")',
    notes:
      'Werder (2778) is in the Horn of Africa region and owned by [![Flag of Marehan](https://eu4.paradoxwikis.com/images/thumb/a/a6/Marehan.png/20px-Marehan.png)](/Marehan "Marehan") [Marehan](/Marehan "Marehan") at the start of the game. As Munich, take your time consolidating into [![Flag of Bavaria](https://eu4.paradoxwikis.com/images/thumb/b/b3/Bavaria.png/20px-Bavaria.png)](/Bavaria "Bavaria") [Bavaria](/Bavaria "Bavaria"). If you can, befriend the emperor and/or electors to make your life within the HRE easier. Once you have a border with [![Flag of Bremen](https://eu4.paradoxwikis.com/images/thumb/c/c4/Bremen.png/20px-Bremen.png)](/Bremen "Bremen") [Bremen](/Bremen "Bremen"), or coastal provinces in coring range of Bremen, look for war opportunities which Bremen will be called ito as an ally. As they are a free city, it will be much harder if you declare directly on them (as the Emperor will defend free cities). Annex Bremen in a separate peace and release them as your vassal (you can\'t vassalize a free city in a peace deal). Afterwards, expand in power so that you can combat your most powerful neighbours - Ottomans, Spain, France, etc. Make sure to give Bremen land, either in the direction of the Ottomans or in the direction of Spain. You will have to fight your way through at least one, feeding Bremen provinces to "snake" their land down to Werder (this is because vassals need adjacent land or sea tiles to be given provinces and do not care about coring distance/colonial range). The least time-consuming method would be to give them a province per sea tile starting from the Mediterranean, down through the [![Flag of Mamluks](https://eu4.paradoxwikis.com/images/thumb/c/ca/The_Mamluks.png/20px-The_Mamluks.png)](/Mamluks "Mamluks") [Mamluks](/Mamluks "Mamluks") to the Red Sea coast, and finally down to Werder.',
  },
  {
    id: 'ach_283',
    name: 'Stiff Upper Lippe',
    description: 'As Lippe, own all of the British Isles.',
    icon: 'https://eu4.paradoxwikis.com/images/7/7a/Stiff_Upper_Lippe.png',
    dlc: '',
    version: '1.30',
    difficulty: 'H',
    game: 'eu4',
    guideUrl: '',
    startingConditions:
      '[![No](https://eu4.paradoxwikis.com/images/thumb/5/56/Ledger_no_crop.png/28px-Ledger_no_crop.png)](/File:Ledger_no_crop.png "No") *Not* using a [random New World](/Random_New_World "Random New World")',
    completionRequirements:
      '*   [![Yes](https://eu4.paradoxwikis.com/images/thumb/d/da/Ledger_yes.png/28px-Ledger_yes.png)](/File:Ledger_yes.png "Yes") Is [![Flag of Lippe](https://eu4.paradoxwikis.com/images/thumb/7/71/Lippe.png/20px-Lippe.png)](/Lippe "Lippe") [Lippe](/Lippe "Lippe")\n*   [![Province icon.png](https://eu4.paradoxwikis.com/images/thumb/1/13/Province_icon.png/28px-Province_icon.png)](/Province "Province") Own all provinces in [Britain](/European_regions#Britain "European regions")\n\nExpand\n\n[![](https://eu4.paradoxwikis.com/images/thumb/3/3e/Stiff_Upper_Lippe_map.png/140px-Stiff_Upper_Lippe_map.png)](/File:Stiff_Upper_Lippe_map.png)\n\n[](/File:Stiff_Upper_Lippe_map.png "Enlarge")\n\nBritain region',
    notes:
      'Lippe doesn\'t exist in 1444, but it can be released from its core province Ravensberg (4775) which is owned by [![Flag of Berg](https://eu4.paradoxwikis.com/images/thumb/d/dd/Berg.png/20px-Berg.png)](/Berg "Berg") [Berg](/Berg "Berg"). By first releasing Lippe as a regular vassal, giving them provinces to core and annexing them gives more land when releasing them again.\n\nCan be done as part of a HRE campaign. Ensure Lippe exists before you pass "Revoke the Privilegia". Feed all of Britain\'s cores to your Lippe vassal and then either annex Lippe or pass the final reform "Renovatio Imperii", then release and play as Lippe, earning you the achievement.',
  },
  {
    id: 'ach_284',
    name: 'Sun Invasion',
    description: 'As the Madyas, own and have cores on Tepeacac, Mexico, Tullucan and Huastec.',
    icon: 'https://eu4.paradoxwikis.com/images/a/a3/Sun_Invasion.png',
    dlc: '',
    version: '1.25',
    difficulty: 'M',
    game: 'eu4',
    guideUrl: '',
    startingConditions: '',
    completionRequirements:
      '*   [![Yes](https://eu4.paradoxwikis.com/images/thumb/d/da/Ledger_yes.png/28px-Ledger_yes.png)](/File:Ledger_yes.png "Yes") Is [![Flag of Madyas](https://eu4.paradoxwikis.com/images/thumb/e/e9/Madyas.png/20px-Madyas.png)](/Madyas "Madyas") [Madyas](/Madyas "Madyas")\n*   [![Province icon.png](https://eu4.paradoxwikis.com/images/thumb/1/13/Province_icon.png/28px-Province_icon.png)](/Province "Province") Own and core the provinces of Tepeacac (2628), Mexico (852), Tullucan (2626) and Tlapacoyan(853, formerly called Huastec).\n\nExpand\n\n[![Sun Invasion map.png](https://eu4.paradoxwikis.com/images/a/a0/Sun_Invasion_map.png)](/File:Sun_Invasion_map.png)',
    notes:
      'You need to directly own and core the target provinces, and not through your colonial nation. There are several ways to achieve this:\n\nMove your capital city to North America before a colonial nation forms.\n\nGet a colonial nation in one of the colonial regions adjacent to Mexico and grant them a chain of colonized or conquered provinces in Mexico up to the achievement provinces with the help of the grant province subject interaction(or by transferring occupations in a war if they are on the same continent as the capital of the CN). The achievement provinces can be cored as soon as the colonial nation has cored a province next to them.\n\nVassalize a native, take land from some other native including the needed ones and a chain of provinces leading to the coast. Core one coastal province to be able to start coring the 4 achievement provinces. To avoid forming a colonial nation, the cored coastal province then has to be given to the vassal.\n\nUse the [![Ab no distance for core.png](https://eu4.paradoxwikis.com/images/thumb/0/08/Ab_no_distance_for_core.png/24px-Ab_no_distance_for_core.png)](/File:Ab_no_distance_for_core.png) Unrestricted Conquest age ability from the [![Age of Revolutions.png](https://eu4.paradoxwikis.com/images/thumb/5/59/Age_of_Revolutions.png/24px-Age_of_Revolutions.png)](/Age_of_Revolutions "Age of Revolutions") Age of Revolutions.\n\nSimply annexing a vassal in the region won\'t fire the achievement.',
  },
  {
    id: 'ach_285',
    name: 'Stardust Crusaders',
    description: 'As Japan have the Land of the Christian Sun reform while Palestine and Cairo are Christian under us.',
    icon: 'https://eu4.paradoxwikis.com/images/d/d5/Stardust_Crusaders.png',
    dlc: '',
    version: '1.35',
    difficulty: 'M',
    game: 'eu4',
    guideUrl: '',
    startingConditions: '',
    completionRequirements:
      '*   [![Yes](https://eu4.paradoxwikis.com/images/thumb/d/da/Ledger_yes.png/28px-Ledger_yes.png)](/File:Ledger_yes.png "Yes") Is [![Flag of Japan](https://eu4.paradoxwikis.com/images/thumb/f/fc/Japan.png/20px-Japan.png)](/Japan "Japan") [Japan](/Japan "Japan")\n*   [![Government monarchy.png](https://eu4.paradoxwikis.com/images/thumb/4/4d/Government_monarchy.png/28px-Government_monarchy.png)](/Monarchy "Monarchy") Has enacted the [Land of the Christian Sun](/Land_of_the_Christian_Sun "Land of the Christian Sun") government reform\n*   [![Missionaries.png](https://eu4.paradoxwikis.com/images/thumb/a/ad/Missionaries.png/28px-Missionaries.png)](/Missionary "Missionary") The Palestine area and the province Cairo (361) have a [Christian](/Christian "Christian") religion and are owned by this country',
    notes:
      'To get the [Land of the Christian Sun](/Land_of_the_Christian_Sun "Land of the Christian Sun") government reform, it is mandatory to get the open outcome in the incident [Spread of Christianity](/Eastern_denominations#Spread_of_Christianity "Eastern denominations").',
  },
  {
    id: 'ach_286',
    name: 'Sworn Fealty',
    description: 'Starting as an Arabian Tribal Federation, unite Arabia and have Maximum tribal Allegiance.',
    icon: 'https://eu4.paradoxwikis.com/images/6/6e/Sworn_Fealty.png',
    dlc: '',
    version: '1.23',
    difficulty: 'H',
    game: 'eu4',
    guideUrl: '',
    startingConditions:
      '*   [![Culture icon.png](https://eu4.paradoxwikis.com/images/thumb/2/29/Culture_icon.png/28px-Culture_icon.png)](/Culture "Culture") Culture group is *Levantine*\n*   [![Primary culture.png](https://eu4.paradoxwikis.com/images/thumb/e/e1/Primary_culture.png/28px-Primary_culture.png)](/Primary_culture "Primary culture") Culture is not *Turkish*\n*   [![Government tribal.png](https://eu4.paradoxwikis.com/images/thumb/a/a5/Government_tribal.png/28px-Government_tribal.png)](/Tribal_government "Tribal government") Has the [Tribal Federation](/Tribal_Federation "Tribal Federation") government reform',
    completionRequirements:
      '*   [![Yes](https://eu4.paradoxwikis.com/images/thumb/d/da/Ledger_yes.png/28px-Ledger_yes.png)](/File:Ledger_yes.png "Yes") Is [![Flag of Arabia](https://eu4.paradoxwikis.com/images/thumb/e/ed/Arabia.png/20px-Arabia.png)](/Arabia "Arabia") [Arabia](/Arabia "Arabia")\n*   [![Yes](https://eu4.paradoxwikis.com/images/thumb/d/da/Ledger_yes.png/28px-Ledger_yes.png)](/File:Ledger_yes.png "Yes") Have [![Tribal allegiance.png](https://eu4.paradoxwikis.com/images/thumb/7/75/Yearly_tribal_allegiance.png/24px-Yearly_tribal_allegiance.png)](/Tribal_allegiance "Tribal allegiance") **100** [Tribal Allegiance](/Tribal_government#Tribal_allegiance "Tribal government")',
    notes:
      'Possible starts are [![Flag of Anizah](https://eu4.paradoxwikis.com/images/thumb/9/90/Anizah.png/20px-Anizah.png)](/Anizah "Anizah") [Anizah](/Anizah "Anizah"), [![Flag of Dawasir](https://eu4.paradoxwikis.com/images/thumb/f/ff/Dawasir.png/20px-Dawasir.png)](/Dawasir "Dawasir") [Dawasir](/Dawasir "Dawasir"), [![Flag of Fadl](https://eu4.paradoxwikis.com/images/thumb/3/34/Fadl.png/20px-Fadl.png)](/Fadl "Fadl") [Fadl](/Fadl "Fadl"), [![Flag of Najd](https://eu4.paradoxwikis.com/images/thumb/c/c9/Najd.png/20px-Najd.png)](/Najd "Najd") [Najd](/Najd "Najd"), [![Flag of Najran](https://eu4.paradoxwikis.com/images/thumb/5/50/Najran.png/20px-Najran.png)](/Najran "Najran") [Najran](/Najran "Najran"), [![Flag of Shammar](https://eu4.paradoxwikis.com/images/thumb/3/34/Shammar.png/20px-Shammar.png)](/Shammar "Shammar") [Shammar](/Shammar "Shammar") and [![Flag of Yas](https://eu4.paradoxwikis.com/images/thumb/d/d3/Yas.png/20px-Yas.png)](/Yas "Yas") [Yas](/Yas "Yas").\n\nThe only way to get Tribal Allegiance within the constraints of this achievement is by keeping the [Tribal Federation](/Tribal_Federation "Tribal Federation") government reform. This reform *cannot* be selected again after losing it, so it is mandatory to *never* switch government types (e.g. with one of the tier 6 government reforms or via the first option of the Arabian mission event [A New Caliphate](/Arabian_events#A_New_Caliphate "Arabian events")) or do something else which gives a different tier 1 reform.\n\nTo get [![Tribal allegiance.png](https://eu4.paradoxwikis.com/images/thumb/7/75/Yearly_tribal_allegiance.png/24px-Yearly_tribal_allegiance.png)](/Tribal_allegiance "Tribal allegiance") [Tribal Allegiance](/Tribal_government#Tribal_allegiance "Tribal government") quickly as a large nation, humiliate rivals and allow enemies to rebuild armies so you can wipe them for prestige (since battle prestige gives Tribal Allegiance). The Offensive idea group is useful as it doubles prestige gain from battle victories. The Tier 6 reform [Tribal Unity](/Tribal_government#Tribal_Unity "Tribal government"), as well as both [monuments](/Great_project#Pyramid_of_Cheops "Great project") in Cairo at magnificent tier, give [![Tribal allegiance.png](https://eu4.paradoxwikis.com/images/thumb/7/75/Yearly_tribal_allegiance.png/24px-Yearly_tribal_allegiance.png)](/Tribal_allegiance "Tribal allegiance") **+1** yearly Tribal allegiance each, which will help to offset the loss of Tribal Allegiance due to development (capped at **\\-0.25** monthly at 1000 development).',
  },
  {
    id: 'ach_287',
    name: 'Terra Mariana',
    description: 'As Riga, own or have a subject own the Baltic region.',
    icon: 'https://eu4.paradoxwikis.com/images/8/84/Terra_Mariana.jpg',
    dlc: '',
    version: '1.14',
    difficulty: 'H',
    game: 'eu4',
    guideUrl: 'https://eu4.paradoxwikis.com/Terra_Mariana',
    startingConditions:
      '[![Yes](https://eu4.paradoxwikis.com/images/thumb/d/da/Ledger_yes.png/28px-Ledger_yes.png)](/File:Ledger_yes.png "Yes") Playing as [![Flag of Riga](https://eu4.paradoxwikis.com/images/thumb/4/4c/Riga.png/20px-Riga.png)](/Riga "Riga") [Riga](/Riga "Riga")',
    completionRequirements:
      '*   [![No](https://eu4.paradoxwikis.com/images/thumb/5/56/Ledger_no_crop.png/28px-Ledger_no_crop.png)](/File:Ledger_no_crop.png "No") *Not* playing as a [released vassal](/Vassal#Release_a_nation "Vassal")\n*   [![Yes](https://eu4.paradoxwikis.com/images/thumb/d/da/Ledger_yes.png/28px-Ledger_yes.png)](/File:Ledger_yes.png "Yes") Is [![Flag of Riga](https://eu4.paradoxwikis.com/images/thumb/4/4c/Riga.png/20px-Riga.png)](/Riga "Riga") [Riga](/Riga "Riga")\n*   [![Province icon.png](https://eu4.paradoxwikis.com/images/thumb/1/13/Province_icon.png/28px-Province_icon.png)](/Province "Province") All provinces in the [Baltic](/Baltic "Baltic") region are owned by the player\'s country *or* its non-tributary [subjects](/Subjects "Subjects").',
    notes: '',
  },
  {
    id: 'ach_288',
    name: "That's a Silk Road",
    description: 'Own or have a subject own all provinces in the world producing silk.',
    icon: 'https://eu4.paradoxwikis.com/images/2/29/That%27s_a_Silk_Road.jpg',
    dlc: '',
    version: '1.8',
    difficulty: 'H',
    game: 'eu4',
    guideUrl: '',
    startingConditions: '',
    completionRequirements:
      '[![Silk.png](https://eu4.paradoxwikis.com/images/thumb/8/83/Silk.png/28px-Silk.png)](/Silk "Silk") All provinces with silk are owned by the player\'s country or its non-tributary [subjects](/Subjects "Subjects").',
    notes:
      'Silk provinces stretch from Granada to Kyoto, with concentrations in the Persia, India and South China regions. With [![Golden Century.png](https://eu4.paradoxwikis.com/images/thumb/b/bb/Golden_Century.png/28px-Golden_Century.png)](/Golden_Century "Golden Century") Golden Century, [![Flag of Aragon](https://eu4.paradoxwikis.com/images/thumb/6/61/Aragon.png/20px-Aragon.png)](/Aragon "Aragon") [Aragon](/Aragon "Aragon") has a mission that makes Valencia produce silk. With [![Emperor](https://eu4.paradoxwikis.com/images/thumb/c/c5/Emperor.png/28px-Emperor.png)](/Emperor_\\(DLC\\) "Emperor") Emperor, [![Flag of Milan](https://eu4.paradoxwikis.com/images/thumb/d/d6/Milan.png/20px-Milan.png)](/Milan "Milan") [Milan](/Milan "Milan") has a mission that makes Como produce silk.',
  },
  {
    id: 'ach_289',
    name: 'The 52 Garhs',
    description: 'As Garhwal own and maintain 52 forts without going into debt.',
    icon: 'https://eu4.paradoxwikis.com/images/5/55/The_52_Garhs.png',
    dlc: '',
    version: '1.22',
    difficulty: 'H',
    game: 'eu4',
    guideUrl: '',
    startingConditions:
      '[![Yes](https://eu4.paradoxwikis.com/images/thumb/d/da/Ledger_yes.png/28px-Ledger_yes.png)](/File:Ledger_yes.png "Yes") Playing as [![Flag of Garhwal](https://eu4.paradoxwikis.com/images/thumb/d/dd/Garhwal.png/20px-Garhwal.png)](/Garhwal "Garhwal") [Garhwal](/Garhwal "Garhwal")',
    completionRequirements:
      '*   [![Yes](https://eu4.paradoxwikis.com/images/thumb/d/da/Ledger_yes.png/28px-Ledger_yes.png)](/File:Ledger_yes.png "Yes") Has no loans\n*   [![Fort level.png](https://eu4.paradoxwikis.com/images/thumb/a/a0/Fort_level.png/28px-Fort_level.png)](/Fort_level "Fort level") Own at least 52 forts (level 2)',
    notes: '',
  },
  {
    id: 'ach_290',
    name: 'The Animal Kingdom',
    description: 'As Manipur, unite the Bengal region and convert it to Animism.',
    icon: 'https://eu4.paradoxwikis.com/images/3/35/The_Animal_Kingdom.jpg',
    dlc: '',
    version: '1.16',
    difficulty: 'VH',
    game: 'eu4',
    guideUrl: '',
    startingConditions:
      '[![Yes](https://eu4.paradoxwikis.com/images/thumb/d/da/Ledger_yes.png/28px-Ledger_yes.png)](/File:Ledger_yes.png "Yes") Playing as [![Flag of Manipur](https://eu4.paradoxwikis.com/images/thumb/7/71/Manipur.png/20px-Manipur.png)](/Manipur "Manipur") [Manipur](/Manipur "Manipur")',
    completionRequirements:
      '*   [![Province icon.png](https://eu4.paradoxwikis.com/images/thumb/1/13/Province_icon.png/28px-Province_icon.png)](/Province "Province") All provinces in the [Bengal](/Indian_regions "Indian regions") region are owned by the player\'s country *or* its non-tributary [subjects](/Subjects "Subjects").\n*   [![Animism](https://eu4.paradoxwikis.com/images/thumb/1/18/Animist.png/28px-Animist.png)](/Animist "Animist") All provinces in the Bengal region are Animist',
    notes:
      'As soon as you can, take on your western neighbours, [![Flag of Kachar](https://eu4.paradoxwikis.com/images/thumb/3/3e/Kachar.png/20px-Kachar.png)](/Kachar "Kachar") [Kachar](/Kachar "Kachar") and/or [![Flag of Tripura](https://eu4.paradoxwikis.com/images/thumb/9/94/Tripura.png/20px-Tripura.png)](/Tripura "Tripura") [Tripura](/Tripura "Tripura"). You will not have much luck east from game start, as Ava will guard it\'s tributaries. Best option is to not conquer both provinces, but to take one as a vassal - and a second OPM vassal in india as soon as possible as well. You can force them to be animist and feed them Indian culture provinces that you conquer. Allies are hard to come by, and vassals will be obliged to help you, pay you, give you extra force limit, etc.. Look for an opportunity to eat nations up north such as Assam, Sadiya, Mong Kawng, and Koch before [![Flag of Bengal](https://eu4.paradoxwikis.com/images/thumb/c/c6/Bengal.png/20px-Bengal.png)](/Bengal "Bengal") [Bengal](/Bengal "Bengal") annexes them or [![Flag of Ming](https://eu4.paradoxwikis.com/images/thumb/a/a5/Ming.png/20px-Ming.png)](/Ming "Ming") [Ming](/Ming "Ming") makes them a tributary. Delay becoming a tributary of Ming as long as possible (or never if you can), but do not be afraid to use it as an inroad for expansion east as Ming will have a lot of tributary states in that direction. Once you are set up, it\'s the same as any other OPM-to-#1-Great-Power game. Get religious ideas to make conversions faster, especially against Islamic provinces.',
  },
  {
    id: 'ach_291',
    name: 'The Chrysanthemum Throne',
    description: 'Unite Japan as a Daimyo.',
    icon: 'https://eu4.paradoxwikis.com/images/2/2e/The_Chrysanthemum_Throne.jpg',
    dlc: '',
    version: '1.1',
    difficulty: 'M',
    game: 'eu4',
    guideUrl: 'https://eu4.paradoxwikis.com/The_Chrysanthemum_Throne',
    startingConditions:
      '[![Government monarchy.png](https://eu4.paradoxwikis.com/images/thumb/4/4d/Government_monarchy.png/28px-Government_monarchy.png)](/Monarchy "Monarchy") Has the [Daimyo](/Daimyo "Daimyo") government reform',
    completionRequirements:
      '*   [![Yes](https://eu4.paradoxwikis.com/images/thumb/d/da/Ledger_yes.png/28px-Ledger_yes.png)](/File:Ledger_yes.png "Yes") Is [![Flag of Japan](https://eu4.paradoxwikis.com/images/thumb/f/fc/Japan.png/20px-Japan.png)](/Japan "Japan") [Japan](/Japan "Japan")\n*   [![Province icon.png](https://eu4.paradoxwikis.com/images/thumb/1/13/Province_icon.png/28px-Province_icon.png)](/Province "Province") All provinces in [Japan region](/Asian_regions#Japan "Asian regions") must be either owned and cored by Japan or unowned.',
    notes:
      'You must start as a Daimyo subject of the [![Flag of Ashikaga](https://eu4.paradoxwikis.com/images/thumb/a/a1/Ashikaga.png/20px-Ashikaga.png)](/Ashikaga "Ashikaga") [Ashikaga](/Ashikaga "Ashikaga") Shogunate. The Japan region includes Okinawa, Hokkaido, and the Kuril Islands.',
  },
  {
    id: 'ach_292',
    name: 'The Freest Man in the World',
    description:
      'Ensure that no colonized province in the world produces slaves while having the War Against the World Doctrine government reform enacted.',
    icon: 'https://eu4.paradoxwikis.com/images/d/d6/The_Freest_Man_in_the_World.png',
    dlc: 'or',
    version: '1.34',
    difficulty: 'H',
    game: 'eu4',
    guideUrl: '',
    startingConditions: '',
    completionRequirements:
      '*   [![Government republic.png](https://eu4.paradoxwikis.com/images/thumb/5/5d/Government_republic.png/28px-Government_republic.png)](/Republic "Republic") Has enacted the [Pirate Republic](/Pirate_Republic "Pirate Republic") government reform\n*   [![Government republic.png](https://eu4.paradoxwikis.com/images/thumb/5/5d/Government_republic.png/28px-Government_republic.png)](/Republic "Republic") Has enacted the [War Against the World Doctrine](/War_Against_the_World_Doctrine "War Against the World Doctrine") government reform\n*   [![Slaves.png](https://eu4.paradoxwikis.com/images/thumb/2/25/Slaves.png/28px-Slaves.png)](/Slaves "Slaves") No fully colonized province in the world produces slaves',
    notes:
      'Almost all [![Slaves.png](https://eu4.paradoxwikis.com/images/thumb/2/25/Slaves.png/28px-Slaves.png)](/Slaves "Slaves") slave provinces are on the African continent (except Azov). [![Flag of Palembang](https://eu4.paradoxwikis.com/images/thumb/b/b7/Palembang.png/20px-Palembang.png)](/Palembang "Palembang") [Palembang](/Palembang "Palembang") has a quick event which converts them into pirate republic, but they are Hindu and have mediocre ideas. An easier way is to start as [![Flag of Pasai](https://eu4.paradoxwikis.com/images/thumb/a/a2/Pasai.png/20px-Pasai.png)](/Pasai "Pasai") [Pasai](/Pasai "Pasai") and hoist the black flag: Pasai has better starting provinces, better ideas, and is Muslim, which makes alliance and AE easier. Alternatively, [![Flag of Gotland](https://eu4.paradoxwikis.com/images/thumb/2/2c/Gotland.png/20px-Gotland.png)](/Gotland "Gotland") [Gotland](/Gotland "Gotland") also becomes a pirate nation through event. Azov and the Ivory Coast are areas of contention with [![Slaves.png](https://eu4.paradoxwikis.com/images/thumb/2/25/Slaves.png/28px-Slaves.png)](/Slaves "Slaves") slaves which need to be rushed to asap. [![Flag of Kilwa](https://eu4.paradoxwikis.com/images/thumb/c/cb/Kilwa.png/20px-Kilwa.png)](/Kilwa "Kilwa") [Kilwa](/Kilwa "Kilwa") has the best starting location and missions in Africa. Complete Prepare the Invasion mission to secure five provinces in Madagascar. Move Kilwa\'s capital to Zanzibar or Madagascar. Give the remaining provinces to Sofala and release the vassal, then [Hoist the Black Flag](/Pirate_republic#Hoist_the_Black_Flag "Pirate republic")\n\nCan be done easily by releasing and playing as [![Flag of Cornwall](https://eu4.paradoxwikis.com/images/thumb/c/ce/Cornwall.png/20px-Cornwall.png)](/Cornwall "Cornwall") [Cornwall](/Cornwall "Cornwall") after you conquer all slave provinces and [abolish slavery](/List_of_decision_lists#Pass_Abolition_of_Slavery_Act "List of decision lists"), e.g. as England/Great Britain, because Cornwall\'s pirate event requires just 3 ships privateering.\n\nMaghrebi nation such as [![Flag of Tunis](https://eu4.paradoxwikis.com/images/thumb/7/79/Tunis.png/20px-Tunis.png)](/Tunis "Tunis") [Tunis](/Tunis "Tunis") can sell non coastal provinces to meet the requirements, an alliance with the [![Flag of Ottomans](https://eu4.paradoxwikis.com/images/thumb/8/89/Ottomans.png/20px-Ottomans.png)](/Ottomans "Ottomans") [Ottomans](/Ottomans "Ottomans") and a proximity to [![Flag of Genoa](https://eu4.paradoxwikis.com/images/thumb/f/fc/Genoa.png/20px-Genoa.png)](/Genoa "Genoa") [Genoa](/Genoa "Genoa") help gaining Azov early in the game.',
  },
  {
    id: 'ach_293',
    name: 'The Grand Armada',
    description: 'Have 500 heavy ships and no loans.',
    icon: 'https://eu4.paradoxwikis.com/images/d/d6/The_Grand_Armada.jpg',
    dlc: '',
    version: '1.6',
    difficulty: 'M',
    game: 'eu4',
    guideUrl: '',
    startingConditions: '',
    completionRequirements:
      '*   [![Heavy ship.png](https://eu4.paradoxwikis.com/images/thumb/5/50/Heavy_ship.png/28px-Heavy_ship.png)](/Heavy_ship "Heavy ship") Have 500 heavy ships\n*   [![Yes](https://eu4.paradoxwikis.com/images/thumb/d/da/Ledger_yes.png/28px-Ledger_yes.png)](/File:Ledger_yes.png "Yes") Have no [loans](/Loan "Loan")',
    notes:
      'Best done with a high income nation with naval force limit and ship build cost bonuses. [Netherlands](/Netherlands "Netherlands"), [Venice](/Venice "Venice"), and [Genoa](/Genoa "Genoa") are optimal but can easily be done with [England](/England "England"), [Spain](/Spain "Spain") or [Malaya](/Malaya "Malaya"). This can be done much more easily by debasing currency.',
  },
  {
    id: 'ach_294',
    name: 'The Sun Never Sets on the Indian Empire',
    description:
      'Form Hindustan or Bharat and own or have a subject own Cape, London, Hong Kong (Canton) and Ottawa (Kichessipirini).',
    icon: 'https://eu4.paradoxwikis.com/images/a/af/The_Sun_Never_Sets_on_the_Indian_Empire.png',
    dlc: '',
    version: '1.9',
    difficulty: 'M',
    game: 'eu4',
    guideUrl: 'https://eu4.paradoxwikis.com/The_Sun_Never_Sets_on_the_Indian_Empire',
    startingConditions:
      '[![No](https://eu4.paradoxwikis.com/images/thumb/5/56/Ledger_no_crop.png/28px-Ledger_no_crop.png)](/File:Ledger_no_crop.png "No") *Not* using a [random New World](/Random_New_World "Random New World").',
    completionRequirements:
      '*   [![No](https://eu4.paradoxwikis.com/images/thumb/5/56/Ledger_no_crop.png/28px-Ledger_no_crop.png)](/File:Ledger_no_crop.png "No") *Not* playing as a [released vassal](/Vassal#Release_a_nation "Vassal")\n*   [![Yes](https://eu4.paradoxwikis.com/images/thumb/d/da/Ledger_yes.png/28px-Ledger_yes.png)](/File:Ledger_yes.png "Yes") Is [![Flag of Hindustan](https://eu4.paradoxwikis.com/images/thumb/3/3e/Hindustan.png/20px-Hindustan.png)](/Hindustan "Hindustan") [Hindustan](/Hindustan "Hindustan") or [![Flag of Bharat](https://eu4.paradoxwikis.com/images/thumb/b/b0/Bharat.png/20px-Bharat.png)](/Bharat "Bharat") [Bharat](/Bharat "Bharat")\n*   [![Province icon.png](https://eu4.paradoxwikis.com/images/thumb/1/13/Province_icon.png/28px-Province_icon.png)](/Province "Province") Own or have a non-tributary subject own London (236), Cape (1177), Canton (667) and Kichessipirini (4890)\n\nExpand\n\n[![The Sun Never Sets on the Indian Empire map.png](https://eu4.paradoxwikis.com/images/thumb/2/2d/The_Sun_Never_Sets_on_the_Indian_Empire_map.png/140px-The_Sun_Never_Sets_on_the_Indian_Empire_map.png)](/File:The_Sun_Never_Sets_on_the_Indian_Empire_map.png)\n\n[](/File:The_Sun_Never_Sets_on_the_Indian_Empire_map.png "Enlarge")',
    notes: 'Kichessipirini (4890) is called Ottawa when owned by a British or English country.',
  },
  {
    id: 'ach_295',
    name: 'These Banners need a Saga',
    description: 'Starting as a Jurchen nation, have 100 regiments of Banners raised at the same time.',
    icon: 'https://eu4.paradoxwikis.com/images/d/de/These_Banners_need_a_Saga.png',
    dlc: '',
    version: '1.20',
    difficulty: 'M',
    game: 'eu4',
    guideUrl: '',
    startingConditions:
      '[![Culture icon.png](https://eu4.paradoxwikis.com/images/thumb/2/29/Culture_icon.png/28px-Culture_icon.png)](/Culture "Culture") Started with culture *Jurchen*',
    completionRequirements:
      '[![Possible Manchu banners.png](https://eu4.paradoxwikis.com/images/thumb/6/69/Possible_Manchu_banners.png/28px-Possible_Manchu_banners.png)](/Possible_Manchu_banners "Possible Manchu banners") Have 100 banner regiments',
    notes:
      'Make a custom Jurchen duchy holding all Jurchen provinces and the most developed states in East Asia. Set it up for high number of states, reduced culture conversion cost, and lots of diplomatic power. Start with at least 1200-1250 development, or face needing to develop or conquer more and wait for separatism to tick down. Form Manchu and then Qing, then make everyone nearby pay tribute in diplomatic power. Everything can be converted to Manchu before 1500, which is enough for 100 regiments and a few more. Admin tech 8 gives 3 more state slots but it is possible without them.',
  },
  {
    id: 'ach_296',
    name: 'Tiger of Mysore',
    description: 'Starting as Mysore, Conquer the Deccan and Coromandel Regions.',
    icon: 'https://eu4.paradoxwikis.com/images/a/a8/Tiger_of_Mysore.png',
    dlc: '',
    version: '1.26',
    difficulty: 'H',
    game: 'eu4',
    guideUrl: '',
    startingConditions:
      '[![Yes](https://eu4.paradoxwikis.com/images/thumb/d/da/Ledger_yes.png/28px-Ledger_yes.png)](/File:Ledger_yes.png "Yes") Playing as [![Flag of Mysore](https://eu4.paradoxwikis.com/images/thumb/c/cd/Mysore.png/20px-Mysore.png)](/Mysore "Mysore") [Mysore](/Mysore "Mysore")',
    completionRequirements:
      '*   [![Province icon.png](https://eu4.paradoxwikis.com/images/thumb/1/13/Province_icon.png/28px-Province_icon.png)](/Province "Province") All provinces in Deccan and Coromandel regions are owned by the country or a non-tributary subject\n\nExpand\n\n[![Tiger of Mysore map.png](https://eu4.paradoxwikis.com/images/thumb/b/b9/Tiger_of_Mysore_map.png/140px-Tiger_of_Mysore_map.png)](/File:Tiger_of_Mysore_map.png)\n\n[](/File:Tiger_of_Mysore_map.png "Enlarge")',
    notes:
      "You need to ally Bahmanis to make it possible to defeat Vijayanagar If you can't, then you might have to restart a few times or no-cb a country in southeast Asia",
  },
  {
    id: 'ach_297',
    name: 'Turkish Delight',
    description: 'Start as Candar and own 20 Sugar provinces between you and your subjects.',
    icon: 'https://eu4.paradoxwikis.com/images/8/85/Turkish_Delight.jpg',
    dlc: '',
    version: '1.18',
    difficulty: 'H',
    game: 'eu4',
    guideUrl: '',
    startingConditions:
      '[![Yes](https://eu4.paradoxwikis.com/images/thumb/d/da/Ledger_yes.png/28px-Ledger_yes.png)](/File:Ledger_yes.png "Yes") Playing as [![Flag of Candar](https://eu4.paradoxwikis.com/images/thumb/5/5c/Candar.png/20px-Candar.png)](/Candar "Candar") [Candar](/Candar "Candar")',
    completionRequirements:
      '[![Sugar.png](https://eu4.paradoxwikis.com/images/thumb/a/a9/Sugar.png/28px-Sugar.png)](/Sugar "Sugar") Have 20 provinces of sugar owned by this country and its non-tributary subjects',
    notes: 'Fleeing to the new world is recommended, if not required for this achievement.',
  },
  {
    id: 'ach_298',
    name: 'Venetian Sea',
    description:
      'Have a 75% Trade share in both the Alexandria and Constantinople nodes as Venice, owning less than 10 cities.',
    icon: 'https://eu4.paradoxwikis.com/images/a/a3/Venetian_Sea.jpg',
    dlc: '',
    version: '1.7',
    difficulty: 'H',
    game: 'eu4',
    guideUrl: '',
    startingConditions:
      '[![Yes](https://eu4.paradoxwikis.com/images/thumb/d/da/Ledger_yes.png/28px-Ledger_yes.png)](/File:Ledger_yes.png "Yes") Playing as [![Flag of Venice](https://eu4.paradoxwikis.com/images/thumb/e/e1/Venice.png/20px-Venice.png)](/Venice "Venice") [Venice](/Venice "Venice")',
    completionRequirements:
      '*   [![No](https://eu4.paradoxwikis.com/images/thumb/5/56/Ledger_no_crop.png/28px-Ledger_no_crop.png)](/File:Ledger_no_crop.png "No") *Not* playing as a [released vassal](/Vassal#Release_a_nation "Vassal")\n*   [![Province icon.png](https://eu4.paradoxwikis.com/images/thumb/1/13/Province_icon.png/28px-Province_icon.png)](/Province "Province") Have less than 10 fully colonized provinces([cities](/Cities "Cities"))\n*   [![Global trade power.png](https://eu4.paradoxwikis.com/images/thumb/1/10/Trade_power.png/28px-Trade_power.png)](/Trade_power "Trade power") Have at least **75%** of the total trade power in the trade nodes Alexandria and Constantinople',
    notes:
      'Quickly vassalize [![Flag of Byzantium](https://eu4.paradoxwikis.com/images/thumb/9/96/Byzantium.png/20px-Byzantium.png)](/Byzantium "Byzantium") [Byzantium](/Byzantium "Byzantium"), and with the help of [![Flag of Austria](https://eu4.paradoxwikis.com/images/thumb/7/7f/Austria.png/20px-Austria.png)](/Austria "Austria") [Austria](/Austria "Austria")/ [![Flag of Hungary](https://eu4.paradoxwikis.com/images/thumb/6/6a/Hungary.png/20px-Hungary.png)](/Hungary "Hungary") [Hungary](/Hungary "Hungary"), feed them back their cores owned by the [![Flag of Ottomans](https://eu4.paradoxwikis.com/images/thumb/8/89/Ottomans.png/20px-Ottomans.png)](/Ottomans "Ottomans") [Ottomans](/Ottomans "Ottomans") early game. You can release [![Flag of Bulgaria](https://eu4.paradoxwikis.com/images/thumb/f/f4/Bulgaria.png/20px-Bulgaria.png)](/Bulgaria "Bulgaria") [Bulgaria](/Bulgaria "Bulgaria") so Byzantium does not have as high development. Conquer all the [![Province trade power value.png](https://eu4.paradoxwikis.com/images/thumb/f/f4/Province_trade_power_value.png/24px-Province_trade_power_value.png)](/Center_of_trade "Center of trade") centers of trade and [![Estuary icon.png](https://eu4.paradoxwikis.com/images/thumb/8/89/Estuary.png/24px-Estuary.png)](/Estuary "Estuary") estuaries in the Constantinople trade node and feed them to your vassals. Repeat this by releasing [![Flag of Syria](https://eu4.paradoxwikis.com/images/thumb/0/0f/Syria.png/20px-Syria.png)](/Syria "Syria") [Syria](/Syria "Syria") and feeding them back their cores owned by the [![Flag of Mamluks](https://eu4.paradoxwikis.com/images/thumb/c/ca/The_Mamluks.png/20px-The_Mamluks.png)](/Mamluks "Mamluks") [Mamluks](/Mamluks "Mamluks") and conquering/feeding Syria centers of trade in Alexandria node. Releasing [![Flag of Croatia](https://eu4.paradoxwikis.com/images/thumb/9/94/Croatia.png/20px-Croatia.png)](/Croatia "Croatia") [Croatia](/Croatia "Croatia") helps control the Ragusa trade node. If you struggle with keeping your vassals loyal, develop their provinces, placate them, develop your own few provinces to make yourself seem stronger or take Plutocratic/Influence/Diplomatic ideas. You can drop Crete, Corfu and Dalmacija and pick up Milan, Ragusa or Alexandria. With Trade idea group, diverting trade from your vassals and a lot of light ships, you should reach the required level of trade power.',
  },
  {
    id: 'ach_299',
    name: 'Why is the Rûm gone!?',
    description: 'As Asturias, establish an Order in Rum.',
    icon: 'https://eu4.paradoxwikis.com/images/2/21/Why_is_the_R%C3%BBm_gone%21%3F.png',
    dlc: '',
    version: '1.28',
    difficulty: 'H',
    game: 'eu4',
    guideUrl: '',
    startingConditions: '',
    completionRequirements:
      '*   [![Yes](https://eu4.paradoxwikis.com/images/thumb/d/da/Ledger_yes.png/28px-Ledger_yes.png)](/File:Ledger_yes.png "Yes") Is [![Flag of Asturias](https://eu4.paradoxwikis.com/images/thumb/9/99/Asturias.png/20px-Asturias.png)](/Asturias "Asturias") [Asturias](/Asturias "Asturias")\n*   [![Province icon.png](https://eu4.paradoxwikis.com/images/thumb/1/13/Province_icon.png/28px-Province_icon.png)](/Province "Province") Own and have a [holy order](/Holy_order "Holy order") established in the [Rum area](/European_regions#Rum "European regions")',
    notes:
      '*   Easiest to do as Ottomans. First, no-CB Castile and conquer the province of Vizcaya, then release Asturias as a vassal. Next, conquer enough Iberian provinces to connect Vizcaya to the Mediterranean as well as at least one province per sea tile connecting Iberia to all provinces in the Rum area, giving Asturias the line of provinces in each peace deal as well as any of your own provinces needed to complete the snake. Integrate and re-release Asturias, selecting to play as them, and then establish the holy order needed in order to complete the achievement. A similar strategy can be used if starting as Aragon, which owns most of the connecting provinces needed.',
  },
  {
    id: 'ach_300',
    name: 'With a little help..',
    description: "As Ragusa, lead a Trade League of at least 5 nations and guarantee the Ottomans' independence.",
    icon: 'https://eu4.paradoxwikis.com/images/2/2f/With_a_little_help...jpg',
    dlc: '',
    version: '1.16',
    difficulty: 'H',
    game: 'eu4',
    guideUrl: '',
    startingConditions:
      '[![Yes](https://eu4.paradoxwikis.com/images/thumb/d/da/Ledger_yes.png/28px-Ledger_yes.png)](/File:Ledger_yes.png "Yes") Playing as [![Flag of Ragusa](https://eu4.paradoxwikis.com/images/thumb/e/e6/Ragusa.png/20px-Ragusa.png)](/Ragusa "Ragusa") [Ragusa](/Ragusa "Ragusa")',
    completionRequirements:
      '*   [![Yes](https://eu4.paradoxwikis.com/images/thumb/d/da/Ledger_yes.png/28px-Ledger_yes.png)](/File:Ledger_yes.png "Yes") Lead a Trade League of at least 5 nations\n*   [![Diplomatic upkeep.png](https://eu4.paradoxwikis.com/images/thumb/5/58/Diplomatic_relations.png/28px-Diplomatic_relations.png)](/Diplomatic_relations "Diplomatic relations") Guarantee the independence of [![Flag of Ottomans](https://eu4.paradoxwikis.com/images/thumb/8/89/Ottomans.png/20px-Ottomans.png)](/Ottomans "Ottomans") [Ottomans](/Ottomans "Ottomans")',
    notes:
      'You can only guarantee a country if you are larger than it. Ironically, taking land from the Ottomans for a vassal is probably the best way to do this.',
  },
  {
    id: 'ach_301',
    name: "Yarr Harr a Pirate's Life For Me",
    description: 'Choose to play as New Providence and conquer all of Caribbeans.',
    icon: 'https://eu4.paradoxwikis.com/images/0/00/Yarr_Harr_a_Pirate%27s_Life_For_Me.png',
    dlc: '',
    version: '1.28',
    difficulty: 'M',
    game: 'eu4',
    guideUrl: 'https://eu4.paradoxwikis.com/Yarr_Harr_a_Pirate%27s_Life_For_Me',
    startingConditions:
      '*   [![No](https://eu4.paradoxwikis.com/images/thumb/5/56/Ledger_no_crop.png/28px-Ledger_no_crop.png)](/File:Ledger_no_crop.png "No") No more than 1 custom nation exists in the world\n*   [![No](https://eu4.paradoxwikis.com/images/thumb/5/56/Ledger_no_crop.png/28px-Ledger_no_crop.png)](/File:Ledger_no_crop.png "No") Used no more than 201 nation designer points if playing as a custom nation',
    completionRequirements:
      '*   [![Yes](https://eu4.paradoxwikis.com/images/thumb/d/da/Ledger_yes.png/28px-Ledger_yes.png)](/File:Ledger_yes.png "Yes") Is [![Flag of New Providence](https://eu4.paradoxwikis.com/images/thumb/f/f2/New_Providence.png/20px-New_Providence.png)](/New_Providence "New Providence") [New Providence](/New_Providence "New Providence")\n*   [![Province icon.png](https://eu4.paradoxwikis.com/images/thumb/1/13/Province_icon.png/28px-Province_icon.png)](/Province "Province") Owns all provinces in the [Caribbean](/Caribbean "Caribbean") region.',
    notes:
      'Bermuda is in the Caribbean region also.\n\n*   Starting as a custom nation in the Caribbean with the Bahamas as a core, and privateering in the Caribbean will allow you to spawn New Providence extremely quickly, giving you time to expand and colonize much of the Caribbean before the European colonial powers arrive. Pirate republics can declare war on colonial nations without their overlord being called as an ally, so if Europeans begin to colonize the Caribbean before you can finish, it may be easier to allow a colonial nation to form.',
  },
  {
    id: 'ach_302',
    name: 'Triple the Rome',
    description: 'As Russia, be the Emperor of China and the HRE.',
    icon: 'https://eu4.paradoxwikis.com/images/3/34/Triple_the_Rome.png',
    dlc: '',
    version: '1.35',
    difficulty: 'H',
    game: 'eu4',
    guideUrl: '',
    startingConditions: '',
    completionRequirements:
      '*   [![Yes](https://eu4.paradoxwikis.com/images/thumb/d/da/Ledger_yes.png/28px-Ledger_yes.png)](/File:Ledger_yes.png "Yes") Is [![Flag of Russia](https://eu4.paradoxwikis.com/images/thumb/e/ee/Russia.png/20px-Russia.png)](/Russia "Russia") [Russia](/Russia "Russia")\n*   [![Emperor of china icon.png](https://eu4.paradoxwikis.com/images/thumb/2/25/Emperor_of_china_icon.png/28px-Emperor_of_china_icon.png)](/Emperor_of_China "Emperor of China") Is Emperor of China\n*   [![Imperial authority.png](https://eu4.paradoxwikis.com/images/thumb/4/46/Imperial_authority.png/28px-Imperial_authority.png)](/Imperial_authority "Imperial authority") Is the emperor of the [Holy Roman Empire](/Holy_Roman_Empire "Holy Roman Empire")',
    notes:
      'To be [Emperor of China](/Emperor_of_China "Emperor of China"), you must be in the [Pagan](/Pagan "Pagan") or [Eastern](/Eastern_denominations "Eastern denominations") religion group, whilst to be the HRE Emperor, you generally must be [![Catholicism](https://eu4.paradoxwikis.com/images/thumb/3/39/Catholic.png/28px-Catholic.png)](/Catholic "Catholic") Catholic unless [![Protestantism](https://eu4.paradoxwikis.com/images/thumb/0/0d/Protestant.png/28px-Protestant.png)](/Protestant "Protestant") Protestants won the league war, or sometimes other Christian denominations given specific circumstances (see [League war](/League_war "League war")), so a religion switch will be necessary to complete the achievement. Switching to a non-Christian religion as HRE Emperor will cause the emperorship to be lost unless the Erbkaisertum reform has been passed, while changing religion as Emperor of China allows you to retain the title. As such, it may be easiest to start as an atypical nation to form [![Flag of Russia](https://eu4.paradoxwikis.com/images/thumb/e/ee/Russia.png/20px-Russia.png)](/Russia "Russia") [Russia](/Russia "Russia") such as [![Flag of Oirat](https://eu4.paradoxwikis.com/images/thumb/2/20/Oirat.png/20px-Oirat.png)](/Oirat "Oirat") [Oirat](/Oirat "Oirat"), which starts off as [![Tengri](https://eu4.paradoxwikis.com/images/thumb/9/9f/Tengri.png/28px-Tengri.png)](/Tengri "Tengri") Tengri and can use horde mechanics to relatively easily expand into the territories needed to form Russia. It is recommended to not seize the mandate until the needed provinces are conquered since seizing the mandate will change your government to Celestial Empire and disable horde mechanics. At this point, culture shift to [![Primary culture.png](https://eu4.paradoxwikis.com/images/thumb/e/e1/Primary_culture.png/28px-Primary_culture.png)](/Primary_culture "Primary culture") Muscovite, Novgorodian or Ryazanian culture and form Russia once you hit admin tech 10. At some point you will need to conquer a Catholic province, perhaps from the Scandinavian or the Baltic regions, which will allow you to convert to Catholic via rebels. After seizing the Mandate of Heaven, convert to Catholicism, then ally or vassalize enough HRE electors to get yourself elected Holy Roman Emperor.',
  },
  {
    id: 'ach_303',
    name: 'A Sun God',
    description: 'Form Inca, embrace all Institutions and own all of South America as core provinces.',
    icon: 'https://eu4.paradoxwikis.com/images/1/14/A_Sun_God.jpg',
    dlc: '',
    version: '1.10',
    difficulty: 'M',
    game: 'eu4',
    guideUrl: 'https://eu4.paradoxwikis.com/A_Sun_God',
    startingConditions:
      '[![No](https://eu4.paradoxwikis.com/images/thumb/5/56/Ledger_no_crop.png/28px-Ledger_no_crop.png)](/File:Ledger_no_crop.png "No") *Not* using a [random New World](/Random_New_World "Random New World").',
    completionRequirements:
      '*   [![Yes](https://eu4.paradoxwikis.com/images/thumb/d/da/Ledger_yes.png/28px-Ledger_yes.png)](/File:Ledger_yes.png "Yes") Is [![Flag of Inca](https://eu4.paradoxwikis.com/images/thumb/3/36/Inca.png/20px-Inca.png)](/Inca "Inca") [Inca](/Inca "Inca")\n*   [![No](https://eu4.paradoxwikis.com/images/thumb/5/56/Ledger_no_crop.png/28px-Ledger_no_crop.png)](/File:Ledger_no_crop.png "No") *Not* playing as a [released vassal](/Vassal#Release_a_nation "Vassal")\n*   [![Institutions.png](https://eu4.paradoxwikis.com/images/thumb/4/43/Institutions.png/28px-Institutions.png)](/Institutions "Institutions") Have embraced all [institutions](/Institutions "Institutions")\n*   [![Province icon.png](https://eu4.paradoxwikis.com/images/thumb/1/13/Province_icon.png/28px-Province_icon.png)](/Province "Province") All provinces in [South America](/South_America "South America") are either empty, [wasteland](/Wasteland "Wasteland"), a [colony](/Colony "Colony") or owned and cored [![Flag of Inca](https://eu4.paradoxwikis.com/images/thumb/3/36/Inca.png/20px-Inca.png)](/Inca "Inca") [Inca](/Inca "Inca").',
    notes:
      "The Falklands (1095), South Georgia (2025) and Galapagos (2002) are also part of South America. It is useful to colonize them before a strong colonizer can do it, because these provinces won't become part of a colonial nation. This achievement is very hard without El Dorado, but pretty easy without it.",
  },
  {
    id: 'ach_304',
    name: 'Academical',
    description: 'As Athens, own 50 universities.',
    icon: 'https://eu4.paradoxwikis.com/images/1/1d/Academical.jpg',
    dlc: '',
    version: '1.14',
    difficulty: 'VH',
    game: 'eu4',
    guideUrl: '',
    startingConditions:
      '[![Yes](https://eu4.paradoxwikis.com/images/thumb/d/da/Ledger_yes.png/28px-Ledger_yes.png)](/File:Ledger_yes.png "Yes") Playing as [![Flag of Athens](https://eu4.paradoxwikis.com/images/thumb/c/ca/Athens.png/20px-Athens.png)](/Athens "Athens") [Athens](/Athens "Athens")',
    completionRequirements:
      '*   [![No](https://eu4.paradoxwikis.com/images/thumb/5/56/Ledger_no_crop.png/28px-Ledger_no_crop.png)](/File:Ledger_no_crop.png "No") *Not* playing as a [released vassal](/Vassal#Release_a_nation "Vassal")\n*   [![Yes](https://eu4.paradoxwikis.com/images/thumb/d/da/Ledger_yes.png/28px-Ledger_yes.png)](/File:Ledger_yes.png "Yes") Is [![Flag of Athens](https://eu4.paradoxwikis.com/images/thumb/c/ca/Athens.png/20px-Athens.png)](/Athens "Athens") [Athens](/Athens "Athens")\n*   [![Yes](https://eu4.paradoxwikis.com/images/thumb/d/da/Ledger_yes.png/28px-Ledger_yes.png)](/File:Ledger_yes.png "Yes") 50 owned provinces have [![Latin university.png](https://eu4.paradoxwikis.com/images/thumb/9/95/Latin_university.png/28px-Latin_university.png)](/University "University") [Universities](/University "University").',
    notes:
      'Building universities requires [![Administrative tech.png](https://eu4.paradoxwikis.com/images/8/8e/Administrative_technology.png)](/Administrative_technology "Administrative technology") administrative [technology](/Technology "Technology") 17, meaning that despite Athens\' extremely hard start, the hardest thing about this achievement may in fact be the patience of waiting until 1622, when tech 17 loses its ahead-of-time penalty. The achievement may be combined with "[It\'s All Greek To Me](/It%27s_All_Greek_To_Me "It\'s All Greek To Me")" to provide a conquest goal to occupy this time, but if doing this, you must make sure to not form Greece until after owning 50 universities, as Athens\'s achievement requires you to stay as Athens.',
  },
  {
    id: 'ach_305',
    name: 'African Power',
    description: 'Own and have cores on all provinces in Africa as Kongo.',
    icon: 'https://eu4.paradoxwikis.com/images/a/ac/African_Power.jpg',
    dlc: '',
    version: '1.1',
    difficulty: 'H',
    game: 'eu4',
    guideUrl: '',
    startingConditions:
      '[![Yes](https://eu4.paradoxwikis.com/images/thumb/d/da/Ledger_yes.png/28px-Ledger_yes.png)](/File:Ledger_yes.png "Yes") Playing as [![Flag of Kongo](https://eu4.paradoxwikis.com/images/thumb/1/16/Kongo.png/20px-Kongo.png)](/Kongo "Kongo") [Kongo](/Kongo "Kongo")',
    completionRequirements:
      '[![Province icon.png](https://eu4.paradoxwikis.com/images/thumb/1/13/Province_icon.png/28px-Province_icon.png)](/Province "Province") All fully colonized provinces in [Africa](/Africa "Africa") are owned and cored by [![Flag of Kongo](https://eu4.paradoxwikis.com/images/thumb/1/16/Kongo.png/20px-Kongo.png)](/Kongo "Kongo") [Kongo](/Kongo "Kongo")',
    notes:
      '*   Empty provinces and unfinished colonies are excluded and may be safely ignored.\n*   The isolated islands required are: Comoros, Mahe, Mauritius, Île Bourbon, Sao Tome, Fernando Po, St. Helena, Cape Verde and Djerba (but not the Canarias, Madeira, Azores, Maldives, Socotra, or any other in the Mediterranean).',
  },
  {
    id: 'ach_306',
    name: 'Albania or Iberia',
    description: 'As Albania, own or have a subject own Iberia and the Caucasus.',
    icon: 'https://eu4.paradoxwikis.com/images/f/fa/Albania_or_Iberia.png',
    dlc: '',
    version: '1.9',
    difficulty: 'VH',
    game: 'eu4',
    guideUrl: 'https://eu4.paradoxwikis.com/Albania_or_Iberia',
    startingConditions:
      '[![Yes](https://eu4.paradoxwikis.com/images/thumb/d/da/Ledger_yes.png/28px-Ledger_yes.png)](/File:Ledger_yes.png "Yes") Playing as [![Flag of Albania](https://eu4.paradoxwikis.com/images/thumb/0/07/Albania.png/20px-Albania.png)](/Albania "Albania") [Albania](/Albania "Albania")',
    completionRequirements:
      '*   [![No](https://eu4.paradoxwikis.com/images/thumb/5/56/Ledger_no_crop.png/28px-Ledger_no_crop.png)](/File:Ledger_no_crop.png "No") *Not* playing as a [released vassal](/Vassal#Release_a_nation "Vassal")\n*   [![Province icon.png](https://eu4.paradoxwikis.com/images/thumb/1/13/Province_icon.png/28px-Province_icon.png)](/Province "Province") All provinces in the [Iberia](/Iberia "Iberia") and [Caucasia](/Caucasia "Caucasia") regions are owned by the player\'s country *or* its non-tributary [subjects](/Subjects "Subjects").\n\nExpand\n\n[![Albania or Iberia map.png](https://eu4.paradoxwikis.com/images/thumb/a/ac/Albania_or_Iberia_map.png/140px-Albania_or_Iberia_map.png)](/File:Albania_or_Iberia_map.png)\n\n[](/File:Albania_or_Iberia_map.png "Enlarge")',
    notes: '',
  },
  {
    id: 'ach_307',
    name: 'An Unlikely Candidate',
    description: 'Starting as Mzab, Touggourt or Djerid, reform Al-Andalus.',
    icon: 'https://eu4.paradoxwikis.com/images/b/b9/An_Unlikely_Candidate.png',
    dlc: '',
    version: '1.28',
    difficulty: 'VH',
    game: 'eu4',
    guideUrl: '',
    startingConditions:
      '[![Yes](https://eu4.paradoxwikis.com/images/thumb/d/da/Ledger_yes.png/28px-Ledger_yes.png)](/File:Ledger_yes.png "Yes") Playing as *either*:\n\n*    [![Flag of Mzab](https://eu4.paradoxwikis.com/images/thumb/6/62/Mzab.png/20px-Mzab.png)](/Mzab "Mzab") [Mzab](/Mzab "Mzab")\n*    [![Flag of Touggourt](https://eu4.paradoxwikis.com/images/thumb/2/26/Touggourt.png/20px-Touggourt.png)](/Touggourt "Touggourt") [Touggourt](/Touggourt "Touggourt")\n*    [![Flag of Djerid](https://eu4.paradoxwikis.com/images/thumb/4/43/Djerid.png/20px-Djerid.png)](/Djerid "Djerid") [Djerid](/Djerid "Djerid")',
    completionRequirements:
      '[![Yes](https://eu4.paradoxwikis.com/images/thumb/d/da/Ledger_yes.png/28px-Ledger_yes.png)](/File:Ledger_yes.png "Yes") Is [![Flag of Andalusia](https://eu4.paradoxwikis.com/images/thumb/0/09/Andalusia.png/20px-Andalusia.png)](/Andalusia "Andalusia") [Andalusia](/Andalusia "Andalusia")',
    notes:
      'Forming [![Flag of Algiers](https://eu4.paradoxwikis.com/images/thumb/8/86/Algiers.png/20px-Algiers.png)](/Algiers "Algiers") [Algiers](/Algiers "Algiers"), [![Flag of Morocco](https://eu4.paradoxwikis.com/images/thumb/e/e4/Morocco.png/20px-Morocco.png)](/Morocco "Morocco") [Morocco](/Morocco "Morocco"), [![Flag of Tunis](https://eu4.paradoxwikis.com/images/thumb/7/79/Tunis.png/20px-Tunis.png)](/Tunis "Tunis") [Tunis](/Tunis "Tunis") or another country *will not* prevent the achievement but instead only hide its conditions.',
  },
  {
    id: 'ach_308',
    name: 'Around the World in 80 Years',
    description:
      'Starting as a Custom Nation of up to 400 points in the British Region, own New York, San Francisco, Suez, Bombay, Calcutta, Hong Kong and Yokohama by 1524.11.11.',
    icon: 'https://eu4.paradoxwikis.com/images/9/9c/Around_the_World_in_80_Years.png',
    dlc: '',
    version: '1.23',
    difficulty: 'VH',
    game: 'eu4',
    guideUrl: 'https://eu4.paradoxwikis.com/Around_the_World_in_80_Years',
    startingConditions:
      '*   [![Nation designer.png](https://eu4.paradoxwikis.com/images/a/ab/Nation_designer.png)](/Nation_designer "Nation designer") Playing as a custom nation\n*   [![Yes](https://eu4.paradoxwikis.com/images/thumb/d/da/Ledger_yes.png/28px-Ledger_yes.png)](/File:Ledger_yes.png "Yes") Only 1 custom nation exists in the world\n*   [![No](https://eu4.paradoxwikis.com/images/thumb/5/56/Ledger_no_crop.png/28px-Ledger_no_crop.png)](/File:Ledger_no_crop.png "No") Used no more than 401 nation designer points\n*   [![No](https://eu4.paradoxwikis.com/images/thumb/5/56/Ledger_no_crop.png/28px-Ledger_no_crop.png)](/File:Ledger_no_crop.png "No") *Not* using a [random New World](/Random_New_World "Random New World")\n*   [![Province icon.png](https://eu4.paradoxwikis.com/images/thumb/1/13/Province_icon.png/28px-Province_icon.png)](/Province "Province") Own no provinces outside the [Britain](/Europe_western_regions#Britain_region "Europe western regions") region',
    completionRequirements:
      '*   [![Yes](https://eu4.paradoxwikis.com/images/thumb/d/da/Ledger_yes.png/28px-Ledger_yes.png)](/File:Ledger_yes.png "Yes") The date is before 12 November 1524\n*   [![Province icon.png](https://eu4.paradoxwikis.com/images/thumb/1/13/Province_icon.png/28px-Province_icon.png)](/Province "Province") Own Manahahttan (965), Ohlone (4637), Suez (2315), Thana (529), Bengal Delta (561), Canton (667), and Musashi (1028)\n\nExpand\n\n[![Around the World in 80 Years map.png](https://eu4.paradoxwikis.com/images/thumb/c/c9/Around_the_World_in_80_Years_map.png/140px-Around_the_World_in_80_Years_map.png)](/File:Around_the_World_in_80_Years_map.png)\n\n[](/File:Around_the_World_in_80_Years_map.png "Enlarge")',
    notes:
      'Requires Ohlone (4637) instead of Miwok/San Francisco (2021). Provinces cannot be owned by [subject](/Subject "Subject"), so it is important not to establish colonial nations in North America. Considerably easier with the [charter company](/Charter_company "Charter company") mechanism from [![Dharma.png](https://eu4.paradoxwikis.com/images/thumb/f/fc/Dharma.png/28px-Dharma.png)](/Dharma "Dharma") Dharma.',
  },
  {
    id: 'ach_309',
    name: 'Avar Khaganate',
    description: 'Achieve Empire rank and conquer Hungary as Avaria.',
    icon: 'https://eu4.paradoxwikis.com/images/e/ec/Avar_Khaganate.png',
    dlc: '',
    version: '1.23',
    difficulty: 'H',
    game: 'eu4',
    guideUrl: '',
    startingConditions:
      '[![Yes](https://eu4.paradoxwikis.com/images/thumb/d/da/Ledger_yes.png/28px-Ledger_yes.png)](/File:Ledger_yes.png "Yes") Playing as [![Flag of Avaria](https://eu4.paradoxwikis.com/images/thumb/4/47/Avaria.png/20px-Avaria.png)](/Avaria "Avaria") [Avaria](/Avaria "Avaria")',
    completionRequirements:
      '*   [![Empire rank](https://eu4.paradoxwikis.com/images/thumb/9/9d/Empire.png/28px-Empire.png)](/Government_rank "Empire rank") Is empire\n*    [![Flag of Avaria](https://eu4.paradoxwikis.com/images/thumb/4/47/Avaria.png/20px-Avaria.png)](/Avaria "Avaria") [Avaria](/Avaria "Avaria") owns all provinces in the areas Alföld, Transdanubia, Slovakia, Northern Transylvania, and Southern Transylvania.\n\nExpand\n\n[![Avar Khaganate map.png](https://eu4.paradoxwikis.com/images/thumb/0/02/Avar_Khaganate_map.png/140px-Avar_Khaganate_map.png)](/File:Avar_Khaganate_map.png)\n\n[](/File:Avar_Khaganate_map.png "Enlarge")',
    notes: '',
  },
  {
    id: 'ach_310',
    name: 'Basileus',
    description: 'As Byzantium, restore the borders of the Eastern Roman Empire in the Balkans and Anatolia.',
    icon: 'https://eu4.paradoxwikis.com/images/f/fe/Basileus.jpg',
    dlc: '',
    version: '1.1',
    difficulty: 'H',
    game: 'eu4',
    guideUrl: '',
    startingConditions:
      '[![Yes](https://eu4.paradoxwikis.com/images/thumb/d/da/Ledger_yes.png/28px-Ledger_yes.png)](/File:Ledger_yes.png "Yes") Playing as [![Flag of Byzantium](https://eu4.paradoxwikis.com/images/thumb/9/96/Byzantium.png/20px-Byzantium.png)](/Byzantium "Byzantium") [Byzantium](/Byzantium "Byzantium")',
    completionRequirements:
      '*   [![Yes](https://eu4.paradoxwikis.com/images/thumb/d/da/Ledger_yes.png/28px-Ledger_yes.png)](/File:Ledger_yes.png "Yes") is [![Flag of Byzantium](https://eu4.paradoxwikis.com/images/thumb/9/96/Byzantium.png/20px-Byzantium.png)](/Byzantium "Byzantium") [Byzantium](/Byzantium "Byzantium") *or* the [![Flag of Roman Empire](https://eu4.paradoxwikis.com/images/thumb/4/4e/Roman_Empire.png/20px-Roman_Empire.png)](/Roman_Empire "Roman Empire") [Roman Empire](/Roman_Empire "Roman Empire")\n*   [![No](https://eu4.paradoxwikis.com/images/thumb/5/56/Ledger_no_crop.png/28px-Ledger_no_crop.png)](/File:Ledger_no_crop.png "No") has never formed the [![Flag of Latin Empire](https://eu4.paradoxwikis.com/images/thumb/9/9c/Latin_Empire.png/20px-Latin_Empire.png)](/Latin_Empire "Latin Empire") [Latin Empire](/Latin_Empire "Latin Empire")\n*   [![Province icon.png](https://eu4.paradoxwikis.com/images/thumb/1/13/Province_icon.png/28px-Province_icon.png)](/Province "Province") Own and core the following provinces:\n\nExpand\n\n[![EU4BasileusRequirements.png](https://eu4.paradoxwikis.com/images/thumb/1/11/EU4BasileusRequirements.png/140px-EU4BasileusRequirements.png)](/File:EU4BasileusRequirements.png)\n\n[](/File:EU4BasileusRequirements.png "Enlarge")',
    notes: '',
  },
  {
    id: 'ach_311',
    name: 'Basque in Glory',
    description: 'Starting as Navarra, ensure that most of Iberia is Basque culture before the Age of Absolutism.',
    icon: 'https://eu4.paradoxwikis.com/images/4/4a/Basque_in_Glory.png',
    dlc: '',
    version: '1.28',
    difficulty: 'VH',
    game: 'eu4',
    guideUrl: '',
    startingConditions:
      '[![Yes](https://eu4.paradoxwikis.com/images/thumb/d/da/Ledger_yes.png/28px-Ledger_yes.png)](/File:Ledger_yes.png "Yes") Playing as [![Flag of Navarra](https://eu4.paradoxwikis.com/images/thumb/9/9a/Navarra.png/20px-Navarra.png)](/Navarra "Navarra") [Navarra](/Navarra "Navarra")',
    completionRequirements:
      '*   [![No](https://eu4.paradoxwikis.com/images/thumb/5/56/Ledger_no_crop.png/28px-Ledger_no_crop.png)](/File:Ledger_no_crop.png "No") It is *not* the [![Age of Absolutism.png](https://eu4.paradoxwikis.com/images/thumb/e/ec/Age_of_Absolutism.png/28px-Age_of_Absolutism.png)](/Age_of_Absolutism "Age of Absolutism") Age of Absolutism or the [![Age of Revolutions.png](https://eu4.paradoxwikis.com/images/thumb/5/59/Age_of_Revolutions.png/28px-Age_of_Revolutions.png)](/Age_of_Revolutions "Age of Revolutions") Age of Revolutions\n*   [![Province icon.png](https://eu4.paradoxwikis.com/images/thumb/1/13/Province_icon.png/28px-Province_icon.png)](/Province "Province") At least 32 provinces in Iberia have Basque culture',
    notes: '',
  },
  {
    id: 'ach_312',
    name: 'Big Blue Blob',
    description: 'As France, hold 100 European core provinces before 1500.',
    icon: 'https://eu4.paradoxwikis.com/images/a/aa/Big_Blue_Blob.jpg',
    dlc: '',
    version: '1.12',
    difficulty: 'H',
    game: 'eu4',
    guideUrl: 'https://eu4.paradoxwikis.com/Big_Blue_Blob',
    startingConditions:
      '[![Yes](https://eu4.paradoxwikis.com/images/thumb/d/da/Ledger_yes.png/28px-Ledger_yes.png)](/File:Ledger_yes.png "Yes") Playing as [![Flag of France](https://eu4.paradoxwikis.com/images/thumb/d/de/France.png/20px-France.png)](/France "France") [France](/France "France")',
    completionRequirements:
      '*   [![No](https://eu4.paradoxwikis.com/images/thumb/5/56/Ledger_no_crop.png/28px-Ledger_no_crop.png)](/File:Ledger_no_crop.png "No") *Not* playing as a [released vassal](/Vassal#Release_a_nation "Vassal")\n*   [![Yes](https://eu4.paradoxwikis.com/images/thumb/d/da/Ledger_yes.png/28px-Ledger_yes.png)](/File:Ledger_yes.png "Yes") Is [![Flag of France](https://eu4.paradoxwikis.com/images/thumb/d/de/France.png/20px-France.png)](/France "France") [France](/France "France")\n*   [![Province icon.png](https://eu4.paradoxwikis.com/images/thumb/1/13/Province_icon.png/28px-Province_icon.png)](/Province "Province") Own and core 100 provinces in [Europe](/Europe "Europe")\n*   [![Yes](https://eu4.paradoxwikis.com/images/thumb/d/da/Ledger_yes.png/28px-Ledger_yes.png)](/File:Ledger_yes.png "Yes") The year is before 1500',
    notes:
      'Most used route is attacking Scandinavia or Balkans. Make sure to conquer low-development provinces to limit AE.',
  },
  {
    id: 'ach_313',
    name: 'Choson One',
    description: 'As Korea, own or have a subject own all Shinto, Confucian and Buddhist provinces in the world.',
    icon: 'https://eu4.paradoxwikis.com/images/b/b3/Choson_One.jpg',
    dlc: '',
    version: '1.16',
    difficulty: 'H',
    game: 'eu4',
    guideUrl: 'https://eu4.paradoxwikis.com/Choson_One',
    startingConditions:
      '[![Yes](https://eu4.paradoxwikis.com/images/thumb/d/da/Ledger_yes.png/28px-Ledger_yes.png)](/File:Ledger_yes.png "Yes") Playing as [![Flag of Korea](https://eu4.paradoxwikis.com/images/thumb/4/45/Korea.png/20px-Korea.png)](/Korea "Korea") [Korea](/Korea "Korea")',
    completionRequirements:
      '[![Province icon.png](https://eu4.paradoxwikis.com/images/thumb/1/13/Province_icon.png/28px-Province_icon.png)](/Province "Province") All provinces following an [Eastern religion](/Eastern_denominations "Eastern denominations") are owned by [![Flag of Korea](https://eu4.paradoxwikis.com/images/thumb/4/45/Korea.png/20px-Korea.png)](/Korea "Korea") [Korea](/Korea "Korea") *or* its non-tributary [subjects](/Subjects "Subjects").',
    notes:
      'The Eastern religions are Theravada, Vajrayana, Mahayana, Confucian, and Shinto. Due to [![Flag of Ming](https://eu4.paradoxwikis.com/images/thumb/a/a5/Ming.png/20px-Ming.png)](/Ming "Ming") [Ming](/Ming "Ming")\'s size and power it is best to become their tributary and go after all other nations around before attempting to attack them.\n\nThe province Kuma (2417) in the Pontic Steppe can turn [![Flag of Vajrayana](https://eu4.paradoxwikis.com/images/thumb/f/f1/Vajrayana.png/20px-Vajrayana.png)](/Vajrayana "Vajrayana") [Vajrayana](/Vajrayana "Vajrayana") Vajrayana due to the event which spawns [![Flag of Kalmyk](https://eu4.paradoxwikis.com/images/thumb/f/f8/Kalmyk.png/20px-Kalmyk.png)](/Kalmyk "Kalmyk") [Kalmyk](/Kalmyk "Kalmyk").',
  },
  {
    id: 'ach_314',
    name: 'Cotton Kandy',
    description: 'As Kandy be production leader in Cotton.',
    icon: 'https://eu4.paradoxwikis.com/images/f/f3/Cotton_Kandy.png',
    dlc: '',
    version: '1.26',
    difficulty: 'H',
    game: 'eu4',
    guideUrl: '',
    startingConditions:
      '[![Yes](https://eu4.paradoxwikis.com/images/thumb/d/da/Ledger_yes.png/28px-Ledger_yes.png)](/File:Ledger_yes.png "Yes") Playing as [![Flag of Kandy](https://eu4.paradoxwikis.com/images/thumb/1/1b/Kandy.png/20px-Kandy.png)](/Kandy "Kandy") [Kandy](/Kandy "Kandy")',
    completionRequirements:
      '*   [![Yes](https://eu4.paradoxwikis.com/images/thumb/d/da/Ledger_yes.png/28px-Ledger_yes.png)](/File:Ledger_yes.png "Yes") Is [![Flag of Kandy](https://eu4.paradoxwikis.com/images/thumb/1/1b/Kandy.png/20px-Kandy.png)](/Kandy "Kandy") [Kandy](/Kandy "Kandy")\n*   [![Cotton.png](https://eu4.paradoxwikis.com/images/thumb/c/c3/Cotton.png/28px-Cotton.png)](/Cotton "Cotton") Be production leader of cotton',
    notes:
      'The Indian sub-continent already has the highest concentration of cotton-producing provinces in the game, so this achievement is best partnered with [The Buddhists Strike Back](/The_Buddhists_Strike_Back "The Buddhists Strike Back").',
  },
  {
    id: 'ach_315',
    name: 'Crossing the Finnish Line',
    description:
      'Release and play as Finland in 1444 and have a direct land connection to the Cape while your capital is in Nyland/Uusimaa.',
    icon: 'https://eu4.paradoxwikis.com/images/c/ce/Crossing_the_Finnish_Line.png',
    dlc: '',
    version: '1.34',
    difficulty: 'VH',
    game: 'eu4',
    guideUrl: '',
    startingConditions:
      '[![Yes](https://eu4.paradoxwikis.com/images/thumb/d/da/Ledger_yes.png/28px-Ledger_yes.png)](/File:Ledger_yes.png "Yes") Playing as [![Flag of Sweden](https://eu4.paradoxwikis.com/images/thumb/9/98/Sweden.png/20px-Sweden.png)](/Sweden "Sweden") [Sweden](/Sweden "Sweden")',
    completionRequirements:
      '*    [![Flag of Finland](https://eu4.paradoxwikis.com/images/thumb/c/c4/Finland.png/20px-Finland.png)](/Finland "Finland") [Finland](/Finland "Finland") has been released in 1444\n*   [![Yes](https://eu4.paradoxwikis.com/images/thumb/d/da/Ledger_yes.png/28px-Ledger_yes.png)](/File:Ledger_yes.png "Yes") Is *or* was [![Flag of Finland](https://eu4.paradoxwikis.com/images/thumb/c/c4/Finland.png/20px-Finland.png)](/Finland "Finland") [Finland](/Finland "Finland")\n*   [![Capital.png](https://eu4.paradoxwikis.com/images/thumb/6/6e/Capital.png/28px-Capital.png)](/Capital "Capital") Capital is Nyland(28)\n*   [![Province icon.png](https://eu4.paradoxwikis.com/images/thumb/1/13/Province_icon.png/28px-Province_icon.png)](/Province "Province") Owns Cape(1177)\n*   There exists a land connection of owned provinces between the capital and Cape(1177)',
    notes:
      'The land connection can go over strait crossings (it is recommended to avoid taking Suez as to not anger the [![Flag of Ottomans](https://eu4.paradoxwikis.com/images/thumb/8/89/Ottomans.png/20px-Ottomans.png)](/Ottomans "Ottomans") [Ottomans](/Ottomans "Ottomans")). Finland must be released in 1444, but you do not have to play as them in 1444. Consider making them a vassal, feeding them the provinces required, annexing them, the releasing and playing as them after annexing them. This gives you access to the Sweden mission tree and power base to work with.',
  },
  {
    id: 'ach_316',
    name: 'Empire of Mann',
    description: 'As Mann, conquer all Islands in the world.',
    icon: 'https://eu4.paradoxwikis.com/images/2/22/Empire_of_Mann.png',
    dlc: '',
    version: '1.25',
    difficulty: 'VH',
    game: 'eu4',
    guideUrl: '',
    startingConditions: '',
    completionRequirements:
      '*   [![Yes](https://eu4.paradoxwikis.com/images/thumb/d/da/Ledger_yes.png/28px-Ledger_yes.png)](/File:Ledger_yes.png "Yes") Is [![Flag of Mann](https://eu4.paradoxwikis.com/images/thumb/9/9d/Mann.png/20px-Mann.png)](/Mann "Mann") [Mann](/Mann "Mann")\n*   [![Province icon.png](https://eu4.paradoxwikis.com/images/thumb/1/13/Province_icon.png/28px-Province_icon.png)](/Province "Province") Own *or* have non-tributary subjects own all provinces which are [on an island](/Island#province_is_on_an_island "Island").',
    notes:
      "Mann can't be selected as a country in 1444, you must release it as a vassal and choose the option to play as a released vassal.\n\nAs England release Mann at the very start of the game. After 10 years you can annex them again. As the annexation progresses grant them your provinces bit by bit before the process hits 100%. You can even move your capital to continental Europe and give London to Mann. Be careful about France as they will likely attack you once you are weakened. After annexation is finished spend all your monarch points to boost provinces that Mann considers as a core. Now release Mann again and chose to play as a released vassal.\n\nAlternatively, sabotage England as much as possible, such as releasing all releasable nations, leaving Mann for last. Release and play as them, then ally all other released nations, plus a major like Castile. Take London, Sussex, and Kent in your first war and you should be off to a great start.",
  },
  {
    id: 'ach_317',
    name: 'First Come, First Serve',
    description:
      'Starting as a Western technology custom nation in North America or South America with no more than 200 points, unite the two continents.',
    icon: 'https://eu4.paradoxwikis.com/images/c/c9/First_Come%2C_First_Serve.jpg',
    dlc: '',
    version: '1.14',
    difficulty: 'M',
    game: 'eu4',
    guideUrl: '',
    startingConditions:
      '*   [![Nation designer.png](https://eu4.paradoxwikis.com/images/a/ab/Nation_designer.png)](/Nation_designer "Nation designer") Playing as a custom nation\n*   [![Yes](https://eu4.paradoxwikis.com/images/thumb/d/da/Ledger_yes.png/28px-Ledger_yes.png)](/File:Ledger_yes.png "Yes") Only 1 custom nation exists in the world\n*   [![No](https://eu4.paradoxwikis.com/images/thumb/5/56/Ledger_no_crop.png/28px-Ledger_no_crop.png)](/File:Ledger_no_crop.png "No") Used no more than 201 nation designer points\n*   [![No](https://eu4.paradoxwikis.com/images/thumb/5/56/Ledger_no_crop.png/28px-Ledger_no_crop.png)](/File:Ledger_no_crop.png "No") *Not* using a [random New World](/Random_New_World "Random New World").\n*   [![Western technology group](https://eu4.paradoxwikis.com/images/thumb/9/95/Western.png/28px-Western.png)](/Technology_group "Western technology group") Is in western technology group\n*   [![Capital.png](https://eu4.paradoxwikis.com/images/thumb/6/6e/Capital.png/28px-Capital.png)](/Capital "Capital") Capital is on the [North](/North_America "North America") or [South American](/South_America "South America") continent.',
    completionRequirements:
      '*   [![No](https://eu4.paradoxwikis.com/images/thumb/5/56/Ledger_no_crop.png/28px-Ledger_no_crop.png)](/File:Ledger_no_crop.png "No") *Not* playing as a [released vassal](/Vassal#Release_a_nation "Vassal")\n*   [![Yes](https://eu4.paradoxwikis.com/images/thumb/d/da/Ledger_yes.png/28px-Ledger_yes.png)](/File:Ledger_yes.png "Yes") Owns or has a core on all habitable land provinces in the continents of [North](/North_America "North America") and [South America](/South_America "South America")',
    notes:
      "There must not be any empty provinces in the Americas, but it is not necessary to finish the colonies. Let the Colonial Nations do most of the job; their overlords will usually not defend them in a war. Only native provinces give overextension; this means you are able to annex the Colonial Nations in one war, but do the war before they break free. Provinces which you own don't have to be cored, so you can leave provinces uncored if they don't give OE. When designing your custom nation, by far the most important idea you can choose to include is the [![May establish Siberian frontiers.png](https://eu4.paradoxwikis.com/images/thumb/0/00/May_establish_Siberian_frontiers.png/36px-May_establish_Siberian_frontiers.png)](/File:May_establish_Siberian_frontiers.png) *May establish Siberian frontiers* diplomatic idea, since [frontiers](/Colonization#Frontiers \"Colonization\") aren't limited in number in the same way that standard colonization is: this will allow you to expand extremely rapidly across the continent at the cost of diplomatic power.",
  },
  {
    id: 'ach_318',
    name: 'Foremost Servitor of Jagannath',
    description: 'Start as Orissa and own or have a subject own all tropical wood provinces.',
    icon: 'https://eu4.paradoxwikis.com/images/3/32/Foremost_Servitor_of_Jagannath.png',
    dlc: '',
    version: '1.9',
    difficulty: 'H',
    game: 'eu4',
    guideUrl: 'https://eu4.paradoxwikis.com/Foremost_Servitor_of_Jagannath',
    startingConditions:
      '[![Yes](https://eu4.paradoxwikis.com/images/thumb/d/da/Ledger_yes.png/28px-Ledger_yes.png)](/File:Ledger_yes.png "Yes") Playing as [![Flag of Orissa](https://eu4.paradoxwikis.com/images/thumb/7/7c/Orissa.png/20px-Orissa.png)](/Orissa "Orissa") [Orissa](/Orissa "Orissa")',
    completionRequirements:
      '[![Tropical wood.png](https://eu4.paradoxwikis.com/images/thumb/f/f7/Tropical_Wood.png/28px-Tropical_Wood.png)](/Tropical_wood "Tropical wood") All provinces with tropical wood are owned by the player\'s country or its non-tributary [subjects](/Subjects "Subjects").\n\nExpand\n\n[![](https://eu4.paradoxwikis.com/images/thumb/2/2c/Tropical_Wood_map.png/320px-Tropical_Wood_map.png)](/File:Tropical_Wood_map.png)\n\n[](/File:Tropical_Wood_map.png "Enlarge")\n\nProvinces producing tropical wood at game start (orange) and uncolonized provinces capable of producing tropical wood (yellow)',
    notes: '',
  },
  {
    id: 'ach_319',
    name: 'Frozen Assets',
    description:
      'Start as Novgorod and control 90% of the trade power in the White Sea trade node while it is the highest valued trade node in the world.',
    icon: 'https://eu4.paradoxwikis.com/images/2/27/Frozen_Assets.jpg',
    dlc: '',
    version: '1.14',
    difficulty: 'VH',
    game: 'eu4',
    guideUrl: '',
    startingConditions:
      '[![Yes](https://eu4.paradoxwikis.com/images/thumb/d/da/Ledger_yes.png/28px-Ledger_yes.png)](/File:Ledger_yes.png "Yes") Playing as [![Flag of Novgorod](https://eu4.paradoxwikis.com/images/thumb/5/5e/Novgorod.png/20px-Novgorod.png)](/Novgorod "Novgorod") [Novgorod](/Novgorod "Novgorod")',
    completionRequirements:
      '[![Yes](https://eu4.paradoxwikis.com/images/thumb/d/da/Ledger_yes.png/28px-Ledger_yes.png)](/File:Ledger_yes.png "Yes") Have 90% trade share in White Sea and it\'s the highest valued trade node in the world.',
    notes:
      '*   Note that "highest valued trade" means Total trade value *minus* outgoing trade.\n*   Not too difficult once you become powerful. You should be able to steer most Asian trade towards the white sea. Trade and plutocratic ideas can be helpful, but are not necessary : trade companies, the Great Russian Federation reform, and monuments like Bam citadel will provide you as many merchants as you need. Building manufactories (not workshops) in downstream nodes like Girin, Beijing, Yumen, etc. will increase the trade value downstream drastically. Note that England gets an event (« The Muscovite trade company ») that gives them permanent +20 trade power in the White Sea ̦; it can be counterbalanced by building lots of light ships.',
  },
  {
    id: 'ach_320',
    name: 'Gothic Invasion',
    description: 'Start as Theodoro and conquer all Germanic culture provinces in Europe.',
    icon: 'https://eu4.paradoxwikis.com/images/c/ce/Gothic_Invasion.png',
    dlc: '',
    version: '1.9',
    difficulty: 'VH',
    game: 'eu4',
    guideUrl: '',
    startingConditions:
      '[![Yes](https://eu4.paradoxwikis.com/images/thumb/d/da/Ledger_yes.png/28px-Ledger_yes.png)](/File:Ledger_yes.png "Yes") Playing as [![Flag of Theodoro](https://eu4.paradoxwikis.com/images/thumb/1/11/Theodoro.png/20px-Theodoro.png)](/Theodoro "Theodoro") [Theodoro](/Theodoro "Theodoro")',
    completionRequirements:
      '*   [![No](https://eu4.paradoxwikis.com/images/thumb/5/56/Ledger_no_crop.png/28px-Ledger_no_crop.png)](/File:Ledger_no_crop.png "No") *Not* playing as a [released vassal](/Vassal#Release_a_nation "Vassal")\n*   [![Province icon.png](https://eu4.paradoxwikis.com/images/thumb/1/13/Province_icon.png/28px-Province_icon.png)](/Province "Province") All provinces with *Germanic* culture group in Europe owned by [![Flag of Theodoro](https://eu4.paradoxwikis.com/images/thumb/1/11/Theodoro.png/20px-Theodoro.png)](/Theodoro "Theodoro") [Theodoro](/Theodoro "Theodoro")\n*   [![Culture icon.png](https://eu4.paradoxwikis.com/images/thumb/2/29/Culture_icon.png/28px-Culture_icon.png)](/Culture "Culture") Culture is either:\n    *   *Gothic* from the Byzantine culture group\n    *   *Gothic* from the Germanic culture group',
    notes:
      'Forming other nations will make this achievement much more difficult, because then all *Germanic* cultured provinces in Europe have to be converted to another culture to fulfill the requirements. This does not apply if the formed country is a [Former colonial nation formable](/Formable_countries#Former_colonial_nations "Formable countries") and Theodoro still has provinces in the old world, because forming such a country as Theodoro keeps Theodoro alive so the achievement can still be fulfilled by feeding all *Germanic* provinces in Europe to Theodoro if they are later vassalized. Note though that playing as a released colonial nation doesn\'t work, because it counts as playing as a released vassal.',
  },
  {
    id: 'ach_321',
    name: 'Great Perm',
    description:
      'As Perm, own or have a subject own the Russian, Siberian, Scandinavian, Canadian, Hudson Bay and Cascadian Regions.',
    icon: 'https://eu4.paradoxwikis.com/images/4/4a/Great_Perm.jpg',
    dlc: '',
    version: '1.14',
    difficulty: 'VH',
    game: 'eu4',
    guideUrl: '',
    startingConditions:
      '[![Yes](https://eu4.paradoxwikis.com/images/thumb/d/da/Ledger_yes.png/28px-Ledger_yes.png)](/File:Ledger_yes.png "Yes") Playing as [![Flag of Perm](https://eu4.paradoxwikis.com/images/thumb/8/8e/Perm.png/20px-Perm.png)](/Perm "Perm") [Perm](/Perm "Perm")',
    completionRequirements:
      '*   [![No](https://eu4.paradoxwikis.com/images/thumb/5/56/Ledger_no_crop.png/28px-Ledger_no_crop.png)](/File:Ledger_no_crop.png "No") *Not* playing as a [released vassal](/Vassal#Release_a_nation "Vassal")\n*   [![Yes](https://eu4.paradoxwikis.com/images/thumb/d/da/Ledger_yes.png/28px-Ledger_yes.png)](/File:Ledger_yes.png "Yes") Is [![Flag of Perm](https://eu4.paradoxwikis.com/images/thumb/8/8e/Perm.png/20px-Perm.png)](/Perm "Perm") [Perm](/Perm "Perm")\n*   [![Province icon.png](https://eu4.paradoxwikis.com/images/thumb/1/13/Province_icon.png/28px-Province_icon.png)](/Province "Province") All provinces in the [Canada](/North_American_regions#Canada "North American regions"), [Cascadia](/Cascadia "Cascadia"), [Hudson Bay](/Hudson_Bay "Hudson Bay"), [East Siberia](/Asian_regions "Asian regions"), [West Siberia](/Asian_regions "Asian regions"), [Scandinavia](/Scandinavia_\\(region\\) "Scandinavia (region)"), [Russia](/Russia_\\(region\\) "Russia (region)") and [Ural](/Ural "Ural") regions are owned by [![Flag of Perm](https://eu4.paradoxwikis.com/images/thumb/8/8e/Perm.png/20px-Perm.png)](/Perm "Perm") [Perm](/Perm "Perm") *or* its non-tributary [subjects](/Subjects "Subjects").\n\nExpand\n\n[![Great Perm map.png](https://eu4.paradoxwikis.com/images/thumb/3/39/Great_Perm_map.png/140px-Great_Perm_map.png)](/File:Great_Perm_map.png)\n\n[](/File:Great_Perm_map.png "Enlarge")',
    notes: '',
  },
  {
    id: 'ach_322',
    name: "I'll graze my horse here.. And here...",
    description: 'As a Horde, own over 200 provinces producing grain.',
    icon: 'https://eu4.paradoxwikis.com/images/d/d0/I%27ll_graze_my_horse_here.._And_here....png',
    dlc: '',
    version: '1.20',
    difficulty: 'H',
    game: 'eu4',
    guideUrl: '',
    startingConditions:
      '[![Tab domestic government.png](https://eu4.paradoxwikis.com/images/thumb/f/ff/Tab_domestic_government.png/28px-Tab_domestic_government.png)](/File:Tab_domestic_government.png) Government type is [![Government steppe horde.png](https://eu4.paradoxwikis.com/images/thumb/a/a8/Government_native.png/28px-Government_native.png)](/Steppe_nomads "Steppe nomads") *Steppe Nomads*',
    completionRequirements:
      '*   [![Government steppe horde.png](https://eu4.paradoxwikis.com/images/thumb/a/a8/Government_native.png/28px-Government_native.png)](/Steppe_nomads "Steppe nomads") Has Steppe Nomad or Great Mongol State reform\n*   [![Goods produced modifier.png](https://eu4.paradoxwikis.com/images/thumb/1/12/Goods_produced_modifier.png/28px-Goods_produced_modifier.png)](/Goods_produced_modifier "Goods produced modifier") 200 provinces produce grain *or* livestock',
    notes: '',
  },
  {
    id: 'ach_323',
    name: 'Inner Turmoil',
    description: 'Starting as The Isles, own 20 provinces by 1500, none of which are on Islands.',
    icon: 'https://eu4.paradoxwikis.com/images/6/61/Inner_Turmoil.png',
    dlc: '',
    version: '1.30',
    difficulty: 'VH',
    game: 'eu4',
    guideUrl: '',
    startingConditions:
      '*   [![Yes](https://eu4.paradoxwikis.com/images/thumb/d/da/Ledger_yes.png/28px-Ledger_yes.png)](/File:Ledger_yes.png "Yes") Playing as [![Flag of The Isles](https://eu4.paradoxwikis.com/images/thumb/a/ae/The_Isles.png/20px-The_Isles.png)](/The_Isles "The Isles") [The Isles](/The_Isles "The Isles")\n*   [![No](https://eu4.paradoxwikis.com/images/thumb/5/56/Ledger_no_crop.png/28px-Ledger_no_crop.png)](/File:Ledger_no_crop.png "No") *Not* using a [random New World](/Random_New_World "Random New World")',
    completionRequirements:
      '*   [![Time Icon.png](https://eu4.paradoxwikis.com/images/7/70/Time_Icon.png)](/Time "Time") The year is before 1500\n*   owns at least 20 fully colonized provinces([cities](/Cities "Cities")) that are *not* [on an island](/Island#province_is_on_an_island "Island")',
    notes:
      "it is allowed to have provinces on islands, but these don't count towards the 20. Islands in the context of this achievement means any province which does not have a land connection to mainland continents, meaning any province in Britain or Ireland will not count. Unfinished colonies also don't count. An easy way to achieve this is to wait until one of the berber nations is without allies and noCB them. You can core Moroccan and Sus provinces with extended range from exploration ideas and the colonial range advisor. From there, you can keep eating North Africa, or go to West Africa. The provinces do not need to be cored.",
  },
  {
    id: 'ach_324',
    name: 'Jihad',
    description: 'As Najd, own 500 Sunni provinces.',
    icon: 'https://eu4.paradoxwikis.com/images/e/ee/Jihad.jpg',
    dlc: '',
    version: '1.1',
    difficulty: 'VH',
    game: 'eu4',
    guideUrl: '',
    startingConditions:
      '*   [![Yes](https://eu4.paradoxwikis.com/images/thumb/d/da/Ledger_yes.png/28px-Ledger_yes.png)](/File:Ledger_yes.png "Yes") Playing as [![Flag of Najd](https://eu4.paradoxwikis.com/images/thumb/c/c9/Najd.png/20px-Najd.png)](/Najd "Najd") [Najd](/Najd "Najd")\n*   [![Tolerance own.png](https://eu4.paradoxwikis.com/images/thumb/d/d9/Tolerance_of_the_true_faith.png/28px-Tolerance_of_the_true_faith.png)](/Tolerance_of_the_true_faith "Tolerance of the true faith") Religion is [![Sunni Islam](https://eu4.paradoxwikis.com/images/thumb/2/2f/Sunni.png/28px-Sunni.png)](/Sunni "Sunni") Sunni',
    completionRequirements:
      '*   [![Province icon.png](https://eu4.paradoxwikis.com/images/thumb/1/13/Province_icon.png/28px-Province_icon.png)](/Province "Province") Own **500** provinces with Sunni religion\n*   [![Sunni Islam](https://eu4.paradoxwikis.com/images/thumb/2/2f/Sunni.png/28px-Sunni.png)](/Sunni "Sunni") Is Sunni',
    notes: 'Easier to achieve as many new provinces were added to the game since release.',
  },
  {
    id: 'ach_325',
    name: 'KHAAAAAAN',
    description: 'Restore the Mongol Empire before the Age of Absolutism.',
    icon: 'https://eu4.paradoxwikis.com/images/b/ba/KHAAAAAAN.png',
    dlc: '',
    version: '1.32',
    difficulty: 'VH',
    game: 'eu4',
    guideUrl: '',
    startingConditions: '',
    completionRequirements:
      '*   [![No](https://eu4.paradoxwikis.com/images/thumb/5/56/Ledger_no_crop.png/28px-Ledger_no_crop.png)](/File:Ledger_no_crop.png "No") It is *not* the [![Age of Absolutism.png](https://eu4.paradoxwikis.com/images/thumb/e/ec/Age_of_Absolutism.png/28px-Age_of_Absolutism.png)](/Age_of_Absolutism "Age of Absolutism") Age of Absolutism or the [![Age of Revolutions.png](https://eu4.paradoxwikis.com/images/thumb/5/59/Age_of_Revolutions.png/28px-Age_of_Revolutions.png)](/Age_of_Revolutions "Age of Revolutions") Age of Revolutions\n*   [![Yes](https://eu4.paradoxwikis.com/images/thumb/d/da/Ledger_yes.png/28px-Ledger_yes.png)](/File:Ledger_yes.png "Yes") Is the [![Flag of Mongol Empire](https://eu4.paradoxwikis.com/images/thumb/e/e4/Mongol_Empire.png/20px-Mongol_Empire.png)](/Mongol_Empire "Mongol Empire") [Mongol Empire](/Mongol_Empire "Mongol Empire")',
    notes: '',
  },
  {
    id: 'ach_326',
    name: 'Komnenoi Empire',
    description: 'As Trebizond, have the Empire government rank.',
    icon: 'https://eu4.paradoxwikis.com/images/5/58/Komnenoi_Empire.jpg',
    dlc: '',
    version: '1.12',
    difficulty: 'H',
    game: 'eu4',
    guideUrl: '',
    startingConditions:
      '[![Yes](https://eu4.paradoxwikis.com/images/thumb/d/da/Ledger_yes.png/28px-Ledger_yes.png)](/File:Ledger_yes.png "Yes") Playing as [![Flag of Trebizond](https://eu4.paradoxwikis.com/images/thumb/1/1f/Trebizond.png/20px-Trebizond.png)](/Trebizond "Trebizond") [Trebizond](/Trebizond "Trebizond")',
    completionRequirements:
      '*   [![No](https://eu4.paradoxwikis.com/images/thumb/5/56/Ledger_no_crop.png/28px-Ledger_no_crop.png)](/File:Ledger_no_crop.png "No") *Not* playing as a [released vassal](/Vassal#Release_a_nation "Vassal")\n*   [![Yes](https://eu4.paradoxwikis.com/images/thumb/d/da/Ledger_yes.png/28px-Ledger_yes.png)](/File:Ledger_yes.png "Yes") Is [![Flag of Trebizond](https://eu4.paradoxwikis.com/images/thumb/1/1f/Trebizond.png/20px-Trebizond.png)](/Trebizond "Trebizond") [Trebizond](/Trebizond "Trebizond")\n*   [![Empire rank](https://eu4.paradoxwikis.com/images/thumb/9/9d/Empire.png/28px-Empire.png)](/Government_rank "Empire rank") Is empire',
    notes:
      'Possible tactics include trying to become the emperor of the HRE or culture-shifting to Bulgarian and enacting Bulgarian Tsardom government, as these will immediately make you an empire.',
  },
  {
    id: 'ach_327',
    name: 'Meissner Porcelain',
    description: 'As Saxony, own or have a subject own all Chinaware provinces in the world.',
    icon: 'https://eu4.paradoxwikis.com/images/4/40/Meissner_Porcelain.jpg',
    dlc: '',
    version: '1.12',
    difficulty: 'H',
    game: 'eu4',
    guideUrl: '',
    startingConditions:
      '[![Yes](https://eu4.paradoxwikis.com/images/thumb/d/da/Ledger_yes.png/28px-Ledger_yes.png)](/File:Ledger_yes.png "Yes") Playing as [![Flag of Saxony](https://eu4.paradoxwikis.com/images/thumb/7/74/Saxony.png/20px-Saxony.png)](/Saxony "Saxony") [Saxony](/Saxony "Saxony")',
    completionRequirements:
      '*   [![No](https://eu4.paradoxwikis.com/images/thumb/5/56/Ledger_no_crop.png/28px-Ledger_no_crop.png)](/File:Ledger_no_crop.png "No") *Not* playing as a [released vassal](/Vassal#Release_a_nation "Vassal")\n*   [![Yes](https://eu4.paradoxwikis.com/images/thumb/d/da/Ledger_yes.png/28px-Ledger_yes.png)](/File:Ledger_yes.png "Yes") Is [![Flag of Saxony](https://eu4.paradoxwikis.com/images/thumb/7/74/Saxony.png/20px-Saxony.png)](/Saxony "Saxony") [Saxony](/Saxony "Saxony")\n*   [![Chinaware.png](https://eu4.paradoxwikis.com/images/thumb/9/92/Chinaware.png/28px-Chinaware.png)](/Chinaware "Chinaware") All provinces with chinaware are owned by Saxony or its non-tributary [subjects](/Subjects "Subjects").',
    notes: 'Chinaware appears in China, Japan, Korea and the East Indies.',
  },
  {
    id: 'ach_328',
    name: 'Never say Nevers',
    description: 'As Nevers, own the entire France region as core provinces.',
    icon: 'https://eu4.paradoxwikis.com/images/5/53/Never_say_Nevers.png',
    dlc: '',
    version: '1.26',
    difficulty: 'H',
    game: 'eu4',
    guideUrl: '',
    startingConditions:
      '[![Yes](https://eu4.paradoxwikis.com/images/thumb/d/da/Ledger_yes.png/28px-Ledger_yes.png)](/File:Ledger_yes.png "Yes") Playing as [![Flag of Nevers](https://eu4.paradoxwikis.com/images/thumb/9/99/Nevers.png/20px-Nevers.png)](/Nevers "Nevers") [Nevers](/Nevers "Nevers")',
    completionRequirements:
      '*   [![Yes](https://eu4.paradoxwikis.com/images/thumb/d/da/Ledger_yes.png/28px-Ledger_yes.png)](/File:Ledger_yes.png "Yes") Is [![Flag of Nevers](https://eu4.paradoxwikis.com/images/thumb/9/99/Nevers.png/20px-Nevers.png)](/Nevers "Nevers") [Nevers](/Nevers "Nevers")\n*   [![Core Icon.png](https://eu4.paradoxwikis.com/images/thumb/1/12/Core_Icon.png/28px-Core_Icon.png)](/Core "Core") Own and have cores on every province in the France region.',
    notes: '',
  },
  {
    id: 'ach_329',
    name: 'New, New Deli',
    description: 'As Deli, have your capital in the Delhi province.',
    icon: 'https://eu4.paradoxwikis.com/images/7/7f/New%2C_New_Deli.jpg',
    dlc: '',
    version: '1.31',
    difficulty: 'H',
    game: 'eu4',
    guideUrl: '',
    startingConditions:
      '*   [![Yes](https://eu4.paradoxwikis.com/images/thumb/d/da/Ledger_yes.png/28px-Ledger_yes.png)](/File:Ledger_yes.png "Yes") Playing as [![Flag of Deli](https://eu4.paradoxwikis.com/images/thumb/0/07/Deli.png/20px-Deli.png)](/Deli "Deli") [Deli](/Deli "Deli")\n*   [![No](https://eu4.paradoxwikis.com/images/thumb/5/56/Ledger_no_crop.png/28px-Ledger_no_crop.png)](/File:Ledger_no_crop.png "No") *Not* using a [random New World](/Random_New_World "Random New World")',
    completionRequirements:
      '*   [![Yes](https://eu4.paradoxwikis.com/images/thumb/d/da/Ledger_yes.png/28px-Ledger_yes.png)](/File:Ledger_yes.png "Yes") Is [![Flag of Deli](https://eu4.paradoxwikis.com/images/thumb/0/07/Deli.png/20px-Deli.png)](/Deli "Deli") [Deli](/Deli "Deli")\n*   [![Capital.png](https://eu4.paradoxwikis.com/images/thumb/6/6e/Capital.png/28px-Capital.png)](/Capital "Capital") Capital is Delhi (522)',
    notes:
      'This achievement is only visible if the [![Leviathan.png](https://eu4.paradoxwikis.com/images/thumb/0/0a/Leviathan.png/28px-Leviathan.png)](/Leviathan "Leviathan") Leviathan DLC is active, but it can be achieved even without the DLC.\n\nCan be done in 5–10 years, depending on RNG. Broadly: get as many allies as you can to deter coalition. Vassalize an OPM adjacent to [![Flag of Delhi](https://eu4.paradoxwikis.com/images/thumb/d/d5/Delhi.png/20px-Delhi.png)](/Delhi "Delhi") [Delhi](/Delhi "Delhi"), preferably [![Flag of Garhwal](https://eu4.paradoxwikis.com/images/thumb/d/dd/Garhwal.png/20px-Garhwal.png)](/Garhwal "Garhwal") [Garhwal](/Garhwal "Garhwal") or [![Flag of Sirmur](https://eu4.paradoxwikis.com/images/thumb/0/0e/Sirmur.png/20px-Sirmur.png)](/Sirmur "Sirmur") [Sirmur](/Sirmur "Sirmur") to even the AE. Then conquer Delhi (and some needed to connect). Give every other territories to vassals, or sell them to other countries. In a war, lose your capital Riau, after that Delhi will be the new capital.',
  },
  {
    id: 'ach_330',
    name: 'Norwegian Wood',
    description: 'Own or have a subject own all naval supplies provinces as Norway.',
    icon: 'https://eu4.paradoxwikis.com/images/a/ad/Norwegian_Wood.jpg',
    dlc: '',
    version: '1.1',
    difficulty: 'VH',
    game: 'eu4',
    guideUrl: '',
    startingConditions:
      '[![Yes](https://eu4.paradoxwikis.com/images/thumb/d/da/Ledger_yes.png/28px-Ledger_yes.png)](/File:Ledger_yes.png "Yes") Playing as [![Flag of Norway](https://eu4.paradoxwikis.com/images/thumb/0/0f/Norway.png/20px-Norway.png)](/Norway "Norway") [Norway](/Norway "Norway")',
    completionRequirements:
      '[![Naval supplies.png](https://eu4.paradoxwikis.com/images/thumb/f/f1/Naval_supplies.png/28px-Naval_supplies.png)](/Naval_supplies "Naval supplies") Own or have a non-tributary subject own all provinces with naval supplies.',
    notes:
      'Before patch 1.36.2, it was required that the provinces were owned by [![Flag of Norway](https://eu4.paradoxwikis.com/images/thumb/0/0f/Norway.png/20px-Norway.png)](/Norway "Norway") [Norway](/Norway "Norway") or [![Flag of Norway](https://eu4.paradoxwikis.com/images/thumb/0/0f/Norway.png/20px-Norway.png)](/Norway "Norway") [Norway](/Norway "Norway")\'s subjects, but since patch 1.36.2, they have to be owned by the player\'s country and its subjects, so the player can form any country and still get the achievement without having to get Norway back on the map.',
  },
  {
    id: 'ach_331',
    name: 'Quizquiz Pro Quo',
    description: 'As Quizquiz, have your capital in the Anjou province.',
    icon: 'https://eu4.paradoxwikis.com/images/a/af/Quizquiz_Pro_Quo.jpg',
    dlc: '',
    version: '1.31',
    difficulty: 'VH',
    game: 'eu4',
    guideUrl: '',
    startingConditions:
      '*   [![Yes](https://eu4.paradoxwikis.com/images/thumb/d/da/Ledger_yes.png/28px-Ledger_yes.png)](/File:Ledger_yes.png "Yes") Playing as [![Flag of Quizquiz](https://eu4.paradoxwikis.com/images/thumb/b/b3/Quizquiz.png/20px-Quizquiz.png)](/Quizquiz "Quizquiz") [Quizquiz](/Quizquiz "Quizquiz")\n*   [![No](https://eu4.paradoxwikis.com/images/thumb/5/56/Ledger_no_crop.png/28px-Ledger_no_crop.png)](/File:Ledger_no_crop.png "No") *Not* using a [random New World](/Random_New_World "Random New World")',
    completionRequirements:
      '*   [![Yes](https://eu4.paradoxwikis.com/images/thumb/d/da/Ledger_yes.png/28px-Ledger_yes.png)](/File:Ledger_yes.png "Yes") Is [![Flag of Quizquiz](https://eu4.paradoxwikis.com/images/thumb/b/b3/Quizquiz.png/20px-Quizquiz.png)](/Quizquiz "Quizquiz") [Quizquiz](/Quizquiz "Quizquiz")\n*   [![Capital.png](https://eu4.paradoxwikis.com/images/thumb/6/6e/Capital.png/28px-Capital.png)](/Capital "Capital") Capital is Anjou (178)',
    notes:
      'This achievement is only visible if the [![Leviathan.png](https://eu4.paradoxwikis.com/images/thumb/0/0a/Leviathan.png/28px-Leviathan.png)](/Leviathan "Leviathan") Leviathan DLC is active, but it can be achieved even without the DLC.',
  },
  {
    id: 'ach_332',
    name: 'Rags and Riches',
    description:
      'Have the highest income in the world while neither owning nor starting with a province with a development level higher than 10.',
    icon: 'https://eu4.paradoxwikis.com/images/0/0d/Rags_and_Riches.jpg',
    dlc: '',
    version: '1.14',
    difficulty: 'VH',
    game: 'eu4',
    guideUrl: '',
    startingConditions:
      '*   [![No](https://eu4.paradoxwikis.com/images/thumb/5/56/Ledger_no_crop.png/28px-Ledger_no_crop.png)](/File:Ledger_no_crop.png "No") No owned province has more than [![Development.png](https://eu4.paradoxwikis.com/images/thumb/a/a4/Development.png/28px-Development.png)](/Development "Development") 10 development at the start of the game',
    completionRequirements:
      '*   [![No](https://eu4.paradoxwikis.com/images/thumb/5/56/Ledger_no_crop.png/28px-Ledger_no_crop.png)](/File:Ledger_no_crop.png "No") No owned province has more than [![Development.png](https://eu4.paradoxwikis.com/images/thumb/a/a4/Development.png/28px-Development.png)](/Development "Development") 10 development\n*   [![No](https://eu4.paradoxwikis.com/images/thumb/5/56/Ledger_no_crop.png/28px-Ledger_no_crop.png)](/File:Ledger_no_crop.png "No") No other country has a higher income than this country',
    notes:
      'One possible start is [![Flag of Norway](https://eu4.paradoxwikis.com/images/thumb/0/0f/Norway.png/20px-Norway.png)](/Norway "Norway") [Norway](/Norway "Norway"). Stay as a vassal under [![Flag of Denmark](https://eu4.paradoxwikis.com/images/thumb/6/69/Denmark.png/20px-Denmark.png)](/Denmark "Denmark") [Denmark](/Denmark "Denmark") for protection, rush expansion ideas, then get exploration after you reach diplomatic tech 7, and colonize Newfoundland from there, triggering the Grand Banks Fisheries which will power your colonial nation of Vinland. After Vinland forms, you can release and choose to play as them well within the time-frame of Denmark beginning integration, bypassing the PU. From there, expand and build as many manufactories as possible, swapping into Canada or Quebec\'s ideas, or even the USA. An important thing to note is that you can have a 10+ development province after the start of the campaign, but not during the month you\'re trying to count the highest income.\n\nA great alternative start is [![Flag of Wolgast](https://eu4.paradoxwikis.com/images/thumb/f/f6/Wolgast.png/20px-Wolgast.png)](/Wolgast "Wolgast") [Wolgast](/Wolgast "Wolgast"). Play the regular HRE game, expanding into Denmark and Russia. Exploit all provinces within 10-20 development (requires [![Cradle of Civilization.png](https://eu4.paradoxwikis.com/images/thumb/2/23/Cradle_of_Civilization.png/28px-Cradle_of_Civilization.png)](/Cradle_of_Civilization "Cradle of Civilization") Cradle of Civilization), boost development of all provinces below 10. Eventually, your income from flat 10 dev provinces will be the highest in the world, especially if you consider expanding into the west and taking control over the Channel. Keep all high dev provinces like Lübeck under vassals.\n\nAnother good variant is [![Flag of Kilwa](https://eu4.paradoxwikis.com/images/thumb/c/cb/Kilwa.png/20px-Kilwa.png)](/Kilwa "Kilwa") [Kilwa](/Kilwa "Kilwa"). Having Feudalism makes your country a dominant power in region, and you can easily expand. Almost all conquered provinces have development below 11 dev, so you will not need to exploit them (it takes much time). You can get 5 provinces with gold at the start and another 2 in Ethiopia. Other provinces also have good resources like ivory. Also your home trade nodes (Zanzibar and Cape) are convenient for collecting – you can increase income by steering trade from India and Malacca. At the start you should rush to admin tech 5 and get colonists for colonizing coasts (especially Cape) before the Europeans.\n\nOne way to cheese this achievement post-1.36 is to take the provinces of Iskandariyya, Rashid, Dumyat, and Sharqiya, as well as war reparations from the [![Flag of Mamluks](https://eu4.paradoxwikis.com/images/thumb/c/ca/The_Mamluks.png/20px-The_Mamluks.png)](/Mamluks "Mamluks") [Mamluks](/Mamluks "Mamluks"). Build Marketplaces in Iskandariyya, Rashid, and Dumyat, and 5 buildings in Sharqiya, as well as ensuring that Sharqiya has been developed 10 times, and then return all provinces. This allows the Mamluks to complete the mission "Highway of an Empire", which temporarily grants them 20,000 ducats, which you get 2,000 from via war reparations. Make sure the Mamluks are able to pay for the construction of the canal, with inflation taken into consideration by gifting money to them before they complete the mission by checking the ledger. For example, if the ledger says the Mamluks have 1% inflation, round that up to 2% and multiply by 20,000 ducats; thus, ensure the Mamluks have 400 ducats in their treasury. On the next month tick, you will receive 2,000 ducats in income. Good starting countries for this strategy include [![Flag of Ethiopia](https://eu4.paradoxwikis.com/images/thumb/0/06/Ethiopia.png/20px-Ethiopia.png)](/Ethiopia "Ethiopia") [Ethiopia](/Ethiopia "Ethiopia"), [![Flag of Ajuuraan](https://eu4.paradoxwikis.com/images/thumb/5/52/Ajuuraan.png/20px-Ajuuraan.png)](/Ajuuraan "Ajuuraan") [Ajuuraan](/Ajuuraan "Ajuuraan"), or even [![Flag of Fadl](https://eu4.paradoxwikis.com/images/thumb/3/34/Fadl.png/20px-Fadl.png)](/Fadl "Fadl") [Fadl](/Fadl "Fadl"), where you can get the Ottomans to support your independence and gain the provinces necessary in your independence war with the Mamluks.\n\nThe game does its check for highest income on every monthly tick meaning you could release nations from all your provinces with more than ten development and still get the achievement even if the next monthly tick would see your income drop tremendously as long as on the previous month tick, you had the highest income.',
  },
  {
    id: 'ach_333',
    name: 'Raja of the Rajput Reich',
    description: 'Conquer all of Germany as Nagaur.',
    icon: 'https://eu4.paradoxwikis.com/images/f/ff/Raja_of_the_Rajput_Reich.png',
    dlc: '',
    version: '1.9',
    difficulty: 'VH',
    game: 'eu4',
    guideUrl: '',
    startingConditions:
      '[![Yes](https://eu4.paradoxwikis.com/images/thumb/d/da/Ledger_yes.png/28px-Ledger_yes.png)](/File:Ledger_yes.png "Yes") Playing as [![Flag of Nagaur](https://eu4.paradoxwikis.com/images/thumb/e/e4/Nagaur.png/20px-Nagaur.png)](/Nagaur "Nagaur") [Nagaur](/Nagaur "Nagaur")',
    completionRequirements:
      '*   [![No](https://eu4.paradoxwikis.com/images/thumb/5/56/Ledger_no_crop.png/28px-Ledger_no_crop.png)](/File:Ledger_no_crop.png "No") *Not* playing as a [released vassal](/Vassal#Release_a_nation "Vassal")\n*   [![Province icon.png](https://eu4.paradoxwikis.com/images/thumb/1/13/Province_icon.png/28px-Province_icon.png)](/Province "Province") All provinces in [North Germany](/North_Germany "North Germany") and [South Germany](/South_Germany "South Germany") regions are owned by the player\'s country *or* its non-tributary [subjects](/Subjects "Subjects").\n\nExpand\n\n[![Raja of the Rajput Reich map.png](https://eu4.paradoxwikis.com/images/thumb/5/5e/Raja_of_the_Rajput_Reich_map.png/140px-Raja_of_the_Rajput_Reich_map.png)](/File:Raja_of_the_Rajput_Reich_map.png)\n\n[](/File:Raja_of_the_Rajput_Reich_map.png "Enlarge")',
    notes:
      'One possible start is to quickly ally Jaunpur and then call them in against Delhi, who are weak at the start due to large disloyal vassal Sirhind. Take the provinces of Delhi, Sirhind, Lahore, and connecting provinces. You can then reform [![Flag of Delhi](https://eu4.paradoxwikis.com/images/thumb/d/d5/Delhi.png/20px-Delhi.png)](/Delhi "Delhi") [Delhi](/Delhi "Delhi") once they\'re wiped out, which will give you several hundred development of cores for free as well as a fairly strong idea set and mission tree. You can later culture-shift and form [![Flag of Mughals](https://eu4.paradoxwikis.com/images/thumb/e/e6/Mughals.png/20px-Mughals.png)](/Mughals "Mughals") [Mughals](/Mughals "Mughals") for an even stronger idea set and tree. Alternatively you can form [![Flag of Rajputana](https://eu4.paradoxwikis.com/images/thumb/e/e8/Rajputana.png/20px-Rajputana.png)](/Rajputana "Rajputana") [Rajputana](/Rajputana "Rajputana") and maybe even [![Flag of Hindustan](https://eu4.paradoxwikis.com/images/thumb/3/3e/Hindustan.png/20px-Hindustan.png)](/Hindustan "Hindustan") [Hindustan](/Hindustan "Hindustan"). With a strong power base, you are ready to expand northwest to Germany.',
  },
  {
    id: 'ach_334',
    name: "Saladin's Legacy",
    description: 'Playing as Hisn Kayfa, reforge the Ayyubid Empire.',
    icon: 'https://eu4.paradoxwikis.com/images/f/fb/Saladin%27s_Legacy.png',
    dlc: '',
    version: '1.23',
    difficulty: 'VH',
    game: 'eu4',
    guideUrl: '',
    startingConditions:
      '[![Yes](https://eu4.paradoxwikis.com/images/thumb/d/da/Ledger_yes.png/28px-Ledger_yes.png)](/File:Ledger_yes.png "Yes") Playing as [![Flag of Hisn Kayfa](https://eu4.paradoxwikis.com/images/thumb/4/4c/Hisn_Kayfa.png/20px-Hisn_Kayfa.png)](/Hisn_Kayfa "Hisn Kayfa") [Hisn Kayfa](/Hisn_Kayfa "Hisn Kayfa")',
    completionRequirements:
      '[![Province icon.png](https://eu4.paradoxwikis.com/images/thumb/1/13/Province_icon.png/28px-Province_icon.png)](/Province "Province") Own the following provinces:\n\nExpand\n\n[![Saladin\'s Legacy map.png](https://eu4.paradoxwikis.com/images/thumb/2/20/Saladin%27s_Legacy_map.png/140px-Saladin%27s_Legacy_map.png)](/File:Saladin%27s_Legacy_map.png)\n\n[](/File:Saladin%27s_Legacy_map.png "Enlarge")',
    notes:
      'You will most likely not be able to ally the [![Flag of Ottomans](https://eu4.paradoxwikis.com/images/thumb/8/89/Ottomans.png/20px-Ottomans.png)](/Ottomans "Ottomans") [Ottomans](/Ottomans "Ottomans") at start. One strategy is to restart until [![Flag of Aq Qoyunlu](https://eu4.paradoxwikis.com/images/thumb/6/67/Aq_Qoyunlu.png/20px-Aq_Qoyunlu.png)](/Aq_Qoyunlu "Aq Qoyunlu") [Aq Qoyunlu](/Aq_Qoyunlu "Aq Qoyunlu") is friendly, and allying them along with, if possible, [![Flag of Ajam](https://eu4.paradoxwikis.com/images/thumb/d/df/Ajam.png/20px-Ajam.png)](/Ajam "Ajam") [Ajam](/Ajam "Ajam") and/or [![Flag of Mamluks](https://eu4.paradoxwikis.com/images/thumb/c/ca/The_Mamluks.png/20px-The_Mamluks.png)](/Mamluks "Mamluks") [Mamluks](/Mamluks "Mamluks") and attack [![Flag of Qara Qoyunlu](https://eu4.paradoxwikis.com/images/thumb/9/99/Qara_Qoyunlu.png/20px-Qara_Qoyunlu.png)](/Qara_Qoyunlu "Qara Qoyunlu") [Qara Qoyunlu](/Qara_Qoyunlu "Qara Qoyunlu") together. You can ally these two at start, if they pick QQ as a rival, and you pick "Lenient taxation" Iqta ability (that gives +1 diplomatic reputation; requires [![Cradle of Civilization.png](https://eu4.paradoxwikis.com/images/thumb/2/23/Cradle_of_Civilization.png/28px-Cradle_of_Civilization.png)](/Cradle_of_Civilization "Cradle of Civilization") Cradle of Civilization).',
  },
  {
    id: 'ach_335',
    name: 'Shahanshah',
    description: 'Start as Ardabil and form Persia or Eranshahr.',
    icon: 'https://eu4.paradoxwikis.com/images/1/1f/Shahanshah.jpg',
    dlc: '',
    version: '1.8',
    difficulty: 'VH',
    game: 'eu4',
    guideUrl: '',
    startingConditions:
      '[![Yes](https://eu4.paradoxwikis.com/images/thumb/d/da/Ledger_yes.png/28px-Ledger_yes.png)](/File:Ledger_yes.png "Yes") Playing as [![Flag of Ardabil](https://eu4.paradoxwikis.com/images/thumb/4/4d/Ardabil.png/20px-Ardabil.png)](/Ardabil "Ardabil") [Ardabil](/Ardabil "Ardabil")',
    completionRequirements:
      '*   [![No](https://eu4.paradoxwikis.com/images/thumb/5/56/Ledger_no_crop.png/28px-Ledger_no_crop.png)](/File:Ledger_no_crop.png "No") *Not* playing as a [released vassal](/Vassal#Release_a_nation "Vassal")\n*   [![Yes](https://eu4.paradoxwikis.com/images/thumb/d/da/Ledger_yes.png/28px-Ledger_yes.png)](/File:Ledger_yes.png "Yes") Is [![Flag of Persia](https://eu4.paradoxwikis.com/images/thumb/0/01/Persia.png/20px-Persia.png)](/Persia "Persia") [Persia](/Persia "Persia") *or* [![Flag of Eranshahr](https://eu4.paradoxwikis.com/images/thumb/b/bb/Eranshahr.png/20px-Eranshahr.png)](/Eranshahr "Eranshahr") [Eranshahr](/Eranshahr "Eranshahr")',
    notes:
      'It\'s possible to get [![Flag of Bahmanis](https://eu4.paradoxwikis.com/images/thumb/d/de/Bahmanis.png/20px-Bahmanis.png)](/Bahmanis "Bahmanis") [Bahmanis](/Bahmanis "Bahmanis") in India as an ally by improving relations until you can royal marry them (which removes their "Unknown") relations modifier. This will deter nearby attackers as you expand opportunistically.',
  },
  {
    id: 'ach_336',
    name: 'Spanish Fly',
    description: 'Starting as Offaly, secure a Personal Union over an Iberian nation.',
    icon: 'https://eu4.paradoxwikis.com/images/6/6e/Spanish_Fly.png',
    dlc: '',
    version: '1.28',
    difficulty: 'VH',
    game: 'eu4',
    guideUrl: '',
    startingConditions:
      '[![Yes](https://eu4.paradoxwikis.com/images/thumb/d/da/Ledger_yes.png/28px-Ledger_yes.png)](/File:Ledger_yes.png "Yes") Playing as [![Flag of Offaly](https://eu4.paradoxwikis.com/images/thumb/3/3a/Offaly.png/20px-Offaly.png)](/Offaly "Offaly") [Offaly](/Offaly "Offaly")',
    completionRequirements:
      '*   [![Personal union.png](https://eu4.paradoxwikis.com/images/thumb/3/39/Personal_union.png/28px-Personal_union.png)](/Personal_union "Personal union") Lead a [personal union](/Personal_union "Personal union") over a country whose [![Capital.png](https://eu4.paradoxwikis.com/images/thumb/6/6e/Capital.png/28px-Capital.png)](/Capital "Capital") capital fulfills both of the following conditions:\n    *   [![Province icon.png](https://eu4.paradoxwikis.com/images/thumb/1/13/Province_icon.png/28px-Province_icon.png)](/Province "Province") is in the [Iberia region](/Iberia "Iberia")\n    *   [![Culture icon.png](https://eu4.paradoxwikis.com/images/thumb/2/29/Culture_icon.png/28px-Culture_icon.png)](/Culture "Culture") has a province culture in the [Iberian culture group](/Iberian "Iberian")',
    notes:
      'Forming [![Flag of Ireland](https://eu4.paradoxwikis.com/images/thumb/4/4b/Ireland.png/20px-Ireland.png)](/Ireland "Ireland") [Ireland](/Ireland "Ireland") or another country *will not* prevent the achievement but instead only hiding its conditions. Take a single Spanish province with a core of another tag and release that tag as a vassal. Place dynasty member on the throne and annex the vassal. Return their core via the province screen to release them as an independent nation with your dynasty ruling. Claim their throne, immediately declare with restoration of union CB and enforce union for the achievement.\n\nIt is also possible to obtain a "Restoration of Union" casus belli on [![Flag of Spain](https://eu4.paradoxwikis.com/images/thumb/5/58/Spain.png/20px-Spain.png)](/Spain "Spain") [Spain](/Spain "Spain")/ [![Flag of Castile](https://eu4.paradoxwikis.com/images/thumb/e/ee/Castile.png/20px-Castile.png)](/Castile "Castile") [Castile](/Castile "Castile") by forming [![Flag of France](https://eu4.paradoxwikis.com/images/thumb/d/de/France.png/20px-France.png)](/France "France") [France](/France "France") and completing the mission [French Claim to Naples](/French_missions_without_domination#French_Claim_to_Naples "French missions without domination") (requires having the [![Emperor](https://eu4.paradoxwikis.com/images/thumb/c/c5/Emperor.png/28px-Emperor.png)](/Emperor_\\(DLC\\) "Emperor") Emperor DLC activated and the [![Domination.png](https://eu4.paradoxwikis.com/images/thumb/3/3d/Domination.png/28px-Domination.png)](/Domination "Domination") Domination not active).\n\nFurthermore, if one forms [![Flag of England](https://eu4.paradoxwikis.com/images/thumb/2/21/England.png/20px-England.png)](/England "England") [England](/England "England") and follows the Angevin path (requires [![Domination.png](https://eu4.paradoxwikis.com/images/thumb/3/3d/Domination.png/28px-Domination.png)](/Domination "Domination") the Domination DLC), the "Act of the Spanish Crown" parliment debate will release [![Flag of Spain](https://eu4.paradoxwikis.com/images/thumb/5/58/Spain.png/20px-Spain.png)](/Spain "Spain") [Spain](/Spain "Spain") as a junior partner. This works even if the government type switches to Republic during the [English Civil War](/English_Civil_War "English Civil War").',
  },
  {
    id: 'ach_337',
    name: 'Sunset Invasion',
    description: 'Own and have cores on Lisbon, Madrid, Paris, London, Amsterdam and Rome as the Aztecs.',
    icon: 'https://eu4.paradoxwikis.com/images/a/a2/Sunset_Invasion.jpg',
    dlc: '',
    version: '1.2',
    difficulty: 'VH',
    game: 'eu4',
    guideUrl: '',
    startingConditions:
      '[![Yes](https://eu4.paradoxwikis.com/images/thumb/d/da/Ledger_yes.png/28px-Ledger_yes.png)](/File:Ledger_yes.png "Yes") Playing as [![Flag of Aztec](https://eu4.paradoxwikis.com/images/thumb/e/ef/Aztec.png/20px-Aztec.png)](/Aztec "Aztec") [Aztec](/Aztec "Aztec")',
    completionRequirements:
      '[![Province icon.png](https://eu4.paradoxwikis.com/images/thumb/1/13/Province_icon.png/28px-Province_icon.png)](/Province "Province") Own and core the provinces of Lisboa, Madrid, Paris, London, Amsterdam, and Roma.\n\nExpand\n\n[![Sunset Invasion map.png](https://eu4.paradoxwikis.com/images/thumb/b/b4/Sunset_Invasion_map.png/140px-Sunset_Invasion_map.png)](/File:Sunset_Invasion_map.png)\n\n[](/File:Sunset_Invasion_map.png "Enlarge")',
    notes:
      'As a New World country European overlords will not automatically join defensive wars against their colonies by you, establish a power base in North America, then you can either get allies (unlikely as most will desire your gold provinces too much) or an effective strategy is try to trigger a defensive war, or attack a colonial province still controlled by the overlord. In the following peace treaty take European provinces from them, that way you can easily ship over your elite troops in peace time without the need to also build up a large armada. With the Unrestricted Conquest [ability from the Age of Revolutions](/Ages#Abilities_4 "Ages") you can take any province making it easy to take capitals without the need of conquering a lot of adjacent provinces.',
  },
  {
    id: 'ach_338',
    name: 'The Buddhists Strike Back',
    description: 'As Kotte or Kandy, own all of India and convert it to Theravada Buddhism.',
    icon: 'https://eu4.paradoxwikis.com/images/0/0e/The_Buddhists_Strike_Back.jpg',
    dlc: '',
    version: '1.12',
    difficulty: 'VH',
    game: 'eu4',
    guideUrl: 'https://eu4.paradoxwikis.com/The_Buddhists_Strike_Back',
    startingConditions:
      '[![Yes](https://eu4.paradoxwikis.com/images/thumb/d/da/Ledger_yes.png/28px-Ledger_yes.png)](/File:Ledger_yes.png "Yes") Playing as *either*:\n\n*    [![Flag of Kotte](https://eu4.paradoxwikis.com/images/thumb/3/3e/Kotte.png/20px-Kotte.png)](/Kotte "Kotte") [Kotte](/Kotte "Kotte")\n*    [![Flag of Kandy](https://eu4.paradoxwikis.com/images/thumb/1/1b/Kandy.png/20px-Kandy.png)](/Kandy "Kandy") [Kandy](/Kandy "Kandy")',
    completionRequirements:
      '*   [![No](https://eu4.paradoxwikis.com/images/thumb/5/56/Ledger_no_crop.png/28px-Ledger_no_crop.png)](/File:Ledger_no_crop.png "No") *Not* playing as a [released vassal](/Vassal#Release_a_nation "Vassal")\n*   [![Province icon.png](https://eu4.paradoxwikis.com/images/thumb/1/13/Province_icon.png/28px-Province_icon.png)](/Province "Province") Own and core all of the provinces in the [Indian sub-continent](/India_\\(sub-continent\\) "India (sub-continent)").\n*   [![Theravada.png](https://eu4.paradoxwikis.com/images/thumb/5/52/Theravada.png/28px-Theravada.png)](/Theravada "Theravada") All of the provinces in the [Indian sub-continent](/India_\\(sub-continent\\) "India (sub-continent)") are Theravada',
    notes:
      'Taking the province of Pataliputra will give an extra missionary. The monuments [Bagan Temples](/Bagan_Temples "Bagan Temples") and [Buddha Statues](/Buddha_Statues "Buddha Statues") give additional missionaries. If playing as Kandy, you\'ll likely also get the achievement [Cotton Kandy](/Cotton_Kandy "Cotton Kandy").',
  },
  {
    id: 'ach_339',
    name: 'The Fezzan Corridors',
    description: 'As Fezzan, control at least 90% of the trade power in Tunis, Katsina, Safi and Timbuktu.',
    icon: 'https://eu4.paradoxwikis.com/images/7/7b/The_Fezzan_Corridors.jpg',
    dlc: '',
    version: '1.16',
    difficulty: 'H',
    game: 'eu4',
    guideUrl: 'https://eu4.paradoxwikis.com/The_Fezzan_Corridors',
    startingConditions:
      '[![Yes](https://eu4.paradoxwikis.com/images/thumb/d/da/Ledger_yes.png/28px-Ledger_yes.png)](/File:Ledger_yes.png "Yes") Playing as [![Flag of Fezzan](https://eu4.paradoxwikis.com/images/thumb/1/18/Fezzan.png/20px-Fezzan.png)](/Fezzan "Fezzan") [Fezzan](/Fezzan "Fezzan")',
    completionRequirements:
      '[![Global trade power.png](https://eu4.paradoxwikis.com/images/thumb/1/10/Trade_power.png/28px-Trade_power.png)](/Trade_power "Trade power") Have at least 90% trade power in Katsina, Safi, Timbuktu and Tunis trade nodes',
    notes:
      'Since you start as a tribal government, forming [![Flag of Tripoli](https://eu4.paradoxwikis.com/images/thumb/e/ec/Tripoli.png/20px-Tripoli.png)](/Tripoli "Tripoli") [Tripoli](/Tripoli "Tripoli") is a good first step since it installs a feudal government and gives access to the [Barbary Iqta](/Barbary_Iqta "Barbary Iqta") reform, which enables raiding. Of course, you can also form [![Flag of Tunis](https://eu4.paradoxwikis.com/images/thumb/7/79/Tunis.png/20px-Tunis.png)](/Tunis "Tunis") [Tunis](/Tunis "Tunis") and [![Flag of Andalusia](https://eu4.paradoxwikis.com/images/thumb/0/09/Andalusia.png/20px-Andalusia.png)](/Andalusia "Andalusia") [Andalusia](/Andalusia "Andalusia") for the missions.\n\nThe achievement conditions will likely require conquering (or at least occupying) much of Iberia to prevent upstream trade power transfers to Tunis and Safi from Seville and Valencia. Moving the capital to Europe (e.g. by forming Andalusia) allows the formation of trade companies in these "weaker" nodes, which greatly boosts the trade power, especially when additional trade company upgrades are considered.',
  },
  {
    id: 'ach_340',
    name: 'The Great Khan',
    description:
      'Starting as Mongolia or Great Horde, own or have a subject own the Chinese, Russian and Persian regions.',
    icon: 'https://eu4.paradoxwikis.com/images/1/1a/The_Great_Khan.jpg',
    dlc: '',
    version: '1.6',
    difficulty: 'H',
    game: 'eu4',
    guideUrl: 'https://eu4.paradoxwikis.com/The_Great_Khan',
    startingConditions:
      '[![Yes](https://eu4.paradoxwikis.com/images/thumb/d/da/Ledger_yes.png/28px-Ledger_yes.png)](/File:Ledger_yes.png "Yes") Playing as *either*:\n\n*    [![Flag of Great Horde](https://eu4.paradoxwikis.com/images/thumb/b/b7/Great_Horde.png/20px-Great_Horde.png)](/Great_Horde "Great Horde") [Great Horde](/Great_Horde "Great Horde")\n*    [![Flag of Mongolia](https://eu4.paradoxwikis.com/images/thumb/b/bc/Mongolia.png/20px-Mongolia.png)](/Mongolia "Mongolia") [Mongolia](/Mongolia "Mongolia")',
    completionRequirements:
      '[![Province icon.png](https://eu4.paradoxwikis.com/images/thumb/1/13/Province_icon.png/28px-Province_icon.png)](/Province "Province") All provinces in the [China subcontinent](/China_\\(subcontinent\\) "China (subcontinent)"), and the [Pontic Steppe](/Pontic_Steppe "Pontic Steppe"), [Russia](/Russia_\\(region\\) "Russia (region)"), [Ural](/Ural "Ural"), [Persia](/Persia_\\(region\\) "Persia (region)") and [Khorasan](/Khorasan_\\(region\\) "Khorasan (region)") regions are owned by the player\'s country *or* its non-tributary [subjects](/Subjects "Subjects").\n\nExpand\n\n[![EU4TheGreatKhanRequirements.png](https://eu4.paradoxwikis.com/images/thumb/8/88/EU4TheGreatKhanRequirements.png/140px-EU4TheGreatKhanRequirements.png)](/File:EU4TheGreatKhanRequirements.png)\n\n[](/File:EU4TheGreatKhanRequirements.png "Enlarge")',
    notes:
      'The [Caucasia](/Caucasia "Caucasia") region is not needed even though it gets highlighted by the in-game achievement list.',
  },
  {
    id: 'ach_341',
    name: 'The Pheasant Strut',
    description:
      'As Gorkha form Nepal and defeat Prussia with at least 100,000 Prussian casualties in a war (both have to be primary targets of war).',
    icon: 'https://eu4.paradoxwikis.com/images/7/72/The_Pheasant_Strut.png',
    dlc: '',
    version: '1.26',
    difficulty: 'H',
    game: 'eu4',
    guideUrl: '',
    startingConditions:
      '[![Yes](https://eu4.paradoxwikis.com/images/thumb/d/da/Ledger_yes.png/28px-Ledger_yes.png)](/File:Ledger_yes.png "Yes") Playing as [![Flag of Gorkha](https://eu4.paradoxwikis.com/images/thumb/f/f8/Gorkha.png/20px-Gorkha.png)](/Gorkha "Gorkha") [Gorkha](/Gorkha "Gorkha")',
    completionRequirements:
      '*   [![Yes](https://eu4.paradoxwikis.com/images/thumb/d/da/Ledger_yes.png/28px-Ledger_yes.png)](/File:Ledger_yes.png "Yes") Is [![Flag of Nepal](https://eu4.paradoxwikis.com/images/thumb/3/3a/Nepal.png/20px-Nepal.png)](/Nepal "Nepal") [Nepal](/Nepal "Nepal")\n*    [![Flag of Prussia](https://eu4.paradoxwikis.com/images/thumb/2/28/Prussia.png/20px-Prussia.png)](/Prussia "Prussia") [Prussia](/Prussia "Prussia") must have lost at least 100,000 men in battles against [![Flag of Nepal](https://eu4.paradoxwikis.com/images/thumb/3/3a/Nepal.png/20px-Nepal.png)](/Nepal "Nepal") [Nepal](/Nepal "Nepal") in one war with both as primary participants',
    notes:
      'The game only counts the losses in battles which show [![Flag of Prussia](https://eu4.paradoxwikis.com/images/thumb/2/28/Prussia.png/20px-Prussia.png)](/Prussia "Prussia") [Prussia](/Prussia "Prussia")\'s flag in the battle list at the bottom of the war overview screen. If there are other countries on Prussia\'s side, battles which show their flag are not counted. But their losses are counted in battles which show Prussia\'s flag.\n\n [![Flag of Brandenburg](https://eu4.paradoxwikis.com/images/thumb/e/e3/Brandenburg.png/20px-Brandenburg.png)](/Brandenburg "Brandenburg") [Brandenburg](/Brandenburg "Brandenburg") or [![Flag of Teutonic Order](https://eu4.paradoxwikis.com/images/thumb/2/2f/Teutonic_Order.png/20px-Teutonic_Order.png)](/Teutonic_Order "Teutonic Order") [Teutonic Order](/Teutonic_Order "Teutonic Order") can form Prussia even when subjects, though they\'ll still need to be Protestant or Reformed. If Prussia doesn\'t form naturally, you can create them by vassalizing one of the above tags and giving them the required provinces, helping them grow large enough to field a lot of troops and declaring war on them once they form Prussia.',
  },
  {
    id: 'ach_342',
    name: 'The Re-Reconquista',
    description: 'As Granada, form Andalusia and reconquer all of Iberia.',
    icon: 'https://eu4.paradoxwikis.com/images/9/99/The_Re-Reconquista.jpg',
    dlc: '',
    version: '1.4',
    difficulty: 'H',
    game: 'eu4',
    guideUrl: '',
    startingConditions:
      '[![Yes](https://eu4.paradoxwikis.com/images/thumb/d/da/Ledger_yes.png/28px-Ledger_yes.png)](/File:Ledger_yes.png "Yes") Playing as [![Flag of Granada](https://eu4.paradoxwikis.com/images/thumb/a/a7/Granada.png/20px-Granada.png)](/Granada "Granada") [Granada](/Granada "Granada")',
    completionRequirements:
      '*   [![Yes](https://eu4.paradoxwikis.com/images/thumb/d/da/Ledger_yes.png/28px-Ledger_yes.png)](/File:Ledger_yes.png "Yes") Is [![Flag of Andalusia](https://eu4.paradoxwikis.com/images/thumb/0/09/Andalusia.png/20px-Andalusia.png)](/Andalusia "Andalusia") [Andalusia](/Andalusia "Andalusia")\n*   [![Province icon.png](https://eu4.paradoxwikis.com/images/thumb/1/13/Province_icon.png/28px-Province_icon.png)](/Province "Province") Own and core all provinces of [Iberia](/Iberia "Iberia")',
    notes:
      'Optimal strategy is to start expanding to north Africa by picking weak targets like [![Flag of Tlemcen](https://eu4.paradoxwikis.com/images/thumb/b/b2/Tlemcen.png/20px-Tlemcen.png)](/Tlemcen "Tlemcen") [Tlemcen](/Tlemcen "Tlemcen") and [![Flag of Tunis](https://eu4.paradoxwikis.com/images/thumb/7/79/Tunis.png/20px-Tunis.png)](/Tunis "Tunis") [Tunis](/Tunis "Tunis"). After the initial expansions, secure an alliance with either [![Flag of Ottomans](https://eu4.paradoxwikis.com/images/thumb/8/89/Ottomans.png/20px-Ottomans.png)](/Ottomans "Ottomans") [Ottomans](/Ottomans "Ottomans") or [![Flag of Mamluks](https://eu4.paradoxwikis.com/images/thumb/c/ca/The_Mamluks.png/20px-The_Mamluks.png)](/Mamluks "Mamluks") [Mamluks](/Mamluks "Mamluks") as soon as possible. Colonizing North America early can boost your income and drastically weaken the economy of [![Flag of Spain](https://eu4.paradoxwikis.com/images/thumb/5/58/Spain.png/20px-Spain.png)](/Spain "Spain") [Spain](/Spain "Spain").',
  },
  {
    id: 'ach_343',
    name: 'The Third Way',
    description:
      'Start as an Ibadi nation and eliminate all rival schools of Islam (do not convert to another religion).',
    icon: 'https://eu4.paradoxwikis.com/images/2/27/The_Third_Way.jpg',
    dlc: '',
    version: '1.14',
    difficulty: 'VH',
    game: 'eu4',
    guideUrl: 'https://eu4.paradoxwikis.com/The_Third_Way',
    startingConditions:
      '[![Tolerance own.png](https://eu4.paradoxwikis.com/images/thumb/d/d9/Tolerance_of_the_true_faith.png/28px-Tolerance_of_the_true_faith.png)](/Tolerance_of_the_true_faith "Tolerance of the true faith") Religion is [![Ibadi Islam](https://eu4.paradoxwikis.com/images/thumb/0/02/Ibadi.png/28px-Ibadi.png)](/Ibadi "Ibadi") Ibadi',
    completionRequirements:
      '*   [![No](https://eu4.paradoxwikis.com/images/thumb/5/56/Ledger_no_crop.png/28px-Ledger_no_crop.png)](/File:Ledger_no_crop.png "No") *Not* playing as a [released vassal](/Vassal#Release_a_nation "Vassal")\n*   [![Ibadi Islam](https://eu4.paradoxwikis.com/images/thumb/0/02/Ibadi.png/28px-Ibadi.png)](/Ibadi "Ibadi") Is Ibadi\n*   [![No](https://eu4.paradoxwikis.com/images/thumb/5/56/Ledger_no_crop.png/28px-Ledger_no_crop.png)](/File:Ledger_no_crop.png "No") No province is [![Sunni Islam](https://eu4.paradoxwikis.com/images/thumb/2/2f/Sunni.png/28px-Sunni.png)](/Sunni "Sunni") Sunni or [![Shiite Islam](https://eu4.paradoxwikis.com/images/thumb/5/5c/Shiite.png/28px-Shiite.png)](/Shiite "Shiite") Shia.',
    notes:
      'Possible starts are [![Flag of Mzab](https://eu4.paradoxwikis.com/images/thumb/6/62/Mzab.png/20px-Mzab.png)](/Mzab "Mzab") [Mzab](/Mzab "Mzab"), [![Flag of Oman](https://eu4.paradoxwikis.com/images/thumb/2/27/Oman.png/20px-Oman.png)](/Oman "Oman") [Oman](/Oman "Oman"), and [![Flag of Pate](https://eu4.paradoxwikis.com/images/thumb/e/e8/Pate.png/20px-Pate.png)](/Pate "Pate") [Pate](/Pate "Pate"). Uncolonized provinces with Muslim religion (south of Morocco, Tunis and Ethiopia) must also be colonized and converted to Ibadi. With [![Golden Century.png](https://eu4.paradoxwikis.com/images/thumb/b/bb/Golden_Century.png/28px-Golden_Century.png)](/Golden_Century "Golden Century") Golden Century, European countries like [![Flag of Spain](https://eu4.paradoxwikis.com/images/thumb/5/58/Spain.png/20px-Spain.png)](/Spain "Spain") [Spain](/Spain "Spain") and [![Flag of Portugal](https://eu4.paradoxwikis.com/images/thumb/1/12/Portugal.png/20px-Portugal.png)](/Portugal "Portugal") [Portugal](/Portugal "Portugal") can convert provinces in the colonial regions to Islam by expelling minorities. Those provinces must be converted to Ibadi as well.',
  },
  {
    id: 'ach_344',
    name: 'This is Persia!',
    description: 'Form Persia or Eranshahr, and own Egypt, Anatolia and Greece as core provinces.',
    icon: 'https://eu4.paradoxwikis.com/images/5/58/This_is_Persia%21.jpg',
    dlc: '',
    version: '1.10',
    difficulty: 'H',
    game: 'eu4',
    guideUrl: '',
    startingConditions: '',
    completionRequirements:
      '*   [![No](https://eu4.paradoxwikis.com/images/thumb/5/56/Ledger_no_crop.png/28px-Ledger_no_crop.png)](/File:Ledger_no_crop.png "No") *Not* playing as a [released vassal](/Vassal#Release_a_nation "Vassal")\n*   [![Yes](https://eu4.paradoxwikis.com/images/thumb/d/da/Ledger_yes.png/28px-Ledger_yes.png)](/File:Ledger_yes.png "Yes") Is [![Flag of Persia](https://eu4.paradoxwikis.com/images/thumb/0/01/Persia.png/20px-Persia.png)](/Persia "Persia") [Persia](/Persia "Persia") *or* [![Flag of Eranshahr](https://eu4.paradoxwikis.com/images/thumb/b/bb/Eranshahr.png/20px-Eranshahr.png)](/Eranshahr "Eranshahr") [Eranshahr](/Eranshahr "Eranshahr")\n*   [![Province icon.png](https://eu4.paradoxwikis.com/images/thumb/1/13/Province_icon.png/28px-Province_icon.png)](/Province "Province") All provinces in the regions [Anatolia](/Anatolia "Anatolia") and [Egypt](/African_regions#Egypt "African regions") and the areas [Morea](/European_regions#Morea "European regions"), [Northern Greece](/Northern_Greece "Northern Greece"), and [Macedonia](/Macedonia "Macedonia") are owned and cored by [![Flag of Persia](https://eu4.paradoxwikis.com/images/thumb/0/01/Persia.png/20px-Persia.png)](/Persia "Persia") [Persia](/Persia "Persia") *or* [![Flag of Eranshahr](https://eu4.paradoxwikis.com/images/thumb/b/bb/Eranshahr.png/20px-Eranshahr.png)](/Eranshahr "Eranshahr") [Eranshahr](/Eranshahr "Eranshahr").\n\nExpand\n\n[![This is Persia! map.png](https://eu4.paradoxwikis.com/images/thumb/4/45/This_is_Persia%21_map.png/140px-This_is_Persia%21_map.png)](/File:This_is_Persia!_map.png)\n\n[](/File:This_is_Persia!_map.png "Enlarge")',
    notes:
      ' [![Flag of Persia](https://eu4.paradoxwikis.com/images/thumb/0/01/Persia.png/20px-Persia.png)](/Persia "Persia") [Persia](/Persia "Persia") can be formed by a nation whose primary culture is in the Iranian culture group, or by [![Flag of Aq Qoyunlu](https://eu4.paradoxwikis.com/images/thumb/6/67/Aq_Qoyunlu.png/20px-Aq_Qoyunlu.png)](/Aq_Qoyunlu "Aq Qoyunlu") [Aq Qoyunlu](/Aq_Qoyunlu "Aq Qoyunlu") and [![Flag of Qara Qoyunlu](https://eu4.paradoxwikis.com/images/thumb/9/99/Qara_Qoyunlu.png/20px-Qara_Qoyunlu.png)](/Qara_Qoyunlu "Qara Qoyunlu") [Qara Qoyunlu](/Qara_Qoyunlu "Qara Qoyunlu") .\n\nBefore patch 1.36.2, this achievement was only possible as [![Flag of Persia](https://eu4.paradoxwikis.com/images/thumb/0/01/Persia.png/20px-Persia.png)](/Persia "Persia") [Persia](/Persia "Persia") and not as [![Flag of Eranshahr](https://eu4.paradoxwikis.com/images/thumb/b/bb/Eranshahr.png/20px-Eranshahr.png)](/Eranshahr "Eranshahr") [Eranshahr](/Eranshahr "Eranshahr").',
  },
  {
    id: 'ach_345',
    name: 'Ultimate Military',
    description: 'As Songhai, have Prussia and Nepal as marches!',
    icon: 'https://eu4.paradoxwikis.com/images/5/59/Ultimate_Military.png',
    dlc: '',
    version: '1.32',
    difficulty: 'H',
    game: 'eu4',
    guideUrl: '',
    startingConditions:
      '[![Yes](https://eu4.paradoxwikis.com/images/thumb/d/da/Ledger_yes.png/28px-Ledger_yes.png)](/File:Ledger_yes.png "Yes") Playing as [![Flag of Songhai](https://eu4.paradoxwikis.com/images/thumb/2/24/Songhai.png/20px-Songhai.png)](/Songhai "Songhai") [Songhai](/Songhai "Songhai")',
    completionRequirements:
      '*   [![Yes](https://eu4.paradoxwikis.com/images/thumb/d/da/Ledger_yes.png/28px-Ledger_yes.png)](/File:Ledger_yes.png "Yes") Is [![Flag of Songhai](https://eu4.paradoxwikis.com/images/thumb/2/24/Songhai.png/20px-Songhai.png)](/Songhai "Songhai") [Songhai](/Songhai "Songhai")\n*   [![March icon.png](https://eu4.paradoxwikis.com/images/thumb/1/1d/March_icon.png/28px-March_icon.png)](/March "March") Have [![Flag of Prussia](https://eu4.paradoxwikis.com/images/thumb/2/28/Prussia.png/20px-Prussia.png)](/Prussia "Prussia") [Prussia](/Prussia "Prussia") *and* [![Flag of Nepal](https://eu4.paradoxwikis.com/images/thumb/3/3a/Nepal.png/20px-Nepal.png)](/Nepal "Nepal") [Nepal](/Nepal "Nepal") as marches.',
    notes:
      'This achievement is only visible if the [![Origins.png](https://eu4.paradoxwikis.com/images/thumb/8/8e/Origins.png/28px-Origins.png)](/Origins "Origins") Origins DLC is active, but it is possible to get the achievement without that DLC.\n\n [![Flag of Songhai](https://eu4.paradoxwikis.com/images/thumb/2/24/Songhai.png/20px-Songhai.png)](/Songhai "Songhai") [Songhai](/Songhai "Songhai") has a strong starting position, the main difficulty is making sure both [![Flag of Prussia](https://eu4.paradoxwikis.com/images/thumb/2/28/Prussia.png/20px-Prussia.png)](/Prussia "Prussia") [Prussia](/Prussia "Prussia") and [![Flag of Nepal](https://eu4.paradoxwikis.com/images/thumb/3/3a/Nepal.png/20px-Nepal.png)](/Nepal "Nepal") [Nepal](/Nepal "Nepal") exist. Note that only [![Flag of Prussia](https://eu4.paradoxwikis.com/images/thumb/2/28/Prussia.png/20px-Prussia.png)](/Prussia "Prussia") [Prussia](/Prussia "Prussia") can be formed by a subject nation, so you are better off giving a Nepali minor the required provinces by calling them to war as ally before subjugating them.',
  },
  {
    id: 'ach_346',
    name: 'Where the heart is',
    description: 'As Dahomey, force all non-Fetishist nations out of Niger and Sahel by 1500.',
    icon: 'https://eu4.paradoxwikis.com/images/4/4d/Where_the_heart_is.png',
    dlc: '',
    version: '1.20',
    difficulty: 'VH',
    game: 'eu4',
    guideUrl: '',
    startingConditions:
      '[![Yes](https://eu4.paradoxwikis.com/images/thumb/d/da/Ledger_yes.png/28px-Ledger_yes.png)](/File:Ledger_yes.png "Yes") Playing as [![Flag of Dahomey](https://eu4.paradoxwikis.com/images/thumb/f/f1/Dahomey.png/20px-Dahomey.png)](/Dahomey "Dahomey") [Dahomey](/Dahomey "Dahomey")',
    completionRequirements:
      '*   [![Yes](https://eu4.paradoxwikis.com/images/thumb/d/da/Ledger_yes.png/28px-Ledger_yes.png)](/File:Ledger_yes.png "Yes") The year is before 1500\n*   [![Province icon.png](https://eu4.paradoxwikis.com/images/thumb/1/13/Province_icon.png/28px-Province_icon.png)](/Province "Province") All colonised provinces in the [Niger](/Niger "Niger") and [Sahel](/Sahel "Sahel") regions are owned by a [![Fetishist](https://eu4.paradoxwikis.com/images/thumb/8/8d/Fetishist.png/28px-Fetishist.png)](/Fetishist "Fetishist") Fetishist nation.\n\nExpand\n\n[![Niger and Sahel map.png](https://eu4.paradoxwikis.com/images/thumb/d/d7/Niger_and_Sahel_map.png/140px-Niger_and_Sahel_map.png)](/File:Niger_and_Sahel_map.png)\n\n[](/File:Niger_and_Sahel_map.png "Enlarge")',
    notes:
      '*   The owner must be Fetishist, not the province. Possible to do by feeding lots of land to a Sunni vassal and then enforcing religion.',
  },
  {
    id: 'ach_347',
    name: 'World Conqueror',
    description: 'Own or have a subject own the entire world.',
    icon: 'https://eu4.paradoxwikis.com/images/7/7d/World_Conqueror.jpg',
    dlc: '',
    version: '1.1',
    difficulty: 'VH',
    game: 'eu4',
    guideUrl: '',
    startingConditions:
      '[![No](https://eu4.paradoxwikis.com/images/thumb/5/56/Ledger_no_crop.png/28px-Ledger_no_crop.png)](/File:Ledger_no_crop.png "No") *Not* using a [random New World](/Random_New_World "Random New World").',
    completionRequirements:
      'The only existing countries are the player\'s country and its direct non-tributary [subjects](/Subject "Subject") and their non-tributary [subjects](/Subject "Subject").',
    notes:
      "*   Subjects of subjects count as long as they are not tributaries (e.g., Colonies of a client state or Vassals of a personal union). But colonial nations of a vassal of a junior partner don't count, because they are subjects of a subject of a subject.",
  },
  {
    id: 'ach_348',
    name: 'All Blue',
    description: 'As Portugal, all of Europe is owned by you or blue European countries that exist in 1444.',
    icon: 'https://eu4.paradoxwikis.com/images/a/a8/All_Blue.png',
    dlc: '',
    version: '1.35',
    difficulty: 'VH',
    game: 'eu4',
    guideUrl: '',
    startingConditions:
      '[![Yes](https://eu4.paradoxwikis.com/images/thumb/d/da/Ledger_yes.png/28px-Ledger_yes.png)](/File:Ledger_yes.png "Yes") Playing as [![Flag of Portugal](https://eu4.paradoxwikis.com/images/thumb/1/12/Portugal.png/20px-Portugal.png)](/Portugal "Portugal") [Portugal](/Portugal "Portugal")',
    completionRequirements:
      '*   [![Yes](https://eu4.paradoxwikis.com/images/thumb/d/da/Ledger_yes.png/28px-Ledger_yes.png)](/File:Ledger_yes.png "Yes") Is [![Flag of Portugal](https://eu4.paradoxwikis.com/images/thumb/1/12/Portugal.png/20px-Portugal.png)](/Portugal "Portugal") [Portugal](/Portugal "Portugal")\n*   [![Province icon.png](https://eu4.paradoxwikis.com/images/thumb/1/13/Province_icon.png/28px-Province_icon.png)](/Province "Province") All provinces in [Europe](/Europe "Europe") are owned by one of the following countries:\n    \n    *    [![Flag of Portugal](https://eu4.paradoxwikis.com/images/thumb/1/12/Portugal.png/20px-Portugal.png)](/Portugal "Portugal") [Portugal](/Portugal "Portugal")\n    *    [![Flag of Avaria](https://eu4.paradoxwikis.com/images/thumb/4/47/Avaria.png/20px-Avaria.png)](/Avaria "Avaria") [Avaria](/Avaria "Avaria")\n    *    [![Flag of Bavaria](https://eu4.paradoxwikis.com/images/thumb/b/b3/Bavaria.png/20px-Bavaria.png)](/Bavaria "Bavaria") [Bavaria](/Bavaria "Bavaria")\n    *    [![Flag of Bourbonnais](https://eu4.paradoxwikis.com/images/thumb/5/5d/Bourbonnais.png/20px-Bourbonnais.png)](/Bourbonnais "Bourbonnais") [Bourbonnais](/Bourbonnais "Bourbonnais")\n    *    [![Flag of Bremen](https://eu4.paradoxwikis.com/images/thumb/c/c4/Bremen.png/20px-Bremen.png)](/Bremen "Bremen") [Bremen](/Bremen "Bremen")\n    *    [![Flag of Dithmarschen](https://eu4.paradoxwikis.com/images/thumb/3/34/Dithmarschen.png/20px-Dithmarschen.png)](/Dithmarschen "Dithmarschen") [Dithmarschen](/Dithmarschen "Dithmarschen")\n    *    [![Flag of Dortmund](https://eu4.paradoxwikis.com/images/thumb/0/08/Dortmund.png/20px-Dortmund.png)](/Dortmund "Dortmund") [Dortmund](/Dortmund "Dortmund")\n    *    [![Flag of Flanders](https://eu4.paradoxwikis.com/images/thumb/9/97/Flanders.png/20px-Flanders.png)](/Flanders "Flanders") [Flanders](/Flanders "Flanders")\n    *    [![Flag of France](https://eu4.paradoxwikis.com/images/thumb/d/de/France.png/20px-France.png)](/France "France") [France](/France "France")\n    *    [![Flag of Glogow](https://eu4.paradoxwikis.com/images/thumb/5/59/Glogow.png/20px-Glogow.png)](/Glogow "Glogow") [Glogow](/Glogow "Glogow")\n    *    [![Flag of Herzegovina](https://eu4.paradoxwikis.com/images/thumb/f/f8/Herzegovina.png/20px-Herzegovina.png)](/Herzegovina "Herzegovina") [Herzegovina](/Herzegovina "Herzegovina")\n    *    [![Flag of Hesse](https://eu4.paradoxwikis.com/images/thumb/2/2a/Hesse.png/20px-Hesse.png)](/Hesse "Hesse") [Hesse](/Hesse "Hesse")\n    *    [![Flag of Imereti](https://eu4.paradoxwikis.com/images/thumb/9/95/Imereti.png/20px-Imereti.png)](/Imereti "Imereti") [Imereti](/Imereti "Imereti")\n    *    [![Flag of Ingolstadt](https://eu4.paradoxwikis.com/images/thumb/9/9f/Ingolstadt.png/20px-Ingolstadt.png)](/Ingolstadt "Ingolstadt") [Ingolstadt](/Ingolstadt "Ingolstadt")\n    *    [![Flag of Karaman](https://eu4.paradoxwikis.com/images/thumb/4/44/Karaman.png/20px-Karaman.png)](/Karaman "Karaman") [Karaman](/Karaman "Karaman")\n    *    [![Flag of Landshut](https://eu4.paradoxwikis.com/images/thumb/f/f3/Landshut.png/20px-Landshut.png)](/Landshut "Landshut") [Landshut](/Landshut "Landshut")\n    *    [![Flag of Lorraine](https://eu4.paradoxwikis.com/images/thumb/2/21/Lorraine.png/20px-Lorraine.png)](/Lorraine "Lorraine") [Lorraine](/Lorraine "Lorraine")\n    *    [![Flag of Mecklenburg](https://eu4.paradoxwikis.com/images/thumb/9/9c/Mecklenburg.png/20px-Mecklenburg.png)](/Mecklenburg "Mecklenburg") [Mecklenburg](/Mecklenburg "Mecklenburg")\n    *    [![Flag of Munich](https://eu4.paradoxwikis.com/images/thumb/4/4a/Munich.png/20px-Munich.png)](/Munich "Munich") [Munich](/Munich "Munich")\n    *    [![Flag of Naxos](https://eu4.paradoxwikis.com/images/thumb/5/55/Naxos.png/20px-Naxos.png)](/Naxos "Naxos") [Naxos](/Naxos "Naxos")\n    *    [![Flag of Norway](https://eu4.paradoxwikis.com/images/thumb/0/0f/Norway.png/20px-Norway.png)](/Norway "Norway") [Norway](/Norway "Norway")\n    *    [![Flag of Odoyev](https://eu4.paradoxwikis.com/images/thumb/f/f4/Odoyev.png/20px-Odoyev.png)](/Odoyev "Odoyev") [Odoyev](/Odoyev "Odoyev")\n    *    [![Flag of Perugia](https://eu4.paradoxwikis.com/images/thumb/5/55/Perugia.png/20px-Perugia.png)](/Perugia "Perugia") [Perugia](/Perugia "Perugia")\n    *    [![Flag of Provence](https://eu4.paradoxwikis.com/images/thumb/b/bd/Provence.png/20px-Provence.png)](/Provence "Provence") [Provence](/Provence "Provence")\n    *    [![Flag of Prussia](https://eu4.paradoxwikis.com/images/thumb/2/28/Prussia.png/20px-Prussia.png)](/Prussia "Prussia") [Prussia](/Prussia "Prussia")\n    *    [![Flag of Saluzzo](https://eu4.paradoxwikis.com/images/thumb/3/35/Saluzzo.png/20px-Saluzzo.png)](/Saluzzo "Saluzzo") [Saluzzo](/Saluzzo "Saluzzo")\n    *    [![Flag of Sardinia-Piedmont](https://eu4.paradoxwikis.com/images/thumb/2/22/Sardinia-Piedmont.png/20px-Sardinia-Piedmont.png)](/Sardinia-Piedmont "Sardinia-Piedmont") [Sardinia-Piedmont](/Sardinia-Piedmont "Sardinia-Piedmont")\n    *    [![Flag of Sweden](https://eu4.paradoxwikis.com/images/thumb/9/98/Sweden.png/20px-Sweden.png)](/Sweden "Sweden") [Sweden](/Sweden "Sweden")\n    *    [![Flag of The Knights](https://eu4.paradoxwikis.com/images/thumb/8/84/The_Knights.png/20px-The_Knights.png)](/The_Knights "The Knights") [The Knights](/The_Knights "The Knights")\n    *    [![Flag of The Palatinate](https://eu4.paradoxwikis.com/images/thumb/4/40/The_Palatinate.png/20px-The_Palatinate.png)](/The_Palatinate "The Palatinate") [The Palatinate](/The_Palatinate "The Palatinate")\n    *    [![Flag of Thuringia](https://eu4.paradoxwikis.com/images/thumb/4/4d/Thuringia.png/20px-Thuringia.png)](/Thuringia "Thuringia") [Thuringia](/Thuringia "Thuringia")\n    *    [![Flag of Trebizond](https://eu4.paradoxwikis.com/images/thumb/1/1f/Trebizond.png/20px-Trebizond.png)](/Trebizond "Trebizond") [Trebizond](/Trebizond "Trebizond")\n    *    [![Flag of Tyrconnell](https://eu4.paradoxwikis.com/images/thumb/e/e9/Tyrconnell.png/20px-Tyrconnell.png)](/Tyrconnell "Tyrconnell") [Tyrconnell](/Tyrconnell "Tyrconnell")\n    *    [![Flag of Urbino](https://eu4.paradoxwikis.com/images/thumb/1/13/Urbino.png/20px-Urbino.png)](/Urbino "Urbino") [Urbino](/Urbino "Urbino")\n    *    [![Flag of Venice](https://eu4.paradoxwikis.com/images/thumb/e/e1/Venice.png/20px-Venice.png)](/Venice "Venice") [Venice](/Venice "Venice")',
    notes:
      'Note that [![Flag of Bavaria](https://eu4.paradoxwikis.com/images/thumb/b/b3/Bavaria.png/20px-Bavaria.png)](/Bavaria "Bavaria") [Bavaria](/Bavaria "Bavaria"), [![Flag of Prussia](https://eu4.paradoxwikis.com/images/thumb/2/28/Prussia.png/20px-Prussia.png)](/Prussia "Prussia") [Prussia](/Prussia "Prussia") and [![Flag of Sardinia-Piedmont](https://eu4.paradoxwikis.com/images/thumb/2/22/Sardinia-Piedmont.png/20px-Sardinia-Piedmont.png)](/Sardinia-Piedmont "Sardinia-Piedmont") [Sardinia-Piedmont](/Sardinia-Piedmont "Sardinia-Piedmont") count even though they don\'t exist in 1444.\n\nMake sure that none of the blue countries fulfill the conditions to form something which is not allowed.',
  },
  {
    id: 'ach_349',
    name: 'From Frankfurt to the Andes',
    description: 'Starting as Frankfurt, form Jerusalem, and then form the Inca while owning Mallorca.',
    icon: 'https://eu4.paradoxwikis.com/images/7/72/From_Frankfurt_to_the_Andes.png',
    dlc: '',
    version: '1.35',
    difficulty: 'VH',
    game: 'eu4',
    guideUrl: 'https://eu4.paradoxwikis.com/From_Frankfurt_to_the_Andes',
    startingConditions:
      '[![Yes](https://eu4.paradoxwikis.com/images/thumb/d/da/Ledger_yes.png/28px-Ledger_yes.png)](/File:Ledger_yes.png "Yes") Playing as [![Flag of Frankfurt](https://eu4.paradoxwikis.com/images/thumb/7/75/Frankfurt.png/20px-Frankfurt.png)](/Frankfurt "Frankfurt") [Frankfurt](/Frankfurt "Frankfurt")',
    completionRequirements:
      '*   [![Yes](https://eu4.paradoxwikis.com/images/thumb/d/da/Ledger_yes.png/28px-Ledger_yes.png)](/File:Ledger_yes.png "Yes") Was [![Flag of Frankfurt](https://eu4.paradoxwikis.com/images/thumb/7/75/Frankfurt.png/20px-Frankfurt.png)](/Frankfurt "Frankfurt") [Frankfurt](/Frankfurt "Frankfurt")\n*   [![Yes](https://eu4.paradoxwikis.com/images/thumb/d/da/Ledger_yes.png/28px-Ledger_yes.png)](/File:Ledger_yes.png "Yes") Was [![Flag of Jerusalem](https://eu4.paradoxwikis.com/images/thumb/e/ef/Jerusalem.png/20px-Jerusalem.png)](/Jerusalem "Jerusalem") [Jerusalem](/Jerusalem "Jerusalem")\n*   [![Yes](https://eu4.paradoxwikis.com/images/thumb/d/da/Ledger_yes.png/28px-Ledger_yes.png)](/File:Ledger_yes.png "Yes") Is [![Flag of Inca](https://eu4.paradoxwikis.com/images/thumb/3/36/Inca.png/20px-Inca.png)](/Inca "Inca") [Inca](/Inca "Inca")\n*   [![Province icon.png](https://eu4.paradoxwikis.com/images/thumb/1/13/Province_icon.png/28px-Province_icon.png)](/Province "Province") Own Mallorca (333)',
    notes:
      '*   Hardest part of this achievement is finding and fulfilling conditions for different tag formation.\n*   To form [![Flag of Jerusalem](https://eu4.paradoxwikis.com/images/thumb/e/ef/Jerusalem.png/20px-Jerusalem.png)](/Jerusalem "Jerusalem") [Jerusalem](/Jerusalem "Jerusalem"), you need to get into coring range of Jerusalem area (vassalize an Italian minor and conquer a province next to it), own and state Jerusalem area, move capital to Arabia, Egypt or Mashriq and switch from [![Government republic.png](https://eu4.paradoxwikis.com/images/thumb/5/5d/Government_republic.png/28px-Government_republic.png)](/Republic "Republic") Republic to [![Government monarchy.png](https://eu4.paradoxwikis.com/images/thumb/4/4d/Government_monarchy.png/28px-Government_monarchy.png)](/Monarchy "Monarchy") Monarchy. And this has to be done before the Age of Reformation ends, because Frankfurt can\'t form Jerusalem later.\n*   To form [![Flag of Inca](https://eu4.paradoxwikis.com/images/thumb/3/36/Inca.png/20px-Inca.png)](/Inca "Inca") [Inca](/Inca "Inca") you need to move your capital to the New World, own cores on required provinces, [![Culture icon.png](https://eu4.paradoxwikis.com/images/thumb/2/29/Culture_icon.png/28px-Culture_icon.png)](/Culture "Culture") culture shift to Andean culture and change your religion to a pagan faith via rebels.\n*   Switching to play as a released vassal will invalidate the achievement.',
  },
  {
    id: 'ach_350',
    name: 'Eat your Greens',
    description: 'Control all Grasslands in Asia as Kale before the age of Absolutism.',
    icon: 'https://eu4.paradoxwikis.com/images/6/61/Eat_your_Greens.png',
    dlc: '',
    version: '1.26',
    difficulty: 'I',
    game: 'eu4',
    guideUrl: '',
    startingConditions:
      '[![Yes](https://eu4.paradoxwikis.com/images/thumb/d/da/Ledger_yes.png/28px-Ledger_yes.png)](/File:Ledger_yes.png "Yes") Playing as [![Flag of Kale](https://eu4.paradoxwikis.com/images/thumb/d/d1/Kale.png/20px-Kale.png)](/Kale "Kale") [Kale](/Kale "Kale")',
    completionRequirements:
      '*   [![No](https://eu4.paradoxwikis.com/images/thumb/5/56/Ledger_no_crop.png/28px-Ledger_no_crop.png)](/File:Ledger_no_crop.png "No") It is *not* the [![Age of Absolutism.png](https://eu4.paradoxwikis.com/images/thumb/e/ec/Age_of_Absolutism.png/28px-Age_of_Absolutism.png)](/Age_of_Absolutism "Age of Absolutism") Age of Absolutism or the [![Age of Revolutions.png](https://eu4.paradoxwikis.com/images/thumb/5/59/Age_of_Revolutions.png/28px-Age_of_Revolutions.png)](/Age_of_Revolutions "Age of Revolutions") Age of Revolutions\n*   [![Province icon.png](https://eu4.paradoxwikis.com/images/thumb/1/13/Province_icon.png/28px-Province_icon.png)](/Province "Province") Every province in Asia with Grasslands terrain is owned by the player\'s country *or* its non-tributary [subjects](/Subjects "Subjects")\n\nExpand\n\n[![](https://eu4.paradoxwikis.com/images/thumb/d/dc/Eat_your_greens_map.png/140px-Eat_your_greens_map.png)](/File:Eat_your_greens_map.png)\n\n[](/File:Eat_your_greens_map.png "Enlarge")\n\nAll grassland provinces in Asia',
    notes:
      'It is not required to keep playing as [![Flag of Kale](https://eu4.paradoxwikis.com/images/thumb/d/d1/Kale.png/20px-Kale.png)](/Kale "Kale") [Kale](/Kale "Kale") to earn the achievement, but changing tag will hide it from the achievement tab.\n\nStart by subjugating and allying all Shan minors to complete the mission "Unite the Shan" to inherit them all and gain free cores (don\'t conquer any province from them as these would needlessly have to be cored; best to fully annex [![Flag of Ava](https://eu4.paradoxwikis.com/images/thumb/d/df/Ava.png/20px-Ava.png)](/Ava "Ava") [Ava](/Ava "Ava") and inherit all their tributaries). To limit AE and help with the endless conquests to come it is recommended you switch to horde government first, which is you should form [![Flag of Tibet](https://eu4.paradoxwikis.com/images/thumb/0/03/Tibet.png/20px-Tibet.png)](/Tibet "Tibet") [Tibet](/Tibet "Tibet") and do the "Steppe Politics" mission.\n\nTake Horde Ideas then Expansion then Diplomatic Ideas, don\'t delay colonizing Siberia. The colonies in the grassland provinces don\'t have to be finished, but you need to finish 3 colonies to reach the farthest province (2 if you conquer Onan Gol(1058) in Mongolia or Albazin (2102) in Manchuria instead of colonizing from the coast).\n\nThe [![Age of Absolutism.png](https://eu4.paradoxwikis.com/images/thumb/e/ec/Age_of_Absolutism.png/28px-Age_of_Absolutism.png)](/Age_of_Absolutism "Age of Absolutism") can be delayed by 30 years by ensuring that the highest valued trade node in the world contains no centers of trade at level 2 or higher, and no capital provinces.',
  },
  {
    id: 'ach_351',
    name: 'One Faith',
    description: 'Have all non-wasteland land provinces in the world be of your religion.',
    icon: 'https://eu4.paradoxwikis.com/images/e/ef/One_Faith.jpg',
    dlc: '',
    version: '1.14',
    difficulty: 'I',
    game: 'eu4',
    guideUrl: '',
    startingConditions: '',
    completionRequirements:
      '[![No](https://eu4.paradoxwikis.com/images/thumb/5/56/Ledger_no_crop.png/28px-Ledger_no_crop.png)](/File:Ledger_no_crop.png "No") No colonized non-wasteland province has a different religion than this country.',
    notes:
      '*   Using the random new world will drastically reduce the number of provinces, especially inland ones, making this easier than with the true new world.\n*   Uncolonized provinces may still be of a different religion.\n\nThe easiest choice is either [![Flag of Austria](https://eu4.paradoxwikis.com/images/thumb/7/7f/Austria.png/20px-Austria.png)](/Austria "Austria") [Austria](/Austria "Austria") or [![Flag of Ottomans](https://eu4.paradoxwikis.com/images/thumb/8/89/Ottomans.png/20px-Ottomans.png)](/Ottomans "Ottomans") [Ottomans](/Ottomans "Ottomans"), as both tags can conquer the world easily and have religions that have lots of missionaries and missionary strength buffs. The hardest faiths to One Faith with are the Pagan faiths (Animist, Tengri…), and Confucian with [![Mandate of Heaven.png](https://eu4.paradoxwikis.com/images/thumb/7/7c/Mandate_of_Heaven.png/28px-Mandate_of_Heaven.png)](/Mandate_of_Heaven "Mandate of Heaven") [Mandate of Heaven](/Mandate_of_Heaven "Mandate of Heaven"). If playing as a Fetishist or Hindu nation, choose Buddhadharma or Buddha, respectively, to be able to use the Buddha statues and Pagan temples. [![Flag of Najd](https://eu4.paradoxwikis.com/images/thumb/c/c9/Najd.png/20px-Najd.png)](/Najd "Najd") [Najd](/Najd "Najd") is a possible starting nation, since its ideas are religiously focused, including access to +2 missionaries and +2% missionary strength, as well as its starting religion of [![Sunni Islam](https://eu4.paradoxwikis.com/images/thumb/2/2f/Sunni.png/20px-Sunni.png)](/Sunni "Sunni") [Sunni](/Sunni "Sunni") granting [![Local missionary strength.png](https://eu4.paradoxwikis.com/images/thumb/0/08/Local_missionary_strength.png/28px-Local_missionary_strength.png)](/Local_missionary_strength "Local missionary strength") **−2%** local missionary strength which would make these provinces harder to convert. Possible to combine with Jihad.',
  },
  {
    id: 'ach_352',
    name: 'The Three Mountains',
    description: 'Own or have a subject own the entire world as Ryukyu.',
    icon: 'https://eu4.paradoxwikis.com/images/e/e1/The_Three_Mountains.jpg',
    dlc: '',
    version: '1.1',
    difficulty: 'I',
    game: 'eu4',
    guideUrl: '',
    startingConditions:
      '*   [![Yes](https://eu4.paradoxwikis.com/images/thumb/d/da/Ledger_yes.png/28px-Ledger_yes.png)](/File:Ledger_yes.png "Yes") Playing as [![Flag of Ryukyu](https://eu4.paradoxwikis.com/images/thumb/6/64/Ryukyu.png/20px-Ryukyu.png)](/Ryukyu "Ryukyu") [Ryukyu](/Ryukyu "Ryukyu")\n*   [![No](https://eu4.paradoxwikis.com/images/thumb/5/56/Ledger_no_crop.png/28px-Ledger_no_crop.png)](/File:Ledger_no_crop.png "No") *Not* using a [random New World](/Random_New_World "Random New World").',
    completionRequirements:
      '*   The only existing countries are:\n    *   the player\'s country,\n    *    [![Flag of Ryukyu](https://eu4.paradoxwikis.com/images/thumb/6/64/Ryukyu.png/20px-Ryukyu.png)](/Ryukyu "Ryukyu") [Ryukyu](/Ryukyu "Ryukyu") and its [subjects](/Subject "Subject"), but *not* [tributary states](/Tributary_state "Tributary state").',
    notes:
      'Note that it is possible to form another country, but only if you do a true one-tag (ruling the world directly without vassals or colonial subjects). If you stay Ryukyu, subjects are allowed.',
  },
  {
    id: 'ach_353',
    name: 'True Heir of Timur',
    description: 'Starting as a Timurid subject, form the Mughals and conquer India by 1550.',
    icon: 'https://eu4.paradoxwikis.com/images/8/8c/True_Heir_of_Timur.png',
    dlc: '',
    version: '1.26',
    difficulty: 'I',
    game: 'eu4',
    guideUrl: '',
    startingConditions:
      '*   [![Yes](https://eu4.paradoxwikis.com/images/thumb/d/da/Ledger_yes.png/28px-Ledger_yes.png)](/File:Ledger_yes.png "Yes") Playing as one of the following:\n    *    [![Flag of Afghanistan](https://eu4.paradoxwikis.com/images/thumb/7/7d/Afghanistan.png/20px-Afghanistan.png)](/Afghanistan "Afghanistan") [Afghanistan](/Afghanistan "Afghanistan")\n    *    [![Flag of Sistan](https://eu4.paradoxwikis.com/images/thumb/f/f5/Sistan.png/20px-Sistan.png)](/Sistan "Sistan") [Sistan](/Sistan "Sistan")\n    *    [![Flag of Transoxiana](https://eu4.paradoxwikis.com/images/thumb/c/c3/Transoxiana.png/20px-Transoxiana.png)](/Transoxiana "Transoxiana") [Transoxiana](/Transoxiana "Transoxiana")\n    *    [![Flag of Khorasan](https://eu4.paradoxwikis.com/images/thumb/1/1d/Khorasan.png/20px-Khorasan.png)](/Khorasan "Khorasan") [Khorasan](/Khorasan "Khorasan")\n    *    [![Flag of Fars](https://eu4.paradoxwikis.com/images/thumb/a/ab/Fars.png/20px-Fars.png)](/Fars "Fars") [Fars](/Fars "Fars")',
    completionRequirements:
      '*   [![Yes](https://eu4.paradoxwikis.com/images/thumb/d/da/Ledger_yes.png/28px-Ledger_yes.png)](/File:Ledger_yes.png "Yes") Is [![Flag of Mughals](https://eu4.paradoxwikis.com/images/thumb/e/e6/Mughals.png/20px-Mughals.png)](/Mughals "Mughals") [Mughals](/Mughals "Mughals")\n*   [![Time Icon.png](https://eu4.paradoxwikis.com/images/7/70/Time_Icon.png)](/Time "Time") The year is before 1550\n*   [![Province icon.png](https://eu4.paradoxwikis.com/images/thumb/1/13/Province_icon.png/28px-Province_icon.png)](/Province "Province") Every province in India superregion is owned by the country or a subject other than a tributary',
    notes:
      'Easier in recent patches than when added. The strongest contenders are [![Flag of Afghanistan](https://eu4.paradoxwikis.com/images/thumb/7/7d/Afghanistan.png/20px-Afghanistan.png)](/Afghanistan "Afghanistan") [Afghanistan](/Afghanistan "Afghanistan"), which is the closest to India, and [![Flag of Transoxiana](https://eu4.paradoxwikis.com/images/thumb/c/c3/Transoxiana.png/20px-Transoxiana.png)](/Transoxiana "Transoxiana") [Transoxiana](/Transoxiana "Transoxiana"), which starts the strongest. Recommended ideas include Administrative for extremely cheap coring and Diplomatic to manage aggressive expansion and to truce break more easily if necessary.',
  },
  {
    id: 'ach_354',
    name: "Mehmet's Ambition",
    description:
      'Starting as The Ottomans, own or have Core Eyalets own all the provinces required to form the Roman Empire before 1500.',
    icon: 'https://eu4.paradoxwikis.com/images/2/2e/Mehmet%27s_Ambition.png',
    dlc: '',
    version: '1.35',
    difficulty: 'I',
    game: 'eu4',
    guideUrl: '',
    startingConditions:
      '[![Yes](https://eu4.paradoxwikis.com/images/thumb/d/da/Ledger_yes.png/28px-Ledger_yes.png)](/File:Ledger_yes.png "Yes") Playing as the [![Flag of Ottomans](https://eu4.paradoxwikis.com/images/thumb/8/89/Ottomans.png/20px-Ottomans.png)](/Ottomans "Ottomans") [Ottomans](/Ottomans "Ottomans")',
    completionRequirements:
      '*   [![Time Icon.png](https://eu4.paradoxwikis.com/images/7/70/Time_Icon.png)](/Time "Time") The year is before 1500\n*   [![Province icon.png](https://eu4.paradoxwikis.com/images/thumb/1/13/Province_icon.png/28px-Province_icon.png)](/Province "Province") 425 of the following provinces are owned by this country or a subject of type Core Eyalet:\n\nExpand\n\n[![](https://eu4.paradoxwikis.com/images/thumb/8/8c/EU4_Roman_Empire.png/300px-EU4_Roman_Empire.png)](/File:EU4_Roman_Empire.png)\n\n[](/File:EU4_Roman_Empire.png "Enlarge")\n\nNeeded provinces to form the Roman Empire',
    notes: '',
  },
  {
    id: 'ach_355',
    name: 'King of Kings',
    description: 'Complete the Persian mission tree.',
    icon: 'https://eu4.paradoxwikis.com/images/0/04/Achievement_King_of_Kings.png',
    dlc: '',
    version: '1.36',
    difficulty: 'H',
    game: 'eu4',
    guideUrl: '',
    startingConditions: '',
    completionRequirements:
      '*   [![Mission.png](https://eu4.paradoxwikis.com/images/thumb/2/29/Mission.png/24px-Mission.png)](/Missions "Missions") Complete the Sunni or Shia or Zoroastrian version of the [Persian missions](/Persian_missions "Persian missions")',
    notes: '',
  },
  {
    id: 'ach_356',
    name: 'Restore the Pentarchy',
    description:
      'Starting as Byzantium, own Rome, Constantinople, Alexandria, Antioch, and Jerusalem while being Orthodox.',
    icon: 'https://eu4.paradoxwikis.com/images/e/e3/Restore_the_Pentarchy.png',
    dlc: '',
    version: '1.36',
    difficulty: 'H',
    game: 'eu4',
    guideUrl: '',
    startingConditions:
      '*   [![Yes](https://eu4.paradoxwikis.com/images/thumb/d/da/Ledger_yes.png/28px-Ledger_yes.png)](/File:Ledger_yes.png "Yes") Playing as [![Flag of Byzantium](https://eu4.paradoxwikis.com/images/thumb/9/96/Byzantium.png/20px-Byzantium.png)](/Byzantium "Byzantium") [Byzantium](/Byzantium "Byzantium")\n*   [![Yes](https://eu4.paradoxwikis.com/images/thumb/d/da/Ledger_yes.png/28px-Ledger_yes.png)](/File:Ledger_yes.png "Yes") Religion is [![Orthodoxy](https://eu4.paradoxwikis.com/images/thumb/9/96/Orthodox.png/28px-Orthodox.png)](/Orthodox "Orthodox") [Orthodox](/Orthodox "Orthodox")',
    completionRequirements:
      '*   Is [![Flag of Byzantium](https://eu4.paradoxwikis.com/images/thumb/9/96/Byzantium.png/20px-Byzantium.png)](/Byzantium "Byzantium") [Byzantium](/Byzantium "Byzantium") or the [![Flag of Roman Empire](https://eu4.paradoxwikis.com/images/thumb/4/4e/Roman_Empire.png/20px-Roman_Empire.png)](/Roman_Empire "Roman Empire") [Roman Empire](/Roman_Empire "Roman Empire")\n*   Religion is [![Orthodoxy](https://eu4.paradoxwikis.com/images/thumb/9/96/Orthodox.png/28px-Orthodox.png)](/Orthodox "Orthodox") [Orthodox](/Orthodox "Orthodox")\n*   The following provinces are cored and follow the [![Orthodoxy](https://eu4.paradoxwikis.com/images/thumb/9/96/Orthodox.png/28px-Orthodox.png)](/Orthodox "Orthodox") [Orthodox](/Orthodox "Orthodox") faith:\n    *   Roma (118)\n    *   Constantinople (151)\n    *   Alexandria (358)\n    *   Antioch (2313)\n    *   Jerusalem (379)\n*   [![No](https://eu4.paradoxwikis.com/images/thumb/5/56/Ledger_no_crop.png/28px-Ledger_no_crop.png)](/File:Ledger_no_crop.png "No") has never formed the [![Flag of Latin Empire](https://eu4.paradoxwikis.com/images/thumb/9/9c/Latin_Empire.png/20px-Latin_Empire.png)](/Latin_Empire "Latin Empire") [Latin Empire](/Latin_Empire "Latin Empire")',
    notes: '',
  },
  {
    id: 'ach_357',
    name: 'Mets Hayk',
    description: 'Starting as Karabakh, own, core, and convert to Coptic the borders of Great Armenia.',
    icon: 'https://eu4.paradoxwikis.com/images/c/c4/Mets_Hayk.png',
    dlc: '',
    version: '1.36',
    difficulty: 'VH',
    game: 'eu4',
    guideUrl: '',
    startingConditions:
      '*   [![Yes](https://eu4.paradoxwikis.com/images/thumb/d/da/Ledger_yes.png/28px-Ledger_yes.png)](/File:Ledger_yes.png "Yes") Playing as [![Flag of Karabakh](https://eu4.paradoxwikis.com/images/thumb/b/b6/Karabakh.png/20px-Karabakh.png)](/Karabakh "Karabakh") [Karabakh](/Karabakh "Karabakh")',
    completionRequirements:
      '*   Religion is [![Coptic.png](https://eu4.paradoxwikis.com/images/thumb/7/74/Coptic.png/28px-Coptic.png)](/Coptic "Coptic") [Coptic](/Coptic "Coptic")\n*   [![Province icon.png](https://eu4.paradoxwikis.com/images/thumb/1/13/Province_icon.png/28px-Province_icon.png)](/Province "Province") Owns core provinces following the [![Coptic.png](https://eu4.paradoxwikis.com/images/thumb/7/74/Coptic.png/28px-Coptic.png)](/Coptic "Coptic") [Coptic](/Coptic "Coptic") faith:\n\n*   *   Erzurum (331)\n    *   Yerevan (419)\n    *   Melikates (2202)\n    *   Nakhchivan (2205)\n    *   Erzincan (2305)\n    *   Van (2307)\n    *   Mush (2306)\n    *   Bayazid (2306)\n    *   Adana (327)\n\n[![Province icon.png](https://eu4.paradoxwikis.com/images/thumb/1/13/Province_icon.png/28px-Province_icon.png)](/Province "Province") 1 province in each of the following areas is owned, cored, and follows the [![Coptic.png](https://eu4.paradoxwikis.com/images/thumb/7/74/Coptic.png/28px-Coptic.png)](/Coptic "Coptic") [Coptic](/Coptic "Coptic") faith:\n\n*   *   Azerbaijan\n    *   Shahrizor\n    *   Al Jazira\n    *   Dulkadir\n    *   Aleppo\n    *   Syria\n    *   Syrian Desert',
    notes:
      'If you can get [![Flag of Mamluks](https://eu4.paradoxwikis.com/images/thumb/c/ca/The_Mamluks.png/20px-The_Mamluks.png)](/Mamluks "Mamluks") [Mamluks](/Mamluks "Mamluks") to support your independence, the first war is relatively easy. Once you\'ve grown moderately, try to get European allies as soon as possible to help taking provinces from [![Flag of Ottomans](https://eu4.paradoxwikis.com/images/thumb/8/89/Ottomans.png/20px-Ottomans.png)](/Ottomans "Ottomans") [Ottomans](/Ottomans "Ottomans") and [![Flag of Mamluks](https://eu4.paradoxwikis.com/images/thumb/c/ca/The_Mamluks.png/20px-The_Mamluks.png)](/Mamluks "Mamluks") [Mamluks](/Mamluks "Mamluks").',
  },
  {
    id: 'ach_358',
    name: 'Desert Power',
    description:
      'Starting as an Arabian Tribe, have the Oasis privilege enacted, and more than 1000 development in the Arabian Region.',
    icon: 'https://eu4.paradoxwikis.com/images/c/c0/Desert_Power.png',
    dlc: '',
    version: '1.36',
    difficulty: 'H',
    game: 'eu4',
    guideUrl: '',
    startingConditions:
      '*   [![Yes](https://eu4.paradoxwikis.com/images/thumb/d/da/Ledger_yes.png/28px-Ledger_yes.png)](/File:Ledger_yes.png "Yes") Capital in the Arabia region\n*   [![Yes](https://eu4.paradoxwikis.com/images/thumb/d/da/Ledger_yes.png/28px-Ledger_yes.png)](/File:Ledger_yes.png "Yes") Is [![Government tribal.png](https://eu4.paradoxwikis.com/images/thumb/a/a5/Government_tribal.png/28px-Government_tribal.png)](/Tribal_government "Tribal government") tribal',
    completionRequirements:
      '*   Has granted the [![Burghers.png](https://eu4.paradoxwikis.com/images/thumb/d/dd/Burghers.png/28px-Burghers.png)](/Burghers_estate "Burghers estate") Burghers privilege "Oasis Development"\n*   Provinces in the Arabia region that have Desert or Coastal Desert terrain:\n    *   Have at least [![Development.png](https://eu4.paradoxwikis.com/images/thumb/a/a4/Development.png/28px-Development.png)](/Development "Development") 1000 total development',
    notes:
      '"Oasis Development" privilege requires the Arabian mission "The Harsh Desert" to be completed. Note that while not mentioned in the description, only the development of Desert and Coastal Desert provinces is counted for the purposes of this achievement. This means that only 44 provinces are valid to develop, requiring a average of 23 (22.7) development in each of these provinces.',
  },
  {
    id: 'ach_359',
    name: 'Breadbasket of the World',
    description: 'As the Mamluks, export grain to every continent at least once.',
    icon: 'https://eu4.paradoxwikis.com/images/2/26/Breadbasket_of_the_World.png',
    dlc: '',
    version: '1.36',
    difficulty: 'E',
    game: 'eu4',
    guideUrl: '',
    startingConditions: '',
    completionRequirements:
      '*   Is *or* was the [![Flag of Mamluks](https://eu4.paradoxwikis.com/images/thumb/c/ca/The_Mamluks.png/20px-The_Mamluks.png)](/Mamluks "Mamluks") [Mamluks](/Mamluks "Mamluks")\n*   Has used the "Export Grain" diplomatic action on at least one country on each of the following continents:\n\n*   *   Europe\n    *   Oceania\n    *   North America\n    *   South America\n    *   Africa\n    *   Asia',
    notes:
      'To be able to export grain the player has to complete the [![Mission.png](https://eu4.paradoxwikis.com/images/thumb/2/29/Mission.png/24px-Mission.png)](/Missions "Missions") *"[Khass al-Sultan](/Mamluk_missions#Khass_al-Sultan "Mamluk missions")"* mission.\n\nThe country\'s continent is determined based on the location of its capital.\n\nTo use "Export grain", the target must be a subject or ally of the Mamluks. This can be an issue in the colonial regions. Its thus recommended to colonize yourself.',
  },
  {
    id: 'ach_360',
    name: 'Truly Good Maaaaa-tch',
    description: 'Starting as either Aq Qoyunlu or Qara Qoyunlu, have a royal marriage and an alliance with Ramazan.',
    icon: 'https://eu4.paradoxwikis.com/images/d/de/Truly_Good_Maaaaa-tch.png',
    dlc: '',
    version: '1.36',
    difficulty: 'VE',
    game: 'eu4',
    guideUrl: '',
    startingConditions:
      '[![Yes](https://eu4.paradoxwikis.com/images/thumb/d/da/Ledger_yes.png/28px-Ledger_yes.png)](/File:Ledger_yes.png "Yes") Is [![Flag of Aq Qoyunlu](https://eu4.paradoxwikis.com/images/thumb/6/67/Aq_Qoyunlu.png/20px-Aq_Qoyunlu.png)](/Aq_Qoyunlu "Aq Qoyunlu") [Aq Qoyunlu](/Aq_Qoyunlu "Aq Qoyunlu") or [![Flag of Qara Qoyunlu](https://eu4.paradoxwikis.com/images/thumb/9/99/Qara_Qoyunlu.png/20px-Qara_Qoyunlu.png)](/Qara_Qoyunlu "Qara Qoyunlu") [Qara Qoyunlu](/Qara_Qoyunlu "Qara Qoyunlu")',
    completionRequirements:
      '*   Is [![Flag of Aq Qoyunlu](https://eu4.paradoxwikis.com/images/thumb/6/67/Aq_Qoyunlu.png/20px-Aq_Qoyunlu.png)](/Aq_Qoyunlu "Aq Qoyunlu") [Aq Qoyunlu](/Aq_Qoyunlu "Aq Qoyunlu") or [![Flag of Qara Qoyunlu](https://eu4.paradoxwikis.com/images/thumb/9/99/Qara_Qoyunlu.png/20px-Qara_Qoyunlu.png)](/Qara_Qoyunlu "Qara Qoyunlu") [Qara Qoyunlu](/Qara_Qoyunlu "Qara Qoyunlu")\n*   Has an alliance with [![Flag of Ramazan](https://eu4.paradoxwikis.com/images/thumb/e/e8/Ramazan.png/20px-Ramazan.png)](/Ramazan "Ramazan") [Ramazan](/Ramazan "Ramazan")\n*   Has a royal marriage with [![Flag of Ramazan](https://eu4.paradoxwikis.com/images/thumb/e/e8/Ramazan.png/20px-Ramazan.png)](/Ramazan "Ramazan") [Ramazan](/Ramazan "Ramazan")',
    notes:
      'Can be achieved in a little over a month. Take out a loan, send 50 ducats to Ramazan, send a scornful insult to one of their rivals, then send an alliance offer after a month. Ramazan should send you a marriage offer within a few days.',
  },
  {
    id: 'ach_361',
    name: 'The Last Crusade',
    description: "Starting as Byzantium, control Venezia, and make sure that the country Venice doesn't exist.",
    icon: 'https://eu4.paradoxwikis.com/images/a/a7/The_Last_Crusade.png',
    dlc: '',
    version: '1.36',
    difficulty: 'H',
    game: 'eu4',
    guideUrl: '',
    startingConditions:
      '[![Yes](https://eu4.paradoxwikis.com/images/thumb/d/da/Ledger_yes.png/28px-Ledger_yes.png)](/File:Ledger_yes.png "Yes") Is [![Flag of Byzantium](https://eu4.paradoxwikis.com/images/thumb/9/96/Byzantium.png/20px-Byzantium.png)](/Byzantium "Byzantium") [Byzantium](/Byzantium "Byzantium")',
    completionRequirements:
      '*   Is [![Flag of Byzantium](https://eu4.paradoxwikis.com/images/thumb/9/96/Byzantium.png/20px-Byzantium.png)](/Byzantium "Byzantium") [Byzantium](/Byzantium "Byzantium") or the [![Flag of Roman Empire](https://eu4.paradoxwikis.com/images/thumb/4/4e/Roman_Empire.png/20px-Roman_Empire.png)](/Roman_Empire "Roman Empire") [Roman Empire](/Roman_Empire "Roman Empire")\n*   Owns core province Venezia (112)\n*    [![Flag of Venice](https://eu4.paradoxwikis.com/images/thumb/e/e1/Venice.png/20px-Venice.png)](/Venice "Venice") [Venice](/Venice "Venice") does *not* exist\n*   [![No](https://eu4.paradoxwikis.com/images/thumb/5/56/Ledger_no_crop.png/28px-Ledger_no_crop.png)](/File:Ledger_no_crop.png "No") has never formed the [![Flag of Latin Empire](https://eu4.paradoxwikis.com/images/thumb/9/9c/Latin_Empire.png/20px-Latin_Empire.png)](/Latin_Empire "Latin Empire") [Latin Empire](/Latin_Empire "Latin Empire")',
    notes: 'Reforming Byzantium from another country does not allow for the achievement.',
  },
  {
    id: 'ach_362',
    name: 'Legacy of Saint George',
    description: 'As Georgia, have as vassals Genoa, Aragon, England and Trier or their successors, and control Wales.',
    icon: 'https://eu4.paradoxwikis.com/images/8/8e/Legacy_of_Saint_George.png',
    dlc: '',
    version: '1.36',
    difficulty: 'VH',
    game: 'eu4',
    guideUrl: '',
    startingConditions: '',
    completionRequirements:
      '*   Is [![Flag of Georgia](https://eu4.paradoxwikis.com/images/thumb/1/19/Georgia.png/20px-Georgia.png)](/Georgia "Georgia") [Georgia](/Georgia "Georgia")\n*   Has the following countries (or countries formed by them) as [![Icon vassal.png](https://eu4.paradoxwikis.com/images/thumb/4/47/Vassal.png/28px-Vassal.png)](/Vassal "Vassal") vassals:\n\n*   *    [![Flag of Genoa](https://eu4.paradoxwikis.com/images/thumb/f/fc/Genoa.png/20px-Genoa.png)](/Genoa "Genoa") [Genoa](/Genoa "Genoa")\n    *    [![Flag of Aragon](https://eu4.paradoxwikis.com/images/thumb/6/61/Aragon.png/20px-Aragon.png)](/Aragon "Aragon") [Aragon](/Aragon "Aragon")\n    *    [![Flag of England](https://eu4.paradoxwikis.com/images/thumb/2/21/England.png/20px-England.png)](/England "England") [England](/England "England")\n    *    [![Flag of Trier](https://eu4.paradoxwikis.com/images/thumb/c/c0/Trier.png/20px-Trier.png)](/Trier "Trier") [Trier](/Trier "Trier")\n\n*   [![Province icon.png](https://eu4.paradoxwikis.com/images/thumb/1/13/Province_icon.png/28px-Province_icon.png)](/Province "Province") All provinces in the Wales area:\n    *   Are owned by the country or its non-tributary subjects',
    notes:
      'If one of the countries forms another country(e.g. [![Flag of England](https://eu4.paradoxwikis.com/images/thumb/2/21/England.png/20px-England.png)](/England "England") [England](/England "England") forms [![Flag of Great Britain](https://eu4.paradoxwikis.com/images/thumb/2/2b/Great_Britain.png/20px-Great_Britain.png)](/Great_Britain "Great Britain") [Great Britain](/Great_Britain "Great Britain")), the new country can be vassalized to get the achievement. If one of the countries dies, care must be taken that the cores don\'t expire, especially for [![Flag of Trier](https://eu4.paradoxwikis.com/images/thumb/c/c0/Trier.png/20px-Trier.png)](/Trier "Trier") [Trier](/Trier "Trier") which is not the primary tag of its culture.',
  },
  {
    id: 'ach_363',
    name: 'The Zoro-Austrians',
    description: 'Starting as Austria, convert to Zoroastrianism, and complete the Persian Zoroastrian missions.',
    icon: 'https://eu4.paradoxwikis.com/images/e/ec/The_Zoro-Austrians.png',
    dlc: '',
    version: '1.36',
    difficulty: 'H',
    game: 'eu4',
    guideUrl: '',
    startingConditions:
      '[![Yes](https://eu4.paradoxwikis.com/images/thumb/d/da/Ledger_yes.png/28px-Ledger_yes.png)](/File:Ledger_yes.png "Yes") Is [![Flag of Austria](https://eu4.paradoxwikis.com/images/thumb/7/7f/Austria.png/20px-Austria.png)](/Austria "Austria") [Austria](/Austria "Austria")',
    completionRequirements:
      '*   Is [![Flag of Persia](https://eu4.paradoxwikis.com/images/thumb/0/01/Persia.png/20px-Persia.png)](/Persia "Persia") [Persia](/Persia "Persia") *or* [![Flag of Eranshahr](https://eu4.paradoxwikis.com/images/thumb/b/bb/Eranshahr.png/20px-Eranshahr.png)](/Eranshahr "Eranshahr") [Eranshahr](/Eranshahr "Eranshahr")\n*   [![Mission.png](https://eu4.paradoxwikis.com/images/thumb/2/29/Mission.png/24px-Mission.png)](/Missions "Missions") Has completed the mission [A New Eranshahr](/Persian_missions#A_New_Eranshahr "Persian missions") mission\n*   [![Mission.png](https://eu4.paradoxwikis.com/images/thumb/2/29/Mission.png/24px-Mission.png)](/Missions "Missions") Has completed the [An Asha Empire](/Persian_missions#An_Asha_Empire "Persian missions") mission',
    notes: '',
  },
  {
    id: 'ach_364',
    name: "It's all coming together",
    description: 'Complete the Incan mission tree (Sunset invasion missions excluded).',
    icon: 'https://eu4.paradoxwikis.com/images/f/f2/It%27s_all_coming_together.png',
    dlc: '',
    version: '1.37',
    difficulty: 'M',
    game: 'eu4',
    guideUrl: '',
    startingConditions: '*   Is *not* playing with a Random New World',
    completionRequirements:
      'Expand[![Mission.png](https://eu4.paradoxwikis.com/images/thumb/2/29/Mission.png/24px-Mission.png)](/Missions "Missions") Has completed the following missions:\n\n*   *“Rule of the Sun”*\n*   *“Contact the Oracle”*\n*   *“Defeat the Wanka”*\n*   *“Our Chimuan Rivals”*\n*   *“The Ground Shaker”*\n*   *“Conquer Cajamarca”*\n*   *“Take Over Quito”*\n*   *“Defy the Qollans”*\n*   *“Seize Southern Fringes”*\n*   *“Recruit the Chanka”*\n*   *“Seize the Chincha”*\n*   *“Down the Altiplano”*\n*   *“Promote Runasimi”*\n*   *“Development of the Mitma”*\n*   *“Awka Kamayuq”*\n*   *“The Big Ears”*\n*   *“The Zeq\'e System”*\n*   *“The Oracle of Pachacamac”*\n*   *“Four Quarters Together”*\n*   *“The Qollqas”*\n*   *“Construct New Kallanka”*\n*   *“The Solar Cult”*\n*   *“Reform Religion”*\n*   *“Temples to Viracocha”*\n*   *“Imperial Infrastructure”*\n*   *“Qhapaq Ñan”*\n*   *“Imperial Frontiers”*\n*   *“Incan Terracing”*\n*   *“Idols of our Subjects”*\n*   *“Among the Mountaintops”*\n*   *“Navel of the Universe”*\n*   *“Haucaypata”*\n*   *“Collect the Mita”*\n*   *“Sweat of the Sun”*\n*   *“Tears of the Moon”*\n*   *“Renovate Cuzco”*\n*   *“Secondary Capital”*\n*   *“Incan Weaving”*\n*   *“Expand into the Jungle”*\n*   *“Recruit Bowmen”*',
    notes: '',
  },
  {
    id: 'ach_365',
    name: 'Doge Coins',
    description: 'Starting as Venice, become the Economic Hegemon.',
    icon: 'https://eu4.paradoxwikis.com/images/a/af/Doge_Coins.png',
    dlc: '',
    version: '1.37',
    difficulty: 'M',
    game: 'eu4',
    guideUrl: 'https://eu4.paradoxwikis.com/Doge_Coins',
    startingConditions:
      '*   Is [![Flag of Venice](https://eu4.paradoxwikis.com/images/thumb/e/e1/Venice.png/20px-Venice.png)](/Venice "Venice") [Venice](/Venice "Venice")',
    completionRequirements: '*   Is Economic Hegemon',
    notes: '',
  },
  {
    id: 'ach_366',
    name: 'Veritas Vincit',
    description: 'Starting as Bohemia, make Hussite the official faith of the Empire and become the Emperor.',
    icon: 'https://eu4.paradoxwikis.com/images/a/a2/Veritas_Vincit.png',
    dlc: '',
    version: '1.37',
    difficulty: 'VH',
    game: 'eu4',
    guideUrl: '',
    startingConditions:
      '*   Is [![Flag of Bohemia](https://eu4.paradoxwikis.com/images/thumb/4/41/Bohemia.png/20px-Bohemia.png)](/Bohemia "Bohemia") [Bohemia](/Bohemia "Bohemia")',
    completionRequirements:
      '*   Is the Holy Roman Emperor\n*   The Holy Roman Empire\'s official religion is [![Hussite](https://eu4.paradoxwikis.com/images/thumb/2/24/Hussite.png/28px-Hussite.png)](/Hussite "Hussite") Hussite\n*   The religion of the Holy Roman Empire is fixed',
    notes:
      '[![Hussite](https://eu4.paradoxwikis.com/images/thumb/2/24/Hussite.png/28px-Hussite.png)](/Hussite "Hussite") Hussite can become the official religion in the imperial incident "*[The Hussite Protest](/Holy_Roman_Empire#The_Hussite_Protest "Holy Roman Empire")*", which gets triggered if [![Hussite](https://eu4.paradoxwikis.com/images/thumb/2/24/Hussite.png/28px-Hussite.png)](/Hussite "Hussite") hussite countries own at least 80% as many HRE provinces as non-hussite countries when the event *[The Evangelical Union is Victorious](/Religious_league_events#The_Evangelical_Union_is_Victorious "Religious league events")* happens.\n\nFor the emperor to make Hussite the official faith, they must either be a 1 province minor, or be loosing a war against a hussite nation by atleast -50 warscore.\n\nSince the incident usually immideately triggers once the league war ends and the former evangelical leader will be the new emperor, be prepared to instantly trucebreak the new emperor and occupy them fully. Be quick, as the incident will end after one year.',
  },
  {
    id: 'ach_367',
    name: 'The Eagle flies alone',
    description: 'Starting as Hisn Kayfa, reach a forcelimit of 500k.',
    icon: 'https://eu4.paradoxwikis.com/images/7/77/The_Eagle_flies_alone.png',
    dlc: '',
    version: '1.37',
    difficulty: 'VH',
    game: 'eu4',
    guideUrl: '',
    startingConditions:
      '*   Is [![Flag of Hisn Kayfa](https://eu4.paradoxwikis.com/images/thumb/4/4c/Hisn_Kayfa.png/20px-Hisn_Kayfa.png)](/Hisn_Kayfa "Hisn Kayfa") [Hisn Kayfa](/Hisn_Kayfa "Hisn Kayfa")',
    completionRequirements: '*   Land force limit is at least 500',
    notes: '',
  },
  {
    id: 'ach_368',
    name: 'Mayapahit?',
    description: 'Starting as any Mayan country, form Maya and own or have a subject own the island of Java.',
    icon: 'https://eu4.paradoxwikis.com/images/6/6a/Mayapahit%3F.png',
    dlc: '',
    version: '1.37',
    difficulty: 'H',
    game: 'eu4',
    guideUrl: '',
    startingConditions:
      '*   Religion is [![Mayan.png](https://eu4.paradoxwikis.com/images/thumb/9/98/Mayan.png/28px-Mayan.png)](/Mayan "Mayan") Mayan',
    completionRequirements:
      '*   Is *or* was [![Flag of Maya](https://eu4.paradoxwikis.com/images/thumb/0/09/Maya.png/20px-Maya.png)](/Maya "Maya") [Maya](/Maya "Maya")\n*   All provinces in the Banten, East Java, Central Java, Surabaya & West Java areas, except Madura (2692):\n    *   Province is owned by the player\'s country *or* its non-tributary [subjects](/Subjects "Subjects")',
    notes: '',
  },
  {
    id: 'ach_369',
    name: 'There Khan only be one!',
    description: 'Starting as a Steppe Horde, ensure there exists no other horde than you in the world.',
    icon: 'https://eu4.paradoxwikis.com/images/f/fc/There_Khan_only_be_one%21.png',
    dlc: '',
    version: '1.37',
    difficulty: 'M',
    game: 'eu4',
    guideUrl: '',
    startingConditions: '*   Has enacted the [Steppe Nomads](/Steppe_Nomads "Steppe Nomads") government reform',
    completionRequirements:
      '*   [![Yes](https://eu4.paradoxwikis.com/images/thumb/d/da/Ledger_yes.png/28px-Ledger_yes.png)](/File:Ledger_yes.png "Yes") This country has enacted one of the following government reforms:\n    *   [Steppe Nomads](/Steppe_Nomads "Steppe Nomads")\n    *   [Great Mongol State](/Great_Mongol_State "Great Mongol State")\n*   [![No](https://eu4.paradoxwikis.com/images/thumb/5/56/Ledger_no_crop.png/28px-Ledger_no_crop.png)](/File:Ledger_no_crop.png "No") No other country has enacted one of the following government reforms:\n    *   [Steppe Nomads](/Steppe_Nomads "Steppe Nomads")\n    *   [Great Mongol State](/Great_Mongol_State "Great Mongol State")\n    *   *countries which switched their government type through government reforms (e.g. by enacting [The Great Plains call to us](/The_Great_Plains_call_to_us "The Great Plains call to us")) or enacted [Become Horde](/Become_Horde "Become Horde") are not counted*',
    notes: '',
  },
  {
    id: 'ach_370',
    name: 'Baborg',
    description: 'As the Mughals, assimilate at least 12 culture groups.',
    icon: 'https://eu4.paradoxwikis.com/images/b/bb/Baborg.png',
    dlc: 'One of',
    version: '1.37',
    difficulty: 'H',
    game: 'eu4',
    guideUrl: '',
    startingConditions: '',
    completionRequirements:
      '*   Is [![Flag of Mughals](https://eu4.paradoxwikis.com/images/thumb/e/e6/Mughals.png/20px-Mughals.png)](/Mughals "Mughals") [Mughals](/Mughals "Mughals")\n*   Has enacted the [Mughal Diwan](/Mughal_Diwan "Mughal Diwan") government reform\n*   Has assimilated at least **12** culture groups',
    notes: '',
  },
  {
    id: 'ach_371',
    name: 'Get out of my swamp!',
    description: 'As the Netherlands, own all of the Low Countries and have 50% or more Fort Defense.',
    icon: 'https://eu4.paradoxwikis.com/images/5/5f/Get_out_of_my_swamp%21.png',
    dlc: '',
    version: '1.37',
    difficulty: 'M',
    game: 'eu4',
    guideUrl: '',
    startingConditions: '',
    completionRequirements:
      '*   The country is *or* was [![Flag of Netherlands](https://eu4.paradoxwikis.com/images/thumb/3/32/Netherlands.png/20px-Netherlands.png)](/Netherlands "Netherlands") [Netherlands](/Netherlands "Netherlands")\n*   [![Province icon.png](https://eu4.paradoxwikis.com/images/thumb/1/13/Province_icon.png/28px-Province_icon.png)](/Province "Province") Owns all provinces in the Low Countries region\n*   [![Defensiveness.png](https://eu4.paradoxwikis.com/images/thumb/f/fd/Fort_defense.png/28px-Fort_defense.png)](/Fort_defense "Fort defense") Has at least 50% fort defense',
    notes:
      'Defensive idea 5 gives **35%** fort defense, having a military engineer advisor gives another **20%**, and having **50** [![Power Projection.png](https://eu4.paradoxwikis.com/images/8/8b/Power_projection.png)](/Power_projection "Power projection") power projection gives the last **5%**',
  },
  {
    id: 'ach_372',
    name: 'Timurizz',
    description: 'Starting as the Timurids, have 75 prestige, and 5 allies with 100 Trust and 150 opinion.',
    icon: 'https://eu4.paradoxwikis.com/images/3/31/Timurizz.png',
    dlc: '',
    version: '1.37',
    difficulty: 'E',
    game: 'eu4',
    guideUrl: '',
    startingConditions:
      '*   Is [![Flag of Timurids](https://eu4.paradoxwikis.com/images/thumb/6/6a/Timurids.png/20px-Timurids.png)](/Timurids "Timurids") [Timurids](/Timurids "Timurids")',
    completionRequirements:
      '*   [![Prestige.png](https://eu4.paradoxwikis.com/images/thumb/f/f3/Yearly_prestige.png/28px-Yearly_prestige.png)](/Prestige "Prestige") Prestige is at least **+75**\n*   [![Yes](https://eu4.paradoxwikis.com/images/thumb/d/da/Ledger_yes.png/28px-Ledger_yes.png)](/File:Ledger_yes.png "Yes") Has at least 5 allies with 100 [trust](/Trust "Trust") which have at least **+150** opinion of our country',
    notes:
      'The allies which have the trust have to be the same allies which have the opinion\n\nTrust can be gained by honoring calls to arms or by using the *Influence nation* interaction as a [great power](/Great_power "Great power"), or with [![The Cossacks.png](https://eu4.paradoxwikis.com/images/thumb/b/b6/The_Cossacks.png/28px-The_Cossacks.png)](/The_Cossacks "The Cossacks") The Cossacks or [![Leviathan.png](https://eu4.paradoxwikis.com/images/thumb/0/0a/Leviathan.png/28px-Leviathan.png)](/Leviathan "Leviathan") Leviathan by trading favors for trust. If neither [![The Cossacks.png](https://eu4.paradoxwikis.com/images/thumb/b/b6/The_Cossacks.png/28px-The_Cossacks.png)](/The_Cossacks "The Cossacks") The Cossacks nor [![Leviathan.png](https://eu4.paradoxwikis.com/images/thumb/0/0a/Leviathan.png/28px-Leviathan.png)](/Leviathan "Leviathan") Leviathan are active, trust with allies grows slowly over time.',
  },
  {
    id: 'ach_373',
    name: 'The Hungarian Games',
    description: 'Starting as Hungary, win 23 battles with the Black Army against at least 12 different countries.',
    icon: 'https://eu4.paradoxwikis.com/images/0/0b/The_Hungarian_Games.png',
    dlc: '',
    version: '1.37',
    difficulty: 'M',
    game: 'eu4',
    guideUrl: '',
    startingConditions:
      '*   Is [![Flag of Hungary](https://eu4.paradoxwikis.com/images/thumb/6/6a/Hungary.png/20px-Hungary.png)](/Hungary "Hungary") [Hungary](/Hungary "Hungary")',
    completionRequirements:
      '*   Any hired mercenary company:\n    *   Is *“Black Army”*\n    *   Is *“Black Army Reserves”*\n*   Has won at least **23** battles with these mercenary companies.\n*   For each enemy country, only a maximum of **3** battles are counted',
    notes:
      'If there are multiple countries on the same side in the battle, only the country which is first in the [tag order](/Tag_order "Tag order") counts. Doesn\'t count battles fought when rented out as condottieri. The *“Black Army”* can be unlocked [in the following ways](/Hungarian_events#flavor_hun.16 "Hungarian events"), some of which also unlock the *“Black Army Reserves”*:',
  },
]
