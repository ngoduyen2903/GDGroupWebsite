import React from 'react'
import { useNavigate } from 'react-router-dom'
import Footer from '../../components/Footer'
import Navbar from '../../components/Navbar'
import StyleSwitcher from '../../components/StyleSwitcher'
import { t1, t2, t3, bg01 } from '../../components/imageImport'

const Recruitment = () => {
  const navigate = useNavigate()
  const activityData = [
    {
      image: t1,
      title: 'Thông báo tuyển dụng tháng 12...',
      author: 'Admin',
      time: '1 giờ trước',
    },
    {
      image: t2,
      title: 'Thông báo tuyển dụng tháng 10 - Chuyên viên chăm sóc khách hàng...',
      author: 'Admin',
      time: '10 giờ trước',
    },
    {
      image: t3,
      title: 'Thông báo tuyển dụng tháng 09 - Nhiều vị trí hấp dẫn...',
      author: 'Admin',
      time: '24 giờ trước',
    },
    {
      image: t1,
      title: 'Thông báo tuyển dụng tháng 12...',
      author: 'Admin',
      time: '1 giờ trước',
    },
    {
      image: t2,
      title: 'Thông báo tuyển dụng tháng 10 - Chuyên viên chăm sóc khách hàng...',
      author: 'Admin',
      time: '10 giờ trước',
    },
    {
      image: t3,
      title: 'Thông báo tuyển dụng tháng 10 - Chuyên viên chăm sóc khách hàng...',
      author: 'Admin',
      time: '10 giờ trước',
    },
  ]
  return (
    <>
      {/* Navbar */}
      <Navbar />

      {/* Start Home */}
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
                  TUYỂN DỤNG
                </h5>
                <p className="text-white-50 para-desc mx-auto mb-0">
                  Cùng cập nhật thông tin tuyển dụng từ Hệ thống GD Group
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
                  Tuyển dụng
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

      {/* Start Activities */}
      <section className="section">
        <div className="container">
          <div className="row">
            <div className="col-lg-7 col-md-7">
              <div className="me-lg-4">
                <div className="row g-4">
                  {activityData?.map((data, index) => {
                    return (
                      <div className="col-12" key={index}>
                        <div className="card activity activity-primary rounded-md shadow p-4">
                          <div className="d-flex align-items-center">
                            <div className="position-relative">
                              <img
                                src={data?.image}
                                className="avatar avatar-md-md rounded-md shadow-md"
                                alt=""
                              />

                              <div className="position-absolute top-0 start-0 translate-middle px-1 rounded-lg shadow-md bg-white">
                                {data?.favorite === 'Started Following' ? (
                                  <i className="mdi mdi-account-check mdi-18px text-success"></i>
                                ) : data?.favorite === 'Liked by' ? (
                                  <i className="mdi mdi-heart mdi-18px text-danger"></i>
                                ) : (
                                  <i className="mdi mdi-format-list-bulleted mdi-18px text-warning"></i>
                                )}
                              </div>
                            </div>

                            <span className="content ms-3">
                              <a
                                href="/redetail"
                                onClick={e => {
                                  e.preventDefault()
                                  navigate('/redetail')
                                }}
                                className="text-dark title mb-0 h6 d-block"
                              >
                                {data?.title}
                              </a>
                              <small className="text-muted d-block mt-1">
                                Đăng bởi: {' '}
                                <a
                                  href=""
                                  onClick={e => e.preventDefault()}
                                  className="link fw-bold"
                                >
                                  {data?.author}
                                </a>
                              </small>

                              <small className="text-muted d-block mt-1">
                                {data?.time}
                              </small>
                            </span>
                          </div>
                        </div>
                      </div>
                    )
                  })}
                </div>
                {/*end row*/}

                <div className="row">
                  <div className="col-12 text-center mt-4">
                    <a
                      href=""
                      onClick={e => e.preventDefault()}
                      className="btn btn-link primary text-dark"
                    >
                      Xem thêm <i className="uil uil-arrow-right"></i>
                    </a>
                  </div>
                  {/*end col*/}
                </div>
                {/*end row*/}
              </div>
            </div>
            {/*end col*/}

            <div className="col-lg-5 col-md-5 mt-4 pt-2 mt-sm-0 pt-sm-0">
              <div className="sticky-bar">
                <h5 className="mb-0">Từ khóa tìm kiếm nhanh</h5>
                <div className="p-4 rounded-md shadow mt-4">
                  <div className="tagcloud">
                    <a
                      href=""
                      onClick={e => e.preventDefault()}
                      className="d-inline-flex align-items-center rounded-md text-capitalize"
                    >
                      Trợ lý
                    </a>
                    <a
                      href=""
                      onClick={e => e.preventDefault()}
                      className="d-inline-flex align-items-center rounded-md text-capitalize"
                    >
                      Dịch vụ
                    </a>
                    <a
                      href=""
                      onClick={e => e.preventDefault()}
                      className="d-inline-flex align-items-center rounded-md text-capitalize"
                    >
                      Hành chính
                    </a>
                    <a
                      href=""
                      onClick={e => e.preventDefault()}
                      className="d-inline-flex align-items-center rounded-md text-capitalize"
                    >
                      Kế toán
                    </a>
                    <a
                      href=""
                      onClick={e => e.preventDefault()}
                      className="d-inline-flex align-items-center rounded-md text-capitalize"
                    >
                      Phó giám đốc
                    </a>
                    <a
                      href=""
                      onClick={e => e.preventDefault()}
                      className="d-inline-flex align-items-center rounded-md text-capitalize"
                    >
                      Chăm sóc khách hàng
                    </a>
                    <a
                      href=""
                      onClick={e => e.preventDefault()}
                      className="d-inline-flex align-items-center rounded-md text-capitalize"
                    >
                      Chuyên viên
                    </a>
                    <a
                      href=""
                      onClick={e => e.preventDefault()}
                      className="d-inline-flex align-items-center rounded-md text-capitalize"
                    >
                      Lập trình viên
                    </a>
                    <a
                      href=""
                      onClick={e => e.preventDefault()}
                      className="d-inline-flex align-items-center rounded-md text-capitalize"
                    >
                      Tuyển dụng
                    </a>
                    <a
                      href=""
                      onClick={e => e.preventDefault()}
                      className="d-inline-flex align-items-center rounded-md text-capitalize"
                    >
                      Nhân sự
                    </a>
                  </div>
                </div>
              </div>
            </div>
            {/*end col*/}
          </div>
          {/*end row*/}
        </div>
        {/*end container*/}
      </section>
      {/*end section*/}
      {/* End Activities */}
      {/* footer */}
      <Footer />

      {/* Style switcher  */}
      <StyleSwitcher />
    </>
  )
}

export default Recruitment
