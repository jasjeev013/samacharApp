import React from 'react'

function Home(props) {

    const style =  {
        borderRadius: '20px'
    }

    return (
        <div className='container' style={{
            marginTop: '80px'
        }}>
            <div className="container">
                <h1 style={{
                    textAlign: 'center',
                    color: (props.mode === 'light') ? 'black' : 'white',
                    backgroundColor: (props.mode === 'light') ? '#D3712C' : '#490D0D',
                    borderRadius: '20px',
                    padding: '10px'
                
                }}> <b> <i> ----🗞️ The Online Akhbhar Wala 🗞️---- </i></b> </h1>
            </div>
            <div id="carouselExampleCaptions" className="carousel slide my-3">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active">

                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQs_I-Zu6Xwf-tG-GRB52JoG1xgmiydiPjdg&s" className="d-block h-25 w-100 " alt="..." style={style}/>
                        <div className="carousel-caption d-none d-md-block">
                            <h5>First slide label</h5>

                            <p>Some representative placeholder content for the first slide.</p>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQs_I-Zu6Xwf-tG-GRB52JoG1xgmiydiPjdg&s" className="d-block h-25 w-100 " alt="..." style={style}/>
                        <div className="carousel-caption d-none d-md-block">
                            <h5>Second slide label</h5>
                            <p>Some representative placeholder content for the second slide.</p>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQs_I-Zu6Xwf-tG-GRB52JoG1xgmiydiPjdg&s" className="d-block h-25 w-100 " alt="..." style={style}/>
                        <div className="carousel-caption d-none d-md-block">
                            <h5>Third slide label</h5>
                            <p>Some representative placeholder content for the third slide.</p>
                        </div>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
            
        </div>
    )
}

export default Home
