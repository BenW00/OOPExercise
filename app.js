// Question 1A
const mulan = {
    title: `Mulan`,
    main: `Fa Mulan`,
    // Question 1B
    quote: () => `Dishonor! Dishonor on your whole family!`,
    // Question 1C
    storyline: () => `The movie Mulan is about Fa Mulan.`
}




// Questin 2A
const tangled = {
    title: `Tangled`,
    main: `Rapunzel`,
    // Question 2B
    quote: () => `I can't believe I did this! I can't believe I did this! I have to go home! I am never going back! I'm a horrible daughter! BEST DAY EVER!`,
    // Question 2C
    storyline: function(){
        return `The movie ${this.title} is about ${this.main}.`}
}

// Question 3A
function disneyMovie(movieTitle, mainChar) {
    this.title = movieTitle;
    this.main = mainChar;
}

// Question 3B
disneyMovie.prototype.storyline = function(){
    return `The movie ${this.title} is about ${this.main}.`}

// Question 3C
const mulan1 = new disneyMovie(`Mulan`, `Fa Mulan`);

// Question 3D
const tangled1 = new disneyMovie(`Tangled`, `Rapunzel`);

// Question 4A
class DM {
    constructor(title, main) {
        this.title = title;
        this.main = main;
    }


    // Question 4B

    storyline() {
        return `The movie ${this.title} is about ${this.main}.`
    }

    // Quesstion 4E
    static loveDisneyMovies(){
        return `I Love Disney Movies!`;
    }
}


// Question 4C
const mulan2 = new DM(`Mulan`, `Fa Mulan`);

// Question 4D
const tangled2 = new DM(`Tangled`, `Rapunzel`);

// Quesiton 4F
console.log(DM.loveDisneyMovies())


// Question 5A
class DMCast extends DM {
    // Question 5B
    constructor(title, main, cast) {
    // Question 5C
    super(title, main, cast);
    this.cast = cast;
    }
    }


// Question 5D
const mulan3 = new DMCast(`Mulan`, `Fa Mulan`, {mulan: `Ming-Na Wen`, mushu: `Eddie Murphy`, shang: `BD Wong`, theEmperor: `Pat Morita`});


// Question5E
const rapunzel3 = new DMCast(`Tangled`, `Rapunzel`, {rapunzel: `Mandy Moore`, flynnRider: `Zachary Levi`, motherGothel: `Donna Murphy`});

