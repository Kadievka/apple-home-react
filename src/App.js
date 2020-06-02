import React from 'react';
import './App.css';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import SearchIcon from '@material-ui/icons/Search';
import LocalMallIcon from '@material-ui/icons/LocalMall';
import AppleIcon from '@material-ui/icons/Apple';
import Grid from '@material-ui/core/Grid';

function App() {
  return (
    <MuiThemeProvider>

      <div className="Navigation">
        <header>
        <AppBar
          title={false}
          showMenuIconButton={false}
          style={{
            'background-color': 'transparent',
            'color': 'rgb(245, 245, 247)',
            'height': '52px'
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

        <div className="Intro">
          <div className="AllWidthComponent"></div>
          <div className="AllWidthComponent"></div>
          <div className="AllWidthComponent"></div>
        </div>

        <div className="ServicesAlbum">
          <div className="TwoComponentsRow">
            <div className="HalfWidthComponent"></div>
          </div>
          <div className="TwoComponentsRow">
            <div className="HalfWidthComponent"></div>
          </div>
          <div className="TwoComponentsRow">
            <div className="HalfWidthComponent"></div>
          </div>
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
              <Grid item xs={2}>
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
              <Grid item xs={2}>
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
              <Grid item xs={2}>
                <b>Apple Store</b>
              </Grid>
              <Grid item xs={2}>
                <b>For Business</b>
              </Grid>
              <Grid item xs={2}>
                <b>Apple Values</b>
              </Grid>
            </Grid>
          </div>
          <div className="HorizontalLine"></div>
          <div className="FooterCopyright">

          </div>
        </footer>
      </div>
    
    </MuiThemeProvider>
  );
}

export default App;
