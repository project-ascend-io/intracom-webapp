"use client";

import LeftsideBar from "@/Components/Leftside-bar/page";
import SettingsDropdown from "@/Components/SettingsDropdown/page";
import { useState } from "react";

const EmailSettings = () => {
  const [server, setServer] = useState("");
  const [port, setPort] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [securityType, setSecurityType] = useState("");
  const [testEmail, setTestEmail] = useState("");
  const [testResult, setTestResult] = useState("");

  const handleSendTestEmail = () => {
    // Simulate sending a test email
    setTestResult(`Test email sent successfully to ${testEmail}.`);
  };

  const handleSave = () => {
    // Handle save logic
    alert("Settings saved!");
  };

  return (
    <main className="flex flex-row mx-10 mt-10">
      <LeftsideBar />
      {/* <SettingsDropdown /> */}
      <div className="min-h-screen  flex items-center justify-center">
        <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
          <h2 className="text-2xl font-semibold mb-6">Email Settings</h2>
          <div className="space-y-4">
            <div>
              <label className="block text-gray-700">SMTP server</label>
              <input
                type="text"
                value={server}
                onChange={(e) => setServer(e.target.value)}
                className="mt-1 p-2 border border-gray-300 rounded w-full"
                placeholder="Server"
              />
            </div>
            <div>
              <label className="block text-gray-700">Port</label>
              <input
                type="text"
                value={port}
                onChange={(e) => setPort(e.target.value)}
                className="mt-1 p-2 border border-gray-300 rounded w-full"
                placeholder="Port"
              />
            </div>
            <div>
              <label className="block text-gray-700">Username</label>
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="mt-1 p-2 border border-gray-300 rounded w-full"
                placeholder="Username"
              />
            </div>
            <div>
              <label className="block text-gray-700">Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="mt-1 p-2 border border-gray-300 rounded w-full"
                placeholder="Password"
              />
            </div>
            <div>
              <label className="block text-gray-700">Security type</label>
              <select
                value={securityType}
                onChange={(e) => setSecurityType(e.target.value)}
                className="mt-1 p-2 border border-gray-300 rounded w-full"
              >
                <option value="">Select Security Type</option>
                <option value="SSL">SSL</option>
                <option value="TLS">TLS</option>
              </select>
            </div>
            <div>
              <label className="block text-gray-700">Send test email</label>
              <input
                type="email"
                value={testEmail}
                onChange={(e) => setTestEmail(e.target.value)}
                className="mt-1 p-2 border border-gray-300 rounded w-full"
                placeholder="test@acme.com"
              />
              <button
                onClick={handleSendTestEmail}
                className="mt-4 bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
              >
                Send Test Email
              </button>
              {testResult && (
                <div className="mt-4 p-2 bg-green-100 text-green-700 rounded">
                  Success
                  <br />
                  {testResult}
                </div>
              )}
            </div>
          </div>
          <div className="mt-6 flex justify-end space-x-4">
            <button className="bg-gray-500 text-white p-2 rounded hover:bg-gray-600">
              Cancel
            </button>
            <button
              onClick={handleSave}
              className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
            >
              Save
            </button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default EmailSettings;
