<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class PasienController extends Controller
{
    public function index()
    {
        $pasiens = \App\Pasien::all();

        return $pasiens->toJson();
    }

    public function store(Request $request)
    {
        $validatedData = $request->validate([
            'namaP' => 'required',
            'ttlP' => 'required',
            'jenisP' => 'required',
            'alamatP' => 'required',
            'noP' => 'required',
            'penyakitP' => 'required'
        ]);

        $project = \App\Pasien::create([
            'namaP' => $validatedData['namaP'],
            'ttlP' => $validatedData['ttlP'],
            'jenisP' => $validatedData['jenisP'],
            'alamatP' => $validatedData['alamatP'],
            'noP' => $validatedData['noP'],
            'penyakitP' => $validatedData['penyakitP']
        ]);

        $msg = [
            'success' => true,
            'message' => 'Pasien created successfully!'
        ];

        return response()->json($msg);
    }

    public function getPasien($id) // for edit and show
    {
        $pasien = \App\Pasien::find($id);

        return $pasien->toJson();
    }

    public function update(Request $request, $id)
    {
        $validatedData = $request->validate([
            'namaP' => 'required',
            'ttlP' => 'required',
            'jenisP' => 'required',
            'alamatP' => 'required',
            'noP' => 'required',
            'penyakitP' => 'required'
        ]);

        $pasien = \App\Pasien::find($id);
        $pasien->namaP = $validatedData['namaP'];
        $pasien->ttlP = $validatedData['ttlP'];
        $pasien->jenisP = $validatedData['jenisP'];
        $pasien->alamatP = $validatedData['alamatP'];
        $pasien->noP = $validatedData['noP'];
        $pasien->penyakitP = $validatedData['penyakitP'];
        $pasien->save();

        $msg = [
            'success' => true,
            'message' => 'Pasien updated successfully'
        ];

        return response()->json($msg);
    }

    public function delete($id)
    {
        $pasien = \App\Pasien::find($id);
        if (!empty($pasien)) {
            $pasien->delete();
            $msg = [
                'success' => true,
                'message' => 'Pasien deleted successfully!'
            ];
            return response()->json($msg);
        } else {
            $msg = [
                'success' => false,
                'message' => 'Pasien deleted failed!'
            ];
            return response()->json($msg);
        }
    }
}
