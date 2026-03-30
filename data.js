const PHRASAL_VERBS = [
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
            "She {verb} the old clock {blank} and cleaned every piece.",
            "The mechanic {verb} the machine {blank} to replace the broken part."
        ],
        options: ["apart", "away", "off", "down"]
    },
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
    {
        verb: "abide", particle: "by", phrase: "abide by", category: "academic", level: "high",
        meaning: "To accept and follow a rule, law, or decision.",
        sentences: [
            "All employees must {verb} {blank} the company's code of conduct.",
            "You have to {verb} {blank} the rules if you want to play.",
            "Both sides agreed to {verb} {blank} the court's decision.",
            "Citizens are expected to {verb} {blank} the law."
        ],
        options: ["by", "with", "to", "for"]
    },
    {
        verb: "act", particle: "on", phrase: "act on", category: "business", level: "high",
        meaning: "To take action based on advice or information.",
        sentences: [
            "She decided to {verb} {blank} her doctor's advice and quit smoking.",
            "The police {verb}ed {blank} a tip from an anonymous caller.",
            "We need to {verb} {blank} these findings immediately.",
            "He failed to {verb} {blank} the warnings and suffered the consequences."
        ],
        options: ["on", "out", "up", "for"]
    },
    {
        verb: "act", particle: "out", phrase: "act out", category: "emotion", level: "middle",
        meaning: "To express emotions through behavior, often badly; to perform a scene.",
        sentences: [
            "The child was {verb}ing {blank} because he missed his mother.",
            "The students {verb}ed {blank} a scene from the play.",
            "Teenagers often {verb} {blank} when they're struggling emotionally.",
            "She {verb}ed {blank} her frustration by slamming the door."
        ],
        options: ["out", "on", "up", "off"]
    },
    {
        verb: "act", particle: "up", phrase: "act up", category: "daily", level: "middle",
        meaning: "To misbehave; for a machine or body part to malfunction or cause problems.",
        sentences: [
            "My back has been {verb}ing {blank} again lately.",
            "The kids always {verb} {blank} when we have guests over.",
            "The printer is {verb}ing {blank} — it keeps jamming.",
            "Her allergies tend to {verb} {blank} in the spring."
        ],
        options: ["up", "out", "on", "off"]
    },
    {
        verb: "add", particle: "up", phrase: "add up", category: "academic", level: "middle",
        meaning: "To calculate a total; to make logical sense.",
        sentences: [
            "Let me {verb} {blank} the numbers and see what we owe.",
            "His story just doesn't {verb} {blank} — something's not right.",
            "When you {verb} {blank} all the costs, it's actually quite expensive.",
            "The evidence doesn't {verb} {blank} to a convincing case."
        ],
        options: ["up", "on", "in", "out"]
    },
    {
        verb: "advise", particle: "against", phrase: "advise against", category: "academic", level: "college",
        meaning: "To recommend that someone should not do something.",
        sentences: [
            "The lawyer {verb}d {blank} signing the contract without reading it.",
            "Doctors {verb} {blank} eating too much sugar.",
            "I would strongly {verb} {blank} investing all your money in one stock.",
            "She {verb}d him {blank} taking the shortcut through the mountains."
        ],
        options: ["against", "for", "on", "about"]
    },
    {
        verb: "allow", particle: "for", phrase: "allow for", category: "business", level: "college",
        meaning: "To take something into consideration when making plans.",
        sentences: [
            "You should {verb} {blank} delays when planning your journey.",
            "The budget {verb}s {blank} unexpected expenses.",
            "We didn't {verb} {blank} the possibility of bad weather.",
            "Make sure to {verb} {blank} extra time at airport security."
        ],
        options: ["for", "in", "on", "with"]
    },
    {
        verb: "answer", particle: "back", phrase: "answer back", category: "emotion", level: "middle",
        meaning: "To reply rudely to someone in authority.",
        sentences: [
            "Don't {verb} {blank} when your teacher is speaking to you.",
            "She got in trouble for {verb}ing {blank} to the principal.",
            "He was always {verb}ing {blank} and being disrespectful.",
            "Children who {verb} {blank} are often just testing boundaries."
        ],
        options: ["back", "up", "out", "for"]
    },
    {
        verb: "answer", particle: "for", phrase: "answer for", category: "academic", level: "college",
        meaning: "To be held responsible for something; to speak on behalf of someone.",
        sentences: [
            "You'll have to {verb} {blank} your actions sooner or later.",
            "I can {verb} {blank} her honesty — she would never lie.",
            "The manager must {verb} {blank} any losses in his department.",
            "He has a lot to {verb} {blank} after what he did."
        ],
        options: ["for", "back", "to", "on"]
    },
    {
        verb: "apply", particle: "for", phrase: "apply for", category: "business", level: "middle",
        meaning: "To make a formal request for a job, place, or opportunity.",
        sentences: [
            "She {verb}ied {blank} three different jobs last week.",
            "Have you {verb}ied {blank} the scholarship yet?",
            "He {verb}ied {blank} a visa to study in Canada.",
            "Over 200 people {verb}ied {blank} the position."
        ],
        options: ["for", "to", "on", "in"]
    },
    {
        verb: "back", particle: "away", phrase: "back away", category: "daily", level: "middle",
        meaning: "To move backwards slowly, usually from something frightening.",
        sentences: [
            "She {verb}ed {blank} when she saw the snake on the path.",
            "The dog was growling, so I {verb}ed {blank} slowly.",
            "He {verb}ed {blank} from the argument and let it go.",
            "The crowd {verb}ed {blank} as the fire spread."
        ],
        options: ["away", "down", "up", "off"]
    },
    {
        verb: "bank", particle: "on", phrase: "bank on", category: "business", level: "college",
        meaning: "To rely on or count on something happening.",
        sentences: [
            "Don't {verb} {blank} the weather being good for the picnic.",
            "We're {verb}ing {blank} a strong fourth quarter to hit our targets.",
            "You can {verb} {blank} me — I'll be there.",
            "She {verb}ed {blank} getting the promotion, but it went to someone else."
        ],
        options: ["on", "in", "up", "for"]
    },
    {
        verb: "bear", particle: "with", phrase: "bear with", category: "daily", level: "high",
        meaning: "To be patient with someone or something.",
        sentences: [
            "Please {verb} {blank} me while I look up your account.",
            "{verb} {blank} us — we're experiencing technical difficulties.",
            "If you {verb} {blank} the long introduction, the movie gets really good.",
            "She asked the audience to {verb} {blank} her as she set up."
        ],
        options: ["with", "on", "up", "out"]
    },
    {
        verb: "black", particle: "out", phrase: "black out", category: "daily", level: "high",
        meaning: "To faint or lose consciousness; a complete loss of electrical power.",
        sentences: [
            "He {verb}ed {blank} from the heat and woke up on the ground.",
            "The whole city {verb}ed {blank} during the storm.",
            "She {verb}ed {blank} for a few seconds after standing up too quickly.",
            "The stadium {verb}ed {blank} right before the concert started."
        ],
        options: ["out", "off", "up", "down"]
    },
    {
        verb: "block", particle: "off", phrase: "block off", category: "daily", level: "middle",
        meaning: "To close or separate an area using a barrier.",
        sentences: [
            "Police {verb}ed {blank} the street after the accident.",
            "We need to {verb} {blank} this section for the construction crew.",
            "She {verb}ed {blank} an hour in her calendar for exercise.",
            "The fallen tree {verb}ed {blank} the entire road."
        ],
        options: ["off", "out", "up", "in"]
    },
    {
        verb: "bone", particle: "up on", phrase: "bone up on", category: "academic", level: "college",
        meaning: "To study intensively for a short period.",
        sentences: [
            "I need to {verb} {blank} my Spanish before the trip to Mexico.",
            "She spent the weekend {verb}ing {blank} contract law for the exam.",
            "You should {verb} {blank} the company's history before the interview.",
            "He {verb}d {blank} the latest regulations before the audit."
        ],
        options: ["up on", "up", "down on", "into"]
    },
    {
        verb: "boot", particle: "up", phrase: "boot up", category: "daily", level: "middle",
        meaning: "To start a computer by loading the operating system.",
        sentences: [
            "It takes about a minute for my laptop to {verb} {blank}.",
            "Can you {verb} {blank} the computer so I can check my email?",
            "The system failed to {verb} {blank} after the update.",
            "She {verb}ed {blank} her tablet to show the presentation."
        ],
        options: ["up", "on", "in", "off"]
    },
    {
        verb: "bottom", particle: "out", phrase: "bottom out", category: "business", level: "college",
        meaning: "To reach the lowest point before starting to improve.",
        sentences: [
            "Economists believe the market has finally {verb}ed {blank}.",
            "House prices seem to have {verb}ed {blank} at last.",
            "The company's share price {verb}ed {blank} in March before recovering.",
            "Hopefully the recession will {verb} {blank} soon."
        ],
        options: ["out", "up", "off", "down"]
    },
    {
        verb: "break", particle: "away", phrase: "break away", category: "daily", level: "high",
        meaning: "To escape or separate from a group or situation.",
        sentences: [
            "She {verb} {blank} from the crowd and ran to the stage.",
            "He decided to {verb} {blank} from the family business.",
            "The prisoner {verb} {blank} from the guards during transport.",
            "It's hard to {verb} {blank} from old habits."
        ],
        options: ["away", "off", "out", "through"]
    },
    {
        verb: "break", particle: "even", phrase: "break even", category: "business", level: "college",
        meaning: "To neither make a profit nor a loss.",
        sentences: [
            "The company expects to {verb} {blank} by the end of the year.",
            "We need to sell 500 units just to {verb} {blank}.",
            "After all expenses, we barely {verb} {blank}.",
            "It took the startup three years to {verb} {blank}."
        ],
        options: ["even", "through", "out", "up"]
    },
    {
        verb: "bring", particle: "along", phrase: "bring along", category: "travel", level: "elementary",
        meaning: "To take someone or something with you when you go somewhere.",
        sentences: [
            "Don't forget to {verb} {blank} your passport.",
            "Can I {verb} {blank} a friend to the party?",
            "She always {verb}s {blank} a book when she travels.",
            "He {verb} {blank} some snacks for the road trip."
        ],
        options: ["along", "about", "up", "on"]
    },
    {
        verb: "bring", particle: "on", phrase: "bring on", category: "daily", level: "high",
        meaning: "To cause something to happen or appear.",
        sentences: [
            "The stress {verb} {blank} a terrible headache.",
            "What {verb}s {blank} these sudden changes in mood?",
            "The cold weather {verb}s {blank} flu season every year.",
            "Eating too fast can {verb} {blank} stomach problems."
        ],
        options: ["on", "about", "up", "out"]
    },
    {
        verb: "bring", particle: "round", phrase: "bring round", category: "emotion", level: "college",
        meaning: "To persuade someone to change their opinion; to make someone regain consciousness.",
        sentences: [
            "It took a while, but I finally {verb} her {blank} to my point of view.",
            "The paramedics managed to {verb} him {blank} after he fainted.",
            "She's against it now, but we'll {verb} her {blank} eventually.",
            "A splash of cold water {verb} her {blank} quickly."
        ],
        options: ["round", "about", "over", "back"]
    },
    {
        verb: "bring", particle: "off", phrase: "bring off", category: "business", level: "college",
        meaning: "To successfully accomplish something difficult.",
        sentences: [
            "Against all odds, they managed to {verb} {blank} the deal.",
            "Nobody thought she could {verb} it {blank}, but she did.",
            "The team {verb} {blank} a stunning victory in the final minute.",
            "It was a risky plan, but he {verb} it {blank} perfectly."
        ],
        options: ["off", "on", "about", "out"]
    },
    {
        verb: "buckle", particle: "down", phrase: "buckle down", category: "academic", level: "college",
        meaning: "To start working hard and seriously on something.",
        sentences: [
            "It's time to {verb} {blank} and study for the final exams.",
            "If we {verb} {blank}, we can finish the project by Friday.",
            "She {verb}d {blank} and wrote the entire report in one weekend.",
            "You need to {verb} {blank} if you want to pass this course."
        ],
        options: ["down", "up", "in", "on"]
    },
    {
        verb: "bulk", particle: "up", phrase: "bulk up", category: "daily", level: "high",
        meaning: "To gain muscle mass through exercise and diet.",
        sentences: [
            "He's been trying to {verb} {blank} by lifting weights every day.",
            "She {verb}ed {blank} for the role by training for three months.",
            "Athletes often {verb} {blank} during the off-season.",
            "He wants to {verb} {blank} before football tryouts."
        ],
        options: ["up", "out", "on", "in"]
    },
    {
        verb: "bump", particle: "into", phrase: "bump into", category: "daily", level: "middle",
        meaning: "To meet someone unexpectedly by chance.",
        sentences: [
            "I {verb}ed {blank} my old teacher at the supermarket.",
            "You'll never guess who I {verb}ed {blank} at the airport!",
            "She keeps {verb}ing {blank} her ex-boyfriend around town.",
            "We {verb}ed {blank} some friends while on vacation in Italy."
        ],
        options: ["into", "on", "across", "upon"]
    },
    {
        verb: "butt", particle: "in", phrase: "butt in", category: "emotion", level: "middle",
        meaning: "To rudely interrupt a conversation or activity.",
        sentences: [
            "Sorry to {verb} {blank}, but I have something important to say.",
            "She always {verb}s {blank} when other people are talking.",
            "He kept {verb}ing {blank} with his unwanted opinions.",
            "Please don't {verb} {blank} — let her finish speaking."
        ],
        options: ["in", "out", "on", "up"]
    },
    {
        verb: "call", particle: "in", phrase: "call in", category: "business", level: "high",
        meaning: "To request someone's help or presence; to phone a workplace.",
        sentences: [
            "The company {verb}ed {blank} an expert to solve the problem.",
            "He {verb}ed {blank} sick this morning.",
            "They had to {verb} {blank} the police to handle the situation.",
            "She {verb}ed {blank} to say she'd be late for the meeting."
        ],
        options: ["in", "on", "up", "for"]
    },
    {
        verb: "cash", particle: "in on", phrase: "cash in on", category: "business", level: "college",
        meaning: "To take advantage of a situation to make money or gain benefit.",
        sentences: [
            "The company {verb}ed {blank} the trend by launching a new product.",
            "He {verb}ed {blank} his fame by writing a bestselling memoir.",
            "Retailers always {verb} {blank} the holiday season.",
            "She {verb}ed {blank} her language skills to get a better job."
        ],
        options: ["in on", "out on", "up on", "in"]
    },
    {
        verb: "cave", particle: "in", phrase: "cave in", category: "emotion", level: "college",
        meaning: "To collapse physically; to yield or give in to pressure.",
        sentences: [
            "The roof of the old mine {verb}d {blank} after the heavy rain.",
            "He finally {verb}d {blank} and let the kids have ice cream.",
            "Under intense questioning, the suspect {verb}d {blank} and confessed.",
            "Don't {verb} {blank} to their demands — stay firm."
        ],
        options: ["in", "on", "out", "down"]
    },
    {
        verb: "check", particle: "over", phrase: "check over", category: "business", level: "middle",
        meaning: "To examine or review something carefully.",
        sentences: [
            "Can you {verb} {blank} this report for any errors?",
            "The mechanic {verb}ed {blank} the car and found nothing wrong.",
            "She {verb}ed {blank} the contract before signing it.",
            "Always {verb} {blank} your work before submitting it."
        ],
        options: ["over", "out", "up", "in"]
    },
    {
        verb: "cheer", particle: "on", phrase: "cheer on", category: "emotion", level: "middle",
        meaning: "To shout encouragement and support for someone.",
        sentences: [
            "The crowd {verb}ed the runners {blank} as they crossed the finish line.",
            "We went to the stadium to {verb} {blank} our team.",
            "His parents were there to {verb} him {blank} at the race.",
            "She {verb}ed her daughter {blank} at the school play."
        ],
        options: ["on", "up", "for", "out"]
    },
    {
        verb: "clam", particle: "up", phrase: "clam up", category: "emotion", level: "college",
        meaning: "To suddenly become silent or refuse to talk.",
        sentences: [
            "He {verb}med {blank} when the police started asking questions.",
            "She tends to {verb} {blank} whenever the topic of money comes up.",
            "The witness {verb}med {blank} and refused to say anything more.",
            "Don't {verb} {blank} on me — tell me what happened!"
        ],
        options: ["up", "down", "out", "in"]
    },
    {
        verb: "clean", particle: "out", phrase: "clean out", category: "daily", level: "middle",
        meaning: "To empty and clean a space completely; to use up all of someone's money.",
        sentences: [
            "We spent the weekend {verb}ing {blank} the garage.",
            "The burglars {verb}ed {blank} the entire house.",
            "I need to {verb} {blank} my closet and donate old clothes.",
            "The casino {verb}ed him {blank} in just two hours."
        ],
        options: ["out", "up", "off", "through"]
    },
    {
        verb: "come", particle: "on", phrase: "come on", category: "daily", level: "elementary",
        meaning: "To encourage or urge someone; to make progress; to start working.",
        sentences: [
            "{verb} {blank}! We're going to be late!",
            "The lights suddenly {verb} {blank} after the power outage.",
            "Her English has really {verb} {blank} since she moved here.",
            "Oh {verb} {blank}, you can't be serious!"
        ],
        options: ["on", "in", "up", "along"]
    },
    {
        verb: "come", particle: "to", phrase: "come to", category: "daily", level: "high",
        meaning: "To regain consciousness; to amount to a total.",
        sentences: [
            "She {verb} {blank} a few minutes after fainting.",
            "The bill {verb}s {blank} over two hundred dollars.",
            "When he {verb} {blank}, he couldn't remember what had happened.",
            "The total {verb}s {blank} about fifty thousand a year."
        ],
        options: ["to", "around", "back", "through"]
    },
    {
        verb: "come", particle: "forward", phrase: "come forward", category: "daily", level: "high",
        meaning: "To present yourself or volunteer information.",
        sentences: [
            "Police are asking witnesses to {verb} {blank} with any information.",
            "Several volunteers {verb} {blank} to help with the cleanup.",
            "Nobody {verb} {blank} to claim the lost bag.",
            "She {verb} {blank} and admitted she had made the mistake."
        ],
        options: ["forward", "out", "along", "up"]
    },
    {
        verb: "come", particle: "by", phrase: "come by", category: "daily", level: "high",
        meaning: "To obtain or acquire something; to visit briefly.",
        sentences: [
            "Good jobs are hard to {verb} {blank} in this economy.",
            "How did you {verb} {blank} that beautiful painting?",
            "She {verb}s {blank} every Sunday for coffee.",
            "Genuine antiques are difficult to {verb} {blank} these days."
        ],
        options: ["by", "across", "upon", "along"]
    },
    {
        verb: "come", particle: "down", phrase: "come down", category: "business", level: "middle",
        meaning: "To decrease in price or level.",
        sentences: [
            "Gas prices have finally {verb} {blank} this month.",
            "We're waiting for interest rates to {verb} {blank}.",
            "The price of the house has {verb} {blank} significantly.",
            "Temperatures are expected to {verb} {blank} this weekend."
        ],
        options: ["down", "off", "out", "up"]
    },
    {
        verb: "come", particle: "down on", phrase: "come down on", category: "emotion", level: "college",
        meaning: "To criticize or punish someone severely.",
        sentences: [
            "The boss {verb} {blank} hard on anyone who was late.",
            "The government is {verb}ing {blank} tax evaders.",
            "Teachers should not {verb} {blank} students too harshly.",
            "She {verb} {blank} him like a ton of bricks for lying."
        ],
        options: ["down on", "up on", "out on", "in on"]
    },
    {
        verb: "come", particle: "up against", phrase: "come up against", category: "business", level: "college",
        meaning: "To be faced with a difficult problem or strong opponent.",
        sentences: [
            "We {verb} {blank} some unexpected legal obstacles.",
            "Small businesses often {verb} {blank} fierce competition.",
            "She {verb} {blank} resistance when she proposed the changes.",
            "They {verb} {blank} a much stronger team in the semifinals."
        ],
        options: ["up against", "up with", "across", "along with"]
    },
    {
        verb: "come", particle: "round", phrase: "come round", category: "daily", level: "high",
        meaning: "To visit informally; to regain consciousness; to change your opinion.",
        sentences: [
            "Why don't you {verb} {blank} for dinner on Saturday?",
            "He {verb} {blank} after being unconscious for a few minutes.",
            "She'll {verb} {blank} to our way of thinking eventually.",
            "The doctor says he should {verb} {blank} in a few hours."
        ],
        options: ["round", "by", "over", "along"]
    },
    {
        verb: "come", particle: "up to", phrase: "come up to", category: "academic", level: "college",
        meaning: "To reach a particular standard or expectation.",
        sentences: [
            "The hotel didn't {verb} {blank} our expectations.",
            "His work doesn't {verb} {blank} the required standard.",
            "The sequel doesn't {verb} {blank} the original movie.",
            "She hopes the results {verb} {blank} what was promised."
        ],
        options: ["up to", "down to", "along with", "up with"]
    },
    {
        verb: "come", particle: "in for", phrase: "come in for", category: "emotion", level: "college",
        meaning: "To receive criticism, blame, or praise.",
        sentences: [
            "The government has {verb} {blank} heavy criticism over the policy.",
            "The new design {verb} {blank} a lot of praise from reviewers.",
            "He {verb} {blank} some harsh words from his colleagues.",
            "The decision {verb} {blank} widespread condemnation."
        ],
        options: ["in for", "up for", "out for", "in on"]
    },
    {
        verb: "come", particle: "after", phrase: "come after", category: "daily", level: "middle",
        meaning: "To chase or pursue someone.",
        sentences: [
            "The dog {verb} {blank} me when I walked past the gate.",
            "If you steal from them, they'll {verb} {blank} you.",
            "The debt collectors are {verb}ing {blank} him for unpaid bills.",
            "She feared the wolves would {verb} {blank} them."
        ],
        options: ["after", "for", "at", "on"]
    },
    {
        verb: "come", particle: "upon", phrase: "come upon", category: "daily", level: "college",
        meaning: "To find or discover something by chance.",
        sentences: [
            "While hiking, we {verb} {blank} a beautiful hidden waterfall.",
            "She {verb} {blank} an old diary while cleaning the attic.",
            "The researchers {verb} {blank} an unexpected finding.",
            "He {verb} {blank} the solution quite by accident."
        ],
        options: ["upon", "across", "by", "into"]
    },
    {
        verb: "conjure", particle: "up", phrase: "conjure up", category: "academic", level: "college",
        meaning: "To create or produce something seemingly from nothing; to evoke a memory or image.",
        sentences: [
            "She can {verb} {blank} a delicious meal from almost nothing.",
            "The smell of cinnamon {verb}s {blank} memories of Christmas.",
            "He {verb}d {blank} an excuse on the spot.",
            "The word 'beach' {verb}s {blank} images of sunny days."
        ],
        options: ["up", "out", "on", "forth"]
    },
    {
        verb: "crop", particle: "up", phrase: "crop up", category: "daily", level: "college",
        meaning: "To appear or occur unexpectedly.",
        sentences: [
            "Problems keep {verb}ping {blank} with the new software.",
            "Something urgent has {verb}ped {blank} at work — I can't make dinner.",
            "His name {verb}s {blank} frequently in conversation.",
            "New issues {verb} {blank} every time we think we're done."
        ],
        options: ["up", "out", "on", "in"]
    },
    {
        verb: "dawn", particle: "on", phrase: "dawn on", category: "emotion", level: "college",
        meaning: "To suddenly become clear or understood.",
        sentences: [
            "It suddenly {verb}ed {blank} me that I had left the oven on.",
            "The truth finally {verb}ed {blank} her after reading the letter.",
            "It took a while, but it eventually {verb}ed {blank} him.",
            "The full impact of the decision is only now {verb}ing {blank} us."
        ],
        options: ["on", "upon", "to", "at"]
    },
    {
        verb: "dip", particle: "into", phrase: "dip into", category: "business", level: "college",
        meaning: "To use part of a supply of something; to read or look at briefly.",
        sentences: [
            "We had to {verb} {blank} our savings to pay for the repairs.",
            "She likes to {verb} {blank} different books rather than finish one.",
            "The company {verb}ped {blank} its reserves to cover the shortfall.",
            "I've only {verb}ped {blank} the report — I haven't read it thoroughly."
        ],
        options: ["into", "in", "through", "out"]
    },
    {
        verb: "drag", particle: "on", phrase: "drag on", category: "emotion", level: "high",
        meaning: "To continue for longer than expected or desired.",
        sentences: [
            "The meeting {verb}ged {blank} for three hours.",
            "The legal case has been {verb}ging {blank} for years.",
            "Winter seems to {verb} {blank} forever in this country.",
            "The negotiations {verb}ged {blank} with no resolution in sight."
        ],
        options: ["on", "out", "off", "along"]
    },
    {
        verb: "draw", particle: "back", phrase: "draw back", category: "emotion", level: "high",
        meaning: "To move away from something; to be reluctant to do something.",
        sentences: [
            "She {verb} {blank} in horror when she saw the accident.",
            "He {verb}s {blank} from any kind of confrontation.",
            "The cat {verb} {blank} from the unfamiliar noise.",
            "Many investors are {verb}ing {blank} from risky markets."
        ],
        options: ["back", "away", "out", "off"]
    },
    {
        verb: "drift", particle: "apart", phrase: "drift apart", category: "emotion", level: "high",
        meaning: "To gradually become less close in a relationship.",
        sentences: [
            "After college, they slowly {verb}ed {blank}.",
            "The couple {verb}ed {blank} when his job took him overseas.",
            "Old friends sometimes {verb} {blank} as life takes different paths.",
            "Without regular contact, even close siblings can {verb} {blank}."
        ],
        options: ["apart", "away", "off", "out"]
    },
    {
        verb: "dwell", particle: "on", phrase: "dwell on", category: "emotion", level: "college",
        meaning: "To think or talk about something for too long, especially something negative.",
        sentences: [
            "Try not to {verb} {blank} the past — focus on the future.",
            "She tends to {verb} {blank} her mistakes instead of learning from them.",
            "There's no point {verb}ing {blank} what might have been.",
            "He {verb}s {blank} every little criticism he receives."
        ],
        options: ["on", "upon", "over", "about"]
    },
    {
        verb: "ease", particle: "off", phrase: "ease off", category: "daily", level: "college",
        meaning: "To reduce in severity, pressure, or intensity.",
        sentences: [
            "The rain should {verb} {blank} by this afternoon.",
            "The doctor told him to {verb} {blank} the exercise for a while.",
            "Work pressure tends to {verb} {blank} during the summer.",
            "The pain will {verb} {blank} once the medication kicks in."
        ],
        options: ["off", "up", "down", "out"]
    },
    {
        verb: "edge", particle: "out", phrase: "edge out", category: "business", level: "college",
        meaning: "To narrowly defeat someone in a competition.",
        sentences: [
            "She {verb}d {blank} the other candidate by just two votes.",
            "The company {verb}d {blank} its rival to win the contract.",
            "He {verb}d {blank} the defending champion in a close race.",
            "Smaller firms are being {verb}d {blank} by larger corporations."
        ],
        options: ["out", "off", "over", "past"]
    },
    {
        verb: "egg", particle: "on", phrase: "egg on", category: "emotion", level: "college",
        meaning: "To encourage someone to do something, usually something unwise.",
        sentences: [
            "His friends {verb}ed him {blank} to jump off the bridge into the river.",
            "Don't {verb} her {blank} — she'll do something she regrets.",
            "The crowd {verb}ed the fighters {blank}.",
            "He wouldn't have done it if his mates hadn't {verb}ed him {blank}."
        ],
        options: ["on", "up", "off", "into"]
    },
    {
        verb: "even", particle: "out", phrase: "even out", category: "business", level: "high",
        meaning: "To become equal or level; to eliminate differences.",
        sentences: [
            "The workload should {verb} {blank} once the new staff start.",
            "Prices tend to {verb} {blank} over time.",
            "Use a spatula to {verb} {blank} the surface of the cake.",
            "Things usually {verb} {blank} in the end."
        ],
        options: ["out", "up", "off", "down"]
    },
    {
        verb: "fall", particle: "back on", phrase: "fall back on", category: "daily", level: "college",
        meaning: "To use something as a backup or alternative when other options fail.",
        sentences: [
            "If the plan fails, we can always {verb} {blank} the original approach.",
            "She has her teaching degree to {verb} {blank} if acting doesn't work.",
            "Having savings to {verb} {blank} gives you peace of mind.",
            "When all else fails, I {verb} {blank} my mother's advice."
        ],
        options: ["back on", "down on", "out on", "behind"]
    },
    {
        verb: "fall", particle: "in with", phrase: "fall in with", category: "daily", level: "college",
        meaning: "To agree with someone's plans; to become associated with a group.",
        sentences: [
            "She {verb} {blank} the wrong crowd at school.",
            "He was happy to {verb} {blank} whatever the group decided.",
            "The committee {verb} {blank} the director's proposal.",
            "He {verb} {blank} some travelers and joined their journey."
        ],
        options: ["in with", "out with", "along with", "in"]
    },
    {
        verb: "fend", particle: "off", phrase: "fend off", category: "daily", level: "college",
        meaning: "To defend against or resist an attack or unwanted attention.",
        sentences: [
            "She had to {verb} {blank} dozens of reporters at the airport.",
            "The company is trying to {verb} {blank} a hostile takeover.",
            "He {verb}ed {blank} the attacker with a stick.",
            "They {verb}ed {blank} competition from much larger companies."
        ],
        options: ["off", "away", "back", "out"]
    },
    {
        verb: "fix", particle: "up", phrase: "fix up", category: "daily", level: "middle",
        meaning: "To repair or improve something; to arrange a meeting or date.",
        sentences: [
            "They spent the summer {verb}ing {blank} the old farmhouse.",
            "Can you {verb} me {blank} with a good dentist?",
            "He {verb}ed {blank} the broken fence over the weekend.",
            "She {verb}ed {blank} a meeting between the two parties."
        ],
        options: ["up", "on", "out", "in"]
    },
    {
        verb: "fizzle", particle: "out", phrase: "fizzle out", category: "daily", level: "college",
        meaning: "To gradually lose strength or enthusiasm and end weakly.",
        sentences: [
            "The protest {verb}d {blank} after a few days.",
            "Their romance {verb}d {blank} once the excitement wore off.",
            "The campaign started strong but {verb}d {blank} before election day.",
            "The fireworks {verb}d {blank} and the crowd went home."
        ],
        options: ["out", "away", "off", "down"]
    },
    {
        verb: "flare", particle: "up", phrase: "flare up", category: "emotion", level: "college",
        meaning: "To suddenly become worse or more intense; to suddenly become angry.",
        sentences: [
            "Violence {verb}d {blank} again in the region after months of peace.",
            "His back injury {verb}s {blank} whenever the weather changes.",
            "She {verb}d {blank} when he accused her of being lazy.",
            "Tensions between the two countries have {verb}d {blank} recently."
        ],
        options: ["up", "out", "off", "on"]
    },
    {
        verb: "focus", particle: "on", phrase: "focus on", category: "academic", level: "middle",
        meaning: "To concentrate attention or effort on something.",
        sentences: [
            "Let's {verb} {blank} finding a solution instead of arguing.",
            "She needs to {verb} {blank} her studies this semester.",
            "The company has decided to {verb} {blank} its core business.",
            "Try to {verb} {blank} the positive aspects of the situation."
        ],
        options: ["on", "in", "at", "to"]
    },
    {
        verb: "follow", particle: "through", phrase: "follow through", category: "business", level: "college",
        meaning: "To complete something that was started; to carry to conclusion.",
        sentences: [
            "He has great ideas but never {verb}s {blank} on any of them.",
            "It's important to {verb} {blank} on your commitments.",
            "The government promised reforms but failed to {verb} {blank}.",
            "She always {verb}s {blank} on what she says she'll do."
        ],
        options: ["through", "up", "on", "out"]
    },
    {
        verb: "follow", particle: "up", phrase: "follow up", category: "business", level: "high",
        meaning: "To take further action after an initial effort; to check on progress.",
        sentences: [
            "I'll {verb} {blank} with an email to confirm the details.",
            "She {verb}ed {blank} on the job application a week later.",
            "The doctor asked him to {verb} {blank} in two weeks.",
            "Don't forget to {verb} {blank} with the client after the meeting."
        ],
        options: ["up", "through", "on", "out"]
    },
    {
        verb: "fork", particle: "out", phrase: "fork out", category: "business", level: "college",
        meaning: "To reluctantly spend money, usually a large amount.",
        sentences: [
            "We had to {verb} {blank} a fortune for the car repairs.",
            "I don't want to {verb} {blank} fifty dollars for a taxi.",
            "She {verb}ed {blank} thousands on the wedding reception.",
            "Why should I {verb} {blank} money for something I'll never use?"
        ],
        options: ["out", "over", "up", "off"]
    },
    {
        verb: "get", particle: "across", phrase: "get across", category: "business", level: "high",
        meaning: "To communicate an idea or message successfully.",
        sentences: [
            "She struggled to {verb} her point {blank} to the audience.",
            "How can we {verb} this message {blank} more effectively?",
            "He used simple language to {verb} the idea {blank}.",
            "The ad campaign successfully {verb} the brand's message {blank}."
        ],
        options: ["across", "over", "through", "along"]
    },
    {
        verb: "get", particle: "at", phrase: "get at", category: "emotion", level: "college",
        meaning: "To imply or suggest something indirectly; to reach something.",
        sentences: [
            "What are you {verb}ting {blank}? Just say it directly.",
            "I think I see what you're {verb}ting {blank}.",
            "The cat was trying to {verb} {blank} the fish on the counter.",
            "She couldn't {verb} {blank} the truth because he kept changing the subject."
        ],
        options: ["at", "to", "on", "into"]
    },
    {
        verb: "get", particle: "away with", phrase: "get away with", category: "daily", level: "high",
        meaning: "To do something wrong without being punished or caught.",
        sentences: [
            "He cheated on the test and {verb} {blank} it.",
            "You won't {verb} {blank} this — someone will find out.",
            "She always {verb}s {blank} coming to class late.",
            "How does he {verb} {blank} wearing jeans to the office?"
        ],
        options: ["away with", "along with", "on with", "through with"]
    },
    {
        verb: "get", particle: "back at", phrase: "get back at", category: "emotion", level: "high",
        meaning: "To take revenge on someone.",
        sentences: [
            "She's trying to {verb} {blank} him for what he said.",
            "He {verb} {blank} his rival by outperforming him at work.",
            "Don't waste your energy trying to {verb} {blank} people.",
            "She {verb} {blank} her sister by telling their parents the truth."
        ],
        options: ["back at", "back on", "back to", "at"]
    },
    {
        verb: "get", particle: "down to", phrase: "get down to", category: "business", level: "college",
        meaning: "To begin to seriously focus on something.",
        sentences: [
            "Let's {verb} {blank} business — we have a lot to discuss.",
            "It's time to {verb} {blank} studying for the exam.",
            "After the small talk, they {verb} {blank} the real issues.",
            "We need to {verb} {blank} work if we want to finish today."
        ],
        options: ["down to", "on with", "into", "through"]
    },
    {
        verb: "get", particle: "on with", phrase: "get on with", category: "daily", level: "high",
        meaning: "To continue doing something; to make progress.",
        sentences: [
            "Stop complaining and {verb} {blank} your work.",
            "Let's {verb} {blank} the meeting — we're running behind.",
            "She just wants to {verb} {blank} her life after the divorce.",
            "He told them to {verb} {blank} it while he was away."
        ],
        options: ["on with", "along with", "up with", "through with"]
    },
    {
        verb: "get", particle: "out of", phrase: "get out of", category: "daily", level: "high",
        meaning: "To avoid doing something you should do; to leave.",
        sentences: [
            "He always tries to {verb} {blank} doing the dishes.",
            "There's no way to {verb} {blank} this meeting — you have to attend.",
            "She managed to {verb} {blank} jury duty.",
            "I wish I could {verb} {blank} this dinner party."
        ],
        options: ["out of", "away from", "off", "by with"]
    },
    {
        verb: "get", particle: "to", phrase: "get to", category: "travel", level: "middle",
        meaning: "To arrive at a place; to annoy or emotionally affect someone.",
        sentences: [
            "What time did you {verb} {blank} the airport?",
            "Don't let his comments {verb} {blank} you.",
            "How do I {verb} {blank} the train station from here?",
            "The constant noise is really {verb}ting {blank} me."
        ],
        options: ["to", "at", "in", "on"]
    },
    {
        verb: "gloss", particle: "over", phrase: "gloss over", category: "business", level: "professional",
        meaning: "To treat something briefly to avoid discussing problems.",
        sentences: [
            "The report {verb}es {blank} several important safety concerns.",
            "Don't just {verb} {blank} the mistakes — address them directly.",
            "He tends to {verb} {blank} the negative aspects of his proposals.",
            "The manager {verb}ed {blank} the budget problems during the meeting."
        ],
        options: ["over", "through", "past", "by"]
    },
    {
        verb: "go", particle: "after", phrase: "go after", category: "daily", level: "middle",
        meaning: "To chase or pursue someone or something; to try to achieve.",
        sentences: [
            "The police {verb} {blank} the suspect on foot.",
            "She decided to {verb} {blank} her dream of becoming a doctor.",
            "If you want the job, {verb} {blank} it!",
            "The company is {verb}ing {blank} younger customers."
        ],
        options: ["after", "for", "at", "on"]
    },
    {
        verb: "go", particle: "against", phrase: "go against", category: "academic", level: "high",
        meaning: "To act contrary to rules, principles, or wishes.",
        sentences: [
            "His decision {verb}es {blank} everything we agreed on.",
            "It {verb}es {blank} my principles to lie.",
            "She {verb} {blank} her parents' wishes and dropped out of college.",
            "The ruling {verb}es {blank} established legal precedent."
        ],
        options: ["against", "with", "for", "on"]
    },
    {
        verb: "go", particle: "around", phrase: "go around", category: "daily", level: "middle",
        meaning: "To be enough for everyone; to circulate.",
        sentences: [
            "There aren't enough chairs to {verb} {blank}.",
            "A rumor is {verb}ing {blank} that the company will be sold.",
            "Is there enough pizza to {verb} {blank}?",
            "A nasty flu bug is {verb}ing {blank} the office."
        ],
        options: ["around", "about", "through", "over"]
    },
    {
        verb: "go", particle: "away", phrase: "go away", category: "travel", level: "elementary",
        meaning: "To leave a place; to travel somewhere for a holiday.",
        sentences: [
            "{verb} {blank}! I don't want to talk to you.",
            "We're {verb}ing {blank} for the weekend — maybe to the coast.",
            "The pain won't {verb} {blank} no matter what I do.",
            "She {verb} {blank} on a business trip for a week."
        ],
        options: ["away", "off", "out", "back"]
    },
    {
        verb: "go", particle: "by", phrase: "go by", category: "daily", level: "middle",
        meaning: "To pass (of time); to be guided by something.",
        sentences: [
            "Time {verb}es {blank} so quickly when you're having fun.",
            "We should {verb} {blank} what the manual says.",
            "As the years {verb} {blank}, you learn to appreciate the little things.",
            "Don't {verb} {blank} appearances — they can be deceiving."
        ],
        options: ["by", "past", "on", "along"]
    },
    {
        verb: "go", particle: "up", phrase: "go up", category: "business", level: "middle",
        meaning: "To increase in price, level, or amount.",
        sentences: [
            "Gas prices have {verb}ne {blank} again this month.",
            "The cost of living keeps {verb}ing {blank} every year.",
            "Temperatures are expected to {verb} {blank} over the weekend.",
            "The number of applicants has {verb}ne {blank} dramatically."
        ],
        options: ["up", "on", "over", "ahead"]
    },
    {
        verb: "go", particle: "under", phrase: "go under", category: "business", level: "college",
        meaning: "To fail financially; to go bankrupt.",
        sentences: [
            "Many small businesses {verb} {blank} during the recession.",
            "The restaurant {verb} {blank} after only six months.",
            "Without additional funding, the company will {verb} {blank}.",
            "Several airlines have {verb}ne {blank} in the past decade."
        ],
        options: ["under", "down", "out", "off"]
    },
    {
        verb: "go", particle: "through with", phrase: "go through with", category: "emotion", level: "college",
        meaning: "To carry out or complete something difficult despite reservations.",
        sentences: [
            "She decided to {verb} {blank} the surgery despite her fear.",
            "He couldn't {verb} {blank} the wedding and called it off.",
            "Are you sure you want to {verb} {blank} this plan?",
            "In the end, she {verb} {blank} the move to a new city."
        ],
        options: ["through with", "on with", "ahead with", "along with"]
    },
    {
        verb: "go", particle: "round", phrase: "go round", category: "daily", level: "middle",
        meaning: "To visit someone informally; to be sufficient for everyone.",
        sentences: [
            "I'll {verb} {blank} to her house after work.",
            "Is there enough cake to {verb} {blank}?",
            "We should {verb} {blank} and see how she's doing.",
            "There isn't enough time to {verb} {blank}."
        ],
        options: ["round", "around", "over", "by"]
    },
    {
        verb: "go", particle: "past", phrase: "go past", category: "travel", level: "elementary",
        meaning: "To pass by a place or person.",
        sentences: [
            "We {verb} {blank} your house every day on the way to school.",
            "The bus {verb}es {blank} the hospital — you can get off there.",
            "A fire truck {verb} {blank} with its sirens blaring.",
            "She {verb} {blank} the bakery and the smell was amazing."
        ],
        options: ["past", "by", "through", "over"]
    },
    {
        verb: "go", particle: "out with", phrase: "go out with", category: "emotion", level: "middle",
        meaning: "To be in a romantic relationship with someone.",
        sentences: [
            "She's been {verb}ing {blank} Tom for about two years.",
            "How long have you been {verb}ing {blank} her?",
            "He asked her to {verb} {blank} him, and she said yes.",
            "They started {verb}ing {blank} each other in high school."
        ],
        options: ["out with", "on with", "along with", "around with"]
    },
    {
        verb: "go", particle: "in for", phrase: "go in for", category: "daily", level: "college",
        meaning: "To enjoy or regularly participate in an activity.",
        sentences: [
            "She doesn't {verb} {blank} team sports — she prefers hiking.",
            "Do you {verb} {blank} any particular type of music?",
            "He {verb}es {blank} extreme sports like skydiving and bungee jumping.",
            "I don't really {verb} {blank} cooking elaborate meals."
        ],
        options: ["in for", "on for", "up for", "out for"]
    },
    {
        verb: "grapple", particle: "with", phrase: "grapple with", category: "academic", level: "professional",
        meaning: "To struggle to deal with a difficult problem or issue.",
        sentences: [
            "The government is {verb}ing {blank} rising inflation.",
            "Scientists continue to {verb} {blank} the mysteries of dark matter.",
            "She {verb}d {blank} the decision for weeks before making up her mind.",
            "Many students {verb} {blank} this concept at first."
        ],
        options: ["with", "on", "over", "through"]
    },
    {
        verb: "hammer", particle: "out", phrase: "hammer out", category: "business", level: "professional",
        meaning: "To negotiate and reach an agreement with great effort.",
        sentences: [
            "The two sides {verb}ed {blank} a compromise after hours of talks.",
            "We need to {verb} {blank} the details of the contract.",
            "They finally {verb}ed {blank} an agreement that satisfied everyone.",
            "The committee {verb}ed {blank} a new policy on overtime."
        ],
        options: ["out", "through", "over", "on"]
    },
    {
        verb: "hit", particle: "it off", phrase: "hit it off", category: "emotion", level: "high",
        meaning: "To quickly form a good relationship with someone.",
        sentences: [
            "We {verb} {blank} immediately and became best friends.",
            "She {verb} {blank} with her new roommate from day one.",
            "The two teams {verb} {blank} and worked together brilliantly.",
            "I didn't think we would, but we really {verb} {blank}."
        ],
        options: ["it off", "it on", "it up", "it out"]
    },
    {
        verb: "hold", particle: "out for", phrase: "hold out for", category: "business", level: "college",
        meaning: "To wait or resist in order to get something better.",
        sentences: [
            "She's {verb}ing {blank} a higher salary before accepting the offer.",
            "Don't settle — {verb} {blank} what you really want.",
            "The union is {verb}ing {blank} better working conditions.",
            "He {verb} {blank} a corner office and eventually got one."
        ],
        options: ["out for", "on for", "up for", "off for"]
    },
    {
        verb: "hunker", particle: "down", phrase: "hunker down", category: "daily", level: "college",
        meaning: "To prepare to stay in a place for a long time; to work intensely.",
        sentences: [
            "We {verb}ed {blank} and waited for the hurricane to pass.",
            "It's time to {verb} {blank} and finish this thesis.",
            "The family {verb}ed {blank} in the basement during the tornado warning.",
            "She {verb}ed {blank} in the library for a full day of studying."
        ],
        options: ["down", "in", "up", "on"]
    },
    {
        verb: "identify", particle: "with", phrase: "identify with", category: "emotion", level: "college",
        meaning: "To feel a connection or similarity with someone or something.",
        sentences: [
            "Many readers {verb} {blank} the main character in the novel.",
            "She {verb}s {blank} people who grew up in poverty.",
            "It's hard to {verb} {blank} someone who's never struggled.",
            "Young voters don't {verb} {blank} traditional politicians."
        ],
        options: ["with", "to", "for", "as"]
    },
    {
        verb: "join", particle: "in", phrase: "join in", category: "daily", level: "middle",
        meaning: "To participate in an activity that is already happening.",
        sentences: [
            "Everyone is welcome to {verb} {blank} the discussion.",
            "She was too shy to {verb} {blank} the game.",
            "Come on, {verb} {blank} — it's fun!",
            "He sat quietly and didn't {verb} {blank} the conversation."
        ],
        options: ["in", "on", "up", "with"]
    },
    {
        verb: "join", particle: "up", phrase: "join up", category: "daily", level: "high",
        meaning: "To become a member of an organization, especially the military.",
        sentences: [
            "He {verb}ed {blank} the army right after finishing school.",
            "Several volunteers {verb}ed {blank} to help with the relief effort.",
            "The two roads {verb} {blank} just before the bridge.",
            "She {verb}ed {blank} with the hiking group last month."
        ],
        options: ["up", "in", "on", "with"]
    },
    {
        verb: "jot", particle: "down", phrase: "jot down", category: "academic", level: "middle",
        meaning: "To write something quickly and briefly.",
        sentences: [
            "Let me {verb} {blank} your phone number before I forget.",
            "She {verb}ted {blank} a few notes during the lecture.",
            "He {verb}ted {blank} the directions on a napkin.",
            "I'll {verb} {blank} the key points for you."
        ],
        options: ["down", "up", "out", "off"]
    },
    {
        verb: "keep", particle: "down", phrase: "keep down", category: "daily", level: "high",
        meaning: "To prevent from increasing; to stay low; to not vomit food.",
        sentences: [
            "We need to {verb} {blank} costs if we want to stay profitable.",
            "{verb} your voice {blank} — the baby is sleeping.",
            "She was so sick she couldn't {verb} any food {blank}.",
            "The government is trying to {verb} {blank} inflation."
        ],
        options: ["down", "off", "out", "back"]
    },
    {
        verb: "keep", particle: "in", phrase: "keep in", category: "daily", level: "middle",
        meaning: "To not allow to leave; to hold inside.",
        sentences: [
            "The teacher {verb} the students {blank} during recess as punishment.",
            "She tried to {verb} {blank} her emotions but couldn't help crying.",
            "Close the door to {verb} the heat {blank}.",
            "{verb} your elbows {blank} when walking through the narrow hallway."
        ],
        options: ["in", "on", "back", "down"]
    },
    {
        verb: "knuckle", particle: "down", phrase: "knuckle down", category: "academic", level: "college",
        meaning: "To start working or studying hard and seriously.",
        sentences: [
            "Exams are next week — it's time to {verb} {blank}.",
            "He {verb}d {blank} and finished the report in one night.",
            "If she {verb}s {blank}, she can still pass the course.",
            "The team {verb}d {blank} and delivered the project on time."
        ],
        options: ["down", "in", "on", "up"]
    },
    {
        verb: "latch", particle: "onto", phrase: "latch onto", category: "emotion", level: "college",
        meaning: "To become very interested in or attached to something or someone.",
        sentences: [
            "The media {verb}ed {blank} the story and wouldn't let it go.",
            "She {verb}ed {blank} the idea and wouldn't consider alternatives.",
            "The child {verb}ed {blank} his mother and refused to let go.",
            "He {verb}ed {blank} the new trend early and profited."
        ],
        options: ["onto", "into", "on", "up"]
    },
    {
        verb: "level", particle: "off", phrase: "level off", category: "business", level: "college",
        meaning: "To stop increasing or decreasing and become stable.",
        sentences: [
            "After months of growth, sales have finally {verb}ed {blank}.",
            "The plane {verb}ed {blank} at 35,000 feet.",
            "Infection rates seem to be {verb}ing {blank}.",
            "Prices are expected to {verb} {blank} after the holiday season."
        ],
        options: ["off", "out", "up", "down"]
    },
    {
        verb: "level", particle: "with", phrase: "level with", category: "emotion", level: "college",
        meaning: "To be completely honest with someone.",
        sentences: [
            "I'm going to {verb} {blank} you — the situation is not good.",
            "Can you {verb} {blank} me? I need to know the truth.",
            "She finally {verb}ed {blank} her parents about her plans.",
            "He appreciated that she {verb}ed {blank} him instead of lying."
        ],
        options: ["with", "to", "at", "on"]
    },
    {
        verb: "lighten", particle: "up", phrase: "lighten up", category: "emotion", level: "high",
        meaning: "To become less serious or tense; to relax.",
        sentences: [
            "Oh {verb} {blank}! It was just a joke.",
            "She needs to {verb} {blank} and not take everything so seriously.",
            "The mood {verb}ed {blank} once the boss left the room.",
            "He told her to {verb} {blank}, but she was still upset."
        ],
        options: ["up", "down", "off", "on"]
    },
    {
        verb: "look", particle: "on", phrase: "look on", category: "daily", level: "high",
        meaning: "To watch something without getting involved.",
        sentences: [
            "A crowd gathered to {verb} {blank} as the firefighters worked.",
            "She could only {verb} {blank} helplessly as the car rolled away.",
            "They {verb}ed {blank} in horror as the building collapsed.",
            "He {verb}ed {blank} while the children played in the park."
        ],
        options: ["on", "at", "out", "over"]
    },
    {
        verb: "look", particle: "out for", phrase: "look out for", category: "daily", level: "middle",
        meaning: "To watch for and try to notice; to take care of someone.",
        sentences: [
            "{verb} {blank} pickpockets when you're in the city center.",
            "She always {verb}s {blank} her younger siblings.",
            "I'll {verb} {blank} a good deal on flights for us.",
            "He told her to {verb} {blank} any signs of trouble."
        ],
        options: ["out for", "after", "into", "over"]
    },
    {
        verb: "make", particle: "fun of", phrase: "make fun of", category: "emotion", level: "middle",
        meaning: "To ridicule or laugh at someone in an unkind way.",
        sentences: [
            "Stop {verb}ing {blank} your little brother — it's not nice.",
            "The other kids {verb} {blank} her accent when she first moved here.",
            "It's cruel to {verb} {blank} someone for how they look.",
            "He was always {verb}ing {blank} my cooking."
        ],
        options: ["fun of", "laugh at", "joke on", "mock of"]
    },
    {
        verb: "make", particle: "over", phrase: "make over", category: "daily", level: "high",
        meaning: "To completely transform or renovate the appearance of something.",
        sentences: [
            "They completely {verb} {blank} the kitchen with new cabinets and paint.",
            "The stylist {verb} her {blank} for the TV appearance.",
            "The company {verb} {blank} its brand image last year.",
            "She {verb} {blank} her wardrobe after losing weight."
        ],
        options: ["over", "up", "out", "on"]
    },
    {
        verb: "mull", particle: "over", phrase: "mull over", category: "academic", level: "college",
        meaning: "To think carefully about something over a period of time.",
        sentences: [
            "I need to {verb} {blank} your offer before I decide.",
            "She {verb}ed {blank} the idea for several weeks.",
            "He spent the weekend {verb}ing {blank} whether to accept the job.",
            "Give me a day to {verb} it {blank}."
        ],
        options: ["over", "through", "on", "about"]
    },
    {
        verb: "name", particle: "after", phrase: "name after", category: "daily", level: "middle",
        meaning: "To give someone or something the same name as another person or thing.",
        sentences: [
            "She was {verb}d {blank} her grandmother.",
            "The street was {verb}d {blank} a famous local poet.",
            "They {verb}d the baby {blank} his grandfather.",
            "The building was {verb}d {blank} the university's founder."
        ],
        options: ["after", "for", "by", "from"]
    },
    {
        verb: "nod", particle: "off", phrase: "nod off", category: "daily", level: "high",
        meaning: "To fall asleep, especially unintentionally.",
        sentences: [
            "He {verb}ded {blank} during the lecture.",
            "She {verb}ded {blank} on the couch while watching TV.",
            "I nearly {verb}ded {blank} in the meeting — it was so boring.",
            "The long car ride made the kids {verb} {blank}."
        ],
        options: ["off", "out", "away", "down"]
    },
    {
        verb: "pencil", particle: "in", phrase: "pencil in", category: "business", level: "college",
        meaning: "To make a tentative appointment or arrangement.",
        sentences: [
            "Let me {verb} you {blank} for Tuesday at 3 PM.",
            "I'll {verb} {blank} a meeting for next week.",
            "She {verb}ed him {blank} for lunch on Thursday.",
            "Can we {verb} that {blank} and confirm later?"
        ],
        options: ["in", "on", "down", "up"]
    },
    {
        verb: "pitch", particle: "in", phrase: "pitch in", category: "business", level: "high",
        meaning: "To contribute effort or help as part of a group.",
        sentences: [
            "If everyone {verb}es {blank}, we'll finish the cleanup in no time.",
            "She {verb}ed {blank} and helped set up the chairs for the event.",
            "The whole community {verb}ed {blank} after the flood.",
            "We all need to {verb} {blank} to meet the deadline."
        ],
        options: ["in", "on", "up", "out"]
    },
    {
        verb: "plough", particle: "through", phrase: "plough through", category: "academic", level: "college",
        meaning: "To read or work through something long and difficult.",
        sentences: [
            "She {verb}ed {blank} hundreds of pages of legal documents.",
            "I'm still {verb}ing {blank} the reading list for next week.",
            "He {verb}ed {blank} his emails after returning from vacation.",
            "It took me a month to {verb} {blank} that textbook."
        ],
        options: ["through", "into", "over", "on"]
    },
    {
        verb: "pull", particle: "in", phrase: "pull in", category: "business", level: "college",
        meaning: "To attract people, money, or support; for a train to arrive at a station.",
        sentences: [
            "The new show is {verb}ing {blank} huge audiences.",
            "The charity event {verb}ed {blank} over a million dollars.",
            "The train {verb}ed {blank} right on time.",
            "Her speech {verb}ed {blank} a lot of new supporters."
        ],
        options: ["in", "on", "up", "out"]
    },
    {
        verb: "put", particle: "aside", phrase: "put aside", category: "business", level: "high",
        meaning: "To save money or time for a specific purpose; to ignore differences temporarily.",
        sentences: [
            "She {verb}s {blank} a little money each month for emergencies.",
            "Let's {verb} {blank} our differences and focus on the task.",
            "He {verb} {blank} his personal feelings and made a professional decision.",
            "They {verb} {blank} enough funds for the children's education."
        ],
        options: ["aside", "away", "by", "apart"]
    },
    {
        verb: "put", particle: "down to", phrase: "put down to", category: "academic", level: "college",
        meaning: "To attribute something to a particular cause.",
        sentences: [
            "She {verb} her success {blank} hard work and determination.",
            "I'd {verb} it {blank} lack of experience.",
            "His bad mood can be {verb} {blank} the fact that he didn't sleep well.",
            "They {verb} the failure {blank} poor planning."
        ],
        options: ["down to", "up to", "on to", "off to"]
    },
    {
        verb: "put", particle: "through", phrase: "put through", category: "business", level: "high",
        meaning: "To connect someone by phone; to cause someone to experience something.",
        sentences: [
            "Can you {verb} me {blank} to the sales department?",
            "I'll {verb} you {blank} to my manager right away.",
            "She {verb} her family {blank} a lot with her reckless behavior.",
            "He was {verb} {blank} a series of difficult tests."
        ],
        options: ["through", "over", "across", "along"]
    },
    {
        verb: "put", particle: "in for", phrase: "put in for", category: "business", level: "college",
        meaning: "To apply or make a formal request for something.",
        sentences: [
            "She {verb} {blank} a transfer to the London office.",
            "He {verb} {blank} a pay rise after three years at the company.",
            "Several employees {verb} {blank} the management position.",
            "I'm going to {verb} {blank} a week off in July."
        ],
        options: ["in for", "up for", "on for", "out for"]
    },
    {
        verb: "rely", particle: "on", phrase: "rely on", category: "daily", level: "middle",
        meaning: "To depend on or trust someone or something.",
        sentences: [
            "You can {verb} {blank} me — I'll be there.",
            "Many families {verb} {blank} two incomes to survive.",
            "Don't {verb} {blank} the bus being on time.",
            "She {verb}s {blank} her assistant to manage her schedule."
        ],
        options: ["on", "in", "with", "for"]
    },
    {
        verb: "round", particle: "up", phrase: "round up", category: "daily", level: "middle",
        meaning: "To gather people or things together; to increase a number to the nearest whole.",
        sentences: [
            "Can you {verb} {blank} the kids? Dinner is ready.",
            "The teacher {verb}ed {blank} the students for a group photo.",
            "Let's {verb} it {blank} to the nearest dollar.",
            "Police {verb}ed {blank} the suspects within hours."
        ],
        options: ["up", "off", "out", "in"]
    },
    {
        verb: "rub", particle: "off", phrase: "rub off", category: "daily", level: "college",
        meaning: "To transfer a quality or characteristic from one person to another.",
        sentences: [
            "Her enthusiasm seems to {verb} {blank} on everyone around her.",
            "I hope his good habits {verb} {blank} on the younger players.",
            "Some of the teacher's passion for literature {verb}bed {blank} on her students.",
            "Living abroad, the culture starts to {verb} {blank} on you."
        ],
        options: ["off", "on", "out", "away"]
    },
    {
        verb: "run", particle: "by", phrase: "run by", category: "business", level: "high",
        meaning: "To tell someone about something to get their opinion or approval.",
        sentences: [
            "Let me {verb} this idea {blank} you before the meeting.",
            "I need to {verb} the budget {blank} my manager first.",
            "She {verb} the plan {blank} her team and got positive feedback.",
            "Can I {verb} something {blank} you quickly?"
        ],
        options: ["by", "through", "past", "over"]
    },
    {
        verb: "save", particle: "up", phrase: "save up", category: "business", level: "middle",
        meaning: "To accumulate money over time for a specific purpose.",
        sentences: [
            "She's {verb}ing {blank} to buy a new laptop.",
            "We've been {verb}ing {blank} for a trip to Japan.",
            "It took him two years to {verb} {blank} enough for a car.",
            "They're {verb}ing {blank} for their children's education."
        ],
        options: ["up", "on", "out", "in"]
    },
    {
        verb: "scale", particle: "up", phrase: "scale up", category: "business", level: "college",
        meaning: "To increase the size, scope, or extent of something.",
        sentences: [
            "The company plans to {verb} {blank} production next year.",
            "We need to {verb} {blank} our marketing efforts for the launch.",
            "The project was {verb}d {blank} after receiving additional funding.",
            "It's easier to {verb} {blank} a digital business than a physical one."
        ],
        options: ["up", "out", "on", "off"]
    },
    {
        verb: "set", particle: "down", phrase: "set down", category: "academic", level: "college",
        meaning: "To write or record something officially; to put something down carefully.",
        sentences: [
            "The rules are clearly {verb} {blank} in the handbook.",
            "She {verb} {blank} her thoughts in a journal every night.",
            "He carefully {verb} {blank} the fragile vase on the table.",
            "The law {verb}s {blank} strict guidelines for food safety."
        ],
        options: ["down", "out", "off", "up"]
    },
    {
        verb: "settle", particle: "on", phrase: "settle on", category: "daily", level: "high",
        meaning: "To decide on or agree upon a choice after consideration.",
        sentences: [
            "Have you {verb}d {blank} a date for the wedding yet?",
            "After looking at dozens of houses, they finally {verb}d {blank} one.",
            "We couldn't {verb} {blank} a name for the baby.",
            "The committee {verb}d {blank} a compromise solution."
        ],
        options: ["on", "for", "down", "in"]
    },
    {
        verb: "shop", particle: "around", phrase: "shop around", category: "daily", level: "middle",
        meaning: "To compare prices at different stores before buying.",
        sentences: [
            "It pays to {verb} {blank} before buying car insurance.",
            "She always {verb}s {blank} for the best deals.",
            "We {verb}ped {blank} for weeks before choosing a contractor.",
            "{verb} {blank} and compare prices — you might save a lot."
        ],
        options: ["around", "about", "for", "out"]
    },
    {
        verb: "smooth", particle: "over", phrase: "smooth over", category: "business", level: "college",
        meaning: "To make a problem or disagreement seem less serious.",
        sentences: [
            "She tried to {verb} {blank} the argument with a joke.",
            "The manager {verb}ed {blank} the tension between the two teams.",
            "You can't just {verb} {blank} this mistake — it's too serious.",
            "He's good at {verb}ing {blank} awkward situations."
        ],
        options: ["over", "out", "off", "away"]
    },
    {
        verb: "splash", particle: "out", phrase: "splash out", category: "daily", level: "college",
        meaning: "To spend a lot of money on something luxurious or special.",
        sentences: [
            "She {verb}ed {blank} on a designer handbag for her birthday.",
            "We decided to {verb} {blank} on a five-star hotel for our anniversary.",
            "He {verb}ed {blank} and bought first-class tickets.",
            "You deserve to {verb} {blank} once in a while."
        ],
        options: ["out", "on", "off", "up"]
    },
    {
        verb: "split", particle: "up", phrase: "split up", category: "emotion", level: "high",
        meaning: "To end a romantic relationship; to divide into groups.",
        sentences: [
            "They {verb} {blank} after five years together.",
            "The teacher {verb} the class {blank} into groups of four.",
            "The band {verb} {blank} due to creative differences.",
            "Let's {verb} {blank} and search both sides of the building."
        ],
        options: ["up", "apart", "off", "out"]
    },
    {
        verb: "stand", particle: "up to", phrase: "stand up to", category: "emotion", level: "high",
        meaning: "To confront or resist someone bravely; to withstand.",
        sentences: [
            "She finally {verb} {blank} the bully at school.",
            "These boots are designed to {verb} {blank} extreme conditions.",
            "You need to {verb} {blank} your boss when he's being unfair.",
            "The bridge was built to {verb} {blank} heavy traffic."
        ],
        options: ["up to", "up for", "out to", "by"]
    },
    {
        verb: "stir", particle: "up", phrase: "stir up", category: "emotion", level: "college",
        meaning: "To cause trouble, strong feelings, or controversy.",
        sentences: [
            "His speech {verb}red {blank} a lot of controversy.",
            "Stop trying to {verb} {blank} trouble between the two groups.",
            "The documentary {verb}red {blank} strong emotions in viewers.",
            "She {verb}red {blank} old memories that he'd rather forget."
        ],
        options: ["up", "on", "out", "off"]
    },
    {
        verb: "take", particle: "care of", phrase: "take care of", category: "daily", level: "elementary",
        meaning: "To look after and be responsible for someone or something.",
        sentences: [
            "Can you {verb} {blank} the dog while I'm on vacation?",
            "She {verb}s {blank} her elderly parents.",
            "I'll {verb} {blank} the cooking if you do the cleaning.",
            "Don't worry about the bill — I'll {verb} {blank} it."
        ],
        options: ["care of", "charge of", "hold of", "part in"]
    },
    {
        verb: "team", particle: "up", phrase: "team up", category: "business", level: "high",
        meaning: "To join forces with someone to work together.",
        sentences: [
            "The two companies {verb}ed {blank} to develop the new product.",
            "She {verb}ed {blank} with her classmate for the science project.",
            "Why don't we {verb} {blank} and tackle this together?",
            "The charity {verb}ed {blank} with local businesses to raise funds."
        ],
        options: ["up", "on", "in", "with"]
    },
    {
        verb: "track", particle: "down", phrase: "track down", category: "daily", level: "high",
        meaning: "To find someone or something after searching hard.",
        sentences: [
            "The detective finally {verb}ed {blank} the missing witness.",
            "I managed to {verb} {blank} a copy of the out-of-print book.",
            "Can you help me {verb} {blank} this old friend from school?",
            "It took weeks to {verb} {blank} the source of the problem."
        ],
        options: ["down", "out", "up", "off"]
    },
    {
        verb: "try", particle: "for", phrase: "try for", category: "daily", level: "middle",
        meaning: "To attempt to achieve or obtain something.",
        sentences: [
            "She's going to {verb} {blank} a place at Oxford University.",
            "He decided to {verb} {blank} the gold medal this time.",
            "They're {verb}ing {blank} a baby after years of waiting.",
            "You should {verb} {blank} that promotion — you deserve it."
        ],
        options: ["for", "out", "on", "at"]
    },
    {
        verb: "turn", particle: "against", phrase: "turn against", category: "emotion", level: "high",
        meaning: "To stop supporting and become hostile toward someone.",
        sentences: [
            "The public {verb}ed {blank} the politician after the scandal.",
            "She felt betrayed when her best friend {verb}ed {blank} her.",
            "The media {verb}ed {blank} the celebrity overnight.",
            "His own supporters {verb}ed {blank} him in the end."
        ],
        options: ["against", "on", "from", "away"]
    },
    {
        verb: "use", particle: "up", phrase: "use up", category: "daily", level: "middle",
        meaning: "To consume or exhaust the entire supply of something.",
        sentences: [
            "We've {verb}d {blank} all the milk — someone needs to go shopping.",
            "The printer has {verb}d {blank} all the ink again.",
            "She {verb}d {blank} the rest of the paint finishing the fence.",
            "Don't {verb} {blank} all the hot water!"
        ],
        options: ["up", "out", "off", "away"]
    },
    {
        verb: "vouch", particle: "for", phrase: "vouch for", category: "business", level: "college",
        meaning: "To guarantee or confirm someone's character, quality, or truth.",
        sentences: [
            "I can {verb} {blank} his honesty — he's a trustworthy person.",
            "She {verb}ed {blank} the accuracy of the data in the report.",
            "Several colleagues {verb}ed {blank} her excellent work ethic.",
            "Can anyone {verb} {blank} this candidate's qualifications?"
        ],
        options: ["for", "on", "to", "with"]
    },
    {
        verb: "vie", particle: "for", phrase: "vie for", category: "business", level: "professional",
        meaning: "To compete strongly to obtain or achieve something.",
        sentences: [
            "Several companies are {verb}ing {blank} the government contract.",
            "The candidates are {verb}ing {blank} the top position.",
            "Cities around the world {verb} {blank} the chance to host the Olympics.",
            "Dozens of applicants are {verb}ing {blank} just three openings."
        ],
        options: ["for", "on", "with", "over"]
    },
    {
        verb: "walk", particle: "away", phrase: "walk away", category: "emotion", level: "high",
        meaning: "To leave a difficult situation; to abandon something.",
        sentences: [
            "She decided to {verb} {blank} from the toxic relationship.",
            "You can't just {verb} {blank} from your responsibilities.",
            "He {verb}ed {blank} from the accident without a scratch.",
            "Sometimes the best thing to do is {verb} {blank}."
        ],
        options: ["away", "off", "out", "by"]
    },
    {
        verb: "walk", particle: "out", phrase: "walk out", category: "emotion", level: "high",
        meaning: "To leave suddenly, usually as a protest or in anger.",
        sentences: [
            "Half the audience {verb}ed {blank} during the boring speech.",
            "Workers {verb}ed {blank} in protest over pay cuts.",
            "She {verb}ed {blank} of the meeting in frustration.",
            "He {verb}ed {blank} on his family when she was just a child."
        ],
        options: ["out", "away", "off", "by"]
    },
    {
        verb: "wash", particle: "up", phrase: "wash up", category: "daily", level: "elementary",
        meaning: "To clean dishes; to wash your hands and face.",
        sentences: [
            "Can you {verb} {blank} after dinner tonight?",
            "Go {verb} {blank} before you sit down at the table.",
            "There's a huge pile of dishes to {verb} {blank}.",
            "She {verb}ed {blank} quickly before the guests arrived."
        ],
        options: ["up", "out", "off", "down"]
    },
    {
        verb: "while", particle: "away", phrase: "while away", category: "daily", level: "college",
        meaning: "To pass time in a leisurely, idle way.",
        sentences: [
            "They {verb}d {blank} the afternoon playing cards on the porch.",
            "She {verb}d {blank} the hours reading novels on the beach.",
            "He {verb}d {blank} the long wait by sketching in his notebook.",
            "We {verb}d {blank} the rainy day watching old movies."
        ],
        options: ["away", "off", "out", "by"]
    },
    {
        verb: "work", particle: "off", phrase: "work off", category: "daily", level: "high",
        meaning: "To get rid of stress, energy, or calories through physical activity.",
        sentences: [
            "She went for a run to {verb} {blank} the stress from the day.",
            "I need to {verb} {blank} that huge lunch with a long walk.",
            "He {verb}s {blank} his frustration at the gym.",
            "Let's go cycling to {verb} {blank} those extra calories."
        ],
        options: ["off", "out", "up", "on"]
    },
    {
        verb: "catch", particle: "up on", phrase: "catch up on", category: "daily", level: "middle",
        meaning: "To do something that you didn't have time to do earlier.",
        sentences: [
            "I need to {verb} {blank} some sleep this weekend.",
            "She spent Sunday {verb}ing {blank} emails from the week.",
            "He used his vacation to {verb} {blank} reading.",
            "I've got a lot of work to {verb} {blank} after being sick."
        ],
        options: ["up on", "on", "up with", "out on"]
    },
    {
        verb: "cut", particle: "it out", phrase: "cut it out", category: "emotion", level: "middle",
        meaning: "To stop doing something annoying.",
        sentences: [
            "{verb} {blank}! You're driving me crazy with that noise.",
            "If you don't {verb} {blank}, I'm going to tell the teacher.",
            "She told the kids to {verb} {blank} and behave.",
            "Just {verb} {blank}, will you? I'm trying to concentrate."
        ],
        options: ["it out", "it off", "it up", "it down"]
    },
    {
        verb: "zip", particle: "up", phrase: "zip up", category: "daily", level: "elementary",
        meaning: "To fasten something with a zipper.",
        sentences: [
            "{verb} {blank} your jacket — it's cold outside.",
            "She {verb}ped {blank} the suitcase and headed for the door.",
            "Can you help me {verb} {blank} this dress?",
            "He {verb}ped {blank} his backpack and ran to catch the bus."
        ],
        options: ["up", "on", "in", "off"]
    },
    {
        verb: "get", particle: "ahead", phrase: "get ahead", category: "business", level: "middle",
        meaning: "To make progress or become more successful than others.",
        sentences: [
            "She worked extra hours to {verb} {blank} in her career.",
            "If you want to {verb} {blank}, you need to keep learning.",
            "He studied every night to {verb} {blank} of his classmates.",
            "It's hard to {verb} {blank} without a good education."
        ],
        options: ["ahead", "along", "away", "around"]
    },
    {
        verb: "get", particle: "around", phrase: "get around", category: "daily", level: "middle",
        meaning: "To travel from place to place; also to find a way to avoid a problem or rule.",
        sentences: [
            "It's easy to {verb} {blank} the city by subway.",
            "He always finds a way to {verb} {blank} the rules.",
            "News about the scandal quickly {verb} {blank}.",
            "Without a car, it's difficult to {verb} {blank} in the suburbs."
        ],
        options: ["around", "about", "along", "away"]
    },
    {
        verb: "get", particle: "back to", phrase: "get back to", category: "business", level: "middle",
        meaning: "To return to a previous activity or to reply to someone later.",
        sentences: [
            "Let me {verb} {blank} you on that by tomorrow.",
            "I need to {verb} {blank} work after this break.",
            "She promised to {verb} {blank} me with an answer.",
            "Can we {verb} {blank} the main topic now?"
        ],
        options: ["back to", "on to", "up to", "in to"]
    },
    {
        verb: "get", particle: "down", phrase: "get down", category: "daily", level: "middle",
        meaning: "To descend or dismount; also to make someone feel depressed.",
        sentences: [
            "The rainy weather really {verb}s me {blank}.",
            "{verb} {blank} from that wall — it's dangerous!",
            "Don't let the bad news {verb} you {blank}.",
            "The cat can climb up the tree but can't {verb} {blank}."
        ],
        options: ["down", "off", "out", "up"]
    },
    {
        verb: "get", particle: "in on", phrase: "get in on", category: "business", level: "high",
        meaning: "To become involved in an activity, especially one that is profitable or exciting.",
        sentences: [
            "Everyone wanted to {verb} {blank} the deal.",
            "I'd love to {verb} {blank} that investment opportunity.",
            "She managed to {verb} {blank} the project at the last minute.",
            "He wanted to {verb} {blank} the action."
        ],
        options: ["in on", "on to", "up on", "out of"]
    },
    {
        verb: "get", particle: "off on", phrase: "get off on", category: "emotion", level: "college",
        meaning: "To derive great pleasure or excitement from something.",
        sentences: [
            "He really {verb}s {blank} solving difficult puzzles.",
            "Some people {verb} {blank} extreme sports.",
            "She {verb}s {blank} the thrill of public speaking.",
            "They seem to {verb} {blank} making others uncomfortable."
        ],
        options: ["off on", "on to", "up on", "into"]
    },
    {
        verb: "get", particle: "on for", phrase: "get on for", category: "daily", level: "high",
        meaning: "To approach or be nearly a certain time, age, or number.",
        sentences: [
            "It's {verb}ting {blank} midnight — we should leave.",
            "She's {verb}ting {blank} sixty but looks much younger.",
            "The temperature is {verb}ting {blank} forty degrees.",
            "There were {verb}ting {blank} two hundred people at the event."
        ],
        options: ["on for", "up to", "along to", "in for"]
    },
    {
        verb: "get", particle: "over with", phrase: "get over with", category: "daily", level: "middle",
        meaning: "To finish something unpleasant as quickly as possible.",
        sentences: [
            "Let's just {verb} this {blank} — I hate waiting.",
            "She wanted to {verb} the exam {blank} so she could relax.",
            "The sooner we {verb} this {blank}, the better.",
            "He decided to {verb} the dentist appointment {blank} early."
        ],
        options: ["over with", "done with", "through with", "away with"]
    },
    {
        verb: "get", particle: "round", phrase: "get round", category: "daily", level: "high",
        meaning: "To persuade someone; to find time to do something eventually.",
        sentences: [
            "She always manages to {verb} {blank} her father.",
            "I'll {verb} {blank} to fixing that shelf eventually.",
            "He tried to {verb} {blank} the new regulations.",
            "We never {verb} {blank} to painting the spare room."
        ],
        options: ["round", "around", "about", "over"]
    },
    {
        verb: "get", particle: "up to", phrase: "get up to", category: "daily", level: "middle",
        meaning: "To do something, especially something mischievous or unexpected.",
        sentences: [
            "What have you been {verb}ting {blank} lately?",
            "The kids are always {verb}ting {blank} mischief.",
            "I wonder what he's {verb}ting {blank} in the garage.",
            "She's been {verb}ting {blank} all sorts of adventures."
        ],
        options: ["up to", "on to", "in to", "along to"]
    },
    {
        verb: "get", particle: "through to", phrase: "get through to", category: "daily", level: "high",
        meaning: "To successfully communicate with or make someone understand.",
        sentences: [
            "I tried calling but couldn't {verb} {blank} the office.",
            "No matter what I say, I can't {verb} {blank} him.",
            "The message finally {verb} {blank} her after many attempts.",
            "Teachers often struggle to {verb} {blank} distracted students."
        ],
        options: ["through to", "across to", "over to", "along to"]
    },
    {
        verb: "put", particle: "about", phrase: "put about", category: "daily", level: "college",
        meaning: "To spread information or rumors, often false ones.",
        sentences: [
            "Someone has been {verb}ting {blank} rumors about the merger.",
            "He {verb} it {blank} that the shop was closing.",
            "Don't {verb} {blank} stories you can't verify.",
            "The gossip was {verb} {blank} by a disgruntled employee."
        ],
        options: ["about", "around", "out", "across"]
    },
    {
        verb: "put", particle: "up to", phrase: "put up to", category: "daily", level: "high",
        meaning: "To encourage or persuade someone to do something wrong or unwise.",
        sentences: [
            "I think someone {verb} him {blank} it.",
            "Who {verb} you {blank} this prank?",
            "She was {verb} {blank} stealing by older kids.",
            "Don't let anyone {verb} you {blank} anything illegal."
        ],
        options: ["up to", "on to", "in to", "off to"]
    },
    {
        verb: "put", particle: "over", phrase: "put over", category: "business", level: "high",
        meaning: "To communicate an idea successfully; to make something understood.",
        sentences: [
            "She {verb} her point {blank} very effectively.",
            "He struggled to {verb} {blank} his ideas to the board.",
            "The advertisement {verb}s {blank} the message clearly.",
            "How can we {verb} this concept {blank} to the public?"
        ],
        options: ["over", "across", "through", "about"]
    },
    {
        verb: "take", particle: "aback", phrase: "take aback", category: "emotion", level: "high",
        meaning: "To surprise or shock someone greatly.",
        sentences: [
            "I was {verb}n {blank} by her sudden resignation.",
            "His rude comment {verb} everyone {blank}.",
            "She was completely {verb}n {blank} by the news.",
            "The audience was {verb}n {blank} by the plot twist."
        ],
        options: ["aback", "apart", "aside", "away"]
    },
    {
        verb: "take", particle: "for", phrase: "take for", category: "daily", level: "high",
        meaning: "To wrongly believe someone or something is a particular type.",
        sentences: [
            "Do you {verb} me {blank} a fool?",
            "I {verb} him {blank} a tourist, but he was a local.",
            "She was {verb}n {blank} a celebrity at the restaurant.",
            "What do you {verb} me {blank}? I'm not stupid."
        ],
        options: ["for", "as", "like", "to"]
    },
    {
        verb: "take", particle: "aside", phrase: "take aside", category: "business", level: "high",
        meaning: "To lead someone away from a group to speak privately.",
        sentences: [
            "The manager {verb} her {blank} to discuss the issue.",
            "He {verb} me {blank} and told me the truth.",
            "She {verb} the student {blank} after class.",
            "Can I {verb} you {blank} for a moment?"
        ],
        options: ["aside", "apart", "away", "along"]
    },
    {
        verb: "take", particle: "through", phrase: "take through", category: "business", level: "middle",
        meaning: "To explain something to someone step by step.",
        sentences: [
            "Let me {verb} you {blank} the process.",
            "She {verb} the new employees {blank} the training manual.",
            "He {verb} us {blank} every detail of the plan.",
            "Can you {verb} me {blank} the setup instructions?"
        ],
        options: ["through", "over", "around", "along"]
    },
    {
        verb: "come", particle: "about", phrase: "come about", category: "academic", level: "high",
        meaning: "To happen or occur, especially unexpectedly.",
        sentences: [
            "How did this situation {verb} {blank}?",
            "The discovery {verb} {blank} by accident.",
            "Changes in the law {verb} {blank} after years of campaigning.",
            "Nobody knows how the error {verb} {blank}."
        ],
        options: ["about", "around", "along", "across"]
    },
    {
        verb: "come", particle: "apart", phrase: "come apart", category: "daily", level: "middle",
        meaning: "To break into pieces; to fail or collapse.",
        sentences: [
            "The old book {verb} {blank} in my hands.",
            "Their marriage was {verb}ing {blank} at the seams.",
            "The toy {verb} {blank} after just one day.",
            "Everything seems to be {verb}ing {blank} right now."
        ],
        options: ["apart", "off", "away", "out"]
    },
    {
        verb: "come", particle: "into", phrase: "come into", category: "business", level: "high",
        meaning: "To inherit something, especially money or property.",
        sentences: [
            "She {verb} {blank} a large fortune when her uncle died.",
            "He {verb} {blank} some money from his grandmother.",
            "The property {verb} {blank} the family three generations ago.",
            "When did you {verb} {blank} possession of this painting?"
        ],
        options: ["into", "upon", "across", "by"]
    },
    {
        verb: "come", particle: "round to", phrase: "come round to", category: "daily", level: "high",
        meaning: "To gradually change your opinion and accept an idea.",
        sentences: [
            "She eventually {verb} {blank} my way of thinking.",
            "He'll {verb} {blank} the idea once he sees the benefits.",
            "It took a while, but they finally {verb} {blank} our proposal.",
            "My parents slowly {verb} {blank} accepting my career choice."
        ],
        options: ["round to", "around to", "up to", "along to"]
    },
    {
        verb: "go", particle: "down with", phrase: "go down with", category: "daily", level: "middle",
        meaning: "To become ill with a disease or sickness.",
        sentences: [
            "Half the office has {verb}ne {blank} the flu.",
            "She {verb} {blank} a bad cold last week.",
            "I hope I don't {verb} {blank} whatever he has.",
            "Many students {verb} {blank} food poisoning after the trip."
        ],
        options: ["down with", "on with", "off with", "out with"]
    },
    {
        verb: "go", particle: "into", phrase: "go into", category: "business", level: "middle",
        meaning: "To discuss or explain something in detail; to enter a profession.",
        sentences: [
            "I don't want to {verb} {blank} the details right now.",
            "She {verb} {blank} medicine like her mother.",
            "The report {verb}es {blank} great detail about the findings.",
            "He decided to {verb} {blank} business for himself."
        ],
        options: ["into", "on", "through", "over"]
    },
    {
        verb: "go", particle: "on about", phrase: "go on about", category: "daily", level: "middle",
        meaning: "To talk about something for too long in an annoying way.",
        sentences: [
            "He keeps {verb}ing {blank} his new car.",
            "Please stop {verb}ing {blank} the weather.",
            "She {verb}es {blank} her diet constantly.",
            "My uncle always {verb}es {blank} how things were better in his day."
        ],
        options: ["on about", "off about", "in about", "out about"]
    },
    {
        verb: "turn", particle: "back", phrase: "turn back", category: "travel", level: "middle",
        meaning: "To return in the direction you came from; to reverse course.",
        sentences: [
            "The road was blocked, so we had to {verb} {blank}.",
            "It's too late to {verb} {blank} now — we're committed.",
            "They {verb}ed {blank} at the border due to missing documents.",
            "Once you start this journey, there's no {verb}ing {blank}."
        ],
        options: ["back", "around", "away", "off"]
    },
    {
        verb: "run", particle: "around", phrase: "run around", category: "daily", level: "elementary",
        meaning: "To be very busy doing many things; to move around in a hurried way.",
        sentences: [
            "I've been {verb}ning {blank} all day trying to finish errands.",
            "The children were {verb}ning {blank} the playground.",
            "Stop {verb}ning {blank} and sit down for a moment.",
            "She's always {verb}ning {blank} after her three kids."
        ],
        options: ["around", "about", "along", "away"]
    },
    {
        verb: "run", particle: "on", phrase: "run on", category: "daily", level: "middle",
        meaning: "To continue for longer than expected; to use a particular type of fuel or power.",
        sentences: [
            "The meeting {verb} {blank} for three hours.",
            "This car {verb}s {blank} diesel fuel.",
            "The discussion {verb} {blank} well past midnight.",
            "Most modern devices {verb} {blank} rechargeable batteries."
        ],
        options: ["on", "off", "up", "out"]
    },
    {
        verb: "look", particle: "in on", phrase: "look in on", category: "daily", level: "high",
        meaning: "To visit someone briefly to check on their condition.",
        sentences: [
            "I'll {verb} {blank} grandma on my way home.",
            "The nurse {verb}s {blank} the patients every hour.",
            "Could you {verb} {blank} the baby while I shower?",
            "He {verb}ed {blank} his neighbor to see if she needed anything."
        ],
        options: ["in on", "out on", "up on", "on at"]
    },
    {
        verb: "look", particle: "on as", phrase: "look on as", category: "emotion", level: "high",
        meaning: "To consider or regard someone in a particular way.",
        sentences: [
            "I {verb} {blank} him {blank} a mentor.",
            "She {verb}s {blank} the job {blank} a great opportunity.",
            "They {verb}ed {blank} him {blank} part of the family.",
            "He {verb}ed {blank} the experience {blank} a turning point."
        ],
        options: ["on as", "up as", "at as", "to as"]
    },
    {
        verb: "look", particle: "round", phrase: "look round", category: "travel", level: "middle",
        meaning: "To explore or examine a place by walking through it.",
        sentences: [
            "Let's {verb} {blank} the old town before lunch.",
            "We spent the afternoon {verb}ing {blank} the museum.",
            "Would you like to {verb} {blank} the house before deciding?",
            "The tourists {verb}ed {blank} the cathedral in silence."
        ],
        options: ["round", "around", "through", "over"]
    },
    {
        verb: "give", particle: "rise to", phrase: "give rise to", category: "academic", level: "college",
        meaning: "To cause something to happen or exist.",
        sentences: [
            "The new policy {verb} {blank} widespread protests.",
            "Rapid urbanization has {verb}n {blank} many social problems.",
            "His comments {verb} {blank} a heated debate.",
            "The discovery {verb} {blank} new theories about evolution."
        ],
        options: ["rise to", "way to", "birth to", "in to"]
    },
    {
        verb: "set", particle: "about", phrase: "set about", category: "daily", level: "high",
        meaning: "To begin doing something with determination or purpose.",
        sentences: [
            "She {verb} {blank} cleaning the entire house.",
            "He {verb} {blank} the task with great enthusiasm.",
            "We need to {verb} {blank} finding a solution immediately.",
            "They {verb} {blank} rebuilding the community after the disaster."
        ],
        options: ["about", "off", "out", "up"]
    },
    {
        verb: "set", particle: "against", phrase: "set against", category: "emotion", level: "high",
        meaning: "To cause someone to oppose or dislike another person or thing.",
        sentences: [
            "The dispute {verb} neighbor {blank} neighbor.",
            "He was {verb} {blank} the idea from the start.",
            "The scandal {verb} the public {blank} the government.",
            "Don't let this argument {verb} you {blank} each other."
        ],
        options: ["against", "apart", "aside", "about"]
    },
    {
        verb: "set", particle: "upon", phrase: "set upon", category: "daily", level: "college",
        meaning: "To attack someone suddenly and violently.",
        sentences: [
            "The dog {verb} {blank} the intruder without warning.",
            "He was {verb} {blank} by muggers on his way home.",
            "The mob {verb} {blank} the politician's car.",
            "Wasps {verb} {blank} us during the picnic."
        ],
        options: ["upon", "about", "against", "after"]
    },
    {
        verb: "hang", particle: "back", phrase: "hang back", category: "emotion", level: "middle",
        meaning: "To hesitate or be reluctant to move forward or take action.",
        sentences: [
            "She {verb} {blank} while the others rushed to volunteer.",
            "Don't {verb} {blank} — come and join us!",
            "He tends to {verb} {blank} in social situations.",
            "The shy student always {verb}s {blank} during group activities."
        ],
        options: ["back", "behind", "off", "out"]
    },
    {
        verb: "hang", particle: "over", phrase: "hang over", category: "emotion", level: "high",
        meaning: "To threaten or worry someone; to be imminent in a troubling way.",
        sentences: [
            "The threat of layoffs {verb}s {blank} the entire department.",
            "A dark cloud of debt {verb}s {blank} them.",
            "The deadline {verb}s {blank} me like a sword.",
            "The scandal continued to {verb} {blank} his career."
        ],
        options: ["over", "around", "about", "on"]
    },
    {
        verb: "hand", particle: "on", phrase: "hand on", category: "daily", level: "middle",
        meaning: "To pass something to the next person in a sequence.",
        sentences: [
            "Please {verb} {blank} the message to everyone in the group.",
            "She {verb}ed {blank} the family recipe to her daughter.",
            "When you're done reading it, {verb} it {blank} to the next person.",
            "Traditions are {verb}ed {blank} from generation to generation."
        ],
        options: ["on", "over", "out", "in"]
    },
    {
        verb: "hand", particle: "round", phrase: "hand round", category: "daily", level: "middle",
        meaning: "To distribute something to each person in a group.",
        sentences: [
            "She {verb}ed {blank} the snacks at the meeting.",
            "Could you {verb} {blank} these handouts, please?",
            "He {verb}ed {blank} glasses of champagne to celebrate.",
            "The teacher {verb}ed {blank} the exam papers."
        ],
        options: ["round", "out", "over", "off"]
    },
    {
        verb: "pay", particle: "into", phrase: "pay into", category: "business", level: "middle",
        meaning: "To deposit money into a bank account or fund.",
        sentences: [
            "She {verb}s {blank} her pension fund every month.",
            "I need to {verb} this check {blank} my savings account.",
            "Employees {verb} {blank} the retirement scheme automatically.",
            "How much do you {verb} {blank} your ISA each year?"
        ],
        options: ["into", "in", "to", "for"]
    },
    {
        verb: "pay", particle: "down", phrase: "pay down", category: "business", level: "middle",
        meaning: "To reduce a debt by making regular payments.",
        sentences: [
            "We're trying to {verb} {blank} the mortgage faster.",
            "She's been {verb}ing {blank} her student loans for years.",
            "The company plans to {verb} {blank} its debt this quarter.",
            "He used his bonus to {verb} {blank} his credit card balance."
        ],
        options: ["down", "off", "out", "back"]
    },
    {
        verb: "show", particle: "in", phrase: "show in", category: "business", level: "middle",
        meaning: "To lead a visitor into a room or building.",
        sentences: [
            "Please {verb} the client {blank}.",
            "The receptionist {verb}ed us {blank} to the meeting room.",
            "Could you {verb} {blank} the next applicant?",
            "She was {verb}n {blank} by the butler."
        ],
        options: ["in", "up", "out", "on"]
    },
    {
        verb: "show", particle: "out", phrase: "show out", category: "business", level: "middle",
        meaning: "To accompany a visitor to the exit.",
        sentences: [
            "Let me {verb} you {blank} — the exit is this way.",
            "The secretary {verb}ed the guests {blank}.",
            "He {verb}ed himself {blank} after the meeting.",
            "Would you {verb} Mr. Davis {blank}, please?"
        ],
        options: ["out", "off", "in", "away"]
    },
    {
        verb: "throw", particle: "together", phrase: "throw together", category: "daily", level: "middle",
        meaning: "To make something quickly and without much care; to bring people together by chance.",
        sentences: [
            "I just {verb} {blank} a quick salad for lunch.",
            "Fate {verb} them {blank} at the airport.",
            "She {verb} {blank} a costume from things in her closet.",
            "He can {verb} {blank} a delicious meal in twenty minutes."
        ],
        options: ["together", "around", "about", "in"]
    },
    {
        verb: "throw", particle: "over", phrase: "throw over", category: "emotion", level: "college",
        meaning: "To abandon or reject a partner or plan.",
        sentences: [
            "She {verb} him {blank} for someone else.",
            "He {verb} {blank} his career to become an artist.",
            "Don't {verb} {blank} everything you've worked for.",
            "She was {verb}n {blank} after ten years of marriage."
        ],
        options: ["over", "out", "away", "off"]
    },
    {
        verb: "write", particle: "back", phrase: "write back", category: "daily", level: "elementary",
        meaning: "To reply to a letter or message.",
        sentences: [
            "She {verb} {blank} to him the same day.",
            "I haven't had time to {verb} {blank} yet.",
            "He never {verb}s {blank} when I email him.",
            "Please {verb} {blank} as soon as you can."
        ],
        options: ["back", "in", "out", "up"]
    },
    {
        verb: "write", particle: "in", phrase: "write in", category: "daily", level: "middle",
        meaning: "To send a letter or message to an organization.",
        sentences: [
            "Viewers can {verb} {blank} with their comments.",
            "She {verb} {blank} to complain about the service.",
            "Many listeners {verb} {blank} requesting that song.",
            "If you have suggestions, please {verb} {blank}."
        ],
        options: ["in", "back", "out", "up"]
    },
    {
        verb: "write", particle: "out", phrase: "write out", category: "daily", level: "middle",
        meaning: "To write something in full or in complete form; to write a check.",
        sentences: [
            "Please {verb} {blank} your full name and address.",
            "She {verb} {blank} a check for five hundred dollars.",
            "He {verb} {blank} the recipe in neat handwriting.",
            "Can you {verb} {blank} the instructions step by step?"
        ],
        options: ["out", "down", "up", "in"]
    },
    {
        verb: "send", particle: "away", phrase: "send away", category: "daily", level: "middle",
        meaning: "To make someone leave; to order something by post.",
        sentences: [
            "The teacher {verb} the disruptive student {blank}.",
            "They {verb} {blank} for a free brochure.",
            "He was {verb} {blank} without an explanation.",
            "She {verb} the children {blank} so the adults could talk."
        ],
        options: ["away", "off", "out", "back"]
    },
    {
        verb: "send", particle: "for", phrase: "send for", category: "daily", level: "high",
        meaning: "To request that someone come to you or that something be delivered.",
        sentences: [
            "Quick, {verb} {blank} an ambulance!",
            "The queen {verb} {blank} her advisors immediately.",
            "He {verb} {blank} the doctor when the fever worsened.",
            "We should {verb} {blank} reinforcements right away."
        ],
        options: ["for", "after", "out", "in"]
    },
    {
        verb: "send", particle: "out", phrase: "send out", category: "business", level: "middle",
        meaning: "To distribute or dispatch something to many people or places.",
        sentences: [
            "The company {verb} {blank} invitations to all customers.",
            "We need to {verb} {blank} the newsletters by Friday.",
            "She {verb} {blank} her resume to twenty companies.",
            "The charity {verb}s {blank} appeals for donations every year."
        ],
        options: ["out", "off", "away", "in"]
    },
    {
        verb: "send", particle: "up", phrase: "send up", category: "daily", level: "high",
        meaning: "To make fun of someone or something by imitating them humorously.",
        sentences: [
            "The comedian {verb}s {blank} famous politicians brilliantly.",
            "The show {verb}s {blank} reality TV culture.",
            "He loves to {verb} {blank} his boss's mannerisms.",
            "The film {verb}s {blank} the spy movie genre."
        ],
        options: ["up", "off", "out", "over"]
    },
    {
        verb: "pick", particle: "through", phrase: "pick through", category: "daily", level: "high",
        meaning: "To examine items carefully, selecting or sorting them.",
        sentences: [
            "She {verb}ed {blank} the pile of clothes at the thrift store.",
            "Rescue workers {verb}ed {blank} the rubble for survivors.",
            "He {verb}ed {blank} the data looking for errors.",
            "The children {verb}ed {blank} the box of toys."
        ],
        options: ["through", "over", "out", "apart"]
    },
    {
        verb: "drop", particle: "back", phrase: "drop back", category: "daily", level: "middle",
        meaning: "To fall behind or move to a lower position in a ranking.",
        sentences: [
            "The team {verb}ped {blank} to third place after losing.",
            "He {verb}ped {blank} from the leading group of runners.",
            "Sales {verb}ped {blank} slightly in the third quarter.",
            "She {verb}ped {blank} in the polls after the debate."
        ],
        options: ["back", "down", "off", "behind"]
    },
    {
        verb: "drop", particle: "behind", phrase: "drop behind", category: "daily", level: "middle",
        meaning: "To fail to keep up with others in progress or position.",
        sentences: [
            "If you miss too many classes, you'll {verb} {blank}.",
            "She {verb}ped {blank} the other students in math.",
            "Don't {verb} {blank} on your mortgage payments.",
            "The smaller companies are {verb}ping {blank} the market leaders."
        ],
        options: ["behind", "back", "off", "away"]
    },
    {
        verb: "fill", particle: "in on", phrase: "fill in on", category: "business", level: "middle",
        meaning: "To give someone the information they have missed.",
        sentences: [
            "Can you {verb} me {blank} what happened at the meeting?",
            "She {verb}ed him {blank} the latest developments.",
            "I need someone to {verb} me {blank} the project's progress.",
            "He {verb}ed the new employee {blank} the company history."
        ],
        options: ["in on", "up on", "out on", "in with"]
    },
    {
        verb: "cut", particle: "across", phrase: "cut across", category: "daily", level: "high",
        meaning: "To take a shorter route; to affect or be relevant to different groups.",
        sentences: [
            "We can {verb} {blank} the park to save time.",
            "This issue {verb}s {blank} all social classes.",
            "She {verb} {blank} the field to get to school faster.",
            "The problem {verb}s {blank} national boundaries."
        ],
        options: ["across", "through", "over", "around"]
    },
    {
        verb: "cut", particle: "through", phrase: "cut through", category: "daily", level: "middle",
        meaning: "To pass through something by cutting or to deal with something quickly.",
        sentences: [
            "The knife {verb} {blank} the bread easily.",
            "Let's {verb} {blank} the bureaucracy and get things done.",
            "The wind {verb} {blank} my thin jacket.",
            "She managed to {verb} {blank} all the red tape."
        ],
        options: ["through", "across", "into", "off"]
    },
    {
        verb: "cut", particle: "up", phrase: "cut up", category: "daily", level: "elementary",
        meaning: "To cut something into small pieces; also to be very upset (informal).",
        sentences: [
            "Please {verb} {blank} the vegetables for the stew.",
            "She was really {verb} {blank} about losing her pet.",
            "He {verb} {blank} the paper into tiny strips.",
            "The children {verb} {blank} the magazines for their collage."
        ],
        options: ["up", "out", "off", "down"]
    },
    {
        verb: "pass", particle: "around", phrase: "pass around", category: "daily", level: "elementary",
        meaning: "To distribute something by handing it from person to person.",
        sentences: [
            "Please {verb} the cookies {blank} the table.",
            "They {verb}ed {blank} a collection box for donations.",
            "She {verb}ed {blank} copies of the report.",
            "The bottle was {verb}ed {blank} among the friends."
        ],
        options: ["around", "about", "through", "over"]
    },
    {
        verb: "pass", particle: "down", phrase: "pass down", category: "daily", level: "middle",
        meaning: "To transmit knowledge, traditions, or possessions to younger generations.",
        sentences: [
            "These stories have been {verb}ed {blank} for centuries.",
            "She {verb}ed {blank} her wedding ring to her granddaughter.",
            "Cultural traditions are {verb}ed {blank} through families.",
            "He wants to {verb} {blank} his knowledge of the craft."
        ],
        options: ["down", "on", "along", "over"]
    },
    {
        verb: "pass", particle: "for", phrase: "pass for", category: "daily", level: "high",
        meaning: "To be accepted as or mistaken for something or someone.",
        sentences: [
            "She could easily {verb} {blank} someone ten years younger.",
            "This imitation {verb}es {blank} the real thing.",
            "In dim light, it could {verb} {blank} genuine leather.",
            "He speaks so well he could {verb} {blank} a native speaker."
        ],
        options: ["for", "as", "off as", "by"]
    },
    {
        verb: "pass", particle: "over", phrase: "pass over", category: "business", level: "high",
        meaning: "To ignore or not consider someone for a position or opportunity.",
        sentences: [
            "She was {verb}ed {blank} for the promotion again.",
            "They {verb}ed him {blank} in favor of a younger candidate.",
            "Don't {verb} {blank} this opportunity — it won't come again.",
            "He felt he had been unfairly {verb}ed {blank}."
        ],
        options: ["over", "by", "up", "aside"]
    },
    {
        verb: "pass", particle: "through", phrase: "pass through", category: "travel", level: "middle",
        meaning: "To travel through a place without stopping for long.",
        sentences: [
            "We're just {verb}ing {blank} on our way to the coast.",
            "The train {verb}es {blank} several small towns.",
            "Many tourists {verb} {blank} this village in summer.",
            "I was {verb}ing {blank} the area and decided to stop."
        ],
        options: ["through", "by", "along", "across"]
    },
    {
        verb: "move", particle: "away", phrase: "move away", category: "daily", level: "elementary",
        meaning: "To leave and go to live in a different place.",
        sentences: [
            "They {verb}d {blank} from the city to the countryside.",
            "Her best friend {verb}d {blank} when they were teenagers.",
            "We're planning to {verb} {blank} from this neighborhood.",
            "He {verb}d {blank} to start a new life."
        ],
        options: ["away", "out", "off", "along"]
    },
    {
        verb: "move", particle: "back", phrase: "move back", category: "daily", level: "elementary",
        meaning: "To return to a previous place of residence.",
        sentences: [
            "She {verb}d {blank} to her hometown after college.",
            "He {verb}d {blank} in with his parents temporarily.",
            "We might {verb} {blank} to London next year.",
            "Many people {verb} {blank} to where they grew up."
        ],
        options: ["back", "in", "out", "away"]
    },
    {
        verb: "move", particle: "forward", phrase: "move forward", category: "business", level: "middle",
        meaning: "To make progress; to proceed with a plan or action.",
        sentences: [
            "Let's {verb} {blank} with the project as planned.",
            "The company is {verb}ing {blank} with the merger.",
            "It's time to {verb} {blank} and leave the past behind.",
            "We can't {verb} {blank} until we get approval."
        ],
        options: ["forward", "ahead", "on", "along"]
    },
    {
        verb: "move", particle: "over", phrase: "move over", category: "daily", level: "elementary",
        meaning: "To shift position to make room for someone else.",
        sentences: [
            "Could you {verb} {blank} a bit? There's no room.",
            "{verb} {blank} so I can sit down too.",
            "He {verb}d {blank} to let the ambulance pass.",
            "She {verb}d {blank} on the bench to make space."
        ],
        options: ["over", "along", "aside", "away"]
    },
    {
        verb: "point", particle: "at", phrase: "point at", category: "daily", level: "elementary",
        meaning: "To direct a finger or object toward someone or something.",
        sentences: [
            "It's rude to {verb} {blank} people.",
            "She {verb}ed {blank} the painting and asked about the artist.",
            "He {verb}ed {blank} the map and showed us our route.",
            "The witness {verb}ed {blank} the suspect in the lineup."
        ],
        options: ["at", "to", "toward", "out"]
    },
    {
        verb: "point", particle: "towards", phrase: "point towards", category: "academic", level: "high",
        meaning: "To suggest or indicate something; to be evidence of.",
        sentences: [
            "All the evidence {verb}s {blank} his innocence.",
            "Recent studies {verb} {blank} a different conclusion.",
            "The data {verb}s {blank} a growing trend.",
            "Everything {verb}s {blank} the need for reform."
        ],
        options: ["towards", "at", "to", "into"]
    },
    {
        verb: "blow", particle: "away", phrase: "blow away", category: "emotion", level: "middle",
        meaning: "To impress someone greatly; also to be carried away by wind.",
        sentences: [
            "Her performance {verb} the judges {blank}.",
            "The papers were {verb}n {blank} by the strong wind.",
            "I was completely {verb}n {blank} by the scenery.",
            "His talent {verb} everyone {blank} at the audition."
        ],
        options: ["away", "off", "out", "over"]
    },
    {
        verb: "blow", particle: "down", phrase: "blow down", category: "daily", level: "middle",
        meaning: "To be knocked down by the force of wind.",
        sentences: [
            "The storm {verb} {blank} several trees in the park.",
            "The fence was {verb}n {blank} during the hurricane.",
            "Strong winds {verb} {blank} the old barn.",
            "Part of the roof was {verb}n {blank} last night."
        ],
        options: ["down", "off", "away", "over"]
    },
    {
        verb: "die", particle: "away", phrase: "die away", category: "daily", level: "high",
        meaning: "To gradually become weaker, quieter, and then disappear completely.",
        sentences: [
            "The sound of the engine slowly {verb}d {blank}.",
            "The wind {verb}d {blank} as evening approached.",
            "The applause gradually {verb}d {blank}.",
            "His anger {verb}d {blank} when he heard the explanation."
        ],
        options: ["away", "down", "off", "out"]
    },
    {
        verb: "die", particle: "back", phrase: "die back", category: "daily", level: "high",
        meaning: "When plants die back, their stems and leaves die but the roots survive.",
        sentences: [
            "The roses {verb} {blank} in autumn but return in spring.",
            "These plants {verb} {blank} every winter.",
            "The vegetation had {verb}d {blank} after the frost.",
            "The ivy will {verb} {blank} if you stop watering it."
        ],
        options: ["back", "down", "away", "off"]
    },
    {
        verb: "burn", particle: "off", phrase: "burn off", category: "daily", level: "middle",
        meaning: "To use energy through physical exercise; to remove by burning.",
        sentences: [
            "I went for a run to {verb} {blank} the extra calories.",
            "The morning mist will {verb} {blank} by noon.",
            "She exercises daily to {verb} {blank} stress.",
            "The fog usually {verb}s {blank} by mid-morning."
        ],
        options: ["off", "out", "up", "away"]
    },
    {
        verb: "burn", particle: "through", phrase: "burn through", category: "business", level: "high",
        meaning: "To use up money or resources very quickly.",
        sentences: [
            "The startup {verb}ed {blank} its funding in six months.",
            "He {verb}s {blank} money like there's no tomorrow.",
            "The project is {verb}ing {blank} the budget at an alarming rate.",
            "They {verb}ed {blank} their savings during unemployment."
        ],
        options: ["through", "up", "out", "off"]
    },
    {
        verb: "check", particle: "back", phrase: "check back", category: "daily", level: "middle",
        meaning: "To return later to get more information or see if something has changed.",
        sentences: [
            "{verb} {blank} with us next week for updates.",
            "I'll {verb} {blank} in an hour to see if it's ready.",
            "She told me to {verb} {blank} after lunch.",
            "We need to {verb} {blank} with the supplier tomorrow."
        ],
        options: ["back", "in", "out", "up"]
    },
    {
        verb: "check", particle: "on", phrase: "check on", category: "daily", level: "elementary",
        meaning: "To verify that someone or something is safe, healthy, or working correctly.",
        sentences: [
            "I'll go {verb} {blank} the children.",
            "She {verb}s {blank} her elderly mother every day.",
            "Can you {verb} {blank} the roast in the oven?",
            "The nurse came to {verb} {blank} the patient."
        ],
        options: ["on", "in", "up", "over"]
    },
    {
        verb: "clear", particle: "away", phrase: "clear away", category: "daily", level: "middle",
        meaning: "To remove things from a place; to tidy up.",
        sentences: [
            "Let me {verb} {blank} the dishes from the table.",
            "She {verb}ed {blank} the clutter from her desk.",
            "They {verb}ed {blank} the debris after the storm.",
            "Please {verb} {blank} your things before the guests arrive."
        ],
        options: ["away", "out", "off", "up"]
    },
    {
        verb: "clear", particle: "off", phrase: "clear off", category: "daily", level: "middle",
        meaning: "To leave a place quickly; to go away (often used as a command).",
        sentences: [
            "The security guard told the teenagers to {verb} {blank}.",
            "{verb} {blank}! This is private property.",
            "The rain finally {verb}ed {blank} in the afternoon.",
            "He {verb}ed {blank} without saying goodbye."
        ],
        options: ["off", "out", "away", "up"]
    },
    {
        verb: "close", particle: "in", phrase: "close in", category: "daily", level: "high",
        meaning: "To gradually surround or approach from all sides.",
        sentences: [
            "The police are {verb}ing {blank} on the suspect.",
            "Darkness was {verb}ing {blank} as we hurried home.",
            "The fog {verb}d {blank} around the mountaintop.",
            "Winter is {verb}ing {blank} — the days are getting shorter."
        ],
        options: ["in", "up", "on", "off"]
    },
    {
        verb: "close", particle: "out", phrase: "close out", category: "business", level: "high",
        meaning: "To bring something to an end; to sell remaining stock at reduced prices.",
        sentences: [
            "The store is {verb}ing {blank} its winter collection.",
            "Let's {verb} {blank} this account by end of month.",
            "They {verb}d {blank} the year with record profits.",
            "The sale will {verb} {blank} all remaining inventory."
        ],
        options: ["out", "off", "down", "up"]
    },
    {
        verb: "drive", particle: "away", phrase: "drive away", category: "daily", level: "middle",
        meaning: "To force someone or something to leave; to leave in a vehicle.",
        sentences: [
            "His bad attitude {verb}s customers {blank}.",
            "She {verb} {blank} without looking back.",
            "The noise {verb}s {blank} all the wildlife.",
            "They watched him {verb} {blank} into the sunset."
        ],
        options: ["away", "off", "out", "back"]
    },
    {
        verb: "drive", particle: "off", phrase: "drive off", category: "daily", level: "middle",
        meaning: "To leave in a vehicle; to force an attacker to retreat.",
        sentences: [
            "He jumped in the car and {verb} {blank} quickly.",
            "The guard dog {verb} {blank} the intruders.",
            "She {verb} {blank} before I could say goodbye.",
            "They managed to {verb} {blank} the attackers."
        ],
        options: ["off", "away", "out", "back"]
    },
    {
        verb: "drive", particle: "out", phrase: "drive out", category: "daily", level: "high",
        meaning: "To force someone to leave a place permanently.",
        sentences: [
            "Rising rents are {verb}ing residents {blank} of the city.",
            "The invaders were {verb}n {blank} by the resistance.",
            "Competition from big chains {verb}s {blank} small shops.",
            "They tried to {verb} {blank} the corruption from the system."
        ],
        options: ["out", "off", "away", "back"]
    },
    {
        verb: "drive", particle: "up", phrase: "drive up", category: "business", level: "high",
        meaning: "To cause something, especially prices, to increase.",
        sentences: [
            "Increased demand is {verb}ing {blank} prices.",
            "The shortage {verb}s {blank} the cost of raw materials.",
            "Speculation {verb}s {blank} property values.",
            "Oil prices were {verb}n {blank} by the conflict."
        ],
        options: ["up", "on", "out", "off"]
    },
    {
        verb: "eat", particle: "in", phrase: "eat in", category: "daily", level: "elementary",
        meaning: "To have a meal at home rather than at a restaurant.",
        sentences: [
            "Shall we {verb} {blank} tonight or go out?",
            "We decided to {verb} {blank} to save money.",
            "They usually {verb} {blank} during the week.",
            "Let's {verb} {blank} — I'll cook something nice."
        ],
        options: ["in", "out", "up", "on"]
    },
    {
        verb: "fight", particle: "back", phrase: "fight back", category: "emotion", level: "middle",
        meaning: "To defend yourself; to resist or retaliate.",
        sentences: [
            "She {verb} {blank} tears as she read the letter.",
            "The villagers decided to {verb} {blank} against the developers.",
            "He's not the type to just give up — he'll {verb} {blank}.",
            "The company is {verb}ing {blank} against the accusations."
        ],
        options: ["back", "off", "on", "out"]
    },
    {
        verb: "fight", particle: "off", phrase: "fight off", category: "daily", level: "middle",
        meaning: "To resist or repel an attack, illness, or unwanted feeling.",
        sentences: [
            "She managed to {verb} {blank} the cold with rest and vitamins.",
            "He {verb} {blank} the mugger and escaped.",
            "I'm trying to {verb} {blank} the urge to eat chocolate.",
            "The immune system {verb}s {blank} infections."
        ],
        options: ["off", "back", "away", "out"]
    },
    {
        verb: "fight", particle: "for", phrase: "fight for", category: "emotion", level: "middle",
        meaning: "To struggle or campaign in order to achieve or keep something.",
        sentences: [
            "They're {verb}ing {blank} equal rights.",
            "She {verb}s {blank} what she believes in.",
            "Workers are {verb}ing {blank} better conditions.",
            "He has been {verb}ing {blank} custody of his children."
        ],
        options: ["for", "over", "about", "with"]
    },
    {
        verb: "fly", particle: "away", phrase: "fly away", category: "daily", level: "elementary",
        meaning: "To depart by flying; to leave through the air.",
        sentences: [
            "The bird {verb} {blank} when I opened the cage.",
            "She wishes she could just {verb} {blank} from her problems.",
            "The balloon {verb} {blank} into the sky.",
            "The butterflies {verb} {blank} south for winter."
        ],
        options: ["away", "off", "out", "up"]
    },
    {
        verb: "fly", particle: "off", phrase: "fly off", category: "daily", level: "middle",
        meaning: "To leave suddenly or quickly; to detach and move through the air.",
        sentences: [
            "His hat {verb} {blank} in the strong wind.",
            "She {verb} {blank} to Paris at a moment's notice.",
            "The lid {verb} {blank} the pot when the pressure built up.",
            "Sparks {verb} {blank} in all directions from the fire."
        ],
        options: ["off", "away", "out", "up"]
    },
    {
        verb: "lay", particle: "into", phrase: "lay into", category: "emotion", level: "college",
        meaning: "To attack someone physically or verbally with great force.",
        sentences: [
            "She really {verb}id {blank} him for forgetting their anniversary.",
            "The critic {verb}id {blank} the film with a scathing review.",
            "He {verb}id {blank} the bully without hesitation.",
            "The boss {verb}id {blank} the team for missing the deadline."
        ],
        options: ["into", "on", "at", "upon"]
    },
    {
        verb: "lay", particle: "on", phrase: "lay on", category: "daily", level: "high",
        meaning: "To provide or organize something, especially food or entertainment.",
        sentences: [
            "They {verb}id {blank} a fantastic buffet for the guests.",
            "The company {verb}id {blank} a bus for the employees.",
            "She {verb}id {blank} a wonderful spread for the party.",
            "They {verb}id {blank} extra trains for the holiday weekend."
        ],
        options: ["on", "out", "in", "up"]
    },
    {
        verb: "lay", particle: "up", phrase: "lay up", category: "daily", level: "high",
        meaning: "To be forced to stay in bed due to illness or injury.",
        sentences: [
            "He was {verb}id {blank} with the flu for a week.",
            "She's been {verb}id {blank} since the car accident.",
            "A bad back {verb}id him {blank} for several days.",
            "I was {verb}id {blank} with a broken ankle all summer."
        ],
        options: ["up", "down", "in", "out"]
    },
    {
        verb: "lead", particle: "on", phrase: "lead on", category: "emotion", level: "high",
        meaning: "To deceive someone into believing something that is not true, especially about your feelings.",
        sentences: [
            "She felt he had {verb} her {blank} about his intentions.",
            "Don't {verb} people {blank} if you're not interested.",
            "He was {verb}ing her {blank} the whole time.",
            "Stop {verb}ing me {blank} and tell me the truth."
        ],
        options: ["on", "along", "in", "up"]
    },
    {
        verb: "lead", particle: "to", phrase: "lead to", category: "academic", level: "middle",
        meaning: "To result in or cause something to happen.",
        sentences: [
            "Smoking can {verb} {blank} serious health problems.",
            "The investigation {verb} {blank} several arrests.",
            "Hard work usually {verb}s {blank} success.",
            "The road {verb}s {blank} the old castle."
        ],
        options: ["to", "into", "up", "on"]
    },
    {
        verb: "lead", particle: "up to", phrase: "lead up to", category: "academic", level: "high",
        meaning: "To happen during the time before an event; to gradually introduce a topic.",
        sentences: [
            "In the weeks {verb}ing {blank} the election, tensions were high.",
            "The events {verb}ing {blank} the war are well documented.",
            "He was clearly {verb}ing {blank} something important.",
            "What were the factors {verb}ing {blank} the crisis?"
        ],
        options: ["up to", "on to", "in to", "along to"]
    },
    {
        verb: "play", particle: "back", phrase: "play back", category: "daily", level: "middle",
        meaning: "To watch or listen to a recording that has been made.",
        sentences: [
            "Let me {verb} {blank} the message so you can hear it.",
            "She {verb}ed {blank} the video to check for errors.",
            "He {verb}ed {blank} the interview recording at home.",
            "Can you {verb} that {blank} once more? I missed it."
        ],
        options: ["back", "on", "out", "over"]
    },
    {
        verb: "play", particle: "off", phrase: "play off", category: "business", level: "high",
        meaning: "To set two people or groups against each other for your own advantage.",
        sentences: [
            "She {verb}ed the two bidders {blank} against each other.",
            "He's clever at {verb}ing people {blank} against one another.",
            "The child {verb}s one parent {blank} against the other.",
            "The company {verb}ed rivals {blank} to get the best deal."
        ],
        options: ["off", "on", "against", "out"]
    },
    {
        verb: "play", particle: "on", phrase: "play on", category: "emotion", level: "high",
        meaning: "To exploit someone's feelings or weaknesses to your advantage.",
        sentences: [
            "The advertisement {verb}s {blank} people's fears.",
            "He {verb}ed {blank} her sympathy to get money.",
            "Politicians often {verb} {blank} voters' emotions.",
            "The con artist {verb}ed {blank} the old woman's loneliness."
        ],
        options: ["on", "off", "up", "with"]
    },
    {
        verb: "pour", particle: "in", phrase: "pour in", category: "daily", level: "middle",
        meaning: "To arrive in large quantities or numbers.",
        sentences: [
            "Donations {verb}ed {blank} after the disaster.",
            "Letters of complaint began to {verb} {blank}.",
            "Tourists {verb} {blank} during the summer months.",
            "Applications {verb}ed {blank} from all over the country."
        ],
        options: ["in", "out", "on", "up"]
    },
    {
        verb: "pour", particle: "out", phrase: "pour out", category: "emotion", level: "middle",
        meaning: "To express feelings or thoughts freely and in great detail.",
        sentences: [
            "She {verb}ed {blank} her heart to her best friend.",
            "He {verb}ed {blank} his troubles over a cup of coffee.",
            "The words just {verb}ed {blank} of her mouth.",
            "People {verb}ed {blank} of the building when the alarm sounded."
        ],
        options: ["out", "in", "off", "away"]
    },
    {
        verb: "pour", particle: "down", phrase: "pour down", category: "daily", level: "middle",
        meaning: "To rain very heavily.",
        sentences: [
            "It's been {verb}ing {blank} all morning.",
            "The rain {verb}ed {blank} as we ran to the car.",
            "It started {verb}ing {blank} just as the picnic began.",
            "Water was {verb}ing {blank} the windows."
        ],
        options: ["down", "in", "out", "on"]
    },
    {
        verb: "ride", particle: "out", phrase: "ride out", category: "business", level: "high",
        meaning: "To survive a difficult situation or period without being badly affected.",
        sentences: [
            "The company managed to {verb} {blank} the recession.",
            "We just have to {verb} {blank} the storm and things will improve.",
            "Small businesses struggled to {verb} {blank} the pandemic.",
            "She {verb} {blank} the controversy with grace."
        ],
        options: ["out", "through", "over", "off"]
    },
    {
        verb: "ride", particle: "on", phrase: "ride on", category: "business", level: "high",
        meaning: "To depend on something for success or survival.",
        sentences: [
            "A lot is {verb}ing {blank} the outcome of this meeting.",
            "The company's future {verb}s {blank} this product launch.",
            "His reputation {verb}s {blank} winning this case.",
            "Everything {verb}s {blank} the next election."
        ],
        options: ["on", "out", "up", "off"]
    },
    {
        verb: "rise", particle: "above", phrase: "rise above", category: "emotion", level: "high",
        meaning: "To not be affected by something bad or to deal with it without stooping to a low level.",
        sentences: [
            "She managed to {verb} {blank} the criticism.",
            "We must {verb} {blank} petty disagreements.",
            "He {verb} {blank} his difficult childhood to become successful.",
            "True leaders {verb} {blank} personal attacks."
        ],
        options: ["above", "over", "beyond", "past"]
    },
    {
        verb: "rise", particle: "up", phrase: "rise up", category: "academic", level: "high",
        meaning: "To rebel or revolt against authority or oppression.",
        sentences: [
            "The people {verb} {blank} against the dictator.",
            "Workers {verb} {blank} to demand better conditions.",
            "Citizens {verb} {blank} in protest across the country.",
            "History shows that oppressed people will eventually {verb} {blank}."
        ],
        options: ["up", "against", "above", "out"]
    },
    {
        verb: "rush", particle: "in", phrase: "rush in", category: "daily", level: "middle",
        meaning: "To enter a place quickly; to act too hastily.",
        sentences: [
            "The paramedics {verb}ed {blank} to help the injured.",
            "Don't {verb} {blank} — think about it carefully first.",
            "She {verb}ed {blank} without knocking on the door.",
            "He tends to {verb} {blank} to things without planning."
        ],
        options: ["in", "into", "on", "out"]
    },
    {
        verb: "rush", particle: "into", phrase: "rush into", category: "daily", level: "middle",
        meaning: "To begin something too quickly without proper thought.",
        sentences: [
            "Don't {verb} {blank} a decision you'll regret.",
            "They {verb}ed {blank} marriage after just three months.",
            "She always {verb}es {blank} things without thinking.",
            "He was warned not to {verb} {blank} buying a house."
        ],
        options: ["into", "in", "on", "to"]
    },
    {
        verb: "rush", particle: "off", phrase: "rush off", category: "daily", level: "middle",
        meaning: "To leave very quickly.",
        sentences: [
            "She {verb}ed {blank} to catch her train.",
            "Sorry, I have to {verb} {blank} — I'm late for a meeting.",
            "He {verb}ed {blank} without finishing his breakfast.",
            "They {verb}ed {blank} as soon as they heard the news."
        ],
        options: ["off", "away", "out", "on"]
    },
    {
        verb: "sail", particle: "through", phrase: "sail through", category: "academic", level: "high",
        meaning: "To pass a test or deal with a situation easily and successfully.",
        sentences: [
            "She {verb}ed {blank} the interview without any difficulty.",
            "He {verb}ed {blank} his exams with top marks.",
            "The bill {verb}ed {blank} parliament without opposition.",
            "She {verb}ed {blank} the driving test on her first attempt."
        ],
        options: ["through", "past", "over", "by"]
    },
    {
        verb: "shake", particle: "off", phrase: "shake off", category: "daily", level: "middle",
        meaning: "To get rid of something unwanted such as an illness, a person, or a feeling.",
        sentences: [
            "I can't seem to {verb} {blank} this cold.",
            "She {verb} {blank} the feeling of being watched.",
            "The spy managed to {verb} {blank} his pursuers.",
            "He's trying to {verb} {blank} his reputation as a troublemaker."
        ],
        options: ["off", "out", "away", "up"]
    },
    {
        verb: "shake", particle: "up", phrase: "shake up", category: "business", level: "high",
        meaning: "To make major changes to an organization; to shock or upset someone.",
        sentences: [
            "The new CEO plans to {verb} {blank} the entire company.",
            "The accident really {verb} her {blank}.",
            "They need to {verb} {blank} the management structure.",
            "The scandal {verb} {blank} the political establishment."
        ],
        options: ["up", "out", "off", "down"]
    },
    {
        verb: "shake", particle: "down", phrase: "shake down", category: "daily", level: "college",
        meaning: "To extort money from someone; to search a person or place thoroughly.",
        sentences: [
            "The gang {verb} local businesses {blank} for protection money.",
            "The guards {verb} {blank} the prisoners' cells.",
            "He was {verb}n {blank} by corrupt officials at the border.",
            "The police {verb} {blank} the car for hidden drugs."
        ],
        options: ["down", "off", "out", "up"]
    },
    {
        verb: "shoot", particle: "down", phrase: "shoot down", category: "business", level: "middle",
        meaning: "To reject an idea or suggestion; to destroy an aircraft in flight.",
        sentences: [
            "Every proposal I make gets {verb} {blank} by the committee.",
            "She {verb} {blank} his idea without even considering it.",
            "Two enemy planes were {verb} {blank} during the battle.",
            "Don't {verb} {blank} the suggestion before hearing the details."
        ],
        options: ["down", "off", "out", "up"]
    },
    {
        verb: "shoot", particle: "up", phrase: "shoot up", category: "business", level: "high",
        meaning: "To increase very quickly and dramatically.",
        sentences: [
            "Prices have {verb} {blank} since last year.",
            "The child has {verb} {blank} — he's so tall now!",
            "Unemployment {verb} {blank} during the recession.",
            "The stock {verb} {blank} after the positive earnings report."
        ],
        options: ["up", "off", "out", "through"]
    },
    {
        verb: "shout", particle: "out", phrase: "shout out", category: "daily", level: "middle",
        meaning: "To say something loudly so it can be heard; to give public recognition.",
        sentences: [
            "She {verb}ed {blank} his name across the crowded room.",
            "I want to {verb} {blank} to everyone who helped with this event.",
            "He {verb}ed {blank} the answer before anyone else.",
            "The DJ gave a {verb}-{blank} to the birthday girl."
        ],
        options: ["out", "at", "off", "up"]
    },
    {
        verb: "shout", particle: "down", phrase: "shout down", category: "emotion", level: "high",
        meaning: "To prevent someone from speaking by shouting louder than them.",
        sentences: [
            "The protesters {verb}ed {blank} the politician during his speech.",
            "She was {verb}ed {blank} every time she tried to speak.",
            "The crowd {verb}ed {blank} the unpopular proposal.",
            "Don't try to {verb} me {blank} — let me finish."
        ],
        options: ["down", "out", "off", "at"]
    },
    {
        verb: "sink", particle: "in", phrase: "sink in", category: "emotion", level: "middle",
        meaning: "To be fully understood or realized gradually.",
        sentences: [
            "It took a moment for the news to {verb} {blank}.",
            "The reality of the situation hasn't {verb} {blank} yet.",
            "Let that {verb} {blank} for a moment before you respond.",
            "When the truth finally {verb} {blank}, she started to cry."
        ],
        options: ["in", "down", "through", "into"]
    },
    {
        verb: "sleep", particle: "in", phrase: "sleep in", category: "daily", level: "elementary",
        meaning: "To sleep later than usual in the morning.",
        sentences: [
            "It's Saturday — I'm going to {verb} {blank}.",
            "She {verb} {blank} and missed her first class.",
            "We usually {verb} {blank} on weekends.",
            "I accidentally {verb} {blank} and was late for work."
        ],
        options: ["in", "on", "out", "over"]
    },
    {
        verb: "sleep", particle: "over", phrase: "sleep over", category: "daily", level: "elementary",
        meaning: "To stay the night at someone else's house.",
        sentences: [
            "Can I {verb} {blank} at your house tonight?",
            "The children love to {verb} {blank} at their cousins' house.",
            "She {verb} {blank} because it was too late to drive home.",
            "We used to {verb} {blank} at each other's houses all the time."
        ],
        options: ["over", "in", "out", "on"]
    },
    {
        verb: "sleep", particle: "through", phrase: "sleep through", category: "daily", level: "middle",
        meaning: "To remain asleep despite noise or disturbance.",
        sentences: [
            "How did you {verb} {blank} that thunderstorm?",
            "The baby {verb} {blank} the entire night for the first time.",
            "He {verb} {blank} his alarm again this morning.",
            "She could {verb} {blank} an earthquake."
        ],
        options: ["through", "over", "past", "in"]
    },
    {
        verb: "sleep", particle: "off", phrase: "sleep off", category: "daily", level: "middle",
        meaning: "To recover from something, especially illness or the effects of alcohol, by sleeping.",
        sentences: [
            "He went to bed to {verb} {blank} the jet lag.",
            "She needs to {verb} {blank} the effects of the anesthesia.",
            "I'll just {verb} it {blank} and feel better tomorrow.",
            "He was trying to {verb} {blank} last night's party."
        ],
        options: ["off", "out", "away", "through"]
    },
    {
        verb: "slip", particle: "away", phrase: "slip away", category: "daily", level: "middle",
        meaning: "To leave quietly without being noticed; to gradually disappear.",
        sentences: [
            "She managed to {verb} {blank} from the party unnoticed.",
            "The opportunity {verb}ped {blank} before he could act.",
            "Time seems to just {verb} {blank} when you're having fun.",
            "The old man peacefully {verb}ped {blank} in his sleep."
        ],
        options: ["away", "off", "out", "by"]
    },
    {
        verb: "slip", particle: "in", phrase: "slip in", category: "daily", level: "middle",
        meaning: "To enter quietly or without being noticed; to mention something casually.",
        sentences: [
            "She {verb}ped {blank} through the back door.",
            "He {verb}ped {blank} a comment about the raise.",
            "I managed to {verb} {blank} just before the doors closed.",
            "She {verb}ped {blank} a reference to her book during the interview."
        ],
        options: ["in", "into", "by", "through"]
    },
    {
        verb: "slip", particle: "out", phrase: "slip out", category: "daily", level: "middle",
        meaning: "To leave quietly; to say something accidentally.",
        sentences: [
            "The secret {verb}ped {blank} before she could stop herself.",
            "He {verb}ped {blank} of the meeting to take a call.",
            "I'm just going to {verb} {blank} for some fresh air.",
            "The words {verb}ped {blank} before I realized what I was saying."
        ],
        options: ["out", "off", "away", "by"]
    },
    {
        verb: "slip", particle: "up", phrase: "slip up", category: "daily", level: "middle",
        meaning: "To make a careless mistake.",
        sentences: [
            "I {verb}ped {blank} and gave them the wrong date.",
            "Be careful not to {verb} {blank} during the presentation.",
            "She {verb}ped {blank} by mentioning the surprise party.",
            "Everyone {verb}s {blank} from time to time."
        ],
        options: ["up", "out", "off", "in"]
    },
    {
        verb: "spell", particle: "out", phrase: "spell out", category: "business", level: "middle",
        meaning: "To explain something in a very clear and detailed way.",
        sentences: [
            "Do I have to {verb} it {blank} for you?",
            "The contract {verb}s {blank} the terms very clearly.",
            "She {verb}ed {blank} exactly what was expected of the team.",
            "Let me {verb} {blank} what will happen if we miss the deadline."
        ],
        options: ["out", "off", "up", "through"]
    },
    {
        verb: "start", particle: "off", phrase: "start off", category: "daily", level: "middle",
        meaning: "To begin something in a particular way.",
        sentences: [
            "Let's {verb} {blank} with a brief introduction.",
            "The day {verb}ed {blank} well but ended terribly.",
            "She {verb}ed {blank} as an intern and became CEO.",
            "I'd like to {verb} {blank} by thanking everyone for coming."
        ],
        options: ["off", "up", "on", "out"]
    },
    {
        verb: "start", particle: "out", phrase: "start out", category: "daily", level: "middle",
        meaning: "To begin a journey, career, or process.",
        sentences: [
            "They {verb}ed {blank} as a small family business.",
            "She {verb}ed {blank} wanting to be a doctor.",
            "We {verb}ed {blank} early to avoid the traffic.",
            "He {verb}ed {blank} in sales before moving to marketing."
        ],
        options: ["out", "off", "up", "on"]
    },
    {
        verb: "start", particle: "up", phrase: "start up", category: "business", level: "middle",
        meaning: "To begin operating; to establish a new business.",
        sentences: [
            "{verb} {blank} the engine and let it warm up.",
            "She {verb}ed {blank} her own consulting firm last year.",
            "The machine failed to {verb} {blank} this morning.",
            "He's planning to {verb} {blank} a restaurant in town."
        ],
        options: ["up", "off", "on", "out"]
    },
    {
        verb: "start", particle: "over", phrase: "start over", category: "daily", level: "middle",
        meaning: "To begin something again from the very beginning.",
        sentences: [
            "The essay was terrible, so she decided to {verb} {blank}.",
            "After the divorce, he wanted to {verb} {blank} in a new city.",
            "If the dough doesn't rise, you'll have to {verb} {blank}.",
            "Sometimes life gives you a chance to {verb} {blank}."
        ],
        options: ["over", "again", "up", "out"]
    },
    {
        verb: "stay", particle: "away", phrase: "stay away", category: "daily", level: "elementary",
        meaning: "To not go near or not get involved with something or someone.",
        sentences: [
            "{verb} {blank} from the edge of the cliff!",
            "She told the children to {verb} {blank} from the river.",
            "I'd {verb} {blank} from that neighborhood at night.",
            "He was warned to {verb} {blank} from the investigation."
        ],
        options: ["away", "back", "off", "out"]
    },
    {
        verb: "stay", particle: "behind", phrase: "stay behind", category: "daily", level: "middle",
        meaning: "To remain in a place after others have left.",
        sentences: [
            "The teacher asked two students to {verb} {blank} after class.",
            "She {verb}ed {blank} to finish the report.",
            "He {verb}ed {blank} while the others went to lunch.",
            "Who wants to {verb} {blank} and clean up?"
        ],
        options: ["behind", "back", "in", "on"]
    },
    {
        verb: "stay", particle: "in", phrase: "stay in", category: "daily", level: "elementary",
        meaning: "To remain at home, especially in the evening.",
        sentences: [
            "It's raining — let's just {verb} {blank} tonight.",
            "She decided to {verb} {blank} and watch a movie.",
            "I'm too tired to go out; I'll {verb} {blank}.",
            "We {verb}ed {blank} all weekend because of the storm."
        ],
        options: ["in", "on", "back", "up"]
    },
    {
        verb: "stay", particle: "on", phrase: "stay on", category: "business", level: "middle",
        meaning: "To continue in a job, school, or place longer than planned.",
        sentences: [
            "She was asked to {verb} {blank} as manager for another year.",
            "He decided to {verb} {blank} at university to do a master's.",
            "Will you {verb} {blank} after the meeting to help clean up?",
            "The temp worker was invited to {verb} {blank} permanently."
        ],
        options: ["on", "in", "at", "for"]
    },
    {
        verb: "stay", particle: "out", phrase: "stay out", category: "daily", level: "elementary",
        meaning: "To remain away from home, especially late at night.",
        sentences: [
            "Don't {verb} {blank} too late — it's a school night.",
            "They {verb}ed {blank} until three in the morning.",
            "Her parents told her not to {verb} {blank} past midnight.",
            "He {verb}s {blank} late every Friday with his friends."
        ],
        options: ["out", "away", "off", "up"]
    },
    {
        verb: "stay", particle: "up", phrase: "stay up", category: "daily", level: "elementary",
        meaning: "To remain awake past one's usual bedtime.",
        sentences: [
            "The children begged to {verb} {blank} and watch the fireworks.",
            "She {verb}ed {blank} all night studying for the exam.",
            "I can't {verb} {blank} much longer — I'm exhausted.",
            "We {verb}ed {blank} to watch the New Year countdown."
        ],
        options: ["up", "on", "out", "in"]
    },
    {
        verb: "stop", particle: "by", phrase: "stop by", category: "daily", level: "middle",
        meaning: "To visit someone or a place briefly and informally.",
        sentences: [
            "I'll {verb} {blank} your office on my way out.",
            "She {verb}ped {blank} to drop off a package.",
            "Feel free to {verb} {blank} whenever you're in the area.",
            "He {verb}ped {blank} the bakery to pick up some bread."
        ],
        options: ["by", "in", "at", "over"]
    },
    {
        verb: "stop", particle: "off", phrase: "stop off", category: "travel", level: "middle",
        meaning: "To make a short visit or stop at a place during a longer journey.",
        sentences: [
            "We {verb}ped {blank} in Paris on the way to Rome.",
            "Let's {verb} {blank} at the gas station before the highway.",
            "She {verb}ped {blank} to see her friend on the way home.",
            "They {verb}ped {blank} for lunch at a roadside café."
        ],
        options: ["off", "by", "over", "in"]
    },
    {
        verb: "stop", particle: "over", phrase: "stop over", category: "travel", level: "middle",
        meaning: "To stay somewhere for a short time during a long journey.",
        sentences: [
            "We {verb}ped {blank} in Dubai on our way to Australia.",
            "The flight {verb}s {blank} in Singapore for refueling.",
            "Would you like to {verb} {blank} in London for a night?",
            "They {verb}ped {blank} at their aunt's house during the road trip."
        ],
        options: ["over", "off", "by", "in"]
    },
    {
        verb: "strike", particle: "back", phrase: "strike back", category: "emotion", level: "high",
        meaning: "To attack in return; to retaliate against someone.",
        sentences: [
            "The rebels {verb} {blank} against the government forces.",
            "She {verb} {blank} at her critics with a powerful speech.",
            "The company {verb} {blank} with a lawsuit of its own.",
            "When attacked, it's natural to want to {verb} {blank}."
        ],
        options: ["back", "out", "down", "at"]
    },
    {
        verb: "strike", particle: "down", phrase: "strike down", category: "academic", level: "college",
        meaning: "To declare a law invalid; to kill or cause to fall.",
        sentences: [
            "The court {verb} {blank} the controversial law.",
            "The disease {verb} him {blank} in his prime.",
            "Several regulations were {verb} {blank} by the judge.",
            "Lightning {verb} {blank} the old oak tree."
        ],
        options: ["down", "out", "off", "back"]
    },
    {
        verb: "strike", particle: "out", phrase: "strike out", category: "daily", level: "high",
        meaning: "To fail in an attempt; to start doing something independently.",
        sentences: [
            "He {verb} {blank} with every girl he talked to at the party.",
            "She decided to {verb} {blank} on her own and start a business.",
            "The batter {verb} {blank} three times in the game.",
            "After years at the firm, he {verb} {blank} independently."
        ],
        options: ["out", "off", "through", "up"]
    },
    {
        verb: "strike", particle: "up", phrase: "strike up", category: "daily", level: "high",
        meaning: "To begin a conversation or friendship, often with a stranger.",
        sentences: [
            "She {verb} {blank} a conversation with the man next to her.",
            "They {verb} {blank} a friendship during the conference.",
            "It's easy to {verb} {blank} a chat at the local pub.",
            "The band {verb} {blank} a lively tune."
        ],
        options: ["up", "out", "on", "off"]
    },
    {
        verb: "sweep", particle: "up", phrase: "sweep up", category: "daily", level: "elementary",
        meaning: "To clean a floor or area using a broom.",
        sentences: [
            "Can you {verb} {blank} the broken glass?",
            "She {verb} {blank} the leaves in the garden.",
            "He {verb} {blank} the kitchen floor after dinner.",
            "The janitor {verb}s {blank} the hallway every evening."
        ],
        options: ["up", "out", "off", "away"]
    },
    {
        verb: "sweep", particle: "away", phrase: "sweep away", category: "emotion", level: "high",
        meaning: "To remove completely; to impress or affect strongly.",
        sentences: [
            "The flood {verb} {blank} everything in its path.",
            "She was {verb} {blank} by his romantic gesture.",
            "The revolution {verb} {blank} the old regime.",
            "The audience was {verb} {blank} by the performance."
        ],
        options: ["away", "up", "off", "out"]
    },
    {
        verb: "tick", particle: "off", phrase: "tick off", category: "daily", level: "middle",
        meaning: "To annoy someone; to mark items on a list as completed.",
        sentences: [
            "His constant lateness really {verb}s me {blank}.",
            "{verb} {blank} each item as you complete it.",
            "She was {verb}ed {blank} when they cancelled the meeting.",
            "I've {verb}ed {blank} everything on the shopping list."
        ],
        options: ["off", "on", "out", "up"]
    },
    {
        verb: "tick", particle: "over", phrase: "tick over", category: "business", level: "high",
        meaning: "To operate at a basic level; to continue functioning without major activity.",
        sentences: [
            "The engine was {verb}ing {blank} quietly.",
            "The business is just {verb}ing {blank} — nothing exciting happening.",
            "Sales are {verb}ing {blank} but not growing.",
            "The company {verb}s {blank} while the CEO is on leave."
        ],
        options: ["over", "on", "along", "by"]
    },
    {
        verb: "tip", particle: "off", phrase: "tip off", category: "daily", level: "high",
        meaning: "To give someone secret information or a warning.",
        sentences: [
            "Someone {verb}ped {blank} the police about the robbery.",
            "A journalist was {verb}ped {blank} about the scandal.",
            "Who {verb}ped them {blank} about the surprise inspection?",
            "An anonymous caller {verb}ped {blank} the authorities."
        ],
        options: ["off", "on", "out", "in"]
    },
    {
        verb: "tip", particle: "over", phrase: "tip over", category: "daily", level: "elementary",
        meaning: "To fall or knock something so it falls from an upright position.",
        sentences: [
            "Be careful not to {verb} {blank} your glass.",
            "The vase {verb}ped {blank} and shattered on the floor.",
            "The canoe {verb}ped {blank} in the rough water.",
            "The child accidentally {verb}ped the lamp {blank}."
        ],
        options: ["over", "off", "down", "out"]
    },
    {
        verb: "trade", particle: "in", phrase: "trade in", category: "business", level: "middle",
        meaning: "To give an old item as partial payment for a new one.",
        sentences: [
            "I {verb}d {blank} my old car for a newer model.",
            "You can {verb} {blank} your used phone at the store.",
            "She {verb}d {blank} her laptop when upgrading.",
            "They offer good prices if you {verb} {blank} your old equipment."
        ],
        options: ["in", "off", "up", "over"]
    },
    {
        verb: "trade", particle: "off", phrase: "trade off", category: "business", level: "high",
        meaning: "To exchange one thing for another, accepting a disadvantage in one area for an advantage in another.",
        sentences: [
            "You have to {verb} {blank} speed against accuracy.",
            "Workers {verb} {blank} higher pay for better benefits.",
            "She {verb}d {blank} a shorter commute for a smaller apartment.",
            "There's always something to {verb} {blank} in these decisions."
        ],
        options: ["off", "in", "on", "away"]
    },
    {
        verb: "trip", particle: "up", phrase: "trip up", category: "daily", level: "middle",
        meaning: "To make a mistake; to cause someone to stumble or make an error.",
        sentences: [
            "The tricky question {verb}ped {blank} most of the students.",
            "Don't let the pressure {verb} you {blank}.",
            "She {verb}ped {blank} over an uneven paving stone.",
            "The unexpected quiz {verb}ped {blank} the entire class."
        ],
        options: ["up", "over", "on", "out"]
    },
    {
        verb: "trip", particle: "over", phrase: "trip over", category: "daily", level: "elementary",
        meaning: "To catch your foot on something and stumble or fall.",
        sentences: [
            "I {verb}ped {blank} the cat in the dark.",
            "She {verb}ped {blank} a cable on the office floor.",
            "He {verb}ped {blank} his own shoelaces.",
            "Be careful not to {verb} {blank} that step."
        ],
        options: ["over", "up", "on", "into"]
    },
    {
        verb: "wash", particle: "away", phrase: "wash away", category: "daily", level: "middle",
        meaning: "To be removed or destroyed by water; to eliminate a feeling.",
        sentences: [
            "The heavy rain {verb}ed {blank} the topsoil.",
            "She hoped the bath would {verb} {blank} her stress.",
            "The bridge was {verb}ed {blank} by the flood.",
            "Let the ocean waves {verb} {blank} your worries."
        ],
        options: ["away", "out", "off", "down"]
    },
    {
        verb: "wash", particle: "out", phrase: "wash out", category: "daily", level: "middle",
        meaning: "To remove a stain by washing; to cancel due to rain.",
        sentences: [
            "This stain won't {verb} {blank} no matter what I try.",
            "The cricket match was {verb}ed {blank} by rain.",
            "The color {verb}es {blank} after a few washes.",
            "The picnic was {verb}ed {blank} by a sudden downpour."
        ],
        options: ["out", "off", "away", "up"]
    },
    {
        verb: "wash", particle: "off", phrase: "wash off", category: "daily", level: "elementary",
        meaning: "To remove something by washing the surface.",
        sentences: [
            "This paint {verb}es {blank} easily with water.",
            "{verb} {blank} the mud from your shoes before coming inside.",
            "She {verb}ed {blank} the makeup before going to bed.",
            "The dirt will {verb} {blank} in the rain."
        ],
        options: ["off", "out", "away", "up"]
    },
    {
        verb: "weed", particle: "out", phrase: "weed out", category: "business", level: "high",
        meaning: "To remove unwanted or unsuitable people or things from a group.",
        sentences: [
            "The first round of interviews will {verb} {blank} weaker candidates.",
            "We need to {verb} {blank} the errors in this data.",
            "The new rules are designed to {verb} {blank} cheaters.",
            "She {verb}ed {blank} the dead plants from the flower bed."
        ],
        options: ["out", "off", "away", "through"]
    },
    {
        verb: "whip", particle: "up", phrase: "whip up", category: "daily", level: "middle",
        meaning: "To prepare food quickly; to deliberately excite or provoke an emotion.",
        sentences: [
            "She can {verb} {blank} a meal in fifteen minutes.",
            "The politician tried to {verb} {blank} support for the campaign.",
            "Let me {verb} {blank} some scrambled eggs for breakfast.",
            "The media {verb}ped {blank} public outrage over the incident."
        ],
        options: ["up", "out", "off", "together"]
    },
    {
        verb: "wipe", particle: "away", phrase: "wipe away", category: "emotion", level: "middle",
        meaning: "To remove something by wiping, especially tears.",
        sentences: [
            "She {verb}d {blank} her tears and smiled bravely.",
            "He {verb}d {blank} the sweat from his forehead.",
            "{verb} {blank} the dust from the shelf, please.",
            "Time doesn't {verb} {blank} the pain of losing someone."
        ],
        options: ["away", "off", "out", "up"]
    },
    {
        verb: "wipe", particle: "down", phrase: "wipe down", category: "daily", level: "middle",
        meaning: "To clean a surface thoroughly by wiping it.",
        sentences: [
            "Please {verb} {blank} the kitchen counters after cooking.",
            "She {verb}d {blank} the table before setting it for dinner.",
            "The waiter {verb}d {blank} the table between customers.",
            "Don't forget to {verb} {blank} the equipment after use."
        ],
        options: ["down", "off", "out", "up"]
    },
    {
        verb: "yield", particle: "to", phrase: "yield to", category: "academic", level: "college",
        meaning: "To give way to pressure, temptation, or a superior force.",
        sentences: [
            "She finally {verb}ed {blank} their demands.",
            "Don't {verb} {blank} the temptation to cheat.",
            "The old system gradually {verb}ed {blank} modern technology.",
            "He refused to {verb} {blank} pressure from his rivals."
        ],
        options: ["to", "in", "for", "at"]
    },
    {
        verb: "store", particle: "up", phrase: "store up", category: "daily", level: "high",
        meaning: "To accumulate and keep something for future use; to accumulate emotions.",
        sentences: [
            "Squirrels {verb} {blank} nuts for the winter.",
            "She's been {verb}ing {blank} resentment for years.",
            "We need to {verb} {blank} enough supplies for the trip.",
            "He {verb}d {blank} all his anger until he finally exploded."
        ],
        options: ["up", "away", "in", "out"]
    },
    {
        verb: "rule", particle: "on", phrase: "rule on", category: "academic", level: "college",
        meaning: "To make an official decision about a legal matter.",
        sentences: [
            "The judge will {verb} {blank} the case next week.",
            "The court has yet to {verb} {blank} the appeal.",
            "The committee {verb}d {blank} the dispute in our favor.",
            "When will the Supreme Court {verb} {blank} this issue?"
        ],
        options: ["on", "over", "for", "about"]
    },
    {
        verb: "stamp", particle: "on", phrase: "stamp on", category: "daily", level: "high",
        meaning: "To suppress or put an end to something forcefully.",
        sentences: [
            "The government wants to {verb} {blank} corruption.",
            "She {verb}ed {blank} the rumor before it spread.",
            "They {verb}ed {blank} any sign of dissent immediately.",
            "The authorities {verb}ed {blank} the illegal trade."
        ],
        options: ["on", "out", "down", "off"]
    },
    {
        verb: "ask", particle: "back", phrase: "ask back", category: "daily", level: "middle",
        meaning: "To invite someone to return or to come to one's home.",
        sentences: [
            "She {verb}ed him {blank} for a second date.",
            "After the show, we {verb}ed our friends {blank} for drinks.",
            "He was so charming she {verb}ed him {blank}.",
            "They {verb}ed us {blank} to their house for dinner."
        ],
        options: ["back", "in", "over", "out"]
    },
    {
        verb: "blow", particle: "in", phrase: "blow in", category: "daily", level: "high",
        meaning: "To arrive unexpectedly at a place.",
        sentences: [
            "My cousin {verb} {blank} from Australia unannounced.",
            "A stranger {verb} {blank} and sat down at the bar.",
            "She just {verb} {blank} like she owned the place.",
            "Who {verb} {blank} this time?"
        ],
        options: ["in", "up", "by", "through"]
    },
    {
        verb: "bow", particle: "down", phrase: "bow down", category: "emotion", level: "high",
        meaning: "To show great respect or submission to someone.",
        sentences: [
            "The subjects {verb}ed {blank} before the queen.",
            "I refuse to {verb} {blank} to anyone.",
            "They {verb}ed {blank} in reverence at the temple.",
            "He expects everyone to {verb} {blank} to his authority."
        ],
        options: ["down", "out", "in", "over"]
    },
    {
        verb: "bow", particle: "out", phrase: "bow out", category: "business", level: "high",
        meaning: "To withdraw from a commitment, competition, or role gracefully.",
        sentences: [
            "She decided to {verb} {blank} of the race due to injury.",
            "The CEO {verb}ed {blank} after twenty years at the company.",
            "He {verb}ed {blank} gracefully from the competition.",
            "It's time for me to {verb} {blank} and let someone younger take charge."
        ],
        options: ["out", "down", "off", "away"]
    },
    {
        verb: "break", particle: "free", phrase: "break free", category: "emotion", level: "middle",
        meaning: "To escape from a situation, constraint, or physical hold.",
        sentences: [
            "She {verb} {blank} from the ropes and escaped.",
            "He finally {verb} {blank} of his toxic relationship.",
            "The dog {verb} {blank} from its leash.",
            "It's time to {verb} {blank} from old habits."
        ],
        options: ["free", "away", "out", "loose"]
    },
    {
        verb: "bring", particle: "together", phrase: "bring together", category: "emotion", level: "middle",
        meaning: "To unite people; to cause people to meet and work with each other.",
        sentences: [
            "The festival {verb}s {blank} artists from around the world.",
            "Music has the power to {verb} people {blank}.",
            "The project {verb}s {blank} experts from many fields.",
            "Tragedy often {verb}s families {blank}."
        ],
        options: ["together", "along", "around", "about"]
    },
    {
        verb: "burst", particle: "out", phrase: "burst out", category: "emotion", level: "middle",
        meaning: "To suddenly start doing something, especially laughing or crying.",
        sentences: [
            "She {verb} {blank} laughing at the joke.",
            "He {verb} {blank} crying when he heard the news.",
            "The whole class {verb} {blank} laughing.",
            "She {verb} {blank}, 'That's not true!'"
        ],
        options: ["out", "up", "in", "into"]
    },
    {
        verb: "burst", particle: "into", phrase: "burst into", category: "emotion", level: "middle",
        meaning: "To suddenly enter a room forcefully; to suddenly begin to cry, laugh, etc.",
        sentences: [
            "She {verb} {blank} the room demanding answers.",
            "The child {verb} {blank} tears when scolded.",
            "The audience {verb} {blank} applause.",
            "He {verb} {blank} the office without knocking."
        ],
        options: ["into", "in", "out", "through"]
    },
    {
        verb: "clue", particle: "in", phrase: "clue in", category: "daily", level: "high",
        meaning: "To inform someone about something they do not know.",
        sentences: [
            "Can someone {verb} me {blank} on what's happening?",
            "She {verb}d him {blank} on the office gossip.",
            "Nobody bothered to {verb} me {blank} about the change of plans.",
            "Let me {verb} you {blank} — the meeting was moved to Tuesday."
        ],
        options: ["in", "up", "on", "out"]
    },
    {
        verb: "care", particle: "for", phrase: "care for", category: "daily", level: "middle",
        meaning: "To look after someone or something; to like or have affection for.",
        sentences: [
            "She {verb}s {blank} her elderly parents at home.",
            "Would you {verb} {blank} a cup of tea?",
            "He never really {verb}d {blank} classical music.",
            "The nurse {verb}s {blank} the patients with great dedication."
        ],
        options: ["for", "about", "of", "with"]
    },
    {
        verb: "chain", particle: "up", phrase: "chain up", category: "daily", level: "high",
        meaning: "To fasten someone or something with a chain to restrict movement.",
        sentences: [
            "They {verb}ed {blank} the bicycles outside the shop.",
            "The dog was {verb}ed {blank} in the yard.",
            "In medieval times, prisoners were {verb}ed {blank} in dungeons.",
            "Don't forget to {verb} {blank} your bike before going inside."
        ],
        options: ["up", "down", "on", "to"]
    },
    {
        verb: "chill", particle: "out", phrase: "chill out", category: "emotion", level: "elementary",
        meaning: "To relax and stop feeling anxious or angry (informal).",
        sentences: [
            "Just {verb} {blank} — everything will be fine.",
            "We spent the afternoon {verb}ing {blank} by the pool.",
            "He needs to {verb} {blank} and stop worrying so much.",
            "Let's {verb} {blank} at home this weekend."
        ],
        options: ["out", "off", "down", "up"]
    },
    {
        verb: "come", particle: "out with", phrase: "come out with", category: "daily", level: "high",
        meaning: "To say something suddenly or unexpectedly.",
        sentences: [
            "She {verb}s {blank} the funniest remarks.",
            "You never know what he's going to {verb} {blank} next.",
            "He {verb} {blank} a surprising confession.",
            "The child {verb} {blank} the most adorable things."
        ],
        options: ["out with", "up with", "along with", "on with"]
    },
    {
        verb: "come", particle: "under", phrase: "come under", category: "business", level: "high",
        meaning: "To be subjected to something, especially criticism, pressure, or attack.",
        sentences: [
            "The company has {verb} {blank} fire for its environmental record.",
            "She {verb} {blank} pressure to resign.",
            "The project {verb}s {blank} the finance department's jurisdiction.",
            "He {verb} {blank} scrutiny for his spending habits."
        ],
        options: ["under", "into", "upon", "over"]
    },
    {
        verb: "cook", particle: "up", phrase: "cook up", category: "daily", level: "middle",
        meaning: "To prepare food; to invent a story or scheme (often dishonest).",
        sentences: [
            "She {verb}ed {blank} a delicious stir-fry for dinner.",
            "He {verb}ed {blank} an excuse for being late.",
            "They {verb}ed {blank} a plan to surprise their teacher.",
            "I wonder what scheme he's {verb}ing {blank} now."
        ],
        options: ["up", "out", "off", "in"]
    },
    {
        verb: "count", particle: "up", phrase: "count up", category: "business", level: "middle",
        meaning: "To add up or calculate the total of something.",
        sentences: [
            "Let's {verb} {blank} all the votes before announcing the result.",
            "She {verb}ed {blank} the receipts at the end of the day.",
            "Have you {verb}ed {blank} the number of attendees?",
            "He {verb}ed {blank} his savings and was pleasantly surprised."
        ],
        options: ["up", "out", "in", "down"]
    },
    {
        verb: "creep", particle: "up", phrase: "creep up", category: "daily", level: "high",
        meaning: "To gradually increase; to approach someone quietly without being noticed.",
        sentences: [
            "Inflation has been {verb}ing {blank} steadily this year.",
            "He {verb}t {blank} behind her and tapped her shoulder.",
            "Costs are {verb}ing {blank} faster than expected.",
            "Old age has a way of {verb}ing {blank} on you."
        ],
        options: ["up", "in", "on", "along"]
    },
    {
        verb: "cry", particle: "out", phrase: "cry out", category: "emotion", level: "middle",
        meaning: "To shout or scream because of pain, fear, or surprise.",
        sentences: [
            "She {verb}ied {blank} in pain when she twisted her ankle.",
            "He {verb}ied {blank} for help but no one heard.",
            "The children {verb}ied {blank} with excitement.",
            "The old building {verb}ies {blank} for renovation."
        ],
        options: ["out", "off", "up", "away"]
    },
    {
        verb: "doze", particle: "off", phrase: "doze off", category: "daily", level: "middle",
        meaning: "To fall asleep gradually, especially without intending to.",
        sentences: [
            "I {verb}d {blank} during the boring lecture.",
            "She {verb}d {blank} on the sofa while watching TV.",
            "He {verb}d {blank} in the middle of the meeting.",
            "Try not to {verb} {blank} while driving."
        ],
        options: ["off", "out", "away", "in"]
    },
    {
        verb: "drag", particle: "out", phrase: "drag out", category: "daily", level: "high",
        meaning: "To make something last longer than necessary.",
        sentences: [
            "The lawyer tried to {verb} {blank} the proceedings.",
            "Let's not {verb} this {blank} — just make a decision.",
            "The meeting was {verb}ged {blank} for three hours.",
            "He {verb}ged {blank} the goodbye longer than needed."
        ],
        options: ["out", "on", "along", "through"]
    },
    {
        verb: "drop", particle: "around", phrase: "drop around", category: "daily", level: "middle",
        meaning: "To visit someone casually and without a formal arrangement.",
        sentences: [
            "Feel free to {verb} {blank} anytime.",
            "She {verb}ped {blank} to return the book she borrowed.",
            "My neighbor {verb}s {blank} for coffee most mornings.",
            "Why don't you {verb} {blank} this weekend?"
        ],
        options: ["around", "by", "in", "over"]
    },
    {
        verb: "dumb", particle: "down", phrase: "dumb down", category: "academic", level: "college",
        meaning: "To simplify something excessively, making it less intellectually demanding.",
        sentences: [
            "Critics say TV has been {verb}ed {blank} over the decades.",
            "Don't {verb} {blank} the content — our readers are intelligent.",
            "The textbook has been {verb}ed {blank} for a younger audience.",
            "Some argue that social media {verb}s {blank} political discourse."
        ],
        options: ["down", "out", "off", "up"]
    },
    {
        verb: "face", particle: "up", phrase: "face up", category: "emotion", level: "high",
        meaning: "To accept and deal with something difficult or unpleasant.",
        sentences: [
            "You need to {verb} {blank} to your responsibilities.",
            "It's time to {verb} {blank} to the truth.",
            "She finally {verb}d {blank} to the fact that she needed help.",
            "He refused to {verb} {blank} to the consequences of his actions."
        ],
        options: ["up", "on", "off", "out"]
    },
    {
        verb: "farm", particle: "out", phrase: "farm out", category: "business", level: "high",
        meaning: "To send work out to be done by others, especially to external companies.",
        sentences: [
            "The company {verb}s {blank} most of its IT work.",
            "They {verb}ed {blank} the design work to a freelancer.",
            "We need to {verb} {blank} some of these projects.",
            "Many factories {verb} {blank} production to cheaper countries."
        ],
        options: ["out", "off", "over", "away"]
    },
    {
        verb: "flick", particle: "through", phrase: "flick through", category: "daily", level: "middle",
        meaning: "To quickly look at the pages of a book, magazine, or document.",
        sentences: [
            "She {verb}ed {blank} the magazine while waiting.",
            "He {verb}ed {blank} the channels looking for something to watch.",
            "I {verb}ed {blank} the report quickly before the meeting.",
            "She sat {verb}ing {blank} a fashion catalogue."
        ],
        options: ["through", "over", "past", "by"]
    },
    {
        verb: "flood", particle: "in", phrase: "flood in", category: "daily", level: "high",
        meaning: "To arrive in very large numbers or quantities.",
        sentences: [
            "Complaints {verb}ed {blank} after the show aired.",
            "Orders have been {verb}ing {blank} since the sale started.",
            "Refugees were {verb}ing {blank} from the war zone.",
            "Donations {verb}ed {blank} from all over the world."
        ],
        options: ["in", "out", "over", "through"]
    },
    {
        verb: "fork", particle: "over", phrase: "fork over", category: "business", level: "high",
        meaning: "To pay money reluctantly, especially a large amount.",
        sentences: [
            "We had to {verb} {blank} $500 for the repair.",
            "He was forced to {verb} {blank} the money he owed.",
            "I can't believe I have to {verb} {blank} so much for parking.",
            "She {verb}ed {blank} the cash with a heavy sigh."
        ],
        options: ["over", "out", "up", "off"]
    },
    {
        verb: "flesh", particle: "out", phrase: "flesh out", category: "business", level: "high",
        meaning: "To add more details or substance to an idea, plan, or argument.",
        sentences: [
            "We need to {verb} {blank} this proposal before the meeting.",
            "She {verb}ed {blank} the outline into a full report.",
            "Can you {verb} {blank} the marketing section a bit more?",
            "The author {verb}ed {blank} the character's backstory in the sequel."
        ],
        options: ["out", "up", "in", "off"]
    },
    {
        verb: "gang", particle: "up on", phrase: "gang up on", category: "emotion", level: "middle",
        meaning: "To join together as a group to oppose or attack someone.",
        sentences: [
            "The other kids used to {verb} {blank} him at school.",
            "It felt like everyone was {verb}ing {blank} me.",
            "They all {verb}ed {blank} the new employee.",
            "Don't {verb} {blank} your sister — that's not fair."
        ],
        options: ["up on", "in on", "out on", "off on"]
    },
    {
        verb: "gear", particle: "towards", phrase: "gear towards", category: "business", level: "high",
        meaning: "To design or organize something for a particular purpose or audience.",
        sentences: [
            "The program is {verb}ed {blank} young professionals.",
            "The course is {verb}ed {blank} beginners.",
            "Our products are {verb}ed {blank} the European market.",
            "The campaign was {verb}ed {blank} first-time voters."
        ],
        options: ["towards", "for", "at", "into"]
    },
    {
        verb: "give", particle: "over to", phrase: "give over to", category: "business", level: "college",
        meaning: "To dedicate time, space, or resources to a particular purpose.",
        sentences: [
            "The ground floor is {verb}n {blank} retail space.",
            "She {verb}s most of her weekends {blank} volunteering.",
            "The meeting was {verb}n {blank} discussing the new budget.",
            "They {verb} the entire building {blank} offices."
        ],
        options: ["over to", "up to", "in to", "away to"]
    },
    {
        verb: "go", particle: "on with", phrase: "go on with", category: "daily", level: "middle",
        meaning: "To continue doing something.",
        sentences: [
            "She decided to {verb} {blank} her studies despite the difficulties.",
            "Please {verb} {blank} what you were saying.",
            "He {verb}es {blank} his work as if nothing happened.",
            "We must {verb} {blank} the show."
        ],
        options: ["on with", "off with", "along with", "ahead with"]
    },
    {
        verb: "grow", particle: "out", phrase: "grow out", category: "daily", level: "middle",
        meaning: "To allow hair or nails to get longer by not cutting them.",
        sentences: [
            "She's {verb}ing {blank} her bangs.",
            "I'm going to {verb} {blank} my beard this winter.",
            "He decided to {verb} {blank} his hair for the role.",
            "It takes months to {verb} {blank} a bad haircut."
        ],
        options: ["out", "up", "on", "off"]
    },
    {
        verb: "hack", particle: "into", phrase: "hack into", category: "business", level: "high",
        meaning: "To gain unauthorized access to a computer system.",
        sentences: [
            "Someone managed to {verb} {blank} the company's database.",
            "He {verb}ed {blank} the email server in minutes.",
            "Criminals {verb}ed {blank} the bank's security system.",
            "It's illegal to {verb} {blank} other people's accounts."
        ],
        options: ["into", "in", "through", "to"]
    },
    {
        verb: "heat", particle: "up", phrase: "heat up", category: "daily", level: "elementary",
        meaning: "To make something warm or hot; to become more intense.",
        sentences: [
            "Can you {verb} {blank} the leftovers for dinner?",
            "The competition is really {verb}ing {blank}.",
            "The debate {verb}ed {blank} as election day approached.",
            "Wait for the oven to {verb} {blank} before putting the cake in."
        ],
        options: ["up", "on", "off", "out"]
    },
    {
        verb: "hold", particle: "together", phrase: "hold together", category: "daily", level: "middle",
        meaning: "To remain intact; to manage to stay calm and functional.",
        sentences: [
            "The old bridge barely {verb}s {blank}.",
            "She managed to {verb} {blank} despite the pressure.",
            "The team {verb}s {blank} well under stress.",
            "Their relationship is barely {verb}ing {blank}."
        ],
        options: ["together", "on", "up", "out"]
    },
    {
        verb: "hurry", particle: "along", phrase: "hurry along", category: "daily", level: "middle",
        meaning: "To make something happen faster; to tell someone to move quickly.",
        sentences: [
            "The teacher {verb}ied the students {blank} to assembly.",
            "We need to {verb} things {blank} if we want to finish on time.",
            "The guard {verb}ied the visitors {blank}.",
            "Let's {verb} {blank} — the museum closes at five."
        ],
        options: ["along", "up", "on", "off"]
    },
    {
        verb: "key", particle: "in", phrase: "key in", category: "business", level: "middle",
        meaning: "To enter data or text using a keyboard.",
        sentences: [
            "Please {verb} {blank} your password to continue.",
            "She {verb}ed {blank} the figures into the spreadsheet.",
            "He {verb}ed {blank} the wrong number by mistake.",
            "{verb} {blank} your details and click 'Submit'."
        ],
        options: ["in", "on", "up", "out"]
    },
    {
        verb: "kick", particle: "around", phrase: "kick around", category: "business", level: "middle",
        meaning: "To discuss an idea casually; to treat someone badly.",
        sentences: [
            "Let's {verb} {blank} some ideas for the new campaign.",
            "We've been {verb}ing this proposal {blank} for weeks.",
            "She felt {verb}ed {blank} by the management.",
            "They spent the meeting {verb}ing {blank} possible solutions."
        ],
        options: ["around", "about", "over", "through"]
    },
    {
        verb: "knock", particle: "around", phrase: "knock around", category: "daily", level: "middle",
        meaning: "To spend time relaxing without doing anything specific; to travel casually.",
        sentences: [
            "We spent the summer {verb}ing {blank} Europe.",
            "He's been {verb}ing {blank} the house all day.",
            "I spent my gap year {verb}ing {blank} Southeast Asia.",
            "She likes to {verb} {blank} the shops on weekends."
        ],
        options: ["around", "about", "along", "through"]
    },
    {
        verb: "lash", particle: "out", phrase: "lash out", category: "emotion", level: "high",
        meaning: "To suddenly attack someone physically or verbally.",
        sentences: [
            "He {verb}ed {blank} at the journalist who criticized him.",
            "When cornered, the cat {verb}ed {blank} with its claws.",
            "She {verb}ed {blank} in anger and said things she didn't mean.",
            "Frustrated workers sometimes {verb} {blank} at their managers."
        ],
        options: ["out", "back", "off", "at"]
    },
    {
        verb: "let", particle: "up", phrase: "let up", category: "daily", level: "middle",
        meaning: "To become less intense or to stop.",
        sentences: [
            "The rain finally {verb} {blank} after three days.",
            "He never {verb}s {blank} — he works all the time.",
            "When will this heat {verb} {blank}?",
            "The pressure at work just doesn't {verb} {blank}."
        ],
        options: ["up", "off", "down", "out"]
    },
    {
        verb: "listen", particle: "in", phrase: "listen in", category: "daily", level: "middle",
        meaning: "To secretly listen to a conversation or broadcast.",
        sentences: [
            "Someone was {verb}ing {blank} on our phone call.",
            "I accidentally {verb}ed {blank} on their argument.",
            "The spy {verb}ed {blank} to the meeting through a hidden microphone.",
            "Thousands of people {verb} {blank} to the radio show every day."
        ],
        options: ["in", "on", "to", "through"]
    },
    {
        verb: "live", particle: "down", phrase: "live down", category: "emotion", level: "high",
        meaning: "To overcome the shame or embarrassment of a past event (usually negative).",
        sentences: [
            "He'll never {verb} {blank} that embarrassing speech.",
            "She couldn't {verb} {blank} the incident at the office party.",
            "It took him years to {verb} {blank} the nickname.",
            "That mistake is something I'll never {verb} {blank}."
        ],
        options: ["down", "off", "out", "through"]
    },
    {
        verb: "lock", particle: "down", phrase: "lock down", category: "business", level: "high",
        meaning: "To secure a place completely; to finalize or make something definite.",
        sentences: [
            "The prison was {verb}ed {blank} after the escape attempt.",
            "We need to {verb} {blank} the budget by Friday.",
            "The entire city was {verb}ed {blank} during the pandemic.",
            "Let's {verb} {blank} the details before the announcement."
        ],
        options: ["down", "up", "in", "out"]
    },
    {
        verb: "mark", particle: "out", phrase: "mark out", category: "business", level: "high",
        meaning: "To draw the boundaries of something; to distinguish someone as special.",
        sentences: [
            "They {verb}ed {blank} the area for the new playground.",
            "Her talent {verb}s her {blank} as a future star.",
            "The pitch was {verb}ed {blank} with white lines.",
            "His ambition {verb}ed him {blank} from his peers."
        ],
        options: ["out", "off", "up", "down"]
    },
    {
        verb: "mix", particle: "with", phrase: "mix with", category: "daily", level: "middle",
        meaning: "To socialize with other people.",
        sentences: [
            "She doesn't {verb} {blank} many people outside work.",
            "It's important for children to learn to {verb} {blank} others.",
            "He prefers not to {verb} {blank} his colleagues socially.",
            "The new student found it hard to {verb} {blank} the class."
        ],
        options: ["with", "in", "up", "along"]
    },
    {
        verb: "opt", particle: "out of", phrase: "opt out of", category: "business", level: "high",
        meaning: "To choose not to participate in something.",
        sentences: [
            "You can {verb} {blank} receiving marketing emails at any time.",
            "She {verb}ed {blank} the team-building event.",
            "Many employees {verb}ed {blank} the pension scheme.",
            "Customers must actively {verb} {blank} data collection."
        ],
        options: ["out of", "in to", "off of", "away from"]
    },
    {
        verb: "pair", particle: "up", phrase: "pair up", category: "daily", level: "middle",
        meaning: "To form groups of two; to match two things or people together.",
        sentences: [
            "The teacher told the students to {verb} {blank}.",
            "Shall we {verb} {blank} for the project?",
            "They {verb}ed {blank} and started working.",
            "I {verb}ed {blank} with Sarah for the assignment."
        ],
        options: ["up", "off", "together", "in"]
    },
    {
        verb: "patch", particle: "up", phrase: "patch up", category: "emotion", level: "middle",
        meaning: "To repair something temporarily; to resolve a disagreement.",
        sentences: [
            "They {verb}ed {blank} their differences and moved on.",
            "She {verb}ed {blank} the hole in the wall.",
            "The couple managed to {verb} things {blank} after the argument.",
            "He {verb}ed {blank} the wound with a bandage."
        ],
        options: ["up", "over", "in", "together"]
    },
    {
        verb: "peter", particle: "out", phrase: "peter out", category: "daily", level: "college",
        meaning: "To gradually diminish and come to an end.",
        sentences: [
            "The trail {verb}ed {blank} near the top of the mountain.",
            "Interest in the story {verb}ed {blank} after a few days.",
            "The conversation {verb}ed {blank} as everyone grew tired.",
            "The river {verb}s {blank} before reaching the desert."
        ],
        options: ["out", "off", "away", "down"]
    },
    {
        verb: "pile", particle: "in", phrase: "pile in", category: "daily", level: "middle",
        meaning: "To crowd into a place or vehicle in a disorderly way.",
        sentences: [
            "The kids all {verb}d {blank} to the car.",
            "Everyone {verb}d {blank} to the tiny elevator.",
            "The fans {verb}d {blank} to the stadium.",
            "They {verb}d {blank} through the doors as soon as they opened."
        ],
        options: ["in", "into", "on", "up"]
    },
    {
        verb: "pin", particle: "down", phrase: "pin down", category: "business", level: "high",
        meaning: "To force someone to be specific; to hold someone so they cannot move.",
        sentences: [
            "It's hard to {verb} her {blank} to a specific date.",
            "I can't {verb} {blank} exactly what's wrong.",
            "They {verb}ned him {blank} and demanded answers.",
            "The wrestler {verb}ned his opponent {blank}."
        ],
        options: ["down", "up", "in", "on"]
    },
    {
        verb: "pipe", particle: "down", phrase: "pipe down", category: "daily", level: "middle",
        meaning: "To be quiet or make less noise (informal).",
        sentences: [
            "{verb} {blank}! I'm trying to study.",
            "The teacher told the class to {verb} {blank}.",
            "Could you {verb} {blank} a bit? It's very loud.",
            "He was asked to {verb} {blank} by the librarian."
        ],
        options: ["down", "off", "out", "up"]
    },
    {
        verb: "pop", particle: "in", phrase: "pop in", category: "daily", level: "middle",
        meaning: "To visit someone briefly and casually.",
        sentences: [
            "I'll {verb} {blank} on my way home from work.",
            "She just {verb}ped {blank} to say hello.",
            "Why don't you {verb} {blank} for a cup of tea?",
            "He {verb}s {blank} every now and then to check on us."
        ],
        options: ["in", "by", "over", "around"]
    },
    {
        verb: "pop", particle: "up", phrase: "pop up", category: "daily", level: "middle",
        meaning: "To appear suddenly or unexpectedly.",
        sentences: [
            "New coffee shops seem to {verb} {blank} everywhere.",
            "An error message {verb}ped {blank} on the screen.",
            "Problems keep {verb}ping {blank} during the project.",
            "His name {verb}s {blank} frequently in the news."
        ],
        options: ["up", "out", "in", "off"]
    },
    {
        verb: "prop", particle: "up", phrase: "prop up", category: "business", level: "high",
        meaning: "To support something to prevent it from falling; to keep something going artificially.",
        sentences: [
            "The government has been {verb}ping {blank} the failing industry.",
            "She {verb}ped {blank} the shelf with a piece of wood.",
            "Subsidies {verb} {blank} unprofitable businesses.",
            "He {verb}ped himself {blank} on a pillow and read."
        ],
        options: ["up", "on", "off", "out"]
    },
    {
        verb: "pull", particle: "up", phrase: "pull up", category: "daily", level: "middle",
        meaning: "To stop a vehicle; to move a chair closer; to criticize someone for their behavior.",
        sentences: [
            "A taxi {verb}ed {blank} outside the hotel.",
            "{verb} {blank} a chair and join us.",
            "She was {verb}ed {blank} by her boss for being late.",
            "He {verb}ed {blank} at the traffic lights."
        ],
        options: ["up", "over", "in", "off"]
    },
    {
        verb: "put", particle: "down for", phrase: "put down for", category: "daily", level: "high",
        meaning: "To add someone's name to a list for something.",
        sentences: [
            "{verb} me {blank} two tickets, please.",
            "I'll {verb} you {blank} the Thursday shift.",
            "She {verb} herself {blank} the volunteering program.",
            "They {verb} all the staff {blank} the training course."
        ],
        options: ["down for", "in for", "up for", "on for"]
    },
    {
        verb: "queue", particle: "up", phrase: "queue up", category: "daily", level: "middle",
        meaning: "To line up and wait for one's turn.",
        sentences: [
            "People {verb}d {blank} for hours to buy concert tickets.",
            "We had to {verb} {blank} in the rain.",
            "They {verb}d {blank} outside the shop before it opened.",
            "There's no need to {verb} {blank} — take a number instead."
        ],
        options: ["up", "in", "along", "on"]
    },
    {
        verb: "rattle", particle: "off", phrase: "rattle off", category: "daily", level: "high",
        meaning: "To say something quickly and easily from memory.",
        sentences: [
            "She can {verb} {blank} all the US presidents in order.",
            "He {verb}d {blank} the statistics without looking at his notes.",
            "The child {verb}d {blank} the multiplication tables.",
            "She {verb}d {blank} a list of reasons why we should go."
        ],
        options: ["off", "out", "on", "through"]
    },
    {
        verb: "ring", particle: "around", phrase: "ring around", category: "daily", level: "middle",
        meaning: "To telephone several people or organizations to get information.",
        sentences: [
            "I {verb}ed {blank} all the hotels but they were fully booked.",
            "She {verb}ed {blank} trying to find the best price.",
            "He {verb}ed {blank} various suppliers for quotes.",
            "I'll {verb} {blank} and see who can fix it."
        ],
        options: ["around", "about", "up", "through"]
    },
    {
        verb: "root", particle: "for", phrase: "root for", category: "emotion", level: "middle",
        meaning: "To support or cheer for someone enthusiastically.",
        sentences: [
            "The whole school is {verb}ing {blank} the football team.",
            "I'll be {verb}ing {blank} you at the competition.",
            "Everyone was {verb}ing {blank} the underdog.",
            "Who are you {verb}ing {blank} in the election?"
        ],
        options: ["for", "on", "at", "with"]
    },
    {
        verb: "rule", particle: "out of", phrase: "rule out of", category: "daily", level: "high",
        meaning: "To prevent someone from participating due to injury or other reasons.",
        sentences: [
            "The injury {verb}d him {blank} the final match.",
            "She was {verb}d {blank} the competition due to illness.",
            "Bad weather {verb}d {blank} any outdoor activities.",
            "His age {verb}d him {blank} military service."
        ],
        options: ["out of", "off of", "away from", "in on"]
    },
    {
        verb: "scale", particle: "back", phrase: "scale back", category: "business", level: "high",
        meaning: "To reduce the size, extent, or amount of something.",
        sentences: [
            "The company had to {verb} {blank} its operations due to losses.",
            "They decided to {verb} {blank} the project's scope.",
            "The government {verb}d {blank} military spending.",
            "We may need to {verb} {blank} our ambitions a little."
        ],
        options: ["back", "down", "off", "out"]
    },
    {
        verb: "scrape", particle: "by", phrase: "scrape by", category: "daily", level: "high",
        meaning: "To manage to survive with very little money.",
        sentences: [
            "They barely {verb} {blank} on her salary alone.",
            "Many families are {verb}ing {blank} in the current economy.",
            "He {verb}d {blank} on his savings for a few months.",
            "Students often have to {verb} {blank} on a tight budget."
        ],
        options: ["by", "through", "along", "on"]
    },
    {
        verb: "see", particle: "about", phrase: "see about", category: "daily", level: "middle",
        meaning: "To deal with or make arrangements for something.",
        sentences: [
            "I'll {verb} {blank} getting the car repaired tomorrow.",
            "She went to {verb} {blank} booking the flights.",
            "Let me {verb} {blank} that for you.",
            "He said he'd {verb} {blank} finding us a hotel."
        ],
        options: ["about", "to", "into", "for"]
    },
    {
        verb: "seize", particle: "on", phrase: "seize on", category: "business", level: "college",
        meaning: "To take advantage of something quickly and eagerly.",
        sentences: [
            "The opposition {verb}d {blank} the scandal to attack the government.",
            "She {verb}d {blank} the opportunity to study abroad.",
            "The media {verb}d {blank} the story and ran it for weeks.",
            "He {verb}d {blank} the idea and developed it further."
        ],
        options: ["on", "upon", "at", "into"]
    },
    {
        verb: "simmer", particle: "down", phrase: "simmer down", category: "emotion", level: "middle",
        meaning: "To become calmer after being angry or excited.",
        sentences: [
            "The argument finally {verb}ed {blank} after an hour.",
            "Just {verb} {blank} and listen to what I have to say.",
            "It took him a while to {verb} {blank} after the incident.",
            "Tensions in the office eventually {verb}ed {blank}."
        ],
        options: ["down", "off", "out", "away"]
    },
    {
        verb: "sit", particle: "around", phrase: "sit around", category: "daily", level: "elementary",
        meaning: "To spend time sitting doing nothing productive.",
        sentences: [
            "Stop {verb}ting {blank} and do something useful!",
            "We just {verb} {blank} all afternoon chatting.",
            "He spends weekends {verb}ting {blank} watching TV.",
            "I can't just {verb} {blank} while others are working."
        ],
        options: ["around", "about", "in", "on"]
    },
    {
        verb: "snap", particle: "at", phrase: "snap at", category: "emotion", level: "middle",
        meaning: "To speak to someone in a sharp, angry way.",
        sentences: [
            "She {verb}ped {blank} him when he asked about the deadline.",
            "Don't {verb} {blank} me — I was just trying to help.",
            "He's been {verb}ping {blank} everyone all morning.",
            "I'm sorry I {verb}ped {blank} you — I was stressed."
        ],
        options: ["at", "on", "back", "out"]
    },
    {
        verb: "sneak", particle: "in", phrase: "sneak in", category: "daily", level: "middle",
        meaning: "To enter a place quietly and secretly.",
        sentences: [
            "He {verb}ed {blank} through the back door.",
            "She {verb}ed {blank} after curfew.",
            "They managed to {verb} {blank} without being noticed.",
            "He {verb}ed {blank} a quick nap during his lunch break."
        ],
        options: ["in", "into", "through", "past"]
    },
    {
        verb: "soak", particle: "up", phrase: "soak up", category: "daily", level: "middle",
        meaning: "To absorb something; to enjoy an experience fully.",
        sentences: [
            "We lay on the beach to {verb} {blank} the sun.",
            "The sponge {verb}ed {blank} all the water.",
            "She loves to {verb} {blank} the atmosphere at concerts.",
            "He's like a sponge — he {verb}s {blank} knowledge quickly."
        ],
        options: ["up", "in", "on", "out"]
    },
    {
        verb: "spark", particle: "off", phrase: "spark off", category: "academic", level: "high",
        meaning: "To cause something to begin, especially a debate or conflict.",
        sentences: [
            "His comments {verb}ed {blank} a heated debate.",
            "The incident {verb}ed {blank} widespread protests.",
            "A small misunderstanding {verb}ed {blank} a major conflict.",
            "The discovery {verb}ed {blank} a revolution in the field."
        ],
        options: ["off", "up", "out", "on"]
    },
    {
        verb: "spin", particle: "off", phrase: "spin off", category: "business", level: "high",
        meaning: "To create a new company or product from an existing one.",
        sentences: [
            "The TV show was so popular they {verb} {blank} a new series.",
            "The company decided to {verb} {blank} its technology division.",
            "The research {verb} {blank} several commercial applications.",
            "They {verb} {blank} the subsidiary into an independent company."
        ],
        options: ["off", "out", "away", "up"]
    },
    {
        verb: "spring", particle: "back", phrase: "spring back", category: "daily", level: "high",
        meaning: "To return quickly to a previous position or condition.",
        sentences: [
            "The branch {verb} {blank} and hit him in the face.",
            "The economy {verb} {blank} faster than expected.",
            "She has an amazing ability to {verb} {blank} from setbacks.",
            "The elastic band {verb}s {blank} when you release it."
        ],
        options: ["back", "up", "out", "off"]
    },
    {
        verb: "square", particle: "up", phrase: "square up", category: "business", level: "high",
        meaning: "To settle a bill or debt; to prepare to fight someone.",
        sentences: [
            "Let me {verb} {blank} the bill — this dinner is on me.",
            "The two fighters {verb}d {blank} in the ring.",
            "We need to {verb} {blank} accounts before the end of the month.",
            "He {verb}d {blank} to the bully and refused to back down."
        ],
        options: ["up", "off", "away", "out"]
    },
    {
        verb: "stack", particle: "up", phrase: "stack up", category: "business", level: "high",
        meaning: "To compare; to accumulate or build up.",
        sentences: [
            "How does our product {verb} {blank} against the competition?",
            "The evidence is {verb}ing {blank} against him.",
            "Problems are {verb}ing {blank} at an alarming rate.",
            "Let's see how these two phones {verb} {blank}."
        ],
        options: ["up", "out", "off", "on"]
    },
    {
        verb: "stem", particle: "from", phrase: "stem from", category: "academic", level: "college",
        meaning: "To originate from or be caused by something.",
        sentences: [
            "His anger {verb}s {blank} a deep sense of injustice.",
            "The problem {verb}s {blank} a lack of communication.",
            "Many health issues {verb} {blank} poor diet.",
            "These traditions {verb} {blank} ancient customs."
        ],
        options: ["from", "out of", "off", "by"]
    },
    {
        verb: "step", particle: "back", phrase: "step back", category: "business", level: "middle",
        meaning: "To withdraw from a situation to consider it more objectively.",
        sentences: [
            "Let's {verb} {blank} and look at the bigger picture.",
            "She needed to {verb} {blank} from the project for a while.",
            "Sometimes you need to {verb} {blank} to see things clearly.",
            "He {verb}ped {blank} from his duties temporarily."
        ],
        options: ["back", "down", "aside", "away"]
    },
    {
        verb: "stump", particle: "up", phrase: "stump up", category: "business", level: "high",
        meaning: "To pay a sum of money, especially unwillingly.",
        sentences: [
            "Customers have to {verb} {blank} a deposit of £200.",
            "He refused to {verb} {blank} for the repairs.",
            "Taxpayers end up having to {verb} {blank} for the project.",
            "She had to {verb} {blank} the full amount upfront."
        ],
        options: ["up", "out", "over", "off"]
    },
    {
        verb: "suss", particle: "out", phrase: "suss out", category: "daily", level: "high",
        meaning: "To discover the truth about something or someone; to figure out.",
        sentences: [
            "It didn't take long to {verb} {blank} what was going on.",
            "She quickly {verb}ed {blank} who was responsible.",
            "I need to {verb} {blank} the best route to the venue.",
            "He {verb}ed {blank} the problem within minutes."
        ],
        options: ["out", "up", "off", "through"]
    },
    {
        verb: "tag", particle: "along", phrase: "tag along", category: "daily", level: "middle",
        meaning: "To go somewhere with someone, often without being invited.",
        sentences: [
            "Mind if I {verb} {blank}?",
            "His little sister always wants to {verb} {blank}.",
            "She {verb}ged {blank} with us to the concert.",
            "You're welcome to {verb} {blank} if you'd like."
        ],
        options: ["along", "on", "in", "with"]
    },
    {
        verb: "think", particle: "of", phrase: "think of", category: "daily", level: "elementary",
        meaning: "To consider or have an opinion about something; to remember or imagine.",
        sentences: [
            "What do you {verb} {blank} this color for the walls?",
            "I can't {verb} {blank} his name right now.",
            "She {verb}s {blank} everything — so organized.",
            "Can you {verb} {blank} a good restaurant nearby?"
        ],
        options: ["of", "about", "on", "over"]
    },
    {
        verb: "touch", particle: "down", phrase: "touch down", category: "travel", level: "middle",
        meaning: "To land on the ground, especially referring to an aircraft.",
        sentences: [
            "The plane {verb}ed {blank} at 3:15 p.m. local time.",
            "We {verb}ed {blank} safely despite the turbulence.",
            "The flight is expected to {verb} {blank} in twenty minutes.",
            "The spacecraft {verb}ed {blank} on the moon's surface."
        ],
        options: ["down", "off", "in", "on"]
    },
    {
        verb: "tuck", particle: "in", phrase: "tuck in", category: "daily", level: "middle",
        meaning: "To start eating enthusiastically; to push cloth edges under to make neat.",
        sentences: [
            "The food is ready — {verb} {blank}!",
            "She {verb}ed the children {blank} and kissed them goodnight.",
            "He {verb}ed {blank} his shirt before the meeting.",
            "Everyone {verb}ed {blank} to the delicious meal."
        ],
        options: ["in", "into", "up", "on"]
    },
    {
        verb: "turn", particle: "loose", phrase: "turn loose", category: "daily", level: "high",
        meaning: "To set free; to release from confinement.",
        sentences: [
            "They {verb}ed the horse {blank} in the meadow.",
            "The children were {verb}ed {blank} in the playground.",
            "She {verb}ed her creativity {blank} on the project.",
            "Don't {verb} {blank} those dogs near the chickens."
        ],
        options: ["loose", "free", "out", "off"]
    },
    {
        verb: "type", particle: "up", phrase: "type up", category: "business", level: "middle",
        meaning: "To make a typed copy of handwritten or rough notes.",
        sentences: [
            "I need to {verb} {blank} the meeting minutes.",
            "She {verb}d {blank} her notes from the lecture.",
            "He asked his assistant to {verb} {blank} the report.",
            "Can you {verb} {blank} these handwritten comments?"
        ],
        options: ["up", "out", "in", "off"]
    },
    {
        verb: "usher", particle: "in", phrase: "usher in", category: "academic", level: "college",
        meaning: "To mark the beginning of a new period or era.",
        sentences: [
            "The internet {verb}ed {blank} a new age of communication.",
            "The revolution {verb}ed {blank} dramatic social change.",
            "This discovery could {verb} {blank} a new era of medicine.",
            "The election {verb}ed {blank} a period of reform."
        ],
        options: ["in", "on", "up", "out"]
    },
    {
        verb: "wade", particle: "through", phrase: "wade through", category: "business", level: "high",
        meaning: "To read or deal with a large amount of boring material.",
        sentences: [
            "I had to {verb} {blank} hundreds of pages of legal documents.",
            "She {verb}d {blank} the entire manual looking for the answer.",
            "We spent hours {verb}ing {blank} the data.",
            "He {verb}d {blank} his inbox after returning from vacation."
        ],
        options: ["through", "into", "over", "past"]
    },
    {
        verb: "wait", particle: "around", phrase: "wait around", category: "daily", level: "elementary",
        meaning: "To stay in a place doing nothing while waiting for something to happen.",
        sentences: [
            "I'm not going to {verb} {blank} all day for you.",
            "They {verb}ed {blank} for an hour before the doctor saw them.",
            "She hates {verb}ing {blank} at airports.",
            "We {verb}ed {blank} but nobody showed up."
        ],
        options: ["around", "about", "on", "in"]
    },
    {
        verb: "warm", particle: "up to", phrase: "warm up to", category: "emotion", level: "middle",
        meaning: "To begin to like or feel comfortable with someone or something gradually.",
        sentences: [
            "It took a while, but she eventually {verb}ed {blank} the new teacher.",
            "He's {verb}ing {blank} the idea of moving abroad.",
            "The cat slowly {verb}ed {blank} the new family member.",
            "Voters are {verb}ing {blank} the candidate."
        ],
        options: ["up to", "on to", "in to", "along to"]
    },
    {
        verb: "wind", particle: "around", phrase: "wind around", category: "daily", level: "high",
        meaning: "To wrap or coil something around an object.",
        sentences: [
            "She {verb}ed the scarf {blank} her neck.",
            "The ivy {verb}s {blank} the old tree trunk.",
            "He {verb}ed the rope {blank} the post to secure the boat.",
            "The path {verb}s {blank} the hillside."
        ],
        options: ["around", "up", "about", "over"]
    },
    {
        verb: "wolf", particle: "down", phrase: "wolf down", category: "daily", level: "middle",
        meaning: "To eat food very quickly and eagerly.",
        sentences: [
            "He {verb}ed {blank} his lunch in five minutes.",
            "Don't {verb} {blank} your food — eat slowly.",
            "She {verb}ed {blank} the pizza before anyone else could have a slice.",
            "The kids {verb}ed {blank} the cookies as soon as they came out of the oven."
        ],
        options: ["down", "up", "in", "off"]
    },
    {
        verb: "work", particle: "up to", phrase: "work up to", category: "daily", level: "middle",
        meaning: "To gradually build toward something more difficult or demanding.",
        sentences: [
            "She {verb}ed {blank} running five miles a day.",
            "Start small and {verb} {blank} more challenging exercises.",
            "He's {verb}ing {blank} asking her on a date.",
            "They {verb}ed {blank} the grand finale with smaller acts."
        ],
        options: ["up to", "on to", "along to", "in to"]
    },
    {
        verb: "zero", particle: "in", phrase: "zero in", category: "business", level: "high",
        meaning: "To focus all attention on a particular thing.",
        sentences: [
            "The investigation {verb}ed {blank} on the main suspect.",
            "Let's {verb} {blank} on the core issues.",
            "She {verb}ed {blank} on the problem and solved it quickly.",
            "The camera {verb}ed {blank} on the actor's face."
        ],
        options: ["in", "on", "out", "at"]
    },
    {
        verb: "bail", particle: "on", phrase: "bail on", category: "daily", level: "middle",
        meaning: "To abandon or leave someone or something, especially at the last minute.",
        sentences: [
            "He always {verb}s {blank} us when we make plans.",
            "Don't {verb} {blank} me — I need your help tonight.",
            "She {verb}ed {blank} the project halfway through.",
            "They {verb}ed {blank} the concert when it started raining."
        ],
        options: ["on", "out", "off", "from"]
    },
    {
        verb: "big", particle: "up", phrase: "big up", category: "daily", level: "high",
        meaning: "To praise or promote someone or something enthusiastically (informal).",
        sentences: [
            "She's always {verb}ging {blank} her team's achievements.",
            "He {verb}ged {blank} the restaurant to everyone he met.",
            "I want to {verb} {blank} the volunteers who made this possible.",
            "The DJ {verb}ged {blank} the next performer."
        ],
        options: ["up", "out", "off", "on"]
    },
    {
        verb: "clock", particle: "in", phrase: "clock in", category: "business", level: "middle",
        meaning: "To record one's arrival time at work.",
        sentences: [
            "Employees must {verb} {blank} by 9 a.m.",
            "She {verb}ed {blank} five minutes early.",
            "Don't forget to {verb} {blank} when you arrive.",
            "The system records the time you {verb} {blank}."
        ],
        options: ["in", "on", "up", "at"]
    },
    {
        verb: "clock", particle: "out", phrase: "clock out", category: "business", level: "middle",
        meaning: "To record one's departure time at work.",
        sentences: [
            "I usually {verb} {blank} at 5:30 p.m.",
            "She {verb}ed {blank} early to pick up her kids.",
            "Remember to {verb} {blank} before you leave.",
            "He {verb}ed {blank} and headed straight home."
        ],
        options: ["out", "off", "in", "up"]
    },
    {
        verb: "come", particle: "undone", phrase: "come undone", category: "daily", level: "high",
        meaning: "To become unfastened; to fail or go wrong.",
        sentences: [
            "My shoelaces keep {verb}ing {blank}.",
            "All his careful plans {verb} {blank} at the last minute.",
            "The stitching has {verb} {blank} at the seam.",
            "Everything started to {verb} {blank} when the main investor pulled out."
        ],
        options: ["undone", "apart", "loose", "off"]
    },
    {
        verb: "crack", particle: "on", phrase: "crack on", category: "daily", level: "high",
        meaning: "To continue doing something quickly and with determination.",
        sentences: [
            "We need to {verb} {blank} with this project.",
            "Let's {verb} {blank} — we've wasted enough time.",
            "She {verb}ed {blank} with the housework despite her cold.",
            "If we {verb} {blank}, we can finish by tonight."
        ],
        options: ["on", "up", "at", "off"]
    },
    {
        verb: "duck", particle: "out", phrase: "duck out", category: "daily", level: "high",
        meaning: "To leave a place quickly and quietly to avoid something.",
        sentences: [
            "She {verb}ed {blank} of the meeting early.",
            "He tried to {verb} {blank} before anyone noticed.",
            "I need to {verb} {blank} for a minute to make a phone call.",
            "They {verb}ed {blank} of the party before the speeches started."
        ],
        options: ["out", "off", "away", "in"]
    },
    {
        verb: "even", particle: "up", phrase: "even up", category: "daily", level: "middle",
        meaning: "To make something equal or balanced.",
        sentences: [
            "Let's split the bill to {verb} things {blank}.",
            "That goal {verb}ed {blank} the score nicely.",
            "Adding another player should {verb} {blank} the teams.",
            "She {verb}ed {blank} the hemline of the curtains."
        ],
        options: ["up", "out", "off", "down"]
    },
    {
        verb: "fend", particle: "for", phrase: "fend for", category: "daily", level: "high",
        meaning: "To take care of oneself without help from others.",
        sentences: [
            "He had to {verb} {blank} himself from a young age.",
            "The kids will have to {verb} {blank} themselves tonight — we're going out.",
            "She learned to {verb} {blank} herself in the big city.",
            "After leaving home, he had to {verb} {blank} himself."
        ],
        options: ["for", "off", "against", "from"]
    },
    {
        verb: "glaze", particle: "over", phrase: "glaze over", category: "emotion", level: "high",
        meaning: "When eyes glaze over, they become dull, showing a lack of interest or understanding.",
        sentences: [
            "His eyes {verb}d {blank} during the boring presentation.",
            "Students' eyes start to {verb} {blank} after the first hour.",
            "As soon as math was mentioned, her eyes {verb}d {blank}.",
            "I could see his eyes {verb}ing {blank} as I explained the rules."
        ],
        options: ["over", "out", "up", "off"]
    },
    {
        verb: "hand", particle: "off", phrase: "hand off", category: "business", level: "middle",
        meaning: "To transfer responsibility or pass something to another person.",
        sentences: [
            "She {verb}ed {blank} the project to her colleague before leaving.",
            "The quarterback {verb}ed {blank} the ball to the running back.",
            "He {verb}ed {blank} the client to the senior partner.",
            "I'll {verb} this {blank} to the design team."
        ],
        options: ["off", "over", "on", "out"]
    },
    {
        verb: "hash", particle: "out", phrase: "hash out", category: "business", level: "high",
        meaning: "To discuss something thoroughly to reach an agreement.",
        sentences: [
            "We need to {verb} {blank} the details of the contract.",
            "They spent hours {verb}ing {blank} the terms of the deal.",
            "Let's sit down and {verb} this {blank}.",
            "The committee {verb}ed {blank} a compromise."
        ],
        options: ["out", "through", "over", "up"]
    },
    {
        verb: "muscle", particle: "in", phrase: "muscle in", category: "business", level: "college",
        meaning: "To force one's way into a situation where one is not wanted.",
        sentences: [
            "Larger companies are {verb}ing {blank} on the small firms' territory.",
            "He tried to {verb} {blank} on the conversation.",
            "They {verb}d {blank} on the deal despite not being invited.",
            "The new competitor is {verb}ing {blank} on our market share."
        ],
        options: ["in", "into", "on", "through"]
    },
    {
        verb: "measure", particle: "up", phrase: "measure up", category: "business", level: "high",
        meaning: "To meet the required standard; to be good enough.",
        sentences: [
            "She was afraid she wouldn't {verb} {blank} to their expectations.",
            "Does the new recruit {verb} {blank}?",
            "The product didn't {verb} {blank} to the competition.",
            "He constantly felt he didn't {verb} {blank}."
        ],
        options: ["up", "out", "in", "off"]
    },
    {
        verb: "miss", particle: "out", phrase: "miss out", category: "daily", level: "middle",
        meaning: "To fail to take advantage of an opportunity or to not experience something.",
        sentences: [
            "You'll {verb} {blank} if you don't apply for the scholarship.",
            "She {verb}ed {blank} on the promotion because she was on leave.",
            "Don't {verb} {blank} on this amazing deal!",
            "He felt he had {verb}ed {blank} on a lot during his years abroad."
        ],
        options: ["out", "off", "by", "up"]
    },
    {
        verb: "mouth", particle: "off", phrase: "mouth off", category: "emotion", level: "high",
        meaning: "To speak rudely or disrespectfully to someone.",
        sentences: [
            "The student was suspended for {verb}ing {blank} to a teacher.",
            "He's always {verb}ing {blank} about his boss.",
            "If you {verb} {blank} to the referee, you'll get a red card.",
            "She got in trouble for {verb}ing {blank} during the assembly."
        ],
        options: ["off", "out", "at", "on"]
    },
    {
        verb: "nose", particle: "around", phrase: "nose around", category: "daily", level: "middle",
        meaning: "To look around or investigate in a nosy way.",
        sentences: [
            "I caught him {verb}ing {blank} in my office.",
            "Stop {verb}ing {blank} in my things!",
            "Journalists were {verb}ing {blank} the politician's finances.",
            "She was {verb}ing {blank} the shop looking for bargains."
        ],
        options: ["around", "about", "into", "through"]
    },
    {
        verb: "owe", particle: "to", phrase: "owe to", category: "daily", level: "high",
        meaning: "To have something as a result of the actions or qualities of someone or something.",
        sentences: [
            "I {verb} my success {blank} my parents' support.",
            "She {verb}s her recovery {blank} the excellent medical team.",
            "He {verb}s everything {blank} hard work and determination.",
            "They {verb} their victory {blank} superior teamwork."
        ],
        options: ["to", "for", "from", "with"]
    },
    {
        verb: "pack", particle: "in", phrase: "pack in", category: "daily", level: "middle",
        meaning: "To stop doing something; to fit a lot into a limited time or space.",
        sentences: [
            "She's thinking of {verb}ing {blank} her job.",
            "We {verb}ed {blank} a lot of sightseeing during the trip.",
            "He decided to {verb} it {blank} and go home early.",
            "The concert was {verb}ed with fans — they really {verb}ed them {blank}."
        ],
        options: ["in", "up", "off", "out"]
    },
    {
        verb: "peel", particle: "off", phrase: "peel off", category: "daily", level: "middle",
        meaning: "To remove something by peeling; to separate from a group.",
        sentences: [
            "She {verb}ed {blank} the old wallpaper.",
            "Two runners {verb}ed {blank} from the main group.",
            "The label won't {verb} {blank} cleanly.",
            "He {verb}ed {blank} his wet clothes after the race."
        ],
        options: ["off", "away", "out", "back"]
    },
    {
        verb: "polish", particle: "off", phrase: "polish off", category: "daily", level: "middle",
        meaning: "To finish something completely, especially food or a task.",
        sentences: [
            "He {verb}ed {blank} the entire pizza by himself.",
            "She {verb}ed {blank} the report in just one hour.",
            "The kids {verb}ed {blank} the ice cream before dinner.",
            "Let me just {verb} {blank} this last chapter."
        ],
        options: ["off", "up", "out", "down"]
    },
    {
        verb: "plough", particle: "into", phrase: "plough into", category: "business", level: "high",
        meaning: "To invest a large amount of money or effort into something.",
        sentences: [
            "The company has {verb}ed millions {blank} research.",
            "She {verb}s all her energy {blank} the business.",
            "Investors {verb}ed money {blank} the startup.",
            "They {verb}ed their savings {blank} the renovation."
        ],
        options: ["into", "in", "to", "through"]
    },
    {
        verb: "pull", particle: "ahead", phrase: "pull ahead", category: "business", level: "high",
        meaning: "To move into a leading position in a race or competition.",
        sentences: [
            "The candidate {verb}ed {blank} in the polls.",
            "Our team {verb}ed {blank} in the second half.",
            "The company {verb}ed {blank} of its competitors this quarter.",
            "She {verb}ed {blank} of the other runners in the final lap."
        ],
        options: ["ahead", "away", "forward", "out"]
    },
    {
        verb: "push", particle: "for", phrase: "push for", category: "business", level: "high",
        meaning: "To make a strong effort to achieve or obtain something.",
        sentences: [
            "Workers are {verb}ing {blank} higher wages.",
            "She's been {verb}ing {blank} reform for years.",
            "The union is {verb}ing {blank} better working conditions.",
            "They're {verb}ing {blank} a vote before the recess."
        ],
        options: ["for", "on", "at", "to"]
    },
    {
        verb: "rack", particle: "up", phrase: "rack up", category: "business", level: "high",
        meaning: "To accumulate a large amount of something, especially debts or achievements.",
        sentences: [
            "She {verb}ed {blank} an impressive number of wins this season.",
            "He {verb}ed {blank} thousands in credit card debt.",
            "The company has {verb}ed {blank} record profits.",
            "They {verb}ed {blank} miles of travel during the campaign."
        ],
        options: ["up", "on", "off", "in"]
    },
    {
        verb: "rough", particle: "up", phrase: "rough up", category: "daily", level: "college",
        meaning: "To physically attack someone without causing serious injury.",
        sentences: [
            "The bouncers {verb}ed {blank} the troublemaker outside the club.",
            "He claimed the police had {verb}ed him {blank} during the arrest.",
            "The thugs {verb}ed {blank} the shopkeeper.",
            "Nobody is going to {verb} you {blank} — just tell us what happened."
        ],
        options: ["up", "out", "off", "over"]
    },
    {
        verb: "rope", particle: "in", phrase: "rope in", category: "daily", level: "high",
        meaning: "To persuade someone to help with something, especially when they are reluctant.",
        sentences: [
            "She managed to {verb} me {blank} to help with the move.",
            "They {verb}d {blank} every available volunteer.",
            "He got {verb}d {blank} to organize the office party.",
            "Don't let them {verb} you {blank} — you'll be there all weekend."
        ],
        options: ["in", "into", "up", "on"]
    },
    {
        verb: "run", particle: "out", phrase: "run out", category: "daily", level: "elementary",
        meaning: "To use up all the supply of something.",
        sentences: [
            "We've {verb} {blank} of milk — can you buy some?",
            "The printer has {verb} {blank} of ink again.",
            "Time is {verb}ning {blank} — we need to decide now.",
            "She {verb} {blank} of patience with the slow service."
        ],
        options: ["out", "off", "down", "through"]
    },
    {
        verb: "send", particle: "in", phrase: "send in", category: "business", level: "middle",
        meaning: "To submit something, especially by post or electronically.",
        sentences: [
            "Please {verb} {blank} your application before the deadline.",
            "She {verb} {blank} her report two days early.",
            "The troops were {verb} {blank} to restore order.",
            "Don't forget to {verb} {blank} your tax forms."
        ],
        options: ["in", "out", "off", "back"]
    },
    {
        verb: "shape", particle: "up", phrase: "shape up", category: "daily", level: "middle",
        meaning: "To improve one's behavior or performance; to develop in a particular way.",
        sentences: [
            "You'd better {verb} {blank} or you'll lose your job.",
            "The project is {verb}ing {blank} nicely.",
            "Things are really {verb}ing {blank} for the new season.",
            "The team needs to {verb} {blank} before the playoffs."
        ],
        options: ["up", "out", "off", "in"]
    },
    {
        verb: "shore", particle: "up", phrase: "shore up", category: "business", level: "college",
        meaning: "To support or strengthen something that is weakening.",
        sentences: [
            "The government took steps to {verb} {blank} the economy.",
            "They {verb}d {blank} the foundation of the old building.",
            "New evidence {verb}d {blank} the prosecution's case.",
            "The company borrowed money to {verb} {blank} its finances."
        ],
        options: ["up", "on", "off", "out"]
    },
    {
        verb: "single", particle: "out", phrase: "single out", category: "business", level: "high",
        meaning: "To select one person or thing from a group for special attention or treatment.",
        sentences: [
            "She was {verb}d {blank} for praise by the manager.",
            "Why are you {verb}ing me {blank}? Everyone was involved.",
            "The teacher {verb}d {blank} three students for scholarships.",
            "He felt {verb}d {blank} and unfairly targeted."
        ],
        options: ["out", "off", "on", "up"]
    },
    {
        verb: "stand", particle: "down", phrase: "stand down", category: "business", level: "high",
        meaning: "To resign from a position; to withdraw from a confrontation.",
        sentences: [
            "The CEO agreed to {verb} {blank} after the scandal.",
            "The troops were ordered to {verb} {blank}.",
            "She was asked to {verb} {blank} from the committee.",
            "The police {verb} {blank} after the suspect surrendered."
        ],
        options: ["down", "back", "off", "aside"]
    },
    {
        verb: "swear", particle: "by", phrase: "swear by", category: "daily", level: "high",
        meaning: "To have complete confidence in something as being effective.",
        sentences: [
            "She {verb}s {blank} this brand of coffee.",
            "He {verb}s {blank} cold showers for good health.",
            "My grandmother {verb}s {blank} honey for sore throats.",
            "Many athletes {verb} {blank} this training method."
        ],
        options: ["by", "on", "to", "for"]
    },
    {
        verb: "talk", particle: "through", phrase: "talk through", category: "business", level: "middle",
        meaning: "To discuss something in detail to help someone understand or resolve it.",
        sentences: [
            "Let me {verb} you {blank} the new procedure.",
            "She {verb}ed the students {blank} the exercise step by step.",
            "He {verb}ed her {blank} the panic attack over the phone.",
            "Can we {verb} {blank} the options before making a decision?"
        ],
        options: ["through", "over", "about", "around"]
    },
    {
        verb: "thin", particle: "out", phrase: "thin out", category: "daily", level: "high",
        meaning: "To become less crowded or dense; to reduce in number.",
        sentences: [
            "The crowd started to {verb} {blank} after the main act finished.",
            "Traffic {verb}ned {blank} once we passed the city center.",
            "You should {verb} {blank} the seedlings to give them room to grow.",
            "His hair has been {verb}ning {blank} since he turned forty."
        ],
        options: ["out", "down", "off", "away"]
    },
    {
        verb: "tow", particle: "away", phrase: "tow away", category: "daily", level: "middle",
        meaning: "To remove a vehicle by pulling it with another vehicle.",
        sentences: [
            "My car was {verb}ed {blank} because I parked illegally.",
            "The broken-down truck was {verb}ed {blank} by a recovery vehicle.",
            "If you park here, your car will be {verb}ed {blank}.",
            "They {verb}ed {blank} dozens of cars during the street cleaning."
        ],
        options: ["away", "off", "out", "in"]
    },
    {
        verb: "toss", particle: "around", phrase: "toss around", category: "business", level: "middle",
        meaning: "To casually discuss or consider various ideas.",
        sentences: [
            "We {verb}ed {blank} a few ideas for the new project.",
            "The name has been {verb}ed {blank} as a possible candidate.",
            "Let's {verb} {blank} some options before committing.",
            "They spent the afternoon {verb}ing {blank} solutions."
        ],
        options: ["around", "about", "out", "over"]
    },
    {
        verb: "tumble", particle: "down", phrase: "tumble down", category: "daily", level: "middle",
        meaning: "To fall suddenly; to collapse.",
        sentences: [
            "The old wall finally {verb}d {blank} in the storm.",
            "Stock prices {verb}d {blank} after the announcement.",
            "The child {verb}d {blank} the stairs but wasn't hurt.",
            "The house of cards {verb}d {blank} when she sneezed."
        ],
        options: ["down", "over", "off", "apart"]
    },
    {
        verb: "walk", particle: "in on", phrase: "walk in on", category: "daily", level: "middle",
        meaning: "To enter a room and unexpectedly find someone doing something.",
        sentences: [
            "I accidentally {verb}ed {blank} their private conversation.",
            "She {verb}ed {blank} him wrapping her birthday present.",
            "The boss {verb}ed {blank} them taking an unauthorized break.",
            "How embarrassing — my mom {verb}ed {blank} the surprise rehearsal."
        ],
        options: ["in on", "into", "up on", "on to"]
    },
    {
        verb: "wear", particle: "on", phrase: "wear on", category: "daily", level: "high",
        meaning: "To pass gradually, especially in a tedious way; to become increasingly annoying.",
        sentences: [
            "As the day {verb}s {blank}, the heat becomes unbearable.",
            "His constant complaining is beginning to {verb} {blank} me.",
            "As the hours {verb} {blank}, the audience grew restless.",
            "Her patience was {verb}ing thin as the delays {verb}ed {blank}."
        ],
        options: ["on", "off", "out", "down"]
    },
    {
        verb: "wander", particle: "off", phrase: "wander off", category: "daily", level: "middle",
        meaning: "To move away from where you are supposed to be, often without realizing it.",
        sentences: [
            "The toddler {verb}ed {blank} while his mother wasn't looking.",
            "Don't let the dog {verb} {blank} the trail.",
            "My mind kept {verb}ing {blank} during the lecture.",
            "She {verb}ed {blank} to explore the old town."
        ],
        options: ["off", "away", "out", "about"]
    },
    {
        verb: "wrap", particle: "up in", phrase: "wrap up in", category: "emotion", level: "high",
        meaning: "To be completely absorbed or involved in something.",
        sentences: [
            "She got {verb}ped {blank} her work and forgot the time.",
            "He was too {verb}ped {blank} himself to notice others.",
            "Don't get so {verb}ped {blank} the details that you miss the big picture.",
            "They were {verb}ped {blank} the excitement of the festival."
        ],
        options: ["up in", "on in", "around in", "into"]
    },
    {
        verb: "allude", particle: "to", phrase: "allude to", category: "academic", level: "college",
        meaning: "To refer to something indirectly or briefly without going into detail.",
        sentences: [
            "The professor {verb}d {blank} several historical events in his lecture.",
            "She didn't name anyone directly but {verb}d {blank} the scandal.",
            "The report {verb}s {blank} potential risks without specifying them.",
            "He kept {verb}ing {blank} a secret he wasn't ready to share."
        ],
        options: ["to", "at", "on", "for"]
    },
    {
        verb: "amount", particle: "to", phrase: "amount to", category: "business", level: "high",
        meaning: "To be equal to or add up to a particular total or significance.",
        sentences: [
            "The total damages {verb}ed {blank} over three million dollars.",
            "His efforts didn't {verb} {blank} much in the end.",
            "The quarterly expenses {verb} {blank} a significant portion of revenue.",
            "All those small charges {verb}ing {blank} a huge bill surprised everyone."
        ],
        options: ["to", "up", "for", "at"]
    },
    {
        verb: "attribute", particle: "to", phrase: "attribute to", category: "academic", level: "college",
        meaning: "To regard something as being caused by a particular factor or person.",
        sentences: [
            "Scientists {verb} the warming trend {blank} increased carbon emissions.",
            "She {verb}d her success {blank} years of dedicated practice.",
            "The painting is {verb}d {blank} a lesser-known Renaissance artist.",
            "Historians {verb} the empire's fall {blank} internal corruption."
        ],
        options: ["to", "for", "with", "by"]
    },
    {
        verb: "bear", particle: "out", phrase: "bear out", category: "academic", level: "college",
        meaning: "To confirm or support something with evidence.",
        sentences: [
            "The data {verb}s {blank} the researcher's original hypothesis.",
            "Recent findings {verb} {blank} what we suspected all along.",
            "The witness's testimony {verb}s {blank} the defendant's alibi.",
            "Further investigation will {verb} {blank} whether the theory is correct."
        ],
        options: ["out", "up", "on", "through"]
    },
    {
        verb: "build", particle: "upon", phrase: "build upon", category: "academic", level: "college",
        meaning: "To use something as a basis for further development.",
        sentences: [
            "The new theory {verb}s {blank} decades of prior research.",
            "We need to {verb} {blank} the progress we've already made.",
            "She {verb}t {blank} her mentor's groundwork to create a new framework.",
            "Each generation {verb}s {blank} the knowledge of the last."
        ],
        options: ["upon", "into", "over", "from"]
    },
    {
        verb: "capitalize", particle: "on", phrase: "capitalize on", category: "business", level: "professional",
        meaning: "To take advantage of a situation or opportunity for personal gain.",
        sentences: [
            "The company {verb}d {blank} the growing demand for organic products.",
            "Smart investors {verb} {blank} market fluctuations to maximize returns.",
            "She {verb}d {blank} her bilingual skills to land the international role.",
            "We must {verb} {blank} this momentum before competitors catch up."
        ],
        options: ["on", "in", "at", "to"]
    },
    {
        verb: "center", particle: "on", phrase: "center on", category: "academic", level: "high",
        meaning: "To focus on or revolve around a particular subject or theme.",
        sentences: [
            "The debate {verb}s {blank} the ethical implications of artificial intelligence.",
            "Her research {verb}s {blank} the effects of climate change on coral reefs.",
            "The discussion {verb}ed {blank} budget allocation for next year.",
            "Most complaints {verb} {blank} the lack of transparency in the process."
        ],
        options: ["on", "at", "to", "in"]
    },
    {
        verb: "contribute", particle: "to", phrase: "contribute to", category: "academic", level: "middle",
        meaning: "To help cause or bring about a result or situation.",
        sentences: [
            "Poor diet can {verb} {blank} serious health problems over time.",
            "Many factors {verb}d {blank} the company's eventual bankruptcy.",
            "Regular exercise {verb}s {blank} better mental health.",
            "Everyone should {verb} {blank} making the community a better place."
        ],
        options: ["to", "for", "with", "at"]
    },
    {
        verb: "delve", particle: "into", phrase: "delve into", category: "academic", level: "college",
        meaning: "To investigate or research something thoroughly and in depth.",
        sentences: [
            "The documentary {verb}s {blank} the hidden history of the cold war.",
            "She {verb}d {blank} the archives to find the original manuscript.",
            "Researchers are {verb}ing {blank} the genetic causes of the disease.",
            "The journalist {verb}d {blank} the politician's financial records."
        ],
        options: ["into", "onto", "over", "upon"]
    },
    {
        verb: "derive", particle: "from", phrase: "derive from", category: "academic", level: "college",
        meaning: "To originate from a particular source or root.",
        sentences: [
            "The word 'democracy' {verb}s {blank} ancient Greek roots.",
            "Much of his confidence {verb}s {blank} years of experience.",
            "The recipe {verb}s {blank} a traditional family cooking method.",
            "These principles {verb} {blank} Enlightenment philosophy."
        ],
        options: ["from", "of", "by", "through"]
    },
    {
        verb: "elaborate", particle: "on", phrase: "elaborate on", category: "academic", level: "high",
        meaning: "To explain something in more detail or add further information.",
        sentences: [
            "Could you {verb} {blank} your earlier point about sustainability?",
            "The speaker {verb}d {blank} the benefits of the new policy.",
            "She refused to {verb} {blank} the reasons for her resignation.",
            "The report {verb}s {blank} the key findings of the study."
        ],
        options: ["on", "to", "at", "for"]
    },
    {
        verb: "embark", particle: "on", phrase: "embark on", category: "business", level: "high",
        meaning: "To begin a new project, journey, or significant undertaking.",
        sentences: [
            "The team {verb}ed {blank} an ambitious plan to expand overseas.",
            "She decided to {verb} {blank} a career change at forty.",
            "The company is {verb}ing {blank} a major restructuring initiative.",
            "They {verb}ed {blank} a three-year research program together."
        ],
        options: ["on", "in", "to", "at"]
    },
    {
        verb: "hinge", particle: "on", phrase: "hinge on", category: "business", level: "college",
        meaning: "To depend entirely on a single factor or condition.",
        sentences: [
            "The success of the deal {verb}s {blank} the board's approval.",
            "Everything {verb}d {blank} whether they could secure the funding.",
            "The verdict {verb}s {blank} the credibility of the key witness.",
            "Our expansion plan {verb}s {blank} favorable market conditions."
        ],
        options: ["on", "to", "at", "by"]
    },
    {
        verb: "home", particle: "in on", phrase: "home in on", category: "business", level: "college",
        meaning: "To focus closely on a target, issue, or specific detail.",
        sentences: [
            "The auditors {verb}d {blank} several suspicious transactions.",
            "Let's {verb} {blank} the root cause of the problem.",
            "The detective {verb}d {blank} the most likely suspect.",
            "Investors are {verb}ing {blank} sectors with the highest growth potential."
        ],
        options: ["in on", "on to", "up on", "at on"]
    },
    {
        verb: "reflect", particle: "on", phrase: "reflect on", category: "academic", level: "high",
        meaning: "To think carefully and deeply about something.",
        sentences: [
            "Take a moment to {verb} {blank} what you've learned this semester.",
            "She {verb}ed {blank} her childhood memories with a smile.",
            "The essay asks students to {verb} {blank} the impact of technology.",
            "He often {verb}s {blank} the decisions that shaped his career."
        ],
        options: ["on", "at", "to", "in"]
    },
    {
        verb: "buy", particle: "out", phrase: "buy out", category: "business", level: "professional",
        meaning: "To purchase someone's share or ownership in a business.",
        sentences: [
            "The corporation {verb}s {blank} smaller competitors to eliminate rivalry.",
            "She {verb}ed {blank} her partner's stake in the restaurant.",
            "They are planning to {verb} {blank} the remaining shareholders.",
            "A private equity firm {verb}ing {blank} the startup made headlines."
        ],
        options: ["out", "up", "off", "in"]
    },
    {
        verb: "price", particle: "out", phrase: "price out", category: "business", level: "college",
        meaning: "To make something too expensive for someone to afford.",
        sentences: [
            "Rising rents have {verb}d {blank} many families from the neighborhood.",
            "The new tariffs could {verb} {blank} smaller importers.",
            "Luxury developments are {verb}ing {blank} long-time residents.",
            "Budget-conscious shoppers feel {verb}d {blank} by premium brands."
        ],
        options: ["out", "off", "up", "in"]
    },
    {
        verb: "sound", particle: "out", phrase: "sound out", category: "business", level: "high",
        meaning: "To cautiously ask someone's opinion or test their feelings about something.",
        sentences: [
            "I need to {verb} {blank} the team before making any announcements.",
            "She {verb}ed {blank} her colleagues about the proposed merger.",
            "The manager {verb}ed {blank} employees on the new schedule.",
            "Before proposing changes, he {verb}ed {blank} the stakeholders."
        ],
        options: ["out", "off", "up", "on"]
    },
    {
        verb: "stake", particle: "out", phrase: "stake out", category: "business", level: "college",
        meaning: "To watch a place secretly or claim a particular position or territory.",
        sentences: [
            "Detectives {verb}d {blank} the suspect's apartment for weeks.",
            "The company {verb}d {blank} its position as the market leader early on.",
            "Reporters {verb}d {blank} the courthouse awaiting the verdict.",
            "Each team {verb}d {blank} their area at the conference."
        ],
        options: ["out", "up", "off", "in"]
    },
    {
        verb: "taper", particle: "off", phrase: "taper off", category: "business", level: "college",
        meaning: "To gradually decrease in amount, intensity, or frequency.",
        sentences: [
            "Sales typically {verb} {blank} during the post-holiday months.",
            "The medication's side effects should {verb} {blank} within a week.",
            "Interest in the product {verb}ed {blank} after the initial hype.",
            "Rainfall is expected to {verb} {blank} by the afternoon."
        ],
        options: ["off", "out", "down", "away"]
    },
    {
        verb: "crack", particle: "down", phrase: "crack down", category: "business", level: "high",
        meaning: "To take severe or strict measures against something.",
        sentences: [
            "The government is {verb}ing {blank} on tax evasion schemes.",
            "Schools have {verb}ed {blank} on the use of mobile phones in class.",
            "Regulators {verb}ed {blank} on companies that violated safety codes.",
            "Police plan to {verb} {blank} on illegal street racing."
        ],
        options: ["down", "up", "out", "off"]
    },
    {
        verb: "rein", particle: "in", phrase: "rein in", category: "business", level: "college",
        meaning: "To control, restrain, or limit something that has become excessive.",
        sentences: [
            "The board moved to {verb} {blank} the CEO's spending habits.",
            "They need to {verb} {blank} costs before the budget spirals out of control.",
            "The central bank tried to {verb} {blank} inflation with higher rates.",
            "Parents sometimes struggle to {verb} {blank} their children's screen time."
        ],
        options: ["in", "on", "up", "back"]
    },
    {
        verb: "round", particle: "off", phrase: "round off", category: "academic", level: "middle",
        meaning: "To complete or finish something neatly and satisfactorily.",
        sentences: [
            "Let's {verb} {blank} the meeting with a quick summary.",
            "She {verb}ed {blank} her presentation with a memorable quote.",
            "A delicious dessert {verb}ed {blank} the wonderful dinner.",
            "The teacher {verb}ed {blank} the lesson by reviewing key points."
        ],
        options: ["off", "up", "out", "on"]
    },
    {
        verb: "carve", particle: "out", phrase: "carve out", category: "business", level: "college",
        meaning: "To create or establish something through effort and determination.",
        sentences: [
            "She {verb}d {blank} a successful career in the tech industry.",
            "The startup managed to {verb} {blank} a niche in the crowded market.",
            "Try to {verb} {blank} some time each day for exercise.",
            "He {verb}d {blank} a reputation as a tough but fair negotiator."
        ],
        options: ["out", "up", "in", "off"]
    },
    {
        verb: "pore", particle: "over", phrase: "pore over", category: "academic", level: "college",
        meaning: "To study or read something with great care and attention.",
        sentences: [
            "She {verb}d {blank} the ancient manuscripts for clues.",
            "Analysts are {verb}ing {blank} the quarterly financial reports.",
            "He spent hours {verb}ing {blank} legal documents before the trial.",
            "Students {verb} {blank} their notes the night before the exam."
        ],
        options: ["over", "through", "into", "on"]
    },
    {
        verb: "touch", particle: "upon", phrase: "touch upon", category: "academic", level: "high",
        meaning: "To briefly mention or deal with a subject without going into detail.",
        sentences: [
            "The lecture only {verb}ed {blank} the topic of quantum computing.",
            "The article {verb}es {blank} several controversial issues.",
            "She barely {verb}ed {blank} the financial implications of the plan.",
            "The documentary {verb}es {blank} themes of identity and belonging."
        ],
        options: ["upon", "over", "into", "about"]
    },
    {
        verb: "belt", particle: "out", phrase: "belt out", category: "daily", level: "middle",
        meaning: "To sing loudly and forcefully with great enthusiasm.",
        sentences: [
            "She {verb}ed {blank} her favorite song at the karaoke bar.",
            "The choir {verb}ed {blank} a powerful rendition of the anthem.",
            "He loves to {verb} {blank} show tunes in the shower.",
            "The crowd {verb}ed {blank} the chorus together."
        ],
        options: ["out", "up", "off", "on"]
    },
    {
        verb: "blurt", particle: "out", phrase: "blurt out", category: "daily", level: "middle",
        meaning: "To say something suddenly and without thinking, often inappropriately.",
        sentences: [
            "He {verb}ed {blank} the surprise before the party started.",
            "She couldn't help {verb}ing {blank} the answer in class.",
            "Don't {verb} {blank} confidential information during the meeting.",
            "The child {verb}ed {blank} an embarrassing question at dinner."
        ],
        options: ["out", "off", "up", "on"]
    },
    {
        verb: "bottle", particle: "up", phrase: "bottle up", category: "emotion", level: "high",
        meaning: "To suppress or hold in one's emotions instead of expressing them.",
        sentences: [
            "It's unhealthy to {verb} {blank} your feelings for too long.",
            "He {verb}d {blank} his anger until it finally exploded.",
            "She tends to {verb} {blank} her frustrations rather than talk about them.",
            "Don't {verb} {blank} your grief; it's okay to cry."
        ],
        options: ["up", "in", "down", "out"]
    },
    {
        verb: "chicken", particle: "out", phrase: "chicken out", category: "daily", level: "middle",
        meaning: "To decide not to do something because of fear or lack of courage.",
        sentences: [
            "He was going to try bungee jumping but {verb}ed {blank} at the last minute.",
            "Don't {verb} {blank} now; we've come too far to turn back.",
            "She {verb}ed {blank} of asking her boss for a raise.",
            "They almost {verb}ed {blank} before getting on the roller coaster."
        ],
        options: ["out", "off", "up", "away"]
    },
    {
        verb: "cotton", particle: "on", phrase: "cotton on", category: "daily", level: "high",
        meaning: "To begin to understand something that was not initially obvious.",
        sentences: [
            "It took a while, but she finally {verb}ed {blank} to the joke.",
            "He didn't {verb} {blank} to what was happening until it was too late.",
            "Students quickly {verb} {blank} to the teacher's expectations.",
            "It took the audience a moment to {verb} {blank} to the twist ending."
        ],
        options: ["on", "up", "to", "in"]
    },
    {
        verb: "fess", particle: "up", phrase: "fess up", category: "daily", level: "middle",
        meaning: "To confess or admit to something, especially something wrong.",
        sentences: [
            "He finally {verb}ed {blank} to breaking the vase.",
            "It's better to {verb} {blank} now before they find out on their own.",
            "She {verb}ed {blank} about eating the last piece of cake.",
            "The employee {verb}ed {blank} to making the accounting error."
        ],
        options: ["up", "out", "in", "on"]
    },
    {
        verb: "hear", particle: "out", phrase: "hear out", category: "daily", level: "middle",
        meaning: "To listen to someone completely until they have finished speaking.",
        sentences: [
            "Please {verb} me {blank} before you make a judgment.",
            "She asked her parents to {verb} her {blank} before they refused.",
            "The manager agreed to {verb} {blank} the employee's concerns.",
            "If you'd just {verb} me {blank}, you'd understand my reasoning."
        ],
        options: ["out", "on", "up", "through"]
    },
    {
        verb: "let", particle: "on", phrase: "let on", category: "daily", level: "high",
        meaning: "To reveal or admit something, often a secret, to others.",
        sentences: [
            "She didn't {verb} {blank} that she already knew the news.",
            "He never {verb}s {blank} how much money he actually earns.",
            "Don't {verb} {blank} that we're planning a surprise party.",
            "The spy never {verb} {blank} about her true identity."
        ],
        options: ["on", "out", "off", "up"]
    },
    {
        verb: "liven", particle: "up", phrase: "liven up", category: "daily", level: "middle",
        meaning: "To make something more exciting, interesting, or energetic.",
        sentences: [
            "Some music would really {verb} {blank} this party.",
            "The comedian {verb}ed {blank} the otherwise dull conference.",
            "Adding colorful decorations {verb}ed {blank} the classroom.",
            "Let's {verb} {blank} the presentation with some interactive elements."
        ],
        options: ["up", "on", "out", "in"]
    },
    {
        verb: "luck", particle: "out", phrase: "luck out", category: "daily", level: "middle",
        meaning: "To be very fortunate or have unexpected good luck.",
        sentences: [
            "We really {verb}ed {blank} with the weather on our wedding day.",
            "She {verb}ed {blank} and found a parking spot right away.",
            "He {verb}ed {blank} when they upgraded his seat for free.",
            "They {verb}ed {blank} by arriving just before the store closed."
        ],
        options: ["out", "up", "in", "on"]
    },
    {
        verb: "psych", particle: "out", phrase: "psych out", category: "daily", level: "high",
        meaning: "To intimidate or unnerve someone, causing them to lose confidence.",
        sentences: [
            "He tried to {verb} {blank} his opponent with intense stares.",
            "Don't let the other team {verb} you {blank} before the game.",
            "The difficult exam questions {verb}ed {blank} most of the students.",
            "She {verb}ed {blank} her rivals by acting completely relaxed."
        ],
        options: ["out", "up", "off", "down"]
    },
    {
        verb: "rub", particle: "off on", phrase: "rub off on", category: "daily", level: "high",
        meaning: "To influence someone through close or prolonged association.",
        sentences: [
            "Her enthusiasm for reading has {verb}bed {blank} her children.",
            "His positive attitude {verb}s {blank} everyone around him.",
            "Spending time with creative people can {verb} {blank} you.",
            "The mentor's discipline {verb}bed {blank} his young apprentice."
        ],
        options: ["off on", "on to", "up on", "in on"]
    },
    {
        verb: "shrug", particle: "off", phrase: "shrug off", category: "daily", level: "high",
        meaning: "To dismiss something as unimportant or not worth worrying about.",
        sentences: [
            "She {verb}ged {blank} the criticism and continued her work.",
            "He tends to {verb} {blank} any health concerns his doctor raises.",
            "You can't just {verb} {blank} a broken promise like it doesn't matter.",
            "The athlete {verb}ged {blank} the minor injury and kept playing."
        ],
        options: ["off", "out", "away", "on"]
    },
    {
        verb: "sleep", particle: "on", phrase: "sleep on", category: "daily", level: "middle",
        meaning: "To delay making a decision until the next day to think it over.",
        sentences: [
            "This is a big commitment; let me {verb} {blank} it first.",
            "She {verb}s {blank} important decisions rather than acting impulsively.",
            "He decided to {verb} {blank} the job offer before accepting.",
            "Why don't you {verb} {blank} it and give me your answer tomorrow?"
        ],
        options: ["on", "over", "at", "in"]
    },
    {
        verb: "stave", particle: "off", phrase: "stave off", category: "daily", level: "college",
        meaning: "To prevent or delay something bad from happening.",
        sentences: [
            "Eating a snack can {verb} {blank} hunger until dinner.",
            "The government tried to {verb} {blank} an economic recession.",
            "Regular exercise helps {verb} {blank} many chronic diseases.",
            "They took out a loan to {verb} {blank} bankruptcy."
        ],
        options: ["off", "out", "away", "on"]
    },
    {
        verb: "stumble", particle: "upon", phrase: "stumble upon", category: "daily", level: "high",
        meaning: "To find or discover something by chance or unexpectedly.",
        sentences: [
            "She {verb}d {blank} an old photograph while cleaning the attic.",
            "We {verb}d {blank} a charming little café on a back street.",
            "The archaeologist {verb}d {blank} an ancient burial site.",
            "He {verb}d {blank} the solution while working on a different problem."
        ],
        options: ["upon", "into", "over", "onto"]
    },
    {
        verb: "suck", particle: "up to", phrase: "suck up to", category: "daily", level: "middle",
        meaning: "To try to please someone in authority to gain their favor.",
        sentences: [
            "He's always {verb}ing {blank} the manager to get promoted.",
            "Nobody respects someone who {verb}s {blank} the teacher for better grades.",
            "She was accused of {verb}ing {blank} the director to land the lead role.",
            "Stop {verb}ing {blank} the boss; just do your job well."
        ],
        options: ["up to", "in to", "on to", "off to"]
    },
    {
        verb: "talk", particle: "down to", phrase: "talk down to", category: "daily", level: "high",
        meaning: "To speak to someone in a condescending or patronizing manner.",
        sentences: [
            "Don't {verb} {blank} me just because I'm younger.",
            "The manager {verb}s {blank} everyone on the team, which kills morale.",
            "She hated how the doctor {verb}ed {blank} her during appointments.",
            "Good teachers never {verb} {blank} their students."
        ],
        options: ["down to", "up to", "out to", "off to"]
    },
    {
        verb: "zone", particle: "out", phrase: "zone out", category: "daily", level: "middle",
        meaning: "To lose concentration or become inattentive and unfocused.",
        sentences: [
            "I completely {verb}d {blank} during the long lecture.",
            "She tends to {verb} {blank} when conversations get boring.",
            "Don't {verb} {blank}; this information is important for the test.",
            "He {verb}d {blank} while driving and almost missed his exit."
        ],
        options: ["out", "off", "in", "away"]
    },
    {
        verb: "choke", particle: "up", phrase: "choke up", category: "emotion", level: "middle",
        meaning: "To become too emotional to speak clearly, often on the verge of tears.",
        sentences: [
            "She {verb}d {blank} while reading her wedding vows.",
            "The veteran {verb}d {blank} when recounting his wartime experiences.",
            "He always {verb}s {blank} when he talks about his late grandmother.",
            "The actress {verb}d {blank} during her acceptance speech."
        ],
        options: ["up", "on", "out", "in"]
    },
    {
        verb: "melt", particle: "down", phrase: "melt down", category: "emotion", level: "middle",
        meaning: "To have an emotional breakdown or lose control of one's emotions.",
        sentences: [
            "The toddler {verb}ed {blank} in the middle of the grocery store.",
            "After weeks of stress, she finally {verb}ed {blank} at work.",
            "He completely {verb}ed {blank} when he heard the bad news.",
            "Try not to {verb} {blank}; we can still fix this situation."
        ],
        options: ["down", "out", "up", "off"]
    },
    {
        verb: "psych", particle: "up", phrase: "psych up", category: "emotion", level: "middle",
        meaning: "To mentally prepare oneself or someone else for a challenge.",
        sentences: [
            "The coach {verb}ed {blank} the players before the championship game.",
            "She spent the morning {verb}ing herself {blank} for the interview.",
            "He listens to music to {verb} himself {blank} before a workout.",
            "The team tried to {verb} {blank} their goalie before the penalty shootout."
        ],
        options: ["up", "out", "on", "in"]
    },
    {
        verb: "tense", particle: "up", phrase: "tense up", category: "emotion", level: "middle",
        meaning: "To become nervous, anxious, and physically rigid with stress.",
        sentences: [
            "She always {verb}s {blank} before public speaking.",
            "He {verb}d {blank} the moment his boss called him into the office.",
            "Try not to {verb} {blank} during the massage; just relax.",
            "The dog {verb}s {blank} whenever there's a thunderstorm."
        ],
        options: ["up", "on", "out", "in"]
    },
    {
        verb: "well", particle: "up", phrase: "well up", category: "emotion", level: "high",
        meaning: "For tears or strong emotions to rise to the surface and become visible.",
        sentences: [
            "Tears {verb}ed {blank} in her eyes as she watched the reunion.",
            "A feeling of pride {verb}ed {blank} inside him at his daughter's graduation.",
            "Emotions {verb}ed {blank} as the national anthem played.",
            "Gratitude {verb}ed {blank} in her heart when she read the letter."
        ],
        options: ["up", "out", "over", "on"]
    },
    {
        verb: "pine", particle: "for", phrase: "pine for", category: "emotion", level: "high",
        meaning: "To long for or miss someone or something deeply and persistently.",
        sentences: [
            "She {verb}d {blank} her homeland after years of living abroad.",
            "The dog {verb}s {blank} its owner whenever they leave for work.",
            "He spent years {verb}ing {blank} the love he had lost.",
            "Many retirees {verb} {blank} the sense of purpose work once gave them."
        ],
        options: ["for", "after", "over", "at"]
    },
    {
        verb: "dote", particle: "on", phrase: "dote on", category: "emotion", level: "middle",
        meaning: "To be excessively fond of someone and lavish them with affection.",
        sentences: [
            "Grandparents often {verb} {blank} their youngest grandchildren.",
            "She {verb}s {blank} her pet cat, buying it expensive treats.",
            "He {verb}d {blank} his niece, always bringing her gifts.",
            "The couple {verb} {blank} each other after thirty years of marriage."
        ],
        options: ["on", "over", "for", "at"]
    },
    {
        verb: "brood", particle: "over", phrase: "brood over", category: "emotion", level: "college",
        meaning: "To think anxiously or gloomily about something for a long time.",
        sentences: [
            "He tends to {verb} {blank} past mistakes instead of moving on.",
            "She {verb}ed {blank} the argument for days after it happened.",
            "Stop {verb}ing {blank} things you cannot change.",
            "The writer {verb}ed {blank} the negative review all weekend."
        ],
        options: ["over", "on", "about", "at"]
    },
    {
        verb: "agonize", particle: "over", phrase: "agonize over", category: "emotion", level: "college",
        meaning: "To worry greatly and at length about a decision or situation.",
        sentences: [
            "She {verb}d {blank} which university to attend for months.",
            "Don't {verb} {blank} every small detail; just submit the report.",
            "He {verb}d {blank} the wording of his resignation letter.",
            "Parents often {verb} {blank} the best school for their children."
        ],
        options: ["over", "about", "on", "at"]
    },
    {
        verb: "buy", particle: "into", phrase: "buy into", category: "business", level: "high",
        meaning: "To believe in an idea, concept, or philosophy, or to invest in something.",
        sentences: [
            "Not everyone {verb}s {blank} the notion that money equals happiness.",
            "She fully {verb}s {blank} the company's mission and values.",
            "Investors are reluctant to {verb} {blank} such a risky venture.",
            "He never {verb}s {blank} conspiracy theories."
        ],
        options: ["into", "on", "up", "to"]
    },
    {
        verb: "dream", particle: "up", phrase: "dream up", category: "business", level: "high",
        meaning: "To invent or think of something creative, imaginative, or unusual.",
        sentences: [
            "The marketing team {verb}ed {blank} a brilliant campaign.",
            "Who {verb}ed {blank} this ridiculous plan?",
            "She {verb}s {blank} new product ideas constantly.",
            "Engineers {verb}ed {blank} an innovative solution to the problem."
        ],
        options: ["up", "out", "on", "off"]
    },
    {
        verb: "hold", particle: "forth", phrase: "hold forth", category: "academic", level: "college",
        meaning: "To speak at length and often in a passionate or authoritative manner.",
        sentences: [
            "The professor {verb}s {blank} on Renaissance art for hours.",
            "He {verb}s {blank} about politics at every family gathering.",
            "She {verb} {blank} on the importance of environmental conservation.",
            "The guest speaker {verb} {blank} about innovation and leadership."
        ],
        options: ["forth", "on", "out", "up"]
    },
    {
        verb: "sign", particle: "off on", phrase: "sign off on", category: "business", level: "professional",
        meaning: "To give formal or official approval to something.",
        sentences: [
            "The director must {verb} {blank} all budget requests over ten thousand dollars.",
            "She refused to {verb} {blank} the report until changes were made.",
            "Management {verb}ed {blank} the new policy after months of review.",
            "He needs his supervisor to {verb} {blank} the travel expenses."
        ],
        options: ["off on", "up on", "out on", "in on"]
    },
    {
        verb: "double", particle: "down", phrase: "double down", category: "business", level: "high",
        meaning: "To strengthen one's commitment to a strategy or position, especially when risky.",
        sentences: [
            "The CEO decided to {verb} {blank} on the company's expansion plan.",
            "Despite criticism, she {verb}d {blank} on her original statement.",
            "The brand {verb}d {blank} on sustainability as a core value.",
            "Rather than retreat, the team {verb}d {blank} and increased their efforts."
        ],
        options: ["down", "up", "on", "in"]
    },
    {
        verb: "play", particle: "into", phrase: "play into", category: "business", level: "college",
        meaning: "To unintentionally help or give an advantage to an opponent or competitor.",
        sentences: [
            "Panicking would only {verb} {blank} the competitor's strategy.",
            "His impulsive response {verb}ed {blank} the hands of his critics.",
            "The leaked information {verb}ed {blank} the rival company's campaign.",
            "Don't let your emotions {verb} {blank} their game plan."
        ],
        options: ["into", "onto", "to", "upon"]
    },
    {
        verb: "wise", particle: "up", phrase: "wise up", category: "business", level: "high",
        meaning: "To become aware or informed about something, often after being naive.",
        sentences: [
            "Consumers are {verb}ing {blank} to misleading advertising tactics.",
            "It took him years to {verb} {blank} to the fact that he was being exploited.",
            "The public needs to {verb} {blank} about data privacy concerns.",
            "She finally {verb}d {blank} and stopped lending him money."
        ],
        options: ["up", "on", "out", "off"]
    },
    {
        verb: "drum", particle: "into", phrase: "drum into", category: "academic", level: "high",
        meaning: "To teach someone something by repeating it over and over again.",
        sentences: [
            "The instructor {verb}med {blank} us the importance of safety protocols.",
            "Grammar rules were {verb}med {blank} students through daily exercises.",
            "His parents {verb}med {blank} him the value of hard work from a young age.",
            "The coach {verb}s {blank} the players that teamwork comes first."
        ],
        options: ["into", "on", "at", "to"]
    },
    {
        verb: "hone", particle: "in", phrase: "hone in", category: "business", level: "high",
        meaning: "To focus closely on a particular aspect or target with precision.",
        sentences: [
            "The team {verb}d {blank} on the most profitable customer segment.",
            "Let's {verb} {blank} on the key issues affecting performance.",
            "Analysts {verb}d {blank} on the discrepancy in the financial data.",
            "She {verb}d {blank} on the specific clause causing the legal dispute."
        ],
        options: ["in", "on", "at", "to"]
    },
    {
        verb: "square", particle: "off", phrase: "square off", category: "business", level: "college",
        meaning: "To prepare to compete, fight, or confront someone directly.",
        sentences: [
            "The two candidates {verb}d {blank} in a heated televised debate.",
            "Rival companies {verb} {blank} over market dominance every quarter.",
            "The boxers {verb}d {blank} in the center of the ring.",
            "Legal teams from both sides {verb}d {blank} in court."
        ],
        options: ["off", "up", "on", "out"]
    },
    {
        verb: "knuckle", particle: "under", phrase: "knuckle under", category: "business", level: "college",
        meaning: "To submit to pressure or authority, often reluctantly.",
        sentences: [
            "The small supplier finally {verb}d {blank} to the retailer's demands.",
            "She refused to {verb} {blank} despite intense pressure from management.",
            "Workers {verb}d {blank} and accepted the unfavorable contract terms.",
            "He won't {verb} {blank} to threats or intimidation."
        ],
        options: ["under", "down", "in", "over"]
    },
    {
        verb: "conk", particle: "out", phrase: "conk out", category: "daily", level: "middle",
        meaning: "To suddenly stop working or fall asleep.",
        sentences: [
            "The old car {verb}ed {blank} in the middle of the highway.",
            "I {verb}ed {blank} on the couch before the movie ended.",
            "The generator {verb}s {blank} whenever it rains heavily.",
            "He {verb}ed {blank} right after dinner from exhaustion."
        ],
        options: ["out", "off", "down", "up"]
    },
    {
        verb: "keel", particle: "over", phrase: "keel over", category: "daily", level: "high",
        meaning: "To faint or collapse suddenly.",
        sentences: [
            "She nearly {verb}ed {blank} from the heat during the ceremony.",
            "Two runners {verb}ed {blank} before reaching the finish line.",
            "He looked like he was about to {verb} {blank} from shock.",
            "The old man {verb}ed {blank} in the middle of the street."
        ],
        options: ["over", "down", "out", "off"]
    },
    {
        verb: "soldier", particle: "on", phrase: "soldier on", category: "daily", level: "high",
        meaning: "To continue bravely despite difficulty.",
        sentences: [
            "Despite the injury, she {verb}ed {blank} to finish the marathon.",
            "The team {verb}s {blank} even after losing their best player.",
            "He {verb}ed {blank} through the illness without complaining.",
            "We must {verb} {blank} regardless of the setbacks."
        ],
        options: ["on", "up", "through", "out"]
    },
    {
        verb: "ramble", particle: "on", phrase: "ramble on", category: "daily", level: "middle",
        meaning: "To talk for too long in a disorganized way.",
        sentences: [
            "The professor {verb}d {blank} for an hour past the scheduled time.",
            "Please stop {verb}ing {blank} and get to the point.",
            "My uncle always {verb}s {blank} about his childhood stories.",
            "She {verb}d {blank} about her vacation for the entire lunch."
        ],
        options: ["on", "about", "off", "out"]
    },
    {
        verb: "drone", particle: "on", phrase: "drone on", category: "daily", level: "high",
        meaning: "To talk boringly for a long time.",
        sentences: [
            "The speaker {verb}d {blank} for two hours without a break.",
            "He {verb}s {blank} about the same topics every meeting.",
            "The lecturer {verb}d {blank} while half the class fell asleep.",
            "She {verb}d {blank} about regulations until everyone lost interest."
        ],
        options: ["on", "out", "off", "away"]
    },
    {
        verb: "harp", particle: "on", phrase: "harp on", category: "daily", level: "high",
        meaning: "To keep talking about something annoyingly.",
        sentences: [
            "She always {verb}s {blank} about how expensive everything is.",
            "Stop {verb}ing {blank} about my grades—I know I need to improve.",
            "He {verb}ed {blank} about the mistake for weeks.",
            "My mother keeps {verb}ing {blank} about my eating habits."
        ],
        options: ["on", "at", "about", "over"]
    },
    {
        verb: "fritter", particle: "away", phrase: "fritter away", category: "daily", level: "high",
        meaning: "To waste time or money on trivial things.",
        sentences: [
            "He {verb}ed {blank} his inheritance on luxury goods.",
            "Don't {verb} {blank} the whole weekend doing nothing.",
            "She {verb}ed {blank} her savings on impulse purchases.",
            "They {verb}ed {blank} valuable time debating minor details."
        ],
        options: ["away", "off", "out", "down"]
    },
    {
        verb: "whittle", particle: "down", phrase: "whittle down", category: "daily", level: "college",
        meaning: "To gradually reduce in size or number.",
        sentences: [
            "We need to {verb} {blank} the list of candidates to five.",
            "The committee {verb}d {blank} the proposals over several meetings.",
            "She {verb}d {blank} her expenses by cutting unnecessary subscriptions.",
            "The editor {verb}d {blank} the article from ten pages to three."
        ],
        options: ["down", "away", "off", "out"]
    },
    {
        verb: "ease", particle: "into", phrase: "ease into", category: "daily", level: "high",
        meaning: "To start something gradually and carefully.",
        sentences: [
            "She {verb}d {blank} her new role over the first few weeks.",
            "It's better to {verb} {blank} exercise rather than overdo it.",
            "He {verb}d {blank} the conversation about the budget cuts.",
            "The company {verb}d {blank} the new policy with a trial period."
        ],
        options: ["into", "in", "onto", "up"]
    },
    {
        verb: "lap", particle: "up", phrase: "lap up", category: "daily", level: "middle",
        meaning: "To enjoy or accept something eagerly.",
        sentences: [
            "The audience {verb}ped {blank} every word of the speaker's story.",
            "Kids {verb} {blank} praise from their teachers.",
            "She {verb}ped {blank} all the attention at the party.",
            "The fans {verb} {blank} any news about the upcoming movie."
        ],
        options: ["up", "in", "on", "out"]
    },
    {
        verb: "gobble", particle: "up", phrase: "gobble up", category: "daily", level: "middle",
        meaning: "To eat quickly or use up rapidly.",
        sentences: [
            "The children {verb}d {blank} the cookies in minutes.",
            "Rising costs {verb} {blank} most of our budget.",
            "He {verb}d {blank} three plates of pasta at dinner.",
            "The new software {verb}s {blank} a lot of memory."
        ],
        options: ["up", "down", "away", "off"]
    },
    {
        verb: "laze", particle: "around", phrase: "laze around", category: "daily", level: "elementary",
        meaning: "To relax and do nothing productive.",
        sentences: [
            "We spent the whole Sunday {verb}ing {blank} the house.",
            "Stop {verb}ing {blank} and help me with the chores.",
            "She loves to {verb} {blank} on rainy days.",
            "The kids {verb}d {blank} all morning watching cartoons."
        ],
        options: ["around", "about", "off", "out"]
    },
    {
        verb: "fool", particle: "around", phrase: "fool around", category: "daily", level: "elementary",
        meaning: "To behave in a silly or playful way.",
        sentences: [
            "Stop {verb}ing {blank} and start doing your homework.",
            "The boys were {verb}ing {blank} in the back of the classroom.",
            "She {verb}s {blank} too much during practice.",
            "He got hurt because he was {verb}ing {blank} near the stairs."
        ],
        options: ["around", "about", "off", "out"]
    },
    {
        verb: "horse", particle: "around", phrase: "horse around", category: "daily", level: "middle",
        meaning: "To play roughly or engage in horseplay.",
        sentences: [
            "The children were {verb}ing {blank} in the living room.",
            "Stop {verb}ing {blank} before someone gets hurt.",
            "The boys always {verb} {blank} during recess.",
            "He broke the vase while {verb}ing {blank} with his brother."
        ],
        options: ["around", "about", "off", "out"]
    },
    {
        verb: "swing", particle: "by", phrase: "swing by", category: "daily", level: "middle",
        meaning: "To make a brief, casual visit.",
        sentences: [
            "I'll {verb} {blank} your office after lunch.",
            "She {verb}s {blank} the bakery every morning for coffee.",
            "Can you {verb} {blank} the store on your way home?",
            "He {verb}s {blank} his parents' house every Sunday."
        ],
        options: ["by", "in", "over", "around"]
    },
    {
        verb: "trot", particle: "out", phrase: "trot out", category: "business", level: "college",
        meaning: "To produce the same old argument or excuse repeatedly.",
        sentences: [
            "The manager {verb}ted {blank} the same excuses at every meeting.",
            "Politicians love to {verb} {blank} statistics that support their case.",
            "She {verb}s {blank} that story every time we have guests.",
            "They always {verb} {blank} the same tired arguments."
        ],
        options: ["out", "off", "on", "up"]
    },
    {
        verb: "chime", particle: "in", phrase: "chime in", category: "daily", level: "high",
        meaning: "To join a conversation or add a remark.",
        sentences: [
            "Feel free to {verb} {blank} if you have any thoughts.",
            "She {verb}d {blank} with a helpful suggestion during the meeting.",
            "Everyone {verb}d {blank} with their own opinions on the topic.",
            "He rarely {verb}s {blank} unless he has something important to say."
        ],
        options: ["in", "on", "up", "out"]
    },
    {
        verb: "fixate", particle: "on", phrase: "fixate on", category: "emotion", level: "high",
        meaning: "To obsess over something or focus excessively.",
        sentences: [
            "She tends to {verb} {blank} small mistakes and ignore the bigger picture.",
            "Don't {verb} {blank} what went wrong—focus on what's next.",
            "He {verb}s {blank} details that no one else notices.",
            "The media {verb}d {blank} the scandal for weeks."
        ],
        options: ["on", "upon", "over", "about"]
    },
    {
        verb: "loosen", particle: "up", phrase: "loosen up", category: "emotion", level: "middle",
        meaning: "To become more relaxed or less tense.",
        sentences: [
            "Have a drink and {verb} {blank} a little.",
            "She {verb}ed {blank} after the first round of introductions.",
            "The team needs to {verb} {blank} before the big performance.",
            "He finally {verb}ed {blank} and started enjoying the evening."
        ],
        options: ["up", "off", "out", "down"]
    },
    {
        verb: "toughen", particle: "up", phrase: "toughen up", category: "emotion", level: "middle",
        meaning: "To become stronger emotionally or mentally.",
        sentences: [
            "You need to {verb} {blank} if you want to survive in this industry.",
            "The coach told the players to {verb} {blank} for the finals.",
            "She {verb}ed {blank} after dealing with so many challenges.",
            "Life has a way of {verb}ing you {blank} over the years."
        ],
        options: ["up", "out", "on", "off"]
    },
    {
        verb: "bring", particle: "around", phrase: "bring around", category: "emotion", level: "high",
        meaning: "To persuade someone to change their opinion.",
        sentences: [
            "It took weeks to {verb} her {blank} to our point of view.",
            "He finally {verb}s his father {blank} to accepting the plan.",
            "Good arguments can {verb} even skeptics {blank}.",
            "She managed to {verb} the committee {blank} with strong evidence."
        ],
        options: ["around", "over", "about", "along"]
    },
    {
        verb: "open", particle: "up to", phrase: "open up to", category: "emotion", level: "middle",
        meaning: "To share feelings honestly with someone.",
        sentences: [
            "It's hard for him to {verb} {blank} people he doesn't trust.",
            "She finally {verb}ed {blank} her therapist about her anxiety.",
            "He {verb}ed {blank} his best friend about the divorce.",
            "Children are more likely to {verb} {blank} parents who listen."
        ],
        options: ["up to", "up with", "out to", "in to"]
    },
    {
        verb: "lean", particle: "on", phrase: "lean on", category: "emotion", level: "middle",
        meaning: "To depend on someone for emotional support.",
        sentences: [
            "She {verb}s {blank} her sister during tough times.",
            "It's okay to {verb} {blank} friends when you're struggling.",
            "He {verb}ed {blank} his colleagues after the loss.",
            "You can always {verb} {blank} me if you need help."
        ],
        options: ["on", "upon", "to", "into"]
    },
    {
        verb: "frown", particle: "upon", phrase: "frown upon", category: "emotion", level: "high",
        meaning: "To disapprove of something.",
        sentences: [
            "The company {verb}s {blank} employees using personal phones at work.",
            "Cheating is heavily {verb}ed {blank} in academic institutions.",
            "Society {verb}s {blank} dishonesty in public figures.",
            "Using informal language is {verb}ed {blank} in legal documents."
        ],
        options: ["upon", "on", "at", "over"]
    },
    {
        verb: "crack", particle: "under", phrase: "crack under", category: "emotion", level: "college",
        meaning: "To fail or break down under pressure.",
        sentences: [
            "Many candidates {verb} {blank} the intense pressure of the interview.",
            "She refused to {verb} {blank} the stress of the deadline.",
            "The suspect finally {verb}ed {blank} hours of interrogation.",
            "Some athletes {verb} {blank} the expectations of the crowd."
        ],
        options: ["under", "up", "down", "in"]
    },
    {
        verb: "measure", particle: "up to", phrase: "measure up to", category: "emotion", level: "high",
        meaning: "To meet standards or expectations.",
        sentences: [
            "She worries she won't {verb} {blank} her predecessor's achievements.",
            "The sequel didn't {verb} {blank} the original film.",
            "He always felt he couldn't {verb} {blank} his brother's success.",
            "The product fails to {verb} {blank} the company's own standards."
        ],
        options: ["up to", "up with", "out to", "down to"]
    },
    {
        verb: "paper", particle: "over", phrase: "paper over", category: "emotion", level: "college",
        meaning: "To hide problems or disagreements temporarily.",
        sentences: [
            "The government tried to {verb} {blank} the scandal with a press release.",
            "You can't {verb} {blank} serious issues with superficial fixes.",
            "They {verb}ed {blank} their differences for the sake of the project.",
            "The report {verb}s {blank} the real causes of the failure."
        ],
        options: ["over", "up", "out", "away"]
    },
    {
        verb: "lash", particle: "out at", phrase: "lash out at", category: "emotion", level: "high",
        meaning: "To attack someone verbally in anger.",
        sentences: [
            "He {verb}ed {blank} his coworkers after a stressful day.",
            "She {verb}es {blank} anyone who criticizes her work.",
            "The politician {verb}ed {blank} journalists during the interview.",
            "Try not to {verb} {blank} people who are trying to help."
        ],
        options: ["out at", "out on", "into", "up at"]
    },
    {
        verb: "cling", particle: "to", phrase: "cling to", category: "emotion", level: "high",
        meaning: "To hold tightly to something or refuse to let go.",
        sentences: [
            "The child {verb}s {blank} her mother on the first day of school.",
            "He {verb}s {blank} outdated beliefs despite new evidence.",
            "She {verb}s {blank} the hope that things will improve.",
            "People tend to {verb} {blank} what is familiar and comfortable."
        ],
        options: ["to", "on", "onto", "at"]
    },
    {
        verb: "check", particle: "out of", phrase: "check out of", category: "travel", level: "middle",
        meaning: "To leave and pay at a hotel.",
        sentences: [
            "We need to {verb} {blank} the hotel by eleven.",
            "She {verb}ed {blank} the resort early to catch her flight.",
            "Guests must {verb} {blank} their rooms before noon.",
            "He {verb}ed {blank} the hotel and headed to the airport."
        ],
        options: ["out of", "off of", "away from", "in from"]
    },
    {
        verb: "hop", particle: "on", phrase: "hop on", category: "travel", level: "elementary",
        meaning: "To get on a vehicle quickly.",
        sentences: [
            "Let's {verb} {blank} the next bus to downtown.",
            "She {verb}ped {blank} her bicycle and rode to work.",
            "You can {verb} {blank} the subway at the next station.",
            "He {verb}ped {blank} the train just before the doors closed."
        ],
        options: ["on", "in", "off", "up"]
    },
    {
        verb: "hop", particle: "off", phrase: "hop off", category: "travel", level: "elementary",
        meaning: "To get off a vehicle quickly.",
        sentences: [
            "We need to {verb} {blank} at the next stop.",
            "She {verb}ped {blank} the bus right in front of the museum.",
            "He {verb}ped {blank} his bike and ran into the store.",
            "Don't forget to {verb} {blank} before the last station."
        ],
        options: ["off", "on", "out", "down"]
    },
    {
        verb: "set", particle: "out for", phrase: "set out for", category: "travel", level: "middle",
        meaning: "To begin a journey to a destination.",
        sentences: [
            "We {verb} {blank} the mountains early in the morning.",
            "She {verb}s {blank} the airport two hours before her flight.",
            "They {verb} {blank} the coast at dawn to beat the traffic.",
            "He {verb} {blank} Paris with nothing but a backpack."
        ],
        options: ["out for", "off for", "up for", "out to"]
    },
    {
        verb: "buy", particle: "up", phrase: "buy up", category: "business", level: "high",
        meaning: "To purchase all available stock of something.",
        sentences: [
            "Investors are {verb}ing {blank} property in the area.",
            "The corporation {verb}s {blank} smaller competitors regularly.",
            "Collectors {verb} {blank} rare stamps at the auction.",
            "Speculators {verb} {blank} the remaining tickets within minutes."
        ],
        options: ["up", "out", "off", "in"]
    },
    {
        verb: "preside", particle: "over", phrase: "preside over", category: "business", level: "professional",
        meaning: "To be in charge of a meeting or organization.",
        sentences: [
            "The CEO {verb}s {blank} the annual shareholders' meeting.",
            "She {verb}d {blank} a period of unprecedented growth.",
            "The judge {verb}s {blank} cases in the district court.",
            "He {verb}d {blank} the committee for nearly a decade."
        ],
        options: ["over", "at", "on", "upon"]
    },
    {
        verb: "report", particle: "to", phrase: "report to", category: "business", level: "middle",
        meaning: "To be answerable or subordinate to someone.",
        sentences: [
            "All team leads {verb} {blank} the department manager.",
            "She {verb}s {blank} the vice president of operations.",
            "In this role, you will {verb} {blank} the head of marketing.",
            "He {verb}s directly {blank} the CEO of the company."
        ],
        options: ["to", "for", "at", "with"]
    },
    {
        verb: "answer", particle: "to", phrase: "answer to", category: "business", level: "high",
        meaning: "To be accountable to someone.",
        sentences: [
            "As a freelancer, I don't {verb} {blank} anyone but myself.",
            "The board {verb}s {blank} the shareholders.",
            "You will {verb} {blank} the director for any mistakes.",
            "Every elected official should {verb} {blank} the public."
        ],
        options: ["to", "for", "with", "at"]
    },
    {
        verb: "defer", particle: "to", phrase: "defer to", category: "academic", level: "college",
        meaning: "To yield to someone's greater knowledge or judgment.",
        sentences: [
            "I'll {verb} {blank} your expertise on this matter.",
            "The junior doctors {verb} {blank} the senior consultant.",
            "She {verb}s {blank} her mentor when making tough decisions.",
            "It's wise to {verb} {blank} those with more experience."
        ],
        options: ["to", "for", "with", "on"]
    },
    {
        verb: "pander", particle: "to", phrase: "pander to", category: "business", level: "college",
        meaning: "To gratify or cater to someone's lower desires.",
        sentences: [
            "The show {verb}s {blank} the audience's love of scandal.",
            "Politicians often {verb} {blank} voters instead of leading.",
            "The tabloid {verb}s {blank} readers' appetite for gossip.",
            "Don't {verb} {blank} people who just want to complain."
        ],
        options: ["to", "for", "at", "with"]
    },
    {
        verb: "cater", particle: "to", phrase: "cater to", category: "business", level: "middle",
        meaning: "To provide what someone needs or wants.",
        sentences: [
            "This restaurant {verb}s {blank} guests with dietary restrictions.",
            "The hotel {verb}s {blank} both business and leisure travelers.",
            "She {verb}s {blank} her clients' every request.",
            "The new service {verb}s {blank} a younger demographic."
        ],
        options: ["to", "for", "at", "with"]
    },
    {
        verb: "subscribe", particle: "to", phrase: "subscribe to", category: "academic", level: "college",
        meaning: "To agree with a belief, theory, or idea.",
        sentences: [
            "I don't {verb} {blank} that theory at all.",
            "She {verb}s {blank} the idea that education is a lifelong process.",
            "Many scholars {verb} {blank} this interpretation of the text.",
            "He doesn't {verb} {blank} the view that money brings happiness."
        ],
        options: ["to", "with", "for", "in"]
    },
    {
        verb: "adhere", particle: "to", phrase: "adhere to", category: "academic", level: "high",
        meaning: "To follow rules or principles strictly.",
        sentences: [
            "All employees must {verb} {blank} the company's code of conduct.",
            "She {verb}s {blank} a strict daily routine.",
            "The manufacturer {verb}s {blank} international safety standards.",
            "It's important to {verb} {blank} the guidelines set by the committee."
        ],
        options: ["to", "with", "by", "on"]
    },
    {
        verb: "aspire", particle: "to", phrase: "aspire to", category: "emotion", level: "high",
        meaning: "To have ambition or a strong desire to achieve something.",
        sentences: [
            "She {verb}s {blank} become a world-renowned surgeon.",
            "Many young athletes {verb} {blank} compete at the Olympic level.",
            "He {verb}s {blank} greatness in everything he does.",
            "The students {verb} {blank} make a difference in their communities."
        ],
        options: ["to", "for", "at", "toward"]
    },
    {
        verb: "resort", particle: "to", phrase: "resort to", category: "daily", level: "high",
        meaning: "To use something as a last option when all else fails.",
        sentences: [
            "We had to {verb} {blank} drastic measures to meet the deadline.",
            "She {verb}ed {blank} borrowing money from friends.",
            "The company {verb}ed {blank} layoffs to cut costs.",
            "He refuses to {verb} {blank} dishonesty no matter the situation."
        ],
        options: ["to", "for", "into", "with"]
    },
    {
        verb: "dwell", particle: "upon", phrase: "dwell upon", category: "academic", level: "college",
        meaning: "To think or talk about something at length, especially something negative.",
        sentences: [
            "There's no point {verb}ing {blank} mistakes you can't undo.",
            "The author {verb}s {blank} themes of loss and redemption.",
            "Try not to {verb} {blank} the things that went wrong.",
            "She {verb}t {blank} the criticism for days after the review."
        ],
        options: ["upon", "over", "on", "about"]
    },
    {
        verb: "veg", particle: "out", phrase: "veg out", category: "daily", level: "middle",
        meaning: "To relax and do nothing, typically while watching television.",
        sentences: [
            "After a long week, I just want to {verb} {blank} on the couch.",
            "They spent the entire Sunday {verb}ging {blank} in front of the TV.",
            "She loves {verb}ging {blank} with snacks and a good movie.",
            "Sometimes you just need to {verb} {blank} and recharge."
        ],
        options: ["out", "off", "in", "up"]
    },
    {
        verb: "geek", particle: "out", phrase: "geek out", category: "daily", level: "middle",
        meaning: "To be very enthusiastic or excited about a particular subject or hobby.",
        sentences: [
            "He {verb}ed {blank} over the new science fiction movie trailer.",
            "She loves to {verb} {blank} about vintage vinyl records.",
            "The kids {verb}ed {blank} when they visited the space museum.",
            "We completely {verb}ed {blank} talking about the latest video game."
        ],
        options: ["out", "on", "up", "over"]
    },
    {
        verb: "pig", particle: "out", phrase: "pig out", category: "daily", level: "middle",
        meaning: "To eat a large amount of food in a greedy or excessive way.",
        sentences: [
            "We {verb}ged {blank} on pizza and ice cream at the party.",
            "She tends to {verb} {blank} when she's feeling stressed.",
            "Don't {verb} {blank} before the big race tomorrow.",
            "They {verb}ged {blank} at the all-you-can-eat buffet."
        ],
        options: ["out", "on", "in", "up"]
    },
    {
        verb: "goof", particle: "off", phrase: "goof off", category: "daily", level: "middle",
        meaning: "To waste time or be lazy instead of doing what you should be doing.",
        sentences: [
            "Stop {verb}ing {blank} and finish your homework.",
            "The kids spent the afternoon {verb}ing {blank} in the backyard.",
            "He got in trouble for {verb}ing {blank} during class.",
            "We {verb}ed {blank} all day instead of studying for the test."
        ],
        options: ["off", "out", "around", "up"]
    },
    {
        verb: "wimp", particle: "out", phrase: "wimp out", category: "daily", level: "middle",
        meaning: "To fail to do something because you are too scared or lack courage.",
        sentences: [
            "He was going to try skydiving but {verb}ed {blank} at the last second.",
            "Don't {verb} {blank} — just ask for the raise.",
            "She {verb}ed {blank} of the haunted house before even entering.",
            "If you {verb} {blank} now, you'll regret it later."
        ],
        options: ["out", "off", "away", "up"]
    },
    {
        verb: "hang", particle: "on to", phrase: "hang on to", category: "emotion", level: "high",
        meaning: "To keep something and not let go of it, either physically or emotionally.",
        sentences: [
            "She {verb}s {blank} old letters from her college friends.",
            "You should {verb} {blank} that receipt in case you need a refund.",
            "He {verb}s {blank} hope even in the toughest times.",
            "{verb} {blank} your ticket — you'll need it to exit."
        ],
        options: ["on to", "up to", "in to", "off to"]
    },
    {
        verb: "let", particle: "go of", phrase: "let go of", category: "emotion", level: "middle",
        meaning: "To release something physically or emotionally; to accept a loss and move on.",
        sentences: [
            "It's time to {verb} {blank} the past and focus on the future.",
            "She finally {verb} {blank} her resentment toward her former boss.",
            "He struggled to {verb} {blank} the memories of his childhood home.",
            "Learning to {verb} {blank} expectations can bring great peace of mind."
        ],
        options: ["go of", "go on", "go at", "go to"]
    }
];
