export default function Footer() {
  return (
    <footer className='bg-neutral-100 py-16'>
      <div className='container'>
        <div className='grid grid-cols-1 gap-4 lg:grid-cols-3'>
          <div className='lg:col-span-1'>
            <div>© 2023 VTECHSTORE. Tất cả các quyền được bảo lưu.</div>
          </div>
          <div className='lg:col-span-2'>
            <div>
              Quốc gia & Khu vực: Singapore Indonesia Đài Loan Thái Lan Malaysia Việt Nam Philippines Brazil México
              Colombia Chile Poland
            </div>
          </div>
        </div>
        <div className='mt-10 text-center text-sm'>
          <div>Công ty TNHH VTECHSTORE</div>
          <div className='mt-6'>
            Địa chỉ: 54 Nguyễn Lương Bằng, phường Hòa Khánh, quận Liên Chiểu, thành phố Đà Nẵng
          </div>
          <div className='mt-2'>Chịu Trách Nhiệm Quản Lý Nội Dung: Nguyễn Nhật Quân - Điện thoại liên hệ:</div>
          <div className='mt-2'>Mã số doanh nghiệp: 11111111111</div>
          <div className='mt-2'>© 2023 - Bản quyền thuộc về Công ty TNHH VTECHSTORE</div>
        </div>
      </div>
    </footer>
  )
}
