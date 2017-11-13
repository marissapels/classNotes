<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Http\Requests;

class AboutController extends Controller
{
    public function index(){
		$first = "Marissa";
		$last="Pels";
		$email="marissapels@gmail.com";

	    return view('about', compact('first', 'last','email'));
    }
}
