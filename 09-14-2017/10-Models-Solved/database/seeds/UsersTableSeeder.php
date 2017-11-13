<?php

use Illuminate\Database\Seeder;
// equivalent of requiring model for php
use App\User;

class UsersTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        factory(User::class,50)->create();
    }
}
