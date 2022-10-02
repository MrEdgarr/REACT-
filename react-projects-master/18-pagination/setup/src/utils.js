const paginate = (followers) => {
    const itemsPerPage = 8
    const numberOfPages = Math.ceil(followers.length / itemsPerPage)

    // Array.from () tạo một phiên bản mới, được sao chép nông Array từ một đối tượng giống mảng hoặc có thể lặp lại.
    const newFollowers = Array.from({ length: numberOfPages }, (_, index) => {
        const start = index * itemsPerPage
        /*
            // trả về một bản sao ngắn của một phần của mảng thành một đối tượng mảng mới được chọn từ start đến end
            // Mảng ban đầu sẽ không được sửa đổi.
            // slice(start, end)
        */
        return followers.slice(start, start + itemsPerPage)
    })
    return newFollowers
}

export default paginate
