import React from 'react'
import { Link } from 'react-router-dom';

function Navbar(props) {


    const customDropdownMenuStyle = {
        '--bs-dropdown-min-width': '6rem'
    };
    let { mode, setMode , updateCountry } = props;
    return (
        <div>
            <nav className={`navbar fixed-top navbar-expand-lg navbar-${mode}`} style={{
                backgroundColor: mode === 'light' ? '#C9E49D' : '#406E6E',
            }}>
                <div className="container-fluid ">
                    <Link className="navbar-brand" to="/general"> <b>SamacharApp</b> </Link>

                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/general">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/business">Buisness</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/entertainment">Entertainment</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/general">General</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/health">Health</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/science">Science</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/sports">Sports</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/technology">Technology</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/">About</Link>
                            </li>

                        </ul>
                        <div className="btn-group mx-4">
                            <button type="button" className="btn btn-sm dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false" style={{
                                backgroundColor: mode === 'light' ? '#D3712C' : '#490D0D',
                                color: mode === 'light' ? 'black' : 'white'
                            }}>
                                <i><small>Country</small></i>
                            </button>
                            <ul  className="dropdown-menu" style={customDropdownMenuStyle} >
                                <li><button className="dropdown-item " onClick={()=>updateCountry('in')} ><small>India</small> </button></li>
                                <li><button className="dropdown-item " onClick={()=>updateCountry('us')}><small>USA</small></button></li>
                                <li><button className="dropdown-item " onClick={()=>updateCountry('fr')}><small>France</small></button></li>
                                <li><button className="dropdown-item " onClick={()=>updateCountry('it')}><small>Italy</small></button></li>
                                <li><button className="dropdown-item " onClick={()=>updateCountry('ru')}><small>Russia</small></button></li>
                                <li><button className="dropdown-item " onClick={()=>updateCountry('ch')}><small>China</small></button></li>
                            </ul>
                        </div>
                        <div className="form-check form-switch">
                            <input className="form-check-input" onClick={setMode} type="checkbox" role="switch" id="flexSwitchCheckDefault" />
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}
export default Navbar;