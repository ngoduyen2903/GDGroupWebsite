import React from 'react'
import { useNavigate } from 'react-router-dom'
import { FiArrowRight } from 'react-icons/fi'
import Footer from '../../components/Footer'
import Navbar from '../../components/Navbar'
import StyleSwitcher from '../../components/StyleSwitcher'
import { bg02, bg1, bg2, bg3, bg4, bg5, bg6, bg7, bg8, bg9, bg10, bg11, bg12 } from '../../components/imageImport'

const BlogSidebar = () => {
  const navigate = useNavigate()
  const blogList = [
    {
      image: bg1,
      title: 'Bộ GD&ĐT xác định 10 nhiệm vụ trọng tâm năm 2023',
      date: "18/07/2023",
      timeread: "5 phút đọc",
      createdBy: 'Admin',
      type: 'Tin tức',
    },
    {
      image: bg2,
      title: 'GD Group cùng thấu hiểu nụ cười trẻ thơ',
      date: "12/07/2023",
      timeread: "4 phút đọc",
      createdBy: 'Admin',
      type: 'Tin tức',
    },
    {
      image: bg3,
      title: 'Hội thảo và trưng bày thiết bị giáo dục đáp ứng thông tư 37,38,39 của BGD&DT',
      date: "11/07/2023",
      timeread: "6 phút đọc",
      createdBy: 'Admin',
      type: 'Tin tức',
    },
    {
      image: bg4,
      title: 'Bộ GD&ĐT xác định 10 nhiệm vụ trọng tâm năm 2023',
      date: "18/07/2023",
      timeread: "5 phút đọc",
      createdBy: 'Admin',
      type: 'Tin tức',
    },
    {
      image: bg5,
      title: 'GD Group cùng thấu hiểu nụ cười trẻ thơ',
      date: "12/07/2023",
      timeread: "4 phút đọc",
      createdBy: 'Admin',
      type: 'Tin tức',
    },
    {
      image: bg6,
      title: 'Hội thảo và trưng bày thiết bị giáo dục đáp ứng thông tư 37,38,39 của BGD&DT',
      date: "11/07/2023",
      timeread: "6 phút đọc",
      createdBy: 'Admin',
      type: 'Tin tức',
    },
    {
      image: bg7,
      title: 'Bộ GD&ĐT xác định 10 nhiệm vụ trọng tâm năm 2023',
      date: "18/07/2023",
      timeread: "5 phút đọc",
      createdBy: 'Admin',
      type: 'Tin tức',
    },
    {
      image: bg8,
      title: 'GD Group cùng thấu hiểu nụ cười trẻ thơ',
      date: "12/07/2023",
      timeread: "4 phút đọc",
      createdBy: 'Admin',
      type: 'Tin tức',
    },
    {
      image: bg9,
      title: 'Hội thảo và trưng bày thiết bị giáo dục đáp ứng thông tư 37,38,39 của BGD&DT',
      date: "11/07/2023",
      timeread: "6 phút đọc",
      createdBy: 'Admin',
      type: 'Tin tức',
    },
    {
      image: bg10,
      title: 'Bộ GD&ĐT xác định 10 nhiệm vụ trọng tâm năm 2023',
      date: "18/07/2023",
      timeread: "5 phút đọc",
      createdBy: 'Admin',
      type: 'Tin tức',
    },
    {
      image: bg11,
      title: 'GD Group cùng thấu hiểu nụ cười trẻ thơ',
      date: "12/07/2023",
      timeread: "4 phút đọc",
      createdBy: 'Admin',
      type: 'Tin tức',
    },
    {
      image: bg12,
      title: 'Hội thảo và trưng bày thiết bị giáo dục đáp ứng thông tư 37,38,39 của BGD&DT',
      date: "11/07/2023",
      timeread: "6 phút đọc",
      createdBy: 'Admin',
      type: 'Tin tức',
    },
  ]
  return (
    <>
      <Navbar />
      <section
        className="bg-half-170 d-table w-100"
        style={{ background: `url(${bg02}) bottom` }}
      >
        <div className="bg-overlay bg-gradient-overlay-2"></div>
        <div className="container">
          <div className="row mt-5 justify-content-center">
            <div className="col-12">
              <div className="title-heading text-center">
                <h5 className="heading fw-semibold sub-heading text-white title-dark">
                  TIN TỨC
                </h5>
                <p className="text-white-50 para-desc mx-auto mb-0">
                  Cập nhật thông tin mới nhất từ Hệ thống GD Group
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
                  Tin tức
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

      {/* Start Blog */}
      <section className="section">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-md-6">
              <div className="row g-4">
                {blogList?.map((blog, index) => (
                  <div className="col-lg-6" key={index}>
                    <div className="card blog blog-primary shadow rounded-md overflow-hidden">
                      <div className="position-relative">
                        <img
                          src={blog?.image}
                          className="img-fluid rounded-md"
                          alt=""
                        />
                        <div className="position-absolute top-0 end-0 m-3">
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
                      </div>
                      <div className="card-body position-relative p-4">
                        <a
                          href=""
                          onClick={e => e.preventDefault()}
                          className="badge tag gradient rounded-md fw-bold"
                        >
                          {blog?.type}
                        </a>

                        <ul className="list-unstyled mt-2">
                          <li className="list-inline-item text-muted small me-3">
                            <i className="uil uil-calendar-alt text-dark h6 me-1"></i>
                            {blog?.date}
                          </li>
                          <li className="list-inline-item text-muted small">
                            <i className="uil uil-clock text-dark h6 me-1"></i>{blog?.timeread}
                          </li>
                        </ul>
                        <a
                          href="/blog-detail"
                          onClick={e => {
                            e.preventDefault()
                            navigate('/blog-detail')
                          }}
                          className="text-dark title h5 mt-3"
                        >
                          {blog?.title}
                        </a>

                        <div className="mt-3 d-flex justify-content-between align-items-center">
                          <a
                            href="/blog-detail"
                            onClick={e => {
                              e.preventDefault()
                              navigate('/blog-detail')
                            }}
                            className="btn btn-link text-muted"
                          >
                            Xem thêm <FiArrowRight className="fea icon-sm" />
                          </a>
                          <span className="text-muted fs-6">
                            Đăng bởi: {' '}
                            <a
                              href="/creator-profile"
                              onClick={e => {
                                e.preventDefault()
                                navigate('/creator-profile')
                              }}
                              className="link"
                            >
                              {blog?.createdBy}
                            </a>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
                {/*end col*/}
              </div>
              {/*end row*/}

              <div className="row">
                <div className="col mt-4">
                  <div className="text-center">
                    <a
                      href=""
                      onClick={e => e.preventDefault()}
                      className="btn btn-primary rounded-md"
                    >
                      Xem tất cả{' '}
                      <i className="uil uil-process mdi-spin ms-1"></i>
                    </a>
                  </div>
                </div>
                {/*end col*/}
              </div>
              {/*end row*/}
            </div>
            {/*end col*/}

            <div className="col-lg-4 col-md-6 mt-4 pt-2 mt-sm-0 pt-sm-0">
              <div className="sidebar sticky-bar ms-lg-4 p-4 rounded-md shadow">
                {/* SEARCH */}
                <div className="widget">
                  <h6 className="widget-title font-weight-bold pt-2 pb-2 bg-light rounded text-center">
                    Tìm kiếm
                  </h6>
                  <div id="search2" className="widget-search mt-4 mb-0">
                    <form
                      role="search"
                      method="get"
                      id="searchform"
                      className="searchform"
                    >
                      <div>
                        <input
                          type="text"
                          className="border rounded"
                          name="s"
                          id="s"
                          placeholder="Nhập từ khóa để tìm kiếm..."
                        />
                        <input type="submit" id="searchsubmit" value="Search" />
                      </div>
                    </form>
                  </div>
                </div>
                {/* SEARCH */}

                {/* RECENT POST */}
                <div className="widget mt-4 pt-2">
                  <h6 className="widget-title font-weight-bold pt-2 pb-2 bg-light rounded text-center">
                    Bài viết liên quan
                  </h6>
                  <div className="mt-4">
                    <div className="d-flex align-items-center">
                      <img
                        src={bg1}
                        className="avatar avatar-small rounded"
                        style={{ width: 'auto' }}
                        alt=""
                      />
                      <div className="flex-1 ms-3">
                        <a
                          href="/blog-detail"
                          onClick={e => {
                            e.preventDefault()
                            navigate('/blog-detail')
                          }}
                          className="d-block title text-dark"
                        >
                          Phòng học thông minh trong...
                        </a>
                        <small className="text-muted">16/06/2023</small>
                      </div>
                    </div>

                    <div className="d-flex align-items-center mt-3">
                      <img
                        src={bg2}
                        className="avatar avatar-small rounded"
                        style={{ width: 'auto' }}
                        alt=""
                      />
                      <div className="flex-1 ms-3">
                        <a
                          href="/blog-detail"
                          onClick={e => {
                            e.preventDefault()
                            navigate('/blog-detail')
                          }}
                          className="d-block title text-dark"
                        >
                          Hoạt động stem
                        </a>
                        <small className="text-muted">11/06/2023</small>
                      </div>
                    </div>

                    <div className="d-flex align-items-center mt-3">
                      <img
                        src={bg3}
                        className="avatar avatar-small rounded"
                        style={{ width: 'auto' }}
                        alt=""
                      />
                      <div className="flex-1 ms-3">
                        <a
                          href="/blog-detail"
                          onClick={e => {
                            e.preventDefault()
                            navigate('/blog-detail')
                          }}
                          className="d-block title text-dark"
                        >
                          Vì sao stem lại giúp...
                        </a>
                        <small className="text-muted">06/06/2023</small>
                      </div>
                    </div>
                  </div>
                </div>
                {/* RECENT POST */}

                {/* TAG CLOUDS */}
                <div className="widget mt-4 pt-2 text-center">
                  <h6 className="widget-title font-weight-bold pt-2 pb-2 bg-light rounded">
                    Từ khóa
                  </h6>
                  <div className="tagcloud mt-4">
                    <a
                      href=""
                      onClick={e => e.preventDefault()}
                      className="rounded text-capitalize fw-normal"
                    >
                      Công nghệ
                    </a>
                    <a
                      href=""
                      onClick={e => e.preventDefault()}
                      className="rounded text-capitalize fw-normal"
                    >
                      Thiết bị giáo dục
                    </a>
                    <a
                      href=""
                      onClick={e => e.preventDefault()}
                      className="rounded text-capitalize fw-normal"
                    >
                      Phòng học thông minh
                    </a>
                    <a
                      href=""
                      onClick={e => e.preventDefault()}
                      className="rounded text-capitalize fw-normal"
                    >
                      Chuyển đổi số
                    </a>
                    <a
                      href=""
                      onClick={e => e.preventDefault()}
                      className="rounded text-capitalize fw-normal"
                    >
                      TechMart
                    </a>
                    <a
                      href=""
                      onClick={e => e.preventDefault()}
                      className="rounded text-capitalize fw-normal"
                    >
                      Mekong Delta
                    </a>
                    <a
                      href=""
                      onClick={e => e.preventDefault()}
                      className="rounded text-capitalize fw-normal"
                    >
                      GD Việt Nam
                    </a>
                    <a
                      href=""
                      onClick={e => e.preventDefault()}
                      className="rounded text-capitalize fw-normal"
                    >
                      Triển lãm
                    </a>
                    <a
                      href=""
                      onClick={e => e.preventDefault()}
                      className="rounded text-capitalize fw-normal"
                    >
                      BESS
                    </a>
                    <a
                      href=""
                      onClick={e => e.preventDefault()}
                      className="rounded text-capitalize fw-normal"
                    >
                      Thiết bị cơ bản
                    </a>
                  </div>
                </div>
                {/* TAG CLOUDS */}
              </div>
            </div>
            {/*end col*/}
          </div>
          {/*end row*/}
        </div>
        {/*end container*/}
      </section>
      {/*end section*/}
      {/* End Blog */}

      {/* footer */}
      <Footer />

      {/* Style switcher  */}
      <StyleSwitcher />
    </>
  )
}

export default BlogSidebar
