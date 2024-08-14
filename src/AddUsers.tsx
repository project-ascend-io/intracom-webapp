import React, { useState } from 'react';


const AddUsers = ({ onClose }) => {
    const [emails, setEmails] = useState('');


    const handleAddUsers = () => {
        const emailArray = emails.split(',').map(emails => email.trim());
        console.log('Adding users:', emailarray);
        onClose();



      return (
        <div className="add-users">
            <h2>Add users</h2>
            <p>Manually add users</p>
            <p>You can manually add users to your organization by enterig their email addresses below. You can enter multiple emails at once, separated by commas.</p>
             <input
            type="text"
            placeholder="Enter emails"
            value={emails}
            onChange={(e)} => setEmails(e.target.value)}
            />
            <button onCLick={handleAddUsers}>Add users</button>
            </div>
            );


            export default AddUsers;
            
      )  
    }
}
