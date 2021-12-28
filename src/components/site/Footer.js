import {Row} from 'reactstrap';
import {Route, Routes} from 'react-router-dom';

const Footer =() =>{
    return(
        <div className='footer-routes'>
        <footer>
            <Row>
                <p>&copy; 2022 PackRat, Inc.</p>   
                <Routes>      
              
                <Route exact path='/src/components/site/Search.js'>Search</Route>

                </Routes>    
            </Row>
        </footer>
        </div>
    )
}

export default Footer;
/*
<Route exact path='/src/components/site/Home.js'>Home</Route>

<Route exact path='/src/components/site/Contact.js'>Contact Us</Route> */