"use client"
import * as React from "react"
import { User, MapPin, CheckCircle, ShieldAlert, Award } from "lucide-react"

export default function ProfilePage() {
  const sellerDetails = {
    name: "Purnima Bora",
    location: "Sualkuchi, Kamrup District, Assam - 781103",
    role: "Artisan Weaver",
    joined: "June 2025",
    artisanCardId: "ART-AS-9828",
    status: "Verified",
    rating: "4.8 ★",
    bio: "Specializing in traditional Assam silk Mekhela Chadors woven on handlooms. Dedicated to preserving the authentic patterns of golden Muga and white Eri silks."
  }

  return (
    <div className="space-y-6 max-w-2xl mx-auto pb-10">
      <div>
        <h1 className="text-2xl md:text-3xl font-extrabold font-heading text-slate-800">My Profile</h1>
        <p className="text-sm text-slate-500 mt-1">Manage public profile, bio, and government artisan credentials</p>
      </div>

      <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm space-y-6">
        {/* Profile Card header */}
        <div className="flex items-center space-x-4 border-b border-slate-50 pb-5">
          <div className="w-16 h-16 bg-slate-100 flex items-center justify-center text-4xl rounded-full border-2 border-[#C9A84C]">
            👩
          </div>
          <div>
            <h3 className="font-extrabold text-slate-800 text-lg flex items-center">
              {sellerDetails.name}
              <span className="ml-2 text-xs bg-emerald-55 text-emerald-800 bg-emerald-50 border border-emerald-100 font-bold px-2.5 py-0.5 rounded-full flex items-center space-x-0.5">
                <span>✅</span>
                <span>Verified</span>
              </span>
            </h3>
            <p className="text-xs text-slate-400 font-semibold flex items-center mt-1">
              <MapPin className="h-3.5 w-3.5 mr-1 text-slate-400 shrink-0" />
              {sellerDetails.location}
            </p>
          </div>
        </div>

        {/* Profile Details */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-semibold text-slate-600">
          <div className="space-y-1">
            <span className="text-[10px] text-slate-400 uppercase block">Artisan Category</span>
            <span className="text-slate-800 block text-sm">{sellerDetails.role}</span>
          </div>
          <div className="space-y-1">
            <span className="text-[10px] text-slate-400 uppercase block">Government Identity Card</span>
            <span className="text-slate-800 block text-sm font-mono">{sellerDetails.artisanCardId}</span>
          </div>
          <div className="space-y-1">
            <span className="text-[10px] text-slate-400 uppercase block">Joined Platform</span>
            <span className="text-slate-800 block text-sm">{sellerDetails.joined}</span>
          </div>
          <div className="space-y-1">
            <span className="text-[10px] text-slate-400 uppercase block">Average Rating</span>
            <span className="text-amber-500 block text-sm font-bold">{sellerDetails.rating} Rating</span>
          </div>
        </div>

        {/* Bio */}
        <div className="space-y-1.5 pt-3 border-t border-slate-50">
          <span className="text-[10px] text-slate-400 uppercase font-bold block">Artisan Story & Bio</span>
          <p className="text-xs font-medium text-slate-600 leading-relaxed bg-slate-50 p-4 rounded-xl">
            {sellerDetails.bio}
          </p>
        </div>

        {/* Certification badge */}
        <div className="bg-amber-50/40 border border-amber-100 p-4 rounded-xl flex items-center space-x-3.5">
          <Award className="h-8 w-8 text-amber-600 shrink-0" />
          <div className="text-xs">
            <h4 className="font-extrabold text-amber-800">GI Tag Certified Weaver</h4>
            <p className="text-slate-550 font-medium mt-0.5">Your Sualkuchi handloom creations are eligible for special GI tagging badge.</p>
          </div>
        </div>
      </div>
    </div>
  )
}
