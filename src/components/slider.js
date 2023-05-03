import React from 'react'
import styled from 'styled-components';

const SliderComponent = styled.div`
font-size: 1.6rem;
font-family: $poppins;
font-size: 62.5%;

// Vars
$slick-dot-width: 20px;
$slick-dot-height: 20px;
$slick-dot-color: white;
$slick-dot-color-active: $slick-dot-color;
$slick-opacity-default: 0.75;
$slick-opacity-on-hover: 1;
$slick-opacity-not-active: 0.25;

$playball: 'Playball', cursive;
$poppins: 'Poppins', sans-serif;
// Base
// html {
//   font-size: 62.5%;
// }

// body {
//   font-size: 1.6rem;
//   font-family: $poppins;
// }

// Design Slider
.slider, .slide {
  @media (min-width: 992px) {
    height: 80vh;
  }
}

.slide {
  position: relative;
  .slide__img {
    @media (min-width: 992px) {
      position: absolute;
      top: 50%;
      left: 0;
      transform: translateY(-50%);
    }
    width: 100%;
    height: auto;
    overflow: hidden;
    img {
      max-width: 100%;
      height: auto;
      opacity: 1 !important;
      animation-duration: 3s;
      transition: all 1s ease;
    }
  }
  .slide__content {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
		&.slide__content__left{
			left: 15%;
			transform: translate(-15%, -50%);
		}
		&.slide__content__right{
			right: 15%;
			left: auto;
			transform: translate(5%, -50%);
		}
    &--headings {
      color: #FFF;
      h2 {
        font-size: 4.5rem;
        margin: 10px 0;
      }
      .animated {
        transition: all .5s ease;
      }
			.top-title{
				font-family: $playball;
				font-size: 2.5rem;
			}
			.title{
				font-size: 3.5rem;
			}
			.button-custom{
				text-decoration: none;
				color: #333;
				padding: 1.2rem 2.5rem;
				font-size: 1.5rem;
			}
			
    }
  }
}

// Change animation presets
.slider [data-animation-in] {
    opacity: 0;
    animation-duration: 1.5s;
    transition: opacity 0.5s ease 0.3s;
}

// Dots
.slick-dotted .slick-slider {
    margin-bottom: 30px;
}

.slick-dots {
    position: absolute;
    bottom: 25px;
    list-style: none;
    display: block;
    text-align: center;
    padding: 0;
    margin: 0;
    width: 100%;
    li {
        position: relative;
        display: inline-block;
        margin: 0 5px;
        padding: 0;
        cursor: pointer;
        button {
            border: 0;
            display: block;
            outline: none;
            line-height: 0px;
            font-size: 0px;
            color: transparent;
            padding: 5px;
            cursor: pointer;
            transition: all .3s ease;
            &:hover, &:focus {
                outline: none;
            }
        }
    }
}

.simple-dots {
  .slick-dots {
    li {
      width: $slick-dot-width;
      height: $slick-dot-height;
      button {
        border-radius: 50%;
        background-color: $slick-dot-color;
        opacity: $slick-opacity-not-active;
        width: $slick-dot-width;
        height: $slick-dot-height;
        &:hover, &:focus {
          opacity: $slick-opacity-on-hover;
        }
      }
      &.slick-active button {
        color: $slick-dot-color-active;
        opacity: $slick-opacity-default;
      }
    }
  }
}

.stick-dots {
  .slick-dots {
    li {
      height: 3px;
      width: 50px;
      button {
        position: relative;
        background-color: $slick-dot-color;
        opacity: $slick-opacity-not-active;
        width: 50px;
        height: 3px;
        padding: 0;
        &:hover, &:focus {
          opacity: $slick-opacity-on-hover;
        }
      }
      &.slick-active button {
        color: $slick-dot-color-active;
        opacity: $slick-opacity-default;
        &:hover, &:focus {
          opacity: $slick-opacity-on-hover;
        }
      }
    }
  }
}

/* /////////// IMAGE ZOOM /////////// */
@keyframes zoomInImage {
  from {
    transform: scale3d(1, 1, 1);
  }
  to {
    transform: scale3d(1.1, 1.1, 1.1);
  }
}

.zoomInImage {
  animation-name: zoomInImage;
}

@keyframes zoomOutImage {
  from {
    transform: scale3d(1.1, 1.1, 1.1);
  }
  to {
    transform: scale3d(1, 1, 1);
  }
}

.zoomOutImage {
  animation-name: zoomOutImage;
}


.slick-nav {
    --active: #fff;
    --border: rgba(255, 255, 255, .12);
    width: 44px;
    height: 44px;
		position: absolute;
    cursor: pointer;
    top: calc(50% - 44px);
    &.prev-arrow {
			left: 3%;
			transform: scaleX(-1);
			z-index: 999;
    }
	&.next-arrow{
		left: auto;
		right: 3%;
	}
    i {
        display: block;
        position: absolute;
        margin: -10px 0 0 -10px;
        width: 20px;
        height: 20px;
        left: 50%;
        top: 50%;
        &:before,
        &:after {
            content: '';
            width: 10px;
            height: 2px;
            border-radius: 1px;
            position: absolute;
            left: 50%;
            top: 50%;
            background: var(--active);
            margin: -1px 0 0 -5px;
            display: block;
            transform-origin: 9px 50%;
        }
        &:before {
            transform: rotate(-40deg);
        }
        &:after {
            transform: rotate(40deg);
        }
    }
    &:before,
    &:after {
        content: '';
        display: block;
        position: absolute;
        left: 1px;
        right: 1px;
        top: 1px;
        bottom: 1px;
        border-radius: 50%;
        border: 2px solid var(--border);
    }
    svg {
        width: 44px;
        height: 44px;
        display: block;
        position: relative;
        z-index: 1;
        color: var(--active);
        stroke-width: 2px;
        stroke-dashoffset: 126;
        stroke-dasharray: 126 126 0;
        transform: rotate(0deg);
    }
    &.animate {
        svg {
            animation: stroke 1s ease forwards .3s;
        }
        i {
            animation: arrow 1.6s ease forwards;
            &:before {
                animation: arrowUp 1.6s ease forwards;
            }
            &:after {
                animation: arrowDown 1.6s ease forwards;
            }
        }
    }
}

@keyframes stroke {
    52% {
        transform: rotate(-180deg);
        stroke-dashoffset: 0;
    }
    52.1% {
        transform: rotate(-360deg);
        stroke-dashoffset: 0;
    }
    100% {
        transform: rotate(-180deg);
        stroke-dashoffset: 126;
    }
}

@keyframes arrow {
    0%,
    100% {
        transform: translateX(0);
        opacity: 1;
    }
    23% {
        transform: translateX(17px);
        opacity: 1;
    }
    24%,
    80% {
        transform: translateX(-22px);
        opacity: 0;
    }
    81% {
        opacity: 1;
        transform: translateX(-22px);
    }
}

@keyframes arrowUp {
    0%,
    100% {
        transform: rotate(-40deg) scaleX(1);
    }
    20%,
    80% {
        transform: rotate(0deg) scaleX(.1);
    }
}

@keyframes arrowDown {
    0%,
    100% {
        transform: rotate(40deg) scaleX(1);
    }
    20%,
    80% {
        transform: rotate(0deg) scaleX(.1);
    }
}

`

