import React from 'react';

const TweetButton = ({ tweetText }) => {
  const handleTweet = () => {
    const encodedTweetText = encodeURIComponent(tweetText); // Encode the tweet text

    // Construct the Twitter Web Intent URL
    const tweetUrl = `https://twitter.com/intent/tweet?text=${encodedTweetText}`;

    // Open the Twitter compose window in a new tab
    window.open(tweetUrl, '_blank');
  };

  return (
    <button onClick={handleTweet} className="font-custom bg-gradient-to-r from-amber-600 via-yellow-500 to-amber-600 animate-text text-white font-bold py-3 px-5 rounded-xl text-3xl md:text-5xl">
      JOIN
    </button>
  );
};

export default TweetButton;
