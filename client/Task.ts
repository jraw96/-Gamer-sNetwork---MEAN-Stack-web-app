
export class Task{
    title: string;
    isDone: boolean;
    accountID: string; // Auth0 idenentificaiton string
    editMode: boolean; // boolean variable to turn edit mode on and of
    game: string; // Name of game searched in the search tab
    nickName: string; // nickname associated with the Auth0 account
    description: string; // description about a game
    searchWord: string; // searched word by user
    results: [{}]; // array of objects
}