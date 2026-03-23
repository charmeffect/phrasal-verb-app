const PHRASAL_VERBS = [
    // ========================================
    // TAKE
    // ========================================
    {
        verb: "take", particle: "off", phrase: "take off", category: "travel",
        meaning: "To leave the ground and begin to fly; also means to suddenly become successful or to remove clothing.",
        sentences: [
            "The plane is about to {verb} {blank}. Please fasten your seatbelts.",
            "Her career really {verb} {blank} after the viral video.",
            "It's warm inside — you can {verb} your coat {blank}.",
            "The rocket {verb} {blank} from the launch pad at dawn."
        ],
        options: ["off", "up", "over", "out"]
    },
    {
        verb: "take", particle: "over", phrase: "take over", category: "business",
        meaning: "To assume control or responsibility for something, especially from someone else.",
        sentences: [
            "The new CEO will {verb} {blank} the company next month.",
            "Can you {verb} {blank} for me while I'm on vacation?",
            "The rebel forces {verb} {blank} the capital city overnight.",
            "She {verb} {blank} the family business after her father retired."
        ],
        options: ["over", "off", "up", "in"]
    },
    {
        verb: "take", particle: "up", phrase: "take up", category: "daily",
        meaning: "To start a new hobby, activity, or interest; also to occupy space or time.",
        sentences: [
            "I decided to {verb} {blank} yoga to reduce my stress levels.",
            "He {verb} {blank} painting after he retired from teaching.",
            "This sofa {verb}s {blank} too much space in the living room.",
            "She {verb} {blank} running to train for the marathon."
        ],
        options: ["up", "on", "off", "out"]
    },
    {
        verb: "take", particle: "after", phrase: "take after", category: "daily",
        meaning: "To resemble a family member in appearance or character.",
        sentences: [
            "Everyone says the baby {verb}s {blank} her mother.",
            "He really {verb}s {blank} his grandfather — same sense of humor.",
            "She {verb}s {blank} her dad in terms of stubbornness.",
            "The twins {verb} {blank} their aunt — both love music."
        ],
        options: ["after", "over", "up", "on"]
    },
    {
        verb: "take", particle: "back", phrase: "take back", category: "emotion",
        meaning: "To retract or withdraw something you said; also to return a purchased item.",
        sentences: [
            "I'm sorry for what I said. I {verb} it {blank}.",
            "She {verb} {blank} the dress because it didn't fit.",
            "He wishes he could {verb} {blank} those hurtful words.",
            "The store refused to {verb} {blank} the opened package."
        ],
        options: ["back", "off", "out", "down"]
    },
    {
        verb: "take", particle: "in", phrase: "take in", category: "daily",
        meaning: "To understand or absorb information; also to deceive someone or to make clothing smaller.",
        sentences: [
            "There was so much information that I couldn't {verb} it all {blank}.",
            "Don't be {verb}n {blank} by his charm — he's not trustworthy.",
            "The tailor will {verb} {blank} the waist of the trousers.",
            "We sat quietly, {verb}ing {blank} the beautiful scenery."
        ],
        options: ["in", "up", "on", "out"]
    },
    {
        verb: "take", particle: "on", phrase: "take on", category: "business",
        meaning: "To accept a task or responsibility; also to hire or employ someone.",
        sentences: [
            "She decided to {verb} {blank} the challenging project.",
            "The company plans to {verb} {blank} fifty new employees.",
            "Don't {verb} {blank} more work than you can handle.",
            "He {verb} {blank} the role of team leader last month."
        ],
        options: ["on", "off", "up", "over"]
    },
    {
        verb: "take", particle: "out", phrase: "take out", category: "daily",
        meaning: "To remove something from a place; to go on a date with someone; to get a loan or insurance.",
        sentences: [
            "Could you {verb} {blank} the trash before you leave?",
            "He {verb} her {blank} to a fancy restaurant for her birthday.",
            "She {verb} {blank} a loan to pay for college tuition.",
            "The dentist had to {verb} {blank} two of his wisdom teeth."
        ],
        options: ["out", "off", "up", "in"]
    },
    {
        verb: "take", particle: "down", phrase: "take down", category: "daily",
        meaning: "To write something down; to remove something from a high position; to dismantle.",
        sentences: [
            "Let me {verb} {blank} your phone number.",
            "They {verb} {blank} the old building to make room for a park.",
            "Please {verb} {blank} the decorations after the party.",
            "The police {verb} {blank} the criminal organization."
        ],
        options: ["down", "up", "off", "out"]
    },
    {
        verb: "take", particle: "apart", phrase: "take apart", category: "daily",
        meaning: "To disassemble something into separate pieces.",
        sentences: [
            "He {verb} the engine {blank} to find the problem.",
            "The kids love to {verb} {blank} their toys to see how they work.",
            "She {verb} the old clock {blank} and cleaned every piece."
        ],
        options: ["apart", "away", "off", "down"]
    },

    // ========================================
    // GIVE
    // ========================================
    {
        verb: "give", particle: "up", phrase: "give up", category: "emotion",
        meaning: "To stop trying; to quit an activity or effort.",
        sentences: [
            "Don't {verb} {blank}! You're so close to finishing the marathon.",
            "She refused to {verb} {blank} even when things got really difficult.",
            "He {verb} {blank} smoking after twenty years.",
            "They {verb} {blank} trying to fix the old car and bought a new one."
        ],
        options: ["up", "in", "out", "away"]
    },
    {
        verb: "give", particle: "away", phrase: "give away", category: "daily",
        meaning: "To donate something for free; also to reveal a secret unintentionally.",
        sentences: [
            "She decided to {verb} {blank} all her old clothes to charity.",
            "Don't {verb} {blank} the ending of the movie!",
            "The company is {verb}ing {blank} free samples at the mall.",
            "His nervous smile {verb} {blank} the surprise."
        ],
        options: ["away", "up", "out", "back"]
    },
    {
        verb: "give", particle: "in", phrase: "give in", category: "business",
        meaning: "To surrender or yield; to stop resisting pressure or demands.",
        sentences: [
            "After hours of negotiation, they finally {verb} {blank} to our demands.",
            "The parents {verb} {blank} and let the kids stay up late.",
            "She refused to {verb} {blank} to peer pressure.",
            "He argued for an hour but eventually {verb} {blank}."
        ],
        options: ["in", "up", "out", "away"]
    },
    {
        verb: "give", particle: "out", phrase: "give out", category: "academic",
        meaning: "To distribute something to a group of people; also means to stop working or functioning.",
        sentences: [
            "The teacher will {verb} {blank} the exam papers at 9 AM.",
            "My legs {verb} {blank} after running for two hours.",
            "They're {verb}ing {blank} free tickets at the entrance.",
            "The battery finally {verb} {blank} after eight hours."
        ],
        options: ["out", "up", "away", "in"]
    },
    {
        verb: "give", particle: "back", phrase: "give back", category: "daily",
        meaning: "To return something to its owner; to contribute to the community.",
        sentences: [
            "Please {verb} {blank} the book when you're done reading it.",
            "He {verb} {blank} the money he had borrowed last month.",
            "She wants to {verb} {blank} to the community that raised her.",
            "The charity helps people {verb} {blank} to those in need."
        ],
        options: ["back", "away", "out", "up"]
    },
    {
        verb: "give", particle: "off", phrase: "give off", category: "daily",
        meaning: "To emit or produce something such as light, heat, smell, or a feeling.",
        sentences: [
            "The flowers {verb} {blank} a lovely fragrance.",
            "The heater {verb}s {blank} enough warmth for the whole room.",
            "The factory {verb}s {blank} toxic fumes every day.",
            "She {verb}s {blank} a very confident vibe."
        ],
        options: ["off", "out", "up", "away"]
    },

    // ========================================
    // MAKE
    // ========================================
    {
        verb: "make", particle: "up", phrase: "make up", category: "emotion",
        meaning: "To reconcile after a disagreement; also to invent a story or apply cosmetics.",
        sentences: [
            "They had a big fight, but they {verb} {blank} the next day.",
            "She {verb} {blank} an excuse for being late to class.",
            "The children love to {verb} {blank} stories before bed.",
            "It took them weeks to {verb} {blank} after the argument."
        ],
        options: ["up", "out", "off", "over"]
    },
    {
        verb: "make", particle: "out", phrase: "make out", category: "daily",
        meaning: "To see, hear, or understand something with difficulty; also to manage or succeed.",
        sentences: [
            "I can barely {verb} {blank} the sign in the fog.",
            "Can you {verb} {blank} what the speaker is saying?",
            "How did you {verb} {blank} on your final exams?",
            "I couldn't {verb} {blank} the handwriting on the old letter."
        ],
        options: ["out", "up", "off", "over"]
    },
    {
        verb: "make", particle: "up for", phrase: "make up for", category: "emotion",
        meaning: "To compensate for something bad that happened or a mistake you made.",
        sentences: [
            "He bought her flowers to {verb} {blank} forgetting their anniversary.",
            "She worked overtime to {verb} {blank} the lost time.",
            "Nothing can {verb} {blank} the years they spent apart.",
            "He's trying to {verb} {blank} his past mistakes."
        ],
        options: ["up for", "out", "off with", "over"]
    },
    {
        verb: "make", particle: "off", phrase: "make off", category: "daily",
        meaning: "To leave quickly, especially to escape after doing something wrong.",
        sentences: [
            "The thief {verb} {blank} with the jewelry before anyone noticed.",
            "The kids {verb} {blank} with the cookies from the kitchen.",
            "He {verb} {blank} as soon as the police arrived.",
            "Someone {verb} {blank} with my bicycle from the park."
        ],
        options: ["off", "up", "out", "away"]
    },
    {
        verb: "make", particle: "do", phrase: "make do", category: "daily",
        meaning: "To manage with whatever is available, even if it's not ideal.",
        sentences: [
            "We don't have butter, so we'll have to {verb} {blank} with margarine.",
            "When money was tight, they learned to {verb} {blank} with less.",
            "There's no printer, so we'll {verb} {blank} with handwritten notes.",
            "The team had to {verb} {blank} without their star player."
        ],
        options: ["do", "up", "off", "out"]
    },

    // ========================================
    // TURN
    // ========================================
    {
        verb: "turn", particle: "down", phrase: "turn down", category: "business",
        meaning: "To reject or refuse an offer, request, or invitation; also to reduce volume or temperature.",
        sentences: [
            "She had to {verb} {blank} the job offer because of the low salary.",
            "He {verb}ed {blank} the invitation to the party.",
            "Could you {verb} {blank} the music? It's too loud.",
            "The bank {verb}ed {blank} his loan application."
        ],
        options: ["down", "off", "up", "over"]
    },
    {
        verb: "turn", particle: "up", phrase: "turn up", category: "daily",
        meaning: "To arrive or appear, often unexpectedly; also to increase volume or temperature.",
        sentences: [
            "Guess who {verb}ed {blank} at the party last night!",
            "My lost keys {verb}ed {blank} under the couch.",
            "Can you {verb} {blank} the heat? It's freezing in here.",
            "He always {verb}s {blank} late to meetings."
        ],
        options: ["up", "down", "off", "out"]
    },
    {
        verb: "turn", particle: "out", phrase: "turn out", category: "daily",
        meaning: "To have a particular result or end in a certain way; also to produce or manufacture.",
        sentences: [
            "The event {verb}ed {blank} to be a huge success.",
            "Everything {verb}ed {blank} fine in the end.",
            "It {verb}ed {blank} that she was right all along.",
            "The factory {verb}s {blank} thousands of units per day."
        ],
        options: ["out", "up", "down", "off"]
    },
    {
        verb: "turn", particle: "off", phrase: "turn off", category: "daily",
        meaning: "To stop a device or machine from operating; also to cause someone to lose interest.",
        sentences: [
            "Please {verb} {blank} the lights when you leave the room.",
            "Don't forget to {verb} {blank} the oven after cooking.",
            "His rude behavior really {verb}s people {blank}.",
            "She {verb}ed {blank} the TV and went to bed."
        ],
        options: ["off", "on", "up", "down"]
    },
    {
        verb: "turn", particle: "on", phrase: "turn on", category: "daily",
        meaning: "To start a device or machine; also to suddenly attack or become hostile toward someone.",
        sentences: [
            "Can you {verb} {blank} the computer? I need to check my email.",
            "The dog suddenly {verb}ed {blank} its owner and bit him.",
            "{verb} {blank} the air conditioning — it's so hot in here.",
            "She {verb}ed {blank} the radio to listen to the news."
        ],
        options: ["on", "off", "up", "over"]
    },
    {
        verb: "turn", particle: "around", phrase: "turn around", category: "business",
        meaning: "To reverse direction; to improve a bad situation or make something successful.",
        sentences: [
            "The new manager was able to {verb} the company {blank}.",
            "We need to {verb} {blank} — we're going the wrong way.",
            "It took two years to {verb} {blank} the failing business.",
            "{verb} {blank} so I can see your new haircut!"
        ],
        options: ["around", "over", "up", "back"]
    },
    {
        verb: "turn", particle: "into", phrase: "turn into", category: "daily",
        meaning: "To change or transform from one thing into another.",
        sentences: [
            "The caterpillar will eventually {verb} {blank} a butterfly.",
            "The small startup {verb}ed {blank} a billion-dollar company.",
            "The rain {verb}ed {blank} snow as the temperature dropped.",
            "A simple disagreement {verb}ed {blank} a huge argument."
        ],
        options: ["into", "over", "up", "out"]
    },

    // ========================================
    // PUT
    // ========================================
    {
        verb: "put", particle: "off", phrase: "put off", category: "academic",
        meaning: "To postpone or delay doing something; also to discourage someone.",
        sentences: [
            "Stop {verb}ting {blank} your homework and do it now!",
            "We had to {verb} {blank} the meeting until next week.",
            "Don't {verb} {blank} going to the dentist — it'll only get worse.",
            "The bad weather {verb} us {blank} going to the beach."
        ],
        options: ["off", "up", "down", "out"]
    },
    {
        verb: "put", particle: "up with", phrase: "put up with", category: "emotion",
        meaning: "To tolerate or endure something unpleasant.",
        sentences: [
            "I can't {verb} {blank} this noise any longer!",
            "She {verb}s {blank} a lot of stress at work.",
            "How do you {verb} {blank} his constant complaining?",
            "The neighbors {verb} {blank} the construction noise for months."
        ],
        options: ["up with", "off", "down", "out"]
    },
    {
        verb: "put", particle: "together", phrase: "put together", category: "business",
        meaning: "To assemble or organize something by combining different parts or ideas.",
        sentences: [
            "Let's {verb} {blank} a plan for the presentation.",
            "She {verb} {blank} an amazing proposal in just one day.",
            "Can you help me {verb} {blank} this IKEA bookshelf?",
            "The team {verb} {blank} a comprehensive report overnight."
        ],
        options: ["together", "off", "up", "down"]
    },
    {
        verb: "put", particle: "on", phrase: "put on", category: "daily",
        meaning: "To place clothing on your body; also to organize an event or to pretend.",
        sentences: [
            "{verb} {blank} your jacket — it's cold outside.",
            "The school is {verb}ting {blank} a play this Friday.",
            "She's just {verb}ting {blank} an act — she's not really upset.",
            "He {verb} {blank} his glasses and started reading."
        ],
        options: ["on", "off", "up", "out"]
    },
    {
        verb: "put", particle: "away", phrase: "put away", category: "daily",
        meaning: "To place something in its proper storage location; also to save money.",
        sentences: [
            "Please {verb} {blank} your toys before dinner.",
            "She {verb}s {blank} a little money each month for retirement.",
            "He {verb} {blank} his phone during the meeting.",
            "The librarian asked me to {verb} {blank} the books on the shelf."
        ],
        options: ["away", "off", "up", "down"]
    },
    {
        verb: "put", particle: "out", phrase: "put out", category: "daily",
        meaning: "To extinguish a fire; to inconvenience someone; to publish or produce.",
        sentences: [
            "The firefighters managed to {verb} {blank} the fire quickly.",
            "I don't want to {verb} you {blank}, but could I stay the night?",
            "The band just {verb} {blank} a new album.",
            "Please {verb} {blank} your cigarette before entering the building."
        ],
        options: ["out", "off", "up", "away"]
    },
    {
        verb: "put", particle: "down", phrase: "put down", category: "daily",
        meaning: "To place something on a surface; to criticize someone; to write something down.",
        sentences: [
            "He {verb} {blank} his bag and sat on the bench.",
            "Stop {verb}ting her {blank} — she's doing her best.",
            "I need to {verb} {blank} a deposit on the apartment.",
            "She {verb} {blank} her thoughts in a journal every evening."
        ],
        options: ["down", "up", "off", "away"]
    },

    // ========================================
    // LOOK
    // ========================================
    {
        verb: "look", particle: "up", phrase: "look up", category: "academic",
        meaning: "To search for information in a reference source or database; also to improve.",
        sentences: [
            "I need to {verb} {blank} this word in the dictionary.",
            "You can {verb} {blank} the definition online.",
            "Things are finally {verb}ing {blank} for our team.",
            "She {verb}ed {blank} the restaurant's address on her phone."
        ],
        options: ["up", "out", "into", "after"]
    },
    {
        verb: "look", particle: "forward to", phrase: "look forward to", category: "emotion",
        meaning: "To feel excited and happy about something that is going to happen.",
        sentences: [
            "I'm {verb}ing {blank} the summer vacation!",
            "We're really {verb}ing {blank} seeing you again.",
            "She's {verb}ing {blank} starting her new job next week.",
            "The children are {verb}ing {blank} Christmas morning."
        ],
        options: ["forward to", "up to", "out for", "into"]
    },
    {
        verb: "look", particle: "into", phrase: "look into", category: "business",
        meaning: "To investigate or examine something in detail.",
        sentences: [
            "The police are {verb}ing {blank} the cause of the accident.",
            "We'll {verb} {blank} the matter and get back to you.",
            "She promised to {verb} {blank} the billing error.",
            "The committee will {verb} {blank} the allegations thoroughly."
        ],
        options: ["into", "up", "after", "out"]
    },
    {
        verb: "look", particle: "after", phrase: "look after", category: "daily",
        meaning: "To take care of someone or something.",
        sentences: [
            "Can you {verb} {blank} my cat while I'm on vacation?",
            "She {verb}s {blank} her elderly parents every weekend.",
            "Who's going to {verb} {blank} the children tonight?",
            "He promised to {verb} {blank} the house while we're away."
        ],
        options: ["after", "up", "into", "out"]
    },
    {
        verb: "look", particle: "out", phrase: "look out", category: "daily",
        meaning: "To be careful or watch for danger.",
        sentences: [
            "{verb} {blank}! There's a car coming!",
            "You should {verb} {blank} for pickpockets in crowded areas.",
            "{verb} {blank} for icy roads this morning.",
            "She told the kids to {verb} {blank} for each other at school."
        ],
        options: ["out", "up", "after", "into"]
    },
    {
        verb: "look", particle: "down on", phrase: "look down on", category: "emotion",
        meaning: "To regard someone as inferior; to feel superior to someone.",
        sentences: [
            "She {verb}s {blank} people who didn't go to college.",
            "Don't {verb} {blank} others just because they're different.",
            "He felt that his colleagues {verb}ed {blank} him.",
            "It's wrong to {verb} {blank} someone because of their job."
        ],
        options: ["down on", "up to", "after", "into"]
    },
    {
        verb: "look", particle: "up to", phrase: "look up to", category: "emotion",
        meaning: "To admire and respect someone.",
        sentences: [
            "She {verb}s {blank} her older sister as a role model.",
            "Many young players {verb} {blank} the famous athlete.",
            "He's always {verb}ed {blank} his grandfather.",
            "The students really {verb} {blank} their inspiring teacher."
        ],
        options: ["up to", "down on", "after", "out for"]
    },
    {
        verb: "look", particle: "over", phrase: "look over", category: "academic",
        meaning: "To examine or review something quickly.",
        sentences: [
            "Could you {verb} {blank} my essay before I submit it?",
            "The manager {verb}ed {blank} the contract carefully.",
            "Please {verb} {blank} these documents and sign at the bottom.",
            "I'll {verb} {blank} the proposal during lunch."
        ],
        options: ["over", "up", "into", "through"]
    },

    // ========================================
    // BREAK
    // ========================================
    {
        verb: "break", particle: "down", phrase: "break down", category: "daily",
        meaning: "To stop functioning (for a machine); to lose emotional control; to divide into smaller parts.",
        sentences: [
            "My car {verb} {blank} on the highway yesterday.",
            "She {verb} {blank} in tears when she heard the news.",
            "Can you {verb} {blank} the costs for each department?",
            "The washing machine {verb} {blank} again — we need a new one."
        ],
        options: ["down", "up", "out", "in"]
    },
    {
        verb: "break", particle: "out", phrase: "break out", category: "daily",
        meaning: "To start suddenly (fire, war, disease); also to escape from a place.",
        sentences: [
            "A fire {verb} {blank} in the building late at night.",
            "The prisoners tried to {verb} {blank} of jail.",
            "War {verb} {blank} between the two countries in 1939.",
            "A flu epidemic {verb} {blank} across the country."
        ],
        options: ["out", "down", "up", "in"]
    },
    {
        verb: "break", particle: "up", phrase: "break up", category: "emotion",
        meaning: "To end a romantic relationship; also to separate into smaller parts or to stop a fight.",
        sentences: [
            "They decided to {verb} {blank} after dating for three years.",
            "The band {verb} {blank} due to creative differences.",
            "The teacher had to {verb} {blank} the fight between the students.",
            "The ice on the river is starting to {verb} {blank}."
        ],
        options: ["up", "down", "out", "off"]
    },
    {
        verb: "break", particle: "in", phrase: "break in", category: "daily",
        meaning: "To enter by force; also to wear new shoes/clothes to make them comfortable.",
        sentences: [
            "Someone {verb} {blank} to our house while we were away.",
            "I need to {verb} {blank} these new boots — they're stiff.",
            "The burglars {verb} {blank} through the back window.",
            "It takes a week to {verb} {blank} a new pair of leather shoes."
        ],
        options: ["in", "out", "down", "up"]
    },
    {
        verb: "break", particle: "through", phrase: "break through", category: "business",
        meaning: "To overcome a barrier or obstacle; to achieve a significant advance.",
        sentences: [
            "Scientists finally {verb} {blank} with a new treatment for the disease.",
            "The team managed to {verb} {blank} the technical challenges.",
            "The sun {verb} {blank} the clouds after days of rain.",
            "She {verb} {blank} the glass ceiling in her industry."
        ],
        options: ["through", "down", "out", "up"]
    },

    // ========================================
    // COME
    // ========================================
    {
        verb: "come", particle: "across", phrase: "come across", category: "daily",
        meaning: "To find or encounter something or someone by chance; also to give an impression.",
        sentences: [
            "I {verb} {blank} an interesting article while browsing the web.",
            "We {verb} {blank} a beautiful little village during our hike.",
            "She {verb}s {blank} as very confident in interviews.",
            "I {verb} {blank} my old diary in the attic."
        ],
        options: ["across", "up", "out", "along"]
    },
    {
        verb: "come", particle: "up with", phrase: "come up with", category: "business",
        meaning: "To think of an idea, plan, or solution.",
        sentences: [
            "We need to {verb} {blank} a creative solution to this problem.",
            "She {verb} {blank} a brilliant marketing strategy.",
            "Can anyone {verb} {blank} a better name for the product?",
            "He always {verb}s {blank} the most original ideas."
        ],
        options: ["up with", "across", "along with", "out of"]
    },
    {
        verb: "come", particle: "up", phrase: "come up", category: "daily",
        meaning: "To arise or occur unexpectedly; to be mentioned or discussed.",
        sentences: [
            "Something urgent {verb} {blank} and I can't make it to dinner.",
            "That topic {verb}s {blank} in conversation all the time.",
            "A great opportunity {verb} {blank} at work yesterday.",
            "The issue {verb} {blank} during the board meeting."
        ],
        options: ["up", "out", "along", "across"]
    },
    {
        verb: "come", particle: "along", phrase: "come along", category: "daily",
        meaning: "To accompany someone; also to make progress or to arrive.",
        sentences: [
            "Do you want to {verb} {blank} to the concert with us?",
            "Your English is {verb}ing {blank} really well!",
            "A taxi finally {verb} {blank} after twenty minutes.",
            "She asked if her friend could {verb} {blank} too."
        ],
        options: ["along", "up", "across", "over"]
    },
    {
        verb: "come", particle: "back", phrase: "come back", category: "travel",
        meaning: "To return to a place; to become popular or fashionable again.",
        sentences: [
            "When are you {verb}ing {blank} from your trip?",
            "Vinyl records have {verb} {blank} in a big way.",
            "She promised to {verb} {blank} before midnight.",
            "Bell-bottom jeans are {verb}ing {blank} into fashion."
        ],
        options: ["back", "along", "around", "over"]
    },
    {
        verb: "come", particle: "out", phrase: "come out", category: "daily",
        meaning: "To be released or published; to become known; to emerge.",
        sentences: [
            "Her new book {verb}s {blank} next month.",
            "The truth finally {verb} {blank} after years of secrecy.",
            "The stain won't {verb} {blank} no matter what I try.",
            "The sun {verb} {blank} after the storm passed."
        ],
        options: ["out", "up", "along", "back"]
    },
    {
        verb: "come", particle: "down with", phrase: "come down with", category: "daily",
        meaning: "To become ill with a particular sickness.",
        sentences: [
            "I think I'm {verb}ing {blank} a cold.",
            "Half the office {verb} {blank} the flu last winter.",
            "She {verb} {blank} food poisoning after eating at that restaurant.",
            "He {verb} {blank} a fever the night before the exam."
        ],
        options: ["down with", "up with", "out with", "along with"]
    },

    // ========================================
    // RUN
    // ========================================
    {
        verb: "run", particle: "out of", phrase: "run out of", category: "daily",
        meaning: "To use up the entire supply of something; to have no more left.",
        sentences: [
            "We've {verb} {blank} milk. Can you buy some?",
            "The printer has {verb} {blank} ink again.",
            "I'm {verb}ning {blank} patience with this project.",
            "We {verb} {blank} time before finishing the test."
        ],
        options: ["out of", "into", "over", "up"]
    },
    {
        verb: "run", particle: "into", phrase: "run into", category: "daily",
        meaning: "To meet someone unexpectedly; also to collide with something or encounter problems.",
        sentences: [
            "I {verb} {blank} my old teacher at the supermarket today.",
            "We {verb} {blank} some problems during the installation.",
            "She {verb}s {blank} her ex-boyfriend everywhere she goes.",
            "The project {verb} {blank} unexpected delays."
        ],
        options: ["into", "out of", "over", "up"]
    },
    {
        verb: "run", particle: "over", phrase: "run over", category: "daily",
        meaning: "To review quickly; also to hit someone or something with a vehicle; to exceed a time limit.",
        sentences: [
            "Let me {verb} {blank} the schedule one more time.",
            "The meeting {verb} {blank} by thirty minutes.",
            "Be careful not to {verb} {blank} any animals on the road.",
            "Can we {verb} {blank} the main points before the presentation?"
        ],
        options: ["over", "into", "out of", "through"]
    },
    {
        verb: "run", particle: "away", phrase: "run away", category: "emotion",
        meaning: "To leave a place quickly to escape from something; to flee.",
        sentences: [
            "The dog {verb} {blank} when the fireworks started.",
            "She {verb} {blank} from home when she was sixteen.",
            "Don't {verb} {blank} from your problems — face them.",
            "The cat {verb}s {blank} every time someone rings the doorbell."
        ],
        options: ["away", "out", "off", "into"]
    },

    // ========================================
    // CARRY
    // ========================================
    {
        verb: "carry", particle: "out", phrase: "carry out", category: "academic",
        meaning: "To perform or complete a task, plan, or order.",
        sentences: [
            "The team will {verb} {blank} the experiment next week.",
            "The soldiers {verb}ied {blank} their orders without question.",
            "We need to {verb} {blank} a thorough investigation.",
            "She was asked to {verb} {blank} a market survey."
        ],
        options: ["out", "on", "off", "over"]
    },
    {
        verb: "carry", particle: "on", phrase: "carry on", category: "daily",
        meaning: "To continue doing something; to keep going.",
        sentences: [
            "Please {verb} {blank} with your work. I didn't mean to interrupt.",
            "Despite the rain, they {verb}ied {blank} with the outdoor event.",
            "She {verb}ied {blank} talking even though no one was listening.",
            "The show must {verb} {blank} — that's what they say in theater."
        ],
        options: ["on", "out", "off", "over"]
    },
    {
        verb: "carry", particle: "away", phrase: "carry away", category: "emotion",
        meaning: "To become overly excited or emotional; to lose control of one's feelings.",
        sentences: [
            "Don't get {verb}ied {blank} — we still need to be practical.",
            "She got {verb}ied {blank} by the excitement of the moment.",
            "He tends to get {verb}ied {blank} when talking about his hobby.",
            "The fans got {verb}ied {blank} and rushed onto the field."
        ],
        options: ["away", "on", "out", "off"]
    },

    // ========================================
    // FIGURE
    // ========================================
    {
        verb: "figure", particle: "out", phrase: "figure out", category: "academic",
        meaning: "To understand or solve something through thinking.",
        sentences: [
            "I can't {verb} {blank} how to solve this math problem.",
            "It took me a while to {verb} {blank} the new software.",
            "We need to {verb} {blank} a way to reduce expenses.",
            "She finally {verb}d {blank} what was causing the error."
        ],
        options: ["out", "up", "in", "on"]
    },

    // ========================================
    // SET
    // ========================================
    {
        verb: "set", particle: "up", phrase: "set up", category: "business",
        meaning: "To prepare, arrange, or establish something for use.",
        sentences: [
            "We need to {verb} {blank} the projector before the meeting starts.",
            "She {verb} {blank} her own business at the age of 25.",
            "Can you help me {verb} {blank} the new printer?",
            "They {verb} {blank} a fundraiser for the local school."
        ],
        options: ["up", "off", "out", "down"]
    },
    {
        verb: "set", particle: "off", phrase: "set off", category: "travel",
        meaning: "To begin a journey; also to cause something to explode or activate.",
        sentences: [
            "We {verb} {blank} early in the morning to avoid traffic.",
            "The loud noise {verb} {blank} the car alarm.",
            "They {verb} {blank} on their road trip across the country.",
            "The smoke {verb} {blank} the fire alarm in the building."
        ],
        options: ["off", "up", "out", "down"]
    },
    {
        verb: "set", particle: "back", phrase: "set back", category: "business",
        meaning: "To delay the progress of something; to cost someone a certain amount of money.",
        sentences: [
            "The bad weather {verb} the project {blank} by two weeks.",
            "That new laptop {verb} me {blank} over two thousand dollars.",
            "The injury {verb} {blank} her recovery by several months.",
            "The budget cuts could {verb} {blank} the entire program."
        ],
        options: ["back", "off", "up", "down"]
    },
    {
        verb: "set", particle: "out", phrase: "set out", category: "travel",
        meaning: "To begin a journey or trip; to intend or plan to do something.",
        sentences: [
            "She {verb} {blank} to prove everyone wrong — and she did.",
            "We {verb} {blank} at dawn to reach the summit by noon.",
            "He {verb} {blank} to write a novel and finished it in six months.",
            "The explorers {verb} {blank} on a dangerous expedition."
        ],
        options: ["out", "off", "up", "back"]
    },

    // ========================================
    // BRING
    // ========================================
    {
        verb: "bring", particle: "up", phrase: "bring up", category: "daily",
        meaning: "To mention or introduce a topic into a conversation; also to raise a child.",
        sentences: [
            "Don't {verb} {blank} that topic at dinner — it's too controversial.",
            "She was {verb} {blank} in a small town in the countryside.",
            "He always {verb}s {blank} politics at family gatherings.",
            "I hate to {verb} this {blank}, but we need to talk about the budget."
        ],
        options: ["up", "out", "back", "down"]
    },
    {
        verb: "bring", particle: "about", phrase: "bring about", category: "business",
        meaning: "To cause something to happen.",
        sentences: [
            "The new policy will {verb} {blank} significant changes in the industry.",
            "The revolution {verb} {blank} a new era of freedom.",
            "What {verb} {blank} the change in management?",
            "Technology has {verb} {blank} incredible improvements in healthcare."
        ],
        options: ["about", "up", "out", "back"]
    },
    {
        verb: "bring", particle: "back", phrase: "bring back", category: "emotion",
        meaning: "To return something; to cause memories or feelings to return.",
        sentences: [
            "This song {verb}s {blank} so many happy memories.",
            "Could you {verb} {blank} some milk from the store?",
            "The smell of cookies {verb}s {blank} memories of my grandmother.",
            "They're trying to {verb} {blank} the old tradition."
        ],
        options: ["back", "up", "out", "about"]
    },
    {
        verb: "bring", particle: "out", phrase: "bring out", category: "daily",
        meaning: "To produce and release a product; to emphasize a quality; to cause something to appear.",
        sentences: [
            "The company will {verb} {blank} a new smartphone next quarter.",
            "This dress really {verb}s {blank} the color of your eyes.",
            "Competition {verb}s {blank} the best in her.",
            "The chef {verb} {blank} the dessert as the grand finale."
        ],
        options: ["out", "up", "back", "about"]
    },
    {
        verb: "bring", particle: "down", phrase: "bring down", category: "business",
        meaning: "To cause to fall or collapse; to reduce a level or amount; to make someone sad.",
        sentences: [
            "The scandal {verb} {blank} the entire government.",
            "We need to {verb} {blank} our operating costs.",
            "Don't let his negativity {verb} you {blank}.",
            "The central bank is trying to {verb} {blank} inflation."
        ],
        options: ["down", "up", "out", "back"]
    },

    // ========================================
    // WORK
    // ========================================
    {
        verb: "work", particle: "out", phrase: "work out", category: "daily",
        meaning: "To exercise; to find a solution; to have a good result.",
        sentences: [
            "I {verb} {blank} at the gym three times a week.",
            "Don't worry, everything will {verb} {blank} in the end.",
            "We need to {verb} {blank} a compromise that suits everyone.",
            "Their business plan didn't {verb} {blank} as expected."
        ],
        options: ["out", "up", "on", "off"]
    },
    {
        verb: "work", particle: "on", phrase: "work on", category: "business",
        meaning: "To spend time improving or developing something.",
        sentences: [
            "She's been {verb}ing {blank} her thesis for six months.",
            "I need to {verb} {blank} my presentation skills.",
            "The developer is {verb}ing {blank} fixing the bug.",
            "He's {verb}ing {blank} a new painting in his studio."
        ],
        options: ["on", "out", "up", "off"]
    },
    {
        verb: "work", particle: "up", phrase: "work up", category: "emotion",
        meaning: "To gradually develop or build something (appetite, courage, enthusiasm).",
        sentences: [
            "The hike really {verb}ed {blank} my appetite.",
            "I'm trying to {verb} {blank} the courage to ask for a raise.",
            "Don't get so {verb}ed {blank} about it — it's not that serious.",
            "She needs to {verb} {blank} the nerve to speak in public."
        ],
        options: ["up", "out", "on", "off"]
    },

    // ========================================
    // CALL
    // ========================================
    {
        verb: "call", particle: "off", phrase: "call off", category: "daily",
        meaning: "To cancel an event or activity that was planned.",
        sentences: [
            "They had to {verb} {blank} the outdoor concert due to heavy rain.",
            "The wedding was {verb}ed {blank} at the last minute.",
            "The game was {verb}ed {blank} because of the snowstorm.",
            "She decided to {verb} {blank} the engagement."
        ],
        options: ["off", "up", "out", "back"]
    },
    {
        verb: "call", particle: "back", phrase: "call back", category: "daily",
        meaning: "To return a phone call; to ask someone to return.",
        sentences: [
            "I missed your call. I'll {verb} you {blank} in five minutes.",
            "The company {verb}ed me {blank} for a second interview.",
            "Can you ask him to {verb} me {blank} when he's free?",
            "She never {verb}ed {blank} after the first date."
        ],
        options: ["back", "off", "up", "out"]
    },
    {
        verb: "call", particle: "for", phrase: "call for", category: "business",
        meaning: "To require or demand something; to publicly ask for something.",
        sentences: [
            "The situation {verb}s {blank} immediate action.",
            "The protesters {verb}ed {blank} the resignation of the mayor.",
            "This recipe {verb}s {blank} two cups of sugar.",
            "The report {verb}s {blank} major reforms in education."
        ],
        options: ["for", "off", "on", "up"]
    },
    {
        verb: "call", particle: "on", phrase: "call on", category: "academic",
        meaning: "To ask someone to speak or contribute; to visit someone; to urge someone to do something.",
        sentences: [
            "The teacher {verb}ed {blank} me to answer the question.",
            "We should {verb} {blank} our neighbors to welcome them.",
            "The president {verb}ed {blank} citizens to vote.",
            "I was nervous when the professor {verb}ed {blank} me in class."
        ],
        options: ["on", "off", "up", "for"]
    },

    // ========================================
    // GO
    // ========================================
    {
        verb: "go", particle: "through", phrase: "go through", category: "emotion",
        meaning: "To experience something difficult or unpleasant; also to examine carefully.",
        sentences: [
            "She's {verb}ing {blank} a really tough time right now.",
            "Let's {verb} {blank} the contract one more time before signing.",
            "He {verb} {blank} all the files looking for the document.",
            "The country is {verb}ing {blank} an economic crisis."
        ],
        options: ["through", "over", "on", "out"]
    },
    {
        verb: "go", particle: "ahead", phrase: "go ahead", category: "business",
        meaning: "To proceed or begin to do something, often after getting permission.",
        sentences: [
            "The manager said we can {verb} {blank} with the project.",
            "{verb} {blank} and start without me — I'll catch up.",
            "If you want to leave early, {verb} {blank}.",
            "They decided to {verb} {blank} with the merger."
        ],
        options: ["ahead", "through", "over", "on"]
    },
    {
        verb: "go", particle: "on", phrase: "go on", category: "daily",
        meaning: "To continue; to happen or take place; to talk at length.",
        sentences: [
            "Please {verb} {blank} — I'm listening to your story.",
            "What's {verb}ing {blank} in the office today?",
            "The show must {verb} {blank} despite the technical problems.",
            "She can {verb} {blank} for hours about her favorite books."
        ],
        options: ["on", "ahead", "through", "out"]
    },
    {
        verb: "go", particle: "over", phrase: "go over", category: "academic",
        meaning: "To review or examine something carefully.",
        sentences: [
            "Let's {verb} {blank} the main points one more time.",
            "The teacher {verb} {blank} the answers with the class.",
            "Can we {verb} {blank} the budget figures again?",
            "She {verb} {blank} her notes before the presentation."
        ],
        options: ["over", "through", "on", "ahead"]
    },
    {
        verb: "go", particle: "off", phrase: "go off", category: "daily",
        meaning: "To explode; to sound an alarm; to stop working; food going bad.",
        sentences: [
            "The alarm {verb} {blank} at 6 AM every morning.",
            "The bomb {verb} {blank} without any warning.",
            "The milk has {verb} {blank} — it smells terrible.",
            "All the lights {verb} {blank} during the storm."
        ],
        options: ["off", "on", "out", "up"]
    },
    {
        verb: "go", particle: "back", phrase: "go back", category: "travel",
        meaning: "To return to a place or previous state.",
        sentences: [
            "I want to {verb} {blank} to Japan someday.",
            "There's no way to {verb} {blank} and change what happened.",
            "We should {verb} {blank} to the original plan.",
            "She decided to {verb} {blank} to school at age 40."
        ],
        options: ["back", "on", "over", "off"]
    },
    {
        verb: "go", particle: "down", phrase: "go down", category: "daily",
        meaning: "To decrease; to be remembered in a certain way; to happen.",
        sentences: [
            "Gas prices are expected to {verb} {blank} next month.",
            "This day will {verb} {blank} in history.",
            "What's {verb}ing {blank} at the party tonight?",
            "The temperature {verb}s {blank} significantly at night."
        ],
        options: ["down", "off", "on", "up"]
    },
    {
        verb: "go", particle: "with", phrase: "go with", category: "daily",
        meaning: "To choose or select; to match or suit something.",
        sentences: [
            "I think I'll {verb} {blank} the blue shirt today.",
            "Does this tie {verb} {blank} my suit?",
            "Let's {verb} {blank} your idea — it sounds better.",
            "Red wine {verb}s well {blank} steak."
        ],
        options: ["with", "for", "on", "by"]
    },

    // ========================================
    // PICK
    // ========================================
    {
        verb: "pick", particle: "up", phrase: "pick up", category: "daily",
        meaning: "To collect or buy something; to learn informally; to improve; to lift something.",
        sentences: [
            "Can you {verb} {blank} some groceries on your way home?",
            "She {verb}ed {blank} Spanish while living in Madrid.",
            "Business usually {verb}s {blank} during the holiday season.",
            "He {verb}ed {blank} the phone on the third ring."
        ],
        options: ["up", "out", "on", "off"]
    },
    {
        verb: "pick", particle: "out", phrase: "pick out", category: "daily",
        meaning: "To choose or select something from a group.",
        sentences: [
            "Can you help me {verb} {blank} a dress for the party?",
            "She {verb}ed {blank} the best apples from the basket.",
            "It's hard to {verb} {blank} a gift for someone who has everything.",
            "He {verb}ed {blank} a name for the new puppy."
        ],
        options: ["out", "up", "on", "off"]
    },
    {
        verb: "pick", particle: "on", phrase: "pick on", category: "emotion",
        meaning: "To bully or repeatedly criticize someone unfairly.",
        sentences: [
            "Stop {verb}ing {blank} your little brother!",
            "The bigger kids used to {verb} {blank} him at school.",
            "Why do you always {verb} {blank} me during meetings?",
            "She was {verb}ed {blank} for being different."
        ],
        options: ["on", "up", "out", "at"]
    },

    // ========================================
    // POINT
    // ========================================
    {
        verb: "point", particle: "out", phrase: "point out", category: "business",
        meaning: "To draw attention to something; to indicate or highlight.",
        sentences: [
            "He {verb}ed {blank} several errors in the report.",
            "She {verb}ed {blank} that the deadline had already passed.",
            "I'd like to {verb} {blank} a few important details.",
            "The guide {verb}ed {blank} the historical landmarks as we walked."
        ],
        options: ["out", "up", "at", "to"]
    },

    // ========================================
    // HOLD
    // ========================================
    {
        verb: "hold", particle: "on", phrase: "hold on", category: "daily",
        meaning: "To wait for a short time; also to grip something tightly.",
        sentences: [
            "{verb} {blank}, let me check my schedule.",
            "{verb} {blank} tight — the roller coaster is about to start!",
            "Can you {verb} {blank} for a moment? I'll be right back.",
            "{verb} {blank} — I think I left my keys in the car."
        ],
        options: ["on", "up", "off", "out"]
    },
    {
        verb: "hold", particle: "up", phrase: "hold up", category: "daily",
        meaning: "To delay; to rob at gunpoint; to remain strong or valid.",
        sentences: [
            "Sorry I'm late — I was {verb} {blank} in traffic.",
            "The old bridge is still {verb}ing {blank} after 100 years.",
            "Two men {verb} {blank} the bank this morning.",
            "How is she {verb}ing {blank} after the bad news?"
        ],
        options: ["up", "on", "off", "out"]
    },
    {
        verb: "hold", particle: "back", phrase: "hold back", category: "emotion",
        meaning: "To restrain or prevent from doing something; to not show emotions.",
        sentences: [
            "She tried to {verb} {blank} her tears during the speech.",
            "Don't {verb} {blank} — tell me what you really think.",
            "Fear of failure was {verb}ing him {blank} from trying.",
            "The dam {verb}s {blank} millions of gallons of water."
        ],
        options: ["back", "on", "up", "off"]
    },

    // ========================================
    // CHECK
    // ========================================
    {
        verb: "check", particle: "in", phrase: "check in", category: "travel",
        meaning: "To register upon arrival at a hotel, airport, or event.",
        sentences: [
            "We need to {verb} {blank} at the hotel before 3 PM.",
            "You can {verb} {blank} online 24 hours before your flight.",
            "She {verb}ed {blank} at the front desk and got her room key.",
            "Don't forget to {verb} {blank} for your appointment."
        ],
        options: ["in", "out", "up", "off"]
    },
    {
        verb: "check", particle: "out", phrase: "check out", category: "daily",
        meaning: "To examine or look at something interesting; to leave a hotel; to borrow a library book.",
        sentences: [
            "You should {verb} {blank} that new restaurant downtown.",
            "{verb} {blank} this amazing sunset!",
            "We have to {verb} {blank} of the hotel by noon.",
            "She {verb}ed {blank} three books from the library."
        ],
        options: ["out", "in", "up", "off"]
    },
    {
        verb: "check", particle: "up on", phrase: "check up on", category: "daily",
        meaning: "To verify the condition or progress of someone or something.",
        sentences: [
            "The doctor wants to {verb} {blank} you next week.",
            "She {verb}s {blank} her elderly neighbor every day.",
            "The manager {verb}s {blank} the staff regularly.",
            "I just called to {verb} {blank} how you're doing."
        ],
        options: ["up on", "out", "in", "off"]
    },

    // ========================================
    // DROP
    // ========================================
    {
        verb: "drop", particle: "off", phrase: "drop off", category: "travel",
        meaning: "To take someone or something to a place and leave them there; to fall asleep.",
        sentences: [
            "I'll {verb} you {blank} at the airport on my way to work.",
            "She {verb}s the kids {blank} at school every morning.",
            "Can you {verb} {blank} this package at the post office?",
            "He {verb}ped {blank} to sleep during the boring movie."
        ],
        options: ["off", "out", "in", "by"]
    },
    {
        verb: "drop", particle: "by", phrase: "drop by", category: "daily",
        meaning: "To visit someone informally and without planning ahead.",
        sentences: [
            "Feel free to {verb} {blank} anytime you're in the neighborhood.",
            "She {verb}ped {blank} the office to say hello.",
            "My parents {verb}ped {blank} unexpectedly last weekend.",
            "I'll {verb} {blank} after work to pick up the documents."
        ],
        options: ["by", "off", "in", "out"]
    },
    {
        verb: "drop", particle: "out", phrase: "drop out", category: "academic",
        meaning: "To leave school, college, or a course before finishing; to withdraw from an activity.",
        sentences: [
            "He {verb}ped {blank} of college to start his own company.",
            "Several runners {verb}ped {blank} of the race due to injuries.",
            "She almost {verb}ped {blank} of the program but decided to stay.",
            "Two participants {verb}ped {blank} at the last minute."
        ],
        options: ["out", "off", "by", "in"]
    },

    // ========================================
    // FILL
    // ========================================
    {
        verb: "fill", particle: "in", phrase: "fill in", category: "business",
        meaning: "To complete a form or document; to inform someone about something; to substitute for someone.",
        sentences: [
            "Please {verb} {blank} this form with your personal details.",
            "Can you {verb} me {blank} on what happened at the meeting?",
            "She {verb}ed {blank} for the receptionist who was sick.",
            "Make sure to {verb} {blank} all the required fields."
        ],
        options: ["in", "out", "up", "on"]
    },
    {
        verb: "fill", particle: "out", phrase: "fill out", category: "business",
        meaning: "To complete a form or application (especially American English).",
        sentences: [
            "You need to {verb} {blank} an application to apply.",
            "She {verb}ed {blank} the immigration forms at the airport.",
            "Please {verb} {blank} the questionnaire and return it by Friday.",
            "He spent an hour {verb}ing {blank} the tax forms."
        ],
        options: ["out", "in", "up", "on"]
    },
    {
        verb: "fill", particle: "up", phrase: "fill up", category: "daily",
        meaning: "To make something completely full.",
        sentences: [
            "I need to {verb} {blank} the car with gas before the road trip.",
            "The restaurant {verb}s {blank} quickly on Friday nights.",
            "She {verb}ed {blank} the bathtub with warm water.",
            "The parking lot {verb}ed {blank} by 8 AM."
        ],
        options: ["up", "in", "out", "on"]
    },

    // ========================================
    // CUT
    // ========================================
    {
        verb: "cut", particle: "down on", phrase: "cut down on", category: "daily",
        meaning: "To reduce the amount or frequency of something.",
        sentences: [
            "The doctor told him to {verb} {blank} sugar.",
            "I'm trying to {verb} {blank} coffee — I drink too much.",
            "We need to {verb} {blank} unnecessary expenses.",
            "She's {verb}ting {blank} social media to focus on studying."
        ],
        options: ["down on", "off", "out", "up"]
    },
    {
        verb: "cut", particle: "off", phrase: "cut off", category: "daily",
        meaning: "To disconnect or stop the supply of something; to interrupt someone; to isolate.",
        sentences: [
            "The electricity was {verb} {blank} because they didn't pay the bill.",
            "Don't {verb} me {blank} — let me finish speaking.",
            "The village was {verb} {blank} by the flooding.",
            "She {verb} {blank} contact with her toxic friends."
        ],
        options: ["off", "down", "out", "up"]
    },
    {
        verb: "cut", particle: "out", phrase: "cut out", category: "daily",
        meaning: "To stop doing something; to remove something by cutting; to be suited for.",
        sentences: [
            "You need to {verb} {blank} junk food from your diet.",
            "The kids were {verb}ting {blank} paper shapes for art class.",
            "He's not {verb} {blank} for this kind of work.",
            "{verb} it {blank}! Stop making so much noise!"
        ],
        options: ["out", "off", "down", "up"]
    },

    // ========================================
    // GET
    // ========================================
    {
        verb: "get", particle: "up", phrase: "get up", category: "daily",
        meaning: "To rise from bed; to stand up.",
        sentences: [
            "I have to {verb} {blank} at 6 AM for work every day.",
            "She {verb}s {blank} early to go jogging before breakfast.",
            "He fell down but quickly {verb} {blank} again.",
            "It's hard to {verb} {blank} on cold winter mornings."
        ],
        options: ["up", "on", "off", "out"]
    },
    {
        verb: "get", particle: "along", phrase: "get along", category: "emotion",
        meaning: "To have a good relationship with someone.",
        sentences: [
            "Do you {verb} {blank} with your coworkers?",
            "The two sisters don't {verb} {blank} very well.",
            "He {verb}s {blank} with everyone at the office.",
            "It's important to {verb} {blank} with your neighbors."
        ],
        options: ["along", "on", "up", "over"]
    },
    {
        verb: "get", particle: "over", phrase: "get over", category: "emotion",
        meaning: "To recover from an illness, shock, or difficult experience.",
        sentences: [
            "It took her months to {verb} {blank} the breakup.",
            "He's still trying to {verb} {blank} the flu.",
            "I can't {verb} {blank} how beautiful the sunset was!",
            "She never fully {verb} {blank} the loss of her pet."
        ],
        options: ["over", "along", "through", "on"]
    },
    {
        verb: "get", particle: "away", phrase: "get away", category: "travel",
        meaning: "To escape; to go on a short vacation.",
        sentences: [
            "We need to {verb} {blank} from the city for a few days.",
            "The thief managed to {verb} {blank} before the police arrived.",
            "They're planning to {verb} {blank} to the mountains this weekend.",
            "You can't {verb} {blank} with cheating on the exam."
        ],
        options: ["away", "off", "out", "along"]
    },
    {
        verb: "get", particle: "by", phrase: "get by", category: "daily",
        meaning: "To manage to survive or cope, often with limited resources.",
        sentences: [
            "It's hard to {verb} {blank} on such a low salary.",
            "We'll {verb} {blank} somehow — we always do.",
            "She {verb}s {blank} with just the basics.",
            "Students often have to {verb} {blank} on very little money."
        ],
        options: ["by", "on", "along", "through"]
    },
    {
        verb: "get", particle: "rid of", phrase: "get rid of", category: "daily",
        meaning: "To eliminate or dispose of something unwanted.",
        sentences: [
            "We need to {verb} {blank} all this old furniture.",
            "How do I {verb} {blank} these annoying pop-up ads?",
            "She wants to {verb} {blank} her old car and buy a new one.",
            "It's time to {verb} {blank} the clutter in the garage."
        ],
        options: ["rid of", "away from", "out of", "off"]
    },
    {
        verb: "get", particle: "through", phrase: "get through", category: "emotion",
        meaning: "To successfully finish or endure something difficult; to make contact by phone.",
        sentences: [
            "I don't know how I'll {verb} {blank} this week.",
            "She helped me {verb} {blank} the toughest period of my life.",
            "I tried calling but couldn't {verb} {blank} to anyone.",
            "We'll {verb} {blank} this together — don't worry."
        ],
        options: ["through", "over", "by", "along"]
    },
    {
        verb: "get", particle: "on", phrase: "get on", category: "travel",
        meaning: "To board a vehicle (bus, train, plane); to have a relationship; to make progress.",
        sentences: [
            "We need to {verb} {blank} the next bus to downtown.",
            "How are you {verb}ting {blank} with your new project?",
            "She {verb}s {blank} well with her mother-in-law.",
            "Hurry up or we won't {verb} {blank} the train in time!"
        ],
        options: ["on", "off", "in", "up"]
    },
    {
        verb: "get", particle: "off", phrase: "get off", category: "travel",
        meaning: "To leave a vehicle (bus, train, plane); to finish work for the day.",
        sentences: [
            "We need to {verb} {blank} at the next stop.",
            "What time do you {verb} {blank} work today?",
            "She {verb}s {blank} the train at Central Station.",
            "He {verb}s {blank} early on Fridays."
        ],
        options: ["off", "on", "out", "up"]
    },
    {
        verb: "get", particle: "back", phrase: "get back", category: "daily",
        meaning: "To return to a place; to receive something that was lost or taken.",
        sentences: [
            "When did you {verb} {blank} from your vacation?",
            "I hope to {verb} {blank} my security deposit.",
            "We need to {verb} {blank} to the main topic.",
            "She {verb} {blank} home late last night."
        ],
        options: ["back", "on", "off", "up"]
    },
    {
        verb: "get", particle: "out", phrase: "get out", category: "daily",
        meaning: "To leave a place; to become known (a secret or news).",
        sentences: [
            "{verb} {blank} of here! This building is on fire!",
            "The secret {verb} {blank} and everyone found out.",
            "She needs to {verb} {blank} more and meet new people.",
            "We barely {verb} {blank} of the building before it collapsed."
        ],
        options: ["out", "off", "away", "back"]
    },
    {
        verb: "get", particle: "together", phrase: "get together", category: "daily",
        meaning: "To meet socially; to collect or gather things.",
        sentences: [
            "We should {verb} {blank} for coffee sometime.",
            "The family {verb}s {blank} every Thanksgiving.",
            "Let's {verb} {blank} this weekend and work on the project.",
            "Old friends {verb} {blank} to celebrate the reunion."
        ],
        options: ["together", "along", "around", "on"]
    },

    // ========================================
    // KEEP
    // ========================================
    {
        verb: "keep", particle: "up", phrase: "keep up", category: "academic",
        meaning: "To maintain the same speed or level as others; to continue doing something.",
        sentences: [
            "She walks so fast — I can barely {verb} {blank}!",
            "You're doing great — {verb} {blank} the good work!",
            "It's hard to {verb} {blank} with all the latest technology.",
            "He struggled to {verb} {blank} with the rest of the class."
        ],
        options: ["up", "on", "out", "off"]
    },
    {
        verb: "keep", particle: "on", phrase: "keep on", category: "emotion",
        meaning: "To continue doing something without stopping.",
        sentences: [
            "She {verb}s {blank} making the same mistake over and over.",
            "{verb} {blank} trying — you'll get it eventually!",
            "He {verb}t {blank} talking even after the bell rang.",
            "The rain {verb}t {blank} falling all day long."
        ],
        options: ["on", "up", "off", "out"]
    },
    {
        verb: "keep", particle: "up with", phrase: "keep up with", category: "daily",
        meaning: "To stay informed about something; to maintain the same pace as someone.",
        sentences: [
            "It's hard to {verb} {blank} all the news these days.",
            "She reads every day to {verb} {blank} current events.",
            "The small company can't {verb} {blank} the big competitors.",
            "I watch documentaries to {verb} {blank} scientific discoveries."
        ],
        options: ["up with", "on with", "out of", "away from"]
    },
    {
        verb: "keep", particle: "away", phrase: "keep away", category: "daily",
        meaning: "To stay at a distance; to prevent someone from going near something.",
        sentences: [
            "{verb} {blank} from the edge of the cliff!",
            "The fence is there to {verb} animals {blank}.",
            "She told the children to {verb} {blank} from the hot stove.",
            "The garlic is supposed to {verb} mosquitoes {blank}."
        ],
        options: ["away", "off", "out", "back"]
    },

    // ========================================
    // THROW
    // ========================================
    {
        verb: "throw", particle: "away", phrase: "throw away", category: "daily",
        meaning: "To discard something; to waste an opportunity.",
        sentences: [
            "Don't {verb} {blank} that box — I might need it.",
            "She {verb} {blank} the expired food from the fridge.",
            "He {verb} {blank} his chance at a scholarship by not studying.",
            "We {verb} {blank} too much plastic every day."
        ],
        options: ["away", "out", "off", "up"]
    },
    {
        verb: "throw", particle: "up", phrase: "throw up", category: "daily",
        meaning: "To vomit; to produce something quickly.",
        sentences: [
            "The child {verb} {blank} after eating too much candy.",
            "I felt like I was going to {verb} {blank} on the rollercoaster.",
            "The food poisoning made everyone {verb} {blank}.",
            "She {verb} {blank} after the long car ride on the winding road."
        ],
        options: ["up", "away", "out", "off"]
    },
    {
        verb: "throw", particle: "out", phrase: "throw out", category: "daily",
        meaning: "To discard; to reject an idea; to force someone to leave.",
        sentences: [
            "It's time to {verb} {blank} these old magazines.",
            "The judge {verb} {blank} the case due to lack of evidence.",
            "He was {verb}n {blank} of the bar for being too loud.",
            "She {verb} {blank} the old flowers and bought fresh ones."
        ],
        options: ["out", "away", "up", "off"]
    },

    // ========================================
    // PULL
    // ========================================
    {
        verb: "pull", particle: "off", phrase: "pull off", category: "business",
        meaning: "To succeed in doing something difficult or unexpected.",
        sentences: [
            "She managed to {verb} {blank} the surprise party perfectly.",
            "I can't believe they {verb}ed {blank} such a complex deal.",
            "Do you think we can {verb} {blank} this project in two weeks?",
            "He somehow {verb}ed {blank} a perfect score on the exam."
        ],
        options: ["off", "out", "up", "through"]
    },
    {
        verb: "pull", particle: "over", phrase: "pull over", category: "travel",
        meaning: "To stop a vehicle at the side of the road.",
        sentences: [
            "The police officer asked him to {verb} {blank}.",
            "We should {verb} {blank} and check the map.",
            "She {verb}ed {blank} to answer her phone.",
            "The truck {verb}ed {blank} to let the ambulance pass."
        ],
        options: ["over", "off", "up", "out"]
    },
    {
        verb: "pull", particle: "through", phrase: "pull through", category: "emotion",
        meaning: "To survive a serious illness or difficult situation.",
        sentences: [
            "The doctors say he'll {verb} {blank} after the surgery.",
            "The company managed to {verb} {blank} the financial crisis.",
            "She's strong — I know she'll {verb} {blank}.",
            "With everyone's support, we'll {verb} {blank} this tough time."
        ],
        options: ["through", "off", "over", "out"]
    },

    // ========================================
    // HAND
    // ========================================
    {
        verb: "hand", particle: "in", phrase: "hand in", category: "academic",
        meaning: "To submit work or a document to someone in authority.",
        sentences: [
            "Please {verb} {blank} your assignments by Friday.",
            "She forgot to {verb} {blank} her homework on time.",
            "All reports must be {verb}ed {blank} before the deadline.",
            "He {verb}ed {blank} his resignation letter yesterday."
        ],
        options: ["in", "out", "over", "off"]
    },
    {
        verb: "hand", particle: "out", phrase: "hand out", category: "academic",
        meaning: "To distribute something to a group of people.",
        sentences: [
            "The teacher {verb}ed {blank} the worksheets to the class.",
            "Volunteers {verb}ed {blank} water bottles at the marathon.",
            "She {verb}s {blank} business cards at every networking event.",
            "They {verb}ed {blank} free samples at the supermarket."
        ],
        options: ["out", "in", "over", "off"]
    },
    {
        verb: "hand", particle: "over", phrase: "hand over", category: "business",
        meaning: "To give something to someone, especially when forced or reluctant.",
        sentences: [
            "The thief demanded that she {verb} {blank} her wallet.",
            "He had to {verb} {blank} control of the project to his colleague.",
            "Please {verb} {blank} all electronic devices before the exam.",
            "She {verb}ed {blank} the keys to the new owner."
        ],
        options: ["over", "in", "out", "off"]
    },

    // ========================================
    // STAND
    // ========================================
    {
        verb: "stand", particle: "up", phrase: "stand up", category: "daily",
        meaning: "To rise to a standing position; to fail to meet someone for a date.",
        sentences: [
            "Please {verb} {blank} when the judge enters the room.",
            "He {verb} me {blank} — he never showed up for our date!",
            "She {verb}s {blank} for what she believes in.",
            "Everyone {verb} {blank} and applauded the performance."
        ],
        options: ["up", "out", "by", "for"]
    },
    {
        verb: "stand", particle: "out", phrase: "stand out", category: "business",
        meaning: "To be noticeable or easily seen; to be much better than others.",
        sentences: [
            "Her bright red dress made her {verb} {blank} in the crowd.",
            "One candidate clearly {verb}s {blank} from the rest.",
            "The quality of their products {verb}s {blank}.",
            "His essay {verb} {blank} as the best in the class."
        ],
        options: ["out", "up", "by", "for"]
    },
    {
        verb: "stand", particle: "for", phrase: "stand for", category: "business",
        meaning: "To represent or mean something; to tolerate or accept.",
        sentences: [
            "What does the abbreviation NASA {verb} {blank}?",
            "I won't {verb} {blank} this kind of behavior!",
            "The company {verb}s {blank} quality and innovation.",
            "The letters UN {verb} {blank} United Nations."
        ],
        options: ["for", "out", "up", "by"]
    },

    // ========================================
    // PAY
    // ========================================
    {
        verb: "pay", particle: "off", phrase: "pay off", category: "business",
        meaning: "To finish paying a debt; for an effort to finally bring good results.",
        sentences: [
            "She finally {verb}ed {blank} her student loans after ten years.",
            "All the hard work is starting to {verb} {blank}.",
            "It took five years to {verb} {blank} the mortgage.",
            "His patience {verb}ed {blank} when he got the promotion."
        ],
        options: ["off", "back", "up", "out"]
    },
    {
        verb: "pay", particle: "back", phrase: "pay back", category: "daily",
        meaning: "To return money that you owe; to get revenge on someone.",
        sentences: [
            "I promise to {verb} you {blank} by the end of the month.",
            "She {verb}ed {blank} every cent she borrowed.",
            "I'll {verb} you {blank} for what you did to me.",
            "He still hasn't {verb}ed me {blank} for the concert tickets."
        ],
        options: ["back", "off", "up", "out"]
    },

    // ========================================
    // SHOW
    // ========================================
    {
        verb: "show", particle: "up", phrase: "show up", category: "daily",
        meaning: "To arrive or appear, especially unexpectedly or late.",
        sentences: [
            "He didn't {verb} {blank} for the meeting this morning.",
            "She always {verb}s {blank} late to everything.",
            "A hundred people {verb}ed {blank} at the protest.",
            "I waited for an hour, but he never {verb}ed {blank}."
        ],
        options: ["up", "off", "out", "around"]
    },
    {
        verb: "show", particle: "off", phrase: "show off", category: "emotion",
        meaning: "To display something proudly; to try to impress others.",
        sentences: [
            "He loves to {verb} {blank} his expensive car.",
            "Stop {verb}ing {blank} — nobody is impressed.",
            "She was {verb}ing {blank} her engagement ring to everyone.",
            "The kids were {verb}ing {blank} their new toys at school."
        ],
        options: ["off", "up", "out", "around"]
    },
    {
        verb: "show", particle: "around", phrase: "show around", category: "travel",
        meaning: "To give someone a tour of a place.",
        sentences: [
            "Let me {verb} you {blank} the office.",
            "She {verb}ed us {blank} the city on our first day.",
            "The real estate agent {verb}ed them {blank} the house.",
            "He offered to {verb} the new employees {blank}."
        ],
        options: ["around", "up", "off", "out"]
    },

    // ========================================
    // THINK
    // ========================================
    {
        verb: "think", particle: "over", phrase: "think over", category: "business",
        meaning: "To consider something carefully before making a decision.",
        sentences: [
            "I need some time to {verb} {blank} your offer.",
            "Please {verb} it {blank} and let me know tomorrow.",
            "She {verb} {blank} the proposal for several days.",
            "Don't rush — {verb} it {blank} before you decide."
        ],
        options: ["over", "through", "about", "up"]
    },
    {
        verb: "think", particle: "up", phrase: "think up", category: "business",
        meaning: "To invent or create an idea through thinking.",
        sentences: [
            "Who {verb} {blank} this brilliant plan?",
            "We need to {verb} {blank} a new approach.",
            "She always {verb}s {blank} the most creative solutions.",
            "He {verb} {blank} an excuse to leave the party early."
        ],
        options: ["up", "over", "out", "through"]
    },

    // ========================================
    // SORT
    // ========================================
    {
        verb: "sort", particle: "out", phrase: "sort out", category: "business",
        meaning: "To resolve a problem; to organize or arrange things.",
        sentences: [
            "We need to {verb} {blank} this issue before the launch.",
            "Can you {verb} {blank} the files on your desk?",
            "Don't worry, I'll {verb} everything {blank}.",
            "They {verb}ed {blank} the misunderstanding quickly."
        ],
        options: ["out", "through", "up", "off"]
    },

    // ========================================
    // FIND
    // ========================================
    {
        verb: "find", particle: "out", phrase: "find out", category: "daily",
        meaning: "To discover information; to learn something new.",
        sentences: [
            "I just {verb} {blank} that she's getting married!",
            "We need to {verb} {blank} what time the movie starts.",
            "She {verb} {blank} the truth about her family's past.",
            "How did you {verb} {blank} about this restaurant?"
        ],
        options: ["out", "up", "off", "about"]
    },

    // ========================================
    // CLOSE
    // ========================================
    {
        verb: "close", particle: "down", phrase: "close down", category: "business",
        meaning: "To permanently shut a business or establishment.",
        sentences: [
            "The factory {verb}d {blank} after years of financial losses.",
            "Many small shops have {verb}d {blank} due to online competition.",
            "The government {verb}d {blank} the illegal operation.",
            "If sales don't improve, they might {verb} {blank} the store."
        ],
        options: ["down", "off", "out", "up"]
    },

    // ========================================
    // BLOW
    // ========================================
    {
        verb: "blow", particle: "up", phrase: "blow up", category: "daily",
        meaning: "To explode; to suddenly become very angry; to become very popular quickly.",
        sentences: [
            "The balloon will {verb} {blank} if you put too much air in it.",
            "He {verb} {blank} when he found out about the lie.",
            "That song {verb} {blank} on social media overnight.",
            "The old bridge was {verb}n {blank} during the demolition."
        ],
        options: ["up", "out", "off", "away"]
    },
    {
        verb: "blow", particle: "out", phrase: "blow out", category: "daily",
        meaning: "To extinguish by blowing; a tire suddenly bursting.",
        sentences: [
            "Make a wish and {verb} {blank} the candles!",
            "The tire {verb} {blank} while we were on the highway.",
            "She {verb} {blank} all the candles on her birthday cake.",
            "The storm {verb} {blank} the pilot light on the furnace."
        ],
        options: ["out", "up", "off", "away"]
    },

    // ========================================
    // PASS
    // ========================================
    {
        verb: "pass", particle: "away", phrase: "pass away", category: "emotion",
        meaning: "To die (a polite or euphemistic way to say someone died).",
        sentences: [
            "Her grandmother {verb}ed {blank} peacefully in her sleep.",
            "The legendary actor {verb}ed {blank} at the age of 90.",
            "He {verb}ed {blank} after a long battle with illness.",
            "We were saddened to hear that she {verb}ed {blank}."
        ],
        options: ["away", "on", "out", "off"]
    },
    {
        verb: "pass", particle: "out", phrase: "pass out", category: "daily",
        meaning: "To faint or lose consciousness; also to distribute something.",
        sentences: [
            "She {verb}ed {blank} from the heat during the outdoor ceremony.",
            "The teacher {verb}ed {blank} the test papers to the students.",
            "He nearly {verb}ed {blank} when he saw the hospital bill.",
            "Volunteers {verb}ed {blank} flyers on the street corner."
        ],
        options: ["out", "away", "on", "off"]
    },
    {
        verb: "pass", particle: "on", phrase: "pass on", category: "daily",
        meaning: "To give information or a message to someone else; to decline an offer politely.",
        sentences: [
            "Could you {verb} {blank} this message to your manager?",
            "She {verb}ed {blank} the dessert — she was too full.",
            "I'll {verb} your feedback {blank} to the development team.",
            "He decided to {verb} {blank} the job offer."
        ],
        options: ["on", "out", "away", "off"]
    },

    // ========================================
    // SETTLE
    // ========================================
    {
        verb: "settle", particle: "down", phrase: "settle down", category: "daily",
        meaning: "To become calm; to start living a stable life (often with a family).",
        sentences: [
            "The kids need to {verb} {blank} before bedtime.",
            "After years of traveling, he decided to {verb} {blank}.",
            "{verb} {blank}, everyone — the meeting is about to start.",
            "She wants to {verb} {blank} and start a family."
        ],
        options: ["down", "in", "up", "on"]
    },
    {
        verb: "settle", particle: "for", phrase: "settle for", category: "daily",
        meaning: "To accept something that is less than ideal.",
        sentences: [
            "Don't {verb} {blank} less than you deserve.",
            "We couldn't find a hotel, so we {verb}d {blank} a hostel.",
            "She refuses to {verb} {blank} a boring job.",
            "They wanted a house but had to {verb} {blank} an apartment."
        ],
        options: ["for", "down", "in", "on"]
    },

    // ========================================
    // STICK
    // ========================================
    {
        verb: "stick", particle: "to", phrase: "stick to", category: "daily",
        meaning: "To continue doing something as planned; to not change from something.",
        sentences: [
            "She decided to {verb} {blank} her original plan.",
            "Let's {verb} {blank} the facts during this discussion.",
            "It's hard to {verb} {blank} a diet during the holidays.",
            "He always {verb}s {blank} his promises."
        ],
        options: ["to", "with", "on", "by"]
    },
    {
        verb: "stick", particle: "out", phrase: "stick out", category: "daily",
        meaning: "To be noticeable; to extend beyond a surface; to endure something difficult.",
        sentences: [
            "His bright orange hat {verb}s {blank} in any crowd.",
            "A nail was {verb}ing {blank} of the wall.",
            "She decided to {verb} it {blank} and finish the difficult course.",
            "Your shirt is {verb}ing {blank} of your pants."
        ],
        options: ["out", "to", "up", "with"]
    },

    // ========================================
    // SHUT
    // ========================================
    {
        verb: "shut", particle: "down", phrase: "shut down", category: "business",
        meaning: "To close permanently; to turn off a computer or machine; to stop someone from speaking.",
        sentences: [
            "The government {verb} {blank} the illegal website.",
            "Please {verb} {blank} your computers before leaving.",
            "The factory was {verb} {blank} due to safety violations.",
            "She {verb} {blank} his argument with one simple fact."
        ],
        options: ["down", "off", "up", "out"]
    },
    {
        verb: "shut", particle: "up", phrase: "shut up", category: "emotion",
        meaning: "To stop talking (informal/rude); to make someone stop talking.",
        sentences: [
            "I wish he would just {verb} {blank} for five minutes.",
            "She told the noisy kids to {verb} {blank}.",
            "He finally {verb} {blank} when the teacher walked in.",
            "The shocking news made everyone {verb} {blank} immediately."
        ],
        options: ["up", "down", "off", "out"]
    },

    // ========================================
    // HANG
    // ========================================
    {
        verb: "hang", particle: "out", phrase: "hang out", category: "daily",
        meaning: "To spend time casually with friends.",
        sentences: [
            "We usually {verb} {blank} at the coffee shop after school.",
            "Do you want to {verb} {blank} this weekend?",
            "She likes to {verb} {blank} with her college friends.",
            "They {verb} {blank} at the park every Saturday."
        ],
        options: ["out", "up", "on", "around"]
    },
    {
        verb: "hang", particle: "up", phrase: "hang up", category: "daily",
        meaning: "To end a phone call; to put something on a hook or hanger.",
        sentences: [
            "She {verb} {blank} the phone before I could explain.",
            "Please {verb} {blank} your coat in the closet.",
            "He got angry and {verb} {blank} on me.",
            "Don't forget to {verb} {blank} your towel after your shower."
        ],
        options: ["up", "out", "on", "off"]
    },
    {
        verb: "hang", particle: "on", phrase: "hang on", category: "daily",
        meaning: "To wait for a short time; to hold tightly; to persevere.",
        sentences: [
            "{verb} {blank} — I'll be right there!",
            "{verb} {blank} to the railing as you go down the stairs.",
            "Just {verb} {blank} a little longer — help is on the way.",
            "{verb} {blank}, let me write that down."
        ],
        options: ["on", "up", "out", "in"]
    },

    // ========================================
    // BACK
    // ========================================
    {
        verb: "back", particle: "up", phrase: "back up", category: "daily",
        meaning: "To support someone; to make a copy of data; to move in reverse.",
        sentences: [
            "Make sure to {verb} {blank} your files regularly.",
            "I'll {verb} you {blank} if anyone questions your decision.",
            "Can you {verb} {blank} a little? You're too close to my car.",
            "She {verb}ed {blank} her argument with solid evidence."
        ],
        options: ["up", "off", "out", "down"]
    },
    {
        verb: "back", particle: "down", phrase: "back down", category: "business",
        meaning: "To withdraw from a position or argument; to stop insisting on something.",
        sentences: [
            "He refused to {verb} {blank} even under pressure.",
            "The company {verb}ed {blank} from their controversial decision.",
            "She won't {verb} {blank} from a challenge.",
            "After public outcry, the government {verb}ed {blank}."
        ],
        options: ["down", "up", "off", "out"]
    },

    // ========================================
    // WIND
    // ========================================
    {
        verb: "wind", particle: "up", phrase: "wind up", category: "daily",
        meaning: "To end up in a situation, often unexpectedly; to bring something to an end.",
        sentences: [
            "We took a wrong turn and {verb}ed {blank} in the wrong city.",
            "If you keep eating like that, you'll {verb} {blank} feeling sick.",
            "She {verb}ed {blank} getting the best grade in the class.",
            "The party {verb}ed {blank} lasting until 3 AM."
        ],
        options: ["up", "down", "off", "out"]
    },

    // ========================================
    // WEAR
    // ========================================
    {
        verb: "wear", particle: "out", phrase: "wear out", category: "daily",
        meaning: "To become damaged from overuse; to exhaust someone.",
        sentences: [
            "The kids have completely {verb}n me {blank} today.",
            "My running shoes are starting to {verb} {blank}.",
            "Don't {verb} {blank} the carpet by dragging furniture.",
            "The long hike {verb} everyone {blank}."
        ],
        options: ["out", "off", "down", "away"]
    },
    {
        verb: "wear", particle: "off", phrase: "wear off", category: "daily",
        meaning: "To gradually disappear or lose effect.",
        sentences: [
            "The pain medication is starting to {verb} {blank}.",
            "The novelty of the new toy {verb} {blank} quickly.",
            "Wait for the anesthesia to {verb} {blank} before driving.",
            "The excitement {verb}s {blank} after the first week."
        ],
        options: ["off", "out", "down", "away"]
    },

    // ========================================
    // RULE
    // ========================================
    {
        verb: "rule", particle: "out", phrase: "rule out", category: "academic",
        meaning: "To eliminate a possibility; to decide something is not possible.",
        sentences: [
            "The doctor {verb}d {blank} any serious illness.",
            "We can't {verb} {blank} the possibility of rain tomorrow.",
            "Police have {verb}d {blank} foul play in the investigation.",
            "Let's not {verb} {blank} any options at this stage."
        ],
        options: ["out", "off", "in", "over"]
    },

    // ========================================
    // PHASE
    // ========================================
    {
        verb: "phase", particle: "out", phrase: "phase out", category: "business",
        meaning: "To gradually stop using or producing something.",
        sentences: [
            "The company is {verb}ing {blank} the older product line.",
            "They plan to {verb} {blank} coal-powered plants by 2030.",
            "The old software will be {verb}d {blank} over the next year.",
            "Single-use plastics are being {verb}d {blank} in many countries."
        ],
        options: ["out", "in", "off", "down"]
    },

    // ========================================
    // SLOW
    // ========================================
    {
        verb: "slow", particle: "down", phrase: "slow down", category: "daily",
        meaning: "To reduce speed; to become less active or busy.",
        sentences: [
            "You're driving too fast — {verb} {blank}!",
            "She needs to {verb} {blank} and take a break.",
            "The economy has {verb}ed {blank} significantly this quarter.",
            "As he got older, he learned to {verb} {blank} and enjoy life."
        ],
        options: ["down", "up", "off", "out"]
    },

    // ========================================
    // SIGN
    // ========================================
    {
        verb: "sign", particle: "up", phrase: "sign up", category: "daily",
        meaning: "To register or enroll for something.",
        sentences: [
            "I {verb}ed {blank} for the yoga class starting next month.",
            "Have you {verb}ed {blank} for the newsletter yet?",
            "She {verb}ed {blank} to volunteer at the animal shelter.",
            "More than 200 people {verb}ed {blank} for the conference."
        ],
        options: ["up", "in", "on", "out"]
    },

    // ========================================
    // END
    // ========================================
    {
        verb: "end", particle: "up", phrase: "end up", category: "daily",
        meaning: "To finally be in a particular place or situation, often unplanned.",
        sentences: [
            "We got lost and {verb}ed {blank} in the wrong town.",
            "If you don't study, you'll {verb} {blank} failing the exam.",
            "She {verb}ed {blank} becoming a doctor, just like her mother.",
            "They {verb}ed {blank} staying at the party until midnight."
        ],
        options: ["up", "out", "off", "down"]
    },

    // ========================================
    // CATCH
    // ========================================
    {
        verb: "catch", particle: "up", phrase: "catch up", category: "daily",
        meaning: "To reach the same level as others; to update on recent events.",
        sentences: [
            "I need to {verb} {blank} on all the work I missed.",
            "Let's meet for coffee and {verb} {blank}!",
            "She had to run to {verb} {blank} with the group.",
            "He's working hard to {verb} {blank} with the rest of the class."
        ],
        options: ["up", "on", "out", "off"]
    },
    {
        verb: "catch", particle: "on", phrase: "catch on", category: "daily",
        meaning: "To become popular; to understand something after a while.",
        sentences: [
            "The new trend is starting to {verb} {blank} with teenagers.",
            "It took a while, but she finally {verb} {blank} to the joke.",
            "Electric cars are {verb}ing {blank} in many countries.",
            "He didn't {verb} {blank} that they were teasing him."
        ],
        options: ["on", "up", "out", "off"]
    },

    // ========================================
    // SPEAK
    // ========================================
    {
        verb: "speak", particle: "up", phrase: "speak up", category: "business",
        meaning: "To talk louder; to express your opinion, especially in public.",
        sentences: [
            "Can you {verb} {blank}? I can't hear you from the back.",
            "She {verb} {blank} against the unfair policy at work.",
            "If you have concerns, please {verb} {blank} now.",
            "He was afraid to {verb} {blank} during the meeting."
        ],
        options: ["up", "out", "on", "off"]
    },

    // ========================================
    // WRAP
    // ========================================
    {
        verb: "wrap", particle: "up", phrase: "wrap up", category: "business",
        meaning: "To finish or conclude something; to dress warmly.",
        sentences: [
            "Let's {verb} {blank} the meeting — we've covered everything.",
            "{verb} {blank} warm — it's freezing outside!",
            "She {verb}ped {blank} the project ahead of schedule.",
            "Can we {verb} this {blank} by 5 o'clock?"
        ],
        options: ["up", "off", "on", "out"]
    },

    // ========================================
    // LIVE
    // ========================================
    {
        verb: "live", particle: "up to", phrase: "live up to", category: "emotion",
        meaning: "To meet the standards or expectations that others have set.",
        sentences: [
            "The movie didn't {verb} {blank} the hype.",
            "She always tries to {verb} {blank} her parents' expectations.",
            "The new restaurant really {verb}d {blank} its reputation.",
            "It's hard to {verb} {blank} such high standards."
        ],
        options: ["up to", "on", "with", "for"]
    },

    // ========================================
    // MOVE
    // ========================================
    {
        verb: "move", particle: "on", phrase: "move on", category: "emotion",
        meaning: "To stop thinking about something and start something new; to continue to the next thing.",
        sentences: [
            "It's time to {verb} {blank} and forget about the past.",
            "After the breakup, she found it hard to {verb} {blank}.",
            "Let's {verb} {blank} to the next topic on the agenda.",
            "He's ready to {verb} {blank} to a new chapter in his life."
        ],
        options: ["on", "up", "out", "along"]
    },
    {
        verb: "move", particle: "in", phrase: "move in", category: "daily",
        meaning: "To begin living in a new place.",
        sentences: [
            "They {verb}d {blank} to their new apartment last weekend.",
            "Her boyfriend is {verb}ing {blank} next month.",
            "We can't {verb} {blank} until the renovations are complete.",
            "The new tenants {verb}d {blank} yesterday."
        ],
        options: ["in", "on", "out", "up"]
    },
    {
        verb: "move", particle: "out", phrase: "move out", category: "daily",
        meaning: "To leave a place where you have been living.",
        sentences: [
            "He {verb}d {blank} of his parents' house at eighteen.",
            "The old tenants {verb}d {blank} last week.",
            "She's planning to {verb} {blank} and get her own place.",
            "We need to {verb} {blank} by the end of the month."
        ],
        options: ["out", "in", "on", "away"]
    },

    // ========================================
    // TAKE (additional)
    // ========================================
    {
        verb: "take", particle: "to", phrase: "take to", category: "daily",
        meaning: "To begin to like something or someone; to start doing something as a habit.",
        sentences: [
            "The kids really {verb} {blank} the new babysitter immediately.",
            "She {verb} {blank} swimming like a fish to water.",
            "He {verb} {blank} jogging every morning after the health scare.",
            "The puppy has really {verb}n {blank} its new bed."
        ],
        options: ["to", "up", "on", "after"]
    },

    // ========================================
    // GIVE (additional)
    // ========================================
    {
        verb: "give", particle: "up on", phrase: "give up on", category: "emotion",
        meaning: "To stop believing that someone or something will improve or succeed.",
        sentences: [
            "Don't {verb} {blank} your dreams — keep trying!",
            "The teacher never {verb} {blank} her struggling students.",
            "He {verb} {blank} finding a parking spot and took a taxi.",
            "They almost {verb} {blank} the project before the breakthrough."
        ],
        options: ["up on", "in to", "away", "out"]
    },

    // ========================================
    // CHEER
    // ========================================
    {
        verb: "cheer", particle: "up", phrase: "cheer up", category: "emotion",
        meaning: "To become happier or to make someone feel happier.",
        sentences: [
            "{verb} {blank}! Things will get better soon.",
            "She bought him flowers to {verb} him {blank}.",
            "The sunny weather really {verb}ed everyone {blank}.",
            "He told a joke to {verb} {blank} the gloomy atmosphere."
        ],
        options: ["up", "on", "off", "out"]
    },

    // ========================================
    // CALM
    // ========================================
    {
        verb: "calm", particle: "down", phrase: "calm down", category: "emotion",
        meaning: "To become less angry, upset, or excited.",
        sentences: [
            "Please {verb} {blank} — getting angry won't help anything.",
            "It took her a while to {verb} {blank} after the argument.",
            "He tried to {verb} {blank} the crying baby.",
            "Just take a deep breath and {verb} {blank}."
        ],
        options: ["down", "off", "out", "up"]
    },

    // ========================================
    // CLEAN
    // ========================================
    {
        verb: "clean", particle: "up", phrase: "clean up", category: "daily",
        meaning: "To make a place tidy; to wash yourself and make yourself neat.",
        sentences: [
            "We need to {verb} {blank} the kitchen before Mom gets home.",
            "The city launched a campaign to {verb} {blank} the beach.",
            "Go {verb} {blank} — you're covered in mud!",
            "Who's going to {verb} {blank} after the party?"
        ],
        options: ["up", "out", "off", "away"]
    },

    // ========================================
    // RIP
    // ========================================
    {
        verb: "rip", particle: "off", phrase: "rip off", category: "daily",
        meaning: "To cheat someone by charging too much; to steal or copy something.",
        sentences: [
            "That store really {verb}ped us {blank} — $50 for a T-shirt!",
            "Don't buy from them — they'll {verb} you {blank}.",
            "The movie was {verb}ped {blank} from an old Japanese film.",
            "Tourists often get {verb}ped {blank} by unlicensed taxi drivers."
        ],
        options: ["off", "out", "up", "apart"]
    },

    // ========================================
    // FREAK
    // ========================================
    {
        verb: "freak", particle: "out", phrase: "freak out", category: "emotion",
        meaning: "To become very anxious, scared, or excited.",
        sentences: [
            "She {verb}ed {blank} when she saw a spider in the bathroom.",
            "Don't {verb} {blank} — everything is going to be fine.",
            "The fans {verb}ed {blank} when the band came on stage.",
            "He {verb}ed {blank} when he realized he'd lost his wallet."
        ],
        options: ["out", "off", "up", "away"]
    },

    // ========================================
    // LINE
    // ========================================
    {
        verb: "line", particle: "up", phrase: "line up", category: "daily",
        meaning: "To form a queue; to arrange or organize something.",
        sentences: [
            "Please {verb} {blank} in an orderly fashion.",
            "We've {verb}d {blank} some great speakers for the conference.",
            "The children {verb}d {blank} outside the classroom.",
            "She's got three job interviews {verb}d {blank} this week."
        ],
        options: ["up", "out", "in", "off"]
    },

    // ========================================
    // LOCK
    // ========================================
    {
        verb: "lock", particle: "out", phrase: "lock out", category: "daily",
        meaning: "To prevent someone from entering by locking the door.",
        sentences: [
            "I {verb}ed myself {blank} of the house and had to call a locksmith.",
            "She accidentally {verb}ed her roommate {blank}.",
            "Don't let the door close or you'll {verb} yourself {blank}.",
            "He was {verb}ed {blank} of his email account."
        ],
        options: ["out", "in", "up", "off"]
    },

    // ========================================
    // MIX
    // ========================================
    {
        verb: "mix", particle: "up", phrase: "mix up", category: "daily",
        meaning: "To confuse two or more things; to make a mistake about the identity of something.",
        sentences: [
            "I always {verb} {blank} their names — they look so similar.",
            "Someone {verb}ed {blank} the orders at the restaurant.",
            "Don't {verb} {blank} these two chemicals — it could be dangerous.",
            "She {verb}ed {blank} the dates and missed the appointment."
        ],
        options: ["up", "in", "out", "around"]
    },

    // ========================================
    // OPT
    // ========================================
    {
        verb: "opt", particle: "out", phrase: "opt out", category: "business",
        meaning: "To choose not to participate in something.",
        sentences: [
            "You can {verb} {blank} of the mailing list at any time.",
            "Several members {verb}ed {blank} of the group project.",
            "She decided to {verb} {blank} of the voluntary program.",
            "Employees can {verb} {blank} of the pension scheme."
        ],
        options: ["out", "in", "off", "away"]
    },

    // ========================================
    // SELL
    // ========================================
    {
        verb: "sell", particle: "out", phrase: "sell out", category: "business",
        meaning: "To sell all of a product; to betray one's principles for money or advantage.",
        sentences: [
            "The concert tickets {verb} {blank} in just two hours.",
            "The book {verb} {blank} on the first day of release.",
            "Many fans accused the band of {verb}ing {blank} to mainstream pop.",
            "That popular toy always {verb}s {blank} before Christmas."
        ],
        options: ["out", "off", "up", "away"]
    },

    // ========================================
    // MESS
    // ========================================
    {
        verb: "mess", particle: "up", phrase: "mess up", category: "daily",
        meaning: "To make a mistake; to ruin or spoil something.",
        sentences: [
            "I really {verb}ed {blank} the job interview.",
            "Don't {verb} {blank} the living room — I just cleaned it.",
            "She {verb}ed {blank} the recipe by adding too much salt.",
            "He's afraid of {verb}ing {blank} his chance at promotion."
        ],
        options: ["up", "out", "around", "about"]
    },

    // ========================================
    // ASK
    // ========================================
    {
        verb: "ask", particle: "out", phrase: "ask out", category: "emotion",
        meaning: "To invite someone on a date.",
        sentences: [
            "He finally {verb}ed her {blank} after weeks of hesitation.",
            "She's too shy to {verb} him {blank}.",
            "I heard he got {verb}ed {blank} by his coworker.",
            "Just {verb} her {blank} — the worst she can say is no!"
        ],
        options: ["out", "up", "off", "in"]
    },

    // ========================================
    // COME (additional)
    // ========================================
    {
        verb: "come", particle: "over", phrase: "come over", category: "daily",
        meaning: "To visit someone at their home.",
        sentences: [
            "Why don't you {verb} {blank} for dinner tonight?",
            "She {verb} {blank} to borrow some sugar.",
            "My cousins are {verb}ing {blank} for the holidays.",
            "He {verb}s {blank} every Sunday to watch football."
        ],
        options: ["over", "along", "around", "in"]
    },

    // ========================================
    // GROW
    // ========================================
    {
        verb: "grow", particle: "up", phrase: "grow up", category: "daily",
        meaning: "To develop from a child into an adult; to act maturely.",
        sentences: [
            "She {verb} {blank} in a small fishing village.",
            "What do you want to be when you {verb} {blank}?",
            "Oh, {verb} {blank}! Stop acting like a child.",
            "He {verb} {blank} speaking three languages."
        ],
        options: ["up", "out", "into", "on"]
    },

    // ========================================
    // GIVE (additional)
    // ========================================
    {
        verb: "give", particle: "birth to", phrase: "give birth to", category: "daily",
        meaning: "To produce a baby; to create or be the origin of something new.",
        sentences: [
            "She {verb} {blank} a healthy baby girl last night.",
            "The queen {verb} {blank} twins in the spring.",
            "The Renaissance {verb} {blank} a new era of art and science.",
            "She {verb} {blank} her first child at the age of 30."
        ],
        options: ["birth to", "up", "out", "away"]
    },

    // ========================================
    // WARD
    // ========================================
    {
        verb: "ward", particle: "off", phrase: "ward off", category: "daily",
        meaning: "To prevent something harmful from affecting you.",
        sentences: [
            "Vitamin C helps {verb} {blank} colds and flu.",
            "She wore garlic to {verb} {blank} vampires — just kidding!",
            "The spray is designed to {verb} {blank} mosquitoes.",
            "Regular exercise can {verb} {blank} many diseases."
        ],
        options: ["off", "away", "out", "back"]
    },

    // ========================================
    // WIPE
    // ========================================
    {
        verb: "wipe", particle: "out", phrase: "wipe out", category: "daily",
        meaning: "To destroy completely; to exhaust someone; to fall off (surfing, skiing).",
        sentences: [
            "The disease {verb}d {blank} the entire population of the village.",
            "That workout completely {verb}d me {blank}.",
            "The asteroid that {verb}d {blank} the dinosaurs was massive.",
            "She {verb}d {blank} on her first attempt at surfing."
        ],
        options: ["out", "off", "away", "down"]
    },

    // ========================================
    // ZOOM
    // ========================================
    {
        verb: "zoom", particle: "in", phrase: "zoom in", category: "academic",
        meaning: "To look more closely at something, especially on a screen.",
        sentences: [
            "Can you {verb} {blank} on that part of the photo?",
            "The camera {verb}ed {blank} on the speaker's face.",
            "Let me {verb} {blank} so we can see the details.",
            "She {verb}ed {blank} on the map to find the street."
        ],
        options: ["in", "out", "up", "on"]
    },

    // ========================================
    // OPEN
    // ========================================
    {
        verb: "open", particle: "up", phrase: "open up", category: "emotion",
        meaning: "To share feelings honestly; to start a business; to become available.",
        sentences: [
            "She finally {verb}ed {blank} about her childhood struggles.",
            "A new café is {verb}ing {blank} on the corner next week.",
            "It takes time for him to {verb} {blank} to new people.",
            "The government is {verb}ing {blank} new trade routes."
        ],
        options: ["up", "out", "in", "on"]
    },

    // ========================================
    // STEP
    // ========================================
    {
        verb: "step", particle: "down", phrase: "step down", category: "business",
        meaning: "To resign from an important position.",
        sentences: [
            "The chairman decided to {verb} {blank} after 20 years.",
            "She {verb}ped {blank} as team leader due to health reasons.",
            "The CEO was forced to {verb} {blank} after the scandal.",
            "He plans to {verb} {blank} from his role next year."
        ],
        options: ["down", "up", "out", "off"]
    },
    {
        verb: "step", particle: "up", phrase: "step up", category: "business",
        meaning: "To take action; to increase effort or intensity.",
        sentences: [
            "Someone needs to {verb} {blank} and take charge.",
            "The company needs to {verb} {blank} its security measures.",
            "She {verb}ped {blank} when the team needed a leader.",
            "We must {verb} {blank} our efforts to meet the deadline."
        ],
        options: ["up", "down", "in", "out"]
    },

    // ========================================
    // TURN (additional)
    // ========================================
    {
        verb: "turn", particle: "in", phrase: "turn in", category: "daily",
        meaning: "To go to bed; to submit work; to report someone to the authorities.",
        sentences: [
            "I'm exhausted — I think I'll {verb} {blank} early tonight.",
            "Please {verb} {blank} your reports by end of day.",
            "He decided to {verb} himself {blank} to the police.",
            "She {verb}ed {blank} her essay just before the deadline."
        ],
        options: ["in", "on", "off", "up"]
    },

    // ========================================
    // SPRING
    // ========================================
    {
        verb: "spring", particle: "up", phrase: "spring up", category: "daily",
        meaning: "To appear or develop suddenly and quickly.",
        sentences: [
            "New restaurants are {verb}ing {blank} all over the city.",
            "Wildflowers {verb} {blank} across the meadow in April.",
            "A strong wind {verb} {blank} out of nowhere.",
            "Shopping malls have {verb} {blank} everywhere in the suburbs."
        ],
        options: ["up", "out", "off", "on"]
    },

    // ========================================
    // PLAY
    // ========================================
    {
        verb: "play", particle: "down", phrase: "play down", category: "business",
        meaning: "To make something seem less important or serious than it really is.",
        sentences: [
            "The company tried to {verb} {blank} the severity of the data breach.",
            "He {verb}ed {blank} his role in the project's success.",
            "Politicians often {verb} {blank} negative statistics.",
            "She always {verb}s {blank} her achievements — she's very modest."
        ],
        options: ["down", "off", "up", "out"]
    },

    // ========================================
    // WEIGH
    // ========================================
    {
        verb: "weigh", particle: "up", phrase: "weigh up", category: "business",
        meaning: "To consider carefully the advantages and disadvantages before deciding.",
        sentences: [
            "We need to {verb} {blank} the pros and cons before investing.",
            "She spent weeks {verb}ing {blank} her options.",
            "He {verb}ed {blank} the risks and decided to go ahead.",
            "Take your time to {verb} {blank} the situation before acting."
        ],
        options: ["up", "in", "out", "down"]
    },

    // ========================================
    // LAY
    // ========================================
    {
        verb: "lay", particle: "off", phrase: "lay off", category: "business",
        meaning: "To dismiss employees because there is not enough work; to stop doing something annoying.",
        sentences: [
            "The company had to {verb} {blank} 200 workers last quarter.",
            "{verb} {blank} the junk food — it's bad for you!",
            "Thousands of employees were {verb}ed {blank} during the recession.",
            "She told him to {verb} {blank} criticizing her cooking."
        ],
        options: ["off", "out", "down", "up"]
    },

    // ========================================
    // SWITCH
    // ========================================
    {
        verb: "switch", particle: "off", phrase: "switch off", category: "daily",
        meaning: "To turn off an electrical device; to stop paying attention.",
        sentences: [
            "Please {verb} {blank} your mobile phones during the movie.",
            "She {verb}es {blank} after working hours to relax.",
            "Don't forget to {verb} {blank} the lights before bed.",
            "I tend to {verb} {blank} during long, boring lectures."
        ],
        options: ["off", "on", "up", "out"]
    },

    // ========================================
    // KNOCK
    // ========================================
    {
        verb: "knock", particle: "out", phrase: "knock out", category: "daily",
        meaning: "To make someone unconscious; to impress someone greatly; to eliminate from a competition.",
        sentences: [
            "The boxer {verb}ed {blank} his opponent in the third round.",
            "The beautiful view {verb}ed us {blank}.",
            "Our team was {verb}ed {blank} in the semifinal.",
            "The medication might {verb} you {blank} for a few hours."
        ],
        options: ["out", "off", "down", "over"]
    },
    {
        verb: "knock", particle: "down", phrase: "knock down", category: "daily",
        meaning: "To demolish a building; to reduce a price; to hit someone so they fall.",
        sentences: [
            "They're going to {verb} {blank} the old warehouse next week.",
            "She managed to {verb} {blank} the price by 20 percent.",
            "The strong wind {verb}ed {blank} several trees in the park.",
            "He was {verb}ed {blank} by a cyclist on the sidewalk."
        ],
        options: ["down", "out", "off", "over"]
    },

    // ========================================
    // EAT
    // ========================================
    {
        verb: "eat", particle: "out", phrase: "eat out", category: "daily",
        meaning: "To eat at a restaurant rather than at home.",
        sentences: [
            "We usually {verb} {blank} on Friday nights.",
            "I'm too tired to cook — let's {verb} {blank} tonight.",
            "They {verb} {blank} at least three times a week.",
            "She prefers to {verb} {blank} rather than cook at home."
        ],
        options: ["out", "up", "in", "off"]
    },

    // ========================================
    // COUNT
    // ========================================
    {
        verb: "count", particle: "on", phrase: "count on", category: "emotion",
        meaning: "To rely on or depend on someone or something.",
        sentences: [
            "You can always {verb} {blank} me when you need help.",
            "She {verb}s {blank} her best friend for emotional support.",
            "Don't {verb} {blank} the weather being nice tomorrow.",
            "I'm {verb}ing {blank} you to finish the report on time."
        ],
        options: ["on", "up", "in", "for"]
    },

    // ========================================
    // FALL
    // ========================================
    {
        verb: "fall", particle: "behind", phrase: "fall behind", category: "academic",
        meaning: "To fail to keep up with others in progress or payments.",
        sentences: [
            "She {verb} {blank} in her studies after being sick for a week.",
            "Don't {verb} {blank} on your rent payments.",
            "The team is {verb}ing {blank} schedule.",
            "He {verb} {blank} his classmates in math."
        ],
        options: ["behind", "back", "off", "down"]
    },
    {
        verb: "fall", particle: "apart", phrase: "fall apart", category: "emotion",
        meaning: "To break into pieces; to stop functioning; to become emotionally overwhelmed.",
        sentences: [
            "The old book is {verb}ing {blank} at the seams.",
            "Their marriage started to {verb} {blank} after the move.",
            "She completely {verb} {blank} when she heard the bad news.",
            "The plan {verb} {blank} when the funding was cut."
        ],
        options: ["apart", "down", "off", "out"]
    },
    {
        verb: "fall", particle: "through", phrase: "fall through", category: "business",
        meaning: "To fail to happen or be completed as planned.",
        sentences: [
            "The deal {verb} {blank} at the last minute.",
            "Our vacation plans {verb} {blank} because of the pandemic.",
            "The merger {verb} {blank} due to regulatory concerns.",
            "Their house purchase {verb} {blank} when the survey found problems."
        ],
        options: ["through", "apart", "down", "out"]
    },

    // ========================================
    // DO
    // ========================================
    {
        verb: "do", particle: "away with", phrase: "do away with", category: "business",
        meaning: "To get rid of or abolish something.",
        sentences: [
            "The school decided to {verb} {blank} the old dress code.",
            "Many countries have {verb}ne {blank} the death penalty.",
            "The company plans to {verb} {blank} paper receipts entirely.",
            "They want to {verb} {blank} unnecessary bureaucracy."
        ],
        options: ["away with", "up with", "without", "in"]
    },
    {
        verb: "do", particle: "over", phrase: "do over", category: "daily",
        meaning: "To do something again from the beginning.",
        sentences: [
            "The report has too many errors — we'll have to {verb} it {blank}.",
            "If I could {verb} my life {blank}, I'd travel more.",
            "She {verb} the painting {blank} because she wasn't satisfied.",
            "The test results were invalid, so they had to {verb} the experiment {blank}."
        ],
        options: ["over", "up", "again", "out"]
    },

    // ========================================
    // HOLD (additional)
    // ========================================
    {
        verb: "hold", particle: "off", phrase: "hold off", category: "business",
        meaning: "To delay or postpone doing something; to resist an attack.",
        sentences: [
            "Let's {verb} {blank} on making a decision until we have more data.",
            "They {verb} {blank} the enemy forces for three days.",
            "I'll {verb} {blank} buying a new phone until the price drops.",
            "Can we {verb} {blank} the launch until next quarter?"
        ],
        options: ["off", "on", "up", "back"]
    },

    // ========================================
    // WATCH
    // ========================================
    {
        verb: "watch", particle: "out", phrase: "watch out", category: "daily",
        meaning: "To be careful; to look out for danger.",
        sentences: [
            "{verb} {blank}! The floor is wet and slippery.",
            "You should {verb} {blank} for scams when shopping online.",
            "{verb} {blank} for that step — it's broken.",
            "She told the children to {verb} {blank} when crossing the street."
        ],
        options: ["out", "over", "up", "on"]
    },

    // ========================================
    // BUILD
    // ========================================
    {
        verb: "build", particle: "up", phrase: "build up", category: "business",
        meaning: "To develop or increase gradually over time.",
        sentences: [
            "She's been {verb}ing {blank} her savings for years.",
            "Traffic tends to {verb} {blank} during rush hour.",
            "He {verb} {blank} a successful business from nothing.",
            "Stress can {verb} {blank} if you don't manage it properly."
        ],
        options: ["up", "on", "out", "off"]
    },

    // ========================================
    // TEAR
    // ========================================
    {
        verb: "tear", particle: "down", phrase: "tear down", category: "daily",
        meaning: "To demolish a building or structure; to criticize harshly.",
        sentences: [
            "They're going to {verb} {blank} the old stadium next year.",
            "The Berlin Wall was {verb}n {blank} in 1989.",
            "Critics {verb} {blank} the movie in their reviews.",
            "The council voted to {verb} {blank} the abandoned factory."
        ],
        options: ["down", "up", "apart", "off"]
    },

    // ========================================
    // PUT (additional)
    // ========================================
    {
        verb: "put", particle: "up", phrase: "put up", category: "daily",
        meaning: "To erect or hang something; to accommodate someone temporarily.",
        sentences: [
            "We {verb} {blank} the Christmas tree last weekend.",
            "Can you {verb} us {blank} for the night?",
            "They {verb} {blank} a new fence around the garden.",
            "She {verb} {blank} posters all over town for the concert."
        ],
        options: ["up", "on", "out", "down"]
    },

    // ========================================
    // ZIP / BRUSH / BEEF
    // ========================================
    {
        verb: "brush", particle: "up on", phrase: "brush up on", category: "academic",
        meaning: "To review or improve skills or knowledge that you haven't used recently.",
        sentences: [
            "I need to {verb} {blank} my French before the trip to Paris.",
            "She's {verb}ing {blank} her coding skills for the interview.",
            "He should {verb} {blank} his presentation techniques.",
            "It's a good idea to {verb} {blank} the basics before the exam."
        ],
        options: ["up on", "off", "through", "over"]
    },

    // ========================================
    // NARROW
    // ========================================
    {
        verb: "narrow", particle: "down", phrase: "narrow down", category: "business",
        meaning: "To reduce the number of possibilities or options.",
        sentences: [
            "We need to {verb} {blank} the list of candidates.",
            "She {verb}ed {blank} her college choices to three schools.",
            "The police have {verb}ed {blank} the list of suspects.",
            "Let's {verb} {blank} the options before the next meeting."
        ],
        options: ["down", "out", "off", "up"]
    },

    // ========================================
    // CLOG
    // ========================================
    {
        verb: "clog", particle: "up", phrase: "clog up", category: "daily",
        meaning: "To block or become blocked so that movement or flow is difficult.",
        sentences: [
            "Grease can {verb} {blank} the kitchen drain.",
            "The highways get {verb}ged {blank} during rush hour.",
            "Too many emails can {verb} {blank} your inbox.",
            "Leaves {verb}ged {blank} the gutters after the storm."
        ],
        options: ["up", "out", "off", "down"]
    },

    // ========================================
    // BOIL
    // ========================================
    {
        verb: "boil", particle: "down to", phrase: "boil down to", category: "business",
        meaning: "To be reduced to the most essential point or element.",
        sentences: [
            "The argument {verb}s {blank} a disagreement about money.",
            "It all {verb}s {blank} trust in the end.",
            "The issue {verb}s {blank} a lack of communication.",
            "Their decision {verb}ed {blank} which option was cheaper."
        ],
        options: ["down to", "up to", "over", "out"]
    },

    // ========================================
    // IRON
    // ========================================
    {
        verb: "iron", particle: "out", phrase: "iron out", category: "business",
        meaning: "To resolve problems or difficulties.",
        sentences: [
            "We still need to {verb} {blank} a few details in the contract.",
            "The team {verb}ed {blank} all the bugs before the launch.",
            "Let's {verb} {blank} any remaining issues today.",
            "They spent the morning {verb}ing {blank} their differences."
        ],
        options: ["out", "off", "up", "down"]
    },
];
