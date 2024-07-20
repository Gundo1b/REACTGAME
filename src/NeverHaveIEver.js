// NeverHaveIEver.js
import React, { useState } from 'react';
import './NeverHaveIEver.css'; // Import your CSS for styling

const NeverHaveIEver = () => {
  const [statement, setStatement] = useState('');
  const [statements, setStatements] = useState([
    'Never have I ever had sex in a public place',
    'Never have I ever broken up with someone by text',
    'Never have I ever cheated on anyone',
    'Never have I ever gone on more than one date in a day',
    'Never have I ever given out a fake phone number',
    'Never have I ever slipped into someone\'s DMs',
    'Never have I ever fancied someone in this room',
    'Never have I ever kissed a friend\'s sibling',
    'Never have I ever been in an open relationship',
    'Never have I ever lied in this game',
    'Never have I ever been arrested',
    'Never have I ever ghosted someone for something tiny and unimportant',
    'Never have I ever told someone’s secret',
    'Never have I ever done a nude streak in public',
    'Never have I ever looked through my partner’s phone',
    'Never have I ever sent a dirty text to the wrong person',
    'Never have I ever said the wrong name in bed',
    'Never have I ever gone out with a friend\'s ex',
    'Never have I ever had a friend with benefits',
    'Never have I ever slept with someone whose name I don\'t know',
    'Never have I ever been to a sex shop',
    'Never have I ever had a threesome',
    'Never have I ever joined the \'mile high\' club',
    'Never have I ever sent a sexy selfie',
    'Never have I ever had sex in the sea/a swimming pool',
    'Never have I ever had a one night stand',
    'Never have I ever faked an orgasm',
    'Never have I ever flashed someone',
    'Never have I ever given or received a lap dance',
    'Never have I ever slept with a co-worker',
    'Never have I ever gone back to an ex',
    'Never have I ever been \'walked in on\' while having sex',
    'Never have I ever had a sex dream about someone in this room',
    'Never have I ever had a sex dream about someone the people in this room know',
    'Never have I ever had a favourite sex toy',
    'Never have I ever role-played in bed',
    'Never have I ever eaten food off a partner',
    'Never have I ever sucked my partner’s toes',
    'Never have I ever done the walk of shame',
    'Never have I ever had a sex dream about someone else when I was in a relationship',
    'Never have I ever Googled sex positions',
    'Never have I ever had a sexy nickname / given someone a sexy nickname',
    'Never have I ever kissed more than one person in one day',
    'Never have I ever had to hide a love bite',
    'Never have I ever had a sex fantasy',
    'Never have I ever played strip poker',
    'Never have I ever snuck someone into the house',
    'Never have I ever acted out my sex fantasy',
    'Never have I ever used handcuffs or something similar',
    'Never have I ever sent a nude picture or video',
    'Never have I ever mooned someone',
    'Never have I ever been attracted to a cartoon character',
    'Never have I ever fantasied about someone in this room',
    'Never have I ever gone commando',
    'Never have I ever kissed a friend\'s ex',
    'Never have I ever helped a stranger',
    'Never have I ever been in trouble with the police',
    'Never have I ever lied to a partner about where I\'ve been',
    'Never have I ever had a mind blank from being drunk',
    'Never have I ever forgotten a partner\'s birthday',
    "Used someone else's toothbrush",
    "Lied to leave the club early",
    "Eaten leftover food that's probably gone off",
    "Paid for a gym class and not attended",
    "Caught my parents having sex",
    "Pretended to be someone else",
    "Ignored someone I knew in public",
    "Googled my own name",
    "Fancied a friend's parent",
    "Given a partner an embarrassing pet name",
    "Created a fake Instagram to stalk someone",
    "Fake-cried to get something",
    "Recreated an I'm a Celeb... Get Me Out Of Here! eating trial",
    "Pretended to be on the phone",
    "Eaten dog or cat food",
    "Picked out a wedgie in public",
    "Eaten what I knew was someone else's food",
    "Done something so bad in public that I still cringe to think about it",
    "Been attracted to a cartoon character",
    "Eaten a bogey",
    "Not worn deodorant",
    "Googled myself",
    "Lied to someone in this room",
    "Bitten my toenails",
    "Treated a pet like a baby",
    "Made a social media account to see if my partner would cheat",
    "Popped someone else's spot",
    "Peed myself from laughing too hard",
    "Eaten something gross",
    "Pretended I was a guest on a talk show"
  ]);
  const [shownStatements, setShownStatements] = useState([]);

  const handleNextStatement = () => {
    let randomIndex;
    do {
      randomIndex = Math.floor(Math.random() * statements.length);
    } while (shownStatements.includes(statements[randomIndex]));
    setStatement(statements[randomIndex]);
    setShownStatements([...shownStatements, statements[randomIndex]]);
  };

  return (
    <div className="never-have-i-ever-container">
      <h2>Never Have I Ever</h2>
      <div className="statement-container">
        <p className="statement-text">{statement}</p>
      </div>
      <button className="next-button" onClick={handleNextStatement}>
        Next Statement
      </button>
    </div>
  );
};

export default NeverHaveIEver;