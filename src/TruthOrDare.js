import React, { useState } from 'react';
import './TruthOrDare.css';

const questions = [
  // list of truth questions
  
  'Have you ever touched yourself while having sex?',
  'What’s the worst kiss you’ve ever had and why?',
  'What’s the best kiss you’ve ever had and why?',
  'What’s the most embarrassing wardrobe malfunction you’ve ever had?',
  'Have you had any awkward one-night stands?',
  'What’s the most romantic date you’ve ever been on?',
  'What’s the most thoughtful gift you’ve ever received in a relationship?',
  'What’s the most thoughtful gift you’ve ever given in a relationship?',
  'What’s the hottest body part on a guy?',
  'What’s the hottest body part on a girl?',
  'What’s the awkwardest crush you’ve ever had on someone?',
  'Describe the sexual encounter you regret the most.',
  'What was it like the first time you went down on someone?',
  'Spit or swallow?',
  'How often do you shave down there?',
  'Have you ever gotten a wax down there?',
  'If you were going to have a threesome, would you want the third party to be another girl or a guy?',
  'Have you ever been to a strip club?',
  'What’s something funny that turns you on?',
  'Do you get more horny when you’re on your period?',
  'Do you mind the taste when you go down on someone?',
  'Does body count matter to you?',
  'Would you ever go to a strip club?',
  'Have you ever tried to stick something that’s not a sex toy into your vagina?',
  'How old were you when you masturbated for the first time?',
  'Do you get turned on by nipple play?',
  'Have you ever had sex on your period?',
  'Do you enjoy having sex on your period?',
  'Which position is your least favorite and why?',
  'Which position is your favorite and why?',
  'Do you enjoy anal play?',
  'Have you ever gotten a UTI from sex?',
  'Do you own lingerie?',
  'What time of day do you prefer to have sex during?',
  'Where’s the most embarrassing place you’ve ever gotten a boner?',
  'What’s the hottest body part on a girl?',
  'What’s the hottest body part on a guy?',
  'Which male celebrity is the hottest in your opinion?',
  'Which celebrity would you do in an instant if you had the chance?',
  'When’s the last time you cried?',
  'What break-up broke your heart the most?',
  'What’s the craziest sex you’ve ever had?',
  'Have you ever gotten head while driving?',
  'Do you find lingerie hot?',
  'How large is your package?',
  'How old were you when you had your wet dream?',
  'Do you like to go all night or lay it all out in one fail swoop?',
  'Have you saved nudes from old hookups or exes?',
  'Do you like sending nudes?',
  'Have you ever gotten whiskey dick?',
  'Does body count matter to you?',
  'Does body count matter to you on your partner’s end?',
  'Have you ever gotten an STI?',
  'What’s your favorite position and why?',
  'What time of day is your favorite to have sex during?',
  'Have you ever tried anal play? Thoughts?',
  'Do you own any sex toys or want to own some?',
  'Have you ever gotten blue balls?',
  'What’s the strangest thing you’ve ever gotten aroused from?',
  'Have you ever been to a strip club?',
  'Have you ever owned or used a blow up doll?',
  'Have you ever worn a sexy piece of clothing?',
  'What’s the most romantic date you’ve ever been on?',
  'What’s the most thoughtful gift you’ve ever received in a relationship?',
  'What’s the most thoughtful gift you’ve ever given in a relationship?',
  'Have you ever had sex with a MILF? If not, do you want to?',
  'Do you mind the taste when you eat someone out?',
  'Have you ever tried to go down on yourself?',
  'Do you like it when girls play with your balls?',
  'Do you prefer to be shaved or keep it hairy down there?',
  'If you were going to have a threesome, would you want the third party to be another girl or a guy?'
];

