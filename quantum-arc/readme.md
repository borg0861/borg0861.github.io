# READ ME

#### Ability Structure

```
    ---
    layout: ability
    title: Melee Free Strike
    action-type: action
    ability-type: Melee Free Strike
    cost: 15
    flavor-text: Lash out with fists or weapons
    tags: [Charge, Melee, Strike, Weapon]
    target: 1 Creature or Object
    range: Melee 1
    trigger: test trigger
    power-roll: Might or Agility
    tier-1-result: 2 + M or A Damage
    tier-2-result: 5 + M or A Damage
    tier-3-result: 7 + M or A Damage
    effect-is-before: false
    based-on: Melee Free Strike
    ---

    **Effect:** This is a Free Strike.

    "title-slug":{
         "title":""
        ,"slug":""
        ,"description":[
            {
                 "element-type":""
                ,"content":""
                ,"ability-slugs":[]
            }
        ]
        ,"is-playtest":false
        ,"is-published":false
        ,"is-change-new":"new"
        ,"inspiring-property":false
        ,"inspiration":false
        ,"contributors":[
            {
                 "name":""
                ,"link":""
            }
        ]
        ,"section":[]
    }




```



| Used For | Property | Acceptable Values | Notes |
|---|---|---|---|
| General | title |  |
| General | slug |  |  |
| General | description |  |  |
| General | is-playtest |  |  |
| General | is-published |  |  |
| General | is-change-new |  |  |
| General | inspiring-property |  |  |
| General | inspiration |  |  |
| General | contributors |  |  |
| General | section |  |  |
| General | ability-slugs |  |  |
| General | style |  |  |
| Abilities & Monster Abilities | action-type |  |  |
| Abilities & Monster Abilities || ability-type |  |  |
| Abilities & Monster Abilities || cost |  |  |
| Abilities, Monster Abilities, & Monsters || tags |  |  |
| Abilities & Monster Abilities || target |  |  |
| Abilities & Monster Abilities || range |  |  |
| Abilities & Monster Abilities || power-roll |  |  |
| Abilities & Monster Abilities || trigger |  |  |
| Abilities & Monster Abilities || effect |  |  |
| Abilities & Monster Abilities || effect-is-before |  |  |
| Abilities & Monster Abilities || spend |  |  |
| Abilities & Monster Abilities || spend-is-before |  |  |
| Abilities & Monster Abilities || based-on |  |  |
| Ancestries | height |  |  |
| Ancestries | weight |  |  |
| Ancestries | life-expectancy |  |  |
| Ancestries | size |  |  |
| Ancestries | short-description |  |  |
| Ancestries | ancestry-points |  |  |
| Ancestries | quickbuild |  |  |
| Ancestries | is-signature-trait |  |  |
| Ancestries | trait-cost |  |  |
| Classes | subclass-name |  |  |
| Classes | class-basics |  |  |
| Classes | starting-stamina |  |  |
| Classes | stamina-gained |  |  |
| Classes | recoveries |  |  |
| Classes | skills |  |  |
| Kits | speed-bonus |  |  |
| Kits | stamina-bonus |  |  |
| Kits | stability-bonus |  |  |
| Kits | distance-bonus |  |  |
| Kits | disengage-bonus |  |  |
| Kits | ranged-bonus |  |  |
| Kits | melee-bonus |  |  |
| Monster Categories | monster-slugs |  |
| Monsters | level |  |
| Monsters | encounter-value |  |
| Monsters | organization |  |
| Monsters | role |  |
| Monsters | stamina |  |
| Monsters | immunities |  |
| Monsters | speed |  |
| Monsters | movement-types |  |
| Monsters | size |  |
| Monsters | stability |  |
| Monsters | with-captain |  |
| Monsters | free-strike |  |
| Monsters | characteristics |  |
| Monsters | with-captain |  |
| Monsters | with-captain |  |
| Monsters | with-captain |  |
| Monsters | with-captain |  |





### Control Fields

#### Slug
The slug is a version of the name which will be used to name files and create links to the item.

`"slug": "template",`

#### Is Change or New
Identifies if the rule is changed or new.

Possible values include:
- `"new"`
- `"change"`
- `"none"`

`"is-change-or-new": "new",`

#### Is Playtest
Boolean field identifying whetehr the record is in playtesting.

`"is-playtest": false,`

#### Publish?
Boolean field identifying whether the record is prepared for publishing.

`"publish": false,`