<?php

namespace App\Http\Controllers;
use App\Models\Employes;
use Illuminate\Http\Request;

class EmployeController extends Controller
{
    public function all(){
        return Employes::all();
    }

    public function store(Request $Request ){
        $Employe = Employe::cretae([
            'name' => $Request->name,
            'email' =>$Request->email,
            'password' =>$Request->password,

        ]);
        return $Employe;

    }

    
    public function show(Employe $Employe ){
        return $Employe;
    }
    public function update(Request $Request ,Employe $Employe){
        $Employe->update([
            'name' => $Request->name,
            'email' =>$Request->email,
            'password' =>$Request->password,
            'done' =>$Request->done,

        ]);
        return $Employe;

    }

    public function destroy(Employe $Employe){
        $Employe->delete();
        return ['message'=> 'l employé à été supprimé avec succes '];

    }
}
