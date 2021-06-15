import axios from 'axios'
import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import SweetAlert from 'react-bootstrap-sweetalert';
 
class PasienIndex extends Component {
     
    constructor () {
        super()
        this.state = {
            pasiens: [],
            msg: null,
            type: null,
            flash:false,
            alert: null,
        }
    }
 
    hideAlert() {
        this.setState({
            alert: null
        });
    }
 
    componentDidMount () {
        axios.get('/api/pasiens').then(response => {
            this.setState({
                pasiens: response.data
            })
        })  
    }
 
    confirmDelete(id){
        const getAlert = () => (
            <SweetAlert
                warning
                showCancel
                confirmBtnText="Hapus"
                cancelBtnText="Batal"
                confirmBtnBsStyle="default"
                cancelBtnBsStyle="danger"
                title="Perhatian!"
                onConfirm={() => this.deleteItem(id)}
                onCancel={() => this.hideAlert()}
                focusCancelBtn
                >
                Pasien akan dihapus, Apakah anda menyetujuinya?.
            </SweetAlert>
        );
        this.setState({
            alert: getAlert()
        });
    }
 
    deleteItem(id) {
        axios.delete(`/api/pasien/delete/${id}`).then(response => {
            var msg = response.data.success;
            if(msg == true){
                this.hideAlert();
                this.goToHome();
            }
        })
    }
 
    goToHome(){
        const getAlert = () => (
            <SweetAlert
                success
                title="Success!"
                onConfirm={() => this.onSuccess() }
                onCancel={this.hideAlert()}
                timeout={2000}
                confirmBtnText="Oke Siap"
                >
                Pasien berhasil dihapus!
            </SweetAlert>
        );
        this.setState({
            alert: getAlert()
        });
    }
 
    onSuccess(){
        this.componentDidMount();
        this.hideAlert();
    }
 
    render () {
        const { pasiens } = this.state
        return (
          <div className='container py-4'>
            <div className='row justify-content-center'>
              <div className='col-md-8'>
                <div className='card'>
                  <div className='card-header'>Daftar Pasien</div>
                  <div className='card-body'>
                    <Link className='btn btn-success btn-sm mb-3' to='/create'>
                      Tambahkan Pasien
                    </Link>
                    <div className="table-responsive">
                        <table className="table table-bordered table-hover">
                            <thead>
                                <tr>
                                    <th width="50" className="text-center">No</th>
                                    <th>Nama Pasien</th>
                                    <th>Alamat</th>
                                    <th width="200" className="text-center">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {pasiens.map((pasien, i) => (
                                <tr key={i}>
                                    <td width="50" className="text-center">{i + 1}</td>
                                    <td>{pasien.namaP}</td>
                                    <td>{pasien.alamatP}</td>
                                    <td width="200" className="text-center">
                                        <div className="btn-group">
                                        <Link
                                            className='btn btn-primary'
                                            to={`/pasien/${pasien.id}`}
                                            >Detail
                                        </Link>
                                        <Link
                                            className='btn btn-success'
                                            to={`/pasien/edit/${pasien.id}`}
                                            >Edit
                                        </Link>
                                        <button
                                            className='btn btn-primary'
                                            onClick={() => this.confirmDelete(pasien.id)}
                                            >Hapus
                                        </button>
                                        </div>
                                    </td>
                                </tr>
                                ))}
                            </tbody>
                        </table>
                        {this.state.alert}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )
    }
}
 
export default PasienIndex