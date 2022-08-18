export default function Recommender(){
    return(
        <><>
        <div className="main__author" style={{"background": "assets/img/bg/bg.png" }} />
        <div className="container">
          <div className="row row--grid">
            <div className="col-12 col-xl-3">
              <div className="author author--page">
                <div className="author__meta">
                  <a
                    href="author.html"
                    className="author__avatar author__avatar--verified"
                  >
                    <img src="assets/img/avatars/avatar5.jpeg" width={350} height={150} alt="" />
                  </a>
                  <h1 className="author__name">
                    <a href="author.html">Rakesh Jhunjhunwala</a>
                  </h1>
                  <h2 className="author__nickname">
                    <a href="author.html">@rakesh</a>
                  </h2>
                  <p className="author__text">
                  Indian stock trader
                  </p>
                
                  <div className="author__wrap">
                    <div className="author__followers">
                      <p>3829</p>
                      <span>Followers</span>
                    </div>
                    <button className="author__follow" type="button">
                      Follow
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-xl-9">
              <div className="profile">
                {/* tabs nav */}
                <ul
                  className="nav nav-tabs profile__tabs"
                  id="profile__tabs"
                  role="tablist"
                >
                  <li className="nav-item">
                    <a
                      className="nav-link active"
                      data-toggle="tab"
                      href="#tab-1"
                      role="tab"
                      aria-controls="tab-1"
                      aria-selected="true"
                    >
                      Highest Sales
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link"
                      data-toggle="tab"
                      href="#tab-2"
                      role="tab"
                      aria-controls="tab-2"
                      aria-selected="false"
                    >
                      Latest
                    </a>
                  </li>
                  
                 
                </ul>
                {/* end tabs nav */}
              </div>
              {/* content tabs */}
              <div className="tab-content">
                <div className="tab-pane fade show active" id="tab-1" role="tabpanel">
                  <div className="row row--grid">
                    <div className="col-12 col-sm-6 col-lg-4">
                      {/* card */}
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
                    <div className="col-12 col-sm-6 col-lg-4">
                      {/* carousel card */}
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
                    <div className="col-12 col-sm-6 col-lg-4">
                      {/* card */}
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
                    <div className="col-12 col-sm-6 col-lg-4">
                      {/* card */}
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
                    <div className="col-12 col-sm-6 col-lg-4">
                      {/* card */}
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
                    <div className="col-12 col-sm-6 col-lg-4">
                      {/* card */}
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
                  {/* collapse */}
                  <div className="row row--grid collapse" id="collapsemore">
                    <div className="col-12 col-sm-6 col-lg-4">
                      {/* card */}
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
                    <div className="col-12 col-sm-6 col-lg-4">
                      {/* carousel card */}
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
                    <div className="col-12 col-sm-6 col-lg-4">
                      {/* card */}
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
                    <div className="col-12 col-sm-6 col-lg-4">
                      {/* card */}
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
                    <div className="col-12 col-sm-6 col-lg-4">
                      {/* card */}
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
                    <div className="col-12 col-sm-6 col-lg-4">
                      {/* card */}
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
                  <div className="row row--grid">
                    <div className="col-12">
                      <button
                        className="main__load"
                        type="button"
                        data-toggle="collapse"
                        data-target="#collapsemore"
                        aria-expanded="false"
                        aria-controls="collapsemore"
                      >
                        Load more
                      </button>
                    </div>
                  </div>
                  {/* end collapse */}
                </div>
                <div className="tab-pane fade" id="tab-2" role="tabpanel">
                  <div className="row row--grid">
                  <div className="col-12 col-sm-6 col-lg-4">
                      {/* card */}
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
                    <div className="col-12 col-sm-6 col-lg-4">
                      {/* carousel card */}
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
                    <div className="col-12 col-sm-6 col-lg-4">
                      {/* card */}
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
                    <div className="col-12 col-sm-6 col-lg-4">
                      {/* card */}
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
                    <div className="col-12 col-sm-6 col-lg-4">
                      {/* card */}
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
                    <div className="col-12 col-sm-6 col-lg-4">
                      {/* card */}
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
                  {/* collapse */}
                  <div className="row row--grid collapse" id="collapsemore">
                    <div className="col-12 col-sm-6 col-lg-4">
                      {/* card */}
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
                    <div className="col-12 col-sm-6 col-lg-4">
                      {/* carousel card */}
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
                    <div className="col-12 col-sm-6 col-lg-4">
                      {/* card */}
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
                    <div className="col-12 col-sm-6 col-lg-4">
                      {/* card */}
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
                    <div className="col-12 col-sm-6 col-lg-4">
                      {/* card */}
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
                    <div className="col-12 col-sm-6 col-lg-4">
                      {/* card */}
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
                  <div className="row row--grid">
                    <div className="col-12">
                      <button
                        className="main__load"
                        type="button"
                        data-toggle="collapse"
                        data-target="#collapsemore"
                        aria-expanded="false"
                        aria-controls="collapsemore"
                      >
                        Load more
                      </button>
                    </div>
                  </div>
                  {/* end paginator */}
                </div>
                <div className="tab-pane fade" id="tab-3" role="tabpanel">
                  <div className="row">
                    {/* sidebar */}
                    <div className="col-12 col-xl-4 order-xl-2">
                      <div className="filter-wrap">
                        <button
                          className="filter-wrap__btn"
                          type="button"
                          data-toggle="collapse"
                          data-target="#collapseFilter"
                          aria-expanded="false"
                          aria-controls="collapseFilter"
                        >
                          Open filter
                        </button>
                        <div
                          className="collapse filter-wrap__content"
                          id="collapseFilter"
                        >
                          {/* filter */}
                          <div className="filter filter--sticky">
                            <h4 className="filter__title">
                              Filters <button type="button">Clear all</button>
                            </h4>
                            <div className="filter__group">
                              <ul className="filter__checkboxes">
                                <li>
                                  <input
                                    id="type5"
                                    type="checkbox"
                                    name="type5"
                                    
                                  />
                                  <label htmlFor="type5">Listings</label>
                                </li>
                                <li>
                                  <input id="type6" type="checkbox" name="type6" />
                                  <label htmlFor="type6">Purchases</label>
                                </li>
                                <li>
                                  <input
                                    id="type7"
                                    type="checkbox"
                                    name="type7"
                                    
                                  />
                                  <label htmlFor="type7">Sales</label>
                                </li>
                                <li>
                                  <input
                                    id="type8"
                                    type="checkbox"
                                    name="type8"
                                    
                                  />
                                  <label htmlFor="type8">Transfers</label>
                                </li>
                                <li>
                                  <input id="type9" type="checkbox" name="type9" />
                                  <label htmlFor="type9">Bids</label>
                                </li>
                                <li>
                                  <input id="type10" type="checkbox" name="type10" />
                                  <label htmlFor="type10">Likes</label>
                                </li>
                                <li>
                                  <input id="type11" type="checkbox" name="type11" />
                                  <label htmlFor="type11">Followings</label>
                                </li>
                              </ul>
                            </div>
                          </div>
                          {/* end filter */}
                        </div>
                      </div>
                    </div>
                    {/* end sidebar */}
                    {/* content */}
                    <div className="col-12 col-xl-8 order-xl-1">
                      <div className="row row--grid">
                        <div className="col-12 col-lg-6 col-xl-12">
                          <div className="activity">
                            <a href="item.html" className="activity__cover">
                              <img src="assets/img/cover/cover1.jpg" alt="" />
                            </a>
                            <div className="activity__content">
                              <h3 className="activity__title">
                                <a href="item.html">Walking on Air</a>
                              </h3>
                              <p className="activity__text">
                                listed by <a href="author.html">@Nickname</a> <br />
                                for <b>0.049 ETH</b>
                              </p>
                              <span className="activity__time">4 minutes ago</span>
                            </div>
                          </div>
                        </div>
                        <div className="col-12 col-lg-6 col-xl-12">
                          <div className="activity">
                            <a href="item.html" className="activity__cover">
                              <img src="assets/img/cover/cover2.jpg" alt="" />
                            </a>
                            <div className="activity__content">
                              <h3 className="activity__title">
                                <a href="item.html">To Infinity And Beyond</a>
                              </h3>
                              <p className="activity__text">
                                9 editions listed by <a href="author.html">@neo</a>{" "}
                                <br />
                                for <b>0.085 ETH</b> each
                              </p>
                              <span className="activity__time">21 minutes ago</span>
                            </div>
                          </div>
                        </div>
                        <div className="col-12 col-lg-6 col-xl-12">
                          <div className="activity">
                            <a href="item.html" className="activity__cover">
                              <img src="assets/img/cover/cover3.jpg" alt="" />
                            </a>
                            <div className="activity__content">
                              <h3 className="activity__title">
                                <a href="item.html">Flowers in Concrete</a>
                              </h3>
                              <p className="activity__text">
                                purchased by <a href="author.html">@johndoe</a>{" "}
                                <b>0x23d2dc92b...82c6</b> for <b>0.011 ETH</b> from{" "}
                                <a href="author.html">@min1max</a>
                              </p>
                              <span className="activity__time">21 minutes ago</span>
                            </div>
                          </div>
                        </div>
                        <div className="col-12 col-lg-6 col-xl-12">
                          <div className="activity">
                            <a href="item.html" className="activity__cover">
                              <img src="assets/img/cover/cover4.jpg" alt="" />
                            </a>
                            <div className="activity__content">
                              <h3 className="activity__title">
                                <a href="item.html">Industrial Revolution</a>
                              </h3>
                              <p className="activity__text">
                                transferred from <a href="author.html">@midinh</a>{" "}
                                <br />
                                to <a href="author.html">@johndoe</a>
                              </p>
                              <span className="activity__time">23 minutes ago</span>
                            </div>
                          </div>
                        </div>
                        <div className="col-12 col-lg-6 col-xl-12">
                          <div className="activity">
                            <a href="item.html" className="activity__cover">
                              <img src="assets/img/cover/cover5.jpg" alt="" />
                            </a>
                            <div className="activity__content">
                              <h3 className="activity__title">
                                <a href="item.html">Tranquility</a>
                              </h3>
                              <p className="activity__text">
                                <a href="author.html">@aaarthur</a> offered{" "}
                                <b>0.002 WETH</b>
                              </p>
                              <span className="activity__time">41 minutes ago</span>
                            </div>
                          </div>
                        </div>
                        <div className="col-12 col-lg-6 col-xl-12">
                          <div className="activity">
                            <a href="item.html" className="activity__cover">
                              <img src="assets/img/cover/cover6.jpg" alt="" />
                            </a>
                            <div className="activity__content">
                              <h3 className="activity__title">
                                <a href="item.html">Tetradecapus</a>
                              </h3>
                              <p className="activity__text">
                                liked by <a href="author.html">@johndoe</a>
                              </p>
                              <span className="activity__time">45 minutes ago</span>
                            </div>
                          </div>
                        </div>
                        <div className="col-12 col-lg-6 col-xl-12">
                          <div className="activity">
                            <a href="item.html" className="activity__cover">
                              <img src="assets/img/cover/cover7.jpg" alt="" />
                            </a>
                            <div className="activity__content">
                              <h3 className="activity__title">
                                <a href="item.html">Elegance</a>
                              </h3>
                              <p className="activity__text">
                                started following <a href="author.html">@johndoe</a>
                              </p>
                              <span className="activity__time">48 minutes ago</span>
                            </div>
                          </div>
                        </div>
                        <div className="col-12 col-lg-6 col-xl-12">
                          <div className="activity">
                            <a href="item.html" className="activity__cover">
                              <img src="assets/img/cover/cover8.jpg" alt="" />
                            </a>
                            <div className="activity__content">
                              <h3 className="activity__title">
                                <a href="item.html">Walking on Air</a>
                              </h3>
                              <p className="activity__text">
                                started following <a href="author.html">@johndoe</a>
                              </p>
                              <span className="activity__time">49 minutes ago</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* collapse */}
                      <div className="row row--grid collapse" id="collapsemore1">
                        <div className="col-12 col-lg-6 col-xl-12">
                          <div className="activity">
                            <a href="item.html" className="activity__cover">
                              <img src="assets/img/cover/cover1.jpg" alt="" />
                            </a>
                            <div className="activity__content">
                              <h3 className="activity__title">
                                <a href="item.html">Walking on Air</a>
                              </h3>
                              <p className="activity__text">
                                listed by <a href="author.html">@Nickname</a> <br />
                                for <b>0.049 ETH</b>
                              </p>
                              <span className="activity__time">4 minutes ago</span>
                            </div>
                          </div>
                        </div>
                        <div className="col-12 col-lg-6 col-xl-12">
                          <div className="activity">
                            <a href="item.html" className="activity__cover">
                              <img src="assets/img/cover/cover2.jpg" alt="" />
                            </a>
                            <div className="activity__content">
                              <h3 className="activity__title">
                                <a href="item.html">To Infinity And Beyond</a>
                              </h3>
                              <p className="activity__text">
                                9 editions listed by <a href="author.html">@neo</a>{" "}
                                <br />
                                for <b>0.085 ETH</b> each
                              </p>
                              <span className="activity__time">21 minutes ago</span>
                            </div>
                          </div>
                        </div>
                        <div className="col-12 col-lg-6 col-xl-12">
                          <div className="activity">
                            <a href="item.html" className="activity__cover">
                              <img src="assets/img/cover/cover3.jpg" alt="" />
                            </a>
                            <div className="activity__content">
                              <h3 className="activity__title">
                                <a href="item.html">Flowers in Concrete</a>
                              </h3>
                              <p className="activity__text">
                                purchased by <a href="author.html">@johndoe</a>{" "}
                                <b>0x23d2dc92b...82c6</b> for <b>0.011 ETH</b> from{" "}
                                <a href="author.html">@min1max</a>
                              </p>
                              <span className="activity__time">21 minutes ago</span>
                            </div>
                          </div>
                        </div>
                        <div className="col-12 col-lg-6 col-xl-12">
                          <div className="activity">
                            <a href="item.html" className="activity__cover">
                              <img src="assets/img/cover/cover4.jpg" alt="" />
                            </a>
                            <div className="activity__content">
                              <h3 className="activity__title">
                                <a href="item.html">Industrial Revolution</a>
                              </h3>
                              <p className="activity__text">
                                transferred from <a href="author.html">@midinh</a>{" "}
                                <br />
                                to <a href="author.html">@johndoe</a>
                              </p>
                              <span className="activity__time">23 minutes ago</span>
                            </div>
                          </div>
                        </div>
                        <div className="col-12 col-lg-6 col-xl-12">
                          <div className="activity">
                            <a href="item.html" className="activity__cover">
                              <img src="assets/img/cover/cover5.jpg" alt="" />
                            </a>
                            <div className="activity__content">
                              <h3 className="activity__title">
                                <a href="item.html">Tranquility</a>
                              </h3>
                              <p className="activity__text">
                                <a href="author.html">@aaarthur</a> offered{" "}
                                <b>0.002 WETH</b>
                              </p>
                              <span className="activity__time">41 minutes ago</span>
                            </div>
                          </div>
                        </div>
                        <div className="col-12 col-lg-6 col-xl-12">
                          <div className="activity">
                            <a href="item.html" className="activity__cover">
                              <img src="assets/img/cover/cover6.jpg" alt="" />
                            </a>
                            <div className="activity__content">
                              <h3 className="activity__title">
                                <a href="item.html">Tetradecapus</a>
                              </h3>
                              <p className="activity__text">
                                liked by <a href="author.html">@johndoe</a>
                              </p>
                              <span className="activity__time">45 minutes ago</span>
                            </div>
                          </div>
                        </div>
                        <div className="col-12 col-lg-6 col-xl-12">
                          <div className="activity">
                            <a href="item.html" className="activity__cover">
                              <img src="assets/img/cover/cover7.jpg" alt="" />
                            </a>
                            <div className="activity__content">
                              <h3 className="activity__title">
                                <a href="item.html">Elegance</a>
                              </h3>
                              <p className="activity__text">
                                started following <a href="author.html">@johndoe</a>
                              </p>
                              <span className="activity__time">48 minutes ago</span>
                            </div>
                          </div>
                        </div>
                        <div className="col-12 col-lg-6 col-xl-12">
                          <div className="activity">
                            <a href="item.html" className="activity__cover">
                              <img src="assets/img/cover/cover8.jpg" alt="" />
                            </a>
                            <div className="activity__content">
                              <h3 className="activity__title">
                                <a href="item.html">Walking on Air</a>
                              </h3>
                              <p className="activity__text">
                                started following <a href="author.html">@johndoe</a>
                              </p>
                              <span className="activity__time">49 minutes ago</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="row row--grid">
                        <div className="col-12">
                          <button
                            className="main__load"
                            type="button"
                            data-toggle="collapse"
                            data-target="#collapsemore1"
                            aria-expanded="false"
                            aria-controls="collapsemore1"
                          >
                            Load more
                          </button>
                        </div>
                      </div>
                      {/* end collapse */}
                    </div>
                    {/* end content */}
                  </div>
                </div>
                <div className="tab-pane fade" id="tab-4" role="tabpanel">
                  <div className="row row--grid">
                    {/* details form */}
                    <div className="col-12 col-lg-6">
                      <form action="#" className="sign__form sign__form--profile">
                        <div className="row">
                          <div className="col-12">
                            <h4 className="sign__title">Profile details</h4>
                          </div>
                          <div className="col-12 col-md-6 col-lg-12 col-xl-6">
                            <div className="sign__group">
                              <label className="sign__label" htmlFor="username">
                                Login
                              </label>
                              <input
                                id="username"
                                type="text"
                                name="username"
                                className="sign__input"
                                placeholder="User123"
                              />
                            </div>
                          </div>
                          <div className="col-12 col-md-6 col-lg-12 col-xl-6">
                            <div className="sign__group">
                              <label className="sign__label" htmlFor="email">
                                Email
                              </label>
                              <input
                                id="email"
                                type="text"
                                name="email"
                                className="sign__input"
                                placeholder="email@email.com"
                              />
                            </div>
                          </div>
                          <div className="col-12 col-md-6 col-lg-12 col-xl-6">
                            <div className="sign__group">
                              <label className="sign__label" htmlFor="firstname">
                                First name
                              </label>
                              <input
                                id="firstname"
                                type="text"
                                name="firstname"
                                className="sign__input"
                                placeholder="John"
                              />
                            </div>
                          </div>
                          <div className="col-12 col-md-6 col-lg-12 col-xl-6">
                            <div className="sign__group">
                              <label className="sign__label" htmlFor="lastname">
                                Last name
                              </label>
                              <input
                                id="lastname"
                                type="text"
                                name="lastname"
                                className="sign__input"
                                placeholder="Doe"
                              />
                            </div>
                          </div>
                          <div className="col-12">
                            <button className="sign__btn" type="button">
                              Save
                            </button>
                          </div>
                        </div>
                      </form>
                    </div>
                    {/* end details form */}
                    {/* password form */}
                    <div className="col-12 col-lg-6">
                      <form action="#" className="sign__form sign__form--profile">
                        <div className="row">
                          <div className="col-12">
                            <h4 className="sign__title">Change password</h4>
                          </div>
                          <div className="col-12 col-md-6 col-lg-12 col-xl-6">
                            <div className="sign__group">
                              <label className="sign__label" htmlFor="oldpass">
                                Old password
                              </label>
                              <input
                                id="oldpass"
                                type="password"
                                name="oldpass"
                                className="sign__input"
                              />
                            </div>
                          </div>
                          <div className="col-12 col-md-6 col-lg-12 col-xl-6">
                            <div className="sign__group">
                              <label className="sign__label" htmlFor="newpass">
                                New password
                              </label>
                              <input
                                id="newpass"
                                type="password"
                                name="newpass"
                                className="sign__input"
                              />
                            </div>
                          </div>
                          <div className="col-12 col-md-6 col-lg-12 col-xl-6">
                            <div className="sign__group">
                              <label className="sign__label" htmlFor="confirmpass">
                                Confirm new password
                              </label>
                              <input
                                id="confirmpass"
                                type="password"
                                name="confirmpass"
                                className="sign__input"
                              />
                            </div>
                          </div>
                          <div className="col-12 col-md-6 col-lg-12 col-xl-6">
                            <div className="sign__group">
                              <label className="sign__label" htmlFor="select">
                                Select
                              </label>
                              <select
                                name="select"
                                id="select"
                                className="sign__select"
                              >
                                <option value={0}>Option</option>
                                <option value={1}>Option 2</option>
                                <option value={2}>Option 3</option>
                                <option value={3}>Option 4</option>
                              </select>
                            </div>
                          </div>
                          <div className="col-12">
                            <button className="sign__btn" type="button">
                              Change
                            </button>
                          </div>
                        </div>
                      </form>
                    </div>
                    {/* end password form */}
                  </div>
                </div>
              </div>
              {/* end content tabs */}
            </div>
          </div>
        </div>
      </>
      </>
    )
}