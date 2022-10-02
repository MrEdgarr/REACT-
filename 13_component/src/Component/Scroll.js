import React, { Component } from 'react';


function Content(props) {
    return (
        <div className="container px-5">
            <div className="row gx-5 align-items-center">
                <div className="col-lg-6 order-lg-2">
                    <div className="p-5"><img className="img-fluid rounded-circle" src={props.image} alt="..." /></div>
                </div>
                <div className="col-lg-6 order-lg-1">
                    <div className="p-5">
                        <h2 className="display-4">{props.text}</h2>
                        <p>{props.text2}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

class Scroll extends Component {
    constructor(props) {
        super(props);
        this.state = {
            trangthai: 0
        }
    }

    thongbao = () => {
        alert("sjkfghuswiklwgh");
    }
    thongbao2 = (x) => {
        alert(x);
    }

    renderButton = () => {
        return (
            <div class="row">
                <div className="btn btn-group">
                    <div className="btn btn-info" onClick={() => this.editClick()}>
                        edit
                    </div>
                    <div className="btn btn-warning" onClick={() => this.thongbao2("sfsf")}>
                        remove
                    </div>
                    <div className="btn btn-warning" onClick={this.thongbao2.bind(this, "bffbfbfb")}>
                        asd
                    </div>
                </div>
            </div>
        )
    }
    renderForm = () => {
        return (
            <div class="row">
                <div className="form-group">
                    <input ref={(dulieunhap) => {this.trunggian = dulieunhap}} defaultValue = {this.props.text} type="text" className="form-control"></input>

                    <div  className="btn btn-block btn-info" onClick={()=>this.saveClick()}>
                        save
                    </div>
                </div>
            </div>
        )

    }

    displaycheck = () => {
        if (this.state.trangthai === 0) {
            return this.renderButton();
        } else {
            return this.renderForm();
        }
    }

    //STATE

    editClick = () => {
        this.setState({ trangthai: 1 });
    }
    saveClick = () => {
        this.setState({ trangthai: 0 });
        console.log(this.trunggian.value);
    }

    
    render() {
        return (
            // <div>
            //     <Content text="For those about to rock..."
            //         text2="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod aliquid, mollitia odio veniam sit iste esse assumenda amet aperiam exercitationem, ea animi blanditiis recusandae! Ratione voluptatum molestiae adipisci, beatae obcaecati."
            //         image="assets/img/01.jpg" />
            //     <Content text="We salute you!"
            //         text2="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod aliquid, mollitia odio veniam sit iste esse assumenda amet aperiam exercitationem, ea animi blanditiis recusandae! Ratione voluptatum molestiae adipisci, beatae obcaecati."
            //         image="assets/img/02.jpg" />
            //     <Content text="Let there be rock!"
            //         text2="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod aliquid, mollitia odio veniam sit iste esse assumenda amet aperiam exercitationem, ea animi blanditiis recusandae! Ratione voluptatum molestiae adipisci, beatae obcaecati."
            //         image="assets/img/03.jpg" />
            // </div>
            <div>
                <section id="scroll">
                    <div className="container px-5">
                        <div className="row gx-5 align-items-center">
                            <div className="col-lg-6 order-lg-2">
                                <div className="p-5"><img className="img-fluid rounded-circle" src="assets/img/01.jpg" alt="..." /></div>
                            </div>
                            <div className="col-lg-6 order-lg-1">
                                <div className="p-5">
                                    <h2 className="display-4">For those about to rock...</h2>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod aliquid, mollitia odio veniam sit iste esse assumenda amet aperiam exercitationem, ea animi blanditiis recusandae! Ratione voluptatum molestiae adipisci, beatae obcaecati.</p>
                                </div>

                                {this.displaycheck()}

                            </div>
                        </div>
                    </div>
                </section>
                {/* Content section 2*/}
                <section>
                    <div className="container px-5">
                        <div className="row gx-5 align-items-center">
                            <div className="col-lg-6">
                                <div className="p-5"><img className="img-fluid rounded-circle" src="assets/img/02.jpg" alt="..." /></div>
                            </div>
                            <div className="col-lg-6">
                                <div className="p-5">
                                    <h2 className="display-4">We salute you!</h2>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod aliquid, mollitia odio veniam sit iste esse assumenda amet aperiam exercitationem, ea animi blanditiis recusandae! Ratione voluptatum molestiae adipisci, beatae obcaecati.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* Content section 3*/}
                <section>
                    <div className="container px-5">
                        <div className="row gx-5 align-items-center">
                            <div className="col-lg-6 order-lg-2">
                                <div className="p-5"><img className="img-fluid rounded-circle" src="assets/img/03.jpg" alt="..." /></div>
                            </div>
                            <div className="col-lg-6 order-lg-1">
                                <div className="p-5">
                                    <h2 className="display-4">Let there be rock!</h2>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod aliquid, mollitia odio veniam sit iste esse assumenda amet aperiam exercitationem, ea animi blanditiis recusandae! Ratione voluptatum molestiae adipisci, beatae obcaecati.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}

export default Scroll;