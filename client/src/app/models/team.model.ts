// Create Team Model Class
export class Team {
    // properties
    public TeamName: string = '';
    public League: string = '';
    public ManagerName: string = '';
    public Picture: string = '';


    constructor(TeamName: string, League: string, ManagerName: string, Picture: string) {
        this.TeamName = TeamName;
        this.League = League;
        this.ManagerName = ManagerName;
        this.Picture = Picture;
    }
}