<?php

declare(strict_types=1);

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('links', function (Blueprint $table) {
            $table->id();
            $table->string('user_name', 100);
            $table->string('phone_number', 20)->unique();
            $table->string('hash', 150)->unique();
            $table->dateTime('expiration_date');
            $table->boolean('is_active')->default(true);
            $table->timestamps();
        });

        Schema::create('bets', function (Blueprint $table) {
            $table->id();
            $table->foreignId('link_id')->constrained();
            $table->unsignedSmallInteger('dice_result');
            $table->boolean('is_win');
            $table->decimal('amount');

            $table->timestamp('created_at')->nullable();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('bets');
        Schema::dropIfExists('links');
    }
};
