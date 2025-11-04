import type { Achievement } from './index'
/**
 * HOI4 Achievements
 * Scraped from https://hoi4.paradoxwikis.com/Achievements
 * Total: 249 achievements
 * Last updated: 2025-11-02T04:18:48.154Z
 */
export const achievements: Achievement[] = [
  {
    id: 'hoi4_ach_1',
    name: 'Friend in Need',
    description: 'Join a faction.',
    icon: 'https://hoi4.paradoxwikis.com/images/3/36/Friend_in_Need.jpg',
    dlc: '',
    version: '1.0',
    difficulty: 'VE',
    startingConditions: '',
    completionRequirements:
      '[![Relation join faction.png](https://hoi4.paradoxwikis.com/images/thumb/9/91/Relation_join_faction.png/22px-Relation_join_faction.png)](/File:Relation_join_faction.png) Has joined a faction',
    notes:
      'Play as [![Flag of Sinkiang](https://hoi4.paradoxwikis.com/images/thumb/b/b8/Sinkiang.png/24px-Sinkiang.png)](/Sinkiang "Sinkiang") [Sinkiang](/Sinkiang "Sinkiang"), right click on the [![Flag of Soviet Union](https://hoi4.paradoxwikis.com/images/thumb/6/67/Soviet_Union.png/24px-Soviet_Union.png)](/Soviet_Union "Soviet Union") [Soviet Union](/Soviet_Union "Soviet Union"), click "Ask to join Faction", and click "Send" on the pop-up. It\'s that simple.',
    game: 'hoi4',
  },
  {
    id: 'hoi4_ach_2',
    name: 'Time is on our side',
    description: 'Reach 1948.',
    icon: 'https://hoi4.paradoxwikis.com/images/1/1d/Time_is_on_Our_Side.jpg',
    dlc: '',
    version: '1.0',
    difficulty: 'VE',
    startingConditions: '',
    completionRequirements:
      '[![Time](https://hoi4.paradoxwikis.com/images/thumb/0/08/Time.png/22px-Time.png)](/File:Time.png "Time") After Dec 31st, 1947',
    notes:
      'Can be completed as any nation, but play as [![Flag of Mongolia](https://hoi4.paradoxwikis.com/images/thumb/b/bc/Mongolia.png/24px-Mongolia.png)](/Mongolia "Mongolia") [Mongolia](/Mongolia "Mongolia") if you want to AFK.',
    game: 'hoi4',
  },
  {
    id: 'hoi4_ach_3',
    name: 'Canada First',
    description: 'Join Axis as Canada.',
    icon: 'https://hoi4.paradoxwikis.com/images/e/e2/Canada_First.jpg',
    dlc: '',
    version: '1.0',
    difficulty: 'VE',
    startingConditions:
      '[![Yes](https://hoi4.paradoxwikis.com/images/thumb/7/77/Yes.png/22px-Yes.png)](/File:Yes.png "Yes") Playing as [![Flag of Canada](https://hoi4.paradoxwikis.com/images/thumb/a/a3/Canada.png/24px-Canada.png)](/Canada "Canada") [Canada](/Canada "Canada")',
    completionRequirements:
      '*   [![Relation join faction.png](https://hoi4.paradoxwikis.com/images/thumb/9/91/Relation_join_faction.png/22px-Relation_join_faction.png)](/File:Relation_join_faction.png) In faction with [![Flag of Germany](https://hoi4.paradoxwikis.com/images/thumb/e/e9/German_Reich.png/24px-German_Reich.png)](/Germany "Germany") [Germany](/Germany "Germany")\n*   [![Relation join faction.png](https://hoi4.paradoxwikis.com/images/thumb/9/91/Relation_join_faction.png/22px-Relation_join_faction.png)](/File:Relation_join_faction.png) [![Flag of Germany](https://hoi4.paradoxwikis.com/images/thumb/e/e9/German_Reich.png/24px-German_Reich.png)](/Germany "Germany") [Germany](/Germany "Germany") is a faction leader',
    notes:
      'On historical mode, simply go down the focus path towards [![Join Germany](https://hoi4.paradoxwikis.com/images/thumb/f/fb/Goal_generic_major_alliance.png/22px-Goal_generic_major_alliance.png)](/Canadian_national_focus_tree#Join_Germany "Join Germany")[Join Germany](/Canadian_national_focus_tree#Join_Germany "Canadian national focus tree").  \n\n**Note:** The faction does not need be the Axis, but it must be led by [![Flag of Germany](https://hoi4.paradoxwikis.com/images/thumb/e/e9/German_Reich.png/24px-German_Reich.png)](/Germany "Germany") [Germany](/Germany "Germany").',
    game: 'hoi4',
  },
  {
    id: 'hoi4_ach_4',
    name: "We'll Build it in a Day",
    description: 'Research Construction V.',
    icon: 'https://hoi4.paradoxwikis.com/images/2/2b/We%27ll_Build_it_in_a_Day.jpg',
    dlc: '',
    version: '1.0',
    difficulty: 'VE',
    startingConditions: '',
    completionRequirements:
      '[![Research icon.png](https://hoi4.paradoxwikis.com/images/thumb/4/4b/Research_icon.png/22px-Research_icon.png)](/File:Research_icon.png) Has researched  [![Construction V](https://hoi4.paradoxwikis.com/images/thumb/e/e5/Construction_V.png/31px-Construction_V.png)](/Construction_V "Construction V") [Construction V](/Construction_V "Construction V")',
    notes:
      'Stack up as many bonuses to research speed (especially industrial research speed) as possible and rush your way down the industrial branch. Eventually, you will reach Construction V.',
    game: 'hoi4',
  },
  {
    id: 'hoi4_ach_5',
    name: 'Transport Tycoon',
    description: 'Have at least 1000 convoys.',
    icon: 'https://hoi4.paradoxwikis.com/images/6/67/Transport_Tycoon.jpg',
    dlc: '',
    version: '1.0',
    difficulty: 'VE',
    startingConditions: '',
    completionRequirements:
      '[![Convoy.png](https://hoi4.paradoxwikis.com/images/thumb/7/70/Convoy.png/22px-Convoy.png)](/File:Convoy.png) Has at least **1000** convoys',
    notes:
      'As the [![Flag of United States](https://hoi4.paradoxwikis.com/images/thumb/3/32/United_States.png/24px-United_States.png)](/United_States "United States") [United States](/United_States "United States") or [![Flag of United Kingdom](https://hoi4.paradoxwikis.com/images/thumb/2/29/United_Kingdom.png/24px-United_Kingdom.png)](/United_Kingdom "United Kingdom") [United Kingdom](/United_Kingdom "United Kingdom"), set all of your [![Naval dockyards](https://hoi4.paradoxwikis.com/images/thumb/e/ee/Naval_dockyards.png/22px-Naval_dockyards.png)](/Production "Naval dockyards")[Naval dockyards](/Production "Production") to convoy production and stay out of any wars.',
    game: 'hoi4',
  },
  {
    id: 'hoi4_ach_6',
    name: 'Destroyer of Worlds',
    description: 'Deploy a nuke.',
    icon: 'https://hoi4.paradoxwikis.com/images/d/db/Destroyer_of_Worlds.jpg',
    dlc: '',
    version: '1.0',
    difficulty: 'E',
    startingConditions: '',
    completionRequirements:
      '[![Nuclear bombs.png](https://hoi4.paradoxwikis.com/images/thumb/1/18/Nuclear_bombs.png/22px-Nuclear_bombs.png)](/File:Nuclear_bombs.png) Has used a nuclear bomb',
    notes:
      'This achievement is ideally tackled as a nation that can receive more than just the standard nuclear research bonus in the generic focus tree. [![Flag of Germany](https://hoi4.paradoxwikis.com/images/thumb/e/e9/German_Reich.png/24px-German_Reich.png)](/Germany "Germany") [Germany](/Germany "Germany") is an ideal choice if one goes [![{{{1}}}](https://hoi4.paradoxwikis.com/images/thumb/e/e9/Democracy.png/22px-Democracy.png)](/Ideology#Democracy "{{{1}}}")[Democratic](/Ideology#Democracy "Ideology"), given that on top of a bonus to nuclear weapons, it can get an ahead of time bonus on nukes.',
    game: 'hoi4',
  },
  {
    id: 'hoi4_ach_7',
    name: 'Wunderwaffen',
    description: 'Has completed the Special Projects Nuclear Fission Bomb, Rocket Interceptor and Jet Engines.',
    icon: 'https://hoi4.paradoxwikis.com/images/9/95/Wunderwaffen.jpg',
    dlc: '',
    version: '1.0',
    difficulty: 'E',
    startingConditions: '',
    completionRequirements:
      '*   [![Yes](https://hoi4.paradoxwikis.com/images/thumb/7/77/Yes.png/22px-Yes.png)](/File:Yes.png "Yes") Has completed special project **Nuclear Fission Bomb Project**\n*   [![Yes](https://hoi4.paradoxwikis.com/images/thumb/7/77/Yes.png/22px-Yes.png)](/File:Yes.png "Yes") Has completed special project **Me 163 Komet (Rocket Interceptor)**\n*   [![Yes](https://hoi4.paradoxwikis.com/images/thumb/7/77/Yes.png/22px-Yes.png)](/File:Yes.png "Yes") Has completed special project **Jet Engine**',
    notes:
      'Follow the strategy for [Poland Can Into Space](#Poland_Can_Into_Space) achievement and simply research additional technologies.',
    game: 'hoi4',
  },
  {
    id: 'hoi4_ach_8',
    name: 'United Netherlands',
    description: 'Conquer Belgium and Luxembourg as Netherlands.',
    icon: 'https://hoi4.paradoxwikis.com/images/8/83/United_Netherlands.jpg',
    dlc: '',
    version: '1.0',
    difficulty: 'VE',
    startingConditions:
      '[![Yes](https://hoi4.paradoxwikis.com/images/thumb/7/77/Yes.png/22px-Yes.png)](/File:Yes.png "Yes") Playing as [![Flag of Netherlands](https://hoi4.paradoxwikis.com/images/thumb/3/32/Netherlands.png/24px-Netherlands.png)](/Netherlands "Netherlands") [Netherlands](/Netherlands "Netherlands")',
    completionRequirements:
      '[![Occupation.png](https://hoi4.paradoxwikis.com/images/d/dc/Occupation.png)](/File:Occupation.png) Owns and controls:\n\nExpand\n\n*   **Vlaanderen** *(6)*\n*   **Wallonie** *(34)*\n*   **Antwerpen** *(977)*\n*   **Ardennes** *(980)*\n*   **Luxembourg** *(8)*\n*   **Brabant** *(35)*\n*   **Holland** *(7)*\n*   **Friesland** *(36)*',
    notes:
      '*For detailed strategies, see [United Netherlands (achievement)](/United_Netherlands_\\(achievement\\) "United Netherlands (achievement)")*',
    game: 'hoi4',
  },
  {
    id: 'hoi4_ach_9',
    name: 'Vive la France',
    description: 'Reach 1948 as France without capitulating or surrendering.',
    icon: 'https://hoi4.paradoxwikis.com/images/0/0a/Vive_la_France.jpg',
    dlc: '',
    version: '1.0',
    difficulty: 'VE',
    startingConditions:
      '[![Yes](https://hoi4.paradoxwikis.com/images/thumb/7/77/Yes.png/22px-Yes.png)](/File:Yes.png "Yes") Playing as [![Flag of France](https://hoi4.paradoxwikis.com/images/thumb/d/de/France.png/24px-France.png)](/France "France") [France](/France "France")',
    completionRequirements:
      '*   [![No](https://hoi4.paradoxwikis.com/images/thumb/0/04/No.png/22px-No.png)](/File:No.png "No") Has surrendered\n*   [![No](https://hoi4.paradoxwikis.com/images/thumb/0/04/No.png/22px-No.png)](/File:No.png "No") Has capitulated\n*   [![Time](https://hoi4.paradoxwikis.com/images/thumb/0/08/Time.png/22px-Time.png)](/File:Time.png "Time") After Dec 31st, 1947',
    notes:
      'Flip to fascism through an advisor or national foci, and join the Axis. **Do not join any wars.** Just AFK until 1948.',
    game: 'hoi4',
  },
  {
    id: 'hoi4_ach_10',
    name: 'Master of War',
    description: 'Fully research a land, naval and air doctrine tree.',
    icon: 'https://hoi4.paradoxwikis.com/images/9/9a/Master_of_War.jpg',
    dlc: '',
    version: '1.0',
    difficulty: 'VE',
    startingConditions: '',
    completionRequirements:
      'Has unlocked a full branch of:\n\n*   *   [![Goal generic army doctrines.png](https://hoi4.paradoxwikis.com/images/thumb/8/86/Goal_generic_army_doctrines.png/22px-Goal_generic_army_doctrines.png)](/File:Goal_generic_army_doctrines.png) [Land doctrine](/Land_doctrine "Land doctrine")\n    *   [![Goal generic air doctrine.png](https://hoi4.paradoxwikis.com/images/thumb/c/cf/Goal_generic_air_doctrine.png/22px-Goal_generic_air_doctrine.png)](/File:Goal_generic_air_doctrine.png) [Air doctrine](/Air_doctrine "Air doctrine")\n    *   [![Goal generic navy doctrines tactics.png](https://hoi4.paradoxwikis.com/images/thumb/c/c2/Goal_generic_navy_doctrines_tactics.png/22px-Goal_generic_navy_doctrines_tactics.png)](/File:Goal_generic_navy_doctrines_tactics.png) [Naval doctrine](/Naval_doctrine "Naval doctrine")',
    notes:
      "If you think you should have got this and haven't, double check you haven't missed one that wasn't mutually exclusive on the same row of the tree.",
    game: 'hoi4',
  },
  {
    id: 'hoi4_ach_11',
    name: 'Mine is bigger than yours',
    description: 'Lead a faction with at least 20 members.',
    icon: 'https://hoi4.paradoxwikis.com/images/b/bf/Mine_is_Bigger_Than_Yours.jpg',
    dlc: '',
    version: '1.0',
    difficulty: 'VE',
    startingConditions: '',
    completionRequirements:
      '*   [![Relation join faction.png](https://hoi4.paradoxwikis.com/images/thumb/9/91/Relation_join_faction.png/22px-Relation_join_faction.png)](/File:Relation_join_faction.png) Is Faction leader\n*   [![Relation join faction.png](https://hoi4.paradoxwikis.com/images/thumb/9/91/Relation_join_faction.png/22px-Relation_join_faction.png)](/File:Relation_join_faction.png) Faction has at least **20** members',
    notes:
      'If you have [![Man the Guns](https://hoi4.paradoxwikis.com/images/thumb/8/86/DLC_Man_the_Guns.png/22px-DLC_Man_the_Guns.png)](/Man_the_Guns "Man the Guns")[Man the Guns](/Man_the_Guns "Man the Guns"), simply go down the [![Revisit Colonial Policy](https://hoi4.paradoxwikis.com/images/thumb/f/f7/Focus_SAF_colonialist_crusade.png/22px-Focus_SAF_colonialist_crusade.png)](/British_national_focus_tree#Revisit_Colonial_Policy "Revisit Colonial Policy")[Revisit Colonial Policy](/British_national_focus_tree#Revisit_Colonial_Policy "British national focus tree") branch to release all occupied land as puppets.  \nIf you do not have [![Man the Guns](https://hoi4.paradoxwikis.com/images/thumb/8/86/DLC_Man_the_Guns.png/22px-DLC_Man_the_Guns.png)](/Man_the_Guns "Man the Guns")[Man the Guns](/Man_the_Guns "Man the Guns"), you can release all the puppets right at the game start. Released puppets will automatically be in your faction, easily adding 20+ members to your faction.',
    game: 'hoi4',
  },
  {
    id: 'hoi4_ach_12',
    name: 'No country for old men',
    description: 'Reach 0 manpower with Scraping the Barrel as Conscription Law.',
    icon: 'https://hoi4.paradoxwikis.com/images/e/e8/No_Country_for_Old_Men.jpg',
    dlc: '',
    version: '1.0',
    difficulty: 'VE',
    startingConditions: '',
    completionRequirements:
      '*   [![Scraping the Barrel](https://hoi4.paradoxwikis.com/images/thumb/b/be/Scraping_the_Barrel.png/22px-Scraping_the_Barrel.png)](/Ideas#Conscription_laws "Scraping the Barrel") Has conscription law **Scraping the Barrel**\n*   [![Manpower](https://hoi4.paradoxwikis.com/images/thumb/0/0c/Manpower.png/22px-Manpower.png)](/Manpower "Manpower") Has **0** manpower',
    notes:
      'On historical mode, start as [![Flag of Luxembourg](https://hoi4.paradoxwikis.com/images/thumb/3/3f/Luxembourg.png/24px-Luxembourg.png)](/Luxembourg "Luxembourg") [Luxembourg](/Luxembourg "Luxembourg") and do absolutely nothing. Save up 750+ political power. When [![Flag of Germany](https://hoi4.paradoxwikis.com/images/thumb/e/e9/German_Reich.png/24px-German_Reich.png)](/Germany "Germany") [Germany](/Germany "Germany") declares war on you, make sure to join the Allies. Since you have no divisions, the Germans will capitulate you almost immediately. Once capitulated, change your conscription law to [![Scraping the Barrel](https://hoi4.paradoxwikis.com/images/thumb/b/be/Scraping_the_Barrel.png/22px-Scraping_the_Barrel.png)](/Ideas#Conscription_laws "Scraping the Barrel")[Scraping the Barrel](/Ideas#Conscription_laws "Ideas"), and the achievement should fire.',
    game: 'hoi4',
  },
  {
    id: 'hoi4_ach_13',
    name: 'Poland Can Into Space',
    description: 'Has completed the Special Project Rocket Interceptor.',
    icon: 'https://hoi4.paradoxwikis.com/images/5/5f/Poland_Can_Into_Space.jpg',
    dlc: '',
    version: '1.0',
    difficulty: 'E',
    startingConditions:
      '[![Yes](https://hoi4.paradoxwikis.com/images/thumb/7/77/Yes.png/22px-Yes.png)](/File:Yes.png "Yes") Playing as [![Flag of Poland](https://hoi4.paradoxwikis.com/images/thumb/9/99/Poland.png/24px-Poland.png)](/Poland "Poland") [Poland](/Poland "Poland")',
    completionRequirements:
      '[![Yes](https://hoi4.paradoxwikis.com/images/thumb/7/77/Yes.png/22px-Yes.png)](/File:Yes.png "Yes") Has completed special project **PZL Bielik (Rocket Interceptor)**',
    notes:
      'Concede territory to avoid wars and just research. With [![Man the Guns](https://hoi4.paradoxwikis.com/images/thumb/8/86/DLC_Man_the_Guns.png/22px-DLC_Man_the_Guns.png)](/Man_the_Guns "Man the Guns")[Man the Guns](/Man_the_Guns "Man the Guns"), even when you get overrun and conquered by [![Flag of Germany](https://hoi4.paradoxwikis.com/images/thumb/e/e9/German_Reich.png/24px-German_Reich.png)](/Germany "Germany") [Germany](/Germany "Germany") and/or the [![Flag of Soviet Union](https://hoi4.paradoxwikis.com/images/thumb/6/67/Soviet_Union.png/24px-Soviet_Union.png)](/Soviet_Union "Soviet Union") [Soviet Union](/Soviet_Union "Soviet Union"), you will continue the game as a government-in-exile hosted by the [![Flag of United Kingdom](https://hoi4.paradoxwikis.com/images/thumb/2/29/United_Kingdom.png/24px-United_Kingdom.png)](/United_Kingdom "United Kingdom") [United Kingdom](/United_Kingdom "United Kingdom") and remain eligible for the achievement. As long as the [Allies](/Allies "Allies") survive, you can continue doing research to get the achievement.',
    game: 'hoi4',
  },
  {
    id: 'hoi4_ach_14',
    name: 'True Blitzkrieg',
    description: 'As Germany have both Poland and France surrender before January 1st 1940.',
    icon: 'https://hoi4.paradoxwikis.com/images/9/91/True_Blitzkrieg.jpg',
    dlc: '',
    version: '1.0',
    difficulty: 'M',
    startingConditions:
      '[![Yes](https://hoi4.paradoxwikis.com/images/thumb/7/77/Yes.png/22px-Yes.png)](/File:Yes.png "Yes") Playing as [![Flag of Germany](https://hoi4.paradoxwikis.com/images/thumb/e/e9/German_Reich.png/24px-German_Reich.png)](/Germany "Germany") [Germany](/Germany "Germany")',
    completionRequirements:
      '*   [![Time](https://hoi4.paradoxwikis.com/images/thumb/0/08/Time.png/22px-Time.png)](/File:Time.png "Time") Before Jan 1st, 1940\n*   [![Yes](https://hoi4.paradoxwikis.com/images/thumb/7/77/Yes.png/22px-Yes.png)](/File:Yes.png "Yes") [![Flag of France](https://hoi4.paradoxwikis.com/images/thumb/d/de/France.png/24px-France.png)](/France "France") [France](/France "France") *either*:\n    *   Does **not** exist\n    *   Has capitulated\n    *   Has surrendered\n*   [![Yes](https://hoi4.paradoxwikis.com/images/thumb/7/77/Yes.png/22px-Yes.png)](/File:Yes.png "Yes") [![Flag of Poland](https://hoi4.paradoxwikis.com/images/thumb/9/99/Poland.png/24px-Poland.png)](/Poland "Poland") [Poland](/Poland "Poland") does **not** exist *or* has capitulated',
    notes:
      'Both nations need to be either capitulated or annexed. Neither of them can be a puppet.\n\n*For detailed strategies, see [True Blitzkrieg](/True_Blitzkrieg "True Blitzkrieg")*',
    game: 'hoi4',
  },
  {
    id: 'hoi4_ach_15',
    name: 'Northern Light',
    description: 'As a Scandinavian country form your own faction, and have Denmark, Sweden, Norway and Finland in it.',
    icon: 'https://hoi4.paradoxwikis.com/images/0/03/Northern_Light.jpg',
    dlc: '',
    version: '1.0',
    difficulty: 'VE',
    startingConditions:
      '[![Yes](https://hoi4.paradoxwikis.com/images/thumb/7/77/Yes.png/22px-Yes.png)](/File:Yes.png "Yes") Playing as *either*:\n\n*   *   [![Flag of Denmark](https://hoi4.paradoxwikis.com/images/thumb/6/69/Denmark.png/24px-Denmark.png)](/Denmark "Denmark") [Denmark](/Denmark "Denmark")\n    *   [![Flag of Finland](https://hoi4.paradoxwikis.com/images/thumb/c/c4/Finland.png/24px-Finland.png)](/Finland "Finland") [Finland](/Finland "Finland")\n    *   [![Flag of Norway](https://hoi4.paradoxwikis.com/images/thumb/0/0f/Norway.png/24px-Norway.png)](/Norway "Norway") [Norway](/Norway "Norway")\n    *   [![Flag of Sweden](https://hoi4.paradoxwikis.com/images/thumb/9/98/Sweden.png/24px-Sweden.png)](/Sweden "Sweden") [Sweden](/Sweden "Sweden")',
    completionRequirements:
      '*   [![Relation join faction.png](https://hoi4.paradoxwikis.com/images/thumb/9/91/Relation_join_faction.png/22px-Relation_join_faction.png)](/File:Relation_join_faction.png) Is a faction leader\n*   [![Relation join faction.png](https://hoi4.paradoxwikis.com/images/thumb/9/91/Relation_join_faction.png/22px-Relation_join_faction.png)](/File:Relation_join_faction.png) In faction with:\n\n*   *   [![Flag of Norway](https://hoi4.paradoxwikis.com/images/thumb/0/0f/Norway.png/24px-Norway.png)](/Norway "Norway") [Norway](/Norway "Norway")\n    *   [![Flag of Denmark](https://hoi4.paradoxwikis.com/images/thumb/6/69/Denmark.png/24px-Denmark.png)](/Denmark "Denmark") [Denmark](/Denmark "Denmark")\n    *   [![Flag of Sweden](https://hoi4.paradoxwikis.com/images/thumb/9/98/Sweden.png/24px-Sweden.png)](/Sweden "Sweden") [Sweden](/Sweden "Sweden")\n    *   [![Flag of Finland](https://hoi4.paradoxwikis.com/images/thumb/c/c4/Finland.png/24px-Finland.png)](/Finland "Finland") [Finland](/Finland "Finland")',
    notes:
      'Oh historical mode, play as [![Flag of Finland](https://hoi4.paradoxwikis.com/images/thumb/c/c4/Finland.png/24px-Finland.png)](/Finland "Finland") [Finland](/Finland "Finland"). Wait for world tension to reach 50% so you can do the [![Northern Defense Front](https://hoi4.paradoxwikis.com/images/thumb/7/70/Focus_FIN_northern_defense_front.png/22px-Focus_FIN_northern_defense_front.png)](/Finnish_national_focus_tree#Northern_Defense_Front "Northern Defense Front")[Northern Defense Front](/Finnish_national_focus_tree#Northern_Defense_Front "Finnish national focus tree") national focus, which makes a faction and invites the other Scandinavian countries to it. The AI should join if it is not already in a faction.',
    game: 'hoi4',
  },
  {
    id: 'hoi4_ach_16',
    name: 'Nobody expects...',
    description: 'As Nationalist Spain in Axis manage to take Paris before the Germans.',
    icon: 'https://hoi4.paradoxwikis.com/images/a/a5/Nobody_Expects.jpg',
    dlc: '',
    version: '1.0',
    difficulty: 'M',
    startingConditions:
      '[![Yes](https://hoi4.paradoxwikis.com/images/thumb/7/77/Yes.png/22px-Yes.png)](/File:Yes.png "Yes") Playing as [![Flag of Spain](https://hoi4.paradoxwikis.com/images/thumb/5/58/Spain.png/24px-Spain.png)](/Spain "Spain") [Spain](/Spain "Spain")',
    completionRequirements:
      '*   [![Yes](https://hoi4.paradoxwikis.com/images/thumb/7/77/Yes.png/22px-Yes.png)](/File:Yes.png "Yes") Ruling party is [![{{{1}}}](https://hoi4.paradoxwikis.com/images/thumb/1/1f/Fascism.png/22px-Fascism.png)](/Ideology#Fascism "{{{1}}}")[Fascist](/Ideology#Fascism "Ideology")\n*   [![Relation join faction.png](https://hoi4.paradoxwikis.com/images/thumb/9/91/Relation_join_faction.png/22px-Relation_join_faction.png)](/File:Relation_join_faction.png) In faction with [![Flag of Germany](https://hoi4.paradoxwikis.com/images/thumb/e/e9/German_Reich.png/24px-German_Reich.png)](/Germany "Germany") [Germany](/Germany "Germany")\n*   [![Yes](https://hoi4.paradoxwikis.com/images/thumb/7/77/Yes.png/22px-Yes.png)](/File:Yes.png "Yes") [![Flag of Germany](https://hoi4.paradoxwikis.com/images/thumb/e/e9/German_Reich.png/24px-German_Reich.png)](/Germany "Germany") [Germany](/Germany "Germany") is a faction leader\n*   [![Occupation.png](https://hoi4.paradoxwikis.com/images/d/dc/Occupation.png)](/File:Occupation.png) Controls **Ile de France** *(16)*',
    notes:
      'Go down the [![Unify the Nationalist Front](https://hoi4.paradoxwikis.com/images/thumb/f/f1/Focus_spa_unify_the_nationalist_front.png/22px-Focus_spa_unify_the_nationalist_front.png)](/Nationalist_Spanish_national_focus_tree#Unify_the_Nationalist_Front "Unify the Nationalist Front")[Unify the Nationalist Front](/Nationalist_Spanish_national_focus_tree#Unify_the_Nationalist_Front "Nationalist Spanish national focus tree") path, win the civil war, and head for [![Join the Axis](https://hoi4.paradoxwikis.com/images/thumb/5/5d/Goal_support_fascism.png/22px-Goal_support_fascism.png)](/Nationalist_Spanish_national_focus_tree#Join_the_Axis "Join the Axis")[Join the Axis](/Nationalist_Spanish_national_focus_tree#Join_the_Axis "Nationalist Spanish national focus tree"). Join the war once [![Flag of Germany](https://hoi4.paradoxwikis.com/images/thumb/e/e9/German_Reich.png/24px-German_Reich.png)](/Germany "Germany") [Germany](/Germany "Germany") attacks the Benelux and gain enough war score for [![Flag of Germany](https://hoi4.paradoxwikis.com/images/thumb/e/e9/German_Reich.png/24px-German_Reich.png)](/Germany "Germany") [Germany](/Germany "Germany") to give you control of **Ile de France** *(16)*.',
    game: 'hoi4',
  },
  {
    id: 'hoi4_ach_17',
    name: 'The bell tolls for us',
    description: 'Win Spanish Civil War as Republican Spain.',
    icon: 'https://hoi4.paradoxwikis.com/images/0/00/The_Bell_Tolls_for_Us.jpg',
    dlc: '',
    version: '1.0',
    difficulty: 'M',
    startingConditions:
      '[![Yes](https://hoi4.paradoxwikis.com/images/thumb/7/77/Yes.png/22px-Yes.png)](/File:Yes.png "Yes") Playing as [![Flag of Spain](https://hoi4.paradoxwikis.com/images/thumb/5/58/Spain.png/24px-Spain.png)](/Spain "Spain") [Spain](/Spain "Spain")',
    completionRequirements:
      '*   [![No](https://hoi4.paradoxwikis.com/images/thumb/0/04/No.png/22px-No.png)](/File:No.png "No") Ruling party is [![{{{1}}}](https://hoi4.paradoxwikis.com/images/thumb/1/1f/Fascism.png/22px-Fascism.png)](/Ideology#Fascism "{{{1}}}")[Fascist](/Ideology#Fascism "Ideology")\n*   [![Yes](https://hoi4.paradoxwikis.com/images/thumb/7/77/Yes.png/22px-Yes.png)](/File:Yes.png "Yes") Won the Spanish Civil War\n*   [![Yes](https://hoi4.paradoxwikis.com/images/thumb/7/77/Yes.png/22px-Yes.png)](/File:Yes.png "Yes") Ruling party is [![{{{1}}}](https://hoi4.paradoxwikis.com/images/thumb/e/e9/Communism.png/22px-Communism.png)](/Ideology#Communism "{{{1}}}")[Communist](/Ideology#Communism "Ideology") or [![{{{1}}}](https://hoi4.paradoxwikis.com/images/thumb/e/e9/Democracy.png/22px-Democracy.png)](/Ideology#Democracy "{{{1}}}")[Democratic](/Ideology#Democracy "Ideology")',
    notes:
      "Even if the civil war hasn't ended, capitulating one of the other factions (Anarchists/Fascists/Carlists) in the civil war as the Republicans will trigger the achievement.",
    game: 'hoi4',
  },
  {
    id: 'hoi4_ach_18',
    name: 'The Revolution Triumphant',
    description: 'Have Germany as a puppet of Soviet.',
    icon: 'https://hoi4.paradoxwikis.com/images/8/87/The_Revolution_Triumphant.jpg',
    dlc: '',
    version: '1.0',
    difficulty: 'M',
    startingConditions:
      '[![Yes](https://hoi4.paradoxwikis.com/images/thumb/7/77/Yes.png/22px-Yes.png)](/File:Yes.png "Yes") Playing as [![Flag of Soviet Union](https://hoi4.paradoxwikis.com/images/thumb/6/67/Soviet_Union.png/24px-Soviet_Union.png)](/Soviet_Union "Soviet Union") [Soviet Union](/Soviet_Union "Soviet Union")',
    completionRequirements:
      '[![Puppet](https://hoi4.paradoxwikis.com/images/thumb/a/a7/Autonomy_puppet_icon.png/22px-Autonomy_puppet_icon.png)](/Puppet#Autonomy_levels "Puppet") [![Flag of Germany](https://hoi4.paradoxwikis.com/images/thumb/e/e9/German_Reich.png/24px-German_Reich.png)](/Germany "Germany") [Germany](/Germany "Germany") is a puppet of the [![Flag of Soviet Union](https://hoi4.paradoxwikis.com/images/thumb/6/67/Soviet_Union.png/24px-Soviet_Union.png)](/Soviet_Union "Soviet Union") [Soviet Union](/Soviet_Union "Soviet Union")',
    notes:
      '[![Flag of Germany](https://hoi4.paradoxwikis.com/images/thumb/e/e9/German_Reich.png/24px-German_Reich.png)](/Germany "Germany") [Germany](/Germany "Germany") must be unified. [![Flag of West Germany](https://hoi4.paradoxwikis.com/images/thumb/c/cc/West_Germany.png/24px-West_Germany.png)](/West_Germany "West Germany") [West Germany](/West_Germany "West Germany") or [![Flag of East Germany](https://hoi4.paradoxwikis.com/images/thumb/f/f2/East_Germany.png/24px-East_Germany.png)](/East_Germany "East Germany") [East Germany](/East_Germany "East Germany") will not count, even if you puppet both.\n\n*For detailed strategies, see [The Revolution Triumphant](/The_Revolution_Triumphant "The Revolution Triumphant")*',
    game: 'hoi4',
  },
  {
    id: 'hoi4_ach_19',
    name: 'Once More Mate',
    description: 'Occupy Gallipoli as Australia.',
    icon: 'https://hoi4.paradoxwikis.com/images/4/4e/Once_More_Mate.jpg',
    dlc: '',
    version: '1.0',
    difficulty: 'M',
    startingConditions:
      '[![Yes](https://hoi4.paradoxwikis.com/images/thumb/7/77/Yes.png/22px-Yes.png)](/File:Yes.png "Yes") Playing as [![Flag of Australia](https://hoi4.paradoxwikis.com/images/thumb/4/43/Australia.png/24px-Australia.png)](/Australia "Australia") [Australia](/Australia "Australia")',
    completionRequirements:
      '[![Occupation.png](https://hoi4.paradoxwikis.com/images/d/dc/Occupation.png)](/File:Occupation.png) Controls **Edirne** *(341)*',
    notes:
      'Go down the [![Empower the Workers](https://hoi4.paradoxwikis.com/images/thumb/0/09/Goal_support_communism.png/22px-Goal_support_communism.png)](/Australian_national_focus_tree#Empower_the_Workers "Empower the Workers")[Empower the Workers](/Australian_national_focus_tree#Empower_the_Workers "Australian national focus tree") path towards [![Join Comintern](https://hoi4.paradoxwikis.com/images/thumb/0/09/Goal_support_communism.png/22px-Goal_support_communism.png)](/Australian_national_focus_tree#Join_Comintern "Join Comintern")[Join Comintern](/Australian_national_focus_tree#Join_Comintern "Australian national focus tree"). Justify a wargoal on [![Flag of Turkey](https://hoi4.paradoxwikis.com/images/thumb/b/b3/Turkey.png/24px-Turkey.png)](/Turkey "Turkey") [Turkey](/Turkey "Turkey") and attack from the [![Flag of Soviet Union](https://hoi4.paradoxwikis.com/images/thumb/6/67/Soviet_Union.png/24px-Soviet_Union.png)](/Soviet_Union "Soviet Union") [Soviet Union](/Soviet_Union "Soviet Union"). Call them into the war to get naval supremacy in the Black Sea and naval invade **Edirne** *(341)*. The achievement only requires control of the state, so it can be gained while at war.',
    game: 'hoi4',
  },
  {
    id: 'hoi4_ach_20',
    name: 'Forge of Victory',
    description: 'Have 50 factories as Belgium.',
    icon: 'https://hoi4.paradoxwikis.com/images/0/0a/Forge_of_Victory.jpg',
    dlc: '',
    version: '1.0',
    difficulty: 'VE',
    startingConditions:
      '[![Yes](https://hoi4.paradoxwikis.com/images/thumb/7/77/Yes.png/22px-Yes.png)](/File:Yes.png "Yes") Playing as [![Flag of Belgium](https://hoi4.paradoxwikis.com/images/thumb/3/32/Belgium.png/24px-Belgium.png)](/Belgium "Belgium") [Belgium](/Belgium "Belgium")',
    completionRequirements:
      '[![Industry icon.png](https://hoi4.paradoxwikis.com/images/thumb/e/ef/Industry_icon.png/22px-Industry_icon.png)](/File:Industry_icon.png) Has at least **50** factories',
    notes:
      '[![Naval dockyards](https://hoi4.paradoxwikis.com/images/thumb/e/ee/Naval_dockyards.png/22px-Naval_dockyards.png)](/Production "Naval dockyards")[Naval dockyards](/Production "Production") count toward total factories. Simply go [![{{{1}}}](https://hoi4.paradoxwikis.com/images/thumb/1/1f/Fascism.png/22px-Fascism.png)](/Ideology#Fascism "{{{1}}}")[Fascist](/Ideology#Fascism "Ideology") and conquer [![Flag of Netherlands](https://hoi4.paradoxwikis.com/images/thumb/3/32/Netherlands.png/24px-Netherlands.png)](/Netherlands "Netherlands") [Netherlands](/Netherlands "Netherlands") and [![Flag of Luxembourg](https://hoi4.paradoxwikis.com/images/thumb/3/3f/Luxembourg.png/24px-Luxembourg.png)](/Luxembourg "Luxembourg") [Luxembourg](/Luxembourg "Luxembourg"). If you end up at war with the Allies, don\'t worry. Simply join the Axis. When [![Flag of Germany](https://hoi4.paradoxwikis.com/images/thumb/e/e9/German_Reich.png/24px-German_Reich.png)](/Germany "Germany") [Germany](/Germany "Germany") punches into [![Flag of France](https://hoi4.paradoxwikis.com/images/thumb/d/de/France.png/24px-France.png)](/France "France") [France](/France "France") through your territory and capitulates them, you will occupy all of [![Flag of France](https://hoi4.paradoxwikis.com/images/thumb/d/de/France.png/24px-France.png)](/France "France") [France](/France "France"), thus giving you the necessary factories.',
    game: 'hoi4',
  },
  {
    id: 'hoi4_ach_21',
    name: 'Sunset Invasion',
    description:
      'Occupy a coastal province in Europe as Mexico, and if in a faction have it contain only South American members or puppets.',
    icon: 'https://hoi4.paradoxwikis.com/images/a/a2/Sunset_Invasion.jpg',
    dlc: '',
    version: '1.0',
    difficulty: 'VH',
    startingConditions:
      '[![Yes](https://hoi4.paradoxwikis.com/images/thumb/7/77/Yes.png/22px-Yes.png)](/File:Yes.png "Yes") Playing as [![Flag of Mexico](https://hoi4.paradoxwikis.com/images/thumb/0/0a/Mexico.png/24px-Mexico.png)](/Mexico "Mexico") [Mexico](/Mexico "Mexico")',
    completionRequirements:
      '*    [![No](https://hoi4.paradoxwikis.com/images/thumb/0/04/No.png/22px-No.png)](/File:No.png "No") Has joined a faction with non-South American members\n*   [![Occupation.png](https://hoi4.paradoxwikis.com/images/d/dc/Occupation.png)](/File:Occupation.png) Controls any coastal state on the European continent',
    notes: '*For detailed strategies, see [Sunset Invasion](/Sunset_Invasion "Sunset Invasion")*',
    game: 'hoi4',
  },
  {
    id: 'hoi4_ach_22',
    name: "Duce Nuked'em",
    description: 'Nuke Los Angeles as fascist Italy.',
    icon: 'https://hoi4.paradoxwikis.com/images/5/52/Duce_Nuked%27em.jpg',
    dlc: '',
    version: '1.0',
    difficulty: 'VH',
    startingConditions:
      '[![Yes](https://hoi4.paradoxwikis.com/images/thumb/7/77/Yes.png/22px-Yes.png)](/File:Yes.png "Yes") Playing as [![Flag of Italy](https://hoi4.paradoxwikis.com/images/thumb/2/2a/Italy.png/24px-Italy.png)](/Italy "Italy") [Italy](/Italy "Italy")',
    completionRequirements:
      '*   [![Yes](https://hoi4.paradoxwikis.com/images/thumb/7/77/Yes.png/22px-Yes.png)](/File:Yes.png "Yes") Ruling party is [![{{{1}}}](https://hoi4.paradoxwikis.com/images/thumb/1/1f/Fascism.png/22px-Fascism.png)](/Ideology#Fascism "{{{1}}}")[Fascist](/Ideology#Fascism "Ideology")\n*    [![Nuclear bombs.png](https://hoi4.paradoxwikis.com/images/thumb/1/18/Nuclear_bombs.png/22px-Nuclear_bombs.png)](/File:Nuclear_bombs.png) Has dropped a nuclear bomb in California',
    notes:
      'After securing the Mediterranean, it can easily be done with a small 1944 strategic bomber fleet (without any escort) by taking control of **Gibraltar** *(118)*, **Azores** *(698)*, and **Bermuda** *(696)*.',
    game: 'hoi4',
  },
  {
    id: 'hoi4_ach_23',
    name: 'Operation Sea Lion',
    description: 'Control British mainland as Germany.',
    icon: 'https://hoi4.paradoxwikis.com/images/b/b6/Operation_Sealion.jpg',
    dlc: '',
    version: '1.0',
    difficulty: 'M',
    startingConditions:
      '[![Yes](https://hoi4.paradoxwikis.com/images/thumb/7/77/Yes.png/22px-Yes.png)](/File:Yes.png "Yes") Playing as [![Flag of Germany](https://hoi4.paradoxwikis.com/images/thumb/e/e9/German_Reich.png/24px-German_Reich.png)](/Germany "Germany") [Germany](/Germany "Germany")',
    completionRequirements:
      '[![Occupation.png](https://hoi4.paradoxwikis.com/images/d/dc/Occupation.png)](/File:Occupation.png) Controls:\n\nExpand\n\n*   **South-West England** *(123)*\n*   **Sussex** *(127)*\n*   **Gloucestershire** *(338)*\n*   **Greater London Area** *(126)*\n*   **East Anglia** *(125)*\n*   **Wales** *(122)*\n*   **West Midlands** *(128)*\n*   **East Midlands** *(129)*\n*   **Lancashire** *(132)*\n*   **Yorkshire** *(130)*\n*   **Northumberland** *(131)*\n*   **Lanark** *(133)*\n*   **Lothian** *(121)*\n*   **Aberdeenshire** *(136)*\n*   **Scottish Highlands** *(120)*',
    notes:
      'Simply follow the guide for [True Blitzkrieg](/True_Blitzkrieg "True Blitzkrieg") which will put Western Europe under your control. At this point, it should be easy to launch an invasion on **Yorkshire** *(130)* and **Northumberland** *(131)*. Get intel on the [![Flag of United Kingdom](https://hoi4.paradoxwikis.com/images/thumb/2/29/United_Kingdom.png/24px-United_Kingdom.png)](/United_Kingdom "United Kingdom") [United Kingdom](/United_Kingdom "United Kingdom") or call [![Flag of Italy](https://hoi4.paradoxwikis.com/images/thumb/2/2a/Italy.png/24px-Italy.png)](/Italy "Italy") [Italy](/Italy "Italy") into the war to help with gaining naval superiority. The British Isles will be weakly defended, and once you have a stable port beachhead, it should be trivial to conquer them.',
    game: 'hoi4',
  },
  {
    id: 'hoi4_ach_24',
    name: 'One Empire',
    description: 'Unite the entire world under the British Empire.',
    icon: 'https://hoi4.paradoxwikis.com/images/0/06/One_Empire.jpg',
    dlc: '',
    version: '1.0',
    difficulty: 'M',
    startingConditions:
      '[![Yes](https://hoi4.paradoxwikis.com/images/thumb/7/77/Yes.png/22px-Yes.png)](/File:Yes.png "Yes") Playing as [![Flag of United Kingdom](https://hoi4.paradoxwikis.com/images/thumb/2/29/United_Kingdom.png/24px-United_Kingdom.png)](/United_Kingdom "United Kingdom") [United Kingdom](/United_Kingdom "United Kingdom")',
    completionRequirements:
      '*   [![Relation join faction.png](https://hoi4.paradoxwikis.com/images/thumb/9/91/Relation_join_faction.png/22px-Relation_join_faction.png)](/File:Relation_join_faction.png) Is a faction leader\n*   [![Occupation.png](https://hoi4.paradoxwikis.com/images/d/dc/Occupation.png)](/File:Occupation.png) Every state in the world is controlled by you or a member of your faction',
    notes:
      'This is a very long achievement that requires a lot of grinding. Your best bet is to continue your democratic path on ahistorical, but set the [![Flag of United States](https://hoi4.paradoxwikis.com/images/thumb/3/32/United_States.png/24px-United_States.png)](/United_States "United States") [United States](/United_States "United States"), [![Flag of France](https://hoi4.paradoxwikis.com/images/thumb/d/de/France.png/24px-France.png)](/France "France") [France](/France "France"), [![Flag of Germany](https://hoi4.paradoxwikis.com/images/thumb/e/e9/German_Reich.png/24px-German_Reich.png)](/Germany "Germany") [Germany](/Germany "Germany") and [![Flag of Italy](https://hoi4.paradoxwikis.com/images/thumb/2/2a/Italy.png/24px-Italy.png)](/Italy "Italy") [Italy](/Italy "Italy") to historical. This leaves the chance for countries like [![Flag of Switzerland](https://hoi4.paradoxwikis.com/images/thumb/0/01/Switzerland.png/24px-Switzerland.png)](/Switzerland "Switzerland") [Switzerland](/Switzerland "Switzerland") to move away from neutrality, giving you the chance of adding them to the faction or conquering them. Take focuses like [![Coerce Turkey](https://hoi4.paradoxwikis.com/images/thumb/3/3b/Focus_generic_befriend_turkey.png/22px-Focus_generic_befriend_turkey.png)](/British_national_focus_tree#Coerce_Turkey "Coerce Turkey")[Coerce Turkey](/British_national_focus_tree#Coerce_Turkey "British national focus tree") and [![Influence China](https://hoi4.paradoxwikis.com/images/thumb/b/b0/Focus_chi_cooperation_with_the_nationalists.png/22px-Focus_chi_cooperation_with_the_nationalists.png)](/British_national_focus_tree#Influence_China "Influence China")[Influence China](/British_national_focus_tree#Influence_China "British national focus tree") to increase the probability of them joining your faction.',
    game: 'hoi4',
  },
  {
    id: 'hoi4_ach_25',
    name: "Party like it's 1520",
    description: 'Occupy Stockholm as communist Denmark.',
    icon: 'https://hoi4.paradoxwikis.com/images/b/b9/Party_Like_its_1520.jpg',
    dlc: '',
    version: '1.0',
    difficulty: 'H',
    startingConditions:
      '[![Yes](https://hoi4.paradoxwikis.com/images/thumb/7/77/Yes.png/22px-Yes.png)](/File:Yes.png "Yes") Playing as [![Flag of Denmark](https://hoi4.paradoxwikis.com/images/thumb/6/69/Denmark.png/24px-Denmark.png)](/Denmark "Denmark") [Denmark](/Denmark "Denmark")',
    completionRequirements:
      '*   [![Occupation.png](https://hoi4.paradoxwikis.com/images/d/dc/Occupation.png)](/File:Occupation.png) Controls **Södermanland** *(141)*\n*   [![Yes](https://hoi4.paradoxwikis.com/images/thumb/7/77/Yes.png/22px-Yes.png)](/File:Yes.png "Yes") Ruling party is [![{{{1}}}](https://hoi4.paradoxwikis.com/images/thumb/e/e9/Communism.png/22px-Communism.png)](/Ideology#Communism "{{{1}}}")[Communist](/Ideology#Communism "Ideology")',
    notes: '*For detailed strategies, see [Party like it\'s 1520](/Party_like_it%27s_1520 "Party like it\'s 1520")*',
    game: 'hoi4',
  },
  {
    id: 'hoi4_ach_26',
    name: 'Med plutonium...',
    description: 'Nuke Denmark as Sweden.',
    icon: 'https://hoi4.paradoxwikis.com/images/f/f7/Med_Plutonium.jpg',
    dlc: '',
    version: '1.0',
    difficulty: 'M',
    startingConditions:
      '[![Yes](https://hoi4.paradoxwikis.com/images/thumb/7/77/Yes.png/22px-Yes.png)](/File:Yes.png "Yes") Playing as [![Flag of Sweden](https://hoi4.paradoxwikis.com/images/thumb/9/98/Sweden.png/24px-Sweden.png)](/Sweden "Sweden") [Sweden](/Sweden "Sweden")',
    completionRequirements:
      '[![Nuclear bombs.png](https://hoi4.paradoxwikis.com/images/thumb/1/18/Nuclear_bombs.png/22px-Nuclear_bombs.png)](/File:Nuclear_bombs.png) Has dropped a nuclear bomb on Denmark',
    notes:
      'The nuked state must be both owned by and a core of [![Flag of Denmark](https://hoi4.paradoxwikis.com/images/thumb/6/69/Denmark.png/24px-Denmark.png)](/Denmark "Denmark") [Denmark](/Denmark "Denmark").\n\n*For detailed strategies, see [Med plutonium...](/Med_plutonium... "Med plutonium...")*',
    game: 'hoi4',
  },
  {
    id: 'hoi4_ach_27',
    name: 'The Revenge of Montezuma',
    description: 'Restore the old borders with the USA as Mexico.',
    icon: 'https://hoi4.paradoxwikis.com/images/f/f3/The_Revenge_of_Montezuma.jpg',
    dlc: '',
    version: '1.0',
    difficulty: 'H',
    startingConditions:
      '[![Yes](https://hoi4.paradoxwikis.com/images/thumb/7/77/Yes.png/22px-Yes.png)](/File:Yes.png "Yes") Playing as [![Flag of Mexico](https://hoi4.paradoxwikis.com/images/thumb/0/0a/Mexico.png/24px-Mexico.png)](/Mexico "Mexico") [Mexico](/Mexico "Mexico")',
    completionRequirements:
      '[![Occupation.png](https://hoi4.paradoxwikis.com/images/d/dc/Occupation.png)](/File:Occupation.png) Controls:\n\nExpand\n\n*   **California** *(378)*\n*   **Nevada** *(379)*\n*   **Utah** *(380)*\n*   **Arizona** *(377)*\n*   **New Mexico** *(376)*\n*   **Texas** *(375)*',
    notes:
      '*For detailed strategies, see [The Revenge of Montezuma](/The_Revenge_of_Montezuma "The Revenge of Montezuma")*',
    game: 'hoi4',
  },
  {
    id: 'hoi4_ach_28',
    name: 'Big Entente',
    description:
      'As France, complete the "Little Entente" National Focus, and have all German cores owned by you or someone in your faction.',
    icon: 'https://hoi4.paradoxwikis.com/images/5/59/Big_Entente.jpg',
    dlc: '',
    version: '1.0',
    difficulty: 'E',
    startingConditions:
      '[![Yes](https://hoi4.paradoxwikis.com/images/thumb/7/77/Yes.png/22px-Yes.png)](/File:Yes.png "Yes") Playing as [![Flag of France](https://hoi4.paradoxwikis.com/images/thumb/d/de/France.png/24px-France.png)](/France "France") [France](/France "France")',
    completionRequirements:
      '*   [![Relation join faction.png](https://hoi4.paradoxwikis.com/images/thumb/9/91/Relation_join_faction.png/22px-Relation_join_faction.png)](/File:Relation_join_faction.png) Is a faction leader\n*   [![Yes](https://hoi4.paradoxwikis.com/images/thumb/7/77/Yes.png/22px-Yes.png)](/File:Yes.png "Yes") Has completed focus [![Strengthen the Little Entente](https://hoi4.paradoxwikis.com/images/thumb/3/32/Focus_generic_little_entente.png/22px-Focus_generic_little_entente.png)](/French_national_focus_tree#Strengthen_the_Little_Entente "Strengthen the Little Entente")[Strengthen the Little Entente](/French_national_focus_tree#Strengthen_the_Little_Entente "French national focus tree")\n*   [![Occupation.png](https://hoi4.paradoxwikis.com/images/d/dc/Occupation.png)](/File:Occupation.png) You or a member of your faction owns all cores of [![Flag of Germany](https://hoi4.paradoxwikis.com/images/thumb/e/e9/German_Reich.png/24px-German_Reich.png)](/Germany "Germany") [Germany](/Germany "Germany")',
    notes: '*For detailed strategies, see [Big Entente](/Big_Entente "Big Entente")*',
    game: 'hoi4',
  },
  {
    id: 'hoi4_ach_29',
    name: 'New World Order',
    description: 'Make all nations fascist.',
    icon: 'https://hoi4.paradoxwikis.com/images/1/1a/New_World_Order.jpg',
    dlc: '',
    version: '1.0',
    difficulty: 'M',
    startingConditions: '',
    completionRequirements:
      '[![Yes](https://hoi4.paradoxwikis.com/images/thumb/7/77/Yes.png/22px-Yes.png)](/File:Yes.png "Yes") Ruling party of every country is [![{{{1}}}](https://hoi4.paradoxwikis.com/images/thumb/1/1f/Fascism.png/22px-Fascism.png)](/Ideology#Fascism "{{{1}}}")[Fascist](/Ideology#Fascism "Ideology")',
    notes: '*For detailed strategies, see [New World Order](/New_World_Order "New World Order")*',
    game: 'hoi4',
  },
  {
    id: 'hoi4_ach_30',
    name: 'Bearer of Artillery',
    description: 'Gain Vojtek as commander',
    icon: 'https://hoi4.paradoxwikis.com/images/4/43/Bearer_of_Artillery.jpg',
    dlc: '',
    version: '1.0',
    difficulty: 'VH',
    startingConditions:
      '[![Yes](https://hoi4.paradoxwikis.com/images/thumb/7/77/Yes.png/22px-Yes.png)](/File:Yes.png "Yes") Playing as [![Flag of Poland](https://hoi4.paradoxwikis.com/images/thumb/9/99/Poland.png/24px-Poland.png)](/Poland "Poland") [Poland](/Poland "Poland")',
    completionRequirements:
      '[![Yes](https://hoi4.paradoxwikis.com/images/thumb/7/77/Yes.png/22px-Yes.png)](/File:Yes.png "Yes") Has Vojtek as a commander',
    notes: '*For detailed strategies, see [Bearer of Artillery](/Bearer_of_Artillery "Bearer of Artillery")*',
    game: 'hoi4',
  },
  {
    id: 'hoi4_ach_31',
    name: 'Braaaaains!',
    description: 'As Canada, complete the Send in the Zombies focus.',
    icon: 'https://hoi4.paradoxwikis.com/images/c/c7/Braaaaains%21.png',
    dlc: '',
    version: '1.3',
    difficulty: 'VE',
    startingConditions:
      '[![Yes](https://hoi4.paradoxwikis.com/images/thumb/7/77/Yes.png/22px-Yes.png)](/File:Yes.png "Yes") Playing as [![Flag of Canada](https://hoi4.paradoxwikis.com/images/thumb/a/a3/Canada.png/24px-Canada.png)](/Canada "Canada") [Canada](/Canada "Canada")',
    completionRequirements:
      '[![Yes](https://hoi4.paradoxwikis.com/images/thumb/7/77/Yes.png/22px-Yes.png)](/File:Yes.png "Yes") Has completed focus [![Send in the Zombies](https://hoi4.paradoxwikis.com/images/thumb/2/24/Goal_generic_demand_territory.png/22px-Goal_generic_demand_territory.png)](/Canadian_national_focus_tree#Send_in_the_Zombies "Send in the Zombies")[Send in the Zombies](/Canadian_national_focus_tree#Send_in_the_Zombies "Canadian national focus tree")',
    notes:
      'Play historical and rush down economic focuses. When [![Flag of Germany](https://hoi4.paradoxwikis.com/images/thumb/e/e9/German_Reich.png/24px-German_Reich.png)](/Germany "Germany") [Germany](/Germany "Germany") declares war on [![Flag of Poland](https://hoi4.paradoxwikis.com/images/thumb/9/99/Poland.png/24px-Poland.png)](/Poland "Poland") [Poland](/Poland "Poland"), join the war and rush down to [![Send in the Zombies](https://hoi4.paradoxwikis.com/images/thumb/2/24/Goal_generic_demand_territory.png/22px-Goal_generic_demand_territory.png)](/Canadian_national_focus_tree#Send_in_the_Zombies "Send in the Zombies")[Send in the Zombies](/Canadian_national_focus_tree#Send_in_the_Zombies "Canadian national focus tree").',
    game: 'hoi4',
  },
  {
    id: 'hoi4_ach_32',
    name: 'District 9',
    description: 'As South Africa, have 9 civilian factories in Transvaal.',
    icon: 'https://hoi4.paradoxwikis.com/images/7/76/District_9.png',
    dlc: '',
    version: '1.3',
    difficulty: 'VE',
    startingConditions:
      '[![Yes](https://hoi4.paradoxwikis.com/images/thumb/7/77/Yes.png/22px-Yes.png)](/File:Yes.png "Yes") Playing as [![Flag of South Africa](https://hoi4.paradoxwikis.com/images/thumb/e/ef/South_Africa.png/24px-South_Africa.png)](/South_Africa "South Africa") [South Africa](/South_Africa "South Africa")',
    completionRequirements:
      '[![Civilian factories](https://hoi4.paradoxwikis.com/images/thumb/5/55/Civilian_factories.png/22px-Civilian_factories.png)](/Production "Civilian factories") At least 9 civilian factories in **Transvaal** *(275)*',
    notes:
      'Convert military factories into civilian factories in Transvaal. Follow the Focus tree for free civilian factories. They can randomly give Transvaal the required Factories. If Transvaal runs out of building slots, follow the Dispersed/Concentrated Industry tech tree to get more building slots.',
    game: 'hoi4',
  },
  {
    id: 'hoi4_ach_33',
    name: 'Our Words Are Backed With Nuclear Weapons',
    description: 'As India, develop and deploy a nuke. You must have the Quit India Movement national spirit.',
    icon: 'https://hoi4.paradoxwikis.com/images/b/b6/Our_Words_Are_Backed_With_Nuclear_Weapons.png',
    dlc: '',
    version: '1.3',
    difficulty: 'E',
    startingConditions:
      '[![Yes](https://hoi4.paradoxwikis.com/images/thumb/7/77/Yes.png/22px-Yes.png)](/File:Yes.png "Yes") Playing as [![Flag of British Raj](https://hoi4.paradoxwikis.com/images/thumb/2/2f/British_Raj.png/24px-British_Raj.png)](/British_Raj "British Raj") [British Raj](/British_Raj "British Raj")',
    completionRequirements:
      '*    [![Yes](https://hoi4.paradoxwikis.com/images/thumb/7/77/Yes.png/22px-Yes.png)](/File:Yes.png "Yes") Has completed focus [![Quit India Movement](https://hoi4.paradoxwikis.com/images/thumb/8/81/Goal_generic_propaganda.png/22px-Goal_generic_propaganda.png)](/British_Raj_national_focus_tree_\\(base_game\\)#Quit_India_Movement "Quit India Movement")[Quit India Movement](/British_Raj_national_focus_tree_\\(base_game\\)#Quit_India_Movement "British Raj national focus tree (base game)")\n*   [![Nuclear bombs.png](https://hoi4.paradoxwikis.com/images/thumb/1/18/Nuclear_bombs.png/22px-Nuclear_bombs.png)](/File:Nuclear_bombs.png) Has used a nuclear bomb',
    notes:
      '**This achievement can only be earned with [![Graveyard of Empires](https://hoi4.paradoxwikis.com/images/thumb/a/a1/DLC_Graveyard_of_Empires.png/22px-DLC_Graveyard_of_Empires.png)](/Graveyard_of_Empires "Graveyard of Empires")[Graveyard of Empires](/Graveyard_of_Empires "Graveyard of Empires") disabled.**  \nHead for [![Quit India Movement](https://hoi4.paradoxwikis.com/images/thumb/8/81/Goal_generic_propaganda.png/22px-Goal_generic_propaganda.png)](/British_Raj_national_focus_tree_\\(base_game\\)#Quit_India_Movement "Quit India Movement")[Quit India Movement](/British_Raj_national_focus_tree_\\(base_game\\)#Quit_India_Movement "British Raj national focus tree (base game)") and develop, build and deploy a nuclear bomb (remember to get some strategic bombers and fighters for air superiority). Potential targets include [![Flag of Romania](https://hoi4.paradoxwikis.com/images/thumb/8/8f/Romania.png/24px-Romania.png)](/Romania "Romania") [Romania](/Romania "Romania") once [![Flag of Turkey](https://hoi4.paradoxwikis.com/images/thumb/b/b3/Turkey.png/24px-Turkey.png)](/Turkey "Turkey") [Turkey](/Turkey "Turkey") joins the Allies or [![Flag of Siam](https://hoi4.paradoxwikis.com/images/thumb/7/7e/Siam.png/24px-Siam.png)](/Siam "Siam") [Siam](/Siam "Siam") once they join [![Flag of Japan](https://hoi4.paradoxwikis.com/images/thumb/f/fc/Japan.png/24px-Japan.png)](/Japan "Japan") [Japan](/Japan "Japan").',
    game: 'hoi4',
  },
  {
    id: 'hoi4_ach_34',
    name: 'Crusader Kings',
    description: 'As South Africa, finish the A King for our People focus and take Jerusalem.',
    icon: 'https://hoi4.paradoxwikis.com/images/9/91/Crusader_Kings.png',
    dlc: '',
    version: '1.3',
    difficulty: 'M',
    startingConditions:
      '[![Yes](https://hoi4.paradoxwikis.com/images/thumb/7/77/Yes.png/22px-Yes.png)](/File:Yes.png "Yes") Playing as [![Flag of South Africa](https://hoi4.paradoxwikis.com/images/thumb/e/ef/South_Africa.png/24px-South_Africa.png)](/South_Africa "South Africa") [South Africa](/South_Africa "South Africa")',
    completionRequirements:
      '*   [![Yes](https://hoi4.paradoxwikis.com/images/thumb/7/77/Yes.png/22px-Yes.png)](/File:Yes.png "Yes") Has national spirit [![Edward VIII.png](https://hoi4.paradoxwikis.com/images/thumb/0/04/Edward_VIII.png/24px-Edward_VIII.png)](/File:Edward_VIII.png) Edward VIII\n*   [![Occupation.png](https://hoi4.paradoxwikis.com/images/d/dc/Occupation.png)](/File:Occupation.png) Controls **Palestine** *(454)*',
    notes: '*For detailed strategies, see [Crusader Kings](/Crusader_Kings "Crusader Kings")*',
    game: 'hoi4',
  },
  {
    id: 'hoi4_ach_35',
    name: 'Crusader Kings 2',
    description:
      'As South Africa, finish the Anti-Colonialist Crusade focus, release all European colonies via the focus, and take London.',
    icon: 'https://hoi4.paradoxwikis.com/images/a/a4/Crusader_Kings_2.png',
    dlc: '',
    version: '1.3',
    difficulty: 'I',
    startingConditions:
      '[![Yes](https://hoi4.paradoxwikis.com/images/thumb/7/77/Yes.png/22px-Yes.png)](/File:Yes.png "Yes") Playing as [![Flag of South Africa](https://hoi4.paradoxwikis.com/images/thumb/e/ef/South_Africa.png/24px-South_Africa.png)](/South_Africa "South Africa") [South Africa](/South_Africa "South Africa")',
    completionRequirements:
      '*   [![Yes](https://hoi4.paradoxwikis.com/images/thumb/7/77/Yes.png/22px-Yes.png)](/File:Yes.png "Yes") Has completed focus [![Anti-Colonialist Crusade](https://hoi4.paradoxwikis.com/images/thumb/f/f7/Focus_SAF_colonialist_crusade.png/22px-Focus_SAF_colonialist_crusade.png)](/South_African_national_focus_tree#Anti-Colonialist_Crusade "Anti-Colonialist Crusade")[Anti-Colonialist Crusade](/South_African_national_focus_tree#Anti-Colonialist_Crusade "South African national focus tree")\n*   [![Yes](https://hoi4.paradoxwikis.com/images/thumb/7/77/Yes.png/22px-Yes.png)](/File:Yes.png "Yes") Released Angola\n*   [![Yes](https://hoi4.paradoxwikis.com/images/thumb/7/77/Yes.png/22px-Yes.png)](/File:Yes.png "Yes") Released Mozambique\n*   [![Yes](https://hoi4.paradoxwikis.com/images/thumb/7/77/Yes.png/22px-Yes.png)](/File:Yes.png "Yes") Released Zimbabwe\n*   [![Yes](https://hoi4.paradoxwikis.com/images/thumb/7/77/Yes.png/22px-Yes.png)](/File:Yes.png "Yes") Released Kenya\n*   [![Yes](https://hoi4.paradoxwikis.com/images/thumb/7/77/Yes.png/22px-Yes.png)](/File:Yes.png "Yes") Released Congo\n*   [![Relation join faction.png](https://hoi4.paradoxwikis.com/images/thumb/9/91/Relation_join_faction.png/22px-Relation_join_faction.png)](/File:Relation_join_faction.png) Is a faction leader\n*   [![Occupation.png](https://hoi4.paradoxwikis.com/images/d/dc/Occupation.png)](/File:Occupation.png) You or a member of your faction controls **Greater London Area** *(126)*',
    notes:
      'The countries need to be released via event, not manually through the occupied territories screen.\n\n*For detailed strategies, see [Crusader Kings 2](/Crusader_Kings_2 "Crusader Kings 2")*',
    game: 'hoi4',
  },
  {
    id: 'hoi4_ach_36',
    name: 'Rule Britannia',
    description: 'As any British Subject state, conquer all of Britain.',
    icon: 'https://hoi4.paradoxwikis.com/images/5/5a/Rule_Britannia.png',
    dlc: '',
    version: '1.3',
    difficulty: 'VH',
    startingConditions:
      '[![Yes](https://hoi4.paradoxwikis.com/images/thumb/7/77/Yes.png/22px-Yes.png)](/File:Yes.png "Yes") Playing as *either*:\n\n*   *   [![Flag of Australia](https://hoi4.paradoxwikis.com/images/thumb/4/43/Australia.png/24px-Australia.png)](/Australia "Australia") [Australia](/Australia "Australia")\n    *   [![Flag of British Raj](https://hoi4.paradoxwikis.com/images/thumb/2/2f/British_Raj.png/24px-British_Raj.png)](/British_Raj "British Raj") [British Raj](/British_Raj "British Raj")\n    *   [![Flag of Canada](https://hoi4.paradoxwikis.com/images/thumb/a/a3/Canada.png/24px-Canada.png)](/Canada "Canada") [Canada](/Canada "Canada")\n    *   [![Flag of New Zealand](https://hoi4.paradoxwikis.com/images/thumb/d/d9/New_Zealand.png/24px-New_Zealand.png)](/New_Zealand "New Zealand") [New Zealand](/New_Zealand "New Zealand")\n    *   [![Flag of South Africa](https://hoi4.paradoxwikis.com/images/thumb/e/ef/South_Africa.png/24px-South_Africa.png)](/South_Africa "South Africa") [South Africa](/South_Africa "South Africa")',
    completionRequirements:
      '*   [![free](https://hoi4.paradoxwikis.com/images/thumb/8/84/Autonomy_freedom_icon.png/22px-Autonomy_freedom_icon.png)](/Puppet#Autonomy_levels "free") Is fully independent\n*   [![Occupation.png](https://hoi4.paradoxwikis.com/images/d/dc/Occupation.png)](/File:Occupation.png) Controls:\n\nExpand\n\n*   **South-West England** *(123)*\n*   **Sussex** *(127)*\n*   **Gloucestershire** *(338)*\n*   **Greater London Area** *(126)*\n*   **East Anglia** *(125)*\n*   **Wales** *(122)*\n*   **West Midlands** *(128)*\n*   **East Midlands** *(129)*\n*   **Lancashire** *(132)*\n*   **Yorkshire** *(130)*\n*   **Northumberland** *(131)*\n*   **Lanark** *(133)*\n*   **Lothian** *(121)*\n*   **Aberdeenshire** *(136)*\n*   **Scottish Highlands** *(120)*',
    notes: '*For detailed strategies, see [Rule Britannia](/Rule_Britannia "Rule Britannia")*',
    game: 'hoi4',
  },
  {
    id: 'hoi4_ach_37',
    name: 'Cut The Strings',
    description: 'Break free from your overlord as a puppet.',
    icon: 'https://hoi4.paradoxwikis.com/images/8/87/Cut_The_Strings.png',
    dlc: '',
    version: '1.3',
    difficulty: 'E',
    startingConditions:
      '[![Puppet](https://hoi4.paradoxwikis.com/images/thumb/a/a7/Autonomy_puppet_icon.png/22px-Autonomy_puppet_icon.png)](/Puppet#Autonomy_levels "Puppet") Is a puppet of another country',
    completionRequirements:
      '[![free](https://hoi4.paradoxwikis.com/images/thumb/8/84/Autonomy_freedom_icon.png/22px-Autonomy_freedom_icon.png)](/Puppet#Autonomy_levels "free") Is fully independent',
    notes:
      'As [![Flag of Manchukuo](https://hoi4.paradoxwikis.com/images/thumb/1/16/Manchukuo.png/24px-Manchukuo.png)](/Manchukuo "Manchukuo") [Manchukuo](/Manchukuo "Manchukuo"), rush down the [![Assertiveness](https://hoi4.paradoxwikis.com/images/thumb/2/24/Goal_generic_demand_territory.png/22px-Goal_generic_demand_territory.png)](/Manchu_national_focus_tree#Assertiveness "Assertiveness")[Assertiveness](/Manchu_national_focus_tree#Assertiveness "Manchu national focus tree") path towards [![Independence War](https://hoi4.paradoxwikis.com/images/thumb/2/20/Goal_generic_territory_or_war.png/22px-Goal_generic_territory_or_war.png)](/Manchu_national_focus_tree#Independence_War "Independence War")[Independence War](/Manchu_national_focus_tree#Independence_War "Manchu national focus tree").',
    game: 'hoi4',
  },
  {
    id: 'hoi4_ach_38',
    name: "It's 1812 All Over Again",
    description: 'As Canada, take and hold Washington D.C.',
    icon: 'https://hoi4.paradoxwikis.com/images/d/d3/It%27s_1812_All_Over_Again.png',
    dlc: '',
    version: '1.3',
    difficulty: 'H',
    startingConditions:
      '[![Yes](https://hoi4.paradoxwikis.com/images/thumb/7/77/Yes.png/22px-Yes.png)](/File:Yes.png "Yes") Playing as [![Flag of Canada](https://hoi4.paradoxwikis.com/images/thumb/a/a3/Canada.png/24px-Canada.png)](/Canada "Canada") [Canada](/Canada "Canada")',
    completionRequirements:
      '[![Occupation.png](https://hoi4.paradoxwikis.com/images/d/dc/Occupation.png)](/File:Occupation.png) Controls **Maryland** *(361)*',
    notes:
      'Pick [![Patriation](https://hoi4.paradoxwikis.com/images/thumb/0/03/Goal_tfv_sever_ties_with_uk.png/22px-Goal_tfv_sever_ties_with_uk.png)](/Canadian_national_focus_tree#Patriation "Patriation")[Patriation](/Canadian_national_focus_tree#Patriation "Canadian national focus tree") and [![Swastika Clubs](https://hoi4.paradoxwikis.com/images/thumb/5/5d/Goal_support_fascism.png/22px-Goal_support_fascism.png)](/Canadian_national_focus_tree#Swastika_Clubs "Swastika Clubs")[Swastika Clubs](/Canadian_national_focus_tree#Swastika_Clubs "Canadian national focus tree") as your first focuses. Go for [![Support a Synarchist Baja](https://hoi4.paradoxwikis.com/images/thumb/b/b1/Goal_generic_dangerous_deal.png/22px-Goal_generic_dangerous_deal.png)](/Canadian_national_focus_tree#Support_a_Synarchist_Baja "Support a Synarchist Baja")[Support a Synarchist Baja](/Canadian_national_focus_tree#Support_a_Synarchist_Baja "Canadian national focus tree") when you switch, get [![Flag of Mexico](https://hoi4.paradoxwikis.com/images/thumb/0/0a/Mexico.png/24px-Mexico.png)](/Mexico "Mexico") [Mexico](/Mexico "Mexico") in your faction and attack the [![Flag of United States](https://hoi4.paradoxwikis.com/images/thumb/3/32/United_States.png/24px-United_States.png)](/United_States "United States") [United States](/United_States "United States") on the East Coast.',
    game: 'hoi4',
  },
  {
    id: 'hoi4_ach_39',
    name: 'The weapons of the Third Emu War',
    description: 'As Australia, use a nuclear bomb on core Australian territory.',
    icon: 'https://hoi4.paradoxwikis.com/images/6/64/The_weapons_of_the_Third_Emu_War.png',
    dlc: '',
    version: '1.3',
    difficulty: 'E',
    startingConditions:
      '[![Yes](https://hoi4.paradoxwikis.com/images/thumb/7/77/Yes.png/22px-Yes.png)](/File:Yes.png "Yes") Playing as [![Flag of Australia](https://hoi4.paradoxwikis.com/images/thumb/4/43/Australia.png/24px-Australia.png)](/Australia "Australia") [Australia](/Australia "Australia")',
    completionRequirements:
      '[![Nuclear bombs.png](https://hoi4.paradoxwikis.com/images/thumb/1/18/Nuclear_bombs.png/22px-Nuclear_bombs.png)](/File:Nuclear_bombs.png) Has dropped nuke on core Australian territory',
    notes:
      '**Method 1:**  \nInvent and build fighters, strategic bombers and nukes. Wait for [![Flag of Japan](https://hoi4.paradoxwikis.com/images/thumb/f/fc/Japan.png/24px-Japan.png)](/Japan "Japan") [Japan](/Japan "Japan") and let them conquer one state, which you should nuke. Use your own fighters or wait for the Allies to help with air superiority.\n\n**Method 2:**  \nRequire to not have [![Man the Guns](https://hoi4.paradoxwikis.com/images/thumb/8/86/DLC_Man_the_Guns.png/22px-DLC_Man_the_Guns.png)](/Man_the_Guns "Man the Guns")[Man the Guns](/Man_the_Guns "Man the Guns") enabled.  \nWithout DLCs, you can leave the Allies instantly. Do not engage in any wars. Invent and build fighters, strategic bombers and nukes. Choose a fascist or communist demagogue, and prepare and launch a civil war. Achieve air superiority and nuke the rebels.',
    game: 'hoi4',
  },
  {
    id: 'hoi4_ach_40',
    name: 'I Am the Tong Master',
    description: 'As South Africa, break free from the UK and puppet another nation.',
    icon: 'https://hoi4.paradoxwikis.com/images/d/de/I_Am_the_Tong_Master.png',
    dlc: '',
    version: '1.3',
    difficulty: 'E',
    startingConditions:
      '[![Yes](https://hoi4.paradoxwikis.com/images/thumb/7/77/Yes.png/22px-Yes.png)](/File:Yes.png "Yes") Playing as [![Flag of South Africa](https://hoi4.paradoxwikis.com/images/thumb/e/ef/South_Africa.png/24px-South_Africa.png)](/South_Africa "South Africa") [South Africa](/South_Africa "South Africa")',
    completionRequirements:
      '*   [![free](https://hoi4.paradoxwikis.com/images/thumb/8/84/Autonomy_freedom_icon.png/22px-Autonomy_freedom_icon.png)](/Puppet#Autonomy_levels "free") Is fully independent\n*   [![Puppet](https://hoi4.paradoxwikis.com/images/thumb/a/a7/Autonomy_puppet_icon.png/22px-Autonomy_puppet_icon.png)](/Puppet#Autonomy_levels "Puppet") Has at least one subject',
    notes:
      'Release [![Flag of Namibia](https://hoi4.paradoxwikis.com/images/thumb/c/ce/Namibia.png/24px-Namibia.png)](/Namibia "Namibia") [Namibia](/Namibia "Namibia") as your puppet when the game starts.',
    game: 'hoi4',
  },
  {
    id: 'hoi4_ach_41',
    name: 'The Empire Strikes Back',
    description: 'As Britain, declare war on one of your former subjects.',
    icon: 'https://hoi4.paradoxwikis.com/images/5/5b/The_Empire_Strikes_Back.png',
    dlc: '',
    version: '1.3',
    difficulty: 'E',
    startingConditions:
      '[![Yes](https://hoi4.paradoxwikis.com/images/thumb/7/77/Yes.png/22px-Yes.png)](/File:Yes.png "Yes") Playing as [![Flag of United Kingdom](https://hoi4.paradoxwikis.com/images/thumb/2/29/United_Kingdom.png/24px-United_Kingdom.png)](/United_Kingdom "United Kingdom") [United Kingdom](/United_Kingdom "United Kingdom")',
    completionRequirements:
      '[![War goal](https://hoi4.paradoxwikis.com/images/thumb/c/c2/Relation_wargoal.png/22px-Relation_wargoal.png)](/War_goal "War goal") At war with *either*:\n\n*   [![Flag of South Africa](https://hoi4.paradoxwikis.com/images/thumb/e/ef/South_Africa.png/24px-South_Africa.png)](/South_Africa "South Africa") [South Africa](/South_Africa "South Africa")\n*   [![Flag of Canada](https://hoi4.paradoxwikis.com/images/thumb/a/a3/Canada.png/24px-Canada.png)](/Canada "Canada") [Canada](/Canada "Canada")\n*   [![Flag of British Raj](https://hoi4.paradoxwikis.com/images/thumb/2/2f/British_Raj.png/24px-British_Raj.png)](/British_Raj "British Raj") [British Raj](/British_Raj "British Raj")\n*   [![Flag of Australia](https://hoi4.paradoxwikis.com/images/thumb/4/43/Australia.png/24px-Australia.png)](/Australia "Australia") [Australia](/Australia "Australia")\n*   [![Flag of New Zealand](https://hoi4.paradoxwikis.com/images/thumb/d/d9/New_Zealand.png/24px-New_Zealand.png)](/New_Zealand "New Zealand") [New Zealand](/New_Zealand "New Zealand")\n*   [![Flag of British Malaya](https://hoi4.paradoxwikis.com/images/thumb/f/f7/British_Malaya.png/24px-British_Malaya.png)](/British_Malaya "British Malaya") [British Malaya](/British_Malaya "British Malaya")',
    notes:
      'Go for any sub-branch of the tree under [A Change in Course branch](/British_national_focus_tree#A_Change_in_Course_Branch "British national focus tree"). If you have [![Man the Guns](https://hoi4.paradoxwikis.com/images/thumb/8/86/DLC_Man_the_Guns.png/22px-DLC_Man_the_Guns.png)](/Man_the_Guns "Man the Guns")[Man the Guns](/Man_the_Guns "Man the Guns"), the Dominions will break ties with you. Simply declare war on one of them. If you don\'t have [![Man the Guns](https://hoi4.paradoxwikis.com/images/thumb/8/86/DLC_Man_the_Guns.png/22px-DLC_Man_the_Guns.png)](/Man_the_Guns "Man the Guns")[Man the Guns](/Man_the_Guns "Man the Guns"), you can simply release [![Flag of Scotland](https://hoi4.paradoxwikis.com/images/thumb/2/27/Scotland.png/24px-Scotland.png)](/Scotland "Scotland") [Scotland](/Scotland "Scotland") and declare war on them.',
    game: 'hoi4',
  },
  {
    id: 'hoi4_ach_42',
    name: 'The Puppetmaster',
    description: 'Have at least 51 subjects.',
    icon: 'https://hoi4.paradoxwikis.com/images/d/d4/The_Puppetmaster.png',
    dlc: '',
    version: '1.3',
    difficulty: 'M',
    startingConditions: '',
    completionRequirements:
      '[![Puppet](https://hoi4.paradoxwikis.com/images/thumb/a/a7/Autonomy_puppet_icon.png/22px-Autonomy_puppet_icon.png)](/Puppet#Autonomy_levels "Puppet") Has at least 51 subjects',
    notes: '*For detailed strategies, see [The Puppetmaster](/The_Puppetmaster "The Puppetmaster")*',
    game: 'hoi4',
  },
  {
    id: 'hoi4_ach_43',
    name: 'Freegypt',
    description: 'As Egypt, go from puppet to a free nation using the autonomy system.',
    icon: 'https://hoi4.paradoxwikis.com/images/5/5e/Freegypt.png',
    dlc: '',
    version: '1.3',
    difficulty: 'M',
    startingConditions: '',
    completionRequirements:
      '*   [![Yes](https://hoi4.paradoxwikis.com/images/thumb/7/77/Yes.png/22px-Yes.png)](/File:Yes.png "Yes") Is [![Flag of Egypt](https://hoi4.paradoxwikis.com/images/thumb/3/37/Egypt.png/24px-Egypt.png)](/Egypt "Egypt") [Egypt](/Egypt "Egypt")\n*   [![Colony](https://hoi4.paradoxwikis.com/images/thumb/d/dd/Colony.png/22px-Colony.png)](/Puppet#Autonomy_levels "Colony") Reached Colony Status\n*   [![Dominion](https://hoi4.paradoxwikis.com/images/thumb/3/3d/Dominion.png/22px-Dominion.png)](/Puppet#Autonomy_levels "Dominion") Reached Dominion Status\n*   [![free](https://hoi4.paradoxwikis.com/images/thumb/8/84/Autonomy_freedom_icon.png/22px-Autonomy_freedom_icon.png)](/Puppet#Autonomy_levels "free") Reached Freedom Status',
    notes:
      'Start as the [![Flag of United Kingdom](https://hoi4.paradoxwikis.com/images/thumb/2/29/United_Kingdom.png/24px-United_Kingdom.png)](/United_Kingdom "United Kingdom") [United Kingdom](/United_Kingdom "United Kingdom") and build up Egypt as much as possible. Once completely full of military factories, release [![Flag of Egypt](https://hoi4.paradoxwikis.com/images/thumb/3/37/Egypt.png/24px-Egypt.png)](/Egypt "Egypt") [Egypt](/Egypt "Egypt") as a puppet (check "Play as" when the checkbox appears). Increase your autonomy in any way possible: lend lease (trains and convoys are excellent), continuous focus and attaché.',
    game: 'hoi4',
  },
  {
    id: 'hoi4_ach_44',
    name: 'Miklos Horthy and the Habsburg Prince',
    description: 'As Hungary, Restore Austria-Hungary.',
    icon: 'https://hoi4.paradoxwikis.com/images/3/38/Miklos_Horthy_and_the_Habsburg_Prince.png',
    dlc: '',
    version: '1.4',
    difficulty: 'VH',
    startingConditions:
      '[![Yes](https://hoi4.paradoxwikis.com/images/thumb/7/77/Yes.png/22px-Yes.png)](/File:Yes.png "Yes") Playing as [![Flag of Hungary](https://hoi4.paradoxwikis.com/images/thumb/6/6a/Hungary.png/24px-Hungary.png)](/Hungary "Hungary") [Hungary](/Hungary "Hungary")',
    completionRequirements:
      '*   [![Yes](https://hoi4.paradoxwikis.com/images/thumb/7/77/Yes.png/22px-Yes.png)](/File:Yes.png "Yes") Has *cosmetic* tag [![Flag of Austria-Hungary](https://hoi4.paradoxwikis.com/images/thumb/f/f1/Austria-Hungary.png/24px-Austria-Hungary.png)](/Austria-Hungary "Austria-Hungary") [Austria-Hungary](/Austria-Hungary "Austria-Hungary")\n*   [![Occupation.png](https://hoi4.paradoxwikis.com/images/d/dc/Occupation.png)](/File:Occupation.png) Owns and controls:\n\nExpand\n\n*   **Oberösterreich** *(152)*\n*   **Tirol** *(153)*\n*   **Niederösterreich** *(4)*\n*   **Vorarlberg** *(848)*\n*   **Burgenland** *(975)*\n*   **Steiermark-Kärnten** *(976)*\n*   **North Sudetenland** *(69)*\n*   **Bohemia** *(9)*\n*   **Moravia** *(75)*\n*   **Czeské Slezsko** *(74)*\n*   **Tešínsko** *(72)*\n*   **Western Slovakia** *(70)*\n*   **Southern Slovakia** *(664)*\n*   **Eastern Slovakia** *(71)*\n*   **Podkarpatská Rus** *(73)*\n*   **Jordan** *(455)*\n*   **Palestine** *(454)*\n*   **Niederschlesien** *(66)*\n*   **Oberschlesien** *(67)*\n*   **Toscana** *(162)*\n*   **Franche-Comte** *(17)*\n*   **Lombardia** *(159)*\n*   **Emilia Romagna** *(161)*',
    notes:
      '*For detailed strategies, see [Miklos Horthy and the Habsburg Prince](/Miklos_Horthy_and_the_Habsburg_Prince "Miklos Horthy and the Habsburg Prince")*',
    game: 'hoi4',
  },
  {
    id: 'hoi4_ach_45',
    name: 'Better than the Szent István',
    description: 'As Hungary, have Miklos Horthy as a Naval commander and build a battleship.',
    icon: 'https://hoi4.paradoxwikis.com/images/5/51/Better_than_the_Szent_Istv%C3%A1n.png',
    dlc: '',
    version: '1.4',
    difficulty: 'E',
    startingConditions:
      '[![Yes](https://hoi4.paradoxwikis.com/images/thumb/7/77/Yes.png/22px-Yes.png)](/File:Yes.png "Yes") Playing as [![Flag of Hungary](https://hoi4.paradoxwikis.com/images/thumb/6/6a/Hungary.png/24px-Hungary.png)](/Hungary "Hungary") [Hungary](/Hungary "Hungary")',
    completionRequirements:
      '*   [![Yes](https://hoi4.paradoxwikis.com/images/thumb/7/77/Yes.png/22px-Yes.png)](/File:Yes.png "Yes") Has the unit leader *Miklos Horthy*\n*   [![Battleship.png](https://hoi4.paradoxwikis.com/images/thumb/e/e8/Battleship.png/22px-Battleship.png)](/File:Battleship.png) Has at least 1 Battleship',
    notes:
      'With [![Götterdämmerung](https://hoi4.paradoxwikis.com/images/thumb/5/5f/DLC_G%C3%B6tterd%C3%A4mmerung.png/22px-DLC_G%C3%B6tterd%C3%A4mmerung.png)](/G%C3%B6tterd%C3%A4mmerung "Götterdämmerung")[Götterdämmerung](/G%C3%B6tterd%C3%A4mmerung "Götterdämmerung"), you must complete the [![End the Regency](https://hoi4.paradoxwikis.com/images/thumb/0/0d/Focus_hun_elect_a_king.png/22px-Focus_hun_elect_a_king.png)](/Hungarian_national_focus_tree#End_the_Regency "End the Regency")[End the Regency](/Hungarian_national_focus_tree#End_the_Regency "Hungarian national focus tree") to get Horthy as an advisor. Otherwise, you must complete [![Invite the Habsburg Prince](https://hoi4.paradoxwikis.com/images/thumb/b/b1/Goal_generic_dangerous_deal.png/22px-Goal_generic_dangerous_deal.png)](/Hungarian_national_focus_tree_\\(base_game\\)#Invite_the_Habsburg_Prince "Invite the Habsburg Prince")[Invite the Habsburg Prince](/Hungarian_national_focus_tree_\\(base_game\\)#Invite_the_Habsburg_Prince "Hungarian national focus tree (base game)"). After that, you can go for any path under [![Reinstate the Pragmatic Sanction of 1713](https://hoi4.paradoxwikis.com/images/thumb/2/28/Focus_POL_habsburg.png/22px-Focus_POL_habsburg.png)](/Hungarian_national_focus_tree#Reinstate_the_Pragmatic_Sanction_of_1713 "Reinstate the Pragmatic Sanction of 1713")[Reinstate the Pragmatic Sanction of 1713](/Hungarian_national_focus_tree#Reinstate_the_Pragmatic_Sanction_of_1713 "Hungarian national focus tree") to get wargoals on [![Flag of Yugoslavia](https://hoi4.paradoxwikis.com/images/thumb/f/f3/Yugoslavia.png/24px-Yugoslavia.png)](/Yugoslavia "Yugoslavia") [Yugoslavia](/Yugoslavia "Yugoslavia") or [![Flag of Romania](https://hoi4.paradoxwikis.com/images/thumb/8/8f/Romania.png/24px-Romania.png)](/Romania "Romania") [Romania](/Romania "Romania"). Build up your industry and army, conquer either one, research and deploy a battleship and assign Horthy to that fleet.',
    game: 'hoi4',
  },
  {
    id: 'hoi4_ach_46',
    name: 'Death or Dishonor or Cake',
    description: 'As Romania, own a slice of all your starting neighbors.',
    icon: 'https://hoi4.paradoxwikis.com/images/a/a8/Death_or_Dishonor_or_Cake.png',
    dlc: '',
    version: '1.4',
    difficulty: 'VH',
    startingConditions:
      '[![Yes](https://hoi4.paradoxwikis.com/images/thumb/7/77/Yes.png/22px-Yes.png)](/File:Yes.png "Yes") Playing as [![Flag of Romania](https://hoi4.paradoxwikis.com/images/thumb/8/8f/Romania.png/24px-Romania.png)](/Romania "Romania") [Romania](/Romania "Romania")',
    completionRequirements:
      '*   [![Yes](https://hoi4.paradoxwikis.com/images/thumb/7/77/Yes.png/22px-Yes.png)](/File:Yes.png "Yes") **Carol II** is the current country leader\n*   [![No](https://hoi4.paradoxwikis.com/images/thumb/0/04/No.png/22px-No.png)](/File:No.png "No") Has completed any of the focuses:\n    *   [![Force Abdication](https://hoi4.paradoxwikis.com/images/thumb/6/62/Focus_rom_abdicate.png/22px-Focus_rom_abdicate.png)](/Romanian_national_focus_tree#Force_Abdication "Force Abdication")[Force Abdication](/Romanian_national_focus_tree#Force_Abdication "Romanian national focus tree")\n    *   [![Handle the King](https://hoi4.paradoxwikis.com/images/thumb/4/4f/Focus_rom_handle_king.png/22px-Focus_rom_handle_king.png)](/Romanian_national_focus_tree#Handle_the_King "Handle the King")[Handle the King](/Romanian_national_focus_tree#Handle_the_King "Romanian national focus tree")\n    *   [![All Parties Must End](https://hoi4.paradoxwikis.com/images/thumb/2/20/Focus_rom_parties_end.png/22px-Focus_rom_parties_end.png)](/Romanian_national_focus_tree#All_Parties_Must_End "All Parties Must End")[All Parties Must End](/Romanian_national_focus_tree#All_Parties_Must_End "Romanian national focus tree")\n*   [![Occupation.png](https://hoi4.paradoxwikis.com/images/d/dc/Occupation.png)](/File:Occupation.png) Owns at least one core state each of:\n\n*   [![Flag of Bulgaria](https://hoi4.paradoxwikis.com/images/thumb/f/f4/Bulgaria.png/24px-Bulgaria.png)](/Bulgaria "Bulgaria") [Bulgaria](/Bulgaria "Bulgaria")\n*   [![Flag of Soviet Union](https://hoi4.paradoxwikis.com/images/thumb/6/67/Soviet_Union.png/24px-Soviet_Union.png)](/Soviet_Union "Soviet Union") [Soviet Union](/Soviet_Union "Soviet Union")\n*   [![Flag of Hungary](https://hoi4.paradoxwikis.com/images/thumb/6/6a/Hungary.png/24px-Hungary.png)](/Hungary "Hungary") [Hungary](/Hungary "Hungary")\n*   [![Flag of Czechoslovakia](https://hoi4.paradoxwikis.com/images/thumb/c/c1/Czechoslovakia.png/24px-Czechoslovakia.png)](/Czechoslovakia "Czechoslovakia") [Czechoslovakia](/Czechoslovakia "Czechoslovakia")\n*   [![Flag of Yugoslavia](https://hoi4.paradoxwikis.com/images/thumb/f/f3/Yugoslavia.png/24px-Yugoslavia.png)](/Yugoslavia "Yugoslavia") [Yugoslavia](/Yugoslavia "Yugoslavia")\n*   [![Flag of Poland](https://hoi4.paradoxwikis.com/images/thumb/9/99/Poland.png/24px-Poland.png)](/Poland "Poland") [Poland](/Poland "Poland")',
    notes:
      '*For detailed strategies, see [Death or Dishonor or Cake](/Death_or_Dishonor_or_Cake "Death or Dishonor or Cake")*',
    game: 'hoi4',
  },
  {
    id: 'hoi4_ach_47',
    name: 'Neither Death nor Dishonor',
    description:
      'As Romania, make it to 1942 with all the states you started it with and control either Moscow or Berlin.',
    icon: 'https://hoi4.paradoxwikis.com/images/d/d3/Neither_Death_nor_Dishonor.png',
    dlc: '',
    version: '1.4',
    difficulty: 'H',
    startingConditions:
      '[![Yes](https://hoi4.paradoxwikis.com/images/thumb/7/77/Yes.png/22px-Yes.png)](/File:Yes.png "Yes") Playing as [![Flag of Romania](https://hoi4.paradoxwikis.com/images/thumb/8/8f/Romania.png/24px-Romania.png)](/Romania "Romania") [Romania](/Romania "Romania")',
    completionRequirements:
      '*   [![No](https://hoi4.paradoxwikis.com/images/thumb/0/04/No.png/22px-No.png)](/File:No.png "No") Has lost a starting state\n*   [![Occupation.png](https://hoi4.paradoxwikis.com/images/d/dc/Occupation.png)](/File:Occupation.png) Controls *either* **Moscow** *(219)* or **Brandenburg** *(64)*\n*   [![Time](https://hoi4.paradoxwikis.com/images/thumb/0/08/Time.png/22px-Time.png)](/File:Time.png "Time") After 31st Dec, 1941',
    notes:
      '*For detailed strategies, see [Neither Death nor Dishonor](/Neither_Death_nor_Dishonor "Neither Death nor Dishonor")*',
    game: 'hoi4',
  },
  {
    id: 'hoi4_ach_48',
    name: 'The Munich Disagreement',
    description: 'As Czechoslovakia, occupy Munich while at war with Germany.',
    icon: 'https://hoi4.paradoxwikis.com/images/9/97/The_Munich_Disagreement.png',
    dlc: '',
    version: '1.4',
    difficulty: 'M',
    startingConditions:
      '[![Yes](https://hoi4.paradoxwikis.com/images/thumb/7/77/Yes.png/22px-Yes.png)](/File:Yes.png "Yes") Playing as [![Flag of Czechoslovakia](https://hoi4.paradoxwikis.com/images/thumb/c/c1/Czechoslovakia.png/24px-Czechoslovakia.png)](/Czechoslovakia "Czechoslovakia") [Czechoslovakia](/Czechoslovakia "Czechoslovakia")',
    completionRequirements:
      '*   [![War goal](https://hoi4.paradoxwikis.com/images/thumb/c/c2/Relation_wargoal.png/22px-Relation_wargoal.png)](/War_goal "War goal") At war with [![Flag of Germany](https://hoi4.paradoxwikis.com/images/thumb/e/e9/German_Reich.png/24px-German_Reich.png)](/Germany "Germany") [Germany](/Germany "Germany")\n*   [![Occupation.png](https://hoi4.paradoxwikis.com/images/d/dc/Occupation.png)](/File:Occupation.png) Controls **Oberbayern** *(52)*',
    notes:
      '*For detailed strategies, see [The Munich Disagreement](/The_Munich_Disagreement "The Munich Disagreement")*',
    game: 'hoi4',
  },
  {
    id: 'hoi4_ach_49',
    name: 'Czechmate',
    description: 'As Czechoslovakia, occupy Canberra while at war with the Allies.',
    icon: 'https://hoi4.paradoxwikis.com/images/1/11/Czechmate.png',
    dlc: '',
    version: '1.4',
    difficulty: 'VH',
    startingConditions:
      '[![Yes](https://hoi4.paradoxwikis.com/images/thumb/7/77/Yes.png/22px-Yes.png)](/File:Yes.png "Yes") Playing as [![Flag of Czechoslovakia](https://hoi4.paradoxwikis.com/images/thumb/c/c1/Czechoslovakia.png/24px-Czechoslovakia.png)](/Czechoslovakia "Czechoslovakia") [Czechoslovakia](/Czechoslovakia "Czechoslovakia")',
    completionRequirements:
      '*   [![War goal](https://hoi4.paradoxwikis.com/images/thumb/c/c2/Relation_wargoal.png/22px-Relation_wargoal.png)](/War_goal "War goal") At war with [![Flag of United Kingdom](https://hoi4.paradoxwikis.com/images/thumb/2/29/United_Kingdom.png/24px-United_Kingdom.png)](/United_Kingdom "United Kingdom") [United Kingdom](/United_Kingdom "United Kingdom")\n*   [![Yes](https://hoi4.paradoxwikis.com/images/thumb/7/77/Yes.png/22px-Yes.png)](/File:Yes.png "Yes") Ruling party of [![Flag of United Kingdom](https://hoi4.paradoxwikis.com/images/thumb/2/29/United_Kingdom.png/24px-United_Kingdom.png)](/United_Kingdom "United Kingdom") [United Kingdom](/United_Kingdom "United Kingdom") is [![{{{1}}}](https://hoi4.paradoxwikis.com/images/thumb/e/e9/Democracy.png/22px-Democracy.png)](/Ideology#Democracy "{{{1}}}")[Democratic](/Ideology#Democracy "Ideology")\n*   [![Occupation.png](https://hoi4.paradoxwikis.com/images/d/dc/Occupation.png)](/File:Occupation.png) Controls **New South Wales** *(285)*',
    notes: '*For detailed strategies, see [Czechmate](/Czechmate "Czechmate")*',
    game: 'hoi4',
  },
  {
    id: 'hoi4_ach_50',
    name: 'Huge-oslavia',
    description:
      'As Yugoslavia, occupy all your neighbouring countries (Austria, Hungary, Romania, Bulgaria, Albania, Italy and Greece).',
    icon: 'https://hoi4.paradoxwikis.com/images/6/6b/Huge-oslavia.png',
    dlc: '',
    version: '1.4',
    difficulty: 'VH',
    startingConditions:
      '[![Yes](https://hoi4.paradoxwikis.com/images/thumb/7/77/Yes.png/22px-Yes.png)](/File:Yes.png "Yes") Playing as [![Flag of Yugoslavia](https://hoi4.paradoxwikis.com/images/thumb/f/f3/Yugoslavia.png/24px-Yugoslavia.png)](/Yugoslavia "Yugoslavia") [Yugoslavia](/Yugoslavia "Yugoslavia")',
    completionRequirements:
      '[![Occupation.png](https://hoi4.paradoxwikis.com/images/d/dc/Occupation.png)](/File:Occupation.png) Controls all core states of:\n\n*   [![Flag of Italy](https://hoi4.paradoxwikis.com/images/thumb/2/2a/Italy.png/24px-Italy.png)](/Italy "Italy") [Italy](/Italy "Italy")\n*   [![Flag of Austria](https://hoi4.paradoxwikis.com/images/thumb/7/7f/Austria.png/24px-Austria.png)](/Austria "Austria") [Austria](/Austria "Austria")\n*   [![Flag of Hungary](https://hoi4.paradoxwikis.com/images/thumb/6/6a/Hungary.png/24px-Hungary.png)](/Hungary "Hungary") [Hungary](/Hungary "Hungary")\n*   [![Flag of Romania](https://hoi4.paradoxwikis.com/images/thumb/8/8f/Romania.png/24px-Romania.png)](/Romania "Romania") [Romania](/Romania "Romania")\n*   [![Flag of Bulgaria](https://hoi4.paradoxwikis.com/images/thumb/f/f4/Bulgaria.png/24px-Bulgaria.png)](/Bulgaria "Bulgaria") [Bulgaria](/Bulgaria "Bulgaria")\n*   [![Flag of Greece](https://hoi4.paradoxwikis.com/images/thumb/8/8e/Kingdom_of_Greece.png/24px-Kingdom_of_Greece.png)](/Greece "Greece") [Greece](/Greece "Greece") (except **Edirne** *(341)*)\n*   [![Flag of Albania](https://hoi4.paradoxwikis.com/images/thumb/0/07/Albania.png/24px-Albania.png)](/Albania "Albania") [Albania](/Albania "Albania")',
    notes:
      'The achievement only requires control of the state, so it can be gained while at war.\n\n*For detailed strategies, see [Huge-oslavia](/Huge-oslavia "Huge-oslavia")*',
    game: 'hoi4',
  },
  {
    id: 'hoi4_ach_51',
    name: 'The Balkan Powder Keg',
    description:
      'As Yugoslavia, start the Second World War (i.e. be part of either the Axis or the Allies and at war with the other faction in a war you started).',
    icon: 'https://hoi4.paradoxwikis.com/images/f/f5/The_Balkan_Powder_Keg.png',
    dlc: '',
    version: '1.4',
    difficulty: 'VE',
    startingConditions:
      '[![Yes](https://hoi4.paradoxwikis.com/images/thumb/7/77/Yes.png/22px-Yes.png)](/File:Yes.png "Yes") Playing as [![Flag of Yugoslavia](https://hoi4.paradoxwikis.com/images/thumb/f/f3/Yugoslavia.png/24px-Yugoslavia.png)](/Yugoslavia "Yugoslavia") [Yugoslavia](/Yugoslavia "Yugoslavia")',
    completionRequirements:
      '[![War goal](https://hoi4.paradoxwikis.com/images/thumb/c/c2/Relation_wargoal.png/22px-Relation_wargoal.png)](/War_goal "War goal") Declared war on Axis or Allies while in either Axis or Allies',
    notes:
      'Choose fascist demagogue as your first [![Political Power](https://hoi4.paradoxwikis.com/images/thumb/2/24/Political_power.png/22px-Political_power.png)](/Government#Political_power "Political Power")[Political Power](/Government#Political_power "Government") spending, turn fascist (skip civil war option), complete [![Invite German Military Mission](https://hoi4.paradoxwikis.com/images/thumb/e/e8/Focus_generic_military_mission.png/22px-Focus_generic_military_mission.png)](/Yugoslavian_national_focus_tree#Invite_German_Military_Mission "Invite German Military Mission")[Invite German Military Mission](/Yugoslavian_national_focus_tree#Invite_German_Military_Mission "Yugoslavian national focus tree") and join the Axis. Justify and declare war on the [![Flag of United Kingdom](https://hoi4.paradoxwikis.com/images/thumb/2/29/United_Kingdom.png/24px-United_Kingdom.png)](/United_Kingdom "United Kingdom") [UK](/United_Kingdom "United Kingdom").',
    game: 'hoi4',
  },
  {
    id: 'hoi4_ach_52',
    name: 'En Svensk Tiger',
    description: 'As Sweden, acquire a production license for a Tiger or Tiger II tank from Germany.',
    icon: 'https://hoi4.paradoxwikis.com/images/e/e5/En_Svensk_Tiger.png',
    dlc: '',
    version: '1.4',
    difficulty: 'E',
    startingConditions:
      '[![Yes](https://hoi4.paradoxwikis.com/images/thumb/7/77/Yes.png/22px-Yes.png)](/File:Yes.png "Yes") Playing as [![Flag of Sweden](https://hoi4.paradoxwikis.com/images/thumb/9/98/Sweden.png/24px-Sweden.png)](/Sweden "Sweden") [Sweden](/Sweden "Sweden")',
    completionRequirements:
      '[![Yes](https://hoi4.paradoxwikis.com/images/thumb/7/77/Yes.png/22px-Yes.png)](/File:Yes.png "Yes") Is licensing from [![Flag of Germany](https://hoi4.paradoxwikis.com/images/thumb/e/e9/German_Reich.png/24px-German_Reich.png)](/Germany "Germany") [Germany](/Germany "Germany") *either*:\n\n*   *   Heavy Tank II (Panzerkampfwagen VI Tiger)\n    *   Heavy Tank III (Panzerkampfwagen Tiger Ausf. B)\n    *   Improved Heavy Tank Chassis\n    *   Advanced Heavy Tank Chassis',
    notes:
      'Choose the fascist demagogue as your first advisor and turn fascist. Avoid civil war if possible. Join the Axis and help them in their wars. [![Flag of Germany](https://hoi4.paradoxwikis.com/images/thumb/e/e9/German_Reich.png/24px-German_Reich.png)](/Germany "Germany") [Germany](/Germany "Germany") has to survive until they research Tiger tank - at least late 1943.\n\n**Note:** Due to a bug, this achievement cannot be obtained with the [![No Step Back](https://hoi4.paradoxwikis.com/images/thumb/7/7d/DLC_No_Step_Back.png/22px-DLC_No_Step_Back.png)](/No_Step_Back "No Step Back")[No Step Back](/No_Step_Back "No Step Back") enabled.',
    game: 'hoi4',
  },
  {
    id: 'hoi4_ach_53',
    name: 'Lethal Straight',
    description: 'Have a production license from at least 5 of the 7 major powers.',
    icon: 'https://hoi4.paradoxwikis.com/images/0/05/Lethal_Straight.png',
    dlc: '',
    version: '1.4',
    difficulty: 'VE',
    startingConditions: '',
    completionRequirements:
      '[![Yes](https://hoi4.paradoxwikis.com/images/thumb/7/77/Yes.png/22px-Yes.png)](/File:Yes.png "Yes") Is licensing from 5 of the below:\n\n*   [![Flag of United Kingdom](https://hoi4.paradoxwikis.com/images/thumb/2/29/United_Kingdom.png/24px-United_Kingdom.png)](/United_Kingdom "United Kingdom") [United Kingdom](/United_Kingdom "United Kingdom")\n*   [![Flag of Germany](https://hoi4.paradoxwikis.com/images/thumb/e/e9/German_Reich.png/24px-German_Reich.png)](/Germany "Germany") [Germany](/Germany "Germany")\n*   [![Flag of United States](https://hoi4.paradoxwikis.com/images/thumb/3/32/United_States.png/24px-United_States.png)](/United_States "United States") [United States](/United_States "United States")\n*   [![Flag of Soviet Union](https://hoi4.paradoxwikis.com/images/thumb/6/67/Soviet_Union.png/24px-Soviet_Union.png)](/Soviet_Union "Soviet Union") [Soviet Union](/Soviet_Union "Soviet Union")\n*   [![Flag of Japan](https://hoi4.paradoxwikis.com/images/thumb/f/fc/Japan.png/24px-Japan.png)](/Japan "Japan") [Japan](/Japan "Japan")\n*   [![Flag of France](https://hoi4.paradoxwikis.com/images/thumb/d/de/France.png/24px-France.png)](/France "France") [France](/France "France")\n*   [![Flag of Italy](https://hoi4.paradoxwikis.com/images/thumb/2/2a/Italy.png/24px-Italy.png)](/Italy "Italy") [Italy](/Italy "Italy")',
    notes:
      'It is recommended to play as a [![{{{1}}}](https://hoi4.paradoxwikis.com/images/thumb/9/98/Neutrality.png/22px-Neutrality.png)](/Ideology#Neutrality "{{{1}}}")[non-aligned](/Ideology#Neutrality "Ideology") nation to avoid the diplomatic penalty from different ideology which may block the “Request License Production” option. Improve relations with five of the seven major powers then license the basic infantry weapons. (Researching the next level of infantry equipment also works, as even major nations have few problems with licensing outdated equipment).  \nWith [![La Résistance](https://hoi4.paradoxwikis.com/images/thumb/2/2b/DLC_La_Resistance.png/22px-DLC_La_Resistance.png)](/La_R%C3%A9sistance "La Résistance")[La Résistance](/La_R%C3%A9sistance "La Résistance"), you can use an agent and assign him to put diplomatic pressure on majors as well.',
    game: 'hoi4',
  },
  {
    id: 'hoi4_ach_54',
    name: 'Awake and Angry',
    description: 'As China, reconquer all of China and Manchuria and force a Japanese surrender.',
    icon: 'https://hoi4.paradoxwikis.com/images/4/4c/Awake_and_Angry.png',
    dlc: '',
    version: '1.5',
    difficulty: 'H',
    startingConditions:
      '[![Yes](https://hoi4.paradoxwikis.com/images/thumb/7/77/Yes.png/22px-Yes.png)](/File:Yes.png "Yes") Playing as [![Flag of China](https://hoi4.paradoxwikis.com/images/thumb/8/81/China.png/24px-China.png)](/China "China") [China](/China "China")',
    completionRequirements:
      '*    [![Yes](https://hoi4.paradoxwikis.com/images/thumb/7/77/Yes.png/22px-Yes.png)](/File:Yes.png "Yes") Japan was forced to sue for peace after losing all of Manchuria and Korea\n*   [![Occupation.png](https://hoi4.paradoxwikis.com/images/d/dc/Occupation.png)](/File:Occupation.png) Owns all core states of [![Flag of China](https://hoi4.paradoxwikis.com/images/thumb/8/81/China.png/24px-China.png)](/China "China") [China](/China "China") and [![Flag of Manchukuo](https://hoi4.paradoxwikis.com/images/thumb/1/16/Manchukuo.png/24px-Manchukuo.png)](/Manchukuo "Manchukuo") [Manchukuo](/Manchukuo "Manchukuo") except **Guangzhouwan** *(728)*, **Macau** *(729)*, and **Hong Kong** *(326)*',
    notes:
      '**Note**: You do **not** need to conquer **Guangzhouwan** *(728)*, **Macau** *(729)*, and **Hong Kong** *(326)* for this achievement. Therefore, this can be achieved without ever going to war against the Allies.  \n\n*For detailed strategies, see [Awake and Angry](/Awake_and_Angry "Awake and Angry")*',
    game: 'hoi4',
  },
  {
    id: 'hoi4_ach_55',
    name: 'Romance of the Three Kingdoms',
    description: 'As China, puppet and then annex Yunnan and Guangxi Clique.',
    icon: 'https://hoi4.paradoxwikis.com/images/2/2b/Romance_of_the_Three_Kingdoms.png',
    dlc: '',
    version: '1.5',
    difficulty: 'E',
    startingConditions:
      '[![Yes](https://hoi4.paradoxwikis.com/images/thumb/7/77/Yes.png/22px-Yes.png)](/File:Yes.png "Yes") Playing as [![Flag of China](https://hoi4.paradoxwikis.com/images/thumb/8/81/China.png/24px-China.png)](/China "China") [China](/China "China")',
    completionRequirements:
      '*    [![Annexed](https://hoi4.paradoxwikis.com/images/thumb/c/c3/Autonomy_annex_icon.png/22px-Autonomy_annex_icon.png)](/Puppet#Autonomy_levels "Annexed") Integrated the Guanxi Clique through making them a puppet\n*    [![Annexed](https://hoi4.paradoxwikis.com/images/thumb/c/c3/Autonomy_annex_icon.png/22px-Autonomy_annex_icon.png)](/Puppet#Autonomy_levels "Annexed") Integrated Yunnan through making them a puppet',
    notes:
      'Play on non-historical and ensure [![Flag of Japan](https://hoi4.paradoxwikis.com/images/thumb/f/fc/Japan.png/24px-Japan.png)](/Japan "Japan") [Japan](/Japan "Japan") goes for [![Support the Kodoha Faction](https://hoi4.paradoxwikis.com/images/thumb/8/84/Goal_generic_military_deal.png/22px-Goal_generic_military_deal.png)](/Japanese_national_focus_tree#Support_the_Kodoha_Faction "Support the Kodoha Faction")[Support the Kodoha Faction](/Japanese_national_focus_tree#Support_the_Kodoha_Faction "Japanese national focus tree"). Take [![Subjugate the Warlords](https://hoi4.paradoxwikis.com/images/thumb/5/55/Goal_generic_political_pressure.png/22px-Goal_generic_political_pressure.png)](/Chinese_national_focus_tree#Subjugate_the_Warlords "Subjugate the Warlords")[Subjugate the Warlords](/Chinese_national_focus_tree#Subjugate_the_Warlords "Chinese national focus tree"). If they do not accept peacefully, use your war goals to puppet them by force. Complete the series of *"Integrate the Warlords"* decisions which appear after [![Flag of Guangxi Clique](https://hoi4.paradoxwikis.com/images/thumb/6/68/Guangxi_Clique.png/24px-Guangxi_Clique.png)](/Guangxi_Clique "Guangxi Clique") [Guangxi Clique](/Guangxi_Clique "Guangxi Clique") and [![Flag of Yunnan](https://hoi4.paradoxwikis.com/images/thumb/3/3b/Yunnan.png/24px-Yunnan.png)](/Yunnan "Yunnan") [Yunnan](/Yunnan "Yunnan") are puppetted. Alternatively, defeat them the old-fashioned way (possibly after taking "One China Policy" focus) and then reduce their autonomy by building stuff (including border-to-border level 5 forts and supply depots) on their territories and/or lend-leasing supplies to them. The achievement can even be done by annexing them in a war, releasing them as puppets, and then reintegrating them (in case "puppet" is not an available option in the peace conference.)',
    game: 'hoi4',
  },
  {
    id: 'hoi4_ach_56',
    name: 'Sun Tzu Reborn',
    description: 'As Any Chinese Nation, Have a level 9 field marshal.',
    icon: 'https://hoi4.paradoxwikis.com/images/8/87/Sun_Tzu_Reborn.png',
    dlc: '',
    version: '1.5',
    difficulty: 'H',
    startingConditions:
      '[![Yes](https://hoi4.paradoxwikis.com/images/thumb/7/77/Yes.png/22px-Yes.png)](/File:Yes.png "Yes") Playing as *either*:\n\n*   *   [![Flag of China](https://hoi4.paradoxwikis.com/images/thumb/8/81/China.png/24px-China.png)](/China "China") [China](/China "China")\n    *   [![Flag of Communist China](https://hoi4.paradoxwikis.com/images/thumb/1/1a/Communist_China.png/24px-Communist_China.png)](/Communist_China "Communist China") [Communist China](/Communist_China "Communist China")\n    *   [![Flag of Guangxi Clique](https://hoi4.paradoxwikis.com/images/thumb/6/68/Guangxi_Clique.png/24px-Guangxi_Clique.png)](/Guangxi_Clique "Guangxi Clique") [Guangxi Clique](/Guangxi_Clique "Guangxi Clique")\n    *   [![Flag of Shanxi](https://hoi4.paradoxwikis.com/images/thumb/d/d0/Shanxi.png/24px-Shanxi.png)](/Shanxi "Shanxi") [Shanxi](/Shanxi "Shanxi")\n    *   [![Flag of Sinkiang](https://hoi4.paradoxwikis.com/images/thumb/b/b8/Sinkiang.png/24px-Sinkiang.png)](/Sinkiang "Sinkiang") [Sinkiang](/Sinkiang "Sinkiang")\n    *   [![Flag of Xibei San Ma](https://hoi4.paradoxwikis.com/images/thumb/6/6e/Xibei_San_Ma.png/24px-Xibei_San_Ma.png)](/Xibei_San_Ma "Xibei San Ma") [Xibei San Ma](/Xibei_San_Ma "Xibei San Ma")\n    *   [![Flag of Yunnan](https://hoi4.paradoxwikis.com/images/thumb/3/3b/Yunnan.png/24px-Yunnan.png)](/Yunnan "Yunnan") [Yunnan](/Yunnan "Yunnan")',
    completionRequirements:
      '[![Yes](https://hoi4.paradoxwikis.com/images/thumb/7/77/Yes.png/22px-Yes.png)](/File:Yes.png "Yes") Any army leader:\n\n*   Is a field Marshal\n*   Skill Level more than 8',
    notes:
      'As [![Flag of Communist China](https://hoi4.paradoxwikis.com/images/thumb/1/1a/Communist_China.png/24px-Communist_China.png)](/Communist_China "Communist China") [Communist China](/Communist_China "Communist China"), play on non-historical in order to prevent the Sino-Japanese war ([![Flag of Japan](https://hoi4.paradoxwikis.com/images/thumb/f/fc/Japan.png/24px-Japan.png)](/Japan "Japan") [Japan](/Japan "Japan") going communist is ideal). Make a fallback line on your capital and declare an early war on [![Flag of China](https://hoi4.paradoxwikis.com/images/thumb/8/81/China.png/24px-China.png)](/China "China") [China](/China "China") while holding your capital with 9-12 divisions. Research infantry equipment and artillery only (at some point some of your divisions may run out of organization and die, so deploy a few extra divisions before it happens). If the AI stops attacking you, bait it to attack by training your divisions. If a General becomes level 9 before your field marshal, you may promote the General to field marshal and you will get the achievement.',
    game: 'hoi4',
  },
  {
    id: 'hoi4_ach_57',
    name: 'The People Have Stood Up!',
    description: 'With Mao as your leader, win the Chinese Civil War.',
    icon: 'https://hoi4.paradoxwikis.com/images/f/f5/The_People_Have_Stood_Up%21.png',
    dlc: '',
    version: '1.5',
    difficulty: 'VH',
    startingConditions:
      '[![Yes](https://hoi4.paradoxwikis.com/images/thumb/7/77/Yes.png/22px-Yes.png)](/File:Yes.png "Yes") Playing as [![Flag of Communist China](https://hoi4.paradoxwikis.com/images/thumb/1/1a/Communist_China.png/24px-Communist_China.png)](/Communist_China "Communist China") [Communist China](/Communist_China "Communist China")',
    completionRequirements:
      '*   [![Yes](https://hoi4.paradoxwikis.com/images/thumb/7/77/Yes.png/22px-Yes.png)](/File:Yes.png "Yes") **Mao Zedong** is the current country leader\n*   [![Occupation.png](https://hoi4.paradoxwikis.com/images/d/dc/Occupation.png)](/File:Occupation.png) Owns:\n\nExpand\n\n*   **Fujian** *(595)*\n*   **Zhejiang** *(596)*\n*   **Shandong** *(597)*\n*   **Jiangsu** *(598)*\n*   **Jiangxi** *(600)*\n*   **Xikang** *(601)*\n*   **Hunan** *(602)*\n*   **Guizhou** *(603)*\n*   **Sichuan** *(605)*\n*   **Anhui** *(606)*\n*   **Henan** *(607)*\n*   **Beijing** *(608)*\n*   **Shanghai** *(613)*\n*   **Hebei** *(614)*\n*   **Hubei** *(620)*\n*   **Qingdao** *(743)*\n*   **Xian** *(744)*\n*   **Zunyi** *(748)*\n*   **Huangshan** *(749)*\n*   **Changde** *(750)*\n*   **Liangshan** *(751)*\n*   **Ganzi** *(752)*\n*   **Gannan** *(753)*',
    notes:
      '*For detailed strategies, see [The People Have Stood Up!](/The_People_Have_Stood_Up! "The People Have Stood Up!")*',
    game: 'hoi4',
  },
  {
    id: 'hoi4_ach_58',
    name: 'Made in China',
    description: 'As Communist China, have over 100 military factories.',
    icon: 'https://hoi4.paradoxwikis.com/images/6/62/Made_in_China.png',
    dlc: '',
    version: '1.5',
    difficulty: 'M',
    startingConditions:
      '[![Yes](https://hoi4.paradoxwikis.com/images/thumb/7/77/Yes.png/22px-Yes.png)](/File:Yes.png "Yes") Playing as [![Flag of Communist China](https://hoi4.paradoxwikis.com/images/thumb/1/1a/Communist_China.png/24px-Communist_China.png)](/Communist_China "Communist China") [Communist China](/Communist_China "Communist China")',
    completionRequirements:
      '[![Military factories](https://hoi4.paradoxwikis.com/images/thumb/8/83/Military_factories.png/22px-Military_factories.png)](/Production "Military factories") At least **101** military factories',
    notes:
      'Simply follow the guide for [The People Have Stood Up!](#The_People_Have_Stood_Up!) and build a lot of military factories in your territory.  \n**Note:** Offmap military factories do not count.',
    game: 'hoi4',
  },
  {
    id: 'hoi4_ach_59',
    name: 'Tojo Shot First',
    description: 'As Japan, Nuke a core territory of the US before the US develops nuclear weapons.',
    icon: 'https://hoi4.paradoxwikis.com/images/a/a5/Tojo_Shot_First.png',
    dlc: '',
    version: '1.5',
    difficulty: 'E',
    startingConditions:
      '[![Yes](https://hoi4.paradoxwikis.com/images/thumb/7/77/Yes.png/22px-Yes.png)](/File:Yes.png "Yes") Playing as [![Flag of Japan](https://hoi4.paradoxwikis.com/images/thumb/f/fc/Japan.png/24px-Japan.png)](/Japan "Japan") [Japan](/Japan "Japan")',
    completionRequirements:
      '*   [![No](https://hoi4.paradoxwikis.com/images/thumb/0/04/No.png/22px-No.png)](/File:No.png "No") [![Flag of United States](https://hoi4.paradoxwikis.com/images/thumb/3/32/United_States.png/24px-United_States.png)](/United_States "United States") [United States](/United_States "United States") has completed the special project **Nuclear Fission Bomb Project**\n*    [![Nuclear bombs.png](https://hoi4.paradoxwikis.com/images/thumb/1/18/Nuclear_bombs.png/22px-Nuclear_bombs.png)](/File:Nuclear_bombs.png) Dropped a nuclear bomb on a core state of the US',
    notes: '*For detailed strategies, see [Tojo Shot First](/Tojo_Shot_First "Tojo Shot First")*',
    game: 'hoi4',
  },
  {
    id: 'hoi4_ach_60',
    name: 'Sunrise Invasion',
    description: 'As Japan, conquer Mexico then Europe before 1945.',
    icon: 'https://hoi4.paradoxwikis.com/images/a/a2/Sunrise_Invasion.png',
    dlc: '',
    version: '1.5',
    difficulty: 'H',
    startingConditions:
      '[![Yes](https://hoi4.paradoxwikis.com/images/thumb/7/77/Yes.png/22px-Yes.png)](/File:Yes.png "Yes") Playing as [![Flag of Japan](https://hoi4.paradoxwikis.com/images/thumb/f/fc/Japan.png/24px-Japan.png)](/Japan "Japan") [Japan](/Japan "Japan")',
    completionRequirements:
      '*   [![Time](https://hoi4.paradoxwikis.com/images/thumb/0/08/Time.png/22px-Time.png)](/File:Time.png "Time") Before 1 Jan, 1945\n*    [![Annexed](https://hoi4.paradoxwikis.com/images/thumb/c/c3/Autonomy_annex_icon.png/22px-Autonomy_annex_icon.png)](/Puppet#Autonomy_levels "Annexed") Annexed Mexico before taking any territory in Europe\n*   [![Occupation.png](https://hoi4.paradoxwikis.com/images/d/dc/Occupation.png)](/File:Occupation.png) Owns a coastal state in Europe',
    notes: '*For detailed strategies, see [Sunrise Invasion](/Sunrise_Invasion "Sunrise Invasion")*',
    game: 'hoi4',
  },
  {
    id: 'hoi4_ach_61',
    name: 'The Dragon Swallowed the Sun',
    description: 'As Manchukuo, Break free from Japan and annex your former Overlord without being in a faction.',
    icon: 'https://hoi4.paradoxwikis.com/images/9/91/The_Dragon_Swallowed_the_Sun.png',
    dlc: '',
    version: '1.5',
    difficulty: 'H',
    startingConditions:
      '[![Yes](https://hoi4.paradoxwikis.com/images/thumb/7/77/Yes.png/22px-Yes.png)](/File:Yes.png "Yes") Playing as [![Flag of Manchukuo](https://hoi4.paradoxwikis.com/images/thumb/1/16/Manchukuo.png/24px-Manchukuo.png)](/Manchukuo "Manchukuo") [Manchukuo](/Manchukuo "Manchukuo")',
    completionRequirements:
      '[![Annexed](https://hoi4.paradoxwikis.com/images/thumb/c/c3/Autonomy_annex_icon.png/22px-Autonomy_annex_icon.png)](/Puppet#Autonomy_levels "Annexed") Annexed Japan',
    notes:
      '**Note:** To get the *achievement\\_the\\_dragon\\_swallowed\\_the\\_sun* country flag, you must annex [![Flag of Japan](https://hoi4.paradoxwikis.com/images/thumb/f/fc/Japan.png/24px-Japan.png)](/Japan "Japan") [Japan](/Japan "Japan") without being in a faction. The "not in a faction" check is done when Japan gets annexed, so theoretically you are free to join factions during the game if you want to, as long as you leave before you annex Japan. Remember that if you call your faction members to war, you will not be able to leave until after the peace conference.\n\n*For detailed strategies, see [The Dragon Swallowed the Sun](/The_Dragon_Swallowed_the_Sun "The Dragon Swallowed the Sun")*',
    game: 'hoi4',
  },
  {
    id: 'hoi4_ach_62',
    name: 'Hail to the Qing',
    description: 'As Manchukuo, restore the Qing dynasty.',
    icon: 'https://hoi4.paradoxwikis.com/images/8/8f/Hail_to_the_Qing.png',
    dlc: '',
    version: '1.5',
    difficulty: 'H',
    startingConditions:
      '[![Yes](https://hoi4.paradoxwikis.com/images/thumb/7/77/Yes.png/22px-Yes.png)](/File:Yes.png "Yes") Playing as [![Flag of Manchukuo](https://hoi4.paradoxwikis.com/images/thumb/1/16/Manchukuo.png/24px-Manchukuo.png)](/Manchukuo "Manchukuo") [Manchukuo](/Manchukuo "Manchukuo")',
    completionRequirements:
      '[![Yes](https://hoi4.paradoxwikis.com/images/thumb/7/77/Yes.png/22px-Yes.png)](/File:Yes.png "Yes") Has completed focus [![Claim the Mandate of Heaven](https://hoi4.paradoxwikis.com/images/thumb/b/bf/Focus_man_claim_the_mandate_of_heaven.png/22px-Focus_man_claim_the_mandate_of_heaven.png)](/Manchu_national_focus_tree#Claim_the_Mandate_of_Heaven "Claim the Mandate of Heaven")[Claim the Mandate of Heaven](/Manchu_national_focus_tree#Claim_the_Mandate_of_Heaven "Manchu national focus tree")',
    notes: '*For detailed strategies, see [Hail to the Qing](/Hail_to_the_Qing "Hail to the Qing")*',
    game: 'hoi4',
  },
  {
    id: 'hoi4_ach_63',
    name: 'The Good, the Bad and the Weird',
    description:
      'As Manchukuo, have max level infrastructure in every owned state and generate at least 15 units of oil.',
    icon: 'https://hoi4.paradoxwikis.com/images/d/d9/The_Good%2C_the_Bad_and_the_Weird.png',
    dlc: '',
    version: '1.5',
    difficulty: 'M',
    startingConditions:
      '[![Yes](https://hoi4.paradoxwikis.com/images/thumb/7/77/Yes.png/22px-Yes.png)](/File:Yes.png "Yes") Playing as [![Flag of Manchukuo](https://hoi4.paradoxwikis.com/images/thumb/1/16/Manchukuo.png/24px-Manchukuo.png)](/Manchukuo "Manchukuo") [Manchukuo](/Manchukuo "Manchukuo")',
    completionRequirements:
      '[![Infrastructure](https://hoi4.paradoxwikis.com/images/thumb/f/f6/Infrastructure.png/22px-Infrastructure.png)](/Construction "Infrastructure") At least **5** infrastructure in:\n\n*   **Heilungkiang** *(714)*\n*   **Liaoning** *(715)*\n*   **Jehol** *(610)*\n*   **Kirin** *(328)*\n*   **Sungkiang** *(717)*\n\n[![Oil](https://hoi4.paradoxwikis.com/images/thumb/0/06/Oil.png/22px-Oil.png)](/Production#Resources "Oil") At least **16** Oil',
    notes:
      'The needed oil can be generated entirely by Heilungkiang *(714)*, once you have researched Excavation IV and done both Prospect for Resources decisions.',
    game: 'hoi4',
  },
  {
    id: 'hoi4_ach_64',
    name: 'Battlecry',
    description: 'As a warlord, conquer all of China and Japan.',
    icon: 'https://hoi4.paradoxwikis.com/images/0/08/Battlecry.png',
    dlc: '',
    version: '1.5',
    difficulty: 'VH',
    startingConditions:
      '[![Yes](https://hoi4.paradoxwikis.com/images/thumb/7/77/Yes.png/22px-Yes.png)](/File:Yes.png "Yes") Playing as *either*:\n\n*   *   [![Flag of Guangxi Clique](https://hoi4.paradoxwikis.com/images/thumb/6/68/Guangxi_Clique.png/24px-Guangxi_Clique.png)](/Guangxi_Clique "Guangxi Clique") [Guangxi Clique](/Guangxi_Clique "Guangxi Clique")\n    *   [![Flag of Shanxi](https://hoi4.paradoxwikis.com/images/thumb/d/d0/Shanxi.png/24px-Shanxi.png)](/Shanxi "Shanxi") [Shanxi](/Shanxi "Shanxi")\n    *   [![Flag of Sinkiang](https://hoi4.paradoxwikis.com/images/thumb/b/b8/Sinkiang.png/24px-Sinkiang.png)](/Sinkiang "Sinkiang") [Sinkiang](/Sinkiang "Sinkiang")\n    *   [![Flag of Xibei San Ma](https://hoi4.paradoxwikis.com/images/thumb/6/6e/Xibei_San_Ma.png/24px-Xibei_San_Ma.png)](/Xibei_San_Ma "Xibei San Ma") [Xibei San Ma](/Xibei_San_Ma "Xibei San Ma")\n    *   [![Flag of Yunnan](https://hoi4.paradoxwikis.com/images/thumb/3/3b/Yunnan.png/24px-Yunnan.png)](/Yunnan "Yunnan") [Yunnan](/Yunnan "Yunnan")',
    completionRequirements:
      '[![Occupation.png](https://hoi4.paradoxwikis.com/images/d/dc/Occupation.png)](/File:Occupation.png) Owns all core states of [![Flag of China](https://hoi4.paradoxwikis.com/images/thumb/8/81/China.png/24px-China.png)](/China "China") [China](/China "China"), [![Flag of Manchukuo](https://hoi4.paradoxwikis.com/images/thumb/1/16/Manchukuo.png/24px-Manchukuo.png)](/Manchukuo "Manchukuo") [Manchukuo](/Manchukuo "Manchukuo") and [![Flag of Japan](https://hoi4.paradoxwikis.com/images/thumb/f/fc/Japan.png/24px-Japan.png)](/Japan "Japan") [Japan](/Japan "Japan") except **Guangzhouwan** *(728)*, **Macau** *(729)*, and **Hong Kong** *(326)*.',
    notes: '*For detailed strategies, see [Battlecry](/Battlecry "Battlecry")*',
    game: 'hoi4',
  },
  {
    id: 'hoi4_ach_65',
    name: 'Panda-monium',
    description: 'As a warlord, be at war with all Chinese nations simultaneously.',
    icon: 'https://hoi4.paradoxwikis.com/images/2/2d/Panda-monium.png',
    dlc: '',
    version: '1.5',
    difficulty: 'E',
    startingConditions:
      '[![Yes](https://hoi4.paradoxwikis.com/images/thumb/7/77/Yes.png/22px-Yes.png)](/File:Yes.png "Yes") Playing as *either*:\n\n*   *   [![Flag of Guangxi Clique](https://hoi4.paradoxwikis.com/images/thumb/6/68/Guangxi_Clique.png/24px-Guangxi_Clique.png)](/Guangxi_Clique "Guangxi Clique") [Guangxi Clique](/Guangxi_Clique "Guangxi Clique")\n    *   [![Flag of Yunnan](https://hoi4.paradoxwikis.com/images/thumb/3/3b/Yunnan.png/24px-Yunnan.png)](/Yunnan "Yunnan") [Yunnan](/Yunnan "Yunnan")\n    *   [![Flag of Shanxi](https://hoi4.paradoxwikis.com/images/thumb/d/d0/Shanxi.png/24px-Shanxi.png)](/Shanxi "Shanxi") [Shanxi](/Shanxi "Shanxi")\n    *   [![Flag of Xibei San Ma](https://hoi4.paradoxwikis.com/images/thumb/6/6e/Xibei_San_Ma.png/24px-Xibei_San_Ma.png)](/Xibei_San_Ma "Xibei San Ma") [Xibei San Ma](/Xibei_San_Ma "Xibei San Ma")\n    *   [![Flag of Sinkiang](https://hoi4.paradoxwikis.com/images/thumb/b/b8/Sinkiang.png/24px-Sinkiang.png)](/Sinkiang "Sinkiang") [Sinkiang](/Sinkiang "Sinkiang")',
    completionRequirements:
      '[![War goal](https://hoi4.paradoxwikis.com/images/thumb/c/c2/Relation_wargoal.png/22px-Relation_wargoal.png)](/War_goal "War goal") At war with:\n\n*   *   [![Flag of Guangxi Clique](https://hoi4.paradoxwikis.com/images/thumb/6/68/Guangxi_Clique.png/24px-Guangxi_Clique.png)](/Guangxi_Clique "Guangxi Clique") [Guangxi Clique](/Guangxi_Clique "Guangxi Clique")\n    *   [![Flag of Yunnan](https://hoi4.paradoxwikis.com/images/thumb/3/3b/Yunnan.png/24px-Yunnan.png)](/Yunnan "Yunnan") [Yunnan](/Yunnan "Yunnan")\n    *   [![Flag of Shanxi](https://hoi4.paradoxwikis.com/images/thumb/d/d0/Shanxi.png/24px-Shanxi.png)](/Shanxi "Shanxi") [Shanxi](/Shanxi "Shanxi")\n    *   [![Flag of Xibei San Ma](https://hoi4.paradoxwikis.com/images/thumb/6/6e/Xibei_San_Ma.png/24px-Xibei_San_Ma.png)](/Xibei_San_Ma "Xibei San Ma") [Xibei San Ma](/Xibei_San_Ma "Xibei San Ma")\n    *   [![Flag of Sinkiang](https://hoi4.paradoxwikis.com/images/thumb/b/b8/Sinkiang.png/24px-Sinkiang.png)](/Sinkiang "Sinkiang") [Sinkiang](/Sinkiang "Sinkiang")\n    *   [![Flag of China](https://hoi4.paradoxwikis.com/images/thumb/8/81/China.png/24px-China.png)](/China "China") [China](/China "China")\n    *   [![Flag of Communist China](https://hoi4.paradoxwikis.com/images/thumb/1/1a/Communist_China.png/24px-Communist_China.png)](/Communist_China "Communist China") [Communist China](/Communist_China "Communist China")',
    notes:
      'Play as [![Flag of Sinkiang](https://hoi4.paradoxwikis.com/images/thumb/b/b8/Sinkiang.png/24px-Sinkiang.png)](/Sinkiang "Sinkiang") [Sinkiang](/Sinkiang "Sinkiang"), join the Comintern, and justify and declare war on a warlord once the Chinese United Front is formed.\n\n*For detailed strategies, see [Panda-monium](/Panda-monium "Panda-monium")*',
    game: 'hoi4',
  },
  {
    id: 'hoi4_ach_66',
    name: 'Make a Man Out Of You',
    description: 'As a Warlord, have at least 1,000,000 manpower queued up for deployment.',
    icon: 'https://hoi4.paradoxwikis.com/images/0/0b/Make_a_Man_Out_Of_You.png',
    dlc: '',
    version: '1.5',
    difficulty: 'E',
    startingConditions:
      '[![Yes](https://hoi4.paradoxwikis.com/images/thumb/7/77/Yes.png/22px-Yes.png)](/File:Yes.png "Yes") Playing as *either*:\n\n*   *   [![Flag of Guangxi Clique](https://hoi4.paradoxwikis.com/images/thumb/6/68/Guangxi_Clique.png/24px-Guangxi_Clique.png)](/Guangxi_Clique "Guangxi Clique") [Guangxi Clique](/Guangxi_Clique "Guangxi Clique")\n    *   [![Flag of Shanxi](https://hoi4.paradoxwikis.com/images/thumb/d/d0/Shanxi.png/24px-Shanxi.png)](/Shanxi "Shanxi") [Shanxi](/Shanxi "Shanxi")\n    *   [![Flag of Sinkiang](https://hoi4.paradoxwikis.com/images/thumb/b/b8/Sinkiang.png/24px-Sinkiang.png)](/Sinkiang "Sinkiang") [Sinkiang](/Sinkiang "Sinkiang")\n    *   [![Flag of Xibei San Ma](https://hoi4.paradoxwikis.com/images/thumb/6/6e/Xibei_San_Ma.png/24px-Xibei_San_Ma.png)](/Xibei_San_Ma "Xibei San Ma") [Xibei San Ma](/Xibei_San_Ma "Xibei San Ma")\n    *   [![Flag of Yunnan](https://hoi4.paradoxwikis.com/images/thumb/3/3b/Yunnan.png/24px-Yunnan.png)](/Yunnan "Yunnan") [Yunnan](/Yunnan "Yunnan")',
    completionRequirements:
      '[![Manpower](https://hoi4.paradoxwikis.com/images/thumb/0/0c/Manpower.png/22px-Manpower.png)](/Manpower "Manpower") Has at least **1,000,000** manpower in deployment queue',
    notes:
      'Start as [![Flag of Guangxi Clique](https://hoi4.paradoxwikis.com/images/thumb/6/68/Guangxi_Clique.png/24px-Guangxi_Clique.png)](/Guangxi_Clique "Guangxi Clique") [Guangxi Clique](/Guangxi_Clique "Guangxi Clique") and get to 5 [![Army experience](https://hoi4.paradoxwikis.com/images/e/ec/Army_experience.png)](/Experience "Army experience")[Army experience](/Experience "Experience"), either by training or hiring military advisor. Create a 1 width division and rush train as many as possible (make sure to set it to the highest priority in the recruiting tab so it gets guns first). Deploy them as soon as they reach the minimum training level and just switch them to the normal template.  \n**Note**: You can only train 75% of the manpower currently on the field with a minimum of 100.00K. So that means you must have at least 1,333,334 manpower on the field to do this achievement.',
    game: 'hoi4',
  },
  {
    id: 'hoi4_ach_67',
    name: 'Monarchy is Back in Fashion',
    description:
      'As Germany, Bring back the Kaiser and ensure that Italy is controlled by Victor Emmanuel by killing Mussolini.',
    icon: 'https://hoi4.paradoxwikis.com/images/2/2b/Monarchy_is_Back_in_Fashion.png',
    dlc: '',
    version: '1.5',
    difficulty: 'E',
    startingConditions:
      '[![Yes](https://hoi4.paradoxwikis.com/images/thumb/7/77/Yes.png/22px-Yes.png)](/File:Yes.png "Yes") Playing as [![Flag of Germany](https://hoi4.paradoxwikis.com/images/thumb/e/e9/German_Reich.png/24px-German_Reich.png)](/Germany "Germany") [Germany](/Germany "Germany")',
    completionRequirements:
      '*   [![Yes](https://hoi4.paradoxwikis.com/images/thumb/7/77/Yes.png/22px-Yes.png)](/File:Yes.png "Yes") **Wilhelm II** is the current country leader\n*   [![Yes](https://hoi4.paradoxwikis.com/images/thumb/7/77/Yes.png/22px-Yes.png)](/File:Yes.png "Yes") [![Flag of Italy](https://hoi4.paradoxwikis.com/images/thumb/2/2a/Italy.png/24px-Italy.png)](/Italy "Italy") [Italy](/Italy "Italy") has **Vittorio Emanuele III** as the current country leader',
    notes:
      'Requires [![Götterdämmerung](https://hoi4.paradoxwikis.com/images/thumb/5/5f/DLC_G%C3%B6tterd%C3%A4mmerung.png/22px-DLC_G%C3%B6tterd%C3%A4mmerung.png)](/G%C3%B6tterd%C3%A4mmerung "Götterdämmerung")[Götterdämmerung](/G%C3%B6tterd%C3%A4mmerung "Götterdämmerung") disabled.  \nFollow the [![Return of the Kaiser](https://hoi4.paradoxwikis.com/images/thumb/9/97/Focus_ger_return_of_the_kaiser.png/22px-Focus_ger_return_of_the_kaiser.png)](/German_national_focus_tree:_opposition_branches#Return_of_the_Kaiser "Return of the Kaiser")[Return of the Kaiser](/German_national_focus_tree:_opposition_branches#Return_of_the_Kaiser "German national focus tree: opposition branches") and the [![Focus on the True Enemy](https://hoi4.paradoxwikis.com/images/thumb/3/3e/Goal_generic_occupy_states_coastal.png/22px-Goal_generic_occupy_states_coastal.png)](/German_national_focus_tree:_opposition_branches#Focus_on_the_True_Enemy "Focus on the True Enemy")[Focus on the True Enemy](/German_national_focus_tree:_opposition_branches#Focus_on_the_True_Enemy "German national focus tree: opposition branches") path in the [Oppose Hitler](/German_national_focus_tree#Oppose_Hitler_Branch "German national focus tree") branch until you get to the [![Assassinate Mussolini](https://hoi4.paradoxwikis.com/images/thumb/6/62/Focus_ger_assassinate_mussolini.png/22px-Focus_ger_assassinate_mussolini.png)](/German_national_focus_tree:_opposition_branches#Assassinate_Mussolini_B "Assassinate Mussolini")[Assassinate Mussolini](/German_national_focus_tree:_opposition_branches#Assassinate_Mussolini_B "German national focus tree: opposition branches") focus (AI will always agree to assassinate Mussolini). Wilhelm II must be your leader and he must not die before the focus is complete. Note that you can get the achievement just by placing Wilhelm II in the German Empire throne if the non-historical AI choses without your intervention to get rid of Mussolini and place Victor Emmanuel as king.',
    game: 'hoi4',
  },
  {
    id: 'hoi4_ach_68',
    name: 'Our Other Place in the Sun',
    description: 'As Imperial Germany, conquer a Caribbean island.',
    icon: 'https://hoi4.paradoxwikis.com/images/a/ad/Our_Other_Place_in_the_Sun.png',
    dlc: '',
    version: '1.5',
    difficulty: 'M',
    startingConditions:
      '[![Yes](https://hoi4.paradoxwikis.com/images/thumb/7/77/Yes.png/22px-Yes.png)](/File:Yes.png "Yes") Playing as [![Flag of Germany](https://hoi4.paradoxwikis.com/images/thumb/e/e9/German_Reich.png/24px-German_Reich.png)](/Germany "Germany") [Germany](/Germany "Germany")',
    completionRequirements:
      '*   If [![Götterdämmerung](https://hoi4.paradoxwikis.com/images/thumb/5/5f/DLC_G%C3%B6tterd%C3%A4mmerung.png/22px-DLC_G%C3%B6tterd%C3%A4mmerung.png)](/G%C3%B6tterd%C3%A4mmerung "Götterdämmerung")[Götterdämmerung](/G%C3%B6tterd%C3%A4mmerung "Götterdämmerung") is enabled:\n    *   [![Yes](https://hoi4.paradoxwikis.com/images/thumb/7/77/Yes.png/22px-Yes.png)](/File:Yes.png "Yes") Has completed focus [![Our Place in the Sun](https://hoi4.paradoxwikis.com/images/thumb/d/db/Focus_GER_our_place_in_the_sun.png/22px-Focus_GER_our_place_in_the_sun.png)](/German_national_focus_tree:_opposition_branches#Our_Place_in_the_Sun_WW "Our Place in the Sun")[Our Place in the Sun](/German_national_focus_tree:_opposition_branches#Our_Place_in_the_Sun_WW "German national focus tree: opposition branches")\n*   Otherwise:\n    *   [![Yes](https://hoi4.paradoxwikis.com/images/thumb/7/77/Yes.png/22px-Yes.png)](/File:Yes.png "Yes") Has completed focus [![Our Place in the Sun](https://hoi4.paradoxwikis.com/images/thumb/2/24/Goal_generic_demand_territory.png/22px-Goal_generic_demand_territory.png)](/German_national_focus_tree:_opposition_branches#Our_Place_in_the_Sun_B "Our Place in the Sun")[Our Place in the Sun](/German_national_focus_tree:_opposition_branches#Our_Place_in_the_Sun_B "German national focus tree: opposition branches")\n*   [![Occupation.png](https://hoi4.paradoxwikis.com/images/d/dc/Occupation.png)](/File:Occupation.png) Conquered an island in the Caribbean',
    notes:
      'Requires [![Flag of Germany](https://hoi4.paradoxwikis.com/images/thumb/e/e9/German_Reich.png/24px-German_Reich.png)](/Germany "Germany") [Germany](/Germany "Germany") to follow the [Return of the Kaiser](/German_national_focus_tree#Return_of_the_Kaiser_Sub-branch "German national focus tree") branch. Taking Curacao from the [![Flag of Netherlands](https://hoi4.paradoxwikis.com/images/thumb/3/32/Netherlands.png/24px-Netherlands.png)](/Netherlands "Netherlands") [Dutch](/Netherlands "Netherlands") will not earn the achievement, as it is counted as part of South America.\n\n*For detailed strategies, see [Our Other Place in the Sun](/Our_Other_Place_in_the_Sun "Our Other Place in the Sun")*',
    game: 'hoi4',
  },
  {
    id: 'hoi4_ach_69',
    name: 'Australia-Hungary',
    description: 'As Australia, own all core territory of Hungary.',
    icon: 'https://hoi4.paradoxwikis.com/images/5/5d/Australia-Hungary.png',
    dlc: '',
    version: '1.5',
    difficulty: 'E',
    startingConditions:
      '[![Yes](https://hoi4.paradoxwikis.com/images/thumb/7/77/Yes.png/22px-Yes.png)](/File:Yes.png "Yes") Playing as [![Flag of Australia](https://hoi4.paradoxwikis.com/images/thumb/4/43/Australia.png/24px-Australia.png)](/Australia "Australia") [Australia](/Australia "Australia")',
    completionRequirements:
      '[![Occupation.png](https://hoi4.paradoxwikis.com/images/d/dc/Occupation.png)](/File:Occupation.png) Owns all [![Flag of Hungary](https://hoi4.paradoxwikis.com/images/thumb/6/6a/Hungary.png/24px-Hungary.png)](/Hungary "Hungary") [Hungarian](/Hungary "Hungary") core territory',
    notes: '*For detailed strategies, see [Australia-Hungary](/Australia-Hungary "Australia-Hungary")*',
    game: 'hoi4',
  },
  {
    id: 'hoi4_ach_70',
    name: "My Ships Don't Lie",
    description: 'As Colombia, form Gran Colombia and have 10 Carriers and 10 Battleships.',
    icon: 'https://hoi4.paradoxwikis.com/images/c/c3/My_Ships_Don%27t_Lie.png',
    dlc: '',
    version: '1.5',
    difficulty: 'M',
    startingConditions:
      '[![Yes](https://hoi4.paradoxwikis.com/images/thumb/7/77/Yes.png/22px-Yes.png)](/File:Yes.png "Yes") Playing as [![Flag of Colombia](https://hoi4.paradoxwikis.com/images/thumb/8/80/Colombia.png/24px-Colombia.png)](/Colombia "Colombia") [Colombia](/Colombia "Colombia")',
    completionRequirements:
      '*    [![Yes](https://hoi4.paradoxwikis.com/images/thumb/7/77/Yes.png/22px-Yes.png)](/File:Yes.png "Yes") Has taken the decision to form [![Flag of Gran Colombia](https://hoi4.paradoxwikis.com/images/thumb/c/c1/Gran_Colombia.png/24px-Gran_Colombia.png)](/Gran_Colombia "Gran Colombia") [Gran Colombia](/Gran_Colombia "Gran Colombia")\n*   [![Battleship.png](https://hoi4.paradoxwikis.com/images/thumb/e/e8/Battleship.png/22px-Battleship.png)](/File:Battleship.png) At least **10** Battleships\n*   [![Carrier.png](https://hoi4.paradoxwikis.com/images/thumb/b/b7/Carrier.png/22px-Carrier.png)](/File:Carrier.png) At least **10** Carriers',
    notes:
      'Requires the [Restore the Bolívar Union](/Formable_nations#Gran_Colombia "Formable nations") decision.\n\n*For detailed strategies, see [My Ships Don\'t Lie](/My_Ships_Don%27t_Lie "My Ships Don\'t Lie")*',
    game: 'hoi4',
  },
  {
    id: 'hoi4_ach_71',
    name: "I Swear I'm Not a Byzantophile",
    description: 'As Greece, Form Byzantine Empire.',
    icon: 'https://hoi4.paradoxwikis.com/images/3/3b/I_Swear_I%27m_Not_a_Byzantophile.png',
    dlc: '',
    version: '1.5',
    difficulty: 'H',
    startingConditions:
      '[![Yes](https://hoi4.paradoxwikis.com/images/thumb/7/77/Yes.png/22px-Yes.png)](/File:Yes.png "Yes") Playing as [![Flag of Greece](https://hoi4.paradoxwikis.com/images/thumb/8/8e/Kingdom_of_Greece.png/24px-Kingdom_of_Greece.png)](/Greece "Greece") [Greece](/Greece "Greece")',
    completionRequirements:
      '[![Yes](https://hoi4.paradoxwikis.com/images/thumb/7/77/Yes.png/22px-Yes.png)](/File:Yes.png "Yes") Formed the [![Flag of Byzantine Empire](https://hoi4.paradoxwikis.com/images/thumb/f/f4/Byzantine_Empire.png/24px-Byzantine_Empire.png)](/Byzantine_Empire "Byzantine Empire") [Byzantine Empire](/Byzantine_Empire "Byzantine Empire")',
    notes:
      '*For detailed strategies, see [I Swear I\'m Not a Byzantophile](/I_Swear_I%27m_Not_a_Byzantophile "I Swear I\'m Not a Byzantophile")*',
    game: 'hoi4',
  },
  {
    id: 'hoi4_ach_72',
    name: 'Team America',
    description: 'As the U.S.A., drop a nuclear bomb on Paris.',
    icon: 'https://hoi4.paradoxwikis.com/images/5/55/Team_America.png',
    dlc: '',
    version: '1.6',
    difficulty: 'E',
    startingConditions:
      '[![Yes](https://hoi4.paradoxwikis.com/images/thumb/7/77/Yes.png/22px-Yes.png)](/File:Yes.png "Yes") Playing as [![Flag of United States](https://hoi4.paradoxwikis.com/images/thumb/3/32/United_States.png/24px-United_States.png)](/United_States "United States") [United States](/United_States "United States")',
    completionRequirements:
      '[![Nuclear bombs.png](https://hoi4.paradoxwikis.com/images/thumb/1/18/Nuclear_bombs.png/22px-Nuclear_bombs.png)](/File:Nuclear_bombs.png) Dropped a nuclear bomb on Paris',
    notes:
      'As a democratic nation, build a lot of planes, namely strategic bombers and fighters, and rush nuclear technology. [![Flag of Germany](https://hoi4.paradoxwikis.com/images/thumb/e/e9/German_Reich.png/24px-German_Reich.png)](/Germany "Germany") [Germany](/Germany "Germany") will control Paris. When in the Allies, move your planes to the airfield on the [![Flag of United Kingdom](https://hoi4.paradoxwikis.com/images/thumb/2/29/United_Kingdom.png/24px-United_Kingdom.png)](/United_Kingdom "United Kingdom") [British](/United_Kingdom "United Kingdom") Isles and set them on mission to Northern [![Flag of France](https://hoi4.paradoxwikis.com/images/thumb/d/de/France.png/24px-France.png)](/France "France") [France](/France "France") when the nuclear tech is ready and one nuke is available. Achieve air superiority and nuke Paris when ready.',
    game: 'hoi4',
  },
  {
    id: 'hoi4_ach_73',
    name: 'History Repeated Itself',
    description: 'As the U.S.A., Win against the Confederate States. Again.',
    icon: 'https://hoi4.paradoxwikis.com/images/c/c6/History_Repeated_Itself.png',
    dlc: '',
    version: '1.6',
    difficulty: 'M',
    startingConditions:
      '[![Yes](https://hoi4.paradoxwikis.com/images/thumb/7/77/Yes.png/22px-Yes.png)](/File:Yes.png "Yes") Playing as [![Flag of United States](https://hoi4.paradoxwikis.com/images/thumb/3/32/United_States.png/24px-United_States.png)](/United_States "United States") [United States](/United_States "United States")',
    completionRequirements:
      '*    [![Yes](https://hoi4.paradoxwikis.com/images/thumb/7/77/Yes.png/22px-Yes.png)](/File:Yes.png "Yes") The Second American Civil War has started\n*   [![No](https://hoi4.paradoxwikis.com/images/thumb/0/04/No.png/22px-No.png)](/File:No.png "No") [![Flag of Confederacy of American States](https://hoi4.paradoxwikis.com/images/thumb/0/0a/Confederacy_of_American_States.png/24px-Confederacy_of_American_States.png)](/Confederacy_of_American_States "Confederacy of American States") [Confederacy of American States](/Confederacy_of_American_States "Confederacy of American States") exists',
    notes:
      'Completing either [![Full Desegregation](https://hoi4.paradoxwikis.com/images/thumb/4/4c/Focus_generic_support_the_left_right.png/22px-Focus_generic_support_the_left_right.png)](/American_national_focus_tree#Full_Desegregation "Full Desegregation")[Full Desegregation](/American_national_focus_tree#Full_Desegregation "American national focus tree") or [![Union Representation Act](https://hoi4.paradoxwikis.com/images/thumb/1/12/Focus_usa_union_representation_act.png/22px-Focus_usa_union_representation_act.png)](/American_national_focus_tree#Union_Representation_Act "Union Representation Act")[Union Representation Act](/American_national_focus_tree#Union_Representation_Act "American national focus tree") will trigger a civil war with the Confederacy. To help the [![Flag of United States](https://hoi4.paradoxwikis.com/images/thumb/3/32/United_States.png/24px-United_States.png)](/United_States "United States") [United States](/United_States "United States") win the war, complete the [![WPA](https://hoi4.paradoxwikis.com/images/thumb/3/31/Goal_generic_production.png/22px-Goal_generic_production.png)](/American_national_focus_tree#WPA "WPA")[WPA](/American_national_focus_tree#WPA "American national focus tree") branch and [![Guarantee the American Dream](https://hoi4.paradoxwikis.com/images/thumb/4/48/Focus_usa_guarantee_the_american_dream.png/22px-Focus_usa_guarantee_the_american_dream.png)](/American_national_focus_tree#Guarantee_the_American_Dream "Guarantee the American Dream")[Guarantee the American Dream](/American_national_focus_tree#Guarantee_the_American_Dream "American national focus tree") beforehand.',
    game: 'hoi4',
  },
  {
    id: 'hoi4_ach_74',
    name: 'Georgia On My Mind',
    description: 'As the U.S.A., own and fully control all three Georgias.',
    icon: 'https://hoi4.paradoxwikis.com/images/f/fb/Georgia_On_My_Mind.png',
    dlc: '',
    version: '1.6',
    difficulty: 'H',
    startingConditions:
      '[![Yes](https://hoi4.paradoxwikis.com/images/thumb/7/77/Yes.png/22px-Yes.png)](/File:Yes.png "Yes") Playing as [![Flag of United States](https://hoi4.paradoxwikis.com/images/thumb/3/32/United_States.png/24px-United_States.png)](/United_States "United States") [United States](/United_States "United States")',
    completionRequirements:
      '[![Occupation.png](https://hoi4.paradoxwikis.com/images/d/dc/Occupation.png)](/File:Occupation.png) Owns and controls **Georgia** *(365)*, **Georgia** *(231)*, and **South Georgia** *(720)*',
    notes: '*For detailed strategies, see [Georgia On My Mind](/Georgia_On_My_Mind "Georgia On My Mind")*',
    game: 'hoi4',
  },
  {
    id: 'hoi4_ach_75',
    name: 'To Arms in Dixie!',
    description: 'As the U.S.A., start a new civil war as the South.',
    icon: 'https://hoi4.paradoxwikis.com/images/5/5f/To_Arms_in_Dixie%21.png',
    dlc: '',
    version: '1.6',
    difficulty: 'VE',
    startingConditions:
      '[![Yes](https://hoi4.paradoxwikis.com/images/thumb/7/77/Yes.png/22px-Yes.png)](/File:Yes.png "Yes") Playing as [![Flag of United States](https://hoi4.paradoxwikis.com/images/thumb/3/32/United_States.png/24px-United_States.png)](/United_States "United States") [United States](/United_States "United States")',
    completionRequirements:
      '[![Yes](https://hoi4.paradoxwikis.com/images/thumb/7/77/Yes.png/22px-Yes.png)](/File:Yes.png "Yes") The Boston Rebellion has begun',
    notes:
      'Complete [![America First](https://hoi4.paradoxwikis.com/images/thumb/5/55/Goal_generic_political_pressure.png/22px-Goal_generic_political_pressure.png)](/American_national_focus_tree#America_First "America First")[America First](/American_national_focus_tree#America_First "American national focus tree") and hire the fascist advisor. When ready and possible, complete [![Ally With the Silver Shirts](https://hoi4.paradoxwikis.com/images/thumb/b/be/Focus_generic_diplomatic_treaty.png/22px-Focus_generic_diplomatic_treaty.png)](/American_national_focus_tree#Ally_With_the_Silver_Shirts "Ally With the Silver Shirts")[Ally With the Silver Shirts](/American_national_focus_tree#Ally_With_the_Silver_Shirts "American national focus tree") to trigger the event chain leading to the civil war. For best results, complete [![Work With the Bund](https://hoi4.paradoxwikis.com/images/thumb/b/b1/Goal_generic_dangerous_deal.png/22px-Goal_generic_dangerous_deal.png)](/American_national_focus_tree#Work_With_the_Bund "Work With the Bund")[Work With the Bund](/American_national_focus_tree#Work_With_the_Bund "American national focus tree") and [![Recruit the Free Corps](https://hoi4.paradoxwikis.com/images/thumb/7/7e/Focus_usa_recruit_the_free_corps.png/22px-Focus_usa_recruit_the_free_corps.png)](/American_national_focus_tree#Recruit_the_Free_Corps "Recruit the Free Corps")[Recruit the Free Corps](/American_national_focus_tree#Recruit_the_Free_Corps "American national focus tree").',
    game: 'hoi4',
  },
  {
    id: 'hoi4_ach_76',
    name: 'Arsenal of Democracy',
    description: 'As the U.S.A., have more than 300 military factories.',
    icon: 'https://hoi4.paradoxwikis.com/images/d/d8/Arsenal_of_Democracy.png',
    dlc: '',
    version: '1.6',
    difficulty: 'E',
    startingConditions:
      '[![Yes](https://hoi4.paradoxwikis.com/images/thumb/7/77/Yes.png/22px-Yes.png)](/File:Yes.png "Yes") Playing as [![Flag of United States](https://hoi4.paradoxwikis.com/images/thumb/3/32/United_States.png/24px-United_States.png)](/United_States "United States") [United States](/United_States "United States")',
    completionRequirements:
      '*   [![Yes](https://hoi4.paradoxwikis.com/images/thumb/7/77/Yes.png/22px-Yes.png)](/File:Yes.png "Yes") Ruling party is [![{{{1}}}](https://hoi4.paradoxwikis.com/images/thumb/e/e9/Democracy.png/22px-Democracy.png)](/Ideology#Democracy "{{{1}}}")[Democratic](/Ideology#Democracy "Ideology")\n*   [![Military factories](https://hoi4.paradoxwikis.com/images/thumb/8/83/Military_factories.png/22px-Military_factories.png)](/Production "Military factories") More than 300 military factories',
    notes:
      'The easiest way to earn this achievement is to simply play on historical as the [![Flag of United States](https://hoi4.paradoxwikis.com/images/thumb/3/32/United_States.png/24px-United_States.png)](/United_States "United States") [United States](/United_States "United States") and build as many [![Military factories](https://hoi4.paradoxwikis.com/images/thumb/8/83/Military_factories.png/22px-Military_factories.png)](/Production "Military factories")[Military factories](/Production "Production") as possible. The [![Arsenal of Democracy](https://hoi4.paradoxwikis.com/images/thumb/3/35/Goal_generic_support_democracy.png/22px-Goal_generic_support_democracy.png)](/American_national_focus_tree#Arsenal_of_Democracy "Arsenal of Democracy")[Arsenal of Democracy](/American_national_focus_tree#Arsenal_of_Democracy "American national focus tree") branch of the focus tree gives [![Military factories](https://hoi4.paradoxwikis.com/images/thumb/8/83/Military_factories.png/22px-Military_factories.png)](/Production "Military factories")[Military factories](/Production "Production") for free, so make sure you complete it, along with the [![WPA](https://hoi4.paradoxwikis.com/images/thumb/3/31/Goal_generic_production.png/22px-Goal_generic_production.png)](/American_national_focus_tree#WPA "WPA")[WPA](/American_national_focus_tree#WPA "American national focus tree") branch to boost your industry.',
    game: 'hoi4',
  },
  {
    id: 'hoi4_ach_77',
    name: 'Underpaid, Undersexed, and Under Eisenhower',
    description:
      'As the U.S.A., assume faction leadership of the Allies, and have over 50 expeditionary divisions from the United Kingdom.',
    icon: 'https://hoi4.paradoxwikis.com/images/e/eb/Underpaid%2C_Undersexed%2C_and_Under_Eisenhower.png',
    dlc: '',
    version: '1.6',
    difficulty: 'E',
    startingConditions:
      '[![Yes](https://hoi4.paradoxwikis.com/images/thumb/7/77/Yes.png/22px-Yes.png)](/File:Yes.png "Yes") Playing as [![Flag of United States](https://hoi4.paradoxwikis.com/images/thumb/3/32/United_States.png/24px-United_States.png)](/United_States "United States") [United States](/United_States "United States")',
    completionRequirements:
      '*   [![Relation join faction.png](https://hoi4.paradoxwikis.com/images/thumb/9/91/Relation_join_faction.png/22px-Relation_join_faction.png)](/File:Relation_join_faction.png) Is in faction with the [![Flag of United Kingdom](https://hoi4.paradoxwikis.com/images/thumb/2/29/United_Kingdom.png/24px-United_Kingdom.png)](/United_Kingdom "United Kingdom") [United Kingdom](/United_Kingdom "United Kingdom")\n*   [![Relation join faction.png](https://hoi4.paradoxwikis.com/images/thumb/9/91/Relation_join_faction.png/22px-Relation_join_faction.png)](/File:Relation_join_faction.png) Is Faction leader\n*   [![Yes](https://hoi4.paradoxwikis.com/images/thumb/7/77/Yes.png/22px-Yes.png)](/File:Yes.png "Yes") Received at least **50** expeditionary forces from the [![Flag of United Kingdom](https://hoi4.paradoxwikis.com/images/thumb/2/29/United_Kingdom.png/24px-United_Kingdom.png)](/United_Kingdom "United Kingdom") [United Kingdom](/United_Kingdom "United Kingdom")',
    notes:
      'Simply play historical and join the Allies. You need 50% more factories and fielded manpower than the [![Flag of United Kingdom](https://hoi4.paradoxwikis.com/images/thumb/2/29/United_Kingdom.png/24px-United_Kingdom.png)](/United_Kingdom "United Kingdom") [United Kingdom](/United_Kingdom "United Kingdom"), which shouldn\'t be a problem after a few years of buildup. Once you become faction leader, create an invasion order and press the button below the army to request 51 expeditionary forces and earn the achievement.  \n**Note:** The UK will accept to send the 51 divisions you need if they have ~160 divisions, you can send them some of your own troops as expeditionary forces to get them past that number.',
    game: 'hoi4',
  },
  {
    id: 'hoi4_ach_78',
    name: 'Last for a Thousand Years',
    description: 'As the United Kingdom, accomplish the federation of the entire British Empire.',
    icon: 'https://hoi4.paradoxwikis.com/images/5/5d/Last_for_a_Thousand_Years.png',
    dlc: '',
    version: '1.6',
    difficulty: 'M',
    startingConditions:
      '[![Yes](https://hoi4.paradoxwikis.com/images/thumb/7/77/Yes.png/22px-Yes.png)](/File:Yes.png "Yes") Playing as [![Flag of United Kingdom](https://hoi4.paradoxwikis.com/images/thumb/2/29/United_Kingdom.png/24px-United_Kingdom.png)](/United_Kingdom "United Kingdom") [United Kingdom](/United_Kingdom "United Kingdom")',
    completionRequirements:
      '[![Yes](https://hoi4.paradoxwikis.com/images/thumb/7/77/Yes.png/22px-Yes.png)](/File:Yes.png "Yes") Has completed focus [![Imperial Federation](https://hoi4.paradoxwikis.com/images/thumb/0/00/Focus_eng_imperial_federation.png/22px-Focus_eng_imperial_federation.png)](/British_national_focus_tree#Imperial_Federation "Imperial Federation")[Imperial Federation](/British_national_focus_tree#Imperial_Federation "British national focus tree")',
    notes:
      'Can be done as any ideology. Make sure to improve relations and save up a few hundred [![Political Power](https://hoi4.paradoxwikis.com/images/thumb/2/24/Political_power.png/22px-Political_power.png)](/Government#Political_power "Political Power")[Political Power](/Government#Political_power "Government") before starting [![Hold the Imperial Conference](https://hoi4.paradoxwikis.com/images/thumb/f/fd/Goal_generic_national_unity.png/22px-Goal_generic_national_unity.png)](/British_national_focus_tree#Hold_the_Imperial_Conference "Hold the Imperial Conference")[Hold the Imperial Conference](/British_national_focus_tree#Hold_the_Imperial_Conference "British national focus tree"). 300-400 political power is a good number to have saved before starting but if you can spare the time and effort, having around 600-700 political power will ensure success.',
    game: 'hoi4',
  },
  {
    id: 'hoi4_ach_79',
    name: 'Britzkrieg',
    description: 'As the United Kingdom, put Edward VIII in power, ally Germany and fully control Paris.',
    icon: 'https://hoi4.paradoxwikis.com/images/1/1c/Britzkrieg.png',
    dlc: '',
    version: '1.6',
    difficulty: 'E',
    startingConditions:
      '[![Yes](https://hoi4.paradoxwikis.com/images/thumb/7/77/Yes.png/22px-Yes.png)](/File:Yes.png "Yes") Playing as [![Flag of United Kingdom](https://hoi4.paradoxwikis.com/images/thumb/2/29/United_Kingdom.png/24px-United_Kingdom.png)](/United_Kingdom "United Kingdom") [United Kingdom](/United_Kingdom "United Kingdom")',
    completionRequirements:
      '*   [![Yes](https://hoi4.paradoxwikis.com/images/thumb/7/77/Yes.png/22px-Yes.png)](/File:Yes.png "Yes") Has completed focus [![The King\'s Party](https://hoi4.paradoxwikis.com/images/thumb/e/ef/Focus_eng_the_kings_party.png/22px-Focus_eng_the_kings_party.png)](/British_national_focus_tree#The_King\'s_Party "The King\'s Party")[The King\'s Party](/British_national_focus_tree#The_King\'s_Party "British national focus tree")\n*   [![Relation join faction.png](https://hoi4.paradoxwikis.com/images/thumb/9/91/Relation_join_faction.png/22px-Relation_join_faction.png)](/File:Relation_join_faction.png) Is in faction with [![Flag of Germany](https://hoi4.paradoxwikis.com/images/thumb/e/e9/German_Reich.png/24px-German_Reich.png)](/Germany "Germany") [Germany](/Germany "Germany")\n*   [![Yes](https://hoi4.paradoxwikis.com/images/thumb/7/77/Yes.png/22px-Yes.png)](/File:Yes.png "Yes") [![Flag of France](https://hoi4.paradoxwikis.com/images/thumb/d/de/France.png/24px-France.png)](/France "France") [France](/France "France") has capitulated or does not exist\n*   [![Occupation.png](https://hoi4.paradoxwikis.com/images/d/dc/Occupation.png)](/File:Occupation.png) Has full control of **Ile de France** *(16)*',
    notes:
      'Follow the focus tree to [![Alliance with Germany](https://hoi4.paradoxwikis.com/images/thumb/e/ec/Focus_chi_mission_to_germany.png/22px-Focus_chi_mission_to_germany.png)](/British_national_focus_tree#Alliance_with_Germany "Alliance with Germany")[Alliance with Germany](/British_national_focus_tree#Alliance_with_Germany "British national focus tree"). Justify against [![Flag of France](https://hoi4.paradoxwikis.com/images/thumb/d/de/France.png/24px-France.png)](/France "France") [France](/France "France") and launch a naval invasion of Normandy. It is not necessary to call [![Flag of Germany](https://hoi4.paradoxwikis.com/images/thumb/e/e9/German_Reich.png/24px-German_Reich.png)](/Germany "Germany") [Germany](/Germany "Germany") into the war. If France is puppeted, the achievement will not fire. Annex all cores, territories, and colonies to be sure.',
    game: 'hoi4',
  },
  {
    id: 'hoi4_ach_80',
    name: 'Nothing Wrong with our Bloody Ships',
    description: 'As the United Kingdom, have at least 9 battlecruisers.',
    icon: 'https://hoi4.paradoxwikis.com/images/5/5f/Nothing_Wrong_with_our_Bloody_Ships.png',
    dlc: '',
    version: '1.6',
    difficulty: 'VE',
    startingConditions:
      '[![Yes](https://hoi4.paradoxwikis.com/images/thumb/7/77/Yes.png/22px-Yes.png)](/File:Yes.png "Yes") Playing as [![Flag of United Kingdom](https://hoi4.paradoxwikis.com/images/thumb/2/29/United_Kingdom.png/24px-United_Kingdom.png)](/United_Kingdom "United Kingdom") [United Kingdom](/United_Kingdom "United Kingdom")',
    completionRequirements:
      '[![Battlecruiser.png](https://hoi4.paradoxwikis.com/images/thumb/d/d8/Battlecruiser.png/22px-Battlecruiser.png)](/File:Battlecruiser.png) Has at least 9 Battlecruisers',
    notes:
      'With [![Man the Guns](https://hoi4.paradoxwikis.com/images/thumb/8/86/DLC_Man_the_Guns.png/22px-DLC_Man_the_Guns.png)](/Man_the_Guns "Man the Guns")[Man the Guns](/Man_the_Guns "Man the Guns"), battlecruisers are built with "Heavy Ship Hulls" and "Battlecruiser armor". Make the cheapest battlecruisers you can and build 6 at the same time ([![Flag of United Kingdom](https://hoi4.paradoxwikis.com/images/thumb/2/29/United_Kingdom.png/24px-United_Kingdom.png)](/United_Kingdom "United Kingdom") [United Kingdom](/United_Kingdom "United Kingdom") start with 3) with all your dockyards assigned, build more dockyards to speed up construction.',
    game: 'hoi4',
  },
  {
    id: 'hoi4_ach_81',
    name: 'William Wallis',
    description:
      'As the United Kingdom, put Edward VIII in power, enforce an American monarchy, and have both it and Scotland as subjects.',
    icon: 'https://hoi4.paradoxwikis.com/images/9/9e/William_Wallis.png',
    dlc: '',
    version: '1.6',
    difficulty: 'M',
    startingConditions:
      '[![Yes](https://hoi4.paradoxwikis.com/images/thumb/7/77/Yes.png/22px-Yes.png)](/File:Yes.png "Yes") Playing as [![Flag of United Kingdom](https://hoi4.paradoxwikis.com/images/thumb/2/29/United_Kingdom.png/24px-United_Kingdom.png)](/United_Kingdom "United Kingdom") [United Kingdom](/United_Kingdom "United Kingdom")',
    completionRequirements:
      '*   [![Yes](https://hoi4.paradoxwikis.com/images/thumb/7/77/Yes.png/22px-Yes.png)](/File:Yes.png "Yes") Has completed focus [![The King\'s Party](https://hoi4.paradoxwikis.com/images/thumb/e/ef/Focus_eng_the_kings_party.png/22px-Focus_eng_the_kings_party.png)](/British_national_focus_tree#The_King\'s_Party "The King\'s Party")[The King\'s Party](/British_national_focus_tree#The_King\'s_Party "British national focus tree")\n*   [![Puppet](https://hoi4.paradoxwikis.com/images/thumb/a/a7/Autonomy_puppet_icon.png/22px-Autonomy_puppet_icon.png)](/Puppet#Autonomy_levels "Puppet") [![Flag of Scotland](https://hoi4.paradoxwikis.com/images/thumb/2/27/Scotland.png/24px-Scotland.png)](/Scotland "Scotland") [Scotland](/Scotland "Scotland") is a subject of The [![Flag of United Kingdom](https://hoi4.paradoxwikis.com/images/thumb/2/29/United_Kingdom.png/24px-United_Kingdom.png)](/United_Kingdom "United Kingdom") [United Kingdom](/United_Kingdom "United Kingdom")\n*   [![Puppet](https://hoi4.paradoxwikis.com/images/thumb/a/a7/Autonomy_puppet_icon.png/22px-Autonomy_puppet_icon.png)](/Puppet#Autonomy_levels "Puppet") The [![Flag of United States](https://hoi4.paradoxwikis.com/images/thumb/3/32/United_States.png/24px-United_States.png)](/United_States "United States") [United States](/United_States "United States") is a subject of The [![Flag of United Kingdom](https://hoi4.paradoxwikis.com/images/thumb/2/29/United_Kingdom.png/24px-United_Kingdom.png)](/United_Kingdom "United Kingdom") [United Kingdom](/United_Kingdom "United Kingdom")\n*   [![Yes](https://hoi4.paradoxwikis.com/images/thumb/7/77/Yes.png/22px-Yes.png)](/File:Yes.png "Yes") Installed an American monarchy',
    notes: '*For detailed strategies, see [William Wallis](/William_Wallis "William Wallis")*',
    game: 'hoi4',
  },
  {
    id: 'hoi4_ach_82',
    name: 'Crush the Dream',
    description: 'As a Communist United Kingdom, crush the American Dream by puppeting the U.S.A.',
    icon: 'https://hoi4.paradoxwikis.com/images/0/0a/Crush_the_Dream.png',
    dlc: '',
    version: '1.6',
    difficulty: 'M',
    startingConditions:
      '[![Yes](https://hoi4.paradoxwikis.com/images/thumb/7/77/Yes.png/22px-Yes.png)](/File:Yes.png "Yes") Playing as [![Flag of United Kingdom](https://hoi4.paradoxwikis.com/images/thumb/2/29/United_Kingdom.png/24px-United_Kingdom.png)](/United_Kingdom "United Kingdom") [United Kingdom](/United_Kingdom "United Kingdom")',
    completionRequirements:
      '*   [![Yes](https://hoi4.paradoxwikis.com/images/thumb/7/77/Yes.png/22px-Yes.png)](/File:Yes.png "Yes") Ruling party is [![{{{1}}}](https://hoi4.paradoxwikis.com/images/thumb/e/e9/Communism.png/22px-Communism.png)](/Ideology#Communism "{{{1}}}")[Communist](/Ideology#Communism "Ideology")\n*   [![Yes](https://hoi4.paradoxwikis.com/images/thumb/7/77/Yes.png/22px-Yes.png)](/File:Yes.png "Yes") Has completed focus [![Crush the Dream](https://hoi4.paradoxwikis.com/images/thumb/6/6d/Focus_eng_crush_the_dream.png/22px-Focus_eng_crush_the_dream.png)](/British_national_focus_tree#Crush_the_Dream "Crush the Dream")[Crush the Dream](/British_national_focus_tree#Crush_the_Dream "British national focus tree")\n*   [![Puppet](https://hoi4.paradoxwikis.com/images/thumb/a/a7/Autonomy_puppet_icon.png/22px-Autonomy_puppet_icon.png)](/Puppet#Autonomy_levels "Puppet") The [![Flag of United States](https://hoi4.paradoxwikis.com/images/thumb/3/32/United_States.png/24px-United_States.png)](/United_States "United States") [United States](/United_States "United States") is a subject of the [![Flag of United Kingdom](https://hoi4.paradoxwikis.com/images/thumb/2/29/United_Kingdom.png/24px-United_Kingdom.png)](/United_Kingdom "United Kingdom") [United Kingdom](/United_Kingdom "United Kingdom")',
    notes: '*For detailed strategies, see [Crush the Dream](/Crush_the_Dream "Crush the Dream")*',
    game: 'hoi4',
  },
  {
    id: 'hoi4_ach_83',
    name: 'Treading the Narrow Path',
    description:
      'As the Netherlands, do not cave to the Germans, continue the Zuiderzee works, and do not lose control of any of your continental European states until 1945.',
    icon: 'https://hoi4.paradoxwikis.com/images/5/57/Treading_the_Narrow_Path.png',
    dlc: '',
    version: '1.6',
    difficulty: 'H',
    startingConditions:
      '[![Yes](https://hoi4.paradoxwikis.com/images/thumb/7/77/Yes.png/22px-Yes.png)](/File:Yes.png "Yes") Playing as [![Flag of Netherlands](https://hoi4.paradoxwikis.com/images/thumb/3/32/Netherlands.png/24px-Netherlands.png)](/Netherlands "Netherlands") [Netherlands](/Netherlands "Netherlands")',
    completionRequirements:
      '*   [![No](https://hoi4.paradoxwikis.com/images/thumb/0/04/No.png/22px-No.png)](/File:No.png "No") Has completed focus [![Cave to the Germans](https://hoi4.paradoxwikis.com/images/thumb/e/e5/Goal_generic_trade.png/22px-Goal_generic_trade.png)](/Dutch_national_focus_tree#Cave_to_the_Germans "Cave to the Germans")[Cave to the Germans](/Dutch_national_focus_tree#Cave_to_the_Germans "Dutch national focus tree")\n*   [![Yes](https://hoi4.paradoxwikis.com/images/thumb/7/77/Yes.png/22px-Yes.png)](/File:Yes.png "Yes") Has completed focus [![Continue the Zuiderzee Works](https://hoi4.paradoxwikis.com/images/thumb/e/ee/Focus_hol_the_zuiderzee_works.png/22px-Focus_hol_the_zuiderzee_works.png)](/Dutch_national_focus_tree#Continue_the_Zuiderzee_Works "Continue the Zuiderzee Works")[Continue the Zuiderzee Works](/Dutch_national_focus_tree#Continue_the_Zuiderzee_Works "Dutch national focus tree")\n*   [![No](https://hoi4.paradoxwikis.com/images/thumb/0/04/No.png/22px-No.png)](/File:No.png "No") Lost one of your starting states\n*   [![Time](https://hoi4.paradoxwikis.com/images/thumb/0/08/Time.png/22px-Time.png)](/File:Time.png "Time") After 1st Jan, 1945',
    notes:
      '**Note:** Losing control of a state means losing control of a majority of its victory points. It is possible to lose a few provinces without invalidating the achievement.\n\n*For detailed strategies, see [Treading the Narrow Path](/Treading_the_Narrow_Path "Treading the Narrow Path")*',
    game: 'hoi4',
  },
  {
    id: 'hoi4_ach_84',
    name: 'Putting the Raid on the Medway to Shame',
    description:
      'As the Netherlands, ensure the United Kingdom has no capital ships (carriers, battleships, battlecruisers, or heavy cruisers).',
    icon: 'https://hoi4.paradoxwikis.com/images/b/bf/Putting_the_Raid_on_the_Medway_to_Shame.png',
    dlc: '',
    version: '1.6',
    difficulty: 'H',
    startingConditions:
      '[![Yes](https://hoi4.paradoxwikis.com/images/thumb/7/77/Yes.png/22px-Yes.png)](/File:Yes.png "Yes") Playing as [![Flag of Netherlands](https://hoi4.paradoxwikis.com/images/thumb/3/32/Netherlands.png/24px-Netherlands.png)](/Netherlands "Netherlands") [Netherlands](/Netherlands "Netherlands")',
    completionRequirements:
      '[![Generic mio department icon ship capital ship.png](https://hoi4.paradoxwikis.com/images/thumb/6/60/Generic_mio_department_icon_ship_capital_ship.png/22px-Generic_mio_department_icon_ship_capital_ship.png)](/File:Generic_mio_department_icon_ship_capital_ship.png) The [![Flag of United Kingdom](https://hoi4.paradoxwikis.com/images/thumb/2/29/United_Kingdom.png/24px-United_Kingdom.png)](/United_Kingdom "United Kingdom") [United Kingdom](/United_Kingdom "United Kingdom") has no capital ships',
    notes:
      '*For detailed strategies, see [Putting the Raid on the Medway to Shame](/Putting_the_Raid_on_the_Medway_to_Shame "Putting the Raid on the Medway to Shame")*',
    game: 'hoi4',
  },
  {
    id: 'hoi4_ach_85',
    name: 'Bevrijding',
    description:
      'As the Netherlands, liberate the continental Netherlands after relocating the government to the East Indies.',
    icon: 'https://hoi4.paradoxwikis.com/images/c/c8/Bevrijding.png',
    dlc: '',
    version: '1.6',
    difficulty: 'E',
    startingConditions:
      '[![Yes](https://hoi4.paradoxwikis.com/images/thumb/7/77/Yes.png/22px-Yes.png)](/File:Yes.png "Yes") Playing as [![Flag of Netherlands](https://hoi4.paradoxwikis.com/images/thumb/3/32/Netherlands.png/24px-Netherlands.png)](/Netherlands "Netherlands") [Netherlands](/Netherlands "Netherlands")',
    completionRequirements:
      '*   [![Yes](https://hoi4.paradoxwikis.com/images/thumb/7/77/Yes.png/22px-Yes.png)](/File:Yes.png "Yes") Ruling party is [![{{{1}}}](https://hoi4.paradoxwikis.com/images/thumb/e/e9/Democracy.png/22px-Democracy.png)](/Ideology#Democracy "{{{1}}}")[Democratic](/Ideology#Democracy "Ideology")\n*   [![Yes](https://hoi4.paradoxwikis.com/images/thumb/7/77/Yes.png/22px-Yes.png)](/File:Yes.png "Yes") Has completed focus [![Liberation](https://hoi4.paradoxwikis.com/images/thumb/a/a7/Focus_hol_liberation.png/22px-Focus_hol_liberation.png)](/Dutch_national_focus_tree#Liberation "Liberation")[Liberation](/Dutch_national_focus_tree#Liberation "Dutch national focus tree")',
    notes:
      'Simply play as [![Flag of Netherlands](https://hoi4.paradoxwikis.com/images/thumb/3/32/Netherlands.png/24px-Netherlands.png)](/Netherlands "Netherlands") [Netherlands](/Netherlands "Netherlands") on Historical, and go down the [![Continue the War in Batavia](https://hoi4.paradoxwikis.com/images/thumb/0/09/Focus_hol_continue_the_war_in_batavia.png/22px-Focus_hol_continue_the_war_in_batavia.png)](/Dutch_national_focus_tree#Continue_the_War_in_Batavia "Continue the War in Batavia")[Continue the War in Batavia](/Dutch_national_focus_tree#Continue_the_War_in_Batavia "Dutch national focus tree") branch. There is no point in trying to defend your European lands (as [![Continue the War in Batavia](https://hoi4.paradoxwikis.com/images/thumb/0/09/Focus_hol_continue_the_war_in_batavia.png/22px-Focus_hol_continue_the_war_in_batavia.png)](/Dutch_national_focus_tree#Continue_the_War_in_Batavia "Continue the War in Batavia")[Continue the War in Batavia](/Dutch_national_focus_tree#Continue_the_War_in_Batavia "Dutch national focus tree") requires you to have capitulated), so build up your Asian possessions. Once [![Flag of Germany](https://hoi4.paradoxwikis.com/images/thumb/e/e9/German_Reich.png/24px-German_Reich.png)](/Germany "Germany") [Germany](/Germany "Germany") is defeated, you will have control of your homeland back, and you can complete [![Liberation](https://hoi4.paradoxwikis.com/images/thumb/a/a7/Focus_hol_liberation.png/22px-Focus_hol_liberation.png)](/Dutch_national_focus_tree#Liberation "Liberation")[Liberation](/Dutch_national_focus_tree#Liberation "Dutch national focus tree") and earn the achievement.  \n**Note:** You will need to have removed the "Shell-shocked Spectator of the Great War" spirit, so make sure you complete [![War on Pacifism](https://hoi4.paradoxwikis.com/images/thumb/b/b0/Focus_hol_war_on_pacifism.png/22px-Focus_hol_war_on_pacifism.png)](/Dutch_national_focus_tree#War_on_Pacifism "War on Pacifism")[War on Pacifism](/Dutch_national_focus_tree#War_on_Pacifism "Dutch national focus tree") as soon as possible.',
    game: 'hoi4',
  },
  {
    id: 'hoi4_ach_86',
    name: 'Mi Casa es tu Casa',
    description: 'As Mexico, host a government-in-exile.',
    icon: 'https://hoi4.paradoxwikis.com/images/a/aa/Mi_Casa_es_tu_Casa.png',
    dlc: '',
    version: '1.6',
    difficulty: 'E',
    startingConditions:
      '[![Yes](https://hoi4.paradoxwikis.com/images/thumb/7/77/Yes.png/22px-Yes.png)](/File:Yes.png "Yes") Playing as [![Flag of Mexico](https://hoi4.paradoxwikis.com/images/thumb/0/0a/Mexico.png/24px-Mexico.png)](/Mexico "Mexico") [Mexico](/Mexico "Mexico")',
    completionRequirements:
      '[![Yes](https://hoi4.paradoxwikis.com/images/thumb/7/77/Yes.png/22px-Yes.png)](/File:Yes.png "Yes") Any country is exiled in [![Flag of Mexico](https://hoi4.paradoxwikis.com/images/thumb/0/0a/Mexico.png/24px-Mexico.png)](/Mexico "Mexico") [Mexico](/Mexico "Mexico")',
    notes:
      'Complete the focus [![Exile Calles](https://hoi4.paradoxwikis.com/images/thumb/9/90/Focus_mex_exile_calles.png/22px-Focus_mex_exile_calles.png)](/Mexican_national_focus_tree#Exile_Calles "Exile Calles")[Exile Calles](/Mexican_national_focus_tree#Exile_Calles "Mexican national focus tree") and hire the democratic advisor. Take [![Institutional Revolution](https://hoi4.paradoxwikis.com/images/thumb/3/35/Goal_generic_support_democracy.png/22px-Goal_generic_support_democracy.png)](/Mexican_national_focus_tree#Institutional_Revolution "Institutional Revolution")[Institutional Revolution](/Mexican_national_focus_tree#Institutional_Revolution "Mexican national focus tree") when possible. Keep the church as weak as possible and head for [![Hispanic Alliance](https://hoi4.paradoxwikis.com/images/thumb/0/0a/Goal_generic_alliance.png/22px-Goal_generic_alliance.png)](/Mexican_national_focus_tree#Hispanic_Alliance "Hispanic Alliance")[Hispanic Alliance](/Mexican_national_focus_tree#Hispanic_Alliance "Mexican national focus tree"). Guarantee [![Flag of Finland](https://hoi4.paradoxwikis.com/images/thumb/c/c4/Finland.png/24px-Finland.png)](/Finland "Finland") [Finland](/Finland "Finland") and join their war against the [![Flag of Soviet Union](https://hoi4.paradoxwikis.com/images/thumb/6/67/Soviet_Union.png/24px-Soviet_Union.png)](/Soviet_Union "Soviet Union") [Soviet Union](/Soviet_Union "Soviet Union"). Once they join your faction and capitulate, you will host them as a government-in-exile.',
    game: 'hoi4',
  },
  {
    id: 'hoi4_ach_87',
    name: 'The New Home of the Revolution',
    description: 'As Mexico, put Trotsky in power and puppet the Soviet Union',
    icon: 'https://hoi4.paradoxwikis.com/images/8/83/The_New_Home_of_the_Revolution.png',
    dlc: '',
    version: '1.6',
    difficulty: 'H',
    startingConditions:
      '[![Yes](https://hoi4.paradoxwikis.com/images/thumb/7/77/Yes.png/22px-Yes.png)](/File:Yes.png "Yes") Playing as [![Flag of Mexico](https://hoi4.paradoxwikis.com/images/thumb/0/0a/Mexico.png/24px-Mexico.png)](/Mexico "Mexico") [Mexico](/Mexico "Mexico")',
    completionRequirements:
      '*   [![Yes](https://hoi4.paradoxwikis.com/images/thumb/7/77/Yes.png/22px-Yes.png)](/File:Yes.png "Yes") **Lev Trotsky** is the current country leader\n*   [![Puppet](https://hoi4.paradoxwikis.com/images/thumb/a/a7/Autonomy_puppet_icon.png/22px-Autonomy_puppet_icon.png)](/Puppet#Autonomy_levels "Puppet") The [![Flag of Soviet Union](https://hoi4.paradoxwikis.com/images/thumb/6/67/Soviet_Union.png/24px-Soviet_Union.png)](/Soviet_Union "Soviet Union") [Soviet Union](/Soviet_Union "Soviet Union") is a subject of [![Flag of Mexico](https://hoi4.paradoxwikis.com/images/thumb/0/0a/Mexico.png/24px-Mexico.png)](/Mexico "Mexico") [Mexico](/Mexico "Mexico")',
    notes:
      '*For detailed strategies, see [The New Home of the Revolution](/The_New_Home_of_the_Revolution "The New Home of the Revolution")*',
    game: 'hoi4',
  },
  {
    id: 'hoi4_ach_88',
    name: 'Assuming Direct Control',
    description: 'Starting as a minor power, assume faction leadership of the Allies, the Axis, or the Comintern.',
    icon: 'https://hoi4.paradoxwikis.com/images/d/d1/Assuming_Direct_Control.png',
    dlc: '',
    version: '1.6',
    difficulty: 'M',
    startingConditions:
      '[![No](https://hoi4.paradoxwikis.com/images/thumb/0/04/No.png/22px-No.png)](/File:No.png "No") Playing as *either*:\n\n*   *   [![Flag of United States](https://hoi4.paradoxwikis.com/images/thumb/3/32/United_States.png/24px-United_States.png)](/United_States "United States") [United States](/United_States "United States")\n    *   [![Flag of United Kingdom](https://hoi4.paradoxwikis.com/images/thumb/2/29/United_Kingdom.png/24px-United_Kingdom.png)](/United_Kingdom "United Kingdom") [United Kingdom](/United_Kingdom "United Kingdom")\n    *   [![Flag of Germany](https://hoi4.paradoxwikis.com/images/thumb/e/e9/German_Reich.png/24px-German_Reich.png)](/Germany "Germany") [Germany](/Germany "Germany")\n    *   [![Flag of Italy](https://hoi4.paradoxwikis.com/images/thumb/2/2a/Italy.png/24px-Italy.png)](/Italy "Italy") [Italy](/Italy "Italy")\n    *   [![Flag of France](https://hoi4.paradoxwikis.com/images/thumb/d/de/France.png/24px-France.png)](/France "France") [France](/France "France")\n    *   [![Flag of Soviet Union](https://hoi4.paradoxwikis.com/images/thumb/6/67/Soviet_Union.png/24px-Soviet_Union.png)](/Soviet_Union "Soviet Union") [Soviet Union](/Soviet_Union "Soviet Union")\n    *   [![Flag of Japan](https://hoi4.paradoxwikis.com/images/thumb/f/fc/Japan.png/24px-Japan.png)](/Japan "Japan") [Japan](/Japan "Japan")\n    *   [![Flag of China](https://hoi4.paradoxwikis.com/images/thumb/8/81/China.png/24px-China.png)](/China "China") [China](/China "China")',
    completionRequirements:
      '*   [![Relation join faction.png](https://hoi4.paradoxwikis.com/images/thumb/9/91/Relation_join_faction.png/22px-Relation_join_faction.png)](/File:Relation_join_faction.png) Has assumed faction leadership from the [![Flag of United Kingdom](https://hoi4.paradoxwikis.com/images/thumb/2/29/United_Kingdom.png/24px-United_Kingdom.png)](/United_Kingdom "United Kingdom") [United Kingdom](/United_Kingdom "United Kingdom"), [![Flag of Germany](https://hoi4.paradoxwikis.com/images/thumb/e/e9/German_Reich.png/24px-German_Reich.png)](/Germany "Germany") [Germany](/Germany "Germany") or the [![Flag of Soviet Union](https://hoi4.paradoxwikis.com/images/thumb/6/67/Soviet_Union.png/24px-Soviet_Union.png)](/Soviet_Union "Soviet Union") [Soviet Union](/Soviet_Union "Soviet Union")\n*   [![Relation join faction.png](https://hoi4.paradoxwikis.com/images/thumb/9/91/Relation_join_faction.png/22px-Relation_join_faction.png)](/File:Relation_join_faction.png) Is Faction leader',
    notes:
      'Play as [![Flag of Romania](https://hoi4.paradoxwikis.com/images/thumb/8/8f/Romania.png/24px-Romania.png)](/Romania "Romania") [Romania](/Romania "Romania") and go down the [Balkan Dominance](/Romanian_national_focus_tree#Balkan_Dominance_Branch "Romanian national focus tree") branch. Increase your power as much as possible, by focusing on army, industry and by taking out [![Flag of Hungary](https://hoi4.paradoxwikis.com/images/thumb/6/6a/Hungary.png/24px-Hungary.png)](/Hungary "Hungary") [Hungary](/Hungary "Hungary") and [![Flag of Bulgaria](https://hoi4.paradoxwikis.com/images/thumb/f/f4/Bulgaria.png/24px-Bulgaria.png)](/Bulgaria "Bulgaria") [Bulgaria](/Bulgaria "Bulgaria"). Join the Axis, but **never join any of their wars**. When they are defeated, you will become the leader, earning you the achievement.',
    game: 'hoi4',
  },
  {
    id: 'hoi4_ach_89',
    name: 'Vive la Jeune Ecole',
    description:
      'As France, have at least 150 Destroyers and research the maximum torpedo launcher technology, before 1945.',
    icon: 'https://hoi4.paradoxwikis.com/images/f/f8/Vive_la_Jeune_Ecole.png',
    dlc: '',
    version: '1.6',
    difficulty: 'E',
    startingConditions:
      '[![Yes](https://hoi4.paradoxwikis.com/images/thumb/7/77/Yes.png/22px-Yes.png)](/File:Yes.png "Yes") Playing as [![Flag of France](https://hoi4.paradoxwikis.com/images/thumb/d/de/France.png/24px-France.png)](/France "France") [France](/France "France")',
    completionRequirements:
      '*   [![Time](https://hoi4.paradoxwikis.com/images/thumb/0/08/Time.png/22px-Time.png)](/File:Time.png "Time") After Jan 1st, 1945\n*   [![Destroyer.png](https://hoi4.paradoxwikis.com/images/thumb/3/3a/Destroyer.png/22px-Destroyer.png)](/File:Destroyer.png) Has at least **150** Destroyers\n*   [![Research icon.png](https://hoi4.paradoxwikis.com/images/thumb/4/4b/Research_icon.png/22px-Research_icon.png)](/File:Research_icon.png) Has researched  [![Modern Ship Torpedo Launcher](https://hoi4.paradoxwikis.com/images/thumb/8/88/Modern_torpedo_launcher.png/22px-Modern_torpedo_launcher.png)](/Naval_support_technology#Ship-based_torpedo_tubes "Modern Ship Torpedo Launcher") [Modern Ship Torpedo Launcher](/Naval_support_technology#Ship-based_torpedo_tubes "Naval support technology")',
    notes:
      'Turn fascist by going down the [![National Regeneration](https://hoi4.paradoxwikis.com/images/thumb/5/55/Goal_generic_political_pressure.png/22px-Goal_generic_political_pressure.png)](/French_national_focus_tree#National_Regeneration "National Regeneration")[National Regeneration](/French_national_focus_tree#National_Regeneration "French national focus tree") path. Join the Axis \'*but not any war*, and rush research towards  [![Modern Ship Torpedo Launcher](https://hoi4.paradoxwikis.com/images/thumb/8/88/Modern_torpedo_launcher.png/22px-Modern_torpedo_launcher.png)](/Naval_support_technology#Ship-based_torpedo_tubes "Modern Ship Torpedo Launcher") [Modern Ship Torpedo Launcher](/Naval_support_technology#Ship-based_torpedo_tubes "Naval support technology"). Make sure to also build as many naval dockyards as possible. Take focuses that help with research, construction speed and dockyard output. Assign all available dockyards to producing destroyers.',
    game: 'hoi4',
  },
  {
    id: 'hoi4_ach_90',
    name: '30 Minutes of Hel',
    description:
      'As Poland in the 1939 "Blitzkrieg" scenario start, inflict over 1,800,000 casualties to Germany to beat the 2018 PDXCON HOI4 challenge. Extra bragging rights if you do it in 30 minutes or less!',
    icon: 'https://hoi4.paradoxwikis.com/images/8/82/30_Minutes_of_Hel.png',
    dlc: '',
    version: '1.9',
    difficulty: 'I',
    startingConditions:
      '*   [![Yes](https://hoi4.paradoxwikis.com/images/thumb/7/77/Yes.png/22px-Yes.png)](/File:Yes.png "Yes") Playing as [![Flag of Poland](https://hoi4.paradoxwikis.com/images/thumb/9/99/Poland.png/24px-Poland.png)](/Poland "Poland") [Poland](/Poland "Poland")\n*   [![Time](https://hoi4.paradoxwikis.com/images/thumb/0/08/Time.png/22px-Time.png)](/File:Time.png "Time") Start date is Aug 3rd, 1939',
    completionRequirements:
      '[![Yes](https://hoi4.paradoxwikis.com/images/thumb/7/77/Yes.png/22px-Yes.png)](/File:Yes.png "Yes") Has inflicted more than **1.80M** Casualties on [![Flag of Germany](https://hoi4.paradoxwikis.com/images/thumb/e/e9/German_Reich.png/24px-German_Reich.png)](/Germany "Germany") [Germany](/Germany "Germany")',
    notes: '*For detailed strategies, see [30 Minutes of Hel](/30_Minutes_of_Hel "30 Minutes of Hel")*',
    game: 'hoi4',
  },
  {
    id: 'hoi4_ach_91',
    name: 'Pride and Extreme Prejudice',
    description: 'Sink the British Pride of the Fleet.',
    icon: 'https://hoi4.paradoxwikis.com/images/0/05/Pride_and_Extreme_Prejudice.png',
    dlc: '',
    version: '1.6',
    difficulty: 'M',
    startingConditions:
      '[![No](https://hoi4.paradoxwikis.com/images/thumb/0/04/No.png/22px-No.png)](/File:No.png "No") Playing as [![Flag of United Kingdom](https://hoi4.paradoxwikis.com/images/thumb/2/29/United_Kingdom.png/24px-United_Kingdom.png)](/United_Kingdom "United Kingdom") [United Kingdom](/United_Kingdom "United Kingdom")',
    completionRequirements:
      '[![Yes](https://hoi4.paradoxwikis.com/images/thumb/7/77/Yes.png/22px-Yes.png)](/File:Yes.png "Yes") Sank the British Pride of the Fleet',
    notes:
      'It can be done quickly as [![Flag of Japan](https://hoi4.paradoxwikis.com/images/thumb/f/fc/Japan.png/24px-Japan.png)](/Japan "Japan") [Japan](/Japan "Japan"). The Japanese fleet is immediately capable of sinking not just the HMS Hood, but the entire Royal Navy if played properly. Choose [![Purge the Kodoha Faction](https://hoi4.paradoxwikis.com/images/thumb/a/af/Goal_generic_major_war.png/22px-Goal_generic_major_war.png)](/Japanese_national_focus_tree#Purge_the_Kodoha_Faction "Purge the Kodoha Faction")[Purge the Kodoha Faction](/Japanese_national_focus_tree#Purge_the_Kodoha_Faction "Japanese national focus tree") and justify on the [![Flag of United Kingdom](https://hoi4.paradoxwikis.com/images/thumb/2/29/United_Kingdom.png/24px-United_Kingdom.png)](/United_Kingdom "United Kingdom") [UK](/United_Kingdom "United Kingdom") (or [![Flag of British Malaya](https://hoi4.paradoxwikis.com/images/thumb/f/f7/British_Malaya.png/24px-British_Malaya.png)](/British_Malaya "British Malaya") [British Malaya](/British_Malaya "British Malaya")) as soon as possible. Ask [![Flag of Germany](https://hoi4.paradoxwikis.com/images/thumb/e/e9/German_Reich.png/24px-German_Reich.png)](/Germany "Germany") [Germany](/Germany "Germany") for docking rights, and move your entire fleet to their port nearest to the UK. Use the bulk of your fleet as a strike force, with three groups of destroyers patrolling the naval areas around the UK. If possible, you can also use naval bombers as well for added firepower. When the justification has finished, declare war on them. If Germany invites you to the Axis you should accept in order to use their airfields. From there just keep beating the Brits and building new ships and bombers (importing Oil for fuel if needed) until your fleet sinks the Hood and unlocks the achievement.',
    game: 'hoi4',
  },
  {
    id: 'hoi4_ach_92',
    name: 'Do You Mined?',
    description: 'Lay at least 1,000 mines on the coastline of an enemy nation.',
    icon: 'https://hoi4.paradoxwikis.com/images/b/be/Do_You_Mined%3F.png',
    dlc: '',
    version: '1.6',
    difficulty: 'VE',
    startingConditions: '',
    completionRequirements:
      '[![Generic mio trait icon mines.png](https://hoi4.paradoxwikis.com/images/thumb/7/73/Generic_mio_trait_icon_mines.png/22px-Generic_mio_trait_icon_mines.png)](/File:Generic_mio_trait_icon_mines.png) Any country at war with player has more than 999 mines on their coastline',
    notes:
      'As [![Flag of Italy](https://hoi4.paradoxwikis.com/images/thumb/2/2a/Italy.png/24px-Italy.png)](/Italy "Italy") [Italy](/Italy "Italy"), remove your divisions from **Eritrea** *(550)* or **Somaliland** *(559)*(keeping your ports for maximum efficiency). Lay mines on the Ethiopian shore with your starting navy until you reach 1000 mines. However, if you lose all your territory you will white peace with [![Flag of Ethiopia](https://hoi4.paradoxwikis.com/images/thumb/0/06/Ethiopia.png/24px-Ethiopia.png)](/Ethiopia "Ethiopia") [Ethiopia](/Ethiopia "Ethiopia").',
    game: 'hoi4',
  },
  {
    id: 'hoi4_ach_93',
    name: 'BFFs',
    description: 'As Portugal, join the same faction as Great Britain.',
    icon: 'https://hoi4.paradoxwikis.com/images/2/2f/BFFs.png',
    dlc: '',
    version: '1.9',
    difficulty: 'VE',
    startingConditions:
      '[![Yes](https://hoi4.paradoxwikis.com/images/thumb/7/77/Yes.png/22px-Yes.png)](/File:Yes.png "Yes") Playing as [![Flag of Portugal](https://hoi4.paradoxwikis.com/images/thumb/1/12/Portugal.png/24px-Portugal.png)](/Portugal "Portugal") [Portugal](/Portugal "Portugal")',
    completionRequirements:
      '[![Relation join faction.png](https://hoi4.paradoxwikis.com/images/thumb/9/91/Relation_join_faction.png/22px-Relation_join_faction.png)](/File:Relation_join_faction.png) In faction with [![Flag of United Kingdom](https://hoi4.paradoxwikis.com/images/thumb/2/29/United_Kingdom.png/24px-United_Kingdom.png)](/United_Kingdom "United Kingdom") [United Kingdom](/United_Kingdom "United Kingdom")',
    notes:
      'Just go democratic and wait for world tension to rise. If [![La Résistance](https://hoi4.paradoxwikis.com/images/thumb/2/2b/DLC_La_Resistance.png/22px-DLC_La_Resistance.png)](/La_R%C3%A9sistance "La Résistance")[La Résistance](/La_R%C3%A9sistance "La Résistance") is enabled, you can rush towards [![Join the Allies](https://hoi4.paradoxwikis.com/images/thumb/8/86/Focus_chi_british_cooperation.png/22px-Focus_chi_british_cooperation.png)](/Portuguese_national_focus_tree#Join_the_Allies "Join the Allies")[Join the Allies](/Portuguese_national_focus_tree#Join_the_Allies "Portuguese national focus tree") as well.',
    game: 'hoi4',
  },
  {
    id: 'hoi4_ach_94',
    name: 'Go Ahead, Macau My Day',
    description: 'As Portugal, create a collaboration government in Macau and have it own all Chinese states.',
    icon: 'https://hoi4.paradoxwikis.com/images/5/54/Go_Ahead%2C_Macau_My_Day.png',
    dlc: '',
    version: '1.9',
    difficulty: 'VH',
    startingConditions:
      '[![Yes](https://hoi4.paradoxwikis.com/images/thumb/7/77/Yes.png/22px-Yes.png)](/File:Yes.png "Yes") Playing as [![Flag of Portugal](https://hoi4.paradoxwikis.com/images/thumb/1/12/Portugal.png/24px-Portugal.png)](/Portugal "Portugal") [Portugal](/Portugal "Portugal")',
    completionRequirements:
      '[![Yes](https://hoi4.paradoxwikis.com/images/thumb/7/77/Yes.png/22px-Yes.png)](/File:Yes.png "Yes") Any of the following countries:\n\nExpand\n\n*   *   [![Flag of China](https://hoi4.paradoxwikis.com/images/thumb/8/81/China.png/24px-China.png)](/China "China") [China](/China "China")\n    *   [![Flag of Communist China](https://hoi4.paradoxwikis.com/images/thumb/1/1a/Communist_China.png/24px-Communist_China.png)](/Communist_China "Communist China") [Communist China](/Communist_China "Communist China")\n    *   [![Flag of Guangxi Clique](https://hoi4.paradoxwikis.com/images/thumb/6/68/Guangxi_Clique.png/24px-Guangxi_Clique.png)](/Guangxi_Clique "Guangxi Clique") [Guangxi Clique](/Guangxi_Clique "Guangxi Clique")\n    *   [![Flag of Yunnan](https://hoi4.paradoxwikis.com/images/thumb/3/3b/Yunnan.png/24px-Yunnan.png)](/Yunnan "Yunnan") [Yunnan](/Yunnan "Yunnan")\n    *   [![Flag of Shanxi](https://hoi4.paradoxwikis.com/images/thumb/d/d0/Shanxi.png/24px-Shanxi.png)](/Shanxi "Shanxi") [Shanxi](/Shanxi "Shanxi")\n    *   [![Flag of Xibei San Ma](https://hoi4.paradoxwikis.com/images/thumb/6/6e/Xibei_San_Ma.png/24px-Xibei_San_Ma.png)](/Xibei_San_Ma "Xibei San Ma") [Xibei San Ma](/Xibei_San_Ma "Xibei San Ma")\n    *   [![Flag of Sinkiang](https://hoi4.paradoxwikis.com/images/thumb/b/b8/Sinkiang.png/24px-Sinkiang.png)](/Sinkiang "Sinkiang") [Sinkiang](/Sinkiang "Sinkiang")\n\n*   [![Puppet](https://hoi4.paradoxwikis.com/images/thumb/a/a7/Autonomy_puppet_icon.png/22px-Autonomy_puppet_icon.png)](/Puppet#Autonomy_levels "Puppet") Is a subject of [![Flag of Portugal](https://hoi4.paradoxwikis.com/images/thumb/1/12/Portugal.png/24px-Portugal.png)](/Portugal "Portugal") [Portugal](/Portugal "Portugal")\n*   [![Collaboration Government](https://hoi4.paradoxwikis.com/images/thumb/1/10/Collaboration_Government.png/22px-Collaboration_Government.png)](/Puppet#Collaboration_Government "Collaboration Government") Is a collaboration government\n*   [![Victory point](https://hoi4.paradoxwikis.com/images/a/aa/Victory_point_texticon.png)](/Province#Victory_points "Victory point") **Macau** *(729)* is a capital state\n*   [![Occupation.png](https://hoi4.paradoxwikis.com/images/d/dc/Occupation.png)](/File:Occupation.png) Own all core states of [![Flag of China](https://hoi4.paradoxwikis.com/images/thumb/8/81/China.png/24px-China.png)](/China "China") [China](/China "China") and [![Flag of Manchukuo](https://hoi4.paradoxwikis.com/images/thumb/1/16/Manchukuo.png/24px-Manchukuo.png)](/Manchukuo "Manchukuo") [Manchukuo](/Manchukuo "Manchukuo")',
    notes:
      '**Note:** This achievement requires **Hong Kong** *(326)* and **Guangzhouwan** *(728)* to be taken in a peace deal.\n\n*For detailed strategies, see [Go Ahead, Macau My Day](/Go_Ahead,_Macau_My_Day "Go Ahead, Macau My Day")*',
    game: 'hoi4',
  },
  {
    id: 'hoi4_ach_95',
    name: 'Play It, Sam',
    description: 'Have a spy network of at least 50% strength in Casablanca.',
    icon: 'https://hoi4.paradoxwikis.com/images/1/16/Play_It%2C_Sam.png',
    dlc: '',
    version: '1.9',
    difficulty: 'VE',
    startingConditions: '',
    completionRequirements:
      '[![Yes](https://hoi4.paradoxwikis.com/images/thumb/7/77/Yes.png/22px-Yes.png)](/File:Yes.png "Yes") Intel Network Strength in **Casablanca** *(461)* is more than **50%**',
    notes:
      'At game start, establish an agency and set your operatives on "Establish Spy Network" mission in **Casablanca** *(461)*. The achievement will trigger once the network strength is over 50%. You can do this as soon as you have recruited your first operative but the more operatives you assign to establish a network in the same region, the faster the network will be at full strength.',
    game: 'hoi4',
  },
  {
    id: 'hoi4_ach_96',
    name: 'Spies Trade',
    description: 'As India, become the spymaster for the Allies.',
    icon: 'https://hoi4.paradoxwikis.com/images/b/be/Spies_Trade.png',
    dlc: '',
    version: '1.9',
    difficulty: 'VE',
    startingConditions:
      '[![Yes](https://hoi4.paradoxwikis.com/images/thumb/7/77/Yes.png/22px-Yes.png)](/File:Yes.png "Yes") Playing as [![Flag of British Raj](https://hoi4.paradoxwikis.com/images/thumb/2/2f/British_Raj.png/24px-British_Raj.png)](/British_Raj "British Raj") [British Raj](/British_Raj "British Raj")',
    completionRequirements:
      '*   [![Yes](https://hoi4.paradoxwikis.com/images/thumb/7/77/Yes.png/22px-Yes.png)](/File:Yes.png "Yes") Is Spy Master\n*   [![Relation join faction.png](https://hoi4.paradoxwikis.com/images/thumb/9/91/Relation_join_faction.png/22px-Relation_join_faction.png)](/File:Relation_join_faction.png) In a faction with [![Flag of United Kingdom](https://hoi4.paradoxwikis.com/images/thumb/2/29/United_Kingdom.png/24px-United_Kingdom.png)](/United_Kingdom "United Kingdom") [United Kingdom](/United_Kingdom "United Kingdom")',
    notes:
      'Increase your autonomy towards [![Dominion](https://hoi4.paradoxwikis.com/images/thumb/3/3d/Dominion.png/22px-Dominion.png)](/Puppet#Autonomy_levels "Dominion")[Dominion](/Puppet#Autonomy_levels "Puppet"). Meanwhile, create an intelligence agency and upgrade it three times with any upgrade. Once you become a [![Dominion](https://hoi4.paradoxwikis.com/images/thumb/3/3d/Dominion.png/22px-Dominion.png)](/Puppet#Autonomy_levels "Dominion")[Dominion](/Puppet#Autonomy_levels "Puppet"), the option to Become Spymaster will be available next to the name and icon of your agency at the top of the window. The AI will always accept.',
    game: 'hoi4',
  },
  {
    id: 'hoi4_ach_97',
    name: 'Why Die For Danzig?',
    description: 'As Germany, turn France fascist and occupy Danzig without going to war with France.',
    icon: 'https://hoi4.paradoxwikis.com/images/9/9f/Why_Die_For_Danzig%3F.png',
    dlc: '',
    version: '1.9',
    difficulty: 'M',
    startingConditions:
      '[![Yes](https://hoi4.paradoxwikis.com/images/thumb/7/77/Yes.png/22px-Yes.png)](/File:Yes.png "Yes") Playing as [![Flag of Germany](https://hoi4.paradoxwikis.com/images/thumb/e/e9/German_Reich.png/24px-German_Reich.png)](/Germany "Germany") [Germany](/Germany "Germany")',
    completionRequirements:
      '*   [![Yes](https://hoi4.paradoxwikis.com/images/thumb/7/77/Yes.png/22px-Yes.png)](/File:Yes.png "Yes") [![Flag of France](https://hoi4.paradoxwikis.com/images/thumb/d/de/France.png/24px-France.png)](/France "France") [France](/France "France"):\n    *   Ruling party is [![{{{1}}}](https://hoi4.paradoxwikis.com/images/thumb/1/1f/Fascism.png/22px-Fascism.png)](/Ideology#Fascism "{{{1}}}")[Fascist](/Ideology#Fascism "Ideology")\n    *   Is not at war with [![Flag of Germany](https://hoi4.paradoxwikis.com/images/thumb/e/e9/German_Reich.png/24px-German_Reich.png)](/Germany "Germany") [Germany](/Germany "Germany")\n*   [![Yes](https://hoi4.paradoxwikis.com/images/thumb/7/77/Yes.png/22px-Yes.png)](/File:Yes.png "Yes") Controls **Danzig** *(85)*\n*   [![No](https://hoi4.paradoxwikis.com/images/thumb/0/04/No.png/22px-No.png)](/File:No.png "No") Has declared war on [![Flag of France](https://hoi4.paradoxwikis.com/images/thumb/d/de/France.png/24px-France.png)](/France "France") [France](/France "France")\n*   [![No](https://hoi4.paradoxwikis.com/images/thumb/0/04/No.png/22px-No.png)](/File:No.png "No") [![Flag of Germany](https://hoi4.paradoxwikis.com/images/thumb/e/e9/German_Reich.png/24px-German_Reich.png)](/Germany "Germany") [Germany](/Germany "Germany") is at war with [![Flag of France](https://hoi4.paradoxwikis.com/images/thumb/d/de/France.png/24px-France.png)](/France "France") [France](/France "France")',
    notes:
      'Boost fascism in [![Flag of France](https://hoi4.paradoxwikis.com/images/thumb/d/de/France.png/24px-France.png)](/France "France") [France](/France "France") from the start of the game, then complete [![Danzig for Slovakia](https://hoi4.paradoxwikis.com/images/thumb/5/51/Goal_generic_intelligence_exchange.png/22px-Goal_generic_intelligence_exchange.png)](/German_national_focus_tree:_industrial/_historical_branches#Danzig_for_Slovakia "Danzig for Slovakia")[Danzig for Slovakia](/German_national_focus_tree:_industrial/_historical_branches#Danzig_for_Slovakia "German national focus tree: industrial/ historical branches") to gain control of Danzig *(85)* without going to war with [![Flag of France](https://hoi4.paradoxwikis.com/images/thumb/d/de/France.png/24px-France.png)](/France "France") [France](/France "France"). If France hasn\'t flipped by the time you get Danzig *(85)*, start a fascist coup in France. As soon as the coup fires, you\'ll get the achievement.  \n**Note:** *"invalid\\_for\\_danzig\\_achievement"* flag fires when [![Flag of Germany](https://hoi4.paradoxwikis.com/images/thumb/e/e9/German_Reich.png/24px-German_Reich.png)](/Germany "Germany") [Germany](/Germany "Germany") declares war on [![Flag of France](https://hoi4.paradoxwikis.com/images/thumb/d/de/France.png/24px-France.png)](/France "France") [France](/France "France"). However, you should be able to **join** a war against them, e.g. if [![Flag of Italy](https://hoi4.paradoxwikis.com/images/thumb/2/2a/Italy.png/24px-Italy.png)](/Italy "Italy") [Italy](/Italy "Italy") declares war and asks you to join.',
    game: 'hoi4',
  },
  {
    id: 'hoi4_ach_98',
    name: 'I SEE EVERYTHING',
    description: 'Get over 90% intel in each category on a major without using code cracking.',
    icon: 'https://hoi4.paradoxwikis.com/images/4/41/I_SEE_EVERYTHING.png',
    dlc: '',
    version: '1.9',
    difficulty: 'VE',
    startingConditions: '',
    completionRequirements:
      'Any major country:\n\n*   *   [![Yes](https://hoi4.paradoxwikis.com/images/thumb/7/77/Yes.png/22px-Yes.png)](/File:Yes.png "Yes") Cipher is not fully decrypted\n    *   [![Agency upgrade economy department.png](https://hoi4.paradoxwikis.com/images/thumb/6/68/Agency_upgrade_economy_department.png/22px-Agency_upgrade_economy_department.png)](/File:Agency_upgrade_economy_department.png) Civilian intel greater than **89%**\n    *   [![Agency upgrade army department.png](https://hoi4.paradoxwikis.com/images/thumb/e/e0/Agency_upgrade_army_department.png/22px-Agency_upgrade_army_department.png)](/File:Agency_upgrade_army_department.png) Army intel greater than **89%**\n    *   [![Agency upgrade airforce department.png](https://hoi4.paradoxwikis.com/images/thumb/2/2f/Agency_upgrade_airforce_department.png/22px-Agency_upgrade_airforce_department.png)](/File:Agency_upgrade_airforce_department.png) Airforce intel greater than **89%**\n    *   [![Agency upgrade naval department.png](https://hoi4.paradoxwikis.com/images/thumb/c/c2/Agency_upgrade_naval_department.png/22px-Agency_upgrade_naval_department.png)](/File:Agency_upgrade_naval_department.png) Navy Intel greater than **89%**',
    notes:
      'In order for the achievement to fire, the decryption must not be complete or cracked, but if the player selects it and waits the 30 days, the achievement will fire.',
    game: 'hoi4',
  },
  {
    id: 'hoi4_ach_99',
    name: 'Shaken, Not Stirred',
    description: 'Successfully stage a coup in any nation using a spy with the Seducer trait.',
    icon: 'https://hoi4.paradoxwikis.com/images/0/08/Shaken%2C_Not_Stirred.png',
    dlc: '',
    version: '1.9',
    difficulty: 'VE',
    startingConditions: '',
    completionRequirements:
      '[![Yes](https://hoi4.paradoxwikis.com/images/thumb/7/77/Yes.png/22px-Yes.png)](/File:Yes.png "Yes") Started a coup in any nation using an Operative with the seducer trait',
    notes:
      'Start as any non-aligned country and get a spy with the seducer trait. [![Flag of Dutch East Indies](https://hoi4.paradoxwikis.com/images/thumb/3/32/Netherlands.png/24px-Netherlands.png)](/Dutch_East_Indies "Dutch East Indies") [Dutch East Indies](/Dutch_East_Indies "Dutch East Indies") is the easiest target as they have a high non-aligned popularity at the start and won\'t be building a spy agency until later.',
    game: 'hoi4',
  },
  {
    id: 'hoi4_ach_100',
    name: 'Listen Very Carefully, I Shall Say This...',
    description: 'Have a French and British spy work together on the same Operation.',
    icon: 'https://hoi4.paradoxwikis.com/images/3/3e/Listen_Very_Carefully%2C_I_Shall_Say_This....png',
    dlc: '',
    version: '1.9',
    difficulty: 'VE',
    startingConditions: '',
    completionRequirements:
      '[![Yes](https://hoi4.paradoxwikis.com/images/thumb/7/77/Yes.png/22px-Yes.png)](/File:Yes.png "Yes") Have British and French Operatives complete an Operation together',
    notes:
      'Check happens upon operation completion. At least 1 participating operative requires [![Flag of France](https://hoi4.paradoxwikis.com/images/thumb/d/de/France.png/24px-France.png)](/France "France") [French](/France "France"), and at least 1 participating operative requires [![Flag of UK](https://hoi4.paradoxwikis.com/images/thumb/2/29/United_Kingdom.png/24px-United_Kingdom.png)](/UK "UK") [British](/UK "UK") nationality.',
    game: 'hoi4',
  },
  {
    id: 'hoi4_ach_101',
    name: 'Man of a Thousand Faces, Every One the Same',
    description: 'Have the same spy get captured twice.',
    icon: 'https://hoi4.paradoxwikis.com/images/2/23/Man_of_a_Thousand_Faces%2C_Every_One_the_Same.png',
    dlc: '',
    version: '1.9',
    difficulty: 'VE',
    startingConditions: '',
    completionRequirements:
      '[![Yes](https://hoi4.paradoxwikis.com/images/thumb/7/77/Yes.png/22px-Yes.png)](/File:Yes.png "Yes") Have any operative get captured twice',
    notes:
      'The [![Flag of Soviet Union](https://hoi4.paradoxwikis.com/images/thumb/6/67/Soviet_Union.png/24px-Soviet_Union.png)](/Soviet_Union "Soviet Union") [Soviet Union](/Soviet_Union "Soviet Union") has the highest chance of capturing operatives, so expand your operative slots and send them all to the [![Flag of Soviet Union](https://hoi4.paradoxwikis.com/images/thumb/6/67/Soviet_Union.png/24px-Soviet_Union.png)](/Soviet_Union "Soviet Union") [Soviet Union](/Soviet_Union "Soviet Union"). After an operative gets captured, rescue them and send them to the [![Flag of Soviet Union](https://hoi4.paradoxwikis.com/images/thumb/6/67/Soviet_Union.png/24px-Soviet_Union.png)](/Soviet_Union "Soviet Union") [Soviet Union](/Soviet_Union "Soviet Union") again. Once they get captured again, the achievement will fire.',
    game: 'hoi4',
  },
  {
    id: 'hoi4_ach_102',
    name: 'Turing Complete!',
    description: 'Fully decrypt all nations in the Axis.',
    icon: 'https://hoi4.paradoxwikis.com/images/6/6f/Turing_Complete%21.png',
    dlc: '',
    version: '1.9',
    difficulty: 'VE',
    startingConditions:
      '[![Yes](https://hoi4.paradoxwikis.com/images/thumb/7/77/Yes.png/22px-Yes.png)](/File:Yes.png "Yes") Playing as [![Flag of United Kingdom](https://hoi4.paradoxwikis.com/images/thumb/2/29/United_Kingdom.png/24px-United_Kingdom.png)](/United_Kingdom "United Kingdom") [United Kingdom](/United_Kingdom "United Kingdom")',
    completionRequirements:
      '*   [![Yes](https://hoi4.paradoxwikis.com/images/thumb/7/77/Yes.png/22px-Yes.png)](/File:Yes.png "Yes") [![Flag of Germany](https://hoi4.paradoxwikis.com/images/thumb/e/e9/German_Reich.png/24px-German_Reich.png)](/Germany "Germany") [Germany](/Germany "Germany") is considered a Major Country\n*   [![Yes](https://hoi4.paradoxwikis.com/images/thumb/7/77/Yes.png/22px-Yes.png)](/File:Yes.png "Yes") Has decrypted all major countries in faction with [![Flag of Germany](https://hoi4.paradoxwikis.com/images/thumb/e/e9/German_Reich.png/24px-German_Reich.png)](/Germany "Germany") [Germany](/Germany "Germany")',
    notes:
      'At the start of the game create your spy agency and unlock all cryptology tech, you only need to decrypt [![Flag of Germany](https://hoi4.paradoxwikis.com/images/thumb/e/e9/German_Reich.png/24px-German_Reich.png)](/Germany "Germany") [Germany](/Germany "Germany") as they are the only member of the Axis.',
    game: 'hoi4',
  },
  {
    id: 'hoi4_ach_103',
    name: 'One King, Two Crowns',
    description: 'As Bourbon Spain, hold all Spanish and French core states.',
    icon: 'https://hoi4.paradoxwikis.com/images/c/c4/One_King%2C_Two_Crowns.png',
    dlc: '',
    version: '1.9',
    difficulty: 'VH',
    startingConditions:
      '[![Yes](https://hoi4.paradoxwikis.com/images/thumb/7/77/Yes.png/22px-Yes.png)](/File:Yes.png "Yes") Playing as [![Flag of Spain](https://hoi4.paradoxwikis.com/images/thumb/5/58/Spain.png/24px-Spain.png)](/Spain "Spain") [Spain](/Spain "Spain")',
    completionRequirements:
      '*   [![Yes](https://hoi4.paradoxwikis.com/images/thumb/7/77/Yes.png/22px-Yes.png)](/File:Yes.png "Yes") Is [![Flag of Carlist Spain](https://hoi4.paradoxwikis.com/images/thumb/6/64/Carlist_Spain.png/24px-Carlist_Spain.png)](/Carlist_Spain "Carlist Spain") [Carlist Spain](/Carlist_Spain "Carlist Spain")\n*   [![Occupation.png](https://hoi4.paradoxwikis.com/images/d/dc/Occupation.png)](/File:Occupation.png) Conquer all of [![Flag of France](https://hoi4.paradoxwikis.com/images/thumb/d/de/France.png/24px-France.png)](/France "France") [France](/France "France")',
    notes: '*For detailed strategies, see [One King, Two Crowns](/One_King,_Two_Crowns "One King, Two Crowns")*',
    game: 'hoi4',
  },
  {
    id: 'hoi4_ach_104',
    name: 'We Will Rock You',
    description: 'As Spain, own Gibraltar.',
    icon: 'https://hoi4.paradoxwikis.com/images/7/76/We_Will_Rock_You.png',
    dlc: '',
    version: '1.9',
    difficulty: 'M',
    startingConditions:
      '[![Yes](https://hoi4.paradoxwikis.com/images/thumb/7/77/Yes.png/22px-Yes.png)](/File:Yes.png "Yes") Playing as [![Flag of Spain](https://hoi4.paradoxwikis.com/images/thumb/5/58/Spain.png/24px-Spain.png)](/Spain "Spain") [Spain](/Spain "Spain")',
    completionRequirements:
      '[![Occupation.png](https://hoi4.paradoxwikis.com/images/d/dc/Occupation.png)](/File:Occupation.png) Owns **Gibraltar** *(118)*',
    notes: '*For detailed strategies, see [We Will Rock You](/We_Will_Rock_You "We Will Rock You")*',
    game: 'hoi4',
  },
  {
    id: 'hoi4_ach_105',
    name: "Well, I Didn't Vote for You",
    description: 'Win the Spanish Civil War as the Anarchists.',
    icon: 'https://hoi4.paradoxwikis.com/images/4/46/Well%2C_I_Didn%E2%80%99t_Vote_for_You.png',
    dlc: '',
    version: '1.9',
    difficulty: 'M',
    startingConditions:
      '[![Yes](https://hoi4.paradoxwikis.com/images/thumb/7/77/Yes.png/22px-Yes.png)](/File:Yes.png "Yes") Playing as [![Flag of Spain](https://hoi4.paradoxwikis.com/images/thumb/5/58/Spain.png/24px-Spain.png)](/Spain "Spain") [Spain](/Spain "Spain")',
    completionRequirements:
      '*   [![Yes](https://hoi4.paradoxwikis.com/images/thumb/7/77/Yes.png/22px-Yes.png)](/File:Yes.png "Yes") Is [![Flag of Regional Defense Council of Aragón](https://hoi4.paradoxwikis.com/images/thumb/1/10/Regional_Defense_Council_of_Arag%C3%B3n.png/24px-Regional_Defense_Council_of_Arag%C3%B3n.png)](/Regional_Defense_Council_of_Arag%C3%B3n "Regional Defense Council of Aragón") [Regional Defense Council of Aragón](/Regional_Defense_Council_of_Arag%C3%B3n "Regional Defense Council of Aragón")\n*   [![Yes](https://hoi4.paradoxwikis.com/images/thumb/7/77/Yes.png/22px-Yes.png)](/File:Yes.png "Yes") No other country with the original tag of [![Flag of Spain](https://hoi4.paradoxwikis.com/images/thumb/5/58/Spain.png/24px-Spain.png)](/Spain "Spain") [Spain](/Spain "Spain") exists',
    notes:
      '[![Flag of Anarchist Spain](https://hoi4.paradoxwikis.com/images/thumb/1/10/Regional_Defense_Council_of_Arag%C3%B3n.png/24px-Regional_Defense_Council_of_Arag%C3%B3n.png)](/Anarchist_Spain "Anarchist Spain") [Anarchist Spain](/Anarchist_Spain "Anarchist Spain") is created from either [![Masters of Our Own Fate](https://hoi4.paradoxwikis.com/images/thumb/9/99/Focus_spr_masters_of_our_own_fate.png/22px-Focus_spr_masters_of_our_own_fate.png)](/Republican_Spanish_national_focus_tree#Masters_of_Our_Own_Fate "Masters of Our Own Fate")[Masters of Our Own Fate](/Republican_Spanish_national_focus_tree#Masters_of_Our_Own_Fate "Republican Spanish national focus tree") focus or the Government Crackdown event.\n\nAt the start of the game focus on building military factories in Valencia. As long as you control Valencia when the Anarchist uprising fires, you will be given control of it. Easier if the [![Flag of Nationalist Spain](https://hoi4.paradoxwikis.com/images/thumb/2/2c/Nationalist_Spain.png/24px-Nationalist_Spain.png)](/Nationalist_Spain "Nationalist Spain") [Nationalists](/Nationalist_Spain "Nationalist Spain") are weakened by the [![Flag of Carlist Spain](https://hoi4.paradoxwikis.com/images/thumb/6/64/Carlist_Spain.png/24px-Carlist_Spain.png)](/Carlist_Spain "Carlist Spain") [Carlist](/Carlist_Spain "Carlist Spain") rebellion. This can be done by keeping control of the northern states (Asturias & Pais Vasco) for as long as possible. On non-historical, they may also simply not take the focuses in the right order to prevent the uprising from happening.',
    game: 'hoi4',
  },
  {
    id: 'hoi4_ach_106',
    name: 'Our Chief Weapon is Surprise...',
    description: 'As Spain, have at least 5 spies and stage 5 coups against other nations.',
    icon: 'https://hoi4.paradoxwikis.com/images/2/2f/Our_Chief_Weapon_is_Surprise....png',
    dlc: '',
    version: '1.9',
    difficulty: 'M',
    startingConditions:
      '[![Yes](https://hoi4.paradoxwikis.com/images/thumb/7/77/Yes.png/22px-Yes.png)](/File:Yes.png "Yes") Playing as [![Flag of Spain](https://hoi4.paradoxwikis.com/images/thumb/5/58/Spain.png/24px-Spain.png)](/Spain "Spain") [Spain](/Spain "Spain")',
    completionRequirements:
      '[![Yes](https://hoi4.paradoxwikis.com/images/thumb/7/77/Yes.png/22px-Yes.png)](/File:Yes.png "Yes") Started more than **4** coups',
    notes:
      "Join a major faction with a large number of members to be able to get enough spy slots. Do not join in the faction's wars so you can continue to trade with all countries and focus on spies to build up spy networks faster and stage coups more often.",
    game: 'hoi4',
  },
  {
    id: 'hoi4_ach_107',
    name: 'Die, Perfidious Albion!',
    description: 'As Fascist France or Vichy France, occupy all of Great Britain.',
    icon: 'https://hoi4.paradoxwikis.com/images/b/b7/Die%2C_Perfidious_Albion%21.png',
    dlc: '',
    version: '1.9',
    difficulty: 'H',
    startingConditions:
      '[![Yes](https://hoi4.paradoxwikis.com/images/thumb/7/77/Yes.png/22px-Yes.png)](/File:Yes.png "Yes") Playing as [![Flag of France](https://hoi4.paradoxwikis.com/images/thumb/d/de/France.png/24px-France.png)](/France "France") [France](/France "France")',
    completionRequirements:
      '*   [![Yes](https://hoi4.paradoxwikis.com/images/thumb/7/77/Yes.png/22px-Yes.png)](/File:Yes.png "Yes") Ruling party is [![{{{1}}}](https://hoi4.paradoxwikis.com/images/thumb/1/1f/Fascism.png/22px-Fascism.png)](/Ideology#Fascism "{{{1}}}")[Fascist](/Ideology#Fascism "Ideology")\n*   [![Occupation.png](https://hoi4.paradoxwikis.com/images/d/dc/Occupation.png)](/File:Occupation.png) Controls all European cores of the [![Flag of United Kingdom](https://hoi4.paradoxwikis.com/images/thumb/2/29/United_Kingdom.png/24px-United_Kingdom.png)](/United_Kingdom "United Kingdom") [United Kingdom](/United_Kingdom "United Kingdom") and [![Flag of Ireland](https://hoi4.paradoxwikis.com/images/thumb/4/4b/Ireland.png/24px-Ireland.png)](/Ireland "Ireland") [Ireland](/Ireland "Ireland")',
    notes:
      'Rush the fascist focuses. Upon taking [![Utilize the Leagues](https://hoi4.paradoxwikis.com/images/thumb/5/57/Focus_generic_strike_at_democracy1.png/22px-Focus_generic_strike_at_democracy1.png)](/French_national_focus_tree#Utilize_the_Leagues "Utilize the Leagues")[Utilize the Leagues](/French_national_focus_tree#Utilize_the_Leagues "French national focus tree"), you will have access to decisions of boosting fascist and non-aligned popularity. Hire the fascist demagogue and spam "Rally the Leagues" decision; never take "Unleash La Cagoule" decision. Once you have 50% of fascist and non-aligned combined popularity, you can continue working on the fascist focuses. Take the [![Political Unity](https://hoi4.paradoxwikis.com/images/thumb/5/51/Goal_generic_intelligence_exchange.png/22px-Goal_generic_intelligence_exchange.png)](/French_national_focus_tree#Political_Unity "Political Unity")[Political Unity](/French_national_focus_tree#Political_Unity "French national focus tree") focus as soon as possible, as it removes the chance of spawning the civil war. After that rush towards [![Expand to the Suez](https://hoi4.paradoxwikis.com/images/thumb/3/3e/Goal_generic_occupy_states_coastal.png/22px-Goal_generic_occupy_states_coastal.png)](/French_national_focus_tree#Expand_to_the_Suez "Expand to the Suez")[Expand to the Suez](/French_national_focus_tree#Expand_to_the_Suez "French national focus tree") focus. Immediately declare war on Britain and annex them. Your starting army is strong enough to easily destroy Britain.',
    game: 'hoi4',
  },
  {
    id: 'hoi4_ach_108',
    name: "Second Time's the Charm",
    description: 'As France, occupy Moscow while Napoleon VI is your country leader.',
    icon: 'https://hoi4.paradoxwikis.com/images/3/39/Second_Time%E2%80%99s_the_Charm.png',
    dlc: '',
    version: '1.9',
    difficulty: 'E',
    startingConditions:
      '[![Yes](https://hoi4.paradoxwikis.com/images/thumb/7/77/Yes.png/22px-Yes.png)](/File:Yes.png "Yes") Playing as [![Flag of France](https://hoi4.paradoxwikis.com/images/thumb/d/de/France.png/24px-France.png)](/France "France") [France](/France "France")',
    completionRequirements:
      '*   [![Occupation.png](https://hoi4.paradoxwikis.com/images/d/dc/Occupation.png)](/File:Occupation.png) Controls **Moscow** *(219)*\n*   [![Yes](https://hoi4.paradoxwikis.com/images/thumb/7/77/Yes.png/22px-Yes.png)](/File:Yes.png "Yes") **Napoléon VI** is the current country leader',
    notes:
      'Rush towards [![Proclaim the Third Empire](https://hoi4.paradoxwikis.com/images/thumb/d/db/Focus_focus_fra_third_empire.png/22px-Focus_focus_fra_third_empire.png)](/French_national_focus_tree#Proclaim_the_Third_Empire "Proclaim the Third Empire")[Proclaim the Third Empire](/French_national_focus_tree#Proclaim_the_Third_Empire "French national focus tree") focus to get **Napoléon VI**. Wait until Germany declares war on [![Flag of Poland](https://hoi4.paradoxwikis.com/images/thumb/9/99/Poland.png/24px-Poland.png)](/Poland "Poland") [Poland](/Poland "Poland") and then declare war on the [![Flag of United Kingdom](https://hoi4.paradoxwikis.com/images/thumb/2/29/United_Kingdom.png/24px-United_Kingdom.png)](/United_Kingdom "United Kingdom") [United Kingdom](/United_Kingdom "United Kingdom"). Accept the invitation to join [![Flag of Germany](https://hoi4.paradoxwikis.com/images/thumb/e/e9/German_Reich.png/24px-German_Reich.png)](/Germany "Germany") [Germany\'s](/Germany "Germany") faction. Your starting army and fleet will be enough to destroy the [![Flag of United Kingdom](https://hoi4.paradoxwikis.com/images/thumb/2/29/United_Kingdom.png/24px-United_Kingdom.png)](/United_Kingdom "United Kingdom") [United Kingdom](/United_Kingdom "United Kingdom"). Annex them in the peace conference. Guarantee [![Flag of Finland](https://hoi4.paradoxwikis.com/images/thumb/c/c4/Finland.png/24px-Finland.png)](/Finland "Finland") [Finland](/Finland "Finland") when the [![Flag of USSR](https://hoi4.paradoxwikis.com/images/thumb/6/67/Soviet_Union.png/24px-Soviet_Union.png)](/USSR "USSR") [USSR](/USSR "USSR") starts justifying a war goal on them. Accept the call to arms and invite the rest of the Axis. This will make the war easier as the [![Flag of Soviet Union](https://hoi4.paradoxwikis.com/images/thumb/6/67/Soviet_Union.png/24px-Soviet_Union.png)](/Soviet_Union "Soviet Union") [Soviet Union](/Soviet_Union "Soviet Union") will not receive the "Great Patriotic War" buff. Earn enough warscore and ask your allies for control of Moscow *(219)*.',
    game: 'hoi4',
  },
  {
    id: 'hoi4_ach_109',
    name: "Don't Die for Your Country",
    description: 'As Germany in a 1939 start, occupy all of Poland and France without taking more than 475 casualties.',
    icon: 'https://hoi4.paradoxwikis.com/images/5/5b/Don%E2%80%99t_Die_for_Your_Country.png',
    dlc: '',
    version: '1.9',
    difficulty: 'I',
    startingConditions:
      '*   [![Yes](https://hoi4.paradoxwikis.com/images/thumb/7/77/Yes.png/22px-Yes.png)](/File:Yes.png "Yes") Playing as [![Flag of Germany](https://hoi4.paradoxwikis.com/images/thumb/e/e9/German_Reich.png/24px-German_Reich.png)](/Germany "Germany") [Germany](/Germany "Germany")\n*   [![Time](https://hoi4.paradoxwikis.com/images/thumb/0/08/Time.png/22px-Time.png)](/File:Time.png "Time") Start date is after Jan 1st, 1939',
    completionRequirements:
      '*   [![Occupation.png](https://hoi4.paradoxwikis.com/images/d/dc/Occupation.png)](/File:Occupation.png) Controls all European cores of [![Flag of Poland](https://hoi4.paradoxwikis.com/images/thumb/9/99/Poland.png/24px-Poland.png)](/Poland "Poland") [Poland](/Poland "Poland") and [![Flag of France](https://hoi4.paradoxwikis.com/images/thumb/d/de/France.png/24px-France.png)](/France "France") [France](/France "France")\n*   [![Yes](https://hoi4.paradoxwikis.com/images/thumb/7/77/Yes.png/22px-Yes.png)](/File:Yes.png "Yes") Has suffered fewer than **475** casualties in the current wars\n*   [![No](https://hoi4.paradoxwikis.com/images/thumb/0/04/No.png/22px-No.png)](/File:No.png "No") Has paradropped',
    notes:
      '**Note:** Paradropping troops sets country flag **"has\\_paradropped\\_flag"** which prevents this achievement.\n\n*For detailed strategies, see [Don’t Die for Your Country](/Don%E2%80%99t_Die_for_Your_Country "Don’t Die for Your Country")*',
    game: 'hoi4',
  },
  {
    id: 'hoi4_ach_110',
    name: 'Warszawo, Walcz!',
    description: 'Stage the Warsaw uprising and succeed.',
    icon: 'https://hoi4.paradoxwikis.com/images/9/9b/Warszawo%2C_Walcz%21.png',
    dlc: '',
    version: '1.9',
    difficulty: 'E',
    startingConditions: '',
    completionRequirements:
      '*   [![Yes](https://hoi4.paradoxwikis.com/images/thumb/7/77/Yes.png/22px-Yes.png)](/File:Yes.png "Yes") Any country is at war with the player and [![Flag of Poland](https://hoi4.paradoxwikis.com/images/thumb/9/99/Poland.png/24px-Poland.png)](/Poland "Poland") [Poland](/Poland "Poland")\n*    [![Yes](https://hoi4.paradoxwikis.com/images/thumb/7/77/Yes.png/22px-Yes.png)](/File:Yes.png "Yes") Has succesfully staged the Warsaw uprising',
    notes:
      'Start the game as the [![Flag of Soviet Union](https://hoi4.paradoxwikis.com/images/thumb/6/67/Soviet_Union.png/24px-Soviet_Union.png)](/Soviet_Union "Soviet Union") [Soviet Union](/Soviet_Union "Soviet Union"), justify and declare war on [![Flag of Poland](https://hoi4.paradoxwikis.com/images/thumb/9/99/Poland.png/24px-Poland.png)](/Poland "Poland") [Poland](/Poland "Poland") and call [![Flag of Tannu Tuva](https://hoi4.paradoxwikis.com/images/thumb/5/54/Tannu_Tuva.png/24px-Tannu_Tuva.png)](/Tannu_Tuva "Tannu Tuva") [Tannu Tuva](/Tannu_Tuva "Tannu Tuva") into the war. After capitulating Poland, give them all Polish states. Kick them from your faction and justify a war goal on them. Declare war but **DO NOT** capitulate them. Since they don\'t have the means to properly suppress resistance, you can just wait until the resistance in [![Flag of Poland](https://hoi4.paradoxwikis.com/images/thumb/9/99/Poland.png/24px-Poland.png)](/Poland "Poland") [Poland](/Poland "Poland") hits 90.',
    game: 'hoi4',
  },
  {
    id: 'hoi4_ach_111',
    name: 'Tour de France',
    description: 'Occupy all of mainland France while having at least 20 fully equipped Bicycle regiments.',
    icon: 'https://hoi4.paradoxwikis.com/images/2/2e/Tour_de_France.png',
    dlc: '',
    version: '1.9',
    difficulty: 'E',
    startingConditions:
      '[![No](https://hoi4.paradoxwikis.com/images/thumb/0/04/No.png/22px-No.png)](/File:No.png "No") Not playing as [![Flag of France](https://hoi4.paradoxwikis.com/images/thumb/d/de/France.png/24px-France.png)](/France "France") [France](/France "France")',
    completionRequirements:
      '*   [![Occupation.png](https://hoi4.paradoxwikis.com/images/d/dc/Occupation.png)](/File:Occupation.png) Controls all French states in Europe\n*   [![Equipment.png](https://hoi4.paradoxwikis.com/images/2/2f/Equipment.png)](/File:Equipment.png) More than **2200** of infantry equipment in armies\n*   [![Support Equipment.png](https://hoi4.paradoxwikis.com/images/thumb/6/66/Support_Equipment.png/22px-Support_Equipment.png)](/File:Support_Equipment.png) More than **220** of support equipment in armies\n*   [![Bicycle battalion](https://hoi4.paradoxwikis.com/images/thumb/a/a9/Bicycle_Battalion.png/40px-Bicycle_Battalion.png)](/Land_units#Unit_types "Bicycle battalion") More than **22** bicycle battalions',
    notes:
      '**Note:** Mainland [![Flag of France](https://hoi4.paradoxwikis.com/images/thumb/d/de/France.png/24px-France.png)](/France "France") [France](/France "France") includes Corsica *(1)*.\n\n*For detailed strategies, see [Tour de France](/Tour_de_France "Tour de France")*',
    game: 'hoi4',
  },
  {
    id: 'hoi4_ach_112',
    name: 'You Will Never Kill Me Alive',
    description: 'Have one of your spies take a Suicide Pill.',
    icon: 'https://hoi4.paradoxwikis.com/images/4/46/You_Will_Never_Kill_Me_Alive.png',
    dlc: '',
    version: '1.9',
    difficulty: 'VE',
    startingConditions: '',
    completionRequirements:
      '[![Yes](https://hoi4.paradoxwikis.com/images/thumb/7/77/Yes.png/22px-Yes.png)](/File:Yes.png "Yes") Have an operative die with the Suicide Pills agency upgrade active',
    notes:
      'Build an intelligence agency and make sure to get the Suicide Pills upgrade. Keep sending your operatives on missions, or just have them perform various activities like \'Build Intel Network\' in other countries (preferably the [![Flag of Soviet Union](https://hoi4.paradoxwikis.com/images/thumb/6/67/Soviet_Union.png/24px-Soviet_Union.png)](/Soviet_Union "Soviet Union") [Soviet Union](/Soviet_Union "Soviet Union")). Eventually one of them will die and the achievement will trigger.',
    game: 'hoi4',
  },
  {
    id: 'hoi4_ach_113',
    name: 'Finnish Him!',
    description: 'As Finland, defeat the Soviet Union without joining a faction.',
    icon: 'https://hoi4.paradoxwikis.com/images/f/fc/Finnish_Him%21.png',
    dlc: '',
    version: '1.10',
    difficulty: 'H',
    startingConditions:
      '[![Yes](https://hoi4.paradoxwikis.com/images/thumb/7/77/Yes.png/22px-Yes.png)](/File:Yes.png "Yes") Playing as [![Flag of Finland](https://hoi4.paradoxwikis.com/images/thumb/c/c4/Finland.png/24px-Finland.png)](/Finland "Finland") [Finland](/Finland "Finland")',
    completionRequirements:
      '[![Yes](https://hoi4.paradoxwikis.com/images/thumb/7/77/Yes.png/22px-Yes.png)](/File:Yes.png "Yes") Has defeated the [![Flag of Soviet Union](https://hoi4.paradoxwikis.com/images/thumb/6/67/Soviet_Union.png/24px-Soviet_Union.png)](/Soviet_Union "Soviet Union") [Soviet Union](/Soviet_Union "Soviet Union") without joining a faction',
    notes: '',
    game: 'hoi4',
  },
  {
    id: 'hoi4_ach_114',
    name: 'I Captured the Bosporus and All I Got Was This Lousy Achievement',
    description: 'As Greece or Bulgaria, own both sides of the Bosporus. As Turkey, subjugate both Greece & Bulgaria.',
    icon: 'https://hoi4.paradoxwikis.com/images/b/bf/I_Captured_the_Bosporus_and_All_I_Got_Was_This_Lousy_Achievement.png',
    dlc: '',
    version: '1.10',
    difficulty: 'E',
    startingConditions:
      '[![Yes](https://hoi4.paradoxwikis.com/images/thumb/7/77/Yes.png/22px-Yes.png)](/File:Yes.png "Yes") Playing as *either*:\n\n*   *   [![Flag of Bulgaria](https://hoi4.paradoxwikis.com/images/thumb/f/f4/Bulgaria.png/24px-Bulgaria.png)](/Bulgaria "Bulgaria") [Bulgaria](/Bulgaria "Bulgaria")\n    *   [![Flag of Greece](https://hoi4.paradoxwikis.com/images/thumb/8/8e/Kingdom_of_Greece.png/24px-Kingdom_of_Greece.png)](/Greece "Greece") [Greece](/Greece "Greece")\n    *   [![Flag of Turkey](https://hoi4.paradoxwikis.com/images/thumb/b/b3/Turkey.png/24px-Turkey.png)](/Turkey "Turkey") [Turkey](/Turkey "Turkey")',
    completionRequirements:
      '*   If playing as [![Flag of Greece](https://hoi4.paradoxwikis.com/images/thumb/8/8e/Kingdom_of_Greece.png/24px-Kingdom_of_Greece.png)](/Greece "Greece") [Greece](/Greece "Greece") or [![Flag of Bulgaria](https://hoi4.paradoxwikis.com/images/thumb/f/f4/Bulgaria.png/24px-Bulgaria.png)](/Bulgaria "Bulgaria") [Bulgaria](/Bulgaria "Bulgaria"):\n    *   [![Occupation.png](https://hoi4.paradoxwikis.com/images/d/dc/Occupation.png)](/File:Occupation.png) Owns **Istanbul** *(797)*\n*   If playing as [![Flag of Turkey](https://hoi4.paradoxwikis.com/images/thumb/b/b3/Turkey.png/24px-Turkey.png)](/Turkey "Turkey") [Turkey](/Turkey "Turkey"):\n    *   Has [![Flag of Bulgaria](https://hoi4.paradoxwikis.com/images/thumb/f/f4/Bulgaria.png/24px-Bulgaria.png)](/Bulgaria "Bulgaria") [Bulgaria](/Bulgaria "Bulgaria") as a [![Puppet](https://hoi4.paradoxwikis.com/images/thumb/a/a7/Autonomy_puppet_icon.png/22px-Autonomy_puppet_icon.png)](/Puppet#Autonomy_levels "Puppet")[subject](/Puppet#Autonomy_levels "Puppet") or [![Occupation.png](https://hoi4.paradoxwikis.com/images/d/dc/Occupation.png)](/File:Occupation.png) owns all Bulgarian cores states\n    *   Has [![Flag of Greece](https://hoi4.paradoxwikis.com/images/thumb/8/8e/Kingdom_of_Greece.png/24px-Kingdom_of_Greece.png)](/Greece "Greece") [Greece](/Greece "Greece") as a [![Puppet](https://hoi4.paradoxwikis.com/images/thumb/a/a7/Autonomy_puppet_icon.png/22px-Autonomy_puppet_icon.png)](/Puppet#Autonomy_levels "Puppet")[subject](/Puppet#Autonomy_levels "Puppet") or [![Occupation.png](https://hoi4.paradoxwikis.com/images/d/dc/Occupation.png)](/File:Occupation.png) owns all Greek cores states (except **Dodecaneso** *(164)*)',
    notes: '',
    game: 'hoi4',
  },
  {
    id: 'hoi4_ach_115',
    name: 'Istanbul is Constantinople. Again.',
    description: 'As Greece, capture Istanbul and rename it to Constantinople.',
    icon: 'https://hoi4.paradoxwikis.com/images/1/1f/Istanbul_is_Constantinople._Again..png',
    dlc: '',
    version: '1.10',
    difficulty: 'E',
    startingConditions:
      '[![Yes](https://hoi4.paradoxwikis.com/images/thumb/7/77/Yes.png/22px-Yes.png)](/File:Yes.png "Yes") Playing as [![Flag of Greece](https://hoi4.paradoxwikis.com/images/thumb/8/8e/Kingdom_of_Greece.png/24px-Kingdom_of_Greece.png)](/Greece "Greece") [Greece](/Greece "Greece")',
    completionRequirements:
      '*   [![Yes](https://hoi4.paradoxwikis.com/images/thumb/7/77/Yes.png/22px-Yes.png)](/File:Yes.png "Yes") Owns **Istanbul** *(797)*\n*    [![Yes](https://hoi4.paradoxwikis.com/images/thumb/7/77/Yes.png/22px-Yes.png)](/File:Yes.png "Yes") Istanbul has been renamed to Constantinople',
    notes:
      'The [![Flag of Greece](https://hoi4.paradoxwikis.com/images/thumb/8/8e/Kingdom_of_Greece.png/24px-Kingdom_of_Greece.png)](/Greece "Greece") [Greek](/Greece "Greece") focuses resulting from [![Resurrecting the Megali Idea](https://hoi4.paradoxwikis.com/images/thumb/a/a6/Focus_GRE_resurrecting_the_megali_idea.png/22px-Focus_GRE_resurrecting_the_megali_idea.png)](/Greek_national_focus_tree#Resurrecting_the_Megali_Idea "Resurrecting the Megali Idea")[Resurrecting the Megali Idea](/Greek_national_focus_tree#Resurrecting_the_Megali_Idea "Greek national focus tree") allow for a war with [![Flag of Turkey](https://hoi4.paradoxwikis.com/images/thumb/b/b3/Turkey.png/24px-Turkey.png)](/Turkey "Turkey") [Turkey](/Turkey "Turkey") where you will gain Istanbul *(797)*. Simply invite the [![Flag of UK](https://hoi4.paradoxwikis.com/images/thumb/2/29/United_Kingdom.png/24px-United_Kingdom.png)](/UK "UK") [UK](/UK "UK"), [![Flag of France](https://hoi4.paradoxwikis.com/images/thumb/d/de/France.png/24px-France.png)](/France "France") [France](/France "France"), and [![Flag of Italy](https://hoi4.paradoxwikis.com/images/thumb/2/2a/Italy.png/24px-Italy.png)](/Italy "Italy") [Italy](/Italy "Italy"), and promise them all concessions. Some of them will join the war and grant you the needed land.  \n**Note:** Even if the [![Flag of United Kingdom](https://hoi4.paradoxwikis.com/images/thumb/2/29/United_Kingdom.png/24px-United_Kingdom.png)](/United_Kingdom "United Kingdom") [United Kingdom](/United_Kingdom "United Kingdom") or [![Flag of France](https://hoi4.paradoxwikis.com/images/thumb/d/de/France.png/24px-France.png)](/France "France") [France](/France "France") has agreed to split up [![Flag of Turkey](https://hoi4.paradoxwikis.com/images/thumb/b/b3/Turkey.png/24px-Turkey.png)](/Turkey "Turkey") [Turkey](/Turkey "Turkey"), they can individually bail on the war when you declare war. The achievement is earned by taking 3 decisions: [Restore Byzantium](/Formable_nations#Restore_Byzantium "Formable nations"), [Revive Byzantium](/Formable_nations#Revive_Byzantium "Formable nations") and [Form Greater Greece](/Formable_nations#Form_Greater_Greece "Formable nations"). **Note 2:** At least as of 1.16, neither France nor the UK will even attend the conference unless they have over 20% war support, so, if you rush the "Megali Idea" focus and trigger the event too early, the conference will simply not happen. And if you choose to cooperate with fascists when you get the "Negotiations with the EEE" event, that also makes their participation unlikely. You\'ll be able to bypass the focus and move on to [![Horror and Fear](https://hoi4.paradoxwikis.com/images/thumb/3/3f/Focus_generic_strike_at_democracy2.png/22px-Focus_generic_strike_at_democracy2.png)](/Greek_national_focus_tree#Horror_and_Fear "Horror and Fear")[Horror and Fear](/Greek_national_focus_tree#Horror_and_Fear "Greek national focus tree"), which lets you declare war on Turkey alone. It will be tricky work, since Turkey will likely have a larger standing army than you, and especially because Turkey will be guaranteed by Romania at that point, but it can be done. (It has to be done relatively quickly, though: if the conference fails, the UK tends to guarantee Turkey by March 1939, and Romania will join the Axis in mid-1940 if you\'re lucky, the Allies in September 1939 if you\'re not.) When going down this route, it helps to puppet Bulgaria before attempting Turkey.',
    game: 'hoi4',
  },
  {
    id: 'hoi4_ach_116',
    name: "Peter's Pride",
    description: 'As Peter II of Yugoslavia, overthrow your uncle and become King.',
    icon: 'https://hoi4.paradoxwikis.com/images/6/64/Peter%E2%80%99s_Pride.png',
    dlc: '',
    version: '1.10',
    difficulty: 'VE',
    startingConditions:
      '[![Yes](https://hoi4.paradoxwikis.com/images/thumb/7/77/Yes.png/22px-Yes.png)](/File:Yes.png "Yes") Playing as [![Flag of Yugoslavia](https://hoi4.paradoxwikis.com/images/thumb/f/f3/Yugoslavia.png/24px-Yugoslavia.png)](/Yugoslavia "Yugoslavia") [Yugoslavia](/Yugoslavia "Yugoslavia")',
    completionRequirements:
      '[![Yes](https://hoi4.paradoxwikis.com/images/thumb/7/77/Yes.png/22px-Yes.png)](/File:Yes.png "Yes") **Peter II** is the current country leader',
    notes:
      'Simply go down and complete a focus which puts Peter in charge, such as [![End the Regency](https://hoi4.paradoxwikis.com/images/thumb/1/19/Focus_rom_royal_dictatorship.png/22px-Focus_rom_royal_dictatorship.png)](/Yugoslavian_national_focus_tree#End_the_Regency "End the Regency")[End the Regency](/Yugoslavian_national_focus_tree#End_the_Regency "Yugoslavian national focus tree"). With historical AI, you won\'t be attacked before you can take the focus.',
    game: 'hoi4',
  },
  {
    id: 'hoi4_ach_117',
    name: 'This is Madness!',
    description: 'As Greece, fulfil the Megali Idea and then form Greater Greece.',
    icon: 'https://hoi4.paradoxwikis.com/images/4/4a/This_is_Madness%21.png',
    dlc: '',
    version: '1.10',
    difficulty: 'E',
    startingConditions:
      '[![Yes](https://hoi4.paradoxwikis.com/images/thumb/7/77/Yes.png/22px-Yes.png)](/File:Yes.png "Yes") Playing as [![Flag of Greece](https://hoi4.paradoxwikis.com/images/thumb/8/8e/Kingdom_of_Greece.png/24px-Kingdom_of_Greece.png)](/Greece "Greece") [Greece](/Greece "Greece")',
    completionRequirements:
      '[![Yes](https://hoi4.paradoxwikis.com/images/thumb/7/77/Yes.png/22px-Yes.png)](/File:Yes.png "Yes") Has formed [![Flag of Hellas](https://hoi4.paradoxwikis.com/images/thumb/6/6a/Hellas.png/24px-Hellas.png)](/Hellas "Hellas") [Greater Greece](/Hellas "Hellas")',
    notes:
      'The Megali Idea involves you, [![Flag of UK](https://hoi4.paradoxwikis.com/images/thumb/2/29/United_Kingdom.png/24px-United_Kingdom.png)](/UK "UK") [UK](/UK "UK"), and [![Flag of France](https://hoi4.paradoxwikis.com/images/thumb/d/de/France.png/24px-France.png)](/France "France") [France](/France "France") agreeing to attack and split up [![Flag of Turkey](https://hoi4.paradoxwikis.com/images/thumb/b/b3/Turkey.png/24px-Turkey.png)](/Turkey "Turkey") [Turkey](/Turkey "Turkey") so you are guaranteed the land required in the peace deal. Do note that the UK and France can individually bail on the war when you complete the focus to attack Turkey even if they agreed at the convention, but it is still easy to beat Turkey with just one of them and is possible to beat them by yourself. (See also notes for "Istanbul is Constantinople. Again.")\n\nThe decision to form [![Flag of Hellas](https://hoi4.paradoxwikis.com/images/thumb/6/6a/Hellas.png/24px-Hellas.png)](/Hellas "Hellas") [Greater Greece](/Hellas "Hellas") is unlocked either by the focus [![Nenikikamen](https://hoi4.paradoxwikis.com/images/thumb/5/57/Focus_generic_strike_at_democracy1.png/22px-Focus_generic_strike_at_democracy1.png)](/Greek_national_focus_tree#Nenikikamen "Nenikikamen")[Nenikikamen](/Greek_national_focus_tree#Nenikikamen "Greek national focus tree") while your leader is not **Georgios Kosmidis**, by completing the focus [![The Modern Movement](https://hoi4.paradoxwikis.com/images/thumb/3/32/Focus_generic_little_entente.png/22px-Focus_generic_little_entente.png)](/Greek_national_focus_tree#The_Modern_Movement "The Modern Movement")[The Modern Movement](/Greek_national_focus_tree#The_Modern_Movement "Greek national focus tree") and choosing to have **Ioannis Metaxas** as your country leader, or by completing the focus [![Prepare for the Great Anti-Fascist War](https://hoi4.paradoxwikis.com/images/thumb/a/ae/Focus_generic_anti_fascist_diplomacy.png/22px-Focus_generic_anti_fascist_diplomacy.png)](/Greek_national_focus_tree#Prepare_for_the_Great_Anti-Fascist_War "Prepare for the Great Anti-Fascist War")[Prepare for the Great Anti-Fascist War](/Greek_national_focus_tree#Prepare_for_the_Great_Anti-Fascist_War "Greek national focus tree").',
    game: 'hoi4',
  },
  {
    id: 'hoi4_ach_118',
    name: "Nobody's Business but the Turks",
    description: 'Restore the Ottoman Sultanate.',
    icon: 'https://hoi4.paradoxwikis.com/images/f/f8/Nobody%E2%80%99s_Business_but_the_Turks.png',
    dlc: '',
    version: '1.10',
    difficulty: 'VE',
    startingConditions:
      '[![Yes](https://hoi4.paradoxwikis.com/images/thumb/7/77/Yes.png/22px-Yes.png)](/File:Yes.png "Yes") Playing as [![Flag of Turkey](https://hoi4.paradoxwikis.com/images/thumb/b/b3/Turkey.png/24px-Turkey.png)](/Turkey "Turkey") [Turkey](/Turkey "Turkey")',
    completionRequirements:
      '[![Yes](https://hoi4.paradoxwikis.com/images/thumb/7/77/Yes.png/22px-Yes.png)](/File:Yes.png "Yes") Has completed focus [![Return of the Sultan](https://hoi4.paradoxwikis.com/images/thumb/1/19/Focus_rom_royal_dictatorship.png/22px-Focus_rom_royal_dictatorship.png)](/Turkish_national_focus_tree#Return_of_the_Sultan "Return of the Sultan")[Return of the Sultan](/Turkish_national_focus_tree#Return_of_the_Sultan "Turkish national focus tree")',
    notes: 'You just have to win a small civil war to get to the focus.',
    game: 'hoi4',
  },
  {
    id: 'hoi4_ach_119',
    name: 'House of Kurds',
    description: 'As Kurdistan, hold all of your cores.',
    icon: 'https://hoi4.paradoxwikis.com/images/e/e5/House_of_Kurds.png',
    dlc: '',
    version: '1.10',
    difficulty: 'M',
    startingConditions: '',
    completionRequirements:
      '*   [![Yes](https://hoi4.paradoxwikis.com/images/thumb/7/77/Yes.png/22px-Yes.png)](/File:Yes.png "Yes") One of the following must be true:\n    *   Original country is [![Flag of Kurdistan](https://hoi4.paradoxwikis.com/images/thumb/9/95/Kurdistan.png/24px-Kurdistan.png)](/Kurdistan "Kurdistan") [Kurdistan](/Kurdistan "Kurdistan")\n    *   Has become Kurdistan\n*   [![Occupation.png](https://hoi4.paradoxwikis.com/images/d/dc/Occupation.png)](/File:Occupation.png) Controls:\n\n*   **Hakkari** *(352)*\n*   **Diyarbakır** *(350)*\n*   **Van** *(800)*\n*   **Tunceli** *(353)*\n*   **Malatya** *(344)*\n*   **East Azerbaijan** *(1000)*\n*   **West Azerbaijan** *(419)*\n*   **Kurdistan** *(1001)*\n*   **Ilam** *(421)*\n*   **Deir-az-Zur** *(680)*',
    notes:
      '**Note:** [![Flag of Kurdistan](https://hoi4.paradoxwikis.com/images/thumb/9/95/Kurdistan.png/24px-Kurdistan.png)](/Kurdistan "Kurdistan") [Kurdistan](/Kurdistan "Kurdistan") cannot be released by [![Flag of Turkey](https://hoi4.paradoxwikis.com/images/thumb/b/b3/Turkey.png/24px-Turkey.png)](/Turkey "Turkey") [Turkey](/Turkey "Turkey"), [![Flag of Syria](https://hoi4.paradoxwikis.com/images/thumb/7/7c/Republic_of_Syria.png/24px-Republic_of_Syria.png)](/Syria "Syria") [Syria](/Syria "Syria"), [![Flag of Iran](https://hoi4.paradoxwikis.com/images/thumb/d/d1/Iran.png/24px-Iran.png)](/Iran "Iran") [Iran](/Iran "Iran") and [![Flag of Iraq](https://hoi4.paradoxwikis.com/images/thumb/c/c4/Iraq.png/24px-Iraq.png)](/Iraq "Iraq") [Iraq](/Iraq "Iraq") if [![Battle for the Bosporus](https://hoi4.paradoxwikis.com/images/thumb/4/4b/DLC_Battle_for_the_Bosporus.png/22px-DLC_Battle_for_the_Bosporus.png)](/Battle_for_the_Bosporus "Battle for the Bosporus")[Battle for the Bosporus](/Battle_for_the_Bosporus "Battle for the Bosporus") is enabled. This achievement is now possible (patch 1.16.5) through the Iraq focus tree with [![Graveyard of Empires](https://hoi4.paradoxwikis.com/images/thumb/a/a1/DLC_Graveyard_of_Empires.png/22px-DLC_Graveyard_of_Empires.png)](/Graveyard_of_Empires "Graveyard of Empires")[Graveyard of Empires](/Graveyard_of_Empires "Graveyard of Empires") enabled if you go down the [![Promote Kurdish Identity](https://hoi4.paradoxwikis.com/images/thumb/c/cd/Focus_IRQ_promote_kurdish_culture.png/22px-Focus_IRQ_promote_kurdish_culture.png)](/Iraqi_national_focus_tree#Promote_Kurdish_Identity "Promote Kurdish Identity")[Promote Kurdish Identity](/Iraqi_national_focus_tree#Promote_Kurdish_Identity "Iraqi national focus tree") path.\n\nAs of 1.16.9, likely due to a bug, this achievement calls for the control of **Malatya** *(344)*, which is only a claim, but not for **Mosul** *(676)*, which is one of Kurdistan\'s cores. As such, if you seize all the required states and attempt to release Kurdistan, the achievement won\'t fire. You\'ll have to go to war with Turkey and seize control of Malatya to get the achievement.\n\n*For detailed strategies, see [House of Kurds](/House_of_Kurds "House of Kurds")*',
    game: 'hoi4',
  },
  {
    id: 'hoi4_ach_120',
    name: 'Hellenic Civility',
    description: 'Win the Greek Civil War before 1937.',
    icon: 'https://hoi4.paradoxwikis.com/images/b/b3/Hellenic_Civility.png',
    dlc: '',
    version: '1.10',
    difficulty: 'VE',
    startingConditions:
      '[![Yes](https://hoi4.paradoxwikis.com/images/thumb/7/77/Yes.png/22px-Yes.png)](/File:Yes.png "Yes") Playing as [![Flag of Greece](https://hoi4.paradoxwikis.com/images/thumb/8/8e/Kingdom_of_Greece.png/24px-Kingdom_of_Greece.png)](/Greece "Greece") [Greece](/Greece "Greece")',
    completionRequirements:
      '[![Yes](https://hoi4.paradoxwikis.com/images/thumb/7/77/Yes.png/22px-Yes.png)](/File:Yes.png "Yes") Has won the Greek Civil War before January 1st, 1937',
    notes:
      'Before the civil war fires delete all land units and make a single cavalry division in training. Deploy it in Athens after the war starts and take all victory points to quickly end the civil war. Naval invade Crete *(182)* if necessary.  \nWith [![Battle for the Bosporus](https://hoi4.paradoxwikis.com/images/thumb/4/4b/DLC_Battle_for_the_Bosporus.png/22px-DLC_Battle_for_the_Bosporus.png)](/Battle_for_the_Bosporus "Battle for the Bosporus")[Battle for the Bosporus](/Battle_for_the_Bosporus "Battle for the Bosporus"), civil war can be triggered by not arresting the King and going down the [![The Right to Rule](https://hoi4.paradoxwikis.com/images/thumb/1/19/Focus_rom_royal_dictatorship.png/22px-Focus_rom_royal_dictatorship.png)](/Greek_national_focus_tree#The_Right_to_Rule "The Right to Rule")[The Right to Rule](/Greek_national_focus_tree#The_Right_to_Rule "Greek national focus tree") path. Without [![Battle for the Bosporus](https://hoi4.paradoxwikis.com/images/thumb/4/4b/DLC_Battle_for_the_Bosporus.png/22px-DLC_Battle_for_the_Bosporus.png)](/Battle_for_the_Bosporus "Battle for the Bosporus")[Battle for the Bosporus](/Battle_for_the_Bosporus "Battle for the Bosporus"), you have to manually trigger a civil war using party popularity mechanics.',
    game: 'hoi4',
  },
  {
    id: 'hoi4_ach_121',
    name: "Hoofin' It",
    description: 'Unite Arabia with thirty camelry divisions.',
    icon: 'https://hoi4.paradoxwikis.com/images/f/f4/Hoofin%E2%80%99_It.png',
    dlc: '',
    version: '1.10',
    difficulty: 'VE',
    startingConditions: '',
    completionRequirements:
      '[![Yes](https://hoi4.paradoxwikis.com/images/thumb/7/77/Yes.png/22px-Yes.png)](/File:Yes.png "Yes") United Arabia with 30 Camelry Divisions:\n\nExpand\n\n*   Owns **North Yemen** *(293)*\n*   Owns **Nejd** *(292)*\n*   Owns **Al-Qassim** *(857)*\n*   Owns **Najiran** *(858)*\n*   Owns **Jawf** *(854)*\n*   Owns **Tabuk** *(855)*\n*   Owns **Asir-Makkah** *(856)*\n*   Owns **Dammam** *(859)*\n*   Owns **Muscat** *(294)*\n*   Owns **Abu Dhabi** *(658)*\n*   Owns **Qatar** *(765)*\n*   Owns **South Yemen** *(659)*\n*   Owns **Madinah** *(679)*\n*   Owns **Bahrain** *(1014)*\n*   Owns **Musandam** *(1013)*\n*   Owns **Oman** *(1015)*\n*   Owns **Dhofar** *(1016)*\n*   Owns **Province of Aden** *(992)*\n*   More than **4499** infantry equipment in armies\n*   More than **29** Camelry battalions',
    notes:
      'You can do this as any nation, as long as you have camel units.\n\nWith [![Man the Guns](https://hoi4.paradoxwikis.com/images/thumb/8/86/DLC_Man_the_Guns.png/22px-DLC_Man_the_Guns.png)](/Man_the_Guns "Man the Guns")[Man the Guns](/Man_the_Guns "Man the Guns") easiest as the [![Flag of United Kingdom](https://hoi4.paradoxwikis.com/images/thumb/2/29/United_Kingdom.png/24px-United_Kingdom.png)](/United_Kingdom "United Kingdom") [United Kingdom](/United_Kingdom "United Kingdom") since it already controls all the territory needed, except [![Flag of Saudi Arabia](https://hoi4.paradoxwikis.com/images/thumb/1/1f/Saudi_Arabia.png/24px-Saudi_Arabia.png)](/Saudi_Arabia "Saudi Arabia") [Saudi Arabia](/Saudi_Arabia "Saudi Arabia"), [![Flag of Oman](https://hoi4.paradoxwikis.com/images/thumb/2/27/Oman.png/24px-Oman.png)](/Oman "Oman") [Oman](/Oman "Oman") and [![Flag of Yemen](https://hoi4.paradoxwikis.com/images/thumb/f/fc/Yemen.png/24px-Yemen.png)](/Yemen "Yemen") [Yemen](/Yemen "Yemen"). Take [![The King\'s Party](https://hoi4.paradoxwikis.com/images/thumb/e/ef/Focus_eng_the_kings_party.png/22px-Focus_eng_the_kings_party.png)](/British_national_focus_tree#The_King\'s_Party "The King\'s Party")[The King\'s Party](/British_national_focus_tree#The_King\'s_Party "British national focus tree") focus route, justify and annex the 3 independent nations of the peninsula. Make a camel template and train 30 of them. You start the game with camels unlocked, but you have to make the template yourself. NOTE: Territory needs to be owned directly (not through puppets and not merely occupied), you\'ll need to reduce autonomy and annex Oman (which is easy), and, if the British Raj failed to hand over Aden back in 1936, you\'ll have to annex the Raj too (which is trickier, since [![The King\'s Party](https://hoi4.paradoxwikis.com/images/thumb/e/ef/Focus_eng_the_kings_party.png/22px-Focus_eng_the_kings_party.png)](/British_national_focus_tree#The_King\'s_Party "The King\'s Party")[The King\'s Party](/British_national_focus_tree#The_King\'s_Party "British national focus tree") sets it on the path for independence and gives it a large daily autonomy boost).\n\n**Countries with Camelry battalions**:\n\nExpand\n\n*   [![Flag of Ethiopia](https://hoi4.paradoxwikis.com/images/thumb/0/06/Ethiopia.png/24px-Ethiopia.png)](/Ethiopia "Ethiopia") [Ethiopia](/Ethiopia "Ethiopia"): Unlocks with [![Animal Husbandry](https://hoi4.paradoxwikis.com/images/thumb/0/01/Focus_generic_horse_studs.png/22px-Focus_generic_horse_studs.png)](/Ethiopian_national_focus_tree#Animal_Husbandry "Animal Husbandry")[Animal Husbandry](/Ethiopian_national_focus_tree#Animal_Husbandry "Ethiopian national focus tree") ([![By Blood Alone](https://hoi4.paradoxwikis.com/images/thumb/0/0b/DLC_By_Blood_Alone.png/22px-DLC_By_Blood_Alone.png)](/By_Blood_Alone "By Blood Alone")[By Blood Alone](/By_Blood_Alone "By Blood Alone") required)\n*   [![Flag of Turkey](https://hoi4.paradoxwikis.com/images/thumb/b/b3/Turkey.png/24px-Turkey.png)](/Turkey "Turkey") [Turkey](/Turkey "Turkey"): Unlocks with [![Desert Camel Corps](https://hoi4.paradoxwikis.com/images/thumb/a/a3/Goal_generic_cavalry.png/22px-Goal_generic_cavalry.png)](/Turkish_national_focus_tree#Desert_Camel_Corps "Desert Camel Corps")[Desert Camel Corps](/Turkish_national_focus_tree#Desert_Camel_Corps "Turkish national focus tree") and [![The Tuz Gölü Training Facility](https://hoi4.paradoxwikis.com/images/thumb/a/a5/Goal_generic_small_arms.png/22px-Goal_generic_small_arms.png)](/Turkish_national_focus_tree#The_Tuz_Gölü_Training_Facility "The Tuz Gölü Training Facility")[The Tuz Gölü Training Facility](/Turkish_national_focus_tree#The_Tuz_Gölü_Training_Facility "Turkish national focus tree") ([![Battle for the Bosporus](https://hoi4.paradoxwikis.com/images/thumb/4/4b/DLC_Battle_for_the_Bosporus.png/22px-DLC_Battle_for_the_Bosporus.png)](/Battle_for_the_Bosporus "Battle for the Bosporus")[Battle for the Bosporus](/Battle_for_the_Bosporus "Battle for the Bosporus") required)\n*   [![Flag of Sultanate of Aussa](https://hoi4.paradoxwikis.com/images/thumb/b/bc/Sultanate_of_Aussa.png/24px-Sultanate_of_Aussa.png)](/Sultanate_of_Aussa "Sultanate of Aussa") [Sultanate of Aussa](/Sultanate_of_Aussa "Sultanate of Aussa"): At the game start\n*   At the game start with [![Battle for the Bosporus](https://hoi4.paradoxwikis.com/images/thumb/4/4b/DLC_Battle_for_the_Bosporus.png/22px-DLC_Battle_for_the_Bosporus.png)](/Battle_for_the_Bosporus "Battle for the Bosporus")[Battle for the Bosporus](/Battle_for_the_Bosporus "Battle for the Bosporus") enabled:\n\n*   *   [![Flag of British Raj](https://hoi4.paradoxwikis.com/images/thumb/2/2f/British_Raj.png/24px-British_Raj.png)](/British_Raj "British Raj") [British Raj](/British_Raj "British Raj")\n    *   [![Flag of France](https://hoi4.paradoxwikis.com/images/thumb/d/de/France.png/24px-France.png)](/France "France") [France](/France "France")\n    *   [![Flag of Iraq](https://hoi4.paradoxwikis.com/images/thumb/c/c4/Iraq.png/24px-Iraq.png)](/Iraq "Iraq") [Iraq](/Iraq "Iraq")\n    *   [![Flag of Italy](https://hoi4.paradoxwikis.com/images/thumb/2/2a/Italy.png/24px-Italy.png)](/Italy "Italy") [Italy](/Italy "Italy") \\*\n    *   [![Flag of Oman](https://hoi4.paradoxwikis.com/images/thumb/2/27/Oman.png/24px-Oman.png)](/Oman "Oman") [Oman](/Oman "Oman")\n    *   [![Flag of United Kingdom](https://hoi4.paradoxwikis.com/images/thumb/2/29/United_Kingdom.png/24px-United_Kingdom.png)](/United_Kingdom "United Kingdom") [United Kingdom](/United_Kingdom "United Kingdom")\n    *   [![Flag of Saudi Arabia](https://hoi4.paradoxwikis.com/images/thumb/1/1f/Saudi_Arabia.png/24px-Saudi_Arabia.png)](/Saudi_Arabia "Saudi Arabia") [Saudi Arabia](/Saudi_Arabia "Saudi Arabia")\n    *   [![Flag of Spain](https://hoi4.paradoxwikis.com/images/thumb/5/58/Spain.png/24px-Spain.png)](/Spain "Spain") [Spain](/Spain "Spain")\n    *   [![Flag of Yemen](https://hoi4.paradoxwikis.com/images/thumb/f/fc/Yemen.png/24px-Yemen.png)](/Yemen "Yemen") [Yemen](/Yemen "Yemen")',
    game: 'hoi4',
  },
  {
    id: 'hoi4_ach_122',
    name: "We're Putting the Band Back Together",
    description: 'As Turkey, be in a faction with Germany and Austria-Hungary.',
    icon: 'https://hoi4.paradoxwikis.com/images/2/2e/We%E2%80%99re_Putting_the_Band_Back_Together.png',
    dlc: '',
    version: '1.10',
    difficulty: 'M',
    startingConditions:
      '[![Yes](https://hoi4.paradoxwikis.com/images/thumb/7/77/Yes.png/22px-Yes.png)](/File:Yes.png "Yes") Playing as [![Flag of Turkey](https://hoi4.paradoxwikis.com/images/thumb/b/b3/Turkey.png/24px-Turkey.png)](/Turkey "Turkey") [Turkey](/Turkey "Turkey")',
    completionRequirements:
      '[![Yes](https://hoi4.paradoxwikis.com/images/thumb/7/77/Yes.png/22px-Yes.png)](/File:Yes.png "Yes") Is in a faction with [![Flag of Germany](https://hoi4.paradoxwikis.com/images/thumb/e/e9/German_Reich.png/24px-German_Reich.png)](/Germany "Germany") [Germany](/Germany "Germany") and [![Flag of Austria-Hungary](https://hoi4.paradoxwikis.com/images/thumb/f/f1/Austria-Hungary.png/24px-Austria-Hungary.png)](/Austria-Hungary "Austria-Hungary") [Austria-Hungary](/Austria-Hungary "Austria-Hungary")',
    notes:
      '*For detailed strategies, see [We’re Putting the Band Back Together](/We%E2%80%99re_Putting_the_Band_Back_Together "We’re Putting the Band Back Together")*',
    game: 'hoi4',
  },
  {
    id: 'hoi4_ach_123',
    name: "Dracula's Revenge",
    description: 'As Yugoslavia, establish the autonomous region of Transylvania and have it own all Romanian cores.',
    icon: 'https://hoi4.paradoxwikis.com/images/9/96/Dracula%E2%80%99s_Revenge.png',
    dlc: '',
    version: '1.10',
    difficulty: 'M',
    startingConditions:
      '[![Yes](https://hoi4.paradoxwikis.com/images/thumb/7/77/Yes.png/22px-Yes.png)](/File:Yes.png "Yes") Playing as [![Flag of Yugoslavia](https://hoi4.paradoxwikis.com/images/thumb/f/f3/Yugoslavia.png/24px-Yugoslavia.png)](/Yugoslavia "Yugoslavia") [Yugoslavia](/Yugoslavia "Yugoslavia")',
    completionRequirements:
      '[![Occupation.png](https://hoi4.paradoxwikis.com/images/d/dc/Occupation.png)](/File:Occupation.png) [![Flag of Transylvania](https://hoi4.paradoxwikis.com/images/thumb/8/8f/Transylvania.png/24px-Transylvania.png)](/Transylvania "Transylvania") [Transylvania](/Transylvania "Transylvania") owns all of [![Flag of Romania](https://hoi4.paradoxwikis.com/images/thumb/8/8f/Romania.png/24px-Romania.png)](/Romania "Romania") [Romania](/Romania "Romania")',
    notes:
      'Before 1.12 / By Blood Alone: Go down the communist focus tree towards [![Pan-Balkan Initiative](https://hoi4.paradoxwikis.com/images/thumb/7/7b/Focus_yug_pan_slavic_congress.png/22px-Focus_yug_pan_slavic_congress.png)](/Yugoslavian_national_focus_tree#Pan-Balkan_Initiative "Pan-Balkan Initiative")[Pan-Balkan Initiative](/Yugoslavian_national_focus_tree#Pan-Balkan_Initiative "Yugoslavian national focus tree") and instigate an uprising in [![Flag of Romania](https://hoi4.paradoxwikis.com/images/thumb/8/8f/Romania.png/24px-Romania.png)](/Romania "Romania") [Romania](/Romania "Romania"). When the communists win the civil war, justify on them and declare war (they will not be guaranteed by anyone). Puppet [![Flag of Transylvania](https://hoi4.paradoxwikis.com/images/thumb/8/8f/Transylvania.png/24px-Transylvania.png)](/Transylvania "Transylvania") [Transylvania](/Transylvania "Transylvania") in the peace conference and give them all Romanian territory. Starting with 1.12, this doesn\'t work because of the rework of the peace conference system. You have two choices. Either go down Western focus branch, release Transylvania as a puppet using [![Autonomy for Slavic Transylvania](https://hoi4.paradoxwikis.com/images/thumb/e/ef/Focus_YUG_autonomous_transylvania.png/22px-Focus_YUG_autonomous_transylvania.png)](/Yugoslavian_national_focus_tree#Autonomy_for_Slavic_Transylvania "Autonomy for Slavic Transylvania")[Autonomy for Slavic Transylvania](/Yugoslavian_national_focus_tree#Autonomy_for_Slavic_Transylvania "Yugoslavian national focus tree"), and then defeat Romania; or go Communist and defeat Romania *twice* (first to create the Transylvania puppet, then to give them the rest of Romanian cores). The second route is extra-hard (on historical, anyway), because you need to do it all before the Soviet Union demands Bessarabia in mid-1940.',
    game: 'hoi4',
  },
  {
    id: 'hoi4_ach_124',
    name: 'Prussia of the Balkans',
    description: 'As Bulgaria capitulate Turkey while also controlling the rest of the Balkans, including Greece.',
    icon: 'https://hoi4.paradoxwikis.com/images/0/09/Prussia_of_the_Balkans.png',
    dlc: '',
    version: '1.10',
    difficulty: 'H',
    startingConditions:
      '[![Yes](https://hoi4.paradoxwikis.com/images/thumb/7/77/Yes.png/22px-Yes.png)](/File:Yes.png "Yes") Playing as [![Flag of Bulgaria](https://hoi4.paradoxwikis.com/images/thumb/f/f4/Bulgaria.png/24px-Bulgaria.png)](/Bulgaria "Bulgaria") [Bulgaria](/Bulgaria "Bulgaria")',
    completionRequirements:
      '*   [![War goal](https://hoi4.paradoxwikis.com/images/thumb/c/c2/Relation_wargoal.png/22px-Relation_wargoal.png)](/War_goal "War goal") Is at war with [![Flag of Turkey](https://hoi4.paradoxwikis.com/images/thumb/b/b3/Turkey.png/24px-Turkey.png)](/Turkey "Turkey") [Turkey](/Turkey "Turkey")\n*   [![Yes](https://hoi4.paradoxwikis.com/images/thumb/7/77/Yes.png/22px-Yes.png)](/File:Yes.png "Yes") [![Flag of Turkey](https://hoi4.paradoxwikis.com/images/thumb/b/b3/Turkey.png/24px-Turkey.png)](/Turkey "Turkey") [Turkey](/Turkey "Turkey") has capitulated\n*   [![Occupation.png](https://hoi4.paradoxwikis.com/images/d/dc/Occupation.png)](/File:Occupation.png) Controls all cores of [![Flag of Romania](https://hoi4.paradoxwikis.com/images/thumb/8/8f/Romania.png/24px-Romania.png)](/Romania "Romania") [Romania](/Romania "Romania"), [![Flag of Yugoslavia](https://hoi4.paradoxwikis.com/images/thumb/f/f3/Yugoslavia.png/24px-Yugoslavia.png)](/Yugoslavia "Yugoslavia") [Yugoslavia](/Yugoslavia "Yugoslavia"), [![Flag of Greece](https://hoi4.paradoxwikis.com/images/thumb/8/8e/Kingdom_of_Greece.png/24px-Kingdom_of_Greece.png)](/Greece "Greece") [Greece](/Greece "Greece") (except **Dodecaneso** *(164)*), and [![Flag of Albania](https://hoi4.paradoxwikis.com/images/thumb/0/07/Albania.png/24px-Albania.png)](/Albania "Albania") [Albania](/Albania "Albania")',
    notes:
      'You only need to occupy the states, not own them. Switch to communist and get as many Balkan countries as possible in your faction. The country will flip above 60% communist support ([![Flag of Romania](https://hoi4.paradoxwikis.com/images/thumb/8/8f/Romania.png/24px-Romania.png)](/Romania "Romania") [Romania](/Romania "Romania") and [![Flag of Greece](https://hoi4.paradoxwikis.com/images/thumb/8/8e/Kingdom_of_Greece.png/24px-Kingdom_of_Greece.png)](/Greece "Greece") [Greece](/Greece "Greece") are particularly important to get on your side). Any Balkan country in your faction can be annexed through the [![The Unification of the Balkans](https://hoi4.paradoxwikis.com/images/thumb/a/a1/Focus_BUL_the_unification_of_the_balkans.png/22px-Focus_BUL_the_unification_of_the_balkans.png)](/Bulgarian_national_focus_tree#The_Unification_of_the_Balkans "The Unification of the Balkans")[The Unification of the Balkans](/Bulgarian_national_focus_tree#The_Unification_of_the_Balkans "Bulgarian national focus tree") focus. Once you have established the Federation, attack whoever still controls land in the Balkans and capitulate [![Flag of Turkey](https://hoi4.paradoxwikis.com/images/thumb/b/b3/Turkey.png/24px-Turkey.png)](/Turkey "Turkey") [Turkey](/Turkey "Turkey").  \n**Note:** [![Flag of Turkey](https://hoi4.paradoxwikis.com/images/thumb/b/b3/Turkey.png/24px-Turkey.png)](/Turkey "Turkey") [Turkey](/Turkey "Turkey") needs to be in a faction when they capitulate to satisfy the "at war" and "has capitulated" requirements. Otherwise when they capitulate, they are no longer at war and the achievement doesn\'t fire.',
    game: 'hoi4',
  },
  {
    id: 'hoi4_ach_125',
    name: 'Balkan Problem Solved',
    description: 'As Communist Bulgaria, form the United Balkan Federation and own all Balkan states as cores.',
    icon: 'https://hoi4.paradoxwikis.com/images/e/e5/Balkan_Problem_Solved.png',
    dlc: '',
    version: '1.10',
    difficulty: 'M',
    startingConditions:
      '[![Yes](https://hoi4.paradoxwikis.com/images/thumb/7/77/Yes.png/22px-Yes.png)](/File:Yes.png "Yes") Playing as [![Flag of Bulgaria](https://hoi4.paradoxwikis.com/images/thumb/f/f4/Bulgaria.png/24px-Bulgaria.png)](/Bulgaria "Bulgaria") [Bulgaria](/Bulgaria "Bulgaria")',
    completionRequirements:
      '*   [![Yes](https://hoi4.paradoxwikis.com/images/thumb/7/77/Yes.png/22px-Yes.png)](/File:Yes.png "Yes") Ruling party is [![{{{1}}}](https://hoi4.paradoxwikis.com/images/thumb/e/e9/Communism.png/22px-Communism.png)](/Ideology#Communism "{{{1}}}")[Communist](/Ideology#Communism "Ideology")\n*   [![Relation join faction.png](https://hoi4.paradoxwikis.com/images/thumb/9/91/Relation_join_faction.png/22px-Relation_join_faction.png)](/File:Relation_join_faction.png) Is faction leader\n*   [![Yes](https://hoi4.paradoxwikis.com/images/thumb/7/77/Yes.png/22px-Yes.png)](/File:Yes.png "Yes") Has completed focus [![The Unification of the Balkans](https://hoi4.paradoxwikis.com/images/thumb/a/a1/Focus_BUL_the_unification_of_the_balkans.png/22px-Focus_BUL_the_unification_of_the_balkans.png)](/Bulgarian_national_focus_tree#The_Unification_of_the_Balkans "The Unification of the Balkans")[The Unification of the Balkans](/Bulgarian_national_focus_tree#The_Unification_of_the_Balkans "Bulgarian national focus tree")\n*   [![Yes](https://hoi4.paradoxwikis.com/images/thumb/7/77/Yes.png/22px-Yes.png)](/File:Yes.png "Yes") Controls all your core states',
    notes:
      '**Note:** You don\'t need to own all core states of [![Flag of Romania](https://hoi4.paradoxwikis.com/images/thumb/8/8f/Romania.png/24px-Romania.png)](/Romania "Romania") [Romania](/Romania "Romania"), [![Flag of Greece](https://hoi4.paradoxwikis.com/images/thumb/8/8e/Kingdom_of_Greece.png/24px-Kingdom_of_Greece.png)](/Greece "Greece") [Greece](/Greece "Greece"), [![Flag of Yugoslavia](https://hoi4.paradoxwikis.com/images/thumb/f/f3/Yugoslavia.png/24px-Yugoslavia.png)](/Yugoslavia "Yugoslavia") [Yugoslavia](/Yugoslavia "Yugoslavia") and [![Flag of Albania](https://hoi4.paradoxwikis.com/images/thumb/0/07/Albania.png/24px-Albania.png)](/Albania "Albania") [Albania](/Albania "Albania"), but you do need to control all core states of [![Flag of Bulgaria](https://hoi4.paradoxwikis.com/images/thumb/f/f4/Bulgaria.png/24px-Bulgaria.png)](/Bulgaria "Bulgaria") [Bulgaria](/Bulgaria "Bulgaria"). Ensure you also control Dodecaneso *(164)*.\n\n*For detailed strategies, see [Balkan Problem Solved](/Balkan_Problem_Solved "Balkan Problem Solved")*',
    game: 'hoi4',
  },
  {
    id: 'hoi4_ach_126',
    name: 'Bad Romeance',
    description: 'Restore Byzantium and have Italy, Romania, and Russia as subjects.',
    icon: 'https://hoi4.paradoxwikis.com/images/1/12/Bad_Romeance.png',
    dlc: '',
    version: '1.10',
    difficulty: 'VH',
    startingConditions:
      '[![Yes](https://hoi4.paradoxwikis.com/images/thumb/7/77/Yes.png/22px-Yes.png)](/File:Yes.png "Yes") Playing as [![Flag of Greece](https://hoi4.paradoxwikis.com/images/thumb/8/8e/Kingdom_of_Greece.png/24px-Kingdom_of_Greece.png)](/Greece "Greece") [Greece](/Greece "Greece")',
    completionRequirements:
      '[![Yes](https://hoi4.paradoxwikis.com/images/thumb/7/77/Yes.png/22px-Yes.png)](/File:Yes.png "Yes") [![Flag of Byzantine Empire](https://hoi4.paradoxwikis.com/images/thumb/f/f4/Byzantine_Empire.png/24px-Byzantine_Empire.png)](/Byzantine_Empire "Byzantine Empire") [Byzantine Empire](/Byzantine_Empire "Byzantine Empire") has [![Flag of Soviet Union](https://hoi4.paradoxwikis.com/images/thumb/6/67/Soviet_Union.png/24px-Soviet_Union.png)](/Soviet_Union "Soviet Union") [Soviet Union](/Soviet_Union "Soviet Union"), [![Flag of Romania](https://hoi4.paradoxwikis.com/images/thumb/8/8f/Romania.png/24px-Romania.png)](/Romania "Romania") [Romania](/Romania "Romania") and [![Flag of Italy](https://hoi4.paradoxwikis.com/images/thumb/2/2a/Italy.png/24px-Italy.png)](/Italy "Italy") [Italy](/Italy "Italy") as subjects.',
    notes: '*For detailed strategies, see [Bad Romeance](/Bad_Romeance "Bad Romeance")*',
    game: 'hoi4',
  },
  {
    id: 'hoi4_ach_127',
    name: 'Totally Not Cool, Bromania',
    description: 'As Romania, change sides in the war and capitulate a former ally.',
    icon: 'https://hoi4.paradoxwikis.com/images/0/0c/Totally_Not_Cool%2C_Bromania.png',
    dlc: '',
    version: '1.10',
    difficulty: 'E',
    startingConditions:
      '[![Yes](https://hoi4.paradoxwikis.com/images/thumb/7/77/Yes.png/22px-Yes.png)](/File:Yes.png "Yes") Playing as [![Flag of Romania](https://hoi4.paradoxwikis.com/images/thumb/8/8f/Romania.png/24px-Romania.png)](/Romania "Romania") [Romania](/Romania "Romania")',
    completionRequirements:
      '[![Yes](https://hoi4.paradoxwikis.com/images/thumb/7/77/Yes.png/22px-Yes.png)](/File:Yes.png "Yes")  [![Flag of Romania](https://hoi4.paradoxwikis.com/images/thumb/8/8f/Romania.png/24px-Romania.png)](/Romania "Romania") [Romania](/Romania "Romania") has switched sides and capitulated a former ally (which had not capitulated at the time of the switch)',
    notes:
      'Take the focus [![Revise the Constitution](https://hoi4.paradoxwikis.com/images/thumb/e/e8/Goal_generic_forceful_treaty.png/22px-Goal_generic_forceful_treaty.png)](/Romanian_national_focus_tree#Revise_the_Constitution "Revise the Constitution")[Revise the Constitution](/Romanian_national_focus_tree#Revise_the_Constitution "Romanian national focus tree") then take [![Balkans Dominance](https://hoi4.paradoxwikis.com/images/thumb/5/5a/Goal_demand_sudetenland.png/22px-Goal_demand_sudetenland.png)](/Romanian_national_focus_tree#Balkans_Dominance "Balkans Dominance")[Balkans Dominance](/Romanian_national_focus_tree#Balkans_Dominance "Romanian national focus tree"). Build an army to at least 500k manpower and take the [![Align Hungary](https://hoi4.paradoxwikis.com/images/thumb/5/55/Goal_generic_political_pressure.png/22px-Goal_generic_political_pressure.png)](/Romanian_national_focus_tree#Align_Hungary "Align Hungary")[Align Hungary](/Romanian_national_focus_tree#Align_Hungary "Romanian national focus tree") and [![Split Czechoslovakia](https://hoi4.paradoxwikis.com/images/thumb/2/20/Goal_generic_territory_or_war.png/22px-Goal_generic_territory_or_war.png)](/Romanian_national_focus_tree#Split_Czechoslovakia "Split Czechoslovakia")[Split Czechoslovakia](/Romanian_national_focus_tree#Split_Czechoslovakia "Romanian national focus tree") focuses. If [![Flag of Hungary](https://hoi4.paradoxwikis.com/images/thumb/6/6a/Hungary.png/24px-Hungary.png)](/Hungary "Hungary") [Hungary](/Hungary "Hungary") refuses, win the war and puppet them. [![Flag of Germany](https://hoi4.paradoxwikis.com/images/thumb/e/e9/German_Reich.png/24px-German_Reich.png)](/Germany "Germany") [Germany](/Germany "Germany") should also agree to split [![Flag of Czechoslovakia](https://hoi4.paradoxwikis.com/images/thumb/c/c1/Czechoslovakia.png/24px-Czechoslovakia.png)](/Czechoslovakia "Czechoslovakia") [Czechoslovakia](/Czechoslovakia "Czechoslovakia") giving [![Flag of Romania](https://hoi4.paradoxwikis.com/images/thumb/8/8f/Romania.png/24px-Romania.png)](/Romania "Romania") [Romania](/Romania "Romania") a [![Flag of Slovakia](https://hoi4.paradoxwikis.com/images/thumb/8/89/Slovakia.png/24px-Slovakia.png)](/Slovakia "Slovakia") [Slovakian](/Slovakia "Slovakia") puppet. Take the [![Appoint Pro-Axis Government](https://hoi4.paradoxwikis.com/images/thumb/5/5d/Goal_support_fascism.png/22px-Goal_support_fascism.png)](/Romanian_national_focus_tree#Appoint_Pro-Axis_Government "Appoint Pro-Axis Government")[Appoint Pro-Axis Government](/Romanian_national_focus_tree#Appoint_Pro-Axis_Government "Romanian national focus tree"), take the Fascist Demagogue and flip to fascism. Then head to [![Force Abdication](https://hoi4.paradoxwikis.com/images/thumb/6/62/Focus_rom_abdicate.png/22px-Focus_rom_abdicate.png)](/Romanian_national_focus_tree#Force_Abdication "Force Abdication")[Force Abdication](/Romanian_national_focus_tree#Force_Abdication "Romanian national focus tree"). Remove the Fascist Demagogue once Romania flips to fascism. Wait until Germany declares war against [![Flag of Poland](https://hoi4.paradoxwikis.com/images/thumb/9/99/Poland.png/24px-Poland.png)](/Poland "Poland") [Poland](/Poland "Poland") and [![Flag of Bulgaria](https://hoi4.paradoxwikis.com/images/thumb/f/f4/Bulgaria.png/24px-Bulgaria.png)](/Bulgaria "Bulgaria") [Bulgaria](/Bulgaria "Bulgaria") joins the Axis. Join the war but do not let Hungary and Slovakia into the war. Place the army on the Bulgarian Border. Take [![King Michael\'s Coup](https://hoi4.paradoxwikis.com/images/thumb/7/78/Focus_rom_coup.png/22px-Focus_rom_coup.png)](/Romanian_national_focus_tree#King_Michael\'s_Coup "King Michael\'s Coup")[King Michael\'s Coup](/Romanian_national_focus_tree#King_Michael\'s_Coup "Romanian national focus tree") to flip to democratic and wait until Poland capitulates and the [![Flag of Soviet Union](https://hoi4.paradoxwikis.com/images/thumb/6/67/Soviet_Union.png/24px-Soviet_Union.png)](/Soviet_Union "Soviet Union") [Soviet Union](/Soviet_Union "Soviet Union") takes Eastern Poland. Take the "Join the Allies" decision and capitulate Bulgaria.',
    game: 'hoi4',
  },
  {
    id: 'hoi4_ach_128',
    name: 'Freedom or Death',
    description: 'As Greece, liberate Albania while being at war with Italy.',
    icon: 'https://hoi4.paradoxwikis.com/images/1/18/Freedom_or_Death.png',
    dlc: '',
    version: '1.10',
    difficulty: 'M',
    startingConditions:
      '[![Yes](https://hoi4.paradoxwikis.com/images/thumb/7/77/Yes.png/22px-Yes.png)](/File:Yes.png "Yes") Playing as [![Flag of Greece](https://hoi4.paradoxwikis.com/images/thumb/8/8e/Kingdom_of_Greece.png/24px-Kingdom_of_Greece.png)](/Greece "Greece") [Greece](/Greece "Greece")',
    completionRequirements:
      '*   [![War goal](https://hoi4.paradoxwikis.com/images/thumb/c/c2/Relation_wargoal.png/22px-Relation_wargoal.png)](/War_goal "War goal") Is at war with [![Flag of Italy](https://hoi4.paradoxwikis.com/images/thumb/2/2a/Italy.png/24px-Italy.png)](/Italy "Italy") [Italy](/Italy "Italy")\n*   [![Yes](https://hoi4.paradoxwikis.com/images/thumb/7/77/Yes.png/22px-Yes.png)](/File:Yes.png "Yes") Has full control of **Northern Epirus** *(805)*, **Central Albania** *(44)*, and **Shkodër** *(934)*',
    notes:
      'Go fascist and justify on [![Flag of Albania](https://hoi4.paradoxwikis.com/images/thumb/0/07/Albania.png/24px-Albania.png)](/Albania "Albania") [Albania](/Albania "Albania") once you flip. Since [![Flag of Italy](https://hoi4.paradoxwikis.com/images/thumb/2/2a/Italy.png/24px-Italy.png)](/Italy "Italy") [Italy](/Italy "Italy") is guaranteeing Albania they will join [![Flag of Albania](https://hoi4.paradoxwikis.com/images/thumb/0/07/Albania.png/24px-Albania.png)](/Albania "Albania") [Albania](/Albania "Albania") once you declare war on them. Make sure to rush for the port so that the [![Flag of Italy](https://hoi4.paradoxwikis.com/images/thumb/2/2a/Italy.png/24px-Italy.png)](/Italy "Italy") [Italians](/Italy "Italy") cannot bring over their troops. Capitulate [![Flag of Albania](https://hoi4.paradoxwikis.com/images/thumb/0/07/Albania.png/24px-Albania.png)](/Albania "Albania") [Albania](/Albania "Albania") and take all their land.',
    game: 'hoi4',
  },
  {
    id: 'hoi4_ach_129',
    name: 'Now This is Getting Childish',
    description: 'As Yugoslavia or Bulgaria, be at war while both countries are ruled by a child.',
    icon: 'https://hoi4.paradoxwikis.com/images/f/fb/Now_This_is_Getting_Childish.png',
    dlc: '',
    version: '1.10',
    difficulty: 'E',
    startingConditions:
      '[![Yes](https://hoi4.paradoxwikis.com/images/thumb/7/77/Yes.png/22px-Yes.png)](/File:Yes.png "Yes") Playing as *either*:\n\n*   *   [![Flag of Bulgaria](https://hoi4.paradoxwikis.com/images/thumb/f/f4/Bulgaria.png/24px-Bulgaria.png)](/Bulgaria "Bulgaria") [Bulgaria](/Bulgaria "Bulgaria")\n    *   [![Flag of Yugoslavia](https://hoi4.paradoxwikis.com/images/thumb/f/f3/Yugoslavia.png/24px-Yugoslavia.png)](/Yugoslavia "Yugoslavia") [Yugoslavia](/Yugoslavia "Yugoslavia")',
    completionRequirements:
      '*   [![Yes](https://hoi4.paradoxwikis.com/images/thumb/7/77/Yes.png/22px-Yes.png)](/File:Yes.png "Yes") [![Flag of Bulgaria](https://hoi4.paradoxwikis.com/images/thumb/f/f4/Bulgaria.png/24px-Bulgaria.png)](/Bulgaria "Bulgaria") [Bulgaria](/Bulgaria "Bulgaria") is at war with [![Flag of Yugoslavia](https://hoi4.paradoxwikis.com/images/thumb/f/f3/Yugoslavia.png/24px-Yugoslavia.png)](/Yugoslavia "Yugoslavia") [Yugoslavia](/Yugoslavia "Yugoslavia")\n*   [![Yes](https://hoi4.paradoxwikis.com/images/thumb/7/77/Yes.png/22px-Yes.png)](/File:Yes.png "Yes") [![Flag of Bulgaria](https://hoi4.paradoxwikis.com/images/thumb/f/f4/Bulgaria.png/24px-Bulgaria.png)](/Bulgaria "Bulgaria") [Bulgaria](/Bulgaria "Bulgaria"): **Regency Council** is the current country leader\n*   [![Yes](https://hoi4.paradoxwikis.com/images/thumb/7/77/Yes.png/22px-Yes.png)](/File:Yes.png "Yes") [![Flag of Yugoslavia](https://hoi4.paradoxwikis.com/images/thumb/f/f3/Yugoslavia.png/24px-Yugoslavia.png)](/Yugoslavia "Yugoslavia") [Yugoslavia](/Yugoslavia "Yugoslavia"): country leader has the **Underage Monarch** trait',
    notes:
      'The Regency Council is formed through [![Form a Regency Council](https://hoi4.paradoxwikis.com/images/thumb/5/5e/Focus_BUL_form_a_regency_council.png/22px-Focus_BUL_form_a_regency_council.png)](/Bulgarian_national_focus_tree#Form_a_Regency_Council "Form a Regency Council")[Form a Regency Council](/Bulgarian_national_focus_tree#Form_a_Regency_Council "Bulgarian national focus tree") focus, which requires [![Illusions of a Non-Partisan System](https://hoi4.paradoxwikis.com/images/thumb/e/ed/Focus_usa_voter_registration_act.png/22px-Focus_usa_voter_registration_act.png)](/Bulgarian_national_focus_tree#Illusions_of_a_Non-Partisan_System "Illusions of a Non-Partisan System")[Illusions of a Non-Partisan System](/Bulgarian_national_focus_tree#Illusions_of_a_Non-Partisan_System "Bulgarian national focus tree") which requires at least 20% democratic popularity. Go for [![Plot Against Boris](https://hoi4.paradoxwikis.com/images/thumb/9/94/Focus_BUL_plot_against_boris.png/22px-Focus_BUL_plot_against_boris.png)](/Bulgarian_national_focus_tree#Plot_Against_Boris "Plot Against Boris")[Plot Against Boris](/Bulgarian_national_focus_tree#Plot_Against_Boris "Bulgarian national focus tree") focus and pick the decisions to kill him, then choose a pro-Axis regent and join the Axis. Prince Paul will be replaced by Peter II in February 1941, and [![Flag of Germany](https://hoi4.paradoxwikis.com/images/thumb/e/e9/German_Reich.png/24px-German_Reich.png)](/Germany "Germany") [Germany](/Germany "Germany") will attack Yugoslavia soon after. Join the war to get the achievement.\n\nNot clear how (or if!) this is doable as Yugoslavia: the problem is that the only possible Yugoslavian underage monarch, Peter II, loses his \'underage monarch\' trait in September 1941 when he turns 18, but Tsar Boris III of Bulgaria only dies in 1943 under historical AI, and you have no way to influence that.',
    game: 'hoi4',
  },
  {
    id: 'hoi4_ach_130',
    name: 'Hardly Anything Sèvres',
    description: 'As the Ottoman Empire, hold the capitals of France, the United Kingdom, Italy, and Japan.',
    icon: 'https://hoi4.paradoxwikis.com/images/9/93/Hardly_Anything_S%C3%A8vres.png',
    dlc: '',
    version: '1.10',
    difficulty: 'VH',
    startingConditions:
      '[![Yes](https://hoi4.paradoxwikis.com/images/thumb/7/77/Yes.png/22px-Yes.png)](/File:Yes.png "Yes") Playing as [![Flag of Turkey](https://hoi4.paradoxwikis.com/images/thumb/b/b3/Turkey.png/24px-Turkey.png)](/Turkey "Turkey") [Turkey](/Turkey "Turkey")',
    completionRequirements:
      '[![Yes](https://hoi4.paradoxwikis.com/images/thumb/7/77/Yes.png/22px-Yes.png)](/File:Yes.png "Yes") One of the following must be true:\n\n*   [![Yes](https://hoi4.paradoxwikis.com/images/thumb/7/77/Yes.png/22px-Yes.png)](/File:Yes.png "Yes") Has *cosmetic* tag [![Flag of Ottoman Sultanate](https://hoi4.paradoxwikis.com/images/thumb/c/ce/Ottoman_Empire.png/24px-Ottoman_Empire.png)](/Ottoman_Sultanate "Ottoman Sultanate") [Ottoman Sultanate](/Ottoman_Sultanate "Ottoman Sultanate") (or ideology variants)\n*   [![Yes](https://hoi4.paradoxwikis.com/images/thumb/7/77/Yes.png/22px-Yes.png)](/File:Yes.png "Yes") Has *cosmetic* tag [![Flag of Ottoman Empire](https://hoi4.paradoxwikis.com/images/thumb/c/ce/Ottoman_Empire.png/24px-Ottoman_Empire.png)](/Ottoman_Empire "Ottoman Empire") [Ottoman Empire](/Ottoman_Empire "Ottoman Empire") (or ideology variants)\n\n[![Occupation.png](https://hoi4.paradoxwikis.com/images/d/dc/Occupation.png)](/File:Occupation.png) Controls **Ile de France** *(16)*, **Greater London Area** *(126)*, **Lazio** *(2)*, and **Kanto** *(282)*',
    notes:
      '*For detailed strategies, see [Hardly Anything Sèvres](/Hardly_Anything_S%C3%A8vres "Hardly Anything Sèvres")*',
    game: 'hoi4',
  },
  {
    id: 'hoi4_ach_131',
    name: 'One Nation Under Atatürk, Indivisible',
    description: 'As non-aligned Turkey, have zero negative state modifiers.',
    icon: 'https://hoi4.paradoxwikis.com/images/4/41/One_Nation_Under_Atat%C3%BCrk%2C_Indivisible.png',
    dlc: '',
    version: '1.10',
    difficulty: 'VE',
    startingConditions:
      '*   [![Yes](https://hoi4.paradoxwikis.com/images/thumb/7/77/Yes.png/22px-Yes.png)](/File:Yes.png "Yes") Playing as [![Flag of Turkey](https://hoi4.paradoxwikis.com/images/thumb/b/b3/Turkey.png/24px-Turkey.png)](/Turkey "Turkey") [Turkey](/Turkey "Turkey")\n*   [![Yes](https://hoi4.paradoxwikis.com/images/thumb/7/77/Yes.png/22px-Yes.png)](/File:Yes.png "Yes") [![Battle for the Bosporus](https://hoi4.paradoxwikis.com/images/thumb/4/4b/DLC_Battle_for_the_Bosporus.png/22px-DLC_Battle_for_the_Bosporus.png)](/Battle_for_the_Bosporus "Battle for the Bosporus")[Battle for the Bosporus](/Battle_for_the_Bosporus "Battle for the Bosporus") is enabled',
    completionRequirements:
      '*   [![Yes](https://hoi4.paradoxwikis.com/images/thumb/7/77/Yes.png/22px-Yes.png)](/File:Yes.png "Yes") Ruling party is [![{{{1}}}](https://hoi4.paradoxwikis.com/images/thumb/9/98/Neutrality.png/22px-Neutrality.png)](/Ideology#Neutrality "{{{1}}}")[Non-Aligned](/Ideology#Neutrality "Ideology")\n*   [![No](https://hoi4.paradoxwikis.com/images/thumb/0/04/No.png/22px-No.png)](/File:No.png "No") Has any negative state modifiers:\n    *   [![Modifiers tur kurdish agitation.png](https://hoi4.paradoxwikis.com/images/thumb/b/bc/Modifiers_tur_kurdish_agitation.png/22px-Modifiers_tur_kurdish_agitation.png)](/File:Modifiers_tur_kurdish_agitation.png) Kurdish Agitation\n    *   [![Modifiers tur kurdish separatism.png](https://hoi4.paradoxwikis.com/images/thumb/1/13/Modifiers_tur_kurdish_separatism.png/22px-Modifiers_tur_kurdish_separatism.png)](/File:Modifiers_tur_kurdish_separatism.png) Kurdish Separatism\n    *   [![Modifiers tur kurdish rebellion.png](https://hoi4.paradoxwikis.com/images/thumb/3/3a/Modifiers_tur_kurdish_rebellion.png/22px-Modifiers_tur_kurdish_rebellion.png)](/File:Modifiers_tur_kurdish_rebellion.png) Kurdish Rebellion\n    *   [![Modifiers tur traditionalist unrest.png](https://hoi4.paradoxwikis.com/images/thumb/a/a2/Modifiers_tur_traditionalist_unrest.png/22px-Modifiers_tur_traditionalist_unrest.png)](/File:Modifiers_tur_traditionalist_unrest.png) Traditionalist Opposition\n    *   [![Modifiers tur traditionalist sedition.png](https://hoi4.paradoxwikis.com/images/thumb/3/39/Modifiers_tur_traditionalist_sedition.png/22px-Modifiers_tur_traditionalist_sedition.png)](/File:Modifiers_tur_traditionalist_sedition.png) Traditionalist Sedition\n    *   [![Modifiers tur traditionalist insurgency.png](https://hoi4.paradoxwikis.com/images/thumb/2/2d/Modifiers_tur_traditionalist_insurgency.png/22px-Modifiers_tur_traditionalist_insurgency.png)](/File:Modifiers_tur_traditionalist_insurgency.png) Traditionalist Insurgency\n    *   [![Modifiers tur kemalist unrest.png](https://hoi4.paradoxwikis.com/images/thumb/e/e1/Modifiers_tur_kemalist_unrest.png/22px-Modifiers_tur_kemalist_unrest.png)](/File:Modifiers_tur_kemalist_unrest.png) Kemalist Schemers',
    notes:
      'Go the Kemalist route through the [![Continue the Policy of Etatism](https://hoi4.paradoxwikis.com/images/thumb/1/12/Goal_generic_neutrality_focus.png/22px-Goal_generic_neutrality_focus.png)](/Turkish_national_focus_tree#Continue_the_Policy_of_Etatism "Continue the Policy of Etatism")[Continue the Policy of Etatism](/Turkish_national_focus_tree#Continue_the_Policy_of_Etatism "Turkish national focus tree") and [![Peace at Home](https://hoi4.paradoxwikis.com/images/thumb/3/38/Goal_tripartite_pact.png/22px-Goal_tripartite_pact.png)](/Turkish_national_focus_tree#Peace_at_Home "Peace at Home")[Peace at Home](/Turkish_national_focus_tree#Peace_at_Home "Turkish national focus tree") focuses. Take the Silent Workhorse advisor and use the Secularism decision whenever available to block the expansion of your Islamist rivals. [![Türk Ulusu](https://hoi4.paradoxwikis.com/images/thumb/4/4c/Focus_generic_support_the_left_right.png/22px-Focus_generic_support_the_left_right.png)](/Turkish_national_focus_tree#Türk_Ulusu "Türk Ulusu")[Türk Ulusu](/Turkish_national_focus_tree#Türk_Ulusu "Turkish national focus tree") focus will pacify the Kurdish states, while the Islamist opposition can be dealt with through the Counter-Fundamentalist Operation or compromise decisions (as long as the Kemalist remain loyal). You do not have to go to war and simply need enough political power to repeat the decisions. The achievement will trigger when all Islamic states are Placated, and the Kurdish states are either at Separatist Fatigue or cored.',
    game: 'hoi4',
  },
  {
    id: 'hoi4_ach_132',
    name: 'Master Puppeteer',
    description: 'As Bulgaria, complete the focus The Fate of the Balkans while having 5 or more Balkan puppets.',
    icon: 'https://hoi4.paradoxwikis.com/images/5/5d/Master_Puppeteer.png',
    dlc: '',
    version: '1.10',
    difficulty: 'M',
    startingConditions:
      '[![Yes](https://hoi4.paradoxwikis.com/images/thumb/7/77/Yes.png/22px-Yes.png)](/File:Yes.png "Yes") Playing as [![Flag of Bulgaria](https://hoi4.paradoxwikis.com/images/thumb/f/f4/Bulgaria.png/24px-Bulgaria.png)](/Bulgaria "Bulgaria") [Bulgaria](/Bulgaria "Bulgaria")',
    completionRequirements:
      '*   [![Yes](https://hoi4.paradoxwikis.com/images/thumb/7/77/Yes.png/22px-Yes.png)](/File:Yes.png "Yes") Has completed focus [![The Fate of the Balkans](https://hoi4.paradoxwikis.com/images/thumb/b/ba/Focus_BUL_the_fate_of_the_balkans.png/22px-Focus_BUL_the_fate_of_the_balkans.png)](/Bulgarian_national_focus_tree#The_Fate_of_the_Balkans "The Fate of the Balkans")[The Fate of the Balkans](/Bulgarian_national_focus_tree#The_Fate_of_the_Balkans "Bulgarian national focus tree")\n*   [![Puppet](https://hoi4.paradoxwikis.com/images/thumb/a/a7/Autonomy_puppet_icon.png/22px-Autonomy_puppet_icon.png)](/Puppet#Autonomy_levels "Puppet") At least **6** of the following is a subject of [![Flag of Bulgaria](https://hoi4.paradoxwikis.com/images/thumb/f/f4/Bulgaria.png/24px-Bulgaria.png)](/Bulgaria "Bulgaria") [Bulgaria](/Bulgaria "Bulgaria"):\n\nExpand\n\n*   [![Flag of Romania](https://hoi4.paradoxwikis.com/images/thumb/8/8f/Romania.png/24px-Romania.png)](/Romania "Romania") [Romania](/Romania "Romania")\n*   [![Flag of Yugoslavia](https://hoi4.paradoxwikis.com/images/thumb/f/f3/Yugoslavia.png/24px-Yugoslavia.png)](/Yugoslavia "Yugoslavia") [Yugoslavia](/Yugoslavia "Yugoslavia")\n*   [![Flag of Hungary](https://hoi4.paradoxwikis.com/images/thumb/6/6a/Hungary.png/24px-Hungary.png)](/Hungary "Hungary") [Hungary](/Hungary "Hungary")\n*   [![Flag of Greece](https://hoi4.paradoxwikis.com/images/thumb/8/8e/Kingdom_of_Greece.png/24px-Kingdom_of_Greece.png)](/Greece "Greece") [Greece](/Greece "Greece")\n*   [![Flag of Albania](https://hoi4.paradoxwikis.com/images/thumb/0/07/Albania.png/24px-Albania.png)](/Albania "Albania") [Albania](/Albania "Albania")\n*   [![Flag of Serbia](https://hoi4.paradoxwikis.com/images/thumb/7/76/Serbia.png/24px-Serbia.png)](/Serbia "Serbia") [Serbia](/Serbia "Serbia")\n*   [![Flag of Turkey](https://hoi4.paradoxwikis.com/images/thumb/b/b3/Turkey.png/24px-Turkey.png)](/Turkey "Turkey") [Turkey](/Turkey "Turkey")\n*   [![Flag of Slovenia](https://hoi4.paradoxwikis.com/images/thumb/3/32/Slovenia.png/24px-Slovenia.png)](/Slovenia "Slovenia") [Slovenia](/Slovenia "Slovenia")\n*   [![Flag of Bosnia](https://hoi4.paradoxwikis.com/images/thumb/7/74/Bosnia-Herzegovina.png/24px-Bosnia-Herzegovina.png)](/Bosnia "Bosnia") [Bosnia](/Bosnia "Bosnia")\n*   [![Flag of Herzegovina](https://hoi4.paradoxwikis.com/images/thumb/f/f8/Herzegovina.png/24px-Herzegovina.png)](/Herzegovina "Herzegovina") [Herzegovina](/Herzegovina "Herzegovina")\n*   [![Flag of Macedonia](https://hoi4.paradoxwikis.com/images/thumb/d/d2/Macedonia.png/24px-Macedonia.png)](/Macedonia "Macedonia") [Macedonia](/Macedonia "Macedonia")\n*   [![Flag of Independent State of Croatia](https://hoi4.paradoxwikis.com/images/thumb/b/bb/Independent_State_of_Croatia.png/24px-Independent_State_of_Croatia.png)](/Independent_State_of_Croatia "Independent State of Croatia") [Independent State of Croatia](/Independent_State_of_Croatia "Independent State of Croatia")\n*   [![Flag of Kosovo](https://hoi4.paradoxwikis.com/images/thumb/a/a9/Kosovo.png/24px-Kosovo.png)](/Kosovo "Kosovo") [Kosovo](/Kosovo "Kosovo")\n*   [![Flag of Republic of Montenegro](https://hoi4.paradoxwikis.com/images/thumb/c/cd/Republic_of_Montenegro.png/24px-Republic_of_Montenegro.png)](/Republic_of_Montenegro "Republic of Montenegro") [Republic of Montenegro](/Republic_of_Montenegro "Republic of Montenegro")',
    notes:
      'After completing [![The Fate of the Balkans](https://hoi4.paradoxwikis.com/images/thumb/b/ba/Focus_BUL_the_fate_of_the_balkans.png/22px-Focus_BUL_the_fate_of_the_balkans.png)](/Bulgarian_national_focus_tree#The_Fate_of_the_Balkans "The Fate of the Balkans")[The Fate of the Balkans](/Bulgarian_national_focus_tree#The_Fate_of_the_Balkans "Bulgarian national focus tree") you get the ability to peacefully puppet any nation with a Balkan capital who is in your faction, as well as the capacity to force them into your faction if they are not already in one. A puppeted [![Flag of Yugoslavia](https://hoi4.paradoxwikis.com/images/thumb/f/f3/Yugoslavia.png/24px-Yugoslavia.png)](/Yugoslavia "Yugoslavia") [Yugoslavia](/Yugoslavia "Yugoslavia") can be integrated with its constituent states released as puppets for this achievement, or you can seize 803 *(106)* from them via decision. These states can make the puppets [![Flag of Macedonia](https://hoi4.paradoxwikis.com/images/thumb/d/d2/Macedonia.png/24px-Macedonia.png)](/Macedonia "Macedonia") [Macedonia](/Macedonia "Macedonia") and [![Flag of Serbia](https://hoi4.paradoxwikis.com/images/thumb/7/76/Serbia.png/24px-Serbia.png)](/Serbia "Serbia") [Serbia](/Serbia "Serbia"). In order to get states to join your faction via decision it is important to have more manpower deployed to the field, and puppet expeditionary forces contribute to this number.',
    game: 'hoi4',
  },
  {
    id: 'hoi4_ach_133',
    name: 'At least they run on time!',
    description: 'As fascist Italy, have max level railways in all your core states',
    icon: 'https://hoi4.paradoxwikis.com/images/d/d9/At_least_they_run_on_time%21.png',
    dlc: '',
    version: '1.11',
    difficulty: 'VE',
    startingConditions:
      '[![Yes](https://hoi4.paradoxwikis.com/images/thumb/7/77/Yes.png/22px-Yes.png)](/File:Yes.png "Yes") Playing as [![Flag of Italy](https://hoi4.paradoxwikis.com/images/thumb/2/2a/Italy.png/24px-Italy.png)](/Italy "Italy") [Italy](/Italy "Italy")',
    completionRequirements:
      '[![Railway](https://hoi4.paradoxwikis.com/images/thumb/e/ec/Railway.png/22px-Railway.png)](/Construction "Railway") Has railway of level **5** in:\n\nExpand\n\n*   **Sardegna** *(114)*\n*   **Piemonte** *(158)*\n*   **Lombardia** *(159)*\n*   **Alto Adige** *(39)*\n*   **Trentino** *(850)*\n*   **Veneto** *(160)*\n*   **Litorale** *(736)*\n*   **Istria** *(852)*\n*   **Emilia Romagna** *(161)*\n*   **Abruzzo** *(157)*\n*   **Toscana** *(162)*\n*   **Lazio** *(2)*\n*   **Campania** *(117)*\n*   **Calabria** *(156)*\n*   **Puglia** *(849)*\n*   **Sicilia** *(115)*',
    notes:
      'Only a single province per state needs a level 5 railway. By making the connecting level 5 rail run through two states it counts for both.',
    game: 'hoi4',
  },
  {
    id: 'hoi4_ach_134',
    name: 'Not much fun in Stalingrad',
    description: 'As Germany, capitulate the Soviet Union without taking Stalingrad.',
    icon: 'https://hoi4.paradoxwikis.com/images/3/3d/Not_much_fun_in_Stalingrad.png',
    dlc: '',
    version: '1.11',
    difficulty: 'E',
    startingConditions:
      '[![Yes](https://hoi4.paradoxwikis.com/images/thumb/7/77/Yes.png/22px-Yes.png)](/File:Yes.png "Yes") Playing as [![Flag of Germany](https://hoi4.paradoxwikis.com/images/thumb/e/e9/German_Reich.png/24px-German_Reich.png)](/Germany "Germany") [Germany](/Germany "Germany")',
    completionRequirements:
      '[![Yes](https://hoi4.paradoxwikis.com/images/thumb/7/77/Yes.png/22px-Yes.png)](/File:Yes.png "Yes") Capitulated the [![Flag of Soviet Union](https://hoi4.paradoxwikis.com/images/thumb/6/67/Soviet_Union.png/24px-Soviet_Union.png)](/Soviet_Union "Soviet Union") [Soviet Union](/Soviet_Union "Soviet Union") without taking the city of Stalingrad or having troops in any province in its state',
    notes:
      'It is recommended to use spies to create a Collaboration Government [![La Résistance](https://hoi4.paradoxwikis.com/images/thumb/2/2b/DLC_La_Resistance.png/22px-DLC_La_Resistance.png)](/La_R%C3%A9sistance "La Résistance") and lower the stability of the [![Flag of Soviet Union](https://hoi4.paradoxwikis.com/images/thumb/6/67/Soviet_Union.png/24px-Soviet_Union.png)](/Soviet_Union "Soviet Union") [Soviet Union](/Soviet_Union "Soviet Union") to decrease their surrender threshold. Most easily done with historical focuses on, immediately justifying on Poland then once the war concludes justifying on the Soviets.',
    game: 'hoi4',
  },
  {
    id: 'hoi4_ach_135',
    name: 'No more Partitions',
    description:
      "As Poland, be independent and ensure that both Germany and the USSR are either in your faction or don't exist.",
    icon: 'https://hoi4.paradoxwikis.com/images/b/ba/No_more_Partitions.png',
    dlc: '',
    version: '1.11',
    difficulty: 'E',
    startingConditions:
      '[![Yes](https://hoi4.paradoxwikis.com/images/thumb/7/77/Yes.png/22px-Yes.png)](/File:Yes.png "Yes") Playing as [![Flag of Poland](https://hoi4.paradoxwikis.com/images/thumb/9/99/Poland.png/24px-Poland.png)](/Poland "Poland") [Poland](/Poland "Poland")',
    completionRequirements:
      '*   [![Flag of Germany](https://hoi4.paradoxwikis.com/images/thumb/e/e9/German_Reich.png/24px-German_Reich.png)](/Germany "Germany") [Germany](/Germany "Germany") *either*:\n    *   [![Yes](https://hoi4.paradoxwikis.com/images/thumb/7/77/Yes.png/22px-Yes.png)](/File:Yes.png "Yes") Does not exist\n    *   [![Relation join faction.png](https://hoi4.paradoxwikis.com/images/thumb/9/91/Relation_join_faction.png/22px-Relation_join_faction.png)](/File:Relation_join_faction.png) Is in Faction with [![Flag of Poland](https://hoi4.paradoxwikis.com/images/thumb/9/99/Poland.png/24px-Poland.png)](/Poland "Poland") [Poland](/Poland "Poland")\n*   [![Flag of Soviet Union](https://hoi4.paradoxwikis.com/images/thumb/6/67/Soviet_Union.png/24px-Soviet_Union.png)](/Soviet_Union "Soviet Union") [Soviet Union](/Soviet_Union "Soviet Union") *either*:\n    *   [![Yes](https://hoi4.paradoxwikis.com/images/thumb/7/77/Yes.png/22px-Yes.png)](/File:Yes.png "Yes") Does not exist\n    *   [![Relation join faction.png](https://hoi4.paradoxwikis.com/images/thumb/9/91/Relation_join_faction.png/22px-Relation_join_faction.png)](/File:Relation_join_faction.png) Is in Faction with [![Flag of Poland](https://hoi4.paradoxwikis.com/images/thumb/9/99/Poland.png/24px-Poland.png)](/Poland "Poland") [Poland](/Poland "Poland")\n*   [![free](https://hoi4.paradoxwikis.com/images/thumb/8/84/Autonomy_freedom_icon.png/22px-Autonomy_freedom_icon.png)](/Puppet#Autonomy_levels "free") Is fully independent.\n*   [![Occupation.png](https://hoi4.paradoxwikis.com/images/d/dc/Occupation.png)](/File:Occupation.png) Controls all your core states',
    notes: '*For detailed strategies, see [No more Partitions](/No_more_Partitions "No more Partitions")*',
    game: 'hoi4',
  },
  {
    id: 'hoi4_ach_136',
    name: 'Habsburgs. Habsburgs everywhere',
    description: 'As Poland, install a Habsburg monarch and be in a faction with another Habsburg monarch.',
    icon: 'https://hoi4.paradoxwikis.com/images/6/69/Habsburgs._Habsburgs_everywhere.png',
    dlc: '',
    version: '1.11',
    difficulty: 'VE',
    startingConditions:
      '[![Yes](https://hoi4.paradoxwikis.com/images/thumb/7/77/Yes.png/22px-Yes.png)](/File:Yes.png "Yes") Playing as [![Flag of Poland](https://hoi4.paradoxwikis.com/images/thumb/9/99/Poland.png/24px-Poland.png)](/Poland "Poland") [Poland](/Poland "Poland")',
    completionRequirements:
      '*   [![Yes](https://hoi4.paradoxwikis.com/images/thumb/7/77/Yes.png/22px-Yes.png)](/File:Yes.png "Yes") **Karl Albrecht I** is the current country leader\n*   [![Yes](https://hoi4.paradoxwikis.com/images/thumb/7/77/Yes.png/22px-Yes.png)](/File:Yes.png "Yes") [![Flag of Hungary](https://hoi4.paradoxwikis.com/images/thumb/6/6a/Hungary.png/24px-Hungary.png)](/Hungary "Hungary") [Hungary](/Hungary "Hungary") has **Otto von Habsburg** as the current country leader\n*   [![Relation join faction.png](https://hoi4.paradoxwikis.com/images/thumb/9/91/Relation_join_faction.png/22px-Relation_join_faction.png)](/File:Relation_join_faction.png) Is in Faction with [![Flag of Hungary](https://hoi4.paradoxwikis.com/images/thumb/6/6a/Hungary.png/24px-Hungary.png)](/Hungary "Hungary") [Hungary](/Hungary "Hungary")',
    notes:
      'Karl Albrecht I can be elected king after choosing [![Assemble the Regency Council](https://hoi4.paradoxwikis.com/images/thumb/c/ce/Focus_generic_monarchy_2.png/22px-Focus_generic_monarchy_2.png)](/Polish_national_focus_tree#Assemble_the_Regency_Council "Assemble the Regency Council")[Assemble the Regency Council](/Polish_national_focus_tree#Assemble_the_Regency_Council "Polish national focus tree") and then [![Fulfil the 5th of November Act](https://hoi4.paradoxwikis.com/images/thumb/6/65/Focus_POL_end_the_regency.png/22px-Focus_POL_end_the_regency.png)](/Polish_national_focus_tree#Fulfil_the_5th_of_November_Act "Fulfil the 5th of November Act")[Fulfil the 5th of November Act](/Polish_national_focus_tree#Fulfil_the_5th_of_November_Act "Polish national focus tree"). [![The Soldier King](https://hoi4.paradoxwikis.com/images/thumb/9/97/Focus_ger_return_of_the_kaiser.png/22px-Focus_ger_return_of_the_kaiser.png)](/Polish_national_focus_tree#The_Soldier_King "The Soldier King")[The Soldier King](/Polish_national_focus_tree#The_Soldier_King "Polish national focus tree"), [![The King\'s Guard](https://hoi4.paradoxwikis.com/images/thumb/2/29/Goal_generic_allies_build_infantry.png/22px-Goal_generic_allies_build_infantry.png)](/Polish_national_focus_tree#The_King\'s_Guard "The King\'s Guard")[The King\'s Guard](/Polish_national_focus_tree#The_King\'s_Guard "Polish national focus tree") and [![Press the Habsburg Claim](https://hoi4.paradoxwikis.com/images/thumb/0/0d/Focus_hun_elect_a_king.png/22px-Focus_hun_elect_a_king.png)](/Polish_national_focus_tree#Press_the_Habsburg_Claim "Press the Habsburg Claim")[Press the Habsburg Claim](/Polish_national_focus_tree#Press_the_Habsburg_Claim "Polish national focus tree") will put Otto von Habsburg on the Hungarian throne, and completing [![A Habsburg Alliance](https://hoi4.paradoxwikis.com/images/thumb/a/a5/Focus_proclaim_the_restauration_of_austria_hungary.png/22px-Focus_proclaim_the_restauration_of_austria_hungary.png)](/Polish_national_focus_tree#A_Habsburg_Alliance "A Habsburg Alliance")[A Habsburg Alliance](/Polish_national_focus_tree#A_Habsburg_Alliance "Polish national focus tree") will create the Habsburg faction.',
    game: 'hoi4',
  },
  {
    id: 'hoi4_ach_137',
    name: 'The Pope? How many Divisions does he have?',
    description: 'As the USSR take Rome.',
    icon: 'https://hoi4.paradoxwikis.com/images/1/18/The_Pope%3F_How_many_Divisions_does_he_have%3F.png',
    dlc: '',
    version: '1.11',
    difficulty: 'E',
    startingConditions:
      '[![Yes](https://hoi4.paradoxwikis.com/images/thumb/7/77/Yes.png/22px-Yes.png)](/File:Yes.png "Yes") Playing as [![Flag of Soviet Union](https://hoi4.paradoxwikis.com/images/thumb/6/67/Soviet_Union.png/24px-Soviet_Union.png)](/Soviet_Union "Soviet Union") [Soviet Union](/Soviet_Union "Soviet Union")',
    completionRequirements:
      '[![Occupation.png](https://hoi4.paradoxwikis.com/images/d/dc/Occupation.png)](/File:Occupation.png) Controls **Lazio** *(2)*',
    notes:
      'Can be done relatively easily by defeating the Axis together with the Allies and simply taking **Lazio** *(2)* in the peace deal.',
    game: 'hoi4',
  },
  {
    id: 'hoi4_ach_138',
    name: 'This is going to be LIT',
    description: 'As Lithuania, hold the capitals of all of your neighbours.',
    icon: 'https://hoi4.paradoxwikis.com/images/c/c3/This_is_going_to_be_LIT.png',
    dlc: '',
    version: '1.11',
    difficulty: 'M',
    startingConditions:
      '[![Yes](https://hoi4.paradoxwikis.com/images/thumb/7/77/Yes.png/22px-Yes.png)](/File:Yes.png "Yes") Playing as [![Flag of Lithuania](https://hoi4.paradoxwikis.com/images/thumb/d/d9/Lithuania.png/24px-Lithuania.png)](/Lithuania "Lithuania") [Lithuania](/Lithuania "Lithuania")',
    completionRequirements:
      '[![Occupation.png](https://hoi4.paradoxwikis.com/images/d/dc/Occupation.png)](/File:Occupation.png) Controls:\n\n*   **Rīga** *(808)*\n*   **Warszawa** *(10)*\n*   **Brandenburg** *(64)*\n*   **Kaunas** *(11)*',
    notes:
      '*For detailed strategies, see [This is going to be LIT](/This_is_going_to_be_LIT "This is going to be LIT")*',
    game: 'hoi4',
  },
  {
    id: 'hoi4_ach_139',
    name: 'It has my name on it',
    description: 'As any Baltic State, conquer the entire shoreline of the Baltic Sea.',
    icon: 'https://hoi4.paradoxwikis.com/images/5/57/It_has_my_name_on_it.png',
    dlc: '',
    version: '1.11',
    difficulty: 'M',
    startingConditions:
      '[![Yes](https://hoi4.paradoxwikis.com/images/thumb/7/77/Yes.png/22px-Yes.png)](/File:Yes.png "Yes") Playing as *either*:\n\n*   *   [![Flag of Estonia](https://hoi4.paradoxwikis.com/images/thumb/6/6f/Estonia.png/24px-Estonia.png)](/Estonia "Estonia") [Estonia](/Estonia "Estonia")\n    *   [![Flag of Latvia](https://hoi4.paradoxwikis.com/images/thumb/7/7c/Latvia.png/24px-Latvia.png)](/Latvia "Latvia") [Latvia](/Latvia "Latvia")\n    *   [![Flag of Lithuania](https://hoi4.paradoxwikis.com/images/thumb/d/d9/Lithuania.png/24px-Lithuania.png)](/Lithuania "Lithuania") [Lithuania](/Lithuania "Lithuania")',
    completionRequirements:
      '[![Occupation.png](https://hoi4.paradoxwikis.com/images/d/dc/Occupation.png)](/File:Occupation.png) Controls:\n\nExpand\n\n*   **Sjaelland** *(37)*\n*   **Jylland** *(99)*\n*   **Holstein** *(58)*\n*   **Schleswig** *(909)*\n*   **Mecklenburg** *(61)*\n*   **Hinterpommern** *(63)*\n*   **Gdynia** *(807)*\n*   **Danzig** *(85)*\n*   **Ermland-Masuren** *(5)*\n*   **Königsberg** *(763)*\n*   **Klaipeda** *(188)*\n*   **Žemaitija** *(189)*\n*   **Kurzeme** *(190)*\n*   **Zemgale** *(809)*\n*   **Rīga** *(808)*\n*   **Pärnu** *(13)*\n*   **Vidzeme** *(12)*\n*   **Harju** *(812)*\n*   **Saaremaa** *(811)*\n*   **Virumaa** *(813)*\n*   **Luga** *(208)*\n*   **Leningrad** *(195)*\n*   **Norrbotten** *(666)*\n*   **Gävleborg** *(38)*\n*   **Södermanland** *(141)*\n*   **Småland** *(139)*\n*   **Skåne** *(138)*\n*   **Västergötland** *(140)*\n*   **Karjala** *(146)*\n*   **Uusimaa** *(111)*\n*   **Vaasa** *(149)*\n*   **Lappi** *(148)*\n*   **Turku** *(926)*\n*   **Kymi** *(928)*\n*   **Oulu** *(929)*',
    notes: '*For detailed strategies, see [It has my name on it](/It_has_my_name_on_it "It has my name on it")*',
    game: 'hoi4',
  },
  {
    id: 'hoi4_ach_140',
    name: 'This Achievement is Cheesy',
    description: 'As Latvia, form Ostland and occupy Vasterbotten.',
    icon: 'https://hoi4.paradoxwikis.com/images/6/68/This_Achievement_is_Cheesy.png',
    dlc: '',
    version: '1.11',
    difficulty: 'M',
    startingConditions:
      '[![Yes](https://hoi4.paradoxwikis.com/images/thumb/7/77/Yes.png/22px-Yes.png)](/File:Yes.png "Yes") Playing as [![Flag of Latvia](https://hoi4.paradoxwikis.com/images/thumb/7/7c/Latvia.png/24px-Latvia.png)](/Latvia "Latvia") [Latvia](/Latvia "Latvia")',
    completionRequirements:
      '*   [![Occupation.png](https://hoi4.paradoxwikis.com/images/d/dc/Occupation.png)](/File:Occupation.png) Controls **Norrbotten** *(666)*\n*   [![Yes](https://hoi4.paradoxwikis.com/images/thumb/7/77/Yes.png/22px-Yes.png)](/File:Yes.png "Yes") Has completed focus [![Ostland](https://hoi4.paradoxwikis.com/images/thumb/d/df/Focus_LAT_ostland.png/36px-Focus_LAT_ostland.png)](/Latvian_national_focus_tree#Ostland "Ostland")[Ostland](/Latvian_national_focus_tree#Ostland "Latvian national focus tree")',
    notes:
      '**Note:** The achievements description is misleading because it suggests **Västerbotten** *(918)* when in fact it requires **Norrbotten** *(666)*.\n\n*For detailed strategies, see [This Achievement is Cheesy](/This_Achievement_is_Cheesy "This Achievement is Cheesy")*',
    game: 'hoi4',
  },
  {
    id: 'hoi4_ach_141',
    name: 'Esti is Scandi',
    description: 'As Estonia Secure Scandinavia.',
    icon: 'https://hoi4.paradoxwikis.com/images/c/c0/Esti_is_Scandi.png',
    dlc: '',
    version: '1.11',
    difficulty: 'H',
    startingConditions:
      '[![Yes](https://hoi4.paradoxwikis.com/images/thumb/7/77/Yes.png/22px-Yes.png)](/File:Yes.png "Yes") Playing as [![Flag of Estonia](https://hoi4.paradoxwikis.com/images/thumb/6/6f/Estonia.png/24px-Estonia.png)](/Estonia "Estonia") [Estonia](/Estonia "Estonia")',
    completionRequirements:
      '[![Yes](https://hoi4.paradoxwikis.com/images/thumb/7/77/Yes.png/22px-Yes.png)](/File:Yes.png "Yes") You or your puppet controls:\n\nExpand\n\n*   **Oslofjord** *(110)*\n*   **Vestlandet** *(142)*\n*   **Trøndelag** *(143)*\n*   **Nordland** *(144)*\n*   **Norrbotten** *(666)*\n*   **Gävleborg** *(38)*\n*   **Södermanland** *(141)*\n*   **Småland** *(139)*\n*   **Västergötland** *(140)*\n*   **Skåne** *(138)*\n*   **Gotland** *(124)*\n*   **Sjaelland** *(37)*\n*   **Jylland** *(99)*',
    notes: '*For detailed strategies, see [Esti is Scandi](/Esti_is_Scandi "Esti is Scandi")*',
    game: 'hoi4',
  },
  {
    id: 'hoi4_ach_142',
    name: 'Not a step back!',
    description: 'As the Soviet Union never lose 1 core territory to anyone before 1945.',
    icon: 'https://hoi4.paradoxwikis.com/images/1/15/Not_a_step_back%21.png',
    dlc: '',
    version: '1.11',
    difficulty: 'M',
    startingConditions:
      '[![Yes](https://hoi4.paradoxwikis.com/images/thumb/7/77/Yes.png/22px-Yes.png)](/File:Yes.png "Yes") Playing as [![Flag of Soviet Union](https://hoi4.paradoxwikis.com/images/thumb/6/67/Soviet_Union.png/24px-Soviet_Union.png)](/Soviet_Union "Soviet Union") [Soviet Union](/Soviet_Union "Soviet Union")',
    completionRequirements:
      '*   [![Time](https://hoi4.paradoxwikis.com/images/thumb/0/08/Time.png/22px-Time.png)](/File:Time.png "Time") After Jan 1st, 1945\n*   [![No](https://hoi4.paradoxwikis.com/images/thumb/0/04/No.png/22px-No.png)](/File:No.png "No") Has lost a core state',
    notes:
      '**Note:** Do **not** take the focus "Reconcile Japan" since North Sakhalin is your core!\n\n*For detailed strategies, see [Not a step back!](/Not_a_step_back! "Not a step back!")*',
    game: 'hoi4',
  },
  {
    id: 'hoi4_ach_143',
    name: 'One Step Forward',
    description: 'As Soviet Union declare a war on Poland and Germany before Germany attacks Poland.',
    icon: 'https://hoi4.paradoxwikis.com/images/0/04/One_Step_Forward.png',
    dlc: '',
    version: '1.11',
    difficulty: 'VE',
    startingConditions:
      '[![Yes](https://hoi4.paradoxwikis.com/images/thumb/7/77/Yes.png/22px-Yes.png)](/File:Yes.png "Yes") Playing as [![Flag of Soviet Union](https://hoi4.paradoxwikis.com/images/thumb/6/67/Soviet_Union.png/24px-Soviet_Union.png)](/Soviet_Union "Soviet Union") [Soviet Union](/Soviet_Union "Soviet Union")',
    completionRequirements:
      '*   [![War goal](https://hoi4.paradoxwikis.com/images/thumb/c/c2/Relation_wargoal.png/22px-Relation_wargoal.png)](/War_goal "War goal") Is at war with [![Flag of Poland](https://hoi4.paradoxwikis.com/images/thumb/9/99/Poland.png/24px-Poland.png)](/Poland "Poland") [Poland](/Poland "Poland")\n*   [![War goal](https://hoi4.paradoxwikis.com/images/thumb/c/c2/Relation_wargoal.png/22px-Relation_wargoal.png)](/War_goal "War goal") Is at war with [![Flag of Germany](https://hoi4.paradoxwikis.com/images/thumb/e/e9/German_Reich.png/24px-German_Reich.png)](/Germany "Germany") [Germany](/Germany "Germany")\n*   [![No](https://hoi4.paradoxwikis.com/images/thumb/0/04/No.png/22px-No.png)](/File:No.png "No") Germany attacked Poland first',
    notes:
      'Set up a frontline along the Polish border. Justify on Poland, then declare war. Justify and declare war on Germany too. You will get the achievement when you are at war with both Poland and Germany at the same time.',
    game: 'hoi4',
  },
  {
    id: 'hoi4_ach_144',
    name: 'The Soviet Onion',
    description: 'As the Soviet Union, have only puppets as neighbors.',
    icon: 'https://hoi4.paradoxwikis.com/images/2/29/The_Soviet_Onion.png',
    dlc: '',
    version: '1.11',
    difficulty: 'M',
    startingConditions:
      '[![Yes](https://hoi4.paradoxwikis.com/images/thumb/7/77/Yes.png/22px-Yes.png)](/File:Yes.png "Yes") Playing as [![Flag of Soviet Union](https://hoi4.paradoxwikis.com/images/thumb/6/67/Soviet_Union.png/24px-Soviet_Union.png)](/Soviet_Union "Soviet Union") [Soviet Union](/Soviet_Union "Soviet Union")',
    completionRequirements:
      '[![Puppet](https://hoi4.paradoxwikis.com/images/thumb/a/a7/Autonomy_puppet_icon.png/22px-Autonomy_puppet_icon.png)](/Puppet#Autonomy_levels "Puppet") Every neighbouring country is your subject',
    notes: '*For detailed strategies, see [The Soviet Onion](/The_Soviet_Onion "The Soviet Onion")*',
    game: 'hoi4',
  },
  {
    id: 'hoi4_ach_145',
    name: 'Crusader Kings III',
    description: 'As Poland, crown a King (or Queen) and capture Jerusalem.',
    icon: 'https://hoi4.paradoxwikis.com/images/7/72/Crusader_Kings_III.png',
    dlc: '',
    version: '1.11',
    difficulty: 'M',
    startingConditions:
      '[![Yes](https://hoi4.paradoxwikis.com/images/thumb/7/77/Yes.png/22px-Yes.png)](/File:Yes.png "Yes") Playing as [![Flag of Poland](https://hoi4.paradoxwikis.com/images/thumb/9/99/Poland.png/24px-Poland.png)](/Poland "Poland") [Poland](/Poland "Poland")',
    completionRequirements:
      '*   [![Yes](https://hoi4.paradoxwikis.com/images/thumb/7/77/Yes.png/22px-Yes.png)](/File:Yes.png "Yes") Has elected a Monarch\n*   [![Occupation.png](https://hoi4.paradoxwikis.com/images/d/dc/Occupation.png)](/File:Occupation.png) Controls **Palestine** *(454)*',
    notes: '*For detailed strategies, see [Crusader Kings III](/Crusader_Kings_III "Crusader Kings III")*',
    game: 'hoi4',
  },
  {
    id: 'hoi4_ach_146',
    name: 'The Romanovs laugh last',
    description:
      'Restore the Romanovs to the throne and conquer Germany, Hungary, Austria, Czechoslovakia, Turkey, and Bulgaria.',
    icon: 'https://hoi4.paradoxwikis.com/images/a/a7/The_Romanovs_laugh_last.png',
    dlc: '',
    version: '1.11',
    difficulty: 'H',
    startingConditions:
      '[![Yes](https://hoi4.paradoxwikis.com/images/thumb/7/77/Yes.png/22px-Yes.png)](/File:Yes.png "Yes") Playing as [![Flag of Soviet Union](https://hoi4.paradoxwikis.com/images/thumb/6/67/Soviet_Union.png/24px-Soviet_Union.png)](/Soviet_Union "Soviet Union") [Soviet Union](/Soviet_Union "Soviet Union")',
    completionRequirements:
      '*   [![Yes](https://hoi4.paradoxwikis.com/images/thumb/7/77/Yes.png/22px-Yes.png)](/File:Yes.png "Yes")*Either*:\n    *   Has national spirit [![Idea SOV vladimir kirillovich.png](https://hoi4.paradoxwikis.com/images/thumb/6/6c/Idea_SOV_vladimir_kirillovich.png/22px-Idea_SOV_vladimir_kirillovich.png)](/File:Idea_SOV_vladimir_kirillovich.png) **Tsar Vladimir I**\n    *   **Vladimir III** Is the current country leader\n*   [![Occupation.png](https://hoi4.paradoxwikis.com/images/d/dc/Occupation.png)](/File:Occupation.png) You or your subjects control:\n\nExpand\n\n*   *   **Brandenburg** *(64)*\n    *   **Bohemia** *(9)*\n    *   **Niederösterreich** *(4)*\n    *   **Northern Hungary** *(43)*\n    *   **Sofia** *(48)*\n    *   **Ankara** *(49)*',
    notes:
      '*For detailed strategies, see [The Romanovs Laugh Last](/The_Romanovs_Laugh_Last "The Romanovs Laugh Last")*',
    game: 'hoi4',
  },
  {
    id: 'hoi4_ach_147',
    name: "We don't really like statistics",
    description:
      'As the Soviet Union under Stalin, conquer Germany while suffering less than 1 million casualties total.',
    icon: 'https://hoi4.paradoxwikis.com/images/1/18/We_don%27t_really_like_statistics.png',
    dlc: '',
    version: '1.11',
    difficulty: 'M',
    startingConditions:
      '[![Yes](https://hoi4.paradoxwikis.com/images/thumb/7/77/Yes.png/22px-Yes.png)](/File:Yes.png "Yes") Playing as [![Flag of Soviet Union](https://hoi4.paradoxwikis.com/images/thumb/6/67/Soviet_Union.png/24px-Soviet_Union.png)](/Soviet_Union "Soviet Union") [Soviet Union](/Soviet_Union "Soviet Union")',
    completionRequirements:
      '*   [![Yes](https://hoi4.paradoxwikis.com/images/thumb/7/77/Yes.png/22px-Yes.png)](/File:Yes.png "Yes") **Iosif Stalin** is the current country leader\n*    [![Yes](https://hoi4.paradoxwikis.com/images/thumb/7/77/Yes.png/22px-Yes.png)](/File:Yes.png "Yes") Has defeated Germany while taking less than 1 million casualties',
    notes:
      "Germany must capitulate to you. If it capitulates to another faction and you don't see the popup, you won't get the achievement.\n\nCan be done in a historical playthrough, but it's easiest to achieve when Germany goes for Oppose Hitler. Attack the Monarchist (or both sides) before they can recover from the civil war.\n\nSomething to note is that this number only applies to casualties taken from Germany; you can take as many casualties as you like from other countries you are at war with.",
    game: 'hoi4',
  },
  {
    id: 'hoi4_ach_148',
    name: 'Race for Germany',
    description:
      'As the Soviet union, capitulate Germany after the fall of France before the Allies control one German core state.',
    icon: 'https://hoi4.paradoxwikis.com/images/4/46/Race_for_Germany.png',
    dlc: '',
    version: '1.11',
    difficulty: 'M',
    startingConditions:
      '[![Yes](https://hoi4.paradoxwikis.com/images/thumb/7/77/Yes.png/22px-Yes.png)](/File:Yes.png "Yes") Playing as [![Flag of Soviet Union](https://hoi4.paradoxwikis.com/images/thumb/6/67/Soviet_Union.png/24px-Soviet_Union.png)](/Soviet_Union "Soviet Union") [Soviet Union](/Soviet_Union "Soviet Union")',
    completionRequirements:
      '[![Yes](https://hoi4.paradoxwikis.com/images/thumb/7/77/Yes.png/22px-Yes.png)](/File:Yes.png "Yes") Conquered Germany after the Fall of France, before any other country took a core state of Germany.',
    notes:
      'When [![Flag of Germany](https://hoi4.paradoxwikis.com/images/thumb/e/e9/German_Reich.png/24px-German_Reich.png)](/Germany "Germany") [Germany](/Germany "Germany") capitulates, all their core states have to fall under your control. France must be in the Allies and have capitulated.\n\nThe earlier the war, the better your odds. Go down the Collective Security branch and pick Eradicate Western Fascism (mid-1939 to optimize the attack bonus). Refuse the Molotov-Ribbentrop pact, and attack the German when they close in on Paris. Collaboration Government in Germany could be helpful.\n\nAlternatively help Germany kill the Allies by naval invading the UK after the fall of France then kill Germany. It is safer but harder.',
    game: 'hoi4',
  },
  {
    id: 'hoi4_ach_149',
    name: 'Siberian Tiger',
    description: 'As Tannu Tuva, form Siberia.',
    icon: 'https://hoi4.paradoxwikis.com/images/0/06/Siberian_Tiger.png',
    dlc: '',
    version: '1.11',
    difficulty: 'VH',
    startingConditions:
      '[![Yes](https://hoi4.paradoxwikis.com/images/thumb/7/77/Yes.png/22px-Yes.png)](/File:Yes.png "Yes") Playing as [![Flag of Tannu Tuva](https://hoi4.paradoxwikis.com/images/thumb/5/54/Tannu_Tuva.png/24px-Tannu_Tuva.png)](/Tannu_Tuva "Tannu Tuva") [Tannu Tuva](/Tannu_Tuva "Tannu Tuva")',
    completionRequirements:
      '[![Yes](https://hoi4.paradoxwikis.com/images/thumb/7/77/Yes.png/22px-Yes.png)](/File:Yes.png "Yes") Has formed [![Flag of Siberia](https://hoi4.paradoxwikis.com/images/thumb/c/cb/Republic_of_Siberia.png/24px-Republic_of_Siberia.png)](/Siberia "Siberia") [Siberia](/Siberia "Siberia")',
    notes: '*For detailed strategies, see [Siberian Tiger](/Siberian_Tiger "Siberian Tiger")*',
    game: 'hoi4',
  },
  {
    id: 'hoi4_ach_150',
    name: 'Just proper gander',
    description: 'As the Soviet Union, activate 30 propaganda campaigns before 1945.',
    icon: 'https://hoi4.paradoxwikis.com/images/8/8d/Just_proper_gander.png',
    dlc: '',
    version: '1.11',
    difficulty: 'E',
    startingConditions:
      '[![Yes](https://hoi4.paradoxwikis.com/images/thumb/7/77/Yes.png/22px-Yes.png)](/File:Yes.png "Yes") Playing as [![Flag of Soviet Union](https://hoi4.paradoxwikis.com/images/thumb/6/67/Soviet_Union.png/24px-Soviet_Union.png)](/Soviet_Union "Soviet Union") [Soviet Union](/Soviet_Union "Soviet Union")',
    completionRequirements:
      '*   [![Yes](https://hoi4.paradoxwikis.com/images/thumb/7/77/Yes.png/22px-Yes.png)](/File:Yes.png "Yes") Completed at least **30** propaganda Campaigns\n*   [![Time](https://hoi4.paradoxwikis.com/images/thumb/0/08/Time.png/22px-Time.png)](/File:Time.png "Time") After Jan 1st, 1945',
    notes:
      'Complete "The Path of Marxism Leninism", "Addressing Internal Affairs", "Expand the Agitprop", "The Komsomol" and then either "Positive Heroism" or "Collectivist Propaganda" to unlock the Agitprop decisions and expand to three slots. Continually take these decisions as soon as they are available to achieve 30 campaigns around five years after starting so make sure to start by 1939 just to be safe.',
    game: 'hoi4',
  },
  {
    id: 'hoi4_ach_151',
    name: 'Around Eurasia in 80 days',
    description: 'Make a railroad from Gibraltar to Singapore.',
    icon: 'https://hoi4.paradoxwikis.com/images/3/3d/Around_Eurasia_in_80_days.png',
    dlc: '',
    version: '1.11',
    difficulty: 'H',
    startingConditions: '',
    completionRequirements:
      '[![Railway](https://hoi4.paradoxwikis.com/images/thumb/e/ec/Railway.png/22px-Railway.png)](/Construction "Railway") Has Railway connection between **Gibraltar** (4135) and **Singapore** (12299)',
    notes:
      'For railways to connect, the provinces must be owned by members of the same faction. There are multiple possible routes to choose from. The route which passes through the fewest countries is Gibraltar - Spain - France - Germany - Poland - Soviet Union - Iran - British Raj - British Burma - Siam - British Malaya.',
    game: 'hoi4',
  },
  {
    id: 'hoi4_ach_152',
    name: 'Poland Peasant Revolution',
    description: "As Poland, have the Peasant's Strike overthrow the government.",
    icon: 'https://hoi4.paradoxwikis.com/images/1/10/Poland_Peasant_Revolution.png',
    dlc: '',
    version: '1.11',
    difficulty: 'VE',
    startingConditions:
      '[![Yes](https://hoi4.paradoxwikis.com/images/thumb/7/77/Yes.png/22px-Yes.png)](/File:Yes.png "Yes") Playing as [![Flag of Poland](https://hoi4.paradoxwikis.com/images/thumb/9/99/Poland.png/24px-Poland.png)](/Poland "Poland") [Poland](/Poland "Poland")',
    completionRequirements:
      '*   [![Yes](https://hoi4.paradoxwikis.com/images/thumb/7/77/Yes.png/22px-Yes.png)](/File:Yes.png "Yes") Has completed focus [![Organize the Peasant\'s Strike](https://hoi4.paradoxwikis.com/images/thumb/7/70/Goal_generic_war_with_comintern.png/36px-Goal_generic_war_with_comintern.png)](/Polish_national_focus_tree#Organize_the_Peasant\'s_Strike "Organize the Peasant\'s Strike")[Organize the Peasant\'s Strike](/Polish_national_focus_tree#Organize_the_Peasant\'s_Strike "Polish national focus tree")\n*   [![Yes](https://hoi4.paradoxwikis.com/images/thumb/7/77/Yes.png/22px-Yes.png)](/File:Yes.png "Yes") Is not in a civil war\n*   [![Yes](https://hoi4.paradoxwikis.com/images/thumb/7/77/Yes.png/22px-Yes.png)](/File:Yes.png "Yes") Ruling party is *either* [![{{{1}}}](https://hoi4.paradoxwikis.com/images/thumb/e/e9/Democracy.png/22px-Democracy.png)](/Ideology#Democracy "{{{1}}}")[Democratic](/Ideology#Democracy "Ideology") *or* [![{{{1}}}](https://hoi4.paradoxwikis.com/images/thumb/e/e9/Communism.png/22px-Communism.png)](/Ideology#Communism "{{{1}}}")[Communist](/Ideology#Communism "Ideology")',
    notes:
      'Simply take the focus “Organize the Peasant’s Strike” and then take the decisions to claim provinces as well as the option to expand the strike to the factories. Having even a few provinces let’s you win the civil war easily.',
    game: 'hoi4',
  },
  {
    id: 'hoi4_ach_153',
    name: '…and you get a canton, everybody gets a canton!',
    description: 'As Switzerland, have 24 states',
    icon: 'https://hoi4.paradoxwikis.com/images/9/94/%E2%80%A6and_you_get_a_canton%2C_everybody_gets_a_canton%21.png',
    dlc: '',
    version: '1.12',
    difficulty: 'M',
    startingConditions:
      '[![Yes](https://hoi4.paradoxwikis.com/images/thumb/7/77/Yes.png/22px-Yes.png)](/File:Yes.png "Yes") Playing as [![Flag of Switzerland](https://hoi4.paradoxwikis.com/images/thumb/0/01/Switzerland.png/24px-Switzerland.png)](/Switzerland "Switzerland") [Switzerland](/Switzerland "Switzerland")',
    completionRequirements:
      '[![Occupation.png](https://hoi4.paradoxwikis.com/images/d/dc/Occupation.png)](/File:Occupation.png) Owns more than 24 states',
    notes:
      '*For detailed strategies, see […and you get a canton, everybody gets a canton!](/%E2%80%A6and_you_get_a_canton,_everybody_gets_a_canton! "…and you get a canton, everybody gets a canton!")*',
    game: 'hoi4',
  },
  {
    id: 'hoi4_ach_154',
    name: "I'm not locked in here with you…",
    description: 'As Switzerland, declare war on Germany and win.',
    icon: 'https://hoi4.paradoxwikis.com/images/0/06/I%E2%80%99m_not_locked_in_here_with_you%E2%80%A6.png',
    dlc: '',
    version: '1.12',
    difficulty: 'M',
    startingConditions:
      '[![Yes](https://hoi4.paradoxwikis.com/images/thumb/7/77/Yes.png/22px-Yes.png)](/File:Yes.png "Yes") Playing as [![Flag of Switzerland](https://hoi4.paradoxwikis.com/images/thumb/0/01/Switzerland.png/24px-Switzerland.png)](/Switzerland "Switzerland") [Switzerland](/Switzerland "Switzerland")',
    completionRequirements:
      '*   [![Yes](https://hoi4.paradoxwikis.com/images/thumb/7/77/Yes.png/22px-Yes.png)](/File:Yes.png "Yes") Has declared war on [![Flag of Germany](https://hoi4.paradoxwikis.com/images/thumb/e/e9/German_Reich.png/24px-German_Reich.png)](/Germany "Germany") [Germany](/Germany "Germany")\n*   [![Yes](https://hoi4.paradoxwikis.com/images/thumb/7/77/Yes.png/22px-Yes.png)](/File:Yes.png "Yes") Has won the war against [![Flag of Germany](https://hoi4.paradoxwikis.com/images/thumb/e/e9/German_Reich.png/24px-German_Reich.png)](/Germany "Germany") [Germany](/Germany "Germany")',
    notes:
      '*For detailed strategies, see [I’m not locked in here with you…](/I%E2%80%99m_not_locked_in_here_with_you%E2%80%A6 "I’m not locked in here with you…")*',
    game: 'hoi4',
  },
  {
    id: 'hoi4_ach_155',
    name: 'Swiss Cheese',
    description: 'As Switzerland annex 5 states that are not contiguous with each other or Switzerland.',
    icon: 'https://hoi4.paradoxwikis.com/images/5/5b/Swiss_Cheese.png',
    dlc: '',
    version: '1.12',
    difficulty: 'M',
    startingConditions:
      '[![Yes](https://hoi4.paradoxwikis.com/images/thumb/7/77/Yes.png/22px-Yes.png)](/File:Yes.png "Yes") Playing as [![Flag of Switzerland](https://hoi4.paradoxwikis.com/images/thumb/0/01/Switzerland.png/24px-Switzerland.png)](/Switzerland "Switzerland") [Switzerland](/Switzerland "Switzerland")',
    completionRequirements:
      '[![Occupation.png](https://hoi4.paradoxwikis.com/images/d/dc/Occupation.png)](/File:Occupation.png) Has 5 states not contiguous to each other after a peace conference',
    notes: '*For detailed strategies, see [Swiss Cheese](/Swiss_Cheese "Swiss Cheese")*',
    game: 'hoi4',
  },
  {
    id: 'hoi4_ach_156',
    name: 'You Shall Not Pass',
    description:
      'As Switzerland win a defensive or offensive war without ever losing Western Swiss Alps, Eastern Swiss Alps or Ticino',
    icon: 'https://hoi4.paradoxwikis.com/images/b/b2/You_Shall_Not_Pass.png',
    dlc: '',
    version: '1.12',
    difficulty: 'E',
    startingConditions:
      '[![Yes](https://hoi4.paradoxwikis.com/images/thumb/7/77/Yes.png/22px-Yes.png)](/File:Yes.png "Yes") Playing as [![Flag of Switzerland](https://hoi4.paradoxwikis.com/images/thumb/0/01/Switzerland.png/24px-Switzerland.png)](/Switzerland "Switzerland") [Switzerland](/Switzerland "Switzerland")',
    completionRequirements:
      '[![Yes](https://hoi4.paradoxwikis.com/images/thumb/7/77/Yes.png/22px-Yes.png)](/File:Yes.png "Yes") Has won a defensive war without losing **Western Swiss Alps** *(847)*, **Eastern Swiss Alps** *(151)* or **Ticino** *(846)*',
    notes: '*For detailed strategies, see [You Shall Not Pass](/You_Shall_Not_Pass "You Shall Not Pass")*',
    game: 'hoi4',
  },
  {
    id: 'hoi4_ach_157',
    name: 'The Lion that Roared',
    description: 'As Ethiopia, without being in a faction, force the Italians to make peace. Again.',
    icon: 'https://hoi4.paradoxwikis.com/images/4/45/The_Lion_that_Roared.png',
    dlc: '',
    version: '1.12',
    difficulty: 'H',
    startingConditions:
      '[![Yes](https://hoi4.paradoxwikis.com/images/thumb/7/77/Yes.png/22px-Yes.png)](/File:Yes.png "Yes") Playing as [![Flag of Ethiopia](https://hoi4.paradoxwikis.com/images/thumb/0/06/Ethiopia.png/24px-Ethiopia.png)](/Ethiopia "Ethiopia") [Ethiopia](/Ethiopia "Ethiopia")',
    completionRequirements:
      '[![Yes](https://hoi4.paradoxwikis.com/images/thumb/7/77/Yes.png/22px-Yes.png)](/File:Yes.png "Yes") Forced the Italians to make peace',
    notes:
      "This achievement requires you either to push Italy into the seas or to keep holding until the AI has had enough and offers you peace. Finally, you can also end the war by doing the focus 'Fait Accompli'.",
    game: 'hoi4',
  },
  {
    id: 'hoi4_ach_158',
    name: 'The Lion King',
    description: 'As Haile Selassie, declare yourself "King of Kings" and control Kenya and Tanzania.',
    icon: 'https://hoi4.paradoxwikis.com/images/9/93/The_Lion_King.png',
    dlc: '',
    version: '1.12',
    difficulty: 'H',
    startingConditions:
      '[![Yes](https://hoi4.paradoxwikis.com/images/thumb/7/77/Yes.png/22px-Yes.png)](/File:Yes.png "Yes") Playing as [![Flag of Ethiopia](https://hoi4.paradoxwikis.com/images/thumb/0/06/Ethiopia.png/24px-Ethiopia.png)](/Ethiopia "Ethiopia") [Ethiopia](/Ethiopia "Ethiopia")',
    completionRequirements:
      '*   [![Yes](https://hoi4.paradoxwikis.com/images/thumb/7/77/Yes.png/22px-Yes.png)](/File:Yes.png "Yes") Has completed focus [![The King of Kings](https://hoi4.paradoxwikis.com/images/thumb/f/f2/Focus_ETH_the_king_of_kings.png/36px-Focus_ETH_the_king_of_kings.png)](/Ethiopian_national_focus_tree#The_King_of_Kings "The King of Kings")[The King of Kings](/Ethiopian_national_focus_tree#The_King_of_Kings "Ethiopian national focus tree")\n*   [![Yes](https://hoi4.paradoxwikis.com/images/thumb/7/77/Yes.png/22px-Yes.png)](/File:Yes.png "Yes") **Haile Selassie** is the current country leader\n*   [![Occupation.png](https://hoi4.paradoxwikis.com/images/d/dc/Occupation.png)](/File:Occupation.png) Controls:\n\nExpand\n\n*   *   **Tanganyika** *(546)*\n    *   **Mombasa** *(905)*\n    *   **Garissa** *(903)*\n    *   **Nyanza-Rift Valley** *(904)*\n    *   **Nairobi** *(547)*',
    notes: '*For detailed strategies, see [The Lion King](/The_Lion_King "The Lion King")*',
    game: 'hoi4',
  },
  {
    id: 'hoi4_ach_159',
    name: 'This time for Africa',
    description:
      'As Ethiopia, found the African Union and have it encompass at least 13 different countries with capitals in Africa.',
    icon: 'https://hoi4.paradoxwikis.com/images/7/78/This_time_for_Africa.png',
    dlc: '',
    version: '1.12',
    difficulty: 'VH',
    startingConditions:
      '[![Yes](https://hoi4.paradoxwikis.com/images/thumb/7/77/Yes.png/22px-Yes.png)](/File:Yes.png "Yes") Playing as [![Flag of Ethiopia](https://hoi4.paradoxwikis.com/images/thumb/0/06/Ethiopia.png/24px-Ethiopia.png)](/Ethiopia "Ethiopia") [Ethiopia](/Ethiopia "Ethiopia")',
    completionRequirements:
      '*   [![Yes](https://hoi4.paradoxwikis.com/images/thumb/7/77/Yes.png/22px-Yes.png)](/File:Yes.png "Yes") Has completed focus [![Towards African Unity](https://hoi4.paradoxwikis.com/images/thumb/d/d1/Focus_ETH_the_african_union.png/36px-Focus_ETH_the_african_union.png)](/Ethiopian_national_focus_tree#Towards_African_Unity "Towards African Unity")[Towards African Unity](/Ethiopian_national_focus_tree#Towards_African_Unity "Ethiopian national focus tree")\n*   [![Yes](https://hoi4.paradoxwikis.com/images/thumb/7/77/Yes.png/22px-Yes.png)](/File:Yes.png "Yes") Is in faction with at least **13** of:\n\nExpand\n\n*   [![Flag of South Africa](https://hoi4.paradoxwikis.com/images/thumb/e/ef/South_Africa.png/24px-South_Africa.png)](/South_Africa "South Africa") [South Africa](/South_Africa "South Africa")\n*   [![Flag of Somali Sultanate](https://hoi4.paradoxwikis.com/images/thumb/4/41/Somali_Sultanate.png/24px-Somali_Sultanate.png)](/Somali_Sultanate "Somali Sultanate") [Somali Sultanate](/Somali_Sultanate "Somali Sultanate")\n*   [![Flag of Sultanate of Aussa](https://hoi4.paradoxwikis.com/images/thumb/b/bc/Sultanate_of_Aussa.png/24px-Sultanate_of_Aussa.png)](/Sultanate_of_Aussa "Sultanate of Aussa") [Sultanate of Aussa](/Sultanate_of_Aussa "Sultanate of Aussa")\n*   [![Flag of Djibouti](https://hoi4.paradoxwikis.com/images/thumb/e/e2/Djibouti.png/24px-Djibouti.png)](/Djibouti "Djibouti") [Djibouti](/Djibouti "Djibouti")\n*   [![Flag of Eritrea](https://hoi4.paradoxwikis.com/images/thumb/8/8b/Eritrea.png/24px-Eritrea.png)](/Eritrea "Eritrea") [Eritrea](/Eritrea "Eritrea")\n*   [![Flag of Sudan](https://hoi4.paradoxwikis.com/images/thumb/3/38/Sudan.png/24px-Sudan.png)](/Sudan "Sudan") [Sudan](/Sudan "Sudan")\n*   [![Flag of Kingdom of Egypt](https://hoi4.paradoxwikis.com/images/thumb/7/7b/Kingdom_of_Egypt.png/24px-Kingdom_of_Egypt.png)](/Kingdom_of_Egypt "Kingdom of Egypt") [Kingdom of Egypt](/Kingdom_of_Egypt "Kingdom of Egypt")\n*   [![Flag of Kingdom of Libya](https://hoi4.paradoxwikis.com/images/thumb/4/45/Libya.png/24px-Libya.png)](/Kingdom_of_Libya "Kingdom of Libya") [Kingdom of Libya](/Kingdom_of_Libya "Kingdom of Libya")\n*   [![Flag of Tunisia](https://hoi4.paradoxwikis.com/images/thumb/0/08/Tunisia.png/24px-Tunisia.png)](/Tunisia "Tunisia") [Tunisia](/Tunisia "Tunisia")\n*   [![Flag of Algeria](https://hoi4.paradoxwikis.com/images/thumb/4/40/Algeria.png/24px-Algeria.png)](/Algeria "Algeria") [Algeria](/Algeria "Algeria")\n*   [![Flag of Kingdom of Morocco](https://hoi4.paradoxwikis.com/images/thumb/7/7f/Kingdom_of_Morocco.png/24px-Kingdom_of_Morocco.png)](/Kingdom_of_Morocco "Kingdom of Morocco") [Kingdom of Morocco](/Kingdom_of_Morocco "Kingdom of Morocco")\n*   [![Flag of Sahrawi Arab Democratic Republic](https://hoi4.paradoxwikis.com/images/thumb/8/88/Sahrawi_Arab_Democratic_Republic.png/24px-Sahrawi_Arab_Democratic_Republic.png)](/Sahrawi_Arab_Democratic_Republic "Sahrawi Arab Democratic Republic") [Sahrawi Arab Democratic Republic](/Sahrawi_Arab_Democratic_Republic "Sahrawi Arab Democratic Republic")\n*   [![Flag of Mauritania](https://hoi4.paradoxwikis.com/images/thumb/f/f2/Mauritania.png/24px-Mauritania.png)](/Mauritania "Mauritania") [Mauritania](/Mauritania "Mauritania")\n*   [![Flag of Mali](https://hoi4.paradoxwikis.com/images/thumb/f/f0/Mali.png/24px-Mali.png)](/Mali "Mali") [Mali](/Mali "Mali")\n*   [![Flag of Senegal](https://hoi4.paradoxwikis.com/images/thumb/2/22/Senegal.png/24px-Senegal.png)](/Senegal "Senegal") [Senegal](/Senegal "Senegal")\n*   [![Flag of The Gambia](https://hoi4.paradoxwikis.com/images/thumb/a/a0/The_Gambia.png/24px-The_Gambia.png)](/The_Gambia "The Gambia") [The Gambia](/The_Gambia "The Gambia")\n*   [![Flag of Guinea-Bissau](https://hoi4.paradoxwikis.com/images/thumb/6/67/Guinea-Bissau.png/24px-Guinea-Bissau.png)](/Guinea-Bissau "Guinea-Bissau") [Guinea-Bissau](/Guinea-Bissau "Guinea-Bissau")\n*   [![Flag of Guinea](https://hoi4.paradoxwikis.com/images/thumb/b/b2/Guinea.png/24px-Guinea.png)](/Guinea "Guinea") [Guinea](/Guinea "Guinea")\n*   [![Flag of Upper Volta](https://hoi4.paradoxwikis.com/images/thumb/b/b8/Upper_Volta.png/24px-Upper_Volta.png)](/Upper_Volta "Upper Volta") [Upper Volta](/Upper_Volta "Upper Volta")\n*   [![Flag of Niger](https://hoi4.paradoxwikis.com/images/thumb/7/72/Niger.png/24px-Niger.png)](/Niger "Niger") [Niger](/Niger "Niger")\n*   [![Flag of Kingdom of Sierra Leone](https://hoi4.paradoxwikis.com/images/thumb/b/bc/Kingdom_of_Sierra_Leone.png/24px-Kingdom_of_Sierra_Leone.png)](/Kingdom_of_Sierra_Leone "Kingdom of Sierra Leone") [Sierra Leone](/Kingdom_of_Sierra_Leone "Kingdom of Sierra Leone")\n*   [![Flag of Liberia](https://hoi4.paradoxwikis.com/images/thumb/0/05/Liberia.png/24px-Liberia.png)](/Liberia "Liberia") [Liberia](/Liberia "Liberia")\n*   [![Flag of Côte d’Ivoire](https://hoi4.paradoxwikis.com/images/thumb/7/7f/C%C3%B4te_d%27Ivoire.png/24px-C%C3%B4te_d%27Ivoire.png)](/C%C3%B4te_d%E2%80%99Ivoire "Côte d’Ivoire") [Côte d’Ivoire](/C%C3%B4te_d%E2%80%99Ivoire "Côte d’Ivoire")\n*   [![Flag of Ghana](https://hoi4.paradoxwikis.com/images/thumb/8/88/Ghana.png/24px-Ghana.png)](/Ghana "Ghana") [Ghana](/Ghana "Ghana")\n*   [![Flag of Togo](https://hoi4.paradoxwikis.com/images/thumb/9/98/Togo.png/24px-Togo.png)](/Togo "Togo") [Togo](/Togo "Togo")\n*   [![Flag of Dahomey](https://hoi4.paradoxwikis.com/images/thumb/f/f1/Dahomey.png/24px-Dahomey.png)](/Dahomey "Dahomey") [Dahomey](/Dahomey "Dahomey")\n*   [![Flag of Nigeria](https://hoi4.paradoxwikis.com/images/thumb/5/59/Nigeria.png/24px-Nigeria.png)](/Nigeria "Nigeria") [Nigeria](/Nigeria "Nigeria")\n*   [![Flag of Chad](https://hoi4.paradoxwikis.com/images/thumb/7/79/Chad.png/24px-Chad.png)](/Chad "Chad") [Chad](/Chad "Chad")\n*   [![Flag of Cameroon](https://hoi4.paradoxwikis.com/images/thumb/9/92/Cameroon.png/24px-Cameroon.png)](/Cameroon "Cameroon") [Cameroon](/Cameroon "Cameroon")\n*   [![Flag of Central African Republic](https://hoi4.paradoxwikis.com/images/thumb/d/d3/Central_African_Republic.png/24px-Central_African_Republic.png)](/Central_African_Republic "Central African Republic") [Central African Republic](/Central_African_Republic "Central African Republic")\n*   [![Flag of Equatorial Guinea](https://hoi4.paradoxwikis.com/images/thumb/f/f5/Equatorial_Guinea.png/24px-Equatorial_Guinea.png)](/Equatorial_Guinea "Equatorial Guinea") [Equatorial Guinea](/Equatorial_Guinea "Equatorial Guinea")\n*   [![Flag of Gabon](https://hoi4.paradoxwikis.com/images/thumb/e/e7/Gabon.png/24px-Gabon.png)](/Gabon "Gabon") [Gabon](/Gabon "Gabon")\n*   [![Flag of Zaire](https://hoi4.paradoxwikis.com/images/thumb/5/55/Zaire.png/24px-Zaire.png)](/Zaire "Zaire") [Zaire](/Zaire "Zaire")\n*   [![Flag of Congo-Brazzaville](https://hoi4.paradoxwikis.com/images/thumb/f/fa/Congo-Brazzaville.png/24px-Congo-Brazzaville.png)](/Congo-Brazzaville "Congo-Brazzaville") [Congo-Brazzaville](/Congo-Brazzaville "Congo-Brazzaville")\n*   [![Flag of Angola](https://hoi4.paradoxwikis.com/images/thumb/c/c4/Angola.png/24px-Angola.png)](/Angola "Angola") [Angola](/Angola "Angola")\n*   [![Flag of Uganda](https://hoi4.paradoxwikis.com/images/thumb/4/4c/Uganda.png/24px-Uganda.png)](/Uganda "Uganda") [Uganda](/Uganda "Uganda")\n*   [![Flag of Rwanda](https://hoi4.paradoxwikis.com/images/thumb/8/8a/Rwanda.png/24px-Rwanda.png)](/Rwanda "Rwanda") [Rwanda](/Rwanda "Rwanda")\n*   [![Flag of Burundi](https://hoi4.paradoxwikis.com/images/thumb/6/63/Burundi.png/24px-Burundi.png)](/Burundi "Burundi") [Burundi](/Burundi "Burundi")\n*   [![Flag of Kenya](https://hoi4.paradoxwikis.com/images/thumb/b/b9/Kenya.png/24px-Kenya.png)](/Kenya "Kenya") [Kenya](/Kenya "Kenya")\n*   [![Flag of Tanzania](https://hoi4.paradoxwikis.com/images/thumb/6/61/Tanzania.png/24px-Tanzania.png)](/Tanzania "Tanzania") [Tanzania](/Tanzania "Tanzania")\n*   [![Flag of Zambia](https://hoi4.paradoxwikis.com/images/thumb/a/ad/Zambia.png/24px-Zambia.png)](/Zambia "Zambia") [Zambia](/Zambia "Zambia")\n*   [![Flag of Malawi](https://hoi4.paradoxwikis.com/images/thumb/0/08/Malawi.png/24px-Malawi.png)](/Malawi "Malawi") [Malawi](/Malawi "Malawi")\n*   [![Flag of Mozambique](https://hoi4.paradoxwikis.com/images/thumb/1/19/Mozambique.png/24px-Mozambique.png)](/Mozambique "Mozambique") [Mozambique](/Mozambique "Mozambique")\n*   [![Flag of Zimbabwe](https://hoi4.paradoxwikis.com/images/thumb/5/57/Zimbabwe.png/24px-Zimbabwe.png)](/Zimbabwe "Zimbabwe") [Zimbabwe](/Zimbabwe "Zimbabwe")\n*   [![Flag of Botswana](https://hoi4.paradoxwikis.com/images/thumb/1/1e/Botswana.png/24px-Botswana.png)](/Botswana "Botswana") [Botswana](/Botswana "Botswana")\n*   [![Flag of Namibia](https://hoi4.paradoxwikis.com/images/thumb/c/ce/Namibia.png/24px-Namibia.png)](/Namibia "Namibia") [Namibia](/Namibia "Namibia")\n*   [![Flag of Republic of Madagascar](https://hoi4.paradoxwikis.com/images/thumb/b/b3/Republic_of_Madagascar.png/24px-Republic_of_Madagascar.png)](/Republic_of_Madagascar "Republic of Madagascar") [Republic of Madagascar](/Republic_of_Madagascar "Republic of Madagascar")',
    notes: '*For detailed strategies, see [This time for Africa](/This_time_for_Africa "This time for Africa")*',
    game: 'hoi4',
  },
  {
    id: 'hoi4_ach_160',
    name: 'Crusader Kings IV',
    description: 'Take Jerusalem as Ethiopia and move the capital there',
    icon: 'https://hoi4.paradoxwikis.com/images/d/d9/Crusader_Kings_IV.png',
    dlc: '',
    version: '1.12',
    difficulty: 'VH',
    startingConditions:
      '[![Yes](https://hoi4.paradoxwikis.com/images/thumb/7/77/Yes.png/22px-Yes.png)](/File:Yes.png "Yes") Playing as [![Flag of Ethiopia](https://hoi4.paradoxwikis.com/images/thumb/0/06/Ethiopia.png/24px-Ethiopia.png)](/Ethiopia "Ethiopia") [Ethiopia](/Ethiopia "Ethiopia")',
    completionRequirements:
      '[![Yes](https://hoi4.paradoxwikis.com/images/thumb/7/77/Yes.png/22px-Yes.png)](/File:Yes.png "Yes") Capital is **Palestine** *(454)*',
    notes: '*For detailed strategies, see [Crusader Kings IV](/Crusader_Kings_IV "Crusader Kings IV")*',
    game: 'hoi4',
  },
  {
    id: 'hoi4_ach_161',
    name: 'The Red Sea',
    description: 'As Ethiopia, go communist and take all the states that border the Red Sea',
    icon: 'https://hoi4.paradoxwikis.com/images/0/00/The_Red_Sea.png',
    dlc: '',
    version: '1.12',
    difficulty: 'H',
    startingConditions:
      '[![Yes](https://hoi4.paradoxwikis.com/images/thumb/7/77/Yes.png/22px-Yes.png)](/File:Yes.png "Yes") Playing as [![Flag of Ethiopia](https://hoi4.paradoxwikis.com/images/thumb/0/06/Ethiopia.png/24px-Ethiopia.png)](/Ethiopia "Ethiopia") [Ethiopia](/Ethiopia "Ethiopia")',
    completionRequirements:
      '*   [![Yes](https://hoi4.paradoxwikis.com/images/thumb/7/77/Yes.png/22px-Yes.png)](/File:Yes.png "Yes") Ruling party is [![{{{1}}}](https://hoi4.paradoxwikis.com/images/thumb/e/e9/Communism.png/22px-Communism.png)](/Ideology#Communism "{{{1}}}")[Communist](/Ideology#Communism "Ideology")\n*   [![Occupation.png](https://hoi4.paradoxwikis.com/images/d/dc/Occupation.png)](/File:Occupation.png) Controls:\n\nExpand\n\n*   **Eritrea** *(550)*\n*   **Kassala** *(883)*\n*   **Eastern Desert** *(457)*\n*   **Suez** *(446)*\n*   **Sinai** *(453)*\n*   **Palestine** *(454)*\n*   **Jordan** *(455)*\n*   **Tabuk** *(855)*\n*   **Madinah** *(679)*\n*   **Asir-Makkah** *(856)*\n*   **North Yemen** *(293)*',
    notes: '*For detailed strategies, see [The Red Sea](/The_Red_Sea "The Red Sea")*',
    game: 'hoi4',
  },
  {
    id: 'hoi4_ach_162',
    name: 'Stalin, how many guns does he have?',
    description: 'As the pope, capitulate the USSR',
    icon: 'https://hoi4.paradoxwikis.com/images/2/24/Stalin%2C_how_many_guns_does_he_have%3F.png',
    dlc: '',
    version: '1.12',
    difficulty: 'H',
    startingConditions:
      '[![Yes](https://hoi4.paradoxwikis.com/images/thumb/7/77/Yes.png/22px-Yes.png)](/File:Yes.png "Yes") Playing as [![Flag of Italy](https://hoi4.paradoxwikis.com/images/thumb/2/2a/Italy.png/24px-Italy.png)](/Italy "Italy") [Italy](/Italy "Italy")',
    completionRequirements:
      '[![Yes](https://hoi4.paradoxwikis.com/images/thumb/7/77/Yes.png/22px-Yes.png)](/File:Yes.png "Yes") Play as [![Flag of Italy](https://hoi4.paradoxwikis.com/images/thumb/2/2a/Italy.png/24px-Italy.png)](/Italy "Italy") [Italy](/Italy "Italy") and capitulate the [![Flag of Soviet Union](https://hoi4.paradoxwikis.com/images/thumb/6/67/Soviet_Union.png/24px-Soviet_Union.png)](/Soviet_Union "Soviet Union") [Soviet Union](/Soviet_Union "Soviet Union") while having the Pope in power',
    notes:
      "Continue on after completing [Holy, Roman, and an Empire](#Holy,_Roman,_and_an_Empire), because after forming the Roman Empire you will have more than enough resources and a big enough navy (take both France and the UK's in the peace deal) that no one should be able to stop you.",
    game: 'hoi4',
  },
  {
    id: 'hoi4_ach_163',
    name: 'Holy, Roman, and an Empire',
    description: 'As the Pope, restore Rome.',
    icon: 'https://hoi4.paradoxwikis.com/images/b/ba/Holy%2C_Roman%2C_and_an_Empire.png',
    dlc: '',
    version: '1.12',
    difficulty: 'H',
    startingConditions:
      '[![Yes](https://hoi4.paradoxwikis.com/images/thumb/7/77/Yes.png/22px-Yes.png)](/File:Yes.png "Yes") Playing as [![Flag of Italy](https://hoi4.paradoxwikis.com/images/thumb/2/2a/Italy.png/24px-Italy.png)](/Italy "Italy") [Italy](/Italy "Italy")',
    completionRequirements:
      '*   [![Yes](https://hoi4.paradoxwikis.com/images/thumb/7/77/Yes.png/22px-Yes.png)](/File:Yes.png "Yes") The Pope has taken over [![Flag of Italy](https://hoi4.paradoxwikis.com/images/thumb/2/2a/Italy.png/24px-Italy.png)](/Italy "Italy") [Italy](/Italy "Italy")\n*     [![Yes](https://hoi4.paradoxwikis.com/images/thumb/7/77/Yes.png/22px-Yes.png)](/File:Yes.png "Yes") [![Flag of Italy](https://hoi4.paradoxwikis.com/images/thumb/2/2a/Italy.png/24px-Italy.png)](/Italy "Italy") [Italy](/Italy "Italy") has formed the [![Flag of Roman Empire](https://hoi4.paradoxwikis.com/images/thumb/4/4e/Roman_Empire.png/24px-Roman_Empire.png)](/Roman_Empire "Roman Empire") [Roman Empire](/Roman_Empire "Roman Empire")',
    notes:
      '*For detailed strategies, see [Holy, Roman, and an Empire](/Holy,_Roman,_and_an_Empire "Holy, Roman, and an Empire")*',
    game: 'hoi4',
  },
  {
    id: 'hoi4_ach_164',
    name: 'Pizza Time!',
    description: 'As Italy, occupy New York, Chicago and Hawaii',
    icon: 'https://hoi4.paradoxwikis.com/images/1/1f/Pizza_Time%21.png',
    dlc: '',
    version: '1.12',
    difficulty: 'H',
    startingConditions:
      '[![Yes](https://hoi4.paradoxwikis.com/images/thumb/7/77/Yes.png/22px-Yes.png)](/File:Yes.png "Yes") Playing as [![Flag of Italy](https://hoi4.paradoxwikis.com/images/thumb/2/2a/Italy.png/24px-Italy.png)](/Italy "Italy") [Italy](/Italy "Italy")',
    completionRequirements:
      '[![Occupation.png](https://hoi4.paradoxwikis.com/images/d/dc/Occupation.png)](/File:Occupation.png) Controls:\n\n*   *   **New York** *(358)*\n    *   **Illinois** *(395)*\n    *   **Hawaii** *(629)*',
    notes:
      "Continue on after completing [Holy, Roman, and an Empire](#Holy,_Roman,_and_an_Empire), because after forming the Roman Empire you will have more than enough resources and a big enough navy (take both France and the UK's in the peace deal) that no one should be able to stop you.",
    game: 'hoi4',
  },
  {
    id: 'hoi4_ach_165',
    name: 'Collect all the Romes',
    description: 'As Italy, continue holding onto the First Rome, and gain the second and third Rome',
    icon: 'https://hoi4.paradoxwikis.com/images/1/11/Collect_all_the_Romes.png',
    dlc: '',
    version: '1.12',
    difficulty: 'H',
    startingConditions:
      '[![Yes](https://hoi4.paradoxwikis.com/images/thumb/7/77/Yes.png/22px-Yes.png)](/File:Yes.png "Yes") Playing as [![Flag of Italy](https://hoi4.paradoxwikis.com/images/thumb/2/2a/Italy.png/24px-Italy.png)](/Italy "Italy") [Italy](/Italy "Italy")',
    completionRequirements:
      '[![Occupation.png](https://hoi4.paradoxwikis.com/images/d/dc/Occupation.png)](/File:Occupation.png) Controls:\n\n*   *   **Lazio** *(2)*\n    *   **Istanbul** *(797)*\n    *   **Moscow** *(219)*',
    notes:
      "Continue on after completing [Holy, Roman, and an Empire](#Holy,_Roman,_and_an_Empire), because after forming the Roman Empire you will have more than enough resources and a big enough navy (take both France and the UK's in the peace deal) that no one should be able to stop you.",
    game: 'hoi4',
  },
  {
    id: 'hoi4_ach_166',
    name: 'Nothing personal, Adolf',
    description: 'As Italy, take Austria before the Anschluss and never enter a faction with a fascist Germany',
    icon: 'https://hoi4.paradoxwikis.com/images/4/4d/Nothing_personal%2C_Adolf.png',
    dlc: '',
    version: '1.12',
    difficulty: 'E',
    startingConditions:
      '[![Yes](https://hoi4.paradoxwikis.com/images/thumb/7/77/Yes.png/22px-Yes.png)](/File:Yes.png "Yes") Playing as [![Flag of Italy](https://hoi4.paradoxwikis.com/images/thumb/2/2a/Italy.png/24px-Italy.png)](/Italy "Italy") [Italy](/Italy "Italy")',
    completionRequirements:
      '*   [![Time](https://hoi4.paradoxwikis.com/images/thumb/0/08/Time.png/22px-Time.png)](/File:Time.png "Time") After Jan 1st, 1945\n*     [![No](https://hoi4.paradoxwikis.com/images/thumb/0/04/No.png/22px-No.png)](/File:No.png "No") [![Flag of Italy](https://hoi4.paradoxwikis.com/images/thumb/2/2a/Italy.png/24px-Italy.png)](/Italy "Italy") [Italy](/Italy "Italy") has joined faction with [![{{{1}}}](https://hoi4.paradoxwikis.com/images/thumb/1/1f/Fascism.png/22px-Fascism.png)](/Ideology#Fascism "{{{1}}}")[Fascist](/Ideology#Fascism "Ideology") [![Flag of Germany](https://hoi4.paradoxwikis.com/images/thumb/e/e9/German_Reich.png/24px-German_Reich.png)](/Germany "Germany") [Germany](/Germany "Germany") at any point\n*   [![Occupation.png](https://hoi4.paradoxwikis.com/images/d/dc/Occupation.png)](/File:Occupation.png) Owns:\n\n*   *   **Niederösterreich** *(4)*\n    *   **Oberösterreich** *(152)*\n    *   **Tirol** *(153)*\n    *   **Vorarlberg** *(848)*\n\n*   [![No](https://hoi4.paradoxwikis.com/images/thumb/0/04/No.png/22px-No.png)](/File:No.png "No") [![Flag of Germany](https://hoi4.paradoxwikis.com/images/thumb/e/e9/German_Reich.png/24px-German_Reich.png)](/Germany "Germany") [Germany](/Germany "Germany"): Has achieved Anschluss',
    notes:
      'Justify a war goal as soon as you can on Austria. Their army is really weak and the Germans will never go after it when you have it annexed. Wait out till 1945 for the achievement to fire.',
    game: 'hoi4',
  },
  {
    id: 'hoi4_ach_167',
    name: 'Not today',
    description:
      'As communist Italy, save Gramsci from the brink of death, make him the leader of Italy and form the Italian National Union.',
    icon: 'https://hoi4.paradoxwikis.com/images/7/71/Not_today.png',
    dlc: '',
    version: '1.12',
    difficulty: 'VE',
    startingConditions:
      '[![Yes](https://hoi4.paradoxwikis.com/images/thumb/7/77/Yes.png/22px-Yes.png)](/File:Yes.png "Yes") Playing as [![Flag of Italy](https://hoi4.paradoxwikis.com/images/thumb/2/2a/Italy.png/24px-Italy.png)](/Italy "Italy") [Italy](/Italy "Italy")',
    completionRequirements:
      '*   [![Yes](https://hoi4.paradoxwikis.com/images/thumb/7/77/Yes.png/22px-Yes.png)](/File:Yes.png "Yes") Ruling party is [![{{{1}}}](https://hoi4.paradoxwikis.com/images/thumb/e/e9/Communism.png/22px-Communism.png)](/Ideology#Communism "{{{1}}}")[Communist](/Ideology#Communism "Ideology")\n*   [![Yes](https://hoi4.paradoxwikis.com/images/thumb/7/77/Yes.png/22px-Yes.png)](/File:Yes.png "Yes") **Antonio Gramsci** Is the current country leader\n*   [![Yes](https://hoi4.paradoxwikis.com/images/thumb/7/77/Yes.png/22px-Yes.png)](/File:Yes.png "Yes") Has completed focus [![Il Sol dell\'Avvenire](https://hoi4.paradoxwikis.com/images/thumb/4/41/Focus_ITA_il_sol_dell_avvenire.png/22px-Focus_ITA_il_sol_dell_avvenire.png)](/Italian_national_focus_tree#Il_Sol_dell\'Avvenire "Il Sol dell\'Avvenire")[Il Sol dell\'Avvenire](/Italian_national_focus_tree#Il_Sol_dell\'Avvenire "Italian national focus tree")',
    notes:
      "Simply rush the communist focus tree towards [![Il Sol dell'Avvenire](https://hoi4.paradoxwikis.com/images/thumb/4/41/Focus_ITA_il_sol_dell_avvenire.png/22px-Focus_ITA_il_sol_dell_avvenire.png)](/Italian_national_focus_tree#Il_Sol_dell'Avvenire \"Il Sol dell'Avvenire\")[Il Sol dell'Avvenire](/Italian_national_focus_tree#Il_Sol_dell'Avvenire \"Italian national focus tree\").",
    game: 'hoi4',
  },
  {
    id: 'hoi4_ach_168',
    name: 'This time it will stick',
    description:
      'As any Allied Nation (in faction with a democratic Britain), enforce a peace deal on Germany that disarms the Rhineland and makes it a demilitarized zone.',
    icon: 'https://hoi4.paradoxwikis.com/images/2/28/This_time_it_will_stick.png',
    dlc: '',
    version: '1.12',
    difficulty: 'E',
    startingConditions: '',
    completionRequirements:
      '[![Yes](https://hoi4.paradoxwikis.com/images/thumb/7/77/Yes.png/22px-Yes.png)](/File:Yes.png "Yes") The Rhineland has been disarmed and demilitarized',
    notes: '**Note:** Requires the states of Rhineland **and** Moselland to be demilitarized.',
    game: 'hoi4',
  },
  {
    id: 'hoi4_ach_169',
    name: 'By Beer Alone',
    description: 'As Germany, control Budweis, Tsingtao, and Guinness directly or through a faction member',
    icon: 'https://hoi4.paradoxwikis.com/images/4/49/By_Beer_Alone.png',
    dlc: '',
    version: '1.12',
    difficulty: 'M',
    startingConditions:
      '[![Yes](https://hoi4.paradoxwikis.com/images/thumb/7/77/Yes.png/22px-Yes.png)](/File:Yes.png "Yes") Playing as [![Flag of Germany](https://hoi4.paradoxwikis.com/images/thumb/e/e9/German_Reich.png/24px-German_Reich.png)](/Germany "Germany") [Germany](/Germany "Germany")',
    completionRequirements:
      '[![Yes](https://hoi4.paradoxwikis.com/images/thumb/7/77/Yes.png/22px-Yes.png)](/File:Yes.png "Yes") You or a member of your faction controls:\n\n*   **Bohemia** *(9)*\n*   **Leinster** *(113)*\n*   **Qingdao** *(743)*',
    notes: '*For detailed strategies, see [By Beer Alone](/By_Beer_Alone "By Beer Alone")*',
    game: 'hoi4',
  },
  {
    id: 'hoi4_ach_170',
    name: 'By merit alone',
    description: 'Promote a Unit Commander to a general, and reach max level',
    icon: 'https://hoi4.paradoxwikis.com/images/5/55/By_merit_alone.png',
    dlc: '',
    version: '1.12',
    difficulty: 'H',
    startingConditions: '',
    completionRequirements:
      '[![Yes](https://hoi4.paradoxwikis.com/images/thumb/7/77/Yes.png/22px-Yes.png)](/File:Yes.png "Yes") Any unit leader:\n\n*   Has been promoted from the ranks.\n*   **Skill Level** More than **8**',
    notes:
      'An important thing to note is that generals or field marshals directly commanding divisions gain experience much faster than field marshals commanding armies.\n\n*For detailed strategies, see [By merit alone](/By_merit_alone "By merit alone")*',
    game: 'hoi4',
  },
  {
    id: 'hoi4_ach_171',
    name: 'Snakes on a plane',
    description: 'As Brazil, capture Rome with paratroopers.',
    icon: 'https://hoi4.paradoxwikis.com/images/d/dc/Snakes_on_a_plane.png',
    dlc: '',
    version: '1.12',
    difficulty: 'E',
    startingConditions:
      '[![Yes](https://hoi4.paradoxwikis.com/images/thumb/7/77/Yes.png/22px-Yes.png)](/File:Yes.png "Yes") Playing as [![Flag of Brazil](https://hoi4.paradoxwikis.com/images/thumb/8/8c/Brazil.png/24px-Brazil.png)](/Brazil "Brazil") [Brazil](/Brazil "Brazil")',
    completionRequirements:
      '[![Yes](https://hoi4.paradoxwikis.com/images/thumb/7/77/Yes.png/22px-Yes.png)](/File:Yes.png "Yes") Has captured **Lazio** *(2)* with paratroopers',
    notes: '*For detailed strategies, see [Snakes on a plane](/Snakes_on_a_plane "Snakes on a plane")*',
    game: 'hoi4',
  },
  {
    id: 'hoi4_ach_172',
    name: 'Sapmi united by the fire',
    description: 'As Sami, own and control every Sami core.',
    icon: 'https://hoi4.paradoxwikis.com/images/f/fe/Sapmi_united_by_the_fire.png',
    dlc: '',
    version: '1.13',
    difficulty: 'M',
    startingConditions: '',
    completionRequirements:
      '*   [![Yes](https://hoi4.paradoxwikis.com/images/thumb/7/77/Yes.png/22px-Yes.png)](/File:Yes.png "Yes") Country is [![Flag of Sapmi](https://hoi4.paradoxwikis.com/images/thumb/9/9e/S%C3%A1pmi.png/24px-S%C3%A1pmi.png)](/Sapmi "Sapmi") [Sapmi](/Sapmi "Sapmi")  \n    \n*   [![Occupation.png](https://hoi4.paradoxwikis.com/images/d/dc/Occupation.png)](/File:Occupation.png) Owns and controls all your cores',
    notes:
      '*For detailed strategies, see [Sapmi united by the fire](/Sapmi_united_by_the_fire "Sapmi united by the fire")*',
    game: 'hoi4',
  },
  {
    id: 'hoi4_ach_173',
    name: 'Norway Jose',
    description: 'As Norway, own and control every Mexican core.',
    icon: 'https://hoi4.paradoxwikis.com/images/d/da/Norway_Jose.png',
    dlc: '',
    version: '1.13',
    difficulty: 'H',
    startingConditions:
      '[![Yes](https://hoi4.paradoxwikis.com/images/thumb/7/77/Yes.png/22px-Yes.png)](/File:Yes.png "Yes") Playing as [![Flag of Norway](https://hoi4.paradoxwikis.com/images/thumb/0/0f/Norway.png/24px-Norway.png)](/Norway "Norway") [Norway](/Norway "Norway")',
    completionRequirements:
      '[![Occupation.png](https://hoi4.paradoxwikis.com/images/d/dc/Occupation.png)](/File:Occupation.png) Owns and controls all cores of [![Flag of Mexico](https://hoi4.paradoxwikis.com/images/thumb/0/0a/Mexico.png/24px-Mexico.png)](/Mexico "Mexico") [Mexico](/Mexico "Mexico")',
    notes: '*For detailed strategies, see [Norway Jose](/Norway_Jose "Norway Jose")*',
    game: 'hoi4',
  },
  {
    id: 'hoi4_ach_174',
    name: 'Pinot Noirway',
    description: 'As Norway, own and control the state of Bourgogne.',
    icon: 'https://hoi4.paradoxwikis.com/images/7/75/Pinot_Noirway.png',
    dlc: '',
    version: '1.13',
    difficulty: 'M',
    startingConditions:
      '[![Yes](https://hoi4.paradoxwikis.com/images/thumb/7/77/Yes.png/22px-Yes.png)](/File:Yes.png "Yes") Playing as [![Flag of Norway](https://hoi4.paradoxwikis.com/images/thumb/0/0f/Norway.png/24px-Norway.png)](/Norway "Norway") [Norway](/Norway "Norway")',
    completionRequirements:
      '[![Occupation.png](https://hoi4.paradoxwikis.com/images/d/dc/Occupation.png)](/File:Occupation.png) Owns and controls **Bourgogne** *(27)*',
    notes: '*For detailed strategies, see [Pinot Noirway](/Pinot_Noirway "Pinot Noirway")*',
    game: 'hoi4',
  },
  {
    id: 'hoi4_ach_175',
    name: 'Cheese your fighter.',
    description:
      'As Norway, with Peder Jarlsberg as country leader, own Telemark, Glouchestershire, Normandy, Lombardia and Holland.',
    icon: 'https://hoi4.paradoxwikis.com/images/4/4a/Cheese_your_fighter..png',
    dlc: '',
    version: '1.13',
    difficulty: 'VH',
    startingConditions:
      '[![Yes](https://hoi4.paradoxwikis.com/images/thumb/7/77/Yes.png/22px-Yes.png)](/File:Yes.png "Yes") Playing as [![Flag of Norway](https://hoi4.paradoxwikis.com/images/thumb/0/0f/Norway.png/24px-Norway.png)](/Norway "Norway") [Norway](/Norway "Norway")',
    completionRequirements:
      '*   [![Yes](https://hoi4.paradoxwikis.com/images/thumb/7/77/Yes.png/22px-Yes.png)](/File:Yes.png "Yes") **Peder Anker Wedel-Jarlsberg** is the current country leader\n*   [![Occupation.png](https://hoi4.paradoxwikis.com/images/d/dc/Occupation.png)](/File:Occupation.png) Owns and controls:\n\nExpand\n\n*   *   **Telemark** *(921)*\n    *   **Gloucestershire** *(338)*\n    *   **Normandy** *(15)*\n    *   **Lombardia** *(159)*\n    *   **Holland** *(7)*',
    notes: '*For detailed strategies, see [Cheese your fighter.](/Cheese_your_fighter. "Cheese your fighter.")*',
    game: 'hoi4',
  },
  {
    id: 'hoi4_ach_176',
    name: 'Med plutonium 2',
    description: 'As Denmark nuke Sweden.',
    icon: 'https://hoi4.paradoxwikis.com/images/f/f5/Med_plutonium_2.png',
    dlc: '',
    version: '1.13',
    difficulty: 'E',
    startingConditions:
      '[![Yes](https://hoi4.paradoxwikis.com/images/thumb/7/77/Yes.png/22px-Yes.png)](/File:Yes.png "Yes") Playing as [![Flag of Denmark](https://hoi4.paradoxwikis.com/images/thumb/6/69/Denmark.png/24px-Denmark.png)](/Denmark "Denmark") [Denmark](/Denmark "Denmark")',
    completionRequirements:
      '[![Yes](https://hoi4.paradoxwikis.com/images/thumb/7/77/Yes.png/22px-Yes.png)](/File:Yes.png "Yes") Has dropped a nuclear bomb on Sweden',
    notes:
      "Flip fascist and join the Axis before ww2 starts. Either sit through the entire game until you have nukes, fighters and strategic bombers, without joining any war or take a sidestep into 'The Danelaw' if you like.",
    game: 'hoi4',
  },
  {
    id: 'hoi4_ach_177',
    name: 'Everything is awesome.',
    description:
      'As Denmark, get Maximum Welfare Spending after January 1st 1941 without being puppeted or capitulating.',
    icon: 'https://hoi4.paradoxwikis.com/images/6/67/Everything_is_awesome..png',
    dlc: '',
    version: '1.13',
    difficulty: 'E',
    startingConditions:
      '[![Yes](https://hoi4.paradoxwikis.com/images/thumb/7/77/Yes.png/22px-Yes.png)](/File:Yes.png "Yes") Playing as [![Flag of Denmark](https://hoi4.paradoxwikis.com/images/thumb/6/69/Denmark.png/24px-Denmark.png)](/Denmark "Denmark") [Denmark](/Denmark "Denmark")',
    completionRequirements:
      '*   [![Time](https://hoi4.paradoxwikis.com/images/thumb/0/08/Time.png/22px-Time.png)](/File:Time.png "Time") After Jan 1st, 1941\n*   [![No](https://hoi4.paradoxwikis.com/images/thumb/0/04/No.png/22px-No.png)](/File:No.png "No") Denmark has been puppeted\n*   [![No](https://hoi4.paradoxwikis.com/images/thumb/0/04/No.png/22px-No.png)](/File:No.png "No") Denmark has capitulated\n*   [![Balance of power icon.png](https://hoi4.paradoxwikis.com/images/thumb/5/5c/Balance_of_power_icon.png/22px-Balance_of_power_icon.png)](/File:Balance_of_power_icon.png) **Welfare and Warfare Balance** is at the **Maximum Welfare Spending** range',
    notes:
      'Flip fascist and join the Axis to stay safe from German aggression. Repeatedly take balance of power decisions to push towards the welfare side. Also hire and/or fire advisors to influence the balance of power.',
    game: 'hoi4',
  },
  {
    id: 'hoi4_ach_178',
    name: 'The Danelaw',
    description: 'As Denmark, conquer England.',
    icon: 'https://hoi4.paradoxwikis.com/images/0/0c/The_Danelaw.png',
    dlc: '',
    version: '1.13',
    difficulty: 'M',
    startingConditions:
      '[![Yes](https://hoi4.paradoxwikis.com/images/thumb/7/77/Yes.png/22px-Yes.png)](/File:Yes.png "Yes") Playing as [![Flag of Denmark](https://hoi4.paradoxwikis.com/images/thumb/6/69/Denmark.png/24px-Denmark.png)](/Denmark "Denmark") [Denmark](/Denmark "Denmark")',
    completionRequirements:
      '[![Occupation.png](https://hoi4.paradoxwikis.com/images/d/dc/Occupation.png)](/File:Occupation.png) Controls all cores of [![Flag of United Kingdom](https://hoi4.paradoxwikis.com/images/thumb/2/29/United_Kingdom.png/24px-United_Kingdom.png)](/United_Kingdom "United Kingdom") [United Kingdom](/United_Kingdom "United Kingdom")',
    notes: '*For detailed strategies, see [The Danelaw](/The_Danelaw "The Danelaw")*',
    game: 'hoi4',
  },
  {
    id: 'hoi4_ach_179',
    name: 'Vinland',
    description: 'As Iceland, conquer Newfoundland',
    icon: 'https://hoi4.paradoxwikis.com/images/c/cd/Vinland.png',
    dlc: '',
    version: '1.13',
    difficulty: 'E',
    startingConditions:
      '[![Yes](https://hoi4.paradoxwikis.com/images/thumb/7/77/Yes.png/22px-Yes.png)](/File:Yes.png "Yes") Playing as [![Flag of Iceland](https://hoi4.paradoxwikis.com/images/thumb/c/c1/Iceland.png/24px-Iceland.png)](/Iceland "Iceland") [Iceland](/Iceland "Iceland")',
    completionRequirements:
      '[![Occupation.png](https://hoi4.paradoxwikis.com/images/d/dc/Occupation.png)](/File:Occupation.png) Fully controls **Newfoundland** *(331)*',
    notes:
      'Either go Fascist or Communist, focus on getting manpower to build a small army and some cheap submarines. If the [![Flag of USA](https://hoi4.paradoxwikis.com/images/thumb/3/32/United_States.png/24px-United_States.png)](/USA "USA") [USA](/USA "USA") gets Newfoundland through the focus they do normally garrison the port with 1 division. Regardless, plan your naval invasion. Declare your war and simply wait. At some point the invasion will launch.',
    game: 'hoi4',
  },
  {
    id: 'hoi4_ach_180',
    name: 'Brexit',
    description: 'As communist Iceland, make Wales, Scotland and Northern Ireland rise up against the United Kingdom',
    icon: 'https://hoi4.paradoxwikis.com/images/0/0f/Brexit.png',
    dlc: '',
    version: '1.13',
    difficulty: 'VE',
    startingConditions:
      '[![Yes](https://hoi4.paradoxwikis.com/images/thumb/7/77/Yes.png/22px-Yes.png)](/File:Yes.png "Yes") Playing as [![Flag of Iceland](https://hoi4.paradoxwikis.com/images/thumb/c/c1/Iceland.png/24px-Iceland.png)](/Iceland "Iceland") [Iceland](/Iceland "Iceland")',
    completionRequirements:
      '*   [![Yes](https://hoi4.paradoxwikis.com/images/thumb/7/77/Yes.png/22px-Yes.png)](/File:Yes.png "Yes") Started uprising in Scotland\n*   [![Yes](https://hoi4.paradoxwikis.com/images/thumb/7/77/Yes.png/22px-Yes.png)](/File:Yes.png "Yes") Started uprising in Wales\n*   [![Yes](https://hoi4.paradoxwikis.com/images/thumb/7/77/Yes.png/22px-Yes.png)](/File:Yes.png "Yes") Started uprising in Northern Ireland\n*   [![War goal](https://hoi4.paradoxwikis.com/images/thumb/c/c2/Relation_wargoal.png/22px-Relation_wargoal.png)](/War_goal "War goal") [![Flag of Scotland](https://hoi4.paradoxwikis.com/images/thumb/2/27/Scotland.png/24px-Scotland.png)](/Scotland "Scotland") [Scotland](/Scotland "Scotland") is at war with [![Flag of United Kingdom](https://hoi4.paradoxwikis.com/images/thumb/2/29/United_Kingdom.png/24px-United_Kingdom.png)](/United_Kingdom "United Kingdom") [United Kingdom](/United_Kingdom "United Kingdom")\n*   [![War goal](https://hoi4.paradoxwikis.com/images/thumb/c/c2/Relation_wargoal.png/22px-Relation_wargoal.png)](/War_goal "War goal") [![Flag of Northern Ireland](https://hoi4.paradoxwikis.com/images/thumb/1/12/Northern_Ireland.png/24px-Northern_Ireland.png)](/Northern_Ireland "Northern Ireland") [Northern Ireland](/Northern_Ireland "Northern Ireland") is at war with [![Flag of United Kingdom](https://hoi4.paradoxwikis.com/images/thumb/2/29/United_Kingdom.png/24px-United_Kingdom.png)](/United_Kingdom "United Kingdom") [United Kingdom](/United_Kingdom "United Kingdom")\n*   [![War goal](https://hoi4.paradoxwikis.com/images/thumb/c/c2/Relation_wargoal.png/22px-Relation_wargoal.png)](/War_goal "War goal") [![Flag of Wales](https://hoi4.paradoxwikis.com/images/thumb/d/d9/Wales.png/24px-Wales.png)](/Wales "Wales") [Wales](/Wales "Wales") is at war with [![Flag of United Kingdom](https://hoi4.paradoxwikis.com/images/thumb/2/29/United_Kingdom.png/24px-United_Kingdom.png)](/United_Kingdom "United Kingdom") [United Kingdom](/United_Kingdom "United Kingdom")',
    notes:
      '*   Go down communist route to Infiltrate the British Isles.\n*   Use spies to boost communist popularity to 15% or just go non historical and hope the UK goes communist.\n*   Denmark may declare war upon taking the focus Break with the Crown, but this shouldn\'t be a problem as they rarely naval invade.\n*   Once the focus has been taken just save [![Political Power](https://hoi4.paradoxwikis.com/images/thumb/2/24/Political_power.png/22px-Political_power.png)](/Government#Political_power "Political Power")[Political Power](/Government#Political_power "Government") to take the decisions for uprisings in Wales, Scotland and Northern Ireland.',
    game: 'hoi4',
  },
  {
    id: 'hoi4_ach_181',
    name: 'Two Arms Against Tyranny.',
    description: 'As Finland, capitulate the Soviet Union while having a 2 country faction with another Nordic',
    icon: 'https://hoi4.paradoxwikis.com/images/7/7c/Two_Arms_Against_Tyranny..png',
    dlc: '',
    version: '1.13',
    difficulty: 'M',
    startingConditions:
      '[![Yes](https://hoi4.paradoxwikis.com/images/thumb/7/77/Yes.png/22px-Yes.png)](/File:Yes.png "Yes") Playing as [![Flag of Finland](https://hoi4.paradoxwikis.com/images/thumb/c/c4/Finland.png/24px-Finland.png)](/Finland "Finland") [Finland](/Finland "Finland")',
    completionRequirements:
      '[![Annexed](https://hoi4.paradoxwikis.com/images/thumb/c/c3/Autonomy_annex_icon.png/22px-Autonomy_annex_icon.png)](/Puppet#Autonomy_levels "Annexed") Capitulated the [![Flag of Soviet Union](https://hoi4.paradoxwikis.com/images/thumb/6/67/Soviet_Union.png/24px-Soviet_Union.png)](/Soviet_Union "Soviet Union") [Soviet Union](/Soviet_Union "Soviet Union") with only [![Flag of Finland](https://hoi4.paradoxwikis.com/images/thumb/c/c4/Finland.png/24px-Finland.png)](/Finland "Finland") [Finland](/Finland "Finland") and another Nordic country in the faction',
    notes:
      "Follow the guide for [Uralic Brothers united](#Uralic_Brothers_united). The most important thing is that once you unite Scandinavia, you DON'T disband the faction, or join the Axis - instead, just release Iceland as a puppet. Yes, Iceland counts, and you're not exactly getting a lot of industry from them. Alternatively, you can release Sapmi.",
    game: 'hoi4',
  },
  {
    id: 'hoi4_ach_182',
    name: 'Uralic brothers united',
    description:
      'As Finland, have Hungary, Estonia, Sapmi, Karelia, Mari El, Udmurtia, Komi, Ostyak-Vogulia, Yamalia and Nenetsia as subjects',
    icon: 'https://hoi4.paradoxwikis.com/images/b/b8/Uralic_brothers_united.png',
    dlc: '',
    version: '1.13',
    difficulty: 'H',
    startingConditions:
      '[![Yes](https://hoi4.paradoxwikis.com/images/thumb/7/77/Yes.png/22px-Yes.png)](/File:Yes.png "Yes") Playing as [![Flag of Finland](https://hoi4.paradoxwikis.com/images/thumb/c/c4/Finland.png/24px-Finland.png)](/Finland "Finland") [Finland](/Finland "Finland")',
    completionRequirements:
      '[![Puppet](https://hoi4.paradoxwikis.com/images/thumb/a/a7/Autonomy_puppet_icon.png/22px-Autonomy_puppet_icon.png)](/Puppet#Autonomy_levels "Puppet") The following countries are your subjects:\n\n*   [![Flag of Hungary](https://hoi4.paradoxwikis.com/images/thumb/6/6a/Hungary.png/24px-Hungary.png)](/Hungary "Hungary") [Hungary](/Hungary "Hungary")\n*   [![Flag of Estonia](https://hoi4.paradoxwikis.com/images/thumb/6/6f/Estonia.png/24px-Estonia.png)](/Estonia "Estonia") [Estonia](/Estonia "Estonia")\n*   [![Flag of Sapmi](https://hoi4.paradoxwikis.com/images/thumb/9/9e/S%C3%A1pmi.png/24px-S%C3%A1pmi.png)](/Sapmi "Sapmi") [Sapmi](/Sapmi "Sapmi")\n*   [![Flag of Karelia](https://hoi4.paradoxwikis.com/images/thumb/d/d1/Karelia.png/24px-Karelia.png)](/Karelia "Karelia") [Karelia](/Karelia "Karelia")\n*   [![Flag of Mari El](https://hoi4.paradoxwikis.com/images/thumb/c/cb/Mari_El.png/24px-Mari_El.png)](/Mari_El "Mari El") [Mari El](/Mari_El "Mari El")\n*   [![Flag of Udmurtia](https://hoi4.paradoxwikis.com/images/thumb/5/53/Udmurtia.png/24px-Udmurtia.png)](/Udmurtia "Udmurtia") [Udmurtia](/Udmurtia "Udmurtia")\n*   [![Flag of Komi Republic](https://hoi4.paradoxwikis.com/images/thumb/7/74/Komi_Republic.png/24px-Komi_Republic.png)](/Komi_Republic "Komi Republic") [Komi Republic](/Komi_Republic "Komi Republic")\n*   [![Flag of Ostyak-Vogul National Republic](https://hoi4.paradoxwikis.com/images/thumb/d/d9/Ostyak-Vogul_National_Republic.png/24px-Ostyak-Vogul_National_Republic.png)](/Ostyak-Vogul_National_Republic "Ostyak-Vogul National Republic") [Ostyak-Vogul National Republic](/Ostyak-Vogul_National_Republic "Ostyak-Vogul National Republic")\n*   [![Flag of Yamalian Republic](https://hoi4.paradoxwikis.com/images/thumb/6/64/Yamalian_Republic.png/24px-Yamalian_Republic.png)](/Yamalian_Republic "Yamalian Republic") [Yamalian Republic](/Yamalian_Republic "Yamalian Republic")\n*   [![Flag of Nenetsia](https://hoi4.paradoxwikis.com/images/thumb/6/6e/Nenetsia.png/24px-Nenetsia.png)](/Nenetsia "Nenetsia") [Nenetsia](/Nenetsia "Nenetsia")',
    notes: '*For detailed strategies, see [Uralic brothers united](/Uralic_brothers_united "Uralic brothers united")*',
    game: 'hoi4',
  },
  {
    id: 'hoi4_ach_183',
    name: 'Lone Wolf',
    description: 'As Finland, form Greater Finland and own every core and claim without having ever joined a faction',
    icon: 'https://hoi4.paradoxwikis.com/images/3/37/Lone_Wolf.png',
    dlc: '',
    version: '1.13',
    difficulty: 'H',
    startingConditions:
      '[![Yes](https://hoi4.paradoxwikis.com/images/thumb/7/77/Yes.png/22px-Yes.png)](/File:Yes.png "Yes") Playing as [![Flag of Finland](https://hoi4.paradoxwikis.com/images/thumb/c/c4/Finland.png/24px-Finland.png)](/Finland "Finland") [Finland](/Finland "Finland")',
    completionRequirements:
      '*   [![No](https://hoi4.paradoxwikis.com/images/thumb/0/04/No.png/22px-No.png)](/File:No.png "No") Finland has joined a faction\n*   [![Yes](https://hoi4.paradoxwikis.com/images/thumb/7/77/Yes.png/22px-Yes.png)](/File:Yes.png "Yes") Has completed focus [![Greater Finland](https://hoi4.paradoxwikis.com/images/thumb/c/c5/Focus_FIN_greater_finland.png/22px-Focus_FIN_greater_finland.png)](/Finnish_national_focus_tree#Greater_Finland "Greater Finland")[Greater Finland](/Finnish_national_focus_tree#Greater_Finland "Finnish national focus tree")\n*   [![Occupation.png](https://hoi4.paradoxwikis.com/images/d/dc/Occupation.png)](/File:Occupation.png) Owns and controls:\n\nExpand\n\n*   **Murmansk** *(213)*\n*   **Onega** *(215)*\n*   **Olonets** *(216)*\n*   **Norrbotten** *(666)*\n*   **Finnmark** *(925)*\n*   **Luga** *(208)*\n*   **Leningrad** *(195)*\n*   **Volkhov** *(244)*\n*   **Tikhvin** *(264)*',
    notes: '*For detailed strategies, see [Lone Wolf](/Lone_Wolf "Lone Wolf")*',
    game: 'hoi4',
  },
  {
    id: 'hoi4_ach_184',
    name: 'No one crosses the finnish line',
    description:
      'As non-aligned Finland, survive the Soviet Union until September 19th 1944 without losing control of a single core ever.',
    icon: 'https://hoi4.paradoxwikis.com/images/e/e0/No_one_crosses_the_finnish_line.png',
    dlc: '',
    version: '1.13',
    difficulty: 'VH',
    startingConditions:
      '[![Yes](https://hoi4.paradoxwikis.com/images/thumb/7/77/Yes.png/22px-Yes.png)](/File:Yes.png "Yes") Playing as [![Flag of Finland](https://hoi4.paradoxwikis.com/images/thumb/c/c4/Finland.png/24px-Finland.png)](/Finland "Finland") [Finland](/Finland "Finland")',
    completionRequirements:
      '*   [![Time](https://hoi4.paradoxwikis.com/images/thumb/0/08/Time.png/22px-Time.png)](/File:Time.png "Time") After 19 Sep, 1944\n*   [![No](https://hoi4.paradoxwikis.com/images/thumb/0/04/No.png/22px-No.png)](/File:No.png "No") Has lost one starting core territory\n*   [![No](https://hoi4.paradoxwikis.com/images/thumb/0/04/No.png/22px-No.png)](/File:No.png "No") Has completed focus [![Right-Wing Policies](https://hoi4.paradoxwikis.com/images/thumb/a/ab/Focus_FIN_right_wing_policies.png/22px-Focus_FIN_right_wing_policies.png)](/Finnish_national_focus_tree#Right-Wing_Policies "Right-Wing Policies")[Right-Wing Policies](/Finnish_national_focus_tree#Right-Wing_Policies "Finnish national focus tree")\n*   [![No](https://hoi4.paradoxwikis.com/images/thumb/0/04/No.png/22px-No.png)](/File:No.png "No") Has completed focus [![Suomalainen Sosialismi](https://hoi4.paradoxwikis.com/images/thumb/3/3b/Focus_FIN_suomalainen_sosialismi.png/22px-Focus_FIN_suomalainen_sosialismi.png)](/Finnish_national_focus_tree#Suomalainen_Sosialismi "Suomalainen Sosialismi")[Suomalainen Sosialismi](/Finnish_national_focus_tree#Suomalainen_Sosialismi "Finnish national focus tree")\n*   [![No](https://hoi4.paradoxwikis.com/images/thumb/0/04/No.png/22px-No.png)](/File:No.png "No") [![Flag of Soviet Union](https://hoi4.paradoxwikis.com/images/thumb/6/67/Soviet_Union.png/24px-Soviet_Union.png)](/Soviet_Union "Soviet Union") [Soviet Union](/Soviet_Union "Soviet Union"): Has completed focus [![Beaten, but not Defeated](https://hoi4.paradoxwikis.com/images/thumb/7/70/Goal_generic_war_with_comintern.png/22px-Goal_generic_war_with_comintern.png)](/Soviet_national_focus_tree:_political_branches#Beaten,_but_not_Defeated "Beaten, but not Defeated")[Beaten, but not Defeated](/Soviet_national_focus_tree:_political_branches#Beaten,_but_not_Defeated "Soviet national focus tree: political branches")',
    notes:
      '*For detailed strategies, see [No one crosses the finnish line](/No_one_crosses_the_finnish_line "No one crosses the finnish line")*',
    game: 'hoi4',
  },
  {
    id: 'hoi4_ach_185',
    name: 'Danzig queen',
    description: 'As Sweden, own and control Danzig',
    icon: 'https://hoi4.paradoxwikis.com/images/1/14/Danzig_queen.png',
    dlc: '',
    version: '1.13',
    difficulty: 'M',
    startingConditions:
      '[![Yes](https://hoi4.paradoxwikis.com/images/thumb/7/77/Yes.png/22px-Yes.png)](/File:Yes.png "Yes") Playing as [![Flag of Sweden](https://hoi4.paradoxwikis.com/images/thumb/9/98/Sweden.png/24px-Sweden.png)](/Sweden "Sweden") [Sweden](/Sweden "Sweden")',
    completionRequirements:
      '[![Occupation.png](https://hoi4.paradoxwikis.com/images/d/dc/Occupation.png)](/File:Occupation.png) Owns and controls **Danzig** *(85)*',
    notes: '*For detailed strategies, see [Danzig queen](/Danzig_queen "Danzig queen")*',
    game: 'hoi4',
  },
  {
    id: 'hoi4_ach_186',
    name: 'Caramelldansen',
    description: 'As Sweden puppet Japan',
    icon: 'https://hoi4.paradoxwikis.com/images/d/df/Caramelldansen.png',
    dlc: '',
    version: '1.13',
    difficulty: 'H',
    startingConditions:
      '[![Yes](https://hoi4.paradoxwikis.com/images/thumb/7/77/Yes.png/22px-Yes.png)](/File:Yes.png "Yes") Playing as [![Flag of Sweden](https://hoi4.paradoxwikis.com/images/thumb/9/98/Sweden.png/24px-Sweden.png)](/Sweden "Sweden") [Sweden](/Sweden "Sweden")',
    completionRequirements:
      '[![Puppet](https://hoi4.paradoxwikis.com/images/thumb/a/a7/Autonomy_puppet_icon.png/22px-Autonomy_puppet_icon.png)](/Puppet#Autonomy_levels "Puppet") [![Flag of Japan](https://hoi4.paradoxwikis.com/images/thumb/f/fc/Japan.png/24px-Japan.png)](/Japan "Japan") [Japan](/Japan "Japan") is your subject',
    notes: '*For detailed strategies, see [Caramelldansen](/Caramelldansen "Caramelldansen")*',
    game: 'hoi4',
  },
  {
    id: 'hoi4_ach_187',
    name: 'The return of the king',
    description: 'As the exiled King of Gotland, retake mainland Sweden',
    icon: 'https://hoi4.paradoxwikis.com/images/e/e7/The_return_of_the_king.png',
    dlc: '',
    version: '1.13',
    difficulty: 'M',
    startingConditions:
      '[![Yes](https://hoi4.paradoxwikis.com/images/thumb/7/77/Yes.png/22px-Yes.png)](/File:Yes.png "Yes") Playing as [![Flag of Sweden](https://hoi4.paradoxwikis.com/images/thumb/9/98/Sweden.png/24px-Sweden.png)](/Sweden "Sweden") [Sweden](/Sweden "Sweden")',
    completionRequirements:
      '*   [![Yes](https://hoi4.paradoxwikis.com/images/thumb/7/77/Yes.png/22px-Yes.png)](/File:Yes.png "Yes") **King Gustaf V** is the current country leader\n*   [![No](https://hoi4.paradoxwikis.com/images/thumb/0/04/No.png/22px-No.png)](/File:No.png "No") Has national spirit **Escaping the mainland**\n*    [![Yes](https://hoi4.paradoxwikis.com/images/thumb/7/77/Yes.png/22px-Yes.png)](/File:Yes.png "Yes") The Swedish King has escaped from the mainland\n*   [![Yes](https://hoi4.paradoxwikis.com/images/thumb/7/77/Yes.png/22px-Yes.png)](/File:Yes.png "Yes") Fully controls all your cores',
    notes: '*For detailed strategies, see [The return of the king](/The_return_of_the_king "The return of the king")*',
    game: 'hoi4',
  },
  {
    id: 'hoi4_ach_188',
    name: 'Satisfactory',
    description: 'Have at least one MIO per category at level 10+',
    icon: 'https://hoi4.paradoxwikis.com/images/b/bc/Satisfactory.png',
    dlc: '',
    version: '1.13',
    difficulty: 'VE',
    startingConditions: '',
    completionRequirements:
      '*   [![Tank mio roster.png](https://hoi4.paradoxwikis.com/images/thumb/5/52/Tank_mio_roster.png/22px-Tank_mio_roster.png)](/File:Tank_mio_roster.png)Any military industrial organization:\n    *   [![Yes](https://hoi4.paradoxwikis.com/images/thumb/7/77/Yes.png/22px-Yes.png)](/File:Yes.png "Yes") Size more than **10**\n    *   [![Yes](https://hoi4.paradoxwikis.com/images/thumb/7/77/Yes.png/22px-Yes.png)](/File:Yes.png "Yes") One of the following must be true:\n\nExpand\n\n*   *   *   Has equipment type **All Light Tank Equipment**\n        *   Has equipment type **All Medium Tank Equipment**\n        *   Has equipment type **All Heavy Tank Equipment**\n        *   Has equipment type **Armor technology**\n        *   Has research category **Light Armor Technologies**\n        *   Has research category **Medium Armor Technologies**\n        *   Has research category **Heavy Armor Technologies**\n        *   Has research category **Armor Technology**\n\n*   [![Ship mio roster.png](https://hoi4.paradoxwikis.com/images/thumb/8/8a/Ship_mio_roster.png/22px-Ship_mio_roster.png)](/File:Ship_mio_roster.png) Any military industrial organization:\n    *   [![Yes](https://hoi4.paradoxwikis.com/images/thumb/7/77/Yes.png/22px-Yes.png)](/File:Yes.png "Yes") Size more than **10**\n    *   [![Yes](https://hoi4.paradoxwikis.com/images/thumb/7/77/Yes.png/22px-Yes.png)](/File:Yes.png "Yes") One of the following must be true:\n\nExpand\n\n*   *   *   Has equipment type **All Carrier Ships**\n        *   Has equipment type **All Cruiser Ships**\n        *   Has equipment type **All Destroyer Ship**\n        *   Has equipment type **All Battleship**\n        *   Has equipment type **All Capital Ships**\n        *   Has equipment type **Screens**\n        *   Has equipment type **Submarine**\n        *   Has equipment type **Armor technology**\n        *   Has research category **All Capital Ship Technologies**\n        *   Has research category **All Screen Ship Technologies**\n        *   Has research category **All Submarine Ship Technologies**\n        *   Has research category **All Carrier Ship Technologies**\n        *   Has research category **All Cruiser Ship Technologies**\n        *   Has research category **All Destroyer Technologies**\n        *   Has research category **Ships**\n\n*   [![Aircraft mio roster.png](https://hoi4.paradoxwikis.com/images/thumb/8/8b/Aircraft_mio_roster.png/22px-Aircraft_mio_roster.png)](/File:Aircraft_mio_roster.png) Any military industrial organization:\n    *   [![Yes](https://hoi4.paradoxwikis.com/images/thumb/7/77/Yes.png/22px-Yes.png)](/File:Yes.png "Yes") Size more than **10**\n    *   [![Yes](https://hoi4.paradoxwikis.com/images/thumb/7/77/Yes.png/22px-Yes.png)](/File:Yes.png "Yes") One of the following must be true:\n\nExpand\n\n*   *   *   Has equipment type **All Small and Carrier Planes**\n        *   Has equipment type **All Medium Planes**\n        *   Has equipment type **All Large Planes**\n        *   Has equipment type **All Carrier Aircraft**\n        *   Has equipment type **Strategic Bomber**\n        *   Has equipment type **Naval Patrol Bomber**\n        *   Has equipment type **Close Air Support**\n        *   Has equipment type **Carrier Close Air Support**\n        *   Has equipment type **Naval Bomber**\n        *   Has equipment type **Carrier Fighter**\n        *   Has equipment type **Carrier Close Air Support**\n        *   Has equipment type **Carrier Naval Bomber**\n        *   Has research category **All Fighter Technologies**\n        *   Has research category **All CAS Technologies**\n        *   Has research category **All Naval Bomber Technologies**\n        *   Has research category **All Light Aircraft Technologies**\n        *   Has research category **All Medium Aircraft Technologies**\n        *   Has research category **All Heavy Aircraft Technologies**\n        *   Has research category **Aircraft**\n\n*   [![Material mio roster.png](https://hoi4.paradoxwikis.com/images/thumb/9/9b/Material_mio_roster.png/22px-Material_mio_roster.png)](/File:Material_mio_roster.png) Any military industrial organization:\n    *   [![Yes](https://hoi4.paradoxwikis.com/images/thumb/7/77/Yes.png/22px-Yes.png)](/File:Yes.png "Yes") Size more than **10**\n    *   [![Yes](https://hoi4.paradoxwikis.com/images/thumb/7/77/Yes.png/22px-Yes.png)](/File:Yes.png "Yes") One of the following must be true:\n\nExpand\n\n*   *   *   Has equipment type **Infantry Equipment**\n        *   Has equipment type **Artillery Equipment**\n        *   Has equipment type **Anti Tank Equipment**\n        *   Has equipment type **Anti Air Equipment**\n        *   Has equipment type **Motorized Equipment**\n        *   Has equipment type **Mechanized Equipment**\n        *   Has equipment type **Armored Car Equipment**\n        *   Has research category **Infantry Weapon Technologies**\n        *   Has research category **All Artillery Equipment Technologies**\n        *   Has research category **Motorized Equipment Technologies**\n        *   Has research category **Armored Cars**',
    notes:
      "It's required to get a MIO of each category to level 11 at least.\n\nProgress towards the next stages (funds) is gained by either researching with the according MIO assigned to the research and/or by producing equipment with the MIO assigned. Best done with the USA as they have a strong economy and research abilities.",
    game: 'hoi4',
  },
  {
    id: 'hoi4_ach_189',
    name: 'Cod wars',
    description: 'As Iceland capitulate the UK',
    icon: 'https://hoi4.paradoxwikis.com/images/e/ed/Cod_wars.png',
    dlc: '',
    version: '1.13',
    difficulty: 'VH',
    startingConditions:
      '[![Yes](https://hoi4.paradoxwikis.com/images/thumb/7/77/Yes.png/22px-Yes.png)](/File:Yes.png "Yes") Playing as [![Flag of Iceland](https://hoi4.paradoxwikis.com/images/thumb/c/c1/Iceland.png/24px-Iceland.png)](/Iceland "Iceland") [Iceland](/Iceland "Iceland")',
    completionRequirements:
      '[![Yes](https://hoi4.paradoxwikis.com/images/thumb/7/77/Yes.png/22px-Yes.png)](/File:Yes.png "Yes") Capitulated the [![Flag of United Kingdom](https://hoi4.paradoxwikis.com/images/thumb/2/29/United_Kingdom.png/24px-United_Kingdom.png)](/United_Kingdom "United Kingdom") [United Kingdom](/United_Kingdom "United Kingdom")',
    notes: '*For detailed strategies, see [Cod wars](/Cod_wars "Cod wars")*',
    game: 'hoi4',
  },
  {
    id: 'hoi4_ach_190',
    name: 'The Magic School Bus',
    description: 'With the Per Albin Bus, drive to Cape Town.',
    icon: 'https://hoi4.paradoxwikis.com/images/d/d7/The_Magic_School_Bus.png',
    dlc: '',
    version: '1.13',
    difficulty: 'E',
    startingConditions:
      '[![Yes](https://hoi4.paradoxwikis.com/images/thumb/7/77/Yes.png/22px-Yes.png)](/File:Yes.png "Yes") Playing as [![Flag of Sweden](https://hoi4.paradoxwikis.com/images/thumb/9/98/Sweden.png/24px-Sweden.png)](/Sweden "Sweden") [Sweden](/Sweden "Sweden")',
    completionRequirements:
      '[![Yes](https://hoi4.paradoxwikis.com/images/thumb/7/77/Yes.png/22px-Yes.png)](/File:Yes.png "Yes") Travel from Stockholm to Cape Town in less than 19 days',
    notes: '*For detailed strategies, see [The Magic School Bus](/The_Magic_School_Bus "The Magic School Bus")*',
    game: 'hoi4',
  },
  {
    id: 'hoi4_ach_191',
    name: 'Rumble in the Jungle',
    description: 'Own all Amazon states as any South American nation.',
    icon: 'https://hoi4.paradoxwikis.com/images/0/0b/Rumble_in_the_Jungle.png',
    dlc: '',
    version: '1.14',
    difficulty: 'H',
    startingConditions:
      '[![Yes](https://hoi4.paradoxwikis.com/images/thumb/7/77/Yes.png/22px-Yes.png)](/File:Yes.png "Yes") Playing as *either*\n\n*   *   [![Flag of Argentina](https://hoi4.paradoxwikis.com/images/thumb/a/a2/Argentina.png/24px-Argentina.png)](/Argentina "Argentina") [Argentina](/Argentina "Argentina")\n    *   [![Flag of Bolivia](https://hoi4.paradoxwikis.com/images/thumb/3/38/Bolivia.png/24px-Bolivia.png)](/Bolivia "Bolivia") [Bolivia](/Bolivia "Bolivia")\n    *   [![Flag of Brazil](https://hoi4.paradoxwikis.com/images/thumb/8/8c/Brazil.png/24px-Brazil.png)](/Brazil "Brazil") [Brazil](/Brazil "Brazil")\n    *   [![Flag of Chile](https://hoi4.paradoxwikis.com/images/thumb/f/fa/Chile.png/24px-Chile.png)](/Chile "Chile") [Chile](/Chile "Chile")\n    *   [![Flag of Colombia](https://hoi4.paradoxwikis.com/images/thumb/8/80/Colombia.png/24px-Colombia.png)](/Colombia "Colombia") [Colombia](/Colombia "Colombia")\n    *   [![Flag of Ecuador](https://hoi4.paradoxwikis.com/images/thumb/b/b2/Ecuador.png/24px-Ecuador.png)](/Ecuador "Ecuador") [Ecuador](/Ecuador "Ecuador")\n    *   [![Flag of Paraguay](https://hoi4.paradoxwikis.com/images/thumb/5/57/Paraguay.png/24px-Paraguay.png)](/Paraguay "Paraguay") [Paraguay](/Paraguay "Paraguay")\n    *   [![Flag of Peru](https://hoi4.paradoxwikis.com/images/thumb/a/a8/Peru.png/24px-Peru.png)](/Peru "Peru") [Peru](/Peru "Peru")\n    *   [![Flag of Uruguay](https://hoi4.paradoxwikis.com/images/thumb/2/29/Uruguay.png/24px-Uruguay.png)](/Uruguay "Uruguay") [Uruguay](/Uruguay "Uruguay")\n    *   [![Flag of Venezuela](https://hoi4.paradoxwikis.com/images/thumb/5/5d/Venezuela.png/24px-Venezuela.png)](/Venezuela "Venezuela") [Venezuela](/Venezuela "Venezuela")',
    completionRequirements:
      '[![Occupation.png](https://hoi4.paradoxwikis.com/images/d/dc/Occupation.png)](/File:Occupation.png) Controls:\n\nExpand\n\n*   **Amazonas** *(495)*\n*   **Pastaza** *(490)*\n*   **Loreto** *(491)*\n*   **Ucayali** *(494)*\n*   **Santa Cruz** *(487)*\n*   **Guaporé** *(942)*\n*   **Pará** *(938)*\n*   **Bolivar** *(488)*\n*   **Meta** *(486)*\n*   **British Guyana** *(687)*\n*   **Suriname** *(309)*\n*   **French Guiana** *(310)*',
    notes:
      'Continuing on from [Lamento Boliviano](#Lamento_Boliviano), simply justify on [![Flag of Bolivia](https://hoi4.paradoxwikis.com/images/thumb/3/38/Bolivia.png/24px-Bolivia.png)](/Bolivia "Bolivia") [Bolivia](/Bolivia "Bolivia") and conquer them. Your army should be more than powerful and big enough to do so.',
    game: 'hoi4',
  },
  {
    id: 'hoi4_ach_192',
    name: 'And the snake smoked',
    description: 'As Brazil, in the allies, capitulate Germany while controlling Berlin.',
    icon: 'https://hoi4.paradoxwikis.com/images/5/50/And_the_snake_smoked.png',
    dlc: '',
    version: '1.14',
    difficulty: 'E',
    startingConditions:
      '[![Yes](https://hoi4.paradoxwikis.com/images/thumb/7/77/Yes.png/22px-Yes.png)](/File:Yes.png "Yes") Playing as [![Flag of Brazil](https://hoi4.paradoxwikis.com/images/thumb/8/8c/Brazil.png/24px-Brazil.png)](/Brazil "Brazil") [Brazil](/Brazil "Brazil")',
    completionRequirements:
      '*   [![Occupation.png](https://hoi4.paradoxwikis.com/images/d/dc/Occupation.png)](/File:Occupation.png) Controls **Brandenburg** *(64)*\n*   [![Relation join faction.png](https://hoi4.paradoxwikis.com/images/thumb/9/91/Relation_join_faction.png/22px-Relation_join_faction.png)](/File:Relation_join_faction.png) Is in Faction with [![Flag of United Kingdom](https://hoi4.paradoxwikis.com/images/thumb/2/29/United_Kingdom.png/24px-United_Kingdom.png)](/United_Kingdom "United Kingdom") [United Kingdom](/United_Kingdom "United Kingdom")\n*   [![Yes](https://hoi4.paradoxwikis.com/images/thumb/7/77/Yes.png/22px-Yes.png)](/File:Yes.png "Yes") [![Flag of Germany](https://hoi4.paradoxwikis.com/images/thumb/e/e9/German_Reich.png/24px-German_Reich.png)](/Germany "Germany") [Germany](/Germany "Germany"): Has capitulated',
    notes:
      'If [![Flag of Germany](https://hoi4.paradoxwikis.com/images/thumb/e/e9/German_Reich.png/24px-German_Reich.png)](/Germany "Germany") [Germany](/Germany "Germany") is the last major in its faction then capitulating it will end the war and the achievement will not fire. Capitulating it before [![Flag of Italy](https://hoi4.paradoxwikis.com/images/thumb/2/2a/Italy.png/24px-Italy.png)](/Italy "Italy") [Italy](/Italy "Italy") is recommended, unless one of the Balkan Axis countries becomes a major. Any faction that includes the [![Flag of United Kingdom](https://hoi4.paradoxwikis.com/images/thumb/2/29/United_Kingdom.png/24px-United_Kingdom.png)](/United_Kingdom "United Kingdom") [United Kingdom](/United_Kingdom "United Kingdom") counts as \'the Allies\'.',
    game: 'hoi4',
  },
  {
    id: 'hoi4_ach_193',
    name: 'Red Hot Chile Peppers',
    description: 'As Communist Chile, control California',
    icon: 'https://hoi4.paradoxwikis.com/images/1/16/Red_Hot_Chile_Peppers.png',
    dlc: '',
    version: '1.14',
    difficulty: 'H',
    startingConditions:
      '[![Yes](https://hoi4.paradoxwikis.com/images/thumb/7/77/Yes.png/22px-Yes.png)](/File:Yes.png "Yes") Playing as [![Flag of Chile](https://hoi4.paradoxwikis.com/images/thumb/f/fa/Chile.png/24px-Chile.png)](/Chile "Chile") [Chile](/Chile "Chile")',
    completionRequirements:
      '*   [![Occupation.png](https://hoi4.paradoxwikis.com/images/d/dc/Occupation.png)](/File:Occupation.png) Controls **California** *(378)*\n*   [![Yes](https://hoi4.paradoxwikis.com/images/thumb/7/77/Yes.png/22px-Yes.png)](/File:Yes.png "Yes") Ruling party is [![{{{1}}}](https://hoi4.paradoxwikis.com/images/thumb/e/e9/Communism.png/22px-Communism.png)](/Ideology#Communism "{{{1}}}")[Communist](/Ideology#Communism "Ideology")',
    notes: 'Can be done at the same time as [Chilean Empire](#Chilean_Empire).',
    game: 'hoi4',
  },
  {
    id: 'hoi4_ach_194',
    name: 'Bad Ending - The whole world is now Brazil',
    description: 'Control every state in the world',
    icon: 'https://hoi4.paradoxwikis.com/images/6/66/Bad_Ending_-_The_whole_world_is_now_Brazil.png',
    dlc: '',
    version: '1.14',
    difficulty: 'VH',
    startingConditions:
      '[![Yes](https://hoi4.paradoxwikis.com/images/thumb/7/77/Yes.png/22px-Yes.png)](/File:Yes.png "Yes") Playing as [![Flag of Brazil](https://hoi4.paradoxwikis.com/images/thumb/8/8c/Brazil.png/24px-Brazil.png)](/Brazil "Brazil") [Brazil](/Brazil "Brazil")',
    completionRequirements:
      '[![Occupation.png](https://hoi4.paradoxwikis.com/images/d/dc/Occupation.png)](/File:Occupation.png) Controls all states in the world',
    notes:
      '*For detailed strategies, see [Bad Ending - The whole world is now Brazil](/Bad_Ending_-_The_whole_world_is_now_Brazil "Bad Ending - The whole world is now Brazil")*',
    game: 'hoi4',
  },
  {
    id: 'hoi4_ach_195',
    name: 'A Land of Fire',
    description: 'Tierra del Fuego means "The Land of Fire"',
    icon: 'https://hoi4.paradoxwikis.com/images/7/71/A_Land_of_Fire.png',
    dlc: '',
    version: '1.14',
    difficulty: 'E',
    startingConditions: '',
    completionRequirements:
      '[![Nuclear bombs.png](https://hoi4.paradoxwikis.com/images/thumb/1/18/Nuclear_bombs.png/22px-Nuclear_bombs.png)](/File:Nuclear_bombs.png) Has dropped a nuclear bomb on **Tierra del Fuego** *(953)*',
    notes:
      'Easy and quick with [![Flag of Chile](https://hoi4.paradoxwikis.com/images/thumb/f/fa/Chile.png/24px-Chile.png)](/Chile "Chile") [Chile](/Chile "Chile") or [![Flag of Argentina](https://hoi4.paradoxwikis.com/images/thumb/a/a2/Argentina.png/24px-Argentina.png)](/Argentina "Argentina") [Argentina](/Argentina "Argentina"). Use the research bonuses from the military branch of the focus tree to get nuclear weapons early. As [![Flag of Chile](https://hoi4.paradoxwikis.com/images/thumb/f/fa/Chile.png/24px-Chile.png)](/Chile "Chile") [Chile](/Chile "Chile") you need some fighters to guarantee air superiority. As [![Flag of Argentina](https://hoi4.paradoxwikis.com/images/thumb/a/a2/Argentina.png/24px-Argentina.png)](/Argentina "Argentina") [Argentina](/Argentina "Argentina") just release [![Flag of Y Wladychfa Gymreig](https://hoi4.paradoxwikis.com/images/thumb/6/66/Welsh_Argentina.png/24px-Welsh_Argentina.png)](/Y_Wladychfa_Gymreig "Y Wladychfa Gymreig") [Y Wladychfa Gymreig](/Y_Wladychfa_Gymreig "Y Wladychfa Gymreig") as a free country and then justify a war goal.',
    game: 'hoi4',
  },
  {
    id: 'hoi4_ach_196',
    name: "I'm Home!",
    description: 'As Brazil occupy every core of Portugal',
    icon: 'https://hoi4.paradoxwikis.com/images/c/c5/I%27m_Home%21.png',
    dlc: '',
    version: '1.14',
    difficulty: 'E',
    startingConditions:
      '[![Yes](https://hoi4.paradoxwikis.com/images/thumb/7/77/Yes.png/22px-Yes.png)](/File:Yes.png "Yes") Playing as [![Flag of Brazil](https://hoi4.paradoxwikis.com/images/thumb/8/8c/Brazil.png/24px-Brazil.png)](/Brazil "Brazil") [Brazil](/Brazil "Brazil")',
    completionRequirements:
      '[![Occupation.png](https://hoi4.paradoxwikis.com/images/d/dc/Occupation.png)](/File:Occupation.png) Controls:\n\nExpand\n\n*   **Porto** *(180)*\n*   **Guarda** *(181)*\n*   **Lisbon** *(112)*\n*   **Santarém** *(795)*\n*   **Beja** *(179)*\n*   **Madeira** *(697)*\n*   **Azores** *(698)*',
    notes:
      'You can start this by either subjugating [![Flag of Portugal](https://hoi4.paradoxwikis.com/images/thumb/1/12/Portugal.png/24px-Portugal.png)](/Portugal "Portugal") [Portugal](/Portugal "Portugal") with the monarchist path, or by going down [![{{{1}}}](https://hoi4.paradoxwikis.com/images/thumb/e/e9/Communism.png/22px-Communism.png)](/Ideology#Communism "{{{1}}}")[communism](/Ideology#Communism "Ideology") or [![{{{1}}}](https://hoi4.paradoxwikis.com/images/thumb/1/1f/Fascism.png/22px-Fascism.png)](/Ideology#Fascism "{{{1}}}")[fascism](/Ideology#Fascism "Ideology"), getting a foothold in Iberia by declaring on one (or more) of the Spanish Civil War factions, and taking land when they capitulate that borders Portugal. If you subjugate them, it\'s easier if you take [![Flag of Spain](https://hoi4.paradoxwikis.com/images/thumb/5/58/Spain.png/24px-Spain.png)](/Spain "Spain") [Spain](/Spain "Spain") and give it to your Portugese puppet so you can build on the land and lower their autonomy easier.',
    game: 'hoi4',
  },
  {
    id: 'hoi4_ach_197',
    name: 'Proactive Defense',
    description: 'As any communist South or central American country, occupy Washington D.C.',
    icon: 'https://hoi4.paradoxwikis.com/images/3/33/Proactive_Defense.png',
    dlc: '',
    version: '1.14',
    difficulty: 'H',
    startingConditions:
      '[![Yes](https://hoi4.paradoxwikis.com/images/thumb/7/77/Yes.png/22px-Yes.png)](/File:Yes.png "Yes") Playing as *either*:\n\n*   *   [![Flag of Argentina](https://hoi4.paradoxwikis.com/images/thumb/a/a2/Argentina.png/24px-Argentina.png)](/Argentina "Argentina") [Argentina](/Argentina "Argentina")\n    *   [![Flag of Bolivia](https://hoi4.paradoxwikis.com/images/thumb/3/38/Bolivia.png/24px-Bolivia.png)](/Bolivia "Bolivia") [Bolivia](/Bolivia "Bolivia")\n    *   [![Flag of Brazil](https://hoi4.paradoxwikis.com/images/thumb/8/8c/Brazil.png/24px-Brazil.png)](/Brazil "Brazil") [Brazil](/Brazil "Brazil")\n    *   [![Flag of Chile](https://hoi4.paradoxwikis.com/images/thumb/f/fa/Chile.png/24px-Chile.png)](/Chile "Chile") [Chile](/Chile "Chile")\n    *   [![Flag of Colombia](https://hoi4.paradoxwikis.com/images/thumb/8/80/Colombia.png/24px-Colombia.png)](/Colombia "Colombia") [Colombia](/Colombia "Colombia")\n    *   [![Flag of Ecuador](https://hoi4.paradoxwikis.com/images/thumb/b/b2/Ecuador.png/24px-Ecuador.png)](/Ecuador "Ecuador") [Ecuador](/Ecuador "Ecuador")\n    *   [![Flag of Paraguay](https://hoi4.paradoxwikis.com/images/thumb/5/57/Paraguay.png/24px-Paraguay.png)](/Paraguay "Paraguay") [Paraguay](/Paraguay "Paraguay")\n    *   [![Flag of Peru](https://hoi4.paradoxwikis.com/images/thumb/a/a8/Peru.png/24px-Peru.png)](/Peru "Peru") [Peru](/Peru "Peru")\n    *   [![Flag of Uruguay](https://hoi4.paradoxwikis.com/images/thumb/2/29/Uruguay.png/24px-Uruguay.png)](/Uruguay "Uruguay") [Uruguay](/Uruguay "Uruguay")\n    *   [![Flag of Venezuela](https://hoi4.paradoxwikis.com/images/thumb/5/5d/Venezuela.png/24px-Venezuela.png)](/Venezuela "Venezuela") [Venezuela](/Venezuela "Venezuela")',
    completionRequirements:
      '*   [![Occupation.png](https://hoi4.paradoxwikis.com/images/d/dc/Occupation.png)](/File:Occupation.png) Controls **Maryland** *(361)*\n*   [![Yes](https://hoi4.paradoxwikis.com/images/thumb/7/77/Yes.png/22px-Yes.png)](/File:Yes.png "Yes") Ruling party is [![{{{1}}}](https://hoi4.paradoxwikis.com/images/thumb/e/e9/Communism.png/22px-Communism.png)](/Ideology#Communism "{{{1}}}")[Communist](/Ideology#Communism "Ideology")',
    notes: '',
    game: 'hoi4',
  },
  {
    id: 'hoi4_ach_198',
    name: 'The Merry Band',
    description: 'As communist brazil ruled by Lampião, occupy Nottingham',
    icon: 'https://hoi4.paradoxwikis.com/images/5/5c/The_Merry_Band.png',
    dlc: '',
    version: '1.14',
    difficulty: 'H',
    startingConditions:
      '[![Yes](https://hoi4.paradoxwikis.com/images/thumb/7/77/Yes.png/22px-Yes.png)](/File:Yes.png "Yes") Playing as [![Flag of Brazil](https://hoi4.paradoxwikis.com/images/thumb/8/8c/Brazil.png/24px-Brazil.png)](/Brazil "Brazil") [Brazil](/Brazil "Brazil")',
    completionRequirements:
      '*   [![Yes](https://hoi4.paradoxwikis.com/images/thumb/7/77/Yes.png/22px-Yes.png)](/File:Yes.png "Yes") Has completed focus [![Cangaço Coup](https://hoi4.paradoxwikis.com/images/thumb/9/93/Focus_BRA_deal_with_the_cangaco.png/22px-Focus_BRA_deal_with_the_cangaco.png)](/Brazilian_national_focus_tree#Cangaço_Coup "Cangaço Coup")[Cangaço Coup](/Brazilian_national_focus_tree#Cangaço_Coup "Brazilian national focus tree")\n*   [![Occupation.png](https://hoi4.paradoxwikis.com/images/d/dc/Occupation.png)](/File:Occupation.png) Controls **East Midlands** *(129)*\n*   [![Yes](https://hoi4.paradoxwikis.com/images/thumb/7/77/Yes.png/22px-Yes.png)](/File:Yes.png "Yes") Ruling party is [![{{{1}}}](https://hoi4.paradoxwikis.com/images/thumb/e/e9/Communism.png/22px-Communism.png)](/Ideology#Communism "{{{1}}}")[Communist](/Ideology#Communism "Ideology")',
    notes: '',
    game: 'hoi4',
  },
  {
    id: 'hoi4_ach_199',
    name: 'Somehow He Has Returned',
    description: 'As Argentina, have Señor Hilter become country leader',
    icon: 'https://hoi4.paradoxwikis.com/images/8/88/Somehow_He_Has_Returned.png',
    dlc: '',
    version: '1.14',
    difficulty: 'VE',
    startingConditions:
      '[![Yes](https://hoi4.paradoxwikis.com/images/thumb/7/77/Yes.png/22px-Yes.png)](/File:Yes.png "Yes") Playing as [![Flag of Argentina](https://hoi4.paradoxwikis.com/images/thumb/a/a2/Argentina.png/24px-Argentina.png)](/Argentina "Argentina") [Argentina](/Argentina "Argentina")',
    completionRequirements:
      '[![Yes](https://hoi4.paradoxwikis.com/images/thumb/7/77/Yes.png/22px-Yes.png)](/File:Yes.png "Yes") **Señor Hilter** is the current country leader',
    notes:
      'Play historical. Go down the [![{{{1}}}](https://hoi4.paradoxwikis.com/images/thumb/1/1f/Fascism.png/22px-Fascism.png)](/Ideology#Fascism "{{{1}}}")[fascist](/Ideology#Fascism "Ideology") route, build fascist support until you can take [![Guardia Nacional](https://hoi4.paradoxwikis.com/images/thumb/f/f3/Focus_ARG_guardia_nacional.png/22px-Focus_ARG_guardia_nacional.png)](/Argentinean_national_focus_tree#Guardia_Nacional "Guardia Nacional")[Guardia Nacional](/Argentinean_national_focus_tree#Guardia_Nacional "Argentinean national focus tree"), then wait until [![Flag of Germany](https://hoi4.paradoxwikis.com/images/thumb/e/e9/German_Reich.png/24px-German_Reich.png)](/Germany "Germany") [Germany](/Germany "Germany") has capitulated. The event will fire soon after. No other condition is necessary, you can be at war with Germany yourself, and as getting Señor Hilter in power is the first option in the event, it should select itself if you prefer to be afk the entire time.',
    game: 'hoi4',
  },
  {
    id: 'hoi4_ach_200',
    name: 'URSAL',
    description: 'Be Communist and own all of South America',
    icon: 'https://hoi4.paradoxwikis.com/images/5/5a/URSAL.png',
    dlc: '',
    version: '1.14',
    difficulty: 'H',
    startingConditions:
      '[![Yes](https://hoi4.paradoxwikis.com/images/thumb/7/77/Yes.png/22px-Yes.png)](/File:Yes.png "Yes") Playing as *either*\n\n*   *   [![Flag of Argentina](https://hoi4.paradoxwikis.com/images/thumb/a/a2/Argentina.png/24px-Argentina.png)](/Argentina "Argentina") [Argentina](/Argentina "Argentina")\n    *   [![Flag of Bolivia](https://hoi4.paradoxwikis.com/images/thumb/3/38/Bolivia.png/24px-Bolivia.png)](/Bolivia "Bolivia") [Bolivia](/Bolivia "Bolivia")\n    *   [![Flag of Brazil](https://hoi4.paradoxwikis.com/images/thumb/8/8c/Brazil.png/24px-Brazil.png)](/Brazil "Brazil") [Brazil](/Brazil "Brazil")\n    *   [![Flag of Chile](https://hoi4.paradoxwikis.com/images/thumb/f/fa/Chile.png/24px-Chile.png)](/Chile "Chile") [Chile](/Chile "Chile")\n    *   [![Flag of Colombia](https://hoi4.paradoxwikis.com/images/thumb/8/80/Colombia.png/24px-Colombia.png)](/Colombia "Colombia") [Colombia](/Colombia "Colombia")\n    *   [![Flag of Ecuador](https://hoi4.paradoxwikis.com/images/thumb/b/b2/Ecuador.png/24px-Ecuador.png)](/Ecuador "Ecuador") [Ecuador](/Ecuador "Ecuador")\n    *   [![Flag of Paraguay](https://hoi4.paradoxwikis.com/images/thumb/5/57/Paraguay.png/24px-Paraguay.png)](/Paraguay "Paraguay") [Paraguay](/Paraguay "Paraguay")\n    *   [![Flag of Peru](https://hoi4.paradoxwikis.com/images/thumb/a/a8/Peru.png/24px-Peru.png)](/Peru "Peru") [Peru](/Peru "Peru")\n    *   [![Flag of Uruguay](https://hoi4.paradoxwikis.com/images/thumb/2/29/Uruguay.png/24px-Uruguay.png)](/Uruguay "Uruguay") [Uruguay](/Uruguay "Uruguay")\n    *   [![Flag of Venezuela](https://hoi4.paradoxwikis.com/images/thumb/5/5d/Venezuela.png/24px-Venezuela.png)](/Venezuela "Venezuela") [Venezuela](/Venezuela "Venezuela")',
    completionRequirements:
      '*   [![Yes](https://hoi4.paradoxwikis.com/images/thumb/7/77/Yes.png/22px-Yes.png)](/File:Yes.png "Yes") Ruling party is [![{{{1}}}](https://hoi4.paradoxwikis.com/images/thumb/e/e9/Communism.png/22px-Communism.png)](/Ideology#Communism "{{{1}}}")[Communist](/Ideology#Communism "Ideology")\n*   [![Occupation.png](https://hoi4.paradoxwikis.com/images/d/dc/Occupation.png)](/File:Occupation.png) Controls:\n\n*   *   **From [![Flag of Colombia](https://hoi4.paradoxwikis.com/images/thumb/8/80/Colombia.png/24px-Colombia.png)](/Colombia "Colombia") [Colombia](/Colombia "Colombia")** : Expand\n        \n        *   **La Libertad** *(493)*\n        *   **Cundinamarca** *(306)*\n        *   **Meta** *(486)*\n        \n\n*   *   **From [![Flag of Venezuela](https://hoi4.paradoxwikis.com/images/thumb/5/5d/Venezuela.png/24px-Venezuela.png)](/Venezuela "Venezuela") [Venezuela](/Venezuela "Venezuela")** : Expand\n        \n        *   **Zulia** *(489)*\n        *   **Miranda** *(307)*\n        *   **Bolivar** *(488)*\n        *   **Curaçao** *(695)*\n        \n\n*   *   **From [![Flag of Ecuador](https://hoi4.paradoxwikis.com/images/thumb/b/b2/Ecuador.png/24px-Ecuador.png)](/Ecuador "Ecuador") [Ecuador](/Ecuador "Ecuador")** : Expand\n        \n        *   **Ecuador** *(305)*\n        *   **Pastaza** *(490)*\n        *   **Galapagos Islands** *(649)*\n        \n\n*   *   **From [![Flag of Peru](https://hoi4.paradoxwikis.com/images/thumb/a/a8/Peru.png/24px-Peru.png)](/Peru "Peru") [Peru](/Peru "Peru")** : Expand\n        \n        *   **Loreto** *(491)*\n        *   **Lima** *(303)*\n        *   **Ucayali** *(494)*\n        *   **Arequipa** *(492)*\n        *   **Tacna-Moquegua** *(947)*\n        \n\n*   *   **From [![Flag of Bolivia](https://hoi4.paradoxwikis.com/images/thumb/3/38/Bolivia.png/24px-Bolivia.png)](/Bolivia "Bolivia") [Bolivia](/Bolivia "Bolivia")** : Expand\n        \n        *   **Santa Cruz** *(487)*\n        *   **La Paz** *(302)*\n        \n\n*   *   **From [![Flag of Paraguay](https://hoi4.paradoxwikis.com/images/thumb/5/57/Paraguay.png/24px-Paraguay.png)](/Paraguay "Paraguay") [Paraguay](/Paraguay "Paraguay")** : Expand\n        \n        *   **Chaco Boreal** *(688)*\n        *   **Paraguay** *(301)*\n        \n\n*   *   **From [![Flag of Uruguay](https://hoi4.paradoxwikis.com/images/thumb/2/29/Uruguay.png/24px-Uruguay.png)](/Uruguay "Uruguay") [Uruguay](/Uruguay "Uruguay")** : Expand\n        \n        *   **Paysandú** *(946)*\n        *   **Montevideo** *(300)*\n        *   **Cerro Largo** *(945)*\n        \n\n*   *   **From [![Flag of Chile](https://hoi4.paradoxwikis.com/images/thumb/f/fa/Chile.png/24px-Chile.png)](/Chile "Chile") [Chile](/Chile "Chile")** : Expand\n        \n        *   **Arica y Tarapacá** *(951)*\n        *   **Antofagasta** *(506)*\n        *   **Atacama** *(952)*\n        *   **Santiago** *(279)*\n        *   **Araucanía** *(950)*\n        *   **Aysén** *(949)*\n        *   **Magallanes** *(507)*\n        *   **Easter Island** *(948)*\n        \n\n*   *   **From [![Flag of Argentina](https://hoi4.paradoxwikis.com/images/thumb/a/a2/Argentina.png/24px-Argentina.png)](/Argentina "Argentina") [Argentina](/Argentina "Argentina")** : Expand\n        \n        *   **Los Andes** *(959)*\n        *   **Formosa** *(957)*\n        *   **Tucumán** *(508)*\n        *   **Chaco Austral** *(509)*\n        *   **Región Mesopotámica** *(510)*\n        *   **San Juan y La Rioja** *(960)*\n        *   **San Luis y La Pampa** *(958)*\n        *   **Mendoza** *(511)*\n        *   **Santa Fe** *(956)*\n        *   **San Luis y La Pampa** *(958)*\n        *   **Buenos Aires** *(278)*\n        *   **Río Negro** *(512)*\n        *   **Chubut** *(955)*\n        *   **Santa Cruz** *(954)*\n        *   **Tierra del Fuego** *(953)*\n        \n\n*   *   **From [![Flag of Brazil](https://hoi4.paradoxwikis.com/images/thumb/8/8c/Brazil.png/24px-Brazil.png)](/Brazil "Brazil") [Brazil](/Brazil "Brazil")** : Expand\n        \n        *   **Amazonas** *(495)*\n        *   **Acre** *(940)*\n        *   **Guaporé** *(942)*\n        *   **Amapá** *(939)*\n        *   **Pará** *(938)*\n        *   **Mato Grosso** *(280)*\n        *   **Maranhão** *(497)*\n        *   **Tocantins** *(941)*\n        *   **Maranhão** *(497)*\n        *   **Piauí** *(937)*\n        *   **Ceará** *(935)*\n        *   **Rio Grande do Norte** *(498)*\n        *   **Pernambuco** *(936)*\n        *   **Bahia** *(499)*\n        *   **Goiás** *(505)*\n        *   **Minas Gerais** *(496)*\n        *   **Espírito Santo** *(943)*\n        *   **Punta Porá** *(504)*\n        *   **Rio de Janeiro** *(500)*\n        *   **São Paulo** *(501)*\n        *   **Paraná** *(944)*\n        *   **Santa Catarina** *(503)*\n        *   **Rio Grande do Sul** *(502)*\n        \n\n*   *   **Falkland Islands** *(299)*\n    *   **British Guyana** *(687)*\n    *   **Suriname** *(309)*\n    *   **French Guiana** *(310)*',
    notes: '',
    game: 'hoi4',
  },
  {
    id: 'hoi4_ach_201',
    name: 'Islas Malvinas',
    description: 'As Argentina, hold the Falkland Islands and South Georgia for 73 days consecutively',
    icon: 'https://hoi4.paradoxwikis.com/images/0/0c/Islas_Malvinas.png',
    dlc: '',
    version: '1.14',
    difficulty: 'E',
    startingConditions:
      '[![Yes](https://hoi4.paradoxwikis.com/images/thumb/7/77/Yes.png/22px-Yes.png)](/File:Yes.png "Yes") Playing as [![Flag of Argentina](https://hoi4.paradoxwikis.com/images/thumb/a/a2/Argentina.png/24px-Argentina.png)](/Argentina "Argentina") [Argentina](/Argentina "Argentina")',
    completionRequirements:
      '[![Occupation.png](https://hoi4.paradoxwikis.com/images/d/dc/Occupation.png)](/File:Occupation.png) Controls **Falkland Islands** *(299)* and **South Georgia** *(720)*',
    notes:
      '**Note:** The time requirement is not necessary to complete the achievement, it automatically unlocks when you occupy the island by force or take it in a peace.',
    game: 'hoi4',
  },
  {
    id: 'hoi4_ach_202',
    name: 'Lamento Boliviano',
    description: 'As Argentina, own all of Latin America except Bolivia',
    icon: 'https://hoi4.paradoxwikis.com/images/1/1d/Lamento_Boliviano.png',
    dlc: '',
    version: '1.14',
    difficulty: 'H',
    startingConditions:
      '[![Yes](https://hoi4.paradoxwikis.com/images/thumb/7/77/Yes.png/22px-Yes.png)](/File:Yes.png "Yes") Playing as [![Flag of Argentina](https://hoi4.paradoxwikis.com/images/thumb/a/a2/Argentina.png/24px-Argentina.png)](/Argentina "Argentina") [Argentina](/Argentina "Argentina")',
    completionRequirements:
      '*   [![No](https://hoi4.paradoxwikis.com/images/thumb/0/04/No.png/22px-No.png)](/File:No.png "No") Controls **Santa Cruz** *(487)* and **La Paz** *(302)*\n*   [![Occupation.png](https://hoi4.paradoxwikis.com/images/d/dc/Occupation.png)](/File:Occupation.png) Controls:\n\n*   *   **From [![Flag of Colombia](https://hoi4.paradoxwikis.com/images/thumb/8/80/Colombia.png/24px-Colombia.png)](/Colombia "Colombia") [Colombia](/Colombia "Colombia")** : Expand\n        \n        *   **La Libertad** *(493)*\n        *   **Cundinamarca** *(306)*\n        *   **Meta** *(486)*\n        \n\n*   *   **From [![Flag of Venezuela](https://hoi4.paradoxwikis.com/images/thumb/5/5d/Venezuela.png/24px-Venezuela.png)](/Venezuela "Venezuela") [Venezuela](/Venezuela "Venezuela")** : Expand\n        \n        *   **Zulia** *(489)*\n        *   **Miranda** *(307)*\n        *   **Bolivar** *(488)*\n        *   **Curaçao** *(695)*\n        \n\n*   *   **From [![Flag of Ecuador](https://hoi4.paradoxwikis.com/images/thumb/b/b2/Ecuador.png/24px-Ecuador.png)](/Ecuador "Ecuador") [Ecuador](/Ecuador "Ecuador")** : Expand\n        \n        *   **Ecuador** *(305)*\n        *   **Pastaza** *(490)*\n        *   **Galapagos Islands** *(649)*\n        \n\n*   *   **From [![Flag of Peru](https://hoi4.paradoxwikis.com/images/thumb/a/a8/Peru.png/24px-Peru.png)](/Peru "Peru") [Peru](/Peru "Peru")** : Expand\n        \n        *   **Loreto** *(491)*\n        *   **Lima** *(303)*\n        *   **Ucayali** *(494)*\n        *   **Arequipa** *(492)*\n        *   **Tacna-Moquegua** *(947)*\n        \n\n*   *   **From [![Flag of Paraguay](https://hoi4.paradoxwikis.com/images/thumb/5/57/Paraguay.png/24px-Paraguay.png)](/Paraguay "Paraguay") [Paraguay](/Paraguay "Paraguay")** : Expand\n        \n        *   **Chaco Boreal** *(688)*\n        *   **Paraguay** *(301)*\n        \n\n*   *   **From [![Flag of Uruguay](https://hoi4.paradoxwikis.com/images/thumb/2/29/Uruguay.png/24px-Uruguay.png)](/Uruguay "Uruguay") [Uruguay](/Uruguay "Uruguay")** : Expand\n        \n        *   **Paysandú** *(946)*\n        *   **Montevideo** *(300)*\n        *   **Cerro Largo** *(945)*\n        \n\n*   *   **From [![Flag of Chile](https://hoi4.paradoxwikis.com/images/thumb/f/fa/Chile.png/24px-Chile.png)](/Chile "Chile") [Chile](/Chile "Chile")** : Expand\n        \n        *   **Arica y Tarapacá** *(951)*\n        *   **Antofagasta** *(506)*\n        *   **Atacama** *(952)*\n        *   **Santiago** *(279)*\n        *   **Araucanía** *(950)*\n        *   **Aysén** *(949)*\n        *   **Magallanes** *(507)*\n        *   **Easter Island** *(948)*\n        \n\n*   *   **From [![Flag of Argentina](https://hoi4.paradoxwikis.com/images/thumb/a/a2/Argentina.png/24px-Argentina.png)](/Argentina "Argentina") [Argentina](/Argentina "Argentina")** : Expand\n        \n        *   **Los Andes** *(959)*\n        *   **Formosa** *(957)*\n        *   **Tucumán** *(508)*\n        *   **Chaco Austral** *(509)*\n        *   **Región Mesopotámica** *(510)*\n        *   **San Juan y La Rioja** *(960)*\n        *   **San Luis y La Pampa** *(958)*\n        *   **Mendoza** *(511)*\n        *   **Santa Fe** *(956)*\n        *   **San Luis y La Pampa** *(958)*\n        *   **Buenos Aires** *(278)*\n        *   **Río Negro** *(512)*\n        *   **Chubut** *(955)*\n        *   **Santa Cruz** *(954)*\n        *   **Tierra del Fuego** *(953)*\n        \n\n*   *   **From [![Flag of Brazil](https://hoi4.paradoxwikis.com/images/thumb/8/8c/Brazil.png/24px-Brazil.png)](/Brazil "Brazil") [Brazil](/Brazil "Brazil")** : Expand\n        \n        *   **Amazonas** *(495)*\n        *   **Acre** *(940)*\n        *   **Guaporé** *(942)*\n        *   **Amapá** *(939)*\n        *   **Pará** *(938)*\n        *   **Mato Grosso** *(280)*\n        *   **Maranhão** *(497)*\n        *   **Tocantins** *(941)*\n        *   **Maranhão** *(497)*\n        *   **Piauí** *(937)*\n        *   **Ceará** *(935)*\n        *   **Rio Grande do Norte** *(498)*\n        *   **Pernambuco** *(936)*\n        *   **Bahia** *(499)*\n        *   **Goiás** *(505)*\n        *   **Minas Gerais** *(496)*\n        *   **Espírito Santo** *(943)*\n        *   **Punta Porá** *(504)*\n        *   **Rio de Janeiro** *(500)*\n        *   **São Paulo** *(501)*\n        *   **Paraná** *(944)*\n        *   **Santa Catarina** *(503)*\n        *   **Rio Grande do Sul** *(502)*\n        \n\n*   *   **Falkland Islands** *(299)*\n    *   **British Guyana** *(687)*\n    *   **Suriname** *(309)*\n    *   **French Guiana** *(310)*',
    notes: '*For detailed strategies, see [Lamento Boliviano](/Lamento_Boliviano "Lamento Boliviano")*',
    game: 'hoi4',
  },
  {
    id: 'hoi4_ach_203',
    name: 'Revenge for the triple alliance',
    description: 'As Paraguay, declare war on Argentina, Brazil and Uruguay within the same month',
    icon: 'https://hoi4.paradoxwikis.com/images/d/d5/Revenge_for_the_triple_alliance.png',
    dlc: '',
    version: '1.14',
    difficulty: 'VE',
    startingConditions:
      '[![Yes](https://hoi4.paradoxwikis.com/images/thumb/7/77/Yes.png/22px-Yes.png)](/File:Yes.png "Yes") Playing as [![Flag of Paraguay](https://hoi4.paradoxwikis.com/images/thumb/5/57/Paraguay.png/24px-Paraguay.png)](/Paraguay "Paraguay") [Paraguay](/Paraguay "Paraguay")',
    completionRequirements:
      '*   [![War goal](https://hoi4.paradoxwikis.com/images/thumb/c/c2/Relation_wargoal.png/22px-Relation_wargoal.png)](/War_goal "War goal") Is at war with [![Flag of Brazil](https://hoi4.paradoxwikis.com/images/thumb/8/8c/Brazil.png/24px-Brazil.png)](/Brazil "Brazil") [Brazil](/Brazil "Brazil")\n*   [![War goal](https://hoi4.paradoxwikis.com/images/thumb/c/c2/Relation_wargoal.png/22px-Relation_wargoal.png)](/War_goal "War goal") Is at war with [![Flag of Argentina](https://hoi4.paradoxwikis.com/images/thumb/a/a2/Argentina.png/24px-Argentina.png)](/Argentina "Argentina") [Argentina](/Argentina "Argentina")\n*   [![War goal](https://hoi4.paradoxwikis.com/images/thumb/c/c2/Relation_wargoal.png/22px-Relation_wargoal.png)](/War_goal "War goal") Is at war with [![Flag of Uruguay](https://hoi4.paradoxwikis.com/images/thumb/2/29/Uruguay.png/24px-Uruguay.png)](/Uruguay "Uruguay") [Uruguay](/Uruguay "Uruguay")\n*   [![Yes](https://hoi4.paradoxwikis.com/images/thumb/7/77/Yes.png/22px-Yes.png)](/File:Yes.png "Yes") [![Flag of Argentina](https://hoi4.paradoxwikis.com/images/thumb/a/a2/Argentina.png/24px-Argentina.png)](/Argentina "Argentina") [Argentina](/Argentina "Argentina"): Has declared war on Brazil, Argentina and Uruguay within 1 month\n*   [![Yes](https://hoi4.paradoxwikis.com/images/thumb/7/77/Yes.png/22px-Yes.png)](/File:Yes.png "Yes") [![Flag of Brazil](https://hoi4.paradoxwikis.com/images/thumb/8/8c/Brazil.png/24px-Brazil.png)](/Brazil "Brazil") [Brazil](/Brazil "Brazil"): Has declared war on Brazil, Argentina and Uruguay within 1 month\n*   [![Yes](https://hoi4.paradoxwikis.com/images/thumb/7/77/Yes.png/22px-Yes.png)](/File:Yes.png "Yes") [![Flag of Uruguay](https://hoi4.paradoxwikis.com/images/thumb/2/29/Uruguay.png/24px-Uruguay.png)](/Uruguay "Uruguay") [Uruguay](/Uruguay "Uruguay"): Has declared war on Brazil, Argentina and Uruguay within 1 month',
    notes:
      'Avoid the civil war and flip [![{{{1}}}](https://hoi4.paradoxwikis.com/images/thumb/e/e9/Communism.png/22px-Communism.png)](/Ideology#Communism "{{{1}}}")[communist](/Ideology#Communism "Ideology"). Use your first ~70 [![Political Power](https://hoi4.paradoxwikis.com/images/thumb/2/24/Political_power.png/22px-Political_power.png)](/Government#Political_power "Political Power")[Political Power](/Government#Political_power "Government") to justify a [![War goal](https://hoi4.paradoxwikis.com/images/thumb/c/c2/Relation_wargoal.png/22px-Relation_wargoal.png)](/War_goal "War goal")[War goal](/War_goal "War goal") on [![Flag of Uruguay](https://hoi4.paradoxwikis.com/images/thumb/2/29/Uruguay.png/24px-Uruguay.png)](/Uruguay "Uruguay") [Uruguay](/Uruguay "Uruguay") which should take almost a year. Take the focus [![Beneath the Shadow of the Triple Alliance](https://hoi4.paradoxwikis.com/images/thumb/f/f4/Goal_generic_attack_allies.png/22px-Goal_generic_attack_allies.png)](/Paraguay/Uruguay_shared_national_focus_tree_branches#Beneath_the_Shadow_of_the_Triple_Alliance "Beneath the Shadow of the Triple Alliance")[Beneath the Shadow of the Triple Alliance](/Paraguay/Uruguay_shared_national_focus_tree_branches#Beneath_the_Shadow_of_the_Triple_Alliance "Paraguay/Uruguay shared national focus tree branches") to get the other two war goals around the same date. Simply declare war on all three countries when you have all war goals.',
    game: 'hoi4',
  },
  {
    id: 'hoi4_ach_204',
    name: 'The Dragon Rises',
    description: 'As "Welsh Argentina", control Wales',
    icon: 'https://hoi4.paradoxwikis.com/images/5/57/The_Dragon_Rises.png',
    dlc: '',
    version: '1.14',
    difficulty: 'H',
    startingConditions: '',
    completionRequirements:
      '*   [![Yes](https://hoi4.paradoxwikis.com/images/thumb/7/77/Yes.png/22px-Yes.png)](/File:Yes.png "Yes") Is [![Flag of Y Wladychfa Gymreig](https://hoi4.paradoxwikis.com/images/thumb/6/66/Welsh_Argentina.png/24px-Welsh_Argentina.png)](/Y_Wladychfa_Gymreig "Y Wladychfa Gymreig") [Y Wladychfa Gymreig](/Y_Wladychfa_Gymreig "Y Wladychfa Gymreig")\n*   [![Occupation.png](https://hoi4.paradoxwikis.com/images/d/dc/Occupation.png)](/File:Occupation.png) Controls **Wales** *(122)*',
    notes: '*For detailed strategies, see [The Dragon Rises](/The_Dragon_Rises "The Dragon Rises")*',
    game: 'hoi4',
  },
  {
    id: 'hoi4_ach_205',
    name: 'King of What?',
    description: 'Have Jaque Antoine Bernard as King of Chile and control Paris',
    icon: 'https://hoi4.paradoxwikis.com/images/3/3a/King_of_What%3F.png',
    dlc: '',
    version: '1.14',
    difficulty: 'E',
    startingConditions:
      '[![Yes](https://hoi4.paradoxwikis.com/images/thumb/7/77/Yes.png/22px-Yes.png)](/File:Yes.png "Yes") Playing as [![Flag of Chile](https://hoi4.paradoxwikis.com/images/thumb/f/fa/Chile.png/24px-Chile.png)](/Chile "Chile") [Chile](/Chile "Chile")',
    completionRequirements:
      '*   [![Yes](https://hoi4.paradoxwikis.com/images/thumb/7/77/Yes.png/22px-Yes.png)](/File:Yes.png "Yes") Ruling party is [![{{{1}}}](https://hoi4.paradoxwikis.com/images/thumb/9/98/Neutrality.png/22px-Neutrality.png)](/Ideology#Neutrality "{{{1}}}")[Non-Aligned](/Ideology#Neutrality "Ideology")\n*   [![Yes](https://hoi4.paradoxwikis.com/images/thumb/7/77/Yes.png/22px-Yes.png)](/File:Yes.png "Yes") Has completed focus [![Crown Antoine as Sovereign King](https://hoi4.paradoxwikis.com/images/thumb/6/6e/Focus_CHL_crown_antoine_as_sovereign_king.png/22px-Focus_CHL_crown_antoine_as_sovereign_king.png)](/Chilean_national_focus_tree#Crown_Antoine_as_Sovereign_King "Crown Antoine as Sovereign King")[Crown Antoine as Sovereign King](/Chilean_national_focus_tree#Crown_Antoine_as_Sovereign_King "Chilean national focus tree")\n*   [![Occupation.png](https://hoi4.paradoxwikis.com/images/d/dc/Occupation.png)](/File:Occupation.png) Controls **Ile de France** *(16)*',
    notes:
      'When the civil war fires, chose the option for divisions, rather than territory and do the [![Mobilize the Veteran Legionaries](https://hoi4.paradoxwikis.com/images/thumb/0/0e/Focus_CHL_mobilize_the_veteran_legionaries.png/22px-Focus_CHL_mobilize_the_veteran_legionaries.png)](/Chilean_national_focus_tree#Mobilize_the_Veteran_Legionaries "Mobilize the Veteran Legionaries")[Mobilize the Veteran Legionaries](/Chilean_national_focus_tree#Mobilize_the_Veteran_Legionaries "Chilean national focus tree") focus ASAP. When you attack [![Flag of Argentina](https://hoi4.paradoxwikis.com/images/thumb/a/a2/Argentina.png/24px-Argentina.png)](/Argentina "Argentina") [Argentina](/Argentina "Argentina") DO NOT finish the war, but try to push a bit in the south and cause some casualties.  \nWhen WW2 starts, attack [![Flag of France](https://hoi4.paradoxwikis.com/images/thumb/d/de/France.png/24px-France.png)](/France "France") [France](/France "France") and join Axis. If [![Flag of Germany](https://hoi4.paradoxwikis.com/images/thumb/e/e9/German_Reich.png/24px-German_Reich.png)](/Germany "Germany") [Germany](/Germany "Germany") doesn\'t let you join, reload the save and they will let you. Once [![Flag of France](https://hoi4.paradoxwikis.com/images/thumb/d/de/France.png/24px-France.png)](/France "France") [France](/France "France") capitulates, just ask [![Flag of Germany](https://hoi4.paradoxwikis.com/images/thumb/e/e9/German_Reich.png/24px-German_Reich.png)](/Germany "Germany") [Germany](/Germany "Germany") for control of Paris. (You should have enough war score from the war against [![Flag of Argentina](https://hoi4.paradoxwikis.com/images/thumb/a/a2/Argentina.png/24px-Argentina.png)](/Argentina "Argentina") [Argentina](/Argentina "Argentina")). If it still is not enough, try giving [![Flag of Germany](https://hoi4.paradoxwikis.com/images/thumb/e/e9/German_Reich.png/24px-German_Reich.png)](/Germany "Germany") [Germany](/Germany "Germany") some of the occupied territories in Argentina.',
    game: 'hoi4',
  },
  {
    id: 'hoi4_ach_206',
    name: 'True Condor Legion',
    description: 'As CHL, BOL, PRU, ECU, VEN, COL - Sent volunteers to Germany',
    icon: 'https://hoi4.paradoxwikis.com/images/4/42/True_Condor_Legion.png',
    dlc: '',
    version: '1.14',
    difficulty: 'VE',
    startingConditions:
      '[![Yes](https://hoi4.paradoxwikis.com/images/thumb/7/77/Yes.png/22px-Yes.png)](/File:Yes.png "Yes") Playing as *either*:\n\n*   *   [![Flag of Bolivia](https://hoi4.paradoxwikis.com/images/thumb/3/38/Bolivia.png/24px-Bolivia.png)](/Bolivia "Bolivia") [Bolivia](/Bolivia "Bolivia")\n    *   [![Flag of Chile](https://hoi4.paradoxwikis.com/images/thumb/f/fa/Chile.png/24px-Chile.png)](/Chile "Chile") [Chile](/Chile "Chile")\n    *   [![Flag of Colombia](https://hoi4.paradoxwikis.com/images/thumb/8/80/Colombia.png/24px-Colombia.png)](/Colombia "Colombia") [Colombia](/Colombia "Colombia")\n    *   [![Flag of Ecuador](https://hoi4.paradoxwikis.com/images/thumb/b/b2/Ecuador.png/24px-Ecuador.png)](/Ecuador "Ecuador") [Ecuador](/Ecuador "Ecuador")\n    *   [![Flag of Peru](https://hoi4.paradoxwikis.com/images/thumb/a/a8/Peru.png/24px-Peru.png)](/Peru "Peru") [Peru](/Peru "Peru")\n    *   [![Flag of Venezuela](https://hoi4.paradoxwikis.com/images/thumb/5/5d/Venezuela.png/24px-Venezuela.png)](/Venezuela "Venezuela") [Venezuela](/Venezuela "Venezuela")',
    completionRequirements:
      '[![Yes](https://hoi4.paradoxwikis.com/images/thumb/7/77/Yes.png/22px-Yes.png)](/File:Yes.png "Yes") Has sent volunteers to [![Flag of Germany](https://hoi4.paradoxwikis.com/images/thumb/e/e9/German_Reich.png/24px-German_Reich.png)](/Germany "Germany") [Germany](/Germany "Germany")',
    notes:
      'Picking a country that already starts with an authoritarian government like [![Flag of Venezuela](https://hoi4.paradoxwikis.com/images/thumb/5/5d/Venezuela.png/24px-Venezuela.png)](/Venezuela "Venezuela") [Venezuela](/Venezuela "Venezuela") or [![Flag of Peru](https://hoi4.paradoxwikis.com/images/thumb/a/a8/Peru.png/24px-Peru.png)](/Peru "Peru") [Peru](/Peru "Peru") can speed things up. Spam 2-width divisions to reach the threshold for sending volunteers (30) and when [![Flag of Germany](https://hoi4.paradoxwikis.com/images/thumb/e/e9/German_Reich.png/24px-German_Reich.png)](/Germany "Germany") [Germany](/Germany "Germany") attacks [![Flag of Poland](https://hoi4.paradoxwikis.com/images/thumb/9/99/Poland.png/24px-Poland.png)](/Poland "Poland") [Poland](/Poland "Poland") on historical, simply send a few volunteers. If world tension is too low justify a war goal on the [![Flag of USA](https://hoi4.paradoxwikis.com/images/thumb/3/32/United_States.png/24px-United_States.png)](/USA "USA") [USA](/USA "USA") to spike it.',
    game: 'hoi4',
  },
  {
    id: 'hoi4_ach_207',
    name: 'Chilean Empire',
    description: 'Control all mainland states that border the pacific in South America, North America and Asia',
    icon: 'https://hoi4.paradoxwikis.com/images/d/d6/Chilean_Empire.png',
    dlc: '',
    version: '1.14',
    difficulty: 'VH',
    startingConditions:
      '[![Yes](https://hoi4.paradoxwikis.com/images/thumb/7/77/Yes.png/22px-Yes.png)](/File:Yes.png "Yes") Playing as [![Flag of Chile](https://hoi4.paradoxwikis.com/images/thumb/f/fa/Chile.png/24px-Chile.png)](/Chile "Chile") [Chile](/Chile "Chile")',
    completionRequirements:
      '*   [![Occupation.png](https://hoi4.paradoxwikis.com/images/d/dc/Occupation.png)](/File:Occupation.png) Controls:\n\n*   *   **From South America**: Expand\n        \n        *   **Magallanes** *(507)*\n        *   **Aysén** *(949)*\n        *   **Araucanía** *(950)*\n        *   **Santiago** *(279)*\n        *   **Atacama** *(952)*\n        *   **Antofagasta** *(506)*\n        *   **Arica y Tarapacá** *(951)*\n        *   **Tacna-Moquegua** *(947)*\n        *   **Arequipa** *(492)*\n        *   **Lima** *(303)*\n        *   **Ecuador** *(305)*\n        *   **Cundinamarca** *(306)*\n        *   **La Libertad** *(493)*\n        \n\n*   *   **From North America**: Expand\n        \n        *   **Panamá** *(304)*\n        *   **Panamá Canal** *(685)*\n        *   **Costa Rica** *(316)*\n        *   **Nicaragua** *(317)*\n        *   **Honduras** *(312)*\n        *   **El Salvador** *(314)*\n        *   **Guatemala** *(313)*\n        *   **Chiapas** *(475)*\n        *   **Oaxaca** *(476)*\n        *   **Guerrero** *(485)*\n        *   **Jalisco** *(478)*\n        *   **Durango** *(481)*\n        *   **Sonora** *(483)*\n        *   **Baja California** *(484)*\n        *   **California** *(378)*\n        *   **Oregon** *(385)*\n        *   **Washington** *(386)*\n        *   **Vancouver Island** *(740)*\n        *   **British Columbia** *(473)*\n        *   **Prince Rupert** *(471)*\n        *   **Alaska** *(463)*\n        \n\n*   *   **From Soviet Union**: Expand\n        \n        *   **Chukchi Peninsula** *(875)*\n        *   **Chukotka** *(822)*\n        *   **Kamchatka** *(637)*\n        *   **Magadan** *(874)*\n        *   **Okhotsk** *(562)*\n        *   **Nikolayevsk** *(560)*\n        *   **Khabarovsk** *(409)*\n        *   **Vladivostok** *(408)*\n        \n\n*   *   **From Korea**: Expand\n        \n        *   **North Korea** *(527)*\n        *   **South Korea** *(525)*\n        \n\n*   *   **From China**: Expand\n        \n        *   **Liaotung** *(716)*\n        *   **Dalian** *(745)*\n        *   **Jehol** *(610)*\n        *   **East Hebei** *(609)*\n        *   **Beijing** *(608)*\n        *   **Hebei** *(614)*\n        *   **Shandong** *(597)*\n        *   **Qingdao** *(743)*\n        *   **Jiangsu** *(598)*\n        *   **Shanghai** *(613)*\n        *   **Zhejiang** *(596)*\n        *   **Fujian** *(595)*\n        *   **Guangdong** *(593)*\n        *   **Hong Kong** *(326)*\n        *   **Guangzhou** *(592)*\n        *   **Macau** *(729)*\n        *   **Hainan** *(591)*\n        *   **Nanning** *(594)*\n        \n\n*   *   **From South East Asia**: Expand\n        \n        *   **Tonkin** *(671)*\n        *   **Cambodia** *(741)*\n        *   **Siam** *(289)*\n        *   **Northern Malay** *(724)*\n        *   **Singapore** *(336)*',
    notes: '*For detailed strategies, see [Chilean Empire](/Chilean_Empire "Chilean Empire")*',
    game: 'hoi4',
  },
  {
    id: 'hoi4_ach_208',
    name: 'Reconquistadors',
    description: 'As Argentina or Chile, have a Conquistadors national spirit active while holding all Spanish Cores',
    icon: 'https://hoi4.paradoxwikis.com/images/1/1f/Reconquistadors.png',
    dlc: '',
    version: '1.14',
    difficulty: 'M',
    startingConditions:
      '[![Yes](https://hoi4.paradoxwikis.com/images/thumb/7/77/Yes.png/22px-Yes.png)](/File:Yes.png "Yes") Playing as *either*:\n\n*   *   [![Flag of Argentina](https://hoi4.paradoxwikis.com/images/thumb/a/a2/Argentina.png/24px-Argentina.png)](/Argentina "Argentina") [Argentina](/Argentina "Argentina")\n    *   [![Flag of Chile](https://hoi4.paradoxwikis.com/images/thumb/f/fa/Chile.png/24px-Chile.png)](/Chile "Chile") [Chile](/Chile "Chile")',
    completionRequirements:
      '*   [![Yes](https://hoi4.paradoxwikis.com/images/thumb/7/77/Yes.png/22px-Yes.png)](/File:Yes.png "Yes") If playing as [![Flag of Argentina](https://hoi4.paradoxwikis.com/images/thumb/a/a2/Argentina.png/24px-Argentina.png)](/Argentina "Argentina") [Argentina](/Argentina "Argentina"): Has completed focus [![Unión Nacional Fascista](https://hoi4.paradoxwikis.com/images/thumb/e/e4/Focus_ARG_union_nacional_fascista.png/22px-Focus_ARG_union_nacional_fascista.png)](/Argentinean_national_focus_tree#Unión_Nacional_Fascista "Unión Nacional Fascista")[Unión Nacional Fascista](/Argentinean_national_focus_tree#Unión_Nacional_Fascista "Argentinean national focus tree")\n*   [![Yes](https://hoi4.paradoxwikis.com/images/thumb/7/77/Yes.png/22px-Yes.png)](/File:Yes.png "Yes") If playing as [![Flag of Chile](https://hoi4.paradoxwikis.com/images/thumb/f/fa/Chile.png/24px-Chile.png)](/Chile "Chile") [Chile](/Chile "Chile"): Has completed focus [![Restore the Old Kingdom](https://hoi4.paradoxwikis.com/images/thumb/f/fe/Focus_CHL_restore_the_old_kingdom.png/22px-Focus_CHL_restore_the_old_kingdom.png)](/Chilean_national_focus_tree#Restore_the_Old_Kingdom "Restore the Old Kingdom")[Restore the Old Kingdom](/Chilean_national_focus_tree#Restore_the_Old_Kingdom "Chilean national focus tree")\n*   [![Occupation.png](https://hoi4.paradoxwikis.com/images/d/dc/Occupation.png)](/File:Occupation.png) Controls:\n\nExpand\n\n*   **Galicia** *(171)*\n*   **Asturias** *(790)*\n*   **León** *(174)*\n*   **País Vasco** *(792)*\n*   **Valladolid** *(791)*\n*   **Burgos** *(176)*\n*   **Navarra** *(172)*\n*   **Salamanca** *(788)*\n*   **Madrid** *(41)*\n*   **Guadalajara** *(793)*\n*   **Western Aragón** *(166)*\n*   **Eastern Aragón** *(794)*\n*   **Cataluña** *(165)*\n*   **Valencia** *(167)*\n*   **Extremadura** *(170)*\n*   **Ciudad Real** *(175)*\n*   **Murcia** *(168)*\n*   **Córdoba** *(789)*\n*   **Sevilla** *(169)*\n*   **Granada** *(173)*',
    notes:
      '**Argentina:**  \nGo the [![{{{1}}}](https://hoi4.paradoxwikis.com/images/thumb/1/1f/Fascism.png/22px-Fascism.png)](/Ideology#Fascism "{{{1}}}")[fascist](/Ideology#Fascism "Ideology") path down to "Union Nacional Fascista" and build up your industry and a capable army. Get military access from [![Flag of Italy](https://hoi4.paradoxwikis.com/images/thumb/2/2a/Italy.png/24px-Italy.png)](/Italy "Italy") [Italy](/Italy "Italy") or even join the Axis via focus. Either way naval invade [![Flag of Spain](https://hoi4.paradoxwikis.com/images/thumb/5/58/Spain.png/24px-Spain.png)](/Spain "Spain") [Spain](/Spain "Spain") when their civil war is over and your army is ready. They\'ll have very few equipment but will try to conquer any bridgehead you establish. This will cause them to have a massive equipment deficit quickly so you can overrun them easily.  \n(Naval invading from countries you only have military access to works when you first set up a naval invasion from your country to the point from where you want to naval invade your actual target. For example set up from Buenos Aires to Sardinia and then you should be able to plan from Sardinia).',
    game: 'hoi4',
  },
  {
    id: 'hoi4_ach_209',
    name: 'Hispanics of the world, unite!',
    description: 'As Chile, form the Hispanic Alliance and have at least 8 "Hispanic" nations in your faction',
    icon: 'https://hoi4.paradoxwikis.com/images/6/6d/Hispanics_of_the_world%2C_unite%21.png',
    dlc: '',
    version: '1.14',
    difficulty: 'E',
    startingConditions:
      '[![Yes](https://hoi4.paradoxwikis.com/images/thumb/7/77/Yes.png/22px-Yes.png)](/File:Yes.png "Yes") Playing as [![Flag of Chile](https://hoi4.paradoxwikis.com/images/thumb/f/fa/Chile.png/24px-Chile.png)](/Chile "Chile") [Chile](/Chile "Chile")',
    completionRequirements:
      '*   [![Yes](https://hoi4.paradoxwikis.com/images/thumb/7/77/Yes.png/22px-Yes.png)](/File:Yes.png "Yes") Has completed focus [![The Hispanic Alliance](https://hoi4.paradoxwikis.com/images/thumb/3/38/Goal_tripartite_pact.png/22px-Goal_tripartite_pact.png)](/Chilean_national_focus_tree#The_Hispanic_Alliance "The Hispanic Alliance")[The Hispanic Alliance](/Chilean_national_focus_tree#The_Hispanic_Alliance "Chilean national focus tree")\n*   [![Relation join faction.png](https://hoi4.paradoxwikis.com/images/thumb/9/91/Relation_join_faction.png/22px-Relation_join_faction.png)](/File:Relation_join_faction.png) Is Faction leader\n*   [![Relation join faction.png](https://hoi4.paradoxwikis.com/images/thumb/9/91/Relation_join_faction.png/22px-Relation_join_faction.png)](/File:Relation_join_faction.png) Has at least 8 of the following countries in your faction:\n\nExpand\n\n*   [![Flag of Mexico](https://hoi4.paradoxwikis.com/images/thumb/0/0a/Mexico.png/24px-Mexico.png)](/Mexico "Mexico") [Mexico](/Mexico "Mexico")\n*   [![Flag of Guatemala](https://hoi4.paradoxwikis.com/images/thumb/5/55/Guatemala.png/24px-Guatemala.png)](/Guatemala "Guatemala") [Guatemala](/Guatemala "Guatemala")\n*   [![Flag of Cuba](https://hoi4.paradoxwikis.com/images/thumb/6/6c/Cuba.png/24px-Cuba.png)](/Cuba "Cuba") [Cuba](/Cuba "Cuba")\n*   [![Flag of Dominican Republic](https://hoi4.paradoxwikis.com/images/thumb/5/5b/Dominican_Republic.png/24px-Dominican_Republic.png)](/Dominican_Republic "Dominican Republic") [Dominican Republic](/Dominican_Republic "Dominican Republic")\n*   [![Flag of Puerto Rico](https://hoi4.paradoxwikis.com/images/thumb/8/87/Puerto_Rico.png/24px-Puerto_Rico.png)](/Puerto_Rico "Puerto Rico") [Puerto Rico](/Puerto_Rico "Puerto Rico")\n*   [![Flag of El Salvador](https://hoi4.paradoxwikis.com/images/thumb/5/5c/El_Salvador.png/24px-El_Salvador.png)](/El_Salvador "El Salvador") [El Salvador](/El_Salvador "El Salvador")\n*   [![Flag of Honduras](https://hoi4.paradoxwikis.com/images/thumb/0/09/Honduras.png/24px-Honduras.png)](/Honduras "Honduras") [Honduras](/Honduras "Honduras")\n*   [![Flag of Nicaragua](https://hoi4.paradoxwikis.com/images/thumb/7/7e/Republic_of_Nicaragua.png/24px-Republic_of_Nicaragua.png)](/Nicaragua "Nicaragua") [Nicaragua](/Nicaragua "Nicaragua")\n*   [![Flag of Costa Rica](https://hoi4.paradoxwikis.com/images/thumb/d/da/Costa_Rica.png/24px-Costa_Rica.png)](/Costa_Rica "Costa Rica") [Costa Rica](/Costa_Rica "Costa Rica")\n*   [![Flag of Panama](https://hoi4.paradoxwikis.com/images/thumb/3/3f/Panama.png/24px-Panama.png)](/Panama "Panama") [Panama](/Panama "Panama")\n*   [![Flag of Colombia](https://hoi4.paradoxwikis.com/images/thumb/8/80/Colombia.png/24px-Colombia.png)](/Colombia "Colombia") [Colombia](/Colombia "Colombia")\n*   [![Flag of Venezuela](https://hoi4.paradoxwikis.com/images/thumb/5/5d/Venezuela.png/24px-Venezuela.png)](/Venezuela "Venezuela") [Venezuela](/Venezuela "Venezuela")\n*   [![Flag of Ecuador](https://hoi4.paradoxwikis.com/images/thumb/b/b2/Ecuador.png/24px-Ecuador.png)](/Ecuador "Ecuador") [Ecuador](/Ecuador "Ecuador")\n*   [![Flag of Peru](https://hoi4.paradoxwikis.com/images/thumb/a/a8/Peru.png/24px-Peru.png)](/Peru "Peru") [Peru](/Peru "Peru")\n*   [![Flag of Bolivia](https://hoi4.paradoxwikis.com/images/thumb/3/38/Bolivia.png/24px-Bolivia.png)](/Bolivia "Bolivia") [Bolivia](/Bolivia "Bolivia")\n*   [![Flag of Paraguay](https://hoi4.paradoxwikis.com/images/thumb/5/57/Paraguay.png/24px-Paraguay.png)](/Paraguay "Paraguay") [Paraguay](/Paraguay "Paraguay")\n*   [![Flag of Uruguay](https://hoi4.paradoxwikis.com/images/thumb/2/29/Uruguay.png/24px-Uruguay.png)](/Uruguay "Uruguay") [Uruguay](/Uruguay "Uruguay")\n*   [![Flag of Argentina](https://hoi4.paradoxwikis.com/images/thumb/a/a2/Argentina.png/24px-Argentina.png)](/Argentina "Argentina") [Argentina](/Argentina "Argentina")',
    notes:
      'Rush down the [![{{{1}}}](https://hoi4.paradoxwikis.com/images/thumb/1/1f/Fascism.png/22px-Fascism.png)](/Ideology#Fascism "{{{1}}}")[fascist](/Ideology#Fascism "Ideology") route and take the Hispanic Alliance focus to invite all fascist or non-aligned Hispanic American countries. There is an 80% chance for them to accept your invitation (independent of opinion or diplomatic pressure). In 1936, these countries are [![Flag of Argentina](https://hoi4.paradoxwikis.com/images/thumb/a/a2/Argentina.png/24px-Argentina.png)](/Argentina "Argentina") [Argentina](/Argentina "Argentina"), [![Flag of Dominican Republic](https://hoi4.paradoxwikis.com/images/thumb/5/5b/Dominican_Republic.png/24px-Dominican_Republic.png)](/Dominican_Republic "Dominican Republic") [Dominican Republic](/Dominican_Republic "Dominican Republic"), [![Flag of El Salvador](https://hoi4.paradoxwikis.com/images/thumb/5/5c/El_Salvador.png/24px-El_Salvador.png)](/El_Salvador "El Salvador") [El Salvador](/El_Salvador "El Salvador"), [![Flag of Guatemala](https://hoi4.paradoxwikis.com/images/thumb/5/55/Guatemala.png/24px-Guatemala.png)](/Guatemala "Guatemala") [Guatemala](/Guatemala "Guatemala"), [![Flag of Nicaragua](https://hoi4.paradoxwikis.com/images/thumb/7/7e/Republic_of_Nicaragua.png/24px-Republic_of_Nicaragua.png)](/Nicaragua "Nicaragua") [Nicaragua](/Nicaragua "Nicaragua"), [![Flag of Peru](https://hoi4.paradoxwikis.com/images/thumb/a/a8/Peru.png/24px-Peru.png)](/Peru "Peru") [Peru](/Peru "Peru"), [![Flag of Uruguay](https://hoi4.paradoxwikis.com/images/thumb/2/29/Uruguay.png/24px-Uruguay.png)](/Uruguay "Uruguay") [Uruguay](/Uruguay "Uruguay") and [![Flag of Venezuela](https://hoi4.paradoxwikis.com/images/thumb/5/5d/Venezuela.png/24px-Venezuela.png)](/Venezuela "Venezuela") [Venezuela](/Venezuela "Venezuela"), with [![Flag of Bolivia](https://hoi4.paradoxwikis.com/images/thumb/3/38/Bolivia.png/24px-Bolivia.png)](/Bolivia "Bolivia") [Bolivia](/Bolivia "Bolivia") and [![Flag of Paraguay](https://hoi4.paradoxwikis.com/images/thumb/5/57/Paraguay.png/24px-Paraguay.png)](/Paraguay "Paraguay") [Paraguay](/Paraguay "Paraguay") potentially flipping later. NOTE: make sure to take the focus when as many of them as possible are eligible, because it\'s a one-time thing; once the focus event fires, short of conquering them, it becomes extremely difficult to add anyone who refused or was ineligible at the time. Unless they are in a war, they\'ll need 30% fascist support, fascist government, +100 opinion, 100% diplomatic pressure, *and* some special factor like having a border with you, to make them accept.',
    game: 'hoi4',
  },
  {
    id: 'hoi4_ach_210',
    name: 'Cisplatine War 2, Electric Boogaloo',
    description: 'As Either Brazil or Argentina, be in a faction with Uruguay while at war with Brazil/Argentina',
    icon: 'https://hoi4.paradoxwikis.com/images/1/1e/Cisplatine_War_2%2C_Electric_Boogaloo.png',
    dlc: '',
    version: '1.14',
    difficulty: 'M',
    startingConditions:
      '[![Yes](https://hoi4.paradoxwikis.com/images/thumb/7/77/Yes.png/22px-Yes.png)](/File:Yes.png "Yes") Playing as *either*:\n\n*   *   [![Flag of Argentina](https://hoi4.paradoxwikis.com/images/thumb/a/a2/Argentina.png/24px-Argentina.png)](/Argentina "Argentina") [Argentina](/Argentina "Argentina")\n    *   [![Flag of Brazil](https://hoi4.paradoxwikis.com/images/thumb/8/8c/Brazil.png/24px-Brazil.png)](/Brazil "Brazil") [Brazil](/Brazil "Brazil")',
    completionRequirements:
      'If playing as [![Flag of Brazil](https://hoi4.paradoxwikis.com/images/thumb/8/8c/Brazil.png/24px-Brazil.png)](/Brazil "Brazil") [Brazil](/Brazil "Brazil"):\n\n*   *   [![War goal](https://hoi4.paradoxwikis.com/images/thumb/c/c2/Relation_wargoal.png/22px-Relation_wargoal.png)](/War_goal "War goal") Is at war with [![Flag of Argentina](https://hoi4.paradoxwikis.com/images/thumb/a/a2/Argentina.png/24px-Argentina.png)](/Argentina "Argentina") [Argentina](/Argentina "Argentina")\n    *   [![Relation join faction.png](https://hoi4.paradoxwikis.com/images/thumb/9/91/Relation_join_faction.png/22px-Relation_join_faction.png)](/File:Relation_join_faction.png) Is in Faction with [![Flag of Uruguay](https://hoi4.paradoxwikis.com/images/thumb/2/29/Uruguay.png/24px-Uruguay.png)](/Uruguay "Uruguay") [Uruguay](/Uruguay "Uruguay")\n\nIf playing as [![Flag of Argentina](https://hoi4.paradoxwikis.com/images/thumb/a/a2/Argentina.png/24px-Argentina.png)](/Argentina "Argentina") [Argentina](/Argentina "Argentina"):\n\n*   *   [![War goal](https://hoi4.paradoxwikis.com/images/thumb/c/c2/Relation_wargoal.png/22px-Relation_wargoal.png)](/War_goal "War goal") Is at war with [![Flag of Brazil](https://hoi4.paradoxwikis.com/images/thumb/8/8c/Brazil.png/24px-Brazil.png)](/Brazil "Brazil") [Brazil](/Brazil "Brazil")\n    *   [![Relation join faction.png](https://hoi4.paradoxwikis.com/images/thumb/9/91/Relation_join_faction.png/22px-Relation_join_faction.png)](/File:Relation_join_faction.png) Is in Faction with [![Flag of Uruguay](https://hoi4.paradoxwikis.com/images/thumb/2/29/Uruguay.png/24px-Uruguay.png)](/Uruguay "Uruguay") [Uruguay](/Uruguay "Uruguay")',
    notes:
      'Play as [![Flag of Argentina](https://hoi4.paradoxwikis.com/images/thumb/a/a2/Argentina.png/24px-Argentina.png)](/Argentina "Argentina") [Argentina](/Argentina "Argentina") on historical. Go down the [![{{{1}}}](https://hoi4.paradoxwikis.com/images/thumb/1/1f/Fascism.png/22px-Fascism.png)](/Ideology#Fascism "{{{1}}}")[fascist](/Ideology#Fascism "Ideology") side of the focus tree and pick the focus [![Establishing a Foothold](https://hoi4.paradoxwikis.com/images/thumb/3/3c/Focus_generic_attack_uruguay.png/22px-Focus_generic_attack_uruguay.png)](/Argentinean_national_focus_tree#Establishing_a_Foothold "Establishing a Foothold")[Establishing a Foothold](/Argentinean_national_focus_tree#Establishing_a_Foothold "Argentinean national focus tree") to get a wargoal on [![Flag of Uruguay](https://hoi4.paradoxwikis.com/images/thumb/2/29/Uruguay.png/24px-Uruguay.png)](/Uruguay "Uruguay") [Uruguay](/Uruguay "Uruguay"). Simply defeat and puppet them in the peace deal that follows. Once you reach 60% [![{{{1}}}](https://hoi4.paradoxwikis.com/images/thumb/1/1f/Fascism.png/22px-Fascism.png)](/Ideology#Fascism "{{{1}}}")[fascism](/Ideology#Fascism "Ideology") popularity, continue down the focus tree and either create your own faction (Argentina First) or join the Axis. Near the bottom of the [![{{{1}}}](https://hoi4.paradoxwikis.com/images/thumb/1/1f/Fascism.png/22px-Fascism.png)](/Ideology#Fascism "{{{1}}}")[fascist](/Ideology#Fascism "Ideology") tree you\'ll find the focus [![The Old Enemy](https://hoi4.paradoxwikis.com/images/thumb/c/c2/Focus_ARG_the_old_enemy.png/22px-Focus_ARG_the_old_enemy.png)](/Argentinean_national_focus_tree#The_Old_Enemy "The Old Enemy")[The Old Enemy](/Argentinean_national_focus_tree#The_Old_Enemy "Argentinean national focus tree") giving you a war goal on [![Flag of Brazil](https://hoi4.paradoxwikis.com/images/thumb/8/8c/Brazil.png/24px-Brazil.png)](/Brazil "Brazil") [Brazil](/Brazil "Brazil"). Once you declare your war the achievement will unlock.',
    game: 'hoi4',
  },
  {
    id: 'hoi4_ach_211',
    name: 'America Decolonized!',
    description: 'As Mapuche Chile liberate all native people in North and South America',
    icon: 'https://hoi4.paradoxwikis.com/images/6/6a/America_Decolonized%21.png',
    dlc: '',
    version: '1.14',
    difficulty: 'I',
    startingConditions:
      '[![Yes](https://hoi4.paradoxwikis.com/images/thumb/7/77/Yes.png/22px-Yes.png)](/File:Yes.png "Yes") Playing as [![Flag of Chile](https://hoi4.paradoxwikis.com/images/thumb/f/fa/Chile.png/24px-Chile.png)](/Chile "Chile") [Chile](/Chile "Chile")',
    completionRequirements:
      '*   [![Yes](https://hoi4.paradoxwikis.com/images/thumb/7/77/Yes.png/22px-Yes.png)](/File:Yes.png "Yes") Released [![Flag of Guaraní Nation](https://hoi4.paradoxwikis.com/images/thumb/b/be/Guaran%C3%AD_Nation.png/24px-Guaran%C3%AD_Nation.png)](/Guaran%C3%AD_Nation "Guaraní Nation") [Guaraní Nation](/Guaran%C3%AD_Nation "Guaraní Nation")\n*   [![Yes](https://hoi4.paradoxwikis.com/images/thumb/7/77/Yes.png/22px-Yes.png)](/File:Yes.png "Yes") Released [![Flag of Inca](https://hoi4.paradoxwikis.com/images/thumb/e/e7/Inca_Empire.png/24px-Inca_Empire.png)](/Inca "Inca") [Inca](/Inca "Inca")\n*   [![Yes](https://hoi4.paradoxwikis.com/images/thumb/7/77/Yes.png/22px-Yes.png)](/File:Yes.png "Yes") Released [![Flag of Miskito](https://hoi4.paradoxwikis.com/images/thumb/5/5e/Mosquito_Kingdom.png/24px-Mosquito_Kingdom.png)](/Miskito "Miskito") [Miskito](/Miskito "Miskito")\n*   [![Yes](https://hoi4.paradoxwikis.com/images/thumb/7/77/Yes.png/22px-Yes.png)](/File:Yes.png "Yes") Released [![Flag of Maya](https://hoi4.paradoxwikis.com/images/thumb/a/ad/Maya_State.png/24px-Maya_State.png)](/Maya "Maya") [Maya](/Maya "Maya")\n*   [![Yes](https://hoi4.paradoxwikis.com/images/thumb/7/77/Yes.png/22px-Yes.png)](/File:Yes.png "Yes") Released [![Flag of United Inuit States](https://hoi4.paradoxwikis.com/images/thumb/3/3b/United_Inuit_States.png/24px-United_Inuit_States.png)](/United_Inuit_States "United Inuit States") [United Inuit States](/United_Inuit_States "United Inuit States")\n*   [![Yes](https://hoi4.paradoxwikis.com/images/thumb/7/77/Yes.png/22px-Yes.png)](/File:Yes.png "Yes") Released [![Flag of Charrua](https://hoi4.paradoxwikis.com/images/thumb/e/e7/Charr%C3%BAa_Nation.png/24px-Charr%C3%BAa_Nation.png)](/Charrua "Charrua") [Charrua](/Charrua "Charrua")\n*   [![Yes](https://hoi4.paradoxwikis.com/images/thumb/7/77/Yes.png/22px-Yes.png)](/File:Yes.png "Yes") Released [![Flag of Itza](https://hoi4.paradoxwikis.com/images/thumb/5/5d/Itza_Nation.png/24px-Itza_Nation.png)](/Itza "Itza") [Itza](/Itza "Itza")\n*   [![Yes](https://hoi4.paradoxwikis.com/images/thumb/7/77/Yes.png/22px-Yes.png)](/File:Yes.png "Yes") Released [![Flag of Nahua](https://hoi4.paradoxwikis.com/images/thumb/a/aa/Nahua_Nation.png/24px-Nahua_Nation.png)](/Nahua "Nahua") [Nahua](/Nahua "Nahua")\n*   [![Yes](https://hoi4.paradoxwikis.com/images/thumb/7/77/Yes.png/22px-Yes.png)](/File:Yes.png "Yes") Reorganized [![Flag of Bolivia](https://hoi4.paradoxwikis.com/images/thumb/3/38/Bolivia.png/24px-Bolivia.png)](/Bolivia "Bolivia") [Bolivia](/Bolivia "Bolivia")\n*   [![Yes](https://hoi4.paradoxwikis.com/images/thumb/7/77/Yes.png/22px-Yes.png)](/File:Yes.png "Yes") Reorganized [![Flag of Brazil](https://hoi4.paradoxwikis.com/images/thumb/8/8c/Brazil.png/24px-Brazil.png)](/Brazil "Brazil") [Brazil](/Brazil "Brazil")\n*   [![Yes](https://hoi4.paradoxwikis.com/images/thumb/7/77/Yes.png/22px-Yes.png)](/File:Yes.png "Yes") Reorganized [![Flag of Mexico](https://hoi4.paradoxwikis.com/images/thumb/0/0a/Mexico.png/24px-Mexico.png)](/Mexico "Mexico") [Mexico](/Mexico "Mexico")\n*   [![Yes](https://hoi4.paradoxwikis.com/images/thumb/7/77/Yes.png/22px-Yes.png)](/File:Yes.png "Yes") Reorganized the Guianas\n*   [![Yes](https://hoi4.paradoxwikis.com/images/thumb/7/77/Yes.png/22px-Yes.png)](/File:Yes.png "Yes") Reorganized [![Flag of Canada](https://hoi4.paradoxwikis.com/images/thumb/a/a3/Canada.png/24px-Canada.png)](/Canada "Canada") [Canada](/Canada "Canada")\n*   [![Yes](https://hoi4.paradoxwikis.com/images/thumb/7/77/Yes.png/22px-Yes.png)](/File:Yes.png "Yes") Reorganized [![Flag of United States](https://hoi4.paradoxwikis.com/images/thumb/3/32/United_States.png/24px-United_States.png)](/United_States "United States") [United States](/United_States "United States")',
    notes: '*For detailed strategies, see [America Decolonized!](/America_Decolonized! "America Decolonized!")*',
    game: 'hoi4',
  },
  {
    id: 'hoi4_ach_212',
    name: 'Antischluss',
    description: 'As Austria, control all German starting states.',
    icon: 'https://hoi4.paradoxwikis.com/images/6/6f/Antischluss.png',
    dlc: '',
    version: '1.15',
    difficulty: 'E',
    startingConditions:
      '[![Yes](https://hoi4.paradoxwikis.com/images/thumb/7/77/Yes.png/22px-Yes.png)](/File:Yes.png "Yes") Playing as [![Flag of Austria](https://hoi4.paradoxwikis.com/images/thumb/7/7f/Austria.png/24px-Austria.png)](/Austria "Austria") [Austria](/Austria "Austria")',
    completionRequirements:
      '[![Occupation.png](https://hoi4.paradoxwikis.com/images/d/dc/Occupation.png)](/File:Occupation.png) Controls:\n\nExpand\n\n*   **Ermland-Masuren** *(5)*\n*   **Königsberg** *(763)*\n*   **Hinterpommern** *(63)*\n*   **Ostmark** *(68)*\n*   **Oberschlesien** *(67)*\n*   **Niederschlesien** *(66)*\n*   **Sachsen** *(65)*\n*   **Brandenburg** *(64)*\n*   **Vorpommern** *(62)*\n*   **Mecklenburg** *(61)*\n*   **Schleswig** *(909)*\n*   **Holstein** *(58)*\n*   **Hannover** *(59)*\n*   **Thüringen** *(60)*\n*   **Franken** *(54)*\n*   **Niederbayern** *(53)*\n*   **Oberbayern** *(52)*\n*   **Württemberg** *(50)*\n*   **Baden** *(978)*\n*   **Moselland** *(42)*\n*   **Hessen** *(55)*\n*   **Rhineland** *(51)*\n*   **Westfalen** *(57)*\n*   **Weser-Ems** *(56)*',
    notes: '',
    game: 'hoi4',
  },
  {
    id: 'hoi4_ach_213',
    name: 'No Friends, Only Family',
    description:
      'As Austria or Hungary led by a Habsburg Monarch, Control the Swiss Plateau and have at least three other countries be led by a member of the Habsburg family.',
    icon: 'https://hoi4.paradoxwikis.com/images/7/71/No_Friends%2C_Only_Family.png',
    dlc: '',
    version: '1.15',
    difficulty: 'E',
    startingConditions:
      '[![Yes](https://hoi4.paradoxwikis.com/images/thumb/7/77/Yes.png/22px-Yes.png)](/File:Yes.png "Yes") Playing as *either*:\n\n*   *   [![Flag of Austria](https://hoi4.paradoxwikis.com/images/thumb/7/7f/Austria.png/24px-Austria.png)](/Austria "Austria") [Austria](/Austria "Austria")\n    *   [![Flag of Hungary](https://hoi4.paradoxwikis.com/images/thumb/6/6a/Hungary.png/24px-Hungary.png)](/Hungary "Hungary") [Hungary](/Hungary "Hungary")',
    completionRequirements:
      '*   [![Yes](https://hoi4.paradoxwikis.com/images/thumb/7/77/Yes.png/22px-Yes.png)](/File:Yes.png "Yes") **Otto von Habsburg** *or* **Joseph August von Habsburg** is the current country leader\n*   [![Occupation.png](https://hoi4.paradoxwikis.com/images/d/dc/Occupation.png)](/File:Occupation.png) Owns Swiss Plateau\n*   At least three of the following is true:\n\nExpand\n\n*   [![Yes](https://hoi4.paradoxwikis.com/images/thumb/7/77/Yes.png/22px-Yes.png)](/File:Yes.png "Yes") If not playing as [![Flag of Hungary](https://hoi4.paradoxwikis.com/images/thumb/6/6a/Hungary.png/24px-Hungary.png)](/Hungary "Hungary") [Hungary](/Hungary "Hungary"):\n    *   **Otto von Habsburg** is the current country leader\n    *   [![Flag of Hungary](https://hoi4.paradoxwikis.com/images/thumb/6/6a/Hungary.png/24px-Hungary.png)](/Hungary "Hungary") [Hungary](/Hungary "Hungary") has **Joseph August von Habsburg** as the country leader and has not capitulated\n*   [![Yes](https://hoi4.paradoxwikis.com/images/thumb/7/77/Yes.png/22px-Yes.png)](/File:Yes.png "Yes") If not playing as [![Flag of Austria](https://hoi4.paradoxwikis.com/images/thumb/7/7f/Austria.png/24px-Austria.png)](/Austria "Austria") [Austria](/Austria "Austria"):\n    *   **Otto von Habsburg** is the current country leader\n    *   [![Flag of Austria](https://hoi4.paradoxwikis.com/images/thumb/7/7f/Austria.png/24px-Austria.png)](/Austria "Austria") [Austria](/Austria "Austria") has **Joseph August von Habsburg** as the country leader and has not capitulated\n*   [![Yes](https://hoi4.paradoxwikis.com/images/thumb/7/77/Yes.png/22px-Yes.png)](/File:Yes.png "Yes") [![Flag of Poland](https://hoi4.paradoxwikis.com/images/thumb/9/99/Poland.png/24px-Poland.png)](/Poland "Poland") [Poland](/Poland "Poland") has **Karl Albrecht** as the country leader and has not capitulated\n*   [![Yes](https://hoi4.paradoxwikis.com/images/thumb/7/77/Yes.png/22px-Yes.png)](/File:Yes.png "Yes") [![Flag of Czechoslovakia](https://hoi4.paradoxwikis.com/images/thumb/c/c1/Czechoslovakia.png/24px-Czechoslovakia.png)](/Czechoslovakia "Czechoslovakia") [Czechoslovakia](/Czechoslovakia "Czechoslovakia") has **Albrecht Franz** as the country leader and has not capitulated\n*   [![Yes](https://hoi4.paradoxwikis.com/images/thumb/7/77/Yes.png/22px-Yes.png)](/File:Yes.png "Yes") [![Flag of Ukraine](https://hoi4.paradoxwikis.com/images/thumb/4/40/Republic_of_Ukraine.png/24px-Republic_of_Ukraine.png)](/Ukraine "Ukraine") [Ukraine](/Ukraine "Ukraine") has **Vasyl Vyshyvanyi** as the country leader and has not capitulated\n*   [![Yes](https://hoi4.paradoxwikis.com/images/thumb/7/77/Yes.png/22px-Yes.png)](/File:Yes.png "Yes") [![Flag of Spain](https://hoi4.paradoxwikis.com/images/thumb/5/58/Spain.png/24px-Spain.png)](/Spain "Spain") [Spain](/Spain "Spain") has **Karl Pius von Habsburg** as the country leader and has not capitulated\n*   [![Yes](https://hoi4.paradoxwikis.com/images/thumb/7/77/Yes.png/22px-Yes.png)](/File:Yes.png "Yes") [![Flag of Mexico](https://hoi4.paradoxwikis.com/images/thumb/0/0a/Mexico.png/24px-Mexico.png)](/Mexico "Mexico") [Mexico](/Mexico "Mexico") has **Maria de Iturbide** as the country leader and has not capitulated\n*   [![Yes](https://hoi4.paradoxwikis.com/images/thumb/7/77/Yes.png/22px-Yes.png)](/File:Yes.png "Yes") [![Flag of Grand Duchy of Tuscany](https://hoi4.paradoxwikis.com/images/thumb/c/c2/Grand_Duchy_of_Tuscany.png/24px-Grand_Duchy_of_Tuscany.png)](/Grand_Duchy_of_Tuscany "Grand Duchy of Tuscany") [Grand Duchy of Tuscany](/Grand_Duchy_of_Tuscany "Grand Duchy of Tuscany") has **Joseph Ferdinand von Habsburg** as the country leader and has not capitulated\n*   [![Yes](https://hoi4.paradoxwikis.com/images/thumb/7/77/Yes.png/22px-Yes.png)](/File:Yes.png "Yes") [![Flag of Kingdom of Lombardy-Venetia](https://hoi4.paradoxwikis.com/images/thumb/e/e6/Kingdom_of_Lombardy-Venetia.png/24px-Kingdom_of_Lombardy-Venetia.png)](/Kingdom_of_Lombardy-Venetia "Kingdom of Lombardy-Venetia") [Kingdom of Lombardy-Venetia](/Kingdom_of_Lombardy-Venetia "Kingdom of Lombardy-Venetia") has **Robert von Habsburg** as the country leader and has not capitulated\n*   [![Yes](https://hoi4.paradoxwikis.com/images/thumb/7/77/Yes.png/22px-Yes.png)](/File:Yes.png "Yes") [![Flag of Croatia](https://hoi4.paradoxwikis.com/images/thumb/b/bb/Independent_State_of_Croatia.png/24px-Independent_State_of_Croatia.png)](/Croatia "Croatia") [Croatia](/Croatia "Croatia") has **Joseph Francis** as the country leader and has not capitulated',
    notes:
      'Annex [![Flag of Hungary](https://hoi4.paradoxwikis.com/images/thumb/6/6a/Hungary.png/24px-Hungary.png)](/Hungary "Hungary") [Hungary](/Hungary "Hungary") and [![Flag of Czechoslovakia](https://hoi4.paradoxwikis.com/images/thumb/c/c1/Czechoslovakia.png/24px-Czechoslovakia.png)](/Czechoslovakia "Czechoslovakia") [Czechoslovakia](/Czechoslovakia "Czechoslovakia").\n\nCreate Austria-Hungary. Release [![Flag of Hungary](https://hoi4.paradoxwikis.com/images/thumb/6/6a/Hungary.png/24px-Hungary.png)](/Hungary "Hungary") [Hungary](/Hungary "Hungary") and [![Flag of Czechoslovakia](https://hoi4.paradoxwikis.com/images/thumb/c/c1/Czechoslovakia.png/24px-Czechoslovakia.png)](/Czechoslovakia "Czechoslovakia") [Czechoslovakia](/Czechoslovakia "Czechoslovakia").\n\nYou will have decisions to set Habsburgs on their thrones.',
    game: 'hoi4',
  },
  {
    id: 'hoi4_ach_214',
    name: 'Edelweiss Seedelweiss',
    description: 'As Austria have a coastline, at least 10 Battleships and have Georg von Trapp as an Admiral',
    icon: 'https://hoi4.paradoxwikis.com/images/1/18/Edelweiss_Seedelweiss.png',
    dlc: '',
    version: '1.15',
    difficulty: 'VE',
    startingConditions:
      '[![Yes](https://hoi4.paradoxwikis.com/images/thumb/7/77/Yes.png/22px-Yes.png)](/File:Yes.png "Yes") Playing as [![Flag of Austria](https://hoi4.paradoxwikis.com/images/thumb/7/7f/Austria.png/24px-Austria.png)](/Austria "Austria") [Austria](/Austria "Austria")',
    completionRequirements:
      '*   [![Occupation.png](https://hoi4.paradoxwikis.com/images/d/dc/Occupation.png)](/File:Occupation.png) Controls a coastal state\n*   [![Battleship.png](https://hoi4.paradoxwikis.com/images/thumb/e/e8/Battleship.png/22px-Battleship.png)](/File:Battleship.png) Has at least **10** Battleships\n*    [![Yes](https://hoi4.paradoxwikis.com/images/thumb/7/77/Yes.png/22px-Yes.png)](/File:Yes.png "Yes") Georg von Trapp has been returned to the Navy',
    notes:
      'Georg von Trapp can join Austria via event, between 15 and 20 days after completing the "Promote Admirals" focus.',
    game: 'hoi4',
  },
  {
    id: 'hoi4_ach_215',
    name: 'Otto-man',
    description:
      'As Austria or Hungary, led by Otto von Habsburg, control the starting states of Austria, Hungary, Czechoslovakia, Romania, Bulgaria, Greece and Turkey as well as the states in Polish Galicia, Slovenia and Croatia.',
    icon: 'https://hoi4.paradoxwikis.com/images/8/8b/Otto-man.png',
    dlc: '',
    version: '1.15',
    difficulty: 'M',
    startingConditions:
      '[![Yes](https://hoi4.paradoxwikis.com/images/thumb/7/77/Yes.png/22px-Yes.png)](/File:Yes.png "Yes") Playing as *either*:\n\n*   *   [![Flag of Austria](https://hoi4.paradoxwikis.com/images/thumb/7/7f/Austria.png/24px-Austria.png)](/Austria "Austria") [Austria](/Austria "Austria")\n    *   [![Flag of Hungary](https://hoi4.paradoxwikis.com/images/thumb/6/6a/Hungary.png/24px-Hungary.png)](/Hungary "Hungary") [Hungary](/Hungary "Hungary")',
    completionRequirements:
      '*   [![Yes](https://hoi4.paradoxwikis.com/images/thumb/7/77/Yes.png/22px-Yes.png)](/File:Yes.png "Yes") **Otto von Habsburg** is the current country leader\n*   [![Occupation.png](https://hoi4.paradoxwikis.com/images/d/dc/Occupation.png)](/File:Occupation.png) Controls:\n\n*   *   **From [![Flag of Austria](https://hoi4.paradoxwikis.com/images/thumb/7/7f/Austria.png/24px-Austria.png)](/Austria "Austria") [Austria](/Austria "Austria")** : Expand\n        \n        *   **Niederösterreich** *(4)*\n        *   **Oberösterreich** *(152)*\n        *   **Tirol** *(153)*\n        *   **Vorarlberg** *(848)*\n        *   **Steiermark-Kärnten** *(976)*\n        *   **Burgenland** *(975)*\n        \n\n*   *   **From [![Flag of Hungary](https://hoi4.paradoxwikis.com/images/thumb/6/6a/Hungary.png/24px-Hungary.png)](/Hungary "Hungary") [Hungary](/Hungary "Hungary")** : Expand\n        \n        *   **North Transdanubia** *(155)*\n        *   **South Transdanubia** *(974)*\n        *   **Northern Hungary** *(43)*\n        *   **Bács-Kiskun** *(973)*\n        *   **Tiszántúl** *(154)*\n        \n\n*   *   **From [![Flag of Czechoslovakia](https://hoi4.paradoxwikis.com/images/thumb/c/c1/Czechoslovakia.png/24px-Czechoslovakia.png)](/Czechoslovakia "Czechoslovakia") [Czechoslovakia](/Czechoslovakia "Czechoslovakia")** : Expand\n        \n        *   **North Sudetenland** *(69)*\n        *   **South Sudetenland** *(972)*\n        *   **Bohemia** *(9)*\n        *   **Moravia** *(75)*\n        *   **Czeské Slezsko** *(74)*\n        *   **Tešínsko** *(72)*\n        *   **Western Slovakia** *(70)*\n        *   **Southern Slovakia** *(664)*\n        *   **Eastern Slovakia** *(71)*\n        *   **Podkarpatská Rus** *(73)*\n        \n\n*   *   **From [![Flag of Slovenia](https://hoi4.paradoxwikis.com/images/thumb/3/32/Slovenia.png/24px-Slovenia.png)](/Slovenia "Slovenia") [Slovenia](/Slovenia "Slovenia")** : Expand\n        \n        *   **North Slovenia** *(102)*\n        *   **Ljubljana** *(853)*\n        \n\n*   *   **From [![Flag of Croatia](https://hoi4.paradoxwikis.com/images/thumb/b/bb/Independent_State_of_Croatia.png/24px-Independent_State_of_Croatia.png)](/Croatia "Croatia") [Croatia](/Croatia "Croatia")** : Expand\n        \n        *   **Istria** *(852)*\n        *   **Zara** *(163)*\n        *   **Dalmatia** *(103)*\n        *   **Croatia** *(109)*\n        \n\n*   *   **From [![Flag of Lombardy-Venetia](https://hoi4.paradoxwikis.com/images/thumb/e/e6/Kingdom_of_Lombardy-Venetia.png/24px-Kingdom_of_Lombardy-Venetia.png)](/Lombardy-Venetia "Lombardy-Venetia") [Lombardy-Venetia](/Lombardy-Venetia "Lombardy-Venetia")** : Expand\n        \n        *   **Veneto** *(160)*\n        *   **Litorale** *(736)*\n        *   **Alto Adige** *(39)*\n        *   **Trentino** *(850)*\n        *   **Lombardia** *(159)*\n        \n\n*   *   **From [![Flag of Romania](https://hoi4.paradoxwikis.com/images/thumb/8/8f/Romania.png/24px-Romania.png)](/Romania "Romania") [Romania](/Romania "Romania")** : Expand\n        \n        *   **Banat** *(82)*\n        *   **Crisana** *(83)*\n        *   **North Transylvania** *(76)*\n        *   **Transylvania** *(84)*\n        *   **Oltenia** *(81)*\n        *   **Muntenia** *(46)*\n        *   **Dobrudja** *(77)*\n        *   **Northern Dobruja** *(971)*\n        *   **Moldova** *(79)*\n        *   **Bucovina** *(80)*\n        *   **Bessarabia** *(78)*\n        *   **Southern Bessarabia** *(766)*\n        \n\n*   *   **From [![Flag of Poland](https://hoi4.paradoxwikis.com/images/thumb/9/99/Poland.png/24px-Poland.png)](/Poland "Poland") [Poland](/Poland "Poland")** : Expand\n        \n        *   **Kraków** *(88)*\n        *   **Stanisławów** *(89)*\n        *   **Lwów** *(91)*\n        \n\n*   *   **From [![Flag of Bulgaria](https://hoi4.paradoxwikis.com/images/thumb/f/f4/Bulgaria.png/24px-Bulgaria.png)](/Bulgaria "Bulgaria") [Bulgaria](/Bulgaria "Bulgaria")** : Expand\n        \n        *   **Sofia** *(48)*\n        *   **Plovdiv** *(212)*\n        *   **Moesia** *(801)*\n        *   **Burgas** *(211)*\n        \n\n*   *   **From [![Flag of Greece](https://hoi4.paradoxwikis.com/images/thumb/8/8e/Kingdom_of_Greece.png/24px-Kingdom_of_Greece.png)](/Greece "Greece") [Greece](/Greece "Greece")** : Expand\n        \n        *   **Thrace** *(184)*\n        *   **Central Macedonia** *(731)*\n        *   **Epirus** *(185)*\n        *   **Attica** *(47)*\n        *   **Peloponnese** *(186)*\n        *   **Aegean Islands** *(187)*\n        *   **Crete** *(182)*\n        \n\n*   *   **From [![Flag of Turkey](https://hoi4.paradoxwikis.com/images/thumb/b/b3/Turkey.png/24px-Turkey.png)](/Turkey "Turkey") [Turkey](/Turkey "Turkey")** : Expand\n        \n        *   **Edirne** *(341)*\n        *   **Istanbul** *(797)*\n        *   **Bursa** *(340)*\n        *   **Izmir** *(339)*\n        *   **Antalya** *(342)*\n        *   **Afyon** *(343)*\n        *   **Izmit** *(347)*\n        *   **Ankara** *(49)*\n        *   **Konya** *(346)*\n        *   **Mersin** *(345)*\n        *   **Malatya** *(344)*\n        *   **Kayseri** *(348)*\n        *   **Amasya** *(798)*\n        *   **Kastamonu** *(356)*\n        *   **Samsun** *(355)*\n        *   **Sivas** *(349)*\n        *   **Diyarbakır** *(350)*\n        *   **Hakkari** *(352)*\n        *   **Tunceli** *(353)*\n        *   **Trabzon** *(354)*\n        *   **Van** *(800)*',
    notes: '*For detailed strategies, see [Otto-man](/Otto-man "Otto-man")*',
    game: 'hoi4',
  },
  {
    id: 'hoi4_ach_216',
    name: 'Spaak of Genius',
    description:
      'As Belgium, with Paul-Henri Spaak as country leader, research at least 10 different Special Projects.',
    icon: 'https://hoi4.paradoxwikis.com/images/8/8f/Spaak_of_Genius.png',
    dlc: '',
    version: '1.15',
    difficulty: 'M',
    startingConditions:
      '[![Yes](https://hoi4.paradoxwikis.com/images/thumb/7/77/Yes.png/22px-Yes.png)](/File:Yes.png "Yes") Playing as [![Flag of Belgium](https://hoi4.paradoxwikis.com/images/thumb/3/32/Belgium.png/24px-Belgium.png)](/Belgium "Belgium") [Belgium](/Belgium "Belgium")',
    completionRequirements:
      '*   [![Yes](https://hoi4.paradoxwikis.com/images/thumb/7/77/Yes.png/22px-Yes.png)](/File:Yes.png "Yes") **Paul-Henri Spaak** is the current country leader\n*   [![Yes](https://hoi4.paradoxwikis.com/images/thumb/7/77/Yes.png/22px-Yes.png)](/File:Yes.png "Yes") Has completed at least **10** Special Projects',
    notes: '*For detailed strategies, see [Spaak of Genius](/Spaak_of_Genius "Spaak of Genius")*',
    game: 'hoi4',
  },
  {
    id: 'hoi4_ach_217',
    name: 'Brentry',
    description:
      'As Austria, Belgium or the Netherlands be the leader of the EU and have the United Kingdom join your faction.',
    icon: 'https://hoi4.paradoxwikis.com/images/0/0a/Brentry.png',
    dlc: '',
    version: '1.15',
    difficulty: 'M',
    startingConditions:
      '[![Yes](https://hoi4.paradoxwikis.com/images/thumb/7/77/Yes.png/22px-Yes.png)](/File:Yes.png "Yes") Playing as *either*:\n\n*   *   [![Flag of Austria](https://hoi4.paradoxwikis.com/images/thumb/7/7f/Austria.png/24px-Austria.png)](/Austria "Austria") [Austria](/Austria "Austria")\n    *   [![Flag of Belgium](https://hoi4.paradoxwikis.com/images/thumb/3/32/Belgium.png/24px-Belgium.png)](/Belgium "Belgium") [Belgium](/Belgium "Belgium")\n    *   [![Flag of Netherlands](https://hoi4.paradoxwikis.com/images/thumb/3/32/Netherlands.png/24px-Netherlands.png)](/Netherlands "Netherlands") [Netherlands](/Netherlands "Netherlands")',
    completionRequirements:
      '*   [![Relation join faction.png](https://hoi4.paradoxwikis.com/images/thumb/9/91/Relation_join_faction.png/22px-Relation_join_faction.png)](/File:Relation_join_faction.png) In faction with [![Flag of United Kingdom](https://hoi4.paradoxwikis.com/images/thumb/2/29/United_Kingdom.png/24px-United_Kingdom.png)](/United_Kingdom "United Kingdom") [United Kingdom](/United_Kingdom "United Kingdom")\n*   If playing as [![Flag of Belgium](https://hoi4.paradoxwikis.com/images/thumb/3/32/Belgium.png/24px-Belgium.png)](/Belgium "Belgium") [Belgium](/Belgium "Belgium"):\n    *   [![Yes](https://hoi4.paradoxwikis.com/images/thumb/7/77/Yes.png/22px-Yes.png)](/File:Yes.png "Yes") Has completed focus [![The Council of Europe](https://hoi4.paradoxwikis.com/images/thumb/e/ea/Focus_generic_the_council_of_europe.png/22px-Focus_generic_the_council_of_europe.png)](/Belgian_national_focus_tree#The_Council_of_Europe "The Council of Europe")[The Council of Europe](/Belgian_national_focus_tree#The_Council_of_Europe "Belgian national focus tree") *or* [![Support the European Project](https://hoi4.paradoxwikis.com/images/thumb/f/fb/Goal_generic_major_alliance.png/22px-Goal_generic_major_alliance.png)](/Belgian_national_focus_tree#Support_the_European_Project "Support the European Project")[Support the European Project](/Belgian_national_focus_tree#Support_the_European_Project "Belgian national focus tree")\n*   If playing as [![Flag of Austria](https://hoi4.paradoxwikis.com/images/thumb/7/7f/Austria.png/24px-Austria.png)](/Austria "Austria") [Austria](/Austria "Austria"):\n    *   [![Yes](https://hoi4.paradoxwikis.com/images/thumb/7/77/Yes.png/22px-Yes.png)](/File:Yes.png "Yes") Has completed focus [![Via the Danube to Europe](https://hoi4.paradoxwikis.com/images/thumb/e/ea/Focus_generic_the_council_of_europe.png/22px-Focus_generic_the_council_of_europe.png)](/Austrian_national_focus_tree#Via_the_Danube_to_Europe "Via the Danube to Europe")[Via the Danube to Europe](/Austrian_national_focus_tree#Via_the_Danube_to_Europe "Austrian national focus tree")\n*   If playing as [![Flag of Netherlands](https://hoi4.paradoxwikis.com/images/thumb/3/32/Netherlands.png/24px-Netherlands.png)](/Netherlands "Netherlands") [Netherlands](/Netherlands "Netherlands"):\n    *   [![Yes](https://hoi4.paradoxwikis.com/images/thumb/7/77/Yes.png/22px-Yes.png)](/File:Yes.png "Yes") Has completed focus [![Foundations for a European Union](https://hoi4.paradoxwikis.com/images/thumb/e/ea/Focus_generic_the_council_of_europe.png/22px-Focus_generic_the_council_of_europe.png)](/Dutch_national_focus_tree#Foundations_for_a_European_Union "Foundations for a European Union")[Foundations for a European Union](/Dutch_national_focus_tree#Foundations_for_a_European_Union "Dutch national focus tree")',
    notes: '*For detailed strategies, see [Brentry](/Brentry "Brentry")*',
    game: 'hoi4',
  },
  {
    id: 'hoi4_ach_218',
    name: 'The 501st Legion',
    description:
      'As Belgium, have the National Spirit "Rexist Legion" and be in control of all of your starting neighbors\' Capitals.',
    icon: 'https://hoi4.paradoxwikis.com/images/c/cc/The_501st_Legion.png',
    dlc: '',
    version: '1.15',
    difficulty: 'E',
    startingConditions:
      '[![Yes](https://hoi4.paradoxwikis.com/images/thumb/7/77/Yes.png/22px-Yes.png)](/File:Yes.png "Yes") Playing as [![Flag of Belgium](https://hoi4.paradoxwikis.com/images/thumb/3/32/Belgium.png/24px-Belgium.png)](/Belgium "Belgium") [Belgium](/Belgium "Belgium")',
    completionRequirements:
      '*   [![Yes](https://hoi4.paradoxwikis.com/images/thumb/7/77/Yes.png/22px-Yes.png)](/File:Yes.png "Yes") Has Modifier **Rexist Legion**\n*   [![Occupation.png](https://hoi4.paradoxwikis.com/images/d/dc/Occupation.png)](/File:Occupation.png) Controls:\n\n*   *   **Ile de France** *(16)*\n    *   **Luxembourg** *(8)*\n    *   **Holland** *(7)*\n    *   **Brandenburg** *(64)*',
    notes:
      'You can get this achievement while at war, but you must occupy every single province in the required states for the achievement to fire. The fastest way is to turn fascist using the rexist path, justify on the Dutch East Indies and annex Luxembourg and the Netherlands. Join the Axis, build up your strength and attack Germany.\n\n*For detailed strategies, see [The 501st Legion](/The_501st_Legion "The 501st Legion")*',
    game: 'hoi4',
  },
  {
    id: 'hoi4_ach_219',
    name: 'Congolese Belgium',
    description:
      'As Congo break free from the shackles of your old overlord and take control of all of their starting states',
    icon: 'https://hoi4.paradoxwikis.com/images/0/0a/Congolese_Belgium.png',
    dlc: '',
    version: '1.15',
    difficulty: 'E',
    startingConditions:
      '[![Yes](https://hoi4.paradoxwikis.com/images/thumb/7/77/Yes.png/22px-Yes.png)](/File:Yes.png "Yes") Playing as [![Flag of Belgian Congo](https://hoi4.paradoxwikis.com/images/thumb/b/b0/Belgian_Congo.png/24px-Belgian_Congo.png)](/Belgian_Congo "Belgian Congo") [Belgian Congo](/Belgian_Congo "Belgian Congo")',
    completionRequirements:
      '[![Occupation.png](https://hoi4.paradoxwikis.com/images/d/dc/Occupation.png)](/File:Occupation.png) Controls:\n\n*   *   **Ardennes** *(980)*\n    *   **Wallonie** *(34)*\n    *   **Antwerpen** *(977)*\n    *   **Vlaanderen** *(6)*',
    notes: '*For detailed strategies, see [Congolese Belgium](/Congolese_Belgium "Congolese Belgium")*',
    game: 'hoi4',
  },
  {
    id: 'hoi4_ach_220',
    name: 'The Lenin Boys are Back in Town',
    description: 'As Communist Hungary bring back the Lenin-fiúk and take control over Leningrad',
    icon: 'https://hoi4.paradoxwikis.com/images/6/62/The_Lenin_Boys_are_Back_in_Town.png',
    dlc: '',
    version: '1.15',
    difficulty: 'H',
    startingConditions:
      '[![Yes](https://hoi4.paradoxwikis.com/images/thumb/7/77/Yes.png/22px-Yes.png)](/File:Yes.png "Yes") Playing as [![Flag of Kingdom of Hungary](https://hoi4.paradoxwikis.com/images/thumb/5/53/Kingdom_of_Hungary.png/24px-Kingdom_of_Hungary.png)](/Kingdom_of_Hungary "Kingdom of Hungary") [Hungary](/Kingdom_of_Hungary "Kingdom of Hungary")',
    completionRequirements:
      '*   [![Yes](https://hoi4.paradoxwikis.com/images/thumb/7/77/Yes.png/22px-Yes.png)](/File:Yes.png "Yes")Has completed focus [![Reinstate the Lenin Boys](https://hoi4.paradoxwikis.com/images/thumb/c/ce/Focus_HUN_reinstate_the_lenin_boys.png/22px-Focus_HUN_reinstate_the_lenin_boys.png)](/Hungarian_national_focus_tree#Reinstate_the_Lenin_Boys "Reinstate the Lenin Boys")[Reinstate the Lenin Boys](/Hungarian_national_focus_tree#Reinstate_the_Lenin_Boys "Hungarian national focus tree")\n*   [![Yes](https://hoi4.paradoxwikis.com/images/thumb/7/77/Yes.png/22px-Yes.png)](/File:Yes.png "Yes") Ruling party is [![{{{1}}}](https://hoi4.paradoxwikis.com/images/thumb/e/e9/Communism.png/22px-Communism.png)](/Ideology#Communism "{{{1}}}")[Communist](/Ideology#Communism "Ideology")\n*   [![Occupation.png](https://hoi4.paradoxwikis.com/images/d/dc/Occupation.png)](/File:Occupation.png) Fully controls **Leningrad** *(195)*',
    notes:
      '*For detailed strategies, see [The Lenin Boys are Back in Town](/The_Lenin_Boys_are_Back_in_Town "The Lenin Boys are Back in Town")*',
    game: 'hoi4',
  },
  {
    id: 'hoi4_ach_221',
    name: 'A Great Hunger',
    description: 'As Hungary proclaim Greater Hungary and control all of your historical state',
    icon: 'https://hoi4.paradoxwikis.com/images/2/2c/A_Great_Hunger.png',
    dlc: '',
    version: '1.15',
    difficulty: 'M',
    startingConditions:
      '[![Yes](https://hoi4.paradoxwikis.com/images/thumb/7/77/Yes.png/22px-Yes.png)](/File:Yes.png "Yes") Playing as [![Flag of Kingdom of Hungary](https://hoi4.paradoxwikis.com/images/thumb/5/53/Kingdom_of_Hungary.png/24px-Kingdom_of_Hungary.png)](/Kingdom_of_Hungary "Kingdom of Hungary") [Hungary](/Kingdom_of_Hungary "Kingdom of Hungary")',
    completionRequirements:
      '*   [![Yes](https://hoi4.paradoxwikis.com/images/thumb/7/77/Yes.png/22px-Yes.png)](/File:Yes.png "Yes") Has completed focus [![Proclaim Greater Hungary](https://hoi4.paradoxwikis.com/images/thumb/d/de/Focus_HUN_proclaim_greater_hungary.png/22px-Focus_HUN_proclaim_greater_hungary.png)](/Hungarian_national_focus_tree#Proclaim_Greater_Hungary "Proclaim Greater Hungary")[Proclaim Greater Hungary](/Hungarian_national_focus_tree#Proclaim_Greater_Hungary "Hungarian national focus tree")\n*   [![Occupation.png](https://hoi4.paradoxwikis.com/images/d/dc/Occupation.png)](/File:Occupation.png) Controls:\n\n*   *   **Southern Slovakia** *(664)*\n    *   **Podkarpatská Rus** *(73)*\n    *   **North Transylvania** *(76)*\n    *   **Transylvania** *(84)*\n    *   **Crisana** *(83)*\n    *   **Banat** *(82)*\n    *   **Backa** *(45)*\n    *   **Burgenland** *(975)*',
    notes:
      'This achievement requires the [![Götterdämmerung](https://hoi4.paradoxwikis.com/images/thumb/5/5f/DLC_G%C3%B6tterd%C3%A4mmerung.png/22px-DLC_G%C3%B6tterd%C3%A4mmerung.png)](/G%C3%B6tterd%C3%A4mmerung "Götterdämmerung")[Götterdämmerung](/G%C3%B6tterd%C3%A4mmerung "Götterdämmerung") version of the Proclaim Greater Hungary focus and will not trigger without that DLC.\n\n*For detailed strategies, see [A Great Hunger](/A_Great_Hunger "A Great Hunger")*',
    game: 'hoi4',
  },
  {
    id: 'hoi4_ach_222',
    name: 'Weltpolitik',
    description: 'As Germany take control of all of your former colonies',
    icon: 'https://hoi4.paradoxwikis.com/images/e/e0/Weltpolitik.png',
    dlc: '',
    version: '1.15',
    difficulty: 'M',
    startingConditions:
      '[![Yes](https://hoi4.paradoxwikis.com/images/thumb/7/77/Yes.png/22px-Yes.png)](/File:Yes.png "Yes") Playing as [![Flag of Germany](https://hoi4.paradoxwikis.com/images/thumb/e/e9/German_Reich.png/24px-German_Reich.png)](/Germany "Germany") [Germany](/Germany "Germany")',
    completionRequirements:
      '[![Occupation.png](https://hoi4.paradoxwikis.com/images/d/dc/Occupation.png)](/File:Occupation.png) Controls all of the [![Flag of Germany](https://hoi4.paradoxwikis.com/images/thumb/e/e9/German_Reich.png/24px-German_Reich.png)](/Germany "Germany") [Germany](/Germany "Germany")\'s old colonies:\n\nExpand\n\n*   **Cameroon** *(773)*\n*   **Togo** *(777)*\n*   **Tanganyika** *(546)*\n*   **Rwanda** *(768)*\n*   **Burundi** *(769)*\n*   **Otjozondjupa** *(895)*\n*   **Kunene** *(894)*\n*   **Khomas** *(541)*\n*   **Karas** *(893)*\n*   **Qingdao** *(743)*\n*   **Palau** *(647)*\n*   **Kaiser-Wilhelmsland** *(979)*\n*   **Bismarck** *(737)*\n*   **Caroline Islands** *(684)*\n*   **Marshall Islands** *(633)*\n*   **Solomon Islands** *(634)*\n*   **Saipan** *(646)*\n*   **Samoa** *(726)*\n*   **Nauru** *(725)*',
    notes: '',
    game: 'hoi4',
  },
  {
    id: 'hoi4_ach_223',
    name: 'Naval Arms Race',
    description: 'As Germany led by an Admiral capitulate the United Kingdom',
    icon: 'https://hoi4.paradoxwikis.com/images/1/11/Naval_Arms_Race.png',
    dlc: '',
    version: '1.15',
    difficulty: 'E',
    startingConditions:
      '[![Yes](https://hoi4.paradoxwikis.com/images/thumb/7/77/Yes.png/22px-Yes.png)](/File:Yes.png "Yes") Playing as [![Flag of Germany](https://hoi4.paradoxwikis.com/images/thumb/e/e9/German_Reich.png/24px-German_Reich.png)](/Germany "Germany") [Germany](/Germany "Germany")',
    completionRequirements:
      '[![Yes](https://hoi4.paradoxwikis.com/images/thumb/7/77/Yes.png/22px-Yes.png)](/File:Yes.png "Yes") Capitulated the [![Flag of United Kingdom](https://hoi4.paradoxwikis.com/images/thumb/2/29/United_Kingdom.png/24px-United_Kingdom.png)](/United_Kingdom "United Kingdom") [United Kingdom](/United_Kingdom "United Kingdom") led by the Navy',
    notes:
      'Follow the "Oppose Hitler" branch of the focus tree. An event will pop up as the focus is in progress. Select the "ensure loyalty of the Kreigsmarine". Fail the timed event in the decisions tab that asks for the progression towards certain naval focuses. Once the timed event has failed another event will pop, choose the decision that puts Erich Raeder in power. Justify or obtain war goal on the United Kingdom and have them capitulate to you  \n**Note:** Achievement requires the United Kingdom to capitulate, but does not check whether Germany triggered the capitulation. Will be granted even by the end of a civil war in the United Kingdom.',
    game: 'hoi4',
  },
  {
    id: 'hoi4_ach_224',
    name: 'Woman in a High Castle',
    description:
      'As Germany with a female leader either annex the USA, including Alaska and Hawaii or have an American puppet that owns all the American starting states, including Alaska and Hawaii.',
    icon: 'https://hoi4.paradoxwikis.com/images/5/5a/Woman_in_a_High_Castle.png',
    dlc: '',
    version: '1.15',
    difficulty: 'H',
    startingConditions:
      '[![Yes](https://hoi4.paradoxwikis.com/images/thumb/7/77/Yes.png/22px-Yes.png)](/File:Yes.png "Yes") Playing as [![Flag of Germany](https://hoi4.paradoxwikis.com/images/thumb/e/e9/German_Reich.png/24px-German_Reich.png)](/Germany "Germany") [Germany](/Germany "Germany")',
    completionRequirements:
      '*   [![Occupation.png](https://hoi4.paradoxwikis.com/images/d/dc/Occupation.png)](/File:Occupation.png) You or the [![Flag of United States](https://hoi4.paradoxwikis.com/images/thumb/3/32/United_States.png/24px-United_States.png)](/United_States "United States") [United States](/United_States "United States") (as your puppet) owns:\n\nExpand\n\n*   *   **New England** *(357)*\n    *   **New York** *(358)*\n    *   **New Jersey** *(359)*\n    *   **Pennsylvania** *(360)*\n    *   **Maryland** *(361)*\n    *   **Virginia** *(362)*\n    *   **North Carolina** *(363)*\n    *   **South Carolina** *(364)*\n    *   **Georgia** *(365)*\n    *   **Florida** *(366)*\n    *   **Alabama** *(367)*\n    *   **Tennessee** *(368)*\n    *   **Kentucky** *(369)*\n    *   **Ohio** *(261)*\n    *   **Michigan** *(393)*\n    *   **Indiana** *(396)*\n    *   **Illinois** *(395)*\n    *   **Missouri** *(373)*\n    *   **Arkansas** *(372)*\n    *   **Louisiana** *(371)*\n    *   **Mississippi** *(370)*\n    *   **Texas** *(375)*\n    *   **Oklahoma** *(374)*\n    *   **Kansas** *(383)*\n    *   **Iowa** *(392)*\n    *   **Wisconsin** *(394)*\n    *   **Minnesota** *(391)*\n    *   **North Dakota** *(389)*\n    *   **South Dakota** *(390)*\n    *   **Nebraska** *(384)*\n    *   **Colorado** *(382)*\n    *   **Wyoming** *(381)*\n    *   **Montana** *(388)*\n    *   **New Mexico** *(376)*\n    *   **Arizona** *(377)*\n    *   **Utah** *(380)*\n    *   **Idaho** *(387)*\n    *   **Washington** *(386)*\n    *   **Oregon** *(385)*\n    *   **Nevada** *(379)*\n    *   **California** *(378)*\n    *   **Alaska** *(463)*\n\n*   [![Yes](https://hoi4.paradoxwikis.com/images/thumb/7/77/Yes.png/22px-Yes.png)](/File:Yes.png "Yes") **Victoria** or **Eva Braun** is the current country leader',
    notes:
      'German female leaders include **Victoria** and **Eva Braun**.\n\n*For detailed strategies, see [Woman in a High Castle](/Woman_in_a_High_Castle "Woman in a High Castle")*',
    game: 'hoi4',
  },
  {
    id: 'hoi4_ach_225',
    name: 'American Prometheus',
    description: 'As the USA have Robert Oppenheimer complete the Manhattan Project.',
    icon: 'https://hoi4.paradoxwikis.com/images/3/3c/American_Prometheus.png',
    dlc: '',
    version: '1.15',
    difficulty: 'VE',
    startingConditions:
      '[![Yes](https://hoi4.paradoxwikis.com/images/thumb/7/77/Yes.png/22px-Yes.png)](/File:Yes.png "Yes") Playing as [![Flag of United States](https://hoi4.paradoxwikis.com/images/thumb/3/32/United_States.png/24px-United_States.png)](/United_States "United States") [United States](/United_States "United States")',
    completionRequirements:
      '[![Yes](https://hoi4.paradoxwikis.com/images/thumb/7/77/Yes.png/22px-Yes.png)](/File:Yes.png "Yes") Robert Oppenheimer has completed the special project **Nuclear Bombs**',
    notes:
      'Build Nuclear Research Facilities and hire scientists to man them. Rush down to Manhattan project, you get there the fastest by choosing *Neutrality Act*. Research Atomic Research as well as all computing research ahead of time. You can also go for radar research to increase physics breakthroughs.\n\nAssign whatever Scientists to *Pile-1 Nuclear Reactor*, but you MUST choose Oppenheimer for *The Manhattan Project*. Make sure to check out iterations and decisions during the research. If an event comes up asking you to decide whether to keep or dismiss Oppenheimer from the project, keep him. Once the project completes, the achievement pops.',
    game: 'hoi4',
  },
  {
    id: 'hoi4_ach_226',
    name: 'Tsar Bomba',
    description: 'As Tsarist Russia complete the Special Project for Thermonuclear bombs.',
    icon: 'https://hoi4.paradoxwikis.com/images/6/6e/Tsar_Bomba.png',
    dlc: '',
    version: '1.15',
    difficulty: 'M',
    startingConditions:
      '[![Yes](https://hoi4.paradoxwikis.com/images/thumb/7/77/Yes.png/22px-Yes.png)](/File:Yes.png "Yes") Playing as [![Flag of Soviet Union](https://hoi4.paradoxwikis.com/images/thumb/6/67/Soviet_Union.png/24px-Soviet_Union.png)](/Soviet_Union "Soviet Union") [Soviet Union](/Soviet_Union "Soviet Union")',
    completionRequirements:
      '*   [![Yes](https://hoi4.paradoxwikis.com/images/thumb/7/77/Yes.png/22px-Yes.png)](/File:Yes.png "Yes") Has completed focus [![Romanov Reconstruction](https://hoi4.paradoxwikis.com/images/thumb/c/ce/Focus_generic_monarchy_2.png/36px-Focus_generic_monarchy_2.png)](/Soviet_national_focus_tree:_political_branches#Romanov_Reconstruction "Romanov Reconstruction")[Romanov Reconstruction](/Soviet_national_focus_tree:_political_branches#Romanov_Reconstruction "Soviet national focus tree: political branches")\n*   [![Research icon.png](https://hoi4.paradoxwikis.com/images/thumb/4/4b/Research_icon.png/22px-Research_icon.png)](/File:Research_icon.png) Has researched **Thermonuclear Bombs**',
    notes:
      'Win the Civil War. Germany might not attack you depending on if historical is on or not. Either way, build Nuclear Research Facilities, hire scientists with good traits to get breakthroughs and increased research speed.',
    game: 'hoi4',
  },
  {
    id: 'hoi4_ach_227',
    name: 'Super Heavy Metal',
    description:
      'Complete the Special Projects for Intercontinental Bombers, Land Cruisers, and Super Heavy Battleships.',
    icon: 'https://hoi4.paradoxwikis.com/images/9/9e/Super_Heavy_Metal.png',
    dlc: '',
    version: '1.15',
    difficulty: 'VE',
    startingConditions: '',
    completionRequirements:
      '[![Yes](https://hoi4.paradoxwikis.com/images/thumb/7/77/Yes.png/22px-Yes.png)](/File:Yes.png "Yes") Completed the following special projects:\n\n*   *   **Land Cruiser**\n    *   **Intercontinental Bomber**\n    *   **Super Heavy Battleships**',
    notes:
      'Easiest as the [![Flag of United States](https://hoi4.paradoxwikis.com/images/thumb/3/32/United_States.png/24px-United_States.png)](/United_States "United States") [United States](/United_States "United States").  \n**Note:** 2 special projects require certain research to be completed - Intercontinental Bomber requires Improved Large Airframe, and Land Cruiser requires Super-Heavy Tank Chassis.',
    game: 'hoi4',
  },
  {
    id: 'hoi4_ach_228',
    name: 'Backfire',
    description:
      'As the United Kingdom complete the Special Project for Medium Range Ballistic Missiles, have a rocket site, and be at war with Germany',
    icon: 'https://hoi4.paradoxwikis.com/images/1/1e/Backfire.png',
    dlc: '',
    version: '1.15',
    difficulty: 'E',
    startingConditions:
      '[![Yes](https://hoi4.paradoxwikis.com/images/thumb/7/77/Yes.png/22px-Yes.png)](/File:Yes.png "Yes") Playing as [![Flag of United Kingdom](https://hoi4.paradoxwikis.com/images/thumb/2/29/United_Kingdom.png/24px-United_Kingdom.png)](/United_Kingdom "United Kingdom") [United Kingdom](/United_Kingdom "United Kingdom")',
    completionRequirements:
      '*   [![Yes](https://hoi4.paradoxwikis.com/images/thumb/7/77/Yes.png/22px-Yes.png)](/File:Yes.png "Yes") Completed the special Project for **Medium Range Ballistic Missiles**\n*   [![Ballistic missile equipment 2.png](https://hoi4.paradoxwikis.com/images/thumb/6/66/Ballistic_missile_equipment_2.png/22px-Ballistic_missile_equipment_2.png)](/File:Ballistic_missile_equipment_2.png) Has at least 1 Medium Range Ballistic Missile in stockpile\n*   [![War goal](https://hoi4.paradoxwikis.com/images/thumb/c/c2/Relation_wargoal.png/22px-Relation_wargoal.png)](/War_goal "War goal") Is at war with [![Flag of Germany](https://hoi4.paradoxwikis.com/images/thumb/e/e9/German_Reich.png/24px-German_Reich.png)](/Germany "Germany") [Germany](/Germany "Germany")\n*   [![Rocket site](https://hoi4.paradoxwikis.com/images/thumb/7/7c/Rocket_site.png/22px-Rocket_site.png)](/Construction "Rocket site") Owns at least **1 Rocket Site**',
    notes:
      'Can be done in conjunction with *Bullseye*. Build Aviation Research Facilities and man them with scientists. Research the Ballistic Missile, then the MRBM. Make sure you build a rocket site. You should be at war with Germany if you went historical, so the achievement unlocks.',
    game: 'hoi4',
  },
  {
    id: 'hoi4_ach_229',
    name: 'Dam It!',
    description: 'Successfully execute a Dam Busting Raid',
    icon: 'https://hoi4.paradoxwikis.com/images/3/31/Dam_It%21.png',
    dlc: '',
    version: '1.15',
    difficulty: 'VE',
    startingConditions: '',
    completionRequirements:
      '[![Yes](https://hoi4.paradoxwikis.com/images/thumb/7/77/Yes.png/22px-Yes.png)](/File:Yes.png "Yes") Successfully executed a **Dam Busting Raid**',
    notes:
      'Can be done as [![Flag of Germany](https://hoi4.paradoxwikis.com/images/thumb/e/e9/German_Reich.png/24px-German_Reich.png)](/Germany "Germany") [Germany](/Germany "Germany") by executing a raid on the dam from [![Flag of Belgium](https://hoi4.paradoxwikis.com/images/thumb/3/32/Belgium.png/24px-Belgium.png)](/Belgium "Belgium") [Belgium](/Belgium "Belgium")',
    game: 'hoi4',
  },
  {
    id: 'hoi4_ach_230',
    name: 'Bullseye',
    description: 'Successfully launch a raid on a Landmark',
    icon: 'https://hoi4.paradoxwikis.com/images/7/72/Bullseye.png',
    dlc: '',
    version: '1.15',
    difficulty: 'VE',
    startingConditions: '',
    completionRequirements:
      '[![Yes](https://hoi4.paradoxwikis.com/images/thumb/7/77/Yes.png/22px-Yes.png)](/File:Yes.png "Yes") Successfully executed a **Raid** on a **Landmark**',
    notes: '*For detailed strategies, see [Bullseye](/Bullseye "Bullseye")*',
    game: 'hoi4',
  },
  {
    id: 'hoi4_ach_231',
    name: 'The True Successor',
    description: 'As Luxembourg led by Charles Marx control both Brussels and Trier.',
    icon: 'https://hoi4.paradoxwikis.com/images/e/e0/The_True_Successor.png',
    dlc: '',
    version: '1.15',
    difficulty: 'VH',
    startingConditions:
      '[![Yes](https://hoi4.paradoxwikis.com/images/thumb/7/77/Yes.png/22px-Yes.png)](/File:Yes.png "Yes") Playing as [![Flag of Luxembourg](https://hoi4.paradoxwikis.com/images/thumb/3/3f/Luxembourg.png/24px-Luxembourg.png)](/Luxembourg "Luxembourg") [Luxembourg](/Luxembourg "Luxembourg")',
    completionRequirements:
      '*   [![Yes](https://hoi4.paradoxwikis.com/images/thumb/7/77/Yes.png/22px-Yes.png)](/File:Yes.png "Yes") **Charles Marx** is the current country leader\n*   [![Occupation.png](https://hoi4.paradoxwikis.com/images/d/dc/Occupation.png)](/File:Occupation.png) Controls **Brussels** *(516)* and **Trier** *(9575)*',
    notes: '*For detailed strategies, see [The True Successor](/The_True_Successor "The True Successor")*',
    game: 'hoi4',
  },
  {
    id: 'hoi4_ach_232',
    name: 'Graveyard of Empires',
    description: "As Afghanistan, Iran, Iraq or the Raj, control all of the other three nations' starting provinces",
    icon: 'https://hoi4.paradoxwikis.com/images/d/d4/Graveyard_of_Empires.png',
    dlc: '',
    version: '1.16',
    difficulty: 'H',
    startingConditions:
      '[![Yes](https://hoi4.paradoxwikis.com/images/thumb/7/77/Yes.png/22px-Yes.png)](/File:Yes.png "Yes") Playing as *either*:\n\n*   *   [![Flag of Kingdom of Afghanistan](https://hoi4.paradoxwikis.com/images/thumb/0/00/Kingdom_of_Afghanistan.png/24px-Kingdom_of_Afghanistan.png)](/Kingdom_of_Afghanistan "Kingdom of Afghanistan") [Kingdom of Afghanistan](/Kingdom_of_Afghanistan "Kingdom of Afghanistan")\n    *   [![Flag of Iraq](https://hoi4.paradoxwikis.com/images/thumb/c/c4/Iraq.png/24px-Iraq.png)](/Iraq "Iraq") [Iraq](/Iraq "Iraq")\n    *   [![Flag of Iran](https://hoi4.paradoxwikis.com/images/thumb/d/d1/Iran.png/24px-Iran.png)](/Iran "Iran") [Iran](/Iran "Iran")\n    *   [![Flag of British Raj](https://hoi4.paradoxwikis.com/images/thumb/2/2f/British_Raj.png/24px-British_Raj.png)](/British_Raj "British Raj") [British Raj](/British_Raj "British Raj")',
    completionRequirements:
      'If playing as [![Flag of Afghanistan](https://hoi4.paradoxwikis.com/images/thumb/0/00/Kingdom_of_Afghanistan.png/24px-Kingdom_of_Afghanistan.png)](/Afghanistan "Afghanistan") [Afghanistan](/Afghanistan "Afghanistan"):\n\n*   *   [![Yes](https://hoi4.paradoxwikis.com/images/thumb/7/77/Yes.png/22px-Yes.png)](/File:Yes.png "Yes") Has capitulated  [![Flag of Iraq](https://hoi4.paradoxwikis.com/images/thumb/c/c4/Iraq.png/24px-Iraq.png)](/Iraq "Iraq") [Iraq](/Iraq "Iraq") ,  [![Flag of Iran](https://hoi4.paradoxwikis.com/images/thumb/d/d1/Iran.png/24px-Iran.png)](/Iran "Iran") [Iran](/Iran "Iran") and the [![Flag of British Raj](https://hoi4.paradoxwikis.com/images/thumb/2/2f/British_Raj.png/24px-British_Raj.png)](/British_Raj "British Raj") [British Raj](/British_Raj "British Raj") and fully controls their cores\n\nIf playing as [![Flag of Iraq](https://hoi4.paradoxwikis.com/images/thumb/c/c4/Iraq.png/24px-Iraq.png)](/Iraq "Iraq") [Iraq](/Iraq "Iraq"):\n\n*   *   [![Yes](https://hoi4.paradoxwikis.com/images/thumb/7/77/Yes.png/22px-Yes.png)](/File:Yes.png "Yes") Has capitulated  [![Flag of Afghanistan](https://hoi4.paradoxwikis.com/images/thumb/0/00/Kingdom_of_Afghanistan.png/24px-Kingdom_of_Afghanistan.png)](/Afghanistan "Afghanistan") [Afghanistan](/Afghanistan "Afghanistan") ,  [![Flag of Iran](https://hoi4.paradoxwikis.com/images/thumb/d/d1/Iran.png/24px-Iran.png)](/Iran "Iran") [Iran](/Iran "Iran") and the [![Flag of British Raj](https://hoi4.paradoxwikis.com/images/thumb/2/2f/British_Raj.png/24px-British_Raj.png)](/British_Raj "British Raj") [British Raj](/British_Raj "British Raj") and fully controls their cores\n\nIf playing as [![Flag of Iran](https://hoi4.paradoxwikis.com/images/thumb/d/d1/Iran.png/24px-Iran.png)](/Iran "Iran") [Iran](/Iran "Iran"):\n\n*   *   [![Yes](https://hoi4.paradoxwikis.com/images/thumb/7/77/Yes.png/22px-Yes.png)](/File:Yes.png "Yes") Has capitulated  [![Flag of Afghanistan](https://hoi4.paradoxwikis.com/images/thumb/0/00/Kingdom_of_Afghanistan.png/24px-Kingdom_of_Afghanistan.png)](/Afghanistan "Afghanistan") [Afghanistan](/Afghanistan "Afghanistan") ,  [![Flag of Iraq](https://hoi4.paradoxwikis.com/images/thumb/c/c4/Iraq.png/24px-Iraq.png)](/Iraq "Iraq") [Iraq](/Iraq "Iraq") and the [![Flag of British Raj](https://hoi4.paradoxwikis.com/images/thumb/2/2f/British_Raj.png/24px-British_Raj.png)](/British_Raj "British Raj") [British Raj](/British_Raj "British Raj") and fully controls their cores\n\nIf playing as the [![Flag of British Raj](https://hoi4.paradoxwikis.com/images/thumb/2/2f/British_Raj.png/24px-British_Raj.png)](/British_Raj "British Raj") [British Raj](/British_Raj "British Raj"):\n\n*   *   [![Yes](https://hoi4.paradoxwikis.com/images/thumb/7/77/Yes.png/22px-Yes.png)](/File:Yes.png "Yes") Has capitulated  [![Flag of Afghanistan](https://hoi4.paradoxwikis.com/images/thumb/0/00/Kingdom_of_Afghanistan.png/24px-Kingdom_of_Afghanistan.png)](/Afghanistan "Afghanistan") [Afghanistan](/Afghanistan "Afghanistan") ,  [![Flag of Iraq](https://hoi4.paradoxwikis.com/images/thumb/c/c4/Iraq.png/24px-Iraq.png)](/Iraq "Iraq") [Iraq](/Iraq "Iraq") and  [![Flag of Iran](https://hoi4.paradoxwikis.com/images/thumb/d/d1/Iran.png/24px-Iran.png)](/Iran "Iran") [Iran](/Iran "Iran") and fully controls their cores',
    notes:
      "Play as British Raj. Take the focuses for Mughal rebellion. If done right, it's possible to seize the entirety of the Raj during the civil war. Use focuses to attack and annex Afghanistan, Sinkiang, Iran, and Iraq, in this order. The biggest difficulty is that you only have until late 1940 to get Iraq: any later, and it gets puppeted by the UK. (You can still get the achievement by capitulating British Iraq, but then you'll be stuck in a war against the Allies.) Difficulty: Medium as British Raj, hard to very hard as other three possible countries.",
    game: 'hoi4',
  },
  {
    id: 'hoi4_ach_233',
    name: 'This achievement is dedicated to the brave soldiers of...',
    description: 'As Afghanistan, capitulate the Soviet Union',
    icon: 'https://hoi4.paradoxwikis.com/images/1/13/This_achievement_is_dedicated_to_the_brave_soldiers_of....png',
    dlc: '',
    version: '1.16',
    difficulty: 'H',
    startingConditions:
      '[![Yes](https://hoi4.paradoxwikis.com/images/thumb/7/77/Yes.png/22px-Yes.png)](/File:Yes.png "Yes") Playing as [![Flag of Kingdom of Afghanistan](https://hoi4.paradoxwikis.com/images/thumb/0/00/Kingdom_of_Afghanistan.png/24px-Kingdom_of_Afghanistan.png)](/Kingdom_of_Afghanistan "Kingdom of Afghanistan") [Kingdom of Afghanistan](/Kingdom_of_Afghanistan "Kingdom of Afghanistan")',
    completionRequirements:
      '[![Yes](https://hoi4.paradoxwikis.com/images/thumb/7/77/Yes.png/22px-Yes.png)](/File:Yes.png "Yes") As [![Flag of Afghanistan](https://hoi4.paradoxwikis.com/images/thumb/0/00/Kingdom_of_Afghanistan.png/24px-Kingdom_of_Afghanistan.png)](/Afghanistan "Afghanistan") [Afghanistan](/Afghanistan "Afghanistan"), capitulate the [![Flag of Soviet Union](https://hoi4.paradoxwikis.com/images/thumb/6/67/Soviet_Union.png/24px-Soviet_Union.png)](/Soviet_Union "Soviet Union") [Soviet Union](/Soviet_Union "Soviet Union")',
    notes:
      '**Note:** To be counted as the country that capitulated the [![Flag of Soviet Union](https://hoi4.paradoxwikis.com/images/thumb/6/67/Soviet_Union.png/24px-Soviet_Union.png)](/Soviet_Union "Soviet Union") [Soviet Union](/Soviet_Union "Soviet Union"), it is necessary to achieve the highest war score from all participants. Because getting the necessary participation score can be extremely difficult if fighting alongside the [![Flag of Germany](https://hoi4.paradoxwikis.com/images/thumb/e/e9/German_Reich.png/24px-German_Reich.png)](/Germany "Germany") [Germany](/Germany "Germany"), an easier alternative is to annex a single state from the Soviets in the peace deal, release them as an independent country and then immediately justify a war against them. Capitulating the Soviets again this way should net the achievement.\n\n*For detailed strategies, see [This achievement is dedicated to the brave soldiers of...](/This_achievement_is_dedicated_to_the_brave_soldiers_of... "This achievement is dedicated to the brave soldiers of...")*',
    game: 'hoi4',
  },
  {
    id: 'hoi4_ach_234',
    name: 'I have the high ground',
    description: 'As Afghanistan, control all Himalayan states',
    icon: 'https://hoi4.paradoxwikis.com/images/b/bd/I_have_the_high_ground.png',
    dlc: '',
    version: '1.16',
    difficulty: 'M',
    startingConditions:
      '[![Yes](https://hoi4.paradoxwikis.com/images/thumb/7/77/Yes.png/22px-Yes.png)](/File:Yes.png "Yes") Playing as [![Flag of Kingdom of Afghanistan](https://hoi4.paradoxwikis.com/images/thumb/0/00/Kingdom_of_Afghanistan.png/24px-Kingdom_of_Afghanistan.png)](/Kingdom_of_Afghanistan "Kingdom of Afghanistan") [Kingdom of Afghanistan](/Kingdom_of_Afghanistan "Kingdom of Afghanistan")',
    completionRequirements:
      '[![Occupation.png](https://hoi4.paradoxwikis.com/images/d/dc/Occupation.png)](/File:Occupation.png) Controls:\n\nExpand\n\n*   **Northern Kashmir** *(787)*\n*   **Kashmir** *(441)*\n*   **East Punjab** *(986)*\n*   **United Provinces** *(438)*\n*   **Nepal** *(323)*\n*   **Sikkim** *(985)*\n*   **West Bengal** *(431)*\n*   **Bhutan** *(324)*\n*   **Assam** *(432)*\n*   **Arunachal Pradesh** *(434)*\n*   **Manipur** *(990)*',
    notes:
      '*For detailed strategies, see [This achievement is dedicated to the brave soldiers of...](/This_achievement_is_dedicated_to_the_brave_soldiers_of... "This achievement is dedicated to the brave soldiers of...")*\n\n(option 2)',
    game: 'hoi4',
  },
  {
    id: 'hoi4_ach_235',
    name: 'Savior of the holy lands',
    description: 'As Afghanistan, become the owner of Palestine and Mecca',
    icon: 'https://hoi4.paradoxwikis.com/images/5/53/Savior_of_the_holy_lands.png',
    dlc: '',
    version: '1.16',
    difficulty: 'M',
    startingConditions:
      '[![Yes](https://hoi4.paradoxwikis.com/images/thumb/7/77/Yes.png/22px-Yes.png)](/File:Yes.png "Yes") Playing as [![Flag of Kingdom of Afghanistan](https://hoi4.paradoxwikis.com/images/thumb/0/00/Kingdom_of_Afghanistan.png/24px-Kingdom_of_Afghanistan.png)](/Kingdom_of_Afghanistan "Kingdom of Afghanistan") [Kingdom of Afghanistan](/Kingdom_of_Afghanistan "Kingdom of Afghanistan")',
    completionRequirements:
      '[![Occupation.png](https://hoi4.paradoxwikis.com/images/d/dc/Occupation.png)](/File:Occupation.png) Owns **Palestine** *(454)* and **Asir-Makkah** *(856)*',
    notes:
      '*For detailed strategies, see [This achievement is dedicated to the brave soldiers of...](/This_achievement_is_dedicated_to_the_brave_soldiers_of... "This achievement is dedicated to the brave soldiers of...")*\n\n(option 2)',
    game: 'hoi4',
  },
  {
    id: 'hoi4_ach_236',
    name: 'Cradle of Civilization',
    description: 'As Iraq, build the maximum infrastructure level in all core states and achieve 100% stability',
    icon: 'https://hoi4.paradoxwikis.com/images/2/23/Cradle_of_Civilization.png',
    dlc: '',
    version: '1.16',
    difficulty: 'VE',
    startingConditions:
      '[![Yes](https://hoi4.paradoxwikis.com/images/thumb/7/77/Yes.png/22px-Yes.png)](/File:Yes.png "Yes") Playing as [![Flag of Iraq](https://hoi4.paradoxwikis.com/images/thumb/c/c4/Iraq.png/24px-Iraq.png)](/Iraq "Iraq") [Iraq](/Iraq "Iraq")',
    completionRequirements:
      '*   [![Stability](https://hoi4.paradoxwikis.com/images/thumb/a/ae/Stability.png/22px-Stability.png)](/Stability "Stability") More than **99.9%** Stability\n*   [![Infrastructure](https://hoi4.paradoxwikis.com/images/thumb/f/f6/Infrastructure.png/22px-Infrastructure.png)](/Construction "Infrastructure") All passable cores have at least **5** infrastructure',
    notes:
      'Can be done without [![Graveyard of Empires](https://hoi4.paradoxwikis.com/images/thumb/a/a1/DLC_Graveyard_of_Empires.png/22px-DLC_Graveyard_of_Empires.png)](/Graveyard_of_Empires "Graveyard of Empires")[Graveyard of Empires](/Graveyard_of_Empires "Graveyard of Empires") . Simply take the decisions to improve worker conditions and do anti-fascist raids for more stability. Build max infrastructure in all your states. Take Construction Effort and Infrastructure Effort focuses to speed things up.',
    game: 'hoi4',
  },
  {
    id: 'hoi4_ach_237',
    name: 'Oil Sheiks',
    description: 'As Iraq, have 500 oil production',
    icon: 'https://hoi4.paradoxwikis.com/images/b/b9/Oil_Sheiks.png',
    dlc: '',
    version: '1.16',
    difficulty: 'E',
    startingConditions:
      '[![Yes](https://hoi4.paradoxwikis.com/images/thumb/7/77/Yes.png/22px-Yes.png)](/File:Yes.png "Yes") Playing as [![Flag of Iraq](https://hoi4.paradoxwikis.com/images/thumb/c/c4/Iraq.png/24px-Iraq.png)](/Iraq "Iraq") [Iraq](/Iraq "Iraq")',
    completionRequirements:
      '[![Oil](https://hoi4.paradoxwikis.com/images/thumb/0/06/Oil.png/22px-Oil.png)](/Production#Resources "Oil") At least **500** oil',
    notes: '*For detailed strategies, see [Oil Sheiks](/Oil_Sheiks "Oil Sheiks")*',
    game: 'hoi4',
  },
  {
    id: 'hoi4_ach_238',
    name: 'Revenge for 1925',
    description: 'As Iraq, form the Hashemite Arab Federation and defeat Saudi Arabia',
    icon: 'https://hoi4.paradoxwikis.com/images/7/70/Revenge_for_1925.png',
    dlc: '',
    version: '1.16',
    difficulty: 'E',
    startingConditions:
      '[![Yes](https://hoi4.paradoxwikis.com/images/thumb/7/77/Yes.png/22px-Yes.png)](/File:Yes.png "Yes") Playing as [![Flag of Iraq](https://hoi4.paradoxwikis.com/images/thumb/c/c4/Iraq.png/24px-Iraq.png)](/Iraq "Iraq") [Iraq](/Iraq "Iraq")',
    completionRequirements:
      '*   [![Yes](https://hoi4.paradoxwikis.com/images/thumb/7/77/Yes.png/22px-Yes.png)](/File:Yes.png "Yes") Has *cosmetic* tag [![Flag of Hashemite Arab Federation](https://hoi4.paradoxwikis.com/images/thumb/9/95/Hashemite_Arab_Federation.png/24px-Hashemite_Arab_Federation.png)](/Hashemite_Arab_Federation "Hashemite Arab Federation") [Hashemite Arab Federation](/index.php?title=Hashemite_Arab_Federation&action=edit&redlink=1 "Hashemite Arab Federation (page does not exist)")\n*   [![Yes](https://hoi4.paradoxwikis.com/images/thumb/7/77/Yes.png/22px-Yes.png)](/File:Yes.png "Yes") Has capitulated [![Flag of Saudi Arabia](https://hoi4.paradoxwikis.com/images/thumb/1/1f/Saudi_Arabia.png/24px-Saudi_Arabia.png)](/Saudi_Arabia "Saudi Arabia") [Saudi Arabia](/Saudi_Arabia "Saudi Arabia")',
    notes:
      '**Note:** The [![Flag of Hashemite Arab Federation](https://hoi4.paradoxwikis.com/images/thumb/9/95/Hashemite_Arab_Federation.png/24px-Hashemite_Arab_Federation.png)](/Hashemite_Arab_Federation "Hashemite Arab Federation") [Hashemite Arab Federation](/index.php?title=Hashemite_Arab_Federation&action=edit&redlink=1 "Hashemite Arab Federation (page does not exist)") cosmetic tag can be only gained by completing [![Hashemite Arab Federation](https://hoi4.paradoxwikis.com/images/thumb/6/62/Focus_IRQ_hashemite_arab_federation.png/22px-Focus_IRQ_hashemite_arab_federation.png)](/Iraqi_national_focus_tree#Hashemite_Arab_Federation "Hashemite Arab Federation")[Hashemite Arab Federation](/Iraqi_national_focus_tree#Hashemite_Arab_Federation "Iraqi national focus tree") national focus.',
    game: 'hoi4',
  },
  {
    id: 'hoi4_ach_239',
    name: 'Avenging the Sack of Baghdad',
    description: 'As Iraq, control the capital of Mongolia',
    icon: 'https://hoi4.paradoxwikis.com/images/2/27/Avenging_the_Sack_of_Baghdad.png',
    dlc: '',
    version: '1.16',
    difficulty: 'M',
    startingConditions:
      '[![Yes](https://hoi4.paradoxwikis.com/images/thumb/7/77/Yes.png/22px-Yes.png)](/File:Yes.png "Yes") Playing as [![Flag of Iraq](https://hoi4.paradoxwikis.com/images/thumb/c/c4/Iraq.png/24px-Iraq.png)](/Iraq "Iraq") [Iraq](/Iraq "Iraq")',
    completionRequirements:
      '[![Occupation.png](https://hoi4.paradoxwikis.com/images/d/dc/Occupation.png)](/File:Occupation.png) Fully controls **Ulaanbaatar** *(330)*',
    notes:
      'Simply go fascist and join [![Flag of Germany](https://hoi4.paradoxwikis.com/images/thumb/e/e9/German_Reich.png/24px-German_Reich.png)](/Germany "Germany") [Germany](/Germany "Germany") in attacking the [![Flag of Soviet Union](https://hoi4.paradoxwikis.com/images/thumb/6/67/Soviet_Union.png/24px-Soviet_Union.png)](/Soviet_Union "Soviet Union") [Soviet Union](/Soviet_Union "Soviet Union"). Mongolia should be in their faction, and you shouldn\'t need much war score at all.',
    game: 'hoi4',
  },
  {
    id: 'hoi4_ach_240',
    name: "That's Sikh!",
    description: 'As Khalistan, control all of the starting Raj states',
    icon: 'https://hoi4.paradoxwikis.com/images/6/64/That%27s_Sikh%21.png',
    dlc: '',
    version: '1.16',
    difficulty: 'E',
    startingConditions: '',
    completionRequirements:
      '[![Yes](https://hoi4.paradoxwikis.com/images/thumb/7/77/Yes.png/22px-Yes.png)](/File:Yes.png "Yes") As [![Flag of Khalistan](https://hoi4.paradoxwikis.com/images/thumb/b/b3/Khalistan.png/24px-Khalistan.png)](/Khalistan "Khalistan") [Khalistan](/Khalistan "Khalistan"), control all of [![Flag of British Raj](https://hoi4.paradoxwikis.com/images/thumb/2/2f/British_Raj.png/24px-British_Raj.png)](/British_Raj "British Raj") [India](/British_Raj "British Raj")\'s starting states',
    notes:
      '**Note:** **Province of Aden** *(992)* is **not** required.\n\n*For detailed strategies, see [That\'s Sikh!](/That%27s_Sikh! "That\'s Sikh!")*',
    game: 'hoi4',
  },
  {
    id: 'hoi4_ach_241',
    name: 'Pesky Greeks',
    description: 'As Iran, become the owner of all Greek core states',
    icon: 'https://hoi4.paradoxwikis.com/images/5/5a/Pesky_Greeks.png',
    dlc: '',
    version: '1.16',
    difficulty: 'M',
    startingConditions:
      '[![Yes](https://hoi4.paradoxwikis.com/images/thumb/7/77/Yes.png/22px-Yes.png)](/File:Yes.png "Yes") Playing as [![Flag of Iran](https://hoi4.paradoxwikis.com/images/thumb/d/d1/Iran.png/24px-Iran.png)](/Iran "Iran") [Iran](/Iran "Iran")',
    completionRequirements:
      '[![Occupation.png](https://hoi4.paradoxwikis.com/images/d/dc/Occupation.png)](/File:Occupation.png) Owns all cores of [![Flag of Greece](https://hoi4.paradoxwikis.com/images/thumb/8/8e/Kingdom_of_Greece.png/24px-Kingdom_of_Greece.png)](/Greece "Greece") [Greece](/Greece "Greece")',
    notes:
      'Can be done together with [The Legacy of Cyrus the Great](/The_Legacy_of_Cyrus_the_Great "The Legacy of Cyrus the Great")',
    game: 'hoi4',
  },
  {
    id: 'hoi4_ach_242',
    name: 'The Sands of Time',
    description: 'As Iran, own the entire middle east',
    icon: 'https://hoi4.paradoxwikis.com/images/9/91/The_Sands_of_Time.png',
    dlc: '',
    version: '1.16',
    difficulty: 'H',
    startingConditions:
      '[![Yes](https://hoi4.paradoxwikis.com/images/thumb/7/77/Yes.png/22px-Yes.png)](/File:Yes.png "Yes") Playing as [![Flag of Iran](https://hoi4.paradoxwikis.com/images/thumb/d/d1/Iran.png/24px-Iran.png)](/Iran "Iran") [Iran](/Iran "Iran")',
    completionRequirements:
      '[![Occupation.png](https://hoi4.paradoxwikis.com/images/d/dc/Occupation.png)](/File:Occupation.png) Owns:\n\nExpand\n\n*   **Ankara** *(49)*\n*   **Azerbaijan** *(229)*\n*   **Armenia** *(230)*\n*   **Georgia** *(231)*\n*   **Tehran** *(266)*\n*   **Baghdad** *(291)*\n*   **Nejd** *(292)*\n*   **North Yemen** *(293)*\n*   **Muscat** *(294)*\n*   **Izmir** *(339)*\n*   **Bursa** *(340)*\n*   **Antalya** *(342)*\n*   **Afyon** *(343)*\n*   **Malatya** *(344)*\n*   **Mersin** *(345)*\n*   **Konya** *(346)*\n*   **Izmit** *(347)*\n*   **Kayseri** *(348)*\n*   **Sivas** *(349)*\n*   **Diyarbakır** *(350)*\n*   **Hakkari** *(352)*\n*   **Tunceli** *(353)*\n*   **Trabzon** *(354)*\n*   **Samsun** *(355)*\n*   **Kastamonu** *(356)*\n*   **Sistan** *(410)*\n*   **Isfahan** *(411)*\n*   **Fars** *(412)*\n*   **Khuzestan** *(413)*\n*   **Kerman** *(414)*\n*   **Khorasan** *(416)*\n*   **Hamadan** *(417)*\n*   **Semnan** *(418)*\n*   **West Azerbaijan** *(419)*\n*   **Gilan** *(420)*\n*   **Ilam** *(421)*\n*   **Suez** *(446)*\n*   **Sinai** *(453)*\n*   **Palestine** *(454)*\n*   **Jordan** *(455)*\n*   **Lebanon** *(553)*\n*   **Damascus** *(554)*\n*   **Kuwait** *(656)*\n*   **Abu Dhabi** *(658)*\n*   **South Yemen** *(659)*\n*   **Al Hajara** *(675)*\n*   **Mosul** *(676)*\n*   **Aleppo** *(677)*\n*   **Rub al Khali** *(678)*\n*   **Madinah** *(679)*\n*   **Deir-az-Zur** *(680)*\n*   **Qatar** *(765)*\n*   **Amasya** *(798)*\n*   **Hatay** *(799)*\n*   **Van** *(800)*\n*   **Abkhazia** *(826)*\n*   **Jawf** *(854)*\n*   **Tabuk** *(855)*\n*   **Asir-Makkah** *(856)*\n*   **Al-Qassim** *(857)*\n*   **Najiran** *(858)*\n*   **Dammam** *(859)*\n*   **North Baluchistan** *(988)*\n*   **Province of Aden** *(992)*\n*   **East Azerbaijan** *(1000)*\n*   **Kurdistan** *(1001)*\n*   **Yazd** *(1002)*\n*   **South Khorasan** *(1003)*\n*   **North Khorasan** *(1004)*\n*   **Qandahar** *(1008)*\n*   **Farah** *(1009)*\n*   **Al Anbar** *(1010)*\n*   **Al Basrah** *(1011)*\n*   **Musandam** *(1013)*\n*   **Bahrain** *(1014)*\n*   **Oman** *(1015)*\n*   **Dhofar** *(1016)*',
    notes:
      'Can be done together with [The Legacy of Cyrus the Great](/The_Legacy_of_Cyrus_the_Great "The Legacy of Cyrus the Great")  \n**Note**: The Middle East in this achievement encompasses the continent, not the strategic region (air zone).  \n**Required states**: [![Middle east hoi.png](https://hoi4.paradoxwikis.com/images/thumb/4/40/Middle_east_hoi.png/256px-Middle_east_hoi.png)](/File:Middle_east_hoi.png)',
    game: 'hoi4',
  },
  {
    id: 'hoi4_ach_243',
    name: 'The Legacy of Cyrus the Great',
    description: "As Iran, become the owner of former Achaemenid Empire's states",
    icon: 'https://hoi4.paradoxwikis.com/images/4/47/The_Legacy_of_Cyrus_the_Great.png',
    dlc: '',
    version: '1.16',
    difficulty: 'VH',
    startingConditions:
      '[![Yes](https://hoi4.paradoxwikis.com/images/thumb/7/77/Yes.png/22px-Yes.png)](/File:Yes.png "Yes") Playing as [![Flag of Iran](https://hoi4.paradoxwikis.com/images/thumb/d/d1/Iran.png/24px-Iran.png)](/Iran "Iran") [Iran](/Iran "Iran")',
    completionRequirements:
      '[![Occupation.png](https://hoi4.paradoxwikis.com/images/d/dc/Occupation.png)](/File:Occupation.png) Owns:\n\nExpand\n\n*   **Ankara** *(49)*\n*   **Dodecaneso** *(164)*\n*   **Cyprus** *(183)*\n*   **Thrace** *(184)*\n*   **Azerbaijan** *(229)*\n*   **Armenia** *(230)*\n*   **Georgia** *(231)*\n*   **Tehran** *(266)*\n*   **Kabul** *(267)*\n*   **Baghdad** *(291)*\n*   **Izmir** *(339)*\n*   **Bursa** *(340)*\n*   **Edirne** *(341)*\n*   **Antalya** *(342)*\n*   **Afyon** *(343)*\n*   **Malatya** *(344)*\n*   **Mersin** *(345)*\n*   **Konya** *(346)*\n*   **Izmit** *(347)*\n*   **Kayseri** *(348)*\n*   **Sivas** *(349)*\n*   **Diyarbakır** *(350)*\n*   **Hakkari** *(352)*\n*   **Tunceli** *(353)*\n*   **Trabzon** *(354)*\n*   **Samsun** *(355)*\n*   **Kastamonu** *(356)*\n*   **Tashkent** *(405)*\n*   **Isfahan** *(411)*\n*   **Khuzestan** *(413)*\n*   **Herat** *(415)*\n*   **Khorasan** *(416)*\n*   **Hamadan** *(417)*\n*   **Semnan** *(418)*\n*   **West Azerbaijan** *(419)*\n*   **Gilan** *(420)*\n*   **Ilam** *(421)*\n*   **West Punjab** *(440)*\n*   **Peshawar** *(442)*\n*   **South Baluchistan** *(444)*\n*   **Sibi** *(445)*\n*   **Suez** *(446)*\n*   **Alexandria** *(447)*\n*   **Benghasi** *(450)*\n*   **Derna** *(451)*\n*   **Matrouh** *(452)*\n*   **Sinai** *(453)*\n*   **Palestine** *(454)*\n*   **Jordan** *(455)*\n*   **Aswan** *(456)*\n*   **Eastern Desert** *(457)*\n*   **Lebanon** *(553)*\n*   **Damascus** *(554)*\n*   **Ashkhabad** *(584)*\n*   **Navoi** *(585)*\n*   **Kuwait** *(656)*\n*   **Cyrenaica** *(663)*\n*   **Al Hajara** *(675)*\n*   **Mosul** *(676)*\n*   **Aleppo** *(677)*\n*   **Deir-az-Zur** *(680)*\n*   **Central Macedonia** *(731)*\n*   **Stalinabad** *(742)*\n*   **Amasya** *(798)*\n*   **Hatay** *(799)*\n*   **Van** *(800)*\n*   **Bukhara** *(830)*\n*   **Khiva** *(831)*\n*   **Tashauz** *(832)*\n*   **Cairo** *(907)*\n*   **Waziristan** *(987)*\n*   **North Baluchistan** *(988)*\n*   **East Azerbaijan** *(1000)*\n*   **Kurdistan** *(1001)*\n*   **Yazd** *(1002)*\n*   **North Khorasan** *(1004)*\n*   **Qataghan** *(1005)*\n*   **Khyber Pass** *(1006)*\n*   **Maymanah** *(1007)*\n*   **Qandahar** *(1008)*\n*   **Farah** *(1009)*\n*   **Al Anbar** *(1010)*\n*   **Al Basrah** *(1011)*\n*   **Kalat** *(1012)*',
    notes:
      '**Required states**: [![Cyrus the great.png](https://hoi4.paradoxwikis.com/images/thumb/0/09/Achievement_map_Cyrus_the_great.png/256px-Achievement_map_Cyrus_the_great.png)](/File:Achievement_map_Cyrus_the_great.png)\n\n*For detailed strategies, see [The Legacy of Cyrus the Great](/The_Legacy_of_Cyrus_the_Great "The Legacy of Cyrus the Great")*',
    game: 'hoi4',
  },
  {
    id: 'hoi4_ach_244',
    name: 'From Tehran with Love',
    description: "As Iran, guarantee Poland's independence and ensure it does not capitulate by 1945",
    icon: 'https://hoi4.paradoxwikis.com/images/d/d1/From_Tehran_with_Love.png',
    dlc: '',
    version: '1.16',
    difficulty: 'E',
    startingConditions:
      '[![Yes](https://hoi4.paradoxwikis.com/images/thumb/7/77/Yes.png/22px-Yes.png)](/File:Yes.png "Yes") Playing as [![Flag of Iran](https://hoi4.paradoxwikis.com/images/thumb/d/d1/Iran.png/24px-Iran.png)](/Iran "Iran") [Iran](/Iran "Iran")',
    completionRequirements:
      '*   [![Time](https://hoi4.paradoxwikis.com/images/thumb/0/08/Time.png/22px-Time.png)](/File:Time.png "Time") After Jan 1st, 1945\n*   [![Yes](https://hoi4.paradoxwikis.com/images/thumb/7/77/Yes.png/22px-Yes.png)](/File:Yes.png "Yes") Has guaranteed [![Flag of Poland](https://hoi4.paradoxwikis.com/images/thumb/9/99/Poland.png/24px-Poland.png)](/Poland "Poland") [Poland](/Poland "Poland")\n*   [![Flag of Poland](https://hoi4.paradoxwikis.com/images/thumb/9/99/Poland.png/24px-Poland.png)](/Poland "Poland") [Poland](/Poland "Poland"):\n    *   [![Yes](https://hoi4.paradoxwikis.com/images/thumb/7/77/Yes.png/22px-Yes.png)](/File:Yes.png "Yes") Exists\n    *   [![free](https://hoi4.paradoxwikis.com/images/thumb/8/84/Autonomy_freedom_icon.png/22px-Autonomy_freedom_icon.png)](/Puppet#Autonomy_levels "free") Is fully independent\n    *   [![No](https://hoi4.paradoxwikis.com/images/thumb/0/04/No.png/22px-No.png)](/File:No.png "No") Has capitulated',
    notes: '*For detailed strategies, see [From Tehran with Love](/From_Tehran_with_Love "From Tehran with Love")*',
    game: 'hoi4',
  },
  {
    id: 'hoi4_ach_245',
    name: "It's Just Good Business",
    description: 'As the East India Company, own Suez and Panama',
    icon: 'https://hoi4.paradoxwikis.com/images/f/fa/It%27s_Just_Good_Business.png',
    dlc: '',
    version: '1.16',
    difficulty: 'VE',
    startingConditions:
      '[![Yes](https://hoi4.paradoxwikis.com/images/thumb/7/77/Yes.png/22px-Yes.png)](/File:Yes.png "Yes") Playing as [![Flag of British Raj](https://hoi4.paradoxwikis.com/images/thumb/2/2f/British_Raj.png/24px-British_Raj.png)](/British_Raj "British Raj") [British Raj](/British_Raj "British Raj")',
    completionRequirements:
      '*   [![Yes](https://hoi4.paradoxwikis.com/images/thumb/7/77/Yes.png/22px-Yes.png)](/File:Yes.png "Yes") Has *cosmetic* tag [![Flag of East India Company](https://hoi4.paradoxwikis.com/images/thumb/1/11/East_India_Company.png/24px-East_India_Company.png)](/East_India_Company "East India Company") [East India Company](/index.php?title=East_India_Company&action=edit&redlink=1 "East India Company (page does not exist)")\n*   [![Occupation.png](https://hoi4.paradoxwikis.com/images/d/dc/Occupation.png)](/File:Occupation.png) Owns **Suez** *(446)* and **Panamá Canal** *(685)*',
    notes:
      'Beeline for the Hostile Takeover focus (note that you\'ll need to immediately use the Pay Small Dividends decision after Incorporation to unlock the C-Suite focus). Hostile takeover will unlock decisions to buy them from [![Flag of United Kingdom](https://hoi4.paradoxwikis.com/images/thumb/2/29/United_Kingdom.png/24px-United_Kingdom.png)](/United_Kingdom "United Kingdom") [United Kingdom](/United_Kingdom "United Kingdom") and [![Flag of United States](https://hoi4.paradoxwikis.com/images/thumb/3/32/United_States.png/24px-United_States.png)](/United_States "United States") [United States](/United_States "United States"). Rush every focus that adds civilian factories while building more; you should have enough factories to buy both before 1938 ends.\n\n**Note:** The [![Flag of East India Company](https://hoi4.paradoxwikis.com/images/thumb/1/11/East_India_Company.png/24px-East_India_Company.png)](/East_India_Company "East India Company") [East India Company](/index.php?title=East_India_Company&action=edit&redlink=1 "East India Company (page does not exist)") cosmetic tag can be only gained by completing [![Incorporation of the East-India Company](https://hoi4.paradoxwikis.com/images/thumb/b/b2/Focus_RAJ_the_return_of_the_east_india_trading_company_alt.png/22px-Focus_RAJ_the_return_of_the_east_india_trading_company_alt.png)](/British_Raj_national_focus_tree#Incorporation_of_the_East-India_Company "Incorporation of the East-India Company")[Incorporation of the East-India Company](/British_Raj_national_focus_tree#Incorporation_of_the_East-India_Company "British Raj national focus tree") national focus.',
    game: 'hoi4',
  },
  {
    id: 'hoi4_ach_246',
    name: 'Media Mughal',
    description:
      'As the Mughal Empire, complete Agency Upgrade Psychological Warfare, become Spy Master and have at least 8 operatives',
    icon: 'https://hoi4.paradoxwikis.com/images/0/01/Media_Mughal.png',
    dlc: '',
    version: '1.16',
    difficulty: 'M',
    startingConditions:
      '[![Yes](https://hoi4.paradoxwikis.com/images/thumb/7/77/Yes.png/22px-Yes.png)](/File:Yes.png "Yes") Playing as [![Flag of British Raj](https://hoi4.paradoxwikis.com/images/thumb/2/2f/British_Raj.png/24px-British_Raj.png)](/British_Raj "British Raj") [British Raj](/British_Raj "British Raj")',
    completionRequirements:
      '*   [![Yes](https://hoi4.paradoxwikis.com/images/thumb/7/77/Yes.png/22px-Yes.png)](/File:Yes.png "Yes") Has *cosmetic* tag [![Flag of Mughal Empire](https://hoi4.paradoxwikis.com/images/thumb/2/2e/Mughal_Empire.png/24px-Mughal_Empire.png)](/Mughal_Empire "Mughal Empire") [Mughal Empire](/index.php?title=Mughal_Empire&action=edit&redlink=1 "Mughal Empire (page does not exist)")\n*   [![Agency upgrade psychological warfare.png](https://hoi4.paradoxwikis.com/images/thumb/1/1d/Agency_upgrade_psychological_warfare.png/22px-Agency_upgrade_psychological_warfare.png)](/File:Agency_upgrade_psychological_warfare.png) Has completed Agency Upgrade **Psychological Warfare**\n*   [![Yes](https://hoi4.paradoxwikis.com/images/thumb/7/77/Yes.png/22px-Yes.png)](/File:Yes.png "Yes") Is Spy Master\n*   [![Yes](https://hoi4.paradoxwikis.com/images/thumb/7/77/Yes.png/22px-Yes.png)](/File:Yes.png "Yes") At least **8** operatives',
    notes:
      '**Note:** The [![Flag of Mughal Empire](https://hoi4.paradoxwikis.com/images/thumb/2/2e/Mughal_Empire.png/24px-Mughal_Empire.png)](/Mughal_Empire "Mughal Empire") [Mughal Empire](/index.php?title=Mughal_Empire&action=edit&redlink=1 "Mughal Empire (page does not exist)") cosmetic tag can only be gained by completing [![Unite the Subcontinent](https://hoi4.paradoxwikis.com/images/thumb/e/ee/Goal_generic_position_armies.png/22px-Goal_generic_position_armies.png)](/British_Raj_national_focus_tree#Unite_the_Subcontinent "Unite the Subcontinent")[Unite the Subcontinent](/British_Raj_national_focus_tree#Unite_the_Subcontinent "British Raj national focus tree") national focus **before** completing [![Expand the Silk Road](https://hoi4.paradoxwikis.com/images/thumb/6/60/Focus_RAJ_the_silk_road.png/22px-Focus_RAJ_the_silk_road.png)](/British_Raj_national_focus_tree#Expand_the_Silk_Road "Expand the Silk Road")[Expand the Silk Road](/British_Raj_national_focus_tree#Expand_the_Silk_Road "British Raj national focus tree"). This achievement can be combined with [I shall either find a way or make one](#I_shall_either_find_a_way_or_make_one).\n\n*For detailed strategies, see [Media Mughal](/Media_Mughal "Media Mughal")*',
    game: 'hoi4',
  },
  {
    id: 'hoi4_ach_247',
    name: 'Oh, how the turntables',
    description: "As India puppet the UK with Churchill as it's leader",
    icon: 'https://hoi4.paradoxwikis.com/images/9/90/Oh%2C_how_the_turntables.png',
    dlc: '',
    version: '1.16',
    difficulty: 'H',
    startingConditions:
      '[![Yes](https://hoi4.paradoxwikis.com/images/thumb/7/77/Yes.png/22px-Yes.png)](/File:Yes.png "Yes") Playing as [![Flag of British Raj](https://hoi4.paradoxwikis.com/images/thumb/2/2f/British_Raj.png/24px-British_Raj.png)](/British_Raj "British Raj") [British Raj](/British_Raj "British Raj")',
    completionRequirements:
      '*   [![Puppet](https://hoi4.paradoxwikis.com/images/thumb/a/a7/Autonomy_puppet_icon.png/22px-Autonomy_puppet_icon.png)](/Puppet#Autonomy_levels "Puppet") The [![Flag of United Kingdom](https://hoi4.paradoxwikis.com/images/thumb/2/29/United_Kingdom.png/24px-United_Kingdom.png)](/United_Kingdom "United Kingdom") [United Kingdom](/United_Kingdom "United Kingdom") is your subject\n*   [![Yes](https://hoi4.paradoxwikis.com/images/thumb/7/77/Yes.png/22px-Yes.png)](/File:Yes.png "Yes") The [![Flag of United Kingdom](https://hoi4.paradoxwikis.com/images/thumb/2/29/United_Kingdom.png/24px-United_Kingdom.png)](/United_Kingdom "United Kingdom") [United Kingdom](/United_Kingdom "United Kingdom") has **Winston Churchill** as the current country leader',
    notes: '*For detailed strategies, see [Oh, how the turntables](/Oh,_how_the_turntables "Oh, how the turntables")*',
    game: 'hoi4',
  },
  {
    id: 'hoi4_ach_248',
    name: "I'm just passing by",
    description: 'Own a state on each continent while being at peace',
    icon: 'https://hoi4.paradoxwikis.com/images/5/58/I%27m_just_passing_by.png',
    dlc: '',
    version: '1.16',
    difficulty: 'M',
    startingConditions:
      '[![Yes](https://hoi4.paradoxwikis.com/images/thumb/7/77/Yes.png/22px-Yes.png)](/File:Yes.png "Yes") Playing as [![Flag of British Raj](https://hoi4.paradoxwikis.com/images/thumb/2/2f/British_Raj.png/24px-British_Raj.png)](/British_Raj "British Raj") [British Raj](/British_Raj "British Raj")',
    completionRequirements:
      '*   [![Yes](https://hoi4.paradoxwikis.com/images/thumb/7/77/Yes.png/22px-Yes.png)](/File:Yes.png "Yes") At peace\n*   [![Occupation.png](https://hoi4.paradoxwikis.com/images/d/dc/Occupation.png)](/File:Occupation.png) Owns a state in:\n\n*   *   Europe\n    *   Asia\n    *   Africa\n    *   Middle East\n    *   North America\n    *   South America\n    *   Australia',
    notes: '*For detailed strategies, see [I\'m just passing by](/I%27m_just_passing_by "I\'m just passing by")*',
    game: 'hoi4',
  },
  {
    id: 'hoi4_ach_249',
    name: 'I shall either find a way or make one',
    description: 'Control Rome and have an elephant unit in the state.',
    icon: 'https://hoi4.paradoxwikis.com/images/1/14/I_shall_either_find_a_way_or_make_one.png',
    dlc: '',
    version: '1.16',
    difficulty: 'H',
    startingConditions:
      '[![Yes](https://hoi4.paradoxwikis.com/images/thumb/7/77/Yes.png/22px-Yes.png)](/File:Yes.png "Yes") Playing as [![Flag of British Raj](https://hoi4.paradoxwikis.com/images/thumb/2/2f/British_Raj.png/24px-British_Raj.png)](/British_Raj "British Raj") [British Raj](/British_Raj "British Raj")',
    completionRequirements:
      '*   [![Occupation.png](https://hoi4.paradoxwikis.com/images/d/dc/Occupation.png)](/File:Occupation.png) Fully controls **Lazio** *(2)*\n*   [![Elephantry](https://hoi4.paradoxwikis.com/images/thumb/8/83/Elephantry.png/40px-Elephantry.png)](/Land_units#Unit_types "Elephantry") Has a division with elephantry battalion in **Lazio** *(2)*',
    notes:
      'Elephants are only available to the Mughal path. This achievement can be combined with [Media Mughal](#Media_Mughal).\n\n*For detailed strategies, see [Media Mughal](/Media_Mughal "Media Mughal")*',
    game: 'hoi4',
  },
]
