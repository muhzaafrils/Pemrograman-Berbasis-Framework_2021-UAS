import axios from 'axios'
import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import SweetAlert from 'react-bootstrap-sweetalert';
 
class PasienCreate extends Component {
     
    constructor (props) {
        super(props)
        this.state = {
            namaP: '',
            ttlP: '',
            jenisP: '',
            alamatP: '',
            noP: '',
            penyakitP: '',
            alert: null,
            errors: []
        }
        this.handleFieldChange = this.handleFieldChange.bind(this)
        this.handleCreateNewPasien = this.handleCreateNewPasien.bind(this)
        this.hasErrorFor = this.hasErrorFor.bind(this)
        this.renderErrorFor = this.renderErrorFor.bind(this)
    }
 
    handleFieldChange (event) {
        this.setState({
            [event.target.name]: event.target.value
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
                confirmBtnText="Baik"
                >
                Pasien berhasil ditambahkan!
            </SweetAlert>
        );
        this.setState({
            alert: getAlert()
        });
    }
 
    onSuccess() {
        this.props.history.push('/');
    }
 
    hideAlert() {
        this.setState({
            alert: null
        });
    }
 
    handleCreateNewPasien (event) {
        event.preventDefault()
        const pasien = {
          namaP: this.state.namaP,
          ttlP: this.state.ttlP,
          jenisP: this.state.jenisP,
          alamatP: this.state.alamatP,
          noP: this.state.noP,
          penyakitP: this.state.penyakitP
        }
        axios.post('/api/pasien/store', pasien).then(response => { 
            var msg = response.data.success;
            if(msg == true){
                return this.goToHome();
            }
        })
    }
 
    hasErrorFor (field) {
        return !!this.state.errors[field]
    }
 
    renderErrorFor (field) {
        if (this.hasErrorFor(field)) {
            return (
            <span className='invalid-feedback'>
                <strong>{this.state.errors[field][0]}</strong>
            </span>
            )
        }
    }
 
    render () {
        return (
        <div className='container py-4'>
            <div className='row justify-content-center'>
              <div className='col-md-6'>
                <div className='card'>
                  <div className='card-header'>Tambahkan Pasien</div>
                  <div className='card-body'>
                    <form onSubmit={this.handleCreateNewPasien}>
                      <div className='form-group'>
                        <label htmlFor='namaP'>Nama Pasien</label>
                        <input
                          id='namaP'
                          type='text'
                          className={`form-control ${this.hasErrorFor('namaP') ? 'is-invalid' : ''}`}
                          name='namaP'
                          value={this.state.namaP}
                          onChange={this.handleFieldChange}
                        />
                        {this.renderErrorFor('namaP')}
                      </div>
                      <div className='form-group'>
                        <label htmlFor='ttlP'>Tempat, Tanggal Lahir</label>
                        <input
                          id='ttlP'
                          type='text'
                          className={`form-control ${this.hasErrorFor('ttlP') ? 'is-invalid' : ''}`}
                          name='ttlP'
                          value={this.state.ttlP}
                          onChange={this.handleFieldChange}
                        />
                        {this.renderErrorFor('ttlP')}
                      </div>
                      <div className='form-group'>
                        <label htmlFor='jenisP'>Jenis Kelamin</label>
                        <input
                          id='jenisP'
                          type='text'
                          className={`form-control ${this.hasErrorFor('jenisP') ? 'is-invalid' : ''}`}
                          name='jenisP'
                          value={this.state.jenisP}
                          onChange={this.handleFieldChange}
                        />
                        {this.renderErrorFor('jenisP')}
                      </div>
                      <div className='form-group'>
                        <label htmlFor='alamatP'>Alamat</label>
                        <input
                          id='alamatP'
                          type='text'
                          className={`form-control ${this.hasErrorFor('alamatP') ? 'is-invalid' : ''}`}
                          name='alamatP'
                          value={this.state.alamatP}
                          onChange={this.handleFieldChange}
                        />
                        {this.renderErrorFor('alamatP')}
                      </div>
                      <div className='form-group'>
                        <label htmlFor='noP'>Nomor Telepon</label>
                        <input
                          id='noP'
                          type='text'
                          className={`form-control ${this.hasErrorFor('noP') ? 'is-invalid' : ''}`}
                          name='noP'
                          value={this.state.noP}
                          onChange={this.handleFieldChange}
                        />
                        {this.renderErrorFor('noP')}
                      </div>
                      <div className='form-group'>
                        <label htmlFor='penyakitP'>Penyakit yang diderita</label>
                        <input
                          id='penyakitP'
                          type='text'
                          className={`form-control ${this.hasErrorFor('penyakitP') ? 'is-invalid' : ''}`}
                          name='penyakitP'
                          value={this.state.penyakitP}
                          onChange={this.handleFieldChange}
                        />
                        {this.renderErrorFor('penyakitP')}
                      </div>
                      
                      <Link
                        className='btn btn-success'
                        to={`/`}
                        >Kembali
                      </Link>
                      <button className='btn btn-primary'>Tambahkan</button>
                      {this.state.alert}
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )
    }
}
export default PasienCreate