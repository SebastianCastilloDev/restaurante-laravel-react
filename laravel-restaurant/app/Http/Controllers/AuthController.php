<?php

namespace App\Http\Controllers;

use App\Http\Requests\LoginRequest;
use App\Http\Requests\RegistroRequest;
use App\Models\User;
use Illuminate\Http\Request;

class AuthController extends Controller
{
    public function register(RegistroRequest $request) {
        // validar el registro
        $data = $request->validate();

        $user = User::create([
            'name' => $data['name'],
            'email' => $data['email'],
            'password' => bcrypt($data['password'])
        ]);

        //devuelve una respuesta
        return [
            'token' => $user->createToken('token')->plainTextToken,
            'user' => $user
        ];
        
    }
    public function login(LoginRequest $request) {
        $request->validated([
            'email'=>['required', 'email', 'exists:users,email'],
            'password'=>['required']
        ]);
    }
    public function logout(Request $request) {
        return "desde logout";
    }
}
