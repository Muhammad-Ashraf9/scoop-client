import "./Carousel.css";
import CoolButton from "./CoolButton";
export default function Carousel(){
    return(
      <>
      <div id="HeaderCarousel" className="carousel slide carousel-fade mt-5 ">
    <div className="carousel-inner">
      <div className="carousel-item active CarouselImg img1 text-center">
        <div className='carousel-caption d-none d-md-block'>
          <h1 className="display-1">Welcome to Scoop</h1>
          <h3 className="display-4 mb-4">Get the best Sports Wear Now!</h3>
          <CoolButton
            Title={'Shop Now'}
          />
          
        </div>
      </div>
      <div className="carousel-item CarouselImg img2">
      <div className='carousel-caption d-none d-md-block'>
          <h1 className="display-1">The Best body builders</h1>
          <h3 className="display-4 mb-4">Need the best Supplements!</h3>
          <CoolButton
            Title={'Get Yours Now'}
          />        
        </div>
      </div>
      <div className="carousel-item img3 CarouselImg">
      <div className='carousel-caption d-none d-md-block'>
          <h1 className="display-1 mb-4">We also sell the best Gym Equipments</h1>
          <CoolButton
            Title={'Get Yours Now'}
          />        
        </div>
        </div>
    </div>
    <button className="carousel-control-prev" type="button" data-bs-target="#HeaderCarousel" data-bs-slide="prev">
      <span className="carousel-control-prev-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Previous</span>
    </button>
    <button className="carousel-control-next" type="button" data-bs-target="#HeaderCarousel" data-bs-slide="next">
      <span className="carousel-control-next-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Next</span>
    </button>
  </div>
      </>
    )
  }