const Slider = () => {

  return (
    <SliderComponent>
    <section className="banner__slider">
  <div className="slider stick-dots">
    <div className="slide">
      <div className="slide__img">
        <img src="" alt="" data-lazy="https://images.unsplash.com/photo-1533777857889-4be7c70b33f7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80" className="full-image animated" data-animation-in="zoomInImage"/>
      </div>
      <div className="slide__content ">
        <div className="slide__content--headings text-center">
           
           <p className="animated top-title" data-animation-in="fadeInUp" data-delay-in="0.3">Welcome to Shareat restaurant</p>
					<h2 className="animated title" data-animation-in="fadeInUp">Let Enjoy The Rhym Of Fooday Dishes</h2>
					<button className="btn-light btn button-custom animated" data-animation-in="fadeInUp">Our menu</button>
        </div>
      </div>
    </div>
    <div className="slide">
      <div className="slide__img">
        <img src="" alt="" data-lazy="https://images.unsplash.com/photo-1550461716-dbf266b2a8a7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80" className="full-image animated" data-animation-in="zoomOutImage"/>
      </div>
      <div className="slide__content slide__content__right">
        <div className="slide__content--headings text-right">
					<p className="animated top-title" data-animation-in="fadeInLeft" data-delay-in="0.2">Wish you have good food at our restaurant</p>
           <h2 className="animated title" data-animation-in="fadeInLeft">Experience the food</h2>
           <button className="btn-success btn button-custom animated text-white" data-animation-in="fadeInUp">Order Now</button>
        </div>
      </div>
    </div>
		<div className="slide">
      <div className="slide__img">
        <img src="" alt="" data-lazy="https://images.unsplash.com/photo-1502741126161-b048400d085d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80" className="full-image animated" data-animation-in="zoomInImage"/>
      </div>
      <div className="slide__content slide__content__left">
        <div className="slide__content--headings text-left">
					<p className="animated top-title" data-animation-in="fadeInRight" data-delay-in="0.2">Purchase today. just $76</p>
           <h2 className="animated title" data-animation-in="fadeInRight">SUPER DEAL LUNCH</h2>
           <button className="btn-light btn button-custom animated" data-animation-in="fadeInUp">Today's Menu</button>
        </div>
      </div>
    </div>
  </div>
  
	<svg xmlns="http://www.w3.org/2000/svg" style={{ display: 'none' }}>
    <symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 44 44" width="44px" height="44px" id="circle" fill="none" stroke="currentColor">
        {/* <circle r="20" cy="22" cx="22" id="test"> */}
    </symbol>
  </svg>

</section>
</SliderComponent>
  )
}

export default Slider
