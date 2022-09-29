<?php

namespace App\Http\Controllers;

use Validator;
use App\Models\Employee;
use Illuminate\Http\Request;
use App\Http\Requests\EmployeeUpdateRequest;

class EmployeeController extends Controller
{
    public function index()
    {
        $employee = Employee::orderBy('id','desc')->get();
        if(count($employee)>0){
            return response()->json(['status'=>true,'data'=>$employee]);
        }else{
            return response()->json(['status'=>false,'error'=>'Data not found!']);
        }
    }

   
    public function store(Request $request)
    {
        $valid = Validator::make($request->all(),[
           'name' => 'required',
           'email' => 'required|email',
           'mobile' => 'required|integer|digits:10',
           'salary' => 'required|integer',
        ]);


        if(!$valid->passes()){
            return response()->json(['status'=>false,'error'=>$valid->errors()]);
        }else{
            $res =  new Employee;
            $res->name = $request->name;
            $res->email = $request->email;
            $res->mobile = $request->mobile;
            $res->salary = $request->salary;
            if($res->save()){
                return response()->json(['status'=>true,'message'=>'User Added!']);
            }else{
                return response()->json(['status'=>false,'error'=>'User Not Added!']);
            }
        }
    }


    public function show(Request $request)
    {
        // return $request->user_id;
        return response()->json(['status'=>true,'data'=>Employee::find($request->user_id)]);
    }


    public function update(Request $request)
    {
       $valid = Validator::make($request->all(),[
           'name' => 'required',
           'email' => 'required|email',
           'mobile' => 'required|integer|digits:10',
           'salary' => 'required|integer',
        ]);


        if(!$valid->passes()){
            return response()->json(['status'=>false,'error'=>$valid->errors()]);
        }else{
            $res =  Employee::find($request->id);
            $res->name = $request->name;
            $res->email = $request->email;
            $res->mobile = $request->mobile;
            $res->salary = $request->salary;
            if($res->save()){
                return response()->json(['status'=>true,'message'=>'User Updated!']);
            }else{
                return response()->json(['status'=>false,'error'=>'User Not Updated!']);
            }
        }

    
    }


    public function destroy(Request $request)
    {
        $res =  Employee::find($request->id);
        if($res->delete()){
            return response()->json(['status'=>true,'message'=>'User Deleted!']);
        }else{
            return response()->json(['status'=>false,'error'=>'User Not Deleted!']);
        }
    }
}