import React from 'react';
import './App.css';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import SearchIcon from '@material-ui/icons/Search';
import LocalMallIcon from '@material-ui/icons/LocalMall';
import AppleIcon from '@material-ui/icons/Apple';
import Grid from '@material-ui/core/Grid';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

function App() {
  return (
    <MuiThemeProvider>
      
      <div className="Navigation">
        <header className="NavigationHeader">
          <AppBar
            title={false}
            showMenuIconButton={false}
            style={{
              'background-color': 'rgba(0, 0, 0, 0.8)',
              'color': 'rgb(245, 245, 247)',
              'height': '50px'
            }}
          >
            <a href="/search" className="NavigationItem">
              <AppleIcon style={{'fontSize': '2em'}}/>
            </a>
            <a href="/mac" className="NavigationItem">Mac</a>
            <a href="/ipad" className="NavigationItem">iPad</a>
            <a href="/iphone" className="NavigationItem">iPhone</a>
            <a href="/watch" className="NavigationItem">Watch</a>
            <a href="/tv" className="NavigationItem">TV</a>
            <a href="/music" className="NavigationItem">Music</a>
            <a href="/support" className="NavigationItem">Support</a>
            <a href="/search" className="NavigationItem">
              <SearchIcon style={{'fontSize': '2em'}}/>
            </a>
            <a href="/shop" className="NavigationItem">
              <LocalMallIcon style={{'fontSize': '2em'}}/>
            </a>
          </AppBar>
        </header>
      </div>

      <div className="Page">

        <div className="BlueMessage">
          <a href="/screening">
            Evaluate COVID‑19 symptoms and understand next steps
            <ArrowForwardIosIcon style={{'fontSize': '10px', 'paddingLeft': '0.5em', 'position': 'relative', 'bottom': '-1.4px'}}/>
          </a>
        </div>

        <div className="WhiteMessage">
          <p style={{'margin': '0', 'padding': '0'}}><a href="/us/shop/goto/shop" style={{'margin': '0', 'padding': '0'}}>Shop online</a> and get free, no‑contact delivery, Specialist help and more.</p>
        </div>

        <div className="AllWidthComponent">
          <a href="/"><img src="https://github.com/Kadievka/apple-home-react/blob/master/public/images/iPhone-SE.PNG" alt="iPhone-SE"/></a>
        </div>
        <div className="AllWidthComponent">
          <a href="/"><img src="https://github.com/Kadievka/apple-home-react/blob/master/public/images/iPhone-11.PNG" alt="iPhone-11"/></a>
        </div>
        <div className="AllWidthComponent">
          <a href="/"><img src="https://github.com/Kadievka/apple-home-react/blob/master/public/images/iPad-Pro.PNG" alt="iPad-Pro"/></a>
        </div>
        <div className="AllWidthComponent">
          <a href="/"><img src="https://github.com/Kadievka/apple-home-react/blob/master/public/images/WWWDC20.PNG" alt="WWWDC20"/></a>
        </div>
        <div className="AllWidthComponent">
          <a href="/"><img src="https://github.com/Kadievka/apple-home-react/blob/master/public/images/WATCH.PNG" alt="WATCH"/></a>
        </div>
        <div className="AllWidthComponent" style={{'marginLeft': '10px'}}>
          <a href="/"><img src="https://github.com/Kadievka/apple-home-react/blob/master/public/images/Acarde.PNG" alt="Acarde"/></a>
        </div>

      </div>
      
      <div>
        <footer className="Footer">
          <div className="FooterText">
            <p>
            1. Trade In: Trade‑in values vary. iPhone 11 and iPhone 11 Pro promotional pricing is after trade‑in of iPhone 8 Plus and iPhone X in good condition. iPhone SE promotional pricing is after trade-in of iPhone 8 in good condition. Additional trade‑in values require purchase of a new iPhone, subject to availability and limits. Must be at least 18. Apple or its trade-in partners reserve the right to refuse or limit any Trade In transaction for any reason. In‑store trade‑in requires presentation of a valid, government-issued photo ID (local law may require saving this information). Sales tax may be assessed on full value of new iPhone. Additional terms from Apple or Apple’s trade-in partners may apply. Monthly pricing: Available to qualified customers and requires 0% APR, 24-month installment loan with Citizens One or Apple Card Monthly Installments and iPhone activation with AT&T, Sprint, T-Mobile, or Verizon. Taxes and shipping not included. Additional Apple Card Monthly Installments terms are in the Customer Agreement. Additional iPhone Payments terms are here.
            </p>
            <p>
            2. Trade‑in values vary. Apple Watch Series 5 promotional pricing is after trade‑in of Apple Watch Series 4 in good condition. Additional trade‑in values require purchase of a new Apple Watch, subject to availability and limits. Must be at least 18. Apple or its trade-in partners reserve the right to refuse or limit any Trade In transaction for any reason. In‑store trade‑in requires presentation of a valid, government-issued photo ID (local law may require saving this information). Sales tax may be assessed on full value of new Apple Watch. Additional terms from Apple or Apple’s trade-in partners may apply. Offer is available for a limited time only.
            </p>
            <p>3. Subscription required.</p>
            <p>Magic Keyboard sold separately.</p>
            <p>
            Apple TV+ is $4.99/month after free trial. One subscription per Family Sharing group. Offer good for 3 months after eligible device activation. Plan automatically renews until cancelled. Restrictions and other terms apply.
            </p>
          </div>
          <div className="HorizontalLine"></div>
          <div className="FooterLines">
            <Grid container direction="row" justify="space-between" alignItems="flex-start">
              <Grid item xs={2} className="FooterParagraph">
                <b>Shop and Learn</b>
                <p><a className="FooterLinks" href="/mac">Mac</a></p>
                <p><a className="FooterLinks" href="/ipad">iPad</a></p>
                <p><a className="FooterLinks" href="/iphone">iPhone</a></p>
                <p><a className="FooterLinks" href="/watch">Watch</a></p>
                <p><a className="FooterLinks" href="/tv">TV</a></p>
                <p><a className="FooterLinks" href="/music">Music</a></p>
                <p><a className="FooterLinks" href="/airpods">AirPods</a></p>
                <p><a className="FooterLinks" href="/homepod">HomePod</a></p>
                <p><a className="FooterLinks" href="/ipodtouch">iPodTouch</a></p>
                <p><a className="FooterLinks" href="/accesories">Accesories</a></p>
                <p><a className="FooterLinks" href="/gif-cards">Gif Cards</a></p>
              </Grid>
              <Grid item xs={2} className="FooterParagraph">
                <b>Services</b>
                <p><a className="FooterLinks" href="/apple-music">Apple Music</a></p>
                <p><a className="FooterLinks" href="/apple-news">Apple News+</a></p>
                <p><a className="FooterLinks" href="/apple-tv">Apple TV+</a></p>
                <p><a className="FooterLinks" href="/apple-acarde">Apple Acarde</a></p>
                <p><a className="FooterLinks" href="/apple-books">Apple Books</a></p>
                <p><a className="FooterLinks" href="/apple-card">Apple Card</a></p>
                <p><a className="FooterLinks" href="/icloud">iCloud</a></p>
                <br/>
                <b>Account</b>
                <p><a className="FooterLinks" href="/apple-id">Manage Your Apple ID</a></p>
                <p><a className="FooterLinks" href="/apple-account">Apple Store Account</a></p>
                <p><a className="FooterLinks" href="/icloud">iCloud.com</a></p>
              </Grid>
              <Grid item xs={2} className="FooterParagraph">
                <b>Apple Store</b>
                <p><a className="FooterLinks" href="/store">Find a Store</a></p>
                <p><a className="FooterLinks" href="/shop">Shop Online</a></p>
                <p><a className="FooterLinks" href="/bar">Genius Bar</a></p>
                <p><a className="FooterLinks" href="/news">Today at Apple</a></p>
                <p><a className="FooterLinks" href="/apple-camp">Apple Camp</a></p>
                <p><a className="FooterLinks" href="/field-trip">Field Trip</a></p>
                <p><a className="FooterLinks" href="/store">Apple Store App</a></p>
                <p><a className="FooterLinks" href="/store">Refurbished and Clearance</a></p>
                <p><a className="FooterLinks" href="/payment-plan">Financing</a></p>
                <p><a className="FooterLinks" href="/trade-in">Apple Trade In</a></p>
                <p><a className="FooterLinks" href="/store">Order Status</a></p>
                <p><a className="FooterLinks" href="/shop">Shopping Help</a></p>
              </Grid>
              <Grid item xs={2} className="FooterParagraph">
                <b>For Business</b>
                <p><a className="FooterLinks" href="/business">Apple and Business</a></p>
                <p><a className="FooterLinks" href="/business">Shop for Business</a></p>
                <br/>
                <b>For Education</b>
                <p><a className="FooterLinks" href="/education">Apple and Education</a></p>
                <p><a className="FooterLinks" href="/education">Shop for K-12</a></p>
                <p><a className="FooterLinks" href="/education">Shop for College</a></p>
                <br/>
                <b>For Healthcare</b>
                <p><a className="FooterLinks" href="/healthcare">Apple in Healthcare</a></p>
                <p><a className="FooterLinks" href="/healthcare">Health on Apple Watch</a></p>
                <p><a className="FooterLinks" href="/healthcare">Health Records on iPhone</a></p>
                <br/>
                <b>For Goverment</b>
                <p><a className="FooterLinks" href="/shop">Shop for Goverment</a></p>
                <p><a className="FooterLinks" href="/shop">Shop for Veterans and Military</a></p>
              </Grid>
              <Grid item xs={2} className="FooterParagraph">
                <b>Apple Values</b>
                <p><a className="FooterLinks" href="/accesibility">Accesibility</a></p>
                <p><a className="FooterLinks" href="/education">Education</a></p>
                <p><a className="FooterLinks" href="/enviroment">Enviroment</a></p>
                <p><a className="FooterLinks" href="/diversity">Inclusion and Diversity</a></p>
                <p><a className="FooterLinks" href="/privacy">Privacy</a></p>
                <p><a className="FooterLinks" href="/privacy">Supplier Responsibility</a></p>
                <br/>
                <b>About Apple</b>
                <p><a className="FooterLinks" href="/shop">Newsroom</a></p>
                <p><a className="FooterLinks" href="/shop">Apple Leadership</a></p>
                <p><a className="FooterLinks" href="/job">Job Opportunities</a></p>
                <p><a className="FooterLinks" href="/shop">Investors</a></p>
                <p><a className="FooterLinks" href="/apple-events">Events</a></p>
                <p><a className="FooterLinks" href="/contact">Contact Apple</a></p>
              </Grid>
              <Grid item xs={12}>
                <p className="MoreWays">More ways to shop: <a href="/retail">Find an Apple Store</a> or <a href="/retail">other retailer</a> near you. Or call 1-800-MY-APPLE.</p>
              </Grid>
            </Grid>
          </div>
          <div className="HorizontalLine" style={{'marginTop':'0.5em','marginBottom': '0'}}></div>
          <div className="FooterCopyright">
            <Grid container direction="row">
              <p style={{'marginRight': '3em'}}>Copyright © 2020 Apple Inc. All rights reserved.</p>
              <p style={{'marginLeft': '1.5em'}}><a className="FooterLinks" href="/privacy">Privacy Policy</a></p>
              <p style={{'marginLeft': '1.5em'}}><a className="FooterLinks" href="/privacy">Terms of Use</a></p>
              <p style={{'marginLeft': '1.5em'}}><a className="FooterLinks" href="/privacy">Sales and Refund</a></p>
              <p style={{'marginLeft': '1.5em'}}><a className="FooterLinks" href="/privacy">Legal</a></p>
              <p style={{'marginLeft': '1.5em'}}><a className="FooterLinks" href="/privacy">Site Map</a></p>
              <p style={{'marginLeft': '18em'}}><a className="FooterLinks" href="/choose-country-regionn"><img alt="USA" src="https://github.com/Kadievka/apple-home-react/blob/master/public/images/bandera.png" className="CountryFlag"/>  United States</a></p>
            </Grid>
          </div>
        </footer>
      </div>
    
    </MuiThemeProvider>
  );
}

export default App;
