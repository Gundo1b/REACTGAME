import React, { useState } from 'react';
import './TruthDareOrDrink.css'; // Import your CSS for styling

const TruthDareOrDrink = () => {
  const [currentTask, setCurrentTask] = useState('');

  const generateRandomTask = () => {
    const tasks = [
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
    'Imitate how a guy flirts for 20 seconds and try to pick up someone in the room.',
     
    ];
    const randomIndex = Math.floor(Math.random() * tasks.length);
    setCurrentTask(tasks[randomIndex]);
  };

  return (
    <div className="truth-dare-drink-container">
      <h2>Truth, Dare, or Drink</h2>
      <div className="task-container">
        <p className="task-text">{currentTask}</p>
      </div>
      <button className="generate-button" onClick={generateRandomTask}>
        Generate Random Task
      </button>
    </div>
  );
};

export default TruthDareOrDrink;