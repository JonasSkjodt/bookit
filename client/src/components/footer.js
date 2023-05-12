import './footer.css';
//<!-- Change the social media icons with images from /public -->
const Footer = () => {
    return (
        <footer className="flex-it flex-align-center">
            
            <div className='container'>
                <div className="flex-it flex-align-center flex-justify">
                    <div className="">
                        <img src="/logo192.png" alt=""/>
                    </div>
                    <div className="">
                        <ul>
                            <li>
                            <a href="#" rel="" className="waves-effect waves-light">
								<i className="material-icons">Mail</i>
                            </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    );
  }

export default Footer;