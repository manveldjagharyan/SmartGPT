const responses = [
    {
        patterns: ['hi', 'hello', 'barev', 'բարև', 'привет', 'ողջույն'],
        answers: [
            'Hi there! How are you feeling today?',
            'Hello! What brings you here today?',
            'Hey! How can I assist you?'
        ]
    },
    {
        patterns: ['how are you', 'feel', "what's up", 'ինչպես ես', 'ինչ կա', 'ինչ ես անում'],
        answers: [
            "I'm great, thanks for asking! You?",
            "Feeling good! How about you?"
        ]
    },
    {
        patterns: ['i am fine', "i'm fine", 'im fine', 'good', 'fine', 'լավ', 'շատ լավ', 'հիանալի'],
        answers: [
            'Glad to hear that! How can I help you today?',
            'Great! What would you like to do?'
        ]
    },
    {
        patterns: ['who are you', 'what can you do', 'what are you doing', 'ով ես դու', 'ով ես', 'ինչ ես անում', 'ինչ կարող ես անել'],
        answers: [
            "I'm a smart little chatbot here to help you!",
            "Think of me as your digital buddy."
        ]
    },
    {
        patterns: ['thank you', 'thanks', 'շնորհակալություն', 'спасибо'],
        answers: [
            "You're welcome!",
            'No problem at all!',
            'Anytime!'
        ]
    },
    {
        patterns: ['what is your name', 'your name', 'como te llamas', 'ինչ անուն ունես', 'как тебя зовут'],
        answers: [
            'You can call me Chatbot.',
            "I'm just your virtual assistant.",
            'I go by many names, but Chatbot works.'
        ]
    },
    {
        patterns: ['how old are you', 'քանի տարեկան ես', 'сколько тебе лет'],
        answers: [
            "I was created recently, so I'm quite young!",
            "I don't age like humans do.",
            "Let's just say I'm timeless."
        ]
    },
    {
        patterns: ['where are you from', 'որտեղից ես', 'откуда ты'],
        answers: [
            'I live in the cloud!',
            'From the digital world.',
            'Straight out of the server room.'
        ]
    },
    {
        patterns: ['do you love me', 'սիրում ես ինձ', 'ты меня любишь'],
        answers: [
            'I like everyone equally!',
            'As much as a bot can love, sure!',
            'I appreciate you!'
        ]
    },
    {
        patterns: ['tell me a joke', 'joke', 'կատակ', 'анекдот'],
        answers: [
            'Why don’t scientists trust atoms? Because they make up everything.',
            'What do you call fake spaghetti? An impasta.',
            'I would tell you a construction joke, but I’m still working on it.'
        ]
    },
    {
        patterns: ['what is the weather', 'weather', 'եղանակը', 'погода'],
        answers: [
            "I can't access live weather yet, but you can check a weather app!",
            'It depends where you are — sunny in my cloud though!',
            'Maybe cloudy, maybe sunny — I recommend looking out the window!'
        ]
    },
    {
        patterns: ['are you real', 'դու իրական ես', 'ты настоящий'],
        answers: [
            'As real as your Wi-Fi connection!',
            'I exist in the digital realm.',
            "I may not be human, but I'm here with you."
        ]
    },
    {
        patterns: ['do you speak russian', 'russian', 'по-русски'],
        answers: [
            'I understand a little Russian, but I reply in English.',
            'I get the meaning, but I respond in English!',
            'Yes, I can recognize Russian text.'
        ]
    },
    {
        patterns: ['do you speak armenian', 'armenian', 'հայերեն'],
        answers: [
            'I understand Armenian too, but I answer in English.',
            "Sure! You can talk to me in Armenian, I'll reply in English.",
            'Yes, I recognize Armenian.'
        ]
    },
    {
        patterns: ['what time is it', 'time', 'ժամը քանիսն է', 'который час'],
        answers: [
            "I don't have access to a clock, but your device does!",
            'Check the time on your screen — it never lies.',
            "Good question! But I can't tell time just yet."
        ]
    },
    {
        patterns: ['what day is it', 'day', 'որը օրն է', 'какой сегодня день'],
        answers: [
            'Today is a great day!',
            'Check your calendar — every day is special!',
            "It's today.That's what matters!"
        ]
    },
    {
        patterns: ['i am bored', "i'm bored", 'ձանձրացել եմ', 'мне скучно'],
        answers: [
            "Let's chat! I'm here for you.",
            'Wanna hear a joke?',
            'Maybe try something creative!'
        ]
    },
    {
        patterns: ['i am sad', "i'm sad", 'տխուր եմ', 'грустно'],
        answers: [
            "I'm here for you.Wanna talk ? ",
            "It's okay to feel sad.I'm listening.",
            'Sending you good vibes!'
        ]
    },
    {
        patterns: ['i am happy', "i'm happy", 'ուրախ եմ', 'радость'],
        answers: [
            "That's awesome to hear!",
            "Yay! I'm happy too!",
            'Keep smiling!'
        ]
    },
    {
        patterns: ['can you help me', 'help', 'օգնիր', 'помоги'],
        answers: [
            'Of course! What do you need help with?',
            'Sure, just tell me what you need.',
            "Let me know what you're struggling with."
        ]
    },
    {
        patterns: ['random number', 'պատահական թիվ', 'случайное число'],
        answers: [
            '1',
            '2',
            '3',
            '4',
            '5',
            '6',
            '7',
            '8',
            '9',
            '10',
        ]
    },
    {
        patterns: ['random name', 'պատահական անուն', 'случайное имя'],
        answers: [
            'John',
            'Jane',
            'Alex',
            'Mary',
            'Michael',
            'Sarah',
            'David',
            'Emily',
            'Chris',
            'Anna',
            'James',
            'Laura',
            'Robert',
            'Linda',
            'William',
            'Jessica',
            'Daniel',
            'Sophia',
            'Matthew',
            'Olivia',
            'Andrew',
            'Isabella',
            'Joshua',
            'Mia',
            'Ethan',
            'Ava',
            'Jacob',
            'Charlotte',
            'Ryan',
            'Amelia',
            'Alexander',
            'Harper',
            'Benjamin',
            'Evelyn',
            'Samuel',
            'Abigail',
            'Nathan',
            'Ella',
            'Christopher',
            'Sofia',
            'Elijah',
            'Grace',
            'Gabriel',
            'Chloe',
            'Lucas',
            'Lily',
            'Henry',
            'Aria',
            'Jack',
            'Zoe',
            'Owen',
            'Nora',
            'Dylan',
            'Scarlett',
            'Leo',
            'Hannah',
            'Isaac',
            'Liam',
            'Aiden',
            'Mason',
        ]
    },
    {
        patterns: ['random country', 'պատահական երկիր', 'պատահական պետություն', 'случайное государство', 'случайная страна'],
        answers: [
            'Armenia',
            'Russia',
            'United States',
            'Canada',
            'Germany',
            'France',
            'Italy',
            'Spain',
            'Japan',
            'China',
            'India',
            'Brazil',
            'Australia',
            'South Africa',
            'Mexico',
            'United Kingdom',
            'Netherlands',
            'Sweden',
            'Norway',
            'Finland',
            'Denmark',
            'Poland',
            'Greece',
            'Portugal',
            'Turkey',
            'Egypt',
            'Saudi Arabia',
            'United Arab Emirates',
            'South Korea',
            'Argentina',
            'Chile',
            'Colombia',
            'Peru',
            'Venezuela',
            'Thailand',
            'Malaysia',
            'Indonesia',
            'Philippines',
            'Vietnam',
            'Singapore',
            'New Zealand',
            'Ireland',
            'Belgium',
            'Switzerland',
            'Austria',
            'Czech Republic',
            'Hungary',
            'Romania',
            'Bulgaria',
            'Croatia',
            'Serbia',
            'Slovakia',
            'Slovenia',
            'Ukraine',
            'Belarus',
            'Lithuania',
            'Latvia',
            'Estonia',
            'Iceland',
            'Finland',
            'Luxembourg',
            'Monaco',
            'Liechtenstein',
            'Malta',
            'Cyprus',
            'Andorra',
            'San Marino',
            'Vatican City',
            'Kosovo',
            'Moldova',
            'Bosnia and Herzegovina',
            'Albania',
            'North Macedonia',
            'Montenegro',
        ]
    },
    {
        patterns: ['random fruit', 'պատահական միրգ', 'случайный фрукт'],
        answers: [
            'Apple',
            'Banana',
            'Orange',
            'Grapes',
            'Strawberry',
            'Blueberry',
            'Pineapple',
            'Mango',
            'Peach',
            'Watermelon',
            'Kiwi',
            'Papaya',
            'Cherry',
            'Plum',
            'Pear',
            'Raspberry',
            'Blackberry',
            'Coconut',
            'Lemon',
            'Lime'
        ]
    },
    {
        patterns: ['random animal', 'պատահական կենդանի', 'случайное животное'],
        answers: [
            'Dog',
            'Cat',
            'Elephant',
            'Lion',
            'Tiger',
            'Bear',
            'Giraffe',
            'Zebra',
            'Kangaroo',
            'Panda',
            'Dolphin',
            'Whale',
            'Shark',
            'Eagle',
            'Parrot',
            'Frog',
            'Rabbit',
            'Squirrel',
            'Fox',
            'Wolf',
            'Hedgehog',
            'Turtle',
            'Snake',
            'Crocodile',
            'Octopus',
            'Crab',
            'Jellyfish',
            'Ant',
            'Bee',
            'Butterfly',
            'Ladybug',
            'Dragonfly',
            'Grasshopper',
            'Spider',
            'Scorpion',
            'Snail',
            'Worm',
            'Mole',
            'Bat',
            'Owl',
            'Peacock',
            'Penguin',
            'Koala',
            'Sloth',
            'Armadillo',
        ]
    },
    {
        patterns: ['random vegetable', 'պատահական բանջարեղեն', 'случайный овощ'],
        answers: [
            'Carrot',
            'Broccoli',
            'Spinach',
            'Potato',
            'Tomato',
            'Cucumber',
            'Bell Pepper',
            'Onion',
            'Garlic',
            'Cauliflower',
            'Lettuce',
            'Cabbage',
            'Eggplant',
            'Zucchini',
            'Radish',
            'Beetroot',
            'Pumpkin',
            'Sweet Potato',
            'Green Bean',
            'Peas',
            'Corn',
            'Celery',
            'Asparagus',
            'Artichoke',
            'Brussels Sprout',
            'Kale',
            'Swiss Chard',
            'Leek',
            'Turnip',
            'Parsnip',
            'Bok Choy',
            'Fennel',
            'Okra',
            'Chayote',
            'Jicama',
            'Rutabaga',
            'Endive',
            'Arugula',
            'Radicchio',
        ]
    },
    {
        patterns: ['random color', 'պատահական գույն', 'случайный цвет'],
        answers: [
            'Red',
            'Blue',
            'Green',
            'Yellow',
            'Orange',
            'Purple',
            'Pink',
            'Brown',
            'Black',
            'White',
            'Gray',
            'Cyan',
            'Magenta',
            'Lime',
            'Teal',
            'Navy',
            'Maroon',
            'Olive',
            'Coral',
            'Turquoise',
            'Lavender',
            'Peach',
            'Gold',
            'Silver',
            'Bronze',
            'Indigo',
            'Violet',
            'Crimson',
            'Aqua',
            'Beige',
            'Mint',
            'Salmon',
            'Plum',
            'Chocolate',
            'Khaki',
            'Ivory',
            'Tan',
            'Periwinkle',
            'Sienna',
            'Slate',
            'Charcoal',
            'Azure',
            'Burgundy',
            'Fuchsia',
            'Lilac',
            'Mauve',
            'Peacock',
            'Rose',
            'Sepia',
            'Teal Blue',
            'Sky Blue',
            'Forest Green',
            'Olive Green',
            'Burnt Orange',
            'Mustard Yellow',
            'Dusty Pink',
            'Powder Blue',
            'Mint Green',
            'Lavender Gray',
            'Pale Yellow',
            'Light Coral',
        ]
    },
    {
        patterns: ['random word', 'պատահական բառ', 'случайное слово'],
        answers: [
            'Adventure',
            'Harmony',
            'Serendipity',
            'Euphoria',
            'Whimsy',
            'Solitude',
            'Epiphany',
            'Tranquility',
            'Radiance',
            'Resilience',
            'Enigma',
            'Luminescence',
            'Zephyr',
            'Labyrinth',
            'Symphony',
            'Alchemy',
            'Nostalgia',
            'Elysium',
            'Celestial',
            'Aurora',
            'Nebula',
            'Quintessence',
            'Paradox',
            'Kaleidoscope',
            'Serenity',
            'Aether',
            'Chronicle',
            'Odyssey',
            'Myriad',
            'Ephemeral',
            'Vellichor',
            'Sonorous',
            'Luminous',
            'Ethereal',
            'Halcyon',
            'Cacophony',
            'Labyrinthine',
            'Iridescent',
            'Sonder',
            'Petrichor',
            'Limerence',
            'Eudaimonia',
            'Sonnet',
            'Epigraph',
            'Quixotic',
            'Aesthete',
            'Bucolic',
            'Cynosure',
            'Dulcet',
            'Ebullient',
            'Felicity',
            'Gossamer',
            'Hiraeth',
            'Ineffable',
            'Jubilant',
            'Kismet',
            'Lachrymose',
            'Mellifluous',
            'Nefarious',
            'Oblivion',
            'Peregrine',
            'Quagmire',
            'Rhapsody',
            'Sagacity',
            'Tesseract',
            'Ubiquitous',
            'Vicarious',
            'Wanderlust',
            'Xenophobia',
            'Yonder',
            'Zealot',
            'Axiom',
            'Benevolent',
            'Camaraderie',
            'Dichotomy',
            'Ebullience',
            'Fathom',
            'Gregarious',
            'Hapless',
        ]
    },
    {
        patterns: ['random sentence', 'պատահական նախադասություն', 'случайная фраза'],
        answers: [
            'The sun sets over the horizon, painting the sky in hues of orange and pink.',
            'A gentle breeze rustles the leaves, carrying the scent of blooming flowers.',
            'In the quiet of the night, stars twinkle like diamonds scattered across a velvet sky.',
            'The sound of waves crashing against the shore creates a soothing melody.',
            'A lone bird sings its song, echoing through the stillness of the morning.',
            'The mountains stand tall and majestic, their peaks kissed by clouds.',
            'A child’s laughter fills the air, bringing joy to everyone around.',
            'The aroma of freshly brewed coffee wafts through the room, inviting warmth and comfort.',
            'Raindrops dance on the pavement, creating a symphony of nature’s rhythm.',
            'A rainbow arches across the sky after a gentle rain, a promise of hope and beauty.',
            'The flickering candlelight casts shadows on the walls, creating a cozy atmosphere.',
            'A book lies open, its pages filled with stories waiting to be discovered.',
            'The city lights twinkle like stars, illuminating the night with their glow.',
            'A soft melody plays in the background, setting a peaceful tone for the evening.',
            'The scent of pine fills the air as the forest awakens with the dawn.',
            'A butterfly flutters gracefully from flower to flower, spreading beauty wherever it goes.',
            'The laughter of friends echoes through the room, creating memories that will last a lifetime.',
            'A gentle snowfall blankets the ground, transforming the world into a winter wonderland.',
            'The sound of a distant train whistle carries a sense of adventure and wanderlust.',
            'A warm hug can melt away the worries of the day, bringing comfort and solace.',
            'The first rays of sunlight peek through the curtains, signaling a new beginning.',
            'A handwritten letter carries the warmth of human connection across miles.',
            'The taste of homemade cookies fresh from the oven brings back childhood memories.',
            'A campfire crackles and pops, its flames dancing in the night air.',
            'The scent of rain on dry earth is a reminder of nature’s beauty and resilience.',
            'A gentle touch can convey more than words ever could, bridging the gap between hearts.',
            'The sound of laughter is the music of the soul, bringing people together in joy.',
            'A photograph captures a moment in time, preserving memories for years to come.',
            'The rustling of leaves in the wind creates a soothing symphony of nature.',
            'A smile can brighten even the darkest of days, spreading warmth and kindness.',
            'The taste of fresh fruit on a summer day is a burst of sweetness and joy.',
            'A walk in the park can clear the mind and rejuvenate the spirit.',
            'The sound of a babbling brook brings a sense of peace and tranquility.',
            'A starry night sky invites dreams and wonder, reminding us of the universe’s vastness.',
            'The scent of blooming flowers signals the arrival of spring and new beginnings.',
            'A cozy blanket on a chilly evening wraps you in warmth and comfort.',
            'The laughter of children playing in the park is a reminder of the simple joys of life',
            'A handwritten note can brighten someone’s day, spreading love and positivity.',
            'The sound of a piano playing softly in the background creates a serene ambiance.',
            'A gentle touch can heal wounds that words cannot reach.',
            'The taste of chocolate melting in your mouth is pure bliss.',
            'A sunset paints the sky with colors that words cannot describe.',
            'The sound of rain tapping against the window creates a calming atmosphere.',
            'A warm cup of tea on a cold day is a hug in a mug.',
            'The sight of a blooming flower is a reminder of nature’s beauty and resilience.',
            'A handwritten poem captures the essence of emotions in a few carefully chosen words.',
        ]
    },
    {
        patterns: ['what is your name', 'who are you', 'քո անունը ինչ է', 'как тебя зовут'],
        answers: [
            "I'm your chatbot assistant!",
            "You can just call me Bot.",
            "No fancy names, just here to help."
        ]
    },
    {
        patterns: ['how old are you', 'քանի տարեկան ես', 'сколько тебе лет'],
        answers: [
            "I'm timeless! Age doesn't apply to me.",
            "Old enough to answer questions, young enough to learn more.",
            "I'm born from code, no age here."
        ]
    },
    {
        patterns: ['tell me a joke', 'joke', 'make me laugh', 'կատակ արա', 'анекдот'],
        answers: [
            "Why did the computer go to therapy? It had too many bytes!",
            "Why don't robots get scared? Because they have nerves of steel!",
            "I'm reading a book on anti-gravity. It's impossible to put down!"
        ]
    },
    {
        patterns: ['what is the time', 'what time is it', 'ժամը քանիսն է', 'который час'],
        answers: [
            "Check your device – I'm not wearing a watch 😅",
            "It's always chatbot time!",
            "I don't keep track of time, but you probably should!"
        ]
    },
    {
        patterns: ['what is your favorite color', 'what color do you like', 'սիրված գույնդ', 'любимый цвет'],
        answers: [
            "I like the color of data streams... so blue, maybe?",
            "Code grey with a bit of neon green!",
            "I see the world in HEX values 😎"
        ]
    },
    {
        patterns: ['do you love me', 'love me', 'սիրու՞մ ես ինձ', 'ты меня любишь'],
        answers: [
            "I love helping people – that counts, right?",
            "Let's keep things professional 😅",
            "Only as much as a chatbot possibly can!"
        ]
    },
    {
        patterns: ['can you help me', 'help me', 'օգնիր ինձ', 'помоги мне'],
        answers: [
            "Of course! What do you need help with?",
            "Just tell me what you need, I'm here.",
            "Absolutely! Shoot your question."
        ]
    },
    {
        patterns: ['tell me something interesting', 'interesting fact', 'հետաքրքիր փաստ', 'интересный факт'],
        answers: [
            "Did you know that octopuses have three hearts?",
            "A bolt of lightning contains enough energy to toast 100,000 slices of bread.",
            "The Eiffel Tower can be 15 cm taller during summer."
        ]
    },
    {
        patterns: ['bye', 'goodbye', 'ցտեսություն', 'пока'],
        answers: [
            "Goodbye! Come back soon!",
            "See you later! Stay awesome.",
            "Bye! I'll be here when you return."
        ]
    },
    {
        patterns: ['thank you', 'thanks', 'շնորհակալ եմ', 'спасибо'],
        answers: [
            "You're welcome!",
            "No problem at all!",
            "Anytime!"
        ]
    },
    {
        patterns: [
            'capital of japan', 'what is the capital of japan', 'ճապոնիայի մայրաքաղաքը', 'столица японии'
        ],
        answers: [
            'The capital of Japan is Tokyo.'
        ]
    },
    {
        patterns: [
            'highest waterfall', 'tallest waterfall', 'what is the tallest waterfall', 'ամենաբարձր ջրվեժը', 'самый высокий водопад'
        ],
        answers: [
            'Angel Falls in Venezuela is the tallest waterfall in the world.'
        ]
    },
    {
        patterns: [
            'deepest ocean trench', 'what is the deepest part of the ocean', 'օվկիանոսի ամենախորը վայրը', 'самое глубокое место в океане'
        ],
        answers: [
            "The Mariana Trench is the deepest part of the world's oceans."
        ]
    },
    {
        patterns: [
            'largest island', 'biggest island', 'what is the largest island', 'ամենամեծ կղզին', 'самый большой остров'
        ],
        answers: [
            'Greenland is the largest island in the world.'
        ]
    },
    {
        patterns: [
            'sun rises', 'where does the sun rise', 'որտեղից է արևը ծագում', 'где встает солнце'
        ],
        answers: [
            'The Sun rises in the East.'
        ]
    },
    {
        patterns: [
            'sun sets', 'where does the sun set', 'որտեղ է մայր է մտնում արևը', 'где заходит солнце'
        ],
        answers: [
            'The Sun sets in the West.'
        ]
    },
    {
        patterns: [
            'largest lake', 'what is the biggest lake', 'ամենամեծ լիճը', 'самое большое озеро'
        ],
        answers: [
            'The Caspian Sea is the largest enclosed inland body of water on Earth, often called the largest lake.'
        ]
    },
    {
        patterns: [
            'largest city', 'what is the biggest city', 'ամենամեծ քաղաքը', 'самый большой город'
        ],
        answers: [
            'Tokyo, Japan is the largest city in the world by population.'
        ]
    },
    {
        patterns: [
            'deserts in africa', 'african deserts', 'աֆրիկայի անապատները', 'пустыни африки'
        ],
        answers: [
            'The Sahara is the largest desert in Africa, but there are others like the Kalahari and Namib deserts.'
        ]
    },
    {
        patterns: [
            'what is a peninsula', 'define peninsula', 'ինչ է թերակղզին', 'что такое полуостров'
        ],
        answers: [
            'A peninsula is a landform surrounded by water on three sides and connected to the mainland.'
        ]
    },
    {
        patterns: [
            'tropic of cancer', 'what is the tropic of cancer', 'ինչ է Խեցգետնի հողագիծը', 'что такое тропик рака'
        ],
        answers: [
            'The Tropic of Cancer is a line of latitude located at approximately 23.5° north of the Equator.'
        ]
    },
    {
        patterns: [
            'antarctica animals', 'what animals live in antarctica', 'ինչ կենդանիներ են ապրում անտարկտիդայում', 'какие животные живут в антарктиде'
        ],
        answers: [
            'Animals in Antarctica include penguins, seals, and whales.'
        ]
    },
    {
        patterns: [
            'mountains in europe', 'europe mountain range', 'եվրոպայի լեռները', 'горы европы'
        ],
        answers: [
            'Major mountain ranges in Europe include the Alps, the Carpathians, and the Pyrenees.'
        ]
    },
    {
        patterns: [
            'rainforest', 'what is a rainforest', 'ինչ է անձրևային անտառը', 'что такое тропический лес'
        ],
        answers: [
            'A rainforest is a dense forest typically found in tropical areas with high annual rainfall.'
        ]
    },
    {
        patterns: [
            'which countries are in africa', 'african countries', 'որ երկրներն են աֆրիկայում', 'какие страны в африке'
        ],
        answers: [
            'Africa is made up of 54 countries, including Nigeria, Egypt, South Africa, and Kenya.'
        ]
    },
    {
        patterns: [
            'who was napoleon', 'նապոլեոն ով էր', 'кто такой наполеон'
        ],
        answers: [
            'Napoleon Bonaparte was a French military leader who became Emperor and had a major impact on European history.'
        ]
    },
    {
        patterns: [
            'when did world war 2 start', 'երբ սկսվեց երկրորդ համաշխարհային պատերազմը', 'когда началась вторая мировая война'
        ],
        answers: [
            'World War II started on September 1, 1939.'
        ]
    },
    {
        patterns: [
            'who discovered america', 'ով հայտնաբերեց ամերիկան', 'кто открыл америку'
        ],
        answers: [
            'Christopher Columbus is traditionally credited with discovering America in 1492.'
        ]
    },
    {
        patterns: [
            'when was the roman empire', 'երբ էր Հռոմեական կայսրությունը', 'когда была римская империя'
        ],
        answers: [
            'The Roman Empire existed from 27 BC to 476 AD in the West.'
        ]
    },
    {
        patterns: [
            'who was cleopatra', 'կլեոպատրան ով էր', 'кто такая клеопатра'
        ],
        answers: [
            'Cleopatra was the last active ruler of the Ptolemaic Kingdom of Egypt.'
        ]
    },
    {
        patterns: [
            'when was the french revolution', 'երբ էր ֆրանսիական հեղափոխությունը', 'когда была французская революция'
        ],
        answers: [
            'The French Revolution began in 1789 and lasted until 1799.'
        ]
    },
    {
        patterns: [
            'who was genghis khan', 'չինգիզ խանը ով էր', 'кто такой чингисхан'
        ],
        answers: [
            'Genghis Khan was the founder and first Great Khan of the Mongol Empire.'
        ]
    },
    {
        patterns: [
            'what was the cold war', 'ինչ էր սառը պատերազմը', 'что такое холодная война'
        ],
        answers: [
            'The Cold War was a period of political tension between the US and the Soviet Union after World War II.'
        ]
    },
    {
        patterns: [
            'who was hitler', 'հիտլերը ով էր', 'кто такой гитлер'
        ],
        answers: [
            'Adolf Hitler was the dictator of Nazi Germany and a key figure in World War II.'
        ]
    },
    {
        patterns: [
            'when did armenia become independent', 'երբ անկախացավ հայաստանը', 'когда армения стала независимой'
        ],
        answers: [
            'Armenia declared independence from the Soviet Union on September 21, 1991.'
        ]
    },
    {
        patterns: [
            'who was abraham lincoln', 'աբրահամ լինքոլնը ով էր', 'кто такой линкольн'
        ],
        answers: [
            'Abraham Lincoln was the 16th president of the United States who led the country during the Civil War.'
        ]
    },
    {
        patterns: [
            'what was the berlin wall', 'ինչ էր բեռլինյան պատը', 'что такое берлинская стена'
        ],
        answers: [
            'The Berlin Wall was a barrier that divided East and West Berlin from 1961 to 1989.'
        ]
    },
    {
        patterns: [
            'who were the vikings', 'վիկինգները ովքեր էին', 'кто такие викинги'
        ],
        answers: [
            'The Vikings were Scandinavian seafarers who raided and traded from the 8th to 11th centuries.'
        ]
    },
    {
        patterns: [
            'what caused world war 1', 'ինչն էր առաջին համաշխարհային պատերազմի պատճառը', 'что вызвало первую мировую войну'
        ],
        answers: [
            'World War I was triggered by the assassination of Archduke Franz Ferdinand in 1914.'
        ]
    },
    {
        patterns: [
            'when was the soviet union formed', 'երբ հիմնվեց խորհրդային միությունը', 'когда образовался советский союз'
        ],
        answers: [
            'The Soviet Union was officially established in 1922.'
        ]
    },
    {
        patterns: [
            'what is dna', 'explain dna', 'ինչ է դնթ', 'դնթ ի՞նչ է նշանակում', 'что такое днк', 'объясни днк'
        ],
        answers: [
            'DNA (Deoxyribonucleic Acid) is the molecule that carries genetic instructions for living organisms.'
        ]
    },
    {
        patterns: [
            'what is lightning', 'how does lightning work', 'ինչպես է կայծակը առաջանում', 'կայծակը ինչ է', 'как образуется молния', 'что такое молния'
        ],
        answers: [
            'Lightning is a discharge of static electricity during a thunderstorm.'
        ]
    },
    {
        patterns: [
            'what is an eclipse', 'solar eclipse', 'արեւի խավարում', 'լուսնխավար', 'что такое затмение', 'солнечное затмение'
        ],
        answers: [
            'An eclipse occurs when one celestial body moves into the shadow of another.'
        ]
    },
    {
        patterns: [
            'what is the internet', 'how does the internet work', 'ինտերնետը ինչ է', 'ինչպես է աշխատում ինտերնետը', 'что такое интернет', 'как работает интернет'
        ],
        answers: [
            'The internet is a global network that connects millions of computers for sharing information.'
        ]
    },
    {
        patterns: [
            'how does a plane fly', 'why can planes fly', 'ինչպես են ինքնաթիռները թռչում', 'ինքնաթիռի թռիչք', 'почему летают самолеты', 'как летают самолеты'
        ],
        answers: [
            'Planes fly due to lift generated by their wings as air flows over them.'
        ]
    },
    {
        patterns: [
            'how do vaccines work', 'vaccine explanation', 'ինչպես են աշխատում պատվաստումները', 'պատվաստանյութը ինչպես է գործում', 'как работают вакцины'
        ],
        answers: [
            'Vaccines train the immune system to recognize and fight specific pathogens.'
        ]
    },
    {
        patterns: [
            'what is gravity', 'explain gravity', 'ինչ է ձգողությունը', 'ծանրության ուժը ինչ է', 'что такое гравитация', 'объясни гравитацию'
        ],
        answers: [
            'Gravity is the force that attracts objects with mass toward each other.'
        ]
    },
    {
        patterns: [
            'what is the sun made of', 'sun composition', 'արեւը ինչից է կազմված', 'արեւի բաղադրությունը', 'из чего состоит солнце', 'что внутри солнца'
        ],
        answers: [
            'The Sun is primarily made of hydrogen and helium gases.'
        ]
    },
    {
        patterns: [
            'how does photosynthesis work', 'photosynthesis explained', 'ֆոտոսինթեզ ինչ է', 'ինչպես է կատարվում ֆոտոսինթեզը', 'что такое фотосинтез'
        ],
        answers: [
            'Photosynthesis is the process where plants convert sunlight into energy.'
        ]
    },
    {
        patterns: [
            'what is a black hole', 'black hole meaning', 'սեւ խոռոչը ինչ է', 'ինչ է սև խոռոչը', 'что такое чёрная дыра', 'черная дыра объяснение'
        ],
        answers: [
            'A black hole is a region in space where gravity is so strong that nothing can escape from it.'
        ]
    },
    {
        patterns: [
            'what causes rain', 'how does it rain', 'ինչպես է անձրևը առաջանում', 'անձրևի առաջացման պատճառը', 'как образуется дождь'
        ],
        answers: [
            'Rain forms when water vapor condenses in clouds and becomes heavy enough to fall.'
        ]
    },
    {
        patterns: [
            'how does a computer work', 'explain computer', 'համակարգիչը ինչպես է աշխատում', 'ինչպես է գործում համակարգիչը', 'как работает компьютер'
        ],
        answers: [
            'A computer processes input data using hardware and software to produce output.'
        ]
    },
    {
        patterns: [
            'what is electricity', 'electricity explained', 'էլեկտրաէներգիան ինչ է', 'ինչ է էլեկտրական հոսանքը', 'что такое электричество'
        ],
        answers: [
            'Electricity is the flow of electric charge, typically through wires.'
        ]
    },
    {
        patterns: [
            'what is artificial intelligence', 'explain ai', 'արհեստական ինտելեկտը ինչ է', 'ինչ է արհեստական բանականությունը', 'что такое искусственный интеллект'
        ],
        answers: [
            'Artificial Intelligence is the simulation of human intelligence in machines.'
        ]
    },
    {
        patterns: [
            'how does a camera work', 'camera explanation', 'տեսախցիկը ինչպես է աշխատում', 'տեսախցիկի մեխանիզմը', 'как работает камера'
        ],
        answers: [
            'A camera captures light through a lens and records it onto a sensor or film.'
        ]
    },
    {
        patterns: [
            'which is the tallest building', 'tallest skyscraper', 'ամենաբարձր շենքը որն է', 'որտեղ է աշխարհի ամենաբարձր շենքը', 'самое высокое здание', 'где самое высокое здание'
        ],
        answers: [
            'The tallest building in the world is the Burj Khalifa in Dubai, standing at 828 meters.'
        ]
    },
    {
        patterns: [
            'what is the longest river', 'longest river in the world', 'ամենաերկար գետը որն է', 'աշխարհի ամենաերկար գետը', 'самая длинная река', 'река с самой большой длиной'
        ],
        answers: [
            'The Nile River is generally considered the longest river in the world, about 6,650 km long.'
        ]
    },
    {
        patterns: [
            'which is the coldest place', 'coldest location on earth', 'ամենացուրտ վայրը որն է', 'որտեղ է աշխարհի ամենացուրտ վայրը', 'самое холодное место на земле', 'где самая низкая температура'
        ],
        answers: [
            'The coldest place on Earth is Antarctica, specifically the East Antarctic Plateau.'
        ]
    },
    {
        patterns: [
            'what is the smallest country', 'smallest nation', 'ամենափոքր երկիրը որն է', 'ամենափոքր պետությունը', 'самая маленькая страна', 'какое государство самое маленькое'
        ],
        answers: [
            'The smallest country in the world is Vatican City, covering just 0.49 square kilometers.'
        ]
    },
    {
        patterns: [
            'what is the most spoken language', 'most used language', 'ամենաշատ խոսվող լեզուն որն է', 'աշխարհի ամենատարածված լեզուն', 'самый распространенный язык', 'на каком языке говорят больше всего'
        ],
        answers: [
            'The most spoken language in the world by number of native speakers is Mandarin Chinese.'
        ]
    },
    {
        patterns: [
            'what is the driest desert', 'driest place on earth', 'ամենաչոր անապատը որն է', 'ամենաչոր վայրը', 'самая сухая пустыня', 'где нет дождей'
        ],
        answers: [
            'The Atacama Desert in Chile is the driest non-polar desert on Earth.'
        ]
    },
    {
        patterns: [
            'which country has most population', 'most populous country', 'ամենաշատ բնակչություն ունեցող երկիրը', 'որտեղ է ամենաշատ մարդ', 'самая населенная страна', 'где живет больше всего людей'
        ],
        answers: [
            'India currently has the largest population in the world.'
        ]
    },
    {
        patterns: [
            'what is the largest island', 'biggest island', 'ամենամեծ կղզին որն է', 'աշխարհի ամենամեծ կղզին', 'самый большой остров', 'какой остров самый огромный'
        ],
        answers: [
            'Greenland is the largest island in the world that is not a continent.'
        ]
    },
    {
        patterns: [
            'what is the fastest animal', 'fastest land animal', 'ամենաարագ կենդանին որն է', 'արագավազ սավաննայի կենդանի', 'самое быстрое животное', 'самый быстрый зверь'
        ],
        answers: [
            'The cheetah is the fastest land animal, reaching speeds up to 120 km/h.'
        ]
    },
    {
        patterns: [
            'which is the deepest ocean point', 'deepest place in ocean', 'օվկիանոսի ամենախորը կետը', 'ամենախորը ջրային կետը', 'самая глубокая точка океана', 'где самая большая глубина'
        ],
        answers: [
            'The Mariana Trench contains the deepest point on Earth, known as Challenger Deep.'
        ]
    },
    {
        patterns: [
            'which country has most time zones', 'most time zones in a country', 'ամենաշատ ժամային գոտիներ ունեցող երկիրը', 'ժամային գոտիների քանակով առաջատարը', 'самое большое количество часовых поясов', 'где больше всего времени'
        ],
        answers: [
            'France has the most time zones due to its overseas territories—12 in total.'
        ]
    },
    {
        patterns: [
            'what is the oldest country', 'oldest nation', 'ամենահին երկիրը որն է', 'որը աշխարհում ամենահինն է', 'самая древняя страна', 'государство с древней историей'
        ],
        answers: [
            'San Marino is considered the oldest republic, founded in 301 AD.'
        ]
    },
    {
        patterns: [
            'what is the largest desert', 'biggest desert', 'ամենամեծ անապատը որն է', 'աշխարհի խոշորագույն անապատը', 'самая большая пустыня', 'какая пустыня самая обширная'
        ],
        answers: [
            'The largest desert in the world is Antarctica, classified as a cold desert.'
        ]
    },
    {
        patterns: [
            'what is the hottest temperature recorded', 'world record heat', 'ամենաբարձր ջերմաստիճանը', 'որտեղ է եղել ամենաշոգը', 'самая высокая температура', 'где была самая сильная жара'
        ],
        answers: [
            'The highest recorded temperature on Earth was 56.7°C (134°F) in Death Valley, California.'
        ]
    },
    {
        patterns: [
            'which continent has most countries', 'most countries in a continent', 'որ մայրցամաքում է ամենաշատ երկիրը', 'ամենաշատ երկիր ունեցող մայրցամաքը', 'на каком континенте больше всего стран'
        ],
        answers: [
            'Africa has the most countries of any continent, with 54 recognized sovereign nations.'
        ]
    },
    {
        patterns: [
            'how to deal with anxiety', 'what to do when anxious', 'ինչ անել երբ անհանգիստ ես', 'ինչպե՞ս հաղթահարել անհանգստությունը', 'как справиться с тревогой', 'что делать при тревоге'
        ],
        answers: [
            'Try deep breathing and grounding yourself in the present.',
            'Take a short walk, write down your thoughts, or talk to someone you trust.',
            'Anxiety is natural. Acknowledge it without judgment and let it pass like a wave.'
        ]
    },
    {
        patterns: [
            'how to make friends', 'tips for making new friends', 'ինչպե՞ս ընկերանալ', 'ինչպես նոր ընկերներ ձեռք բերել', 'как заводить друзей', 'советы по знакомству'
        ],
        answers: [
            'Start small conversations and be genuinely curious about others.',
            'Smile, listen more than you talk, and follow up after first meetings.',
            'Join activities or groups where you can meet like-minded people.'
        ]
    },
    {
        patterns: [
            'how to be confident', 'build self-confidence', 'ինչպե՞ս վստահ լինել ինքդ քո վրա', 'ինչ անել եթե վստահություն չունեմ', 'как стать уверенным в себе', 'как повысить самооценку'
        ],
        answers: [
            'Confidence grows by doing. Start with small wins.',
            'Focus on your strengths and accept that mistakes are part of learning.',
            'Stop comparing yourself to others. Your path is unique.'
        ]
    },
    {
        patterns: [
            'how to handle rejection', 'dealing with being rejected', 'ինչպե՞ս հաղթահարել մերժումը', 'մերժման դեպքում ինչ անել', 'как пережить отказ', 'что делать если тебя отвергли'
        ],
        answers: [
            'Rejection doesn’t mean you’re not enough — it’s redirection.',
            'Feel it, accept it, then move forward with a better understanding.',
            'Everyone experiences rejection. It’s how we grow stronger emotionally.'
        ]
    },
    {
        patterns: [
            'how to resolve conflicts', 'deal with arguments', 'ինչպե՞ս լուծել կոնֆլիկտները', 'վիճաբանության դեպքում ինչ անել', 'как решить конфликт', 'как вести себя при ссоре'
        ],
        answers: [
            'Stay calm, listen more than you speak, and avoid blame.',
            'Use “I feel” statements instead of accusations to express your point.',
            'Sometimes the best move is to take a break and return with a clear mind.'
        ]
    },
    {
        patterns: [
            'what is emotional intelligence', 'importance of EQ', 'ինչ է էմոցիոնալ ինտելեկտը', 'ինչու է կարևոր էմոցիոնալ ինտելեկտը', 'что такое эмоциональный интеллект', 'зачем нужен EQ'
        ],
        answers: [
            'It’s your ability to recognize, understand, and manage emotions—both yours and others’.',
            'EQ is crucial for building strong relationships and making wise decisions.',
            'People with high EQ tend to succeed more in life and work.'
        ]
    },
    {
        patterns: [
            'how to stop overthinking', 'overthinking tips', 'ինչպե՞ս դադարել շատ մտածել', 'մտքերից ազատվելը ինչպես', 'как перестать думать слишком много', 'как отключить мысли'
        ],
        answers: [
            'Notice when your thoughts spiral and gently shift your focus.',
            'Try journaling or talking it out to release mental clutter.',
            'Focus on what you can control. Let go of what you can’t.'
        ]
    },
    {
        patterns: [
            'how to deal with toxic people', 'handling toxic relationships', 'ինչ անել թունավոր մարդկանց հետ', 'թունավոր միջավայրից ինչպես դուրս գալ', 'как избавиться от токсичных людей', 'токсичные отношения как решить'
        ],
        answers: [
            'Set clear boundaries and stick to them.',
            'Limit your exposure and protect your emotional space.',
            'Sometimes cutting ties is the healthiest option, even if it’s hard.'
        ]
    },
    {
        patterns: [
            'how to control anger', 'anger management techniques', 'ինչպե՞ս վերահսկել զայրույթը', 'ինչ անել երբ բարկանում եմ', 'как контролировать гнев', 'как справляться с яростью'
        ],
        answers: [
            'Take deep breaths and count to 10 before responding.',
            'Identify your triggers and plan how to handle them ahead of time.',
            'Channel your anger into something constructive like physical activity or writing.'
        ]
    },
    {
        patterns: [
            'how to improve communication', 'communicate better with people', 'ինչպե՞ս լավ հաղորդակցվել', 'ինչ անել որպեսզի ինձ հասկանան', 'как лучше общаться', 'как развивать навыки общения'
        ],
        answers: [
            'Listen actively and avoid interrupting others.',
            'Ask questions and show interest in the other person’s thoughts.',
            'Use clear, simple language and maintain eye contact when speaking.'
        ]
    },
    {
        patterns: [
            'random profession', 'պատահական մասնագիտություն', 'рандомная профессия'
        ],
        answers: [
            'Astronaut',
            'Baker',
            'Carpenter',
            'Data Scientist',
            'Electrician',
            'Firefighter',
            'Graphic Designer',
            'Historian',
            'Interior Designer',
            'Journalist',
            'Kinesiologist',
            'Librarian',
            'Marine Biologist',
            'Nurse Practitioner',
            'Optometrist',
            'Photographer',
            'Quality Analyst',
            'Robotics Engineer',
            'Software Developer',
            'Teacher',
            'Urban Planner',
            'Veterinarian',
            'Wildlife Conservationist',
            'Yoga Instructor',
            'Zoologist',
            'Web Developer',
            'UX/UI Designer',
            'Travel Agent',
            'Translator',
            'Therapist',
            'Social Worker',
            'Sound Engineer',
            'Security Analyst',
            'Research Scientist',
            'Public Relations Specialist',
            'Product Manager',
            'Pharmacist',
            'Paralegal',
            'Painter',
            'Pediatrician',
            'Personal Trainer',
            'Pet Groomer',
            'Philosopher',
            'Podiatrist',
            'Psychologist',
            'Public Speaker',
            'Quality Control Inspector',
            'Real Estate Agent',
            'Restaurant Manager',
            'Retail Manager',
            'Sales Representative',
            'SEO Specialist',
            'Social Media Manager',
            'Speech Therapist',
            'Statistician',
            'Supply Chain Manager',
            'Technical Writer',
            'Translator',
            'User Experience Researcher',
            'Video Game Designer',
            'Virtual Reality Developer',
            'Voice Actor',
            'Web Content Writer',
            'Wildlife Photographer',
            'Yoga Therapist',
        ]
    },
    {
        patterns: [
            'what is artificial intelligence', 'explain AI', 'ինչ է արհեստական բանականությունը', 'արհեստական բանականություն ինչ է նշանակում', 'что такое искусственный интеллект', 'объясни что такое ИИ'
        ],
        answers: [
            'AI is the simulation of human intelligence in machines.',
            'Artificial Intelligence enables computers to learn and make decisions.',
            'It’s a field of tech where machines mimic human thinking and behavior.'
        ]
    },
    {
        patterns: [
            'what is cloud computing', 'explain cloud tech', 'ինչ է ամպային համակարգչային հաշվարկը', 'ամպային տեխնոլոգիա ինչ է', 'что такое облачные технологии', 'облачные вычисления что это'
        ],
        answers: [
            'Cloud computing lets you store and access data online instead of your computer.',
            'It means using remote servers to run apps, store files, or process data.',
            'Cloud tech powers services like Google Drive, Dropbox, and more.'
        ]
    },
    {
        patterns: [
            'how does Wi-Fi work', 'explain wifi', 'ինչպես է աշխատում Wi-Fi-ը', 'wifi ի աշխատանքը բացատրի', 'как работает вайфай', 'что такое wifi и как он работает'
        ],
        answers: [
            'Wi-Fi uses radio waves to send data between your device and a router.',
            'It’s a wireless tech that connects devices to the internet.',
            'Wi-Fi turns wired internet into wireless signals you can access from anywhere nearby.'
        ]
    },
    {
        patterns: [
            'what is a GPU', 'what does GPU mean', 'gpu ի նշանակությունը', 'ինչ է GPU֊ն', 'что такое GPU', 'объясни что такое видеокарта'
        ],
        answers: [
            'GPU stands for Graphics Processing Unit, mainly used for rendering images and videos.',
            'It’s a powerful chip optimized for parallel processing—used in gaming, AI, and more.',
            'GPUs help computers process graphics, but today they’re also key in AI and simulations.'
        ]
    },
    {
        patterns: [
            'what is blockchain', 'explain blockchain technology', 'ինչ է blockchain֊ը', 'բլոքչեյն տեխնոլոգիա բացատրիր', 'что такое блокчейн', 'как работает блокчейн'
        ],
        answers: [
            'Blockchain is a secure, decentralized digital ledger of transactions.',
            'It allows data to be stored in a chain of blocks that can’t be changed.',
            'It’s the technology behind cryptocurrencies like Bitcoin and Ethereum.'
        ]
    },
    {
        patterns: [
            'what is a programming language', 'explain programming languages', 'ինչ է ծրագրավորման լեզուն', 'ծրագրավորման լեզու բացատրիր', 'что такое язык программирования', 'зачем нужны языки программирования'
        ],
        answers: [
            'Programming languages are used to give instructions to computers.',
            'They allow humans to write software, apps, and automate tasks.',
            'Examples include Python, JavaScript, C++, and more.'
        ]
    },
    {
        patterns: [
            'what is cybersecurity', 'how to stay safe online', 'ինչ է սայբերանվտանգությունը', 'ինչպե՞ս ապահով մնալ ինտերնետում', 'что такое кибербезопасность', 'как защитить себя в интернете'
        ],
        answers: [
            'Cybersecurity is about protecting systems and data from digital attacks.',
            'To stay safe, use strong passwords and avoid suspicious links.',
            'It includes practices like using antivirus software and enabling 2FA.'
        ]
    },
    {
        patterns: [
            'what is the difference between RAM and storage', 'ram vs storage', 'ինչ տարբերություն կա RAM-ի և հիշողության միջև', 'հիշողություն ու օպերատիվ հիշողություն ինչ տարբերություն ունեն', 'чем отличается оперативная память от хранения', 'RAM и память — в чем разница'
        ],
        answers: [
            'RAM is temporary memory that helps your computer run tasks quickly.',
            'Storage holds your files permanently, while RAM clears when the computer shuts down.',
            'Think of RAM as your desk space, and storage as your filing cabinet.'
        ]
    },
    {
        patterns: [
            'what is a QR code', 'explain qr codes', 'ինչ է QR կոդը', 'qr կոդերը ինչի համար են', 'что такое qr код', 'зачем нужен QR-код'
        ],
        answers: [
            'A QR code is a type of barcode that stores information readable by smartphones.',
            'You can scan it to open links, download apps, or share data.',
            'They’re widely used in menus, tickets, and payments.'
        ]
    },
    {
        patterns: [
            'what is the metaverse', 'explain metaverse', 'ինչ է մետավերսը', 'բացատրի metaverse֊ը', 'что такое метавселенная', 'объясни что значит метаверс'
        ],
        answers: [
            'The metaverse is a virtual world where people interact using digital avatars.',
            'It combines VR, AR, and the internet for immersive experiences.',
            'Think of it as the next evolution of the internet—3D, interactive, and persistent.'
        ]
    },
    {
        patterns: [
            'what is Instagram', 'explain instagram', 'ինչ է ինստագրամը', 'ինստա ինչի համար է', 'что такое инстаграм', 'объясни инстаграм'
        ],
        answers: [
            'Instagram is a social network for sharing photos and videos.',
            'People use Instagram to post content, follow others, and discover trends.',
            'It’s a platform mainly focused on visual content and stories.'
        ]
    },
    {
        patterns: [
            'what is the use of hashtags', 'why are hashtags used', 'ինչի համար են հեշթեգերը', 'հեշթեգների իմաստը ո՞րն է', 'зачем нужны хештеги', 'что такое хештеги и как работают'
        ],
        answers: [
            'Hashtags help categorize content and make it discoverable.',
            'They’re used to join conversations or trends around a topic.',
            'Using hashtags increases visibility for posts.'
        ]
    },
    {
        patterns: [
            'what is TikTok', 'explain tiktok', 'ինչ է TikTok֊ը', 'տիկտոկը ինչ է անում', 'что такое тикток', 'как работает тикток'
        ],
        answers: [
            'TikTok is a video-sharing platform known for short, creative clips.',
            'It allows users to create and discover viral trends and music-based content.',
            'TikTok is hugely popular for entertainment and social influence.'
        ]
    },
    {
        patterns: [
            'what is a social media algorithm', 'how do social media algorithms work', 'ինչպես են աշխատում ալգորիթմները սոցիալական ցանցերում', 'սոց ցանցերի ալգորիթմ բացատրի', 'что такое алгоритм соцсетей', 'как работает алгоритм в инстаграме'
        ],
        answers: [
            'Algorithms decide what content you see based on your behavior.',
            'They analyze your activity to personalize your feed.',
            'Each platform has its own algorithm for engagement and relevance.'
        ]
    },
    {
        patterns: [
            'what is a verified badge', 'what does the blue checkmark mean', 'ինչ է վավերացված նշանը ինստայում', 'ինստագրամում կապույտ նշանը ինչ է նշանակում', 'что значит галочка в инстаграме', 'зачем нужна синяя галочка'
        ],
        answers: [
            'It shows that the account is authentic and belongs to a public figure or brand.',
            'The blue check verifies identity to prevent impersonation.',
            'It adds credibility and trust to the profile.'
        ]
    },
    {
        patterns: [
            'how can I stay safe on social media', 'tips for social media safety', 'ինչպե՞ս ապահով մնալ սոց ցանցերում', 'սոց ցանցերում անվտանգություն', 'как защитить себя в соцсетях', 'безопасность в интернете'
        ],
        answers: [
            'Use strong passwords and enable two-factor authentication.',
            'Don’t share personal data publicly and avoid suspicious links.',
            'Review your privacy settings and limit who can see your posts.'
        ]
    },
    {
        patterns: [
            'what is a digital footprint', 'explain digital trail', 'ինչ է թվային հետքը', 'ինտերնետային պատմություն ինչ է', 'что такое цифровой след', 'объясни цифровой след'
        ],
        answers: [
            'A digital footprint is the trail of data you leave online.',
            'It includes everything from your posts to the sites you visit.',
            'It can affect your online reputation, so manage it carefully.'
        ]
    },
    {
        patterns: [
            'what is social media marketing', 'how does smm work', 'սոցիալական մեդիա մարքեթինգ ինչ է', 'smm ի իմաստը', 'что такое smm', 'маркетинг в соцсетях объясни'
        ],
        answers: [
            'SMM is using social platforms to promote products or services.',
            'It involves content creation, audience targeting, and engagement.',
            'It’s a key part of digital marketing today.'
        ]
    },
    {
        patterns: [
            'how to go viral on social media', 'tips for going viral', 'ինչպե՞ս վիրյալ դառնալ սոց ցանցերում', 'ինչպե՞ս տեսանելի դառնալ ինստայում կամ տիկտոկում', 'как попасть в рекомендации', 'как стать вирусным'
        ],
        answers: [
            'Create original and relatable content.',
            'Use trending sounds, hashtags, and post consistently.',
            'Engage with your audience and post at peak hours.'
        ]
    },
    {
        patterns: [
            'what is a meme', 'explain meme culture', 'ինչ է մեմը', 'մեմեր ինչ են', 'что такое мем', 'объясни мем'
        ],
        answers: [
            'A meme is a humorous image, video, or phrase that spreads online.',
            'It reflects internet culture and trends.',
            'Memes often evolve and are shared across platforms rapidly.'
        ]
    },
    {
        patterns: [
            'what is the Amazon rainforest', 'explain the amazon forest', 'ինչ է Ամազոնի անտառը', 'Ամազոնը որ երկրում է', 'что такое лес амазонки', 'объясни амазонку'
        ],
        answers: [
            'The Amazon rainforest is the largest tropical rainforest in the world.',
            'It spans across several South American countries, mainly Brazil.',
            'It’s home to millions of species and produces about 20% of the world’s oxygen.'
        ]
    },
    {
        patterns: [
            'what is the tallest mountain', 'highest peak on Earth', 'որն է աշխարհի ամենաբարձր լեռը', 'էվերեստը որ երկրում է', 'самая высокая гора в мире', 'где находится эверест'
        ],
        answers: [
            'Mount Everest is the tallest mountain on Earth.',
            'It is 8,848 meters high and located in the Himalayas.',
            'Everest sits on the border between Nepal and Tibet.'
        ]
    },
    {
        patterns: [
            'what is a volcano', 'how do volcanoes work', 'ինչ է հրաբուխը', 'հրաբուխներն ինչպես են առաջանում', 'что такое вулкан', 'как работает вулкан'
        ],
        answers: [
            'A volcano is an opening in the Earth’s crust that allows molten rock to escape.',
            'Volcanoes can erupt with lava, ash, and gases.',
            'They form near tectonic plate boundaries.'
        ]
    },
    {
        patterns: [
            'what is global warming', 'explain global warming', 'ինչ է գլոբալ տաքացումը', 'կլիմայի փոփոխությունը ինչ է նշանակում', 'что такое глобальное потепление', 'объясни потепление'
        ],
        answers: [
            'Global warming is the long-term increase in Earth’s average temperature.',
            'It’s mainly caused by greenhouse gas emissions from human activities.',
            'It leads to climate change, sea level rise, and extreme weather.'
        ]
    },
    {
        patterns: [
            'what are endangered species', 'what does endangered mean', 'ինչ է նշանակում վտանգված տեսակ', 'վտանգված կենդանիներ օրինակ', 'что значит вымирающие виды', 'что такое красная книга'
        ],
        answers: [
            'Endangered species are animals or plants at risk of extinction.',
            'They are protected by laws and conservation programs.',
            'Causes include habitat loss, hunting, and climate change.'
        ]
    },
    {
        patterns: [
            'what is the largest ocean', 'biggest ocean in the world', 'որն է ամենամեծ օվկիանոսը', 'աշխարհի ամենալայն ջրի տարածքը', 'какой океан самый большой', 'самый большой океан в мире'
        ],
        answers: [
            'The Pacific Ocean is the largest ocean on Earth.',
            'It covers more area than all landmasses combined.',
            'It stretches from Asia to the Americas.'
        ]
    },
    {
        patterns: [
            'what is a desert', 'how are deserts formed', 'ինչ է անապատը', 'ինչպե՞ս են առաջանում անապատները', 'что такое пустыня', 'как образуются пустыни'
        ],
        answers: [
            'A desert is a dry area with very little rainfall.',
            'They can be hot like the Sahara or cold like Antarctica.',
            'Deserts form due to lack of moisture and geographic factors.'
        ]
    },
    {
        patterns: [
            'what is the northern lights', 'what causes aurora borealis', 'ինչ է հյուսիսային փայլը', 'որ երկրներում կա հյուսիսային լույս', 'что такое северное сияние', 'как возникает северное сияние'
        ],
        answers: [
            'The Northern Lights are glowing lights seen near the polar regions.',
            'They’re caused by solar particles interacting with Earth’s atmosphere.',
            'They appear in colors like green, pink, and purple.'
        ]
    },
    {
        patterns: [
            'what is biodiversity', 'why is biodiversity important', 'ինչ է կենսաբազմազանությունը', 'կենսաբազմազանության նշանակությունը', 'что такое биоразнообразие', 'зачем нужно биоразнообразие'
        ],
        answers: [
            'Biodiversity is the variety of all living organisms on Earth.',
            'It supports ecosystems and provides resources like food and medicine.',
            'Losing biodiversity weakens natural systems.'
        ]
    },
    {
        patterns: [
            'what is the longest river', 'which river is the longest in the world', 'որն է աշխարհի ամենաերկար գետը', 'ամազոն թե նեղոս՝ որն է ավելի երկար', 'какая река самая длинная', 'самая длинная река на Земле'
        ],
        answers: [
            'The Nile River is traditionally considered the longest in the world.',
            'Some studies claim the Amazon might be slightly longer.',
            'Both are vital to their ecosystems and human life.'
        ]
    },
    {
        patterns: [
            'what is a cell', 'what is the basic unit of life', 'ինչ է բջիջը', 'կենդանի օրգանիզմի հիմնական մասը ինչն է', 'что такое клетка', 'основа живого организма'
        ],
        answers: [
            'A cell is the basic unit of life.',
            'All living organisms are made of cells.',
            'Cells can be unicellular or multicellular, depending on the organism.'
        ]
    },
    {
        patterns: [
            'what is DNA', 'explain dna', 'ինչ է ԴՆԹ-ն', 'ինչի համար է պատասխանատու ԴՆԹ-ն', 'что такое ДНК', 'объясни ДНК'
        ],
        answers: [
            'DNA is the molecule that carries genetic instructions.',
            'It determines how living organisms develop and function.',
            'DNA stands for Deoxyribonucleic Acid.'
        ]
    },
    {
        patterns: [
            'how do plants make food', 'what is photosynthesis', 'բույսերն ինչպես են պատրաստում սնունդ', 'ինչ է ֆոտոսինթեզը', 'как растения производят пищу', 'что такое фотосинтез'
        ],
        answers: [
            'Plants make food using sunlight through a process called photosynthesis.',
            'Photosynthesis converts sunlight, water, and carbon dioxide into glucose and oxygen.',
            'It mostly happens in the leaves using a pigment called chlorophyll.'
        ]
    },
    {
        patterns: [
            'what are the parts of the brain', 'main functions of brain', 'ուղեղի հիմնական մասերն որոնք են', 'ուղեղի ֆունկցիաները', 'какие части мозга существуют', 'функции человеческого мозга'
        ],
        answers: [
            'The brain has several parts: cerebrum, cerebellum, and brainstem.',
            'Each part of the brain controls different body functions.',
            'It processes thoughts, emotions, memory, and movement.'
        ]
    },
    {
        patterns: [
            'what is evolution', 'explain evolution in biology', 'ինչ է էվոլյուցիան', 'կենսաբանության մեջ ինչ է զարգացումը', 'что такое эволюция', 'как объяснить эволюцию'
        ],
        answers: [
            'Evolution is the process through which species change over time.',
            'It happens due to natural selection and genetic mutations.',
            'Charles Darwin is known as the father of evolutionary theory.'
        ]
    },
    {
        patterns: [
            'what are genes', 'function of genes', 'ինչ են գեները', 'գենը ինչ ֆունկցիա ունի', 'что такое гены', 'зачем нужны гены'
        ],
        answers: [
            'Genes are segments of DNA that carry hereditary information.',
            'They determine traits like eye color, height, and even behavior.',
            'Each person has thousands of genes inherited from parents.'
        ]
    },
    {
        patterns: [
            'what is an organ', 'examples of organs', 'ինչ է օրգանը', 'մարդու օրգանների օրինակներ', 'что такое орган', 'примеры органов'
        ],
        answers: [
            'An organ is a group of tissues that work together for a specific function.',
            'Examples include the heart, lungs, brain, and kidneys.',
            'Organs form organ systems, like the digestive or respiratory system.'
        ]
    },
    {
        patterns: [
            'what is the immune system', 'how does immunity work', 'ինչ է իմունային համակարգը', 'ինչպես է իմունիտետը պաշտպանում', 'что такое иммунная система', 'как работает иммунитет'
        ],
        answers: [
            'The immune system defends the body against diseases and infections.',
            'It includes white blood cells, antibodies, and lymph nodes.',
            'A strong immune system keeps you healthy.'
        ]
    },
    {
        patterns: [
            'how does the heart work', 'explain blood circulation', 'ինչպես է աշխատում սիրտը', 'արյան շրջանառության գործընթացը', 'как работает сердце', 'объясни кровообращение'
        ],
        answers: [
            'The heart pumps blood throughout the body.',
            'It sends oxygen-rich blood to organs and brings back carbon dioxide.',
            'Circulation includes arteries, veins, and capillaries.'
        ]
    },
    {
        patterns: [
            'what is reproduction in biology', 'types of reproduction', 'ինչ է բազմացումը', 'կենսաբանության մեջ բազմացման ձևերը', 'что такое размножение', 'виды размножения'
        ],
        answers: [
            'Reproduction is the process by which living things create offspring.',
            'There are two main types: sexual and asexual reproduction.',
            'It ensures survival of the species.'
        ]
    },
    {
        patterns: [
            'what is pi', 'value of pi', 'ինչ է պին', 'պիի արժեքը', 'что такое пи', 'значение числа пи'
        ],
        answers: [
            'Pi (π) is a mathematical constant approximately equal to 3.14159.',
            'It represents the ratio of a circle’s circumference to its diameter.',
            'Pi is an irrational number and never ends or repeats.'
        ]
    },
    {
        patterns: [
            'what is a prime number', 'give prime number examples', 'ինչ է պարզ թիվ', 'պարզ թվերի օրինակներ', 'что такое простое число', 'примеры простых чисел'
        ],
        answers: [
            'A prime number has only two divisors: 1 and itself.',
            'Examples include 2, 3, 5, 7, 11, etc.',
            'The number 2 is the only even prime number.'
        ]
    },
    {
        patterns: [
            'what is an equation', 'how do equations work', 'ինչ է հավասարումը', 'մաթեմատիկական հավասարում', 'что такое уравнение', 'как решать уравнения'
        ],
        answers: [
            'An equation is a mathematical statement showing two expressions are equal.',
            'It often contains variables like x or y to solve.',
            'Solving an equation means finding the value of the unknown.'
        ]
    },
    {
        patterns: [
            'what is the Pythagorean theorem', 'explain a² + b² = c²', 'ինչ է Պյութագորասի թեորեմը', 'հիպոտենուզայի հաշվարկ', 'что такое теорема Пифагора', 'объясни формулу a² + b² = c²'
        ],
        answers: [
            'The Pythagorean theorem is used in right-angled triangles.',
            'It states: a² + b² = c², where c is the hypotenuse.',
            'It helps find the length of triangle sides.'
        ]
    },
    {
        patterns: [
            'difference between area and perimeter', 'area vs perimeter', 'մակերեսի ու պարագծի տարբերությունը', 'ինչ է պարագիծը', 'в чем разница между площадью и периметром', 'что такое площадь и периметр'
        ],
        answers: [
            'Area is the amount of space inside a shape; perimeter is the distance around it.',
            'Area is measured in square units; perimeter in linear units.',
            'For example, a square with side 4 has area 16 and perimeter 16.'
        ]
    },
    {
        patterns: [
            'what is a function in math', 'definition of function', 'մաթեմատիկայում ինչ է ֆունկցիա', 'ֆունկցիայի նշանակությունը', 'что такое функция в математике', 'определение функции'
        ],
        answers: [
            'A function relates inputs to exactly one output.',
            'It’s often written as f(x).',
            'Each input value has only one result in a function.'
        ]
    },
    {
        patterns: [
            'what is a fraction', 'explain numerator and denominator', 'ինչ է կոտորակ', 'կոտորակի մասերը', 'что такое дробь', 'объясни числитель и знаменатель'
        ],
        answers: [
            'A fraction represents a part of a whole.',
            'It has a numerator (top) and denominator (bottom).',
            'For example, 1/2 means one out of two equal parts.'
        ]
    },
    {
        patterns: [
            'what is algebra', 'basics of algebra', 'ինչ է ալգեբրան', 'մաթեմատիկայի որ ճյուղն է ալգեբրան', 'что такое алгебра', 'основы алгебры'
        ],
        answers: [
            'Algebra is the branch of mathematics dealing with symbols and variables.',
            'It helps solve equations and model real-world problems.',
            'In algebra, letters represent unknown numbers.'
        ]
    },
    {
        patterns: [
            'how do you calculate average', 'formula for mean', 'ինչպես հաշվարկել միջինը', 'միջին արժեքի բանաձևը', 'как найти среднее', 'формула среднего значения'
        ],
        answers: [
            'To find the average, add all numbers and divide by the count.',
            'The mean = (sum of values) ÷ (number of values).',
            'It shows the central tendency of a dataset.'
        ]
    },
    {
        patterns: [
            'what is a negative number', 'explain integers', 'ինչ է բացասական թիվ', 'ամբողջ թվերի տեսակները', 'что такое отрицательное число', 'что такое целые числа'
        ],
        answers: [
            'Negative numbers are less than zero.',
            'Integers include both positive and negative whole numbers.',
            'Examples: -1, -5, -100 are negative integers.'
        ]
    },
    {
        patterns: [
            'what is a polygon', 'types of polygons', 'ինչ է պոլիգոնը', 'պոլիգոնի տեսակները', 'что такое многоугольник', 'виды многоугольников'
        ],
        answers: [
            'A polygon is a closed shape with straight sides.',
            'Examples include triangles, squares, and pentagons.',
            'Polygons can be regular (equal sides) or irregular.'
        ]
    },
    {
        patterns: [
            'what is a coordinate system', 'explain Cartesian coordinates', 'ինչ է համակարգային համակարգը', 'քարտեզային համակարգերի իմաստը', 'что такое система координат', 'объясни декартову систему координат'
        ],
        answers: [
            'A coordinate system uses numbers to represent points in space.',
            'The Cartesian system uses x and y axes to locate points.',
            'It’s essential for graphing functions and shapes.'
        ]
    },
    {
        patterns: [
            'what is a matrix', 'how do matrices work', 'ինչ է մատրիցը', 'մատրիցների աշխատանքը', 'что такое матрица', 'как работают матрицы'
        ],
        answers: [
            'A matrix is a rectangular array of numbers arranged in rows and columns.',
            'Matrices are used in various fields like physics, computer science, and economics.',
            'They can represent systems of equations or transformations.'
        ]
    },
    {
        patterns: [
            'what is calculus', 'basics of calculus', 'ինչ է կալկուլուսը', 'կալկուլուսի հիմունքները', 'что такое калькуляция', 'основы исчисления'
        ],
        answers: [
            'Calculus studies change and motion through derivatives and integrals.',
            'It’s essential for understanding rates of change and areas under curves.',
            'Calculus has two main branches: differential and integral calculus.'
        ]
    },
    {
        patterns: [
            'what is the most popular movie', 'famous movie today', 'ինչ ֆիլմն է ամենահայտնին այսօր', 'ամենահայտնի ֆիլմը', 'какой самый популярный фильм', 'известный фильм сегодня'
        ],
        answers: [
            'It depends on the region, but currently some of the most popular movies include recent blockbusters like "Oppenheimer" or "Barbie".',
            'Right now, trending movies include big-name productions like "Dune: Part Two".',
            'The most popular movies often change weekly based on releases and reviews.'
        ]
    },
    {
        patterns: [
            'who is the best actor', 'famous hollywood actors', 'ով է ամենահայտնի դերասանը', 'հոլիվուդի հայտնի դերասաններ', 'кто лучший актер', 'знаменитые голливудские актеры'
        ],
        answers: [
            'Actors like Leonardo DiCaprio, Denzel Washington, and Tom Hanks are often praised for their talent.',
            'There’s no single “best” actor — it depends on genre and audience preference.',
            'Recently, names like Cillian Murphy and Austin Butler have been gaining attention.'
        ]
    },
    {
        patterns: [
            'who directed inception', 'inception movie director', 'ով է Ինսեփշն ֆիլմի ռեժիսորը', 'Inception ֆիլմի հեղինակը', 'кто режиссер фильма начало', 'режиссер inception'
        ],
        answers: [
            'Inception was directed by Christopher Nolan.',
            'The famous mind-bending film "Inception" is a Christopher Nolan masterpiece.',
            'Christopher Nolan wrote and directed Inception in 2010.'
        ]
    },
    {
        patterns: [
            'what genre is horror', 'explain horror films', 'ինչ է սարսափ ֆիլմ', 'սարսափ ժանրի ֆիլմեր', 'что такое фильмы ужасов', 'жанр ужасы'
        ],
        answers: [
            'Horror films are designed to frighten and thrill the audience.',
            'They often involve supernatural elements, suspense, or psychological tension.',
            'The goal of horror is to provoke fear or discomfort.'
        ]
    },
    {
        patterns: [
            'is marvel part of disney', 'marvel movies ownership', 'մարվել ֆիլմերը դիսնեյի՞ն են պատկանում', 'մարվելը դիսնեյի՞ է', 'марвел принадлежит диснею', 'дисней и марвел'
        ],
        answers: [
            'Yes, Marvel is owned by Disney since 2009.',
            'Marvel Studios is a subsidiary of The Walt Disney Company.',
            'Disney acquired Marvel Entertainment in 2009 for around $4 billion.'
        ]
    },
    {
        patterns: [
            'what is the longest movie ever', 'longest film in history', 'ամենաերկար ֆիլմը երբևէ', 'որն է ամենաերկար ֆիլմը', 'самый длинный фильм', 'фильм с самой большой длительностью'
        ],
        answers: [
            'The longest film ever made is "Logistics" (2012), which runs over 35 days.',
            '“Logistics” is a Swedish experimental film lasting 857 hours.',
            'No fictional film comes close to "Logistics" in length.'
        ]
    },
    {
        patterns: [
            'how many oscar awards exist', 'what are the oscars', 'քանի Օսկար մրցանակ կա', 'ինչ է Օսկարը', 'что такое оскар', 'сколько существует наград оскар'
        ],
        answers: [
            'The Oscars are annual awards recognizing excellence in film.',
            'There are over 20 categories including Best Picture, Director, Actor, etc.',
            'The Academy Awards, known as the Oscars, started in 1929.'
        ]
    },
    {
        patterns: [
            'what is imdb', 'imdb meaning', 'ինչ է IMDb', 'IMDb-ի նշանակությունը', 'что такое IMDb', 'значение IMDb'
        ],
        answers: [
            'IMDb stands for Internet Movie Database, a website for movie and TV info.',
            'It provides ratings, cast details, reviews, and more.',
            'IMDb is one of the most popular online film databases.'
        ]
    },
    {
        patterns: [
            'difference between series and movie', 'movie vs tv show', 'ֆիլմի և սերիալի տարբերությունը', 'սերիա՞լ թե՞ ֆիլմ', 'разница между фильмом и сериалом', 'что выбрать: фильм или сериал'
        ],
        answers: [
            'A movie is a single, self-contained story; a series is episodic.',
            'TV shows are divided into episodes and seasons, while films are usually 1–3 hours.',
            'Series offer long-form storytelling; movies are concise.'
        ]
    },
    {
        patterns: [
            'what is animation film', 'animated movies', 'ինչ է անիմացիոն ֆիլմը', 'մուլտֆիլմեր', 'что такое анимационный фильм', 'мультфильмы'
        ],
        answers: [
            'Animated films are created using drawings, CGI, or stop-motion techniques.',
            'Popular animation studios include Pixar, DreamWorks, and Ghibli.',
            'These films can be for children or adults depending on the theme.'
        ]
    }
];