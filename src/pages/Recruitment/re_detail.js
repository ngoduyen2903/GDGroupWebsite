import React from 'react'
import { useNavigate } from 'react-router-dom'
import Footer from '../../components/Footer'
import Navbar from '../../components/Navbar'
import StyleSwitcher from '../../components/StyleSwitcher'
import { t1, t2, t3, bg01 } from '../../components/imageImport'

const ReDetail = () => {
    const navigate = useNavigate()
    return (
        <>
            {/* Navbar */}
            <Navbar />

            {/* Start Home   */}
            <section
                className="bg-half-170 d-table w-100"
                style={{ background: `url(${bg01}) center` }}
            >
                <div className="bg-overlay bg-gradient-overlay-2"></div>
                <div className="container">
                    <div className="row mt-5 justify-content-center">
                        <div className="col-12">
                            <div className="title-heading text-center">
                                <h5 className="heading fw-semibold sub-heading text-white title-dark">
                                    CHI TIẾT TUYỂN DỤNG
                                </h5>
                                {/* <p className="text-white-50 para-desc mx-auto mb-0"></p>   */}
                            </div>
                        </div>
                        {/*end col  */}
                    </div>
                    {/*end row  */}

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
                                    Chi tiết tuyển dụng
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
                {/*end container  */}
            </section>
            {/*end section  */}
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
            {/* End Home   */}

            {/* Start Terms & Conditions   */}
            <section className="section">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-9">
                            <div className="card shadow border-0 rounded">
                                <div className="card-body">
                                    <img
                                        src={t1}
                                        className="img-fluid rounded-md shadow" width={'100%'}
                                        alt=""
                                    />
                                    <h5 className="card-title mt-4">THÔNG BÁO TUYỂN DỤNG THÁNG 12</h5>
                                    <div className="content">
                                        <a
                                            href=""
                                            onClick={e => e.preventDefault()}
                                            className="h6 text-dark d-block mb-0"
                                        >
                                            Người viết: Ms.Trinh lúc 03.12.2021
                                        </a>
                                        <small className="text-muted mb-0">
                                            Tuyển dụng, 8 phút đọc
                                        </small>
                                    </div>
                                    <p className="text-muted mt-4">
                                        Do nhu cầu phát triển và mở rộng thị trường, <b className='text-danger'>CÔNG TY CỔ PHẦN GIÁO DỤC LAM KINH</b> thuộc Hệ thống GD Group thông báo tuyển dụng nhân sự với các vị trí như sau:
                                    </p>
                                    <p className="text-muted mt-1">
                                        <b className='text-danger'>1. GIÁM ĐỐC ĐIỀU HÀNH: 01 người</b>
                                    </p>
                                    <h5 className="card-title mt-2">MÔ TẢ CÔNG VIỆC</h5>

                                    <p className="text-muted mt-1">
                                        1. Hoạch định
                                    </p>
                                    <p className="text-muted mt-1">
                                        ► Tiếp nhận chỉ đạo, chỉ tiêu kinh doanh từ ban Tổng Giám Đốc.
                                    </p>
                                    <p className="text-muted mt-1">
                                        ► Chịu trách nhiệm lập kế hoạch và định hướng chiến lược chung cho công ty.
                                    </p>
                                    <p className="text-muted mt-1">
                                        ► Xây dựng chiến lược phát triển kế hoạch kinh doanh phù hợp với các mục tiêu ngắn hạn và dài hạn của doanh nghiệp.
                                    </p>
                                    <p className="text-muted mt-1">
                                        ► Xây dựng kế hoạch tài chính ngắn hạn và dài hạn.
                                    </p>
                                    <p className="text-muted mt-1">
                                        ► Tham mưu lên Tổng Giám đốc các chiến lược kinh doanh phù hợp với mục tiêu của hệ thống.
                                    </p>
                                    <h5 className="card-title mt-5">Các sản phẩm, dịch vụ của chúng tôi luôn đảm bảo theo các thông tư:</h5>
                                    <p className="text-muted mt-4">
                                        Thông tư liên tịch số <b className="text-danger">26/2011/TTLT-BGDĐT-BKHCN-BYT</b> hướng dẫn tiêu chuẩn bàn ghế học sinh trường Tiểu học, trường Trung học Cơ sở, trường Trung học Phổ thông.
                                    </p>
                                    <p className="text-muted">
                                        Thông tư số<b className='text-danger'> 05/2019/TT-BGDĐT</b> Ban hành về Danh mục dạy học tối thiểu lớp 1;
                                    </p>
                                    <p className="text-muted">
                                        Thông tư số <b className='text-danger'>43/2020/TT-BGDĐT</b> Ban hành về Danh mục dạy học tối thiểu lớp 2;
                                    </p>
                                    <p className="text-muted">
                                        Thông tư số <b className='text-danger'>44/2020/TT-BGDĐT</b> Ban hành về Danh mục dạy học tối thiểu lớp 6;
                                    </p>
                                    <p className="text-muted">
                                        Thông tư số <b className='text-danger'>37/2021/TT-BGDĐT</b> Ban hành về Danh mục dạy học tối thiểu cấp Tiểu học;
                                    </p>
                                    <p className="text-muted">
                                        Thông tư số <b className='text-danger'>38/2021/TT-BGDĐT</b> Ban hành về Danh mục dạy học tối thiểu cấp THCS;
                                    </p>
                                    <p className="text-muted">
                                        Thông tư số <b className='text-danger'>39/2021/TT-BGDĐT</b> Ban hành về Danh mục dạy học tối thiểu cấp THPT.
                                    </p>
                                    <p className="text-muted">
                                        Văn bản hợp nhất số <b className='text-danger'>01/VBHN-BGDĐT</b>  năm 2015 hợp nhất Thông tư về Danh mục Đồ dùng - Đồ chơi - Thiết bị dạy học tối thiểu dùng cho Giáo dục Mầm non.
                                    </p>
                                    <p className="text-muted">
                                        Thông tư số <b className='text-danger'>14/2020/TT-BGDĐT</b> Ban hành Quy định phòng học bộ môn của cơ sở giáo dục phổ thông.
                                    </p>
                                    <p className="text-muted">
                                        Luật xuất bản số <b className='text-danger'>19/2012/QH13</b> và Thông tư số<b className='text-danger'>23/2014/TT-BTTTT</b>  Quy định chi tiết và hướng dẫn thi hành một số điều của Luật xuất bản.
                                    </p>
                                    <h5 className="card-title mt-5">Các sản phẩm, dịch vụ của chúng tôi luôn đảm bảo các tiểu chuẩn: :</h5>
                                    <p className="text-muted mt-4">
                                        Về Hệ thống quản lý chất lượng <b className='text-danger'>ISO 9001:2015</b>
                                    </p>
                                    <p className="text-muted mt-4">
                                        Về Hệ Thống quản lý môi trường <b className='text-danger'>ISO 14001:2015</b>
                                    </p>
                                    <p className="text-muted mt-4">
                                        Về Hệ thống quản lý An toàn và sức khỏe nghề nghiệp cho lĩnh vực <b className='text-danger'>ISO 45001:2018</b>
                                    </p>
                                    <p className="text-muted mt-4">
                                        Chứng nhận sản phẩm Gỗ ghép thanh bằng keo phù hợp với tiêu chuẩn kỹ thuật quốc gia <b className='text-danger'>TCVN 8575:2010</b>.
                                    </p>
                                    <h5 className="card-title mt-5">Hệ thống của chúng tôi đã có mặt trên 4 vùng miền và Tư vấn, cung cấp sản phẩm trên phạm vi toàn quốc:</h5>

                                    <h5 className="card-title mt-5">Chúng tôi luôn sẵn sàng và rất mong được hợp tác cùng Quý khách vào việc góp phần Phát Triển Sự Nghiệp Giáo Dục – Đào Tạo nước nhà.</h5>
                                </div>
                            </div>
                        </div>
                        {/*end col  */}
                    </div>
                    {/*end row  */}
                </div>
                {/*end container  */}
            </section>
            {/*end section  */}
            {/* End Terms & Conditions   */}

            {/* footer */}
            <Footer />

            {/* Style switcher  */}
            <StyleSwitcher />
        </>
    )
}

export default ReDetail
