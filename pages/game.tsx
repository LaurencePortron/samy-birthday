import Link from 'next/link';
import React from 'react';
import WheelComponent from 'react-wheel-of-prizes';
import styles from '../styles/Game.module.css';

function Game(props) {
  const segments = [
    'movie ticket',
    'free câlins',
    'Mcdo',
    'better luck next time',
    'un bisou',
    'I walk the dog',
    'better luck next time',
    'faire des guilis à Lolo',
  ];
  const segColors = [
    '#ff48fa',
    '#78e4ff',
    'rgba(157, 96, 212, 0.5)',
    '#4FD3C4',
    '#AB46D2',
    '#55D8C1',
    '#F190B7',
    '#533E85',
  ];

  const onFinished = (winner: string) => {
    <p>You won {winner}</p>;
  };

  return (
    <div className={styles.gameContainer}>
      <div>
        <h1>Well take your chances</h1>
        <Link href='/'>
          <button className={styles.backToHomeButton}>
            <p>Back</p>
          </button>
        </Link>
      </div>
      <div>
        <WheelComponent
          segments={segments}
          segColors={segColors}
          winningSegment='won 2'
          onFinished={(winner: string) => onFinished(winner)}
          primaryColor='#78e4ff'
          contrastColor='white'
          buttonText='Spin'
          isOnlyOnce={false}
          upDuration={500}
          downDuration={100}
          fontFamily='Arial'
        />
      </div>
    </div>
  );
}

export default Game;
