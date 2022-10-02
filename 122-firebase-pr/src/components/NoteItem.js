import React, { Component } from 'react'
import { connect } from 'react-redux'

class NoteItem extends Component {
    twoActionButton = () =>{
        this.props.changeEditStatus();

        // console.log(this.props.note);
        this.props.getEditdata(this.props.note);
    }
    deleteData=()=>{
        this.props.getDeleteData(this.props.note.id);
    }
    render() {
        return (
            <div className="card">
                <div className="card-header" role="tab" id="note1">
                    <div className="row">
                        <div className="col">
                            <h5 className="mb-0">
                                <a data-toggle="collapse" data-parent="#noteList" href={"#number" + this.props.i} aria-expanded="true" aria-controls="noteContent1">
                                    {this.props.noteTitle}
                                </a>
                            </h5>
                        </div>
                        <button type="button" className="btn btn-outline-primary" onClick={() => this.twoActionButton()}>Sua</button>
                        <button type="button" className="btn btn-outline-danger" onClick={() => this.deleteData()}>Xoa</button>
                    </div>


                </div>
                <div id={"number" + this.props.i} className="collapse in" role="tabpanel" aria-labelledby="note1">
                    <div className="card-body">
                        {this.props.noteContent}
                    </div>
                </div>
            </div>
        )
    }
}


const mapStateToProps = (state, ownProps) => {
    return {
        editStatus: state.isEdit
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        changeEditStatus: () => {
            dispatch({
                type: "CHANGE_EDIT_STATUS"
            })
        },
        getEditdata: (editObject) => {
            dispatch({
                type: "GET_EDIT_DATA",
                editObject
            })
        },
        getDeleteData: (deleteID) => {
            dispatch({
                type: "DELETE",
                deleteID
            })
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(NoteItem)