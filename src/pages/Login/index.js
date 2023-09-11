import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { FiArrowLeft } from 'react-icons/fi'
import { whiteLogo } from '../../components/imageImport'
import StyleSwitcher from '../../components/StyleSwitcher'

const Login = () => {
  const navigate = useNavigate()
  return (
    <>
      <div className="back-to-home">
        <a
          href=""
          onClick={e => e.preventDefault()}
          className="back-button btn btn-pills btn-sm btn-icon btn-primary"
        >
          <FiArrowLeft className="icons" />
        </a>
      </div>

      {/*  Hero Start  */}
      <section className="position-relative">
        <div className="bg-video-wrapper">
          <iframe src="https://player.vimeo.com/video/502163294?background=1&autoplay=1&loop=1&byline=0&title=0"></iframe>
        </div>
        <div className="bg-overlay bg-linear-gradient-2"></div>
        <div className="container-fluid">
          <div className="row">
            <div className="col-12 p-0">
              <div className="d-flex flex-column min-vh-100 p-4">
                {/*  Start Content  */}
                <div className="title-heading text-center my-auto">
                  <div className="form-signin px-4 py-5 bg-white rounded-md shadow-sm">
                    <form>
                      <h5 className="mb-4">ĐĂNG NHẬP</h5>
                      <div className="row">
                        <div className="col-lg-12">
                          <div className="form-floating mb-2">
                            <input
                              type="email"
                              className="form-control"
                              id="LoginEmail"
                              placeholder="gdgroup@gmail.com"
                            />
                            <label htmlFor="LoginEmail">Email:</label>
                          </div>
                        </div>
                        {/* end col */}

                        <div className="col-lg-12">
                          <div className="form-floating mb-3">
                            <input
                              type="password"
                              className="form-control"
                              id="LoginPassword"
                              placeholder="Mật khẩu"
                            />
                            <label htmlFor="LoginPassword">Mật khẩu:</label>
                          </div>
                        </div>
                        {/* end col */}

                        <div className="col-lg-12">
                          <div className="d-flex justify-content-between">
                            <div className="mb-3">
                              <div className="form-check align-items-center d-flex mb-0">
                                <input
                                  className="form-check-input mt-0"
                                  type="checkbox"
                                  value=""
                                  id="RememberMe"
                                />
                                <label
                                  className="form-check-label text-muted ms-2"
                                  htmlFor="RememberMe"
                                >
                                  Nhớ mật khẩu
                                </label>
                              </div>
                            </div>
                            <small className="text-muted mb-0">
                              <a
                                href="/reset-password"
                                onClick={e => {
                                  e.preventDefault()
                                  navigate('/reset-password')
                                }}
                                className="text-muted fw-semibold"
                              >
                                Quên mật khẩu ?
                              </a>
                            </small>
                          </div>
                        </div>
                        {/* end col */}
                        <div className="col-lg-12">
                          <button
                            className="btn btn-primary rounded-md w-100"
                            type="submit"
                          >
                            Đăng nhập
                          </button>
                        </div>
                        {/* end col */}

                        <div className="col-12 text-center mt-4">
                          <small>
                            <span className="text-muted me-2">
                              Chưa có tài khoản ?
                            </span>{' '}
                            <a
                              href="/signup"
                              onClick={e => {
                                e.preventDefault()
                                navigate('/signup')
                              }}
                              className="text-dark fw-bold"
                            >
                              Đăng ký
                            </a>
                          </small>
                        </div>
                        {/* end col */}
                      </div>
                      {/* end row */}
                    </form>
                  </div>
                </div>
                {/*  End Content  */}

                {/*  Start Footer  */}
                <div className="text-center">
                  <small className="mb-0 text-light title-dark">
                    Copyright © 2023 GD Group. Powered
                    <i className="mdi mdi-heart text-danger"></i> by{' '}
                    <a
                      href="https://shreethemes.in/"
                      target="_blank"
                      className="text-reset"
                    >
                      Haravan
                    </a>
                    .
                  </small>
                </div>
                {/*  End Footer  */}
              </div>
            </div>
            {/* end col */}
          </div>
          {/* end row */}
        </div>
        {/* end container */}
      </section>
      {/* end section */}
      {/*  Hero End  */}

      {/* Style switcher  */}
      <StyleSwitcher />
    </>
  )
}

export default Login
