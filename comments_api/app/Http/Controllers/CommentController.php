<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Comment;
use Illuminate\Support\Facades\Auth;

class CommentController extends Controller
{
    public function index()
    {
        // Метод для отображения комментариев на главной странице
    }

    public function store(Request $request)
    {
        $request->validate([
            'text' => 'required',
            'captcha' => 'required',
        ]);

        $comment = new Comment([
            'user_id' => Auth::id(), // Используем текущего авторизованного пользователя
            'text' => $request->input('text'),
            'captcha' => $request->input('captcha'),
        ]);

        $comment->save();

        // Дополнительные действия при сохранении комментария, например, редирект

        return redirect()->route('comments.index');
    }
}

