class AuthCreds {
    private userID: string = "";
    private JWTTOKEN: string = "";

    public getUserID = (): string => {
        return this.userID;
    };

    public getJWTToken = (): string => {
        return this.JWTTOKEN;
    };

    public setUserID = (userID: string): void => {
        this.userID = userID;
    };

    public setJWTToken = (JWTTOKEN: string): void => {
        this.JWTTOKEN = JWTTOKEN;
    };
};

export default AuthCreds;