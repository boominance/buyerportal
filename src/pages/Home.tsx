import React from "react"

export default function Home(){
    return (
        <>
      
        
  {/* home */}
  <div className="home">
    <div className="container">
      <div className="row">
        <div className="col-12">
          <div className="home__content">
            <h1 className="home__title">Find the best stock and crypto <br /> recommendations</h1>
            <p className="home__text">
            To invest and to trade. Get the on-demand recommendations.<br />Save your time for research while saving your money for investing.
            </p>
            
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* end home */}
  <div className="container">
    {/* live auctions */}
    <section className="row row--grid">
      {/* title */}
      <div className="col-12">
        <div className="main__title">
          <h2>
            <a href="explore.html">Latest Recommendations</a>
          </h2>
        </div>
      </div>
      {/* end title */}
      {/* carousel */}
      <div className="col-12">
        <div className="main__carousel-wrap">
          <div
            className="main__carousel main__carousel--live owl-carousel"
            id="live"
          >
            <div className="card">
              <a href="/item" className="card__cover">
                <img src="assets/img/cover/cover1.jpg" alt="" />
               
              </a>
              <h3 className="card__title">
                <a href="/item">Buy This Stock</a>
              </h3>
              <div className="card__author card__author--verified">
                <img src="assets/img/avatars/avatar5.jpg" alt="" />
                <a href="/recommender">@rakesh</a>
              </div>
              <div className="card__info">
               
                <a
            href="/item"
            className="asset__btn asset__btn--full asset__btn--clr "
          >
            View Details
          </a>
                
               
              </div>
            </div>
            <div className="card">
              <a href="/item" className="card__cover">
                <img src="assets/img/cover/cover2.jpg" alt="" />
                
              </a>
              <h3 className="card__title">
                <a href="/item">
                  Buy This Crypto
                </a>
              </h3>
              <div className="card__author card__author--verified">
                <img src="assets/img/avatars/avatar5.jpg" alt="" />
                <a href="/recommender">@rakesh</a>
              </div>
              <div className="card__info">
               
                <a
            href="/item"
            className="asset__btn asset__btn--full asset__btn--clr "
          >
            View Details
          </a>
              </div>
            </div>
            <div className="card">
              <a href="/item" className="card__cover open-modal">
                <img src="assets/img/cover/cover3.jpg" alt="" />
               
              </a>
              <h3 className="card__title">
                <a href="/item" className="open-modal">
                 Sell this Stock
                </a>
              </h3>
              <div className="card__author card__author--verified">
                <img src="assets/img/avatars/avatar5.jpg" alt="" />
                <a href="/recommender">@rakesh</a>
              </div>
              <div className="card__info">
               
                <a
            href="/item"
            className="asset__btn asset__btn--full asset__btn--clr "
          >
            View Details
          </a>
              </div>
            </div>
            <div className="card">
              <a href="/item" className="card__cover">
                <img src="assets/img/cover/cover5.jpg" alt="" />
               
              </a>
              <h3 className="card__title">
                <a href="/item">Sell this crypto</a>
              </h3>
              <div className="card__author card__author--verified">
                <img src="assets/img/avatars/avatar5.jpg" alt="" />
                <a href="/recommender">@rakesh</a>
              </div>
              <div className="card__info">
               
                <a
            href="/item"
            className="asset__btn asset__btn--full asset__btn--clr "
          >
            View Details
          </a>
              </div>
            </div>
            <div className="card">
              <a href="/item" className="card__cover card__cover--video">
                <img src="assets/img/cover/cover6.jpg" alt="" />
              
               
              </a>
              <h3 className="card__title">
                <a href="/item">Hold this stock</a>
              </h3>
              <div className="card__author card__author--verified">
                <img src="assets/img/avatars/avatar5.jpg" alt="" />
                <a href="/recommender">@rakesh</a>
              </div>
              <div className="card__info">
               
                <a
            href="/item"
            className="asset__btn asset__btn--full asset__btn--clr "
          >
            View Details
          </a>
              </div>
            </div>
            <div className="card">
              <a href="/item" className="card__cover open-modal">
                <img src="assets/img/cover/cover7.jpg" alt="" />
                
              </a>
              <h3 className="card__title">
                <a href="/item" className="open-modal">
                 Hold this crypto
                </a>
              </h3>
              <div className="card__author card__author--verified">
                <img src="assets/img/avatars/avatar5.jpg" alt="" />
                <a href="/recommender">@rakesh</a>
              </div>
              <div className="card__info">
               
                <a
            href="/item"
            className="asset__btn asset__btn--full asset__btn--clr "
          >
            View Details
          </a>
              </div>
            </div>
          </div>
          <button
            className="main__nav main__nav--prev"
            data-nav="#live"
            type="button"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path d="M17,11H9.41l3.3-3.29a1,1,0,1,0-1.42-1.42l-5,5a1,1,0,0,0-.21.33,1,1,0,0,0,0,.76,1,1,0,0,0,.21.33l5,5a1,1,0,0,0,1.42,0,1,1,0,0,0,0-1.42L9.41,13H17a1,1,0,0,0,0-2Z" />
            </svg>
          </button>
          <button
            className="main__nav main__nav--next"
            data-nav="#live"
            type="button"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path d="M17.92,11.62a1,1,0,0,0-.21-.33l-5-5a1,1,0,0,0-1.42,1.42L14.59,11H7a1,1,0,0,0,0,2h7.59l-3.3,3.29a1,1,0,0,0,0,1.42,1,1,0,0,0,1.42,0l5-5a1,1,0,0,0,.21-.33A1,1,0,0,0,17.92,11.62Z" />
            </svg>
          </button>
        </div>
      </div>
      {/* end carousel */}
    </section>
    {/* end live auctions */}
    {/* top Recommenders */}
    <section className="row row--grid">
      {/* title */}
      <div className="col-12">
        <div className="main__title">
          <h2>Top Recommenders</h2>
          <a href="/view-all-recommenders" className="main__link">
            View all{" "}
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path d="M17.92,11.62a1,1,0,0,0-.21-.33l-5-5a1,1,0,0,0-1.42,1.42L14.59,11H7a1,1,0,0,0,0,2h7.59l-3.3,3.29a1,1,0,0,0,0,1.42,1,1,0,0,0,1.42,0l5-5a1,1,0,0,0,.21-.33A1,1,0,0,0,17.92,11.62Z" />
            </svg>
          </a>
        </div>
      </div>
      {/* end title */}
      {/* sellers list */}
      <div className="col-12">
        <ul className="sellers-list">
          <li>
            <span className="sellers-list__number">1</span>
            <div className="sellers-list__author sellers-list__author--verified">
              <img src="assets/img/avatars/avatar.jpg" alt="" />
              <a href="/recommender">@miriuuu</a>
              
            </div>
          </li>
          <li>
            <span className="sellers-list__number">2</span>
            <div className="sellers-list__author sellers-list__author--verified">
              <img src="assets/img/avatars/avatar2.jpg" alt="" />
              <a href="/recommender">@sc00ty</a>
             
            </div>
          </li>
          <li>
            <span className="sellers-list__number">3</span>
            <div className="sellers-list__author sellers-list__author--verified">
              <img src="assets/img/avatars/avatar3.jpg" alt="" />
              <a href="/recommender">@redalert</a>
              
            </div>
          </li>
          <li>
            <span className="sellers-list__number">4</span>
            <div className="sellers-list__author sellers-list__author--verified">
              <img src="assets/img/avatars/avatar4.jpg" alt="" />
              <a href="/recommender">@1one</a>
             
            </div>
          </li>
          <li>
            <span className="sellers-list__number">5</span>
            <div className="sellers-list__author sellers-list__author--verified">
              <img src="assets/img/avatars/avatar5.jpg" alt="" />
              <a href="/recommender">@kateblank</a>
              
            </div>
          </li>
          <li>
            <span className="sellers-list__number">6</span>
            <div className="sellers-list__author sellers-list__author--verified">
              <img src="assets/img/avatars/avatar6.jpg" alt="" />
              <a href="/recommender">@johndoe</a>
            
            </div>
          </li>
          <li>
            <span className="sellers-list__number">7</span>
            <div className="sellers-list__author sellers-list__author--verified">
              <img src="assets/img/avatars/avatar7.jpg" alt="" />
              <a href="/recommender">@rakesh</a>
             
            </div>
          </li>
          <li>
            <span className="sellers-list__number">8</span>
            <div className="sellers-list__author sellers-list__author--verified">
              <img src="assets/img/avatars/avatar8.jpg" alt="" />
              <a href="/recommender">@lllily</a>
             
            </div>
          </li>
          <li>
            <span className="sellers-list__number">9</span>
            <div className="sellers-list__author sellers-list__author--verified">
              <img src="assets/img/avatars/avatar9.jpg" alt="" />
              <a href="/recommender">@fantraingle</a>
             
            </div>
          </li>
          <li>
            <span className="sellers-list__number">10</span>
            <div className="sellers-list__author sellers-list__author--verified">
              <img src="assets/img/avatars/avatar10.jpg" alt="" />
              <a href="/recommender">@oxyoxyoxy</a>
             
            </div>
          </li>
          <li>
            <span className="sellers-list__number">11</span>
            <div className="sellers-list__author sellers-list__author--verified">
              <img src="assets/img/avatars/avatar11.jpg" alt="" />
              <a href="/recommender">@vandam</a>
              
            </div>
          </li>
          <li>
            <span className="sellers-list__number">12</span>
            <div className="sellers-list__author sellers-list__author--verified">
              <img src="assets/img/avatars/avatar12.jpg" alt="" />
              <a href="/recommender">@dididi</a>
             
            </div>
          </li>
          <li>
            <span className="sellers-list__number">13</span>
            <div className="sellers-list__author sellers-list__author--verified">
              <img src="assets/img/avatars/avatar13.jpg" alt="" />
              <a href="/recommender">@lyzzy</a>
             
            </div>
          </li>
          <li>
            <span className="sellers-list__number">14</span>
            <div className="sellers-list__author sellers-list__author--verified">
              <img src="assets/img/avatars/avatar14.jpg" alt="" />
              <a href="/recommender">@oceanu</a>
             
            </div>
          </li>
          <li>
            <span className="sellers-list__number">15</span>
            <div className="sellers-list__author sellers-list__author--verified">
              <img src="assets/img/avatars/avatar15.jpg" alt="" />
              <a href="/recommender">@justart</a>
              
            </div>
          </li>
        </ul>
      </div>
      {/* end sellers list */}
    </section>
    {/* end top sellers */}
    {/* explore */}
    
    {/* end collections */}
    {/* get started */}
    
    {/* end get started */}
  </div>



        </>
    )
}