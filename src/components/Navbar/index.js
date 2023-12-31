import React, { useState, useCallback, useEffect, useMemo } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { character, client01, lightLogo, logoDark } from '../imageImport'

const Navbar = () => {
  const [myPublicAddress, setMyPublicAddress] = useState('qhut0...hfteh45')
  const location = useLocation()
  const navigate = useNavigate()
  const url = useMemo(() => location?.pathname === '/blog-detail', [])
  const templatePage = [
    '/become-creator',
    '/creator-profile',
    '/item-detail-one',
    '/index-two',
    '/index-four',
    '/index-five',
    '/index-five-rtl',
    '/index-four-rtl',
    '/index-two-rtl'
  ]
  const becomeUrl = templatePage.includes(location?.pathname)
  const [mobile, setMobile] = useState([])
  const toggleSwitcher = () => {
    var i = document.getElementById('style-switcher')
    if (i) {
      if (i.style.left === '-189px') {
        i.style.left = '0px'
      } else {
        i.style.left = '-189px'
      }
    }
  }
  const mobileHandler = (e, panel) => {
    e.preventDefault()
    const dataIndex = mobile?.findIndex(data => data === panel)
    if (dataIndex === -1) {
      setMobile([...mobile, panel])
    } else {
      const updateRecord = mobile?.filter((data, index) => index !== dataIndex)
      setMobile(updateRecord)
    }
  }

  const closeModal = () => {
    //   metamask modal
    const modal = document.getElementById('modal-metamask')

    modal.classList.remove('show')
    modal.style.display = 'none'
  }

  const isMetaMaskInstalled = useCallback(() => {
    //Have to check the ethereum binding on the window object to see if it's installed
    const { ethereum } = window
    return Boolean(ethereum && ethereum.isMetaMask)
  }, [])

  const checkWalletConnet = useCallback(async () => {
    if (isMetaMaskInstalled()) {
      const accounts = await window.ethereum.request({ method: 'eth_accounts' })
      if (!!accounts[0]) {
        const walletAddress =
          accounts[0].split('').slice(0, 6).join('') +
          '...' +
          accounts[0]
            .split('')
            .slice(accounts[0].length - 7, accounts[0].length)
            .join('')
        setMyPublicAddress(walletAddress)
      }
    }
  }, [isMetaMaskInstalled])

  useEffect(() => {
    checkWalletConnet()
  }, [checkWalletConnet])

  const _handleConnectWallet = useCallback(async () => {
    const modal = document.getElementById('modal-metamask')

    if (!isMetaMaskInstalled()) {
      //meta mask not installed
      modal.classList.add('show')
      modal.style.display = 'block'
      return
    }
    try {
      await window.ethereum.request({ method: 'eth_requestAccounts' })
      const accounts = await window.ethereum.request({ method: 'eth_accounts' })
      const walletAddress =
        accounts[0].split('').slice(0, 6).join('') +
        '...' +
        accounts[0]
          .split('')
          .slice(accounts[0].length - 7, accounts[0].length)
          .join('')
      setMyPublicAddress(walletAddress)
    } catch (error) {
      console.error(error)
    }
  }, [isMetaMaskInstalled])


  const getClosest = (elem, selector) => {

    // Element.matches() polyfill
    if (!Element.prototype.matches) {
      Element.prototype.matches =
        Element.prototype.matchesSelector ||
        Element.prototype.mozMatchesSelector ||
        Element.prototype.msMatchesSelector ||
        Element.prototype.oMatchesSelector ||
        Element.prototype.webkitMatchesSelector ||
        function (s) {
          var matches = (this.document || this.ownerDocument).querySelectorAll(s),
            i = matches.length;
          while (--i >= 0 && matches.item(i) !== this) { }
          return i > -1;
        };
    }

    // Get the closest matching element
    for (; elem && elem !== document; elem = elem.parentNode) {
      if (elem.matches(selector)) return elem;
    }
    return null;

  };

  const activateMenu = () => {
    var menuItems = document.getElementsByClassName("sub-menu-item");
    if (menuItems) {

      var matchingMenuItem = null;
      for (var idx = 0; idx < menuItems.length; idx++) {
        if (menuItems[idx].href === window.location.href) {
          matchingMenuItem = menuItems[idx];
        }
      }

      if (matchingMenuItem) {
        matchingMenuItem.classList.add('active');
        var immediateParent = getClosest(matchingMenuItem, 'li');
        if (immediateParent) {
          immediateParent.classList.add('active');
        }

        var parent = getClosest(matchingMenuItem, '.parent-menu-item');
        if (parent) {
          parent.classList.add('active');
          var parentMenuitem = parent.querySelector('.menu-item');
          if (parentMenuitem) {
            parentMenuitem.classList.add('active');
          }
          var parentOfParent = getClosest(parent, '.parent-parent-menu-item');
          if (parentOfParent) {
            parentOfParent.classList.add('active');
          }
        } else {
          var parentOfParent = getClosest(matchingMenuItem, '.parent-parent-menu-item');
          if (parentOfParent) {
            parentOfParent.classList.add('active');
          }
        }
      }
    }
  }

  const toggleMenu = () => {
    document.getElementById('isToggle').classList.toggle('open');
    var isOpen = document.getElementById('navigation')
    if (isOpen.style.display === "block") {
      isOpen.style.display = "none";
    } else {
      isOpen.style.display = "block";
    }
  };
  return (
    <>
      {/* Navbar STart */}
      <header
        id="topnav"
        className={`defaultscroll sticky ${url && 'gradient'}`}
      >
        <div className="container">
          {/* Logo Start*/}
          <a
            className="logo"
            href="/index"
            onClick={e => {
              e.preventDefault()
              navigate('/index')
              setTimeout(() => {
                activateMenu()
                toggleSwitcher(false)
              }, 1000)
            }}
          >
            <span className="">
              <img
                src={logoDark}
                height="26"
                className={becomeUrl ? 'logo-light-mode' : 'l-dark'}
                alt=""
              />
              <img
                src={lightLogo}
                height="26"
                className={becomeUrl ? 'logo-dark-mode' : 'l-light'}
                alt=""
              />
            </span>
            {/* {!becomeUrl && (
              <img
                src={lightLogo}
                height="26"
                className="logo-dark-mode"
                alt=""
              />
            )} */}
          </a>
          {/* Logo end*/}

          {/* Mobile */}
          <div className="menu-extras">
            <div className="menu-item">
              {/* Mobile menu toggle*/}
              <a
                className="navbar-toggle"
                id="isToggle"
                onClick={e => {
                  e.preventDefault()
                  toggleMenu()
                }}
              >
                <div className="lines">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </a>
              {/* End mobile menu toggle*/}
            </div>
          </div>
          {/* Mobile */}

          {/*Login button Start*/}
          <ul className="buy-button list-inline mb-0">
            <li className="list-inline-item mb-0 me-1">
              <div className="dropdown">
                <button
                  type="button"
                  className="btn dropdown-toggle p-0"
                  data-bs-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  {becomeUrl ? (
                    <i className="uil uil-search text-dark fs-5 align-middle"></i>
                  ) : (
                    <>
                      <i className="uil uil-search text-white title-dark btn-icon-light fs-5 align-middle"></i>
                      <i className="uil uil-search text-dark btn-icon-dark fs-5 align-middle"></i>
                    </>
                  )}
                </button>
                <div
                  className="dropdown-menu dd-menu dropdown-menu-end bg-white shadow rounded border-0 mt-3 p-0"
                  style={{ width: 300 }}
                >
                  <div className="search-bar">
                    <div id="itemSearch" className="menu-search mb-0">
                      <form
                        role="search"
                        method="get"
                        id="searchItemform"
                        className="searchform"
                      >
                        <input
                          type="text"
                          className="form-control border rounded"
                          name="s"
                          id="searchItem"
                          placeholder="Search..."
                        />
                        <input
                          type="submit"
                          id="searchItemsubmit"
                          value="Search"
                        />
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </li>
            <li className="list-inline-item mb-0 me-1">
              <a
                className="btn btn-icon btn-pills btn-primary"
              >
                <i className="uil uil-shopping-bag" title='Giỏ hàng'></i>
              </a>
            </li>
            <li className="list-inline-item mb-0">
              <div className="dropdown dropdown-primary">
                <button
                  type="button"
                  className="btn btn-pills dropdown-toggle p-0"
                  data-bs-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <img
                    src={client01}
                    className="rounded-pill avatar avatar-sm-sm"
                    alt=""
                  />
                </button>
                <div
                  className="dropdown-menu dd-menu dropdown-menu-end bg-white shadow border-0 mt-3 pb-3 pt-0 overflow-hidden rounded"
                  style={{ minWidth: 200 }}
                >
                  <div className="position-relative">
                    <div className="pt-5 pb-3 bg-gradient-primary"></div>
                    <div className="px-3">
                      <div className="d-flex align-items-end mt-n4">
                        <img
                          src={client01}
                          className="rounded-pill avatar avatar-md-sm img-thumbnail shadow-md"
                          alt=""
                        />
                        <h6 className="text-dark fw-bold mb-0 ms-1">
                          Duyên Ngô
                        </h6>
                      </div>
                    </div>
                  </div>
                  <div className="mt-2">
                    <a
                      className="dropdown-item small fw-semibold text-dark d-flex align-items-center"
                      href="/creator-profile"
                      onClick={e => {
                        e.preventDefault()
                        navigate('/creator-profile')
                      }}
                    >
                      <span className="mb-0 d-inline-block me-1">
                        <i className="uil uil-user align-middle h6 mb-0 me-1"></i>
                      </span>{' '}
                      Hồ sơ của bạn
                    </a>
                    <div className="dropdown-divider border-top"></div>
                    <a
                      className="dropdown-item small fw-semibold text-dark d-flex align-items-center"
                      href="/lock-screen"
                      onClick={e => {
                        e.preventDefault()
                        setTimeout(() => {
                          activateMenu()
                          toggleSwitcher(false)
                        }, 1000)
                        navigate('/lock-screen')
                      }}
                    >
                      <span className="mb-0 d-inline-block me-1">
                        <i className="uil uil-user align-middle h6 mb-0 me-1"></i>
                      </span>{' '}
                      Đăng nhập
                    </a>
                    <div className="dropdown-divider border-top"></div>
                    <a
                      className="dropdown-item small fw-semibold text-dark d-flex align-items-center"
                      href="/lock-screen"
                      onClick={e => {
                        e.preventDefault()
                        setTimeout(() => {
                          activateMenu()
                          toggleSwitcher(false)
                        }, 1000)
                        navigate('/lock-screen')
                      }}
                    >
                      <span className="mb-0 d-inline-block me-1">
                        <i className="uil uil-sign-out-alt align-middle h6 mb-0 me-1"></i>
                      </span>{' '}
                      Đăng xuất
                    </a>
                  </div>
                </div>
              </div>
            </li>
          </ul>
          {/*Login button End*/}

          <div id="navigation">
            {/* Navigation Menu*/}
            <ul
              className={`navigation-menu nav-left ${!becomeUrl && 'nav-light'
                }`}
            >
              <li>
                <a
                  href="/index-four"
                  onClick={e => {
                    e.preventDefault()
                    setTimeout(() => {
                      activateMenu()
                      toggleSwitcher(false)
                    }, 1000)
                    navigate('/index-four')
                  }}
                  className="sub-menu-item"
                >
                  {' '}
                  Trang chủ
                </a>
              </li>
              <li className="has-submenu parent-parent-menu-item">
                <a href="" onClick={e => mobileHandler(e, 'pages')}>
                  Giới thiệu
                </a>
                <span className="menu-arrow"></span>
                <ul
                  className={`submenu ${mobile.includes('pages') ? 'open' : ''
                    }`}
                >
                  <li>
                    <a
                      href="/aboutus"
                      onClick={e => {
                        e.preventDefault()
                        setTimeout(() => {
                          activateMenu()
                          toggleSwitcher(false)
                        }, 1000)
                        navigate('/aboutus')
                      }}
                      className="sub-menu-item"
                    >
                      Giới thiệu về GD Group
                    </a>
                  </li>
                  <li>
                    <a
                      href="/abouthethong"
                      onClick={e => {
                        e.preventDefault()
                        setTimeout(() => {
                          activateMenu()
                          toggleSwitcher(false)
                        }, 1000)
                        navigate('/abouthethong')
                      }}
                      className="sub-menu-item"
                    >
                      Hệ thống & Lĩnh vực hoạt động
                    </a>
                  </li>
                  <li>
                    <a
                      href="/aboutiso"
                      onClick={e => {
                        e.preventDefault()
                        setTimeout(() => {
                          activateMenu()
                          toggleSwitcher(false)
                        }, 1000)
                        navigate('/aboutiso')
                      }}
                      className="sub-menu-item"
                    >
                      Hệ thống ISO
                    </a>
                  </li>
                  <li>
                    <a
                      href="/aboutimage"
                      onClick={e => {
                        e.preventDefault()
                        setTimeout(() => {
                          activateMenu()
                          toggleSwitcher(false)
                        }, 1000)
                        navigate('/aboutimage')
                      }}
                      className="sub-menu-item"
                    >
                      Hình ảnh hoạt động
                    </a>
                  </li>
                </ul>
              </li>
              <li className="has-submenu parent-parent-menu-item">
                <a href="" onClick={e => mobileHandler(e, 'explores')}>
                  Sản phẩm
                </a>
                <span className="menu-arrow"></span>
                <ul
                  className={`submenu ${mobile.includes('explores') ? 'open' : ''
                    }`}
                >
                  <li>
                    <a
                      href="/explore-four"
                      onClick={e => {
                        e.preventDefault()
                        setTimeout(() => {
                          activateMenu()
                          toggleSwitcher(false)
                        }, 1000)
                        navigate('/explore-four')
                      }}
                      className="sub-menu-item"
                    >
                      {' '}
                      Tất cả sản phẩm
                    </a>
                  </li>
                </ul>
              </li>

              <li className="has-submenu parent-parent-menu-item">
                <a href="/solution" onClick={e => mobileHandler(e, 'explores')}>
                  Giải pháp
                </a>
                <span className="menu-arrow"></span>
                <ul
                  className={`submenu ${mobile.includes('explores') ? 'open' : ''
                    }`}
                >
                  <li>
                    <a
                      href="/solutionlearn"
                      onClick={e => {
                        e.preventDefault()
                        setTimeout(() => {
                          activateMenu()
                          toggleSwitcher(false)
                        }, 1000)
                        navigate('/solutionlearn')
                      }}
                      className="sub-menu-item"
                    >
                      {' '}
                      Học trực tuyến
                    </a>
                  </li>
                  <li>
                    <a
                      href="/solutionmeeting"
                      onClick={e => {
                        e.preventDefault()
                        setTimeout(() => {
                          activateMenu()
                          toggleSwitcher(false)
                        }, 1000)
                        navigate('/solutionmeeting')
                      }}
                      className="sub-menu-item"
                    >
                      {' '}
                      Họp trực tuyến
                    </a>
                  </li>
                  <li>
                    <a
                      href="/solutionclassroom"
                      onClick={e => {
                        e.preventDefault()
                        setTimeout(() => {
                          activateMenu()
                          toggleSwitcher(false)
                        }, 1000)
                        navigate('/solutionclassroom')
                      }}
                      className="sub-menu-item"
                    >
                      {' '}
                      Phòng học thông minh
                    </a>
                  </li>
                  <li>
                    <a
                      href="/solutionenglish"
                      onClick={e => {
                        e.preventDefault()
                        setTimeout(() => {
                          activateMenu()
                          toggleSwitcher(false)
                        }, 1000)
                        navigate('/solutionenglish')
                      }}
                      className="sub-menu-item"
                    >
                      {' '}
                      Phòng ngoại ngữ
                    </a>
                  </li>
                  <li>
                    <a
                      href="/solutionlibrary"
                      onClick={e => {
                        e.preventDefault()
                        setTimeout(() => {
                          activateMenu()
                          toggleSwitcher(false)
                        }, 1000)
                        navigate('/solutionlibrary')
                      }}
                      className="sub-menu-item"
                    >
                      Phòng thư viện
                    </a>
                  </li>
                </ul>
              </li>
              <li>
                <a
                  href="/project"
                  onClick={e => {
                    e.preventDefault()
                    setTimeout(() => {
                      activateMenu()
                      toggleSwitcher(false)
                    }, 1000)
                    navigate('/project')
                  }}
                  className="sub-menu-item"
                >
                  {' '}
                  Dự án
                </a>
              </li>
              <li>
                <a
                  href="/blog-sidebar"
                  onClick={e => {
                    e.preventDefault()
                    setTimeout(() => {
                      activateMenu()
                      toggleSwitcher(false)
                    }, 1000)
                    navigate('/blog-sidebar')
                  }}
                  className="sub-menu-item"
                >
                  {' '}
                  Tin tức
                </a>
              </li>
              <li>
                <a
                  href="/recruitment"
                  onClick={e => {
                    e.preventDefault()
                    setTimeout(() => {
                      activateMenu()
                      toggleSwitcher(false)
                    }, 1000)
                    navigate('/recruitment')
                  }}
                  className="sub-menu-item"
                >
                  {' '}
                  Tuyển dụng
                </a>
              </li>
              <li>
                <a
                  href="/contact"
                  onClick={e => {
                    e.preventDefault()
                    setTimeout(() => {
                      activateMenu()
                      toggleSwitcher(false)
                    }, 1000)
                    navigate('/contact')
                  }}
                  className="sub-menu-item"
                >
                  {' '}
                  Liên hệ
                </a>
              </li>
            </ul>
            {/*end navigation menu*/}
          </div>
          {/*end navigation*/}
        </div>
        {/*end container*/}
      </header>
      {/*end header*/}
      {/* Navbar End */}
    </>
  )
}

export default Navbar
