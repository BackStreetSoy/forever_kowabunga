
var prompts = [
    {
    "name": "main_prompt",
    "promptContent":'<p>You wake up on a Sunday at like one o\'clock in the morning. Immediately, you vomit and scream at the top of your lungs, the more you vomit the more afraid of vomit you become and the louder you scream. The louder you scream the more allergic you become to noise and the more you vomit.</p> <p>Seventy eight days later you realize you\'re being stupid and stop. In that time somebody stapled a note written in blood on your chest. </p>', 
    "promptImage": "/assets/bedroom.png", 
    "promptChoices":[["read the note", "go watch project runway, and play with your belly button", "have a baby"], false]

    },

    {
     "name": "have_a_baby",
     "promptContent":'<p>You squeeze a baby out of your being. After thorough analysis you come to the conclusion that  it\'s a girl. Hating to enforce labels, you tell the baby to name herself. She blows a booger bubble out of her nose, which makes you laugh merrily and say.. </p>',
     "promptImage": "/assets/have_a_baby.png",
     "promptChoices": [["Jason it is!", "That's not an answer you idiot! What's your name?", "I\'m bored, I\'m gonna read this note on my chest."], true]

    }, 

    {
        "name":"Jason_it_is",
        "promptContent": "<p>Baby Jason starts to glow like a little baby lightbulb. She giggles and burps in a matter that seems to be beckoning you to get out of this crazy life. To throw it all   away and start all over. Maybe at a small mining town, or a place where they don\'t know about   city things like bathing and Netflix.</p> <p>She begs you not to read the note on your chest and to escape from the rat race.</p>",
        "promptImage":"/assets/have_a_baby.png",
        "promptChoices": [["No, I can't Baby Jason. I have a life here, a good life, with friends and family. It wouldn't be right.", "Sign me up!", "I promised myself a long time ago that I'd stop letting babies tell me what to do. I'm going to read the note"], true]
    },

    {
        "name": "Thats_not_an_answer_you_idiot_Whats_your_name",
        "promptContent": "The baby, in baby like fashion, blows more booger bubbles.",
        "promptImage": "/assets/have_a_baby.png",
        "promptChoices": [["Jason it is!", "Way to suck at blowing bubbles", "What's that girl? You want me to read the note?"], true]
    },

      {
        "name": "Im_bored_Im_gonna_read_this_note_on_my_chest",
        "promptContent": '<p>The blood note says “Hey man, while you were screaming and vomiting I murdered your entire family. My bad. I think I wasn\'t raised good or something. Signed, Jake O\'Malley". </p> <p>You crumple the note in your hand, swallow it whole, and ask yourself who could have done this? Before you can piece it all together your doorbell rings.</p>',
        "promptImage":"/assets/blood_letter.png",
        "promptChoices":[["answer your door", "think about whether or not paper has gluten in it"], false]
    },

    {
        "name": "I_promised_myself_a_long_time_ago_that_Id_stop_letting_babies_tell_me_what_to_do_Im_going_to_read_the_note",
        "promptContent": '<p>The blood note says “Hey man, while you were screaming and vomiting I murdered your entire family. My bad. I think I wasn\'t raised good or something. Signed, Jake O\'Malley". </p> <p>You crumple the note in your hand, swallow it whole, and ask yourself who could have done this? Before you can piece it all together your doorbell rings.</p>',
        "promptImage":"/assets/blood_letter.png",
        "promptChoices":[["answer your door", "think about whether or not paper has gluten in it"], false]
    },

    {
        "name": "Whats_that_girl_You_want_me_to_read_the_note",
        "promptContent": '<p>The blood note says “Hey man, while you were screaming and vomiting I murdered your entire family. My bad. I think I wasn\'t raised good or something. Signed, Jake O\'Malley". </p> <p>You crumple the note in your hand, swallow it whole, and ask yourself who could have done this? Before you can piece it all together your doorbell rings.</p>',
        "promptImage":"/assets/blood_letter.png",
        "promptChoices":[["answer your door", "think about whether or not paper has gluten in it"], false]
    },

     {
        "name": "That_was_informative_I_assume_the_letter_stapled_to_my_chest_will_also_be_informative",
        "promptContent": '<p>The blood note says “Hey man, while you were screaming and vomiting I murdered your entire family. My bad. I think I wasn\'t raised good or something. Signed, Jake O\'Malley". </p> <p>You crumple the note in your hand, swallow it whole, and ask yourself who could have done this? Before you can piece it all together your doorbell rings.</p>',
        "promptImage":"/assets/blood_letter.png",
        "promptChoices":[["answer your door", "think about whether or not paper has gluten in it"], false]
    },

    {
        "name": "Fine_Ill_read_the_letter",
        "promptContent": '<p>The blood note says “Hey man, while you were screaming and vomiting I murdered your entire family. My bad. I think I wasn\'t raised good or something. Signed, Jake O\'Malley". </p> <p>You crumple the note in your hand, swallow it whole, and ask yourself who could have done this? Before you can piece it all together your doorbell rings.</p>',
        "promptImage":"/assets/blood_letter.png",
        "promptChoices":[["answer your door", "think about whether or not paper has gluten in it"], false]
    },



    {
        "name": "Oh_I_didnt_think_youd_turn_back_around_Uh_oh_look_theres_a_note_written_on_my_chest",
        "promptContent": '<p>The blood note says “Hey man, while you were screaming and vomiting I murdered your entire family. My bad. I think I wasn\'t raised good or something. Signed, Jake O\'Malley". </p> <p>You crumple the note in your hand, swallow it whole, and ask yourself who could have done this? Before you can piece it all together your doorbell rings.</p>',
        "promptImage":"/assets/blood_letter.png",
        "promptChoices":[["answer your door", "think about whether or not paper has gluten in it"], false]
    },

    {
        "name": "Okay",
        "promptContent": '<p>The blood note says “Hey man, while you were screaming and vomiting I murdered your entire family. My bad. I think I wasn\'t raised good or something. Signed, Jake O\'Malley". </p> <p>You crumple the note in your hand, swallow it whole, and ask yourself who could have done this? Before you can piece it all together your doorbell rings.</p>',
        "promptImage":"/assets/blood_letter.png",
        "promptChoices":[["answer your door", "think about whether or not paper has gluten in it"], false]
    },

    

{
        "name": "Hm_I_guess_I_should_read_this_thing_Later_Jason",
        "promptContent": '<p>The blood note says “Hey man, while you were screaming and vomiting I murdered your entire family. My bad. I think I wasn\'t raised good or something. Signed, Jake O\'Malley". </p> <p>You crumple the note in your hand, swallow it whole, and ask yourself who could have done this? Before you can piece it all together your doorbell rings.</p>',
        "promptImage":"/assets/blood_letter.png",
        "promptChoices":[["answer your door", "think about whether or not paper has gluten in it"], false]
    },

    

      {
        "name": "oh_hey_remember_that_note_Read_it",
        "promptContent": '<p>The blood note says “Hey man, while you were screaming and vomiting I murdered your entire family. My bad. I think I wasn\'t raised good or something. Signed, Jake O\'Malley". </p> <p>You crumple the note in your hand, swallow it whole, and ask yourself who could have done this? Before you can piece it all together your doorbell rings.</p>',
        "promptImage":"/assets/blood_letter.png",
        "promptChoices":[["answer your door", "think about whether or not paper has gluten in it"], false]
    },

      {
        "name": "In_sucking_so_hard_at_giving_even_a_semblance_of_a_decent_critique_you_change_back_from_Heidi_Klum_to_miserable_old_you",
        "promptContent": '<p>The blood note says “Hey man, while you were screaming and vomiting I murdered your entire family. My bad. I think I wasn\'t raised good or something. Signed, Jake O\'Malley". </p> <p>You crumple the note in your hand, swallow it whole, and ask yourself who could have done this? Before you can piece it all together your doorbell rings.</p>',
        "promptImage":"/assets/blood_letter.png",
        "promptChoices":[["answer your door", "think about whether or not paper has gluten in it"], false]
    },



   {
        "name": "Interesting_Maybe_I_should_read_the_note",
        "promptContent": '<p>The blood note says “Hey man, while you were screaming and vomiting I murdered your entire family. My bad. I think I wasn\'t raised good or something. Signed, Jake O\'Malley". </p> <p>You crumple the note in your hand, swallow it whole, and ask yourself who could have done this? Before you can piece it all together your doorbell rings.</p>',
        "promptImage":"/assets/blood_letter.png",
        "promptChoices":[["answer your door", "think about whether or not paper has gluten in it"], false]
    },


    {
        "name": "Ignore_him_and_read_the_note",
        "promptContent": '<p>The blood note says “Hey man, while you were screaming and vomiting I murdered your entire family. My bad. I think I wasn\'t raised good or something. Signed, Jake O\'Malley". </p> <p>You crumple the note in your hand, swallow it whole, and ask yourself who could have done this? Before you can piece it all together your doorbell rings.</p>',
        "promptImage":"/assets/blood_letter.png",
        "promptChoices":[["answer your door", "think about whether or not paper has gluten in it"], false]
    },



    {
    "name": "Oh_sweet_I_should_read_the_note",
    "promptContent": '<p>The blood note says “Hey man, while you were screaming and vomiting I murdered your entire family. My bad. I think I wasn\'t raised good or something. Signed, Jake O\'Malley". </p> <p>You crumple the note in your hand, swallow it whole, and ask yourself who could have done this? Before you can piece it all together your doorbell rings.</p>',
        "promptImage":"/assets/blood_letter.png",
        "promptChoices":[["answer your door", "think about whether or not paper has gluten in it"], false]
    },

    {
        "name": "read_the_note",
        "promptContent": '<p>The blood note says “Hey man, while you were screaming and vomiting I murdered your entire family. My bad. I think I wasn\'t raised good or something. Signed, Jake O\'Malley". </p> <p>You crumple the note in your hand, swallow it whole, and ask yourself who could have done this? Before you can piece it all together your doorbell rings.</p>',
        "promptImage":"/assets/blood_letter.png",
        "promptChoices":[["answer your door", "think about whether or not paper has gluten in it"], false]
    },

    {"name": "Way_to_suck_at_blowing_bubbles",
    "promptContent": '<p>You blow bigger bubbles than the baby proving once and for all that you are a pretty petty person.</p>',
    "promptImage": "/assets/bubble.png",
    "promptChoices": [["That is an accurate description of my personality yeah"], true]
    },

//----this has the potential to be where i fucked everything up ---//
    {"name": "No_I_cant_Baby_Jason_I_have_a_life_here_a_good_life_with_friends_and_family_It_wouldnt_be_right",
     "promptContent": "<p>Baby Jason respects your decision. It is, after all, yours to make. She gets her little baby bindle   and walks off into the woods.</p>",
     "promptImage": "/assets/bindle_baby.png",
     "promptChoices": [["Wow.","Jason wait!", "Read the note"], true]
    },

// THIS NEEDS TO BE CHANGED
     {"name": "Jason_wait",
      "promptContent": "<p>Jason turns around slowly. The tears in her eyes tell you that she's hurt, and the rumble in her    tummy tells you that she's hungry.</p>",
      "promptImage": "/assets/bindle_baby.png",
      "promptChoices": [["Oh, I didn't think you'd turn back around. Uh, oh look there's a note written on my chest!", "I'm sad"],true]
     },

      {"name": "Im_sad",
        "promptContent": '<p>Jason sighs, and puts down her bindle.</p><p>“Why are you sad?</p>',
        "promptImage": "/assets/bindle_baby.png",
        "promptChoices": [["My chest hurts.", "Sometimes I jump to try to hug the sun but it's too far away. Somtimes I think it'll always be too far away."], true]
    },

    {"name": "Sometimes_I_jump_to_try_to_hug_the_sun_but_its_too_far_away_Somtimes_I_think_itll_always_be_too_far_away",
    "promptContent": "<p>I know I'm a baby that's been alive for maybe two minutes, but that seems like a remarkably   dumb thing to do.</p>",
    "promptImage": "/assets/bindle_baby.png",
    "promptChoices": [['You\'re a baby, what do you know?',
'I feel like a heel.'], true]
    },

{"name": "I_feel_like_a_heel",
"promptContent": "<p>“sometimes we are tempted to run away from bad feelings. Especially when they are bad  feelings about ourselves. It's best to sit with those feelings and reflect on how you can do better  in the future.”</p><p>“For example for the last minute and a half you have had blood dripping down your torso  because you have a letter stapled to your chest. Maybe it would be a good idea to read that letter.”</p>",
"promptImage": '/assets/bindle_baby.png',
"promptChoices": [["Fine! I'll read the letter!",
"Can you read the letter to me?"], true]
 },

{"name": "Can_you_read_the_letter_to_me",
 "promptContent": "<p> 'No' </p>",
  "promptImage": '/assets/bindle_baby.png',
  "promptChoices": [["Okay"], true]
},

{"name": "Youre_a_baby_what_do_you_know",
"promptContent": '<p>"It depends on whether you prescribe to a Tabula Rasa school of epistemology, or if Innatism is more your bag. The Tabula Rasa or \'blank slate\', mode of thinking holds that an individual is born with a blank mind ready to absorb knowledge or have knowledge be inscribed into it, much like a scribe would a stone tablet in ancient Greece. Innatism, conversely, posits that   the mind is born with certain ideas/knowledge.”</p>',
"promptImage": '/assets/bindle_baby.png',
"promptChoices": [["That was boring","That was informative. I assume the letter stapled to my chest will also be informative."], true]
 },


{"name": "That_was_boring",
"promptContent": "<p>“I'm sorry. Maybe my time in the woods alone as a baby will teach me how to be more appealing in conversations.”</p><p>Jason walks away forever. You feel the cold wind of loneliness crawl up your spine.</p>",
"promptImage": '/assets/bindle_baby.png',
"promptChoices": [["I miss Jason."], true]
 },



{"name": "My_chest_hurts",
"promptContent": '<p>"You Do Have a Note Stapled to It"</p>',
"promptImage": '/assets/bindle_baby.png',
"promptChoices": [["Hahahahahahahaha",
"Hm. I guess I should read this thing. Later Jason."], true]
},



{"name": "Hahahahahahahaha",
"promptContent": '<p> You Never Stop Laughing</p>',
"promptImage": "/assets/bindle_baby.png",
"promptChoices": [["hahaha"],true]
 },


{"name": "Sign_me_up",
"promptContent": '<p>Baby Jason turns into the size of a roller blading pony and says, “Come on, jump on my back and I will take us away from this place. A place free from turmoil and judgement. Where you can be your self and flllyyyy” </p>',
"promptImage": "/assets/roller_horse.png",
"promptChoices": [["Hell the tits yeah!", "Never mind. You're a baby and i'm an adult and none of this seems real."], true]
},

{"name": "Never_mind_Youre_a_baby_and_im_an_adult_and_none_of_this_seems_real",
"promptContent": '<p>Baby Jason sighs, and says okay.</p> <p>You come to your senses and realize you need a job, and you start to work on your resume.</p>',
"promptImage": "/assets/roller_horse.png",
"promptChoices": [["Great. Being an employed member of society sounds pretty reasonable.", "Fuck me."], true]
},

{"name": "Hell_the_tits_yeah",
"promptContent": '<p>You and Baby Jason gallop away having the kinds of adventures that other people only pretend they have while playing useless games.</p>',
"promptImage": "/assets/roller_horse.png",
"promptChoices": [["cool, that was sick, but isn't this game about solving the murder of my family or something?"], true]
},

{
    "name": "go_watch_project_runway_and_play_with_your_belly_button",
    "promptContent": '<p>You ignore the blood note stapled on your chest, and go to your living room.  Something about  it seems odd, a little askew. You step over the bodies of your murdered family and check your   thermostat to see that somebody turned it to a colder setting than you prefer. Feeling pretty   ticked-the-h-e-double-hockey-sticks-off you hop onto your crocodile skin couch  and turn on     project runway, it\'s a re-run of an episode you\'ve memorized all the lines of.</p> <p>Your chest hurts exactly at the place somebody stapled a note to it</p>',
    "promptImage": "/assets/project_runway.png",
    "promptChoices": [["read the note",
"recite all the lines of the show verbatim without blinking", "examine the bodies around you"], false]
},


{
    "name": "recite_all_the_lines_of_the_show_verbatim_without_blinking",
    "promptContent": '<p>You recite every line of this particular episode of Project Runway verbatim, while doing the  greatest Heidi Klum impression anyone has never seen. It\'s actually so good that all the people on the show stop what they are doing, because now they just want to watch you do it. You get bored and want to stop, but you can\'t. There can\'t not be a Project Runway and if Heidi and whoever else on that show isn\'t going to do it, you have to. Your heart beat grows more  and more rapid. </p>',
    "promptImage": "/assets/project_runway.png",
    "promptChoices": [["The show must go on, continue giving the performance of a mother fucking lifetime", "oh hey, remember that note? Read it."], false]
},

{
    "name": "The_show_must_go_on_continue_giving_the_performance_of_a_mother_fucking_lifetime",
    "promptContent": '<p>Titty Mcdoogle-nuggets! You start to belt out some sick fashion critiques, and saying things   like “Nah I\'d like it better in orange” and “how about a little less sass and a little more fringe”,    you\'re becoming more Heidi Klum than the jewel of North Rhine-Westphalia herself.</p> <p>The cognitive dissonance, however, becomes too great so you take your shoes off and scream   into their soles because now you are a crazy person.</p> <p>The note on your chest rustles the kind of rustle suggesting it might cure your Klum Psychosis.</p>',
    "promptImage": "/assets/project_runway.png",
    "promptChoices": [["NOOO!!! I can't be crazy! My mother was crazy!", "I can give a better critique than that","Read the note"], true]

},


{
    "name": "I_can_give_a_better_critique_than_that",
    "promptContent": "You're critique was garbage.",
    "promptImage": "/assets/project_runway.png",
    "promptChoices": [["In sucking so hard at giving even a semblance of a decent critique, you change back from Heidi Klum to miserable old you."], false]
},

{
    "name": "NOOO_I_cant_be_crazy_My_mother_was_crazy",
    "promptContent": "<p>Having a crazy mother doesn't make you exempt as a candidate for being potentially crazy.</p>",
    "promptImage": "/assets/project_runway.png",
    "promptChoices": [["Interesting. Maybe I should read the note", "Does it make me exempt as a candidate for the presidency?", "That makes me sad because I actually want to be like my mom."], true] 
},

{
    "name": "That_makes_me_sad_because_I_actually_want_to_be_like_my_mom",
    "promptContent": "<p>You think a lot about your mother. An incredibly kind woman with a terrific sense of humor,    she would always embarrass you by giving you raspberries in front of your friends. No, not  raspberries like the fruits, but a raspberry like putting her mouth on your tummy and   blowing on it to produce a silly flatulent like noise.</p> <p>You look down in deep contemplation and see the note that's been stapled on your chest this whole time.</p>",
    "promptImage": "/assets/project_runway.png",
    "promptChoices": [["read the note.", "Realize you'll never be half the woman your mother was, or half a glass of water either."], false]
},

{
    "name": "Realize_youll_never_be_half_the_woman_your_mother_was_or_half_a_glass_of_water_either",
    "promptContent": "<p>You remember a Lao Tzu quote that goes something like “The one who rules like the mother   lasts long.</p>",
    "promptImage": "/assets/project_runway.png",
    "promptChoices": [["experience enlightenment", "read the note"], false]
},

{
    "name": "experience_enlightenment",
    "promptContent": "<p>You become one with all things, or rather, you realize that that is what you have been all along.  Go you. You turn into a beam of light that looks a lot like a neon sign that says \'Toronto\' and jettison off into the cosmos.</p>",
    "promptImage": "/assets/toronto.png",
    "promptChoices": [["word"], true]
},


{
    "name": "Does_it_make_me_exempt_as_a_candidate_for_the_presidency",
    "promptContent": "<p>Unlikely. Having a parent stricken by mental illness is not a measure for whether or not a person may run for president of this country. The bi-laws for the presidency of condominium organizations or country clubs might be different though maybe look into that.</p> <p>The place where the note is stapled to your chest starts to spit blood.</p>",
    "promptImage": "/assets/project_runway.png",
    "promptChoices": [["Find the whole thing mighty suspect and just leave your house","Read the note"], false] 
},

{
    "name": "Find_the_whole_thing_mighty_suspect_and_just_leave_your_house",
    "promptContent": "<p>You walk out of your house, and see a deranged looking man with blood all over his hands.  He explains to you that he's the one that murdered your family and that he was sorry.</p>",
    "promptImage": "/assets/scary_door_man.png",
    "promptChoices": [["Give him a firm talking to, and tell him that he better not let that happen again, because if he does that will be strike two.", "Invite him in to watch Project Runway."], false]
},

{
    "name": "Invite_him_in_to_watch_Project_Runway",
    "promptContent": "<p>You and the guy sit on your crocodile skin couch and flip the tube to America's favorite show, Project Runway. You try to show him your Heidi Klum impression, but he doesn't seem super into it and you figure you'll try again later.</p>",
    "promptImage": "/assets/project_runway.png",
    "promptChoices": [["fall asleep"], false]
},

{
    "name":"examine_the_bodies_around_you",
    "promptContent": "<p>You look at each of the slaughtered bodies before your eyes. It's your family. They've been murdered. You can hear coughing and your eyes dart to your rapidly dying brother Dan. He beckons you to come close to talk to him.</p>",
    "promptImage":"/assets/bloody_hand.png",
    "promptChoices": [["talk to dan", "who's dan?", "Ignore him and read the note"], true]
},

{
    "name": "talk_to_dan",
    "promptContent": "<p>You kneel down next to Dan to hear him speak.</p> <p>“Somebody murdered me. And Mom and Dad too. The note on your chest explains it.</p>",
    "promptImage": "/assets/bloody_hand.png",
    "promptChoices": [["Who's Mom and Dad?", "Are you accusing me?", "Oh sweet I should read the note"], true]
},


{
    "name": "Are_you_accusing_me",
    "promptContent": "<p>Yes, and now I'm going to take you to hell with me you bastard. I have always been the superior son, and am prepared to make the best of my dying breath to end you now!</p> <p>Your brother rips out one of his ribs and stabs you in the eye with it.</p>",
    "promptImage": "/assets/bloody_hand.png",
    "promptChoices": [["take the rib to the eye", "read the note."], false] 
},


{
    "name": "Whos_Mom_and_Dad",
    "promptContent": "<p>Mom and Dad is what we call our parents. They got naked and smashed their bodies against  each other a bunch of times to make you and me.</p><p>You used to call them Battery and Be-Bop Commander 12, but they told you to stop it because those aren't their names. No one knows what their names are because they forgot so now  you call them mom and dad which, I assume you think, is polish for Battery and Be-Bop Commander 12.</p>",
    "promptImage": "/assets/dorky_parents.png" ,
    "promptChoices": [["Oh sweet, I should read the note", "Are you lying?"], true]
},

{
    "name":"Are_you_lying",
    "promptContent": "<p>'No'</p>",
    "promptImage": "/assets/dorky_parents.png",
    "promptChoices": [["Oh sweet, I should read the note", "Are you sure?"], true]
},


{
    "name": "Are_you_sure",
    "promptContent": "<p>No I'm not sure, I'm a caterpillar.</p><p>Then your brother died choking on his own blood.</p>",
    "promptImage": "/assets/dorky_parents.png",
    "promptChoices": [["Oh sweet, I should read the note."], true]
},

{
    "name": "whos_dan",
    "promptContent": "<p>Dan is your brother. He taught you how to ride a bike and skip rocks. Sure he can be a jerk sometimes but he didn't tell mom and dad about that thing you did. He's dying now.</p>",
    "promptImage": "/assets/douch_dan.png",
    "promptChoices": [["talk to dan", "die with dan"], false]
},


{
    "name": "take_the_rib_to_the_eye",
    "promptContent": "<p>The shock of getting stabbed in the eye with a rib puts you into cardiac arrest and you die but not before you say, “an eye for a rib eye,”  pull the rib out and stab Dan with it.</p><p>Dan laughs, and says “Fool! A man can not die by his own rib, by striking me with mine own rib you have only made me stronger!” Who is dan talking to? Dead you? Dead defeated you? You're dead. Dan is dead now too.</p>",
    "promptImage": "/assets/douch_dan.png",
    "promptChoices": [["continue being dead"], false]
},


{
    "name": "die_with_dan",
    "promptContent": "<p>Not to be one upped by that asshole Dan, you will yourself to die before he does.</p>",
    "promptImage": "/assets/douch_dan.png",
    "promptChoices": [["continue being dead"], false]
},

{
    "name":"think_about_whether_or_not_paper_has_gluten_in_it",
    "promptContent": "<p>Gluten can be scary, and it seems to be everywhere, but luckily a quick google search on your  phone revealed to you that it's not in paper so you can relax.</p><p>Your doorbell rings again</p>",
    "promptImage": "/assets/sandwhich.png",
    "promptChoices": [["answer your door"], false]

},

{
    "name": "answer_your_door",
    "promptContent": "<p>You get out of bed, and walk to your living room.  There you see the bodies of your deceased relatives, it's kind of a pain to have to walk over them to answer the door.</p> <p>When you open the door you see a man in a trench coat and fedora with an advertisement for the Dark Knight, he introduced himself as     Detective Wallace, no relation to William Wallace. You tell him that you didn't assume there    was a relationship. Embarrassed, he quickly changes the subject.</p> <p>“Your family has been murdered, the feds are all over the case, but the thing is we already know    who did it. It was Jake O'Malley. Famed diamond thief and family killer. He lives two blocks    from here, we need you to give him the firmest talking to anybody has ever given.”</p>",
    "promptImage": "/assets/detective_wallce.png",
    "promptChoices": [["Let\'s robo this guy\'s cop!","Can\'t you see that I\'m in mourning?","What\'s this guy\'s problem?" ], true]
},

{
    "name": "Whats_this_guys_problem",
    "promptContent": "<p>\"It's hard to say for certain, but violence is sometimes symptomatic of a larger issue within a persons psychology. So really this could have happened for a number of reasons. Some might     try to interpret it as the tragic act of an individual tormented by isolation, others might say the     perpetrator was simply a sick, hate filled individual.\"</p><p>“ Or Maybe your family was annoying. The possibilities are endless.”</p>",
    "promptImage": "/assets/detective_wallce.png",
    "promptChoices": [["I don't like that explanation, but I respect it."], true] 
}, 

{
    "name": "Cant_you_see_that_Im_in_mourning",
    "promptContent": "<p>“Of course, and I am terribly sorry. The trouble is, however, that if you don't give this guy a firm talking to soon he might do it again.”</p>",
    "promptImage": "/assets/detective_wallce.png",
    "promptChoices": [["But how do we know that he'll listen to me?","Maybe I should give you a firm talking to", "I thought I had laid my firm talking to days to rest a long time ago, but very well."], true] 
},


{"name": "But_how_do_we_know_that_hell_listen_to_me",
"promptContent": "<p> \"What choice will he have?\" </p>",
"promptImage": "/assets/detective_wallce.png",
"promptChoices": [["Good point. Let me do some vocal exercises for a minute first."],true]
},


{
    "name": "Maybe_I_should_give_you_a_firm_talking_to",
    "promptContent": "<p>“As a P.I. my life can get pretty lonely. I live primarily in stinging obscurity. Having  somebody pay enough attention to me to actually bother to give me a lecture would mean a lot.   But before you do would you mind if,” the detective pauses to take off his hat, “I call you papa?” </p>",
    "promptImage": "/assets/detective_wallce.png",
    "promptChoices": [["You made this weird", "I'd be honored"],true]
},


{
    "name": "Id_be_honored",
    "promptContent": "<p>You spend the rest of the day lecturing the lonely detective about the meaning of loss . The detective's eyes sting with the salty tears of happiness, because now he's finally free.</p>",
    "promptImage": "/assets/detective_wallce.png",
    "promptChoices": [["Wow"], false]
},

{
    "name": "You_made_this_weird",
    "promptContent": "<p>“Right, of course. Please pardon my behavior. Do you think you can talk to that guy Jake  Though?”</p>",
    "promptImage": "/assets/detective_wallce.png",
    "promptChoices": [["fine"], true]
},


{
    "name": "you_made_weird_prompt",
    "promptContent": "<p>“Right, of course. Please pardon my behavior. Do you think you can talk to that guy Jake  Though?”</p>",
    "promptImage": "/assets/detective_wallce.png",
    "promptChoices": [["fine"], true]
},



{
    "name": "Lets_robo_this_guys_cop",
    "promptContent": "<p>So you march over to where he is like a bat out of hell. Nobody has ever given the kind of talking to that you are about to lay on his candy ass. When you find him he knows what's about to happen, and he knows he messed up. You sit him down and you explain how not okay murder is. He agrees and his eyes start to water. You don't want to push the point because he looks like he's going to be pretty hard on himself.</p>",
    "promptImage": "/assets/firm_talking_to.png",
    "promptChoices": [["Leave"], false]
},



{
    "name": "Good_point_Let_me_do_some_vocal_exercises_for_a_minute_first",
    "promptContent": "<p>After twenty eight minutes of vocal exercises you are ready to talk firmly. So you march over to where he is like a bat out of hell. Nobody has ever given the kind of talking to that you are about to lay on his candy ass. When you find him he knows what's about to happen, and he knows he messed up. You sit him down and you explain how not okay murder is. He agrees and his eyes start to water. You don't want to push the point because he looks like he's going to be pretty hard on himself.</p>",
    "promptImage": "/assets/firm_talking_to.png",
    "promptChoices": [["Leave"], false]
},

{
    "name": "I_dont_like_that_explanation_but_I_respect_it",
    "promptContent": "<p>You scream wildly into the sky. This beckons an eagle to you. The eagle tells you its name is Scwaaaaaaaa Kwloo, which means Bird of Fire in eagle scream tongue. You relate your tale to Scwaaaaaaaa Kwloo. Scwaaaaaaaa shows you kindness and understanding and offers to regurgitate some of his morning meal into your mouth. You decline but ask if Scwaaaaaaaa can instead fly you to where you need to be in order to give one hell of a firm talking to.</p> <p> So you fly over to where the murder is like a bat out of hell. Nobody has ever given the kind of talking to that you are about to lay on his candy ass. When you find him he knows what's about to happen, and he knows he messed up. You sit him down and you explain how not okay murder is. He agrees and his eyes start to water. You don't want to push the point because he looks like he's going to be pretty hard on himself. </p>",
    "promptImage": "/assets/firm_talking_to.png",
    "promptChoices": [["Leave"], false]
 
},

{
    "name": "fine",
    "promptContent": "<p>You scream wildly into the sky. This beckons an eagle to you. The eagle tells you its name is Scwaaaaaaaa Kwloo, which means Bird of Fire in eagle scream tongue. You relate your tale to Scwaaaaaaaa Kwloo. Scwaaaaaaaa shows you kindness and understanding and offers to regurgitate some of his morning meal into your mouth. You decline but ask if Scwaaaaaaaa can instead fly you to where you need to be in order to give one hell of a firm talking to.</p> <p> So you fly over to where the murder is like a bat out of hell. Nobody has ever given the kind of talking to that you are about to lay on his candy ass. When you find him he knows what's about to happen, and he knows he messed up. You sit him down and you explain how not okay murder is. He agrees and his eyes start to water. You don't want to push the point because he looks like he's going to be pretty hard on himself. </p>",
    "promptImage": "/assets/firm_talking_to.png",
    "promptChoices": [["Leave"], false]
},



{
    "name": "I_thought_I_had_laid_my_firm_talking_to_days_to_rest_a_long_time_ago_but_very_well",
    "promptContent": "<p>You scream wildly into the sky. This beckons an eagle to you. The eagle tells you its name is Scwaaaaaaaa Kwloo, which means Bird of Fire in eagle scream tongue. You relate your tale to Scwaaaaaaaa Kwloo. Scwaaaaaaaa shows you kindness and understanding and offers to regurgitate some of his morning meal into your mouth. You decline but ask if Scwaaaaaaaa can instead fly you to where you need to be in order to give one hell of a firm talking to.</p> <p> So you fly over to where the murder is like a bat out of hell. Nobody has ever given the kind of talking to that you are about to lay on his candy ass. When you find him he knows what's about to happen, and he knows he messed up. You sit him down and you explain how not okay murder is. He agrees and his eyes start to water. You don't want to push the point because he looks like he's going to be pretty hard on himself. </p>",
    "promptImage": "/assets/firm_talking_to.png",
    "promptChoices": [["Leave"], false]
},


{
    "name": "Wow",
    "promptContent": "Thanks for playing. If you found the person that murdered your family, far out, go you. If not, also far out. Come again next Christmas!",
    "promptImage": "/assets/finito.png",
    "promptChoices": [["<a href='/game/show' id='restart_game'>play again.</a>", "<a href='/welcome/index' id='exit_game'>forget this even happened.</a>"], false]

},


{
    "name": "That_is_an_accurate_description_of_my_personality_yeah",
    "promptContent": "Thanks for playing. If you found the person that murdered your family, far out, go you. If not, also far out. Come again next Christmas!",
    "promptImage": "/assets/finito.png",
    "promptChoices": [["<a href='/game/show' id='restart_game'>play again.</a>", "<a href='/welcome/index' id='exit_game'>forget this even happened.</a>"], false]
},


{
    "name": "I_miss_Jason",
    "promptContent": "Thanks for playing. If you found the person that murdered your family, far out, go you. If not, also far out. Come again next Christmas!",
    "promptImage": "/assets/finito.png",
    "promptChoices": [["<a href='/game/show' id='restart_game'>play again.</a>", "<a href='/welcome/index' id='exit_game'>forget this even happened.</a>"], false]

},


{
    "name": "hahaha",
    "promptContent": "Thanks for playing. If you found the person that murdered your family, far out, go you. If not, also far out. Come again next Christmas!",
    "promptImage": "/assets/finito.png",
    "promptChoices": [["<a href='/game/show' id='restart_game'>play again.</a>", "<a href='/welcome/index' id='exit_game'>forget this even happened.</a>"], false]

},


{
    "name": "Great_Being_an_employed_member_of_society_sounds_pretty_reasonable",
    "promptContent": "Thanks for playing. If you found the person that murdered your family, far out, go you. If not, also far out. Come again next Christmas!",
    "promptImage": "/assets/finito.png",
    "promptChoices": [["<a href='/game/show' id='restart_game'>play again.</a>", "<a href='/welcome/index' id='exit_game'>forget this even happened.</a>"], false]

},

{
    "name": "Fuck_me",
    "promptContent": "Thanks for playing. If you found the person that murdered your family, far out, go you. If not, also far out. Come again next Christmas!",
    "promptImage": "/assets/finito.png",
    "promptChoices": [["<a href='/game/show' id='restart_game'>play again.</a>", "<a href='/welcome/index' id='exit_game'>forget this even happened.</a>"], false]
},

{
    "name": "cool_that_was_sick_but_isnt_this_game_about_solving_the_murder_of_my_family_or_something",
    "promptContent": "Thanks for playing. If you found the person that murdered your family, far out, go you. If not, also far out. Come again next Christmas!",
    "promptImage": "/assets/finito.png",
    "promptChoices": [["<a href='/game/show' id='restart_game'>play again.</a>", "<a href='/welcome/index' id='exit_game'>forget this even happened.</a>"], false]
},




{
    "name": "Leave",
    "promptContent": "Thanks for playing. If you found the person that murdered your family, far out, go you. If not, also far out. Come again next Christmas!",
    "promptImage": "/assets/finito.png",
    "promptChoices": [["<a href='/game/show' id='restart_game'>play again.</a>", "<a href='/welcome/index' id='exit_game'>forget this even happened.</a>"], false]
},

{
    "name": "word",
    "promptContent": "Thanks for playing. If you found the person that murdered your family, far out, go you. If not, also far out. Come again next Christmas!",
    "promptImage": "/assets/finito.png",
    "promptChoices": [["<a href='/game/show' id='restart_game'>play again.</a>", "<a href='/welcome/index' id='exit_game'>forget this even happened.</a>"], false]
},



{
    "name": "fall_asleep",
    "promptContent": "Thanks for playing. If you found the person that murdered your family, far out, go you. If not, also far out. Come again next Christmas!",
    "promptImage": "/assets/finito.png",
    "promptChoices": [["<a href='/game/show' id='restart_game'>play again.</a>", "<a href='/welcome/index' id='exit_game'>forget this even happened.</a>"], false]
},


{
    "name": "continue_being_dead",
    "promptContent": "Thanks for playing. If you found the person that murdered your family, far out, go you. If not, also far out. Come again next Christmas!",
    "promptImage": "/assets/finito.png",
    "promptChoices": [["<a href='/game/show' id='restart_game'>play again.</a>", "<a href='/welcome/index' id='exit_game'>forget this even happened.</a>"], false]
}

];

