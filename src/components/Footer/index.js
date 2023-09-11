import React from 'react'
import { useNavigate } from 'react-router-dom'
import { FiMail } from 'react-icons/fi'
import BackToTop from '../BackToTop'
import { MetaMask_Fox, playStore, app, iconLogo } from '../imageImport'

const Footer = () => {
  const navigate = useNavigate()
  return (
    <>
      <footer className="bg-footer">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="footer-py-60 footer-border">
                <div className="row">
                  <div className="col-lg-3 col-12 mb-0 mb-md-4 pb-0 pb-md-2">
                    <a href="#" className="logo-footer">
                      <img src={iconLogo} alt="" width={200} />
                    </a>
                    <div className="para-desc mb-0 mt-4">
                      <h5 className="footer-head">Fanpage</h5>
                      <iframe src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FSachThietbiGiaoducGDgroup%2F%3Fref%3Dembed_page&tabs=timeline&width=100&height=100&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId" width="200" height="100" scrolling="no" frameborder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>
                    </div>
                  </div>
                  {/*end col*/}

                  <div className="col-lg-3 col-md-4 col-12 mt-4 mt-sm-0 pt-2 pt-sm-0">
                    <h6 className="footer-head">CÔNG TY CỔ PHẦN GIÁO DỤC MEKONG</h6>
                    <p className="mt-2">
                      Địa chỉ: Số 3, Đường số 9, Khu dân cư lô số 8A , Khu đô thị Nam Cần Thơ, Phường Hưng Thạnh, Quận Cái Răng, Thành phố Cần Thơ
                    </p>
                    <p>Điện thoại: 0907 505 169</p>
                    <p className='mb-4'>Email: mekong@gdgroup.vn</p>

                    <h6 className="footer-head">CÔNG TY CỔ PHẦN GIÁO DỤC MEKONG</h6>
                    <p className="mt-2">
                      Địa chỉ: 02/52, Nguyễn An Ninh, phường Ea Tam, Thành phố Buôn Ma Thuột, tỉnh Đắk Lắk                    </p>
                    <p>Điện thoại: 0932 999 837</p>
                    <p>Email: taynguyen@gdgroup.vn</p>

                    <h6 className="footer-head">CÔNG TY CỔ PHẦN GIÁO DỤC MEKONG</h6>
                    <p className="mt-2">
                      Địa chỉ: Số 19/02 Trần Thủ Độ, phường Đông Hải, thành phố Thanh Hoá, tỉnh Thanh Hoá                    </p>
                    <p>Điện thoại: 0939 876 889</p>
                    <p>Email: lamkinh@gdgroup.vn</p>
                  </div>
                  {/*end col*/}
                  <div className="col-lg-3 col-md-4 col-12 mt-4 mt-sm-0 pt-2 pt-sm-0">
                    <h6 className="footer-head">CÔNG TY CỔ PHẦN GIÁO DỤC MEKONG</h6>
                    <p className="mt-2">
                      Địa chỉ: Số 3, Đường số 9, Khu dân cư lô số 8A , Khu đô thị Nam Cần Thơ, Phường Hưng Thạnh, Quận Cái Răng, Thành phố Cần Thơ
                    </p>
                    <p>Điện thoại: 0907 505 169</p>
                    <p className='mb-4'>Email: mekong@gdgroup.vn</p>

                    <h6 className="footer-head">CÔNG TY CỔ PHẦN GIÁO DỤC MEKONG</h6>
                    <p className="mt-2">
                      Địa chỉ: 02/52, Nguyễn An Ninh, phường Ea Tam, Thành phố Buôn Ma Thuột, tỉnh Đắk Lắk                    </p>
                    <p>Điện thoại: 0932 999 837</p>
                    <p>Email: taynguyen@gdgroup.vn</p>

                    <h6 className="footer-head">CÔNG TY CỔ PHẦN GIÁO DỤC MEKONG</h6>
                    <p className="mt-2">
                      Địa chỉ: Số 19/02 Trần Thủ Độ, phường Đông Hải, thành phố Thanh Hoá, tỉnh Thanh Hoá                    </p>
                    <p>Điện thoại: 0939 876 889</p>
                    <p>Email: lamkinh@gdgroup.vn</p>
                  </div>
                  <div className="col-lg-3 col-md-4 col-12 mt-4 mt-sm-0 pt-2 pt-sm-0">
                    <h5 className="footer-head">Đăng ký nhận thông tin</h5>
                    <p className="mt-4">
                      Đăng ký và nhận các thông tin mới nhất qua email
                    </p>
                    <form>
                      <div className="row">
                        <div className="col-lg-12">
                          <div className="foot-subscribe mb-3">
                            <label className="form-label">
                              Nhập vào email của bạn{' '}
                              <span className="text-danger">*</span>
                            </label>
                            <div className="form-icon position-relative">
                              <FiMail className="fea icon-sm icons" />
                              <input
                                type="email"
                                name="email"
                                id="emailsubscribe"
                                className="form-control ps-5 rounded"
                                placeholder="Email của bạn : "
                                required
                                style={{ height: 46 }}
                              />
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-12">
                          <div className="d-grid">
                            <input
                              type="submit"
                              id="submitsubscribe"
                              name="send"
                              className="btn btn-soft-primary"
                              value="Đăng ký"
                            />
                          </div>
                        </div>
                      </div>
                    </form><br />

                    <h5 className="footer-head">Liên kết</h5>
                    <ul className="list-unstyled footer-list mt-4">
                      <li>
                        <a
                          href="/aboutus"
                          onClick={e => {
                            e.preventDefault()
                            navigate('/aboutus')
                          }}
                          className="text-foot"
                        >
                          <i className="uil uil-angle-right-b me-1"></i> Tìm kiếm
                        </a>
                      </li>
                      <li>
                        <a
                          href="/blogs"
                          onClick={e => {
                            e.preventDefault()
                            navigate('/blogs')
                          }}
                          className="text-foot"
                        >
                          <i className="uil uil-angle-right-b me-1"></i> Giới thiệu
                        </a>
                      </li>
                      <li>
                        <a
                          href="/terms"
                          onClick={e => {
                            e.preventDefault()
                            navigate('/terms')
                          }}
                          className="text-foot"
                        >
                          <i className="uil uil-angle-right-b me-1"></i> Điều khoản & Dịch vụ
                        </a>
                      </li>
                      <li>
                        <a
                          href="/privacy"
                          onClick={e => {
                            e.preventDefault()
                            navigate('/privacy')
                          }}
                          className="text-foot"
                        >
                          <i className="uil uil-angle-right-b me-1"></i> Phương thức thanh toán
                        </a>
                      </li>
                      <li>
                        <a
                          href="/login"
                          onClick={e => {
                            e.preventDefault()
                            navigate('/login')
                          }}
                          className="text-foot"
                        >
                          <i className="uil uil-angle-right-b me-1"></i> Chính sách vận chuyển
                        </a>
                      </li>
                      <li>
                        <a
                          href="mailto:contact@example.com"
                          className="text-foot"
                        >
                          <i className="uil uil-angle-right-b me-1"></i>{' '}
                          Giao hàng
                        </a>
                      </li>
                      <li>
                        <a
                          href="/contact"
                          onClick={e => {
                            e.preventDefault()
                            navigate('/contact')
                          }}
                          className="text-foot"
                        >
                          <i className="uil uil-angle-right-b me-1"></i> Chính sách đổi trả
                        </a>
                      </li>
                      <li>
                        <a
                          href="/contact"
                          onClick={e => {
                            e.preventDefault()
                            navigate('/contact')
                          }}
                          className="text-foot"
                        >
                          <i className="uil uil-angle-right-b me-1"></i> Chính sách bảo mật
                        </a>
                      </li>
                      <li>
                        <a
                          href="/contact"
                          onClick={e => {
                            e.preventDefault()
                            navigate('/contact')
                          }}
                          className="text-foot"
                        >
                          <i className="uil uil-angle-right-b me-1"></i> Liên hệ
                        </a>
                      </li>
                    </ul>
                  </div>
                  {/*end col*/}
                </div>
                {/*end row*/}
              </div>
            </div>
            {/*end col*/}
          </div>
          {/*end row*/}
        </div>
        {/*end container*/}

        <div className="footer-py-30 footer-bar">
          <div className="container text-center">
            <div className="row align-items-center">
              <div className="col-sm-6">
                <div className="text-sm-start">
                  <p className="mb-0">
                    © <script>document.write(new Date().getFullYear())</script>{' '}
                    Copyright © 2023 GD Group. Powered {' '}
                    <i className="mdi mdi-heart text-danger"></i> by{' '} Haravan
                  </p>
                </div>
              </div>
              {/*end col*/}

              <div className="col-sm-6 mt-4 mt-sm-0 pt-2 pt-sm-0">
                <ul className="list-unstyled footer-list text-sm-end mb-0">
                  <li className="list-inline-item mb-0">
                    <a
                      href="/privacy"
                      onClick={e => {
                        e.preventDefault()
                        navigate('/privacy')
                      }}
                      className="text-foot me-2"
                    >
                      Điều khoản
                    </a>
                  </li>
                  <li className="list-inline-item mb-0">
                    <a
                      href="/helpcenter-overview"
                      onClick={e => {
                        e.preventDefault()
                        navigate('/helpcenter-overview')
                      }}
                      className="text-foot me-2"
                    >
                      Chính sách
                    </a>
                  </li>
                </ul>
              </div>
              {/*end col*/}
            </div>
            {/*end row*/}
          </div>
          {/*end container*/}
        </div>
      </footer>
      {/*end footer*/}

      {/* Back to top */}
      <BackToTop />

      {/* Wallet Modal */}
      <div
        className="modal fade"
        id="modal-metamask"
        tabIndex="-1"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered modal-sm">
          <div className="modal-content justify-content-center border-0 shadow-md rounded-md position-relative">
            <div className="position-absolute top-0 start-100 translate-middle z-index-1">
              <button
                type="button"
                className="btn btn-icon btn-pills btn-sm btn-light btn-close opacity-10"
                data-bs-dismiss="modal"
                id="close-modal"
              >
                <i className="uil uil-times fs-4"></i>
              </button>
            </div>

            <div className="modal-body p-4 text-center">
              <img
                src={MetaMask_Fox}
                className="avatar avatar-md-md rounded-circle shadow-sm "
                alt=""
              />

              <div className="content mt-4">
                <h5 className="text-danger mb-4">Error!</h5>

                <p className="text-muted">
                  Please Download MetaMask and create your profile and wallet in
                  MetaMask. Please click and check the details,
                </p>

                <a
                  href="https://metamask.io/"
                  className="btn btn-link primary text-primary fw-bold"
                  target="_blank"
                >
                  MetaMask
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Wallet Modal */}
    </>
  )
}

export default Footer
