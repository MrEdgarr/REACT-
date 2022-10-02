import React, { Component } from 'react';
import dl from './Dulieu.json';
import Productsitems from './Productsitems';

class Product extends Component {
    // constructor(props){
    //     super(props);
    // }
    render() {
        return (
            <div>
                <section className="py-5">
                    <div className="container px-4 px-lg-5 mt-5">
                        <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
                            {
                                dl.map((value, key) => {
                                    return (
                                        <Productsitems key={key}
                                            productID={value.id}
                                            anh={value.anh}
                                            tieude={value.tieude}
                                            trichdan={value.trichdan}></Productsitems>
                                    )
                                })
                            }
                        </div>
                    </div>
                </section>

            </div>
        );
    }
}

export default Product;