import React from 'react';

const DownLoadPage = () => {
    return (
        <div className="download-page">
            <h1>COngratulations, your accountis all set up!</h1>
            <p>To get started, download the desktop app.</p>
            <div className="download-buttons">
                <a href="/path/to/mac/download" className="download-button">DownLoad for Mac (Requires mac0s 10.14 or later)</a>
                <a href="/path/to/windows/download" className="download-button">DOwnLoad for windows (requires WIndows 10 or later)</a>
                </div>
                <p>ALready have the app?</p>
                <a href="/path/to/open/Intracom" className="open-Intracom-button">Open Intracom</a>
            </div>
        
    );
};

export default DownLoadPage;