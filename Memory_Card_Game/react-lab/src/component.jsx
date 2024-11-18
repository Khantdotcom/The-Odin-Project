const fetched_data = [{image:"https",description:'sex',title:'loe'}]

function info_fetch(number_of_cards) {
   const [data,setData] = useState(null)
   useEffect(()=>{
    fetch('https://api.waifu.pics/type/category/nsfw')
    .then(response => response.json())
    .then(data => setData(data))
    .catch(error => console.error('Error Fetching',error));
   },[]);
   return(
    
   )
    fetched_data.append()
}

function make_input(game_type){
    return (
        <input
        type="choice"
        name= "se"
        required>
            
        </input>
    )
}

//card_component_div with its conditions
//se
function each_card(){
    <>
    <div onclick="game_end()">
        <iframe></iframe>
        <h3></h3>
        <p></p>
    </div>
    </>
    };


// doesn't have to run the loop(info fetch and display) again every time re render 
function random_display(number){
    each_card
}

game_end(
    if state of clicked card == 1 >>  
    end_display(lose)

    elif{ score === number of cards} >> end_display(win)
    end_display(lose)

    else
    n => n + 1
    random_display()
)

best_score_check(
    compare current > state score 
    set score
)

end_display (condition){
    console.log('You {condition}')
}