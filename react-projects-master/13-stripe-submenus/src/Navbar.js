import React from 'react'
import logo from './images/logo.svg'
import { FaBars } from 'react-icons/fa'
import { useGlobalContext } from './context'
import sublinks from './data'



const Navbar = () => {
  const { openSidebar, openSubmenu, closeSubmenu } = useGlobalContext();

  /*
  Hiển thị menu con
  Lấy dữ liệu navbar đc trỏ chuột vào
  truyền dữ liệu vào openSubmenu()
  VD: openSubmenu(product, {1, 2})
  */
 
  const displaySubmenu = (e) => {
    const page = e.target.textContent;
    const tempBtn = e.target.getBoundingClientRect();//thức này trả về một DOMRect đối tượng cung cấp thông tin về kích thước của một phần tử và vị trí của nó so với khung nhìn .
    const center = (tempBtn.left + tempBtn.right) / 2;
    const bottom = tempBtn.bottom - 3
    openSubmenu(page, { center, bottom })
  }


  //Kiểm tra event. 
  const handleSubmenu = (e) => {
    if (!e.target.classList.contains('link-btn')) {
      closeSubmenu()
    }
  }

  return (
    <nav className='nav' onMouseOver={handleSubmenu}>
      <div className='nav-center'>
        <div className='nav-header'>
          <img src={logo} className='nav-logo' alt='stripe' />
          <button className='btn toggle-btn' onClick={openSidebar}>
            <FaBars />
          </button>
        </div>
        <ul className='nav-links'>
          {sublinks.map((item, index) => {
            const { page } = item
            return (
              <li key={index}>
                <button className='link-btn' onMouseOver={displaySubmenu}>
                  {page}
                </button>
              </li>
            )
          })}
        </ul>
        <button className='btn signin-btn'>Sign in</button>
      </div>
    </nav>
  )
}

export default Navbar
