export default function ExploreRecommendations(){
    return (
        <>
        <div className="container">
  <div className="row row--grid">
    {/* breadcrumb */}
    <div className="col-12">
      <ul className="breadcrumb">
        <li className="breadcrumb__item">
          <a href="/">Home</a>
        </li>
        <li className="breadcrumb__item breadcrumb__item--active">Explore</li>
      </ul>
    </div>
    {/* end breadcrumb */}
    {/* title */}
    <div className="col-12">
      <div className="main__title main__title--page">
        <h1>Explore exclusive Recommendations</h1>
      </div>
    </div>
    {/* end title */}
    {/* filter */}
    <div className="col-12">
      <div className="main__filter">
        <form action="#" className="main__filter-search">
          <input type="text" placeholder="Search..." />
          <button type="button">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path d="M21.71,20.29,18,16.61A9,9,0,1,0,16.61,18l3.68,3.68a1,1,0,0,0,1.42,0A1,1,0,0,0,21.71,20.29ZM11,18a7,7,0,1,1,7-7A7,7,0,0,1,11,18Z" />
            </svg>
          </button>
        </form>
        <div className="main__filter-wrap">
          <select className="main__select" name="status">
            <option value="now">Buy Stocks</option>
            <option value="new">Sell Stocks</option>
            <option value="auction">Buy Crypto</option>
            <option value="offers">Sell Crypto</option>
          </select>
          <select className="main__select" name="category">
            <option value="All genres">All categories</option>
            <option value={1}>Swing</option>
            <option value={2}>Position</option>
            <option value={3}>Intraday</option>
            <option value={4}>Scalping</option>
           
          </select>
        </div>
      </div>
    </div>
    {/* end filter */}
  </div>
  <div className="row row--grid">
    <div className="col-12 col-sm-6 col-lg-4 col-xl-3">
      {/* card */}
      <div className="card">
                      <a href="/item" className="card__cover open-modal">
                <img src="assets/img/cover/cover3.jpg" alt="" />
               
              </a>
              <h3 className="card__title">
                <a href="/item" className="open-modal">
                 Buy this Stock
                </a>
              </h3>
              <div className="card__author card__author--verified">
                <img src="assets/img/avatars/avatar5.jpg" alt="" />
                <a href="/recommender">@nickname</a>
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
      {/* end card */}
    </div>
    <div className="col-12 col-sm-6 col-lg-4 col-xl-3">
      {/* carousel card */}
      <div className="card">
                      <a href="/item" className="card__cover open-modal">
                <img src="assets/img/cover/cover3.jpg" alt="" />
               
              </a>
              <h3 className="card__title">
                <a href="/item" className="open-modal">
                 Buy this Stock
                </a>
              </h3>
              <div className="card__author card__author--verified">
                <img src="assets/img/avatars/avatar5.jpg" alt="" />
                <a href="/recommender">@nickname</a>
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
      {/* end carousel card */}
    </div>
    <div className="col-12 col-sm-6 col-lg-4 col-xl-3">
      {/* card */}
      <div className="card">
                      <a href="/item" className="card__cover open-modal">
                <img src="assets/img/cover/cover3.jpg" alt="" />
               
              </a>
              <h3 className="card__title">
                <a href="/item" className="open-modal">
                 Buy this Stock
                </a>
              </h3>
              <div className="card__author card__author--verified">
                <img src="assets/img/avatars/avatar5.jpg" alt="" />
                <a href="/recommender">@nickname</a>
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
      {/* end card */}
    </div>
    <div className="col-12 col-sm-6 col-lg-4 col-xl-3">
      {/* card */}
      <div className="card">
                      <a href="/item" className="card__cover open-modal">
                <img src="assets/img/cover/cover3.jpg" alt="" />
               
              </a>
              <h3 className="card__title">
                <a href="/item" className="open-modal">
                 Buy this Stock
                </a>
              </h3>
              <div className="card__author card__author--verified">
                <img src="assets/img/avatars/avatar5.jpg" alt="" />
                <a href="/recommender">@nickname</a>
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
      {/* end card */}
    </div>
    <div className="col-12 col-sm-6 col-lg-4 col-xl-3">
      {/* card */}
      <div className="card">
                      <a href="/item" className="card__cover open-modal">
                <img src="assets/img/cover/cover3.jpg" alt="" />
               
              </a>
              <h3 className="card__title">
                <a href="/item" className="open-modal">
                 Buy this Stock
                </a>
              </h3>
              <div className="card__author card__author--verified">
                <img src="assets/img/avatars/avatar5.jpg" alt="" />
                <a href="/recommender">@nickname</a>
              </div>
              <div className="card__info">
               
                <a
            href="/item"
            className="asset__btn asset__btn--full asset__btn--clr "
          >
            View Details
          </a>
                        </div>
                      </div>      {/* end card */}
    </div>
    <div className="col-12 col-sm-6 col-lg-4 col-xl-3">
      {/* card */}
      <div className="card">
                      <a href="/item" className="card__cover open-modal">
                <img src="assets/img/cover/cover3.jpg" alt="" />
               
              </a>
              <h3 className="card__title">
                <a href="/item" className="open-modal">
                 Buy this Stock
                </a>
              </h3>
              <div className="card__author card__author--verified">
                <img src="assets/img/avatars/avatar5.jpg" alt="" />
                <a href="/recommender">@nickname</a>
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
      {/* end card */}
    </div>
    <div className="col-12 col-sm-6 col-lg-4 col-xl-3">
      {/* video card */}
      <div className="card">
                      <a href="/item" className="card__cover open-modal">
                <img src="assets/img/cover/cover3.jpg" alt="" />
               
              </a>
              <h3 className="card__title">
                <a href="/item" className="open-modal">
                 Buy this Stock
                </a>
              </h3>
              <div className="card__author card__author--verified">
                <img src="assets/img/avatars/avatar5.jpg" alt="" />
                <a href="/recommender">@nickname</a>
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
      {/* end video card */}
    </div>
    <div className="col-12 col-sm-6 col-lg-4 col-xl-3">
      {/* card */}
      <div className="card">
                      <a href="/item" className="card__cover open-modal">
                <img src="assets/img/cover/cover3.jpg" alt="" />
               
              </a>
              <h3 className="card__title">
                <a href="/item" className="open-modal">
                 Buy this Stock
                </a>
              </h3>
              <div className="card__author card__author--verified">
                <img src="assets/img/avatars/avatar5.jpg" alt="" />
                <a href="/recommender">@nickname</a>
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
      {/* end card */}
    </div>
  </div>
  {/* paginator */}
  <div className="row row--grid">
    <div className="col-12">
      <div className="paginator">
        <span className="paginator__pages">8 from 169</span>
        <ul className="paginator__list">
          <li>
            <a href="#">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path d="M17,11H9.41l3.3-3.29a1,1,0,1,0-1.42-1.42l-5,5a1,1,0,0,0-.21.33,1,1,0,0,0,0,.76,1,1,0,0,0,.21.33l5,5a1,1,0,0,0,1.42,0,1,1,0,0,0,0-1.42L9.41,13H17a1,1,0,0,0,0-2Z" />
              </svg>
            </a>
          </li>
          <li className="active">
            <a href="#">1</a>
          </li>
          <li>
            <a href="#">2</a>
          </li>
          <li>
            <a href="#">3</a>
          </li>
          <li>
            <a href="#">4</a>
          </li>
          <li>
            <a href="#">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path d="M17.92,11.62a1,1,0,0,0-.21-.33l-5-5a1,1,0,0,0-1.42,1.42L14.59,11H7a1,1,0,0,0,0,2h7.59l-3.3,3.29a1,1,0,0,0,0,1.42,1,1,0,0,0,1.42,0l5-5a1,1,0,0,0,.21-.33A1,1,0,0,0,17.92,11.62Z" />
              </svg>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
  {/* end paginator */}
</div>

        </>
    )
}