const dares = [
    "Put an ice cube in your underwear for one minute.",
    "Perform a sexy belly dance for your partner",
    "Blindfold your partner and guide them around your body using only touch",
    "Undress your partner using only your teeth",
    "Clean the house naked",
    "Go about your normal day but with no underwear on",
    "Share a secret!",
    "Act like your favorite animal!",
    "Give your partner a massage, blindfolded",
    "Use each other as a human plate — whipped cream, chocolate sauce, whatever takes your fancy!",
    "Share a fantasy that your loved one’s never heard before",
    "Set up a nude photo shoot and capture your favorite poses.",
    "Touch yourselves while your partner watches",
    "Pick one part of your body and have your partner focus all their attention there",
    "Then lick it off.",
    "Play the rest of the game naked",
    "Twerk to the sexiest song you can think of",
    "Blindfold yourself and guess which part of your partner’s body you’re touching",
  "Show your partner the last X-rated clip you watched",
    "Pretend to give oral sex to the nearest object you see",
    "Fake an orgasm for one minute",
    "Act out your favorite sex position",
    "Remove an item of clothing",
    "I dare you to tease me by going down on me for as long as you can without making me orgasm",
    " I dare you to whisper the naughtiest thing you can think of into my ear.",
    "I dare you to masturbate to a picture of me that you have stored in your phone",
    "I dare you to fuck me on the nearest surface we can find",
    " I dare you to cover one of your body parts in whipped cream, and then let me lick it off of you.",
    " I dare you to take erotic pictures of me while I suck your dick/pussy",
    "I dare you to make me as horny as you possibly can without touching me",
    "I dare you to put on a porno I can watch while you eat me out.",
    "I dare you to spank me as hard as you possibly can",
    " I dare you to handcuff me to the bed and have your way with me",
    " I dare you to do as many push-ups as you can. While naked",
    "I dare you to kiss me anywhere, except on my lips.",
    " I dare you to fuck me in a position we’ve never tried before",
    "I dare you to send me the dirtiest sext you can come up with",
    " I dare you to make me orgasm, just by using your hands",
    " I dare you to guess what color underwear I’m wearing",
    " I dare you to be as loud as you can when you fuck me tonight.",
  " I dare you to rub your dick against my clit for as long as you can take without entering me",
  " I dare you to sketch a picture of me naked",
  "I dare you to bring me into the living room and fuck me in the middle of floor.",
  " I dare you to blindfold me, and then kiss me somewhere I wouldn’t expect.",
  " I dare you to watch me undress without getting a hard-on",
  "I dare you to take all of your clothes off, and keep them off for the rest of the game",
  "I dare you to turn on the sexiest song on your iPod and give me a strip tease",
  " I dare you to keep all of the windows and doors open while you fuck me.",
  " I dare you to make me orgasm before you orgasm tonight.",
  "I dare you to watch me masturbate for as long as you can before grabbing me and fucking me yourself.",
  "I dare you to make the most authentic orgasm sounds that you can.",
  "I dare you to have sex with me for at least a half-hour before you orgasm.",
  "I dare you to run your tongue across any area of my body that you choose",
  "I dare you to run your tongue across any area of my body that you choose",
  " I dare you to put on your favorite porno, so I can see what you’re into.",
  "I dare you to turn me on as much as you can by removing only one piece of your clothing",
  "  I dare you to masturbate at the same time as me.",
  "  I dare you to kiss me on your favorite area of my body..",
  "   I dare you to make me orgasm harder than you ever have before",
'Never have I ever traveled to another country.',
    'Never have I ever gone skydiving.',
    'Never have I ever eaten a spicy meal.',
    'Never have I ever gone to a music festival.',
    'Never have I ever ridden a horse.',
    'Give over your phone to your partner and let them decide on a sex toy you two can try together.',
    'Have your partner read through your browsing history in a sexy voice.',
    'Make a sexy song playlist with your partner.',
    'Sexily wash your partner’s feet.',
    'Be blindfolded and tickled or lightly touched for one minute.',
    'Have your partner close their eyes and try to turn them on only using sounds.',
    'Try to turn on your partner by blowing on the back of their neck, alternating between cold and hot.',
    'Place a hand in your partner’s underwear for the next round and try to arouse them.',
    'Draw something on your partner’s back. If they guess correctly, they get a special favor of their choosing, if not, you get one.',
    'Your partner gets to dress you up in their clothes and take a photo.',
    'Call the parents of your partner and express to them how much you adore your partner.',
    'Give your partner a hot lap dance.',
    'Whisper something not sexy into your partner’s ear but try to make it sound hot.',
    'Describe your partner’s naked body in intense, erotic detail.',
    'Wear handcuffs or have your hands tied for a few turns.',
    'Trade clothes with your partner.',
    'Take a body shot off your partner.',
    'Show your partner your go-to porn video.',
    'Give your partner a sexy full-body massage.',
    'Give your phone to your partner and let them order something hot for you to wear.',
    'Turn on your partner by only touching their arms and hands.',
    'Lick something yummy off your partner’s body part of choice.',
    'Take off a piece of your partner’s clothing, only using your teeth.',
    'Trace your partner’s body with an ice cube that’s being held in your mouth.',
    'Beg your partner to do naughty things to you. It better be convincing!',
    'Give your partner head with their clothes on.',
    'Do whatever your partner says for one minute.',
    'Put on the hottest song you know and try to seduce your partner with it.',
    'Make your best orgasm face and let your partner take a photo of it. This is your lock screen for the next 24 hours.',
    'Become a sexy chef while teaching your partner how to make a fun late night snack while just wearing an apron.',
    'Find an old photograph and try to recreate it together.',
    'Have your partner ask 3 questions about themselves that you should know the answers to. If you get them right, you get a reward. If you get them wrong, you get punished.',
    'Have your partner take a picture of you looking naughty.',
    'Give your partner a massage without using your hands.',
    'Act out how you remember your first date in 30 seconds.',
    'Lick your partner’s feet for 15 seconds.',
    'Set a timer and try to make your partner orgasm in 5 minutes.',
    'Set a timer for 2 minutes and try not to get turned on by whatever your partner decides to do to you.',
    'Watch porn together and try to imitate what you see on the screen.',
    'Perform a strip tease for your partner.',
    'Lick your partner’s nipples.',
    'Kiss your partner in the sexiest place and sexiest way possible.',
    'Undress your partner with one hand.',
    'Suck on your partners finger like you’re giving them head.',
    'Send a naughty text message to your partner.',
    'Become a sexy chef and spank your partner sexily with an item from the kitchen.',
    'Arouse your partner by only using your tongue.',
    'Attempt to make a sex tape with your partner.',
    'Let your partner blindfold you and do what they want to you for a minute.',
    'Bend your partner over your knee and spank them while telling them they’re a bad boy/girl.',
    'Sexily perform good foreplay on your partner’s ear to get them aroused.',
    'Dress up in something your partner would find sexy.',
    'Turn on your partner by sexily sucking on their finger.',
    'Have your partner lay down and kiss them upside down the best you can.',
    'Give your partner a lesson on giving head tothem with an object from the kitchen.',
    'Have your partner spank you as hard as they can.',
    'Whisper a sexy name in my ear that you’ve never called me but have thought about trying.',
    'Use a sex toy to try and get your partner in the mood.',
    'Have your partner blindfold you and touch you with a part of their body. If you guess what part of their body they’re touching you with, you get a special reward.',
    'Seduce your partner in a room where you have never had sex before.',
    'Imitate a girl flirting for 20 seconds and try to pick up someone else in the room.',
    'Give a name to your package and explain why you named it how you did.',
    'Eat a snack in the sexiest way possible.',
    'Act out your favorite position with objects in the house.',
    'Demonstrate putting on a condom using a household object or food.',
    'Feed someone else in the room without using your hands.',
    'Redress yourself in a girls clothing.',
    'Try to use makeup properly on your face and see how it turns out.',
    'Put something in your shirt and pretend to have boobs until the next round is over.',
    'Dye your hair a crazy color.',
    'Spank yourself while calling yourself a “bad boy” for 20 seconds.',
    'Give your best impression of a sexy school girl.',
    'Take off your bra with one hand and without taking off your shirt.',
    'Put an object in your pants and act like it’s your junk.',
    'Put someone’s underwear on your head.',
    'Wear your bra on your head like a hat for the rest of the game.',
    'Post a photo of a tampon on social media and don’t take it down until your next turn.',
    'Practice a sexy dance on a piece of furniture in the room.',
    'Touch tongues with someone else in the room.',
    'Shave part of your eyebrow.',
    'Dye part of your hair a daring color.',
    'Fake an orgasm for 10 seconds.',
    'Do a sexy crawl towards someone else in the room.',
    'Pretend to be any animal in a sexy way.',
    'Redress yourself in a guy’s clothing.',
    'Give a tutorial with an object in the room on how to pleasure a woman.',
    'Imitate how a guy flirts for 20 seconds and try to pick up someone in the room.'
  // list of dare challenges
];

const TruthOrDare = () => {
  const [currentQuestion, setCurrentQuestion] = useState('');

  const handleTruthClick = () => {
    const randomIndex = Math.floor(Math.random() * questions.length);
    setCurrentQuestion(questions[randomIndex]);
  };

  const handleDareClick = () => {
    const randomIndex = Math.floor(Math.random() * dares.length);
    setCurrentQuestion(dares[randomIndex]);
  };

  return (
    <div className="truth-or-dare-container">
      <h2>Truth or Dare</h2>
      <div className="question-container">
        <p className="question-text">{currentQuestion}</p>
      </div>
      <div className="action-buttons">
        <button className="action-button truth-button" onClick={handleTruthClick}>
          Truth
        </button>
        <button className="action-button dare-button" onClick={handleDareClick}>
          Dare
        </button>
      </div>
    </div>
  );
};

export default TruthOrDare;