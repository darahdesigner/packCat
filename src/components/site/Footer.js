import {Row} from 'reactstrap';

const Footer =() =>{
    return(
        <footer>
            <Row>
                <p>&copy; 2022 PackRat, Inc.</p>
                <p className="rightFooter">Home</p>
                <p className="rightFooter">Search</p>
                <p className="rightFooter">Contact Us</p>
            </Row>
        </footer>
    )
}

export default Footer;