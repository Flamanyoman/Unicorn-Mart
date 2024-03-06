import { Helmet } from 'react-helmet';
import './home.css';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import '../../assets/external/swiper-bundle.min.css';
import { Navigation, Pagination, Scrollbar } from 'swiper/modules';
import CustomButtons from './CustomButtons';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';

import pesen from '../../assets/images/logo/unicorn-logo.png';
import banner6 from '../../assets/images/layouts/banner-6.png';
import icon02 from '../../assets/images/icon/icon-02.png';
import avt01 from '../../assets/images/layouts/avt-01.png';
import about01_2 from '../../assets/images/layouts/about-01_2.png';
import about02_2 from '../../assets/images/layouts/about-02_2.png';
import about03_2 from '../../assets/images/layouts/about-03_2.png';
import about04_2 from '../../assets/images/layouts/about-04_2.png';
import about05_2 from '../../assets/images/layouts/about-05_2.png';
import portfolio2 from '../../assets/images/layouts/portfolio-2.png';
import about06_2 from '../../assets/images/layouts/about-06_2.png';
import about07_2 from '../../assets/images/layouts/about-07_2.png';
import about08_2 from '../../assets/images/layouts/about-08_2.png';
import about09_2 from '../../assets/images/layouts/about-09_2.png';
import about10_2 from '../../assets/images/layouts/about-10_2.png';
import about11_2 from '../../assets/images/layouts/about-11_2.png';

import line from '../../assets/images/background/line.png';
import create from '../../assets/images/layouts/create.png';
import unicorn from '../../assets/images/logo/unicorn-logo.png';

