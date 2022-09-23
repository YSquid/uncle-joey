function uncleJoey() {
    
    //**Lines for the quote blanks**//
    const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
    const setups = [
    'Powder up those nuts',
    'Shine your fucking shoes',
    'Take that morning rip',
    'Get your morning coffee in',
    'Buckle your fucking chin strap',
    'Look this day right in it\'s fucking eyes',
    'Put yesterday\'s bullshit behind you'
    ]
    const tags = [
        'give it your best go - what do ya got to lose',
    'rock and fucking roll cocksucka',
    'let the haters know who you are',
    'fingerblast this day to the grown',
    'rip the tits off today',
    'crush your goals like a Dodge Ram crushes turtles',
    'rip it harder than OJ in a ford Bronco'
    ]

    const day = days[(Math.floor(Math.random() * 7))]
    const setup = setups[(Math.floor(Math.random() * 7))]
    const tag = tags[(Math.floor(Math.random() * 7))]

    

    return `It\'s ${day} cocksucka! It's time to ${setup} and ${tag}`
}

console.log(uncleJoey())