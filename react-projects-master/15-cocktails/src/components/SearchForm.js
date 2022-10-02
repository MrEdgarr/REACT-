import React from 'react'
import { useGlobalContext } from '../context'

const SearchForm = () => {
  const { setSearchTerm } = useGlobalContext();

  /*
      useRef Hook cho phép bạn duy trì các giá trị giữa các lần hiển thị .
      Nó có thể được sử dụng để lưu trữ một giá trị có thể thay đổi mà không gây ra kết xuất lại khi được cập nhật.
      Nó có thể được sử dụng để truy cập trực tiếp vào một phần tử DOM. (.current.focus())
  */
  const searchValue = React.useRef('');

  React.useEffect(() => {
    searchValue.current.focus(); //đặt tiêu điểm vào phần tử sẽ nhận bàn phím và các sự kiện 
  }, [])


  const searchCocktail = () => {
    setSearchTerm(searchValue.current.value) // Lấy dữ liệu form
  }

  const handleSubmit = (e) => {
    e.prevenDefault();
  }
  return (
    <section className='section search'>
      <form className='search-form' onSubmit={handleSubmit}>
        <div className='form-control'>
          <label htmlFor='name'>search your favorrit cocktail</label>
          <input
            type="text"
            id='name'
            ref={searchValue}
            onChange={searchCocktail} />
        </div>
      </form>
    </section>
  )
}

export default SearchForm
