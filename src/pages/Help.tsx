export default function Help(){
    return (
        <>
        <div className="container">

        
  <div className="row row--grid">
    {/* breadcrumb */}
    <div className="col-12">
      <ul className="breadcrumb">
        <li className="breadcrumb__item">
          <a href="index.html">Home</a>
        </li>
        <li className="breadcrumb__item breadcrumb__item--active">Help and Support</li>
      </ul>
    </div>
    {/* end breadcrumb */}
    {/* title */}
    <div className="col-12">
      <div className="main__title main__title--page">
        <h1>Help and Support</h1>
      </div>
    </div>
    {/* end title */}
  </div>
  <div className="row row--grid">
    <div className="col-12 col-lg-7 col-xl-8">
      <form action="#" className="sign__form sign__form--contacts">
        <div className="row">
          <div className="col-12 col-md-6">
            <div className="sign__group">
              <input
                type="text"
                name="name"
                className="sign__input"
                placeholder="Name"
              />
            </div>
          </div>
          <div className="col-12 col-md-6">
            <div className="sign__group">
              <input
                type="text"
                name="email"
                className="sign__input"
                placeholder="Email"
              />
            </div>
          </div>
          <div className="col-12">
            <div className="sign__group">
              <input
                type="text"
                name="subject"
                className="sign__input"
                placeholder="Subject"
              />
            </div>
          </div>
          <div className="col-12">
            <div className="sign__group">
              <textarea
                name="text"
                className="sign__textarea"
                placeholder="Type your message"
                defaultValue={""}
              />
            </div>
          </div>
          <div className="col-12 col-xl-3">
            <button type="button" className="sign__btn">
              Send
            </button>
          </div>
        </div>
      </form>
    </div>
    <div className="col-12 col-md-6 col-lg-5 col-xl-4">
      <div className="main__title main__title--sidebar">
        <h2>Info</h2>
        <p>
          It is a long fact that a reader will be distracted by the readable
          content of a page when looking at its layout
        </p>
      </div>
      <ul className="contacts__list">
       
        <li>
          <a href="mailto: contact@boominance.com">contact@boominance.com</a>
        </li>
        <li>
          <a
            href=""
            className="open-map"
          >
            #759 8th main road Sree Gururaya Mansion, 3rd floor, 2nd phase JP nagar Bangalore 560078.
          </a>
        </li>
      </ul>
      <div className="contacts__social">
        <a href="#" target="_blank">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path d="M20.9,2H3.1A1.1,1.1,0,0,0,2,3.1V20.9A1.1,1.1,0,0,0,3.1,22h9.58V14.25h-2.6v-3h2.6V9a3.64,3.64,0,0,1,3.88-4,20.26,20.26,0,0,1,2.33.12v2.7H17.3c-1.26,0-1.5.6-1.5,1.47v1.93h3l-.39,3H15.8V22h5.1A1.1,1.1,0,0,0,22,20.9V3.1A1.1,1.1,0,0,0,20.9,2Z" />
          </svg>
        </a>
      
        <a href="#" target="_blank">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path d="M17.34,5.46h0a1.2,1.2,0,1,0,1.2,1.2A1.2,1.2,0,0,0,17.34,5.46Zm4.6,2.42a7.59,7.59,0,0,0-.46-2.43,4.94,4.94,0,0,0-1.16-1.77,4.7,4.7,0,0,0-1.77-1.15,7.3,7.3,0,0,0-2.43-.47C15.06,2,14.72,2,12,2s-3.06,0-4.12.06a7.3,7.3,0,0,0-2.43.47A4.78,4.78,0,0,0,3.68,3.68,4.7,4.7,0,0,0,2.53,5.45a7.3,7.3,0,0,0-.47,2.43C2,8.94,2,9.28,2,12s0,3.06.06,4.12a7.3,7.3,0,0,0,.47,2.43,4.7,4.7,0,0,0,1.15,1.77,4.78,4.78,0,0,0,1.77,1.15,7.3,7.3,0,0,0,2.43.47C8.94,22,9.28,22,12,22s3.06,0,4.12-.06a7.3,7.3,0,0,0,2.43-.47,4.7,4.7,0,0,0,1.77-1.15,4.85,4.85,0,0,0,1.16-1.77,7.59,7.59,0,0,0,.46-2.43c0-1.06.06-1.4.06-4.12S22,8.94,21.94,7.88ZM20.14,16a5.61,5.61,0,0,1-.34,1.86,3.06,3.06,0,0,1-.75,1.15,3.19,3.19,0,0,1-1.15.75,5.61,5.61,0,0,1-1.86.34c-1,.05-1.37.06-4,.06s-3,0-4-.06A5.73,5.73,0,0,1,6.1,19.8,3.27,3.27,0,0,1,5,19.05a3,3,0,0,1-.74-1.15A5.54,5.54,0,0,1,3.86,16c0-1-.06-1.37-.06-4s0-3,.06-4A5.54,5.54,0,0,1,4.21,6.1,3,3,0,0,1,5,5,3.14,3.14,0,0,1,6.1,4.2,5.73,5.73,0,0,1,8,3.86c1,0,1.37-.06,4-.06s3,0,4,.06a5.61,5.61,0,0,1,1.86.34A3.06,3.06,0,0,1,19.05,5,3.06,3.06,0,0,1,19.8,6.1,5.61,5.61,0,0,1,20.14,8c.05,1,.06,1.37.06,4S20.19,15,20.14,16ZM12,6.87A5.13,5.13,0,1,0,17.14,12,5.12,5.12,0,0,0,12,6.87Zm0,8.46A3.33,3.33,0,1,1,15.33,12,3.33,3.33,0,0,1,12,15.33Z" />
          </svg>
        </a>
        <a href="#" target="_blank">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path d="M22,5.8a8.49,8.49,0,0,1-2.36.64,4.13,4.13,0,0,0,1.81-2.27,8.21,8.21,0,0,1-2.61,1,4.1,4.1,0,0,0-7,3.74A11.64,11.64,0,0,1,3.39,4.62a4.16,4.16,0,0,0-.55,2.07A4.09,4.09,0,0,0,4.66,10.1,4.05,4.05,0,0,1,2.8,9.59v.05a4.1,4.1,0,0,0,3.3,4A3.93,3.93,0,0,1,5,13.81a4.9,4.9,0,0,1-.77-.07,4.11,4.11,0,0,0,3.83,2.84A8.22,8.22,0,0,1,3,18.34a7.93,7.93,0,0,1-1-.06,11.57,11.57,0,0,0,6.29,1.85A11.59,11.59,0,0,0,20,8.45c0-.17,0-.35,0-.53A8.43,8.43,0,0,0,22,5.8Z" />
          </svg>
        </a>
       
        <a href="mailto: contact@boominance.com">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path d="M19,4H5A3,3,0,0,0,2,7V17a3,3,0,0,0,3,3H19a3,3,0,0,0,3-3V7A3,3,0,0,0,19,4Zm-.41,2-5.88,5.88a1,1,0,0,1-1.42,0L5.41,6ZM20,17a1,1,0,0,1-1,1H5a1,1,0,0,1-1-1V7.41l5.88,5.88a3,3,0,0,0,4.24,0L20,7.41Z" />
          </svg>
        </a>
      </div>
    </div>
  </div>
  </div>

        </>
    )
}