<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use App\Http\Requests\LoginRequest;
use Illuminate\Support\Facades\Auth;
use App\Http\Requests\RegistroRequest;

class AuthController extends Controller
{
    /**
     * Register a new user.
     *
     * @param RegistroRequest $request The registration request.
     * @return \Illuminate\Http\JsonResponse
     */
    public function register(RegistroRequest $request) {
        // validar el registro
        $data = $request->validated();

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
        $data = $request->validated();

        //revisar el password
        if(!Auth::attempt($data)) {
            return response([
                'errors' => ['El email o el password son incorrectos']
            ], 422);
        }

        //Autenticar al usuario
        $user = Auth::user();

        return [
            'token' => $user->createToken('token')->plainTextToken
        ];
    }
    public function logout(Request $request) {
        return "desde logout";
    }
}
