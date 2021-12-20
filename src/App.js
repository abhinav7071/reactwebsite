import React,{useState, useEffect} from 'react';
import Header from "./components/Header";
import Recipes from "./components/Recipes";
import Axios from 'axios';

function App() {

  //const[search,setSearch] = useState("chicken");
  const[search,setSearch] = useState("");
  const[recipes,setRecipes] = useState([]);//by feault set kiya ki kis type ka data isme ayega

  /****Get API All Recipes****/
  const APP_ID = "387fdcf9";
  const APP_KEY = "f2e8245e76b2eedf03ff9d79d1915e16";

  //Featch Data from API on load
    useEffect(async()=>{
      getRecipes();   
    },[])

  //Get Recpies from API
  const getRecipes = async() =>{
    const result = await Axios.get(`https://api.edamam.com/search?q=${search}&app_id=${APP_ID}&app_key=${APP_KEY}`);
    setRecipes(result.data.hits);//data set karr diya jo API se aya 
  }

  //Search item on button click,ye search ki value daal kk getrceipe se API hit karke data laa k display kara rha
  const onSearchClick = () => {
    getRecipes();
  }

  /****Input Chnage On Text*****/
  const onInputChange = e => {
    setSearch(e.target.value);
    console.log(e.target.value);  
  }

  return (
    <div className="App">
        <Header search={search} onInputChange={onInputChange} onSearchClick={onSearchClick}  />
        <Recipes recipes={recipes} />
    </div>
  );
}

export default App;
