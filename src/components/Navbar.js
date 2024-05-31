import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export default class Navbar extends Component {




    render() {

        let { mode, setMode } = this.props;
        return (
            <div>
                <nav className={`navbar navbar-expand-lg navbar-${mode}`} style={{
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
                            <div className="form-check form-switch">
                                <input className="form-check-input" onClick={setMode} type="checkbox" role="switch" id="flexSwitchCheckDefault" />
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
        )
    }
}
