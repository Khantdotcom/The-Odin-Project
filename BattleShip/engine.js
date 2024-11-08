//class- ship, length, hit, hit(), issunk()
//gameboard - receiveattack()--> coordinates, hit_a_ship() --> hit(), record()
//player, real computer, own gameboard

class Ship{
    constructor(){
        this.length =null;
        this.hit = null;
        this.ship_coordinate = [];
    }
    hit(){
        this.length -=1;
    }

    is_sunk(){
        if (this.length == 0){
            return true;
        };
    }
};

class Gameboard{
    constructor(){
    this.hit_coordinates = [];
    this.miss_coordinates = [];
    };

    receive_attack(coordinate, ship_location){
        if (coordinate in ship_location){
            this.hit_coordinates.push(coordinate);}
        else{
            this.miss_coordinates.push(coordinate);}
        };
    
    record(){
        return this.hit_coordinates, this.miss_coordinates
    };
};

class Player{
    constructor(){
        this.name = null;
        this.color = null;
}
};