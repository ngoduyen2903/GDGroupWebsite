import React from 'react'
import { useNavigate } from 'react-router-dom'
import Footer from '../../components/Footer'
import Countdown from 'react-countdown'
import Navbar from '../../components/Navbar'
import StyleSwitcher from '../../components/StyleSwitcher'
import {
  sp1, sp2, sp3, sp4,
  bg01,
  item1,
  item2,
  item3,
  item4,
  item5,
  item6,
  item7,
  item8,
  item9,
  item10,
  gif1,
  gif2,
  gif3,
  gif4,
  gif5,
  gif6,
  cta,
  client05,
  client06,
  client08,
} from '../../components/imageImport'

const ExploreFour = () => {
  const navigate = useNavigate()

  const AuctionData = [
    {
      image: sp1,
      title: 'Xích đu ngoài trời',
      id: 'May 29, 2022 6:0:0',
      type: 'Đồ chơi mầm non ngoài trời',
      price: "Liên hệ"
    },

    {
      image: sp2,
      title: 'Xích đu 2 chỗ',
      id: '',
      type: 'Đồ chơi mầm non ngoài trời',
      price: "Liên hệ"
    },

    {
      image: sp3,
      title: 'Cầu trượt 2 máng song song',
      id: '',
      type: 'Đồ chơi mầm non ngoài trời',
      price: "Liên hệ"
    },

    {
      image: sp4,
      title: 'Bộ vận động thể chất',
      id: '',
      type: 'Đồ chơi mầm non ngoài trời',
      price: "Liên hệ"
    },
    {
      image: sp1,
      title: 'Xích đu ngoài trời',
      id: 'May 29, 2022 6:0:0',
      type: 'Đồ chơi mầm non ngoài trời',
      price: "Liên hệ"
    },

    {
      image: sp2,
      title: 'Xích đu 2 chỗ',
      id: '',
      type: 'Đồ chơi mầm non ngoài trời',
      price: "Liên hệ"
    },

    {
      image: sp3,
      title: 'Cầu trượt 2 máng song song',
      id: '',
      type: 'Đồ chơi mầm non ngoài trời',
      price: "Liên hệ"
    },

    {
      image: sp4,
      title: 'Bộ vận động thể chất',
      id: '',
      type: 'Đồ chơi mầm non ngoài trời',
      price: "Liên hệ"
    },
    {
      image: sp1,
      title: 'Xích đu ngoài trời',
      id: 'May 29, 2022 6:0:0',
      type: 'Đồ chơi mầm non ngoài trời',
      price: "Liên hệ"
    },

    {
      image: sp2,
      title: 'Xích đu 2 chỗ',
      id: '',
      type: 'Đồ chơi mầm non ngoài trời',
      price: "Liên hệ"
    },

    {
      image: sp3,
      title: 'Cầu trượt 2 máng song song',
      id: '',
      type: 'Đồ chơi mầm non ngoài trời',
      price: "Liên hệ"
    },

    {
      image: sp4,
      title: 'Bộ vận động thể chất',
      id: '',
      type: 'Đồ chơi mầm non ngoài trời',
      price: "Liên hệ"
    },
  ]
  return (
    <>
      <Navbar />
      <section
        className="bg-half-170 d-table w-100"
        style={{ background: `url(${bg01}) bottom` }}
      >
        <div className="bg-overlay bg-gradient-overlay-2"></div>
        <div className="container">
          <div className="row mt-5 justify-content-center">
            <div className="col-12">
              <div className="title-heading text-center">
                <h5 className="heading fw-semibold sub-heading text-white title-dark">
                  SẢN PHẨM
                </h5>
                <p className="text-white-50 para-desc mx-auto mb-0">
                  Tất cả sản phẩm
                </p>
              </div>
            </div>
            {/*end col*/}
          </div>
          {/*end row*/}

          <div className="position-middle-bottom">
            <nav aria-label="breadcrumb" className="d-block">
              <ul
                className="breadcrumb breadcrumb-muted mb-0 p-0"
                style={{ backgroundColor: 'transparent' }}
              >
                <li className="breadcrumb-item">
                  <a
                    href="/index"
                    onClick={e => {
                      e.preventDefault()
                      navigate('/index')
                    }}
                  >
                    Trang chủ
                  </a>
                </li>
                <li className="breadcrumb-item active" aria-current="page">
                  Sản phẩm
                </li>
              </ul>
            </nav>
          </div>
        </div>
        {/*end container*/}
      </section>
      {/*end section*/}
      <div className="position-relative">
        <div className="shape overflow-hidden text-white">
          <svg
            viewBox="0 0 2880 48"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0 48H1437.5H2880V0H2160C1442.5 52 720 0 720 0H0V48Z"
              fill="currentColor"
            ></path>
          </svg>
        </div>
      </div>
      {/* End Home */}

      {/* Start */}
      <section className="section">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-6">
              <div className="sticky-bar">
                <div className="p-4 rounded-md shadow">
                  <div>
                    <h6 className='mb-3'>Lọc theo giá:</h6>
                    <form>
                      <div className="form-check align-items-center d-flex mb-2">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          value=""
                          id="NewOrder"
                        />
                        <label
                          className="form-check-label fw-bold ms-2"
                          htmlFor="NewOrder"
                        >
                          Dưới 100.000đ
                        </label>
                      </div>
                      <div className="form-check align-items-center d-flex mb-2">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          value=""
                          id="TrendOrder"
                        />
                        <label
                          className="form-check-label fw-bold ms-2"
                          htmlFor="TrendOrder"
                        >
                          Dưới 200.000đ
                        </label>
                      </div>
                      <div className="form-check align-items-center d-flex mb-2">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          value=""
                          id="OldOrder"
                        />
                        <label
                          className="form-check-label fw-bold ms-2"
                          htmlFor="OldOrder"
                        >
                          Dưới 500.00đ
                        </label>
                      </div>
                    </form>
                  </div>

                  <div className="mt-4">
                    <h6 className='mb-3'>Lọc theo danh mục:</h6>
                    <form>
                      <div className="form-check align-items-center d-flex mb-2">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          value=""
                          id="GamesCatagory"
                        />
                        <label
                          className="form-check-label fw-bold ms-2"
                          htmlFor="GamesCatagory"
                        >
                          Sách tham khảo
                        </label>
                      </div>
                      <div className="form-check align-items-center d-flex mb-2">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          value=""
                          id="ArtCatagory"
                        />
                        <label
                          className="form-check-label fw-bold ms-2"
                          htmlFor="ArtCatagory"
                        >
                          Thiết bị cơ bản
                        </label>
                      </div>
                      <div className="form-check align-items-center d-flex mb-2">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          value=""
                          id="MusicCatagory"
                        />
                        <label
                          className="form-check-label fw-bold ms-2"
                          htmlFor="MusicCatagory"
                        >
                          Thiết bị tối thiểu mầm non
                        </label>
                      </div>
                      <div className="form-check align-items-center d-flex mb-2">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          value=""
                          id="VideoCatagory"
                        />
                        <label
                          className="form-check-label fw-bold ms-2"
                          htmlFor="VideoCatagory"
                        >
                          Thiết bị tối thiểu tiểu học
                        </label>
                      </div>
                      <div className="form-check align-items-center d-flex mb-2">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          value=""
                          id="MemesCatagory"
                        />
                        <label
                          className="form-check-label fw-bold ms-2"
                          htmlFor="MemesCatagory"
                        >
                          Thiết bị tối thiểu THCS
                        </label>
                      </div>
                      <div className="form-check align-items-center d-flex mb-2">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          value=""
                          id="IllustrationCatagory"
                        />
                        <label
                          className="form-check-label fw-bold ms-2"
                          htmlFor="IllustrationCatagory"
                        >
                          Thiết bị tối thiểu THPT
                        </label>
                      </div>
                      <div className="form-check align-items-center d-flex mb-2">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          value=""
                          id="GIFsCatagory"
                        />
                        <label
                          className="form-check-label fw-bold ms-2"
                          htmlFor="GIFsCatagory"
                        >
                          Thiết bị phòng bộ môn
                        </label>
                      </div>
                      <div className="form-check align-items-center d-flex mb-2">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          value=""
                          id="GIFsCatagory"
                        />
                        <label
                          className="form-check-label fw-bold ms-2"
                          htmlFor="GIFsCatagory"
                        >
                          Thiết bị phòng chức năng
                        </label>
                      </div>
                      <div className="form-check align-items-center d-flex mb-2">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          value=""
                          id="GIFsCatagory"
                        />
                        <label
                          className="form-check-label fw-bold ms-2"
                          htmlFor="GIFsCatagory"
                        >
                          Thiết bị bán trú
                        </label>
                      </div>
                      <div className="form-check align-items-center d-flex mb-2">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          value=""
                          id="GIFsCatagory"
                        />
                        <label
                          className="form-check-label fw-bold ms-2"
                          htmlFor="GIFsCatagory"
                        >
                          TB ứng dụng công nghệ 4.0
                        </label>
                      </div>
                      <div className="form-check align-items-center d-flex mb-2">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          value=""
                          id="GIFsCatagory"
                        />
                        <label
                          className="form-check-label fw-bold ms-2"
                          htmlFor="GIFsCatagory"
                        >
                          Bộ học liệu điện tử
                        </label>
                      </div>
                      <div className="form-check align-items-center d-flex mb-2">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          value=""
                          id="GIFsCatagory"
                        />
                        <label
                          className="form-check-label fw-bold ms-2"
                          htmlFor="GIFsCatagory"
                        >
                          Thiết bị đóng bộ
                        </label>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
            {/*end col*/}

            <div className="col-lg-9 col-md-6 mt-4 mt-sm-0 pt-2 pt-sm-0">
              <div className="row row-cols-xl-3 row-cols-lg-2 row-cols-1">
                {AuctionData?.map((data, index) => {
                  return (
                    <div
                      className={index < 3 ? 'col' : 'col pt-2 mt-4'}
                      key={index}
                    >
                      <div className="card nft-items nft-primary rounded-md shadow overflow-hidden mb-1 p-3">
                        <div className="d-flex justify-content-between">
                          <span className="like-icon shadow-sm">
                            <a
                              href=""
                              onClick={e => e.preventDefault()}
                              className="text-muted icon"
                            >
                              <i className="mdi mdi-18px mdi-heart mb-0"></i>
                            </a>
                          </span>
                        </div>

                        <div className="nft-image rounded-md mt-3 position-relative overflow-hidden">
                          <a
                            href="/item-detail-one"
                            onClick={e => {
                              e.preventDefault()
                              navigate('/item-detail-one')
                            }}
                          >
                            <img
                              src={data?.image}
                              className="img-fluid"
                              alt=""
                            />
                          </a>
                          {data?.type && (
                            <div className="position-absolute top-0 start-0 m-2">
                              <a
                                href=""
                                onClick={e => e.preventDefault()}
                                className="badge badge-link bg-primary"
                              >
                                {data?.type}
                              </a>
                            </div>
                          )}
                          <div
                            className={`${data?.id ? '' : 'hide-data'
                              } position-absolute bottom-0 start-0 m-2 bg-gradient-primary text-white title-dark rounded-pill px-3`}
                          >
                            <i className="uil uil-clock"></i>{' '}
                            <Countdown
                              date={data?.id}
                              renderer={({ days, hours, minutes, seconds }) => (
                                <span>
                                  {days}:{hours}:{minutes}:{seconds}
                                </span>
                              )}
                            />
                          </div>
                        </div>

                        <div className="card-body content position-relative p-0 mt-3">
                          <a
                            href="/item-detail-one"
                            onClick={e => {
                              e.preventDefault()
                              navigate('/item-detail-one')
                            }}
                            className="title text-dark h6"
                          >
                            {data?.title}
                          </a>

                          <div className="d-flex justify-content-between mt-2">
                            <small className="rate fw-bold">{data?.price}</small>
                            <small className="text-dark fw-bold">
                              <a
                                href="/item-detail-one"
                                onClick={e => {
                                  e.preventDefault()
                                  navigate('/item-detail-one')
                                }}
                                className="btn btn-icon btn-pills btn-primary"
                              >
                                <i className="uil uil-shopping-bag" title='Thêm vào giỏ hàng'></i>
                              </a>
                            </small>
                          </div>
                        </div>
                      </div>
                    </div>
                  )
                })}
                {/*end col*/}
              </div>
              {/*end row*/}

              <div className="row justify-content-center mt-4">
                <div className="col">
                  <div className="text-center">
                    <a
                      href=""
                      onClick={e => e.preventDefault()}
                      className="btn btn-primary rounded-md"
                    >
                      <i className="uil uil-process mdi-spin me-1"></i>Xem tất cả
                    </a>
                  </div>
                </div>
                {/*end col*/}
              </div>
              {/*end row*/}
            </div>
            {/*end col*/}
          </div>
          {/*end row*/}
        </div>
        {/*end container*/}
      </section>
      {/*end section*/}
      {/* End */}

      {/* CTA Start */}

      {/*end section*/}
      {/* CTA End */}
      {/* footer */}
      <Footer />

      {/* Style switcher  */}
      <StyleSwitcher />
    </>
  )
}

export default ExploreFour
