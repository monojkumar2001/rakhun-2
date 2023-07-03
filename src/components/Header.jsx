import React, {useState, useEffect} from "react";
import { HashLink } from 'react-router-hash-link';

function Header() {
  const [navActive, setNavActive] = useState(false);

  const [menuActive, setMenuActive] = useState(false);
  const _toggleSidebar = () => {
    setMenuActive(!menuActive);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 80) {
        setNavActive(true);
      } else {
        setNavActive(false);
      }
    };
  
    window.addEventListener("scroll", handleScroll);
  
    // Return a cleanup function that removes the event listener
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [navActive]);
  



  // useEffect(() => {
  //   window.addEventListener("scroll", () => {
  //     if (window.scrollY >= 160) {
  //       setNavActive(true);
  //     } else {
  //       setNavActive(false);
  //     }
  //   });
  // }, [navActive]);

  return (
    <div>
             
       <header className="header-mobile" id="home">
          <div className="header-mobile-logo">
          <div  className="logo-mobile">
                  {menuActive ? "" :  <a href="/"><img src="assets/img/logo.png" alt="logo" /></a>}  
              </div>
          </div>
              
        <button onClick={_toggleSidebar} id="burger-menu">
          {menuActive ? "" : <img src="./assets/img/icon/burger-menu.svg" alt="burger-menu"/>}
          {/* <img 
            src={`./assets/img/icon/${menuActive ? "x" : "burger-menu"}.svg`}
            alt="Menu"
          /> */}
          
        </button>
        <button onClick={_toggleSidebar} id="burger-menu" className="close-menu">
          {menuActive ? <img className="close-menu" src="./assets/img/icon/x.svg" alt="close-menu"/> : ""}
          {/* <img 
            src={`./assets/img/icon/${menuActive ? "x" : "burger-menu"}.svg`}
            alt="Menu"
          /> */}
          
        </button>
        <nav id="mobile-nav" className={`${menuActive ? "hidden" : ""} `}>
          <HashLink to="/#" onClick={_toggleSidebar} className="active-nav nav-link mobile-link">
           
              HOME
            
          </HashLink>

          <HashLink to="/#roadmap" onClick={_toggleSidebar} className="nav-link mobile-link">
            ROADMAP
          </HashLink>
          <HashLink to="/#about-us" onClick={_toggleSidebar} className="active-nav nav-link mobile-link">
            BENEFITS
          </HashLink>

          <HashLink to="/mint"  onClick={_toggleSidebar} className="nav-link mobile-link">
              MINT
          </HashLink>
          <HashLink to="/#team" onClick={_toggleSidebar} className="active-nav nav-link mobile-link">
              TEAM
          </HashLink>

          <HashLink to="/#faq" onClick={_toggleSidebar}  className="nav-link mobile-link "> 
             FAQ
          </HashLink>

          <ul className="social-ul">
              <li>
                    <a href="/" target="_blank" className="social-link">
                      <img src="assets/img/icon/1.svg" alt="" />
                    </a>
                </li>
              <li>
                  <a href="https://www.instagram.com/nonchalantbanditnft/?hl=en" target="_blank" rel="noreferrer" className="social-link">
                    <img src="assets/img/icon/4.svg" alt="" />
                  </a>
                </li>
                <li>
                  <a href="https://twitter.com/nonchalantbnft" target="_blank" rel="noreferrer" className="social-link" >
                    <img src="assets/img/icon/2.svg" alt="" />
                  </a>
                  </li>
                  <li>
                    <a href=" https://discord.com/channels/939666076726333460/939666081163935781" target="_blank" rel="noreferrer" className="social-link">
                      <img src="assets/img/icon/3.svg" alt="" />
                    </a>
                    </li>
            </ul>
         
        </nav>
      </header>
        
         
         
          <header >
          <nav className=" navigation">
          <div className="container">
            <div className="row">
              <div className="col-md-2">
                <div className="logo">
                  <a href="/">
                    <img src="assets/img/logo.png" alt="logo" />
                  </a>
                </div>
              </div>
              
              <div className="col-md-10">
                <div className="menu">
                  <ul className="menu-ul">
                    <li className="nav-list">
                      <a href="/" className="nav-link">
                        Home
                      </a>
                    </li>
                    <li className="nav-list">
                      <a href="#roadmap" className="nav-link">
                        Roadmap
                      </a>
                    </li>
                    <li className="nav-list">
                      <a href="#about-us" className="nav-link">
                        BENEFITS
                      </a>
                    </li>
                    <li className="nav-list">
                      <a href="/mint" className="nav-link">
                        mint
                      </a>
                    </li>
                    <li className="nav-list">
                      <a href="#team" className="nav-link">
                        team
                      </a>
                    </li>
                    <li className="nav-list">
                      <a href="#faq" className="nav-link">
                        faq
                      </a>
                    </li>
                    <li className="nav-list">
                      <ul className="social-ul">
                      <li>
                          <a href="/" target="_blank" className="social-link">
                            <img src="assets/img/icon/1.svg" alt="" />
                          </a>
                        </li>
                        <li>
                          <a href="https://www.instagram.com/nonchalantbanditnft/?hl=en" target="_blank" rel="noreferrer" className="social-link">
                            <img src="assets/img/icon/4.svg" alt="" />
                          </a>
                        </li>
                        <li>
                          <a href="https://twitter.com/nonchalantbnft" target="_blank" rel="noreferrer" className="social-link" >
                            <img src="assets/img/icon/2.svg" alt="" />
                          </a>
                        </li>
                        <li>
                          <a href=" https://discord.com/channels/939666076726333460/939666081163935781" target="_blank" rel="noreferrer" className="social-link">
                            <img src="assets/img/icon/3.svg" alt="" />
                          </a>
                        </li>
                       

                      </ul>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          </nav>
          </header>
       
       
    </div>
  );
}

export default Header;
