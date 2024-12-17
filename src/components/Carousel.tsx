import { useState } from "react"
import carouselImage01 from "../asset/images/carousel_img_01.jpg";
import carouselImage02 from "../asset/images/carousel_img_02.jpg";
import carouselImage03 from "../asset/images/carousel_img_03.jpg";
export default function Carousel() {
  const [activeImage, setActiveImage] = useState(1)

  return (
		<>
			<div>
				<div className="carousel">
					<ul className="carousel__slides">
						<input
							type="radio"
							name="radio-buttons"
							id="img-1"
							checked={activeImage === 1}
							readOnly
						/>
						<li className="carousel__slide-container">
							<div className="carousel__slide-img">
								<img src={carouselImage01} alt="carousel_image" />
							</div>
							<div className="carousel__controls">
								<label
									onClick={() => setActiveImage(3)}
									className="carousel__slide-prev"
								>
									<span>&lsaquo;</span>
								</label>
								<label
									onClick={() => setActiveImage(2)}
									className="carousel__slide-next"
								>
									<span>&rsaquo;</span>
								</label>
							</div>
						</li>
						<input
							type="radio"
							name="radio-buttons"
							id="img-2"
							checked={activeImage === 2}
							readOnly
						/>
						<li className="carousel__slide-container">
							<div className="carousel__slide-img">
								<img src={carouselImage02} alt="carousel_image" />
							</div>
							<div className="carousel__controls">
								<label
									onClick={() => setActiveImage(1)}
									className="carousel__slide-prev"
								>
									<span>&lsaquo;</span>
								</label>
								<label
									onClick={() => setActiveImage(3)}
									className="carousel__slide-next"
								>
									<span>&rsaquo;</span>
								</label>
							</div>
						</li>
						<input
							type="radio"
							name="radio-buttons"
							id="img-3"
							checked={activeImage === 3}
							readOnly
						/>
						<li className="carousel__slide-container">
							<div className="carousel__slide-img">
								<img src={carouselImage03} alt="carousel_image" />
							</div>
							<div className="carousel__controls">
								<label
									onClick={() => setActiveImage(2)}
									className="carousel__slide-prev"
								>
									<span>&lsaquo;</span>
								</label>
								<label
									onClick={() => setActiveImage(1)}
									className="carousel__slide-next"
								>
									<span>&rsaquo;</span>
								</label>
							</div>
						</li>
						<div className="carousel__dots">
							<label
								onClick={() => setActiveImage(1)}
								className="carousel__dot"
								id="img-dot-1"
							></label>
							<label
								onClick={() => setActiveImage(2)}
								className="carousel__dot"
								id="img-dot-2"
							></label>
							<label
								onClick={() => setActiveImage(3)}
								className="carousel__dot"
								id="img-dot-3"
							></label>
						</div>
					</ul>
				</div>
			</div>
		</>
	);
} 