const Home = () => {
  return (
    <>
      <Helmet>
        <title>
          Unicorn Mart Inc. (UMI) - Next Generation E-commerce Platform
        </title>
      </Helmet>

      <main className='home-main header-fixed'>
        <div className='wrapper'>
          <div className='clear-loading loading-effect-2'></div>
          <header id='header_main' className='header'>
            <div className='container big'>
              <div className='row'>
                <div className='col-12'>
                  <div className='header__body'>
                    <div className='header__logo'>
                      <a href='#'>
                        <img
                          id='site-logo'
                          src={pesen}
                          alt='Peson'
                          width='203'
                          height='55'
                          data-retina='assets/images/logo/unicorn-logo-web'
                          data-width='203'
                          data-height='55'
                        />
                      </a>
                    </div>
                    <div className='header__action'>
                      <a href='' className='action-btn'>
                        <span>Join Our Community</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </header>
          <section className='banner'>
            <div className='shape right'></div>
            <div className='container big'>
              <div className='row'>
                <div className='col-xl-6 col-md-12'>
                  <div className='banner__left'>
                    <div className='block-text'>
                      <h2 className='heading'>
                        Next Generation
                        <br />
                        <br />
                      </h2>
                      <p className='desc'>
                        Unicorn Mart Inc. (UMI) is a comprehensive E-commerce
                        platform, catering to your every need with an extensive
                        range of products and services.
                      </p>
                      <a href='#' className='action-btn'>
                        <span>Visit Our Store - Coming Soon</span>
                      </a>
                    </div>
                    <div className='pay'>
                      <h6>We are use Solana Network</h6>
                      <div className='list'>
                        <p>We accept:</p>
                        <ul>
                          <li>
                            <a href='#'></a>
                          </li>
                          <li>
                            <a href='#'></a>
                          </li>
                          <li>
                            <a href='#'></a>
                          </li>
                          <li>
                            <a href='#'></a>
                          </li>
                          <li>
                            <a href='#'></a>
                          </li>
                          <li>
                            <a href='#'></a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='col-xl-6 col-md-12'>
                  <div className='banner__right'>
                    <div className='image'>
                      <img src={banner6} alt='banner-6' />
                    </div>
                    <div className='price'>
                      <div className='icon'>
                        <img src={icon02} alt='icon-02' />
                      </div>
                      <div className='content'>
                        <h5>2.260</h5>
                        <p>Total Products</p>
                      </div>
                    </div>
                    <div className='owner'>
                      <div className='image'>
                        <img src={avt01} alt='avt-01' />
                      </div>
                      <div className='content'>
                        <h5>1.750</h5>
                        <p>Total User</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className='about'>
            <div className='shape'></div>
            <div className='container'>
              <div className='row rev'>
                <div className='col-xl-6 col-md-12'>
                  <div className='about__right'>
                    <div className='images'>
                      <img className='img1' src={about01_2} alt='about-01_2' />
                      <img className='img2' src={about02_2} alt='about-02_2' />
                      <img className='img3' src={about03_2} alt='about-03_2' />
                      <img className='img4' src={about04_2} alt='about-04_2' />
                      <img className='img5' src={about05_2} alt='about-05_2' />
                    </div>
                  </div>
                </div>
                <div className='col-xl-6 col-md-12'>
                  <div className='block-text'>
                    <h6 className='sub-heading'>
                      <span>About us</span>
                    </h6>
                    <h2 className='heading wow' data-splitting=''>
                      Unicorn
                      <br />
                      Mart Inc.
                    </h2>
                    <p className='mb-17 fs-6'>
                      (UMI) is a cutting-edge e-commerce platform
                      revolutionizing online shopping with its innovative
                      integration of blockchain technology. At the heart of
                      UMI's ecosystem is the UMI token, a digital currency that
                      serves as a secure and efficient method of payment within
                      the platform. Customers can seamlessly navigate through a
                      diverse range of products, from electronics to fashion,
                      and experience a swift and decentralized payment process
                      by utilizing UMI tokens. This not only ensures a
                      frictionless shopping experience but also enhances
                      security and transparency, as blockchain technology
                      provides an immutable ledger for all transactions.
                    </p>
                    <a href='#' className='action-btn'>
                      <span>More About Us</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className='speciality'>
            <div className='shape right'></div>
            <div className='container'>
              <div className='row'>
                <div className='col-12'>
                  <div className='block-text center'>
                    <h6 className='sub-heading'>
                      <span>Our Speciality</span>
                    </h6>
                    <h3 className='heading wow' data-splitting=''>
                      Complete Solutions
                      <br />
                      for your shopping eXperience
                    </h3>
                    <p className='fs-6 px-5 mb-26'>
                      Revolutionize your shopping journey with our all-in-one
                      solution. Effortlessly explore a diverse range of
                      products, enjoy personalized recommendations, and
                      experience seamless, secure transactions. Immerse yourself
                      in the future of shopping – our complete solution
                      redefines convenience. Navigate through a vast selection
                      effortlessly, receive tailored recommendations, and enjoy
                      a frictionless checkout. With real-time order tracking and
                      responsive customer support
                    </p>
                  </div>
                </div>
                <div className='col-xl-3 col-md-6'>
                  <div
                    className='speciality-box'
                    data-aos='fade-up'
                    data-aos-duration='2800'
                  >
                    <div className='icon'>
                      <svg
                        width='48'
                        height='42'
                        viewBox='0 0 48 42'
                        fill='none'
                        xmlns='http://www.w3.org/2000/svg'
                      >
                        <path
                          fillRule='evenodd'
                          clipRule='evenodd'
                          d='M9.99935 4.66667C9.99935 2.08934 12.0887 0 14.666 0H33.3327C35.9101 0 37.9994 2.08934 37.9994 4.66667V7H9.99935V4.66667ZM5.33268 15.1667C5.33268 12.5893 7.42202 10.5 9.99935 10.5H37.9994C40.5768 10.5 42.666 12.5893 42.666 15.1667V17.5H5.33268V15.1667ZM0.666016 25.6667C0.666016 23.0893 2.75535 21 5.33268 21H42.666C45.2434 21 47.3327 23.0893 47.3327 25.6667V32.6667C47.3327 37.8212 43.1539 42 37.9994 42H9.99935C4.84469 42 0.666016 37.8212 0.666016 32.6667V25.6667ZM17.5827 28C17.5827 27.0335 18.3662 26.25 19.3327 26.25H28.666C29.6325 26.25 30.416 27.0335 30.416 28C30.416 28.9665 29.6325 29.75 28.666 29.75H19.3327C18.3662 29.75 17.5827 28.9665 17.5827 28Z'
                          fill='url(#paint0_linear_939_156)'
                        ></path>
                        <defs>
                          <linearGradient
                            id='paint0_linear_939_156'
                            x1='23.9993'
                            y1='0'
                            x2='23.9993'
                            y2='42'
                            gradientUnits='userSpaceOnUse'
                          >
                            <stop offset='0' stopColor='white'></stop>
                            <stop
                              offset='1'
                              stopColor='white'
                              stopOpacity='0.5'
                            ></stop>
                          </linearGradient>
                        </defs>
                      </svg>
                    </div>
                    <h5 className='title'>Business to Business</h5>
                    <p>
                      Unlock efficiency and growth in your business-to-business
                      interactions with our tailored solution.
                    </p>
                    <h3 className='number'>01</h3>
                  </div>
                </div>
                <div className='col-xl-3 col-md-6'>
                  <div
                    className='speciality-box'
                    data-aos='fade-up'
                    data-aos-duration='3000'
                  >
                    <div className='icon'>
                      <svg
                        width={42}
                        height={48}
                        viewBox='0 0 42 48'
                        fill='none'
                        xmlns='http://www.w3.org/2000/svg'
                      >
                        <path
                          fillRule='evenodd'
                          clipRule='evenodd'
                          d='M42 19.6841V37.9226C42 43.1201 37.8212 47.3334 32.6667 47.3334H9.33333C4.17867 47.3334 0 43.1201 0 37.9226V19.6841C0 16.8586 1.25916 14.1826 3.42967 12.3953L15.0963 2.78856C18.532 -0.0405116 23.468 -0.040535 26.9036 2.78856L38.5702 12.3953C40.7409 14.1826 42 16.8586 42 19.6841ZM28.5833 36.2501V41.5001C28.5833 42.7888 27.5387 43.8334 26.25 43.8334H15.75C14.4613 43.8334 13.4167 42.7888 13.4167 41.5001V36.2501C13.4167 32.062 16.8119 28.6667 21 28.6667C25.1881 28.6667 28.5833 32.062 28.5833 36.2501Z'
                          fill='url(#paint0_linear_939_899)'
                        ></path>
                        <defs>
                          <linearGradient
                            id='paint0_linear_939_899'
                            x1={21}
                            y1={0.666748}
                            x2={21}
                            y2={47.3334}
                            gradientUnits='userSpaceOnUse'
                          >
                            <stop offset={0} stopColor='white'></stop>
                            <stop
                              offset={1}
                              stopColor='white'
                              stopOpacity={0.5}
                            ></stop>
                          </linearGradient>
                        </defs>
                      </svg>
                    </div>
                    <h5 className='title'>Business to Consumer</h5>
                    <p>
                      Engage with customers on a whole new level with our B2C
                      solution. Seamlessly showcase products, enhance user
                      experience.
                    </p>
                    <h3 className='number'>02</h3>
                  </div>
                </div>
                <div className='col-xl-3 col-md-6'>
                  <div
                    className='speciality-box'
                    data-aos='fade-up'
                    data-aos-duration='2800'
                  >
                    <div className='icon'>
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        width='46'
                        height='46'
                        data-name='Layer 1'
                        viewBox='0 0 84.3 84.3'
                      >
                        <path
                          d='M12.64 8.43a4.22 4.22 0 0 0-4.21 4.21v59a4.22 4.22 0 0 0 4.21 4.22h33.72a4.22 4.22 0 0 0 4.22-4.22v-59a4.22 4.22 0 0 0-4.22-4.21Zm0 75.87h59A12.65 12.65 0 0 0 84.3 71.65V29.5a12.64 12.64 0 0 0-12.65-12.64H59v-4.22A12.64 12.64 0 0 0 46.36 0H12.64A12.64 12.64 0 0 0 0 12.64v59A12.64 12.64 0 0 0 12.64 84.3Zm59-8.43H58.29a12.55 12.55 0 0 0 .71-4.22V25.29h12.65a4.22 4.22 0 0 1 4.22 4.21v42.15a4.22 4.22 0 0 1-4.22 4.22ZM21.07 50.58h-8.43V59h8.43Zm4.22 0h8.43V59h-8.43Zm21.07 0h-8.43V59h8.43Zm16.86 0h8.43V59h-8.43Zm8.43-16.86h-8.43v8.43h8.43Zm-59 0h8.43v8.43h-8.44Zm21.08 0h-8.44v8.43h8.43Zm4.21 0h8.43v8.43h-8.44ZM21.07 16.86h-8.43v8.43h8.43Zm4.22 0h8.43v8.43h-8.43Zm21.07 0h-8.43v8.43h8.43Z'
                          style={{ fill: '#fff', fillRule: 'evenodd' }}
                        ></path>
                      </svg>
                    </div>
                    <h5 className='title'>Consumer to Business</h5>
                    <p>
                      Empower consumers with our C2B solution, where individuals
                      drive demand. Sell products or services directly to
                      businesses
                    </p>
                    <h3 className='number'>03</h3>
                  </div>
                </div>
                <div className='col-xl-3 col-md-6'>
                  <div
                    className='speciality-box'
                    data-aos='fade-up'
                    data-aos-duration='3000'
                  >
                    <div className='icon'>
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        width='64'
                        height='45'
                        data-name='Layer 1'
                        viewBox='0 0 66.32 48'
                      >
                        <path
                          d='M66.32 6v20.09s-4.3.84-5.19 1-3.64 1-5.66-.93c-3.1-3-14.1-14-14.1-14a4.18 4.18 0 0 0-4.95-.25c-2.8 1.47-7 3.63-8.68 4.47a4 4 0 0 1-6-3.12 4.09 4.09 0 0 1 2.49-3.56C28.17 7.32 36.5 2.58 40 .78 42.08-.41 43.59-.41 46.5 2l6.79 5.72a3.28 3.28 0 0 0 2.71.51C60 7.4 66.32 6 66.32 6ZM22.5 40a3.56 3.56 0 0 0-4.2-4.85 3.63 3.63 0 0 0-.76-3.55 3.71 3.71 0 0 0-3.54-.92 3.65 3.65 0 0 0-.77-3.55 4 4 0 0 0-5.59.15c-1.64 1.57-2.7 4.41-1.2 6.09s3.13.65 4.41.35c-.36 1.27-1.42 2.46-.11 4.11s3.13.66 4.41.36c-.36 1.27-1.38 2.56-.12 4.1s3.36.72 4.74.29c-.54 1.37-1.67 2.83-.22 4.49s4.83.89 6.48-.69a3.93 3.93 0 0 0 .36-5.54A3.76 3.76 0 0 0 22.5 40Zm30-10.45L39.82 16.87a4.18 4.18 0 0 0-4.47-.8c-1.78.78-4.06 1.84-5.79 2.65a9.64 9.64 0 0 1-3.9 1.3 6.62 6.62 0 0 1-3.55-12.24c2.76-1.89 8.79-5.12 8.79-5.12A7.68 7.68 0 0 0 25 .29c-4.05 0-12.53 5.57-12.53 5.57A6.62 6.62 0 0 1 6.61 6L0 3.71v23s1.88.54 3.55 1.18A7.5 7.5 0 0 1 5.4 25a7.29 7.29 0 0 1 10-.07 6.38 6.38 0 0 1 1.6 2.75 6.31 6.31 0 0 1 4.29 4.52 6.48 6.48 0 0 1 4.39 4.73 6.34 6.34 0 0 1 2.83 1.7 6.67 6.67 0 0 1 1.75 5.79s.95 1.06 1.53 1.64a2.91 2.91 0 0 0 4.12-4.12s2.37 2.94 5.07 1.19c2.37-1.66 2-3.63.88-4.74a3.76 3.76 0 0 0 5.32.46 3.19 3.19 0 0 0 .33-.31 2.89 2.89 0 0 0 .15-3.9s1.58 2.14 4.74.14c2.24-1.9 1.18-4.06 0-5.2Z'
                          style={{ fill: '#fff' }}
                        ></path>
                      </svg>
                    </div>
                    <h5 className='title'>Consumer to Consumer</h5>
                    <p>
                      Connect with individuals to buy or sell products and
                      services directly to engage in consumer-to-consumer
                      exchanges.
                    </p>
                    <h3 className='number'>04</h3>
                  </div>
                </div>
                <div className='col-xl-3 col-md-6'>
                  <div
                    className='speciality-box'
                    data-aos='fade-up'
                    data-aos-duration='2000'
                  >
                    <div className='icon'>
                      <svg
                        width={48}
                        height={48}
                        viewBox='0 0 48 48'
                        fill='none'
                        xmlns='http://www.w3.org/2000/svg'
                      >
                        <path
                          fillRule='evenodd'
                          clipRule='evenodd'
                          d='M25.4995 11.1667H14.666V10.0001C14.666 4.84542 18.8447 0.666748 23.9994 0.666748H37.9994C43.1539 0.666748 47.3327 4.84542 47.3327 10.0001V24.0001C47.3327 29.1546 43.1539 33.3334 37.9994 33.3334H36.8327V22.5C36.8327 16.2409 31.7586 11.1667 25.4995 11.1667ZM9.99935 47.3334H23.9994C29.1539 47.3334 33.3327 43.1547 33.3327 38.0001V24.0001C33.3327 18.8454 29.1539 14.6667 23.9994 14.6667H9.99935C4.84469 14.6667 0.666016 18.8454 0.666016 24.0001V38.0001C0.666016 43.1547 4.84469 47.3334 9.99935 47.3334ZM25.1518 25.0165C25.8791 25.6528 25.9528 26.7586 25.3163 27.4859L18.6199 35.139C17.181 36.7835 14.7024 37.0035 12.996 35.6385L8.90614 32.3667C8.15142 31.7628 8.02906 30.6615 8.63283 29.9069C9.23658 29.1521 10.3378 29.0298 11.0926 29.6337L15.1825 32.9055C15.4262 33.1006 15.7803 33.069 15.9859 32.8341L22.6824 25.181C23.3187 24.4537 24.4243 24.3799 25.1518 25.0165Z'
                          fill='url(#paint0_linear_939_616)'
                        ></path>
                        <defs>
                          <linearGradient
                            id='paint0_linear_939_616'
                            x1={23.9993}
                            y1={0.666748}
                            x2={23.9993}
                            y2={47.3334}
                            gradientUnits='userSpaceOnUse'
                          >
                            <stop offset={1} stopColor='white'></stop>
                            <stop
                              offset={1}
                              stopColor='white'
                              stopOpacity={0.5}
                            ></stop>
                          </linearGradient>
                        </defs>
                      </svg>
                      ;
                    </div>
                    <h5 className='title'>Huge Collection</h5>
                    <p>
                      Discover of our vast collection from fashion to
                      electronics. Uncover endless choices and find exactly what
                      you're looking for in our huge collection.
                    </p>
                    <h3 className='number'>05</h3>
                  </div>
                </div>
                <div className='col-xl-3 col-md-6'>
                  <div
                    className='speciality-box'
                    data-aos='fade-up'
                    data-aos-duration='2400'
                  >
                    <div className='icon'>
                      <svg
                        width={48}
                        height={42}
                        viewBox='0 0 48 42'
                        fill='none'
                        xmlns='http://www.w3.org/2000/svg'
                      >
                        <path
                          d='M39.2612 1.68623L46.0794 9.45348C47.6617 11.256 47.7559 13.9428 46.3037 15.8544L27.9319 40.0393C25.9458 42.6536 22.0529 42.6536 20.0667 40.0393L1.6949 15.8544C0.242769 13.9428 0.33692 11.256 1.91922 9.45348L8.73743 1.68623C9.67896 0.613667 11.0285 0 12.4457 0H19.5891H28.9607H35.5531C36.9701 0 38.3197 0.613667 39.2612 1.68623Z'
                          fill='url(#paint0_linear_939_5927)'
                        ></path>
                        <defs>
                          <linearGradient
                            id='paint0_linear_939_5927'
                            x1={23.9993}
                            y1={0}
                            x2={23.9993}
                            y2={42}
                            gradientUnits='userSpaceOnUse'
                          >
                            <stop offset={1} stopColor='white'></stop>
                            <stop
                              offset={1}
                              stopColor='white'
                              stopOpacity={0.5}
                            ></stop>
                          </linearGradient>
                        </defs>
                      </svg>
                    </div>
                    <h5 className='title'>High Quality Products</h5>
                    <p>
                      Experience excellence with our high-quality products.
                      Impeccable craftsmanship meets superior materials
                    </p>
                    <h3 className='number'>06</h3>
                  </div>
                </div>
                <div className='col-xl-3 col-md-6'>
                  <div
                    className='speciality-box'
                    data-aos='fade-up'
                    data-aos-duration='3000'
                  >
                    <div className='icon'>
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        width='64'
                        height='61'
                        data-name='Layer 1'
                        viewBox='0 0 64 61.99'
                      >
                        <path
                          d='M55.07 44.13a8.82 8.82 0 0 0-4.56 1.3l-5.67-5.15A14.94 14.94 0 0 0 47.31 32a15.1 15.1 0 0 0-2.85-8.85l6.43-6.43a8.74 8.74 0 0 0 4.14 1.06 8.93 8.93 0 1 0-8.93-8.93 8.71 8.71 0 0 0 1.09 4.19l-6.43 6.43a14.87 14.87 0 0 0-13.89-1.89h.1l-1.35-2.46a8.91 8.91 0 1 0-4.54 2.53H21l1.35 2.45a15 15 0 0 0-5.33 15.52v-.11l-1.4.6a8.88 8.88 0 1 0 2.14 5.78c0-.33-.05-.64-.09-1V41l1.4-.59a15.2 15.2 0 0 0 22.29 3.69L47 49.28a8.83 8.83 0 0 0-.87 3.78 8.94 8.94 0 1 0 8.93-8.93ZM15.54 8.93a3.68 3.68 0 1 1 3.67 3.68 3.67 3.67 0 0 1-3.67-3.68ZM8.83 45.54a3.68 3.68 0 1 1 3.68-3.68 3.68 3.68 0 0 1-3.68 3.68ZM55.07 5.26a3.68 3.68 0 1 1-3.68 3.67 3.67 3.67 0 0 1 3.68-3.67ZM21.84 32.05a10.1 10.1 0 0 1 17.25-7.15 10.1 10.1 0 1 1-17.25 7.14Zm33.23 24.69a3.68 3.68 0 1 1 3.67-3.67 3.67 3.67 0 0 1-3.67 3.67Z'
                          style={{ fill: '#fff' }}
                        ></path>
                      </svg>
                    </div>
                    <h5 className='title'>Big Community</h5>
                    <p>
                      Join our thriving community and be part of something
                      extraordinary. With a diverse and extensive network,
                      connect, share, and collaborate with like-minded
                      individuals.
                    </p>
                    <h3 className='number'>07</h3>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className='portfolio'>
            <div className='shape'></div>
            <div className='container'>
              <div className='row'>
                <div className='col-12'>
                  <div className='block-text center'>
                    <h6 className='sub-heading'>
                      <span>Join Us</span>
                    </h6>
                    <h3 className='heading wow' data-splitting=''>
                      How to Become Our
                      <br />
                      Sponsor
                    </h3>
                  </div>
                </div>
                <div className='col-xl-6 col-md-6'>
                  <div className='portfolio__left'>
                    <div className='portfolio-box'>
                      <div className='step'>Step 1</div>
                      <div className='icon'>
                        <svg
                          width='38'
                          height='40'
                          viewBox='0 0 38 40'
                          fill='none'
                          xmlns='http://www.w3.org/2000/svg'
                        >
                          <path
                            d='M2.95254 7.0368V9.32914H1.1348C0.494411 9.32914 0.120349 10.0513 0.489802 10.5744L4.47918 16.2224C4.79379 16.6679 5.45457 16.6679 5.76918 16.2224L9.75855 10.5744C10.128 10.0513 9.75394 9.32914 9.11355 9.32914H7.29582V7.0368C7.29582 5.55156 8.50418 4.3432 9.98949 4.3432C11.4748 4.3432 12.683 5.55156 12.683 7.0368V20.1065H17.0262V7.0368C17.0262 3.15672 13.8695 0 9.98941 0C6.10933 0 2.95254 3.15672 2.95254 7.0368Z'
                            fill='#00E3FF'
                          ></path>
                          <path
                            d='M17.0255 7.03664V20.1062H14.6336V7.03664C14.6336 3.56461 12.1056 0.67125 8.79297 0.102266C9.18172 0.0346094 9.58086 0 9.98898 0C13.8691 0 17.0255 3.15656 17.0255 7.03664Z'
                            fill='#00D0FF'
                          ></path>
                          <path
                            d='M30.2029 39.9999H7.79977C7.00305 39.9999 6.33133 39.4059 6.23398 38.6151L4.24609 22.467H33.7565L31.7687 38.6151C31.6713 39.4059 30.9996 39.9999 30.2029 39.9999Z'
                            fill='#865FFF'
                          ></path>
                          <path
                            d='M4.24609 22.4673L4.59867 25.3306H15.8534C16.4356 25.3306 16.9819 25.6428 17.2505 26.1592C17.5791 26.7913 18.2398 27.2229 19.0013 27.2229C19.763 27.2229 20.4236 26.7913 20.7522 26.1592C21.0208 25.6428 21.567 25.3306 22.1492 25.3306H27.9644C29.2641 25.3306 30.2705 26.4685 30.1117 27.7585L28.7753 38.6148C28.6775 39.406 28.0063 39.9999 27.2095 39.9999H30.203C30.9998 39.9999 31.671 39.406 31.7688 38.6148L33.7566 22.4673H4.24609Z'
                            fill='#5C27FE'
                          ></path>
                          <path
                            d='M16.3707 36.3227C15.5938 36.377 14.92 35.7913 14.8656 35.0144L14.4488 29.0537C14.3945 28.2769 14.9802 27.603 15.7572 27.5487C16.534 27.4944 17.2079 28.0801 17.2622 28.857L17.679 34.8176C17.7333 35.5945 17.1476 36.2683 16.3707 36.3227Z'
                            fill='#070A29'
                          ></path>
                          <path
                            d='M10.7584 36.2906C9.98717 36.399 9.27413 35.8617 9.16577 35.0905L8.33421 29.1734C8.22585 28.4022 8.76311 27.6891 9.53436 27.5808C10.3056 27.4724 11.0187 28.0097 11.127 28.7809L11.9586 34.698C12.0669 35.4691 11.5296 36.1823 10.7584 36.2906Z'
                            fill='#070A29'
                          ></path>
                          <path
                            d='M21.7025 36.3227C22.4793 36.377 23.1532 35.7913 23.2075 35.0144L23.6243 29.0537C23.6786 28.2769 23.0929 27.603 22.316 27.5487C21.5391 27.4944 20.8653 28.0801 20.8109 28.857L20.3941 34.8176C20.3399 35.5945 20.9256 36.2683 21.7025 36.3227Z'
                            fill='#070A29'
                          ></path>
                          <path
                            d='M27.3156 36.2906C28.0869 36.399 28.7999 35.8617 28.9083 35.0905L29.7398 29.1734C29.8482 28.4022 29.3109 27.6891 28.5397 27.5808C27.7685 27.4724 27.0554 28.0097 26.947 28.7809L26.1155 34.698C26.007 35.4691 26.5444 36.1823 27.3156 36.2906Z'
                            fill='#070A29'
                          ></path>
                          <path
                            d='M34.2805 23.359H3.72273C2.59875 23.359 1.6875 22.4479 1.6875 21.3238C1.6875 20.1998 2.59867 19.2886 3.72273 19.2886H34.2805C35.4045 19.2886 36.3158 20.1997 36.3158 21.3238C36.3158 22.4479 35.4045 23.359 34.2805 23.359Z'
                            fill='#DEC7FF'
                          ></path>
                          <path
                            d='M36.315 21.3237C36.315 21.8861 36.087 22.394 35.7187 22.7624C35.3511 23.1308 34.8416 23.3587 34.2799 23.3587H31.4766C32.0382 23.3587 32.5477 23.1308 32.9153 22.7624C33.2837 22.394 33.5116 21.8861 33.5116 21.3237C33.5116 20.1996 32.6005 19.2886 31.4766 19.2886H34.2799C35.4039 19.2886 36.315 20.1997 36.315 21.3237Z'
                            fill='#FCA863'
                          ></path>
                          <path
                            d='M35.0425 11.061V18.9871H36.8602C37.5006 18.9871 37.8747 19.7093 37.5052 20.2324L33.5159 25.8804C33.2013 26.3259 32.5405 26.3259 32.2259 25.8804L28.2365 20.2324C27.867 19.7093 28.2411 18.9871 28.8815 18.9871H30.6992V11.061C30.6992 9.57573 29.4909 8.36737 28.0055 8.36737C26.5202 8.36737 25.312 9.57573 25.312 11.061V19.2885H20.9688V11.061C20.9688 7.18081 24.1255 4.02417 28.0055 4.02417C31.8856 4.02417 35.0425 7.18089 35.0425 11.061Z'
                            fill='#7986E8'
                          ></path>
                          <path
                            d='M37.5033 20.2325L33.5138 25.88C33.1991 26.3259 32.5391 26.3259 32.2244 25.88L31.7793 25.2498L35.323 20.2326C35.6923 19.7095 35.319 18.9867 34.6783 18.9867H33.665C33.2205 18.9867 32.8602 18.6264 32.8602 18.1819V11.0608C32.8602 7.55172 30.2783 4.63422 26.9141 4.10868C27.3525 4.04024 27.8032 4.01211 28.263 4.02891C32.0615 4.16735 35.0404 7.35094 35.0404 11.152V18.9866H36.8585C37.4984 18.9866 37.8727 19.7094 37.5033 20.2325Z'
                            fill='#4C5CE1'
                          ></path>
                        </svg>
                      </div>
                      <div className='content'>
                        <h5 className='title'>Buy UMI Coin</h5>
                        <p>
                          Buy UMI Coin with your favorite wallet, You can enjoy
                          the benefits of UMI Coin's decentralized ecosystem,
                          with attractive discounts and driving a new era of
                          digital transactions.
                        </p>
                      </div>
                    </div>
                    <div className='portfolio-box'>
                      <div className='step'>Step 2</div>
                      <div className='icon'>
                        <svg
                          width='40'
                          height='36'
                          viewBox='0 0 40 36'
                          fill='none'
                          xmlns='http://www.w3.org/2000/svg'
                        >
                          <path
                            d='M28.2031 32.0625C28.2031 32.7187 27.6876 33.2344 27.0312 33.2344H12.9688C12.3124 33.2344 11.7969 32.7187 11.7969 32.0625C11.7969 31.4062 12.3124 30.8906 12.9688 30.8906H27.0312C27.6876 30.8906 28.2031 31.4062 28.2031 32.0625Z'
                            fill='#DEC7FF'
                          ></path>
                          <path
                            d='M28.2031 32.0625C28.2031 32.7187 27.6876 33.2344 27.0312 33.2344H17.6562V30.8906H27.0312C27.6876 30.8906 28.2031 31.4062 28.2031 32.0625Z'
                            fill='#5C27FE'
                          ></path>
                          <path
                            d='M28.2031 3.9375C28.2031 4.59367 27.6876 5.10938 27.0312 5.10938H12.9688C12.3124 5.10938 11.7969 4.59367 11.7969 3.9375C11.7969 3.28117 12.3124 2.76562 12.9688 2.76562H27.0312C27.6876 2.76562 28.2031 3.28117 28.2031 3.9375Z'
                            fill='#DEC7FF'
                          ></path>
                          <path
                            d='M35.3582 17.0753C34.9279 17.0753 34.5147 16.8384 34.3087 16.4276L29.374 6.55821C29.0845 5.97915 29.3191 5.27532 29.8982 4.98579C30.4761 4.69743 31.1811 4.9297 31.4706 5.50993L36.4053 15.3793C36.6948 15.9584 36.4602 16.6622 35.8811 16.9517C35.7129 17.0352 35.5344 17.0753 35.3582 17.0753Z'
                            fill='#5C27FE'
                          ></path>
                          <path
                            d='M30.4207 31.1379C30.2445 31.1379 30.0659 31.0978 29.8977 31.0143C29.4869 30.8094 29.25 30.3951 29.25 29.966C29.25 29.7897 29.2901 29.6101 29.3736 29.4418L34.3083 19.5725C34.599 18.9934 35.3005 18.7611 35.8807 19.0483C36.2916 19.2532 36.5284 19.6675 36.5284 20.0966C36.5284 20.2729 36.4884 20.4526 36.4048 20.6208L31.4702 30.4901C31.2641 30.901 30.851 31.1379 30.4207 31.1379Z'
                            fill='#5C27FE'
                          ></path>
                          <path
                            d='M4.63989 17.0753C4.46364 17.0753 4.28513 17.0352 4.11693 16.9517C3.53786 16.6622 3.30325 15.9584 3.59278 15.3793L8.52747 5.50993C8.81817 4.9297 9.51966 4.69743 10.0999 4.98579C10.679 5.27532 10.9136 5.97915 10.624 6.55821L5.68935 16.4276C5.48333 16.8384 5.07021 17.0753 4.63989 17.0753Z'
                            fill='#DEC7FF'
                          ></path>
                          <path
                            d='M9.57692 31.1379C9.14661 31.1379 8.73349 30.901 8.52747 30.4901L3.59278 20.6208C3.30325 20.0417 3.53786 19.3379 4.11693 19.0483C4.69482 18.7611 5.39982 18.9934 5.68935 19.5725L10.624 29.4418C10.9136 30.0209 10.679 30.7247 10.0999 31.0143C9.93169 31.0978 9.75317 31.1379 9.57692 31.1379Z'
                            fill='#DEC7FF'
                          ></path>
                          <path
                            d='M34.3108 18.1237C34.1838 18.1237 34.0556 18.1031 33.9297 18.0597L26.4041 15.4687C25.7918 15.2582 25.4668 14.591 25.6774 13.9798C25.8879 13.3676 26.5563 13.0437 27.1663 13.2531L34.6919 15.844C35.3042 16.0546 35.6292 16.7218 35.4186 17.3329C35.2515 17.8194 34.7972 18.1237 34.3108 18.1237Z'
                            fill='#5C27FE'
                          ></path>
                          <path
                            d='M25.2567 12.2105C25.0164 12.2105 24.7726 12.1361 24.5632 11.9827C24.0425 11.5994 23.9303 10.8658 24.3137 10.3439L27.8637 5.51679C28.247 4.99608 28.9783 4.88507 29.5025 5.26733C30.0232 5.65069 30.1354 6.38429 29.7519 6.90616L26.202 11.7333C25.9719 12.0456 25.6172 12.2105 25.2567 12.2105Z'
                            fill='#5C27FE'
                          ></path>
                          <path
                            d='M23.7027 12.6561C23.4917 13.0078 23.1168 13.1953 22.7417 13.1953C22.5074 13.1953 22.2964 13.1249 22.0855 12.9843L17.6558 10.0311L11.9136 6.21083C11.3746 5.85935 11.234 5.13279 11.6089 4.59365C11.9604 4.05466 12.687 3.91404 13.2261 4.2656L17.6557 7.21857L23.3979 11.0389C23.937 11.3906 24.0776 12.1172 23.7027 12.6561Z'
                            fill='#DEC7FF'
                          ></path>
                          <path
                            d='M19.0616 21.9848C18.8167 21.9848 18.5707 21.9082 18.3601 21.7502C17.8417 21.3623 17.7364 20.6276 18.1255 20.1103L22.3438 14.4844C22.7328 13.9659 23.4676 13.863 23.9837 14.2498C24.5021 14.6377 24.6074 15.3724 24.2183 15.8897L20 21.5156C19.77 21.8234 19.4187 21.9848 19.0616 21.9848Z'
                            fill='#5C27FE'
                          ></path>
                          <path
                            d='M15.4355 23.1179C15.3131 23.1179 15.1884 23.0984 15.0648 23.0572L5.44945 19.8529C4.83601 19.6492 4.50414 18.9854 4.70898 18.3708C4.91265 17.7586 5.57187 17.4221 6.19101 17.6304L15.8063 20.8347C16.4198 21.0384 16.7516 21.7022 16.5468 22.3168C16.3831 22.8077 15.9265 23.1179 15.4355 23.1179Z'
                            fill='#DEC7FF'
                          ></path>
                          <path
                            d='M27.5422 31.7708C27.2859 31.7708 27.0272 31.6873 26.811 31.5145L18.7521 25.0669C18.2474 24.6617 18.165 23.9248 18.5689 23.4189C18.9752 22.9154 19.7111 22.8307 20.2169 23.2358L28.2758 29.6834C28.7805 30.0885 28.8629 30.8255 28.4589 31.3313C28.2265 31.6197 27.8867 31.7708 27.5422 31.7708Z'
                            fill='#5C27FE'
                          ></path>
                          <path
                            d='M12.0303 31.3598C11.7854 31.3598 11.5394 31.2832 11.3289 31.1252C10.8104 30.7373 10.7052 30.0026 11.0942 29.4853L15.3125 23.8594C15.7028 23.3409 16.4352 23.238 16.9525 23.6248C17.4709 24.0127 17.5761 24.7474 17.1871 25.2647L12.9688 30.8906C12.7388 31.1984 12.3875 31.3598 12.0303 31.3598Z'
                            fill='#DEC7FF'
                          ></path>
                          <path
                            d='M16.8312 21.6644C16.3574 21.6644 15.9099 21.3749 15.7337 20.9045L10.3481 6.54441C10.1215 5.93785 10.4281 5.26269 11.0335 5.03496C11.6377 4.80839 12.3152 5.11394 12.543 5.72042L17.9286 20.0805C18.1552 20.6871 17.8485 21.3622 17.2431 21.59C17.107 21.6404 16.9685 21.6644 16.8312 21.6644Z'
                            fill='#DEC7FF'
                          ></path>
                          <path
                            d='M19.9286 23.2907C19.4033 23.2907 18.9261 22.936 18.7934 22.4027C18.6355 21.7756 19.0177 21.1393 19.646 20.9825L33.8481 17.4325C34.4741 17.2735 35.1115 17.6557 35.2683 18.2851C35.4262 18.9122 35.044 19.5486 34.4158 19.7053L20.2136 23.2553C20.1186 23.2793 20.0225 23.2907 19.9286 23.2907Z'
                            fill='#5C27FE'
                          ></path>
                          <path
                            d='M27.0312 5.10938H17.6562V2.76562H27.0312C27.6876 2.76562 28.2031 3.28117 28.2031 3.9375C28.2031 4.59367 27.6876 5.10938 27.0312 5.10938Z'
                            fill='#5C27FE'
                          ></path>
                          <path
                            d='M23.7031 12.6562C23.4921 13.0079 23.1172 13.1954 22.7421 13.1954C22.5078 13.1954 22.2968 13.125 22.0859 12.9844L17.6562 10.0312V7.21875L23.3984 11.0391C23.9374 11.3907 24.078 12.1173 23.7031 12.6562Z'
                            fill='#5C27FE'
                          ></path>
                          <path
                            d='M17.6562 19.1719C15.7109 19.1719 14.1406 20.7421 14.1406 22.6875C14.1406 24.6327 15.7109 26.2031 17.6562 26.2031C19.6016 26.2031 21.1719 24.6327 21.1719 22.6875C21.1719 20.7421 19.6016 19.1719 17.6562 19.1719Z'
                            fill='#00E3FF'
                          ></path>
                          <path
                            d='M21.1719 22.6875C21.1719 24.6327 19.6016 26.2031 17.6562 26.2031V19.1719C19.6016 19.1719 21.1719 20.7421 21.1719 22.6875Z'
                            fill='#00E3FF'
                          ></path>
                          <path
                            d='M36.4062 21.5156C34.4677 21.5156 32.8906 19.9386 32.8906 18C32.8906 16.0614 34.4677 14.4844 36.4062 14.4844C38.3448 14.4844 40 16.0614 40 18C40 19.9386 38.3448 21.5156 36.4062 21.5156Z'
                            fill='#00E3FF'
                          ></path>
                          <path
                            d='M29.375 7.45312C27.4364 7.45312 25.8594 5.87609 25.8594 3.9375C25.8594 1.99891 27.4364 0.421875 29.375 0.421875C31.3136 0.421875 32.8906 1.99891 32.8906 3.9375C32.8906 5.87609 31.3136 7.45312 29.375 7.45312Z'
                            fill='#00E3FF'
                          ></path>
                          <path
                            d='M24.6875 16.8281C22.7489 16.8281 21.1719 15.2511 21.1719 13.3125C21.1719 11.3739 22.7489 9.79688 24.6875 9.79688C26.6261 9.79688 28.2031 11.3739 28.2031 13.3125C28.2031 15.2511 26.6261 16.8281 24.6875 16.8281Z'
                            fill='#00E3FF'
                          ></path>
                          <path
                            d='M29.375 35.5781C27.4364 35.5781 25.8594 34.0011 25.8594 32.0625C25.8594 30.1239 27.4364 28.5469 29.375 28.5469C31.3136 28.5469 32.8906 30.1239 32.8906 32.0625C32.8906 34.0011 31.3136 35.5781 29.375 35.5781Z'
                            fill='#00E3FF'
                          ></path>
                          <path
                            d='M3.59375 21.5156C1.65516 21.5156 0 19.9386 0 18C0 16.0614 1.65516 14.4844 3.59375 14.4844C5.53234 14.4844 7.10938 16.0614 7.10938 18C7.10938 19.9386 5.53234 21.5156 3.59375 21.5156Z'
                            fill='#00E3FF'
                          ></path>
                          <path
                            d='M10.625 7.45312C8.68641 7.45312 7.10938 5.87609 7.10938 3.9375C7.10938 1.99891 8.68641 0.421875 10.625 0.421875C12.5636 0.421875 14.1406 1.99891 14.1406 3.9375C14.1406 5.87609 12.5636 7.45312 10.625 7.45312Z'
                            fill='#00E3FF'
                          ></path>
                          <path
                            d='M10.625 35.5781C8.68641 35.5781 7.10938 34.0011 7.10938 32.0625C7.10938 30.1239 8.68641 28.5469 10.625 28.5469C12.5636 28.5469 14.1406 30.1239 14.1406 32.0625C14.1406 34.0011 12.5636 35.5781 10.625 35.5781Z'
                            fill='#00E3FF'
                          ></path>
                        </svg>
                      </div>
                      <div className='content'>
                        <h5 className='title'>Create your collection</h5>
                        <p>
                          Create your collection with items that are interesting
                          and have big potential profits and you can resell your
                          collection
                        </p>
                      </div>
                    </div>
                    <div className='portfolio-box'>
                      <div className='step'>Step 3</div>
                      <div className='icon'>
                        <svg
                          width='40'
                          height='40'
                          viewBox='0 0 40 40'
                          fill='none'
                          xmlns='http://www.w3.org/2000/svg'
                        >
                          <path
                            d='M1.17188 32.9688C0.524141 32.9688 0 32.4446 0 31.7969V27.1094C0 26.4616 0.524141 25.9375 1.17188 25.9375C1.81961 25.9375 2.34375 26.4616 2.34375 27.1094V31.7969C2.34375 32.4446 1.81961 32.9688 1.17188 32.9688Z'
                            fill='#00D0FF'
                          ></path>
                          <path
                            d='M38.8281 32.9688C38.1804 32.9688 37.6562 32.4446 37.6562 31.7969V27.1094C37.6562 26.4616 38.1804 25.9375 38.8281 25.9375C39.4759 25.9375 40 26.4616 40 27.1094V31.7969C40 32.4446 39.4759 32.9688 38.8281 32.9688Z'
                            fill='#00BBFF'
                          ></path>
                          <path
                            d='M39.25 30.6952L20.4219 23.664C20.2812 23.6172 20.1406 23.5938 20 23.5938C19.8594 23.5938 19.7188 23.6172 19.5781 23.664L0.75 30.6952C0.304688 30.8593 0 31.3046 0 31.7969C0 32.289 0.304688 32.7343 0.75 32.8984L19.5781 39.9296C19.7188 39.9766 19.8594 40 20 40C20.1406 40 20.2812 39.9766 20.4219 39.9296L39.25 32.8984C39.6953 32.7343 40 32.289 40 31.7969C40 31.3046 39.6953 30.8593 39.25 30.6952Z'
                            fill='#00E3FF'
                          ></path>
                          <path
                            d='M40 31.7969C40 32.289 39.6953 32.7343 39.25 32.8984L20.4219 39.9296C20.2812 39.9766 20.1406 40 20 40V23.5938C20.1406 23.5938 20.2812 23.6172 20.4219 23.664L39.25 30.6952C39.6953 30.8593 40 31.3046 40 31.7969Z'
                            fill='#00D0FF'
                          ></path>
                          <path
                            d='M20.0001 26.0077L4.5 31.7968L20.0001 37.5858L35.5002 31.7968L20.0001 26.0077Z'
                            fill='#00D0FF'
                          ></path>
                          <path
                            d='M35.5001 31.7968L20 37.5858V26.0077L35.5001 31.7968Z'
                            fill='#00BBFF'
                          ></path>
                          <path
                            d='M27.6406 5.14844L21.4453 7.55523L20 10.7031L17.6562 11.875V17.7344L20 21.0859C20.1876 21.0859 20.3749 21.039 20.5625 20.9453L30.0156 15.7188C30.3907 15.5078 30.625 15.1329 30.625 14.7109V5.42969L27.6406 5.14844Z'
                            fill='#4C5CE1'
                          ></path>
                          <path
                            d='M12.3594 5.14844L9.375 5.42969V14.7109C9.375 15.1329 9.6093 15.5078 9.98438 15.7188L19.4375 20.9453C19.6251 21.039 19.8124 21.0859 20 21.0859V10.7031L18.8502 7.52344L12.3594 5.14844Z'
                            fill='#6E77E5'
                          ></path>
                          <path
                            d='M32.993 33.039L29.665 31.7969L32.993 30.5546C33.6024 30.3203 33.9071 29.6406 33.6727 29.0313C33.4384 28.4453 32.782 28.1406 32.1727 28.3515L26.2586 30.5546L23.3289 29.4531L26.6571 28.2109C27.2663 27.9766 27.5711 27.2968 27.3367 26.6875C27.1257 26.1016 26.4461 25.7969 25.8367 26.0078L20.0008 28.2109L14.1648 26.0078C13.5555 25.7969 12.8758 26.1016 12.6648 26.6875C12.4306 27.2967 12.7352 27.9766 13.3445 28.2109L16.6728 29.4531L13.7431 30.5546L7.82907 28.3515C7.21969 28.1172 6.53993 28.4453 6.32907 29.0313C6.09461 29.6405 6.3993 30.3203 7.00867 30.5546L10.3367 31.7969L7.00867 33.039C6.3993 33.2735 6.09461 33.9531 6.32907 34.5625C6.56336 35.1485 7.21969 35.4531 7.82907 35.2421L13.7431 33.039L16.6728 34.1406L13.3446 35.3828C12.7354 35.6172 12.4306 36.2968 12.665 36.9063C12.876 37.4922 13.5556 37.7969 14.165 37.5859L20.0009 35.3828L25.8369 37.5859C25.9775 37.6328 26.1181 37.6563 26.2588 37.6563C26.7275 37.6563 27.1728 37.375 27.337 36.9063C27.5713 36.2969 27.2666 35.6172 26.6573 35.3828L23.3289 34.1406L26.2586 33.039L32.1727 35.2421C32.3133 35.2891 32.4305 35.3125 32.5712 35.3125C33.0633 35.3125 33.5086 35.0313 33.6727 34.5625C33.9072 33.9531 33.6025 33.2735 32.993 33.039ZM20.0009 32.8984L17.0946 31.7969L20.0009 30.6953L22.9071 31.7969L20.0009 32.8984Z'
                            fill='#00E3FF'
                          ></path>
                          <path
                            d='M1.17188 16.5625C0.524141 16.5625 0 16.0384 0 15.3906V13.0469C0 12.3991 0.524141 11.875 1.17188 11.875C1.81961 11.875 2.34375 12.3991 2.34375 13.0469V15.3906C2.34375 16.0384 1.81961 16.5625 1.17188 16.5625Z'
                            fill='#00D0FF'
                          ></path>
                          <path
                            d='M1.17188 23.5938C0.524141 23.5938 0 23.0696 0 22.4219V20.0781C0 19.4304 0.524141 18.9062 1.17188 18.9062C1.81961 18.9062 2.34375 19.4304 2.34375 20.0781V22.4219C2.34375 23.0696 1.81961 23.5938 1.17188 23.5938Z'
                            fill='#00D0FF'
                          ></path>
                          <path
                            d='M1.17188 9.53125C0.524141 9.53125 0 9.00711 0 8.35938V6.01562C0 5.36789 0.524141 4.84375 1.17188 4.84375C1.81961 4.84375 2.34375 5.36789 2.34375 6.01562V8.35938C2.34375 9.00711 1.81961 9.53125 1.17188 9.53125Z'
                            fill='#00D0FF'
                          ></path>
                          <path
                            d='M38.8281 16.5625C38.1804 16.5625 37.6562 16.0384 37.6562 15.3906V13.0469C37.6562 12.3991 38.1804 11.875 38.8281 11.875C39.4759 11.875 40 12.3991 40 13.0469V15.3906C40 16.0384 39.4759 16.5625 38.8281 16.5625Z'
                            fill='#00BBFF'
                          ></path>
                          <path
                            d='M38.8281 23.5938C38.1804 23.5938 37.6562 23.0696 37.6562 22.4219V20.0781C37.6562 19.4304 38.1804 18.9062 38.8281 18.9062C39.4759 18.9062 40 19.4304 40 20.0781V22.4219C40 23.0696 39.4759 23.5938 38.8281 23.5938Z'
                            fill='#00BBFF'
                          ></path>
                          <path
                            d='M38.8281 9.53125C38.1804 9.53125 37.6562 9.00711 37.6562 8.35938V6.01562C37.6562 5.36789 38.1804 4.84375 38.8281 4.84375C39.4759 4.84375 40 5.36789 40 6.01562V8.35938C40 9.00711 39.4759 9.53125 38.8281 9.53125Z'
                            fill='#00BBFF'
                          ></path>
                          <path
                            d='M5.85938 11.875C5.21164 11.875 4.6875 11.3509 4.6875 10.7031V8.35938C4.6875 7.71164 5.21164 7.1875 5.85938 7.1875C6.50711 7.1875 7.03125 7.71164 7.03125 8.35938V10.7031C7.03125 11.3509 6.50711 11.875 5.85938 11.875Z'
                            fill='#00D0FF'
                          ></path>
                          <path
                            d='M5.85938 18.9062C5.21164 18.9062 4.6875 18.3821 4.6875 17.7344V15.3906C4.6875 14.7429 5.21164 14.2188 5.85938 14.2188C6.50711 14.2188 7.03125 14.7429 7.03125 15.3906V17.7344C7.03125 18.3821 6.50711 18.9062 5.85938 18.9062Z'
                            fill='#00D0FF'
                          ></path>
                          <path
                            d='M5.85938 25.9375C5.21164 25.9375 4.6875 25.4134 4.6875 24.7656V22.4219C4.6875 21.7741 5.21164 21.25 5.85938 21.25C6.50711 21.25 7.03125 21.7741 7.03125 22.4219V24.7656C7.03125 25.4134 6.50711 25.9375 5.85938 25.9375Z'
                            fill='#00D0FF'
                          ></path>
                          <path
                            d='M5.85938 4.84375C5.21164 4.84375 4.6875 4.31961 4.6875 3.67188V1.17188C4.6875 0.524141 5.21164 0 5.85938 0C6.50711 0 7.03125 0.524141 7.03125 1.17188V3.67188C7.03125 4.31961 6.50711 4.84375 5.85938 4.84375Z'
                            fill='#00D0FF'
                          ></path>
                          <path
                            d='M34.1406 11.875C33.4929 11.875 32.9688 11.3509 32.9688 10.7031V8.35938C32.9688 7.71164 33.4929 7.1875 34.1406 7.1875C34.7884 7.1875 35.3125 7.71164 35.3125 8.35938V10.7031C35.3125 11.3509 34.7884 11.875 34.1406 11.875Z'
                            fill='#00BBFF'
                          ></path>
                          <path
                            d='M34.1406 18.9062C33.4929 18.9062 32.9688 18.3821 32.9688 17.7344V15.3906C32.9688 14.7429 33.4929 14.2188 34.1406 14.2188C34.7884 14.2188 35.3125 14.7429 35.3125 15.3906V17.7344C35.3125 18.3821 34.7884 18.9062 34.1406 18.9062Z'
                            fill='#00BBFF'
                          ></path>
                          <path
                            d='M34.1406 25.9375C33.4929 25.9375 32.9688 25.4134 32.9688 24.7656V22.4219C32.9688 21.7741 33.4929 21.25 34.1406 21.25C34.7884 21.25 35.3125 21.7741 35.3125 22.4219V24.7656C35.3125 25.4134 34.7884 25.9375 34.1406 25.9375Z'
                            fill='#00BBFF'
                          ></path>
                          <path
                            d='M34.1406 4.84375C33.4929 4.84375 32.9688 4.31961 32.9688 3.67188V1.17188C32.9688 0.524141 33.4929 0 34.1406 0C34.7884 0 35.3125 0.524141 35.3125 1.17188V3.67188C35.3125 4.31961 34.7884 4.84375 34.1406 4.84375Z'
                            fill='#00BBFF'
                          ></path>
                          <path
                            d='M30.625 5.42969L20 10.7031L9.375 5.42969L20 0L30.625 5.42969Z'
                            fill='#7986E8'
                          ></path>
                          <path
                            d='M33.672 34.5625C33.508 35.0313 33.0627 35.3125 32.5705 35.3125C32.4299 35.3125 32.3127 35.2891 32.172 35.2421L26.258 33.039L23.3282 34.1406L26.6564 35.3828C27.2656 35.6172 27.5704 36.2968 27.336 36.9063C27.172 37.375 26.7266 37.6563 26.2578 37.6563C26.1172 37.6563 25.9766 37.6328 25.8359 37.5859L20 35.3828V32.8984L22.9064 31.7969L20.0002 30.6953V28.2109L25.8361 26.0078C26.4455 25.7969 27.1252 26.1016 27.3361 26.6875C27.5704 27.2967 27.2657 27.9766 26.6565 28.2109L23.3282 29.4531L26.2579 30.5546L32.172 28.3515C32.7813 28.1406 33.4377 28.4453 33.672 29.0313C33.9064 29.6405 33.6017 30.3203 32.9923 30.5546L29.6643 31.7969L32.9923 33.039C33.6018 33.2735 33.9065 33.9531 33.672 34.5625Z'
                            fill='#00D0FF'
                          ></path>
                        </svg>
                      </div>
                      <div className='content'>
                        <h5 className='title'>Enjoy your profit</h5>
                        <p>
                          Enjoy double profits from the sale of your collection
                          and from the UMI Coin profits you earn
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='col-xl-6 col-md-6'>
                  <div className='portfolio__right'>
                    <div
                      className='image'
                      data-aos='fade-left'
                      data-aos-duration='2000'
                    >
                      <img src={portfolio2} alt='portfolio-2' />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className='project'>
            <div className='shape right'></div>
            <div className='container'>
              <div className='row'>
                <div className='col-12'>
                  <div className='block-text center'>
                    <h3 className='heading wow' data-splitting=''>
                      OUR COLLECTION
                    </h3>
                  </div>

                  <div className='project-swiper'>
                    <Swiper
                      modules={[Navigation, Pagination]}
                      className='swiper-wrapper'
                      spaceBetween={30}
                      breakpoints={{
                        // Customize settings for different screen widths
                        640: {
                          slidesPerView: 1,
                        },
                        768: {
                          slidesPerView: 2,
                          spaceBetween: 40,
                        },
                        1024: {
                          slidesPerView: 3, //
                          spaceBetween: 50,
                        },
                      }}
                      onSlideChange={() => console.log('slide change')}
                      onSwiper={(swiper) => console.log(swiper)}
                    >
                      <SwiperSlide className='swiper-slide'>
                        <div className='project-box'>
                          <div className='image'>
                            <a href='#'>
                              <img src={about06_2} alt='about-06_2' />
                            </a>
                          </div>
                          <div className='content'>
                            <a href='#' className='h5 title'>
                              Smart Watch
                            </a>
                          </div>
                        </div>
                      </SwiperSlide>
                      <SwiperSlide className='swiper-slide'>
                        <div className='project-box'>
                          <div className='image'>
                            <a href='#'>
                              <img src={about07_2} alt='about-07_2' />
                            </a>
                          </div>
                          <div className='content'>
                            <a href='#' className='h5 title'>
                              Game Console
                            </a>
                          </div>
                        </div>
                      </SwiperSlide>
                      <SwiperSlide className='swiper-slide'>
                        <div className='project-box'>
                          <div className='image'>
                            <a href='#'>
                              <img src={about08_2} alt='about-08_2' />
                            </a>
                          </div>
                          <div className='content'>
                            <a href='#' className='h5 title'>
                              Gadget
                            </a>
                          </div>
                        </div>
                      </SwiperSlide>
                      <SwiperSlide className='swiper-slide'>
                        <div className='project-box'>
                          <div className='image'>
                            <a href='#'>
                              <img src={about09_2} alt='about-09_2' />
                            </a>
                          </div>
                          <div className='content'>
                            <a href='#' className='h5 title'>
                              Man Shoes Collection
                            </a>
                          </div>
                        </div>
                      </SwiperSlide>
                      <SwiperSlide className='swiper-slide'>
                        <div className='project-box'>
                          <div className='image'>
                            <a href='#'>
                              <img src={about10_2} alt='about-10_2' />
                            </a>
                          </div>
                          <div className='content'>
                            <a href='#' className='h5 title'>
                              Woman Shoes
                            </a>
                          </div>
                        </div>
                      </SwiperSlide>
                      <SwiperSlide className='swiper-slide'>
                        <div className='project-box'>
                          <div className='image'>
                            <a href='#'>
                              <img src={about11_2} alt='about-11_2' />
                            </a>
                          </div>
                          <div className='content'>
                            <a href='#' className='h5 title'>
                              Unisex Shoes
                            </a>
                          </div>
                        </div>
                      </SwiperSlide>
                      <SwiperSlide className='swiper-slide'>
                        <div className='project-box'>
                          <div className='image'>
                            <a href='#'>
                              <img src={about01_2} alt='about-01_2' />
                            </a>
                          </div>
                          <div className='content'>
                            <a href='#' className='h5 title'>
                              Long Sleeved
                            </a>
                          </div>
                        </div>
                      </SwiperSlide>
                      <SwiperSlide className='swiper-slide'>
                        <div className='project-box'>
                          <div className='image'>
                            <a href='#'>
                              <img src={about02_2} alt='about-02_2' />
                            </a>
                          </div>
                          <div className='content'>
                            <a href='#' className='h5 title'>
                              T-shirt
                            </a>
                          </div>
                        </div>
                      </SwiperSlide>
                      <SwiperSlide className='swiper-slide'>
                        <div className='project-box'>
                          <div className='image'>
                            <a href='#'>
                              <img src={about03_2} alt='about-03_2' />
                            </a>
                          </div>
                          <div className='content'>
                            <a href='#' className='h5 title'>
                              Woman T-shirt
                            </a>
                          </div>
                        </div>
                      </SwiperSlide>

                      <div className='swiper-pagination'></div>
                      <CustomButtons />
                    </Swiper>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className='roadmap'>
            <img src={line} alt='line' className='img-line' />
            <div className='shape'></div>
            <div className='container'>
              <div className='row'>
                <div className='col-12'>
                  <div className='block-text center'>
                    <h6 className='sub-heading'>
                      <span>Road Map</span>
                    </h6>
                    <h3 className='heading wow' data-splitting=''>
                      The Journey of
                      <br />
                      Unicorn Mart Inc.
                    </h3>
                  </div>
                  <div
                    className='roadmap__main'
                    data-aos='fade-up'
                    data-aos-duration='2000'
                  >
                    <div className='roadmap-box'>
                      <div className='content'>
                        <h5 className='title'>Idea Generation</h5>
                        <p className='text'>
                          Creating creative concepts and breaking down
                          conventional barriers, this process empowers
                          individuals and teams to find innovative solutions and
                          spark the next big breakthrough.
                        </p>
                      </div>
                    </div>
                    <div className='roadmap-box right'>
                      <div className='content'>
                        <h5 className='title'>Design & Development</h5>
                        <p className='text'>
                          The process of designing and developing UMI Coin
                          involves several key steps: Define Purpose and Use
                          Case, Blockchain Selection, Smart Contract
                          Development, Token Deployment, Web User Interface (UI)
                          and User Experience (UX) Design, Integration, Launch
                          and Distribution and Community Engagement.
                        </p>
                      </div>
                    </div>
                    <div className='roadmap-box'>
                      <div className='content'>
                        <h5 className='title'>Initial Release</h5>
                        <p className='text'>
                          The initial launch of UMI Coin involved a strategic
                          and carefully planned process to ensure a successful
                          launch. By using our team's strategies and steps, we
                          are confident we can release the coin successfully,
                          build a strong community, and lay the foundation for
                          long-term growth and sustainability.
                        </p>
                      </div>
                    </div>
                    <div className='roadmap-box right'>
                      <div className='content'>
                        <h5 className='title'>Result & Final Report</h5>
                        <p className='text'>
                          We will provide reports on sales results and final
                          reports that are transparent, available to the public
                          as well as to our sponsors and investors.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className='button mb-26'></div>
                </div>
              </div>
            </div>
          </section>
          <section className='create'>
            <div className='container'>
              <div className='row'>
                <div className='col-12'>
                  <div className='create__main'>
                    <div className='content'>
                      <h4 className='heading'>Create Your Collection Now</h4>
                      <p>
                        and get update tips & tricks how to get more profit from
                        us
                      </p>
                      <a href='#' className='action-btn'>
                        <span>Join Now</span>
                      </a>
                    </div>
                    <img src={create} alt='create' />
                  </div>
                </div>
              </div>
            </div>
          </section>
          <footer className='footer'>
            <div className='shape'></div>
            <div className='container'>
              <div className='row'>
                <div className='col-md-12'>
                  <div className='footer__bottom'>
                    <a href='index-2.html' className='logo'>
                      <img src={unicorn} alt='unicorn-logo' />
                    </a>
                    <div className='center mb--30'></div>
                    <ul className='list-social'>
                      <li>
                        <a href='#'>
                          <svg
                            width='9'
                            height='16'
                            viewBox='0 0 9 16'
                            fill='none'
                            xmlns='http://www.w3.org/2000/svg'
                          >
                            <path
                              d='M2.57969 9.03953C2.51969 9.03953 1.19969 9.03953 0.599688 9.03953C0.279688 9.03953 0.179688 8.91953 0.179688 8.61953C0.179688 7.81953 0.179688 6.99953 0.179688 6.19953C0.179688 5.87953 0.299688 5.77953 0.599688 5.77953H2.57969C2.57969 5.71953 2.57969 4.55953 2.57969 4.01953C2.57969 3.21953 2.71969 2.45953 3.11969 1.75953C3.53969 1.03953 4.13969 0.559531 4.89969 0.279531C5.39969 0.0995311 5.89969 0.0195312 6.43969 0.0195312H8.39969C8.67969 0.0195312 8.79969 0.139531 8.79969 0.419531V2.69953C8.79969 2.97953 8.67969 3.09953 8.39969 3.09953C7.85969 3.09953 7.31969 3.09953 6.77969 3.11953C6.23969 3.11953 5.95969 3.37953 5.95969 3.93953C5.93969 4.53953 5.95969 5.11953 5.95969 5.73953H8.27969C8.59969 5.73953 8.71969 5.85953 8.71969 6.17953V8.59953C8.71969 8.91953 8.61969 9.01953 8.27969 9.01953C7.55969 9.01953 6.01969 9.01953 5.95969 9.01953V15.5395C5.95969 15.8795 5.85969 15.9995 5.49969 15.9995C4.65969 15.9995 3.83969 15.9995 2.99969 15.9995C2.69969 15.9995 2.57969 15.8795 2.57969 15.5795C2.57969 13.4795 2.57969 9.09953 2.57969 9.03953Z'
                              fill='white'
                            ></path>
                          </svg>
                        </a>
                      </li>
                      <li>
                        <a href='#'>
                          <svg
                            width='15'
                            height='12'
                            viewBox='0 0 15 12'
                            fill='none'
                            xmlns='http://www.w3.org/2000/svg'
                          >
                            <path
                              d='M14.5 1.42062C13.9794 1.66154 13.4246 1.82123 12.8462 1.89877C13.4412 1.524 13.8954 0.935077 14.1089 0.225231C13.5541 0.574154 12.9416 0.820615 12.2889 0.958154C11.7621 0.366462 11.0114 0 10.1924 0C8.60337 0 7.32412 1.36062 7.32412 3.02862C7.32412 3.26862 7.34338 3.49938 7.39062 3.71908C5.0045 3.59631 2.89313 2.38985 1.47475 0.552C1.22712 1.00523 1.08188 1.524 1.08188 2.08246C1.08188 3.13108 1.59375 4.06062 2.35675 4.59877C1.89562 4.58954 1.44325 4.44831 1.06 4.22585C1.06 4.23508 1.06 4.24708 1.06 4.25908C1.06 5.73046 2.05487 6.95262 3.3595 7.23415C3.12587 7.30154 2.87125 7.33385 2.607 7.33385C2.42325 7.33385 2.23775 7.32277 2.06362 7.28215C2.4355 8.48123 3.49075 9.36277 4.7455 9.39138C3.769 10.1972 2.52912 10.6828 1.18688 10.6828C0.9515 10.6828 0.72575 10.6717 0.5 10.6412C1.77137 11.5062 3.27813 12 4.903 12C10.1845 12 13.072 7.38462 13.072 3.384C13.072 3.25015 13.0676 3.12092 13.0615 2.99262C13.6311 2.56615 14.1097 2.03354 14.5 1.42062Z'
                              fill='white'
                            ></path>
                          </svg>
                        </a>
                      </li>
                      <li>
                        <a href='#'>
                          <svg
                            width='14'
                            height='14'
                            viewBox='0 0 14 14'
                            fill='none'
                            xmlns='http://www.w3.org/2000/svg'
                          >
                            <path
                              d='M14.0006 14V8.87249C14.0006 6.35249 13.4581 4.42749 10.5181 4.42749C9.10062 4.42749 8.15563 5.19749 7.77063 5.93249H7.73563V4.65499H4.95312V14H7.85813V9.36249C7.85813 8.13749 8.08563 6.96499 9.59063 6.96499C11.0781 6.96499 11.0956 8.34749 11.0956 9.43249V13.9825H14.0006V14Z'
                              fill='white'
                            ></path>
                            <path
                              d='M0.226562 4.65479H3.13156V13.9998H0.226562V4.65479Z'
                              fill='white'
                            ></path>
                            <path
                              d='M1.68 0C0.7525 0 0 0.7525 0 1.68C0 2.6075 0.7525 3.3775 1.68 3.3775C2.6075 3.3775 3.36 2.6075 3.36 1.68C3.36 0.7525 2.6075 0 1.68 0Z'
                              fill='white'
                            ></path>
                          </svg>
                        </a>
                      </li>
                      <li>
                        <a href='#'>
                          <svg
                            width='18'
                            height='12'
                            viewBox='0 0 18 12'
                            fill='none'
                            xmlns='http://www.w3.org/2000/svg'
                          >
                            <path
                              d='M17.2347 1.9639C17.1458 1.22216 16.4468 0.510897 15.7154 0.415609C11.2555 -0.138536 6.7457 -0.138536 2.28731 0.415609C1.55533 0.51069 0.856308 1.22216 0.76739 1.9639C0.452537 4.68236 0.452537 7.31818 0.76739 10.036C0.856308 10.7778 1.55533 11.4897 2.28731 11.5843C6.7457 12.1384 11.2557 12.1384 15.7154 11.5843C16.4468 11.4898 17.1458 10.7778 17.2347 10.036C17.5496 7.31842 17.5496 4.68236 17.2347 1.9639ZM7.58931 8.82375V3.17703L11.8243 6.00049L7.58931 8.82375Z'
                              fill='white'
                            ></path>
                          </svg>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </footer>
          <a id='scroll-top'></a>
        </div>
        {/* <script src='app/js/jquery.min.js'></script>
        <script src='app/js/jquery.easing.js'></script>
        <script src='app/js/jquery-migrate.min.js'></script>
        <script src='app/js/plugins.js'></script>
        <script src='app/js/countto.js'></script>
        <script src='app/js/wow.min.js'></script>
        <script src='app/js/app.js'></script>
        <script src='app/js/count-down.js'></script>
        <script src='app/js/aos.js'></script>
        <script src='app/js/swiper-bundle.min.js'></script>
        <script src='app/js/swiper.js'></script> */}
      </main>
    </>
  );
};

export default Home;
