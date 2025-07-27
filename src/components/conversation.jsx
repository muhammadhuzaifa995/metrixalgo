"use client"

import { useState } from "react"
import Layout from "./layout"

export default function VideoChat() {
  const [selectedContact, setSelectedContact] = useState(null)
  const [messages, setMessages] = useState([])
  const [newMessage, setNewMessage] = useState("")
  const [searchQuery, setSearchQuery] = useState("")

  // Sample contact data
  const contacts = [
    {
      id: "1",
      name: "Jane Doe",
      lastMessage: "Hello, I want to make enquiries about your product",
      time: "12:55 am",
      avatar: "https://ui-avatars.com/api/?name=Jane+Doe&background=6366f1&color=fff&size=40",
      isOnline: true,
      unreadCount: 2,
    },
    {
      id: "2",
      name: "Janet Adebayo",
      lastMessage: "Looking forward to your response",
      time: "1:05 am",
      avatar: "https://ui-avatars.com/api/?name=Janet+Adebayo&background=10b981&color=fff&size=40",
      isOnline: true,
    },
    {
      id: "3",
      name: "Kunle Adekunle",
      lastMessage: "Can you provide more details?",
      time: "1:15 am",
      avatar: "https://ui-avatars.com/api/?name=Kunle+Adekunle&background=f59e0b&color=fff&size=40",
      isOnline: false,
    },
    {
      id: "4",
      name: "Sarah Wilson",
      lastMessage: "Thanks for the quick response!",
      time: "2:30 am",
      avatar: "https://ui-avatars.com/api/?name=Sarah+Wilson&background=ef4444&color=fff&size=40",
      isOnline: true,
      unreadCount: 1,
    },
  ]

  // Sample messages for selected contacts
  const sampleMessages = {
    1: [
      {
        id: "1",
        sender: "Jane Doe",
        message: "Hello, I want to make enquiries about your product",
        time: "12:55 am",
        isOwn: false,
        type: "text",
      },
      {
        id: "2",
        sender: "You",
        message:
          "Hello Jane, thank you for reaching out! I'd be happy to help you with any questions about our product.",
        time: "12:57 am",
        isOwn: true,
        type: "text",
      },
      {
        id: "3",
        sender: "Jane Doe",
        message: "What features does your product offer?",
        time: "12:58 am",
        isOwn: false,
        type: "text",
      },
      {
        id: "4",
        sender: "You",
        message:
          "Our product offers comprehensive analytics, real-time collaboration, and seamless integrations with popular tools.",
        time: "1:00 am",
        isOwn: true,
        type: "text",
      },
    ],
    2: [
      {
        id: "1",
        sender: "Janet Adebayo",
        message: "Looking forward to your response",
        time: "1:05 am",
        isOwn: false,
        type: "text",
      },
      {
        id: "2",
        sender: "You",
        message: "Thank you for waiting! I've reviewed your request and have some great options for you.",
        time: "1:07 am",
        isOwn: true,
        type: "text",
      },
    ],
  }

  const handleContactClick = (contact) => {
    setSelectedContact(contact)
    setMessages(sampleMessages[contact.id] || [])
  }

  const handleSendMessage = (e) => {
    e.preventDefault()
    if (!newMessage.trim() || !selectedContact) return

    const message = {
      id: Date.now().toString(),
      sender: "You",
      message: newMessage,
      time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
      isOwn: true,
      type: "text",
    }

    setMessages((prev) => [...prev, message])
    setNewMessage("")
  }

  const filteredContacts = contacts.filter((contact) => contact.name.toLowerCase().includes(searchQuery.toLowerCase()))

  return (
    <Layout>
    <div className="pt-20 p-6 w-full bg-gray-100 min-h-screen">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-semibold text-gray-900">Conversations with Customers</h1>
          <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg flex items-center gap-2 transition-colors">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
            </svg>
            New Message
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 h-[calc(100vh-140px)]">
          {/* Contacts Sidebar */}
          <div className="lg:col-span-1 bg-white rounded-lg shadow-sm border">
            <div className="p-4 border-b">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-lg font-semibold">Contacts</h2>
                <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded-full text-sm">{contacts.length}</span>
              </div>
              <div className="relative">
                <svg
                  className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
                <input
                  type="text"
                  placeholder="Search contacts..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none"
                />
              </div>
            </div>

            <div className="overflow-y-auto h-[calc(100vh-280px)]">
              {filteredContacts.map((contact) => (
                <div
                  key={contact.id}
                  className={`flex items-center gap-3 p-4 hover:bg-gray-50 cursor-pointer border-b transition-colors ${
                    selectedContact?.id === contact.id ? "bg-indigo-50 border-indigo-200" : ""
                  }`}
                  onClick={() => handleContactClick(contact)}
                >
                  <div className="relative">
                    <img
                      src={contact.avatar || "/placeholder.svg"}
                      alt={contact.name}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    {contact.isOnline && (
                      <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-white" />
                    )}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between">
                      <h3 className="font-medium text-gray-900 truncate">{contact.name}</h3>
                      <span className="text-xs text-gray-500">{contact.time}</span>
                    </div>
                    <div className="flex items-center justify-between mt-1">
                      <p className="text-sm text-gray-600 truncate">{contact.lastMessage}</p>
                      {contact.unreadCount && (
                        <span className="bg-indigo-600 text-white text-xs px-2 py-1 rounded-full min-w-[20px] text-center">
                          {contact.unreadCount}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Chat Area */}
          <div className="lg:col-span-2 bg-white rounded-lg shadow-sm border flex flex-col">
            {selectedContact ? (
              <>
                {/* Chat Header */}
                <div className="p-4 border-b">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="relative">
                        <img
                          src={selectedContact.avatar || "/placeholder.svg"}
                          alt={selectedContact.name}
                          className="w-10 h-10 rounded-full object-cover"
                        />
                        {selectedContact.isOnline && (
                          <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-green-500 rounded-full border-2 border-white" />
                        )}
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900">{selectedContact.name}</h3>
                        <p className="text-sm text-gray-500">
                          {selectedContact.isOnline ? "Active now" : "Last seen 2h ago"}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                          />
                        </svg>
                      </button>
                      <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
                          />
                        </svg>
                      </button>
                      <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>

                {/* Messages */}
                <div className="flex-1 overflow-y-auto p-4">
                  <div className="space-y-4">
                    {messages.map((message) => (
                      <div key={message.id} className={`flex ${message.isOwn ? "justify-end" : "justify-start"}`}>
                        <div
                          className={`max-w-[70%] rounded-2xl px-4 py-2 ${
                            message.isOwn ? "bg-indigo-600 text-white text-right" : "bg-gray-100 text-gray-900 text-left"
                          }`}
                        >
                          <p className="text-sm">{message.message}</p>
                          <p className={`text-xs mt-1 ${message.isOwn ? "text-indigo-200" : "text-gray-500"}`}>
                            {message.time}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Message Input */}
                <div className="border-t p-4">
                  <form onSubmit={handleSendMessage} className="flex items-center gap-2">
                    <button type="button" className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13"
                        />
                      </svg>
                    </button>
                    <button type="button" className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1.01M15 10h1.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    </button>
                    <input
                      type="text"
                      placeholder="Type your message..."
                      value={newMessage}
                      onChange={(e) => setNewMessage(e.target.value)}
                      className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none"
                    />
                    <button
                      type="submit"
                      className="bg-indigo-600 hover:bg-indigo-700 text-white p-2 rounded-lg transition-colors"
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                        />
                      </svg>
                    </button>
                  </form>
                </div>
              </>
            ) : (
              <div className="flex-1 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Start a conversation</h3>
                  <p className="text-gray-500 mb-6">Select a contact to begin messaging</p>
                  <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg flex items-center gap-2 mx-auto transition-colors">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                    </svg>
                    New Message
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
    </Layout>
  )
}


