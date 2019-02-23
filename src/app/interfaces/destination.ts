export interface Destination {
    workspaces: Array<{
        id: String;
        name: String;
    }>;
    hospitalities: Array<{
        id: String;
        name: String;
    }>;
    destinations: Array<Destination>;
}
