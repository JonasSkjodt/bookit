import './footer.css';
//<!-- Change the social media icons with images from /public -->
const Footer = () => {
    return (
        
        <footer className="flex-it flex-align-center">
            
            <div className='container'>
                <div className="flex-it flex-align-center flex-justify">
                    <div className="">
                        <img src="/logo192.png" alt=""/>
                        <h2>BookIT</h2>
                    </div>
                    <div className="">
                    <div class="col l4 offset-l2 s12">
                <h5 class="white-text">Links</h5>
                <ul>
                  <li><a class="waves-effect waves-light" href="#!">Contact us</a></li>
                  <li><a href="#" rel="" className="waves-effect waves-light">About us</a></li>
                </ul>
                    <a href="https://www.facebook.com/" className="social_but"><img src="/facebook.png" /></a>
                    <a href="https://www.twitter.com/" className="social_but"><img src="/twitter.png" /></a>
                    <a href="https://www.reddit.com/" className="social_but"><img src="/reddit-logo.png" /></a>
              </div>
                        
                    </div>
                </div>
            </div>
        </footer>
    );
  }

export default Footer;