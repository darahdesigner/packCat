import {Route, Routes} from 'react-router-dom';
const Search =() =>{
    return(
        <div className='SearchPage'>
            <p>You've Reached the Search Page</p>
            <Routes>    
               
               
                <Route exact path='/src/components/site/Footer.js'>Footer</Route>
                </Routes>    
        </div>
    )
}

export default Search;
/*
<Route exact path='/src/components/site/Home.js'>Home</Route>
 <Route exact path='/src/components/site/Contact.js'>Contact Us</Route>
 */