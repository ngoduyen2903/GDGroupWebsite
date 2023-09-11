import React, { useEffect } from 'react'
import Footer from '../../components/Footer'
import Navbar from '../../components/Navbar'
import StyleSwitcher from '../../components/StyleSwitcher'
import { bg10, single, logo48, bg01, certificate1, certificate2, certificate3, certificate4, certificate5, certificate6, certificate7, certificate8, certificate9, certificate10, certificate11 } from '../../components/imageImport'
import { useNavigate } from 'react-router-dom'


const AboutISO = () => {
    const navigate = useNavigate()
    useEffect(() => {
        window.Tobii()
    }, [])

    return (
        <>
            {/* Navbar */}
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
                                    HỆ THỐNG ISO
                                </h5>
                                <p className="text-white-50 para-desc mx-auto mb-0">
                                    Hệ thống đa dạng, lĩnh vực hoạt động đa chiều
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
                                    Hệ thống ISO
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
                {/*end container*/}
            </section>
            {/* Start Blog Detail */}
            <section className="section">
                <div className="container">
                    <div className="row mt-lg-0 justify-content-center">
                        <div className="col-lg-8">
                            <h5 className="mt-4 mb-0">Hệ thống ISO 9001:2015; ISO 14001:2015; ISO 45001:2018; TCVN 5373:2020; TCVN 8575:2010</h5>
                            <p className="text-muted mt-4">
                                Hệ thống của chúng tôi đã được Viện nghiên cứu phát triển tiêu chuẩn chất lượng và Tổ chức chứng nhận Quasta CE đánh giá hệ thống quản lý, quy trình sản xuất, an toàn sức khỏe, vệ sinh môi trường và thử nghiệm sản phẩm. Chúng tôi đạt chứng nhận hệ thống chất lượng theo các tiêu chuẩn:
                            </p>
                        </div>
                        <div class="row mt-5">
                            <div class="col-sm-6 col-md-3 mt-3">
                                <img
                                    src={certificate4}
                                    className="img-fluid rounded-md shadow"
                                    alt=""
                                />
                            </div>
                            <div class="col-sm-6 col-md-3 mt-3">
                                <img
                                    src={certificate5}
                                    className="img-fluid rounded-md shadow"
                                    alt=""
                                />
                            </div>
                            <div class="col-sm-6 col-md-3 mt-3">
                                <img
                                    src={certificate6}
                                    className="img-fluid rounded-md shadow"
                                    alt=""
                                />
                            </div>
                            <div class="col-sm-6 col-md-3 mt-3">
                                <img
                                    src={certificate7}
                                    className="img-fluid rounded-md shadow"
                                    alt=""
                                />
                            </div>
                        </div>
                        <div className='row mt-5'>
                            <div class="col-sm-6 col-md-3 mt-3">
                                <img
                                    src={certificate8}
                                    className="img-fluid rounded-md shadow"
                                    alt=""
                                />
                            </div>
                            <div class="col-sm-6 col-md-3 mt-3">
                                <img
                                    src={certificate9}
                                    className="img-fluid rounded-md shadow"
                                    alt=""
                                />
                            </div>
                            <div class="col-sm-6 col-md-3 mt-3">
                                <img
                                    src={certificate10}
                                    className="img-fluid rounded-md shadow"
                                    alt=""
                                />
                            </div>
                            <div class="col-sm-6 col-md-3 mt-3">
                                <img
                                    src={certificate11}
                                    className="img-fluid rounded-md shadow"
                                    alt=""
                                />
                            </div>
                        </div>
                        <div className="col-lg-8 mt-2">
                            <div className="px-4 py-5 rounded-md bg-soft-primary text-left mt-4">
                                <h5>
                                    1. ISO 9001:2015 Chứng nhận Hệ thống Quản lý chất lượng sản phẩm của Công ty;
                                </h5>
                                <h5 className="mt-3">
                                    2. ISO 14001:2015 Chứng nhận sản phẩm Công ty sản xuất đạt chứng nhận bảo vệ môi trường;
                                </h5>
                                <h5 className="mt-3">
                                    3. ISO 45001:2018 Chứng nhận Hệ thống Quản lý an toàn và sức khoẻ nghề nghiệp;
                                </h5>
                                <h5 className="mt-3">
                                    4. TCVN 5373:2020 Chứng nhận về Đồ gỗ nội thất;
                                </h5>
                                <h5 className="mt-3">
                                    5. TCVN 8575:2010 Chứng nhận sản phẩm Gỗ ghép thanh bằng keo phù hợp với tiêu chuẩn kỹ thuật quốc gia.
                                </h5>
                            </div>
                            <div className="mt-4">
                                <img
                                    src={certificate1}
                                    className="img-fluid rounded-md shadow"
                                    alt=""
                                />
                            </div>
                            <div className="mt-4">
                                <img
                                    src={certificate2}
                                    className="img-fluid rounded-md shadow"
                                    alt=""
                                />
                            </div>
                            <div className="mt-4">
                                <img
                                    src={certificate3}
                                    className="img-fluid rounded-md shadow"
                                    alt=""
                                />
                            </div>
                        </div>
                        {/*end col*/}
                    </div>
                    {/*end row*/}
                </div>
                {/*end container*/}
            </section>
            {/*end section*/}
            {/* End Blog Detail */}

            {/* footer */}
            <Footer />

            {/* Style switcher  */}
            <StyleSwitcher />
        </>
    )
}

export default AboutISO
