import React from 'react'
import { useNavigate } from 'react-router-dom'
import Footer from '../../components/Footer'
import Navbar from '../../components/Navbar'
import StyleSwitcher from '../../components/StyleSwitcher'
import { about, bg02 } from '../../components/imageImport'

const AboutUs = () => {
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
                  GIỚI THIỆU
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
                  Giới thiệu
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
                  <h5 className="card-title">Giới thiệu về Hệ thống GD Group:</h5>
                  <p className="text-muted mt-4">
                    <b className='text-danger'>Hệ thống GD Group</b> là một trong những đơn vị tiên phong trong lĩnh vực nghiên cứu, thiết kế, sản xuất và cung ứng trang thiết bị dạy học, phục vụ cho giáo dục từ Mầm non đến Giáo dục Phổ thông, Giáo dục Cao đẳng và Đại học. Sản phẩm của chúng tôi rất đa dạng, đầy đủ với nhiều mẫu mã, chủng loại khác nhau, được sản xuất trong nước và quốc tế bao gồm: Thiết bị nội thất văn phòng, nội thất trường học; Trang thiết bị phòng học và thực hành; Trang thiết bị, đồ dùng đồ chơi Mầm non; Sách tham khảo,... Sau gần 10 năm hoạt động, hiện nay các sản phẩm của GD Group đã có mặt trên toàn quốc. Chúng tôi tin tưởng rằng các sản phẩm mang thương hiệu GD Group sẽ góp phần quan trọng vào sự phát triển toàn diện của trẻ em Việt Nam và sự nghiệp đổi mới giáo dục chung của đất nước.
                  </p>
                  <p className="text-muted mt-1">
                    Chúng tôi nhận thức rõ vai trò và tầm quan trọng của thiết bị giáo dục, trong những năm qua, lãnh đạo và đội ngũ nhân viên GD Group không ngừng phấn đấu tìm tòi, sáng tạo, cải tiến công nghệ, đầu tư cơ sở hạ tầng nhà máy, hiện đại hoá dây chuyền máy móc, trang thiết bị sản xuất, nhằm đa dạng các mẫu mã, sản phẩm đảm bảo chất lượng, có tính giáo dục, thẩm mỹ cho từng sản phẩm và an toàn tuyệt đối cho người lớn, trẻ em; đảm bảo theo các Thông tư và Nghị định của Bộ giáo dục và Đào tạo.                  </p>
                  <p className="text-muted mt-1">
                    <b className='text-danger'>Hệ thống GD Group</b> có đội ngũ chuyên gia, các kỹ sư, kỹ thuật viên và nhân viên giàu nhiệt huyết, trách nhiệm với chuyên môn cao, sẵn sàng phục vụ mọi đối tượng khách hàng. Để nâng cao chất lượng sản phẩm, chất lượng phục vụ, chăm sóc và đảm bảo lợi ích cao nhất cho Quý khách hàng, hệ thống GD Group đã vận hành và áp dụng hệ thống quản lý chất lượng theo tiêu chuẩn <b className='text-danger'>ISO 9001: 2015;</b> Hệ thống quản lý môi trường theo tiêu chuẩn <b className='text-danger'>ISO 14001:2015;</b> Hệ thống quản lý an toàn và sức khoẻ nghề nghiệp<b className='text-danger'>ISO 45001:2018;</b>  Chứng nhận sản phẩm Gỗ ghép thanh bằng keo phù hợp với tiêu chuẩn kỹ thuật quốc gia <b className='text-danger'>TCVN 8575:2010;</b> Chứng nhận về Đồ gỗ nội thất <b className='text-danger'>TCVN 5373:2020</b>.
                  </p>
                  <p className="text-muted mt-1">
                    Thời gian qua <b className='text-danger'>Hệ thống GD Group</b> đã khẳng định được vị thế, lòng tin, sự tín nhiệm và đánh giá cao của các cơ quan chuyên môn, các thầy cô giáo, các bậc phụ huynh và sự yêu thích của học sinh. Cùng với phương châm “Trẻ em hôm nay, thế giới ngày mai” hệ thống chúng tôi sẽ không ngừng sáng tạo, tạo ra các trang thiết bị dạy học hiện đại, hiệu quả và thiết thực, góp phần vào sự nghiệp đổi mới giáo dục nước nhà
                  </p>
                  <p className="text-muted mt-1">
                    Xin chân thành cảm ơn sự quan tâm và tín nhiệm của Quý khách đối với các sản phẩm của <b className='text-danger'>Hệ thống GD Group</b>!
                  </p>
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

export default AboutUs
