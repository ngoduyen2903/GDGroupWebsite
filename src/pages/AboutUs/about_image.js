import React from 'react'
import { useNavigate } from 'react-router-dom'
import Footer from '../../components/Footer'
import Navbar from '../../components/Navbar'
import StyleSwitcher from '../../components/StyleSwitcher'
import {
    bg01, item16, item17, item18, item19, item20, item21, item22, item23, item24, item25, item26, item27, item28, item29,
} from '../../components/imageImport'


const AboutImage = () => {
    const navigate = useNavigate()
    const sliderData1 = [
        item16,
        item18,
        item20,
        item22,
        item24,
        item26,
        item28,
        item16,
        item18,
        item20,
        item22,
        item24,
        item26,
        item28,
    ]
    const sliderData2 = [
        item17,
        item19,
        item21,
        item23,
        item25,
        item27,
        item29,
        item17,
        item19,
        item21,
        item23,
        item25,
        item27,
        item29,
    ]


    return (
        <>
            <Navbar />
            <section className="bg-half-170 d-table w-100"
                style={{ background: `url(${bg01}) bottom` }}>
                <div className="bg-overlay bg-gradient-overlay-2"></div>
                <div className="container">
                    <div className="row mt-5 justify-content-center">
                        <div className="col-12">
                            <div className="title-heading text-center">
                                <h5 className="heading fw-semibold sub-heading text-white title-dark">
                                    HÌNH ẢNH HOẠT ĐỘNG
                                </h5>
                                <p className="text-white-50 para-desc mx-auto mb-0">
                                    Những hình ảnh sống động, tạo nên câu chuyện và ghi dấu khoảnh khắc đáng nhớ của Hệ thống GD Group
                                </p>
                            </div>
                        </div>
                    </div>
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
                                    Hình ảnh hoạt động
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </section>
            <section className="bg-half-100">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-12">
                            <div className="slider">
                                <div className="slide-track">
                                    {sliderData1?.map((data, index) => {
                                        return (
                                            <div className="slide mx-2" key={index}>
                                                <div className="card bg-white nft-items nft-margin-minus nft-primary rounded-md shadow overflow-hidden mb-3">
                                                    <div className="nft-image position-relative overflow-hidden">
                                                        <img src={data} className="img-fluid" alt="" />
                                                    </div>
                                                </div>
                                            </div>
                                        )
                                    })}
                                </div>
                            </div>
                        </div>
                        {/*end col*/}

                        <div className="col-12">
                            <div className="slider2">
                                <div className="slide-track">
                                    {sliderData2?.map((data, index) => {
                                        return (
                                            <div className="slide mx-2" key={index * 15}>
                                                <div className="card bg-white nft-items nft-margin-minus nft-primary rounded-md shadow overflow-hidden mb-3">
                                                    <div className="nft-image position-relative overflow-hidden">
                                                        <img src={data} className="img-fluid" alt="" />
                                                    </div>
                                                </div>
                                            </div>
                                        )
                                    })}
                                </div>
                            </div>
                        </div>
                        {/*end col*/}
                    </div>
                    {/*end row*/}
                </div>
                {/*end container*/}


                {/*end container*/}


                {/*end container*/}


                {/*end container*/}


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

export default AboutImage
