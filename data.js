const PHRASAL_VERBS = [
    // ========================================
    // TAKE
    // ========================================
    {
        verb: "take", particle: "off", phrase: "take off", category: "travel", level: "elementary",
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
        verb: "take", particle: "over", phrase: "take over", category: "business", level: "high",
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
        verb: "take", particle: "up", phrase: "take up", category: "daily", level: "high",
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
        verb: "take", particle: "after", phrase: "take after", category: "daily", level: "high",
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
        verb: "take", particle: "back", phrase: "take back", category: "emotion", level: "high",
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
        verb: "take", particle: "in", phrase: "take in", category: "daily", level: "high",
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
        verb: "take", particle: "on", phrase: "take on", category: "business", level: "high",
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
        verb: "take", particle: "out", phrase: "take out", category: "daily", level: "high",
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
        verb: "take", particle: "down", phrase: "take down", category: "daily", level: "high",
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
        verb: "take", particle: "apart", phrase: "take apart", category: "daily", level: "high",
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
        verb: "give", particle: "up", phrase: "give up", category: "emotion", level: "middle",
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
        verb: "give", particle: "away", phrase: "give away", category: "daily", level: "middle",
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
        verb: "give", particle: "in", phrase: "give in", category: "business", level: "middle",
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
        verb: "give", particle: "out", phrase: "give out", category: "academic", level: "middle",
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
        verb: "give", particle: "back", phrase: "give back", category: "daily", level: "elementary",
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
        verb: "give", particle: "off", phrase: "give off", category: "daily", level: "middle",
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
        verb: "make", particle: "up", phrase: "make up", category: "emotion", level: "middle",
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
        verb: "make", particle: "out", phrase: "make out", category: "daily", level: "middle",
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
        verb: "make", particle: "up for", phrase: "make up for", category: "emotion", level: "high",
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
        verb: "make", particle: "off", phrase: "make off", category: "daily", level: "high",
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
        verb: "make", particle: "do", phrase: "make do", category: "daily", level: "high",
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
        verb: "turn", particle: "down", phrase: "turn down", category: "business", level: "elementary",
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
        verb: "turn", particle: "up", phrase: "turn up", category: "daily", level: "elementary",
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
        verb: "turn", particle: "out", phrase: "turn out", category: "daily", level: "middle",
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
        verb: "turn", particle: "off", phrase: "turn off", category: "daily", level: "elementary",
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
        verb: "turn", particle: "on", phrase: "turn on", category: "daily", level: "elementary",
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
        verb: "turn", particle: "around", phrase: "turn around", category: "business", level: "elementary",
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
        verb: "turn", particle: "into", phrase: "turn into", category: "daily", level: "middle",
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
        verb: "put", particle: "off", phrase: "put off", category: "academic", level: "middle",
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
        verb: "put", particle: "up with", phrase: "put up with", category: "emotion", level: "high",
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
        verb: "put", particle: "together", phrase: "put together", category: "business", level: "high",
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
        verb: "put", particle: "on", phrase: "put on", category: "daily", level: "elementary",
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
        verb: "put", particle: "away", phrase: "put away", category: "daily", level: "middle",
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
        verb: "put", particle: "out", phrase: "put out", category: "daily", level: "middle",
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
        verb: "put", particle: "down", phrase: "put down", category: "daily", level: "elementary",
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
        verb: "look", particle: "up", phrase: "look up", category: "academic", level: "middle",
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
        verb: "look", particle: "forward to", phrase: "look forward to", category: "emotion", level: "high",
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
        verb: "look", particle: "into", phrase: "look into", category: "business", level: "high",
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
        verb: "look", particle: "after", phrase: "look after", category: "daily", level: "elementary",
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
        verb: "look", particle: "out", phrase: "look out", category: "daily", level: "middle",
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
        verb: "look", particle: "down on", phrase: "look down on", category: "emotion", level: "high",
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
        verb: "look", particle: "up to", phrase: "look up to", category: "emotion", level: "high",
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
        verb: "look", particle: "over", phrase: "look over", category: "academic", level: "middle",
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
        verb: "break", particle: "down", phrase: "break down", category: "daily", level: "middle",
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
        verb: "break", particle: "out", phrase: "break out", category: "daily", level: "middle",
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
        verb: "break", particle: "up", phrase: "break up", category: "emotion", level: "middle",
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
        verb: "break", particle: "in", phrase: "break in", category: "daily", level: "middle",
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
        verb: "break", particle: "through", phrase: "break through", category: "business", level: "high",
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
        verb: "come", particle: "across", phrase: "come across", category: "daily", level: "high",
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
        verb: "come", particle: "up with", phrase: "come up with", category: "business", level: "high",
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
        verb: "come", particle: "up", phrase: "come up", category: "daily", level: "middle",
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
        verb: "come", particle: "along", phrase: "come along", category: "daily", level: "elementary",
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
        verb: "come", particle: "back", phrase: "come back", category: "travel", level: "elementary",
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
        verb: "come", particle: "out", phrase: "come out", category: "daily", level: "elementary",
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
        verb: "come", particle: "down with", phrase: "come down with", category: "daily", level: "high",
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
        verb: "run", particle: "out of", phrase: "run out of", category: "daily", level: "high",
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
        verb: "run", particle: "into", phrase: "run into", category: "daily", level: "middle",
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
        verb: "run", particle: "over", phrase: "run over", category: "daily", level: "middle",
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
        verb: "run", particle: "away", phrase: "run away", category: "emotion", level: "middle",
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
        verb: "carry", particle: "out", phrase: "carry out", category: "academic", level: "high",
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
        verb: "carry", particle: "on", phrase: "carry on", category: "daily", level: "middle",
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
        verb: "carry", particle: "away", phrase: "carry away", category: "emotion", level: "high",
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
        verb: "figure", particle: "out", phrase: "figure out", category: "academic", level: "high",
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
        verb: "set", particle: "up", phrase: "set up", category: "business", level: "middle",
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
        verb: "set", particle: "off", phrase: "set off", category: "travel", level: "middle",
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
        verb: "set", particle: "back", phrase: "set back", category: "business", level: "high",
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
        verb: "set", particle: "out", phrase: "set out", category: "travel", level: "high",
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
        verb: "bring", particle: "up", phrase: "bring up", category: "daily", level: "middle",
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
        verb: "bring", particle: "about", phrase: "bring about", category: "business", level: "high",
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
        verb: "bring", particle: "back", phrase: "bring back", category: "emotion", level: "middle",
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
        verb: "bring", particle: "out", phrase: "bring out", category: "daily", level: "high",
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
        verb: "bring", particle: "down", phrase: "bring down", category: "business", level: "high",
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
        verb: "work", particle: "out", phrase: "work out", category: "daily", level: "middle",
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
        verb: "work", particle: "on", phrase: "work on", category: "business", level: "middle",
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
        verb: "work", particle: "up", phrase: "work up", category: "emotion", level: "high",
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
        verb: "call", particle: "off", phrase: "call off", category: "daily", level: "high",
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
        verb: "call", particle: "back", phrase: "call back", category: "daily", level: "middle",
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
        verb: "call", particle: "for", phrase: "call for", category: "business", level: "middle",
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
        verb: "call", particle: "on", phrase: "call on", category: "academic", level: "middle",
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
        verb: "go", particle: "through", phrase: "go through", category: "emotion", level: "middle",
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
        verb: "go", particle: "ahead", phrase: "go ahead", category: "business", level: "elementary",
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
        verb: "go", particle: "on", phrase: "go on", category: "daily", level: "elementary",
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
        verb: "go", particle: "over", phrase: "go over", category: "academic", level: "middle",
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
        verb: "go", particle: "off", phrase: "go off", category: "daily", level: "middle",
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
        verb: "go", particle: "back", phrase: "go back", category: "travel", level: "elementary",
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
        verb: "go", particle: "down", phrase: "go down", category: "daily", level: "elementary",
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
        verb: "go", particle: "with", phrase: "go with", category: "daily", level: "middle",
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
        verb: "pick", particle: "up", phrase: "pick up", category: "daily", level: "elementary",
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
        verb: "pick", particle: "out", phrase: "pick out", category: "daily", level: "middle",
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
        verb: "pick", particle: "on", phrase: "pick on", category: "emotion", level: "high",
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
        verb: "point", particle: "out", phrase: "point out", category: "business", level: "middle",
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
        verb: "hold", particle: "on", phrase: "hold on", category: "daily", level: "middle",
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
        verb: "hold", particle: "up", phrase: "hold up", category: "daily", level: "high",
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
        verb: "hold", particle: "back", phrase: "hold back", category: "emotion", level: "middle",
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
        verb: "check", particle: "in", phrase: "check in", category: "travel", level: "middle",
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
        verb: "check", particle: "out", phrase: "check out", category: "daily", level: "middle",
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
        verb: "check", particle: "up on", phrase: "check up on", category: "daily", level: "high",
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
        verb: "drop", particle: "off", phrase: "drop off", category: "travel", level: "middle",
        meaning: "To take someone or something to a place and leave them there; to decrease; to fall asleep.",
        sentences: [
            "I'll {verb} you {blank} at the airport on my way to work.",
            "She {verb}s the kids {blank} at school every morning.",
            "Can you {verb} {blank} this package at the post office?",
            "Sales have {verb}ped {blank} sharply since last quarter."
        ],
        options: ["off", "out", "in", "by"]
    },
    {
        verb: "drop", particle: "by", phrase: "drop by", category: "daily", level: "middle",
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
        verb: "drop", particle: "out", phrase: "drop out", category: "academic", level: "middle",
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
        verb: "fill", particle: "in", phrase: "fill in", category: "business", level: "middle",
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
        verb: "fill", particle: "out", phrase: "fill out", category: "business", level: "middle",
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
        verb: "fill", particle: "up", phrase: "fill up", category: "daily", level: "middle",
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
        verb: "cut", particle: "down on", phrase: "cut down on", category: "daily", level: "middle",
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
        verb: "cut", particle: "off", phrase: "cut off", category: "daily", level: "middle",
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
        verb: "cut", particle: "out", phrase: "cut out", category: "daily", level: "middle",
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
        verb: "get", particle: "up", phrase: "get up", category: "daily", level: "elementary",
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
        verb: "get", particle: "along", phrase: "get along", category: "emotion", level: "elementary",
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
        verb: "get", particle: "over", phrase: "get over", category: "emotion", level: "middle",
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
        verb: "get", particle: "away", phrase: "get away", category: "travel", level: "middle",
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
        verb: "get", particle: "by", phrase: "get by", category: "daily", level: "middle",
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
        verb: "get", particle: "rid of", phrase: "get rid of", category: "daily", level: "middle",
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
        verb: "get", particle: "through", phrase: "get through", category: "emotion", level: "middle",
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
        verb: "get", particle: "on", phrase: "get on", category: "travel", level: "elementary",
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
        verb: "get", particle: "off", phrase: "get off", category: "travel", level: "elementary",
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
        verb: "get", particle: "back", phrase: "get back", category: "daily", level: "elementary",
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
        verb: "get", particle: "out", phrase: "get out", category: "daily", level: "elementary",
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
        verb: "get", particle: "together", phrase: "get together", category: "daily", level: "middle",
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
        verb: "keep", particle: "up", phrase: "keep up", category: "academic", level: "middle",
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
        verb: "keep", particle: "on", phrase: "keep on", category: "emotion", level: "middle",
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
        verb: "keep", particle: "up with", phrase: "keep up with", category: "daily", level: "high",
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
        verb: "keep", particle: "away", phrase: "keep away", category: "daily", level: "middle",
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
        verb: "throw", particle: "away", phrase: "throw away", category: "daily", level: "elementary",
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
        verb: "throw", particle: "up", phrase: "throw up", category: "daily", level: "middle",
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
        verb: "throw", particle: "out", phrase: "throw out", category: "daily", level: "elementary",
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
        verb: "pull", particle: "off", phrase: "pull off", category: "business", level: "high",
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
        verb: "pull", particle: "over", phrase: "pull over", category: "travel", level: "high",
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
        verb: "pull", particle: "through", phrase: "pull through", category: "emotion", level: "high",
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
        verb: "hand", particle: "in", phrase: "hand in", category: "academic", level: "middle",
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
        verb: "hand", particle: "out", phrase: "hand out", category: "academic", level: "middle",
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
        verb: "hand", particle: "over", phrase: "hand over", category: "business", level: "high",
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
        verb: "stand", particle: "up", phrase: "stand up", category: "daily", level: "elementary",
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
        verb: "stand", particle: "out", phrase: "stand out", category: "business", level: "middle",
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
        verb: "stand", particle: "for", phrase: "stand for", category: "business", level: "middle",
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
        verb: "pay", particle: "off", phrase: "pay off", category: "business", level: "middle",
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
        verb: "pay", particle: "back", phrase: "pay back", category: "daily", level: "middle",
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
        verb: "show", particle: "up", phrase: "show up", category: "daily", level: "middle",
        meaning: "To arrive or appear, especially unexpectedly or late; also to outperform someone embarrassingly.",
        sentences: [
            "He didn't {verb} {blank} for the meeting this morning.",
            "She always {verb}s {blank} late to everything.",
            "A hundred people {verb}ed {blank} at the protest.",
            "The new intern {verb}ed {blank} all the senior staff with her skills."
        ],
        options: ["up", "off", "out", "around"]
    },
    {
        verb: "show", particle: "off", phrase: "show off", category: "emotion", level: "middle",
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
        verb: "show", particle: "around", phrase: "show around", category: "travel", level: "high",
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
        verb: "think", particle: "over", phrase: "think over", category: "business", level: "high",
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
        verb: "think", particle: "up", phrase: "think up", category: "business", level: "high",
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
        verb: "sort", particle: "out", phrase: "sort out", category: "business", level: "middle",
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
        verb: "find", particle: "out", phrase: "find out", category: "daily", level: "elementary",
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
        verb: "close", particle: "down", phrase: "close down", category: "business", level: "middle",
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
        verb: "blow", particle: "up", phrase: "blow up", category: "daily", level: "middle",
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
        verb: "blow", particle: "out", phrase: "blow out", category: "daily", level: "middle",
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
        verb: "pass", particle: "away", phrase: "pass away", category: "emotion", level: "middle",
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
        verb: "pass", particle: "out", phrase: "pass out", category: "daily", level: "middle",
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
        verb: "pass", particle: "on", phrase: "pass on", category: "daily", level: "middle",
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
        verb: "settle", particle: "down", phrase: "settle down", category: "daily", level: "middle",
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
        verb: "settle", particle: "for", phrase: "settle for", category: "daily", level: "college",
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
        verb: "stick", particle: "to", phrase: "stick to", category: "daily", level: "high",
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
        verb: "stick", particle: "out", phrase: "stick out", category: "daily", level: "high",
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
        verb: "shut", particle: "down", phrase: "shut down", category: "business", level: "middle",
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
        verb: "shut", particle: "up", phrase: "shut up", category: "emotion", level: "middle",
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
        verb: "hang", particle: "out", phrase: "hang out", category: "daily", level: "middle",
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
        verb: "hang", particle: "up", phrase: "hang up", category: "daily", level: "middle",
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
        verb: "hang", particle: "on", phrase: "hang on", category: "daily", level: "middle",
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
        verb: "back", particle: "up", phrase: "back up", category: "daily", level: "middle",
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
        verb: "back", particle: "down", phrase: "back down", category: "business", level: "high",
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
        verb: "wind", particle: "up", phrase: "wind up", category: "daily", level: "high",
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
        verb: "wear", particle: "out", phrase: "wear out", category: "daily", level: "middle",
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
        verb: "wear", particle: "off", phrase: "wear off", category: "daily", level: "high",
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
        verb: "rule", particle: "out", phrase: "rule out", category: "academic", level: "college",
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
        verb: "phase", particle: "out", phrase: "phase out", category: "business", level: "college",
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
        verb: "slow", particle: "down", phrase: "slow down", category: "daily", level: "elementary",
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
        verb: "sign", particle: "up", phrase: "sign up", category: "daily", level: "middle",
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
        verb: "end", particle: "up", phrase: "end up", category: "daily", level: "middle",
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
        verb: "catch", particle: "up", phrase: "catch up", category: "daily", level: "middle",
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
        verb: "catch", particle: "on", phrase: "catch on", category: "daily", level: "middle",
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
        verb: "speak", particle: "up", phrase: "speak up", category: "business", level: "middle",
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
        verb: "wrap", particle: "up", phrase: "wrap up", category: "business", level: "high",
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
        verb: "live", particle: "up to", phrase: "live up to", category: "emotion", level: "high",
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
        verb: "move", particle: "on", phrase: "move on", category: "emotion", level: "middle",
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
        verb: "move", particle: "in", phrase: "move in", category: "daily", level: "middle",
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
        verb: "move", particle: "out", phrase: "move out", category: "daily", level: "middle",
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
        verb: "take", particle: "to", phrase: "take to", category: "daily", level: "high",
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
        verb: "give", particle: "up on", phrase: "give up on", category: "emotion", level: "high",
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
        verb: "cheer", particle: "up", phrase: "cheer up", category: "emotion", level: "middle",
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
        verb: "calm", particle: "down", phrase: "calm down", category: "emotion", level: "elementary",
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
        verb: "clean", particle: "up", phrase: "clean up", category: "daily", level: "elementary",
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
        verb: "rip", particle: "off", phrase: "rip off", category: "daily", level: "high",
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
        verb: "freak", particle: "out", phrase: "freak out", category: "emotion", level: "high",
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
        verb: "line", particle: "up", phrase: "line up", category: "daily", level: "middle",
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
        verb: "lock", particle: "out", phrase: "lock out", category: "daily", level: "high",
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
        verb: "mix", particle: "up", phrase: "mix up", category: "daily", level: "middle",
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
        verb: "opt", particle: "out", phrase: "opt out", category: "business", level: "high",
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
        verb: "sell", particle: "out", phrase: "sell out", category: "business", level: "high",
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
        verb: "mess", particle: "up", phrase: "mess up", category: "daily", level: "middle",
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
        verb: "ask", particle: "out", phrase: "ask out", category: "emotion", level: "high",
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
        verb: "come", particle: "over", phrase: "come over", category: "daily", level: "elementary",
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
        verb: "grow", particle: "up", phrase: "grow up", category: "daily", level: "elementary",
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
        verb: "give", particle: "birth to", phrase: "give birth to", category: "daily", level: "high",
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
        verb: "ward", particle: "off", phrase: "ward off", category: "daily", level: "high",
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
        verb: "wipe", particle: "out", phrase: "wipe out", category: "daily", level: "high",
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
        verb: "zoom", particle: "in", phrase: "zoom in", category: "academic", level: "high",
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
        verb: "open", particle: "up", phrase: "open up", category: "emotion", level: "middle",
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
        verb: "step", particle: "down", phrase: "step down", category: "business", level: "high",
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
        verb: "step", particle: "up", phrase: "step up", category: "business", level: "high",
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
        verb: "turn", particle: "in", phrase: "turn in", category: "daily", level: "high",
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
        verb: "spring", particle: "up", phrase: "spring up", category: "daily", level: "professional",
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
        verb: "play", particle: "down", phrase: "play down", category: "business", level: "high",
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
        verb: "weigh", particle: "up", phrase: "weigh up", category: "business", level: "professional",
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
        verb: "lay", particle: "off", phrase: "lay off", category: "business", level: "high",
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
        verb: "switch", particle: "off", phrase: "switch off", category: "daily", level: "elementary",
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
        verb: "knock", particle: "out", phrase: "knock out", category: "daily", level: "high",
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
        verb: "knock", particle: "down", phrase: "knock down", category: "daily", level: "high",
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
        verb: "eat", particle: "out", phrase: "eat out", category: "daily", level: "middle",
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
        verb: "count", particle: "on", phrase: "count on", category: "emotion", level: "middle",
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
        verb: "fall", particle: "behind", phrase: "fall behind", category: "academic", level: "middle",
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
        verb: "fall", particle: "apart", phrase: "fall apart", category: "emotion", level: "middle",
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
        verb: "fall", particle: "through", phrase: "fall through", category: "business", level: "high",
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
        verb: "do", particle: "away with", phrase: "do away with", category: "business", level: "high",
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
        verb: "do", particle: "over", phrase: "do over", category: "daily", level: "high",
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
        verb: "hold", particle: "off", phrase: "hold off", category: "business", level: "high",
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
        verb: "watch", particle: "out", phrase: "watch out", category: "daily", level: "middle",
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
        verb: "build", particle: "up", phrase: "build up", category: "business", level: "middle",
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
        verb: "tear", particle: "down", phrase: "tear down", category: "daily", level: "high",
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
        verb: "put", particle: "up", phrase: "put up", category: "daily", level: "middle",
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
        verb: "brush", particle: "up on", phrase: "brush up on", category: "academic", level: "high",
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
        verb: "narrow", particle: "down", phrase: "narrow down", category: "business", level: "high",
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
        verb: "clog", particle: "up", phrase: "clog up", category: "daily", level: "professional",
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
        verb: "boil", particle: "down to", phrase: "boil down to", category: "business", level: "college",
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
        verb: "iron", particle: "out", phrase: "iron out", category: "business", level: "high",
        meaning: "To resolve problems or difficulties.",
        sentences: [
            "We still need to {verb} {blank} a few details in the contract.",
            "The team {verb}ed {blank} all the bugs before the launch.",
            "Let's {verb} {blank} any remaining issues today.",
            "They spent the morning {verb}ing {blank} their differences."
        ],
        options: ["out", "off", "up", "down"]
    },

    // ========================================
    // ASK (expanded)
    // ========================================
    {
        verb: "ask", particle: "for", phrase: "ask for", category: "daily", level: "middle",
        meaning: "To request something from someone.",
        sentences: [
            "She {verb}ed {blank} a glass of water at the restaurant.",
            "Don't be afraid to {verb} {blank} help when you need it.",
            "He {verb}ed {blank} a raise after two years at the company.",
            "The customer {verb}ed {blank} a refund on the defective product."
        ],
        options: ["for", "out", "about", "after"]
    },
    {
        verb: "ask", particle: "around", phrase: "ask around", category: "daily", level: "high",
        meaning: "To ask multiple people for information or opinions.",
        sentences: [
            "I'll {verb} {blank} and see if anyone knows a good plumber.",
            "She {verb}ed {blank} but nobody had seen her missing cat.",
            "Why don't you {verb} {blank} at the office and see who's interested?",
            "He {verb}ed {blank} the neighborhood for any witnesses."
        ],
        options: ["around", "for", "out", "about"]
    },
    {
        verb: "ask", particle: "after", phrase: "ask after", category: "emotion", level: "high",
        meaning: "To inquire about someone's health or well-being.",
        sentences: [
            "She always {verb}s {blank} your mother — they were old friends.",
            "He {verb}ed {blank} you when I saw him at the store.",
            "My grandmother {verb}ed {blank} everyone in the family.",
            "The neighbors {verb}ed {blank} him after his surgery."
        ],
        options: ["after", "for", "about", "around"]
    },
    {
        verb: "ask", particle: "over", phrase: "ask over", category: "daily", level: "high",
        meaning: "To invite someone to your home.",
        sentences: [
            "We should {verb} the neighbors {blank} for dinner sometime.",
            "She {verb}ed her college friends {blank} for a barbecue.",
            "He {verb}ed me {blank} to watch the game on Sunday.",
            "They {verb}ed us {blank} to celebrate their anniversary."
        ],
        options: ["over", "out", "around", "in"]
    },

    // ========================================
    // DO (expanded)
    // ========================================
    {
        verb: "do", particle: "up", phrase: "do up", category: "daily", level: "middle",
        meaning: "To fasten or button something; to renovate or decorate a place.",
        sentences: [
            "Can you {verb} {blank} the zipper on my dress?",
            "They're planning to {verb} {blank} the old cottage this summer.",
            "She {verb} {blank} the buttons on her coat before going outside.",
            "We {verb} {blank} the spare room for the guests."
        ],
        options: ["up", "out", "over", "off"]
    },
    {
        verb: "do", particle: "without", phrase: "do without", category: "daily", level: "middle",
        meaning: "To manage without having something; to cope in the absence of something.",
        sentences: [
            "I can't {verb} {blank} my morning coffee.",
            "We'll have to {verb} {blank} air conditioning this summer.",
            "She learned to {verb} {blank} luxuries while traveling on a budget.",
            "The company had to {verb} {blank} two key employees during the project."
        ],
        options: ["without", "away with", "over", "up"]
    },
    {
        verb: "do", particle: "in", phrase: "do in", category: "daily", level: "high",
        meaning: "To exhaust someone completely; to kill or destroy.",
        sentences: [
            "That long hike really {verb} me {blank}.",
            "Working double shifts is going to {verb} him {blank}.",
            "The scandal finally {verb} {blank} his political career.",
            "All that yard work has {verb}ne me {blank}."
        ],
        options: ["in", "up", "out", "over"]
    },
    {
        verb: "do", particle: "with", phrase: "do with", category: "daily", level: "high",
        meaning: "To need or want something (used with 'could').",
        sentences: [
            "I could {verb} {blank} a nice cup of tea right now.",
            "This room could {verb} {blank} a fresh coat of paint.",
            "She could {verb} {blank} some help with the heavy boxes.",
            "We could all {verb} {blank} a vacation after this busy month."
        ],
        options: ["with", "without", "up", "for"]
    },

    // ========================================
    // THINK (expanded)
    // ========================================
    {
        verb: "think", particle: "through", phrase: "think through", category: "business", level: "high",
        meaning: "To consider all aspects of something carefully before acting.",
        sentences: [
            "You need to {verb} this {blank} before making a decision.",
            "She hadn't {verb} {blank} the consequences of her actions.",
            "Let's {verb} {blank} the plan step by step.",
            "He didn't {verb} {blank} his response and regretted it later."
        ],
        options: ["through", "over", "up", "about"]
    },
    {
        verb: "think", particle: "back", phrase: "think back", category: "emotion", level: "high",
        meaning: "To remember or recall past events.",
        sentences: [
            "When I {verb} {blank} to my childhood, I feel nostalgic.",
            "She {verb}s {blank} fondly on her college years.",
            "{verb}ing {blank}, I realize I should have studied harder.",
            "He often {verb}s {blank} to his time living abroad."
        ],
        options: ["back", "over", "through", "up"]
    },
    {
        verb: "think", particle: "ahead", phrase: "think ahead", category: "business", level: "professional",
        meaning: "To plan or consider future events and consequences.",
        sentences: [
            "It's important to {verb} {blank} when planning a big project.",
            "She always {verb}s {blank} and prepares for the worst.",
            "If we {verb} {blank}, we can avoid most problems.",
            "Successful entrepreneurs know how to {verb} {blank}."
        ],
        options: ["ahead", "through", "over", "back"]
    },

    // ========================================
    // PLAY (expanded)
    // ========================================
    {
        verb: "play", particle: "along", phrase: "play along", category: "daily", level: "high",
        meaning: "To pretend to agree or cooperate with someone.",
        sentences: [
            "She didn't believe him, but she decided to {verb} {blank}.",
            "Just {verb} {blank} with it until we figure out what's going on.",
            "He {verb}ed {blank} with the joke even though he didn't find it funny.",
            "The detective {verb}ed {blank} to catch the suspect off guard."
        ],
        options: ["along", "down", "up", "around"]
    },
    {
        verb: "play", particle: "up", phrase: "play up", category: "business", level: "high",
        meaning: "To emphasize or exaggerate something; also for a machine to malfunction.",
        sentences: [
            "The media {verb}ed {blank} the rivalry between the two teams.",
            "She {verb}ed {blank} her experience to impress the interviewer.",
            "My computer has been {verb}ing {blank} all morning.",
            "The politician {verb}ed {blank} his humble beginnings."
        ],
        options: ["up", "down", "along", "out"]
    },
    {
        verb: "play", particle: "around", phrase: "play around", category: "daily", level: "high",
        meaning: "To experiment casually; to behave in a silly or irresponsible way.",
        sentences: [
            "I've been {verb}ing {blank} with some new recipe ideas.",
            "Stop {verb}ing {blank} and get to work!",
            "She spent the afternoon {verb}ing {blank} with the new software.",
            "The kids were {verb}ing {blank} instead of doing their homework."
        ],
        options: ["around", "along", "up", "out"]
    },

    // ========================================
    // FIND (expanded)
    // ========================================
    {
        verb: "find", particle: "out about", phrase: "find out about", category: "daily", level: "high",
        meaning: "To discover information about something or someone.",
        sentences: [
            "How did you {verb} {blank} the surprise party?",
            "She {verb} {blank} his secret life by accident.",
            "I want to {verb} {blank} study abroad programs.",
            "He {verb} {blank} the job opening through a friend."
        ],
        options: ["out about", "out", "up", "out for"]
    },

    // ========================================
    // GROW (expanded)
    // ========================================
    {
        verb: "grow", particle: "into", phrase: "grow into", category: "daily", level: "high",
        meaning: "To gradually develop into something; to become big enough for clothing.",
        sentences: [
            "She has {verb}n {blank} a confident young woman.",
            "The small startup {verb} {blank} a major corporation.",
            "The coat is too big now, but he'll {verb} {blank} it.",
            "The hobby eventually {verb} {blank} a full-time career."
        ],
        options: ["into", "up", "out of", "on"]
    },
    {
        verb: "grow", particle: "apart", phrase: "grow apart", category: "emotion", level: "middle",
        meaning: "To gradually become less close to someone over time.",
        sentences: [
            "They {verb} {blank} after she moved to another city.",
            "Old friends sometimes {verb} {blank} as their lives change.",
            "The couple slowly {verb} {blank} over the years.",
            "It's sad when siblings {verb} {blank} as adults."
        ],
        options: ["apart", "away", "out", "up"]
    },
    {
        verb: "grow", particle: "out of", phrase: "grow out of", category: "daily", level: "high",
        meaning: "To become too big or too mature for something.",
        sentences: [
            "Kids {verb} {blank} their clothes so quickly!",
            "She eventually {verb} {blank} her fear of the dark.",
            "Most children {verb} {blank} the habit of thumb-sucking.",
            "He never {verb} {blank} his love for comic books."
        ],
        options: ["out of", "into", "up", "apart"]
    },
    {
        verb: "grow", particle: "on", phrase: "grow on", category: "emotion", level: "high",
        meaning: "To gradually become more liked or appreciated over time.",
        sentences: [
            "The song is starting to {verb} {blank} me — I hated it at first.",
            "The new city {verb} {blank} her after a few months.",
            "He might seem strange at first, but he'll {verb} {blank} you.",
            "The taste of dark chocolate {verb}s {blank} you over time."
        ],
        options: ["on", "up", "into", "out"]
    },

    // ========================================
    // BUILD (expanded)
    // ========================================
    {
        verb: "build", particle: "on", phrase: "build on", category: "business", level: "high",
        meaning: "To use something as a foundation for further development.",
        sentences: [
            "We need to {verb} {blank} the success of last year's campaign.",
            "The new policy {verb}s {blank} existing regulations.",
            "She plans to {verb} {blank} her experience in marketing.",
            "The team {verb} {blank} each other's ideas during the brainstorm."
        ],
        options: ["on", "up", "out", "in"]
    },
    {
        verb: "build", particle: "in", phrase: "build in", category: "business", level: "high",
        meaning: "To include something as an integral part of a plan or structure.",
        sentences: [
            "We should {verb} {blank} extra time for unexpected delays.",
            "The software has safety features {verb}t {blank}.",
            "They {verb} {blank} flexibility to the new schedule.",
            "Make sure to {verb} {blank} a buffer for the budget."
        ],
        options: ["in", "up", "on", "out"]
    },

    // ========================================
    // EAT (expanded)
    // ========================================
    {
        verb: "eat", particle: "up", phrase: "eat up", category: "daily", level: "high",
        meaning: "To eat all of something; to use a lot of resources; to enjoy something greatly.",
        sentences: [
            "{verb} {blank} your vegetables — they're good for you!",
            "The new software {verb}s {blank} all my computer's memory.",
            "The kids just {verb} {blank} stories about dinosaurs.",
            "Streaming video {verb}s {blank} a lot of bandwidth."
        ],
        options: ["up", "out", "away", "in"]
    },
    {
        verb: "eat", particle: "away at", phrase: "eat away at", category: "emotion", level: "high",
        meaning: "To gradually destroy or erode; to cause persistent worry.",
        sentences: [
            "Guilt has been {verb}ing {blank} her for months.",
            "Rust is slowly {verb}ing {blank} the metal gate.",
            "The acid {verb}s {blank} the surface over time.",
            "Doubt was {verb}ing {blank} his confidence."
        ],
        options: ["away at", "up", "out", "into"]
    },
    {
        verb: "eat", particle: "into", phrase: "eat into", category: "business", level: "high",
        meaning: "To use up a portion of something valuable like time, money, or resources.",
        sentences: [
            "The repairs are {verb}ing {blank} our savings.",
            "Commuting {verb}s {blank} my free time every day.",
            "Legal fees {verb} {blank} the company's profits.",
            "Unexpected expenses keep {verb}ing {blank} our budget."
        ],
        options: ["into", "up", "away at", "out"]
    },

    // ========================================
    // CATCH (expanded)
    // ========================================
    {
        verb: "catch", particle: "up with", phrase: "catch up with", category: "daily", level: "high",
        meaning: "To reach someone who is ahead; to finally affect someone negatively.",
        sentences: [
            "Years of unhealthy eating finally {verb} {blank} him.",
            "She ran fast but couldn't {verb} {blank} the leader.",
            "His lies eventually {verb} {blank} him.",
            "I need to {verb} {blank} my classmates after being absent."
        ],
        options: ["up with", "on", "out", "up"]
    },
    {
        verb: "catch", particle: "out", phrase: "catch out", category: "daily", level: "high",
        meaning: "To discover someone doing something wrong or making a mistake.",
        sentences: [
            "The teacher {verb} the student {blank} cheating on the exam.",
            "Be careful — the tricky questions are designed to {verb} you {blank}.",
            "She was {verb} {blank} by the unexpected follow-up question.",
            "The auditor {verb} {blank} several accounting errors."
        ],
        options: ["out", "up", "on", "off"]
    },

    // ========================================
    // COUNT (expanded)
    // ========================================
    {
        verb: "count", particle: "down", phrase: "count down", category: "daily", level: "high",
        meaning: "To count backwards to zero; to eagerly wait for something.",
        sentences: [
            "The crowd {verb}ed {blank} from ten to welcome the New Year.",
            "We're {verb}ing {blank} the days until summer vacation.",
            "She's {verb}ing {blank} to her wedding day.",
            "The rocket will launch when the {verb} {blank} reaches zero."
        ],
        options: ["down", "on", "up", "off"]
    },
    {
        verb: "count", particle: "in", phrase: "count in", category: "daily", level: "high",
        meaning: "To include someone in an activity or plan.",
        sentences: [
            "If you're going to the beach, {verb} me {blank}!",
            "We need one more player — can we {verb} you {blank}?",
            "{verb} us {blank} — we'd love to join the trip.",
            "She {verb}ed him {blank} on the surprise party planning."
        ],
        options: ["in", "on", "out", "down"]
    },
    {
        verb: "count", particle: "out", phrase: "count out", category: "daily", level: "high",
        meaning: "To exclude someone from an activity; to count items one by one.",
        sentences: [
            "If it involves camping, {verb} me {blank}!",
            "She carefully {verb}ed {blank} the exact change for the bus.",
            "Don't {verb} him {blank} — he might surprise you.",
            "The cashier {verb}ed {blank} the bills one by one."
        ],
        options: ["out", "in", "down", "on"]
    },

    // ========================================
    // SIGN (expanded)
    // ========================================
    {
        verb: "sign", particle: "in", phrase: "sign in", category: "daily", level: "high",
        meaning: "To register your arrival by writing your name; to log into an account.",
        sentences: [
            "Please {verb} {blank} at the reception desk when you arrive.",
            "I can't {verb} {blank} to my email — I forgot my password.",
            "All visitors must {verb} {blank} before entering the building.",
            "She {verb}ed {blank} to the online meeting five minutes early."
        ],
        options: ["in", "up", "on", "out"]
    },
    {
        verb: "sign", particle: "off", phrase: "sign off", category: "business", level: "high",
        meaning: "To give formal approval; to end a broadcast or communication.",
        sentences: [
            "The director needs to {verb} {blank} on the final design.",
            "She {verb}ed {blank} the email with 'Best regards.'",
            "The manager must {verb} {blank} before we can proceed.",
            "The news anchor {verb}ed {blank} with her usual catchphrase."
        ],
        options: ["off", "up", "in", "on"]
    },
    {
        verb: "sign", particle: "out", phrase: "sign out", category: "daily", level: "high",
        meaning: "To record your departure; to log out of an account.",
        sentences: [
            "Don't forget to {verb} {blank} when you leave the building.",
            "Always {verb} {blank} of your account on public computers.",
            "She {verb}ed {blank} of the system at the end of her shift.",
            "Please {verb} {blank} any equipment you borrow."
        ],
        options: ["out", "in", "off", "up"]
    },
    {
        verb: "sign", particle: "over", phrase: "sign over", category: "business", level: "college",
        meaning: "To officially transfer ownership of something by signing a document.",
        sentences: [
            "He {verb}ed {blank} the property to his daughter.",
            "She had to {verb} {blank} her shares in the company.",
            "The house was {verb}ed {blank} to the new owners last week.",
            "He {verb}ed {blank} his rights to the book to the publisher."
        ],
        options: ["over", "off", "out", "up"]
    },

    // ========================================
    // END (expanded)
    // ========================================
    {
        verb: "end", particle: "in", phrase: "end in", category: "daily", level: "high",
        meaning: "To have a particular result or conclusion.",
        sentences: [
            "The argument {verb}ed {blank} tears.",
            "The game {verb}ed {blank} a draw after extra time.",
            "Their relationship {verb}ed {blank} disaster.",
            "The negotiations {verb}ed {blank} failure."
        ],
        options: ["in", "up", "with", "on"]
    },

    // ========================================
    // CLOSE (expanded)
    // ========================================
    {
        verb: "close", particle: "off", phrase: "close off", category: "daily", level: "high",
        meaning: "To block or seal an area to prevent access.",
        sentences: [
            "Police {verb}d {blank} the street after the accident.",
            "The damaged wing of the building has been {verb}d {blank}.",
            "They {verb}d {blank} the park for the annual festival.",
            "The road will be {verb}d {blank} for construction next week."
        ],
        options: ["off", "down", "up", "out"]
    },
    {
        verb: "close", particle: "in on", phrase: "close in on", category: "daily", level: "high",
        meaning: "To get nearer to someone or something, especially when trying to catch them.",
        sentences: [
            "The police are {verb}ing {blank} the suspect.",
            "Winter is {verb}ing {blank} and the days are getting shorter.",
            "The deadline is {verb}ing {blank} us fast.",
            "The hunters slowly {verb}d {blank} the animal."
        ],
        options: ["in on", "down on", "off", "out on"]
    },

    // ========================================
    // RUN (expanded)
    // ========================================
    {
        verb: "run", particle: "down", phrase: "run down", category: "daily", level: "high",
        meaning: "To lose power; to criticize someone; to give a quick summary.",
        sentences: [
            "My phone battery has {verb} {blank} — I need to charge it.",
            "Stop {verb}ning {blank} your sister — she's doing her best.",
            "Let me {verb} you {blank} the main points of the report.",
            "The old clock has {verb} {blank} and needs winding."
        ],
        options: ["down", "out", "off", "over"]
    },
    {
        verb: "run", particle: "up", phrase: "run up", category: "business", level: "high",
        meaning: "To accumulate a large bill or debt; to quickly make something.",
        sentences: [
            "She {verb} {blank} a huge credit card bill on vacation.",
            "He {verb} {blank} enormous debts before anyone noticed.",
            "They {verb} {blank} the flag every morning at camp.",
            "Don't {verb} {blank} unnecessary expenses on the company account."
        ],
        options: ["up", "down", "out", "off"]
    },
    {
        verb: "run", particle: "through", phrase: "run through", category: "academic", level: "high",
        meaning: "To review or practice something quickly; to spend money carelessly.",
        sentences: [
            "Let's {verb} {blank} the plan one more time before we start.",
            "She {verb} {blank} her notes before the exam.",
            "He {verb} {blank} his entire inheritance in two years.",
            "Can we {verb} {blank} the presentation once before the meeting?"
        ],
        options: ["through", "over", "down", "out"]
    },

    // ========================================
    // KEEP (expanded)
    // ========================================
    {
        verb: "keep", particle: "out", phrase: "keep out", category: "daily", level: "middle",
        meaning: "To prevent someone or something from entering.",
        sentences: [
            "The fence is meant to {verb} intruders {blank}.",
            "{verb} {blank}! This area is restricted.",
            "Close the windows to {verb} the bugs {blank}.",
            "The sign says '{verb} {blank} — Authorized Personnel Only.'"
        ],
        options: ["out", "off", "away", "back"]
    },
    {
        verb: "keep", particle: "off", phrase: "keep off", category: "daily", level: "middle",
        meaning: "To stay away from something; to avoid touching or walking on.",
        sentences: [
            "Please {verb} {blank} the grass — it's just been seeded.",
            "The doctor told him to {verb} {blank} fatty foods.",
            "The sign says '{verb} {blank} the lawn.'",
            "She tries to {verb} {blank} social media during work hours."
        ],
        options: ["off", "out", "away", "back"]
    },
    {
        verb: "keep", particle: "back", phrase: "keep back", category: "daily", level: "high",
        meaning: "To stay at a distance; to not tell someone something.",
        sentences: [
            "The police told the crowd to {verb} {blank}.",
            "I feel like she's {verb}ing something {blank} from me.",
            "{verb} {blank} from the edge — it's dangerous!",
            "He was {verb}ing {blank} important information from the team."
        ],
        options: ["back", "off", "out", "away"]
    },

    // ========================================
    // HOLD (expanded)
    // ========================================
    {
        verb: "hold", particle: "out", phrase: "hold out", category: "business", level: "high",
        meaning: "To resist or last; to extend something toward someone.",
        sentences: [
            "How long can the company {verb} {blank} against the competition?",
            "She {verb} {blank} her hand to shake his.",
            "The food supplies won't {verb} {blank} much longer.",
            "He's {verb}ing {blank} for a better offer before accepting."
        ],
        options: ["out", "on", "up", "off"]
    },
    {
        verb: "hold", particle: "down", phrase: "hold down", category: "business", level: "high",
        meaning: "To keep a job; to keep something at a low level; to restrain.",
        sentences: [
            "He's never been able to {verb} {blank} a job for more than a year.",
            "The government is trying to {verb} {blank} inflation.",
            "Two people had to {verb} him {blank} while the doctor treated him.",
            "She managed to {verb} {blank} three jobs while going to school."
        ],
        options: ["down", "up", "on", "off"]
    },

    // ========================================
    // FALL (expanded)
    // ========================================
    {
        verb: "fall", particle: "for", phrase: "fall for", category: "emotion", level: "middle",
        meaning: "To develop romantic feelings; to be deceived by a trick.",
        sentences: [
            "She {verb} {blank} him the moment they met.",
            "Don't {verb} {blank} that scam — it's obviously fake.",
            "He {verb} {blank} the oldest trick in the book.",
            "They {verb} {blank} each other while studying abroad."
        ],
        options: ["for", "apart", "behind", "through"]
    },
    {
        verb: "fall", particle: "out", phrase: "fall out", category: "emotion", level: "middle",
        meaning: "To have an argument and stop being friendly with someone.",
        sentences: [
            "They {verb} {blank} over a trivial misunderstanding.",
            "She {verb} {blank} with her best friend over money.",
            "The two brothers {verb} {blank} and haven't spoken in years.",
            "It's sad when families {verb} {blank} over inheritance."
        ],
        options: ["out", "apart", "behind", "through"]
    },
    {
        verb: "fall", particle: "off", phrase: "fall off", category: "daily", level: "high",
        meaning: "To decrease in quantity or quality; to drop from something.",
        sentences: [
            "Sales have {verb}en {blank} dramatically this quarter.",
            "The child {verb} {blank} the bicycle and scraped her knee.",
            "Attendance has {verb}en {blank} since the price increase.",
            "A button {verb} {blank} my coat."
        ],
        options: ["off", "out", "behind", "apart"]
    },

    // ========================================
    // BRING (expanded)
    // ========================================
    {
        verb: "bring", particle: "in", phrase: "bring in", category: "business", level: "middle",
        meaning: "To earn or generate money; to introduce something new; to involve someone.",
        sentences: [
            "The new product line {verb}s {blank} millions of dollars a year.",
            "They decided to {verb} {blank} an outside consultant.",
            "The company {verb} {blank} new regulations for remote work.",
            "Tourism {verb}s {blank} a lot of revenue for the city."
        ],
        options: ["in", "up", "about", "out"]
    },
    {
        verb: "bring", particle: "forward", phrase: "bring forward", category: "business", level: "high",
        meaning: "To move an event to an earlier date or time; to present an idea.",
        sentences: [
            "The meeting has been {verb} {blank} to Monday.",
            "She {verb} {blank} a new proposal at the conference.",
            "Can we {verb} the deadline {blank} by a week?",
            "Several important issues were {verb} {blank} during the discussion."
        ],
        options: ["forward", "back", "up", "about"]
    },

    // ========================================
    // BREAK (expanded)
    // ========================================
    {
        verb: "break", particle: "off", phrase: "break off", category: "emotion", level: "high",
        meaning: "To suddenly stop speaking; to end a relationship or agreement.",
        sentences: [
            "She {verb} {blank} the engagement two weeks before the wedding.",
            "He {verb} {blank} mid-sentence when he saw who walked in.",
            "The two countries {verb} {blank} diplomatic relations.",
            "She {verb} {blank} a piece of chocolate and shared it."
        ],
        options: ["off", "up", "down", "out"]
    },
    {
        verb: "break", particle: "into", phrase: "break into", category: "business", level: "high",
        meaning: "To enter a building by force; to start a new career or market.",
        sentences: [
            "Someone {verb} {blank} the office and stole two laptops.",
            "It's very hard to {verb} {blank} the fashion industry.",
            "She hopes to {verb} {blank} acting after studying drama.",
            "The company is trying to {verb} {blank} the Asian market."
        ],
        options: ["into", "in", "through", "out"]
    },

    // ========================================
    // COME (expanded)
    // ========================================
    {
        verb: "come", particle: "around", phrase: "come around", category: "emotion", level: "middle",
        meaning: "To change your opinion; to regain consciousness; to visit.",
        sentences: [
            "He was against the idea at first, but he'll {verb} {blank}.",
            "She {verb} {blank} after fainting and asked what happened.",
            "My grandmother {verb}s {blank} for tea every Sunday.",
            "Give him time — he'll {verb} {blank} to your way of thinking."
        ],
        options: ["around", "over", "back", "along"]
    },
    {
        verb: "come", particle: "off", phrase: "come off", category: "daily", level: "high",
        meaning: "To become detached; to succeed or fail; to seem or appear.",
        sentences: [
            "The button {verb} {blank} my shirt during the meeting.",
            "The charity event {verb} {blank} really well this year.",
            "She didn't mean to {verb} {blank} as rude.",
            "The paint is {verb}ing {blank} the wall in the bathroom."
        ],
        options: ["off", "out", "up", "along"]
    },
    {
        verb: "come", particle: "through", phrase: "come through", category: "emotion", level: "high",
        meaning: "To survive a difficult situation; to deliver on a promise.",
        sentences: [
            "She {verb} {blank} the surgery without any complications.",
            "I knew he would {verb} {blank} for us when we needed him.",
            "The funding finally {verb} {blank} at the last minute.",
            "Despite all the challenges, they {verb} {blank} stronger than ever."
        ],
        options: ["through", "around", "along", "over"]
    },

    // ========================================
    // PUT (expanded)
    // ========================================
    {
        verb: "put", particle: "across", phrase: "put across", category: "business", level: "high",
        meaning: "To communicate or explain an idea clearly.",
        sentences: [
            "She {verb} her ideas {blank} very clearly in the meeting.",
            "He struggled to {verb} {blank} what he really meant.",
            "The speaker {verb} {blank} a compelling argument.",
            "It's important to {verb} your point {blank} without being aggressive."
        ],
        options: ["across", "through", "up", "forward"]
    },
    {
        verb: "put", particle: "forward", phrase: "put forward", category: "business", level: "high",
        meaning: "To propose or suggest an idea or plan for consideration.",
        sentences: [
            "She {verb} {blank} an excellent proposal at the meeting.",
            "Several candidates have been {verb} {blank} for the position.",
            "He {verb} {blank} a plan to reduce costs by 20 percent.",
            "The committee {verb} {blank} new guidelines for the project."
        ],
        options: ["forward", "across", "up", "through"]
    },
    {
        verb: "put", particle: "in", phrase: "put in", category: "business", level: "high",
        meaning: "To spend time or effort on something; to submit or install.",
        sentences: [
            "She {verb}s {blank} long hours at the office every day.",
            "He {verb} {blank} a request for a transfer to the London office.",
            "They {verb} {blank} a new heating system last winter.",
            "You need to {verb} {blank} the work if you want results."
        ],
        options: ["in", "on", "up", "out"]
    },

    // ========================================
    // LOOK (expanded)
    // ========================================
    {
        verb: "look", particle: "through", phrase: "look through", category: "academic", level: "middle",
        meaning: "To examine or read something carefully from beginning to end.",
        sentences: [
            "I'll {verb} {blank} the documents and get back to you.",
            "She spent hours {verb}ing {blank} old photographs.",
            "Could you {verb} {blank} this report for any errors?",
            "He {verb}ed {blank} the entire file but couldn't find the receipt."
        ],
        options: ["through", "over", "into", "up"]
    },
    {
        verb: "look", particle: "back on", phrase: "look back on", category: "emotion", level: "high",
        meaning: "To think about something that happened in the past.",
        sentences: [
            "She {verb}s {blank} her childhood with great fondness.",
            "When I {verb} {blank} those years, I realize how much I've grown.",
            "He {verb}s {blank} his time in the army as the best years of his life.",
            "One day you'll {verb} {blank} this and laugh."
        ],
        options: ["back on", "up to", "forward to", "down on"]
    },

    // ========================================
    // TURN (expanded)
    // ========================================
    {
        verb: "turn", particle: "over", phrase: "turn over", category: "daily", level: "high",
        meaning: "To flip something; to give control to someone; to consider carefully.",
        sentences: [
            "Please {verb} {blank} the page and continue reading.",
            "She {verb}ed {blank} the idea in her mind for weeks.",
            "He {verb}ed the evidence {blank} to the police.",
            "The company {verb}s {blank} millions of dollars a year."
        ],
        options: ["over", "around", "in", "out"]
    },

    // ========================================
    // SET (expanded)
    // ========================================
    {
        verb: "set", particle: "in", phrase: "set in", category: "daily", level: "high",
        meaning: "To begin and seem likely to continue (usually something unpleasant).",
        sentences: [
            "Winter has {verb} {blank} early this year.",
            "Panic {verb} {blank} when the lights suddenly went out.",
            "Reality {verb} {blank} when she realized the deadline was tomorrow.",
            "Infection can {verb} {blank} if the wound isn't cleaned properly."
        ],
        options: ["in", "off", "out", "up"]
    },
    {
        verb: "set", particle: "apart", phrase: "set apart", category: "business", level: "high",
        meaning: "To make someone or something different from others in a positive way.",
        sentences: [
            "Her creativity {verb}s her {blank} from the other candidates.",
            "What {verb}s this restaurant {blank} is its unique atmosphere.",
            "His work ethic {verb}s him {blank} from his peers.",
            "Quality customer service {verb}s them {blank} from competitors."
        ],
        options: ["apart", "aside", "off", "up"]
    },
    {
        verb: "set", particle: "aside", phrase: "set aside", category: "daily", level: "high",
        meaning: "To save or reserve something for a particular purpose; to ignore temporarily.",
        sentences: [
            "She {verb}s {blank} an hour each day for exercise.",
            "Let's {verb} {blank} our differences and work together.",
            "He {verb} {blank} some money each month for his daughter's education.",
            "The court {verb} {blank} the previous ruling."
        ],
        options: ["aside", "apart", "away", "off"]
    },

    // ========================================
    // WORK (expanded)
    // ========================================
    {
        verb: "work", particle: "through", phrase: "work through", category: "emotion", level: "high",
        meaning: "To deal with a problem or difficult emotion over time.",
        sentences: [
            "She's still {verb}ing {blank} the grief of losing her father.",
            "The therapist helped him {verb} {blank} his anxiety.",
            "We need to {verb} {blank} these issues before they get worse.",
            "It took years to {verb} {blank} the trauma of the accident."
        ],
        options: ["through", "out", "on", "up"]
    },
    {
        verb: "work", particle: "around", phrase: "work around", category: "business", level: "high",
        meaning: "To find a way to deal with a problem without solving it directly.",
        sentences: [
            "We'll have to {verb} {blank} the budget limitations.",
            "She managed to {verb} {blank} the technical issue.",
            "There's no direct solution, but we can {verb} {blank} it.",
            "The team {verb}ed {blank} the restrictions to deliver on time."
        ],
        options: ["around", "through", "out", "on"]
    },

    // ========================================
    // CALL (expanded)
    // ========================================
    {
        verb: "call", particle: "up", phrase: "call up", category: "daily", level: "middle",
        meaning: "To phone someone; to bring back memories; to summon for military service.",
        sentences: [
            "I'll {verb} you {blank} tonight to discuss the plans.",
            "The old song {verb}s {blank} memories of my childhood.",
            "Thousands of reservists were {verb}ed {blank} during the crisis.",
            "She {verb}ed {blank} the restaurant to make a reservation."
        ],
        options: ["up", "back", "off", "on"]
    },
    {
        verb: "call", particle: "out", phrase: "call out", category: "business", level: "middle",
        meaning: "To publicly criticize someone for wrongdoing; to shout.",
        sentences: [
            "She {verb}ed {blank} the company for its unfair labor practices.",
            "He {verb}ed {blank} her name across the crowded room.",
            "The journalist {verb}ed {blank} the politician for lying.",
            "Don't be afraid to {verb} {blank} bad behavior when you see it."
        ],
        options: ["out", "on", "off", "up"]
    },

    // ========================================
    // STAND (expanded)
    // ========================================
    {
        verb: "stand", particle: "by", phrase: "stand by", category: "emotion", level: "high",
        meaning: "To support someone; to wait and be ready; to maintain a statement.",
        sentences: [
            "She {verb} {blank} her husband throughout the scandal.",
            "Please {verb} {blank} while we process your application.",
            "I {verb} {blank} what I said — it's the truth.",
            "True friends will always {verb} {blank} you."
        ],
        options: ["by", "for", "up", "out"]
    },
    {
        verb: "stand", particle: "in for", phrase: "stand in for", category: "business", level: "high",
        meaning: "To temporarily take someone's place or role.",
        sentences: [
            "She {verb} {blank} the manager while he was on leave.",
            "Can someone {verb} {blank} me at the meeting tomorrow?",
            "The understudy had to {verb} {blank} the lead actress.",
            "He {verb} {blank} the regular host of the show."
        ],
        options: ["in for", "up for", "out for", "by"]
    },

    // ========================================
    // PAY (expanded)
    // ========================================
    {
        verb: "pay", particle: "up", phrase: "pay up", category: "daily", level: "high",
        meaning: "To pay a debt or bill, often reluctantly.",
        sentences: [
            "You lost the bet — time to {verb} {blank}!",
            "If you don't {verb} {blank}, they'll send a collection agency.",
            "He finally {verb}ed {blank} after months of avoiding the bill.",
            "The insurance company refused to {verb} {blank} for the damage."
        ],
        options: ["up", "off", "back", "out"]
    },
    {
        verb: "pay", particle: "out", phrase: "pay out", category: "business", level: "high",
        meaning: "To give a large amount of money to someone.",
        sentences: [
            "The company {verb}s {blank} millions in bonuses every year.",
            "The insurance policy {verb}s {blank} in case of an accident.",
            "They had to {verb} {blank} a fortune in legal fees.",
            "The lottery {verb}s {blank} the jackpot to a single winner."
        ],
        options: ["out", "off", "up", "back"]
    },
    {
        verb: "pay", particle: "for", phrase: "pay for", category: "daily", level: "middle",
        meaning: "To suffer consequences for something bad you did.",
        sentences: [
            "He'll {verb} {blank} his dishonesty sooner or later.",
            "She {verb}ed {blank} her reckless driving with a hefty fine.",
            "You'll {verb} {blank} skipping practice when the tournament starts.",
            "The company {verb}ed {blank} ignoring safety regulations."
        ],
        options: ["for", "off", "back", "out"]
    },

    // ========================================
    // PULL (expanded)
    // ========================================
    {
        verb: "pull", particle: "out", phrase: "pull out", category: "business", level: "high",
        meaning: "To withdraw from an agreement, project, or situation.",
        sentences: [
            "The investor {verb}ed {blank} of the deal at the last minute.",
            "She {verb}ed {blank} of the race due to an injury.",
            "The company {verb}ed {blank} of the overseas market.",
            "He {verb}ed {blank} his wallet and paid for everyone."
        ],
        options: ["out", "off", "through", "over"]
    },
    {
        verb: "pull", particle: "together", phrase: "pull together", category: "emotion", level: "high",
        meaning: "To work as a team; to regain composure.",
        sentences: [
            "If we all {verb} {blank}, we can finish this project on time.",
            "She needs to {verb} herself {blank} before the presentation.",
            "The community {verb}ed {blank} after the natural disaster.",
            "Come on, {verb} yourself {blank} — we need you."
        ],
        options: ["together", "through", "off", "out"]
    },
    {
        verb: "pull", particle: "apart", phrase: "pull apart", category: "daily", level: "high",
        meaning: "To separate into pieces; to criticize severely; to cause division.",
        sentences: [
            "The kids {verb}ed the toy {blank} within minutes.",
            "The reviewer {verb}ed {blank} every argument in the paper.",
            "The scandal {verb}ed the family {blank}.",
            "She {verb}ed {blank} the old engine to see what was wrong."
        ],
        options: ["apart", "off", "out", "through"]
    },

    // ========================================
    // THROW (expanded)
    // ========================================
    {
        verb: "throw", particle: "in", phrase: "throw in", category: "daily", level: "high",
        meaning: "To include something extra for free; to add a comment casually.",
        sentences: [
            "Buy two shirts and we'll {verb} {blank} a free tie.",
            "She {verb} {blank} a few jokes to keep the audience entertained.",
            "The dealer {verb} {blank} free floor mats with the car.",
            "He's ready to {verb} {blank} the towel and give up."
        ],
        options: ["in", "out", "away", "up"]
    },
    {
        verb: "throw", particle: "off", phrase: "throw off", category: "daily", level: "high",
        meaning: "To confuse or mislead someone; to get rid of something.",
        sentences: [
            "The unexpected question {verb} her {blank} completely.",
            "She couldn't {verb} {blank} the feeling that something was wrong.",
            "The criminal {verb} the police {blank} his trail.",
            "The sudden noise {verb} {blank} the performer's concentration."
        ],
        options: ["off", "out", "away", "up"]
    },

    // ========================================
    // PASS (expanded)
    // ========================================
    {
        verb: "pass", particle: "up", phrase: "pass up", category: "business", level: "high",
        meaning: "To decline or not take advantage of an opportunity.",
        sentences: [
            "You'd be crazy to {verb} {blank} such a great opportunity.",
            "She {verb}ed {blank} the promotion because it required relocating.",
            "He {verb}ed {blank} the chance to study abroad.",
            "Don't {verb} {blank} this deal — it won't come around again."
        ],
        options: ["up", "on", "out", "over"]
    },
    {
        verb: "pass", particle: "by", phrase: "pass by", category: "daily", level: "high",
        meaning: "To go past; for time to elapse.",
        sentences: [
            "I {verb} {blank} your house every day on my way to work.",
            "Time {verb}es {blank} so quickly when you're having fun.",
            "She watched the parade {verb} {blank} from her balcony.",
            "Don't let this opportunity {verb} you {blank}."
        ],
        options: ["by", "on", "away", "out"]
    },
    {
        verb: "pass", particle: "off as", phrase: "pass off as", category: "daily", level: "high",
        meaning: "To pretend to be something or someone you're not; to present falsely.",
        sentences: [
            "He tried to {verb} himself {blank} an expert, but nobody believed him.",
            "She {verb}ed {blank} the fake painting {blank} an original.",
            "The spy {verb}ed himself {blank} a businessman.",
            "They tried to {verb} {blank} the cheap wine {blank} expensive vintage."
        ],
        options: ["off as", "out as", "on as", "by as"]
    },

    // ========================================
    // HAND (expanded)
    // ========================================
    {
        verb: "hand", particle: "down", phrase: "hand down", category: "daily", level: "high",
        meaning: "To pass something from one generation to the next; to announce a verdict.",
        sentences: [
            "The recipe was {verb}ed {blank} through generations.",
            "The judge {verb}ed {blank} a severe sentence.",
            "My grandmother {verb}ed {blank} this necklace to my mother.",
            "These traditions have been {verb}ed {blank} for centuries."
        ],
        options: ["down", "over", "out", "in"]
    },
    {
        verb: "hand", particle: "back", phrase: "hand back", category: "daily", level: "high",
        meaning: "To return something to the person who gave it to you.",
        sentences: [
            "She {verb}ed {blank} the borrowed book the next day.",
            "Please {verb} {blank} your badges before leaving the building.",
            "He {verb}ed the money {blank} and refused to accept it.",
            "The teacher {verb}ed {blank} the graded exams to the students."
        ],
        options: ["back", "in", "over", "out"]
    },

    // ========================================
    // HANG (expanded)
    // ========================================
    {
        verb: "hang", particle: "around", phrase: "hang around", category: "daily", level: "middle",
        meaning: "To stay in a place without any particular purpose.",
        sentences: [
            "Teenagers often {verb} {blank} the shopping mall after school.",
            "Don't {verb} {blank} here — go find something useful to do.",
            "She {verb}s {blank} the coffee shop every afternoon.",
            "He was just {verb}ing {blank} waiting for his friend."
        ],
        options: ["around", "out", "up", "on"]
    },
    {
        verb: "hang", particle: "in", phrase: "hang in", category: "emotion", level: "high",
        meaning: "To persevere; to keep trying despite difficulties (often 'hang in there').",
        sentences: [
            "{verb} {blank} there — things will get better!",
            "She told him to {verb} {blank} and not give up on his dreams.",
            "Just {verb} {blank} a little longer — the weekend is almost here.",
            "{verb} {blank} there — help is on the way!"
        ],
        options: ["in", "on", "out", "up"]
    },

    // ========================================
    // PICK (expanded)
    // ========================================
    {
        verb: "pick", particle: "off", phrase: "pick off", category: "daily", level: "high",
        meaning: "To remove something by pulling; to shoot targets one by one.",
        sentences: [
            "She {verb}ed {blank} the dead leaves from the plant.",
            "The sniper {verb}ed {blank} the enemies one by one.",
            "He {verb}ed {blank} the sticker from the window.",
            "The outfielder {verb}ed {blank} the runner at second base."
        ],
        options: ["off", "out", "up", "on"]
    },

    // ========================================
    // MOVE (expanded)
    // ========================================
    {
        verb: "move", particle: "up", phrase: "move up", category: "business", level: "middle",
        meaning: "To advance to a higher position or level.",
        sentences: [
            "She {verb}d {blank} quickly in the company hierarchy.",
            "He's hoping to {verb} {blank} to a management position.",
            "The meeting has been {verb}d {blank} to 9 AM instead of 10.",
            "She {verb}d {blank} from junior developer to team lead in two years."
        ],
        options: ["up", "on", "out", "in"]
    },
    {
        verb: "move", particle: "along", phrase: "move along", category: "daily", level: "high",
        meaning: "To continue moving; to make progress.",
        sentences: [
            "The police told the crowd to {verb} {blank}.",
            "Let's {verb} {blank} — there's nothing to see here.",
            "The project is {verb}ing {blank} nicely.",
            "We need to {verb} {blank} if we want to finish on time."
        ],
        options: ["along", "on", "up", "out"]
    },

    // ========================================
    // STEP (expanded)
    // ========================================
    {
        verb: "step", particle: "in", phrase: "step in", category: "business", level: "middle",
        meaning: "To become involved in a situation to help or take control.",
        sentences: [
            "The government had to {verb} {blank} to resolve the dispute.",
            "She {verb}ped {blank} when she saw the two men arguing.",
            "Someone needs to {verb} {blank} and take responsibility.",
            "The substitute teacher {verb}ped {blank} while Mrs. Smith was ill."
        ],
        options: ["in", "up", "down", "out"]
    },
    {
        verb: "step", particle: "out", phrase: "step out", category: "daily", level: "middle",
        meaning: "To leave a room or building briefly.",
        sentences: [
            "She {verb}ped {blank} to take a phone call.",
            "I just need to {verb} {blank} for a moment — I'll be right back.",
            "He {verb}ped {blank} of the meeting to get some water.",
            "She {verb}ped {blank} of the office for a quick break."
        ],
        options: ["out", "in", "up", "down"]
    },

    // ========================================
    // SHUT (expanded)
    // ========================================
    {
        verb: "shut", particle: "out", phrase: "shut out", category: "emotion", level: "high",
        meaning: "To exclude someone; to block something from entering; to prevent from scoring.",
        sentences: [
            "She felt {verb} {blank} by her classmates at school.",
            "Close the curtains to {verb} {blank} the light.",
            "He {verb}s {blank} everyone who tries to get close to him.",
            "The goalkeeper {verb} {blank} the opposing team entirely."
        ],
        options: ["out", "down", "up", "off"]
    },

    // ========================================
    // STICK (expanded)
    // ========================================
    {
        verb: "stick", particle: "with", phrase: "stick with", category: "daily", level: "high",
        meaning: "To continue with something; to remain loyal to someone.",
        sentences: [
            "I'm going to {verb} {blank} my original decision.",
            "{verb} {blank} me and I'll teach you everything I know.",
            "She decided to {verb} {blank} the job despite the low pay.",
            "He always {verb}s {blank} his friends no matter what."
        ],
        options: ["with", "to", "by", "on"]
    },
    {
        verb: "stick", particle: "up for", phrase: "stick up for", category: "emotion", level: "high",
        meaning: "To defend or support someone, especially when they are being criticized.",
        sentences: [
            "She always {verb}s {blank} her younger brother at school.",
            "Nobody {verb} {blank} him when the boss criticized his work.",
            "You should learn to {verb} {blank} yourself.",
            "He {verb} {blank} his colleague when she was unfairly blamed."
        ],
        options: ["up for", "with", "to", "out for"]
    },
    {
        verb: "stick", particle: "around", phrase: "stick around", category: "daily", level: "high",
        meaning: "To stay in a place and wait.",
        sentences: [
            "{verb} {blank} — the show is about to start.",
            "She decided not to {verb} {blank} for the after-party.",
            "If you {verb} {blank}, you'll get to meet the band.",
            "He didn't {verb} {blank} long enough to hear the announcement."
        ],
        options: ["around", "out", "with", "to"]
    },

    // ========================================
    // SETTLE (expanded)
    // ========================================
    {
        verb: "settle", particle: "in", phrase: "settle in", category: "daily", level: "high",
        meaning: "To become comfortable in a new home, job, or situation.",
        sentences: [
            "It took her a few weeks to {verb} {blank} at her new job.",
            "The family is still {verb}ing {blank} to their new home.",
            "Make yourself comfortable and {verb} {blank}.",
            "He's gradually {verb}ing {blank} to life in a new country."
        ],
        options: ["in", "down", "for", "on"]
    },
    {
        verb: "settle", particle: "up", phrase: "settle up", category: "daily", level: "high",
        meaning: "To pay what you owe; to resolve a financial matter.",
        sentences: [
            "Let's {verb} {blank} the bill and head home.",
            "She went to the bar to {verb} {blank} before leaving.",
            "We need to {verb} {blank} our accounts by the end of the month.",
            "He promised to {verb} {blank} with me next payday."
        ],
        options: ["up", "down", "for", "in"]
    },

    // ========================================
    // BLOW (expanded)
    // ========================================
    {
        verb: "blow", particle: "off", phrase: "blow off", category: "daily", level: "high",
        meaning: "To ignore someone or not attend something; to release built-up energy.",
        sentences: [
            "He {verb} {blank} the meeting and went to play golf instead.",
            "She felt hurt when her friends {verb} her {blank}.",
            "I need to {verb} {blank} some steam after this stressful week.",
            "Don't {verb} {blank} your responsibilities."
        ],
        options: ["off", "up", "out", "away"]
    },
    {
        verb: "blow", particle: "over", phrase: "blow over", category: "daily", level: "high",
        meaning: "For a storm or controversy to pass and be forgotten.",
        sentences: [
            "Don't worry — the scandal will {verb} {blank} in a few weeks.",
            "The storm {verb} {blank} by morning.",
            "She decided to wait for the controversy to {verb} {blank}.",
            "This argument will {verb} {blank} — just give it time."
        ],
        options: ["over", "out", "up", "off"]
    },

    // ========================================
    // WEAR (expanded)
    // ========================================
    {
        verb: "wear", particle: "down", phrase: "wear down", category: "emotion", level: "high",
        meaning: "To make someone gradually lose resistance or energy.",
        sentences: [
            "The constant arguing finally {verb} her {blank}.",
            "He kept asking until he {verb} {blank} her resistance.",
            "Years of stress slowly {verb} him {blank}.",
            "The children's nagging eventually {verb} {blank} their parents."
        ],
        options: ["down", "off", "out", "away"]
    },

    // ========================================
    // DROP (expanded)
    // ========================================
    {
        verb: "drop", particle: "in", phrase: "drop in", category: "daily", level: "middle",
        meaning: "To visit someone casually without a prior arrangement.",
        sentences: [
            "Feel free to {verb} {blank} anytime you're in the area.",
            "My uncle {verb}ped {blank} unexpectedly while we were having dinner.",
            "She likes to {verb} {blank} on her neighbors for a chat.",
            "Why don't you {verb} {blank} after work?"
        ],
        options: ["in", "by", "off", "out"]
    },
    // ========================================
    // CUT (expanded)
    // ========================================
    {
        verb: "cut", particle: "in", phrase: "cut in", category: "daily", level: "high",
        meaning: "To interrupt someone; to move in front of others in a line.",
        sentences: [
            "Sorry to {verb} {blank}, but I have an important announcement.",
            "That car just {verb} {blank} front of me!",
            "She {verb} {blank} while he was speaking and changed the subject.",
            "Don't {verb} {blank} line — wait your turn like everyone else."
        ],
        options: ["in", "off", "out", "up"]
    },
    {
        verb: "cut", particle: "back on", phrase: "cut back on", category: "daily", level: "high",
        meaning: "To reduce the amount of something, especially spending.",
        sentences: [
            "We need to {verb} {blank} our monthly expenses.",
            "The doctor advised him to {verb} {blank} salt.",
            "The company is {verb}ting {blank} staff to save money.",
            "She's {verb}ting {blank} carbohydrates to lose weight."
        ],
        options: ["back on", "down on", "off", "out"]
    },

    // ========================================
    // FILL (expanded)
    // ========================================
    {
        verb: "fill", particle: "in for", phrase: "fill in for", category: "business", level: "high",
        meaning: "To temporarily do someone else's job or take their place.",
        sentences: [
            "Can you {verb} {blank} me while I'm on vacation?",
            "She {verb}ed {blank} the receptionist who was sick.",
            "He {verb}s {blank} the regular anchor on weekends.",
            "I need someone to {verb} {blank} me at the 3 PM meeting."
        ],
        options: ["in for", "out for", "up for", "on for"]
    },

    // ========================================
    // CHECK (expanded)
    // ========================================
    {
        verb: "check", particle: "off", phrase: "check off", category: "daily", level: "middle",
        meaning: "To mark items on a list as completed or verified.",
        sentences: [
            "She {verb}ed {blank} each item on her to-do list.",
            "{verb} {blank} the tasks as you complete them.",
            "He loves the feeling of {verb}ing {blank} completed goals.",
            "Make sure to {verb} {blank} every item before submitting the form."
        ],
        options: ["off", "out", "in", "up"]
    },
    {
        verb: "check", particle: "into", phrase: "check into", category: "daily", level: "high",
        meaning: "To investigate something; to register at a hotel or facility.",
        sentences: [
            "I'll {verb} {blank} the matter and let you know what I find.",
            "She {verb}ed {blank} the hospital for observation.",
            "We {verb}ed {blank} a lovely bed and breakfast by the coast.",
            "The police are {verb}ing {blank} his background."
        ],
        options: ["into", "in", "up on", "out"]
    },

    // ========================================
    // WRITE - NEW VERB
    // ========================================
    {
        verb: "write", particle: "down", phrase: "write down", category: "academic", level: "elementary",
        meaning: "To record something on paper or in a document.",
        sentences: [
            "Please {verb} {blank} the homework assignment.",
            "She {verb}s {blank} everything so she doesn't forget.",
            "Let me {verb} {blank} your number before I forget.",
            "He {verb} {blank} his ideas in a notebook."
        ],
        options: ["down", "up", "out", "off"]
    },
    {
        verb: "write", particle: "off", phrase: "write off", category: "business", level: "high",
        meaning: "To dismiss something as a failure; to cancel a debt; to deduct from taxes.",
        sentences: [
            "Don't {verb} him {blank} just yet — he may still surprise us.",
            "The bank {verb} {blank} the bad debt.",
            "You can {verb} {blank} business expenses on your tax return.",
            "Critics {verb} {blank} the movie before it was even released."
        ],
        options: ["off", "down", "up", "out"]
    },
    {
        verb: "write", particle: "up", phrase: "write up", category: "academic", level: "high",
        meaning: "To prepare a finished version of a report or document.",
        sentences: [
            "I need to {verb} {blank} my notes from the meeting.",
            "She {verb} {blank} the experiment results for the journal.",
            "Can you {verb} {blank} a summary of the project?",
            "He was asked to {verb} {blank} a report on the incident."
        ],
        options: ["up", "down", "off", "out"]
    },

    // ========================================
    // READ - NEW VERB
    // ========================================
    {
        verb: "read", particle: "up on", phrase: "read up on", category: "academic", level: "high",
        meaning: "To study or learn about a subject by reading.",
        sentences: [
            "I need to {verb} {blank} the latest research before the conference.",
            "She {verb} {blank} the company before her job interview.",
            "He's been {verb}ing {blank} investment strategies.",
            "You should {verb} {blank} the topic before the exam."
        ],
        options: ["up on", "out", "through", "into"]
    },
    {
        verb: "read", particle: "into", phrase: "read into", category: "daily", level: "high",
        meaning: "To interpret more meaning than was intended; to overanalyze.",
        sentences: [
            "Don't {verb} too much {blank} his silence — he's just tired.",
            "She's {verb}ing {blank} it more than she should.",
            "You're {verb}ing {blank} things that aren't there.",
            "He tends to {verb} {blank} every little comment people make."
        ],
        options: ["into", "up on", "through", "out"]
    },
    {
        verb: "read", particle: "through", phrase: "read through", category: "academic", level: "middle",
        meaning: "To read something from beginning to end, especially to check for errors.",
        sentences: [
            "Please {verb} {blank} the contract carefully before signing.",
            "I {verb} {blank} the entire document in one sitting.",
            "She always {verb}s {blank} her essays before submitting them.",
            "The lawyer {verb} {blank} the agreement and found several issues."
        ],
        options: ["through", "up on", "into", "out"]
    },

    // ========================================
    // POINT - NEW ENTRIES
    // ========================================
    {
        verb: "point", particle: "to", phrase: "point to", category: "academic", level: "high",
        meaning: "To indicate or suggest something as evidence.",
        sentences: [
            "All the evidence {verb}s {blank} the same conclusion.",
            "She {verb}ed {blank} the data to support her argument.",
            "Experts {verb} {blank} climate change as the main cause.",
            "The results {verb} {blank} a significant improvement."
        ],
        options: ["to", "out", "at", "up"]
    },

    // ========================================
    // TRY - NEW VERB
    // ========================================
    {
        verb: "try", particle: "out", phrase: "try out", category: "daily", level: "high",
        meaning: "To test something to see if it works or if you like it.",
        sentences: [
            "I want to {verb} {blank} the new restaurant on Main Street.",
            "She {verb}ied {blank} for the school basketball team.",
            "Have you {verb}ied {blank} the new software update?",
            "He {verb}ied {blank} several guitars before buying one."
        ],
        options: ["out", "on", "up", "off"]
    },
    {
        verb: "try", particle: "on", phrase: "try on", category: "daily", level: "elementary",
        meaning: "To put on clothing to see if it fits or looks good.",
        sentences: [
            "Can I {verb} {blank} this dress in a size 8?",
            "She {verb}ied {blank} at least twenty pairs of shoes.",
            "You should {verb} {blank} the jacket before buying it.",
            "He {verb}ied {blank} the suit and it fit perfectly."
        ],
        options: ["on", "out", "up", "off"]
    },

    // ========================================
    // TURN - MORE
    // ========================================
    {
        verb: "turn", particle: "to", phrase: "turn to", category: "emotion", level: "middle",
        meaning: "To go to someone for help or support; to start doing something.",
        sentences: [
            "She had no one to {verb} {blank} when she lost her job.",
            "Many people {verb} {blank} exercise to relieve stress.",
            "He {verb}ed {blank} his parents for financial help.",
            "When things get tough, I {verb} {blank} music for comfort."
        ],
        options: ["to", "on", "in", "up"]
    },

    // ========================================
    // SHUT (expanded)
    // ========================================
    {
        verb: "shut", particle: "off", phrase: "shut off", category: "daily", level: "middle",
        meaning: "To stop the flow or operation of something.",
        sentences: [
            "They {verb} {blank} the water supply for maintenance.",
            "She {verb} {blank} the alarm and went back to sleep.",
            "Remember to {verb} {blank} the gas before leaving.",
            "The power was {verb} {blank} during the storm."
        ],
        options: ["off", "down", "up", "out"]
    },

    // ========================================
    // MARK - NEW VERB
    // ========================================
    {
        verb: "mark", particle: "down", phrase: "mark down", category: "business", level: "high",
        meaning: "To reduce the price of something; to note something.",
        sentences: [
            "The store {verb}ed {blank} all winter clothing by 50 percent.",
            "She {verb}ed {blank} the important dates in her calendar.",
            "These items have been {verb}ed {blank} for the clearance sale.",
            "The teacher {verb}ed his grade {blank} for poor handwriting."
        ],
        options: ["down", "up", "off", "out"]
    },
    {
        verb: "mark", particle: "up", phrase: "mark up", category: "business", level: "high",
        meaning: "To increase the price of something; to annotate a document.",
        sentences: [
            "Retailers typically {verb} {blank} products by 50 to 100 percent.",
            "She {verb}ed {blank} the manuscript with corrections.",
            "The store {verb}ed {blank} the prices before the holiday season.",
            "He {verb}ed {blank} the draft with suggestions for improvement."
        ],
        options: ["up", "down", "off", "out"]
    },

    // ========================================
    // PILE - NEW VERB
    // ========================================
    {
        verb: "pile", particle: "up", phrase: "pile up", category: "daily", level: "professional",
        meaning: "To accumulate in a large amount.",
        sentences: [
            "The dishes are {verb}ing {blank} in the sink.",
            "Work keeps {verb}ing {blank} while she's on vacation.",
            "Bills {verb}ed {blank} during his unemployment.",
            "Snow {verb}ed {blank} overnight, blocking the driveway."
        ],
        options: ["up", "on", "in", "out"]
    },

    // ========================================
    // SHUT / CLOSE extras
    // ========================================
    {
        verb: "close", particle: "up", phrase: "close up", category: "business", level: "high",
        meaning: "To close a business or shop for the day; to come closer together.",
        sentences: [
            "We usually {verb} {blank} the shop at 9 PM.",
            "The wound is starting to {verb} {blank} nicely.",
            "{verb} {blank} the gaps between the fence panels.",
            "She {verb}d {blank} the office and headed home."
        ],
        options: ["up", "down", "off", "out"]
    },

    // ========================================
    // SORT (expanded)
    // ========================================
    {
        verb: "sort", particle: "through", phrase: "sort through", category: "daily", level: "high",
        meaning: "To examine a collection of things to organize or find something.",
        sentences: [
            "She spent the afternoon {verb}ing {blank} old photographs.",
            "I need to {verb} {blank} all these papers on my desk.",
            "He {verb}ed {blank} the box of donations looking for anything useful.",
            "It took hours to {verb} {blank} all the applications."
        ],
        options: ["through", "out", "over", "into"]
    },

    // ========================================
    // CARRY (expanded)
    // ========================================
    {
        verb: "carry", particle: "over", phrase: "carry over", category: "business", level: "college",
        meaning: "To transfer something from one situation or period to another.",
        sentences: [
            "Can we {verb} {blank} the unused vacation days to next year?",
            "Skills from one job often {verb} {blank} to the next.",
            "The discussion was {verb}ied {blank} to the following meeting.",
            "Don't let stress from work {verb} {blank} into your personal life."
        ],
        options: ["over", "on", "out", "through"]
    },
    {
        verb: "carry", particle: "through", phrase: "carry through", category: "business", level: "college",
        meaning: "To complete something successfully despite difficulties.",
        sentences: [
            "Her determination {verb}ied her {blank} the difficult period.",
            "We must {verb} {blank} our commitment to the community.",
            "His experience {verb}ied him {blank} the crisis.",
            "She {verb}ied the project {blank} to completion despite setbacks."
        ],
        options: ["through", "on", "out", "over"]
    },

    // ========================================
    // RULE (expanded)
    // ========================================
    {
        verb: "rule", particle: "over", phrase: "rule over", category: "academic", level: "college",
        meaning: "To govern or have authority over a people or territory.",
        sentences: [
            "The king {verb}d {blank} the kingdom for forty years.",
            "The empire {verb}d {blank} vast territories across three continents.",
            "She {verb}s {blank} the department with an iron fist.",
            "The dynasty {verb}d {blank} the region for centuries."
        ],
        options: ["over", "out", "on", "off"]
    },

    // ========================================
    // WIPE (expanded)
    // ========================================
    {
        verb: "wipe", particle: "off", phrase: "wipe off", category: "daily", level: "professional",
        meaning: "To clean or remove something by rubbing.",
        sentences: [
            "She {verb}d {blank} the table before setting the plates.",
            "{verb} {blank} your shoes before coming inside.",
            "He {verb}d the sweat {blank} his forehead.",
            "The rain {verb}d {blank} the chalk drawings on the sidewalk."
        ],
        options: ["off", "out", "up", "away"]
    },

    // ========================================
    // DRAW - NEW VERB
    // ========================================
    {
        verb: "draw", particle: "up", phrase: "draw up", category: "business", level: "college",
        meaning: "To prepare a document, plan, or list.",
        sentences: [
            "The lawyer will {verb} {blank} the contract by Friday.",
            "We need to {verb} {blank} a budget for the next quarter.",
            "She {verb} {blank} a list of potential vendors.",
            "The architect {verb} {blank} the plans for the new building."
        ],
        options: ["up", "out", "in", "off"]
    },
    {
        verb: "draw", particle: "out", phrase: "draw out", category: "business", level: "college",
        meaning: "To make something last longer; to encourage someone to talk.",
        sentences: [
            "The speaker {verb} {blank} the presentation unnecessarily.",
            "She has a talent for {verb}ing people {blank} of their shells.",
            "The negotiations were {verb}n {blank} over several months.",
            "The therapist gently {verb} {blank} his feelings about the loss."
        ],
        options: ["out", "up", "in", "off"]
    },
    {
        verb: "draw", particle: "on", phrase: "draw on", category: "academic", level: "college",
        meaning: "To use knowledge, experience, or resources as a basis for something.",
        sentences: [
            "She {verb}s {blank} her years of experience when advising clients.",
            "The novel {verb}s {blank} real historical events.",
            "We can {verb} {blank} research from several fields.",
            "He {verb} {blank} his training to handle the emergency calmly."
        ],
        options: ["on", "out", "up", "from"]
    },

    // ========================================
    // CARRY (more)
    // ========================================
    {
        verb: "carry", particle: "off", phrase: "carry off", category: "daily", level: "college",
        meaning: "To succeed in doing something difficult; to steal and take away.",
        sentences: [
            "She {verb}ied {blank} the lead role brilliantly despite no experience.",
            "Only she could {verb} {blank} wearing such a bold outfit.",
            "The thieves {verb}ied {blank} artwork worth millions.",
            "He {verb}ied {blank} the difficult task with grace."
        ],
        options: ["off", "out", "on", "through"]
    },

    // ========================================
    // PHASE (expanded)
    // ========================================
    {
        verb: "phase", particle: "in", phrase: "phase in", category: "business", level: "college",
        meaning: "To gradually introduce something new.",
        sentences: [
            "The new policy will be {verb}d {blank} over the next six months.",
            "The government plans to {verb} {blank} the tax changes slowly.",
            "They're {verb}ing {blank} the new software across all departments.",
            "Electric buses are being {verb}d {blank} to replace diesel ones."
        ],
        options: ["in", "out", "on", "off"]
    },

    // ========================================
    // LAY (expanded)
    // ========================================
    {
        verb: "lay", particle: "out", phrase: "lay out", category: "business", level: "college",
        meaning: "To arrange or spread something out; to explain a plan clearly; to spend money.",
        sentences: [
            "She {verb} {blank} all the documents on the table.",
            "The CEO {verb} {blank} his vision for the company's future.",
            "They {verb} {blank} a fortune on the kitchen renovation.",
            "He {verb} {blank} the steps we need to follow."
        ],
        options: ["out", "off", "down", "up"]
    },
    {
        verb: "lay", particle: "down", phrase: "lay down", category: "business", level: "college",
        meaning: "To establish rules or principles; to put something down flat.",
        sentences: [
            "The new manager {verb} {blank} strict rules from day one.",
            "The law {verb}s {blank} guidelines for workplace safety.",
            "She {verb} {blank} on the couch and fell asleep.",
            "The government {verb} {blank} regulations for food safety."
        ],
        options: ["down", "off", "out", "up"]
    },

    // ========================================
    // KNOCK (expanded)
    // ========================================
    {
        verb: "knock", particle: "off", phrase: "knock off", category: "daily", level: "college",
        meaning: "To stop working; to reduce a price; to produce cheap copies.",
        sentences: [
            "Let's {verb} {blank} early today — it's Friday!",
            "Can you {verb} a few dollars {blank} the price?",
            "They were caught {verb}ing {blank} designer handbags.",
            "She decided to {verb} {blank} work at 5 PM sharp."
        ],
        options: ["off", "down", "out", "up"]
    },

    // ========================================
    // GIVE (more expanded)
    // ========================================
    {
        verb: "give", particle: "over", phrase: "give over", category: "daily", level: "college",
        meaning: "To dedicate time or space to a particular purpose; to stop doing something annoying.",
        sentences: [
            "The entire afternoon was {verb}n {blank} to team-building activities.",
            "Oh, {verb} {blank}! Nobody believes that excuse.",
            "The ground floor is {verb}n {blank} to retail space.",
            "She {verb} {blank} most of her free time to volunteering."
        ],
        options: ["over", "up", "in", "away"]
    },

    // ========================================
    // SPEAK (expanded)
    // ========================================
    {
        verb: "speak", particle: "out", phrase: "speak out", category: "business", level: "college",
        meaning: "To publicly express your opinions, especially on a controversial topic.",
        sentences: [
            "She {verb} {blank} against corruption in the government.",
            "More employees are {verb}ing {blank} about workplace harassment.",
            "He was the first to {verb} {blank} about the safety issues.",
            "It takes courage to {verb} {blank} against powerful institutions."
        ],
        options: ["out", "up", "on", "off"]
    },
    {
        verb: "speak", particle: "for", phrase: "speak for", category: "business", level: "college",
        meaning: "To express the views of someone else; to be evidence of something.",
        sentences: [
            "I can only {verb} {blank} myself, not the whole team.",
            "The results {verb} {blank} themselves — we exceeded all targets.",
            "Who will {verb} {blank} the people who can't speak up?",
            "Her track record {verb}s {blank} itself."
        ],
        options: ["for", "out", "up", "to"]
    },

    // ========================================
    // LIVE (expanded)
    // ========================================
    {
        verb: "live", particle: "on", phrase: "live on", category: "daily", level: "college",
        meaning: "To survive with a small amount of money or food; to continue to exist after death.",
        sentences: [
            "Many students have to {verb} {blank} instant noodles and coffee.",
            "She {verb}s {blank} a very tight budget.",
            "His music will {verb} {blank} forever.",
            "The legend of King Arthur {verb}s {blank} to this day."
        ],
        options: ["on", "off", "up to", "with"]
    },
    {
        verb: "live", particle: "off", phrase: "live off", category: "daily", level: "college",
        meaning: "To depend on something or someone for income or food.",
        sentences: [
            "He {verb}s {blank} his investments and doesn't need to work.",
            "Some tribes still {verb} {blank} the land.",
            "She's 30 and still {verb}s {blank} her parents.",
            "The animals {verb} {blank} whatever they can find in the forest."
        ],
        options: ["off", "on", "with", "up to"]
    },
    {
        verb: "live", particle: "with", phrase: "live with", category: "daily", level: "college",
        meaning: "To accept or tolerate an unpleasant situation.",
        sentences: [
            "It's not ideal, but I can {verb} {blank} it.",
            "She had to learn to {verb} {blank} chronic pain.",
            "Can you {verb} {blank} the noise from the construction?",
            "Some decisions are hard, but you have to {verb} {blank} the consequences."
        ],
        options: ["with", "on", "off", "through"]
    },

    // ========================================
    // WIND (expanded)
    // ========================================
    {
        verb: "wind", particle: "down", phrase: "wind down", category: "daily", level: "college",
        meaning: "To gradually relax; to gradually reduce activity before stopping.",
        sentences: [
            "She likes to {verb} {blank} with a good book before bed.",
            "The party started to {verb} {blank} around midnight.",
            "The company is {verb}ing {blank} its operations in that region.",
            "I need an hour to {verb} {blank} after a busy day."
        ],
        options: ["down", "up", "off", "out"]
    },

    // ========================================
    // OPEN (expanded)
    // ========================================
    {
        verb: "open", particle: "out", phrase: "open out", category: "daily", level: "college",
        meaning: "To unfold; to become wider; to become more open and communicative.",
        sentences: [
            "The road {verb}s {blank} into a wide boulevard after the tunnel.",
            "She {verb}ed {blank} the map on the table.",
            "He {verb}ed {blank} a lot after joining the drama club.",
            "The valley {verb}s {blank} into a vast plain."
        ],
        options: ["out", "up", "on", "off"]
    },

    // ========================================
    // SLOW (expanded)
    // ========================================
    {
        verb: "slow", particle: "up", phrase: "slow up", category: "daily", level: "college",
        meaning: "To reduce speed; to cause a delay.",
        sentences: [
            "Traffic ahead is {verb}ing {blank} — there might be an accident.",
            "Bad weather {verb}ed {blank} the construction work.",
            "We need to {verb} {blank} and think about this more carefully.",
            "The bureaucratic process {verb}ed everything {blank}."
        ],
        options: ["up", "down", "off", "out"]
    },

    // ========================================
    // SNAP - NEW VERB
    // ========================================
    {
        verb: "snap", particle: "up", phrase: "snap up", category: "daily", level: "college",
        meaning: "To buy or take something quickly and eagerly.",
        sentences: [
            "Shoppers {verb}ped {blank} the bargains within minutes.",
            "She was {verb}ped {blank} by a tech company right after graduation.",
            "The limited edition sneakers were {verb}ped {blank} instantly.",
            "He {verb}ped {blank} the last concert tickets before they sold out."
        ],
        options: ["up", "out", "off", "away"]
    },
    {
        verb: "snap", particle: "out of", phrase: "snap out of", category: "emotion", level: "college",
        meaning: "To stop being in a bad mood or unhelpful state suddenly.",
        sentences: [
            "You need to {verb} {blank} this negativity and get moving.",
            "She {verb}ped {blank} her daydream when the teacher called her name.",
            "It took him weeks to {verb} {blank} his depression.",
            "Come on, {verb} {blank} it! We have work to do."
        ],
        options: ["out of", "into", "up", "off"]
    },

    // ========================================
    // WATER - NEW VERB
    // ========================================
    {
        verb: "water", particle: "down", phrase: "water down", category: "business", level: "college",
        meaning: "To make something weaker or less effective; to dilute.",
        sentences: [
            "Critics accused the government of {verb}ing {blank} the regulations.",
            "The final version of the bill was significantly {verb}ed {blank}.",
            "Don't {verb} {blank} your message — say exactly what you mean.",
            "The proposal was {verb}ed {blank} to gain more support."
        ],
        options: ["down", "off", "out", "up"]
    },

    // ========================================
    // BRUSH (expanded)
    // ========================================
    {
        verb: "brush", particle: "off", phrase: "brush off", category: "emotion", level: "college",
        meaning: "To dismiss something or someone as unimportant.",
        sentences: [
            "He {verb}ed {blank} her concerns as if they didn't matter.",
            "She tried to {verb} {blank} the criticism, but it hurt.",
            "The manager {verb}ed {blank} the complaint without investigating.",
            "Don't just {verb} me {blank} — I'm being serious!"
        ],
        options: ["off", "up on", "aside", "away"]
    },

    // ========================================
    // STAMP - NEW VERB
    // ========================================
    {
        verb: "stamp", particle: "out", phrase: "stamp out", category: "business", level: "college",
        meaning: "To put an end to something bad by taking strong action.",
        sentences: [
            "The government is trying to {verb} {blank} corruption.",
            "New measures were introduced to {verb} {blank} bullying in schools.",
            "The health department worked to {verb} {blank} the disease.",
            "It's everyone's responsibility to {verb} {blank} discrimination."
        ],
        options: ["out", "off", "down", "on"]
    },

    // ========================================
    // MAP - NEW VERB
    // ========================================
    {
        verb: "map", particle: "out", phrase: "map out", category: "business", level: "college",
        meaning: "To plan something in detail.",
        sentences: [
            "She {verb}ped {blank} her career path for the next five years.",
            "Let's {verb} {blank} the project timeline before we start.",
            "He {verb}ped {blank} the route for their road trip.",
            "The team {verb}ped {blank} a strategy for entering the new market."
        ],
        options: ["out", "up", "on", "off"]
    },

    // ========================================
    // CRACK - NEW VERB
    // ========================================
    {
        verb: "crack", particle: "down on", phrase: "crack down on", category: "business", level: "professional",
        meaning: "To take strong action to stop bad or illegal behavior.",
        sentences: [
            "The police are {verb}ing {blank} drunk driving this holiday season.",
            "The school is {verb}ing {blank} students who skip class.",
            "Authorities {verb}ed {blank} illegal parking in the city center.",
            "The government promised to {verb} {blank} tax evasion."
        ],
        options: ["down on", "up on", "out on", "off"]
    },
    {
        verb: "crack", particle: "up", phrase: "crack up", category: "emotion", level: "professional",
        meaning: "To laugh a lot; to have a mental breakdown; to cause someone to laugh.",
        sentences: [
            "His jokes always {verb} me {blank}.",
            "She {verb}ed {blank} when she saw the funny video.",
            "The pressure was so intense that he nearly {verb}ed {blank}.",
            "That comedian really {verb}s me {blank} every time."
        ],
        options: ["up", "down on", "out", "off"]
    },

    // ========================================
    // TAKE (more expanded)
    // ========================================
    {
        verb: "take", particle: "up on", phrase: "take up on", category: "daily", level: "professional",
        meaning: "To accept an offer or invitation that someone has made.",
        sentences: [
            "I'd like to {verb} you {blank} your offer of a free trial.",
            "She {verb} him {blank} his suggestion to visit the museum.",
            "I'll {verb} you {blank} that dinner invitation sometime.",
            "He finally {verb} her {blank} the offer to help with the move."
        ],
        options: ["up on", "on", "over", "off"]
    },

    // ========================================
    // TOUCH - NEW VERB
    // ========================================
    {
        verb: "touch", particle: "on", phrase: "touch on", category: "academic", level: "college",
        meaning: "To mention or discuss something briefly.",
        sentences: [
            "The lecture only {verb}ed {blank} the topic of climate change.",
            "She {verb}ed {blank} several important issues during her speech.",
            "I'd like to {verb} {blank} a few points before we finish.",
            "The report briefly {verb}es {blank} the financial implications."
        ],
        options: ["on", "up", "off", "upon"]
    },
    {
        verb: "touch", particle: "up", phrase: "touch up", category: "daily", level: "college",
        meaning: "To make small improvements to something; to fix minor flaws.",
        sentences: [
            "She {verb}ed {blank} her makeup before the photo.",
            "The painter came back to {verb} {blank} a few spots.",
            "He {verb}ed {blank} the scratches on his car with matching paint.",
            "I just need to {verb} {blank} a few details in the report."
        ],
        options: ["up", "on", "off", "out"]
    },

    // ========================================
    // BAIL - NEW VERB
    // ========================================
    {
        verb: "bail", particle: "out", phrase: "bail out", category: "business", level: "college",
        meaning: "To rescue someone from a difficult situation, especially financially.",
        sentences: [
            "The government {verb}ed {blank} the failing banks during the crisis.",
            "His parents always {verb} him {blank} when he gets into trouble.",
            "She had to {verb} {blank} of the project at the last minute.",
            "Nobody is going to {verb} you {blank} this time — fix it yourself."
        ],
        options: ["out", "off", "up", "in"]
    },

    // ========================================
    // PAN - NEW VERB
    // ========================================
    {
        verb: "pan", particle: "out", phrase: "pan out", category: "daily", level: "college",
        meaning: "To develop or turn out in a particular way.",
        sentences: [
            "Let's see how things {verb} {blank} before making a decision.",
            "The business idea didn't {verb} {blank} as they had hoped.",
            "If everything {verb}s {blank}, we'll be profitable by next year.",
            "Nobody knows how the situation will {verb} {blank}."
        ],
        options: ["out", "off", "up", "through"]
    },

    // ========================================
    // GEAR - NEW VERB
    // ========================================
    {
        verb: "gear", particle: "up", phrase: "gear up", category: "business", level: "college",
        meaning: "To prepare for an activity or event.",
        sentences: [
            "The team is {verb}ing {blank} for the big championship game.",
            "Retailers are {verb}ing {blank} for the holiday shopping season.",
            "She's {verb}ing {blank} for her first marathon next month.",
            "The company is {verb}ing {blank} to launch its new product line."
        ],
        options: ["up", "down", "on", "off"]
    },

    // ========================================
    // ZERO - NEW VERB
    // ========================================
    {
        verb: "zero", particle: "in on", phrase: "zero in on", category: "business", level: "professional",
        meaning: "To focus attention directly on something specific.",
        sentences: [
            "The investigation {verb}ed {blank} the main suspect.",
            "Let's {verb} {blank} the key issue here.",
            "The company is {verb}ing {blank} the Asian market for expansion.",
            "She {verb}ed {blank} the problem and found a solution quickly."
        ],
        options: ["in on", "out on", "up on", "down on"]
    },

    // ========================================
    // OWN - NEW VERB
    // ========================================
    {
        verb: "own", particle: "up", phrase: "own up", category: "emotion", level: "college",
        meaning: "To admit that you have done something wrong.",
        sentences: [
            "He {verb}ed {blank} to breaking the window.",
            "Nobody wants to {verb} {blank} to the mistake.",
            "She finally {verb}ed {blank} to lying about her qualifications.",
            "It takes courage to {verb} {blank} when you've made an error."
        ],
        options: ["up", "out", "in", "off"]
    },

    // ========================================
    // BRANCH - NEW VERB
    // ========================================
    {
        verb: "branch", particle: "out", phrase: "branch out", category: "business", level: "college",
        meaning: "To expand activities into new areas or directions.",
        sentences: [
            "The company decided to {verb} {blank} into international markets.",
            "She wants to {verb} {blank} and try different types of cooking.",
            "The publisher is {verb}ing {blank} into digital media.",
            "He {verb}ed {blank} from accounting into financial consulting."
        ],
        options: ["out", "off", "up", "in"]
    },

    // ========================================
    // SIZE - NEW VERB
    // ========================================
    {
        verb: "size", particle: "up", phrase: "size up", category: "daily", level: "college",
        meaning: "To evaluate or assess someone or something.",
        sentences: [
            "She {verb}d {blank} the competition before the race.",
            "He quickly {verb}d {blank} the situation and made a decision.",
            "The interviewer was clearly {verb}ing me {blank}.",
            "Take a moment to {verb} {blank} your options before choosing."
        ],
        options: ["up", "down", "out", "off"]
    },

    // ========================================
    // TONE - NEW VERB
    // ========================================
    {
        verb: "tone", particle: "down", phrase: "tone down", category: "business", level: "college",
        meaning: "To make something less extreme, forceful, or offensive.",
        sentences: [
            "You might want to {verb} {blank} the language in this email.",
            "She was asked to {verb} {blank} her criticism of the project.",
            "The director {verb}d {blank} the violence in the final cut.",
            "He needs to {verb} {blank} his aggressive approach in meetings."
        ],
        options: ["down", "up", "off", "out"]
    },

    // ========================================
    // CLAMP - NEW VERB
    // ========================================
    {
        verb: "clamp", particle: "down on", phrase: "clamp down on", category: "business", level: "professional",
        meaning: "To take strict action to prevent or limit something.",
        sentences: [
            "The university is {verb}ing {blank} cheating during exams.",
            "Authorities are {verb}ing {blank} illegal street vendors.",
            "The new law {verb}s {blank} companies that pollute rivers.",
            "They're {verb}ing {blank} unauthorized use of company resources."
        ],
        options: ["down on", "up on", "out on", "off"]
    },

    // ========================================
    // SPRING (expanded)
    // ========================================
    {
        verb: "spring", particle: "from", phrase: "spring from", category: "academic", level: "college",
        meaning: "To originate from; to be caused by.",
        sentences: [
            "His love for cooking {verb}s {blank} childhood memories in his grandmother's kitchen.",
            "Many great inventions {verb} {blank} necessity.",
            "Her confidence {verb}s {blank} years of practice and preparation.",
            "The conflict {verb}s {blank} a deep misunderstanding between the two groups."
        ],
        options: ["from", "up", "out", "off"]
    },

    // ========================================
    // ACCOUNT - NEW VERB
    // ========================================
    {
        verb: "account", particle: "for", phrase: "account for", category: "academic", level: "college",
        meaning: "To explain the reason for something; to represent a proportion.",
        sentences: [
            "How do you {verb} {blank} the discrepancy in the numbers?",
            "Online sales {verb} {blank} 60 percent of total revenue.",
            "She couldn't {verb} {blank} the missing funds.",
            "The report fails to {verb} {blank} recent market changes."
        ],
        options: ["for", "on", "to", "in"]
    },

    // ========================================
    // FACTOR - NEW VERB
    // ========================================
    {
        verb: "factor", particle: "in", phrase: "factor in", category: "business", level: "college",
        meaning: "To include something as a relevant element when making a decision.",
        sentences: [
            "You need to {verb} {blank} the cost of shipping.",
            "She didn't {verb} {blank} how long the commute would take.",
            "The budget should {verb} {blank} unexpected expenses.",
            "We forgot to {verb} {blank} the time zone difference."
        ],
        options: ["in", "out", "up", "on"]
    },

    // ========================================
    // OPT (expanded)
    // ========================================
    {
        verb: "opt", particle: "for", phrase: "opt for", category: "daily", level: "college",
        meaning: "To choose one option over another.",
        sentences: [
            "She {verb}ed {blank} the cheaper flight to save money.",
            "Most students {verb} {blank} online courses these days.",
            "We {verb}ed {blank} a quiet dinner instead of a big party.",
            "He {verb}ed {blank} early retirement at 55."
        ],
        options: ["for", "out", "in", "into"]
    },
    {
        verb: "opt", particle: "in", phrase: "opt in", category: "business", level: "college",
        meaning: "To choose to participate in something.",
        sentences: [
            "You must {verb} {blank} to receive promotional emails.",
            "Employees can {verb} {blank} to the wellness program.",
            "She decided to {verb} {blank} to the company stock plan.",
            "Only members who {verb} {blank} will receive the newsletter."
        ],
        options: ["in", "out", "for", "on"]
    },

    // ========================================
    // MIX (expanded)
    // ========================================
    {
        verb: "mix", particle: "in", phrase: "mix in", category: "daily", level: "college",
        meaning: "To add and combine something with a mixture; to socialize with others.",
        sentences: [
            "Gently {verb} {blank} the chocolate chips after the batter is ready.",
            "He doesn't {verb} {blank} well with the other kids at school.",
            "{verb} {blank} the herbs just before serving.",
            "She finds it hard to {verb} {blank} at parties."
        ],
        options: ["in", "up", "out", "together"]
    },

    // ========================================
    // MESS (expanded)
    // ========================================
    {
        verb: "mess", particle: "around", phrase: "mess around", category: "daily", level: "college",
        meaning: "To waste time doing silly things; to behave irresponsibly.",
        sentences: [
            "Stop {verb}ing {blank} and start studying for your exam!",
            "The kids were {verb}ing {blank} in the garden all afternoon.",
            "He spent the whole weekend {verb}ing {blank} on his guitar.",
            "Don't {verb} {blank} with that equipment — it's expensive."
        ],
        options: ["around", "up", "about", "with"]
    },
    {
        verb: "mess", particle: "with", phrase: "mess with", category: "daily", level: "college",
        meaning: "To interfere with something; to provoke someone.",
        sentences: [
            "Don't {verb} {blank} my stuff while I'm gone.",
            "You don't want to {verb} {blank} him — he has a bad temper.",
            "Someone has been {verb}ing {blank} the thermostat settings.",
            "I wouldn't {verb} {blank} that old wiring if I were you."
        ],
        options: ["with", "around", "up", "about"]
    },

    // ========================================
    // SELL (expanded)
    // ========================================
    {
        verb: "sell", particle: "off", phrase: "sell off", category: "business", level: "college",
        meaning: "To sell something, often at a low price, to get rid of it quickly.",
        sentences: [
            "The company {verb} {blank} its unprofitable divisions.",
            "They're {verb}ing {blank} the remaining inventory at half price.",
            "Investors started to {verb} {blank} their shares in panic.",
            "She {verb} {blank} her old furniture before the move."
        ],
        options: ["off", "out", "up", "away"]
    },

    // ========================================
    // WRAP (expanded)
    // ========================================
    {
        verb: "wrap", particle: "around", phrase: "wrap around", category: "daily", level: "college",
        meaning: "To encircle something; used figuratively to mean fully understanding something.",
        sentences: [
            "I can't {verb} my head {blank} this concept — it's so confusing.",
            "The ivy {verb}s {blank} the old stone wall.",
            "She {verb}ped a scarf {blank} her neck before going outside.",
            "It's hard to {verb} your mind {blank} the scale of the universe."
        ],
        options: ["around", "up", "in", "over"]
    },

    // ========================================
    // NARROW (expanded)
    // ========================================
    {
        verb: "narrow", particle: "down to", phrase: "narrow down to", category: "business", level: "college",
        meaning: "To reduce options until only specific ones remain.",
        sentences: [
            "We've {verb}ed the candidates {blank} just three finalists.",
            "The search has been {verb}ed {blank} two possible locations.",
            "After much deliberation, she {verb}ed her choices {blank} two colleges.",
            "The investigation was {verb}ed {blank} a single suspect."
        ],
        options: ["down to", "out to", "off to", "up to"]
    },

    // ========================================
    // TAP - NEW VERB
    // ========================================
    {
        verb: "tap", particle: "into", phrase: "tap into", category: "business", level: "college",
        meaning: "To access and use a resource or market that already exists.",
        sentences: [
            "The company is trying to {verb} {blank} the growing health food market.",
            "She learned to {verb} {blank} her creativity through meditation.",
            "We need to {verb} {blank} our employees' full potential.",
            "The new ad campaign {verb}s {blank} nostalgia for the 1990s."
        ],
        options: ["into", "on", "out", "up"]
    },

    // ========================================
    // WEIGH (expanded)
    // ========================================
    {
        verb: "weigh", particle: "in", phrase: "weigh in", category: "business", level: "college",
        meaning: "To give your opinion about something; to be officially weighed before a competition.",
        sentences: [
            "Would you like to {verb} {blank} on this discussion?",
            "Several experts {verb}ed {blank} on the debate.",
            "She didn't {verb} {blank} until everyone else had spoken.",
            "The boxer {verb}ed {blank} at exactly 147 pounds."
        ],
        options: ["in", "up", "on", "out"]
    },
    {
        verb: "weigh", particle: "down", phrase: "weigh down", category: "emotion", level: "college",
        meaning: "To make someone feel worried or burdened.",
        sentences: [
            "Financial problems are {verb}ing her {blank}.",
            "Don't let negative thoughts {verb} you {blank}.",
            "The heavy backpack was {verb}ing the child {blank}.",
            "Guilt was {verb}ing {blank} on his conscience."
        ],
        options: ["down", "up", "in", "on"]
    },

    // ========================================
    // SIGN (more expanded)
    // ========================================
    {
        verb: "sign", particle: "on", phrase: "sign on", category: "business", level: "college",
        meaning: "To agree to do a job or task; to register as unemployed.",
        sentences: [
            "She {verb}ed {blank} as a volunteer for the charity event.",
            "Three new companies have {verb}ed {blank} as sponsors.",
            "He {verb}ed {blank} to the project without knowing how much work it involved.",
            "After being laid off, he had to {verb} {blank} at the unemployment office."
        ],
        options: ["on", "up", "in", "off"]
    },

    // ========================================
    // GO (expanded)
    // ========================================
    {
        verb: "go", particle: "about", phrase: "go about", category: "daily", level: "high",
        meaning: "To begin or carry out a task; to approach something.",
        sentences: [
            "How should I {verb} {blank} applying for a visa?",
            "She didn't know how to {verb} {blank} solving the problem.",
            "He {verb} {blank} his daily routine as if nothing had happened.",
            "What's the best way to {verb} {blank} learning a new language?"
        ],
        options: ["about", "through", "on", "around"]
    },
    {
        verb: "go", particle: "along with", phrase: "go along with", category: "daily", level: "high",
        meaning: "To agree with someone or comply with a plan.",
        sentences: [
            "She decided to {verb} {blank} the majority decision.",
            "He didn't like the idea but {verb} {blank} it anyway.",
            "I'll {verb} {blank} whatever the group decides.",
            "The board {verb} {blank} the CEO's restructuring plan."
        ],
        options: ["along with", "on with", "through with", "ahead with"]
    },
    {
        verb: "go", particle: "for", phrase: "go for", category: "daily", level: "high",
        meaning: "To choose; to try to achieve; to apply to.",
        sentences: [
            "I think I'll {verb} {blank} the steak tonight.",
            "She's {verb}ing {blank} the gold medal this Olympics.",
            "The same rule {verb}es {blank} everyone, no exceptions.",
            "He decided to {verb} {blank} the more challenging course."
        ],
        options: ["for", "with", "on", "about"]
    },

    // ========================================
    // MAKE (expanded)
    // ========================================
    {
        verb: "make", particle: "for", phrase: "make for", category: "daily", level: "college",
        meaning: "To move toward a place; to contribute to or result in.",
        sentences: [
            "After the meeting, she {verb} {blank} the exit.",
            "Good communication {verb}s {blank} a healthy relationship.",
            "The beautiful weather {verb}s {blank} a perfect picnic day.",
            "They {verb} {blank} the nearest shelter when it started raining."
        ],
        options: ["for", "off", "out", "up"]
    },
    {
        verb: "make", particle: "of", phrase: "make of", category: "daily", level: "college",
        meaning: "To have an opinion about something; to understand or interpret.",
        sentences: [
            "What do you {verb} {blank} his strange behavior?",
            "I don't know what to {verb} {blank} her comment.",
            "She didn't know what to {verb} {blank} the situation.",
            "What do you {verb} {blank} the new company policy?"
        ],
        options: ["of", "out", "up", "for"]
    },

    // ========================================
    // RUN (more expanded)
    // ========================================
    {
        verb: "run", particle: "off", phrase: "run off", category: "daily", level: "college",
        meaning: "To leave quickly; to make copies of a document.",
        sentences: [
            "The children {verb} {blank} as soon as the bell rang.",
            "Can you {verb} {blank} twenty copies of this handout?",
            "The suspect {verb} {blank} before the police could catch him.",
            "She {verb} {blank} a few extra copies just in case."
        ],
        options: ["off", "out", "away", "through"]
    },
    {
        verb: "run", particle: "across", phrase: "run across", category: "daily", level: "college",
        meaning: "To find or meet someone by chance.",
        sentences: [
            "I {verb} {blank} an old photo while cleaning the attic.",
            "She {verb} {blank} a fascinating article about space travel.",
            "We {verb} {blank} some interesting data during the research.",
            "He {verb} {blank} his childhood friend at the airport."
        ],
        options: ["across", "into", "over", "through"]
    },

    // ========================================
    // PICK (more expanded)
    // ========================================
    {
        verb: "pick", particle: "apart", phrase: "pick apart", category: "academic", level: "college",
        meaning: "To criticize something in great detail; to find faults.",
        sentences: [
            "The critics {verb}ed {blank} every scene of the movie.",
            "Don't {verb} {blank} my work — it's just a first draft.",
            "The professor {verb}ed {blank} the student's thesis argument.",
            "Social media users love to {verb} {blank} celebrity outfits."
        ],
        options: ["apart", "out", "on", "up"]
    },

    // ========================================
    // LINE (expanded)
    // ========================================
    {
        verb: "line", particle: "up with", phrase: "line up with", category: "business", level: "college",
        meaning: "To be consistent or in agreement with something.",
        sentences: [
            "His actions don't {verb} {blank} what he says.",
            "The results {verb} {blank} our initial predictions.",
            "Make sure your goals {verb} {blank} the company's mission.",
            "The evidence doesn't {verb} {blank} his testimony."
        ],
        options: ["up with", "up", "out with", "in with"]
    },

    // ========================================
    // FIGURE (expanded)
    // ========================================
    {
        verb: "figure", particle: "in", phrase: "figure in", category: "business", level: "college",
        meaning: "To be included as an important part; to include in calculations.",
        sentences: [
            "Don't forget to {verb} {blank} the cost of taxes.",
            "Weather always {verb}s {blank} when planning outdoor events.",
            "She didn't {verb} {blank} transportation costs in the budget.",
            "Luck {verb}s {blank} more than most people realize."
        ],
        options: ["in", "out", "up", "on"]
    },

    // ========================================
    // SWITCH (expanded)
    // ========================================
    {
        verb: "switch", particle: "on", phrase: "switch on", category: "daily", level: "elementary",
        meaning: "To turn on a device or light.",
        sentences: [
            "Can you {verb} {blank} the light? It's getting dark.",
            "She {verb}ed {blank} the TV to watch the evening news.",
            "He {verb}es {blank} his computer first thing every morning.",
            "{verb} {blank} the heater — it's freezing in here."
        ],
        options: ["on", "off", "up", "out"]
    },
    {
        verb: "switch", particle: "over", phrase: "switch over", category: "daily", level: "college",
        meaning: "To change from one system or thing to another.",
        sentences: [
            "The company {verb}ed {blank} to a new software system.",
            "Many households are {verb}ing {blank} to solar energy.",
            "She {verb}ed {blank} to a different phone provider.",
            "They {verb}ed {blank} from manual to automated production."
        ],
        options: ["over", "off", "on", "up"]
    },

    // ========================================
    // COVER - NEW VERB
    // ========================================
    {
        verb: "cover", particle: "up", phrase: "cover up", category: "business", level: "college",
        meaning: "To hide the truth about something; to conceal wrongdoing.",
        sentences: [
            "The company tried to {verb} {blank} the safety violations.",
            "She used makeup to {verb} {blank} the bruise on her arm.",
            "Politicians often try to {verb} {blank} their mistakes.",
            "The scandal was {verb}ed {blank} for years before it came to light."
        ],
        options: ["up", "over", "out", "off"]
    },
    {
        verb: "cover", particle: "for", phrase: "cover for", category: "daily", level: "college",
        meaning: "To do someone's work while they are absent; to provide an alibi.",
        sentences: [
            "Can you {verb} {blank} me while I step out for lunch?",
            "She {verb}ed {blank} her colleague who was on sick leave.",
            "He asked his friend to {verb} {blank} him while he snuck out.",
            "I'll {verb} {blank} you at the reception desk this afternoon."
        ],
        options: ["for", "up", "over", "out"]
    },

    // ========================================
    // WEAR (more expanded)
    // ========================================
    {
        verb: "wear", particle: "in", phrase: "wear in", category: "daily", level: "college",
        meaning: "To make new shoes or clothes more comfortable by wearing them.",
        sentences: [
            "These boots are stiff but they'll {verb} {blank} after a few days.",
            "New leather shoes take a while to {verb} {blank}.",
            "She's still {verb}ing {blank} her new hiking boots.",
            "The jeans will feel better once they've been {verb}n {blank}."
        ],
        options: ["in", "out", "off", "down"]
    },

    // ========================================
    // LOCK (expanded)
    // ========================================
    {
        verb: "lock", particle: "in", phrase: "lock in", category: "business", level: "college",
        meaning: "To secure or guarantee something; to commit to an agreement.",
        sentences: [
            "We should {verb} {blank} the current interest rate before it rises.",
            "She {verb}ed {blank} a great price for the hotel room.",
            "The contract {verb}s you {blank} for two years.",
            "They {verb}ed {blank} the deal before the competition could respond."
        ],
        options: ["in", "out", "up", "down"]
    },
    {
        verb: "lock", particle: "up", phrase: "lock up", category: "daily", level: "college",
        meaning: "To secure a building by locking all doors; to imprison someone.",
        sentences: [
            "Don't forget to {verb} {blank} before you leave the office.",
            "The criminal was {verb}ed {blank} for ten years.",
            "She {verb}s {blank} the store every night at closing time.",
            "Make sure all the windows are {verb}ed {blank}."
        ],
        options: ["up", "out", "in", "off"]
    },

    // ========================================
    // ZOOM (expanded)
    // ========================================
    {
        verb: "zoom", particle: "out", phrase: "zoom out", category: "academic", level: "college",
        meaning: "To make an image smaller to see more of the surroundings; to take a broader view.",
        sentences: [
            "Let's {verb} {blank} to see the bigger picture.",
            "{verb} {blank} on the map so we can see the whole country.",
            "If you {verb} {blank}, you'll notice the overall pattern.",
            "The camera {verb}ed {blank} to reveal the massive crowd."
        ],
        options: ["out", "in", "up", "on"]
    },

    // ========================================
    // IRON (expanded)
    // ========================================
    // ========================================
    // ROLL - NEW VERB
    // ========================================
    {
        verb: "roll", particle: "out", phrase: "roll out", category: "business", level: "professional",
        meaning: "To officially launch or introduce a new product or plan.",
        sentences: [
            "The company will {verb} {blank} the new feature next month.",
            "They {verb}ed {blank} the vaccine in phases across the country.",
            "We plan to {verb} {blank} the updated software by June.",
            "The government is {verb}ing {blank} a new public health campaign."
        ],
        options: ["out", "up", "in", "off"]
    },
    {
        verb: "roll", particle: "back", phrase: "roll back", category: "business", level: "professional",
        meaning: "To reverse or undo a change; to reduce prices or regulations.",
        sentences: [
            "The government decided to {verb} {blank} the tax increase.",
            "We need to {verb} {blank} the update due to critical bugs.",
            "Protesters demanded to {verb} {blank} the new restrictions.",
            "The store {verb}ed {blank} prices for the anniversary sale."
        ],
        options: ["back", "out", "up", "off"]
    },

    // ========================================
    // RAMP - NEW VERB
    // ========================================
    {
        verb: "ramp", particle: "up", phrase: "ramp up", category: "business", level: "professional",
        meaning: "To increase or intensify something significantly.",
        sentences: [
            "The factory needs to {verb} {blank} production to meet demand.",
            "We're {verb}ing {blank} our marketing efforts before the launch.",
            "Security was {verb}ed {blank} ahead of the presidential visit.",
            "She {verb}ed {blank} her training as the competition approached."
        ],
        options: ["up", "down", "off", "on"]
    },

    // ========================================
    // STOCK - NEW VERB
    // ========================================
    {
        verb: "stock", particle: "up", phrase: "stock up", category: "daily", level: "college",
        meaning: "To buy a large supply of something.",
        sentences: [
            "We need to {verb} {blank} on groceries before the storm hits.",
            "She always {verb}s {blank} on supplies before a long trip.",
            "People {verb}ed {blank} on toilet paper during the pandemic.",
            "It's wise to {verb} {blank} when things are on sale."
        ],
        options: ["up", "in", "out", "off"]
    },

    // ========================================
    // SEND - NEW VERB
    // ========================================
    {
        verb: "send", particle: "off", phrase: "send off", category: "daily", level: "college",
        meaning: "To post something by mail; to say goodbye to someone who is leaving.",
        sentences: [
            "She {verb} {blank} the application by express mail.",
            "We went to the airport to {verb} him {blank}.",
            "Don't forget to {verb} {blank} the thank-you cards.",
            "The whole team came to {verb} her {blank} on her last day."
        ],
        options: ["off", "out", "away", "back"]
    },
    {
        verb: "send", particle: "back", phrase: "send back", category: "daily", level: "college",
        meaning: "To return something to where it came from.",
        sentences: [
            "The food was cold, so she {verb} it {blank} to the kitchen.",
            "I had to {verb} {blank} the package because it was damaged.",
            "The editor {verb} {blank} the manuscript with corrections.",
            "He {verb} {blank} the shirt because it was the wrong size."
        ],
        options: ["back", "off", "out", "away"]
    },

    // ========================================
    // LAND - NEW VERB
    // ========================================
    {
        verb: "land", particle: "on", phrase: "land on", category: "daily", level: "high",
        meaning: "To finally choose or decide on something after consideration.",
        sentences: [
            "After much debate, they {verb}ed {blank} a name for the company.",
            "We {verb}ed {blank} the idea of hosting a virtual event.",
            "She {verb}ed {blank} a compromise that satisfied both parties.",
            "Have you {verb}ed {blank} a topic for your dissertation yet?"
        ],
        options: ["on", "in", "at", "upon"]
    },

    // ========================================
    // HOLD (more expanded)
    // ========================================
    {
        verb: "hold", particle: "against", phrase: "hold against", category: "emotion", level: "high",
        meaning: "To let something negative that someone did affect your opinion of them.",
        sentences: [
            "I won't {verb} it {blank} you — everyone makes mistakes.",
            "She still {verb}s his past behavior {blank} him.",
            "Don't {verb} one bad day {blank} the whole team.",
            "He promised not to {verb} her earlier comments {blank} her."
        ],
        options: ["against", "back", "on", "down"]
    },

    // ========================================
    // HAVE
    // ========================================
    {
        verb: "have", particle: "on", phrase: "have on", category: "daily", level: "college",
        meaning: "To be wearing something; to trick or deceive someone playfully.",
        sentences: [
            "What did she {verb} {blank} at the party last night?",
            "He {verb} a blue jacket {blank} when I saw him.",
            "Are you {verb}ing me {blank}? That can't be true!",
            "She didn't {verb} anything warm {blank}, so she was freezing."
        ],
        options: ["on", "off", "out", "in"]
    },
    {
        verb: "have", particle: "over", phrase: "have over", category: "daily", level: "college",
        meaning: "To invite someone to your home as a guest.",
        sentences: [
            "We're {verb}ing some friends {blank} for dinner this Saturday.",
            "She loves {verb}ing people {blank} for barbecues in the summer.",
            "They {verb} us {blank} every Thanksgiving.",
            "Why don't we {verb} the neighbors {blank} for coffee?"
        ],
        options: ["over", "on", "out", "in"]
    },
    {
        verb: "have", particle: "out", phrase: "have out", category: "emotion", level: "college",
        meaning: "To discuss something openly and honestly, especially a disagreement.",
        sentences: [
            "They finally {verb} it {blank} after weeks of tension.",
            "I think we need to {verb} this {blank} once and for all.",
            "She {verb} it {blank} with her boss about the unfair treatment.",
            "It's better to {verb} things {blank} than to let resentment build."
        ],
        options: ["out", "on", "over", "off"]
    },
    {
        verb: "have", particle: "off", phrase: "have off", category: "daily", level: "college",
        meaning: "To have a day or period free from work.",
        sentences: [
            "I {verb} next Monday {blank} — let's do something fun.",
            "She {verb}s every other Friday {blank}.",
            "Do you {verb} any days {blank} this week?",
            "He {verb} the whole week {blank} for his honeymoon."
        ],
        options: ["off", "on", "out", "over"]
    },
    {
        verb: "have", particle: "against", phrase: "have against", category: "emotion", level: "college",
        meaning: "To have a reason for disliking someone or something.",
        sentences: [
            "What do you {verb} {blank} him? He seems nice.",
            "I {verb} nothing {blank} the idea — I just think it needs more planning.",
            "She acts like she {verb}s something {blank} the whole department.",
            "I don't {verb} anything {blank} working overtime occasionally."
        ],
        options: ["against", "on", "out", "over"]
    },

    // ========================================
    // BE
    // ========================================
    {
        verb: "be", particle: "into", phrase: "be into", category: "daily", level: "college",
        meaning: "To be very interested in or enthusiastic about something.",
        sentences: [
            "She's really {blank} yoga and meditation these days.",
            "He's been {blank} photography since he was a teenager.",
            "Are you {blank} jazz music at all?",
            "They're really {blank} hiking and outdoor activities."
        ],
        options: ["into", "up to", "over", "off"]
    },
    {
        verb: "be", particle: "up to", phrase: "be up to", category: "daily", level: "college",
        meaning: "To be doing something (often suspicious); to be someone's responsibility.",
        sentences: [
            "What are you {blank}? You look guilty!",
            "It's {blank} you to decide where we eat tonight.",
            "I wonder what those kids are {blank} in the backyard.",
            "The final decision is {blank} the committee."
        ],
        options: ["up to", "into", "over", "off"]
    },
    {
        verb: "be", particle: "over", phrase: "be over", category: "emotion", level: "college",
        meaning: "To be finished or ended; to have recovered from something.",
        sentences: [
            "The meeting will {blank} by 3 PM.",
            "Their relationship has been {blank} for months.",
            "She's finally {blank} the flu and feeling better.",
            "Is the concert {blank} already? That was fast!"
        ],
        options: ["over", "up to", "into", "off"]
    },
    {
        verb: "be", particle: "off", phrase: "be off", category: "daily", level: "college",
        meaning: "To leave; to be absent from work; for food to be spoiled.",
        sentences: [
            "I'm {blank} now — see you tomorrow!",
            "She's {blank} sick today.",
            "Don't drink that milk — it's {blank}.",
            "We're {blank} to Paris next week for vacation."
        ],
        options: ["off", "over", "into", "up to"]
    },
    {
        verb: "be", particle: "down", phrase: "be down", category: "emotion", level: "college",
        meaning: "To feel sad or depressed; for a system to be not working.",
        sentences: [
            "She's been really {blank} since her dog passed away.",
            "The website has been {blank} all morning.",
            "He seems a bit {blank} today — maybe we should check on him.",
            "The server is {blank} again — IT is working on it."
        ],
        options: ["down", "off", "over", "up to"]
    },

    // ========================================
    // LET
    // ========================================
    {
        verb: "let", particle: "down", phrase: "let down", category: "emotion", level: "middle",
        meaning: "To disappoint someone by failing to do what they expected.",
        sentences: [
            "I trusted him, and he {verb} me {blank}.",
            "Don't {verb} the team {blank} — we're counting on you.",
            "She felt {verb} {blank} when nobody came to her party.",
            "He promised to help but {verb} us {blank} at the last minute."
        ],
        options: ["down", "in", "out", "off"]
    },
    {
        verb: "let", particle: "in", phrase: "let in", category: "daily", level: "elementary",
        meaning: "To allow someone to enter a place.",
        sentences: [
            "Can you {verb} me {blank}? I forgot my key.",
            "The security guard refused to {verb} us {blank} without ID.",
            "She {verb} the cat {blank} from the cold.",
            "Don't {verb} strangers {blank} the building."
        ],
        options: ["in", "out", "down", "off"]
    },
    {
        verb: "let", particle: "out", phrase: "let out", category: "daily", level: "elementary",
        meaning: "To allow someone to leave; to release; to make clothing larger.",
        sentences: [
            "School {verb}s {blank} at 3 PM every day.",
            "She {verb} {blank} a scream when she saw the spider.",
            "The tailor can {verb} {blank} the waist of those pants.",
            "He {verb} the dog {blank} into the backyard."
        ],
        options: ["out", "in", "down", "off"]
    },
    {
        verb: "let", particle: "off", phrase: "let off", category: "daily", level: "middle",
        meaning: "To not punish someone; to allow someone to avoid a duty; to release (steam, fireworks).",
        sentences: [
            "The judge {verb} him {blank} with just a warning.",
            "I'll {verb} you {blank} this time, but don't do it again.",
            "The kids {verb} {blank} fireworks on New Year's Eve.",
            "She was {verb} {blank} from cleaning duty because she was sick."
        ],
        options: ["off", "out", "down", "in"]
    },
    {
        verb: "let", particle: "go", phrase: "let go", category: "emotion", level: "middle",
        meaning: "To stop holding something; to dismiss from a job; to stop dwelling on something.",
        sentences: [
            "You need to {verb} {blank} of the past and move forward.",
            "The company {verb} {blank} of fifty employees last month.",
            "{verb} {blank} of the rope before you hurt yourself!",
            "It's hard to {verb} {blank}, but holding on is hurting you more."
        ],
        options: ["go", "off", "out", "down"]
    },

    // ========================================
    // SEE
    // ========================================
    {
        verb: "see", particle: "through", phrase: "see through", category: "emotion", level: "college",
        meaning: "To recognize someone's deception; to continue until something is completed.",
        sentences: [
            "I could {verb} {blank} his lies from the very beginning.",
            "She's determined to {verb} this project {blank} to the end.",
            "Nobody could {verb} {blank} her disguise at the costume party.",
            "We need to {verb} {blank} the difficult times together."
        ],
        options: ["through", "off", "to", "out"]
    },
    {
        verb: "see", particle: "off", phrase: "see off", category: "travel", level: "college",
        meaning: "To go to the airport, station, etc., to say goodbye to someone.",
        sentences: [
            "We went to the airport to {verb} her {blank}.",
            "His whole family came to {verb} him {blank} at the train station.",
            "She {verb} {blank} the guests at the front door.",
            "They {verb} us {blank} with tears in their eyes."
        ],
        options: ["off", "through", "to", "out"]
    },
    {
        verb: "see", particle: "to", phrase: "see to", category: "business", level: "college",
        meaning: "To deal with or take care of something; to make sure something happens.",
        sentences: [
            "I'll {verb} {blank} the arrangements for the conference.",
            "Can you {verb} {blank} it that the report is finished by Friday?",
            "She {verb} {blank} all the catering for the event herself.",
            "The manager will {verb} {blank} your complaint personally."
        ],
        options: ["to", "off", "through", "out"]
    },
    {
        verb: "see", particle: "out", phrase: "see out", category: "daily", level: "college",
        meaning: "To accompany someone to the exit; to last until the end of something.",
        sentences: [
            "Let me {verb} you {blank} — the hallway can be confusing.",
            "I don't think these shoes will {verb} {blank} another winter.",
            "The receptionist {verb} the visitors {blank}.",
            "She hopes to {verb} {blank} her contract before retiring."
        ],
        options: ["out", "off", "to", "through"]
    },

    // ========================================
    // TALK
    // ========================================
    {
        verb: "talk", particle: "into", phrase: "talk into", category: "daily", level: "college",
        meaning: "To persuade someone to do something.",
        sentences: [
            "She {verb}ed me {blank} going bungee jumping.",
            "Don't let them {verb} you {blank} buying something you don't need.",
            "He {verb}ed his parents {blank} letting him get a dog.",
            "I was {verb}ed {blank} volunteering for the committee."
        ],
        options: ["into", "out of", "over", "through"]
    },
    {
        verb: "talk", particle: "out of", phrase: "talk out of", category: "daily", level: "college",
        meaning: "To persuade someone not to do something.",
        sentences: [
            "I tried to {verb} her {blank} quitting, but she'd made up her mind.",
            "His friends {verb}ed him {blank} getting that tattoo.",
            "She {verb}ed me {blank} making a risky investment.",
            "Can someone {verb} him {blank} this crazy idea?"
        ],
        options: ["out of", "into", "over", "through"]
    },
    {
        verb: "talk", particle: "over", phrase: "talk over", category: "business", level: "college",
        meaning: "To discuss something thoroughly with someone.",
        sentences: [
            "Let's {verb} it {blank} before we make a final decision.",
            "She wants to {verb} {blank} the contract details with her lawyer.",
            "We need to {verb} this {blank} as a team.",
            "They {verb}ed {blank} the options and chose the best one."
        ],
        options: ["over", "into", "out of", "through"]
    },
    {
        verb: "talk", particle: "back", phrase: "talk back", category: "emotion", level: "college",
        meaning: "To reply rudely to someone in authority.",
        sentences: [
            "Don't {verb} {blank} to your mother like that!",
            "The student was punished for {verb}ing {blank} to the teacher.",
            "She never {verb}s {blank} — she's very respectful.",
            "He got in trouble for {verb}ing {blank} to his boss."
        ],
        options: ["back", "over", "into", "out"]
    },

    // ========================================
    // SIT
    // ========================================
    {
        verb: "sit", particle: "down", phrase: "sit down", category: "daily", level: "elementary",
        meaning: "To take a seat; to have a serious conversation.",
        sentences: [
            "Please {verb} {blank} — the meeting is about to start.",
            "We need to {verb} {blank} and have a serious talk about the budget.",
            "She {verb} {blank} at the table and opened her laptop.",
            "He asked everyone to {verb} {blank} before making the announcement."
        ],
        options: ["down", "back", "in", "up"]
    },
    {
        verb: "sit", particle: "back", phrase: "sit back", category: "daily", level: "elementary",
        meaning: "To relax; to not take action and just observe.",
        sentences: [
            "Just {verb} {blank} and enjoy the show.",
            "You can't just {verb} {blank} and do nothing while others work.",
            "She {verb} {blank} in her chair and smiled.",
            "We {verb} {blank} and watched the sunset over the ocean."
        ],
        options: ["back", "down", "in", "up"]
    },
    {
        verb: "sit", particle: "in on", phrase: "sit in on", category: "academic", level: "college",
        meaning: "To attend a meeting, class, or event as an observer.",
        sentences: [
            "Mind if I {verb} {blank} your meeting today?",
            "She was invited to {verb} {blank} the board discussion.",
            "New employees {verb} {blank} training sessions for a week.",
            "He {verb} {blank} the lecture to see if the course was interesting."
        ],
        options: ["in on", "back", "down", "out"]
    },
    {
        verb: "sit", particle: "out", phrase: "sit out", category: "daily", level: "college",
        meaning: "To not participate in an activity; to wait for something to pass.",
        sentences: [
            "She decided to {verb} {blank} this dance — her feet were hurting.",
            "Let's {verb} {blank} the rain and wait for it to stop.",
            "He had to {verb} {blank} the game because of his injury.",
            "I think I'll {verb} this round {blank} — I'm exhausted."
        ],
        options: ["out", "back", "in on", "down"]
    },

    // ========================================
    // LEAVE
    // ========================================
    {
        verb: "leave", particle: "out", phrase: "leave out", category: "daily", level: "college",
        meaning: "To not include something or someone; to omit.",
        sentences: [
            "Don't {verb} {blank} any important details when you tell the story.",
            "I felt {verb} {blank} when everyone was invited except me.",
            "She accidentally {verb} {blank} an ingredient and the cake was ruined.",
            "Make sure you don't {verb} {blank} anyone on the guest list."
        ],
        options: ["out", "behind", "off", "alone"]
    },
    {
        verb: "leave", particle: "behind", phrase: "leave behind", category: "daily", level: "college",
        meaning: "To forget to bring something; to go away from permanently.",
        sentences: [
            "I think I {verb} my umbrella {blank} at the restaurant.",
            "She {verb} her old life {blank} and started fresh in a new city.",
            "Don't {verb} your phone {blank} — you'll need it.",
            "The company risks being {verb} {blank} by competitors."
        ],
        options: ["behind", "out", "off", "alone"]
    },
    {
        verb: "leave", particle: "off", phrase: "leave off", category: "daily", level: "college",
        meaning: "To stop doing something; to not include in a list.",
        sentences: [
            "Let's {verb} {blank} where we stopped yesterday.",
            "His name was {verb} {blank} the invitation list by mistake.",
            "She {verb} {blank} the last chapter and went to bed.",
            "Where did we {verb} {blank}? Oh yes, the marketing budget."
        ],
        options: ["off", "out", "behind", "alone"]
    },
    {
        verb: "leave", particle: "alone", phrase: "leave alone", category: "emotion", level: "college",
        meaning: "To stop bothering someone; to not touch or interfere with something.",
        sentences: [
            "{verb} me {blank}! I want some peace and quiet.",
            "She told the kids to {verb} the cat {blank}.",
            "Just {verb} it {blank} — it'll fix itself.",
            "Why can't you just {verb} her {blank}? She's going through a lot."
        ],
        options: ["alone", "out", "behind", "off"]
    },

    // ========================================
    // KICK
    // ========================================
    {
        verb: "kick", particle: "off", phrase: "kick off", category: "business", level: "college",
        meaning: "To start something; the beginning of a game or event.",
        sentences: [
            "The festival {verb}s {blank} this Friday with a live concert.",
            "Let's {verb} {blank} the meeting with a quick update.",
            "The football game {verb}s {blank} at 7 PM.",
            "She {verb}ed {blank} the campaign with a powerful speech."
        ],
        options: ["off", "out", "back", "in"]
    },
    {
        verb: "kick", particle: "out", phrase: "kick out", category: "daily", level: "college",
        meaning: "To force someone to leave a place.",
        sentences: [
            "He was {verb}ed {blank} of the bar for starting a fight.",
            "They {verb}ed their roommate {blank} for not paying rent.",
            "The teacher {verb}ed him {blank} of class for cheating.",
            "She got {verb}ed {blank} of the club for breaking the rules."
        ],
        options: ["out", "off", "back", "in"]
    },
    {
        verb: "kick", particle: "back", phrase: "kick back", category: "daily", level: "college",
        meaning: "To relax and take it easy.",
        sentences: [
            "After a long week, I just want to {verb} {blank} and watch TV.",
            "They {verb}ed {blank} on the porch with cold drinks.",
            "Let's {verb} {blank} and enjoy the weekend.",
            "She loves to {verb} {blank} with a good book on Sundays."
        ],
        options: ["back", "off", "out", "in"]
    },
    {
        verb: "kick", particle: "in", phrase: "kick in", category: "daily", level: "college",
        meaning: "To start to have an effect; to contribute money.",
        sentences: [
            "The painkillers should {verb} {blank} within twenty minutes.",
            "Everyone {verb}ed {blank} ten dollars for the gift.",
            "The heating system {verb}s {blank} when the temperature drops.",
            "The caffeine hasn't {verb}ed {blank} yet — I'm still drowsy."
        ],
        options: ["in", "off", "out", "back"]
    },

    // ========================================
    // BURN
    // ========================================
    {
        verb: "burn", particle: "out", phrase: "burn out", category: "emotion", level: "college",
        meaning: "To become exhausted from overwork; to stop functioning due to excessive use.",
        sentences: [
            "She {verb}ed {blank} after working 80-hour weeks for three months.",
            "The light bulb has {verb}ed {blank} — we need a new one.",
            "Many young doctors {verb} {blank} within their first five years.",
            "If you don't take a break, you'll {verb} {blank}."
        ],
        options: ["out", "down", "up", "off"]
    },
    {
        verb: "burn", particle: "down", phrase: "burn down", category: "daily", level: "college",
        meaning: "To be destroyed by fire; to burn completely.",
        sentences: [
            "The old warehouse {verb}ed {blank} overnight.",
            "The candle {verb}ed {blank} while she was reading.",
            "The wildfire {verb}ed {blank} hundreds of acres of forest.",
            "The historical building {verb}ed {blank} before firefighters arrived."
        ],
        options: ["down", "out", "up", "off"]
    },
    {
        verb: "burn", particle: "up", phrase: "burn up", category: "daily", level: "college",
        meaning: "To be consumed by fire; to make someone very angry.",
        sentences: [
            "The spacecraft {verb}ed {blank} on re-entry into the atmosphere.",
            "It really {verb}s me {blank} when people litter.",
            "The documents were {verb}ed {blank} in the fire.",
            "His dishonesty {verb}s me {blank}."
        ],
        options: ["up", "down", "out", "off"]
    },

    // ========================================
    // DIE
    // ========================================
    {
        verb: "die", particle: "down", phrase: "die down", category: "daily", level: "college",
        meaning: "To gradually become weaker or less intense.",
        sentences: [
            "The wind finally {verb}d {blank} after midnight.",
            "We'll go outside once the rain {verb}s {blank}.",
            "The controversy {verb}d {blank} after a few weeks.",
            "The applause slowly {verb}d {blank} and the room fell silent."
        ],
        options: ["down", "out", "off", "away"]
    },
    {
        verb: "die", particle: "out", phrase: "die out", category: "academic", level: "college",
        meaning: "To become extinct; to gradually disappear completely.",
        sentences: [
            "Dinosaurs {verb}d {blank} about 65 million years ago.",
            "Many traditional crafts are {verb}ing {blank}.",
            "The language is in danger of {verb}ing {blank} completely.",
            "Some customs have {verb}d {blank} over the centuries."
        ],
        options: ["out", "down", "off", "away"]
    },
    {
        verb: "die", particle: "off", phrase: "die off", category: "academic", level: "college",
        meaning: "To gradually die one by one until none are left.",
        sentences: [
            "The trees are {verb}ing {blank} due to the drought.",
            "Bee populations are {verb}ing {blank} at an alarming rate.",
            "Without intervention, the species will {verb} {blank} entirely.",
            "The flowers {verb}d {blank} as winter set in."
        ],
        options: ["off", "out", "down", "away"]
    },

    // ========================================
    // CLEAR
    // ========================================
    {
        verb: "clear", particle: "up", phrase: "clear up", category: "daily", level: "college",
        meaning: "To explain or resolve confusion; for weather to improve; to tidy.",
        sentences: [
            "Let me {verb} {blank} the misunderstanding before it gets worse.",
            "The weather is expected to {verb} {blank} by this afternoon.",
            "Can you {verb} {blank} this mess before your mother arrives?",
            "The rash should {verb} {blank} within a few days."
        ],
        options: ["up", "out", "off", "away"]
    },
    {
        verb: "clear", particle: "out", phrase: "clear out", category: "daily", level: "college",
        meaning: "To remove everything from a place; to leave a place quickly.",
        sentences: [
            "We need to {verb} {blank} the garage this weekend.",
            "The police told everyone to {verb} {blank} of the building.",
            "She {verb}ed {blank} her desk on her last day at work.",
            "He {verb}ed {blank} all the junk from the attic."
        ],
        options: ["out", "up", "off", "away"]
    },

    // ========================================
    // PUSH
    // ========================================
    {
        verb: "push", particle: "through", phrase: "push through", category: "business", level: "college",
        meaning: "To get something accepted despite opposition; to persevere.",
        sentences: [
            "The government {verb}ed {blank} the new legislation despite protests.",
            "She {verb}ed {blank} the pain and finished the marathon.",
            "We need to {verb} {blank} this proposal before the deadline.",
            "He {verb}ed {blank} the crowd to reach the exit."
        ],
        options: ["through", "back", "ahead", "forward"]
    },
    {
        verb: "push", particle: "back", phrase: "push back", category: "business", level: "college",
        meaning: "To resist or oppose something; to postpone.",
        sentences: [
            "Employees {verb}ed {blank} against the new overtime policy.",
            "The launch date was {verb}ed {blank} by two weeks.",
            "She's not afraid to {verb} {blank} when she disagrees.",
            "The meeting has been {verb}ed {blank} to 3 PM."
        ],
        options: ["back", "through", "ahead", "forward"]
    },
    {
        verb: "push", particle: "ahead", phrase: "push ahead", category: "business", level: "college",
        meaning: "To continue with something despite difficulties.",
        sentences: [
            "Despite the setbacks, the team {verb}ed {blank} with the project.",
            "The company decided to {verb} {blank} with the expansion plan.",
            "She {verb}ed {blank} with her studies despite financial difficulties.",
            "They {verb}ed {blank} even though many people opposed the idea."
        ],
        options: ["ahead", "back", "through", "forward"]
    },

    // ========================================
    // HELP
    // ========================================
    {
        verb: "help", particle: "out", phrase: "help out", category: "daily", level: "college",
        meaning: "To assist someone, especially when they are in difficulty.",
        sentences: [
            "Can you {verb} me {blank} with these heavy boxes?",
            "She always {verb}s {blank} at the local food bank on weekends.",
            "He offered to {verb} {blank} while the regular staff was away.",
            "My neighbors {verb}ed us {blank} when our car broke down."
        ],
        options: ["out", "up", "in", "on"]
    },

    // ========================================
    // REACH
    // ========================================
    {
        verb: "reach", particle: "out", phrase: "reach out", category: "emotion", level: "college",
        meaning: "To contact someone; to offer help or support.",
        sentences: [
            "Don't hesitate to {verb} {blank} if you need anything.",
            "She {verb}ed {blank} to her old college friends after years.",
            "The organization {verb}es {blank} to homeless people in the city.",
            "He {verb}ed {blank} to the company about a job opportunity."
        ],
        options: ["out", "in", "up", "over"]
    },
    {
        verb: "reach", particle: "out to", phrase: "reach out to", category: "business", level: "college",
        meaning: "To make contact with someone for a specific purpose.",
        sentences: [
            "We should {verb} {blank} potential investors before the deadline.",
            "She {verb}ed {blank} several experts for their opinion.",
            "The marketing team {verb}ed {blank} influencers for the campaign.",
            "Have you {verb}ed {blank} the client about the delay?"
        ],
        options: ["out to", "in to", "up to", "over to"]
    },

    // ========================================
    // HIT
    // ========================================
    {
        verb: "hit", particle: "on", phrase: "hit on", category: "daily", level: "professional",
        meaning: "To suddenly discover an idea; to flirt with someone.",
        sentences: [
            "She {verb} {blank} the perfect solution during her morning jog.",
            "He's always {verb}ting {blank} people at parties.",
            "After hours of brainstorming, I finally {verb} {blank} a great idea.",
            "Some guy was {verb}ting {blank} my sister at the café."
        ],
        options: ["on", "off", "back", "out"]
    },
    {
        verb: "hit", particle: "back", phrase: "hit back", category: "business", level: "professional",
        meaning: "To retaliate; to respond forcefully to criticism or attack.",
        sentences: [
            "The company {verb} {blank} at the accusations with a public statement.",
            "She {verb} {blank} at her critics with undeniable facts.",
            "The team {verb} {blank} with two goals in the second half.",
            "When attacked unfairly, it's natural to want to {verb} {blank}."
        ],
        options: ["back", "on", "off", "out"]
    },
    {
        verb: "hit", particle: "up", phrase: "hit up", category: "daily", level: "professional",
        meaning: "To ask someone for something (informal); to visit a place.",
        sentences: [
            "He {verb} me {blank} for money again.",
            "Let's {verb} {blank} that new taco place for lunch.",
            "She {verb} {blank} every store in the mall looking for the perfect dress.",
            "Don't be afraid to {verb} {blank} your network for job leads."
        ],
        options: ["up", "on", "back", "off"]
    },

    // ========================================
    // HURRY
    // ========================================
    {
        verb: "hurry", particle: "up", phrase: "hurry up", category: "daily", level: "elementary",
        meaning: "To do something more quickly; to rush.",
        sentences: [
            "{verb} {blank}! We're going to miss the bus!",
            "She told the kids to {verb} {blank} and get ready for school.",
            "Can you {verb} {blank} with the report? I need it by noon.",
            "{verb} {blank} and finish your homework before dinner."
        ],
        options: ["up", "on", "along", "off"]
    },

    // ========================================
    // LOG
    // ========================================
    {
        verb: "log", particle: "in", phrase: "log in", category: "daily", level: "elementary",
        meaning: "To enter a username and password to access a computer system.",
        sentences: [
            "I can't {verb} {blank} — I think I forgot my password.",
            "You need to {verb} {blank} to access your account.",
            "She {verb}s {blank} to the system first thing every morning.",
            "Please {verb} {blank} using your company email address."
        ],
        options: ["in", "out", "on", "off"]
    },
    {
        verb: "log", particle: "out", phrase: "log out", category: "daily", level: "elementary",
        meaning: "To exit a computer system or account.",
        sentences: [
            "Don't forget to {verb} {blank} when you're done.",
            "She always {verb}s {blank} of all her accounts before leaving.",
            "The system automatically {verb}s you {blank} after 30 minutes.",
            "I accidentally {verb}ged {blank} in the middle of my work."
        ],
        options: ["out", "in", "on", "off"]
    },

    // ========================================
    // PLUG
    // ========================================
    {
        verb: "plug", particle: "in", phrase: "plug in", category: "daily", level: "elementary",
        meaning: "To connect an electrical device to a power source.",
        sentences: [
            "Don't forget to {verb} {blank} your phone before bed.",
            "The TV won't work unless you {verb} it {blank}.",
            "She {verb}ged {blank} the charger and waited for it to charge.",
            "Can you {verb} {blank} the projector for the presentation?"
        ],
        options: ["in", "out", "on", "up"]
    },
    {
        verb: "plug", particle: "away", phrase: "plug away", category: "daily", level: "professional",
        meaning: "To keep working hard and steadily at something.",
        sentences: [
            "She's been {verb}ging {blank} at her dissertation for months.",
            "Just keep {verb}ging {blank} — you'll finish eventually.",
            "He {verb}ged {blank} at the problem until he solved it.",
            "They're {verb}ging {blank} at building the new website."
        ],
        options: ["away", "in", "on", "up"]
    },

    // ========================================
    // WARM
    // ========================================
    {
        verb: "warm", particle: "up", phrase: "warm up", category: "daily", level: "elementary",
        meaning: "To prepare the body for exercise; to heat food; to become friendlier.",
        sentences: [
            "Let's {verb} {blank} before we start the workout.",
            "Can you {verb} {blank} the soup for me?",
            "She's shy at first but {verb}s {blank} once you get to know her.",
            "The audience started to {verb} {blank} to the comedian after a few jokes."
        ],
        options: ["up", "down", "off", "out"]
    },
    {
        verb: "warm", particle: "to", phrase: "warm to", category: "emotion", level: "professional",
        meaning: "To begin to like or become enthusiastic about something.",
        sentences: [
            "I was skeptical at first, but I'm {verb}ing {blank} the idea.",
            "He slowly {verb}ed {blank} his new colleagues.",
            "She {verb}ed {blank} the project once she saw its potential.",
            "Voters are beginning to {verb} {blank} the new candidate."
        ],
        options: ["to", "up", "down", "off"]
    },

    // ========================================
    // COOL
    // ========================================
    {
        verb: "cool", particle: "down", phrase: "cool down", category: "emotion", level: "elementary",
        meaning: "To become less hot; to become calmer after being angry.",
        sentences: [
            "Let the engine {verb} {blank} before checking the oil.",
            "He needs to {verb} {blank} before we can talk rationally.",
            "The temperature usually {verb}s {blank} in the evening.",
            "Take a walk to {verb} {blank} — you're too worked up."
        ],
        options: ["down", "off", "out", "up"]
    },
    {
        verb: "cool", particle: "off", phrase: "cool off", category: "daily", level: "professional",
        meaning: "To become less hot; to become less angry or intense.",
        sentences: [
            "Let's go to the pool to {verb} {blank} — it's boiling today.",
            "Give her time to {verb} {blank} before you apologize.",
            "The kids jumped in the lake to {verb} {blank}.",
            "Relations between the two countries have {verb}ed {blank} recently."
        ],
        options: ["off", "down", "out", "up"]
    },

    // ========================================
    // DIG
    // ========================================
    {
        verb: "dig", particle: "into", phrase: "dig into", category: "academic", level: "professional",
        meaning: "To start eating enthusiastically; to research something thoroughly.",
        sentences: [
            "The food looks amazing — let's {verb} {blank}!",
            "She {verb}s {blank} the data to find hidden patterns.",
            "The journalist {verb}s {blank} the politician's financial records.",
            "He really {verb}s {blank} every topic he studies."
        ],
        options: ["into", "up", "out", "through"]
    },
    {
        verb: "dig", particle: "up", phrase: "dig up", category: "daily", level: "professional",
        meaning: "To find something by searching; to excavate from the ground.",
        sentences: [
            "The reporter {verb} {blank} some damaging information about the CEO.",
            "The dog {verb} {blank} the bone it had buried last week.",
            "Can you {verb} {blank} the old files from the archive?",
            "Archaeologists {verb} {blank} ancient pottery at the site."
        ],
        options: ["up", "into", "out", "through"]
    },

    // ========================================
    // SUM
    // ========================================
    {
        verb: "sum", particle: "up", phrase: "sum up", category: "academic", level: "professional",
        meaning: "To summarize the main points of something.",
        sentences: [
            "Let me {verb} {blank} what we've discussed so far.",
            "She {verb}med {blank} the key findings in a single slide.",
            "To {verb} {blank}, we need more time and more funding.",
            "He {verb}med {blank} his argument in one powerful sentence."
        ],
        options: ["up", "out", "off", "on"]
    },

    // ========================================
    // FADE
    // ========================================
    {
        verb: "fade", particle: "away", phrase: "fade away", category: "daily", level: "professional",
        meaning: "To gradually disappear or lose strength.",
        sentences: [
            "The music slowly {verb}d {blank} as the car drove off.",
            "Memories of that day have {verb}d {blank} over the years.",
            "His enthusiasm {verb}d {blank} once he realized how much work was involved.",
            "The bruise will {verb} {blank} in a week or so."
        ],
        options: ["away", "out", "off", "down"]
    },
    {
        verb: "fade", particle: "out", phrase: "fade out", category: "daily", level: "professional",
        meaning: "To gradually become less visible or audible.",
        sentences: [
            "The sound slowly {verb}d {blank} at the end of the song.",
            "The image on the old photograph is starting to {verb} {blank}.",
            "His voice {verb}d {blank} as he walked down the hallway.",
            "The streetlights {verb}d {blank} as the sun rose."
        ],
        options: ["out", "away", "off", "down"]
    },

    // ========================================
    // FIRE
    // ========================================
    {
        verb: "fire", particle: "up", phrase: "fire up", category: "emotion", level: "professional",
        meaning: "To start a machine or engine; to become very excited or motivated.",
        sentences: [
            "The coach {verb}d {blank} the team with an inspiring speech.",
            "Let me {verb} {blank} the grill — the guests are arriving soon.",
            "She's all {verb}d {blank} about starting her new business.",
            "He {verb}d {blank} his laptop and started working immediately."
        ],
        options: ["up", "off", "out", "away"]
    },
    {
        verb: "fire", particle: "away", phrase: "fire away", category: "daily", level: "professional",
        meaning: "To begin asking questions or speaking freely.",
        sentences: [
            "I'm ready for your questions — {verb} {blank}!",
            "If you have any concerns, just {verb} {blank}.",
            "She said she was ready, so he {verb}d {blank} with the interview.",
            "'{verb} {blank},' the professor said, 'I'll answer anything.'"
        ],
        options: ["away", "up", "off", "out"]
    },

    // ========================================
    // DRY
    // ========================================
    {
        verb: "dry", particle: "up", phrase: "dry up", category: "daily", level: "professional",
        meaning: "To become completely dry; to run out of supply; to stop talking suddenly.",
        sentences: [
            "The river {verb}s {blank} every summer during the drought.",
            "Funding for the project has {verb}ied {blank} completely.",
            "She {verb}ied {blank} in the middle of her speech and forgot her lines.",
            "Our savings are {verb}ing {blank} faster than expected."
        ],
        options: ["up", "out", "off", "away"]
    },
    {
        verb: "dry", particle: "out", phrase: "dry out", category: "daily", level: "professional",
        meaning: "To become dry after being wet; to undergo treatment for alcohol addiction.",
        sentences: [
            "Hang the clothes outside to {verb} {blank}.",
            "The paint needs a few hours to {verb} {blank}.",
            "He checked into a clinic to {verb} {blank}.",
            "Let the shoes {verb} {blank} before wearing them again."
        ],
        options: ["out", "up", "off", "away"]
    },

    // ========================================
    // CHIP
    // ========================================
    {
        verb: "chip", particle: "in", phrase: "chip in", category: "daily", level: "professional",
        meaning: "To contribute money or effort together with others.",
        sentences: [
            "Everyone {verb}ped {blank} to buy the teacher a farewell gift.",
            "If we all {verb} {blank}, we can afford to rent a bigger venue.",
            "She {verb}ped {blank} with a great idea during the brainstorm.",
            "Can you {verb} {blank} five dollars for the pizza?"
        ],
        options: ["in", "off", "out", "away"]
    },
    {
        verb: "chip", particle: "away at", phrase: "chip away at", category: "business", level: "professional",
        meaning: "To gradually reduce or weaken something through persistent effort.",
        sentences: [
            "The competitor is slowly {verb}ping {blank} our market share.",
            "She's been {verb}ping {blank} the project little by little.",
            "Inflation is {verb}ping {blank} people's purchasing power.",
            "He {verb}ped {blank} the massive task one piece at a time."
        ],
        options: ["away at", "in", "off", "out"]
    },

    // ========================================
    // TOP
    // ========================================
    {
        verb: "top", particle: "up", phrase: "top up", category: "daily", level: "professional",
        meaning: "To refill something to the top; to add more to make it full.",
        sentences: [
            "Can I {verb} {blank} your drink?",
            "I need to {verb} {blank} my phone credit.",
            "She {verb}ped {blank} the tank before the long drive.",
            "He {verb}ped {blank} her glass of wine during dinner."
        ],
        options: ["up", "off", "out", "in"]
    },
    {
        verb: "top", particle: "off", phrase: "top off", category: "daily", level: "professional",
        meaning: "To finish something in a satisfying way; to fill completely.",
        sentences: [
            "They {verb}ped {blank} the meal with a delicious dessert.",
            "To {verb} it {blank}, it started raining on our way home.",
            "She {verb}ped {blank} her outfit with a beautiful scarf.",
            "Let me {verb} {blank} the gas tank before we return the rental car."
        ],
        options: ["off", "up", "out", "in"]
    },

    // ========================================
    // PRINT
    // ========================================
    {
        verb: "print", particle: "out", phrase: "print out", category: "daily", level: "elementary",
        meaning: "To produce a paper copy of a document from a computer.",
        sentences: [
            "Can you {verb} {blank} the report for the meeting?",
            "She {verb}ed {blank} the boarding passes the night before.",
            "I need to {verb} {blank} these photos for the album.",
            "He {verb}ed {blank} fifty copies of the flyer."
        ],
        options: ["out", "off", "up", "in"]
    },

    // ========================================
    // BEEF
    // ========================================
    {
        verb: "beef", particle: "up", phrase: "beef up", category: "business", level: "professional",
        meaning: "To strengthen or make something bigger and more powerful.",
        sentences: [
            "The company needs to {verb} {blank} its security systems.",
            "She's trying to {verb} {blank} her resume before applying.",
            "They {verb}ed {blank} security at the airport after the incident.",
            "We should {verb} {blank} the marketing budget for the launch."
        ],
        options: ["up", "out", "off", "in"]
    },

    // ========================================
    // FIGURE (more)
    // ========================================
    {
        verb: "figure", particle: "on", phrase: "figure on", category: "daily", level: "professional",
        meaning: "To plan or expect something to happen.",
        sentences: [
            "I didn't {verb} {blank} it taking so long.",
            "You can {verb} {blank} spending about $200 for the tickets.",
            "She {verb}d {blank} arriving by noon but got delayed.",
            "We should {verb} {blank} at least an hour for traffic."
        ],
        options: ["on", "out", "in", "up"]
    },

    // ========================================
    // RULE (more)
    // ========================================
    {
        verb: "rule", particle: "in", phrase: "rule in", category: "academic", level: "professional",
        meaning: "To include something as a possibility.",
        sentences: [
            "We can't {verb} anything {blank} or {blank} at this stage.",
            "The police haven't {verb}d {blank} the possibility of arson.",
            "Let's {verb} {blank} all options before narrowing them down.",
            "The doctor wants to {verb} {blank} a few conditions before diagnosing."
        ],
        options: ["in", "out", "off", "on"]
    },

    // ========================================
    // TIDY - NEW VERB
    // ========================================
    {
        verb: "tidy", particle: "up", phrase: "tidy up", category: "daily", level: "elementary",
        meaning: "To make a place neat and organized.",
        sentences: [
            "Please {verb} {blank} your room before the guests arrive.",
            "She spent the morning {verb}ing {blank} the garden.",
            "Let's {verb} {blank} the office before the inspection.",
            "He always {verb}s {blank} after himself in the kitchen."
        ],
        options: ["up", "out", "away", "off"]
    },

    // ========================================
    // RING - NEW VERB
    // ========================================
    {
        verb: "ring", particle: "up", phrase: "ring up", category: "daily", level: "professional",
        meaning: "To call someone on the phone; to record a sale on a cash register.",
        sentences: [
            "I'll {verb} you {blank} when I get home.",
            "The cashier {verb} {blank} the total and it came to $47.",
            "She {verb} {blank} the restaurant to make a reservation.",
            "He {verb} me {blank} in the middle of the night."
        ],
        options: ["up", "back", "off", "out"]
    },
    {
        verb: "ring", particle: "back", phrase: "ring back", category: "daily", level: "professional",
        meaning: "To return a phone call.",
        sentences: [
            "I missed her call — I'll {verb} her {blank} later.",
            "He promised to {verb} {blank} after lunch.",
            "Can you ask her to {verb} me {blank} when she's free?",
            "She never {verb} me {blank} — I'm starting to worry."
        ],
        options: ["back", "up", "off", "out"]
    },

    // ========================================
    // GIVE (more)
    // ========================================
    {
        verb: "give", particle: "in to", phrase: "give in to", category: "emotion", level: "professional",
        meaning: "To surrender to a desire, temptation, or demand.",
        sentences: [
            "Don't {verb} {blank} temptation — stick to your diet!",
            "She {verb} {blank} her cravings and ordered a large pizza.",
            "He finally {verb} {blank} pressure from his colleagues.",
            "Try not to {verb} {blank} fear — you can do this."
        ],
        options: ["in to", "up on", "away", "out"]
    },

    // ========================================
    // TUNE - NEW VERB
    // ========================================
    {
        verb: "tune", particle: "in", phrase: "tune in", category: "daily", level: "professional",
        meaning: "To watch or listen to a broadcast; to pay attention.",
        sentences: [
            "Millions of viewers {verb}d {blank} to watch the live debate.",
            "{verb} {blank} next week for the exciting conclusion!",
            "She {verb}d {blank} to the radio for the traffic report.",
            "Make sure to {verb} {blank} at 8 PM for the special announcement."
        ],
        options: ["in", "out", "up", "off"]
    },
    {
        verb: "tune", particle: "out", phrase: "tune out", category: "daily", level: "professional",
        meaning: "To stop paying attention to something.",
        sentences: [
            "I tend to {verb} {blank} during long meetings.",
            "He completely {verb}d {blank} while she was explaining the rules.",
            "The students started to {verb} {blank} after the first hour.",
            "She {verb}s {blank} all the noise around her when she reads."
        ],
        options: ["out", "in", "up", "off"]
    },

    // ========================================
    // TURN (more)
    // ========================================
    {
        verb: "turn", particle: "away", phrase: "turn away", category: "daily", level: "professional",
        meaning: "To refuse entry or service; to look in a different direction.",
        sentences: [
            "The club {verb}ed {blank} anyone without proper ID.",
            "She {verb}ed {blank} in disgust when she saw the mess.",
            "They were {verb}ed {blank} at the door because it was full.",
            "He couldn't {verb} {blank} from the beautiful sunset."
        ],
        options: ["away", "down", "off", "out"]
    },

    // ========================================
    // PICK (more)
    // ========================================
    {
        verb: "pick", particle: "up on", phrase: "pick up on", category: "daily", level: "professional",
        meaning: "To notice something subtle that others might miss.",
        sentences: [
            "She quickly {verb}ed {blank} the tension in the room.",
            "I didn't {verb} {blank} his sarcasm until later.",
            "Good interviewers {verb} {blank} body language cues.",
            "He {verb}ed {blank} the hint and changed the subject."
        ],
        options: ["up on", "out", "on", "up"]
    },

    // ========================================
    // GO (more)
    // ========================================
    {
        verb: "go", particle: "without", phrase: "go without", category: "daily", level: "professional",
        meaning: "To manage without having something you usually have.",
        sentences: [
            "She had to {verb} {blank} lunch because she was so busy.",
            "Many families {verb} {blank} heating during the winter.",
            "I can't {verb} {blank} my morning coffee.",
            "They {verb} {blank} electricity for three days after the storm."
        ],
        options: ["without", "with", "about", "on"]
    },

    // ========================================
    // FRESHEN - NEW VERB
    // ========================================
    {
        verb: "freshen", particle: "up", phrase: "freshen up", category: "daily", level: "professional",
        meaning: "To wash yourself and make yourself look tidy.",
        sentences: [
            "Let me {verb} {blank} before dinner — I've been gardening all day.",
            "She went to the bathroom to {verb} {blank} before the interview.",
            "We checked into the hotel and {verb}ed {blank} before exploring the city.",
            "He {verb}ed {blank} quickly and changed into clean clothes."
        ],
        options: ["up", "out", "off", "on"]
    },

    // ========================================
    // JACK - NEW VERB
    // ========================================
    {
        verb: "jack", particle: "up", phrase: "jack up", category: "business", level: "professional",
        meaning: "To increase prices sharply; to lift something with a jack.",
        sentences: [
            "Hotels always {verb} {blank} their prices during peak season.",
            "Gas stations {verb}ed {blank} the prices before the holiday weekend.",
            "He {verb}ed {blank} the car to change the flat tire.",
            "Airlines {verb} {blank} fares when demand is high."
        ],
        options: ["up", "off", "out", "in"]
    },

    // ========================================
    // RUN (more)
    // ========================================
    {
        verb: "run", particle: "up against", phrase: "run up against", category: "business", level: "professional",
        meaning: "To encounter an unexpected problem or obstacle.",
        sentences: [
            "We {verb} {blank} some serious technical problems.",
            "She {verb} {blank} resistance from the board of directors.",
            "The project {verb} {blank} budget constraints early on.",
            "They {verb} {blank} legal issues that delayed the merger."
        ],
        options: ["up against", "into", "out of", "over"]
    },

    // ========================================
    // GET (more)
    // ========================================
    {
        verb: "get", particle: "around to", phrase: "get around to", category: "daily", level: "professional",
        meaning: "To finally find time to do something you've been meaning to do.",
        sentences: [
            "I never {verb} {blank} reading that book you recommended.",
            "She finally {verb} {blank} cleaning out the closet.",
            "When will you {verb} {blank} fixing the leaky faucet?",
            "We should {verb} {blank} planning the vacation soon."
        ],
        options: ["around to", "on with", "up to", "through"]
    },

    // ========================================
    // COME (more)
    // ========================================
    {
        verb: "come", particle: "down to", phrase: "come down to", category: "daily", level: "professional",
        meaning: "To be the most important factor; the essential issue.",
        sentences: [
            "In the end, it {verb}s {blank} how much money we have.",
            "Success {verb}s {blank} hard work and persistence.",
            "The decision {verb}s {blank} whether we can afford it.",
            "It all {verb}s {blank} a matter of trust."
        ],
        options: ["down to", "up with", "along with", "out of"]
    },

    // ========================================
    // WAKE
    // ========================================
    {
        verb: "wake", particle: "up", phrase: "wake up", category: "daily", level: "elementary",
        meaning: "To stop sleeping; to become alert or aware of something.",
        sentences: [
            "I usually {verb} {blank} at 7 AM on weekdays.",
            "The loud thunder {verb}d me {blank} in the middle of the night.",
            "{verb} {blank}! You're going to be late for school!",
            "She {verb}s {blank} early every morning to go for a run."
        ],
        options: ["up", "out", "off", "on"]
    },

    // ========================================
    // LIE
    // ========================================
    {
        verb: "lie", particle: "down", phrase: "lie down", category: "daily", level: "elementary",
        meaning: "To put yourself in a flat position, usually to rest.",
        sentences: [
            "I'm going to {verb} {blank} for a bit — I have a headache.",
            "The doctor told him to {verb} {blank} and rest.",
            "She {verb} {blank} on the sofa and fell asleep immediately.",
            "If you feel dizzy, you should {verb} {blank}."
        ],
        options: ["down", "out", "back", "off"]
    },

    // ========================================
    // DRESS
    // ========================================
    {
        verb: "dress", particle: "up", phrase: "dress up", category: "daily", level: "elementary",
        meaning: "To wear formal or fancy clothes; to wear a costume.",
        sentences: [
            "You don't need to {verb} {blank} — it's a casual party.",
            "The kids love to {verb} {blank} as superheroes for Halloween.",
            "She {verb}ed {blank} in a beautiful gown for the gala.",
            "He rarely {verb}es {blank} — he prefers jeans and a T-shirt."
        ],
        options: ["up", "down", "out", "on"]
    },

    // ========================================
    // SPEED
    // ========================================
    {
        verb: "speed", particle: "up", phrase: "speed up", category: "daily", level: "elementary",
        meaning: "To go faster; to make something happen more quickly.",
        sentences: [
            "Can you {verb} {blank}? We're running late.",
            "The new software should {verb} {blank} the process significantly.",
            "The car {verb}ed {blank} as it entered the highway.",
            "We need to {verb} {blank} production to meet the deadline."
        ],
        options: ["up", "down", "off", "out"]
    },

    // ========================================
    // COME (basics)
    // ========================================
    {
        verb: "come", particle: "in", phrase: "come in", category: "daily", level: "elementary",
        meaning: "To enter a room or building.",
        sentences: [
            "Please {verb} {blank} and make yourself at home.",
            "She knocked on the door and waited to be told to {verb} {blank}.",
            "Don't just stand there — {verb} {blank}!",
            "The boss asked him to {verb} {blank} and close the door."
        ],
        options: ["in", "out", "on", "up"]
    },

    // ========================================
    // GO (basics)
    // ========================================
    {
        verb: "go", particle: "out", phrase: "go out", category: "daily", level: "elementary",
        meaning: "To leave the house for social activities; to stop burning; to date someone.",
        sentences: [
            "Do you want to {verb} {blank} for dinner tonight?",
            "The fire {verb} {blank} because we ran out of wood.",
            "She {verb}es {blank} with her friends every Friday night.",
            "They've been {verb}ing {blank} for about six months now."
        ],
        options: ["out", "off", "on", "back"]
    },

    // ========================================
    // GET (basics)
    // ========================================
    {
        verb: "get", particle: "in", phrase: "get in", category: "daily", level: "elementary",
        meaning: "To enter a car or taxi; to arrive home; to be accepted.",
        sentences: [
            "{verb} {blank} the car — we're leaving now.",
            "What time did you {verb} {blank} last night?",
            "She applied to five universities and {verb} {blank} to three.",
            "He {verb}s {blank} the taxi and told the driver the address."
        ],
        options: ["in", "on", "off", "out"]
    },
    {
        verb: "get", particle: "into", phrase: "get into", category: "daily", level: "elementary",
        meaning: "To become involved or interested in something; to enter.",
        sentences: [
            "She's really {verb}ting {blank} photography these days.",
            "How did you {verb} {blank} cooking?",
            "He {verb} {blank} trouble for skipping class.",
            "I can't {verb} {blank} these jeans anymore — they're too tight."
        ],
        options: ["into", "in", "on", "out of"]
    },
    {
        verb: "get", particle: "along with", phrase: "get along with", category: "emotion", level: "elementary",
        meaning: "To have a friendly relationship with someone.",
        sentences: [
            "She {verb}s {blank} all of her coworkers.",
            "Do you {verb} {blank} your roommate?",
            "The two brothers don't {verb} {blank} each other at all.",
            "It's important to {verb} {blank} your neighbors."
        ],
        options: ["along with", "on with", "up with", "over with"]
    },

    // ========================================
    // FALL (basics)
    // ========================================
    {
        verb: "fall", particle: "down", phrase: "fall down", category: "daily", level: "elementary",
        meaning: "To drop to the ground; to collapse.",
        sentences: [
            "The little boy {verb} {blank} and scraped his knee.",
            "Be careful on the ice or you'll {verb} {blank}.",
            "The old fence finally {verb} {blank} during the storm.",
            "She {verb} {blank} the stairs and twisted her ankle."
        ],
        options: ["down", "off", "over", "out"]
    },
    {
        verb: "fall", particle: "over", phrase: "fall over", category: "daily", level: "elementary",
        meaning: "To lose balance and drop to the ground.",
        sentences: [
            "He tripped on the rug and {verb} {blank}.",
            "The vase {verb} {blank} when the cat jumped on the table.",
            "Don't leave your shoes in the hallway — someone will {verb} {blank} them.",
            "She {verb} {blank} laughing when she heard the joke."
        ],
        options: ["over", "down", "off", "out"]
    },

    // ========================================
    // LOOK (basics)
    // ========================================
    {
        verb: "look", particle: "for", phrase: "look for", category: "daily", level: "elementary",
        meaning: "To try to find something or someone.",
        sentences: [
            "I'm {verb}ing {blank} my car keys — have you seen them?",
            "She's {verb}ing {blank} a new apartment near the university.",
            "He spent all morning {verb}ing {blank} his missing wallet.",
            "We're {verb}ing {blank} volunteers to help with the event."
        ],
        options: ["for", "at", "after", "up"]
    },
    {
        verb: "look", particle: "around", phrase: "look around", category: "daily", level: "elementary",
        meaning: "To explore a place by walking through it; to turn to see what's nearby.",
        sentences: [
            "Let's {verb} {blank} the museum before it closes.",
            "She {verb}ed {blank} the shop but didn't buy anything.",
            "We spent the afternoon {verb}ing {blank} the old town.",
            "He {verb}ed {blank} to make sure no one was following him."
        ],
        options: ["around", "for", "into", "through"]
    },

    // ========================================
    // DEAL
    // ========================================
    {
        verb: "deal", particle: "with", phrase: "deal with", category: "business", level: "college",
        meaning: "To handle or manage a problem or situation; to do business with.",
        sentences: [
            "She's very good at {verb}ing {blank} difficult customers.",
            "How do you {verb} {blank} stress at work?",
            "The manager will {verb} {blank} your complaint.",
            "I don't want to {verb} {blank} this problem right now."
        ],
        options: ["with", "in", "for", "on"]
    },

    // ========================================
    // TELL
    // ========================================
    {
        verb: "tell", particle: "off", phrase: "tell off", category: "emotion", level: "middle",
        meaning: "To speak angrily to someone because they did something wrong.",
        sentences: [
            "The teacher {verb} the student {blank} for being disruptive.",
            "She {verb} him {blank} for being late again.",
            "He got {verb} {blank} by his boss in front of everyone.",
            "My mother {verb} me {blank} for not cleaning my room."
        ],
        options: ["off", "out", "apart", "on"]
    },
    {
        verb: "tell", particle: "apart", phrase: "tell apart", category: "daily", level: "professional",
        meaning: "To see the difference between two very similar things or people.",
        sentences: [
            "The twins look so alike — I can't {verb} them {blank}.",
            "Can you {verb} {blank} real leather from fake leather?",
            "It's hard to {verb} {blank} the two brands — they taste the same.",
            "She couldn't {verb} the two paintings {blank}."
        ],
        options: ["apart", "off", "out", "away"]
    },

    // ========================================
    // HEAD
    // ========================================
    {
        verb: "head", particle: "out", phrase: "head out", category: "daily", level: "middle",
        meaning: "To leave; to start a journey.",
        sentences: [
            "We should {verb} {blank} soon if we want to avoid traffic.",
            "She {verb}ed {blank} early to catch the first train.",
            "I'm going to {verb} {blank} — see you later!",
            "They {verb}ed {blank} on their road trip at sunrise."
        ],
        options: ["out", "off", "on", "up"]
    },
    {
        verb: "head", particle: "for", phrase: "head for", category: "travel", level: "middle",
        meaning: "To move toward a particular place or direction.",
        sentences: [
            "After the meeting, she {verb}ed {blank} the exit.",
            "Let's {verb} {blank} the beach — it's a perfect day.",
            "The ship was {verb}ing {blank} the nearest port.",
            "Dark clouds are gathering — we'd better {verb} {blank} home."
        ],
        options: ["for", "out", "off", "to"]
    },

    // ========================================
    // RUN (basics)
    // ========================================
    {
        verb: "run", particle: "after", phrase: "run after", category: "daily", level: "middle",
        meaning: "To chase someone or something.",
        sentences: [
            "The dog {verb} {blank} the cat through the garden.",
            "She {verb} {blank} the bus but couldn't catch it.",
            "He spent the whole day {verb}ning {blank} his toddler.",
            "Stop {verb}ning {blank} people who don't appreciate you."
        ],
        options: ["after", "into", "away", "out"]
    },

    // ========================================
    // PUT (basics)
    // ========================================
    {
        verb: "put", particle: "back", phrase: "put back", category: "daily", level: "middle",
        meaning: "To return something to where it was before; to delay.",
        sentences: [
            "Please {verb} the books {blank} on the shelf when you're done.",
            "{verb} {blank} the milk in the fridge before it goes bad.",
            "The meeting has been {verb} {blank} to next Thursday.",
            "She {verb} {blank} the dress after deciding not to buy it."
        ],
        options: ["back", "away", "down", "off"]
    },

    // ========================================
    // GIVE (basics)
    // ========================================
    {
        verb: "give", particle: "way", phrase: "give way", category: "daily", level: "middle",
        meaning: "To collapse or break under pressure; to yield to traffic or other people.",
        sentences: [
            "The old bridge finally {verb} {blank} under the weight of the truck.",
            "Drivers must {verb} {blank} to pedestrians at the crosswalk.",
            "Her legs {verb} {blank} after running for two hours.",
            "Traditional shops are {verb}ing {blank} to online retailers."
        ],
        options: ["way", "in", "up", "out"]
    },

    // ========================================
    // TAKE (basics)
    // ========================================
    {
        verb: "take", particle: "away", phrase: "take away", category: "daily", level: "elementary",
        meaning: "To remove something from a place; to buy food to eat elsewhere.",
        sentences: [
            "The waiter came to {verb} {blank} our plates.",
            "Can I get two coffees to {verb} {blank}, please?",
            "Nothing can {verb} {blank} from her incredible achievement.",
            "They {verb} {blank} his phone as a punishment."
        ],
        options: ["away", "off", "out", "back"]
    },

    // ========================================
    // CROSS
    // ========================================
    {
        verb: "cross", particle: "out", phrase: "cross out", category: "academic", level: "elementary",
        meaning: "To draw a line through something written to show it is wrong or not needed.",
        sentences: [
            "Please {verb} {blank} the incorrect answers on the worksheet.",
            "She {verb}ed {blank} her old address and wrote the new one.",
            "If you make a mistake, just {verb} it {blank} neatly.",
            "He {verb}ed {blank} several items on the to-do list."
        ],
        options: ["out", "off", "over", "through"]
    },

    // ========================================
    // BEAT
    // ========================================
    {
        verb: "beat", particle: "up", phrase: "beat up", category: "emotion", level: "middle",
        meaning: "To physically attack someone violently; to criticize yourself harshly.",
        sentences: [
            "He was {verb}en {blank} by a gang on his way home.",
            "Don't {verb} yourself {blank} about it — everyone makes mistakes.",
            "The bully used to {verb} {blank} the younger kids at school.",
            "Stop {verb}ing yourself {blank} — you did your best."
        ],
        options: ["up", "down", "out", "off"]
    },

    // ========================================
    // FACE
    // ========================================
    {
        verb: "face", particle: "up to", phrase: "face up to", category: "emotion", level: "college",
        meaning: "To accept and deal with a difficult situation bravely.",
        sentences: [
            "She needs to {verb} {blank} the fact that she failed the exam.",
            "It's time to {verb} {blank} your responsibilities.",
            "He refused to {verb} {blank} the consequences of his actions.",
            "You have to {verb} {blank} reality sooner or later."
        ],
        options: ["up to", "off", "down", "out"]
    },

    // ========================================
    // FIT
    // ========================================
    {
        verb: "fit", particle: "in", phrase: "fit in", category: "emotion", level: "college",
        meaning: "To feel accepted as part of a group; to find time for something.",
        sentences: [
            "She found it hard to {verb} {blank} at her new school.",
            "I'll try to {verb} {blank} a dentist appointment this week.",
            "He's very quiet and doesn't always {verb} {blank} with the group.",
            "Can you {verb} {blank} a quick meeting before lunch?"
        ],
        options: ["in", "out", "on", "up"]
    },
    {
        verb: "fit", particle: "in with", phrase: "fit in with", category: "daily", level: "college",
        meaning: "To be compatible with; to match or agree with something.",
        sentences: [
            "The new sofa {verb}s {blank} the rest of the room perfectly.",
            "Her schedule doesn't {verb} {blank} mine.",
            "Do these plans {verb} {blank} what you had in mind?",
            "The design {verb}s {blank} the overall style of the building."
        ],
        options: ["in with", "out", "on with", "up with"]
    },

    // ========================================
    // FOLD
    // ========================================
    {
        verb: "fold", particle: "up", phrase: "fold up", category: "daily", level: "elementary",
        meaning: "To make something smaller by folding; for a business to fail.",
        sentences: [
            "Please {verb} {blank} the chairs and put them away.",
            "She {verb}ed {blank} the map and put it in her bag.",
            "The small restaurant {verb}ed {blank} after just six months.",
            "He {verb}ed {blank} the letter and slipped it into the envelope."
        ],
        options: ["up", "out", "down", "over"]
    },

    // ========================================
    // NOTE
    // ========================================
    {
        verb: "note", particle: "down", phrase: "note down", category: "academic", level: "elementary",
        meaning: "To write something down so you remember it.",
        sentences: [
            "Let me {verb} {blank} your phone number.",
            "She {verb}d {blank} the key points from the lecture.",
            "Make sure to {verb} {blank} any questions you have for the doctor.",
            "He quickly {verb}d {blank} the address before he forgot it."
        ],
        options: ["down", "up", "out", "off"]
    },

    // ========================================
    // HAND (more)
    // ========================================
    {
        verb: "hand", particle: "around", phrase: "hand around", category: "daily", level: "middle",
        meaning: "To distribute something to each person in a group.",
        sentences: [
            "She {verb}ed {blank} slices of cake to all the guests.",
            "Can you {verb} {blank} these handouts for me?",
            "He {verb}ed {blank} copies of the agenda before the meeting.",
            "They {verb}ed {blank} drinks to everyone at the party."
        ],
        options: ["around", "in", "out", "over"]
    },
];
