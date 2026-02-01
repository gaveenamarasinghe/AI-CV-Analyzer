"use client";

import React, { useState, useEffect, useRef } from 'react';
import { Mic, MicOff, Video, VideoOff, Phone, Settings, Users, MessageSquare, Grid, MoreVertical } from 'lucide-react';
import Vapi from '@vapi-ai/web';

const AIVoiceMockInterview = () => {
  const [isVideoOn, setIsVideoOn] = useState(true);
  const [messages, setMessages] = useState<Array<{ type: 'ai' | 'user'; text: string }>>([]);
  const [interviewStarted, setInterviewStarted] = useState(false);
  const [isAiSpeaking, setIsAiSpeaking] = useState(false);
  const [isCallActive, setIsCallActive] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const vapiRef = useRef<Vapi | null>(null);

  // Updated to match your new environment variable name
  const publicKey = process.env.NEXT_PUBLIC_VAPI_PUBLIC_KEY;
  const assistantId = process.env.NEXT_PUBLIC_VAPI_ASSISTANT_ID; // Changed from NEXT_PUBLIC_VAPI_AGENT_ID

  useEffect(() => {
    if (!publicKey) {
      setError('Missing Vapi Public Key: Add NEXT_PUBLIC_VAPI_PUBLIC_KEY to your .env file');
      console.error('Vapi Public Key is missing.');
      return;
    }

    if (!assistantId) {
      setError('Missing Vapi Assistant ID: Add NEXT_PUBLIC_VAPI_ASSISTANT_ID to your .env file');
      console.error('Vapi Assistant ID is missing.');
      return;
    }

    try {
      vapiRef.current = new Vapi(publicKey.trim());

      vapiRef.current.on('call-start', () => {
        setIsCallActive(true);
        setIsAiSpeaking(false);
        setError(null);
      });

      vapiRef.current.on('call-end', () => {
        setIsCallActive(false);
        setIsAiSpeaking(false);
      });

      vapiRef.current.on('speech-start', () => {
        setIsAiSpeaking(true);
      });

      vapiRef.current.on('speech-end', () => {
        setIsAiSpeaking(false);
      });

      vapiRef.current.on('message', (message: any) => {
        if (message.type === 'transcript' && message.transcriptType === 'final') {
          const type = message.role === 'assistant' ? 'ai' : 'user';
          setMessages(prev => [...prev, { type, text: message.transcript }]);
        }
      });

      vapiRef.current.on('error', (e: any) => {
        console.error('Vapi error:', e);
        setError(`Vapi Error: ${e.message || 'Unknown error'}`);
      });
    } catch (err: any) {
      setError(`Failed to initialize Vapi: ${err.message}`);
      console.error(err);
    }

    return () => {
      if (vapiRef.current) {
        vapiRef.current.removeAllListeners();
      }
    };
  }, [publicKey, assistantId]);

  const startInterview = () => {
    if (!vapiRef.current || !assistantId) {
      setError('Vapi not ready. Check configuration.');
      return;
    }

    setInterviewStarted(true);
    setMessages([]);
    vapiRef.current.start(assistantId.trim());
  };

  const endInterview = () => {
    if (vapiRef.current && isCallActive) {
      vapiRef.current.stop();
    }
    if (confirm('Are you sure you want to end the interview?')) {
      window.location.reload();
    }
  };

  return (
    <div className="h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 flex flex-col">
      {/* Header */}
      <div className="bg-white border-b-2 border-gray-200 px-6 py-3 flex items-center justify-between shadow-sm">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center shadow-md">
            <Video className="w-6 h-6 text-white" />
          </div>
          <div>
            <span className="text-gray-800 font-bold text-xl">AI Mock Interview</span>
            <p className="text-xs text-gray-500">Professional Interview Platform (Powered by Vapi)</p>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <div className={`bg-${isCallActive ? 'green' : 'blue'}-100 px-4 py-2 rounded-full`}>
            <span className={`text-sm font-semibold ${isCallActive ? 'text-green-700' : 'text-blue-700'}`}>
              {isCallActive ? 'Interview In Progress' : 'Ready to Start'}
            </span>
          </div>
          <button className="p-2 hover:bg-gray-100 rounded-lg transition">
            <Settings className="w-5 h-5 text-gray-600" />
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex overflow-hidden">
        {/* Video Area */}
        <div className="flex-1 p-6 relative">
          <div className="h-full bg-white rounded-2xl overflow-hidden relative shadow-xl border-2 border-gray-200">
            {/* Error Message Overlay */}
            {error && (
              <div className="absolute inset-0 bg-red-50 bg-opacity-90 flex items-center justify-center z-50">
                <div className="text-center max-w-md px-6">
                  <p className="text-red-800 font-bold text-lg mb-4">Configuration Error</p>
                  <p className="text-red-700 text-sm mb-4">{error}</p>
                  <p className="text-gray-700 text-xs leading-relaxed">
                    1. Go to <a href="https://dashboard.vapi.ai" target="_blank" rel="noopener noreferrer" className="underline font-semibold">dashboard.vapi.ai</a><br/>
                    2. Copy your <strong>Public Key</strong> from API Keys<br/>
                    3. Copy your <strong>Assistant ID</strong> from the assistant page<br/>
                    4. Add them to your <code className="bg-gray-200 px-2 py-1 rounded">.env</code> file
                  </p>
                </div>
              </div>
            )}

            {/* AI Interviewer Video */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-purple-50 flex items-center justify-center">
              <div className="text-center">
                <div className={`w-40 h-40 rounded-full mx-auto mb-6 flex items-center justify-center shadow-2xl transition-all duration-300 ${
                  isAiSpeaking 
                    ? 'bg-gradient-to-br from-blue-500 to-purple-600 animate-pulse scale-110' 
                    : 'bg-gradient-to-br from-gray-300 to-gray-400'
                }`}>
                  <Users className="w-20 h-20 text-white" />
                </div>
                <h3 className="text-gray-800 text-2xl font-bold mb-2">AI Interviewer (Vapi)</h3>
                <div className={`inline-block px-4 py-2 rounded-full ${
                  isAiSpeaking ? 'bg-green-100' : 'bg-blue-100'
                }`}>
                  <p className={`text-sm font-semibold ${isAiSpeaking ? 'text-green-700' : 'text-blue-700'}`}>
                    {isAiSpeaking ? '🎤 Speaking...' : '👂 Listening...'}
                  </p>
                </div>
              </div>
            </div>

            {/* User Video (Picture-in-Picture) */}
            <div className="absolute bottom-6 right-6 w-56 h-40 bg-white rounded-xl border-4 border-blue-500 shadow-2xl flex items-center justify-center overflow-hidden">
              {isVideoOn ? (
                <div className="text-center bg-gradient-to-br from-green-400 to-emerald-500 w-full h-full flex flex-col items-center justify-center">
                  <div className="w-20 h-20 rounded-full bg-white shadow-lg mx-auto flex items-center justify-center mb-2">
                    <span className="text-green-600 text-2xl font-bold">YOU</span>
                  </div>
                  <p className="text-white text-sm font-semibold">Candidate</p>
                </div>
              ) : (
                <div className="text-gray-400 bg-gray-100 w-full h-full flex flex-col items-center justify-center">
                  <VideoOff className="w-10 h-10 mx-auto mb-2" />
                  <p className="text-sm font-semibold">Camera Off</p>
                </div>
              )}
            </div>

            {/* Live Call Indicator */}
            {isCallActive && (
              <div className="absolute top-6 left-6 flex items-center space-x-2 bg-green-500 px-4 py-2 rounded-full shadow-lg">
                <div className="w-3 h-3 bg-white rounded-full animate-pulse" />
                <span className="text-white text-sm font-bold">● LIVE</span>
              </div>
            )}
          </div>
        </div>

        {/* Chat Sidebar */}
        <div className="w-96 bg-white border-l-2 border-gray-200 flex flex-col shadow-xl">
          <div className="p-4 border-b-2 border-gray-200 bg-gradient-to-r from-blue-500 to-purple-600">
            <h3 className="text-white font-bold flex items-center text-lg">
              <MessageSquare className="w-5 h-5 mr-2" />
              Interview Transcript
            </h3>
          </div>
          
          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50">
            {!interviewStarted ? (
              <div className="text-center py-12">
                <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full mx-auto mb-4 flex items-center justify-center shadow-lg">
                  <Video className="w-10 h-10 text-white" />
                </div>
                <p className="text-gray-600 mb-6 text-lg font-medium">Ready to start your mock interview?</p>
                <button
                  onClick={startInterview}
                  disabled={!!error}
                  className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 disabled:opacity-50 disabled:cursor-not-allowed text-white px-8 py-4 rounded-xl font-bold text-lg transition shadow-lg hover:shadow-xl transform hover:scale-105"
                >
                  🎯 Start Interview
                </button>
                {error && <p className="text-red-600 text-sm mt-4">Please fix the configuration above</p>}
              </div>
            ) : (
              messages.length === 0 ? (
                <p className="text-center text-gray-500">Transcript will appear here once the call begins...</p>
              ) : (
                messages.map((msg, idx) => (
                  <div key={idx} className={`flex ${msg.type === 'user' ? 'justify-end' : 'justify-start'}`}>
                    <div className={`max-w-[85%] rounded-2xl p-4 shadow-md ${
                      msg.type === 'user' 
                        ? 'bg-gradient-to-br from-blue-500 to-purple-600 text-white' 
                        : 'bg-white text-gray-800 border-2 border-gray-200'
                    }`}>
                      <p className={`text-xs font-bold mb-2 ${msg.type === 'user' ? 'text-blue-100' : 'text-gray-500'}`}>
                        {msg.type === 'user' ? '👤 You' : '🤖 AI Interviewer'}
                      </p>
                      <p className="text-sm leading-relaxed">{msg.text}</p>
                    </div>
                  </div>
                ))
              )
            )}
          </div>
        </div>
      </div>

      {/* Control Bar */}
      <div className="bg-white border-t-2 border-gray-200 px-6 py-5 shadow-lg">
        <div className="flex items-center justify-center space-x-4">
          <button
            disabled={!isCallActive}
            className={`p-5 rounded-2xl transition transform hover:scale-110 shadow-lg ${
              isCallActive 
                ? 'bg-gradient-to-br from-green-500 to-emerald-600' 
                : 'bg-gradient-to-br from-gray-200 to-gray-300'
            }`}
            title="Microphone managed automatically by Vapi"
          >
            <Mic className="w-7 h-7 text-white" />
          </button>

          <button
            onClick={() => setIsVideoOn(!isVideoOn)}
            className={`p-5 rounded-2xl transition transform hover:scale-110 shadow-lg ${
              isVideoOn 
                ? 'bg-gradient-to-br from-gray-200 to-gray-300 hover:from-gray-300 hover:to-gray-400' 
                : 'bg-gradient-to-br from-red-500 to-red-600 hover:from-red-600 hover:to-red-700'
            }`}
            title={isVideoOn ? 'Turn Off Camera' : 'Turn On Camera'}
          >
            {isVideoOn ? (
              <Video className="w-7 h-7 text-gray-700" />
            ) : (
              <VideoOff className="w-7 h-7 text-white" />
            )}
          </button>

          <button
            onClick={endInterview}
            className="p-5 rounded-2xl bg-gradient-to-br from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 transition transform hover:scale-110 shadow-lg"
            title="End Interview"
          >
            <Phone className="w-7 h-7 text-white transform rotate-135" />
          </button>

          <button className="p-5 rounded-2xl bg-gradient-to-br from-gray-200 to-gray-300 hover:from-gray-300 hover:to-gray-400 transition transform hover:scale-110 shadow-lg">
            <Grid className="w-7 h-7 text-gray-700" />
          </button>

          <button className="p-5 rounded-2xl bg-gradient-to-br from-gray-200 to-gray-300 hover:from-gray-300 hover:to-gray-400 transition transform hover:scale-110 shadow-lg">
            <MoreVertical className="w-7 h-7 text-gray-700" />
          </button>
        </div>

        <div className="text-center mt-4">
          <p className={`text-sm font-semibold ${isCallActive ? 'text-green-600' : 'text-gray-600'}`}>
            {isCallActive 
              ? '🎤 Speak naturally — Vapi handles microphone access automatically' 
              : '💡 Click "Start Interview" to begin'}
          </p>
        </div>
      </div>
    </div>
  );
};

export default AIVoiceMockInterview;