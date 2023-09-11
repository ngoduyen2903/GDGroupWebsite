import React from 'react'
import { useNavigate } from 'react-router-dom'
import Footer from '../../components/Footer'
import Navbar from '../../components/Navbar'
import StyleSwitcher from '../../components/StyleSwitcher'
import { about, bg02 } from '../../components/imageImport'

const AboutHeThong = () => {
  const navigate = useNavigate()
  return (
    <>
      {/* Navbar */}
      <Navbar />

      {/* Start Home   */}
      <section
        className="bg-half-170 d-table w-100"
        style={{ background: `url(${bg02}) center` }}
      >
        <div className="bg-overlay bg-gradient-overlay-2"></div>
        <div className="container">
          <div className="row mt-5 justify-content-center">
            <div className="col-12">
              <div className="title-heading text-center">
                <h5 className="heading fw-semibold sub-heading text-white title-dark">
                  HỆ THỐNG & LĨNH VỰC HOẠT ĐỘNG
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
                  Hệ thống & Lĩnh vực hoạt động
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
                  <h5 className="card-title">Hệ thống chúng tôi là đơn vị chuyên:</h5>
                  <p className="text-muted mt-4">
                    ► Gia công, sản xuất nội thất học đường (bàn ghế, bảng từ, tủ kệ,…);
                  </p>
                  <p className="text-muted mt-1">
                    ► Sản xuất thiết bị dạy học tối thiểu các cấp từ Mầm non đến Trung học phổ thông theo chương trình mới;
                  </p>
                  <p className="text-muted mt-1">
                    ► Khảo sát và tư vấn dự toán các Phòng bộ môn Lý, Hoá, Sinh, Âm nhạc, Mỹ thuật, Phòng Lab, Phòng Y tế, Thư viện, Bếp ăn bán trú, … cho các trường lên chuẩn Quốc Gia theo các cấp độ;
                  </p>
                  <p className="text-muted mt-1">
                    ► Tổ chức bản thảo, In ấn, phát hành sách tham khảo, sách chuyên đề, truyện đọc, ấn phẩm học đường...
                  </p>
                  <p className="text-muted mt-1">
                    ► Thực hiện số hóa, chuyển đổi số. Hỗ trợ tư vấn phân tích và thực hiện các ứng dụng công nghệ.
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
                  <img
                    src={about}
                    className="img-fluid rounded-md shadow"
                    alt=""
                  />
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

export default AboutHeThong
