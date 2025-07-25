"use client"

import { useState, useRef } from "react"
import { Camera, User, Mail, Phone, MapPin, MessageSquare, Lock } from "lucide-react"
import Layout from "./layout"

export default function Component() {
  const [activeTab, setActiveTab] = useState("account")
  const [uploadedImage, setUploadedImage] = useState(null)
  const fileInputRef = useRef(null)

  const handleFileUpload = (event) => {
    const file = event.target.files?.[0]
    if (file) {
      // Check if file is an image
      if (file.type.startsWith("image/")) {
        const reader = new FileReader()
        reader.onload = (e) => {
          setUploadedImage(e.target?.result)
        }
        reader.readAsDataURL(file)
      } else {
        alert("Please select an image file")
      }
    }
  }

  const triggerFileUpload = () => {
    fileInputRef.current?.click()
  }

  return (
    <Layout>
      <div className="p-6 pt-20">
        <div className="w-full">
          <div className="border-2 rounded-lg bg-white">
            {/* Tabs */}
            <div>
              <div className="flex px-3 py-4">
                <button
                  onClick={() => setActiveTab("account")}
                  className={`flex py-3 px-4 text-center font-medium text-sm border-b-2 ${
                    activeTab === "account"
                      ? "border-blue-500 text-blue-400"
                      : "border-transparent text-gray-500 hover:text-gray-700"
                  }`}
                >
                  Account
                </button>
                <button
                  onClick={() => setActiveTab("inquiry")}
                  className={`flex py-3 px-4 text-center font-medium text-sm border-b-2 ${
                    activeTab === "inquiry"
                      ? "border-blue-500 text-blue-400"
                      : "border-transparent text-gray-500 hover:text-gray-700"
                  }`}
                >
                  Inquiry
                </button>
                <button
                  onClick={() => setActiveTab("security")}
                  className={`flex py-3 px-4 text-center font-medium text-sm border-b-2 ${
                    activeTab === "security"
                      ? "border-blue-500 text-blue-400"
                      : "border-transparent text-gray-500 hover:text-gray-700"
                  }`}
                >
                  Security
                </button>
              </div>
            </div>

            {/* Account Tab Content */}
            {activeTab === "account" && (
              <div className="p-6">
                {/* Header */}
                <div className="flex justify-between items-center mb-8">
                  <h2 className="text-lg font-medium text-gray-900">Account Settings</h2>
                  <button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-md font-medium">
                    Update
                  </button>
                </div>

                {/* Main Content Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                  {/* Form Fields - Left Side */}
                  <div className="lg:col-span-2 space-y-4 text-left">
                    {/* Username */}
                    <div className="space-y-1">
                      <label htmlFor="username" className="block text-sm text-gray-600 font-medium">
                        Username
                      </label>
                      <div className="relative">
                        <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                        <input
                          id="username"
                          type="text"
                          defaultValue="Jordan"
                          className="w-full pl-10 pr-3 py-2 h-10 bg-gray-50 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        />
                      </div>
                    </div>

                    {/* Last Name */}
                    <div className="space-y-1">
                      <label htmlFor="lastname" className="block text-sm text-gray-600 font-medium">
                        Last Name
                      </label>
                      <div className="relative">
                        <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                        <input
                          id="lastname"
                          type="text"
                          defaultValue="Nickson"
                          className="w-full pl-10 pr-3 py-2 h-10 bg-gray-50 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        />
                      </div>
                    </div>

                    {/* Email */}
                    <div className="space-y-1">
                      <label htmlFor="email" className="block text-sm text-gray-600 font-medium">
                        Email
                      </label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                        <input
                          id="email"
                          type="email"
                          defaultValue="jordannickson@gmail.com"
                          className="w-full pl-10 pr-3 py-2 h-10 bg-gray-50 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        />
                      </div>
                    </div>

                    {/* Phone Number */}
                    <div className="space-y-1">
                      <label htmlFor="phone" className="block text-sm text-gray-600 font-medium">
                        Phone Number
                      </label>
                      <div className="relative">
                        <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                        <input
                          id="phone"
                          type="text"
                          defaultValue="09061569633"
                          className="w-full pl-10 pr-3 py-2 h-10 bg-gray-50 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        />
                      </div>
                    </div>

                    {/* Address */}
                    <div className="space-y-1">
                      <label htmlFor="address" className="block text-sm text-gray-600 font-medium">
                        Address
                      </label>
                      <div className="relative">
                        <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                        <input
                          id="address"
                          type="text"
                          defaultValue="No. 93 Skyfloor Apartments"
                          className="w-full pl-10 pr-3 py-2 h-10 bg-gray-50 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        />
                      </div>
                    </div>

                    {/* Country and State */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4">
                      <div className="space-y-1">
                        <label htmlFor="country" className="block text-sm text-gray-600 font-medium">
                          Country
                        </label>
                        <select
                          id="country"
                          defaultValue="nigeria"
                          className="w-full px-3 py-2 h-10 bg-gray-50 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        >
                          <option value="nigeria">Nigeria</option>
                          <option value="usa">United States</option>
                          <option value="uk">United Kingdom</option>
                          <option value="canada">Canada</option>
                        </select>
                      </div>
                      <div className="space-y-1">
                        <label htmlFor="state" className="block text-sm text-gray-600 font-medium">
                          State
                        </label>
                        <select
                          id="state"
                          defaultValue="lagos"
                          className="w-full px-3 py-2 h-10 bg-gray-50 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        >
                          <option value="lagos">Lagos</option>
                          <option value="abuja">Abuja</option>
                          <option value="kano">Kano</option>
                          <option value="rivers">Rivers</option>
                        </select>
                      </div>
                    </div>
                  </div>

                  {/* Profile Picture Upload - Right Side */}
                  <div className="lg:col-span-1 flex justify-center lg:justify-start pt-8">
                    <div className="relative">
                      <div
                        className="w-24 h-24 bg-gray-200 rounded-full flex items-center justify-center overflow-hidden cursor-pointer hover:bg-gray-300 transition-colors"
                        onClick={triggerFileUpload}
                      >
                        {uploadedImage ? (
                          <img
                            src={uploadedImage || "/placeholder.svg"}
                            alt="Profile"
                            className="w-full h-full object-cover"
                          />
                        ) : (
                          <div className="w-full h-full bg-gray-200 flex items-center justify-center text-lg font-medium text-gray-600">
                            JN
                          </div>
                        )}
                      </div>

                      {/* Hidden file input */}
                      <input
                        ref={fileInputRef}
                        type="file"
                        accept="image/*"
                        onChange={handleFileUpload}
                        className="hidden"
                      />

                      {/* Camera icon button */}
                      <div
                        className="absolute bottom-1-right-1 w-6 h-6 bg-white rounded-full flex items-center justify-center border border-gray-300 shadow-sm cursor-pointer hover:bg-gray-50 transition-colors"
                        onClick={triggerFileUpload}
                      >
                        <Camera className="w-3 h-3 text-gray-600" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Inquiry Tab Content */}
            {activeTab === "inquiry" && (
              <div className="p-6">
                <div className="flex justify-between items-center mb-8">
                  <h2 className="text-lg font-medium text-gray-900">Send Inquiry</h2>
                  <button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-md font-medium">
                    Send Message
                  </button>
                </div>
                <div className="max-w-2xl space-y-4 text-left">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label htmlFor="inquiry-name" className="block text-sm text-gray-600 font-medium">
                        Full Name
                      </label>
                      <div className="relative">
                        <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                        <input
                          id="inquiry-name"
                          type="text"
                          placeholder="Enter your full name"
                          className="w-full pl-10 pr-3 py-2 h-10 bg-gray-50 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        />
                      </div>
                    </div>
                    <div className="space-y-1">
                      <label htmlFor="inquiry-email" className="block text-sm text-gray-600 font-medium">
                        Email Address
                      </label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                        <input
                          id="inquiry-email"
                          type="email"
                          placeholder="Enter your email"
                          className="w-full pl-10 pr-3 py-2 h-10 bg-gray-50 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="space-y-1">
                    <label htmlFor="inquiry-subject" className="block text-sm text-gray-600 font-medium">
                      Subject
                    </label>
                    <div className="relative">
                      <MessageSquare className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                      <input
                        id="inquiry-subject"
                        type="text"
                        placeholder="What is your inquiry about?"
                        className="w-full pl-10 pr-3 py-2 h-10 bg-gray-50 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>
                  </div>
                  <div className="space-y-1">
                    <label htmlFor="inquiry-message" className="block text-sm text-gray-600 font-medium">
                      Message
                    </label>
                    <textarea
                      id="inquiry-message"
                      rows={5}
                      placeholder="Please describe your inquiry in detail..."
                      className="w-full px-3 py-2 bg-gray-50 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                    />
                  </div>
                  <div className="space-y-1">
                    <label htmlFor="inquiry-priority" className="block text-sm text-gray-600 font-medium">
                      Priority Level
                    </label>
                    <select
                      id="inquiry-priority"
                      className="w-full px-3 py-2 h-10 bg-gray-50 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    >
                      <option value="">Select priority level</option>
                      <option value="low">Low</option>
                      <option value="medium">Medium</option>
                      <option value="high">High</option>
                      <option value="urgent">Urgent</option>
                    </select>
                  </div>
                </div>
              </div>
            )}

            {/* Security Tab Content */}
            {activeTab === "security" && (
              <div className="p-6">
                <div className="flex justify-between items-center mb-8">
                  <h2 className="text-lg font-medium text-gray-900">Security Settings</h2>
                  <button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-md font-medium">
                    Update Password
                  </button>
                </div>
                <div className="max-w-md space-y-4 text-left">
                  <div className="space-y-1">
                    <label htmlFor="currentpassword" className="block text-sm text-gray-600 font-medium">
                      Current Password
                    </label>
                    <div className="relative">
                      <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                      <input
                        id="currentpassword"
                        type="password"
                        className="w-full pl-10 pr-3 py-2 h-10 bg-gray-50 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>
                  </div>
                  <div className="space-y-1">
                    <label htmlFor="newpassword" className="block text-sm text-gray-600 font-medium">
                      New Password
                    </label>
                    <div className="relative">
                      <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                      <input
                        id="newpassword"
                        type="password"
                        className="w-full pl-10 pr-3 py-2 h-10 bg-gray-50 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>
                  </div>
                  <div className="space-y-1">
                    <label htmlFor="confirmpassword" className="block text-sm text-gray-600 font-medium">
                      Confirm New Password
                    </label>
                    <div className="relative">
                      <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                      <input
                        id="confirmpassword"
                        type="password"
                        className="w-full pl-10 pr-3 py-2 h-10 bg-gray-50 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </Layout>
  )
}
