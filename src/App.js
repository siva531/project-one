import logo from './logo.svg';
import './App.css';
import Fore_header from './components/Fore_header';
import Bank_acct from './components/Bank_acct';
import Billing_addrs from './components/Billing_addrs';
import Activities from './components/Activities';
import Profile from './components/Profile';
import Family from './components/Family';
import Invitations from './components/Invitations';

function App() {
  return (
    <div className="App">
      <header className="px-5 mb-2 border-bottom text-bg-dark">
        <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
          <h6 className='d-flex align-items-center mb-2 me-5 mb-lg-0 text-white text-decoration-none'>LOGO</h6>

          <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 ms-5 justify-content-center mb-md-0">
            <li><a href="#" className="nav-link px-2 text-white">Menu 1</a></li>
            <li><a href="#" className="nav-link px-2 text-white">Menu 2</a></li>
            <li><a href="#" className="nav-link px-2 text-white">Menu 3</a></li>
          </ul>
          <i className="fa fa-bell-o me-3" aria-hidden="true"></i>
          <div className="dropdown text-end">
              <img src="https://github.com/mdo.png" alt="mdo" width="32" height="32" className="rounded-circle"/>          
          </div>
        </div>
      </header>
    <div className="container-fluid px-5">
      <Fore_header/>
      <div className='row'>
        <div className='col-md-9'>
          <div className='row'>
            <Profile/>
            <div className='col-md-8'>
              <div className='row'>
                <Bank_acct/>
                <Billing_addrs/>
              </div>
            </div>
            <div className='col-md-4'>
              <Activities/>
            </div>
          </div>
        </div>
        <div className='col-md-3'>
            <div className='row'>
              <Family/>
              <Invitations/>
            </div>
        </div>
      </div>
    </div>


    </div>
  );
}

export default App;
