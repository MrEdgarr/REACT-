import React, { Component } from 'react';
import {  Link} from "react-router-dom";

class Productsitems extends Component {
    constructor(props) {
        super(props);
    }
    ChangeToSlug = (str) => {
        str = str.toLowerCase();

        // xóa dấu
        str = str.replace(/(à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ)/g, 'a');
        str = str.replace(/(è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ)/g, 'e');
        str = str.replace(/(ì|í|ị|ỉ|ĩ)/g, 'i');
        str = str.replace(/(ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ)/g, 'o');
        str = str.replace(/(ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ)/g, 'u');
        str = str.replace(/(ỳ|ý|ỵ|ỷ|ỹ)/g, 'y');
        str = str.replace(/(đ)/g, 'd');

        // Xóa ký tự đặc biệt
        str = str.replace(/([^0-9a-z-\s])/g, '');

        // Xóa khoảng trắng thay bằng ký tự -
        str = str.replace(/(\s+)/g, '-');

        // xóa phần dự - ở đầu
        str = str.replace(/^-+/g, '');

        // xóa phần dư - ở cuối
        str = str.replace(/-+$/g, '');

        // return
        return str;
    }
    render() {
// console.log(this.props);
    return (
        <div className="card h-100">
            {/* Product image*/}
            <img className="card-img-top" src={this.props.anh} alt="React demo" />
            {/* Product details*/}
            <div className="card-body p-4">
                <div className="text-center">
                    {/* Product name*/}
                    <h5 className="fw-bolder">{this.props.tieude}</h5>
                    {/* Product price*/}
                    {this.props.trichdan}
                </div>
            </div>
            {/* Product actions*/}
            <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                <div className="text-center"><Link className="btn btn-outline-dark mt-auto" to={"/product-details/" + this.ChangeToSlug(this.props.tieude) + "." + this.props.productID}>View options</Link></div>
            </div>
        </div>
    );
}
}

export default Productsitems;