.sidebar {
    padding: 20px;
    background-color: #f8f9fa;
}

.profile-pic {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    margin-bottom: 10px;
}

.chat-button {
    padding: 10px 20px;
    cursor: pointer;
    background-color: #28a745;
    color: white;
    border: none;
    border-radius: 4px;
}
    
@media (max-width: 600px) {
    .sidebar {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .profile-pic {
        width: 80px;
        height: 80px;
    }

    .chat-button {
        width: 100%;
    }
} 