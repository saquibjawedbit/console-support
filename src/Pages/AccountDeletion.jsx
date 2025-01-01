import React from "react";

function AccountDeletion() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Trackify - Account Deletion</h1>
      
      <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
        <h2 className="text-xl font-semibold mb-4">How to Delete Your Account</h2>
        <div className="space-y-4">
          <div className="flex items-start gap-3">
            <span className="flex items-center justify-center w-8 h-8 rounded-full bg-gray-100 font-semibold">1</span>
            <div>
              <p className="font-medium">Go to Settings</p>
              <p className="text-gray-600">Access your account settings by clicking top right icon in home screen</p>
            </div>
          </div>
          
          <div className="flex items-start gap-3">
            <span className="flex items-center justify-center w-8 h-8 rounded-full bg-gray-100 font-semibold">2</span>
            <div>
              <p className="font-medium">Click "Delete Account"</p>
              <p className="text-gray-600">Find and select the Delete Account option</p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
        <h2 className="text-xl font-semibold mb-4">Data Handling</h2>
        
        <div className="space-y-4">
          <div className="border-l-4 border-red-500 pl-4">
            <h3 className="font-medium mb-2">Permanently Deleted Data:</h3>
            <ul className="list-disc ml-4 text-gray-600">
              <li>Profile information</li>
              <li>Photos and uploads</li>
              <li>Account settings</li>
              <li>Connected services</li>
              <li>All attendance records and subjects</li>
            </ul>
          </div>
          
          <div className="border-l-4 border-yellow-500 pl-4">
            <h3 className="font-medium mb-2">Retained Data:</h3>
            <ul className="list-disc ml-4 text-gray-600">
              <li>Transaction records (legal requirement - 7 years)</li>
              <li>Support chat logs (90 days)</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="bg-red-50 rounded-lg p-6">
        <h3 className="text-red-600 font-semibold mb-2">Important Notice</h3>
        <p className="text-gray-800">
          Account deletion is permanent and cannot be undone. All associated data
          will be permanently removed from our systems.
        </p>
      </div>

      <div className="mt-8 text-center text-sm text-gray-500">
        <p>Trackify is developed and maintained by Saquib Jawed</p>
        <p className="mt-1">For support inquiries, please contact through the Help section</p>
      </div>
    </div>
  );
}

export default AccountDeletion;