var game_prompts = prompts
var new_choices = ""
var new_prompt = ""
var $prompt_id = ""

function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i=0; i<ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1);
        if (c.indexOf(name) == 0) return c.substring(name.length,c.length);
    }

}


// this renders the prompt associated with the choice you clicked 

var generate_prompt = function(prompt){
    $(".prompt_image img").attr("src", prompt["promptImage"])

    $(".current_prompt").html(prompt["promptContent"])
}


// this renders the choices associated with the particular prompt 

var generate_choices = function(choice_array){
    $("div.option_select").remove();
    $("div.option_select_dialogue").remove();

    if (choice_array[1] === false){
        document.cookie = "class=option_select"


    choice_array[0].forEach(function(choice){
        document.cookie = "id=" + choice.split(" ").join("_").replace(/[!*?*'*,*.*]/g, "")

        var div = document.createElement("div");
        div.setAttribute("class", getCookie("class"));
        div.setAttribute("id", getCookie("id"));
        div.setAttribute("value", "hola");
        // div.addEventListener = ('click', say_hello, false);
        div.innerHTML = choice;

       $(".options").append(div);

    });

    } else {
        document.cookie = "class=option_select_dialogue"

        choice_array[0].forEach(function(choice){
        document.cookie = "id=" + choice.split(" ").join("_").replace(/[!*?*'*,*.*]/g, "")

        var div = document.createElement("div");
        div.setAttribute("class", getCookie("class"));
        div.setAttribute("value", "hola");
        div.setAttribute("id", getCookie("id"));
        // div.addEventListener = ('click', say_hello, false);
        div.innerHTML = choice;
  
        $(".options").append(div);
    });

    }
}




$(".game.show").ready(function(){

if(!window.location.hash){
    generate_prompt(game_prompts[0])
    generate_choices(game_prompts[0]["promptChoices"]);


    $("body").on("click", "[id = restart_game]", function(e){
        e.preventDefault
        window.location.replace('/game/show')
    })



     $("body").on("click", "[id = exit_game]", function(e){
        e.preventDefault
        window.location.replace('/welcome/index')
    })


    $("body").on("click", "[value = hola]", function(e){
        e.preventDefault();

        $prompt_id = $(this).attr("id")
        window.location.hash = $prompt_id


        game_prompts.some(function(prompt){
           
            if(prompt["name"] === $prompt_id){
                new_prompt = prompt

                new_choices = prompt["promptChoices"]
            }
        })

        generate_prompt(new_prompt)
        generate_choices(new_choices)

    })

}else{

  $("body").on("click", "[id = restart_game]", function(e){
        e.preventDefault
        window.location.replace('/game/show')
    })


   $("body").on("click", "[id = exit_game]", function(e){
        e.preventDefault
        window.location.replace('/welcome/index')
    })

     game_prompts.some(function(prompt){
            if(prompt["name"] === window.location.hash.replace(/#/, "")){
                new_prompt = prompt

                new_choices = prompt["promptChoices"]
            }
        })

     generate_prompt(new_prompt)
     generate_choices(new_choices)

}

});


