import React from "react";
import { Link } from "react-router-dom";

function PrivacyPolicy() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Privacy Policy - Trackify</h1>
      <div className="space-y-8">
        {/* Last Updated */}
        <div className="text-sm text-gray-600">
          Last Updated: {new Date().toLocaleDateString()}
        </div>

        {/* Introduction */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">Introduction</h2>
          <p className="text-gray-700">
            Trackify ("we", "our", or "us"), developed by Saquib Jawed, is committed to protecting your privacy. 
            This Privacy Policy explains how we collect, use, and safeguard your information when you use our attendance tracking service.
          </p>
        </section>

        {/* Data Collection */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">Information We Collect</h2>
          <div className="space-y-2">
            <h3 className="text-lg font-medium">Authentication Data:</h3>
            <ul className="list-disc ml-6 text-gray-700">
              <li>Email address</li>
              <li>Password (encrypted)</li>
              <li>Authentication timestamps</li>
            </ul>
          </div>
          <div className="space-y-2">
            <h3 className="text-lg font-medium">Attendance Records:</h3>
            <ul className="list-disc ml-6 text-gray-700">
              <li>Check-in/out times</li>
              <li>Subject details</li>
              <li>Attendance status</li>
              <li>Related metadata</li>
            </ul>
          </div>
        </section>

        {/* Firebase Services */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">How We Store Your Data</h2>
          <p className="text-gray-700">
            We use Google Firebase services to store and process your data:
          </p>
          <ul className="list-disc ml-6 text-gray-700">
            <li>Firebase Authentication for secure user authentication</li>
            <li>Firebase Firestore for storing attendance records and user data</li>
            <li>Firebase Analytics for app performance and usage statistics</li>
          </ul>
        </section>

        {/* Data Usage */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">How We Use Your Data</h2>
          <ul className="list-disc ml-6 text-gray-700">
            <li>To provide and maintain our service</li>
            <li>To track and analyze attendance patterns</li>
            <li>To improve user experience and app performance</li>
            <li>To communicate important updates</li>
            <li>To prevent fraud and abuse</li>
          </ul>
        </section>

        {/* Data Protection */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">Data Protection</h2>
          <p className="text-gray-700">
            Your data is protected through:
          </p>
          <ul className="list-disc ml-6 text-gray-700">
            <li>Secure HTTPS encryption</li>
            <li>Firebase's built-in security measures</li>
            <li>Regular security audits</li>
            <li>Limited staff access</li>
          </ul>
        </section>

        {/* Data Deletion */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">Your Data Deletion Rights</h2>
          <p className="text-gray-700">
            You have the right to request deletion of your personal data. You can:
          </p>
          <ul className="list-disc ml-6 text-gray-700">
            <li>Visit <Link to="/trackify/account-delete" className="text-blue-600 hover:underline">Account Deletion Page</Link> to delete your account and associated data</li>
            <li>Request data deletion through the Help section</li>
          </ul>
        </section>

        {/* Contact Information */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">Contact Us</h2>
          <p className="text-gray-700">
            If you have questions about this Privacy Policy, please contact us through the Help section in the app.
          </p>
        </section>

        {/* Footer */}
        <footer className="text-sm text-gray-600 pt-8 border-t">
          <p>Trackify - Developed by Saquib Jawed</p>
        </footer>
      </div>
    </div>
  );
}

export default PrivacyPolicy;
