import React from 'react';

const PrivacyPolicyPage: React.FC = () => {
    return (
        <>
            <div style={{
                fontFamily: 'Arial, sans-serif',
                backgroundColor: '#f4f4f4',
                color: '#333',
                margin: 0,
                padding: '20px',
            }}>
                <div style={{
                    maxWidth: '800px',
                    margin: '0 auto',
                    backgroundColor: '#fff',
                    padding: '20px',
                    borderRadius: '8px',
                    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
                }}>
                    <h1 style={{ color: '#4CAF50' }}>Intracom Privacy Policy</h1>
                    <p><strong>Effective Date:</strong> August 27, 2024</p>

                    <h2 style={{ color: '#4CAF50' }}>1. Introduction</h2>
                    <p>Welcome to Intracom, an internal communication tool designed for startups, nonprofits, and small companies. This Privacy Policy explains how we collect, use, and protect your personal information when you use our chat application. By using Intracom, you agree to the terms outlined in this policy.</p>

                    <h2 style={{ color: '#4CAF50' }}>2. Information We Collect</h2>
                    <h3 style={{ color: '#4CAF50' }}>a. Personal Information:</h3>
                    <p>When you create an account, we collect personal information such as your name, email address, and organization details. This information is used to create and manage your account.</p>

                    <h3 style={{ color: '#4CAF50' }}>b. Communication Data:</h3>
                    <p>We collect the content of messages, files, and other communications that you send or receive through Intracom. This data is stored securely to enable communication within your organization.</p>

                    <h3 style={{ color: '#4CAF50' }}>c. Usage Data:</h3>
                    <p>We collect information about how you use Intracom, including log data, IP addresses, device information, and browsing history. This data helps us improve our services and ensure the security of our application.</p>

                    <h2 style={{ color: '#4CAF50' }}>3. How We Use Your Information</h2>
                    <h3 style={{ color: '#4CAF50' }}>a. To Provide and Improve Our Services:</h3>
                    <p>We use your information to provide you with access to Intracom and to improve the functionality and performance of our application.</p>

                    <h3 style={{ color: '#4CAF50' }}>b. To Communicate with You:</h3>
                    <p>We may use your email address to send you important updates, notifications, or support-related communications.</p>

                    <h3 style={{ color: '#4CAF50' }}>c. To Ensure Security:</h3>
                    <p>We use your information to detect and prevent fraudulent activities, unauthorized access, and other illegal activities.</p>

                    <h2 style={{ color: '#4CAF50' }}>4. Data Sharing and Disclosure</h2>
                    <h3 style={{ color: '#4CAF50' }}>a. Within Your Organization:</h3>
                    <p>Your communications and data within Intracom are shared with other members of your organization. It is your responsibility to ensure that you do not share sensitive information unless you trust the recipients.</p>

                    <h3 style={{ color: '#4CAF50' }}>b. With Third-Party Service Providers:</h3>
                    <p>We may share your information with trusted third-party service providers who assist us in operating and improving Intracom. These providers are bound by confidentiality agreements and are only allowed to use your information as necessary to provide their services.</p>

                    <h3 style={{ color: '#4CAF50' }}>c. Legal Requirements:</h3>
                    <p>We may disclose your information if required to do so by law or in response to a legal request, such as a subpoena or court order.</p>

                    <h2 style={{ color: '#4CAF50' }}>5. Data Security</h2>
                    <p>We implement industry-standard security measures to protect your data from unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet or electronic storage is 100% secure. While we strive to protect your personal information, we cannot guarantee its absolute security.</p>

                    <h2 style={{ color: '#4CAF50' }}>6. Data Retention</h2>
                    <p>We retain your personal information for as long as necessary to fulfill the purposes outlined in this Privacy Policy, unless a longer retention period is required or permitted by law. Communication data is stored for the duration of your account's existence unless you or your organization request deletion.</p>

                    <h2 style={{ color: '#4CAF50' }}>7. Your Rights</h2>
                    <h3 style={{ color: '#4CAF50' }}>a. Access and Correction:</h3>
                    <p>You have the right to access and correct the personal information we hold about you. You can update your account information through the application or by contacting us directly.</p>

                    <h3 style={{ color: '#4CAF50' }}>b. Deletion:</h3>
                    <p>You may request the deletion of your account and personal information at any time. Please note that some information may be retained as required by law or for legitimate business purposes.</p>

                    <h2 style={{ color: '#4CAF50' }}>8. Changes to This Privacy Policy</h2>
                    <p>We may update this Privacy Policy from time to time. If we make significant changes, we will notify you via email or through the application. Your continued use of Intracom after any changes to this policy constitutes your acceptance of the updated terms.</p>

                    <h2 style={{ color: '#4CAF50' }}>9. Contact Us</h2>
                    <p>If you have any questions or concerns about this Privacy Policy, please contact us at oscar@projectascend.io</p>
                </div>
            </div>
        </>
    );
};

export default PrivacyPolicyPage;
