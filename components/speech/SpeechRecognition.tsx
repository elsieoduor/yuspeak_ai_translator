'use client'
import React, { useEffect } from "react";
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import { IconMicrophone } from '@tabler/icons-react';

interface SpeechRecognitionComponentProps {
  setSourceText: (text: string) => void; 
}

const SpeechRecognitionComponent: React.FC<SpeechRecognitionComponentProps> = ({ setSourceText }) => {
  // Use speech recognition hook to get transcript and listening state
  const { transcript, listening } = useSpeechRecognition();

  // UseEffect hook to update sourceText when transcript changes
  useEffect(() => {
    setSourceText(transcript);
  }, [transcript, setSourceText]);

  // Function to toggle voice recording on and off
  const handlingVoiceRecording = () => {
    if (listening) {
      SpeechRecognition.stopListening();
    } else {
      SpeechRecognition.startListening();
    }
  };

  return (
    <div>
      <IconMicrophone
        size={22}
        className='text-white'
        onClick={handlingVoiceRecording}
      />
    </div>
  );
}

export default SpeechRecognitionComponent;
