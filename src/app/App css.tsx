.App {
    display: flex;
    flex-direction: column;
    align-tiems: center;
    padding: 20pX;
}

.search-add-users {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100;
    max-widthL 800px;
    margin: 20px 0;
    padding: 0 20px;
}

.search-bar {
    flex: 1;
}


.search-bar input {
    width: 100%;
    padding: 8px;
    front-size: 16px;
    box-sizing: border-box;
}

.search-add-users button {
    padding: 8px 12px;
    front-size: 16px;
    cursor: Pointer;
    margin-left: 10px;
}

.sidebar {
    width: 100%;
    max-width: 200px;
}

.user-table {
    width: 100%;
    max-width: 100%;
    margin: 20px 0;
}


@media (max-width: 600px) {
    .search-add-users {
        flex-direction: column;
        align-item: stretch;
    }
}

.search-add-usersnbutton {
    width: 100%;
    margin-top: 10px;
    margin-left: 0;
}