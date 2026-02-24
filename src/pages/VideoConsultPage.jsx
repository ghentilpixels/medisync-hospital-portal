import React, { useState, useEffect } from "react";
import { Card, Button, Badge } from "../components/UI";
import {
  Video,
  Mic,
  MicOff,
  VideoOff,
  PhoneOff,
  Settings,
  MessageSquare,
  Users,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";

export const VideoConsultPage = () => {
  const [isMuted, setIsMuted] = useState(false);
  const [isVideoOff, setIsVideoOff] = useState(false);
  const [isJoined, setIsJoined] = useState(false);
  const navigate = useNavigate();

  const handleEndCall = () => {
    toast.success("Consultation ended");
    navigate("/");
  };

  return (
    <div className="h-[calc(100vh-12rem)] flex flex-col">
      {!isJoined ? (
        <div className="flex-1 flex items-center justify-center">
          <Card className="p-8 max-w-lg w-full text-center">
            <h2 className="text-2xl font-bold text-slate-900 mb-2">
              Virtual Consultation Room
            </h2>
            <p className="text-slate-500 mb-8">
              Dr. Emily Smith is ready to see you. Please check your camera and
              microphone before joining.
            </p>

            <div className="aspect-video bg-slate-900 rounded-xl mb-8 flex items-center justify-center relative overflow-hidden">
              {isVideoOff ? (
                <div className="text-slate-500 flex flex-col items-center">
                  <VideoOff size={48} className="mb-2" />
                  <p className="text-sm">Camera is off</p>
                </div>
              ) : (
                <img
                  src="https://picsum.photos/seed/patient/640/360"
                  alt="Preview"
                  className="w-full h-full object-cover opacity-50"
                  referrerPolicy="no-referrer"
                />
              )}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-4">
                <button
                  onClick={() => setIsMuted(!isMuted)}
                  className={`p-3 rounded-full ${isMuted ? "bg-red-500 text-white" : "bg-white/20 text-white backdrop-blur-md"}`}
                >
                  {isMuted ? <MicOff size={20} /> : <Mic size={20} />}
                </button>
                <button
                  onClick={() => setIsVideoOff(!isVideoOff)}
                  className={`p-3 rounded-full ${isVideoOff ? "bg-red-500 text-white" : "bg-white/20 text-white backdrop-blur-md"}`}
                >
                  {isVideoOff ? <VideoOff size={20} /> : <Video size={20} />}
                </button>
              </div>
            </div>

            <Button
              size="lg"
              className="w-full"
              onClick={() => setIsJoined(true)}
            >
              Join Consultation
            </Button>
          </Card>
        </div>
      ) : (
        <div className="flex-1 flex flex-col lg:flex-row gap-6">
          <div className="flex-1 bg-slate-900 rounded-2xl relative overflow-hidden flex items-center justify-center">
            <img
              src="https://picsum.photos/seed/doctor/1280/720"
              alt="Doctor"
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute top-6 left-6 bg-black/40 backdrop-blur-md px-3 py-1.5 rounded-lg text-white text-sm font-medium flex items-center">
              <div className="w-2 h-2 bg-emerald-500 rounded-full mr-2 animate-pulse"></div>
              Dr. Emily Smith
            </div>

            <div className="absolute bottom-6 right-6 w-48 aspect-video bg-slate-800 rounded-xl border-2 border-white/20 overflow-hidden shadow-2xl">
              {isVideoOff ? (
                <div className="w-full h-full flex items-center justify-center text-slate-500">
                  <VideoOff size={24} />
                </div>
              ) : (
                <img
                  src="https://picsum.photos/seed/patient/320/180"
                  alt="Self"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              )}
            </div>

            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center space-x-4 bg-black/40 backdrop-blur-xl p-4 rounded-2xl border border-white/10">
              <button
                onClick={() => setIsMuted(!isMuted)}
                className={`p-4 rounded-xl transition-all ${isMuted ? "bg-red-500 text-white" : "text-white hover:bg-white/10"}`}
              >
                {isMuted ? <MicOff size={24} /> : <Mic size={24} />}
              </button>
              <button
                onClick={() => setIsVideoOff(!isVideoOff)}
                className={`p-4 rounded-xl transition-all ${isVideoOff ? "bg-red-500 text-white" : "text-white hover:bg-white/10"}`}
              >
                {isVideoOff ? <VideoOff size={24} /> : <Video size={24} />}
              </button>
              <button className="p-4 rounded-xl text-white hover:bg-white/10 transition-all">
                <Settings size={24} />
              </button>
              <button
                onClick={handleEndCall}
                className="p-4 rounded-xl bg-red-600 text-white hover:bg-red-700 transition-all shadow-lg shadow-red-900/20"
              >
                <PhoneOff size={24} />
              </button>
            </div>
          </div>

          <div className="w-full lg:w-80 flex flex-col gap-6">
            <Card className="flex-1 p-4 flex flex-col">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-bold text-slate-900">Chat</h3>
                <MessageSquare size={18} className="text-slate-400" />
              </div>
              <div className="flex-1 overflow-y-auto space-y-4 mb-4">
                <div className="bg-slate-50 p-3 rounded-lg">
                  <p className="text-xs font-bold text-emerald-600 mb-1">
                    Dr. Emily Smith
                  </p>
                  <p className="text-sm text-slate-700">
                    Hello! How are you feeling today?
                  </p>
                </div>
              </div>
              <div className="relative">
                <input
                  type="text"
                  placeholder="Type a message..."
                  className="w-full bg-slate-50 border-none rounded-lg px-4 py-2 text-sm focus:ring-2 focus:ring-emerald-500 outline-none"
                />
              </div>
            </Card>

            <Card className="p-4">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-bold text-slate-900">Participants</h3>
                <Users size={18} className="text-slate-400" />
              </div>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="w-8 h-8 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center text-xs font-bold mr-2">
                      ES
                    </div>
                    <span className="text-sm font-medium text-slate-700">
                      Dr. Emily Smith
                    </span>
                  </div>
                  <Badge variant="success">Host</Badge>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="w-8 h-8 rounded-full bg-slate-100 text-slate-600 flex items-center justify-center text-xs font-bold mr-2">
                      ME
                    </div>
                    <span className="text-sm font-medium text-slate-700">
                      You
                    </span>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      )}
    </div>
  );
};
