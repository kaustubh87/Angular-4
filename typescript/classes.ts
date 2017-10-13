class Car{
    engineName: string;
    gears: number;
    private speed: number;

    constructor(speed: number){
        this.speed = speed || 0;
    }

    
}