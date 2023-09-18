
'use client'
import { useState } from 'react';

const New: React.FC = () => {
  const inputString = "Sure, I can help you practice your English and improve your vocabulary. Let's have a conversation about family and travel. Person 1: Hi, how are you doing today? Person 2: Hi, I'm doing well, thank you. How about you? Person 1: I'm great, thanks. So, have you ever traveled with your family? Person 2: Yes, I have. We love going on family trips. It gives us a chance to spend quality time together. In fact, we recently went on a vacation to Europe. Person 1: That sounds wonderful. Which countries did you visit? Person 2: We visited France, Italy, and Spain. Each country had its own unique charm. We explored the historic streets of Paris, marveled at the beautiful art in Florence, and relaxed on the beaches of Barcelona. Person 1: That sounds like an amazing trip. Did you face any language barriers while traveling? Person 2: We did come across a few language barriers, especially in smaller towns where English was not widely spoken. However, we were able to overcome this by using translation apps and learning some basic phrases in the local language. Person 1: That's smart. How did your family react to experiencing different cultures? Person 2: They loved it! Experiencing different cultures was an eye-opening experience for all of us. It made us appreciate the diversity in the world and helped us understand and respect different traditions and customs. Person 1: That's beautiful. Family trips can be such bonding experiences. Do you have any other travel plans with your family in the near future? Person 2: We are currently planning a trip to South America next summer. We want to explore the ancient ruins of Machu Picchu in Peru and immerse ourselves in the vibrant culture of Brazil. Person 1: Wow, South America sounds incredible. I hope you have an unforgettable time on your upcoming trip! Person 2: Thank you! We're really looking forward to it. It was great talking to you about family and travel. Person 1: Likewise! I enjoyed our conversation and wish you all the best for your future adventures. Take care! Person 2: Thank you. You take care too. Goodbye!";

  const [extractedText, setExtractedText] = useState<string | null>(null);

  const handleTextClick = (clickedText: string) => {
    setExtractedText(clickedText);
  };

  const splitText = inputString.split(/([,.?:])/);

  return (
    <div>
      <p>Original String:</p>
      <p>
        {splitText.map((segment, index) => (
          <span
            key={index}
            onClick={() => handleTextClick(segment)}
            style={{ cursor: 'pointer', backgroundColor: extractedText === segment ? 'yellow' : 'transparent' }}
          >
            {segment}
          </span>
        ))}
      </p>
      <p>Extracted Text: {extractedText}</p>
    </div>
  );
};
export default New;
