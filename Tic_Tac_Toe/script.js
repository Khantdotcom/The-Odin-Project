const button_array = [];
const id_list = ["zero_one", "zero_two", "zero_three", "one_one", "one_two", "one_three","two_one","two_two", "two_three"];

id_list.map(Button_create);

function Button_create(list){
    const sum = (x,y) => x+y;
    document.getElementById(list);
}

function New_game(){
    const played_board = [];
    function Player(name_){
        this.player_name = name_;
        const played_move = () => {
            return 
        }
    }
};

function click(){
    

};


new_game = new New_game;



//function Value_assign(){
 //   for (let i=0; i<3;i++){
     //   for (let j=0; j<3; j++){
     //       button_array[i+j]
    //    }
  //  }
//}

//create a button DOM object for each id// add event listener with return value of index in 2d array// 
//player alternative click function// if one player() append return value in played board.
//each player board will look like this >> ["00","01","03"] 
//game over function >> check value of two played board at its turn after 2 turns>> 
//win logic >> combine array into one string >> search for patterns