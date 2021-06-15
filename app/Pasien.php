<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Pasien extends Model
{
    protected $table = "pasiens";
    protected $fillable = ['namaP', 'ttlP', 'jenisP', 'alamatP', 'noP', 'penyakitP'];
}
