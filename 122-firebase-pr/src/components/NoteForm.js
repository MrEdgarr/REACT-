import React, { Component } from 'react';
import { connect } from 'react-redux';


class NoteForm extends Component {
    constructor(props) {
        super(props);

        //Tao state rong de luu du lieu
        this.state = {
            noteTitle: '',
            noteContent: '',
            id: ''
        }
    }


    componentWillMount() { //edit case
        if (this.props.editItem) {
            this.setState({
                noteTitle: this.props.editItem.noteTitle,
                noteContent: this.props.editItem.noteContent,
                id: this.props.editItem.id
            })
        }
    }



    //Xu dung onChange de lay du lieu nguoi dung nhap
    isChange = (event) => {
        //Lay du lieu nhap vao
        const name = event.target.name;
        const value = event.target.value;
        // console.log(name + value);
        this.setState({
            [name]: value
        })
    }

    //Day du lieu vao mang item
    addData = (title, content) => {
        if (this.state.id) { //edit case
            var editObject = {};
            editObject.id = this.state.id;
            editObject.noteTitle = this.state.noteTitle;
            editObject.noteContent = this.state.noteContent;

            this.props.editDataStore(editObject);
            this.props.changeEditStatus();
        }
        else {
            var item = {};
            item.noteTitle = title;
            item.noteContent = content;
            // //gui item len tren app, de app xu ly
            // // console.log(item);
            // this.props.getData(item);

            this.props.addDataStore(item); // su dung reducer trong store, 
            // console.log(JSON.stringify(item));F
        }

    }

    printTilte = () =>{
        if (this.props.addStatus) {
            return <h4>Them moi</h4>
        }
        return <h4>Sua</h4>
    }

    
    render() {
        return (
            <div className="col-4">
                {this.printTilte()}
                <form>
                    <div className="form-group">
                        <label htmlFor="noteTitle">Tieu de note</label>
                        <input defaultValue={this.props.editItem.noteTitle} onChange={(event) => this.isChange(event)} type="text" className="form-control" name="noteTitle" id="noteTitle" aria-describedby="helpIdNoteTitle" placeholder="Tieu de note" />
                        <small id="helpIdNoteTitle" className="form-text text-muted">Help text</small>
                    </div>
                    <div className="form-group">
                        <label htmlFor="noteContent">Noi dung Note</label>
                        <textarea defaultValue={this.props.editItem.noteContent} onChange={(event) => this.isChange(event)} type="text" className="form-control" name="noteContent" id="noteContent" aria-describedby="helpIdNoteTitle" placeholder="Noi dung note note" />
                        <small id="helpIdNoteTitle" className="form-text text-muted">Help text</small>
                    </div>
                    <button onClick={() => this.addData(this.state.noteTitle, this.state.noteContent)} type="reset" className="btn btn-primary">Submit</button>
                </form>
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        editItem: state.editItem,
        addStatus: state.isAdd
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        addDataStore: (getItem) => {
            dispatch({ type: 'ADD_DATA', getItem })
        },
        editDataStore: (getItem) => {
            dispatch({ type: 'SET_EDIT', getItem })
        },
        changeEditStatus: () => {
            dispatch({
                type: "CHANGE_EDIT_STATUS"
            })
        }
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(NoteForm);