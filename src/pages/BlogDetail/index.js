import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

import Footer from '../../components/Footer'
import Navbar from '../../components/Navbar'
import StyleSwitcher from '../../components/StyleSwitcher'
import { bg10, single, logo48, bg02 } from '../../components/imageImport'

const BlogDetail = () => {
  const navigate = useNavigate()
  useEffect(() => {
    window.Tobii()
  }, [])

  return (
    <>
      {/* Navbar */}
      <Navbar />
      <section className="section mt-5">
        <div className="container">
          <div className="row mt-5 mt-lg-0 justify-content-center">
            <div className="col-lg-8">
              <div className="title-heading">
                <h4 className="heading sub-heading fw-bold mb-3">
                  Bộ GD&ĐT xác định 10 nhiệm vụ trọng tâm năm 2023
                </h4>
                <div className="d-flex align-items-center mt-4">
                  <div className="content">
                    <a
                      href=""
                      onClick={e => e.preventDefault()}
                      className="h6 text-dark d-block mb-0"
                    >
                      Người viết: admin lúc 18.07.2023
                    </a>
                    <small className="text-muted mb-0">
                      Tin tức, 8 phút đọc
                    </small>
                  </div>
                </div>
              </div>
            </div>
            {/*end col*/}
            {/*end col*/}

            <div className="col-lg-8 mt-3">
              <p className="text-muted">
                (Chinhphu.vn) - Năm 2023, ngành giáo dục xác định 10 nhiệm vụ trọng tâm. Theo đó, nhiệm vụ đầu tiên là tổng kết 10 năm thực hiện Nghị quyết 29/NQ-TW về đổi mới căn bản, toàn diện giáo dục và đào tạo.
              </p>
              <div className="mt-4">
                <img
                  src={bg10}
                  className="img-fluid rounded-md shadow" width={'100%'}
                  alt=""
                />
              </div>
              <p className="text-muted mt-2">
                Bộ trưởng Bộ GD&ĐT Nguyễn Kim Sơn phát biểu khai mạc Hội nghị tổng kết công tác năm 2022 và triển khai nhiệm vụ năm 2023 của Bộ GD&ĐT - Ảnh: VG/Nhật Nam
              </p>
              <p className="text-muted">
                Chiều 4/1, Bộ Giáo dục và Đào tạo (GD&ĐT) tổ chức Hội nghị tổng kết công tác năm 2022 và triển khai nhiệm vụ năm 2023.
              </p>
              <h5 className="mt-4 mb-0">Một số kết quả nổi bật đã đạt được</h5>

              <p className="text-muted mt-2">
                Phát biểu khai mạc Hội nghị, Bộ trưởng Bộ GD&ĐT Nguyễn Kim Sơn nhận định, năm 2022, toàn ngành triển khai thực hiện hiệu quả Kế hoạch tổng thể của ngành giáo dục thích ứng với tình hình dịch COVID-19. Đến thời điểm tháng 4/2022, 100% các cơ sở giáo dục được mở cửa trở lại và các hoạt động trong nhà trường cơ bản diễn ra bình thường; nỗ lực khắc phục khó khăn trong điều kiện dịch bệnh, bảo đảm tổ chức dạy và học an toàn, chất lượng.
              </p>
              <p className="text-muted mb-0">
                Bộ GD&ĐT đã phối hợp với Bộ Y tế ban hành Kế hoạch phối hợp tăng cường triển khai tiêm vaccine phòng COVID-19 cho trẻ em mầm non, học sinh trong các cơ sở giáo dục. Tham mưu và trình Chính phủ ban hành nhiều gói hỗ trợ nhằm chia sẻ khó khăn và hỗ trợ kịp thời các cơ sở giáo dục, giáo viên và học sinh bị ảnh hưởng bởi dịch COVID-19.              </p>
              <p className="text-muted mt-2">
                Ngành giáo dục tích cực triển khai Chương trình Giáo dục phổ thông 2018. Thẩm định và phê duyệt Chương trình giáo dục tích hợp, danh mục sách giáo khoa lớp 3, lớp 7, lớp 10. Phê duyệt tài liệu giáo dục địa phương lớp 1, lớp 2, lớp 3; sách giáo khoa và tài liệu hướng dạy học tiếng dân tộc thiểu số lớp 1, lớp 2. Hướng dẫn các địa phương tổ chức lựa chọn sách giáo khoa chuẩn bị triển khai năm học 2022-2023.              </p>
              <p className="text-muted mt-2">
                Chất lượng giáo dục đại trà và mũi nhọn tiếp tục được nâng cao. Trong bảng xếp hạng các quốc gia tốt nhất về giáo dục năm 2021 được công bố cuối tháng 4/2022, Việt Nam xếp thứ 59, tăng 5 bậc so với năm 2020. Có 38/38 lượt học sinh tham dự Olympic khu vực và quốc tế đều đoạt giải, trong đó có 13 Huy chương Vàng.              </p>
              <p className="text-muted mt-2">
                Một kết quả phải kể đến là đã tổ chức thành công Kỳ thi tốt nghiệp THPT năm 2022 bảo đảm nghiêm túc, công bằng và an toàn. Tổ chức tuyển sinh đại học, cao đẳng bảo đảm công khai, minh bạch, đáp ứng nhu cầu chính đáng của thí sinh với đột phá về chuyển đổi số.              </p>
              <p className="text-muted mt-2">
                Ngành giáo dục cũng đẩy mạnh chuyển đổi số, tổ chức kết nối, xác thực định danh của học sinh với Cơ sở dữ liệu quốc gia về dân cư. Kết nối thành công Hệ thống phần mềm quản lý thi của Bộ với Cơ sở dữ liệu quốc gia về dân cư, đảm bảo an toàn thông tin và sử dụng ổn định. Hoàn thành tích hợp, công khai Dịch vụ công trực tuyến “Đăng ký xét tuyển trình độ đại học, trình độ cao đẳng ngành giáo dục mầm non năm 2022” trên cổng Dịch vụ công Quốc gia.              </p>
              <p className="text-muted mt-2">
                Tiếp tục triển khai các nhiệm vụ, giải pháp đẩy mạnh tự chủ đại học, đến nay, cả nước có 154/170 cơ sở giáo dục đại học công lập đã thành lập Hội đồng trường và đi vào hoạt động (đạt tỉ lệ 90,6%). Các cơ sở giáo dục đại học Việt Nam tiếp tục được xếp hạng cao và tăng thứ bậc trên các bảng xếp hạng uy tín quốc tế.              </p>
              <p className="text-muted mt-2">
                Về đội ngũ, Bộ GD&ĐT đã phối hợp với Bộ Nội vụ trình các cấp có thẩm quyền quyết định bổ sung 65.980 biên chế giáo viên cho các địa phương giai đoạn 2022-2026; hướng dẫn các địa phương tuyển dụng 27.850 biên chế giáo viên cấp mầm non và phổ thông cho năm học 2022-2023. Trong đó, ưu tiên tuyển dụng giáo viên các môn học mới để thực hiện Chương trình Giáo dục phổ thông 2018 và ưu tiên tuyển dụng giáo viên mầm non cho các cơ sở giáo dục mầm non ở vùng kinh tế-xã hội khó khăn và đặc biệt khó khăn.              </p>
              <p className="text-muted mt-2">
                Một điểm nhấn trong năm 2022 là việc Bộ GD&ĐT tổ chức thành công chuỗi hoạt động, sự kiện nhân kỷ niệm 40 năm ngày Nhà giáo Việt Nam. Đặc biệt, lễ Kỷ niệm 40 năm ngày Nhà giáo Việt Nam đã tạo được những hiệu ứng tích cực từ dư luận, xã hội.              </p>
              <p className="text-muted mt-2">
                Bên cạnh những kết quả đạt được nêu trên, Bộ GD&ĐT cho biết công tác chỉ đạo, điều hành, triển khai các nhiệm vụ của Bộ, của ngành năm 2022 vẫn còn một số tồn tại, hạn chế. Trong đó có việc chất lượng một số nhiệm vụ còn chưa đáp ứng yêu cầu. Tỉ lệ trình ban hành, ban hành văn bản theo thẩm quyền của Bộ năm 2022 vẫn còn thấp. Kinh phí cấp cho Bộ GD&ĐT nói chung và các đơn vị nói riêng ngày càng giảm. Nhiều đơn vị còn thiếu biên chế hoặc có biên chế nhưng chưa tuyển dụng được nhân sự đáp ứng yêu cầu...              </p>
              <h5 className="mt-4 mb-0">10 nhiệm vụ trọng tâm năm 2023</h5>
              <p className="text-muted mt-2">
                Năm 2023, ngành giáo dục xác định 10 nhiệm vụ trọng tâm. Theo đó, nhiệm vụ đầu tiên là tổng kết 10 năm thực hiện Nghị quyết số 29/NQ-TW về đổi mới căn bản, toàn diện giáo dục và đào tạo. Triển khai thực hiện Kế hoạch số 59/KH-GS của Ủy ban thường vụ Quốc hội về Giám sát chuyên đề việc thực hiện Nghị quyết số 88/2014/QH13 và Nghị quyết số 51/2017/QH14 của Quốc hội về đổi mới chương trình, sách giáo khoa giáo dục phổ thông. Triển khai thực hiện Chiến lược phát triển giáo dục giai đoạn 2021-2030, tầm nhìn đến 2045 khi được Thủ tướng Chính phủ phê duyệt.              </p>
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

export default BlogDetail
