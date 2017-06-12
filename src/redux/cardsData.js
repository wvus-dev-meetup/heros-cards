export default [
    {
      title: "Superman",
      content: "Superman, also known as the Man of Steel, is one of the most powerful superheroes in the DC Universe.",
      imageUrl: "https://vignette1.wikia.nocookie.net/marvel_dc/images/9/9d/Superman_0008.jpg/revision/latest/scale-to-width-down/150?cb=20120825192746",
      link: "http://dc.wikia.com/wiki/Superman",
      type: 'hero'
    },
    {
      title: "Batman",
      content: "Batman is the super-hero protector of Gotham City, a man dressed like a bat who fights against evil and strikes terror into the hearts of criminals everywhere.",
      imageUrl: "https://vignette3.wikia.nocookie.net/marvel_dc/images/7/7b/Batman_Vol_2_9_Textless_Variant.jpg/revision/latest/scale-to-width-down/150?cb=20120510175322",
      link: "http://dc.wikia.com/wiki/Batman",
      type: 'hero'
    },
    {
      title: "Wonder Woman",
      content: "Wonder Woman is an Amazon warrior princess and one of the most powerful superheroes in the DC Universe.",
      imageUrl: "https://vignette4.wikia.nocookie.net/marvel_dc/images/c/cc/Wonder_Woman_Vol_5_4_Textless.jpg/revision/latest/scale-to-width-down/150?cb=20160810132845",
      link: "http://dc.wikia.com/wiki/Wonder_Woman",
      type: 'hero'
    },
    {
      title: "Flash",
      content: "The Flash is the fastest man alive. He is the protector of Central City and Keystone City, fighting against evil using his super-speed and a dedicated sense of heroism.",
      imageUrl: "https://vignette3.wikia.nocookie.net/marvel_dc/images/b/bd/Flash_Wally_West_0001.jpg/revision/latest/scale-to-width-down/150?cb=20130711160534",
      link: "http://dc.wikia.com/wiki/Flash",
      type: 'hero'
    },
    {
      title: "Green Lantern",
      content: "Green Lantern is a name that has been used by many characters in the DC Universe, and two distinct franchises.",
      imageUrl: "https://vignette3.wikia.nocookie.net/marvel_dc/images/0/09/Hal_Jordan_024.jpg/revision/latest/scale-to-width-down/150?cb=20130718162147",
      link: "http://dc.wikia.com/wiki/Green_Lantern",
      type: 'hero'
    },
    {
      title: "Supergirl",
      content: "Supergirl is a legacy name used by female super-heroes involved with Superman and the Superman Family.",
      imageUrl: "https://vignette2.wikia.nocookie.net/marvel_dc/images/f/f4/Supergirl_Vol_6_1_Textless.jpg/revision/latest/scale-to-width-down/150?cb=20110710044111",
      link: "http://dc.wikia.com/wiki/Supergirl",
      type: 'hero'
    },
    {
      title: "Lex Luther",
      content: "Lex Luthor is one of the most dangerously intelligent men on the planet- a super-villain, a brilliant scientist, a billionaire industrialist, and Superman's greatest enemy.",
      imageUrl: "https://vignette1.wikia.nocookie.net/marvel_dc/images/e/e8/Lex_Luthor_Finch.jpg/revision/latest/scale-to-width-down/150?cb=20151204173006",
      link: "http://dc.wikia.com/wiki/Lex_Luthor",
      type: "villain"
    },
    {
      title: "Joker",
      content: "The Joker is a serial killer and a super-villain, a dangerous madman who dresses like a clown and commits violent crimes.",
      imageUrl: "https://vignette3.wikia.nocookie.net/marvel_dc/images/e/e1/Joker_0001.jpg/revision/latest/scale-to-width-down/150?cb=20130730172137",
      link: "http://dc.wikia.com/wiki/Joker",
      type: "villain"
    },
    {
      title: "Harley Quinn",
      content: "Harley Quinn is a flamboyant super-villain and an adversary of Batman usually recognized as the Joker's girlfriend, although she has had her own strong solo career.",
      imageUrl: "https://vignette3.wikia.nocookie.net/marvel_dc/images/9/9c/Harley_Quinn_0002.jpg/revision/latest/scale-to-width-down/130?cb=20140924160126",
      link: "http://dc.wikia.com/wiki/Harley_Quinn",
      type: "villain"
    },
    {
      title: "Catwoman",
      content: "Catwoman is Selina Kyle, a morally ambiguous character who has been an anti-hero, acting as an adversary, a crime fighter and also a love interest for Batman.",
      imageUrl: "https://vignette3.wikia.nocookie.net/marvel_dc/images/e/e8/Catwoman_Vol_4_47_Textless.jpg/revision/latest/scale-to-width-down/150?cb=20160916171703",
      link: "http://dc.wikia.com/wiki/Catwoman",
      type: "villain"
    },
    {
      title: "Darkseid",
      content: "Darkseid is the ruler of Apokolips and Darkseid's Elite and was a major player in the cosmic war that was the Final Crisis.",
      imageUrl: "https://vignette1.wikia.nocookie.net/marvel_dc/images/4/43/Justice_League_Vol_2_23.1_Darkseid_Textless.jpg/revision/latest/scale-to-width-down/150?cb=20130904214338",
      link: "http://dc.wikia.com/wiki/Darkseid",
      type: "villain"
    },
    {
      title: "Deathstroke",
      content: "Deathstroke is the world's greatest assassin/mercenary and an enemy of the Teen Titans.",
      imageUrl: "https://vignette1.wikia.nocookie.net/marvel_dc/images/c/c4/Faces_of_Evil_Deathstroke_01.jpg/revision/latest/scale-to-width-down/150?cb=20130127191330",
      link: "http://dc.wikia.com/wiki/Deathstroke",
      type: "villain"
    }
  ]
  .map((card, id) => Object.assign({}, card, {id}));
