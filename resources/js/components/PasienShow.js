import axios from 'axios'
import React, { Component } from 'react'
import { Link } from 'react-router-dom'
 
    class PasienShow extends Component {
      constructor (props) {
        super(props)
        this.state = {
          pasien: {}
        }
      }
 
      componentDidMount () {
 
        const pasienId = this.props.match.params.id
 
        axios.get(`/api/pasien/${pasienId}`).then(response => {
          this.setState({
            pasien: response.data
          })
        })
      }
 
      render () {
        const { pasien } = this.state
 
        return (
          <div className='container py-4'>
            <div className='row justify-content-center'>
              <div className='col-md-8'>
                <div className='card'>
                  <div className='card-header'>Nama Pasien : {pasien.namaP}</div>
                  <div className='card-body'>
                    <p>{pasien.ttlP}</p>
                    <p>{pasien.jenisP}</p>
                    <p>{pasien.alamatP}</p>
                    <p>{pasien.noP}</p>
                    <p>{pasien.penyakitP}</p>
                    <Link
                        className='btn btn-success'
                        to={`/`}
                        >Kembali
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )
      }
    }
 
export default PasienShow