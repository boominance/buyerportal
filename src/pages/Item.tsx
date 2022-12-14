export default function Item(){
    return (
        <>
        <div className="container">
  <div className="row row--grid">
    {/* breadcrumb */}
   
    {/* end breadcrumb */}
    {/* title */}
    <div className="col-12">
      <div className="main__title main__title--page">
        <h1>Buy This Stock</h1>
      </div>
    </div>
    {/* end title */}
  </div>
  <div className="row">
    {/* content */}
    <div className="col-12 col-xl-8">
      <div className="asset__item">
        <a className="asset__img" href="assets/img/cover/cover-big.jpg">
          <img src="assets/img/cover/cover-big.jpg" alt="" />
        </a>
        {/* share */}
        <div className="share share--asset">
          <a href="#" className="share__link share__link--fb">
            <svg
              width={9}
              height={17}
              viewBox="0 0 9 17"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M5.56341 16.8197V8.65888H7.81615L8.11468 5.84663H5.56341L5.56724 4.43907C5.56724 3.70559 5.63693 3.31257 6.69042 3.31257H8.09873V0.5H5.84568C3.1394 0.5 2.18686 1.86425 2.18686 4.15848V5.84695H0.499939V8.6592H2.18686V16.8197H5.56341Z" />
            </svg>{" "}
            <span>share</span>
          </a>
          <a href="#" className="share__link share__link--tw">
            <svg
              width={16}
              height={12}
              viewBox="0 0 16 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M7.55075 3.19219L7.58223 3.71122L7.05762 3.64767C5.14804 3.40404 3.47978 2.57782 2.06334 1.1902L1.37085 0.501686L1.19248 1.01013C0.814766 2.14353 1.05609 3.34048 1.843 4.14552C2.26269 4.5904 2.16826 4.65396 1.4443 4.38914C1.19248 4.3044 0.972149 4.24085 0.951164 4.27263C0.877719 4.34677 1.12953 5.31069 1.32888 5.69202C1.60168 6.22165 2.15777 6.74068 2.76631 7.04787L3.28043 7.2915L2.67188 7.30209C2.08432 7.30209 2.06334 7.31268 2.12629 7.53512C2.33613 8.22364 3.16502 8.95452 4.08833 9.2723L4.73884 9.49474L4.17227 9.8337C3.33289 10.321 2.34663 10.5964 1.36036 10.6175C0.888211 10.6281 0.5 10.6705 0.5 10.7023C0.5 10.8082 1.78005 11.4014 2.52499 11.6344C4.75983 12.3229 7.41435 12.0264 9.40787 10.8506C10.8243 10.0138 12.2408 8.35075 12.9018 6.74068C13.2585 5.88269 13.6152 4.315 13.6152 3.56293C13.6152 3.07567 13.6467 3.01212 14.2343 2.42953C14.5805 2.09056 14.9058 1.71983 14.9687 1.6139C15.0737 1.41264 15.0632 1.41264 14.5281 1.59272C13.6362 1.91049 13.5103 1.86812 13.951 1.39146C14.2762 1.0525 14.6645 0.438131 14.6645 0.258058C14.6645 0.22628 14.5071 0.279243 14.3287 0.374576C14.1398 0.480501 13.7202 0.639389 13.4054 0.734722L12.8388 0.914795L12.3247 0.565241C12.0414 0.374576 11.6427 0.162725 11.4329 0.0991699C10.8978 -0.0491255 10.0794 -0.0279404 9.59673 0.14154C8.2852 0.618204 7.45632 1.84694 7.55075 3.19219Z" />
            </svg>{" "}
            <span>tweet</span>
          </a>
          <a href="#" className="share__link share__link--link">
            <svg
              width={18}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M8,12a1,1,0,0,0,1,1h6a1,1,0,0,0,0-2H9A1,1,0,0,0,8,12Zm2,3H7A3,3,0,0,1,7,9h3a1,1,0,0,0,0-2H7A5,5,0,0,0,7,17h3a1,1,0,0,0,0-2Zm7-8H14a1,1,0,0,0,0,2h3a3,3,0,0,1,0,6H14a1,1,0,0,0,0,2h3A5,5,0,0,0,17,7Z" />
            </svg>{" "}
            <span>copy link</span>
          </a>
        </div>
        {/* end share */}
        {/* likes */}
        
        {/* end likes */}
      </div>
    </div>
    {/* end content */}
    {/* sidebar */}
    <div className="col-12 col-xl-4">
      <div className="asset__info">
        <div className="asset__desc">
          <h2>Descriptions</h2>
          <p>
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour.
          </p>
        </div>
        <ul className="asset__authors">
          <li>
            <span>Recommender</span>
            <div className="asset__author asset__author--verified">
              <img src="assets/img/avatars/avatar5.jpg" alt="" />
              <a href="/recommender">@midinh</a>
            </div>
          </li>
          <li>
            <span>Tags</span>
            <div className="asset__author ">
              
              <a href="/item">#Stock</a> <a href="/item">#Swing</a><a href="/item">#Buy</a>
            </div>
          </li>
        </ul>
        {/* tabs */}
        
        
        {/* end tabs */}
        <div className="asset__wrap">
         
          <div className="asset__price">
            <span>Target Price</span>
            <span>INR 245.00</span>
          </div>
          <div className="asset__price">
            <span>Target Period</span>
            <span>20 Days</span>
          </div>
        </div>
        <div className="asset__wrap">
         
          <div className="asset__price">
            <span>Sector</span>
            <span>Pharmaceutical</span>
          </div>
          <div className="asset__price">
            <span>Postion</span>
            <span>20 Days</span>
          </div>
        </div>

        {/* actions */}
        <div className="asset__btns">
          <a
            href="#modal-bid"
            className="asset__btn asset__btn--full asset__btn--clr open-modal"
          >
            Buy Content
          </a>
        </div>
        <div className="asset__btns">
          <a
            href="#modal-bid"
            className="asset__btn asset__btn--full asset__btn--clr open-modal"
          >
            Buy Detailed Analysis
          </a>
        </div>
        {/* end actions */}
      </div>
    </div>
    {/* end sidebar */}
  </div>
  {/* explore */}
 
  {/* end explore */}
</div>

        </>
    )
}