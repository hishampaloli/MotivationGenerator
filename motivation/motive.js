var quote = new Array ();
quote[0] = "“When you have a dream, you’ve got to grab it and never let go.”— Carol Burnett ";
quote[1] = "“Nothing is impossible. The word itself says ‘I’m possible!'” — Audrey Hepburn ";
quote[2] = "There is nothing impossible to they who will try — Alexander the Great";
quote[3] = "  “The bad news is time flies. The good news is you’re the pilot.”  — Michael Altshuler";
quote[4] = "“Life has got all those twists and turns. You’ve got to hold on tight and off you go.” — Nicole Kidman"
quote[5] = "“Keep your face always toward the sunshine, and shadows will fall behind you.” — Walt Whitman"
quote[6] = "“Success is not final, failure is not fatal: it is the courage to continue that counts.” – Winston Churchill"
quote[7] = "“You define your own life. Don’t let other people write your script.” — Oprah Winfrey"
quote[8] = "“You are never too old to set another goal or to dream a new dream.” — Malala Yousafzai"
quote[9] = "“Spread love everywhere you go.” — Mother Teresa"
quote[10] = "“The greatest of richness is the richness of the soul.” - Prophet Muhammad (peace be upon him)"
quote[11] = "“You don’t always need a plan. Sometimes you just need to breathe, trust, let go and see what happens.” — Mandy Hale"
quote[12] = "“You can be everything. You can be the infinite amount of things that people are.” — Kesha"
quote[13] = "“What lies behind you and what lies in front of you, pales in comparison to what lies inside of you.” — Ralph Waldo Emerson"
quote[14] = "“The strongest among you is the one who controls his anger.” - Prophet Muhammad (peace be upon him)"
quote[15] = "“No two things have been combined better than knowledge and patience.” - Prophet Muhammad (peace be upon him)"
quote[16] = "“A kind word is a form of charity.” - Prophet Muhammad (peace be upon him)"
quote[17] = "“It is during our darkest moments that we must focus to see the light.” — Aristotle"
quote[18] = "“Not having the best situation, but seeing the best in your situation is the key to happiness.”— Marie Forleo"
quote[19] = "“Believe you can and you’re halfway there.” – Theodore Roosevelt"
quote[20] = "“Do not waste water even if you were at a running stream.” - Prophet Muhammad (peace be upon him)"
function quoteClik(){

var i = Math.floor((Math.random() * 20) + 1);
document.getElementById('p-main').innerHTML = quote[i];

}